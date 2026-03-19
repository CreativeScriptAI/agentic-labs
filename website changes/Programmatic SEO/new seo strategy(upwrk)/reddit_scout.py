#!/usr/bin/env python3
"""
Reddit Scout — r/VoiceAutomationAI
Fetches posts via Apify's Reddit scraper, scores by engagement, saves a markdown report.

SETUP (one-time, ~2 minutes, no credit card):
  1. Go to https://apify.com and sign up (free)
  2. Go to https://console.apify.com/account/integrations
  3. Copy your "Personal API token"
  4. Copy .env.example → .env and paste your token:
        APIFY_TOKEN=your_token_here

Usage:
    python3 reddit_scout.py                  # default: top posts, last month
    python3 reddit_scout.py --sort new       # newest posts
    python3 reddit_scout.py --sort hot       # hot posts
    python3 reddit_scout.py --limit 50       # number of posts (default 30)
"""

import praw
import argparse
import os
import time
from datetime import datetime, timezone


# ── Config ────────────────────────────────────────────────────────────────────

SUBREDDIT  = "VoiceAutomationAI"
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "reddit_reports")

def load_env():
    env_path = os.path.join(os.path.dirname(__file__), ".env")
    if os.path.exists(env_path):
        with open(env_path) as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, _, val = line.partition("=")
                    os.environ.setdefault(key.strip(), val.strip())

load_env()

# Reddit API Credentials
REDDIT_CLIENT_ID     = os.environ.get("REDDIT_CLIENT_ID", "")
REDDIT_CLIENT_SECRET = os.environ.get("REDDIT_CLIENT_SECRET", "")
REDDIT_USERNAME      = os.environ.get("REDDIT_USERNAME", "")
REDDIT_PASSWORD      = os.environ.get("REDDIT_PASSWORD", "")
REDDIT_USER_AGENT    = os.environ.get("REDDIT_USER_AGENT", "RedditScout/0.1 by /u/" + REDDIT_USERNAME)

# Topics to auto-tag based on keywords in title/text
TOPIC_TAGS = {
    "latency":         ["latency", "lag", "delay", "slow", "ms", "millisecond"],
    "vapi":            ["vapi"],
    "bland":           ["bland"],
    "retell":          ["retell"],
    "elevenlabs":      ["elevenlabs", "eleven labs"],
    "twilio":          ["twilio"],
    "conversation":    ["conversation", "barge", "interrupt", "turn", "dialogue", "script"],
    "pricing":         ["price", "pricing", "cost", "cheap", "expensive", "budget"],
    "comparison":      ["vs", "versus", "compare", "comparison", "better", "which"],
    "getting-started": ["how to", "beginner", "start", "setup", "tutorial", "guide"],
    "failure":         ["fail", "broke", "bug", "error", "issue", "problem", "wrong", "crash"],
    "appointment":     ["appointment", "booking", "calendar", "schedule"],
    "real-estate":     ["real estate", "realtor", "property", "mortgage"],
    "sales":           ["sdr", "sales", "outbound", "cold call", "lead"],
    "inbound":         ["inbound", "support", "customer service", "helpdesk"],
    "gohighlevel":     ["gohighlevel", "ghl", "go high level", "highlevel"],
    "n8n":             ["n8n"],
    "make-zapier":     ["make.com", "zapier", "make ", "automation platform"],
}


# ── Native Reddit fetch (PRAW) ────────────────────────────────────────────────

def get_reddit_client():
    if not all([REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, REDDIT_USERNAME, REDDIT_PASSWORD]):
        print("\n  ERROR: Reddit API credentials not fully set in .env.")
        print("  Please ensure the following are set:")
        print("    REDDIT_CLIENT_ID")
        print("    REDDIT_CLIENT_SECRET")
        print("    REDDIT_USERNAME")
        print("    REDDIT_PASSWORD")
        print("\n  Refer to README or implementation_plan.md for setup instructions.\n")
        raise SystemExit(1)
    
    return praw.Reddit(
        client_id=REDDIT_CLIENT_ID,
        client_secret=REDDIT_CLIENT_SECRET,
        user_agent=REDDIT_USER_AGENT,
        username=REDDIT_USERNAME,
        password=REDDIT_PASSWORD
    )

