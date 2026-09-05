# Tool-Cluster SEO Strategy — "Proof-Led Cluster Engine"

**Project:** TryAgentik AI (tryagentikai.com)
**Date:** 2026-07-13
**Owner:** Aditya Pandey / Agentic AI Labs
**Status:** Draft for approval — Phase 1 pending sign-off

---

## 0. One-line thesis

Rank for **bottom- and mid-funnel** searches where a business owner already knows their problem and is hunting for a tool or a done-for-you build — then convert them with pages backed by **real systems we've actually shipped**. LLMs are a credibility spec on every page, never a ranking target. Tools we haven't built are deferred, not faked.

Named: **Proof-Led Cluster Engine** — every page is anchored to a system we can demonstrate, so it survives Google's helpful-content bar and out-converts template clones.

---

## 1. Why this direction (evidence trail)

- **Competitor report (v2, 2026-07-10):** 20 agencies; Voice AI only 35% coverage, AI SDR only 10% — structural whitespace in voice/SDR. Competitors win on location + service pages + FAQ/case-study schema.
- **Upwork demand validation (2026-07-13):** GoHighLevel is the single biggest live build-demand pool (365 hourly + 218 fixed). Trades/home-services demand real and immediate. Industrial/freight/distribution is quiet, NOT whitespace — buyers there aren't searching for AI, so content/SEO can't reach them. Decision: compete where demand + search behavior already exist (tools + trades), not in unvalidated industrial.
- **Strategic calls made with client:**
  - Two content pillars: (1) high-demand vertical/service pages, (2) tool-based pages.
  - Tool pages ranked by **buyer-audience overlap**, not raw popularity.
  - **Failed-DIY funnel** is the key wedge: SMBs try to self-build with n8n/Zapier, fail in production, then search for help. Capture the handoff moment, not the tutorial.
  - Wedge on every page: *"we're not the tool — we're the team that makes it production-grade."*

---

## 2. The 4-axis model

### Axis A — Clusters (tool-based, the ranking targets)

| Cluster | Tools | Role |
|---|---|---|
| **GHL** | GoHighLevel (hub) | Biggest validated demand; 5 pages already live |
| **Tools** | n8n, Zapier, Make, Lindy | Workflow automation; n8n = best buyer-fit, Zapier/Make = handoff-only |
| **Voice** | ElevenLabs, Vapi, Retell, Bland, smallest.ai, Synthflow (+ components: Deepgram, Cartesia, PlayHT) | Our core wedge; 3 pages already live |
| **Social-DM** | Meta APIs, WhatsApp API, OS.1 (in-house), GHL | Promoted to own cluster; OS.1 interlinked on every page here |

### Axis B — LLM layer (SPEC across all pages, NOT a keyword cluster)

- Claude (Claude Code; models: Opus 4.8, Sonnet, Fable, Haiku)
- ChatGPT (Codex + latest models)
- **Rule:** appears as a credibility spec on pages ("powered by Claude Opus 4.8 / GPT Codex"). NOT built as standalone ranking pages — those SERPs are owned by the vendors + content farms; unrankable for a young domain. Trust signal only.

### Axis C — Capabilities (built systems = proof pages)

1. Content pipeline — news curate → auto-post FB/IG/LinkedIn/Threads
2. Cold email drip — capture → AI-written follow-ups → stage progression
3. Facebook automation — DM + comment replies, knowledge base, keyword-triggered links
4. Instagram automation — DM + comment replies, property KB, keyword auto-replies
5. WhatsApp automation — Meta/WhatsApp API text automation
6. Voice lead pipeline — form → instant AI call → post-call summary → follow-up + kill switch
7. Zoom → proposal — transcribe (AssemblyAI) → proposal (LLM) → auto-email via GHL

### Axis D — In-house

- **OS.1** — our Meta/text-based automation tool. Interlinked on every social-DM page as the native engine.

---

## 3. Full permutation space (capability × eligible tool)

★ = client's favored/primary tool for that capability.

