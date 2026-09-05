# Module 05 — Design System

Governed by `../00-ORCHESTRATOR.md`. This is what makes any LLM output on-brand. Source of truth: `agentic-labs/tailwind.config.*` and `src/styles/`; open them if a token is missing here.

## Colors
- Background cream `#F9F6F4` (sections), white `#FFFFFF` (cards), dark footer `#060D1F`.
- Text / headings dark navy `#0A1128`; muted body `slate-600`.
- Accents: yellow `#FCCA07` (dot / highlight), blue `#2563EB` (blue-600, emphasis + links), red `#EF4444` (red-500, eyebrows / labels).
- Borders `#e7e6e4`.

## Type
- `font-alte` (Alte Haas Grotesk) = headings + display body. Tight tracking `-0.04em`, leading ~1.1 to 1.5.
- `font-geist` = labels, eyebrows, UI. Uppercase, tracking `+0.02em`, ~12px.
- Decorative/pixel fonts (`mondwest`, `neuebit`, `kalam`) = accents only.

## Signature conventions
- **Sharp corners everywhere: `rounded-none`.** No border-radius. The lab / technical look.
- **Eyebrow pattern:** `font-geist text-[12px] uppercase tracking-[0.02em] text-red-500` with a small yellow dot (`w-1.5 h-1.5 rounded-full bg-[#FCCA07]`) beside it.
- **Section rhythm:** `py-16 sm:py-24`, containers `max-w-6xl` (wide) or `max-w-3xl` (text), padding `px-4 sm:px-6 lg:px-8`.
- **Two-line hero headline:** line 1 dark `#0A1128`, line 2 `text-blue-600`.
- **Responsive + theme:** mobile-first; keep contrast and the light background explicit.

Any new section must use these tokens so it looks native to the site.