def fetch_posts(sort="top", time_filter="month", limit=50):
    """Fetch posts directly from Reddit using PRAW."""
    reddit = get_reddit_client()
    subreddit = reddit.subreddit(SUBREDDIT)
    
    print(f"  Fetching from r/{SUBREDDIT} (sort={sort}, limit={limit}) ...")
    
    if sort == "top":
        submissions = subreddit.top(time_filter=time_filter, limit=limit)
    elif sort == "hot":
        submissions = subreddit.hot(limit=limit)
    elif sort == "new":
        submissions = subreddit.new(limit=limit)
    elif sort == "rising":
        submissions = subreddit.rising(limit=limit)
    else:
        submissions = subreddit.hot(limit=limit)
        
    return list(submissions)


def normalize_post(submission):
    """Normalize PRAW submission object into a consistent dict."""
    title    = submission.title
    score    = submission.score
    comments = submission.num_comments
    url      = "https://reddit.com" + submission.permalink
    flair    = submission.link_flair_text or ""
    body     = submission.selftext
    created  = datetime.fromtimestamp(submission.created_utc, tz=timezone.utc).strftime("%Y-%m-%d")

    combined = (title + " " + body).lower()
    tags = [tag for tag, keywords in TOPIC_TAGS.items()
            if any(kw in combined for kw in keywords)]

    return {
        "title":        title,
        "score":        score,
        "comments":     comments,
        "url":          url,
        "flair":        flair,
        "created":      created,
        "tags":         tags,
        "text_preview": body[:300].strip(),
        "id":           submission.id,
    }




def engagement_score(post):
    """Weighted engagement: comments matter more than upvotes for content ideas."""
    return post["comments"] * 3 + post["score"]


# ── Report generation ─────────────────────────────────────────────────────────

def tag_badge(tags):
    if not tags:
        return ""
    return "  `" + "`  `".join(tags) + "`"


