# Website Architecture (Canonical)

**Date:** 19 Aug 2026 · **Owner:** Aditya Pandey · **Status:** Canonical IA. This is the map the whole site follows.
**Organizing principle:** the **lead journey**, not "domains." Every page fixes one stage of turning a stranger into a paying customer: cold lead in, warmed up, made hot, booked. A visitor landing anywhere instantly knows which part of *their* funnel it solves. This mirrors the homepage narrative (cold to booked) exactly.

**Hard rule:** the 83 existing live URLs do NOT change. We only re-group the navigation and add pillar hubs. No slug changes, no redirects.

---

## The spine: the lead journey (4 stages = 4 pillar hubs)

```
Stranger ─▶ STAGE 1 ─▶ STAGE 2 ─▶ STAGE 3 ─▶ STAGE 4 ─▶ Paying customer
           Get Found    Qualify     Warm Up      Book
           & Capture               & Follow Up   & Convert
           (cold in)   (sort)   (cold→warm→hot)  (hot→paid)
```

Each stage is a **pillar page** that (a) targets a real keyword, (b) explains that stage in the customer's words, (c) links down to the existing pages that serve it, and (d) links up to the homepage.

---

## STAGE 1 — Get Found & Capture  *(cold leads come in)*

**Pillar:** `/lead-generation-agency-singapore/`  *(target: singapore lead generation KD 0, lead generation agency KD 5)*
**What it is:** everything that brings a cold lead into the funnel. This is where the four service lines (SEO, content, ads, social) live, because they are all ways to get found.

**Sub-pillars / service pages (new, KD ~0 in SG):**
- SEO & AI Visibility → `/seo-agency-singapore/` (KD 17)
  - AEO pillar → `/answer-engine-optimization/` (AEO 2,400 · GEO 4,400 · ai search optimization 1,300)
  - **Free tool** → `/ai-visibility-checker/` (KD 5) + app on `tool.tryagentikai.com`
- Content → `/content-marketing-agency-singapore/` (KD 0)
- Ads → `/sem-agency-singapore/` (KD 0, $89 CPC) + `/google-ads-agency-singapore/` (KD 0)
- Social → `/social-media-agency-singapore/` (KD 0, 880 vol)

**Existing pages that nest here:** `n8n-content-automation-pipeline`, `ai-social-media-content-pipeline`, `ai-sdr-for-ghl-agencies` (cold outbound), `gohighlevel-cold-email-automation`.

---

## STAGE 2 — Qualify  *(sort the good leads from the noise)*

**Pillar:** `/lead-qualification/`  *(target: lead qualification, qualify leads)*
**What it is:** figuring out which leads are worth your team's time before anyone calls.

**Existing pages that nest here:** the qualify step of `ai-sdr-for-ghl-agencies`, chat-to-lead / capture flows, enrichment. *(Mostly a new pillar with a few nested references; light on existing pages.)*

---

## STAGE 3 — Warm Up & Follow Up  *(cold → warm → hot)*

**Pillar:** `/follow-up-automation/`  *(target: follow up automation, lead nurturing)*
**What it is:** the retargeting and follow-up that moves a cold lead to hot, so they buy when they're ready.

**Existing pages that nest here:**
- DM automation → `gohighlevel-facebook-dm-automation`, `gohighlevel-instagram-dm-automation`, `facebook-dm-automation-meta-api`, `instagram-comment-automation-ai`, `whatsapp-gohighlevel-automation`, `os1-meta-automation`
- Reactivation → database-reactivation angle (new page or section)
- Email pipelines → `n8n-gohighlevel-email-pipeline`
- No-show recovery → `ai-show-up-agent-for-online-coaching`

---

## STAGE 4 — Book & Convert  *(hot → paying customer)*

**Pillar:** `/appointment-booking-ai/`  *(target: appointment booking, ai receptionist, speed to lead)*
**What it is:** the moment of truth. Answer first, book the call, don't lose the hot lead. Most of the existing voice estate lives here.

