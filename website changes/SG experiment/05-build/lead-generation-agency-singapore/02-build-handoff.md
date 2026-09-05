# Build Handoff: Lead Generation Agency Singapore

**For:** the building LLM. Zero project memory assumed. Everything you need is here or linked. Build on localhost exactly as specified. Do NOT change the copy or invent anything.

## 0. Read these first (in order)
1. This file, top to bottom.
2. The APPROVED COPY: `01-copy.md` in THIS folder. FINAL and verbatim. Every headline, sub, body line, FAQ, CTA comes from there. Do not rewrite, do not add stats.
3. `agentic-labs/website changes/⚙️ Content Engine SOP/00-ORCHESTRATOR.md` (golden rules + QA gates).
4. `⚙️ Content Engine SOP/modules/05-design-system.md` (tokens), `03-graphics-and-images.md`, `04-motion-and-animation.md`.
5. Flow context: `00-user-flow.md` in this folder.
6. Precedent build to mirror for structure/quality: `../ai-visibility-checker/02-build-handoff.md` and the shipped page `src/pages/ai-visibility-checker/index.tsx` + `src/components/sections/AiVisibilityChecker/`.

## 1. What to build
- **Page:** `/lead-generation-agency-singapore/` — a Stage 1 capture PILLAR HUB + BoFu service page. No tool UI, this is a content/conversion page (unlike the visibility checker).
- **Funnel stage:** Stage 1, Get Found & Capture (see `../../03-architecture/website-architecture.md`).
- **Framework:** Next.js pages-router. **Do not change any existing URL.**
- **Scope:** the landing page only. Static SEO + conversion sections. No scan engine, no email gate.

## 2. Files to create / edit (exact paths)
- Page: `src/pages/lead-generation-agency-singapore/index.tsx` (or `src/pages/lead-generation-agency-singapore.tsx`, match the repo's existing convention for flat service pages).
- Sections: new folder `src/components/sections/LeadGenSingapore/` for any page-specific pieces (hero, compare table, journey strip, FAQ). Reuse existing components from `src/components/programmatic/` where they fit: `HeroFlowExplainer` (S4 journey), `ComparisonBars` or a simple table (S6), `BigStatCards`/card grid (S5), `LogoStrip` (S7).
- Add the page to: `src/pages/sitemap.xml.tsx` (priority ~0.9, `lastmod` a fixed date string, NOT `new Date()`), the footer (`src/components/sections/FooterSection/index.tsx`, under the Stage 1 / Solutions group), the nav (`src/layouts/RootLayout/Header/NavBar.tsx`), and `src/pages/llms.txt.tsx` under a Singapore / services section.
- Meta: set title/description/keywords from `01-copy.md` META block.

## 3. Copy
FINAL and verbatim in `01-copy.md`. Section order = the 11 numbered sections there. Do not edit wording. Hero is a two-line headline: line 1 dark `#0A1128`, line 2 `text-blue-600`. Eyebrow is the small line above.

## 4. Sections to build (all 11, in order)
1. **S1 Hero** — eyebrow + two-line headline + sub + support line + two CTAs.
2. **S2 Uncomfortable truth** — 4 short paragraphs, eyebrow.
3. **S3 What we actually do** — intro + 4 numbered steps.
4. **S4 Lead journey** — 4-stage horizontal strip (reuse `HeroFlowExplainer` pattern). "You are here" marker on stage 1. Links to other pillars ONLY if live, else TODO comment.
5. **S5 What you can start with** — 5 outcome cards, each links to its deep page where it exists.
6. **S6 Comparison** — 3-column table (list/tool/us) + line under it.
7. **S7 Proof** — 3 lines + logo strip (`LogoStrip`, logos already in repo). No client logos/quotes.
8. **S8 Who this is for** — two blocks (for you if / not for you if).
9. **S9 Explore the system** — down-links to sub-pages. Live-only, TODO otherwise.
10. **S10 FAQ** — 7 Q&As, accordion or plain, feeds FAQPage schema.
11. **S11 Final CTA** — headline + sub + CTA button.

## 5. Design + motion (must match the site)
- Tokens: cream `#F9F6F4` (section backgrounds), navy `#0A1128` (text), yellow `#FCCA07` (accent/dot), blue-600 (emphasis, hero line 2), red-500 (eyebrows), borders `#e7e6e4`, `rounded-none` (sharp corners), `font-alte` headings, `font-geist` eyebrows/labels. Section rhythm `py-16 sm:py-24`, containers `max-w-6xl`/`max-w-3xl`, padding `px-4 sm:px-6 lg:px-8`.
- Eyebrow pattern: `font-geist text-[12px] uppercase tracking-[0.02em] text-red-500` + a yellow dot (`w-1.5 h-1.5 rounded-full bg-[#FCCA07]`).
- Motion: framer-motion, imperative `useInView` + `animate()` + `ref.current.style.*`. Declarative `whileInView` SILENTLY FAILS in this project, do not use it. Subtle fade-up on scroll.

## 6. SEO
- Title/H1/slug carry "Lead Generation Agency Singapore." Secondary terms (singapore lead generation, leads generation singapore, b2b lead generation singapore, appointment setting singapore) already sit naturally in S1 sub, S8, S10 copy. Do not keyword-stuff further.
- **Schema (emit JSON-LD):** `Service` (name "Lead Generation", areaServed Singapore, provider Agentic AI Labs), `FAQPage` (from S10's 7 Q&As, verbatim), `BreadcrumbList` (Home > Lead Generation Agency Singapore). The programmatic template already shows the JSON-LD pattern, follow it.
- **Internal links:** up to `/`; across to the other stage pillars (S4) and down to sub-pages (S9). Link ONLY to pages that exist right now. For any that do not, leave a clear `{/* TODO(link): /b2b-lead-generation-singapore/ when live */}` comment. NO broken links.

## 7. Acceptance criteria (meet all, then hand back)
- Renders on localhost, no console errors. `npx tsc --noEmit -p tsconfig.json` passes.
- Zero em or en dashes anywhere on the page.
- Copy matches `01-copy.md` verbatim. No invented stats, clients, or testimonials. Testimonial slot stays empty (there isn't one on this page; do not add one).
- Hero two-line headline: line 1 `#0A1128`, line 2 `text-blue-600`. "AI" does NOT appear in the H1.
- All 11 sections present and in order.
- Title/H1/slug carry the keyword. FAQPage + Service + BreadcrumbList schema present and valid.
- Page added to sitemap (fixed `lastmod`), footer, nav, llms.txt.
- Logos light; any images WebP/AVIF with descriptive alt. Design tokens + imperative motion pattern used. Responsive, no horizontal scroll on mobile.
- Internal links resolve (no broken links); non-live targets left as TODO comments.
- Hand back: confirm each criterion, list any deviation. Then Claude runs `templates/validation-checklist.md` before push.
