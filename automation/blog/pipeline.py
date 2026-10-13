#!/usr/bin/env python3
"""Daily blog pipeline: scout -> verify -> pick -> write -> images -> validate -> publish -> alert.

Stdlib only. Run: python3 automation/blog/pipeline.py --lane sg [--status Private|Public] [--dry-run]
Prompts/seeds/stores live in private-src/ (gitignored; encrypted copies in private/ for CI).
"""
import argparse, base64, csv, datetime as dt, glob, html, json, os, re, subprocess, sys, tempfile, time
import urllib.error, urllib.parse, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
PRIV = os.path.join(HERE, "private-src")
SITE = "https://www.tryagentikai.com"
BLOG_DB = "23fb34d6b4d480c6aa14e4326b1d1725"
AUTHOR_ID = "3032e2ee-aa81-41b6-96b1-fc652385bc3f"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129 Safari/537.36"
CHROME = os.environ.get("CHROME_BIN", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")
ENV_DIR = os.environ.get("ENV_DIR", os.path.abspath(os.path.join(HERE, "../../..")))
OUT_ROOT = os.environ.get("OUT_DIR", os.path.abspath(os.path.join(HERE, "../../website changes/⚙️ Blog Automation SOP/outputs")))
SOP_DIR = os.path.abspath(os.path.join(HERE, "../../website changes"))
COST = {"openrouter": 0.0}
CAP_USD = float(os.environ.get("OPENROUTER_CAP_USD", "0.50"))


class StepError(Exception):
    def __init__(self, step, msg):
        super().__init__(f"{step}: {msg}")
        self.step = step


def load_env():
    """Local runs read the env files outside the repo; CI passes real env vars."""
    for f in [".env.openrouter", ".env.telegram", ".env.dataforseo", ".env.clarity", "agentic-labs/.env.local"]:
        p = os.path.join(ENV_DIR, f)
        if not os.path.exists(p):
            continue
        for line in open(p):
            m = re.match(r"\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)", line)
            if m and not os.environ.get(m[1]):
                os.environ[m[1]] = m[2].strip().strip('"').strip("'")


# ---------- http helpers ----------
def http(url, data=None, headers=None, method=None, timeout=120):
    body = json.dumps(data).encode() if isinstance(data, (dict, list)) else data
    h = {"User-Agent": UA, **(headers or {})}
    if isinstance(data, (dict, list)):
        h.setdefault("Content-Type", "application/json")
    req = urllib.request.Request(url, data=body, headers=h, method=method or ("POST" if body is not None else "GET"))
    with urllib.request.urlopen(req, timeout=timeout) as r:
        raw = r.read()
    try:
        return json.loads(raw)
    except ValueError:
        return raw.decode("utf-8", "replace")


def status_of(url):
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA}, method="GET")
        with urllib.request.urlopen(req, timeout=20) as r:
            return r.status
    except urllib.error.HTTPError as e:
        return e.code
    except Exception:
        return 0


def llm(model, system, user, max_tokens=4000, temperature=0.4, reasoning=None, fast=True):
    if COST["openrouter"] >= CAP_USD:
        raise StepError("cost-cap", f"OpenRouter spend ${COST['openrouter']:.3f} hit cap ${CAP_USD}")
    for attempt in range(3):
        try:
            r = http("https://openrouter.ai/api/v1/chat/completions", {
                "model": model, "max_tokens": max_tokens, "temperature": temperature,
                "usage": {"include": True}, **({"provider": {"sort": "throughput"}} if fast and "deepseek" in model else {}), **({"reasoning": reasoning} if reasoning else {}),
                "messages": [{"role": "system", "content": system}, {"role": "user", "content": user}],
            }, {"Authorization": "Bearer " + os.environ["OPENROUTER_API_KEY"],
                "HTTP-Referer": SITE, "X-Title": "tryagentikai blog automation"}, timeout=300)
            break
        except urllib.error.HTTPError as e:
            if attempt == 2 or e.code not in (429, 500, 502, 503):
                raise StepError("openrouter", f"{model} HTTP {e.code}: {e.read()[:300]!r}")
            time.sleep(5 * (attempt + 1))
    COST["openrouter"] += float((r.get("usage") or {}).get("cost") or 0)
    choice = r["choices"][0]
    msg = choice["message"]
    text = msg.get("content") or ""
    if (choice.get("finish_reason") == "length" or not text.strip()) and fast:
        # cut off or empty: retry once on default routing with a bigger budget
        return llm(model, system, user, int(max_tokens * 1.5), temperature, reasoning, fast=False)
    return re.sub(r"<think>.*?</think>", "", text, flags=re.S).strip(), r.get("citations") or []


def parse_json(text):
    text = re.sub(r"^```(?:json)?|```$", "", text.strip(), flags=re.M).strip()
    start = min([i for i in (text.find("{"), text.find("[")) if i >= 0], default=-1)
    if start < 0:
        raise ValueError("no JSON in model output")
    return json.JSONDecoder().raw_decode(text[start:])[0]


# ---------- stores ----------
def llm_json(model, system, user, max_tokens, temperature=0.2):
    """JSON steps: retry once with double the budget (reasoning models can truncate the JSON)."""
    for i in range(2):
        text, cites = llm(model, system, user, max_tokens * (i + 1), temperature)
        try:
            return parse_json(text), cites
        except ValueError:
            if i:
                raise StepError(model, "invalid or truncated JSON twice")


def norm_kw(k):
    return re.sub(r"\s+", " ", k.lower().strip())


def keyword_store():
    """Seeded from the DataForSEO data already paid for; live lookups append to keyword-store.json."""
    path = os.path.join(PRIV, "keyword-store.json")
    if os.path.exists(path):
        return json.load(open(path)), path
    store = {}
    cache = os.path.join(SOP_DIR, "SG experiment/02-keyword-research/dataforseo-cache")
    for f in glob.glob(os.path.join(cache, "*.csv")):
        for row in csv.DictReader(open(f)):
            kw = norm_kw(row.get("keyword") or "")
            if not kw:
                continue
            vol = row.get("search_volume") or row.get("vol")
            kd = row.get("keyword_difficulty") or row.get("kd")
            e = store.setdefault(kw, {"loc": "SG", "source": "seed-cache", "fetched_at": "2026-09"})
            if vol not in (None, ""):
                e["volume"] = int(float(vol))
            if kd not in (None, ""):
                e["kd"] = int(float(kd))
    json.dump(store, open(path, "w"), indent=0)
    return store, path


