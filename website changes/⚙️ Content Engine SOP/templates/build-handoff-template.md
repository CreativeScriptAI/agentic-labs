# Build Handoff — <PAGE NAME>

**For:** the building LLM. You have zero project memory; everything you need is here or linked. Build this page on localhost, exactly as specified. Do NOT change the copy or invent anything.

## 0. Read these first (in order)
1. This file (top to bottom).
2. `agentic-labs/website changes/⚙️ Content Engine SOP/00-ORCHESTRATOR.md` (golden rules + QA gates).
3. `modules/05-design-system.md` (tokens), `modules/03-graphics-and-images.md`, `modules/04-motion-and-animation.md`.
4. The approved copy in section 3 below is FINAL. Use it verbatim. No rewriting, no added stats.

## 1. What to build
- **Page:** <slug> at `<url>` · **Type:** pillar / service · **Stage in funnel:** <stage>
- **Framework:** Next.js pages-router. **Do not change any existing URL.**

## 2. Files to create / edit (exact paths)
- Page: `src/pages/<...>.tsx` (or the programmatic data file, if applicable)
- New section components (if any): `src/components/sections/<...>` or reuse `src/components/programmatic/*`
- Add page to: `src/pages/sitemap.xml.tsx`, footer, `llms.txt`
- Meta: set title/description/keywords per section 3.

## 3. Approved copy (VERBATIM, do not edit)
> Paste the full approved copy here: meta, eyebrow, headline, every section, CTAs, FAQ. This is the contract.

## 4. Internal links (wire these)
> The hub-and-spoke links from `01-copy.md`: which pages this links down/up to, exact hrefs.

## 5. Asset spec (build these)
For each section: the infographic/image needed, its data, alt text, and style.
- Reuse existing components where possible: `HeroFlowExplainer`, `ComparisonBars`, `AnimatedStat`, `BigStatCards`, `ConnectorLine`, `NodeNumber`, `LogoStrip`, `ScreenshotShowcase`.
- Captured images (if any) are in `assets/` with alt text; wire them in, keep them light (WebP/AVIF).
- New infographics: build in code, match the design tokens (Module 05).

## 6. Design + motion (must match)
- Tokens: cream `#F9F6F4`, navy `#0A1128`, yellow `#FCCA07`, blue-600, red-500 eyebrows, borders `#e7e6e4`, `rounded-none`, `font-alte` headings, `font-geist` eyebrows. Section rhythm `py-16 sm:py-24`.
- Motion: framer-motion, imperative `useInView` + `animate()` pattern (declarative `whileInView` silently fails here). Subtle fade-up on scroll.

## 7. Acceptance criteria (you must meet all)
- Renders on localhost with no console errors. `npx tsc --noEmit` passes.
- Zero em/en dashes anywhere.
- Copy matches section 3 verbatim. No invented stats/clients/testimonials.
- Title/H1/slug carry the target keyword. Internal links wired. Schema present. Page added to sitemap/footer/llms.txt.
- Images light + alt text present. Design tokens + motion pattern used.
- Hand back: confirm each criterion, list any deviation.
