# Stage 1: Copy: AI Visibility Checker (v2)

**Status:** v2, awaiting Aditya approval. Rewritten after studying the real AI Visibility Tracker tool we built (the Amplify app) and Aditya's direction. Written per the Content Engine SOP (buyer voice, no dashes, problem first, no fabrication). On approval to Stage 2 (Build Handoff).

## What changed from v1 (read this first)
1. **This is a minimal tool landing page, not a dashboard.** Hero is one centered paste box. Everything below explains, with rich infographics, how the tool works and exactly what it tracks.
2. **Two layers of what we track, stated honestly:**
   - **LIVE NOW = Search and site health.** The tool today is a real SEO auditor. It scores the site on six areas (Technical, Speed, Content, Discoverability, Experience, Authority), gives a health score and grade, and returns a prioritized issue list, each issue with why it matters, how to fix it, and what we found (observed vs should be).
   - **THE HEADLINE VISION = AI answer-engine visibility.** Whether the AI engines name the business when buyers ask. Six engines: **ChatGPT, Perplexity, Google AI, Gemini, Grok, Claude.** This is the promise the product is named for. Present it prominently. See the HONESTY GUARDRAIL before showing any AI result as live.
3. **Six engines, not four.** ChatGPT, Perplexity, Google AI, Gemini, Grok, Claude.
4. **Complex, explanatory infographics are the point of the page.** See the INFOGRAPHIC SPEC. These carry both the how-it-works story and the vision.

## Research inputs (behind this copy)
- **Keyword:** ai visibility checker (KD 5 est.), ai visibility tool (1,600 vol, $60 CPC), ai seo tool (2,400, $34), ai overview checker (260), how to rank in chatgpt (KD 1). Data in `02-keyword-research/`.
- **SERP reality:** the term is crowded. Ahrefs and Semrush own it with huge authority, plus a wave of small tools that all just report a score. **None fix it for you.** The wedge is not "we have a checker", it is "we are the team that makes you show up." Winnable path: the "+ we fix it" angle, niche/geo long tails, and the "how to rank in ChatGPT" blog (KD 1) feeding this page.
- **Voice:** business owner/marketer worried about being found. Their words: show up, get recommended, customers, ChatGPT, competitor.

---

## META
- **Title:** `AI Visibility Checker: See If AI Recommends Your Business | Agentic AI Labs`
- **Description:** `Your buyers ask ChatGPT, Gemini, Perplexity, Grok, and Claude who to hire before they ever call you. Check for free whether you show up, get a full site health audit, and get the team that makes you show up, not just a score.`
- **Keywords (meta only):** ai visibility checker, ai visibility tool, ai seo tool, ai overview checker, chatgpt seo
- **Slug:** `/ai-visibility-checker/` · **H1:** matches the hero headline.

---

## SECTION 1: Hero + the tool (minimal, centered) — v2.1 refined
**Eyebrow:** FREE AI VISIBILITY CHECKER

**Headline with a ROTATING engine word (line 1 dark):** `See if {ENGINE} recommends your business.`
- `{ENGINE}` is an animated slot that cycles through the engines, so the headline is never "only AI". Rotate in this order, one every ~2s: **ChatGPT, Google AI, Perplexity, Gemini, Claude, Grok.**
- The rotating word is the emphasis color (blue-600); the rest of line 1 stays dark navy `#0A1128`.
- Swap with a short fade + slight vertical slide (up/in, down/out). The slot is a fixed-min-width inline container so the line NEVER reflows or jumps as the word changes. Pause rotation on hover/focus and when `prefers-reduced-motion` is set (then show a single static engine, e.g. ChatGPT).
**Headline (line 2 blue → keep dark for contrast):** Or your competitor.
- Note: with the rotating word now carrying the blue, set line 2 "Or your competitor." in dark navy so the hero is not two heavy blue blocks. One accent moment, not two.

**Sub-headline (shortened, de-duplicated):** Buyers ask AI who to hire before they ever call you. We check whether you show up, then audit your whole site for the reasons you do or do not. Free, in about a minute.
- Rationale: the engines are now named in the rotating headline, so drop the long engine list from the sub. Keep the sub to two lines max.

**Tool input (the centerpiece):** one centered input + button, joined as a single group (input flush to the button, shared height, sharp corners). Constrain the group to `max-w-xl` and center it. Placeholder `yourwebsite.com` · button `Check my visibility`.