| # | Capability | Eligible tools | Base pages |
|---|---|---|---|
| C1 | Content pipeline | n8n★, Make, Zapier, GHL | 4 |
| C2 | Cold email drip | GHL★, n8n, Make, Zapier, Lindy | 5 |
| C3 | Facebook automation | GHL, Meta API, OS.1 | 3 |
| C4 | Instagram automation | GHL, Meta API, OS.1 | 3 |
| C5 | WhatsApp automation | GHL, WhatsApp API, OS.1 | 3 |
| C6 | Voice lead pipeline | GHL, Vapi, Retell, Bland, ElevenLabs, smallest.ai, Synthflow, n8n | 8 |
| C7 | Zoom → proposal | Make★, n8n, Zapier, GHL | 4 |
| | | **Base total** | **30** |

### Multipliers

- **Keyword shapes per base page** (up to 4): `integration/how-to` · `{tool} alternative` · `handoff / "{tool} keeps breaking"` · `done-for-you`. Realistic avg ~2 → **~60 pages**.
- **LLM how-to layer** (deferred): ~15 primary combos × 2 LLMs → **~30 pages**.
- **Full universe ≈ 90–120 potential pages.**

### Keyword-shape intent map

| Shape | Example | Funnel | Priority |
|---|---|---|---|
| `{tool} alternative` | "leadlock ai alternative" | Bottom | High |
| `{tool} vs {tool}` | "retell vs vapi for lead callback" | Bottom | High |
| `done-for-you {capability}` | "done-for-you gohighlevel voice pipeline" | Bottom | High |
| handoff / `{tool} keeps breaking` | "n8n voice agent keeps breaking" | Mid | High (the buying trigger) |
| `{tool} + {tool} for {capability}` | "gohighlevel twilio missed-call setup" | Mid | Med |
| `how to build X in {tool}` | "how to build content pipeline in n8n" | Top | Deferred (authority net; needs hard CTA bridge) |

---

## 4. Existing coverage (do not rebuild)

- **GHL live (5):** ai-voice-agent-for-gohighlevel, gohighlevel-ai-calling-alternative, ghl-ai-chatbot-alternative, best-ai-for-gohighlevel-agencies, ai-sdr-for-ghl-agencies
- **Voice live (3):** vapi-alternative, retell-ai-alternative, bland-ai-alternative
- **Glossary live (9):** what-is-agentic-ai, what-is-an-ai-voice-agent, what-is-an-ai-receptionist, etc.
- **Persona/service live (21):** dental, med-spa, gym, recruiting, real-estate, etc. — the conversion layer these clusters funnel into.

---

## 5. Guardrails (non-negotiable)

1. **Proof or don't publish.** Every page shows the real built system (screenshot, workflow diagram, real result). No thin template clones — Google's helpful-content system devalues the whole set if it smells like doorway pages.
2. **LLM = spec, not cluster.** Never build ChatGPT/Claude ranking pages.
3. **Wedge on every page:** "we build it production-grade" + hard CTA to contact/book.
4. **Internal linking:** every cluster page links up to relevant persona/service page and across to sibling cluster pages. Tool page → capability proof → service page → book a call.
5. **Log every dropped/deferred page** so scope is visible, never silently truncated.

---

## 6. Phasing

### Phase 1 — Proof pages for shipped capabilities (build now)
Only capabilities we've actually built, only on primary + highest-buyer-fit tools. ~20-22 pages. Full list in Section 7.

### Phase 2 — Cluster completion + alternative/handoff shapes
Fill remaining base tool-variants (Zapier/Make/Lindy variants), add `{tool} alternative` + handoff pages across all four clusters. ~25-30 pages.

### Phase 3 — Voice-stack depth + comparison matrix
Full voice-player coverage (smallest.ai, Synthflow, ElevenLabs component page), `{tool} vs {tool}` comparison grid. ~15-20 pages.

### Phase 4 — LLM how-to top-funnel layer (deferred authority net)
"How to build X with n8n/Make" tutorials, each with hard done-for-you CTA bridge. Only after Phases 1-3 rank and domain authority builds. ~30 pages.

---

## 7. PHASE 1 — detailed page list (for approval)

Anchored to the 7 shipped capabilities. Each = one page, primary tool, real proof required. Type maps to existing `ProgrammaticPageData` schema (`type: "integration" | "comparison" | "persona"`).

