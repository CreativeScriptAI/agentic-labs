# SEO Playbook Reference: PageRank, Topical Authority, Real Results

Local reference distilled from "The SEO Playbook That Actually Works" (David, PageRank/topical-authority school). Do not push to GitHub. This is the lens we audit and build against.

## The core thesis
Google does NOT rank on "quality" (it can't measure subjective quality; it only catches machine-scale spam). It ranks on **authority (PageRank) + relevance**. Your page is a *claim*; it can't be its own evidence. External authority (links) is the evidence. Accept this and everything else follows.

## The master model
- **PageRank** = numeric distance from trusted seed sites (NYT, microsoft.com). Close = high authority.
- **Topical authority** = that number expressed per topic. Your site has a topical-authority cluster score. A page ranks only if it falls *inside* your cluster's range. Expand the cluster → pages inside rank almost automatically.

## The 19 principles (our checklist)
1. **Authority, not quality.** Build authority + relevance, not "great content."
2. **Topical authority cluster.** Own a topic; keep pages tightly inside it. Cornerstoning builds it.
3. **Three playbooks:** topical authority, competitive analysis, use-case analysis (enumerate every use case as its own page). Niche vertical, scale horizontal.
4. **Exact-match domains still work**, especially for LLM citation. A cheap keyword-domain site linking to the parent can be a lead machine.
5. **Republish under a new URL** to unstick a frozen page: the new slug gets a fresh start judged against your *current* (larger) authority, and can reposition into a less competitive index. (Fixes "outside authority zone," not clicks-gating by itself.)
6. **Only pages with clicks get indexed.** No clicks → triaged out → never re-crawled. Sitemaps don't force indexing. Fix crawled/discovered-not-indexed with **backlinks OR an internal link from a page that already gets organic traffic.** THIS is the lever.
7. **Interlink for context (cornerstoning).** Chain broad → specific with descriptive anchor text so each page hands context + authority to the next. Never leave a page reachable only via a context-less XML sitemap.
8. **Three things, not 100: slug, title, H1.** Get those right, publish fast, let data decide. SEO is a system, not a checklist. Rank-math 10/10 scores are meaningless.
9. **FAQs on their own pages, no schema.** Each FAQ as its own URL concentrates full slug/title relevance on one question. One page with FAQ schema splits relevance across questions not in the slug. Schema helps high-DA sites, not noobs.
10. **Thin content is a myth** (only penalized with affiliate spam). No word-count minimum. **Glossaries print traffic** and create a discovery path (people Google an unfamiliar term → land on your definition → funnel).
11. **H2s from GSC page-2 phrases.** Mine Search Console for phrases you rank page 2 for; add them as H2s on that same page. Free, tool-less uplift.
12. **Google runs CTR tests, not quality judgments.** It surfaces and watches clicks; a lower result with above-average CTR climbs. **Pogo-sticking** is real; dwell/bounce/Chrome data likely aren't used. So title/slug (win the click) + delivering on the promise matter most.
13. **CTR manipulation is real but self-incriminating.** Negative SEO via bot clicks leaves a detectable weekly-spike pattern. Diagnose in GSC, report via spam form.
14. **Backlinks: earn, don't buy.** Buying = identical anchor text at volume = the exact heuristic Google hunts. **Spammy-looking ≠ toxic** (Blogspot/adult/UGC links are harmless; "toxic" lists are junk). Google mostly *zeroes* bad links rather than penalizing. Disavow is only for people who knowingly bought links.
15. **Authority through partnerships.** Reciprocal links between genuinely related, reputable businesses (you'd actually refer each other). Offer free SEO help to partners to place contextual links. Bing Webmaster Tools = free backlink checker to spy on competitors.
16. **AI content is fine** (Google is content-agnostic; only industrial-scale AI spam gets nuked). **Ranking #1 confers authority by itself**, and **Google rankings feed LLM answers via query fan-out** — classic SEO is also your AI-search play.
17. **Stop putting your brand in page titles.** It wastes finite title space (~65 chars), dilutes keyword relevance, and can cannibalize/subwreck the homepage's branded CTR. Keep brand only on pricing/contact/support. Google appends the site name automatically; you'll rank for your brand regardless.
18. **Clarity above cleverness; ugly pages convert.** People scan and skip. Front-load the answer/data above the fold. A TLDR at the top lifted conversions 33%. Design for the skimmer hunting specific facts, not for aesthetic approval.
19. **PageRank is unbeaten.** Copied by every engine incl. the search behind LLMs. Invest in fundamentals (authority + relevance + URL structure), not each new "signal."

## Our operating priorities (from the above, for this site)
- **Indexing bottleneck = the #1 fight.** 88 pages crawled/discovered-not-indexed → fix by internal-linking each from an already-ranking page (principle 6/7), not by resubmitting sitemaps.
- **Topical authority = interlinking depth + tight clusters** (principle 2/7). Every new page must be linked from ranking pages with descriptive anchors.
- **Titles/H1/slugs** are the 80/20 (principle 8). Audit brand-in-title (17), keyword-in-slug, one clear H1.
- **FAQ/glossary as their own URLs** (9/10) for cheap topical coverage.
- **Backlinks via partnerships** (14/15), never bought.
- **Clarity + TLDR** on every money page (18).