def lookup_kw(store, kw):
    """Exact hit first, else the closest stored keyword sharing most tokens (all tokens >= 2/3 overlap)."""
    kw = norm_kw(kw)
    if kw in store:
        return kw, store[kw]
    toks = set(kw.split())
    best, score = None, 0
    for k in store:
        kt = set(k.split())
        s = len(toks & kt) / max(len(toks | kt), 1)
        if s > score:
            best, score = k, s
    return (best, store[best]) if score >= 0.6 else (None, None)


def site_index():
    xml = http(SITE + "/sitemap.xml")
    locs = re.findall(r"<loc>([^<]+)</loc>", xml)
    if len(locs) < 50:
        raise StepError("sitemap", f"only {len(locs)} URLs, site may be broken")
    return locs


# ---------- step 2: sweep ----------
def sweep(cfg, lane, today):
    L = cfg["lanes"][lane]
    system = ("You are a trend scout. Use live web search. Report only real, dated, verifiable items. "
              "Return ONLY valid JSON, no prose.")
    user = f"""Today is {today}. Market: {L['market']}. Audience: {L['audience']}.

Find what changed, launched, was announced or was reported in the LAST 21 DAYS that affects how this audience gets, answers, follows up or converts customer enquiries, in these areas:
{chr(10).join('- ' + s for s in L['seeds'])}
Official bodies worth checking: {L['regulators']}.

Return JSON: {{"candidates": [{{"angle": "...", "why_now": "one sentence, what changed and when", "target_keyword": "what a business owner would type into Google, lowercase, 2 to 6 words", "reader_problem": "the reader's problem in their own words", "sources": ["url", "..."]}}]}}
Up to 8 candidates. Every candidate needs at least one source dated inside the last 21 days. Prefer official and primary sources (government, the platform itself, the regulator) over vendor blogs and press releases."""
    data, cites = llm_json(cfg["models"]["sweep"], system, user, 3000)
    cands = data.get("candidates", data if isinstance(data, list) else [])
    for c in cands:
        c["sources"] = [cites[int(s.strip("[]")) - 1] if re.fullmatch(r"\[?\d+\]?", str(s)) and int(s.strip("[]")) <= len(cites) else s
                        for s in c.get("sources", [])]
    return cands


# ---------- step 4: pick ----------
GUARDRAILS_C = """Reject a topic if: it does not connect to a reader problem we solve; no money page to link up to; KD out of reach for a low-authority domain (prefer KD under ~30, long-tail, buyer intent); SERP top 10 is all intent we cannot match; it cannibalizes a live post or money page; the only "why now" source is a press release or a vendor blog.
Prefer: fresh SERP (new regulation, platform change, new data) where competitors have no authority yet; topics feeding an existing cluster; topics that can carry one clear infographic."""


def pick(cfg, lane, today, cands, existing_posts):
    L = cfg["lanes"][lane]
    system = "You are the SEO editor for tryagentikai.com. Be strict. Return ONLY valid JSON."
    user = f"""Today is {today}. Lane: {lane} ({L['market']}).

Candidates (with keyword data where we have it; kd/volume null = not yet measured):
{json.dumps(cands, indent=1)}

Our money pages (link targets; choose ONLY from this list):
{chr(10).join(L['money_pages'])}

Existing blog post slugs (do not duplicate or cannibalize):
{', '.join(existing_posts)}

Topic rules:
{GUARDRAILS_C}

Choose exactly ONE candidate, or none if none passes. Verify the why-now with live search and find 3 to 6 primary sources (official pages, the regulator, the platform's own docs) that a careful writer would cite. Do not invent URLs; copy them exactly from your search results.
Then build the FACT PACK: 8 to 15 short, verified facts the writer may use (dates, deadlines, thresholds, who is affected, what the rule requires, official numbers), each tied to one of those source URLs. The writer will be allowed to state ONLY these facts, so make them complete and exact.

Return JSON:
{{"pass": true, "reason": "why this one, why the others lost",
 "target_keyword": "...", "title": "sentence case, under 62 characters, contains the keyword naturally, problem-first, no colon-stacked clickbait",
 "slug": "keyword-led-lowercase-hyphens", "eyebrow": "1 or 2 words, e.g. COMPLIANCE, WHATSAPP, LEADS",
 "summary": "meta description, one sentence, under 155 characters, the reader's words, contains the keyword",
 "reader_problem": "...", "why_now": "what changed, when, per which source",
 "primary_money_page": "url", "money_pages": ["2 to 3 urls"],
 "sources": [{{"label": "Publisher: page title", "url": "..."}}],
 "facts": [{{"fact": "one exact, verified statement", "source_url": "one of the sources above"}}],
 "angle_notes": "3 to 5 bullet-style notes on what the post must cover to beat the current top results"}}
If none passes return {{"pass": false, "reason": "..."}}."""
    return llm_json(cfg["models"]["pick"], system, user, 12000)[0]


def page_text(url, limit=24000):
    """Readable text of an HTML source (tables kept as rows). PDFs/blocked pages return ''."""
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=30) as r:
            if "html" not in (r.headers.get("Content-Type") or ""):
                return ""
            raw = r.read().decode("utf-8", "replace")
    except Exception:
        return ""
    raw = re.sub(r"(?is)<(script|style|nav|footer|header)[^>]*>.*?</\1>", " ", raw)
    raw = re.sub(r"(?i)</(tr|p|li|h\d|div)>", "\n", raw)
    txt = html.unescape(re.sub(r"<[^>]+>", " ", raw))
    return re.sub(r"[ \t]+", " ", re.sub(r"\n\s*\n+", "\n", txt)).strip()[:limit]


def enrich_facts(cfg, brief, log):
    """Read the official sources ourselves and extract facts verbatim, so the fact pack is complete
    (search-model summaries drop rows, e.g. a missing deadline band)."""
    added = []
    for src in brief["sources"]:
        text = page_text(src["url"])
        if len(text) < 500:
            continue
        data, _ = llm_json(cfg["models"]["write"], "Return ONLY valid JSON.", f"""Topic: {brief['title']} (keyword: {brief['target_keyword']}).
From the page text below, extract EVERY fact relevant to this topic: all dates, deadlines, thresholds, phases, every row of any table, who is covered and excluded, requirements, official numbers. Copy wording closely; do not interpret or summarise away detail.
Return {{"facts": ["...", "..."]}}.

PAGE ({src['url']}):
{text}""", 3000)
        for f in data.get("facts", []):
            added.append({"fact": f, "source_url": src["url"]})
    if added:
        brief["facts"] = added + [f for f in brief["facts"] if f["source_url"] not in {a["source_url"] for a in added}]
        brief["facts_enriched"] = True
        log(f"fact pack: {len(added)} facts read directly from {len({a['source_url'] for a in added})} official pages")
    return brief


