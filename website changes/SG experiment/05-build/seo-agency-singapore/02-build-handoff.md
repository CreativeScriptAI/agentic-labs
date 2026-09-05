# Build Handoff: SEO Agency Singapore

**For:** the building LLM. Build on localhost exactly as specified. Do NOT change copy or invent anything.

## 0. Read first (in order)
1. This file.
2. APPROVED COPY: `01-copy.md` (FINAL, verbatim, 12 sections).
3. `00-user-flow.md` (this folder).
4. **The precedent to mirror for structure, components, and quality:** the shipped `/lead-generation-agency-singapore/` page. Copy its patterns:
   - `src/components/sections/LeadGenSingapore/` — `primitives.tsx` (Container, Eyebrow, FadeUp — with the 450ms reveal safety net), `Icons.tsx` (shared line-icon set + IconTile), `sections.tsx` (two-column hero, keyword H2 sections, card grids, compare table, FAQ accordion, dark final CTA), `SpeedToLeadCard.tsx` (hero infographic pattern), `CompareTable.tsx`, `copy.ts`, `index.tsx`.
   - `src/pages/lead-generation-agency-singapore/index.tsx` — the page shell with Service + FAQPage + BreadcrumbList JSON-LD.

## 1. What to build
- **Page:** `/seo-agency-singapore/` — Stage 1 SEO + AEO service pillar. Content/conversion page (no live tool; the CTA points to the existing `/ai-visibility-checker/`).
- **Framework:** Next.js pages-router. Do NOT change any existing URL.

## 2. Files to create / edit
- Page: `src/pages/seo-agency-singapore/index.tsx` (mirror lead-gen page shell + 3 JSON-LD schemas).
- Sections folder: `src/components/sections/SeoAgencySingapore/` — `copy.ts`, `sections.tsx`, `index.tsx`, and a hero infographic component `SeoRankCard.tsx`.
  - **REUSE, do not duplicate:** import `Container, Eyebrow, FadeUp` from `../LeadGenSingapore/primitives`, and `Icon, IconTile` from `../LeadGenSingapore/Icons`. Reuse the `CompareTable` pattern (build a local one shaped to S7's 4-row / 3-column data).
- Hero infographic `SeoRankCard.tsx`: a small "AI answer + Google rank" card. Show a Google result row (you ranking) AND an AI-answer row where your business is named (green) — the S1/S4 "found on Google, named by AI" idea. Same card shell + imperative motion as `SpeedToLeadCard.tsx` (useInView + animate, reduced-motion static state). Illustrative, NO fake client names or numbers.
- Wire additively into: `src/pages/sitemap.xml.tsx` (priority ~0.85, fixed `lastmod: "2026-08-20"`, NOT new Date()), footer (`FooterSection`), nav (`NavBar.tsx`), and `src/pages/llms.txt.tsx` (Singapore/services section).
- **Un-stub the down-link:** in `src/components/sections/LeadGenSingapore/copy.ts`, the EXPLORE link for `/seo-agency-singapore/` is currently `live: false`. Set it `live: true` now that this page exists.

## 3. Copy
Verbatim from `01-copy.md`. Section order = the 12 numbered sections. Hero two-line headline: line 1 `#0A1128`, line 2 `text-blue-600`. Keyword-bearing H2s on S3, S4, S5, S6, S7 (use the **Heading** fields in the copy).

## 4. Design + motion (must match)
- Tokens: cream `#F9F6F4`, navy `#0A1128`, yellow `#FCCA07`, blue-600, red-500 eyebrows, borders `#e7e6e4`, `rounded-none`, `font-alte` headings, `font-geist` labels. Rhythm `py-16 sm:py-24`, containers `max-w-6xl`/`max-w-3xl`.
- Eyebrow pattern via the shared `Eyebrow` primitive. Cards, IconTiles, compare table, FAQ accordion, dark final CTA all mirror LeadGenSingapore.
- Two-column hero (copy left, `SeoRankCard` right, gradient blob behind), same as lead-gen.
- Motion: imperative `useInView` + `animate`, NEVER `whileInView`.
- Assign icons on cards where natural (S3 steps, S5 local, etc.) using the shared `Icon`/`IconTile` set (e.g. search, chart, layers, shield, target, chat).

## 5. Schema
- `Service` (name "SEO", areaServed Singapore, provider Agentic AI Labs `@id` `.../#organization`), `FAQPage` (6 Q&As from S11 verbatim), `BreadcrumbList` (Home > SEO Agency Singapore). Mirror the lead-gen page's JSON-LD exactly.

## 6. Internal links
- CTAs and S10 link to EXISTING pages only: `/ai-visibility-checker/`, `/answer-engine-optimization/`, `/lead-generation-agency-singapore/` (all live). No TODO links needed.

## 7. Acceptance (meet all)
- Renders on localhost, no console errors. `npx tsc --noEmit -p tsconfig.json` passes.
- Zero em/en dashes. Copy verbatim vs `01-copy.md`. No invented stats/clients/testimonials/SGD numbers.
- Hero two-line (L1 navy, L2 blue). "AI" not in H1. Keyword H2s present on S3-S7.
- All 12 sections in order. Service + FAQPage + BreadcrumbList schema valid.
- Added to sitemap (fixed lastmod), footer, nav, llms.txt. Lead-gen EXPLORE link un-stubbed to live:true.
- Imperative motion, tokens, responsive, no horizontal scroll.
- Hand back: confirm each criterion + list deviations. Then Claude runs validation before push.
