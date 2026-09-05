# New Home Page Copy for Our New Narrative

**Date:** 18 Aug 2026 · **Owner:** Aditya Pandey · **Status:** FINAL copy, ready for the developer to implement. This document is the single source of truth. No code has been changed; the developer builds from the copy below.
**Voice:** the client's own words, verified against the Reddit lexicon (`_COPY_LEXICON_ALL_SUBS.md`). We say what they say: leads, customers, follow-up, booked, chasing, no-shows, the CRM that just sits there. We do NOT say our words: "close the gap," "revenue leak," "workflow," "deploy," "orchestrate" (near-zero in their speech). "AI" and "automation" appear only in the eyebrow and low on the page, never in the headline. Writing rules: visualize / falsify / ownable, two-line paragraphs, no em or en dashes.

**SEO balance:** headline and top of page = their conversion words (customers, leads, booked, follow-up). Search terms (`ai automation agency`, `marketing and sales automation`, `lead generation`, `gtm engineering`) live in the meta and low in the body, where they carry the category signal without making the page sound like ours instead of theirs. Money keywords live on the standalone pages, not here.

---

## FOR THE DEVELOPER (read first)

- **This is a copy swap, not a redesign.** Keep the existing homepage layout, components, animations, and styling. Replace the words per the sections below.
- **Files (for reference):** hero = `src/components/sections/HeroSection/index.tsx`; page meta = `src/pages/index.tsx`; other sections under `src/components/sections/*`.
- **Hero has a two-line animated headline** (`ScrambleText`, dark line + blue line). Line 1 = dark, Line 2 = blue. The eyebrow is a NEW small line above the headline (add it).
- **Section order changed:** move the Proof strip up to the second fold (right under the hero). See "Section order" below.
- **Hard rules:** no em or en dashes anywhere. Do not invent stats, client names, or testimonials (leave the testimonial slot empty until real ones exist). Keep "AI" out of the headline.
- **CTAs** point to `/ai-clarity-workshop` for now. Swap to the free audit tool once it ships.

---

## Section order (trust early)

1. **Hero** (their pain + the win, their words)
2. **Proof strip** (second fold: built-on logos + dogfood + "already running in thousands of businesses")
3. **The Problem** (their manual-work pain, near verbatim)
4. **How It Works** (look, find, fix, stay)
5. **What You Can Start With** (the top workflows menu)
6. **Results, Not Demos** (the ROI claim)
7. **Testimonials** (reserved slot, real quotes only, fill later)
8. **Founder Note**
9. **Final CTA**

---

## Meta

**Title:** `GTM Engineering Team for Marketing & Sales | Agentic AI Labs`
**Description:** `You don't have a marketing problem. You need a system built to deliver results. Our engineers build and deploy the marketing and sales AI agents and automations that turn cold leads into booked customers, inside the tools you already use. Done for you.`
**Keywords (meta only):** ai automation agency, marketing and sales automation, ai workflow automation, lead generation, marketing automation agency, gtm engineering
*(Category search signal sits here, not in the headline.)*

---

## HERO  (LOCKED)

| Element | Copy |
|---|---|
| **Eyebrow** (new small line above headline) | A GTM engineering team that builds and deploys your marketing and sales AI agents and automations, inside your business. |
| **Headline line 1** (dark) | You don't have a marketing problem. |
| **Headline line 2** (blue) | You need a system built to deliver results. |
| **Sub-headline** | Every customer starts cold and buys when they're ready. Our engineers build the system that gets them there, from found to booked, and own the result, not just the build. |
| **Support line** (small, under sub) | You're hiring a team, not buying software. |
| **Primary CTA** | `Show me the customers I'm missing` → `/ai-clarity-workshop` (swap to the free audit tool when it ships) |
| **Secondary CTA** | `How it works` → scroll |

*Why this is the one: the headline argues with what the owner believes ("I need more/better marketing") and reframes to results and a system. The eyebrow carries the GTM-engineering-team positioning (team, not tool) and the "AI agents and automations" mechanism. The sub carries the whole vision as one journey (cold to found to booked) run by our engineers who own the result, not just the build. Their words: customer, cold, ready, found, booked, team, software. No "gap," no "AI" in the headline.*

