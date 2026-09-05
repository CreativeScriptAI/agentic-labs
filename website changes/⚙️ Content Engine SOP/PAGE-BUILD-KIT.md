# PAGE BUILD KIT (read before building any page section)

**What this is:** the locked, proven design + code system for tryagentikai.com pillar pages. It exists because earlier builds were rejected as generic. Everything here is what actually shipped and passed review on `/answer-engine-optimization/` and `/lead-generation-agency-singapore/`. Follow it exactly. Do not invent a new visual language.

**You have zero project memory. Everything you need is here.**

---

## 1. NON-NEGOTIABLE RULES

1. **No em dashes or en dashes. Ever.** No `—` and no `–`. Use commas, periods, or "to" in ranges.
2. **No fabricated stats, clients, or testimonials.** Every number must carry a named primary source inline (e.g. "Pew Research Center, 2025"). If you cannot source it, cut it.
3. **Sharp corners only.** `rounded-none` everywhere. Never `rounded-lg`, `rounded-xl`, `rounded-full` (the only exception: tiny status dots and rank badges may be circular).
4. **Declarative framer-motion silently fails in this project.** Never use `whileInView` or `animate` as JSX props. Use the imperative pattern in section 5.
5. **Mobile-first.** Every section must render correctly at 375px with zero horizontal page overflow. Wide tables/diagrams scroll inside their own `overflow-x-auto` container, never the page body.
6. **Respect `prefers-reduced-motion`** in every animated component: render the final state, no timers.

---

## 2. DESIGN TOKENS (exact values)

| Token | Value | Use |
|---|---|---|
| Ink | `#0A1128` | headings, primary text, dark sections, filled badges |
| Page cream | `#F9F6F4` | alternating section background |
| White | `#FFFFFF` | alternating section background, cards |
| Border | `#e7e6e4` | every border |
| Accent yellow | `#FCCA07` | primary CTA, the ONE focal moment, node numbers |
| Emphasis blue | `text-blue-600` | second headline line, key emphasis |
| Eyebrow red | `text-red-500` | eyebrow label text only |
| Muted tint | `#efeee9` | inactive bars, muted slabs |
| Body muted | `text-slate-600` | body copy |
| Label muted | `text-slate-400` / `text-slate-500` | small labels, captions |

**Semantic status colors** (separate from the brand accent): emerald = good, amber = partial, red = bad.

**Dark sections** (use sparingly, one or two per page for rhythm): bg `#0A1128`, text white / `text-slate-300`, borders `border-white/10`, cards `bg-white/[0.03]`, eyebrow in `#FCCA07`.

---

## 3. TYPOGRAPHY

- **Headings + body:** `font-alte` with `tracking-[-0.04em]` (tighter for large sizes: `tracking-[-0.05em]`).
- **Eyebrows, labels, chips, numbers:** `font-geist` `uppercase` `tracking-[0.02em]`.
- **Digits in columns:** add `tabular-nums`.

Sizes that work:
- H1: `text-[2rem] sm:text-4xl lg:text-[2.9rem] leading-[1.08]`
- H2: `text-[28px] sm:text-[38px] leading-[1.05]`
- Lead paragraph: `text-[17px] sm:text-[19px] leading-[1.5]`
- Body: `text-[15px] sm:text-[17px] leading-[1.55]`
- Small label: `text-[11px]` or `text-[12px]` uppercase

Always add `text-balance` to headings.

---

## 4. LAYOUT

- Section rhythm: `py-16 sm:py-24`. Hero: `pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pb-24` (top padding clears the fixed nav).
- Containers: use the shared `Container` primitive with `size="lg"` (max-w-6xl), `"md"` (max-w-5xl), or `"sm"` (max-w-3xl). It already applies `px-4 sm:px-6 lg:px-8`.
- Alternate section backgrounds white / `#F9F6F4` for rhythm, with `border-b border-[#e7e6e4]`.
- **Hero is ALWAYS two columns on desktop:** copy left, infographic right, vertically centered. Never a single column with a graphic dumped below it.
  ```
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
    <div className="lg:col-span-6"> ...copy... </div>
    <FadeUp delay={0.14} className="lg:col-span-6 order-last w-full max-w-md mx-auto lg:max-w-none">
      ...graphic...
    </FadeUp>
  </div>
  ```

---

## 5. THE MOTION PATTERN (copy exactly)

Import the shared `FadeUp` from `../AiVisibilityChecker/primitives` and wrap every block. For custom animation (bars, lines, counters) use this imperative form:

```tsx
"use client";
import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

const ref = useRef<HTMLDivElement>(null);
const inView = useInView(ref, { once: true, margin: "-40px" });

useEffect(() => {
  if (!inView || !ref.current) return;
  const el = ref.current;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.style.transform = "scaleX(1)";   // final state
    return;
  }
  const controls = animate(0, 1, {
    duration: 0.8,
    ease: "easeOut",
    onUpdate: (v) => { el.style.transform = `scaleX(${v})`; },
  });
  return () => controls.stop();
}, [inView]);
```

Stagger grouped items with `delay: i * 0.07`. Keep motion subtle: fade + short slide, bars filling, numbers counting. No bounce, no spin, no parallax.

---

## 6. SHARED COMPONENTS (import, do not rebuild)

From `src/components/sections/AiVisibilityChecker/primitives`:
- `Container({ children, className?, size?: "sm"|"md"|"lg" })`
- `Eyebrow({ text, center? })` — red uppercase label with a yellow dot
- `FadeUp({ children, className?, delay? })` — scroll reveal wrapper
- `ExampleChip({ className? })` — the "Example" tag (REQUIRED on any sample data)
- `CheckSvg` / `XSvg`
- `engineStatusMeta` — status color map