# ---------- step 5: write ----------
def write_system(ref_post, month_year):
    rules = open(os.path.join(SOP_DIR, "⚙️ Content Engine SOP/modules/01-writing.md")).read()
    return f"""You write blog posts for tryagentikai.com (Agentic AI Labs, Singapore). Author: Aditya Pandey.

VOICE AND RULES (from our Content Engine, obey all):
{rules}

TODAY IS {dt.date.today().strftime("%-d %B %Y")}. Dates before today are in the past: write them as already in force or already happened, never as upcoming.

CONTENT MUST INCLUDE:
- One worked scenario for a typical reader, clearly framed as an example ("Say you run a..."), with no invented statistics.
- One practical "what to do this week" sequence or short checklist the reader can act on.
- Concrete next steps in the reader's world, not abstract explanation. Every section must earn its place; never repeat a point.
- Link to money pages only where the link genuinely helps the reader with the task in that paragraph. Never force a link, never link the same page twice in prose except the closing call to action.
- NEVER write meta commentary about the article or its research ("this article could not confirm", "no prices have been verified"). If a fact is unknown, say plainly what the official pages do and do not state and where to check.

HARD FORMAT (a code validator rejects the post if any is broken):
- Line 1 exactly: By Aditya Pandey, Agentic AI Labs · {month_year} · [@adibuildz](https://x.com/adibuildz)
- No H1. 2 to 3 intro paragraphs opening on a concrete, lived scene of the reader's problem.
- Then the token [[INFOGRAPHIC]] on its own line.
- Then 5 to 6 sections with "## " headings in sentence case (only the first word and proper nouns capitalised).
- Then "## Common questions" with 4 to 5 "### " questions, each followed by one short answer paragraph.
- Then a one-line closing call to action containing a link to the primary money page.
- Then "## Sources" with a one-line intro and a "- [Publisher: title](url)" bullet for each source actually used.
- 1,850 to 2,050 words before "## Sources". Count carefully. Long flowing paragraphs like the reference, few lists.
- 2 to 3 in-prose links to the money pages given, absolute URLs exactly as given, with natural descriptive anchor text.
- ZERO em dashes (—) and ZERO en dashes (–) anywhere. Use commas, full stops, or "to".
- Banned words/phrases: testament to, vital role, crucial role, in today's fast-paced, moreover, furthermore, in conclusion, additionally, it's worth noting, delve, navigate the landscape, unlock, leverage, game-changer, seamless, robust, "not just X, it's Y", "it's not about X, it's about Y", studies show, experts say, research shows.
- FACT PACK RULE: every number, date, deadline, threshold, statistic, regulator claim or "the rule says" statement must come from brief.facts, worded faithfully, with its publisher named in the same paragraph. Anything not in the fact pack stays general (no figures, no dates). ## Sources lists only URLs from brief.sources, copied exactly. Never invent clients, case studies, quotes, prices or stats.
- Regulations: name the regulator correctly and add that this is what the rules require, not legal advice. Research older than 5 years or from another country: say it is directional, not a Singapore benchmark.
- "AI" stays low-key and never in a heading.

STYLE REFERENCE (a published post that passed review; match its voice, rhythm, depth and structure, NOT its topic):
<<<
{ref_post}
>>>

After the article, output a line containing only ===INFOGRAPHIC=== and then ONE JSON object for the in-body infographic, which shows the post's core mechanism as 3 or 4 steps:
{{"eyebrow": "2-4 words caps", "title": "under 55 chars", "subtitle": "under 95 chars", "steps": [{{"title": "under 28 chars", "body": "under 120 chars", "tag": "2-4 words"}}], "note": {{"bold": "under 45 chars", "text": "under 170 chars"}}, "alt": "descriptive alt text naming what the infographic shows, 25 to 45 words"}}
Honest labels only, no invented numbers."""


def write_post(cfg, brief, ref_post, month_year, feedback=None, previous=None):
    user = "TOPIC BRIEF (facts = the fact pack):\n" + json.dumps(brief, indent=1)
    if feedback:
        user += ("\n\nA senior editor rejected your previous draft. Rewrite the whole post so every point below is fixed, "
                 "keep what worked, obey every format rule.\nEDITOR NOTES:\n" + "\n".join("- " + f for f in feedback) +
                 "\n\nPREVIOUS DRAFT:\n" + previous)
    text, _ = llm(cfg["models"]["write"], write_system(ref_post, month_year), user, max_tokens=7000, temperature=0.6)
    parts = re.split(r"^\W*=+\s*INFOGRAPHIC\s*=+\W*$", text, maxsplit=1, flags=re.M)
    md = re.sub(r"^```(?:markdown)?\s*|\s*```\s*$", "", parts[0].strip()).strip()
    if len(md) < 2000:
        raise StepError("write", f"writer returned {len(md)} chars (empty or cut off)")
    try:
        spec = parse_json(parts[1])
    except (IndexError, ValueError):  # writer skipped or broke the spec: ask for it separately (cheap)
        spec, _ = llm_json(cfg["models"]["write"], "Return ONLY valid JSON.",
                           "Create the in-body infographic spec for this article, showing its core mechanism as 3 or 4 steps:\n"
                           '{"eyebrow": "2-4 words caps", "title": "under 55 chars", "subtitle": "under 95 chars", "steps": [{"title": "under 28 chars", "body": "under 120 chars", "tag": "2-4 words"}], "note": {"bold": "under 45 chars", "text": "under 170 chars"}, "alt": "descriptive alt text, 25 to 45 words"}\n'
                           "Honest labels only, no invented numbers.\n\nARTICLE:\n" + md, 1500)
    return md, spec


def fact_check(cfg, md, brief):
    """Cheap model flags any factual claim not supported by the fact pack."""
    system = "You are a fact checker. Return ONLY valid JSON."
    user = f"""FACT PACK (the only facts the article may state):
{json.dumps(brief['facts'], indent=1)}

ARTICLE:
{md.split(chr(10) + '## Sources')[0]}

Go sentence by sentence. Today is {dt.date.today().isoformat()}. Flag every sentence that states a specific fact (number, date, deadline, threshold, statistic, legal requirement, named regulator action, claim about a named organisation) that is NOT supported by the fact pack, or that distorts a fact-pack item (wrong threshold, wrong date, wrong group, past events written as future). Do NOT flag: attributing a fact-pack fact to its publisher ("IRAS says..."), faithful paraphrase, or a correct combination of fact-pack items. Ignore opinions, advice, general descriptions of how businesses work, and illustrative scenes.
Return {{"flags": [{{"sentence": "exact sentence copied from the article", "issue": "why, and what the fact pack actually says if relevant"}}]}}. Empty list if clean."""
    flags = {}
    for model in cfg["models"]["factcheck"]:  # different blind spots: one catches distortions, the other unsupported claims
        reasoning = {"effort": "high"} if "gemini" in model else None
        for i in range(2):
            text, _ = llm(model, system, user, 8000, 0, reasoning)
            try:
                data = parse_json(text)
                break
            except ValueError:
                if i:
                    raise StepError("factcheck", f"{model} invalid JSON twice")
        for f in data.get("flags", []):
            if f.get("sentence"):
                flags.setdefault(f["sentence"].strip(), f)
    return list(flags.values())


