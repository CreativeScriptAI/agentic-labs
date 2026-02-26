"""
NODE 04 — RSS News Feed
node_04_rss_news.py

SOURCE:   Industry trade publication RSS feeds (free, no auth)
LIBRARY:  feedparser — pip install feedparser
PULLS:    Latest 5 headlines from industry trade press
          Publication dates (recency signal)
          Any statistics mentioned in article summaries
OUTPUTS:  Formatted text section with current news for page copy

WHY THIS MATTERS:
  Adding current industry news to a page signals to Google that the content
  is actively maintained and relevant to what's happening right now.
  Static pages without fresh content gradually drop in rankings.
"""

import time
import re
import html


def fetch_feed(url: str, max_items: int = 5) -> dict:
    """
    Fetches a single RSS feed and returns a dict with feed_name and items list.
    On error, returns {"error": "...", "url": url}.
    """
    try:
        import feedparser
    except ImportError:
        return {"error": "feedparser not installed — run: pip install feedparser", "url": url}

    try:
        feed = feedparser.parse(url)
        items = []

        for entry in feed.entries[:max_items]:
            # Clean the summary/description text
            raw_summary = entry.get("summary", entry.get("description", ""))
            clean_summary = re.sub(r"<[^>]+>", " ", raw_summary)   # strip HTML tags
            clean_summary = html.unescape(clean_summary)
            clean_summary = re.sub(r"\s+", " ", clean_summary).strip()
            clean_summary = clean_summary[:400] + "..." if len(clean_summary) > 400 else clean_summary

            # Parse the date
            date_str = "unknown"
            if hasattr(entry, "published_parsed") and entry.published_parsed:
                import datetime
                dt = datetime.datetime(*entry.published_parsed[:6])
                date_str = dt.strftime("%Y-%m-%d")
            elif hasattr(entry, "published"):
                date_str = entry.published[:30]

            items.append({
                "title":   html.unescape(entry.get("title", "No title")),
                "summary": clean_summary,
                "date":    date_str,
                "link":    entry.get("link", ""),
            })

        feed_name = feed.feed.get("title", url)
        return {"feed_name": feed_name, "items": items, "url": url}

    except Exception as e:
        return {"error": f"Failed to fetch {url}: {str(e)}", "url": url}


def extract_statistics(text: str) -> list:
    """
    Extracts any numbers/percentages/stats from article summaries.
    Simple regex approach — finds patterns like "40%", "$2,500", "1,200 practices".
    """
    patterns = [
        r"\d+(?:,\d+)*(?:\.\d+)?%",           # percentages: 40%, 12.5%
        r"\$\d+(?:,\d+)*(?:\.\d+)?(?:[KMB])?", # dollar amounts: $40K, $2,500
        r"\d+(?:,\d+)+\s+\w+",                  # large numbers: 1,200 practices
        r"\d+\s+(?:hours?|minutes?|days?|weeks?|months?|years?)\s+(?:per|a|each|every)\s+\w+",
    ]

    found = []
    for pattern in patterns:
        matches = re.findall(pattern, text, re.IGNORECASE)
        found.extend(matches)
    return list(set(found))[:5]  # deduplicate, cap at 5


def run(config: dict) -> str:
    """
    Main function — fetches all configured RSS feeds and extracts news.
    Returns a formatted text block for the research brief.
    """
    rss_feeds  = config.get("rss_feeds", [])
    industry   = config.get("industry", "")

    output_lines = [
        "NODE 04 — RSS NEWS FEED",
        "─" * 60,
        f"Industry:    {industry}",
        f"Feeds:       {len(rss_feeds)} configured",
        f"Source:      Industry trade publication RSS feeds",
        "",
    ]

    if not rss_feeds:
        output_lines.append("  [SKIPPED] No RSS feeds configured for this slug.")
        return "\n".join(output_lines)

    all_stats = []

    for feed_url in rss_feeds:
        result = fetch_feed(feed_url, max_items=4)
        time.sleep(1)

        if "error" in result:
            output_lines.append(f"  [FEED ERROR] {result['error']}")
            continue

        feed_name = result.get("feed_name", feed_url)
        items     = result.get("items", [])

        output_lines += [
            f"FEED: {feed_name}",
            f"URL:  {feed_url}",
            "",
        ]

        if not items:
            output_lines.append("  [NO ITEMS] Feed returned no articles.")
            output_lines.append("")
            continue

        for i, item in enumerate(items, 1):
            output_lines += [
                f"  Article {i}:",
                f"  Title:   {item['title']}",
                f"  Date:    {item['date']}",
                f"  Link:    {item['link']}",
                f"  Summary: {item['summary']}",
            ]

            # Extract statistics from summary
            stats = extract_statistics(item["summary"] + " " + item["title"])
            if stats:
                output_lines.append(f"  Stats:   {' | '.join(stats)}")
                all_stats.extend(stats)

            output_lines.append("")

    output_lines += [
        "─" * 60,
        "ALL STATISTICS EXTRACTED FROM NEWS:",
    ]
    if all_stats:
        for stat in list(set(all_stats))[:10]:
            output_lines.append(f"  • {stat}")
    else:
        output_lines.append("  None found in summaries — check full articles manually.")

    output_lines += [
        "",
        "CITE IN PAGE COPY:",
        "  Add a 'What's happening in [industry] right now' section",
        "  with 2-3 of the above headlines as cited data points.",
        "  Format: 'According to [publication] ([date]): [headline or stat].'",
        "  This signals to Google that the page is current and actively maintained.",
    ]

    return "\n".join(output_lines)


if __name__ == "__main__":
    test_config = {
        "industry": "Dental Practices",
        "rss_feeds": [
            "https://www.dentistrytoday.com/feed/",
        ],
    }
    print(run(test_config))
