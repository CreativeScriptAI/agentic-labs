# Singapore + Forward-Deployed Pivot: Master Phased Action Plan

**Date:** 17 August 2026 · **Owner:** Aditya Pandey
**Supersedes as the action layer:** `sg-fde-hypothesis.md`, `phase0-findings.md`, `gap-analysis-bofu.md`, `sg-keyword-universe.md` (all remain as the reasoning/evidence behind this).
**DataForSEO spend to date:** $0.73 of the running budget · balance ~$49.81.

---

## The strategy in five lines

Reposition tryagentikai.com as a **forward-deployed engineering team for marketing and sales** (embed, ship, be accountable for pipeline). Beachhead in **Singapore**, where competition is thin and lead value is high. Win on the terms SG buyers actually type: the **lead-generation** cluster (KD 0–8, $20–45 CPC), not "AI agent" (near-zero volume). Convert the SG "silent buyer" with on-page credibility. Upsell **landing-page + SEO** via the sister agency **unsafe.design**. Once SG signal is real, promote the narrative globally and open the US.

---

## Evidence base (locked, verified this week)

- **Keyword reality:** SG buyers search SERVICE + price-PAIN, not OUTCOME or TECHNOLOGY. Winnable low-hanging fruit: `singapore lead generation` (KD 0), `lead generation agency` (KD 5, $45 CPC), `b2b marketing agency singapore` (KD 8), `seo package singapore` (KD 0), `affordable web design singapore` (KD 0). Note: plain "lead generation agency" (KD 5) is far easier than "…agency singapore" (KD 43) — target plain phrasings.
- **Behaviour:** SG is a **silent-buyer** market. Cold outreach yields ~1–3 leads/week, <2% reply; buyers research website + LinkedIn before engaging. SEO validates, referral/outbound discovers.
- **Site state (GSC/GA4, 17 Aug):** 81 pages indexed, sitemap Success (82 URLs), 97 clicks/3mo, engagement 16s. GA4 28-day: 434 users, org only 33, **Singapore already the #1 country** by users. Perplexity already referring (llms.txt paying off). All 7 deep GHL pages submitted for priority crawl.
- **Competitors:** awebstar (web/SEO), digital-marketing agencies (digitalsquad, mediaplus, beyond), lead-gen incumbents (callbox, mediaone, brew, singaporeleads), and the direct positioning rival **PipelineAI "Scout"** ("SG's first AI employee for outreach," Oct 2025). Our edge: forward-deployed + accountable, not self-serve.

---

## PHASE 0 — Foundation & validation  (STATUS: ~90% done)

| # | Action | Owner | Status |
|---|---|---|---|
| 0.1 | Fix empty-sitemap bug; confirm GSC Success | Claude | ✅ done |
| 0.2 | Submit 7 deep GHL pages for indexing | Claude | ✅ done |
| 0.3 | Pull GSC + GA4 baseline | Claude | ✅ done |
| 0.4 | SG keyword research + SERP + KD (DataForSEO) | Claude | ✅ done |
| 0.5 | Competitor + social recon | Claude | ✅ done |
| 0.6 | Deploy AI-readability (llms.txt, /mcp, markdown) — build fix pushed | Claude | ✅ pushed (`4039f78`), verify live after deploy |
| **0.7** | **Decide SGD pricing bands** for lead-gen + landing-page offers | **Aditya** | ⬜ blocking Phase 1 |
| **0.8** | **Stand up a Google Business Profile** (SG) — the lead-gen SERPs show a local pack; no GBP = locked out of it | **Aditya** | ⬜ blocking local-pack |
| **0.9** | **Name the one SG proof pilot** (client/warm intro for a documented lead-gen result) | **Aditya** | ⬜ highest non-SEO lever |

**Exit gate:** 0.7–0.9 answered. Nothing in Phase 1 copy is fabricated; if no proof pilot yet, pages ship with honest "how we work" framing, not invented case studies.

---

## PHASE 1 — The lead-generation beachhead  (weeks 1–3)

Goal: rank for the KD 0–8 lead-gen cluster and convert the silent buyer. Three pages, absurd depth, zero fabricated stats (same discipline as the GHL rewrite + claims cleanup).