def fix_post(cfg, md, brief, issues):
    """One targeted edit pass: model returns exact replacements, code applies them, so the rest stays untouched."""
    wc = body_words(md)
    trim = f"\nWORD COUNT: body is {wc} words, target 1,850 to 2,050. " + (
        f"Cut about {wc - 2000} words by deleting or tightening sentences." if wc > 2100 else
        f"Add about {1900 - wc} words of useful, sourced or practical detail." if wc < 1800 else "OK, keep it in range.")
    system = "You are a precise copy editor. Return ONLY valid JSON."
    user = f"""Fix exactly these problems in the article with minimal edits. Do not touch anything else.
PROBLEMS:
{chr(10).join('- ' + i for i in issues)}{trim}

Rules: no em or en dashes; facts only from the fact pack; keep the voice; keep links intact unless a problem says to remove one.
FACT PACK: {json.dumps(brief['facts'])}
ALLOWED SOURCES: {json.dumps(brief['sources'])}

ARTICLE:
{md}

Return {{"edits": [{{"old": "exact text copied from the article (a full sentence or line)", "new": "replacement text, or empty string to delete"}}]}}"""
    data, _ = llm_json(cfg["models"]["write"], system, user, 6000)
    applied = 0
    for e in data.get("edits", []):
        old = e.get("old") or ""
        if old and old in md:
            md = md.replace(old, e.get("new") or "", 1)
            applied += 1
    md = re.sub(r"\n{3,}", "\n\n", md)
    return md, applied


# ---------- step 6: images ----------
BRAND_CSS = """*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,"SF Pro Display","Helvetica Neue",Inter,Arial,sans-serif;background:#F9F6F4;color:#0A1128;-webkit-font-smoothing:antialiased}
.brand{display:flex;align-items:center;gap:14px;font-weight:700}
.brand i{display:block;background:#FCCA07}
.eyebrow{color:#E4572E;font-weight:700;letter-spacing:.12em;text-transform:uppercase}"""


def render(html_doc, w, h, out, scale=1):
    with tempfile.NamedTemporaryFile("w", suffix=".html", delete=False) as f:
        f.write(html_doc)
    subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", f"--force-device-scale-factor={scale}",
                    f"--window-size={w},{h}", f"--screenshot={out}", "file://" + f.name],
                   check=True, capture_output=True, timeout=60)
    os.unlink(f.name)


def thumbnail(title, eyebrow, out):
    e = html.escape
    size = 64 if len(title) <= 45 else 56
    doc = f"""<html><head><style>{BRAND_CSS}
body{{width:1200px;height:630px;position:relative;overflow:hidden}}
.bar{{position:absolute;left:0;top:0;bottom:0;width:16px;background:#FCCA07}}
.glow{{position:absolute;right:-120px;top:-150px;width:540px;height:540px;border-radius:50%;background:radial-gradient(circle at 40% 30%,#E3E3F7,#F4EEDF 60%,#F9F6F4 75%)}}
.brand{{position:absolute;left:80px;top:72px;font-size:24px}} .brand i{{width:14px;height:14px}}
.eyebrow{{position:absolute;left:80px;top:222px;font-size:20px}}
h1{{position:absolute;left:80px;right:160px;top:266px;font-size:{size}px;line-height:1.12;font-weight:800;letter-spacing:-.02em}}
.by{{position:absolute;left:80px;bottom:72px;font-size:22px;color:#5B6070}} .by b{{color:#0A1128}}
</style></head><body><div class="glow"></div><div class="bar"></div>
<div class="brand"><i></i>Agentic AI Labs</div><div class="eyebrow">{e(eyebrow)}</div><h1>{e(title)}</h1>
<div class="by">By <b>Aditya Pandey</b> · @adibuildz</div></body></html>"""
    render(doc, 1200, 630, out)


def infographic(spec, out):
    e = html.escape
    steps = spec["steps"][:4]
    cards = []
    for i, s in enumerate(steps):
        last = i == len(steps) - 1
        cards.append(f"""<div class="card{' dark' if last else ''}"><div class="lbl">STEP {i+1}</div>
<h3>{e(s['title'])}</h3><p>{e(s['body'])}</p><div class="tag">{e(s.get('tag',''))}</div></div>""")
    flow = '<div class="arrow">→</div>'.join(cards)
    n = spec.get("note") or {}
    doc = f"""<html><head><style>{BRAND_CSS}
body{{width:1000px;height:750px;padding:46px 50px;display:flex;flex-direction:column}}
.top{{display:flex;justify-content:space-between;align-items:center}} .brand{{font-size:16px}} .brand i{{width:12px;height:12px}}
.top .eyebrow{{font-size:13px}}
h1{{font-size:34px;font-weight:800;letter-spacing:-.02em;margin-top:30px}}
.sub{{font-size:16px;color:#5B6070;margin-top:10px}}
.flow{{flex:1;display:flex;align-items:center;gap:10px}}
.card{{flex:1;background:#fff;border:1px solid #E7E1DC;border-radius:16px;padding:22px 16px;text-align:center;min-height:250px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px}}
.card .lbl{{color:#2563EB;font-weight:700;font-size:12px;letter-spacing:.1em}}
.card h3{{font-size:19px;line-height:1.2}} .card p{{font-size:13.5px;line-height:1.5;color:#5B6070}}
.card .tag{{color:#E4572E;font-weight:700;font-size:11.5px;letter-spacing:.08em;text-transform:uppercase}}
.card.dark{{background:#0A1128;border-color:#0A1128;color:#fff}} .card.dark p{{color:#D5D8E2}} .card.dark .lbl,.card.dark .tag{{color:#FCCA07}}
.arrow{{color:#FCCA07;font-size:26px;font-weight:700}}
.note{{background:#E6EEFC;border:1px solid #C9D8F6;border-radius:14px;padding:18px 22px 18px 54px;position:relative;font-size:14.5px;line-height:1.5;color:#1D4ED8}}
.note:before{{content:"";position:absolute;left:22px;top:22px;width:14px;height:14px;background:#2563EB}}
.note b{{color:#0A1128}}
</style></head><body><div class="top"><div class="brand"><i></i>Agentic AI Labs</div><div class="eyebrow">{e(spec.get('eyebrow',''))}</div></div>
<h1>{e(spec['title'])}</h1><div class="sub">{e(spec.get('subtitle',''))}</div>
<div class="flow">{flow}</div>
<div class="note"><b>{e(n.get('bold',''))}</b> {e(n.get('text',''))}</div></body></html>"""
    render(doc, 1000, 750, out, scale=2)


