# Shared Hero Redesign Spec (both pillar pages)

**Applies to:** `/lead-generation-agency-singapore/` and `/answer-engine-optimization/` heroes.
**Goal:** kill the dead-space single-column layout. Two-column hero: copy left, styled product infographic right. Fix hierarchy. Make the infographic carry the pain.
**Hard rules:** do NOT change any copy strings (headline/sub/CTA come from the page's `copy.ts`, verbatim). No em/en dashes. Imperative motion only (`useInView` + `animate`, NEVER `whileInView`). tsc must pass. Responsive, no horizontal scroll. Sharp corners (`rounded-none`) per design system.

---

## 1. Layout (shared)
- Section: `bg-[#F9F6F4]` with `border-b border-[#e7e6e4]`. Tighten padding so it is not floaty: `pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pb-24`.
- Container `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`.
- Grid: `grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center`.
  - Left (copy): `lg:col-span-6`.
  - Right (infographic): `lg:col-span-6`, `relative`. On mobile it stacks BELOW the copy (`order-last`), max width `max-w-md`, centered.
- Gradient wash: position an absolute blurred blob BEHIND the right column (top-right), e.g. `absolute -top-10 -right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-blue-200/40 to-[#FCCA07]/20 blur-3xl -z-10`. It should frame the card, not float in empty space.

## 2. Copy column hierarchy (shared)
- Order: [breadcrumb — lead-gen only] -> eyebrow -> h1 -> sub -> support line -> CTA row. Keep them tight (no giant gaps).
- Eyebrow: existing pattern (yellow dot + `font-geist text-[12px] uppercase tracking-[0.02em] text-red-500`), `mb-4`.
- H1: `font-alte font-normal tracking-[-0.04em] leading-[1.08]`, size `text-[2rem] sm:text-4xl lg:text-[2.9rem]` (smaller than now so it fits the half column cleanly). Line 1 = `text-[#0A1128]`, line 2 = `text-blue-600`, each `block`. `mb-5`.
- Sub: `font-alte text-[15px] sm:text-[17px] text-slate-600 leading-[1.55] tracking-[-0.04em] max-w-xl mb-4`.
- Support line: `font-alte text-[13px] text-slate-500 tracking-[-0.04em] mb-8`.
- CTA row: `flex flex-col sm:flex-row gap-3`, directly under copy. Reuse the existing `BracketButton` (primary solid yellow, secondary ghost). Do not invent new button styles.

## 3. Infographic card shell (shared look)
- White card, `border border-[#e7e6e4]`, `rounded-none`, floating depth: `shadow-[0_20px_50px_-20px_rgba(10,17,40,0.25)]`. Add a subtle stacked-depth effect with a second offset border div behind (`absolute inset-0 translate-x-2 translate-y-2 border border-[#e7e6e4] -z-10`) if it reads well.
- Card header row: a small label (`font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500`) on the left, a chip on the right.
- Motion: on scroll-in, fade-up the card, then stagger its inner rows. Use `useInView(ref,{once:true,margin:"-40px"})` + `animate()`. Provide a static final state for `prefers-reduced-motion`.

---

## 4. AEO infographic — "AI answer" card (RESTYLE existing `AeoHeroGraphic.tsx`)
Keep the rotating engine chip + staggered rows + empty seat logic. Fix the VISUALS so the pain lands:
- Header chip: keep the rotating engine (ChatGPT/Perplexity/Google AI/Gemini/Grok/Claude) with its `EngineLogo`.
- Buyer question line: keep "Who should I hire in my space?".
- 3 competitor rows -> style as RANKED, FILLED cards: left a small square rank badge `1 2 3` (navy bg, white `font-geist` number), then the name (`font-alte text-[15px] text-[#0A1128]`), then a right-side muted tag "cited" or a small check. White bg, `border border-[#e7e6e4]`. Replace the current gray empty checkbox square with the rank badge.
- 4th slot = YOUR business, the punch: dashed border (`border border-dashed border-red-300`), red-tinted bg (`bg-red-50`), a red dot, label "Your business" in `text-[#0A1128]` plus a right-side red tag `font-geist text-[10px] uppercase text-red-500` reading "Not named". A tiny red eyebrow above the seat or inside it: "You're not here."
- Net effect: three names get picked, yours is visibly missing. The empty seat must look clearly DIFFERENT (red/dashed) from the filled rows.

## 5. Lead-gen infographic — "Speed-to-lead" card (NEW `SpeedToLeadCard.tsx` in `src/components/sections/LeadGenSingapore/`)
Illustrative mock (NOT a client claim, NO real names). Shows the core promise: we respond in seconds and book the call before the competitor.
- Card header: left label "NEW LEAD", right a small live pulse dot (green) + "just now".
- Lead line: a generic source, e.g. "Website enquiry" or "WhatsApp lead" with a small generic avatar square. No real person/company name.
- Then TWO contrasting rows (the whole story):
  - **You (highlighted):** a green check, "Called and texted in **9s**", then a yellow/navy badge "Call booked". Use the accent (`bg-[#FCCA07]` badge or navy). The "9s" can count up on scroll-in via `animate(0,9,...)` rounding to int, suffix "s".
  - **Competitor (muted):** greyed row, "Followed up 4 hours later", then a muted/struck "Lead already booked". `text-slate-400`, lower opacity.
- Footer label: `font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500` -> "SPEED TO LEAD".
- Motion: card fade-up, the "9s" counts up, the "Call booked" badge pops (scale 0.9->1 + fade), competitor row fades in greyed after. Reduced-motion: final static state (9s, booked, competitor greyed).
- Keep it clean: max ~5 rows, `max-w-md`. Sharp corners, same shell as section 3.

---

## 6. Acceptance (both)
- Two-column on lg, stacked + centered on mobile, no horizontal scroll.
- Copy strings unchanged (pull from `copy.ts`). No dashes. tsc clean. No `whileInView`.
- Infographic visually distinct filled-vs-missing (AEO) / you-vs-competitor (lead-gen).
- Tokens honored: cream/navy/yellow/blue/red-500, `font-alte`/`font-geist`, `rounded-none`, borders `#e7e6e4`.
- Reduced-motion static fallback present.
