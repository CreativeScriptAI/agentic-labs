# Module 02 — SEO

Governed by `../00-ORCHESTRATOR.md`.

## 1. Keyword research (DataForSEO API)

Creds: `/Users/aditya/Desktop/tryagentik-website/.env.dataforseo` (outside the repo, never commit). **Cost rule: price every run and get Aditya's OK before calling. Cache every response to disk. Never loop uncontrolled.**

Proven workflow (real examples in `SG experiment/02-keyword-research/dataforseo-cache/`):
1. **Search volume** (`keywords_data/google_ads/search_volume/live`), correct location code (Singapore 2702, US 2840).
2. **Competitor ranked keywords** (`dataforseo_labs/google/ranked_keywords/live`) for 5 to 8 real competitor domains. This finds what the market actually searches, better than any seed list.
3. **Keyword difficulty** (`dataforseo_labs/google/bulk_keyword_difficulty/live`) on the shortlist.
4. **Live SERPs** (`serp/google/organic/live/advanced`, one keyword per call) to see who ranks and whether a low-authority page can break in.

**Pick targets by:** low KD + real CPC + buyer intent. Volume is the least important factor. A term you can rank #1 for beats a big one you never crack.

## 2. SERP recon without the API (optional)

Claude in Chrome extension (or WebSearch/WebFetch) to eyeball the live SERP: who owns the top 5 (funded SaaS, aggregators, small agencies, forums, wrong-intent), which SERP features (AI Overview, local pack, FAQ). Quick read before spending on the API.

## 3. On-page SEO (every page)

- **Title + H1** lead with the target keyword, naturally.
- **Meta description** carries the keyword + the promise, in the reader's words.
- **Slug** = the keyword (e.g. `/lead-generation-agency-singapore/`).
- **One primary keyword per page.** Secondary variants woven in the body. Homepage/pillars own the category; standalone pages own one term.
- **Internal links:** hub-and-spoke. Pillar links down to spokes, spokes link up to the pillar, every page links up to home. No orphans (every page needs 3+ contextual in-body links).
- **Schema:** Service/Article + FAQPage + BreadcrumbList (template already emits these).
- **Add the page to** sitemap, footer, and `llms.txt`.

## 4. Image SEO

See Module 03: light/compressed formats, descriptive keyword-relevant alt text on every image.
