
╔══════════════════════════════════════════════════════════════════════════════╗
║        RESEARCH ENGINE — AGENTIC AI LABS PROGRAMMATIC SEO                  ║
║        Pulls proprietary data before each page is written                  ║
╚══════════════════════════════════════════════════════════════════════════════╝

  PURPOSE
  ─────────────────────────────────────────────────────────────────────────────
  Every pSEO page needs unique data that competitors can't copy.
  This engine pulls from 5 free public sources and produces a RESEARCH BRIEF
  (.txt file) for each page before the content is written.

  The brief contains real numbers, real quotes, real trends.
  The page writer inserts these into the copy. No two pages share the same data.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  HOW TO RUN
  ─────────────────────────────────────────────────────────────────────────────

  Step 1: Install dependencies (one time only)
    cd RESEARCH_ENGINE
    pip install -r requirements.txt

  Step 2: Run for a specific page slug
    python run_research.py dental-practices
    python run_research.py recruiting-agencies
    python run_research.py ghl-agencies

  Step 3: Find the output
    The brief is saved to the relevant playbook's _research_briefs/ folder.
    Example: 01_PERSONAS/_research_briefs/dental-practices.txt

  Step 4: Use the brief
    Open the brief. Copy the UNIQUE DATA POINTS section at the bottom.
    Paste the real numbers into the page copy file.
    The page is now differentiated from every competitor.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  THE 5 NODES
  ─────────────────────────────────────────────────────────────────────────────

  NODE 01 — BLS Labor Data  [node_01_bls_labor.py]
    Source:   Bureau of Labor Statistics public API (free, no key required)
    Pulls:    Median/mean salary for the role being replaced
              National + state employment count
              Year-over-year employment trend
    Updates:  Annually (BLS releases OES data every May)
    Why:      Real government wage data. No competitor has per-role BLS numbers.

  NODE 02 — Reddit Pain Intelligence  [node_02_reddit_pain.py]
    Source:   Reddit public JSON API (free, no auth needed)
    Pulls:    Top posts from last 90 days mentioning the pain keyword
              Real verbatim quotes from industry practitioners
              Upvote count (social proof of how many feel the same)
    Updates:  Every time you run (always fresh)
    Why:      First-person quotes from real practitioners. Google loves this.

  NODE 03 — Google Trends  [node_03_google_trends.py]
    Source:   pytrends (unofficial Google Trends wrapper, free)
    Pulls:    12-month search interest trend for the target keyword
              Rising related queries
              Top states by search volume
    Updates:  Every time you run (always fresh)
    Why:      "Searches for X are up 280% in 12 months" — cited data nobody else has.

  NODE 04 — RSS News Feed  [node_04_rss_news.py]
    Source:   Industry trade publication RSS feeds (free)
    Pulls:    Latest 5 headlines from the industry's trade press
              Any statistics mentioned in articles
              Publication dates (proves recency)
    Updates:  Every time you run (always fresh)
    Why:      Current news signals Google the page is maintained and relevant.

  NODE 05 — Job Market Intelligence  [node_05_job_market.py]
    Source:   BLS OEWS data + public job search pages (free)
    Pulls:    Open job count for the role being replaced
              Salary ranges from live postings
              Top cities hiring
    Updates:  Monthly (job market data)
    Why:      "14,200 dental receptionist jobs open right now" — live, citable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  FOLDER STRUCTURE
  ─────────────────────────────────────────────────────────────────────────────

  RESEARCH_ENGINE/
  ├── README.txt              ← This file
  ├── requirements.txt        ← pip dependencies
  ├── run_research.py         ← Master runner
  ├── config/
  │   ├── industry_map.py     ← Edit this to add new page types
  │   └── sources_reference.txt
  └── nodes/
      ├── node_01_bls_labor.py
      ├── node_02_reddit_pain.py
      ├── node_03_google_trends.py
      ├── node_04_rss_news.py
      └── node_05_job_market.py

  Output goes to:
  01_PERSONAS/_research_briefs/[slug].txt
  02_INTEGRATIONS/_research_briefs/[slug].txt
  (etc. per playbook)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ADDING A NEW PAGE TYPE
  ─────────────────────────────────────────────────────────────────────────────

  1. Open config/industry_map.py
  2. Add a new entry to the INDUSTRY_MAP dictionary
     (copy an existing entry and update the values)
  3. Run: python run_research.py [new-slug]
  4. Brief appears in the correct _research_briefs/ folder

  That's it. No other files need to change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  UPGRADING NODES LATER
  ─────────────────────────────────────────────────────────────────────────────

  Each node is fully independent. To upgrade one:
  - Replace the node file with a paid API version (SerpAPI, DataForSEO, etc.)
  - The master runner doesn't change
  - Other nodes are unaffected

  Example upgrades:
    node_03_google_trends.py  →  SerpAPI Google Trends ($50/mo) for better data
    node_05_job_market.py     →  Bright Data for live Indeed scraping
    node_02_reddit_pain.py    →  Reddit official API (for higher rate limits)

╚══════════════════════════════════════════════════════════════════════════════╝
