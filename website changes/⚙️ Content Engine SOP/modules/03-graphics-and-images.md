# Module 03 — Graphics & Images

Governed by `../00-ORCHESTRATOR.md`.

## 1. Image rules (non-negotiable)

- **Light + compressed.** Serve WebP/AVIF, width-appropriate. Never ship a multi-MB hero.
- **Descriptive alt text on every image**, keyword-relevant and true to the image (e.g. "AI voice agent booking a dental appointment", not "image1").
- **No copyrighted scraping.** Only: original SVGs, license-clear stock (Unsplash), same-origin vendor UI captures, or generated assets.
- **Sourcing:** the Claude in Chrome extension can capture on-screen visuals; keep them light and legal.

## 2. Infographics (the real edge)

Every section should carry a real infographic, not a stock photo. The repo already has a component library (`agentic-labs/src/components/programmatic/`): `HeroFlowExplainer` (5-step flow), `ComparisonBars`, `AnimatedStat`, `BigStatCards`, `ConnectorLine`, `NodeNumber`, `LogoStrip`, `ScreenshotShowcase`. **Reuse these; do not reinvent.** For a new diagram, match their style and the design tokens (Module 05).

Infographics lift conversion and dwell time (an SEO signal) and give the page an edge, even if they do not rank directly. Prefer an explainer infographic over a stock photo in any hero when a good image is not available.