**Micro trust line under the button:** No signup to see your score. (quiet, muted, small — not competing with the CTA.)

*Layout intent (declutter): generous vertical rhythm, one accent moment (the rotating word), tighter sub, unified input group, quiet trust line. The paste box + the motion graphic (below) are the only visuals above the fold.*

### Hero motion graphic (enhances the story, mobile-first)
A compact, on-brand animated "AI answer" mock that shows the exact problem the tool solves. Place it directly under the input group (stacked on mobile, and on desktop either centered under the input or beside it — whichever keeps the hero calm). Build in code (SVG/CSS/framer-motion), not a video or GIF.

**What it shows:** a small chat-answer card. A buyer question types in at top: `Who should I hire in {your space}?` Then an AI answer lists three result rows that populate in sequence:
1. `A local firm`
2. `A known competitor`
3. `A third name`
...and a fourth, highlighted, empty slot pulses with `Your business?` (dashed outline, yellow accent) — the seat you are missing.

**Optional ambient touch:** the engine name in the card header rotates in sync with the headline word (small logo/name chip: ChatGPT → Google AI → ...), reinforcing "every engine, same blank seat."

**Motion rules (must all hold):**
- Loop is subtle and slow; total cycle ~6 to 8s; ease-in-out; no bounce.
- Respect `prefers-reduced-motion`: render the final static state (three names + the empty highlighted slot), no looping.
- Fully responsive: the card scales down cleanly on mobile (single column, smaller type, same content), never overflows, no horizontal scroll, tap targets unaffected. Test at 375px width.
- Keep it light: pure CSS/SVG transforms, GPU-friendly, no heavy JS timers stacking. Use the imperative framer-motion pattern used elsewhere in the project.

---

## SECTION 2: Scan state (microcopy while it runs)
Show these in sequence as the scan runs. Group them so the user sees both layers being checked.

**AI answer engines:**
- `Asking ChatGPT what it recommends...`
- `Asking Perplexity...`
- `Asking Gemini...`
- `Asking Grok...`
- `Asking Claude...`
- `Checking Google AI Overviews...`

**Search and site health:**
- `Checking where you rank on Google...`
- `Reading your site the way an AI does...`
- `Scoring technical, speed, content, discoverability, experience, authority...`

---

## SECTION 3: Instant result (free teaser, ungated)
**Headline:** Here is where you stand right now.

**Two-number verdict (dynamic, example values shown as examples only):**
- **AI visibility:** `Example: named in 2 of 6 AI answers your buyers see.`
- **Site health:** `Example: 62 of 100. Grade D.`

**Per-engine one-liners (green/red), all six:**
- `ChatGPT: names a competitor, not you`
- `Perplexity: mentions you`
- `Google AI: not showing you`
- `Gemini: not recommending you`
- `Grok: not recommending you`
- `Claude: mentions you`

**Sting line:** For the questions your buyers actually ask, someone else is getting named.

**CTA to unlock:** `See the full report and how to fix it`

---

## SECTION 4: Email gate
**Headline:** Get the full report, and the fixes.
**Sub:** The score is free. The full breakdown of where you are invisible, why, and exactly what to change is in the report. Enter your email and it is yours.
**Field:** `you@company.com` · button `Send my full report`
**Micro:** One email. No spam. Unsubscribe anytime.

---

## SECTION 5: Full report (labels + structure copy)
The report has two parts. Part A is the vision layer (AI answer engines). Part B is the live layer (site health audit). Both use the same visual language.

**Headline:** Your AI visibility report.

### Part A: AI answer-engine visibility
**Sub:** Whether each AI engine names you when a buyer asks who to hire in your space.
**Per engine (all six: ChatGPT, Perplexity, Google AI, Gemini, Grok, Claude):** for each, three things:
1. Does it name you, mention you, or name someone else? (green / amber / red)
2. For which buyer questions.
3. Who it names instead of you.

### Part B: Site health audit (live)
**Sub:** The reasons an AI can or cannot understand and trust your site. This runs today.
**Health score + grade:** big number out of 100 plus a letter grade (example: 62, Grade D).
**Six category scores (each 0 to 100 with a one-line reason):**
- `Technical` (indexing, crawlability, canonical tags, security headers)
- `Speed` (mobile load time, payload size, unused JavaScript)
- `Content` (depth, quality, does it answer buyer questions)
- `Discoverability` (schema, sitemap, structured data)
- `Experience` (mobile usability, layout stability, accessibility)
- `Authority` (backlinks, real-user data, traffic history)

