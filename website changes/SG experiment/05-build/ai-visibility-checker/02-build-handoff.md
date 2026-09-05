# Build Handoff: AI Visibility Checker (v2 redesign)

**For:** the building LLM. You have zero project memory; everything you need is here or linked. Build this on localhost, exactly as specified. Do NOT change the copy or invent anything.

**What this is:** a v2 REDESIGN of the existing `/ai-visibility-checker/` page. v1 already shipped to localhost (a plainer AI-answer-engine landing page). v2 keeps the same URL and turns it into a minimal tool landing page with rich, custom infographics that explain exactly how the tracker works and what it tracks. If v1 code exists, refactor it toward this spec; do not create a second route.

## 0. Read these first (in order)
1. This file, top to bottom.
2. The APPROVED COPY: `01-copy.md` in THIS folder (v2). It is FINAL and verbatim. Every headline, sub, body line, FAQ, CTA, and label comes from there. Do not rewrite, do not add stats.
3. `agentic-labs/website changes/⚙️ Content Engine SOP/00-ORCHESTRATOR.md` (golden rules + QA gates).
4. `⚙️ Content Engine SOP/modules/05-design-system.md` (tokens), `03-graphics-and-images.md`, `04-motion-and-animation.md`.
5. The `frontend-design` skill (in `agentic-labs/.claude/skills`) for infographic quality. Use it; avoid generic AI aesthetics.
6. The user flow: `00-user-flow.md` in this folder (note: v2 adds the site-health layer; the two-layer model in `01-copy.md` supersedes any 4-engine references in the flow).

## 0.5 v2.1 REFINEMENTS (apply on top of the shipped v2 build — targeted, not a rebuild)
Aditya reviewed the v2 build. Fix these five things; leave everything else as-is. Full detail is in `01-copy.md` (search "v2.1" and "GLOBAL MOTION").
1. **Hero headline: rotating engine word.** `See if {ENGINE} recommends your business.` where {ENGINE} cycles ChatGPT → Google AI → Perplexity → Gemini → Claude → Grok (~2s each, fade+slide, fixed-width slot so no reflow, blue accent). Line 2 "Or your competitor." becomes dark navy (not blue) so there is one accent moment. See Section 1.
2. **Hero declutter + motion graphic.** Shorten the sub (drop the engine list, it is in the headline now), unify input+button as one group (`max-w-xl`, centered), quiet the trust line. Add the hero "AI answer" motion graphic with the pulsing empty "Your business?" seat + rotating engine header chip. Mobile-first. See Section 1 + INFOGRAPHIC SPEC F.
3. **Section 6 Layer 2 must be a graphic, not text tiles.** Replace the six bordered "CHATGPT: Names someone else" cards with an orbital/connection diagram (center YOU, six engine satellites, links colored by state) + a share-of-voice meter. Example data rendered through the graphic. See INFOGRAPHIC SPEC C.
4. **Section 7 must be a connected TIMELINE, not four cards.** One spine through nodes 01 to 04, line draws in on scroll, nodes reveal in sequence. See INFOGRAPHIC SPEC B.
5. **Section 8 motion-driven + missing seat.** Old links recede while the AI answer builds and names populate; add the pulsing empty "Your business?" seat. See INFOGRAPHIC SPEC D.
6. **GLOBAL MOTION across the whole page** (scroll reveals, animated meters/rings/counters, the recurring empty-seat motif), imperative framer-motion, mobile-first, honor `prefers-reduced-motion`. See GLOBAL MOTION in `01-copy.md`.

## 1. The big changes from v1 (do all of these)
1. **Minimal, centered hero.** One centered paste box is the hero. No competing visual above the fold. See Copy S1.
2. **Six engines everywhere** (was four): ChatGPT, Perplexity, Google AI, Gemini, Grok, Claude.
3. **Two tracked layers, both shown:**
   - **Live now:** Search and site-health audit. Health score + letter grade, six category scores (Technical, Speed, Content, Discoverability, Experience, Authority), prioritized issue cards (Why it matters / How to fix / Observed vs Should be), AEO checklist.
   - **Vision layer:** AI answer-engine visibility across the six engines.
