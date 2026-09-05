# SEO Agency Singapore — Design Review (per-section)

Route: `/seo-agency-singapore/`
Reviewed at the code + design-reasoning level (browser preview rendered 0-height this session, so no reliable screenshots). Benchmarked against the shipped Lead-Gen Singapore precedent.

**Overall:** The page is close to the precedent's quality bar. Token discipline, background rhythm, typography scale, and the hero infographic are all strong. The gaps are concentrated in three text-only "3-card" sections (UncomfortableTruth, Wedge, Pricing) that are flatter than the equivalent precedent sections, plus one missing H2 and two image-balance nits.

---

## Per-section assessment

| Section | Verdict | Issues | Specific fixes |
|---|---|---|---|
| **Hero** | STRONG | Structurally identical to the precedent hero (breadcrumb, eyebrow, split H1, dual CTA, infographic + blur). The `-right-10 w-[420px]` decorative blur sits in a section with no `overflow-hidden`; on mobile it can push a few px past the viewport. Precedent ships the same markup, so low risk. | Optional: add `overflow-hidden` to the `<section>` (line 39) or `overflow-x-clip` to guard against horizontal scroll. Otherwise leave as-is to stay 1:1 with precedent. |
| **UncomfortableTruth** | NEEDS-FIX | No H2 — section jumps eyebrow → 3 cards. The precedent's UncomfortableTruth has a real H2 headline and a rich 2-col infographic + accent reframe; this one is the flattest version of that beat. Weakest focal point on the page. Cards have number + red left-border (good), but three long paragraphs at `md:grid-cols-3` get narrow/tall on tablet (~230px cols at 768px). | Add an `h2` (font-alte `text-[26px] sm:text-[34px]` `mb-4/6`, matching every other section) between the Eyebrow and the grid. Change grid to `sm:grid-cols-1 md:grid-cols-3` → prefer `grid-cols-1 lg:grid-cols-3` so the long paragraphs stay 1-up until there's real width. Consider a `border-l-red-500` accent reframe line beneath (like the precedent) to give the section a climax. |
| **WhatWeDo** | STRONG | 1:1 with precedent WhatWeDo: eyebrow + H2 + intro + 2×2 IconTile cards with 01–04 numbers. Icons, numbers, hierarchy all correct. | None. |
| **Wedge** | NEEDS-FIX | **Biggest monotony problem on the page.** This is the key differentiator beat ("Found on Google, and named by AI") but it's rendered flattest: 3 plain `#F9F6F4` cards, no icon, no number, no accent border — less visual weight than the Truth and Pricing cards that flank it. | Give each of the 3 cards an `IconTile` (e.g. `search`, `chat`/`layers`, `check`) or a matching `border-l-2 border-l-[#FCCA07]` accent + `01/02/03` number, so the most important section is the richest, not the barest. At minimum add the yellow left-accent to match Pricing. |
| **LocalSeo** | STRONG | Image + heading split (16/10, `object-cover`, border, alt present) then 3 IconTile cards. Good use of imagery + icons; alt text descriptive. `items-center` with a short heading column is fine. | Minor: heading column is short vs a 16/10 image, so on `lg` the left column floats centered. Acceptable; optionally `items-start` for a tighter top edge. |
| **Pricing** | OK | 3 cards with `border-l-[#FCCA07]` accent (good) but no icon or number — mild monotony, and visually near-identical to the Comparison callout that follows. Heading + hierarchy correct. | Add a small `01/02/03` index number (like UncomfortableTruth) or an `IconTile` per card to lift it above plain text and differentiate from the Wedge/Truth card style. |
| **Comparison** | STRONG | Desktop table + mobile stacked cards (good responsive pattern). Accent column `bg-[#0A1128]`/`#FCCA07`/15 on-token. Yellow-border summary line consistent with precedent. | None. Confirm the 4-col table doesn't overflow on small laptops (`w-[22%]` label + 3 cols is fine at `md`+). |
| **Proof** | OK | Two-column (copy + analytics image). `items-center` + fixed `aspect-[16/11]` image against a tall copy column (line1 + logo row + line2 + blockquote) means the image is shorter than the text and floats vertically centered, leaving uneven whitespace beside it. Logos `grayscale opacity-60 h-6` consistent with precedent. | Use `items-stretch` on the grid and wrap the image in `h-full` (as WhoThisIsFor does) so the image matches the copy-column height, or bump to `aspect-[4/5]`/`lg:h-full`. Alt text present and good. |
| **WhoThisIsFor** | OK | 3-col = team image + "For you" (yellow accent) + "Not for you" (muted). Divergence from precedent's 2-col. The image column (`min-h-[220px] h-full`, `fill object-cover`) stretches to the tallest card; on `lg` with two text cards it can become a tall, narrow, heavily-cropped strip. Grid goes `grid-cols-1` → `lg:grid-cols-3`, skipping a 2-col tablet step, so at `md` (768px) all three stack full-width (image fine there). | On `lg` the image can read as an awkward vertical sliver. Either (a) give it a fixed sensible ratio instead of pure stretch (`aspect-[3/4] lg:aspect-auto lg:h-full`), or (b) drop the image back to the precedent's clean 2-col text layout. If keeping 3-col, verify the team photo's subject survives a tall center-crop. |
| **Explore** | OK | Eyebrow + 3 arrow-links. Clean and on-pattern, but barer than precedent's Explore, which includes an intro paragraph — here it's just eyebrow + links, so the section feels thin. | Optional: add a one-line intro `p` (matching precedent `text-[17px] sm:text-[19px] ... mb-8`) so the section has a lead-in and isn't just an eyebrow floating over 3 links. |
| **Faq** | STRONG | Accordion, tokens, type scale all 1:1 with precedent. | None. |
| **FinalCta** | STRONG | Enhancement over precedent: CBD skyline `object-cover opacity-25` + navy top-gradient overlay + white copy. Legible, on-brand, `py-20 sm:py-28` gives the closing beat weight. Alt present. | None. Contrast of white text over the dark-gradient bottom is safe; keep the gradient `via-[#0A1128]/85` as-is. |

