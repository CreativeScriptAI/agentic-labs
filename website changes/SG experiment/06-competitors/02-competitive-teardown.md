# Competitive Teardown: Two Singapore Competitor Sites

**Date:** 20 Aug 2026 · **Analyst:** Competitive strategy · **Status:** Working analysis
**Subjects:**
- **Comp 1 — WebDesign.sg** (web design / dev / mobile apps studio) · `https://website-development-singapore.netlify.app/`
- **Comp 2 — SEO Company Singapore** (SEO growth agency) · `https://seo-website-singapore.netlify.app/`

**Bottom line:** Two polished, keyword-loaded SPAs that look like premium Singapore agencies but are, on inspection, template-built Netlify subdomain sites propped up on fabricated proof and (in Comp 1's case) invented client logos and testimonials. Both are almost certainly the same shop shipping two verticals. Their copy and interactive tools are genuinely good and worth stealing patterns from. Their foundations (fake trust, subdomain, non-indexable SPA, no accountability) are exactly where we win.

---

## COMPETITOR 1 — WebDesign.sg

### 1. Positioning & voice
- **Core promise:** premium, conversion-focused custom web/app builds that make you outclass rivals. H1: **"Built to make competitors look obsolete."** Eyebrow: **"SINGAPORE DIGITAL STUDIO."**
- **Voice:** premium-studio, aggressive-confident. "We engineer high-performance digital experiences," "flawless execution," "handcrafted visual interfaces... no generic templates." Sells craft + speed + conversion.
- **Target:** "ambitious brands" in Singapore across fintech, hospitality, SaaS, e-commerce. Company-agnostic on size, but the sample work skews mid-market to enterprise (a "capital" firm, a "luxury suites" brand, a SaaS analytics product).

### 2. Offer architecture
- **Six named capabilities**, numbered for a systematized feel: 01 Custom Web Design · 02 Full-Stack Development · 03 Mobile App Development · 04 UI/UX Architecture · 05 Singapore SEO & Growth · 06 Maintenance & Support.
- **Rotating service list** for keyword breadth: Website Design / Web Development / Mobile Apps / UI/UX / Singapore SEO / E-Commerce / SaaS Products / Brand Systems.
- **Verticals chased** (via the fake portfolio): Fintech, Hospitality, SaaS, E-commerce.
- Packaging is capability-led (what they do), not outcome-led (what you get). No "ideal for" segment tags on services — that tagging is Comp 2's move.

### 3. Interactive tool — the Pricing Estimator (lead magnet)
A configurator that turns a browsing visitor into a scoped, self-qualified lead:
- **Inputs — project type:** Corporate Site (5-10 pages) / E-Commerce (Shopify/Custom) / Web App / SaaS (custom portal) / Mobile App (iOS/Android/PWA).
- **Inputs — add-ons:** Headless CMS +SGD $1,200 / Advanced SEO +SGD $900 / 3D / Motion +SGD $1,500.
- **Output:** "Estimated investment: from SGD $4,500 (starting range)," bundled with a reassurance line ("Includes 12 months technical warranty, Singapore-ready setup, and PDPA-aware delivery practices") and CTA **REQUEST PROPOSAL**.
- **Why it works:** (a) it self-qualifies — a visitor who configures a SaaS portal with three add-ons is a hot, high-intent lead who has already anchored on a four-figure spend; (b) it manufactures transparency and trust cheaply (named add-on prices feel honest) while the real number is still gated behind "request proposal"; (c) it is an interaction/engagement asset that increases time-on-page and gives the CTA a natural, low-friction next step ("you've built a spec, now send it").

### 4. Pricing & transparency
- **Transparent-leaning.** Publishes a **starting price (from SGD $4,500)** and **exact add-on prices** ($1,200 / $900 / $1,500). Frames spend as "investment," bundles warranty + PDPA to justify it.
- This is the opposite pole from Comp 2. It filters out tyre-kickers, anchors value, and reads as confident. The catch: "from $4,500" and "starting range" still leave the real quote gated, so it is transparency-as-marketing, not a true price list.

### 5. Proof & trust tactics (all fabricated)
- **Placeholder stats presented as achievement:** **"0+ Singapore clients," "0.0% sub-second load targets,"** "4-6 wks typical timeline." The zeros betray an unfinished template dressed as a track record.
- **Sample/fabricated portfolio** with invented brands: **Marina Bay Capital** (fintech), **Orchard Luxury Suites** (hospitality), **AeroPulse AI Analytics** (SaaS), **Harbour Retail Co.** (e-commerce) — all Singapore-flavored names, none real.
- **Fake testimonials tied to those fake brands, stamped "VERIFIED CLIENT":** e.g. "Our organic conversion rates jumped within two months... — VERIFIED CLIENT · MARINA BAY CAPITAL," "Best agency experience in Singapore — VERIFIED CLIENT · AEROPULSE AI."
- **Risk this creates:** the "VERIFIED CLIENT" label on a demonstrably non-existent client is an actively deceptive claim, not just a placeholder. One prospect who Googles "Marina Bay Capital" and finds nothing collapses the entire trust stack, and the site invites that check by naming brands. The "0+" stats read as either broken or dishonest. This is the site's single largest vulnerability.

### 6. Funnel & CTAs
- **Entry CTAs:** EXPLORE SERVICES (services) · REQUEST PROPOSAL (from the estimator) · START A PROJECT (contact).
- **Lead capture** funnels through the estimator ("build a spec → request proposal") and the contact section ("Let's build something extraordinary").
- **Contact:** phone **+65 8034 2928**. No published email in the capture; the estimator's "request proposal" is the primary conversion path.

### 7. Tech & SEO health
- **Vite React SPA on `website-development-singapore.netlify.app`.** Client-side routes (`/services`, `/portfolio`, `/about`, `/contact`) with **no SPA fallback configured — direct-URL routes 404.**
- **Consequences:** (a) a crawler or a shared deep link that hits `/services` gets a 404, so only the homepage is realistically indexable; (b) content rendered client-side on a JS SPA is weakly indexed at best; (c) a `.netlify.app` subdomain carries **zero domain authority** and cannot rank for competitive terms like "web design agency singapore." Despite polished, keyword-targeted copy, the site is near-invisible to search. It can only convert traffic it pays for or is handed directly.

### 8. Honest weaknesses (exploitable)
- Fabricated portfolio, testimonials, and **"VERIFIED CLIENT"** labels — deceptive, one search away from exposure.
- **"0+" / "0.0%"** placeholder stats undermine the premium claim.
- `.netlify.app` subdomain: no authority, not a real brand domain.
- SPA with no fallback: 404 on deep links, effectively unindexable, no organic moat.
- Capability-led offer with no outcome ownership, no accountability/guarantee model beyond a generic "12 months technical warranty."
- Generic template feel (shared build family with Comp 2) — no genuine differentiation beyond styling.

---

## COMPETITOR 2 — SEO Company Singapore

### 1. Positioning & voice
- **Core promise:** rankings that convert into commercial leads and revenue, not vanity metrics. Positioning line: **"Built to dominate Google SG,"** eyebrow **"Singapore's #1 SEO growth agency."**
- **Voice:** witty / comedic / irreverent — the standout. H1: **"Your SEO Needs Therapy. Stop Being Google's Nobody."** Body: "Being on page 2 of Google is like long-term hospitalisation... We do SEO that makes Google blush... And your bank account develops a crush on you!" This voice is a real differentiator and the most memorable asset either competitor has.
- **Target:** "local enterprises, e-commerce stores, and MNCs." Service-level "ideal for" tags get specific: SG clinics, law firms, F&B, home services, retail, complex portals, SaaS, enterprise.

### 2. Offer architecture
- **Three outcome-named services, each with an "ideal for" segment tag** — tighter packaging than Comp 1:
  - **01 LOCAL DOMINATION** — Singapore Local SEO & Google Maps. *Ideal for: SG clinics, law firms, F&B, home services & retail.* (GBP geotagging, local citation/NAP consistency, high-intent local keyword map; name-drops Orchard, Tanjong Pagar, Jurong, Woodlands, Tampines.)
  - **02 ARCHITECTURE** — Technical SEO Audit & Core Web Vitals. *Ideal for: complex portals, SaaS & enterprise.* (Sub-second LCP/CLS, mobile-first + JS SEO rendering, LocalBusiness & Product schema.)
  - **03 REVENUE FOCUS** — E-Commerce SEO. *Ideal for: e-commerce brands.* (Shopify/WooCommerce/Magento, category keyword architecture, product schema with SGD price rich snippets.)
- **Four-phase process** for systematized credibility: 01 Discover → 02 Architect → 03 Execute (focused sprints) → 04 Compound.
- **Verticals chased:** healthcare/dental, legal, F&B, home services, retail, B2B logistics, e-commerce/furniture, SaaS, MNC. Also chases the AI-search trend hard ("Gemini & ChatGPT ready," "AI Search (GEO & SGE) ready").

### 3. Interactive tools — TWO (both strong lead magnets)
**Tool A — Live Website Analyzer (Free Instant Technical SEO Audit):**
- **Input:** a website domain/URL.
- **Output (promised):** technical errors, indexing blocks, and keyword opportunities "holding back your Singapore domain from Page 1."
- **Why it works:** it is the highest-converting lead magnet in SEO. It is personalized (about *your* site), instantly gratifying, and self-diagnosing — it manufactures the problem the service then sells. Entering your URL is a near-zero-friction hand-raise that yields a warm, self-identified lead. It doubles as an engagement/dwell asset and a reason to return.

**Tool B — Singapore SEO ROI & Revenue Calculator:**
- **Inputs:** Target Monthly Organic Visitors (default 10,000) · Conversion Rate (2.5%) · Avg Order/Lead Value SGD ($250).
- **Outputs:** Projected Annual Organic Sales ($750,000) · Monthly Leads (250) · Monthly Revenue ($62,500). CTA: **Claim Your Campaign Proposal.**
- **Why it works:** it reframes SEO from a cost into a revenue machine and lets the prospect **do the selling to themselves** — they type in their own numbers and watch a big annual figure appear, anchoring the value of the engagement far above its price before any human contact. Pairs perfectly with hidden pricing: once you believe SEO is worth $750k/yr, "request a proposal" feels cheap.

### 4. Pricing & transparency
- **Opaque.** No prices anywhere. Pricing is gated behind "submit project scope for a complimentary custom SEO proposal." The FAQ item "Average cost of SEO packages in Singapore?" is present but **collapsed** — it teases the answer without giving it.
- **Contrast with Comp 1:** Comp 1 leads with a number to filter and anchor; Comp 2 hides the number and uses the ROI calculator to inflate perceived value first, then captures the lead into a proposal conversation where price is framed against the revenue they just imagined. Two coherent, opposite strategies — Comp 1 qualifies on price, Comp 2 sells value then negotiates.

### 5. Proof & trust tactics (all fabricated)
- **Placeholder stats, some literally $0:** "#1 Google SG," "dominant local 3-pack Maps," **"$0M+ organic client revenue,"** "sub-100ms Core Web Vitals," **"0+ SG clients."** Same "0+" tell as Comp 1.
- **Detailed, keyword-rich fake case studies with precise fabricated numbers:**
  - Healthcare — "SG Luxury Medical & Dental Clinic (Orchard Road)": #1 for "invisalign singapore" / "dental clinic orchard," **+340% traffic, $1.2M SGD** new patient revenue.
  - Logistics — "Singapore B2B Logistics Enterprise (Tuas & Changi)": **+510% traffic, $3.8M SGD** contract revenue.
  - E-commerce — "Singapore Artisan Home Furniture Brand (Kallang)": **+280% traffic, $890K SGD** sales.
- **Fake testimonials** attributed to plausible-but-anonymous roles: "Clinic Director · Orchard Medical Group," "Marketing Lead · Fintech Singapore," "Head of Digital · SG Logistics Enterprise," "Operations Manager · Multi-Outlet F&B" — anonymized enough to be unverifiable, specific enough to feel real.
- **Marquee claims** as ambient proof: "+340% organic leads," "Core Web Vitals 99/100," "$890K revenue growth," "Google Certified Partner Singapore," "white-hat rankings only."
- **Risk this creates:** the case studies are more dangerous than Comp 1's because they are *more specific* (named neighborhoods, exact dollar figures, exact keywords) — specificity that is trivially falsifiable. "$0M+ organic client revenue" sitting next to "$1.2M" case studies is internally contradictory. "Google Certified Partner" is a claim that can be checked and, if false, is a serious credibility (and potentially legal) exposure. The anonymized testimonials are the "safest" fabrication but add no verifiable weight.

### 6. Funnel & CTAs
- **Entry points:** the two tools (free audit + ROI calculator) are the top of funnel; "Claim Your Campaign Proposal" and "Submit project scope" are the conversion.
- **Lead capture:** URL into the analyzer, or numbers into the calculator, both routing to a proposal form. Contact section: **"Ready to Dominate Google SG Search?"** → "connect with our senior Singapore search engineers... complimentary custom SEO proposal."
- **Contact:** phone **+65 89489404** · email **digital@seocompanysingapore.sg** · **"Guaranteed response within 2 business hours"** (an urgency/service-level promise Comp 1 lacks).

### 7. Tech & SEO health
- **Vite React SPA on `seo-website-singapore.netlify.app`** — explicitly noted as the **same build family as Comp 1 (likely same shop).** Same SPA architecture, same no-fallback problem implied.
- **The irony is fatal:** this is a company selling *technical SEO, crawlability, indexing, and Core Web Vitals* on a **non-indexable JS SPA hosted on a zero-authority `.netlify.app` subdomain.** They advertise "eliminate crawl errors" and "mobile-first indexing & JavaScript SEO rendering" on a site that itself would fail an SEO audit — its own free tool run against its own domain would expose it. It cannot rank for a single one of the terms in its marquee ("seo company singapore," "invisalign singapore," etc.). The polished copy is invisible to the search engines it claims to master.

### 8. Honest weaknesses (exploitable)
- **Congruence-killer:** an SEO agency that is itself un-indexable and has no domain authority. The single most exploitable contradiction across both sites.
- Fabricated case studies with exact figures — highly specific, highly falsifiable ("invisalign singapore," "$1.2M," Orchard Road clinic).
- "$0M+" and "0+ clients" placeholders contradict the case-study numbers.
- **"Google Certified Partner"** claim — checkable, high-risk if untrue.
- `.netlify.app` subdomain, SPA with no fallback (deep-link 404s), zero organic footprint.
- No named team despite "senior Singapore search engineers"; no real accountability beyond "guaranteed response within 2 business hours" (a response-time promise, not a results promise).
- Anonymized testimonials add no verifiable trust.

---

## HEAD-TO-HEAD COMPARISON

| Dimension | Comp 1 — WebDesign.sg | Comp 2 — SEO Company SG |
|---|---|---|
| **Category** | Web design / dev / mobile apps | SEO growth agency |
| **Promise** | "Make competitors look obsolete" | "Dominate Google SG," "stop being Google's nobody" |
| **Voice** | Premium studio, craft + speed | Witty / comedic / irreverent (the standout asset) |
| **Offer packaging** | 6 numbered capabilities (capability-led) | 3 outcome-named services with "ideal for" tags (segment-led) |
| **Interactive tool** | Pricing Estimator (spec → SGD range) | Free Instant SEO Audit **+** ROI/Revenue Calculator |
| **Pricing** | Transparent-ish: from SGD $4,500 + named add-ons | Opaque: hidden behind proposal; cost FAQ collapsed |
| **Trust play** | "VERIFIED CLIENT" fake logos + testimonials | Detailed fake case studies (+340%, $1.2M) + anon testimonials |
| **Placeholder tells** | "0+ clients," "0.0%" | "$0M+ revenue," "0+ clients" |
| **Response promise** | None | "Within 2 business hours" |
| **Tech** | Vite React SPA, Netlify subdomain, no fallback | Same build family, same problems |
| **SEO reality** | Near-zero indexability, no authority | Near-zero indexability — while *selling SEO* |

### What they get RIGHT (patterns worth adopting)
- **Interactive, self-qualifying tools as the primary CTA.** Both replace a dead "contact us" with a tool that makes the visitor do the qualifying. Comp 2's ROI calculator (prospect types their own numbers, sells themselves) and free audit (personalized, instant) are best-in-class lead-magnet mechanics. Our copy already plans a **free audit tool** ("swap to the free audit tool when it ships," "Show me where I am losing leads") — this is the right instinct and the tools above validate it. We should ship it and consider a simple ROI/"cost of lost leads" calculator to match.
- **Segment tagging (Comp 2's "ideal for").** Concrete verticals (clinics, law firms, F&B) make the offer feel built-for-you. Our "What you can start with" menu does the equivalent with named outcomes.
- **A distinctive voice (Comp 2).** Its comedic register is genuinely memorable. Ours is different but equally ownable — the client's own words, argue-with-the-belief headline ("You don't have a marketing problem").
- **Named, systematized process** (Comp 2's Discover→Architect→Execute→Compound; Comp 1's numbered capabilities) signals method. Ours: Look → Find → Fix → Stay.

### Where we WIN (their weaknesses are our positioning)
1. **Honest proof vs. fabricated proof.** Both competitors manufacture credibility with invented clients, "VERIFIED CLIENT" labels, and exact fake figures — a single Google search collapses it. Our home copy's **standing no-fabrication rule** (empty testimonial slot until real, permissioned quotes; dogfood proof "ask ChatGPT/Perplexity about getting more customers and our name comes up"; "built on tools already running in thousands of businesses") is a durable trust advantage precisely because it is verifiable. **We should never match their fake-proof tactics** — their fragility is our moat.
2. **Real domain + indexable site vs. non-indexable subdomain.** Both live on zero-authority `.netlify.app` SPAs that 404 on deep links and can't rank. Comp 2 is un-indexable *while selling SEO* — a fatal contradiction. A real domain with server-rendered, crawlable pages and the money-keyword standalone pages our copy plans is a structural advantage they cannot cheaply close.
3. **Accountability / result ownership vs. build-and-bill.** Neither owns an outcome — Comp 1 offers a "technical warranty," Comp 2 a "2-hour response." Our positioning ("we own the result, not just the build," "if it does not move your number it is not finished," "you're hiring a team, not buying software") is a category-of-one claim against two vendors who deliver an asset and walk.
4. **Outcome/system framing vs. deliverable framing.** They sell websites and rankings (things). We sell the leads-to-booked-customers system inside the tools you already use — the buyer's actual goal, in the buyer's own words.

### Strategic read
Both sites are almost certainly the **same template shop** shipping two Singapore verticals, optimized for a fast, impressive first impression and gated lead capture, not for search, authority, or verifiable trust. They will win a visitor who lands and skims. They will lose (a) anyone who verifies the proof, and (b) all of organic search. Our play is the inverse: verifiable honesty, a real indexable presence, and owned outcomes — with their two genuinely good ideas (self-qualifying interactive tools, segment-tagged offers) adopted in an honest form.