4. **Rich custom infographics** are the core of the page. Build all five in the INFOGRAPHIC SPEC of `01-copy.md` (A six-engine panel, B how-it-works flow, C two-layer what-we-track, D old vs new search, E report visual language). Code them in SVG/CSS with the tokens. No stock images.

## 2. What to build
- **Page:** `/ai-visibility-checker/` (free-tool landing page + SEO pillar). **Type:** pillar + lead-gen tool.
- **Funnel stage:** Stage 1, Get Found & Capture (see `../../03-architecture/website-architecture.md`).
- **Framework:** Next.js pages-router. **Do not change any existing URL.**
- **Scope of THIS build:** the landing page, its infographics, the tool UI shell, and the report view. The actual scan ENGINE is a separate service on `tool.tryagentikai.com` (built by the dev). Wire the tool UI to a single function `runVisibilityScan(domain)` that you stub to return mock data in the shape below, so the whole UI is buildable and demoable on localhost. Leave a clear TODO where the real API plugs in. Any on-page sample number must be labeled as an example (see HONESTY GUARDRAIL in `01-copy.md`).

## 3. Files to create / edit (exact paths)
- Page: `src/pages/ai-visibility-checker/index.tsx`
- Report view (programmatic, indexable): `src/pages/ai-visibility-checker/report/[id].tsx` (can render from the same mock for now)
- Sections/components: `src/components/sections/AiVisibilityChecker/` (v1 files likely exist here: `StaticSections.tsx`, `ToolFlow.tsx`, `copy.ts`, `index.tsx`, `primitives.tsx`, `visuals.tsx` — extend these; do not fork new parallel files).
- New infographic components go in the same folder (e.g. `EngineVisibilityPanel.tsx`, `HowItWorksFlow.tsx`, `WhatWeTrackLayers.tsx`, `OldVsNewSearch.tsx`, `ReportVisuals.tsx`). Reuse existing `src/components/programmatic/` primitives (`HeroFlowExplainer`, `ComparisonBars`, `BigStatCards`, `AnimatedStat`) where they fit.
- Keep the page wired into: `src/pages/sitemap.xml.tsx` (already there, priority ~0.9), footer Free Tools group, nav Free Tools item, and `src/pages/llms.txt.tsx` (already lists it; update the one-line description to mention the six engines + site health).
- Meta: set title/description/keywords from `01-copy.md` META block (updated in v2).

## 4. Tool UI states (build all four)
1. **Idle:** centered hero + paste box + "No signup to see your score."
2. **Scanning:** show the Section 2 microcopy lines in sequence, grouped (AI engines, then site health).
3. **Result (ungated):** Section 3 two-number verdict (AI visibility + site health) + the six-engine one-liners (green/amber/red).
4. **Email gate to Report:** Section 4 email field; on submit, reveal Section 5 report: Part A (six-engine visibility) + Part B (site-health audit: score ring + grade, six category bars, expandable issue cards, AEO checklist).

**Mock data shape for `runVisibilityScan(domain)`:**
```ts
{
  domain: string,
  ai: {
    shownIn: number, outOf: 6,                 // e.g. 2 of 6  (EXAMPLE, label as such)
    engines: [{
      name: "ChatGPT"|"Perplexity"|"Google AI"|"Gemini"|"Grok"|"Claude",
      status: "named"|"mentioned"|"absent",
      namedInstead?: string[]
    }]
  },
  site: {
    healthScore: number, grade: string,        // e.g. 62, "D"
    counts: { critical: number, high: number, medium: number, low: number },
    categories: [{ key: "Technical"|"Speed"|"Content"|"Discoverability"|"Experience"|"Authority", score: number, note: string }],
    issues: [{
      title: string, category: string,
      severity: "Critical"|"High"|"Medium"|"Low",
      effort: "Quick fix"|"A few hours"|"Bigger project",
      affects?: number,
      whyItMatters: string,
      howToFix: string[],
      observed: string, shouldBe: string
    }],
    aeo: [{ label: string, status: "ok"|"partial"|"missing" }] // llms.txt, structured data, clean text, crawlable, content depth
  }
}
```
Populate the mock with plausible, clearly-labeled example values (you may mirror the tryagentikai.com example numbers from the research: health 62 grade D; Speed 40, Technical 75, Content 88, Discoverability 80, Experience 52, Authority 35).