| # | Slug | Capability | Cluster / tool | Page type | Primary keyword |
|---|---|---|---|---|---|
| 1 | gohighlevel-ai-voice-pipeline | Voice lead pipeline | GHL | integration | gohighlevel ai voice pipeline |
| 2 | gohighlevel-speed-to-lead-automation | Voice lead pipeline | GHL | integration | gohighlevel speed to lead |
| 3 | vapi-gohighlevel-integration | Voice lead pipeline | Voice/Vapi | integration | vapi gohighlevel integration |
| 4 | retell-gohighlevel-integration | Voice lead pipeline | Voice/Retell | integration | retell ai gohighlevel |
| 5 | gohighlevel-cold-email-automation | Cold email drip | GHL | integration | gohighlevel cold email automation |
| 6 | n8n-gohighlevel-email-pipeline | Cold email drip | Tools/n8n | integration | n8n gohighlevel integration |
| 7 | n8n-content-automation-pipeline | Content pipeline | Tools/n8n | integration | n8n content automation |
| 8 | ai-social-media-content-pipeline | Content pipeline | Tools/n8n | integration | ai social media automation |
| 9 | gohighlevel-facebook-dm-automation | Facebook automation | Social-DM/GHL | integration | gohighlevel facebook automation |
| 10 | facebook-dm-automation-meta-api | Facebook automation | Social-DM/OS.1 | integration | facebook dm automation ai |
| 11 | gohighlevel-instagram-dm-automation | Instagram automation | Social-DM/GHL | integration | instagram dm automation ai |
| 12 | instagram-comment-automation-ai | Instagram automation | Social-DM/OS.1 | integration | instagram comment automation |
| 13 | whatsapp-automation-ai | WhatsApp automation | Social-DM/WhatsApp API | integration | whatsapp ai automation |
| 14 | whatsapp-gohighlevel-automation | WhatsApp automation | Social-DM/GHL | integration | whatsapp gohighlevel |
| 15 | zoom-meeting-proposal-automation | Zoom → proposal | Tools/Make | integration | zoom meeting automation ai |
| 16 | make-zoom-proposal-automation | Zoom → proposal | Tools/Make | integration | make.com zoom automation |
| 17 | ai-appointment-booking-voice-agent | Voice lead pipeline | Voice/GHL | integration | ai appointment booking agent |
| 18 | os1-meta-automation | Social-DM (in-house) | Social-DM/OS.1 | persona | os.1 meta automation |
| 19 | done-for-you-gohighlevel-automation | (cross-capability) | GHL | persona | done for you gohighlevel |
| 20 | n8n-automation-keeps-breaking | (handoff, all Tools) | Tools/n8n | comparison | n8n automation not working |
| 21 | bland-ai-outbound-pipeline | Voice lead pipeline | Voice/Bland | integration | bland ai outbound calling |
| 22 | elevenlabs-voice-agent-production | Voice component | Voice/ElevenLabs | comparison | elevenlabs voice agent |

**LLM spec baked into every Phase-1 page** (not separate pages): "built with Claude Opus 4.8 / GPT Codex."
**OS.1 interlinked** on pages 9-14, 18.

### Explicitly deferred from Phase 1 (logged, not dropped)
- All Zapier / Lindy tool-variants (C1, C2) → Phase 2
- smallest.ai, Synthflow, Cartesia, Deepgram, PlayHT voice pages → Phase 3
- All `how to build X with {LLM}` tutorials → Phase 4
- `{tool} vs {tool}` comparison grid → Phase 3

---

## 8. Success metric

Not traffic volume. **Qualified bottom-funnel conversions** (book-a-call from a cluster page) + rankings on `{tool} + {capability}` and handoff keywords. A page that ranks but doesn't bridge to a booking is a failure regardless of traffic.

---

## 9. PILOT EXECUTION PIPELINE (approved scope: 1 page per cluster)