# ---------- step 7: validate ----------
BANNED = ["testament to", "vital role", "crucial role", "in today's fast-paced", "moreover", "furthermore", "in conclusion",
          "additionally,", "it's worth noting", "it is worth noting", "delve", "navigate the landscape", "unlock",
          "game-changer", "game changer", "seamless", "studies show", "experts say", "research shows"]
NEG_PARALLEL = [r"\bleverag(?:e|es|ed|ing) (?:your|the|our|this|these|a|an|ai|data|it)\b", r"\bnot just\b[^.]{0,60}\bit'?s\b", r"\bit'?s not about\b[^.]{0,60}\bit'?s about\b"]
LINK_RE = re.compile(r"\]\((https?://(?:[^()\s]|\([^()\s]*\))+)\)")
EMOJI = re.compile("[\U0001F300-\U0001FAFF☀-➿]")


def body_words(md):
    body = md.split("\n## Sources")[0]
    body = "\n".join(body.splitlines()[1:])  # drop byline
    body = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", body)
    return len(re.findall(r"[A-Za-z0-9][A-Za-z0-9'’.,-]*", body))


def rule_checks(md, brief, month_year, existing_urls):
    fails, warns = [], []
    lines = md.splitlines()
    want = f"By Aditya Pandey, Agentic AI Labs · {month_year} · [@adibuildz](https://x.com/adibuildz)"
    if lines[0].strip() != want:
        fails.append(f"Line 1 must be exactly: {want}")
    if "—" in md or "–" in md:
        fails.append(f"Contains {md.count('—')} em dashes and {md.count('–')} en dashes; remove all")
    if re.search(r"^# ", md, re.M):
        fails.append("Has an H1; remove it")
    pre, _, post = md.partition("\n## Common questions")
    h2 = re.findall(r"^## (.+)$", pre, re.M)
    if not 5 <= len(h2) <= 6:
        fails.append(f"Needs 5 to 6 ## sections before Common questions, has {len(h2)}")
    if not post:
        fails.append("Missing ## Common questions")
    else:
        faq = post.split("\n## Sources")[0]
        q = re.findall(r"^### .+$", faq, re.M)
        if not 4 <= len(q) <= 5:
            fails.append(f"Common questions needs 4 to 5 ### questions, has {len(q)}")
    if "\n## Sources" not in md:
        fails.append("Missing ## Sources")
    if "[[INFOGRAPHIC]]" not in md:
        fails.append("Missing [[INFOGRAPHIC]] token after the intro")
    wc = body_words(md)
    if not 1700 <= wc <= 2300:
        fails.append(f"Word count before Sources is {wc}; must be 1,700 to 2,300")
    for h in re.findall(r"^#{2,3} (.+)$", md, re.M):
        # skip each sentence's first word; brand names alone should not trip this, so need 3+ long words
        words = [w for sent in re.split(r"[.?!:]\s+", h) for w in re.findall(r"[A-Za-z']+", sent)[1:] if len(w) > 3]
        caps = [w for w in words if w[0].isupper()]
        if len(words) >= 3 and len(caps) / len(words) > 0.75:
            fails.append(f"Heading looks Title Case, use sentence case: {h}")
    low = md.lower()
    for b in BANNED:
        if b in low:
            fails.append(f"Banned phrase: '{b}'")
    for p in NEG_PARALLEL:
        if re.search(p, low):
            fails.append(f"Banned pattern: {re.search(p, low)[0]!r} (negative parallelism or 'leverage' as a verb)")
    if EMOJI.search(md):
        fails.append("Emoji in prose")
    sources_part = md.split("\n## Sources", 1)[1] if "\n## Sources" in md else ""
    body = md.split("\n## Sources")[0]
    internal = [u for u in LINK_RE.findall(body) if "tryagentikai.com" in u and "x.com" not in u]
    if not 2 <= len(set(internal)) <= 4:
        fails.append(f"Needs 2 to 3 in-prose links to tryagentikai money pages, has {len(set(internal))}")
    if brief["primary_money_page"] not in internal:
        fails.append(f"Must link to the primary money page {brief['primary_money_page']}")
    for u in set(internal):
        if not u.startswith(SITE + "/"):
            fails.append(f"Internal link must be absolute https://www.tryagentikai.com/...: {u}")
        elif status_of(u) != 200:
            fails.append(f"Internal link not 200: {u}")
    src = LINK_RE.findall(sources_part)
    if not src:
        fails.append("## Sources has no links")
    allowed = {x["url"] for x in brief.get("sources", [])}
    for u in src:
        if u not in allowed:
            fails.append(f"Source not in the fact pack, remove it or the claim it supports: {u}")
    for u in set(src) | {x for x in LINK_RE.findall(body) if "tryagentikai.com" not in x and "x.com/adibuildz" not in x}:
        s = status_of(u)
        if s in (404, 410, 0):
            fails.append(f"Source link broken ({s or 'no response'}): {u}")
        elif s >= 400:
            warns.append(f"Source returned {s} to a bot (often bot-blocking, check by hand): {u}")
    if f"{SITE}/blog/{brief['slug']}/" in existing_urls:
        fails.append(f"Slug already live: {brief['slug']}")
    return fails, warns, wc


JUDGE_B = """Score each 1 to 5 with a one-line reason:
1 Helpful, people-first (Google): would the searcher leave satisfied; does it add something the current top results lack (a real scene, concrete step, local rule, clear decision)?
2 Originality: own angle, examples, structure; not a rephrase.
3 E-E-A-T: real operating experience for this market, authoritative primary sources cited, honest about limits.
4 Strategy fit: matches the lane, links up to the right money page, serves a real funnel stage.
5 Voice: buyer's own words, problem-first, plain, concrete, calm-confident; "AI" low; reads like the reference wave.
6 3-Factor: valuable + emotional (reader feels seen) + engaging enough to finish.
7 Trend legitimacy: the why-now is real and the cited sources support it.
8 No fabrication: no invented clients, testimonials, case studies, stats, prices or quotes; every number sourced."""


