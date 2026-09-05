# Validation: Lead Generation Agency Singapore

**Date:** 19 Aug 2026 · **Result:** ✅ PASS · **Validator:** Claude

| # | Gate | Result | Evidence |
|---|---|---|---|
| 1 | `npx tsc --noEmit` clean | ✅ | exit 0 |
| 2 | Zero em/en dashes | ✅ | grep `\x{2010}-\x{2015}\x{2212}` over page + section folder = clean |
| 3 | Copy verbatim vs `01-copy.md` | ✅ | META, HERO, TRUTH, DO, JOURNEY, START, COMPARE, PROOF, WHO, EXPLORE, FAQS, FINAL all match |
| 4 | All 11 sections present, in order | ✅ | Hero, UncomfortableTruth, WhatWeDo, LeadJourney, StartWith, Comparison, Proof, WhoThisIsFor, Explore, Faq, FinalCta |
| 5 | Hero two-line: L1 `#0A1128`, L2 `text-blue-600` | ✅ | `sections.tsx:65-66` |
| 6 | "AI" NOT in H1 | ✅ | headline1/2 have no "AI" |
| 7 | Schema: Service + FAQPage + BreadcrumbList | ✅ | 3 JSON-LD blocks in `index.tsx`; FAQ built from FAQS |
| 8 | No invented stats/clients/testimonials | ✅ | proof = logos + dogfood only; no testimonial slot |
| 9 | Sitemap (fixed lastmod), footer, nav, llms.txt | ✅ | sitemap `lastmod: "2026-08-19"` (not `new Date()`), nav, footer, llms all added |
| 10 | No broken internal links | ✅ | S5 cards → 4 real pSEO root pages verified; S9 renders only live link, rest are TODO comments |
| 11 | Imperative motion (`useInView`+`animate`), no `whileInView` | ✅ | `primitives.tsx` FadeUp; zero `whileInView` in folder |
| 12 | Design tokens (cream/navy/yellow/blue, rounded-none, font-alte/geist, py rhythm) | ✅ | matches across sections |
| 13 | Visible breadcrumb | ✅ | `sections.tsx:39-61` |

## Notes (non-blocking)
- **S9 Explore currently shows only 1 live link** (`/ai-visibility-checker/`). The other 5 hub down-links are `live:false` → correctly suppressed to avoid broken links, TODO comments in place. Hub internal-linking value fills in as the sub-pages ship. Not a defect.
- **S5 card hrefs** point to existing GHL pSEO pages (speed-to-lead, cold-email, instagram-dm, missed-calls) at root. "Find and qualify" card has no deep page yet (`href: null`), renders unlinked. Correct.
- **Pricing** = paid-on-pipeline framing, no SGD number (per Stage 1 decision). Revisit when bands (blocker X.1) are set.

## Verdict
Ready to push. No changes required.
