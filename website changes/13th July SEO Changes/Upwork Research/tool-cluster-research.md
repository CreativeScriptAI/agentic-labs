# Pillar 2 — Tool Cluster Research (GHL / Tools / Voice Stack)

**Date:** 2026-07-13
**Method:** Web search (Product Hunt category pages, comparison blogs, GHL marketplace docs, voice-AI platform roundups).
**Structure:** 3 confirmed clusters → 10-15 tools per category → top 3 giants selected by buyer-audience overlap (not raw popularity) → keyword-shape angle per giant.

---

## Cluster 1 — GoHighLevel (biggest validated demand pool: 365 hourly + 218 fixed Upwork jobs)

GHL's own marketplace has 1,500+ apps and 200+ native integrations. Full landscape:

**GHL ecosystem tools (15):** Stripe, Twilio, Mailgun, Zapier, Facebook Ads, Google Ads/Analytics/Business Profile, Shopify, QuickBooks, Lemlist, Map Leads, HeyReach, Appendment, PandaDoc, Leadlock AI, Make.com

**Top 3 giants (by where your buyer already sits):**
1. **GoHighLevel itself** — the platform, not an integration. Highest volume, direct match to your ICP (agencies + the SMBs they resell to).
2. **Leadlock AI** — the top-rated GHL *voice AI* integration in 2026 (native CRM sync, sub-account mgmt, 4 voice-provider tiers, $0.12/min). This is your direct competitor inside the GHL ecosystem — comparison pages here are high-value.
3. **Twilio** — the telephony layer under almost every GHL voice/SMS build. "GHL + Twilio" builds are a constant Upwork request pattern.

**Existing coverage (already built):** `ai-voice-agent-for-gohighlevel`, `gohighlevel-ai-calling-alternative`, `ghl-ai-chatbot-alternative`, `best-ai-for-gohighlevel-agencies`, `ai-sdr-for-ghl-agencies` — 5 pages live.

**Keyword-shape gaps to add:**
| Shape | Example | Funnel |
|---|---|---|
| `{tool} alternative` | "leadlock ai alternative" | Bottom |
| `{tool} vs {tool}` | "leadlock vs vapi for gohighlevel" | Bottom |
| `done-for-you` | "gohighlevel voice ai done for you" | Bottom |
| `for {use-case}` | "gohighlevel twilio setup for missed calls" | Mid |
| handoff/failed-DIY | "gohighlevel automation keeps breaking" | Mid |

---

## Cluster 2 — Automation Tools (n8n / Make / Zapier + adjacent)

Product Hunt + comparison-blog consensus names this "the Big Three" of no-code/workflow automation, with a clear developer-vs-operator split.

**Tools found (14):** Zapier, Make, n8n, Pipedream, Pabbly Connect, Stack AI, Lindy, Workato, Tray.ai, Apache Airflow, Albato, Gumloop, Relay.app, Crisp

**Top 3 giants (by buyer-audience overlap, not popularity):**
1. **n8n** — self-hosted, API-heavy, developer/agency-oriented. Closest audience overlap to yours (agencies building production systems, not hobbyists). Also the one YOU explicitly named.
2. **Zapier** — largest brand/ad spend (8,000+ integrations), but audience skews DIY/non-technical — lower buyer-intent overlap. Value here is almost entirely in "alternative"/"done-for-you"/"keeps breaking" shapes, not tutorials.
3. **Make** — ops-team/multi-step-logic audience, cost-conscious. Middle ground between n8n and Zapier.

**Keyword-shape angle (per your failed-DIY thesis):**
| Shape | Example | Funnel | Why |
|---|---|---|---|
| `{tool} alternative` | "n8n alternative for AI voice agents" | Bottom | shopper, ready to switch |
| `hire {tool} expert / agency` | "hire n8n expert for lead automation" | Bottom | gave up on DIY |
| handoff/failed-DIY | "n8n voice agent keeps breaking", "zapier automation failing silently" | Mid | the buying-trigger moment — your best idea |
| `{tool} vs done-for-you` | "zapier vs done-for-you automation" | Mid | |
| `how to build X in {tool}` | "how to build a voice agent in n8n" | Top | authority/backlink net only — needs hard CTA bridge, do LAST |

**Explicit recommendation:** lead with n8n (audience fit + your own instinct), use Zapier/Make mainly for alternative/handoff pages, not tutorials — their audience is the least likely to become a client.

---

## Cluster 3 — Voice Stack (already strong — confirm + patch gaps)

**Tools found (12):** Vapi, Retell AI, Bland AI, ElevenLabs, Deepgram, Cartesia, PlayHT, Synthflow, LiveKit, Voiceflow, arahi.ai, ortemtech-tier newcomers

**Existing coverage (already built):** `vapi-alternative`, `retell-ai-alternative`, `bland-ai-alternative` — 3 pages live, matches the actual "top 3" full-orchestration-platform giants per every 2026 roundup (Vapi = dev flexibility, Retell = fastest to production, Bland = cheapest at outbound scale).

**Gap identified:** **ElevenLabs** has no page yet. Important distinction: ElevenLabs is a *voice-quality component* (TTS), not a competing orchestration platform — "elevenlabs alternative" is the wrong frame. Correct angle: **"ElevenLabs is the voice, not the system"** — position it as one ingredient your production build uses/surpasses, not a rival to unseat. This is a mid-funnel education + upsell page, not a straight competitor-conquest page like the other three.

**Deepgram/Cartesia/PlayHT** — pure STT/TTS component providers, not full platforms. Not worth standalone pages; mention as supported providers inside existing/new pages, don't build clusters around them.

**Recommendation:** cluster 3 needs one addition (ElevenLabs, component-angle), otherwise already correctly built. Lowest-effort cluster of the three.

---

## Summary — build priority

| Cluster | Status | Effort to complete | Buyer-fit |
|---|---|---|---|
| GHL | 5/8 pages live | Add ~3-5 (Leadlock, Twilio, handoff pages) | Highest — matches Upwork's #1 volume |
| Voice Stack | 3/4 live | Add 1 (ElevenLabs, component angle) | High — already your core wedge |
| Tools (n8n/Zapier/Make) | 0 live | Build ~9-12 (3 tools × alt/handoff/hire shapes) | Medium — n8n first, Zapier/Make handoff-only |

Every page across all three clusters carries the same wedge: **you're not the tool, you're the team that makes it production-grade** — without that bridge CTA, these are just free education for people who won't convert.