| # | Action | Owner | Notes |
|---|---|---|---|
| 1.1 | Draft `/forward-deployed-engineers/` (global category pillar) | Claude | Positioning + AEO citation; no API needed; contrasts pilots vs deployments; states our operating model |
| 1.2 | Build `/lead-generation-agency-singapore/` | Claude | Targets `singapore lead generation` (KD0), `lead generation agency` (KD5). FDE / AI-SDR "paid on pipeline". SGD pricing. Silent-buyer-proof credibility block. PDPA/DNC note |
| 1.3 | Build `/b2b-lead-generation-singapore/` | Claude | The $20–45 CPC value sibling; `b2b marketing agency singapore` (KD8) |
| 1.4 | Technical SG signals: hreflang en-sg, Organization schema `areaServed: SG`, SGD + (later) +65 on-page | Claude | |
| 1.5 | Wire into graph: footer SG cluster, nav, sitemap, llms.txt, internal links from GHL + services | Claude | |
| 1.6 | GBP: connect NAP to the pages for local-pack eligibility | Aditya + Claude | depends on 0.8 |
| 1.7 | Request indexing on the 3 new pages | Claude | |

**Measure (GSC filtered country = Singapore):** impressions on the lead-gen cluster; first positions within 4–8 weeks (KD 0–8 makes this realistic). **Kill/adjust:** if after 8 weeks zero SG impressions on these terms, the problem is authority/links, escalate Phase 2 backlinks.

---

## PHASE 1.5 — Landing-page + SEO retainer (unsafe.design)  (weeks 3–4)

Goal: the upsell that makes an SG client worth keeping, and a legit reason to touch the high-volume web/SEO terms.

| # | Action | Owner | Notes |
|---|---|---|---|
| 1.5.1 | Build `/high-converting-landing-pages-singapore/` | Claude | Targets `affordable web design singapore` (KD0), `seo package singapore` (KD0), `landing page design singapore`. Delivered via unsafe.design |
| 1.5.2 | Cross-link unsafe.design as the delivery arm; "we build the page that converts the leads" section on lead-gen pages | Claude + Aditya | needs unsafe.design brand assets/links from Aditya |
| 1.5.3 | Package the offer: agent (lead gen) → landing page + SEO retainer | Aditya | pricing/packaging decision |

---

## PHASE 2 — Content / AEO layer + gravity  (weeks 4–8)

Goal: capture the spoken PAIN + OUTCOME long-tail (which lives in language, not keyword volume), feed AI Overviews / LLM answers, and build the authority that turns impressions into rankings.

| # | Action | Owner | Notes |
|---|---|---|---|
| 2.1 | Blog/AEO posts, one per pain/outcome phrase | Claude | e.g. "Why your Singapore cold emails get no replies," "Turn missed calls into booked jobs," "Is cold calling still legal in Singapore (PDPA/DNC)," "Website gets traffic but no enquiries" — internally linked up to service pages |
| 2.2 | Document the SG proof pilot (real numbers, permissioned) | Aditya + Claude | the credibility asset the silent buyer checks; depends on 0.9 |
| 2.3 | 3–5 SG backlinks/directories (Clutch SG, GoodFirms, local listings) | Aditya | biggest ranking lever for a zero-backlink domain |
| 2.4 | LinkedIn presence: founder posts on FDE-for-revenue, SG lead-gen | Aditya | matches the outbound/referral channel where SG demand actually flows |
| 2.5 | Optional: `/ai-automation-singapore/` light page (`ai automation` KD17, $10 CPC) | Claude | only category-support term worth a page |

**Measure:** SG organic sessions vs the 27/week GA4 baseline; blog impressions in AI Overviews; first SG-sourced conversation.

---

## PHASE 3 — Promote & expand  (gated, not scheduled)

Trigger: **first-page SG positions on 3+ lead-gen terms OR the first SG client closes.**

| # | Action | Owner |
|---|---|---|
| 3.1 | Rewrite the homepage to lead with FDE-for-marketing-and-sales globally | Claude |
| 3.2 | Re-point the GoHighLevel cluster under the new narrative (GHL agencies are a marketing/sales ICP — it slots in unchanged) | Claude |
| 3.3 | Open the US lane using SG proof + rankings as authority | Claude + Aditya |

**Do NOT do before the gate:** the homepage currently serves the working IG→direct funnel; don't break a working funnel for an unproven narrative.

---

## Standing rules (carried from this engagement)
- No fabricated stats or named clients, ever (we just spent a week removing them). Verified sources or honest first-party framing only.
- No em/en dashes in copy.
- DataForSEO: creds outside the repo, never committed; cost-approval before each run; cache everything.
- Few pages, absurd depth. Template sprawl earns nothing (proven by the 3/10 audit).

---

## Immediate next 3 (in order)
1. **Aditya:** answer 0.7 (SGD pricing), 0.8 (GBP), 0.9 (proof pilot). These unblock everything.
2. **Claude:** draft `/forward-deployed-engineers/` now (needs no input) → then the two lead-gen pages.
3. **Aditya:** send unsafe.design brand assets + confirm the packaged offer for Phase 1.5.