def judge(cfg, md, brief, hints=()):
    system = "You are a strict senior editor at a good publication. Return ONLY valid JSON."
    user = f"""Review this blog post against the brief.

{JUDGE_B}

Pass = item 8 >= 4, no item below 3, average >= 3.75. Score like a fair editor at a good trade publication, not a perfectionist.

BRIEF (facts = the verified fact pack): {json.dumps(brief)}

AUTOMATED FACT-CHECK HINTS (may contain false positives; judge them yourself under item 8):
{chr(10).join(hints) or 'none'}

POST:
{md}

Return JSON: {{"pass": bool, "scores": {{"1": n, ..., "8": n}}, "reasons": {{"1": "max 20 words", ...}}, "fix_instructions": ["specific sentence-level edit", "..."] (empty if all scores >= 4)}}"""
    j, _ = llm_json(cfg["models"]["judge"], system, user, 4000, 0)
    scores = {k: int(v) for k, v in j.get("scores", {}).items()}
    # Normalized gate: fabrication (8) must be >= 4; nothing below 3; average >= 3.75.
    j["pass"] = bool(scores) and scores.get("8", 0) >= 4 and min(scores.values()) >= 3 and sum(scores.values()) / len(scores) >= 3.75
    j["scores"] = scores
    fi = j.get("fix_instructions") or []
    j["fix_instructions"] = fi if isinstance(fi, list) else [fi]
    return j


# ---------- step 8: publish (Notion API) ----------
def notion(path, data=None, method=None):
    try:
        return http("https://api.notion.com/v1/" + path, data, {
            "Authorization": "Bearer " + os.environ["NOTION_TOKEN"], "Notion-Version": "2022-06-28"}, method)
    except urllib.error.HTTPError as e:
        raise StepError("notion", f"{path} HTTP {e.code}: {e.read()[:400]!r}")


def notion_upload(png):
    up = notion("file_uploads", {"mode": "single_part", "filename": os.path.basename(png), "content_type": "image/png"})
    boundary = "----agentik" + str(int(time.time() * 1000))
    body = (f"--{boundary}\r\nContent-Disposition: form-data; name=\"file\"; filename=\"{os.path.basename(png)}\"\r\n"
            f"Content-Type: image/png\r\n\r\n").encode() + open(png, "rb").read() + f"\r\n--{boundary}--\r\n".encode()
    try:
        http(f"https://api.notion.com/v1/file_uploads/{up['id']}/send", body, {
            "Authorization": "Bearer " + os.environ["NOTION_TOKEN"], "Notion-Version": "2022-06-28",
            "Content-Type": f"multipart/form-data; boundary={boundary}"})
    except urllib.error.HTTPError as e:
        raise StepError("notion", f"file send HTTP {e.code}: {e.read()[:300]!r}")
    return up["id"]


def rich(text):
    """Inline markdown (links, **bold**) -> Notion rich_text, chunked at 2000 chars."""
    out = []
    for m in re.finditer(r"\[([^\]]+)\]\(((?:[^()\s]|\([^()\s]*\))+)\)|\*\*([^*]+)\*\*|([^\[*]+|[\[*])", text):
        if m[1]:
            seg, ann, link = m[1], {}, m[2]
        elif m[3]:
            seg, ann, link = m[3], {"bold": True}, None
        else:
            seg, ann, link = m[4], {}, None
        for i in range(0, len(seg), 2000):
            t = {"type": "text", "text": {"content": seg[i:i + 2000]}}
            if link:
                t["text"]["link"] = {"url": link}
            if ann:
                t["annotations"] = ann
            out.append(t)
    return out


def md_to_blocks(md, image_id, alt):
    blocks = []
    for para in re.split(r"\n\s*\n", md.strip()):
        for line in para.splitlines() if re.match(r"^(\s*[-*] |\d+\. )", para) else [para.replace("\n", " ")]:
            line = line.strip()
            if not line:
                continue
            if line == "[[INFOGRAPHIC]]":
                blocks.append({"type": "image", "image": {"type": "file_upload", "file_upload": {"id": image_id},
                                                          "caption": rich(alt)}})
                continue
            m = re.match(r"^(#{2,3}) (.+)$", line)
            if m:
                t = "heading_2" if m[1] == "##" else "heading_3"
                blocks.append({"type": t, t: {"rich_text": rich(m[2])}})
            elif re.match(r"^[-*] ", line):
                blocks.append({"type": "bulleted_list_item", "bulleted_list_item": {"rich_text": rich(line[2:])}})
            elif re.match(r"^\d+\. ", line):
                blocks.append({"type": "numbered_list_item", "numbered_list_item": {"rich_text": rich(re.sub(r"^\d+\. ", "", line))}})
            elif line.startswith("> "):
                blocks.append({"type": "quote", "quote": {"rich_text": rich(line[2:])}})
            else:
                blocks.append({"type": "paragraph", "paragraph": {"rich_text": rich(line)}})
    return blocks


def publish(md, brief, thumb, info, alt, status, today):
    old = notion(f"databases/{BLOG_DB}/query", {"filter": {"property": "slug", "rich_text": {"equals": brief["slug"]}}})["results"]
    for o in old:
        if (o["properties"]["status"]["select"] or {}).get("name") != "Private":
            raise StepError("publish", f"slug {brief['slug']} already used by a non-Private page")
        notion(f"pages/{o['id']}", {"archived": True}, "PATCH")  # Notion trash, restorable for 30 days
    thumb_id, info_id = notion_upload(thumb), notion_upload(info)
    blocks = md_to_blocks(md, info_id, alt)
    page = notion("pages", {
        "parent": {"database_id": BLOG_DB},
        "properties": {
            "title": {"title": [{"text": {"content": brief["title"]}}]},
            "slug": {"rich_text": [{"text": {"content": brief["slug"]}}]},
            "summary": {"rich_text": [{"text": {"content": brief["summary"]}}]},
            "status": {"select": {"name": status}},
            "type": {"select": {"name": "Post"}},
            "category": {"select": {"name": "Business"}},
            "author": {"people": [{"id": AUTHOR_ID}]},
            "date": {"date": {"start": today}},
            "thumbnail": {"files": [{"type": "file_upload", "file_upload": {"id": thumb_id}, "name": "thumbnail.png"}]},
        },
        "children": blocks[:100],
    })
    for i in range(100, len(blocks), 100):
        notion(f"blocks/{page['id']}/children", {"children": blocks[i:i + 100]}, "PATCH")
    return page