def build_report(posts, args):
    now = datetime.now().strftime("%Y-%m-%d %H:%M")
    lines = []

    lines.append(f"# Reddit Scout Report — r/{SUBREDDIT}")
    lines.append(f"**Generated:** {now}  |  **Sort:** {args.sort}  |  **Posts fetched:** {len(posts)}\n")
    lines.append("---\n")

    # ── Summary stats
    if posts:
        avg_comments = sum(p["comments"] for p in posts) / len(posts)
        avg_score    = sum(p["score"]    for p in posts) / len(posts)
        top_post     = max(posts, key=lambda p: p["comments"])

        lines.append("## Quick Stats\n")
        lines.append(f"- Avg comments per post: **{avg_comments:.1f}**")
        lines.append(f"- Avg upvote score: **{avg_score:.1f}**")
        lines.append(f"- Most discussed: **\"{top_post['title']}\"** ({top_post['comments']} comments)\n")
        lines.append("---\n")

    # ── Tag frequency (topic heatmap)
    all_tags = [tag for p in posts for tag in p["tags"]]
    if all_tags:
        from collections import Counter
        tag_counts = Counter(all_tags).most_common()
        lines.append("## Topic Heatmap (what the sub is talking about)\n")
        lines.append("| Topic | Post count |")
        lines.append("|---|---|")
        for tag, count in tag_counts:
            lines.append(f"| `{tag}` | {count} |")
        lines.append("")
        lines.append("---\n")

    # ── High engagement posts (top 15 by engagement score)
    high_engagement = sorted(posts, key=engagement_score, reverse=True)[:15]
    lines.append("## High-Engagement Posts (ranked by comments × 3 + score)\n")
    for i, p in enumerate(high_engagement, 1):
        lines.append(f"### {i}. {p['title']}")
        lines.append(f"**Score:** {p['score']}  |  **Comments:** {p['comments']}  |  **Date:** {p['created']}")
        if p["flair"]:
            lines.append(f"**Flair:** {p['flair']}")
        if p["tags"]:
            lines.append(f"**Tags:**{tag_badge(p['tags'])}")
        lines.append(f"**Link:** {p['url']}")
        if p["text_preview"]:
            lines.append(f"\n> {p['text_preview']}{'...' if len(p['text_preview']) == 300 else ''}")
        lines.append("")

    lines.append("---\n")

    # ── Content opportunity index
    lines.append("## Content Opportunity Index\n")
    lines.append("Posts where engagement is high but the question seems unanswered — "
                 "these are the best targets for authoritative replies or blog posts.\n")

    opportunity_posts = [p for p in posts if p["comments"] >= 3]
    opportunity_posts = sorted(opportunity_posts, key=lambda p: p["comments"], reverse=True)[:10]

    if opportunity_posts:
        lines.append("| Title | Comments | Tags | Link |")
        lines.append("|---|---|---|---|")
        for p in opportunity_posts:
            tags_str = ", ".join(f"`{t}`" for t in p["tags"]) if p["tags"] else "—"
            short_title = p["title"][:70] + ("..." if len(p["title"]) > 70 else "")
            lines.append(f"| {short_title} | {p['comments']} | {tags_str} | [→]({p['url']}) |")
    else:
        lines.append("_Not enough comment data yet — subreddit may be early stage._\n")

    lines.append("\n---\n")
    lines.append("## Suggested Response Angles\n")
    lines.append("Based on the tag heatmap above, these are the content gaps worth targeting:\n")

    content_angles = {
        "latency":      "Write: 'How to reduce voice AI latency for business calls' — link to /ai-voice-agent",
        "comparison":   "Write: 'Vapi vs Bland AI for appointment setting' — link to /vapi-alternative & /bland-ai-alternative",
        "failure":      "Write: 'Our AI agent failed silently — here's what we missed' — targets retainer buyers",
        "conversation": "Write: 'Conversation design for voice AI — what developers get wrong'",
        "appointment":  "Answer threads directly — link to /ai-voice-agent for appointment setting use case",
        "sales":        "Answer threads directly — link to /ai-sdr-for-ghl-agencies",
        "gohighlevel":  "Answer threads directly — link to /ai-voice-agent-for-gohighlevel",
        "real-estate":  "Answer threads directly — strong fit for vertical AI system pitch",
    }

    triggered = [content_angles[tag] for tag in [t for t, _ in (Counter(all_tags).most_common() if all_tags else [])]
                 if tag in content_angles]

    if triggered:
        for angle in triggered[:5]:
            lines.append(f"- {angle}")
    else:
        lines.append("- Run the scout again with `--sort top --t month` for more data.")

    lines.append("\n---")
    lines.append(f"\n*Scout run by Agentic AI Labs | {now}*")

    return "\n".join(lines)


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Scout r/VoiceAutomationAI for content opportunities")
    parser.add_argument("--sort",  default="hot", choices=["hot", "new", "top", "rising"], help="Sort type (default: hot)")
    parser.add_argument("--t",     default="week", choices=["day", "week", "month", "year", "all"], help="Time filter for --sort top (default: week)")
    parser.add_argument("--limit", default=50, type=int, help="Number of posts to fetch (default: 50)")
    parser.add_argument("--also-top", action="store_true", help="Also fetch top/month in addition to --sort")
    args = parser.parse_args()

    print(f"\nScouting r/{SUBREDDIT} ({args.sort}) ...")

    raw_posts = fetch_posts(sort=args.sort, time_filter=args.t, limit=args.limit)

    # Optionally also pull top/month to enrich
    if args.also_top or args.sort == "hot":
        print(f"  Also fetching top/month ...")
        top_raw = fetch_posts(sort="top", time_filter="month", limit=args.limit)
        raw_posts = raw_posts + top_raw

    posts = [normalize_post(p) for p in raw_posts]

    # Deduplicate by post ID
    seen = set()
    unique = []
    for p in posts:
        pid = p["id"] or p["url"]
        if pid and pid not in seen:
            seen.add(pid)
            unique.append(p)

    posts = [p for p in unique if p["title"]]
    print(f"  {len(posts)} unique posts after dedup")

    report = build_report(posts, args)

    # Save report
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    timestamp = datetime.now().strftime("%Y-%m-%d_%H%M")
    filename = f"scout_{timestamp}_{args.sort}.md"
    filepath = os.path.join(OUTPUT_DIR, filename)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(report)

    print(f"\n  Report saved: {filepath}")
    print(f"  Posts analyzed: {len(posts)}")

    if posts:
        top = max(posts, key=lambda p: p["comments"])
        print(f"  Most discussed: \"{top['title']}\" ({top['comments']} comments)")

    print()


if __name__ == "__main__":
    main()