**Prioritized issue list.** Each issue card carries:
- Title (plain English, example: `Services and About pages missing canonical tags`)
- Category · effort (Quick fix / A few hours / Bigger project) · how many pages it affects
- Severity (Critical / High / Medium / Low)
- **Why this matters** (one short paragraph)
- **How to fix it** (numbered steps)
- **What we found** (Observed vs Should be)

**The AEO checklist (why the AI cannot see you), red/green:**
- `llms.txt: missing` (the file that tells AI what your site is)
- `Structured data: incomplete`
- `Clean text version for AI: missing`
- `Crawlable by AI bots: partial`
- `Content that answers buyer questions: thin`

**Read line:** Every red item is a reason an AI skips you and names someone else. Green is where you already win.

---

## SECTION 6: What we track (the transparency infographic)
**Eyebrow:** EXACTLY WHAT WE TRACK

**Copy:**
> Two layers. The foundation is your site health, scored today across six areas the way Google and every AI engine read it. On top of that sits the thing that decides who gets recommended: whether the AI answer engines actually name you.

Then the layered infographic (see INFOGRAPHIC SPEC, item C). It must make both layers legible at a glance and label every dimension.

**Layer 1 label:** Search and site health (live). Technical, Speed, Content, Discoverability, Experience, Authority.
**Layer 2 label:** AI answer-engine visibility. ChatGPT, Perplexity, Google AI, Gemini, Grok, Claude.

**FIX REQUIRED (v2.1): Layer 2 must be a real infographic, not text tiles.**
The current build shows Layer 2 as six bordered text cards ("CHATGPT: Names someone else"). Replace with a graphical treatment that shows visibility at a glance:
- **Primary: an orbital / connection diagram.** A center node = "YOU" (your business). Six engine nodes arranged around it. A connecting link from each engine to the center encodes state: solid green = names you; dashed amber = mentions you; faint red/broken = names someone else. So a glance reads "how many engines actually connect to you."
- **Paired with a share-of-voice meter:** a compact bar or donut = "you appear in 2 of 6, competitors take 4."
- Each engine node carries its name/logo chip; hovering (desktop) or the always-on caption (mobile) shows its state.
- The example data must be rendered THROUGH this graphic (nodes/links animate to their state), clearly labeled EXAMPLE + INCLUDED, ROLLING OUT. No plain text tiles.
- Mobile: the orbital collapses to a vertical list of engine rows, each with a connection-strength indicator (green/amber/red) and the share-of-voice meter on top. Never overflow at 375px.

---

## SECTION 7: How it works (the flow infographic)
**Eyebrow:** HOW THE CHECK WORKS

**Copy (the flow, four steps):**
1. **You paste your website.** One field. No signup for the score.
2. **We ask the AI engines what your buyers ask.** Real discovery questions in your space, put to ChatGPT, Perplexity, Google AI, Gemini, Grok, and Claude.
3. **We audit your whole site.** We read it the way an AI does and score six areas of health, then list every fix in priority order.
4. **You get a score and a plan.** A visibility score and a site health grade in a minute, the full report and fix list in your inbox.

Build as the flow infographic (INFOGRAPHIC SPEC, item B).

**FIX REQUIRED (v2.1): make this a connected TIMELINE, not four separate cards.**
The current build is four detached cards. Turn it into a single horizontal timeline (vertical on mobile): a connecting spine/line runs through the four numbered nodes (01 to 04), so it reads as one journey, not four boxes. The line draws in on scroll and each node reveals in sequence. Keep the per-step content (engine chips at 02, category chips at 03, score at 04) but hang it off the timeline.

---

## SECTION 8: Why this matters (old search vs new search)
**Eyebrow:** WHY THIS IS NOT OPTIONAL ANYMORE

**Copy:**
> Your buyers changed how they shop. They used to Google ten links and choose. Now they ask an AI one question and get one answer, with a few names in it.

> If you are not one of those names, you are not in the running. Not because you are worse. Because the AI never learned you exist.

> This is a new kind of search, and it has a name: getting your business into AI answers, sometimes called answer engine optimization or AI SEO. Most businesses have done nothing about it, which is exactly why the ones who move now get named for years.

Build the old-vs-new-search infographic (INFOGRAPHIC SPEC, item D). *(SEO body: this section carries "ai visibility", "answer engine optimization", "ai seo" naturally.)*