**Alternative headlines (kept for reference, do not ship unless swapping):**
> Sharpest, conversion-lean: `You don't need more leads. You're losing the ones you already have.`
> Predictability: `Right now, your next customer is a coin flip.`
> Bottleneck: `You can't grow past what you can personally chase.`

---

## PROOF STRIP  (second fold, honest proof only)

**Line 1 (trust):**
> Built on the tools you already use.

**Logo strip:** GoHighLevel, n8n, Vapi, Retell, HubSpot, Make, Zapier. *(Real. Logos already in the repo. These are the tools we build inside, not client logos.)*

**Line 2 (scale proof, true):**
> The systems we build are already running in thousands of businesses. We do not experiment on you. We pick what works and wire it into your setup.

**Line 3 (dogfood, verifiable):**
> We ran it on ourselves first. Ask ChatGPT or Perplexity about getting more customers, and our name comes up.

*(Available today, zero fabrication. No client logos or quotes until they are real and permissioned.)*

---

## THE PROBLEM  (their manual-work pain, near verbatim from the lexicon)

**Eyebrow:** SOUND FAMILIAR

**Copy:**
> You are not short on leads. You are short on follow-up.

> A lead comes in at 9pm. Nobody calls. By morning they have called three of your competitors and booked whoever picked up first.

> Your team is not lazy. They are buried. The lead is in one tool, the reply is in another, and everyone is copying between tabs by hand. The CRM just sits there. Nobody logs in.

> So you buy another tool to fix it. Now there is a fourth place for the lead to get lost.

*Uses their exact pain words: follow-up, copying between tabs, "the CRM just sits there, nobody logs in" (near word-for-word from corpus), another tool, get lost.*

---

## HOW IT WORKS  (say it plain, their words, no "workflow/deploy")

**Eyebrow:** HOW WE FIX IT

**Intro line:**
> We do it in the order that actually works. Look first. Build second. Put it to work last.

**Step 1: We look at how a lead moves through your business**
> Every step from the moment someone enquires to the moment they pay. Where they wait. Where they go quiet. Where you lose them. You see it before we touch anything.

**Step 2: We find where you are losing leads**
> Usually it is speed to lead, the follow-up nobody sent, or the quote you never chased. Not ten problems. The one or two costing you real customers.

**Step 3: We build the fix and run it inside your tools**
> It calls the lead the second it lands, follows up like your best salesperson on their best day, and books the call. It runs inside your CRM, your phone, your inbox. You do not switch anything and you do not learn a dashboard.

**Step 4: We stay on the numbers**
> We watch your booked calls and your close rate, and we keep tuning until they hold. If it is not moving the number, it is not done.

---

## WHAT YOU CAN START WITH  (proof we are systematic, their outcomes)

**Section intro (on page):**
> Here is what you can start with. Every one is a proven system, already running in thousands of businesses. We pick the right ones for you and put them to work inside your tools.

**TOP 5: the get-started cards (show on the homepage):**

| # | Card title (on page) | One-line outcome (their words, on page) | Source (team note, not on page) |
|---|---|---|---|
| 1 | Speed to lead | The second a lead comes in, they get a call or text. Before they book with anyone else. | n8n speed-to-lead; most-used pattern everywhere |
| 2 | Find and qualify leads for you | We pull leads that match your best customers, fill in their details, and score them, so your team only calls the ones worth calling. | n8n Google Maps + Apollo + ICP (799+ lead-gen workflows) |
| 3 | Cold email that gets replies | Lists built, sequences written, and rewritten based on what actually gets a reply. | graphed Cold Email Agent |
| 4 | DMs that turn into booked calls | Personalized LinkedIn and Instagram follow-up that books calls, and turns comments into conversations. | graphed LinkedIn / Instagram DM agents |
| 5 | Missed call text back | A missed call turns into a text and a booked appointment, not a lost customer. | GHL "missed call text back" (named thing this crowd searches) |