**Existing pages that nest here (the bulk of the 40+ voice/persona pages):**
- Voice hubs → `ai-voice-agent`, `ai-voice-agent-global`, `ai-voice-agent-for-gohighlevel`, `gohighlevel-ai-voice-pipeline`, `gohighlevel-speed-to-lead-automation`, `indian-ai-voices`, `done-for-you-ai-voice-agent`
- Speed / missed calls → `ai-for-missed-calls`, `ai-appointment-booking-voice-agent`
- Receptionist personas (all industries) → dental, med-spa, medical, diagnostic-lab, restaurant, salon, gym, travel, home-services, pest-control, real-estate, coaching, immigration, cod-confirmation, ecommerce, hubspot, salesforce
- Voice platform builds → `bland-ai-outbound-pipeline`, `elevenlabs-voice-agent-production`, `vapi-gohighlevel-integration`, `retell-gohighlevel-integration`

---

## Off-journey nav (kept as-is, interlinked into the stages)

| Nav item | Contents | Interlinks to |
|---|---|---|
| **Free Tools** (new) | AI Visibility Checker | Stage 1 |
| **Compare** (keep) | vapi/retell/bland alternatives, best-of roundups, ai-vs-human, GHL calling/chatbot alternatives | Stage 4 |
| **Automation & Integrations** | n8n / zapier / make alternatives, GHL integrations, "keeps breaking" rescue pages | cross-stage support |
| **Resources** | Blog, AEO guides, Glossary (5), Clarity Workshop, Agents Repo, AI Memory System | all stages |
| **Company** | About (GTM / forward-deployed story), Services, Contact, Privacy | positioning |

**Positioning pillar (not a stage, not a keyword page):** `/forward-deployed-engineers/` — the GTM-engineering-team story the homepage eyebrow points to. Linked from the homepage and About.

---

## Top navigation (final)

```
Solutions ▾   Free Tools ▾   Compare ▾   Resources ▾   Company ▾
  by stage:     AI Visibility   vs Vapi      Blog          About (GTM story)
  1 Get Found   Checker         vs Retell    AEO Guides    Services
  2 Qualify                     vs Bland     Glossary      Contact
  3 Warm Up                     Best-of      Workshop
  4 Book                        AI vs human  Agents Repo
```

---

## The tool (placement decided)

- **App:** `tool.tryagentikai.com` — separate deployment (no load on the main Next.js site), same root domain so all SEO authority and backlinks stay with tryagentikai.
- **Landing page:** `/ai-visibility-checker/` on the main site (the SEO page, KD 5).
- **Result pages:** `/ai-visibility-checker/report/...` on the main site (programmatic, indexable, each scan = one page).
- **Not** on a separate domain (e.g. Oyes.one): that would build a second domain's authority and leak trust across a domain boundary. Same-domain is the whole point of a free-tool lead magnet for a low-authority site.

---

## Architecture rules (do not break)

1. **No existing URL changes.** 83 pages keep their slugs and rankings. Additions only.
2. **A page can serve two stages** (a voice agent does cold outbound = 1, follow-up = 3, booking = 4). Nest under its PRIMARY stage; cross-link to the others.
3. **Each stage pillar is a hub:** links down to nested pages, up to the homepage. Nested pages link up to their pillar. (Hub-and-spoke, the same fix already applied once.)
4. **Sitemap, footer, llms.txt** get the new pillars added. The tool subdomain gets its own sitemap.
5. **Pillar slugs double as keyword targets** (lead generation, lead qualification, follow-up automation, appointment booking): human-clear and SEO-ready.
6. **Standalone money pages target one keyword each;** pillars own the shared journey stage. Homepage owns the whole story.

---

## Build order (see `05-build/`)

1. Nav re-grouping into the 4 stages (no new pages needed, just IA).
2. Stage 1 capture pillar + the AI Visibility Checker page (the wedge).
3. Stage 4 book/convert pillar (nests the existing voice estate).
4. Stages 2 and 3 pillars.
5. The 4 SG service pages under Stage 1.
6. AEO pillar + blog spokes.
