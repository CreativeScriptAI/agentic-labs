"""
NODE 06 — Image Scout
node_06_images.py

SOURCE:   DuckDuckGo image search (no API key, no auth)
PULLS:    Top 5 relevant image URLs per search query
          Image title, source domain, thumbnail URL, full image URL
OUTPUTS:  Formatted list of image URLs saved to blog's _images.txt
          Use these as candidates — preview and pick the best one manually

WHY DDG:  No API key needed, no rate limit for light use, returns real
          web images (not stock), lightweight HTTP requests only.
          No images are downloaded — just URLs are surfaced.
"""

import re
import time
import requests
import urllib.parse


HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/120.0.0.0 Safari/537.36",
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-Language": "en-US,en;q=0.9",
    "Referer": "https://duckduckgo.com/",
}

MAX_RESULTS_PER_QUERY = 5   # Keep it light — just enough candidates


def get_ddg_token(query: str):
    """
    DuckDuckGo requires a VQD token before image search.
    Fetches the token from the main search page.
    """
    try:
        url = f"https://duckduckgo.com/?q={urllib.parse.quote(query)}&iax=images&ia=images"
        r = requests.get(url, headers=HEADERS, timeout=10)
        match = re.search(r'vqd=([\d-]+)', r.text)
        if match:
            return match.group(1)
    except Exception:
        pass
    return None


def search_images(query: str, max_results: int = MAX_RESULTS_PER_QUERY) -> list:
    """
    Searches DuckDuckGo images for a query.
    Returns a list of image result dicts.
    """
    token = get_ddg_token(query)
    if not token:
        return []

    try:
        params = {
            "q": query,
            "vqd": token,
            "p": "1",
            "type": "photo",
            "f": ",,,,,",
            "o": "json",
        }
        url = "https://duckduckgo.com/i.js?" + urllib.parse.urlencode(params)
        r = requests.get(url, headers=HEADERS, timeout=10)
        data = r.json()
        results = data.get("results", [])[:max_results]
        return [
            {
                "title": item.get("title", ""),
                "image_url": item.get("image", ""),
                "thumbnail": item.get("thumbnail", ""),
                "source": item.get("url", ""),
                "domain": _extract_domain(item.get("url", "")),
                "width": item.get("width", 0),
                "height": item.get("height", 0),
            }
            for item in results
            if item.get("image")
        ]
    except Exception:
        return []


def _extract_domain(url: str) -> str:
    try:
        match = re.search(r'https?://([^/]+)', url)
        return match.group(1) if match else url
    except Exception:
        return url


def run(config: dict) -> str:
    """
    Main entry point called by run_research.py.
    Searches for images using queries from config['image_queries'].
    Falls back to trends_keywords if image_queries not set.
    """
    queries    = config.get("image_queries") or config.get("trends_keywords", [])
    industry   = config.get("industry", "")
    page_title = config.get("page_title", "")

    if not queries:
        return (
            "NODE 06 — IMAGE SCOUT\n"
            "────────────────────────────────────────────────────────────\n"
            "  [SKIPPED] No image_queries configured for this slug.\n"
        )

    lines = [
        "NODE 06 — IMAGE SCOUT",
        "────────────────────────────────────────────────────────────",
        f"Topic:     {page_title}",
        f"Industry:  {industry}",
        f"Queries:   {len(queries)} search terms",
        f"Source:    DuckDuckGo image search (no API key)",
        "",
    ]

    total_found = 0
    all_results = []

    for query in queries:
        lines.append(f"QUERY: \"{query}\"")
        results = search_images(query)
        time.sleep(1.5)  # Polite delay between queries

        if not results:
            lines.append("  [NO RESULTS] Try a different query term.\n")
            continue

        for i, img in enumerate(results, 1):
            lines.append(f"  Image {i}:")
            lines.append(f"  Title:     {img['title'][:80]}")
            lines.append(f"  Source:    {img['domain']}")
            lines.append(f"  Full URL:  {img['image_url']}")
            lines.append(f"  Page URL:  {img['source']}")
            if img['width'] and img['height']:
                lines.append(f"  Size:      {img['width']}×{img['height']}px")
            lines.append("")
            all_results.append(img)
            total_found += 1

        lines.append("")

    # ── Usage instructions ────────────────────────────────────────────────────
    lines += [
        "────────────────────────────────────────────────────────────",
        "HOW TO USE THESE IMAGES:",
        "  1. Open Full URL in browser to preview the image",
        "  2. Check Page URL to verify source (prefer news sites,",
        "     product pages, or tech blogs over generic sites)",
        "  3. Right-click → Save As to download your chosen image",
        "  4. Upload to Notion page as thumbnail or inline image",
        "",
        "WHAT TO LOOK FOR:",
        "  - Screenshots from real product dashboards (Vapi, Telnyx, etc.)",
        "  - Photos from news/tech articles about this exact topic",
        "  - Charts or diagrams from official product docs",
        "  - Avoid: generic phone photos, obvious stock images",
        "",
        f"TOTAL CANDIDATES FOUND: {total_found}",
    ]

    return "\n".join(lines)
