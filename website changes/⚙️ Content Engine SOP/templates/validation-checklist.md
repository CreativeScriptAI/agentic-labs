# Validation Checklist (Claude Validator)

Run by Claude on the built localhost output when Aditya says "validate". Internal only. Log each as PASS/FAIL with evidence to the page's `03-validation.md`. Any FAIL blocks the push; report the exact fix for the building LLM.

## How to run
1. Start the dev server (preview_start), open the page, screenshot + read_console_messages (errors only).
2. Run `npx tsc --noEmit -p tsconfig.json`.
3. Grep the built page/component files for dashes and check copy against `01-copy.md`.

## Gates (all must pass)

**Render**
- [ ] Page renders on localhost, no console errors.
- [ ] `tsc --noEmit` clean.
- [ ] Responsive: check mobile + desktop, no horizontal scroll.

**Copy fidelity**
- [ ] Copy matches approved `01-copy.md` verbatim (spot-check headline, sub, CTAs, FAQ).
- [ ] Zero em/en dashes (`grep` the files).
- [ ] No invented stats, clients, or testimonials.
- [ ] Voice check: reads like the buyer, not like us.

**SEO**
- [ ] Target keyword in title, H1, slug.
- [ ] Meta description present and correct.
- [ ] Internal links wired (hub-and-spoke), no orphan.
- [ ] Schema present (Service/Article + FAQPage + BreadcrumbList).
- [ ] Page in sitemap.xml, footer, llms.txt.

**Assets**
- [ ] Every image has descriptive, keyword-relevant alt text.
- [ ] Images light (WebP/AVIF, sensible size), no multi-MB hero.
- [ ] Infographics render + animate; motion uses the imperative `useInView` pattern.

**Design**
- [ ] Uses the design tokens (colors/fonts/spacing) from Module 05.
- [ ] `rounded-none`, eyebrow pattern, section rhythm correct.

## Output
- Write PASS/FAIL per gate + evidence to `03-validation.md`.
- If all PASS: state "ready to push", await Aditya's go, then push.
- If any FAIL: list the exact fixes; the building LLM redoes; re-validate.