From `src/components/sections/AiVisibilityChecker/EngineLogos`:
- `EngineLogo({ name, className? })` — real brand SVG. Valid names EXACTLY: `"ChatGPT"`, `"Perplexity"`, `"Google AI"`, `"Gemini"`, `"Grok"`, `"Claude"`. Always place on a light/white tile.
- `EngineBadge({ name, className?, logoClassName? })`

From `src/components/BracketButton`:
- `BracketButton({ label, href?, onClick?, variant?: "primary"|"secondary", className? })` — renders `[ LABEL ]`. Primary = yellow. This is the ONLY button style.

---

## 7. THE INFOGRAPHIC STANDARD (this is what gets rejected or accepted)

Every major section needs a custom, coded infographic. Not stock images, not icon grids, not bordered text tiles pretending to be a diagram.

**What FAILED review and must never be repeated:**
- Rows of bordered text cards labeled as a "diagram".
- Empty gray squares next to list items (reads as a web form / checkboxes).
- Four detached cards where a connected flow was needed.
- A graphic dumped in a lonely column below the fold with dead space beside it.

**What PASSED review:**
- **Data-viz that encodes the point.** A leaderboard where competitors have filled bars and the reader's business has an empty dashed-yellow bar. The gap is visible before a word is read.
- **A connected timeline** with a spine that draws in on scroll, not separate cards.
- **A layered stack** where one layer visibly supports another (foundation to outcome).
- **A real pipeline flow** with numbered nodes and animated connectors.
- **A recurring motif.** One idea repeated across the page (e.g. the pulsing empty "Your business?" seat) so the page feels authored, not assembled.

**Rules of thumb:**
- Encode meaning in FORM (length, fill, position, connection), not just color.
- Exactly ONE focal moment per graphic, and it is the only yellow.
- Label sample data with `<ExampleChip />`.
- Build in SVG/CSS. Never raster, never external images.

---

## 8. PAGE SKELETON (copy this structure)

Files per page:
```
src/pages/<slug>/index.tsx                     <- meta + JSON-LD + renders the section component
src/components/sections/<PascalName>/copy.ts   <- ALL strings (META, FAQS, section objects)
src/components/sections/<PascalName>/index.tsx <- stacks sections + <FooterSection />
src/components/sections/<PascalName>/sections.tsx  <- the section components
src/components/sections/<PascalName>/<Graphic>.tsx <- one file per infographic
```

`src/pages/<slug>/index.tsx`:
```tsx
import MetaConfig from "src/components/MetaConfig";
import Page from "src/components/sections/<PascalName>";
import { FAQS, META } from "src/components/sections/<PascalName>/copy";

const articleSchema = { "@context":"https://schema.org", "@type":"TechArticle",
  headline: "...", description: META.description, url: META.url,
  mainEntityOfPage: META.url,
  author: { "@id":"https://www.tryagentikai.com/#organization" },
  publisher: { "@id":"https://www.tryagentikai.com/#organization" },
  datePublished: "2026-08-20", dateModified: "2026-08-20" };

const faqSchema = { "@context":"https://schema.org", "@type":"FAQPage",
  mainEntity: FAQS.map((i) => ({ "@type":"Question", name: i.question,
    acceptedAnswer: { "@type":"Answer", text: i.answer } })) };

const breadcrumbSchema = { "@context":"https://schema.org", "@type":"BreadcrumbList",
  itemListElement: [
    { "@type":"ListItem", position:1, name:"Home", item:"https://www.tryagentikai.com/" },
    { "@type":"ListItem", position:2, name:"<Page Name>", item: META.url }] };
```
Render `<MetaConfig title description type="Page" url canonical keywords />` then the three `<script type="application/ld+json">` tags, then the page component.

**Breadcrumb links must use `next/link`**, never `<a href="/">` (it fails the production ESLint build).

---

## 9. REGISTRATION (4 files, every new page)

1. `src/pages/sitemap.xml.tsx` -> add `{ path: "/<slug>/", priority: 0.9, lastmod: "YYYY-MM-DD" }`
2. `src/components/sections/FooterSection/index.tsx` -> add `{ name, to }` to the right column
3. `src/layouts/RootLayout/Header/NavBar.tsx` -> add `{ name, to, desc }` to the right nav array
4. `src/pages/llms.txt.tsx` -> add a `lines.push(...)` entry

Markdown endpoints need NO registration (they only serve programmatic pages).

---

## 10. VOICE (Module 01 summary, enforced)

- Lead with the **consequence the buyer says**, not our jargon. Their words: "leads", "booked calls", "website gets traffic but no enquiries", "chasing", "they ghost", "no-shows", "speed to lead".
- Introduce technical terms (AEO, GEO, lead scoring) as the **mechanism**, never as the emotional hook.
- Say **leads**, never "prospects" or "contacts". Say **follow up**, never "reach out" or "touch base".
- Avoid in headings: "AI agents", "orchestrate", "workflow", "deploy", "revenue leak", "close the gap", "leaving money on the table".
- Opinionated and concrete beats clever. Short sentences.
- Honesty is the differentiator: where the industry overclaims, say what is actually true and cite it. That is what earns citations.

---

## 11. VALIDATION GATE (must pass before push)

- `npx tsc --noEmit -p tsconfig.json` clean
- `npm run build` exits 0 (catches ESLint errors that block deploy)
- Zero em/en dashes: `grep -rn $'[–—]' <new files>`
- Zero fabricated stats: every number has a named source inline
- No console errors on localhost (use a FRESH browser tab, old tabs cache stale errors)
- Renders at 375px with no horizontal page overflow
- Title/H1/slug carry the target keyword; 3 schemas present; registered in all 4 files
