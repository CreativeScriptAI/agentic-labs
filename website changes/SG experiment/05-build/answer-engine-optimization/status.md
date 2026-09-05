# Status: Answer Engine Optimization pillar

**Page:** `/answer-engine-optimization/` (B1.5) · **Stage:** BUILT + validated on localhost. Awaiting Aditya review + push.

Built end-to-end by Claude this time (copy + code + wiring), not an external LLM. Grounded by 3 parallel scout agents: codebase build-map, AEO SERP/competitor teardown, copy-lexicon + keyword harvest.

**Copy lives in code:** `src/components/sections/AnswerEngineOptimization/copy.ts` (single source of truth; reviewable). Sections in `StaticSections.tsx`, page shell `index.tsx`, route `src/pages/answer-engine-optimization/index.tsx`.

**Key decisions (from research):**
- Voice leads with the consequence buyers actually say ("website gets traffic but no enquiries"), AEO introduced as the mechanism, not the hook.
- Structure: hero (answer-first def) → AEO/GEO/AI-SEO terms → AEO vs SEO (table) → why now → engine mechanism → checklist → how to rank in ChatGPT → measure → the fix → FAQ → final CTA.
- Honest differentiators: accurate engine mechanism (ChatGPT=Bing index, Google AI/Gemini=grounding), and the truthful llms.txt caveat (no major engine confirms using it).
- Only primary-sourced stats, attributed inline: Pew Research (2025), Gartner (2024), OpenAI (800M WAU), SparkToro, Princeton/IIT GEO paper (arXiv 2311.09735). Fabricated "citation weight" and inflated aggregator stats deliberately excluded.
- Reused Checker components: primitives (Container/Eyebrow/FadeUp), EngineLogo, OldVsNewSearch.

**Validation:** tsc clean, 0 dashes, no console errors, 3 schemas (TechArticle+FAQPage+Breadcrumb), engine logos render, FAQ accordion works, no horizontal overflow. Wired into sitemap, footer (Resources), nav (Resources), llms.txt.

**Local:** http://localhost:3001/answer-engine-optimization/

**Infographics pass (v2):** 5 bespoke animated infographics added (built by 5 parallel agents, integrated by Claude):
- `AeoHeroGraphic` — hero AI-answer mock, rotating engine chip, pulsing empty "Your business?" seat.
- `TermsDiagram` — AEO (page/quotable) vs GEO (source/trusted) on-page/off-page diagram.
- `SeoAeoStack` — SEO foundation supporting the AEO layer, answer lifts out.
- `MechanismFlow` — animated RAG pipeline (ask -> search index -> rerank -> cite) + per-engine source row (flagship).
- `RankTimeline` — connected drawing-in timeline for "how to rank in ChatGPT".
- Plus count-up animation on the Why-Now stat cards, and reused OldVsNewSearch.
All imperative framer-motion, reduced-motion safe, mobile-first. Re-validated: tsc clean, no console errors, all 5 render, no page overflow at 375px.

**Hero redesign (v3):** Aditya called v2 hero "pathetic" (bad layout, hierarchy, infographic reading as a form). Rebuilt:
- Two-column hero (copy left, infographic right, vertically centered); tightened headline (less blue), one-line sub; moved the long answer-first paragraph down to lead the Definition section (kept for SEO/LLM).
- Rebuilt the hero infographic via 2 parallel agents (2 variants): `AeoAnswerCardA` (Perplexity-style cited answer) and `AeoAnswerCardB` (visibility leaderboard with mention bars + empty "Your business / NOT NAMED YET" bar). SHIPPED variant B (clearer gap, more infographic). A kept in codebase for one-line swap. Old `AeoHeroGraphic.tsx` now orphaned.
- Validated: tsc clean, no console errors, mobile 375px stacks cleanly, no overflow.

**Open:** Aditya review; likely apply the same design lift to the other 4 infographics (Terms/Stack/Mechanism/Timeline). Then push. Cross-link to `/lead-generation-agency-singapore/` once that route exists.