**Pilot pages (4):**
| # | Slug | Cluster | Proof system |
|---|---|---|---|
| P1 | gohighlevel-ai-voice-pipeline | GHL | VoicePipelineDrip |
| P2 | n8n-content-automation-pipeline | Tools | ContentAutomation |
| P3 | vapi-gohighlevel-integration | Voice | VoicePipelineDrip (Vapi angle) |
| P4 | gohighlevel-instagram-dm-automation | Social-DM | Instagram automation + OS.1 interlink |

Scale rule: pipeline is slug-parameterized — scaling = longer slug list, zero redesign.

### Stage 0 — One-time assets (built once, reused for all future pages)
1. **`copy-style-brief.md`** (~150 lines) — distilled from the 26-file content-writing corpus at `agentic workflow practice/.cursor/rules/content writing/` (3,453 lines). Captures: ICP (founders/builders + SMB owners), leverage-not-loss framing, hook-first structure, one-idea-per-line scannability, no FOMO/hype, awareness-level matching. Agents load the brief, never the corpus → ~95% token cut on writing context.
2. **`research-schema.json`** — fixed structured output every research agent returns: `insights[]`, `stats[] (value+source+url)`, `quotes[] (verbatim+attribution)`, `competitor_angles[]`, `keywords_seen[]`. No prose dumps between agents.
3. **`visual-manifest-schema.json`** — fixed shape for Stage 1.5 visual returns: `shots[] (type: clip|screenshot|frame, source_url, timestamp, claim_it_proves, local_path)`.

### Stage 1 — Research fan-out (parallel, 4 agents per page, low effort, capped)
| Agent | Source | Method | Deliverable |
|---|---|---|---|
| R1 | Hacker News | Algolia API (`hn.algolia.com/api/v1/search`) — free JSON, no scraping | practitioner pain quotes, failure stories |
| R2 | Google | WebSearch | SERP gap check, stats, People-Also-Ask angles |
| R3 | Techmeme | WebFetch techmeme.com | industry signal / news angle for `industrySignal` block |
| R4 | YouTube | `youtube_transcribe.py` (from `agentic workflow practice/`) on 1-2 top-ranked videos for the topic | transcript → unique insights competitors' pages don't have |

Output: `Upwork Research/page-research/{slug}.json` (research-schema). Cached — never re-fetched on rerun.

