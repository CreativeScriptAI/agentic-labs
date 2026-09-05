# Build Phase (Tracker)

**Date:** 19 Aug 2026 Â· **Owner:** Aditya Pandey
**How to use:** this is the live build log. Work top to bottom. Each item = a buildable unit with owner and status. Copy lives in `04-copy/`, the map lives in `03-architecture/website-architecture.md`. No existing URL changes, additions only.

**Status key:** â¬ not started Â· ð¡ in progress Â· â done Â· â blocked

---

## PHASE B0 â Architecture (do this first: the skeleton)

Re-group the site around the 4 lead-journey stages. No new pages required for this step, just IA and the pillar shells.

| # | Item | Owner | Status | Notes |
|---|---|---|---|---|
| B0.1 | Approve the canonical architecture (`03-architecture/website-architecture.md`) | Aditya | â¬ | sign off before building |
| B0.2 | Re-group top nav into Solutions (4 stages) + Free Tools + Compare + Resources + Company | Dev | â¬ | nav only, no URL change |
| B0.3 | Create the 4 stage pillar shells (empty hubs, correct slugs) | Dev + Claude (copy) | â¬ | `/lead-generation-agency-singapore/`, `/lead-qualification/`, `/follow-up-automation/`, `/appointment-booking-ai/` |
| B0.4 | Nest existing 83 pages under their stage (footer + pillar down-links + page up-links) | Claude (map) + Dev | â¬ | hub-and-spoke wiring |
| B0.5 | Add pillars to sitemap, footer, llms.txt | Dev | â¬ | additions only |

---

## PHASE B1 â The wedge (Stage 1 capture + the free tool)

| # | Item | Owner | Status | Notes |
|---|---|---|---|---|
| B1.1 | AI Visibility Checker landing page copy + meta (`/ai-visibility-checker/`, KD 5) | Claude | â¬ | no dev needed for copy |
| B1.2 | AI Visibility Checker tool app on `tool.tryagentikai.com` | Dev | â¬ | Google rank + LLM presence + AEO checklist; email-gated, rate-limited, spend-capped |
| B1.3 | Report + result page structure (`/ai-visibility-checker/report/...`) | Claude (copy) + Dev | â¬ | programmatic, indexable |
| B1.4 | Stage 1 capture pillar (`/lead-generation-agency-singapore/`) | Other agent + Claude | â | LIVE (213d8c0). Built by parallel agent, validated + pushed by Claude. |
| B1.5 | AEO pillar (`/answer-engine-optimization/`) copy + BUILD | Claude | â | full build by Claude (copy+code+wiring); validated on localhost:3001; awaiting push |
| B1.6 | Funnel wiring: tool email capture â report â book-the-fix CTA | Dev | â¬ | tag source in GA4 |

---

## PHASE B2 â Convert (Stage 4) + the positioning pillar

| # | Item | Owner | Status | Notes |
|---|---|---|---|---|
| B2.1 | Stage 4 Book & Convert pillar (`/appointment-booking-ai/`) | Claude | â | LIVE (793ee9d). Primary kw `ai appointment booking`. Owns the gaps: 6-step chain, 5 failure modes, no-show loop, honest integration table. 3 animated infographics. |
| B2.2 | Forward-deployed positioning page (`/forward-deployed-engineers/`) | Claude | ✅ | LIVE (1582080). Built as a SALES asset (job-seeker SERP). Handover hero graphic + fair 4-way comparison. |
| B2.2b | AI Implementation Partner SG (`/ai-implementation-partner-singapore/`) | Claude | ✅ | LIVE (0e530ca). SEO counterpart to B2.2. Primary kw ai implementation partner singapore. IMDA-led, cross-links the 4 pillars, PDPA + grant trust layer. Connected-pipeline hero graphic. |
| B2.3 | Homepage copy swap (from `04-copy/home-page-copy.md`) | Dev | â¬ | copy is final |

---

## PHASE B3 â The remaining stages + service pages

| # | Item | Owner | Status | Notes |
|---|---|---|---|---|
| B3.1 | Stage 2 Qualify pillar (`/lead-qualification/`) | Claude | â | LIVE (a487fe6). Primary kw ai lead qualification. Owns: why qualification fails, frameworks and their limits, scoring vs conversation, honest limits. 2 animated infographics. |
| B3.2 | Stage 3 Warm Up pillar (`/follow-up-automation/`) | Claude | â | LIVE (f848ce0). Primary kw follow up automation. Owns: follow-up-as-systems-problem, worked multi-channel sequence, reply detection/when-to-stop, PDPA compliance section (the differentiator). 2 animated infographics. |
| B3.3 | 4 SG service pages under Stage 1: SEO, content, SEM/ads, social (all ~KD 0) | Claude | â¬ | |
| B3.4 | Brand pages aligned to narrative: Services, About | Claude | â¬ | drafts, dev builds |

---

## PHASE B4 â Authority + breadth

| # | Item | Owner | Status | Notes |
|---|---|---|---|---|
| B4.1 | AEO / pain-point blog spokes (one per topic) | Claude | â¬ | engineered for LLM citation |
| B4.2 | Vertical + geo spokes under each stage pillar | Claude | â¬ | after pillars rank |
| B4.3 | 3 to 5 SG backlinks / directory placements | Aditya | â¬ | biggest ranking lever |

---

## BLOCKERS (Aditya, unblock these to move)

| # | Item | Blocks |
|---|---|---|
| X.1 | SGD pricing bands | all SG service pages |
| X.2 | Google Business Profile (SG) | local pack on lead-gen SERPs |
| X.3 | One documented SG proof pilot | testimonials + all proof sections |
| X.4 | Confirm: tool email-gated + rate-limited | B1.2 build |

---

## KILL GATE (discipline)
Before building tool #2 or a second wedge: the AI Visibility Checker + its funnel must book **3 to 5 qualified calls in ~45 days**. If not, fix or kill before building more.

---

## Log
- 19 Aug 2026: architecture finalized (funnel-stage IA), folder restructured, build phases defined. Starting point = B0 architecture, then B1 wedge.
- 20 Aug 2026: full 4-stage journey spine LIVE (lead-gen, lead-qualification, follow-up-automation, appointment-booking) + AEO pillar + AI Visibility Checker. 7 pages shipped. Design system locked in PAGE-BUILD-KIT.md. FDE repositioned as sales asset; SEO weight to a new ai-implementation-partner-singapore page. GSC blocked on tech@creativescript.org sign-in; SG service pages blocked on SGD pricing.
- 20 Aug 2026 (later): FDE positioning page + AI Implementation Partner SG + 4 SG service pages (SEO/content/GoogleAds/social, priced ~15pct below market from DataForSEO+competitor research) shipped. Nav By Outcome regrouped by journey stage. 13 new pages total this run. Blockers cleared except GSC sign-in (tech@creativescript.org) and Services/About rewrite decision.
