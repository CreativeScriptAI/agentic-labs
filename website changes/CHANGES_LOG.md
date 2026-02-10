# Landing Page Rewrite — Changes Log
**Date:** 2026-02-10
**Branch:** `new-landing-page`
**Status:** Ready for review (not merged to main)

---

## How to Switch Back
If anything goes wrong, run:
```
git checkout main
```
This restores the original landing page instantly.

To apply the new version to main:
```
git checkout main
git merge new-landing-page
```

---

## Summary of Changes

### NEW Sections Created (7 files)

| File | Section | Description |
|------|---------|-------------|
| `src/components/sections/ProblemSection/index.tsx` | THE PROBLEM | "You've tried the tools. They didn't work." — Names the pain point |
| `src/components/sections/WhatWeBuildSection/index.tsx` | WHAT WE BUILD | "Talk. Remember. Act." — Three-layer system (Voice, Memory, Automation) |
| `src/components/sections/AIRolesSection/index.tsx` | BUILT FOR YOUR BUSINESS | 6 industry role cards (Healthcare, Recruiting, E-Commerce, Real Estate, Home Services, Agencies) |
| `src/components/sections/ProofSection/index.tsx` | RESULTS | PatientlyAI featured case study + 3 proof metric cards + testimonial highlight |
| `src/components/sections/HowWeWorkSection/index.tsx` | HOW IT WORKS | 4-week timeline (Audit > Build > Test > Live) |
| `src/components/sections/WhoItsForSection/index.tsx` | IS THIS FOR YOU? | Qualification checklist — "for you if" / "not for you if" |
| `src/components/sections/WhoWeAreSection/index.tsx` | WHO WE ARE | "Three builders. One obsession." — Origin story |
| `src/components/sections/FinalCTASection/index.tsx` | FINAL CTA | "Your business runs. Your AI should too." — Book a call CTA |

### UPDATED Existing Files (5 files)

| File | What Changed |
|------|-------------|
| `src/components/sections/HeroSection/index.tsx` | New headline ("Your AI works in a demo..."), new subtitle, dual CTAs (Book a Free Call + See How It Works) |
| `src/components/sections/FAQSection/index.tsx` | Replaced 10 generic FAQs (some copied from Inflection AI / Relevance AI) with 8 original questions specific to Agentic AI Labs |
| `src/components/sections/FooterSection/index.tsx` | Tagline changed to "We build AI systems that work.", added nav links, updated copyright to 2026 |
| `src/layouts/RootLayout/Header/NavBar.tsx` | Nav items updated: Services, About, Case Studies, Blog, Partners (replaced AI Clarity Workshop) |
| `src/pages/index.tsx` | Complete restructure — 14 sections in new order, updated StructuredData FAQs, updated meta title/description |

### KEPT Unchanged (2 sections)

| Section | Why |
|---------|-----|
| AgentsSection (dynamic from Notion) | User requested to keep this |
| TrustedSection (logo carousel) | User requested to keep this |

---

## New Page Flow (Top to Bottom)

1. **Hero** — "Your AI works in a demo. It breaks with real customers. We fix that."
2. **The Problem** — Agitation: names the pain
3. **What We Build** — Talk. Remember. Act. Three layers.
4. **Agents We've Shipped** — (existing dynamic Notion section)
5. **AI Roles** — 6 static industry cards
6. **Trusted By** — (existing logo carousel)
7. **Proof / Results** — PatientlyAI case study + metrics
8. **Testimonials** — (existing dynamic section)
9. **How We Work** — 4-week timeline
10. **Who This Is For** — Qualification checklist
11. **Who We Are** — Origin story
12. **FAQ** — 8 rewritten questions
13. **Final CTA** — Book a call
14. **Footer** — Updated tagline + links

---

## Placeholders That Need Real Data

These appear as `[X ...]` or `[PLACEHOLDER]` in the code:

1. **ProofSection** — Case study metrics: "X calls handled, X bookings increased, X no-shows reduced"
2. **ProofSection** — 3 proof cards have placeholder metrics
3. **AIRolesSection** — Role cards have placeholder metrics (e.g., "X calls handled/month")
4. **FinalCTASection** — Email address set to `hello@tryagentikai.com` (verify this is correct)
5. **NavBar** — "Case Studies" and "Partners" link to `#` (pages don't exist yet)

---

## Design Consistency

All new sections use the same patterns as existing code:
- Background: `#F9F6F4`
- Fonts: `font-mondwest` (headings), `font-sfpro` (body)
- Colors: Blue (`text-blue-600`), Red labels (`text-red-500`), Dark text (`text-[#0A1128]`)
- CTA buttons: Yellow (`bg-[#FCCA07]`) matching existing "Book Free Call" buttons
- Section labels: Red uppercase tracking-wider
- All CTAs link to existing Calendly: `calendly.com/creative-script/get-free-ai-clarity`
- Responsive: Mobile-first with sm/md/lg/xl breakpoints
- Full-width sections: `width: calc(100% + 2rem)` pattern
