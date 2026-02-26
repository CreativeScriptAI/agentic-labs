"""
NODE 02 — Reddit Pain Intelligence
node_02_reddit_pain.py

SOURCE:   Reddit public JSON API (no auth required)
API:      https://www.reddit.com/r/{sub}/search.json?q={query}&sort=top&t=year
PULLS:    Top posts mentioning pain keywords from industry subreddits
          Real verbatim quotes from practitioners
          Upvote counts (social proof signal)
OUTPUTS:  Formatted text section with real quotes for page copy
"""

import requests
import time
import html


REDDIT_HEADERS = {
    "User-Agent": "AgenticAILabs-pSEO-Research/1.0 (contact: hello@tryagentikai.com)"
}

MAX_QUOTES = 5          # Max number of quotes to extract per run
MIN_UPVOTES = 10        # Filter out low-engagement posts
MAX_BODY_CHARS = 350    # Truncate long post bodies at this length


def search_subreddit(subreddit: str, keyword: str) -> list:
    """
    Searches a subreddit for posts matching the keyword.
    Returns a list of post dicts.
    """
    url = f"https://www.reddit.com/r/{subreddit}/search.json"
    params = {
        "q": keyword,
        "sort": "top",
        "t": "year",       # last 12 months
        "limit": 10,
        "restrict_sr": 1,  # restrict to this subreddit only
    }

    try:
        response = requests.get(url, headers=REDDIT_HEADERS, params=params, timeout=10)
        if response.status_code == 429:
            return [{"error": "Rate limited — wait 60 seconds and retry"}]
        response.raise_for_status()
        data = response.json()
        posts = data.get("data", {}).get("children", [])
        return [p["data"] for p in posts]
    except requests.exceptions.RequestException as e:
        return [{"error": str(e)}]
    except Exception as e:
        return [{"error": f"Parse error: {str(e)}"}]


def extract_best_quote(post: dict) -> str:
    """
    Extracts the most useful text from a post.
    Prefers selftext (body) over title alone.
    """
    selftext = html.unescape(post.get("selftext", "")).strip()
    title    = html.unescape(post.get("title", "")).strip()

    if selftext and len(selftext) > 80 and "[deleted]" not in selftext and "[removed]" not in selftext:
        text = selftext[:MAX_BODY_CHARS]
        if len(selftext) > MAX_BODY_CHARS:
            text += "..."
        return text
    return title


def run(config: dict) -> str:
    """
    Main function — searches all configured subreddits for pain quotes.
    Returns a formatted text block for the research brief.
    """
    subreddits = config.get("subreddits", [])
    keywords   = config.get("reddit_keywords", [])
    industry   = config.get("industry", "")

    output_lines = [
        "NODE 02 — REDDIT PAIN INTELLIGENCE",
        "─" * 60,
        f"Industry:      {industry}",
        f"Subreddits:    {', '.join(['r/' + s for s in subreddits])}",
        f"Keywords:      {', '.join(keywords)}",
        f"Source:        Reddit public JSON API (last 12 months, top posts)",
        "",
    ]

    if not subreddits or not keywords:
        output_lines.append("  [SKIPPED] No subreddits or keywords configured.")
        return "\n".join(output_lines)

    collected = []  # List of (subreddit, upvotes, date, quote)

    for sub in subreddits:
        for keyword in keywords[:2]:  # Limit to first 2 keywords to stay within rate limits
            posts = search_subreddit(sub, keyword)
            time.sleep(2)  # Be respectful to the API

            for post in posts:
                if "error" in post:
                    output_lines.append(f"  [WARNING] r/{sub} → {post['error']}")
                    continue

                upvotes = post.get("ups", 0)
                if upvotes < MIN_UPVOTES:
                    continue

                quote = extract_best_quote(post)
                if not quote:
                    continue

                # Format the date
                import datetime
                created = post.get("created_utc", 0)
                date_str = datetime.datetime.utcfromtimestamp(created).strftime("%Y-%m-%d") if created else "unknown"

                permalink = f"https://reddit.com{post.get('permalink', '')}"

                collected.append({
                    "subreddit": sub,
                    "upvotes": upvotes,
                    "date": date_str,
                    "quote": quote,
                    "url": permalink,
                    "title": post.get("title", ""),
                })

            if len(collected) >= MAX_QUOTES:
                break
        if len(collected) >= MAX_QUOTES:
            break

    if not collected:
        output_lines += [
            "  [NO RESULTS] No qualifying posts found.",
            "  Try these manually:",
        ]
        for sub in subreddits:
            output_lines.append(f"    https://www.reddit.com/r/{sub}/search/?q={keywords[0]}&sort=top&t=year")
        return "\n".join(output_lines)

    # Sort by upvotes descending
    collected.sort(key=lambda x: x["upvotes"], reverse=True)
    top_quotes = collected[:MAX_QUOTES]

    output_lines.append(f"FOUND {len(top_quotes)} QUALIFYING POSTS\n")

    for i, item in enumerate(top_quotes, 1):
        output_lines += [
            f"  QUOTE {i}",
            f"  Subreddit:  r/{item['subreddit']}",
            f"  Upvotes:    {item['upvotes']:,}",
            f"  Date:       {item['date']}",
            f"  Title:      {item['title']}",
            f"  Quote:      \"{item['quote']}\"",
            f"  URL:        {item['url']}",
            "",
        ]

    output_lines += [
        "CITE IN PAGE COPY:",
        "  Use verbatim quotes in a callout block or 'What practitioners say' section.",
        "  Attribution: 'r/[subreddit] community member ([date])' — link optional.",
        "  High upvote counts = social proof that many people feel the same pain.",
    ]

    return "\n".join(output_lines)


if __name__ == "__main__":
    test_config = {
        "industry": "Dental Practices",
        "subreddits": ["Dentistry", "smallbusiness"],
        "reddit_keywords": ["receptionist", "missed calls", "phone"],
    }
    print(run(test_config))
