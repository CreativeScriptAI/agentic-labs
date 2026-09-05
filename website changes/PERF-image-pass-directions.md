# Directions: image optimization pass (for an external LLM)

**Repo:** `/Users/aditya/Desktop/tryagentik-website/agentic-labs` (Next.js pages router).
**Goal:** convert the remaining raw `<img>` tags to optimized images to shave mobile page weight and avoid layout shift. This is the ONLY meaningful site-wide speed item left.

## What is already done (do NOT redo)
- **Fonts are already woff2 and global.** All local faces (`AlteHaasGrotesk`, `mondwest`, `neuebit`, `Kalam`) were re-encoded to woff2 and next/font points at them in `src/assets/fonts/*/index.ts`. Loaded in `src/pages/_app.tsx`, so every page already benefits. Nothing to do here.
- **`next.config.ts` image optimization is already ON:** `unoptimized: false`, `formats: ["image/webp","image/avif"]`, `deviceSizes` set. `remotePatterns` currently allows only `www.notion.so` and `images.unsplash.com`.
- **Reusable components already exist:** `src/components/OptimizedImage.tsx` and `src/components/LazyImage.tsx` (both wrap `next/image`). Prefer these over hand-writing `next/image`.

## Honest expectation
Most remaining `<img>` are TINY avatars (48-64px) that already have `loading="lazy"` and explicit `width`/`height`, so the gain is small. Prioritise the LOCAL images and the screenshot component (real wins); the external avatar swaps are optional polish.

## The exact files and what to change

### PRIORITY 1 (real wins, local assets)
1. **`src/pages/ai-memory-system/index.tsx`** lines ~208-210: three `<img src="/images/avatar-1.png" ...>` (also -2, -3) with `className="w-8 h-8 rounded-full ..."` and NO width/height. Convert each to `next/image` (or `OptimizedImage`) with `width={32} height={32}` (they render at w-8 = 32px), keep the classes, `alt="Customer"`. These are local PNGs, so no config change needed.

2. **`src/components/programmatic/ScreenshotShowcase.tsx`** line ~37: `<img src={shot.src} alt={shot.caption} className="w-full h-full object-cover object-top" />`. This renders inside a fixed-aspect container. Convert to `next/image` with `fill` + `sizes="(max-width: 768px) 100vw, 400px"` and keep `className` with `object-cover object-top`. Confirm the parent has `position: relative` (add if missing) since `fill` requires it. `shot.src` may be local or remote — if remote, ensure its hostname is in `remotePatterns` (see below).

### PRIORITY 2 (optional, tiny external avatars)
3. **`src/pages/ai-voice-agent/index.tsx`** (lines ~1524, ~1555, ~2100) and **`src/pages/ai-voice-agent-global/index.tsx`** (lines ~828, ~858, ~1204): `<img src="https://www.facehash.dev/api/avatar?...">` avatars, already `loading="lazy"` with width/height. To use `next/image` you MUST add `www.facehash.dev` to `remotePatterns` in `next.config.ts`. Given they are already lazy + sized, this is low ROI. **These are LIVE, ranking pages** — if you touch them, keep the exact rendered size and test for layout shift. If unsure, leave them as raw `<img>` (they are fine).

### DO NOT TOUCH
4. **`src/components/audit-landing/figma/ImageWithFallback.tsx`**: it relies on an `onError` fallback pattern that `next/image` handles differently. Leave it as a raw `<img>`. Low-traffic audit component.
5. The `backgroundImage: url(...)` CSS in ai-voice-agent (the chat wallpaper) is a CSS background, not an `<img>`; leave it.

## How to convert correctly (rules)
- Use the existing `OptimizedImage` / `LazyImage` component if its API fits; otherwise `import Image from "next/image"`.
- ALWAYS give explicit `width`+`height` (matching the rendered CSS size) OR use `fill` with a positioned parent + `sizes`. This prevents Cumulative Layout Shift.
- Above-the-fold hero images: add `priority`. Everything else: default lazy (do not add `priority`).
- Keep every existing `className` and `alt`. Never drop `alt`.
- For any REMOTE host you newly reference, add it to `remotePatterns` in `next.config.ts` (protocol https + hostname), or the build will error.

## Validation gate (must pass before shipping)
1. `npx tsc --noEmit -p tsconfig.json` clean.
2. `rm -rf .next && npm run build` exits 0 (a stale `.next` can throw a false `export-detail.json` ENOENT; the clean rebuild is the real check).
3. `grep -rn $'[–—]'` over changed files returns nothing (no em/en dashes — house rule).
4. Load each changed page (`npm run dev`, then the route) at 375px width: image renders, no layout jump on load, no console error.
5. Commit per the repo convention and push to `main` (Amplify auto-deploys). End the commit body with:
   `Co-Authored-By: <your model> <noreply@...>`

## Bonus: the woff2 recipe (only if new local fonts are ever added)
```
python3 -m venv /tmp/fontvenv && /tmp/fontvenv/bin/pip install fonttools brotli
/tmp/fontvenv/bin/python -c "from fontTools.ttLib import TTFont; f=TTFont('IN.ttf'); f.flavor='woff2'; f.save('OUT.woff2')"
```
Then point the `path` in the relevant `src/assets/fonts/*/index.ts` at the `.woff2`. Rendering is identical; typical size cut is 55-70%.