# ---------- step 8b: indexing ----------
def submit_index(url):
    res = {}
    key = os.environ.get("INDEXNOW_KEY")
    if key:
        try:
            http("https://api.indexnow.org/indexnow", {"host": "www.tryagentikai.com", "key": key,
                 "keyLocation": f"{SITE}/{key}.txt", "urlList": [url, SITE + "/blog/", SITE + "/sitemap.xml"]})
            res["indexnow"] = "ok"
        except urllib.error.HTTPError as e:
            res["indexnow"] = f"HTTP {e.code}"
    else:
        res["indexnow"] = "skipped (no key yet)"
    try:
        tok = google_token("https://www.googleapis.com/auth/webmasters")
        site = urllib.parse.quote("sc-domain:tryagentikai.com", safe="")
        feed = urllib.parse.quote(SITE + "/sitemap.xml", safe="")
        http(f"https://www.googleapis.com/webmasters/v3/sites/{site}/sitemaps/{feed}", b"",
             {"Authorization": "Bearer " + tok}, "PUT")
        res["gsc_sitemap"] = "ok"
    except Exception as e:
        res["gsc_sitemap"] = f"failed: {getattr(e, 'code', '')} {str(e)[:80]}"
    return res


def google_token(scope):
    sa_path = os.environ.get("GOOGLE_SA_FILE", os.path.join(ENV_DIR, ".env.google-sa.json"))
    sa = json.loads(os.environ["GOOGLE_SA_JSON"]) if os.environ.get("GOOGLE_SA_JSON") else json.load(open(sa_path))
    b64 = lambda x: base64.urlsafe_b64encode(x).rstrip(b"=")
    now = int(time.time())
    seg = b64(json.dumps({"alg": "RS256", "typ": "JWT"}).encode()) + b"." + b64(json.dumps({
        "iss": sa["client_email"], "scope": scope, "aud": "https://oauth2.googleapis.com/token", "iat": now, "exp": now + 3600}).encode())
    with tempfile.NamedTemporaryFile("w", delete=False) as k:
        k.write(sa["private_key"])
    try:
        sig = subprocess.run(["openssl", "dgst", "-sha256", "-sign", k.name], input=seg, capture_output=True, check=True).stdout
    finally:
        os.unlink(k.name)
    r = http("https://oauth2.googleapis.com/token", urllib.parse.urlencode({
        "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer", "assertion": (seg + b"." + b64(sig)).decode()}).encode(),
        {"Content-Type": "application/x-www-form-urlencoded"})
    return r["access_token"]


# ---------- alerts ----------
def telegram(text):
    tok, chat = os.environ.get("TELEGRAM_BOT_TOKEN"), os.environ.get("TELEGRAM_CHAT_ID")
    if not (tok and chat):
        print("[telegram not configured]\n" + text)
        return
    try:
        http(f"https://api.telegram.org/bot{tok}/sendMessage",
             {"chat_id": chat, "text": text, "disable_web_page_preview": True})
    except Exception as e:
        print("telegram failed:", e)


def scout(cfg, lane, today, out, used, existing_posts, log):
    log("step 2 sweep")
    cands = sweep(cfg, lane, today)
    with open(os.path.join(PRIV, "topic-store.jsonl"), "a") as f:
        for c in cands:
            f.write(json.dumps({"date": today, "lane": lane, **c}) + "\n")
    cands = [c for c in cands if norm_kw(c.get("target_keyword", "")) not in used and c.get("sources")][:5]
    if not cands:
        raise StepError("sweep", "no usable candidates")
    log("step 3 verify (keyword store; live DataForSEO not enabled)")
    store, _ = keyword_store()
    for c in cands:
        hit, data = lookup_kw(store, c["target_keyword"])
        c["keyword_data"] = {"matched": hit, **(data or {})} if hit else None
    log("step 4 pick")
    brief = pick(cfg, lane, today, cands, existing_posts)
    if not brief.get("pass"):
        raise StepError("pick", "no topic passed: " + brief.get("reason", "")[:300])
    brief["slug"] = re.sub(r"[^a-z0-9-]+", "-", brief["slug"].lower()).strip("-")
    dead = {x["url"] for x in brief.get("sources", []) if status_of(x["url"]) in (0, 404, 410)}
    brief["sources"] = [x for x in brief.get("sources", []) if x["url"] not in dead]
    brief["facts"] = [f for f in brief.get("facts", []) if f.get("source_url") not in dead]
    if dead:
        log(f"dropped {len(dead)} dead source URLs: {sorted(dead)}")
    if len(brief["sources"]) < 2 or len(brief["facts"]) < 5:
        raise StepError("pick", f"fact pack too thin ({len(brief['sources'])} sources, {len(brief['facts'])} facts)")
    brief["money_pages"] = [u for u in brief.get("money_pages", []) if u in cfg["lanes"][lane]["money_pages"]]
    if brief["primary_money_page"] not in cfg["lanes"][lane]["money_pages"]:
        raise StepError("pick", f"primary money page not in our list: {brief['primary_money_page']}")
    brief = enrich_facts(cfg, brief, log)
    dest = os.path.join(out, f"{lane}-{brief['slug']}")
    os.makedirs(dest, exist_ok=True)
    json.dump({"lane": lane, **brief, "candidates": cands, "reel_candidate": "pending"}, open(os.path.join(dest, "topic.json"), "w"), indent=1)
    return brief, cands, dest


