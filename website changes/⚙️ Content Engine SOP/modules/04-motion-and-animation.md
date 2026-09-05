# Module 04 — Motion & Animation

Governed by `../00-ORCHESTRATOR.md`.

## 1. On-page motion (the website)

- Library: **framer-motion**.
- **Critical gotcha:** the declarative `whileInView` prop silently fails to fire in this project. Use the imperative pattern: `useInView` hook + `animate()` + direct `ref.current.style.*` mutation inside `useEffect`. Every existing animated component uses this. Copy that pattern.
- Keep motion subtle: fade-up + short translate on scroll-in, staggered by index. No gratuitous movement.

## 2. Video / B-roll / reels (social + hero video)

Source SOPs: `/Users/aditya/Desktop/random ai experiments/heygen hyperframes (old video editing)/` contains `BROLL-EXTRACTION-SOP.md`, `CREAM-GRID-KINETIC-STYLE-SOP.md`, `REELS-EDITING-SOP.md`. Read the relevant one before producing any video or animated B-roll. The "cream grid kinetic" style matches the site's cream + sharp-corner aesthetic.