**6 to 10: the fuller set (link "and more" to a page):**

| # | Card title | One-line outcome (their words) | Source |
|---|---|---|---|
| 6 | Wake up your old leads | Old leads that went cold get a follow-up that brings some of them back. Database reactivation, done for you. | GHL database reactivation |
| 7 | Content that shows up when buyers search | Posts aimed at what your buyers search, and now at what they ask ChatGPT. | graphed Blog + Keyword agents |
| 8 | Ad spend that manages itself | Losing ad sets paused, winners scaled, so you stop burning budget. | graphed Facebook / Google Ads agents |
| 9 | Follow-up that never gets forgotten | Every lead followed up across email, WhatsApp, and text until they reply. | n8n multi-channel outreach |
| 10 | Your pipeline updates itself | No more copying between tabs. Every call and reply logged to your CRM automatically. | n8n CRM sync |

*(Show the top 5 as cards. Five is a menu, ten is clutter. Each links to its deep page. "and more" links to the full list. Source column is proof for the team, never printed.)*

---

## RESULTS, NOT DEMOS  (the ROI claim, their money words)

**Eyebrow:** WE CLAIM THE RESULT

**Copy:**
> A demo looks great in the room. Then it dies the week after.

> We build backwards from one number you already watch. Booked calls. Cost per customer. How fast a lead gets a call back. The number that pays your bills.

> Before we start, the maths is on the table. Here is where you are losing leads. Here is what winning them back is worth. Here is what it costs. If it does not pay for itself, we tell you before you spend a rupee.

> And if it does not move your number after we build it, it is not finished. That is what being on the hook for the result means.

*Money words from the lexicon: booked calls, cost per customer, spend, pay for itself, losing leads.*

---

## TESTIMONIALS  (reserved slot, real quotes only, fill later)

**Status:** placeholder. We do not have verifiable, permissioned client quotes yet. This is the #1 open item in the go-to-market plan (get one documented result, ideally the Singapore pilot).

**Format when we have them:** one real sentence in the client's words, a real name, a real business, a real number if we can quote it. Nothing invented, per the standing no-fabrication rule.

**Until then:** slot stays empty or shows the dogfood proof. Do not ship placeholder testimonials.

---

## FOUNDER NOTE  (minimal, human, their pain again)

**Eyebrow:** WHY I BUILT THIS

**Copy:**
> I kept watching good businesses buy expensive tools and end up exactly where they started. More tools. Same lost leads.

> The tool was never the problem. Nobody sat down, looked at where the leads were actually slipping away, and fixed that one thing.

> So I built the opposite. We look first. We run the fix inside what you already use. We stay until your booked calls go up.

> If your leads are slipping and you are tired of buying tools that just add work, that is exactly what we do.

> Aditya Pandey, founder, Agentic AI Labs

---

## FINAL CTA

**Headline:**
> Find out where you are losing leads.

**Sub-line:**
> A short look at how leads move through your business. We show you where they slip and what winning them back is worth, before you commit to anything.

**CTA:** `Show me where I am losing leads` → (free tool when live / Clarity Workshop until then)

---

## Language rules for the whole build (from the lexicon)
- **Say (their words):** lead / leads, client, customer, follow-up, book / booked, deal, pipeline, tools, chasing, manual, copying between tabs, qualify, cold email / cold call, spend / budget, convert, reply, losing, ghost, no-show, speed to lead, missed call text back, database reactivation.
- **Do not say (ours, near-zero in their speech):** close the gap, revenue leak, leaving money on the table, AI agents, orchestrate, workflow, deploy, "your stack."
- **Keep low, never in hero:** AI, automation. Category search terms live in meta + low body only.
- **Avoid (wrong audience):** quota, commission, dials, SDR, ICP, ABM, deliverability, WABA (rep-career or infra jargon, not the buyer/owner's language). Fine only on a specific b2b or WhatsApp page.
- **The one-line test before any word ships:** does the corpus prove people say it, and does it serve "get more customers / stop losing leads"? If either is no, cut it.