### Infographic clarity — SeoRankCard (Hero)
**STRONG.** Clearly communicates the two-part thesis: a Google-search row (rank counts 8→1 with a yellow "Ranked" badge) + an AI-answer row ("A good option is ✓ Your business") + a footer literally labelled "Found on Google / Named by AI". Sharp corners, `#e7e6e4` borders, `#FCCA07`/blue-600/green accents, `font-alte`/`font-geist`, offset stacked-depth border and soft shadow — all match SpeedToLeadCard's language. Legible, not cluttered, and the reduced-motion fallback is handled. No fixes.

---

## Cross-cutting checks

- **Token consistency — PASS.** cream `#F9F6F4`, navy `#0A1128`, yellow `#FCCA07`, `blue-600`, `red-500` eyebrows, `#e7e6e4` borders, `rounded-none`, `font-alte`/`font-geist` used throughout. `green-500/50/700` accents also appear in the precedent (SpeedToLeadCard), so on-brand. No off-token hex found.
- **Background rhythm — PASS.** Perfect alternation: cream(Hero) → white → cream → white → cream → white → cream → white → cream → white → cream → navy(CTA). No two same-bg sections collide; `border-t`/`border-b` separators used where two cream/white edges meet.
- **Type scale — PASS.** Every H2 `text-[26px] sm:text-[34px]`, H1 `1.9/2.3/2.5rem`, CTA `2xl/4xl` — all identical to precedent.
- **Responsive — mostly PASS.** CompareTable and all grids collapse cleanly. Two nits: the three text-card sections use `md:grid-cols-3` (jumps straight to 3-up at 768px, where the precedent prefers `sm:grid-cols-2 lg:grid-cols-3`), which crowds long paragraphs on tablet; and WhoThisIsFor's `lg:grid-cols-3` image can go tall/narrow.
- **Alt text — PASS.** All four wired images have descriptive alt.

---

## Prioritized fix list (top 10, ranked by design impact)

1. **Wedge — add visual weight to the 3 cards.** Add an `IconTile` (or `border-l-2 border-l-[#FCCA07]` + `01/02/03`) to each. It's the page's key differentiator section and currently the flattest. (`sections.tsx` ~L175–185)
2. **UncomfortableTruth — add the missing H2.** Insert `h2` (`font-alte text-[26px] sm:text-[34px] text-[#0A1128] tracking-[-0.04em] leading-[1.1] mb-6 max-w-3xl`) between Eyebrow and the grid, matching every other section and the precedent. (`sections.tsx` ~L109–112)
3. **Pricing — differentiate the cards from plain text.** Add `01/02/03` index numbers or a small icon per card so it doesn't read as the same rectangle three times and doesn't blur into the following Comparison callout. (`sections.tsx` ~L254–263)
4. **WhoThisIsFor — fix the image column proportion.** On `lg` the stretched `min-h-[220px] h-full fill` image becomes a tall narrow crop. Give it a bounded ratio (`aspect-[3/4] lg:h-full`) or revert to the precedent's clean 2-col text layout. (`sections.tsx` ~L348–359)
5. **Truth / Wedge / Pricing — soften the tablet grid.** Change `md:grid-cols-3` → `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (or `grid-cols-1 lg:grid-cols-3` for the long-paragraph Truth cards) so text-heavy cards aren't crammed into ~230px columns at 768px. Aligns with precedent's StartWith/SG grids.
6. **Proof — fix image/copy height mismatch.** Grid `items-center` + fixed `aspect-[16/11]` leaves the image floating shorter than the copy column. Use `items-stretch` + wrap image in `h-full`, or a taller ratio. (`sections.tsx` ~L291, L327)
7. **UncomfortableTruth — add a reframe/climax line.** The precedent closes this beat with a `border-l-2 border-[#FCCA07]` callout; adding one here gives the section a payoff instead of ending on the 3rd card. (`sections.tsx` after L125)
8. **Explore — add a one-line intro.** Precedent's Explore has an intro `p`; without it this section is just an eyebrow over 3 links and reads thin. (`sections.tsx` ~L399)
9. **LocalSeo — tighten the heading/image top edge.** Optional `items-start` (instead of `items-center`) so the short heading column and the 16/10 image align at the top rather than the heading floating mid-height. (`sections.tsx` ~L210)
10. **Hero — guard against mobile horizontal overflow.** Add `overflow-hidden` (or `overflow-x-clip`) to the hero `<section>` so the `-right-10 w-[420px]` blur can't cause a sliver of horizontal scroll on small screens. (`sections.tsx` L39)