**FIX REQUIRED (v2.1): make the contrast motion-driven and add the missing seat.**
The static two-panel version is fine as a base, but animate the story on scroll: the ten old links fade and recede (muted, shrinking), while the single AI answer card builds in and its three names populate in sequence. Then a fourth, highlighted, EMPTY slot pulses at the bottom of the answer with `Your business?` (dashed outline, yellow accent) — the seat you are missing. Same missing-seat motif as the hero graphic, so the page has one visual idea it repeats. Mobile: stack the two panels, keep the same build sequence, no overflow.

---

## SECTION 9: The fix (primary CTA, the differentiator)
**Eyebrow:** EVERY TOOL TELLS YOU THE SCORE. WE FIX IT.

**Copy:**
> A dozen tools can tell you that you are invisible. That is the easy part. Making an AI actually recommend you is the work, and it is not a setting you flip.

> We are a GTM engineering team. We do the work for you: the technical fixes the report flags, the content that answers what your buyers ask, and the proof that makes an AI trust you enough to name you. You do not learn a tool. We make you show up.

**Primary CTA:** `Get my visibility fixed` → `/ai-clarity-workshop`
**Support:** You are hiring a team, not buying software.

---

## SECTION 10: Proof (dogfood, ChatGPT)
**Eyebrow:** WE RAN THIS ON OURSELVES FIRST

**Copy:**
> We did not start selling this until we had done it to our own site. Ask ChatGPT about getting more customers with AI, and our name comes up.

> If we can get ourselves into the answer in a space this crowded, we can do it for you.

*(Use a real captured ChatGPT screenshot in `assets/` if available; light, alt text. Else a clean styled quote block. No fabricated screenshot.)*

---

## SECTION 11: FAQ (powers FAQPage schema)
1. **Is it free?** Yes. The score is instant with no signup. The full report is free too, in exchange for your email.
2. **Which AI engines do you check?** ChatGPT, Perplexity, Google AI, Gemini, Grok, and Claude, plus Google AI Overviews.
3. **How accurate is it?** We ask the AI engines the same kind of questions your buyers ask and record what they answer, and we audit your live site directly. It reflects what a real buyer would see today.
4. **What is AI visibility?** Whether AI tools name or recommend your business when someone asks. It is becoming the new front page of search.
5. **What is answer engine optimization?** The work of getting your business into those AI answers. Same goal as SEO, new surface.
6. **Why am I not showing up?** Usually the AI cannot read or trust your site yet: missing llms.txt, thin content on what buyers ask, weak structured data, slow pages. The report shows which.
7. **Can I just use a free tool and fix it myself?** You can see the problem with a tool. Fixing it is content, technical work, and proof over time. That is what we do for you.
8. **How long until I show up?** It varies by how crowded your space is and where you start. We scope it honestly after the check.
9. **Do you work with my industry or location?** Yes. The check works for any business; the fix is tailored to your space.

---

## SECTION 12: Final CTA
**Headline:** Find out if AI is recommending you, or your competitor.
**Sub:** Takes a minute. Free score, no signup.
**CTA A:** `Check my visibility` (scrolls to / reopens the tool)
**CTA B:** `Get it fixed for me` → `/ai-clarity-workshop`

---

## INTERNAL LINKS (wire in Stage 2)
- Up to homepage `/`.
- Up to the SEO pillar `/seo-agency-singapore/` (once built) and the AEO pillar `/answer-engine-optimization/` (once built).
- To proof/positioning: `/forward-deployed-engineers/` (once built).
- From: the homepage Free Tools nav, footer, llms.txt, and the AEO blog spokes ("how to rank in ChatGPT").

---

## INFOGRAPHIC SPEC (the complex graphs, this is the heart of the build)
The page must include rich, custom infographics that explain, at a glance, how the tracker works and exactly what it tracks. Build them in code with the design tokens (no stock images). Everything is responsive (test at 375px), and the whole page carries motion (see GLOBAL MOTION below). No infographic may render as plain bordered text tiles; each must be a real graphic.

