# Phase 0 Findings: Singapore Keyword + SERP Validation (DataForSEO)

**Date:** 17 August 2026
**Spend:** $0.228 of the $5 ceiling (balance $50.53 → ~$50.30). Cache: `dataforseo-cache/`.
**Method:** Google Ads search volume (70 seeds, SG/en) + Labs keyword ideas (3,666 total) + 12 live SG SERPs.

---

## The one-line verdict

Singapore is **not a search-traffic market** for AI marketing/sales agents. It is a **positioning-and-conversion market**. The data kills the "build many SG keyword pages" plan and validates a narrower one: a few genuinely winnable niche pages plus the forward-deployed-engineering narrative as the closer. Proceed, but smaller and sharper than the original Phase 1.

---

## What the numbers actually said

### Volume: thin, as the hypothesis predicted (only harder)
Only **18 of 70 seeds** had any measurable SG volume. The specific high-intent lane we most wanted (ai sdr, sales automation, lead qualification, crm automation, whatsapp automation, ai voice agent, every vertical-x-SG, almost every grant term) returned **zero**. Google Ads "zero" means below ~10/mo, not literally none, but the signal is unambiguous: the granular SG buyer is not typing these queries.

What does have volume:

| Keyword | SG vol/mo | CPC | Comp | Read |
|---|---|---|---|---|
| forward deployed engineers | 1000 | $1.51 | LOW | Job-seeker intent (see SERP), not buyer |
| ai grant singapore | 210 | $1.97 | HIGH | Government-owned |
| ai agency singapore | 70 | $5.85 | MED | Generic, mixed gov+agency |
| ai consulting singapore | 40 | $4.54 | MED | Big-4 present |
| ai consultant singapore | 40 | $4.54 | MED | same |
| whatsapp business api singapore | 40 | $0.00 | LOW | Funded SaaS-owned |
| ai automation agency singapore | 30 | $5.26 | MED | **Small-agency SERP — winnable** |
| ai agents singapore | 30 | $8.13 | MED | Government/education intent |
| lead generation agency singapore | 30 | **$30.11** | HIGH | High value, agency SERP |
| b2b lead generation singapore | 20 | **$20.02** | MED | High value, agency SERP |
| ai receptionist singapore | 10 | $13.78 | MED | **Small players, on-brand — winnable** |

The keyword-ideas expansion (3,666 candidates) added no rescue: filtered to on-theme terms it collapsed into dictionary noise ("lead" as a verb). There is no hidden vocabulary of SG buyer queries we failed to seed. The demand is genuinely small.

### SERP ownership: who we would actually fight (live SG results)

**Government-owned (do not target):** `ai grant singapore`, `ai agents singapore`, `ai solutions singapore` are held by enterprisesg.gov.sg, imda.gov.sg, mas.gov.sg, csa.gov.sg, aisingapore.org. Undisplaceable and mostly informational intent anyway.

**Job/definitional, not commercial (do not target as a service page):** `forward deployed engineers` top 10 = LinkedIn Jobs, Straits Times ("AI jobs: FDE in demand"), OpenAI careers, Reddit, DataCamp, IIT. AI Overview present. Searchers want a job or a definition, not a vendor. The 1000 volume is a mirage for lead gen. **But** the definitional slots (invisibletech.ai, datacamp "What is a Forward Deployed Engineer") are winnable with a strong explainer, which is a top-of-funnel authority and AI-Overview-citation play worth having.

**Funded SaaS (avoid head terms):** `whatsapp business api singapore` = Sleekflow (funded SG), moobicast, omnichat, Capterra. Product companies, not our fight.

**Winnable — competitors are small agencies our size:**
- `ai automation agency singapore` → beyond.agency, closegen.ai, osinity, 41labs.ai. No gov, no G2, local pack. **Best structural fit.**
- `ai receptionist singapore` → aireceptionist.sg, aireceptionists.io, trelinx, helixx.ai, coldcalling.sg. Small players + exact-match domains. Low volume but exactly what we build.
- `lead generation agency singapore` / `b2b lead generation singapore` → callbox, mediaonemarketing, brew, mediaplus (established SG lead-gen shops) + Clutch. Harder, but the $20–30 CPC proves real commercial value, and the players are agencies (beatable with a sharp AI-FDE angle) not SaaS.
- `ai agency singapore` → aisingapore.org + imda + real agencies (aistudio, beyond, digitalsquad, voltade). Generic, mixed, 6–12mo grind.

---

## What this does to the three claims

1. **Geography (SG-first):** Partially confirmed, reframed. SG is real and reachable, but through a handful of low-volume niche terms, not a keyword footprint. The traffic ceiling is low (realistically tens of visitors/mo from these terms combined). This is a **lead-quality and positioning** beachhead, exactly as hypothesized, and even more so than expected. GA4 corroborates: SG is already our #1 country via direct/social, meaning SG demand flows through referral/social/outbound, not search. SEO here is credibility support, not the demand engine.
2. **Focus (marketing/sales agents):** Confirmed as positioning; **not** confirmed as an SG search lane. The winnable SG terms are "ai automation agency," "ai receptionist," "lead generation agency" — adjacent to our focus and defensible. The granular sub-services have no SG search demand to capture.
3. **Category (FDE):** Confirmed as a **narrative and citation** asset, disqualified as an SG lead-gen keyword (job intent). Build the pillar, but measure it on brand lift and AI-Overview citation, not SG conversions.

---

## Revised Phase 1 (smaller, sharper than the original doc)

Build **3 pages, absurd depth, zero fabrication**, not six:

1. **`/ai-automation-agency-singapore/`** — the SG spine. Targets the single best winnable+on-brand term. Positioned as the forward-deployed engineering team for marketing and sales, serving SG/SEA. SGD pricing, PDPA/data-residency, honest remote-embedding section, local pack eligibility (NAP consistency). Also naturally captures "ai agency singapore" adjacency.
2. **`/ai-receptionist-singapore/`** — narrow, on-brand, small-competitor SERP, high CPC. Fastest realistic first-page win. Feeds the voice/receptionist inventory we already have.
3. **`/forward-deployed-engineers/`** (global, not SG-locked) — the category pillar. Defines FDE, contrasts pilots vs deployments, states our operating model. Measured on positioning + AI-Overview/LLM citation, not conversions. Arms every sales conversation.

Hold `lead generation agency singapore` / `b2b lead generation singapore` for Phase 2 — highest value ($20–30 CPC) but hardest SERP; attack once the site has SG signal and one proof asset. Skip grants, whatsapp head term, ai agents/solutions (gov/SaaS-owned).

**Non-SEO implication (the important one):** because SG demand does not flow through search, the highest-leverage SG move is not more pages, it is **one documented SG proof asset + LinkedIn/outbound presence**. SEO makes us credible when an SG buyer checks us out; it will not be the thing that finds them. Plan the go-to-market accordingly.

---

## Recommended next actions

1. **Decision for Aditya:** approve the revised 3-page Phase 1 (down from 6). Confirm SGD pricing bands to display.
2. **Claude (no further API needed):** draft `/forward-deployed-engineers/` pillar copy now (positioning-dependent, not data-dependent), then the two SG pages.
3. **Optional tiny API spend (~$0.05, ask first):** keyword-difficulty scores + a second SERP look at `lead generation agency singapore` depth-30 to size the Phase 2 climb precisely. Not required to start Phase 1.
4. **Aditya, go-to-market:** identify the one SG business for a documented proof pilot. This is now the #1 lever, above any page.