## 5. Infographics (the heart of the build)
Build all five from the INFOGRAPHIC SPEC in `01-copy.md`. They must be custom, on-brand, responsive, and animate subtly on scroll. Priorities:
- **A. Six-engine visibility panel** is the signature visual. Grid or radial, six engines, green/amber/red states, "named instead" chips, share-of-voice read.
- **B. How-it-works flow:** four steps; surface the six engine names at step 2 and the six category chips at step 3 so the flow teaches what is tracked.
- **C. Two-layer what-we-track:** foundation (six category tiles with mini meters) supporting the outcome (six engines). Make the support relationship visually obvious.
- **D. Old vs new search:** ten muted links vs one AI answer naming three businesses.
- **E. Report visual language:** score ring + grade, severity counters, six category bars, expandable issue cards (Why / How / Observed vs Should be).

## 6. Design + motion (must match)
- Tokens: cream `#F9F6F4`, navy `#0A1128`, yellow `#FCCA07`, blue-600, red-500 eyebrows, borders `#e7e6e4`, `rounded-none` (sharp corners), `font-alte` headings, `font-geist` eyebrows. Section rhythm `py-16 sm:py-24`, containers `max-w-6xl`/`max-w-3xl`, padding `px-4 sm:px-6 lg:px-8`.
- Eyebrow pattern: `font-geist text-[12px] uppercase tracking-[0.02em] text-red-500` + a yellow dot (`w-1.5 h-1.5 rounded-full bg-[#FCCA07]`).
- Semantic status colors (green/amber/red for engine + issue states) are SEPARATE from the yellow brand accent.
- Motion: framer-motion, imperative `useInView` + `animate()` + `ref.current.style.*` (declarative `whileInView` silently fails in this project). Subtle fade-up on scroll. Respect reduced-motion.

## 7. SEO
- Title/H1/slug carry "AI Visibility Checker". Secondary terms (ai visibility tool, ai seo tool, ai overview checker) sit in Sections 6, 7, 8 copy.
- Schema: Service + FAQPage (from Section 11) + BreadcrumbList. Emit JSON-LD. FAQPage must reflect the v2 nine-question FAQ.
- Internal links: up to `/`; to `/seo-agency-singapore/`, `/answer-engine-optimization/`, `/forward-deployed-engineers/` ONLY IF those pages exist, else leave a TODO (no broken links).

## 8. Acceptance criteria (meet all, then hand back)
- Renders on localhost, no console errors. `npx tsc --noEmit -p tsconfig.json` passes.
- Zero em/en dashes anywhere.
- Copy matches `01-copy.md` (v2) verbatim. No invented stats/clients/testimonials. Example numbers labeled as examples.
- Six engines used everywhere (ChatGPT, Perplexity, Google AI, Gemini, Grok, Claude). Both layers present (AI visibility + site-health audit).
- All five infographics built, custom, responsive, on-brand, subtle motion.
- All four tool UI states work with the mock. `runVisibilityScan` stubbed with a clear TODO for the real `tool.tryagentikai.com` API.
- HONESTY GUARDRAIL respected: no fabricated visitor results; AI layer either labeled "rolling out" or fed by the live service.
- Title/H1/slug carry the keyword. FAQPage + Service + Breadcrumb schema present. Page in sitemap, footer, nav (Free Tools), llms.txt (description updated).
- Images light + alt text; prefer coded SVG/CSS. Design tokens + imperative motion used. Responsive, no horizontal scroll.
- Hand back: confirm each criterion, list any deviation. Then Claude runs `templates/validation-checklist.md` before push.