- **A. Six-engine visibility panel (Sections 3 and 5A).** A grid or radial of the six engines (ChatGPT, Perplexity, Google AI, Gemini, Grok, Claude). Each shows a state: names you (green) / mentions you (amber) / names someone else (red), plus a "named instead" chip. Add a share-of-voice read (you vs competitors across all six). Signature visual. Example data labeled as such.
- **B. How-it-works TIMELINE (Section 7).** NOT four separate cards. One connected timeline: a spine/line runs through four numbered nodes (01 to 04), horizontal on desktop, vertical on mobile. The line draws in on scroll; nodes reveal in sequence. Content hangs off each node: engine chips at 02, category chips at 03, animated score at 04. It must read as one journey.
- **C. Two-layer "what we track" diagram (Section 6).** Two layers with the foundation supporting the outcome (keep the connecting arrow). **Layer 2 (outcome) must be a graphic, not text tiles:** an orbital/connection diagram, center node "YOU" with six engine satellites, each link encoding state (solid green = names you / dashed amber = mentions / faint-broken red = names someone else), paired with a share-of-voice meter (you appear in 2 of 6). Nodes and links animate to state on scroll. **Layer 1 (foundation):** six category tiles (Technical, Speed, Content, Discoverability, Experience, Authority), each with a mini score meter that counts/fills up on reveal. Example data labeled EXAMPLE + INCLUDED, ROLLING OUT on Layer 2. Mobile: orbital collapses to engine rows with a connection-strength indicator.
- **D. Old search vs new search (Section 8).** Two panels, motion-driven: ten old links fade and recede while one AI answer card builds and its three names populate in sequence, then a fourth highlighted EMPTY slot pulses with `Your business?` (dashed, yellow) = the missing seat. Reuse the hero graphic's missing-seat motif so the page repeats one idea.
- **E. Report visual language (Section 5).** Score ring (animates to value) + letter grade, severity counters, six category score bars (fill on reveal), expandable issue cards (Why it matters / How to fix / Observed vs Should be). Structure borrowed from the real tool, restyled to our tokens.
- **F. Hero motion graphic (Section 1).** The animated "AI answer" mock with the pulsing empty seat + rotating engine header chip synced to the headline word. See Section 1.
- All images/exports: WebP/AVIF, light, descriptive alt. Prefer coded SVG/CSS over raster.

## GLOBAL MOTION (applies to the entire page, mobile-first)
Motion is part of this build, not optional polish. Apply consistently across every section:
- **Scroll-triggered reveals** on each section (subtle fade + short slide up), staggered for grouped items (engine tiles, category tiles, timeline nodes, issue rows).
- **Value animations:** score rings animate to their number; category meters fill; counters count up on first reveal.
- **The signature motif:** the pulsing empty "Your business?" seat recurs in the hero graphic (F), the old-vs-new infographic (D), and the orbital (C) as the missing link. One idea, repeated.
- **Implementation:** the project's imperative framer-motion pattern (`useInView` + `animate()` + `ref.current.style.*`); declarative `whileInView` silently fails here. GPU-friendly transforms only; do not stack heavy JS timers.
- **Mobile is a first-class target, not an afterthought:** every animation must run and lay out correctly at 375px, no horizontal scroll, tap targets unaffected, no layout jump from rotating/animating text (reserve space).
- **Accessibility:** honor `prefers-reduced-motion` everywhere — render the final/static state (names shown, meters filled, empty seat visible) with no looping or scroll animation.

---

## SEO NOTES (for Stage 2 + future)
- H1/title/slug carry "AI Visibility Checker". Secondary terms live in Sections 6, 7, 8.
- Head term is contested by Ahrefs/Semrush: pair this page with the "how to rank in ChatGPT" blog (KD 1) and later niche/geo variants to build the cluster. The differentiator ("we fix it") is the conversion and link-earning angle, not just the ranking.

---

## HONESTY GUARDRAIL (hard rule, do not violate)
No fabricated results, ever. Standing project rule.
- **Site health audit (Layer 1) is live.** Real results are fine to show.
- **AI answer-engine results (Layer 2) show real data only when the engine actually queries the AI models.** Until that service is live, do ONE of these, never fake data:
  1. Run only the live site-health audit and present the AI-engine layer as "included, rolling out" (clearly labeled), or
  2. If the AI query service is live on `tool.tryagentikai.com`, show its real output.
- Any example number on the page (visibility score, health score, per-engine state) must be visibly labeled as an example, not presented as this visitor's real result.
- No invented clients, stats, or testimonials anywhere.

---

## GATE
Aditya: approve the copy, or mark changes. On approval → Stage 2 (Build Handoff v2 to the external LLM), which is already drafted in `02-build-handoff.md`.