### Stage 1.5 — Visual extraction (parallel with Stage 2 writing; per broll-extraction SOP v1.1)
Source of truth: `AI video editing (hyperframe new)/editing SOPs/capabilities/broll-extraction.md`.
- **Video clips:** yt-dlp `--download-sections "*START-END"` — never full downloads; ≤20s segments; demo money-shots from official channels (GHL, n8n, Vapi, Meta) showing the exact workflow the page describes.
- **Screenshots:** headless-Chrome narrow-viewport (600-820px) captures — crisp, mobile-legible; frame-check each (bot-walls, cookie overlays, paywalls → swap source).
- **Frames:** `ffmpeg -ss T -vframes 1` stills from extracted clips where a single frame proves the claim.
- **Own-system proof (priority #1):** client-supplied screenshots/recordings of the real built systems (VoicePipelineDrip, ContentAutomation, IG automation) — these outrank ANY external b-roll; external shots only fill gaps.
- **Copyright discipline (web pages are commercial, stricter than reels):** own systems ✅ · official vendor demo screenshots for integration-proof ⚠️ credited · news footage ❌ · stock-from-YouTube ❌.
- Output: `public/images/pseo/{slug}/` + `visual-manifest.json` per page mapping every asset → the claim it proves. Asset with no claim = cut.

### Stage 2 — Synthesis + copy (1 agent per page)
Inputs: research JSON + copy-style-brief + client proof data + `ProgrammaticPageData` schema. Output: complete page object (hero, pain, costCallout, real practitionerQuote from R1, layers, howItWorks, FAQ, keywords) ready for `programmaticSeoPages.ts`. LLM spec line baked in; OS.1 interlinked on P4.

### Stage 3 — Verify + wire (main thread)
1. Claim-trace check: every stat/quote in copy maps to research JSON or client proof — no hallucinated numbers.
2. Visual-manifest check: every image on page proves a claim; alt text + file size (<200KB WebP) pass.
3. Insert into `programmaticSeoPages.ts` → sitemap auto-picks up → `npm run build` green.

### Token discipline (scaling constraint)
- Research agents: low reasoning effort, structured-output-only, no page dumps to main thread.
- Style corpus: loaded 0× per page (brief instead). B-roll SOP: distilled into the Stage-1.5 agent prompt, not loaded wholesale.
- All research + visuals cached as files; reruns cost ~0.
- Per-page marginal cost after Stage 0: 4 capped research agents + 1 visual agent + 1 writer agent.

---

## 10. PAGE PRODUCTION RULES (MANDATORY — every programmatic page)

These are hard requirements, not preferences. A page that violates any of them is not shippable.

### 10.1 Copy rules
- **NO em dashes (`—`) anywhere in copy. Ever.** Not in titles, headlines, subheadlines, pain points, FAQ, callouts, alt text, image captions, or any rendered string. Replace with a period, comma, colon, semicolon, or parentheses, or restructure the sentence. This is the single most common AI-writing tell and is banned site-wide. Audit before shipping: `grep "—"` over the page's data block must return zero hits.
- Also avoid the en dash (`–`) in prose; use "to" for ranges in copy ("3 to 5 groups"), though numeric range tables may keep `–` if that is the existing convention.
- Everything else follows `copy-style-brief.md`: leverage-not-loss framing, hook-first, one idea per line, no FOMO, no hype filler.

### 10.2 Infographics are MANDATORY in every section
Every section must carry a real infographic, not just text. "Real infographic" = an animated/visual data element, not a stock photo and not plain prose. Minimum per section:

| Section | Required infographic |
|---|---|
| Hero | Explainer infographic (see 10.3) + 3 animated big-number stats (`proofStats`) + `LogoStrip` of the tools the page targets |
| Problem | `costCallout` with animated numbers + `ComparisonBars` (a before/after or us-vs-them bar chart) |
| Status quo | `statusQuoBars` (coverage/capability comparison chart) |
| Market signal | Single big-number callout (`industrySignal.stat` + `statLabel`) |
| Solution / layers | Node-and-connector timeline (numbered `NodeNumber` badges + `ConnectorLine` draw-in) |
| Results | `BigStatCards` (big number + label + proof sentence per card) |
| FAQ | Lead-in stat (`faqStat`) |

Reusable components already built for this (all in `src/components/programmatic/`): `AnimatedStat`, `ComparisonBars`, `BigStatCards`, `ConnectorLine`, `NodeNumber`, `LogoStrip`, `HeroFlowExplainer`. Add as many infographics as the section can carry without clutter; when in doubt, add the visual.

### 10.3 Hero section
- The hero MUST lead with the most relevant image OR infographic.
- **Real images are hard to source and usually weaker than an explainer.** Default to building an explainer infographic (`heroSteps` → `HeroFlowExplainer`) that walks through what the system actually does, step by step. Only use a real image when a genuinely strong, rights-clear one exists.
- The hero explainer is itself an infographic and satisfies the "hero must have a visual" requirement.

### 10.4 Images / assets
- Tool/brand logos for the `LogoStrip` are scraped fresh from each vendor's official brand or site (see logos in `public/logos/`). Recolor white-on-dark marks to the site ink (`#0A1128`) for the light background.
- Any real image used must earn its place by proving a claim (per the Stage 1.5 visual manifest); decorative stock that proves nothing is cut.
- Own-system screenshots (the real built workflow) are the highest-value asset and outrank any external image.

### 10.5 Animation reliability (implementation note)
- Framer Motion's declarative `whileInView` prop was found to silently no-op in this app's dev environment (stuck at the initial state permanently). **Do NOT use `whileInView` for scroll reveals.** Every scroll-triggered animation must use the imperative `useInView` + `animate()` pattern (as in `AnimatedStat`, `ComparisonBars`, `ConnectorLine`, `NodeNumber`, `BigStatCards`, `HeroFlowExplainer`).
- `AnimatedStat` animates the first number in a string, so only apply it to clean `number + label` pairs (proofStats, costCallout items). Never wrap multi-number prose sentences (it would count the wrong number).