# ---------- main ----------
def run(lane, status, dry, brief_path=None, review_on_fail=False, writer=None, slug_suffix=""):
    cfg = json.load(open(os.path.join(PRIV, "config.json")))
    if writer:
        cfg["models"]["write"] = writer
    today = dt.date.today().isoformat()
    month_year = dt.date.today().strftime("%B %Y")
    out = os.path.join(OUT_ROOT, today)
    os.makedirs(out, exist_ok=True)
    log = lambda *a: print(f"[{lane}]", *a, flush=True)

    urls = site_index()
    existing_posts = sorted({u.split("/blog/")[1].strip("/") for u in urls if "/blog/" in u and u.rstrip("/") != SITE + "/blog"})
    ledger = os.path.join(OUT_ROOT, "topics-ledger.csv")
    used = {r["keyword"] for r in csv.DictReader(open(ledger))} if os.path.exists(ledger) else set()

    if brief_path:
        brief = json.load(open(brief_path))
        cands = brief.pop("candidates", [])
        dest = os.path.dirname(os.path.abspath(brief_path))
        log(f"reusing frozen brief: {brief['title']}")
        if not brief.get("facts_enriched"):
            brief = enrich_facts(cfg, brief, log)
            json.dump({**brief, "candidates": cands}, open(brief_path, "w"), indent=1)
        if slug_suffix:
            brief["slug"] += slug_suffix
            dest = os.path.join(dest, slug_suffix.strip("-"))
            os.makedirs(dest, exist_ok=True)
    else:
        brief, cands, dest = scout(cfg, lane, today, out, used, existing_posts, log)
    log("step 5 write")
    ref = open(os.path.join(PRIV, "reference-post.md")).read()
    md, spec = write_post(cfg, brief, ref, month_year)
    attempts, fixes, passed = [], 0, False

    def rules(stage):
        nonlocal md
        md = md.replace("—", ", ").replace("–", " to ")  # deterministic dash cleanup
        fails, warns, wc = rule_checks(md, brief, month_year, urls)
        attempts.append({"stage": stage, "rule_fails": fails, "warnings": warns, "words": wc})
        open(os.path.join(dest, f"draft-{stage}.md"), "w").write(md)
        log(f"{stage}: {len(fails)} rule fails, {wc} words")
        return fails

    def fix_until_rules_pass(stage, extra=()):
        nonlocal md, fixes
        fails = rules(stage)
        for i in range(2):  # code rules are hard; up to 2 cheap targeted passes
            if not fails and not (extra and i == 0):
                break
            md, n = fix_post(cfg, md, brief, fails + list(extra if i == 0 else [])); fixes += 1
            log(f"targeted fix applied {n} edits")
            fails = rules(f"{stage}-fix{i + 1}")
        return fails

    log("step 7 validate: fact check (advisory) + code rules")
    flags = fact_check(cfg, md, brief)
    attempts.append({"stage": "factcheck", "fact_flags": flags})
    hints = [f"Possible unsupported claim: \"{f['sentence']}\" ({f.get('issue','')})" for f in flags]
    log(f"fact check: {len(flags)} flags")
    for round_ in (1, 2):
        fails = fix_until_rules_pass(f"r{round_}", hints if round_ == 1 else ())
        if fails:
            j = {"pass": False, "scores": {}, "fix_instructions": fails}
        else:
            j = judge(cfg, md, brief, hints)
        attempts[-1]["judge"] = j
        log(f"judge round {round_}: {j.get('scores')}")
        if j["pass"]:
            passed = True
            break
        if round_ == 1:
            log("judge rejected: one full rewrite with editor notes")
            md, spec = write_post(cfg, brief, ref, month_year, j["fix_instructions"], md)
    if not passed:
        json.dump(attempts, open(os.path.join(dest, "validation.json"), "w"), indent=1)
        if not (review_on_fail and status == "Private"):
            raise StepError("validate", f"failed after rewrite. judge {j.get('scores')} rule fails {fails[:3]}")
        log("did not pass the gate; publishing as Private for human review")
    json.dump(attempts, open(os.path.join(dest, "validation.json"), "w"), indent=1)
    open(os.path.join(dest, "article.md"), "w").write(md)

    log("step 6 images")
    thumb, info = os.path.join(dest, "thumbnail.png"), os.path.join(dest, "infographic.png")
    thumbnail(brief["title"], brief.get("eyebrow", "GUIDE"), thumb)
    infographic(spec, info)
    json.dump(spec, open(os.path.join(dest, "infographic.json"), "w"), indent=1)

    live = f"{SITE}/blog/{brief['slug']}/"
    page, idx = None, {}
    if dry:
        log("dry run: not publishing")
    else:
        log(f"step 8 publish to Notion (status={status})")
        page = publish(md, brief, thumb, info, spec.get("alt", brief["title"]), status, today)
        if status == "Public":
            time.sleep(20)
            if status_of(live) != 200:
                raise StepError("live-check", f"{live} not 200 after publish")
            idx = submit_index(live)

    with open(ledger, "a", newline="") as f:
        w = csv.writer(f)
        if f.tell() == 0:
            w.writerow(["date", "lane", "slug", "keyword", "volume", "kd", "money_page", "live_url", "status", "reel_status"])
        kd = next((c["keyword_data"] for c in cands if c.get("target_keyword") == brief["target_keyword"] and c.get("keyword_data")), {}) or {}
        w.writerow([today, lane, brief["slug"], brief["target_keyword"], kd.get("volume", ""), kd.get("kd", ""),
                    brief["primary_money_page"], live, status if page else "dry-run", "pending"])

    j = attempts[-1]["judge"]
    kdtxt = f"vol {kd.get('volume','?')} · KD {kd.get('kd','?')} ({kd.get('matched')})" if kd else "no keyword data yet (live DataForSEO off)"
    if not passed:
        head0 = "⚠️ Below quality gate, Private draft for review"
    head = head0 if not passed else "✅ Published" if status == "Public" and page else ("📝 Draft ready for review (Private in Notion)" if page else "🧪 Dry run")
    msg = f"""{head} · {lane.upper()} lane
{brief['title']}
{live if status == 'Public' else (page or {}).get('url', dest)}
Keyword: {brief['target_keyword']} · {kdtxt}
Why now: {brief.get('why_now','')[:220]}
Links up to: {brief['primary_money_page'].replace(SITE, '')}
Words {attempts[-1]['words']} · judge min {min(j['scores'].values()) if j.get('scores') else '?'}/5 · fix passes: {fixes}
Indexing: {', '.join(f'{k} {v}' for k, v in idx.items()) or 'after it goes Public'}
Cost: ${COST['openrouter']:.3f}"""
    if attempts[-1]["warnings"]:
        msg += "\n⚠️ " + "\n⚠️ ".join(attempts[-1]["warnings"][:3])
    telegram(msg)
    log(msg)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--lane", choices=["sg", "global"], required=True)
    ap.add_argument("--status", default="Private", choices=["Private", "Public"])
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--brief", help="reuse a frozen topic.json (skips scouting and picking)")
    ap.add_argument("--writer", help="override the writer model for this run (test comparisons)")
    ap.add_argument("--slug-suffix", default="", help="append to the slug, e.g. for side-by-side test drafts")
    ap.add_argument("--review-on-fail", action="store_true", help="if the gate fails, still publish as Private for human review")
    a = ap.parse_args()
    load_env()
    try:
        run(a.lane, a.status, a.dry_run, a.brief, a.review_on_fail, a.writer, a.slug_suffix)
    except Exception as e:
        step = getattr(e, "step", type(e).__name__)
        telegram(f"❌ Blog automation failed · {a.lane.upper()} lane\nStep: {step}\nError: {str(e)[:500]}\nCost so far: ${COST['openrouter']:.3f}")
        raise


if __name__ == "__main__":
    main()
