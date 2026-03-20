"""
push_to_notion.py — Agentic AI Labs Blog Publisher

Reads an approved blog_draft.md and pushes it to the Notion blog database
as a Private page. Once in Notion, change status → Public to go live.

USAGE:
  python3 push_to_notion.py 01_india_outbound_spam
  python3 push_to_notion.py 02_vapi_to_livekit_migration

HOW IT WORKS:
  1. Reads community_blogs/[folder]/blog_draft.md
  2. Parses title, summary, slug, tags from the markdown
  3. Converts markdown body → Notion blocks
  4. Creates a new page in the Notion database (status = Private)
  5. Prints the Notion page URL for review
  6. You flip status → Public in Notion → live on site within 60s
"""

import os
import re
import sys
from datetime import date
from notion_client import Client
from dotenv import load_dotenv

# ── Load credentials ──────────────────────────────────────────────────────────
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(SCRIPT_DIR, ".env"))

NOTION_TOKEN       = os.environ.get("NOTION_TOKEN")
BLOG_DATABASE_ID   = os.environ.get("NOTION_BLOG_DATABASE_ID", "23fb34d6b4d480c6aa14e4326b1d1725")

# ── Blog metadata map ─────────────────────────────────────────────────────────
# Maps folder name → tags, category, slug
BLOG_META = {
    "01_india_outbound_spam": {
        "slug": "india-outbound-spam",
        "tags": ["Voice AI", "India", "Telephony", "Outbound"],
        "category": "Technical",
    },
    "02_vapi_to_livekit_migration": {
        "slug": "vapi-to-livekit-migration",
        "tags": ["Voice AI", "Vapi", "LiveKit", "Pipecat", "Infrastructure"],
        "category": "Technical",
    },
    "03_amd_voicemail_detection": {
        "slug": "amd-voicemail-detection",
        "tags": ["Voice AI", "AMD", "TCPA", "Compliance"],
        "category": "Technical",
    },
    "04_telephony_vs_pipeline_latency": {
        "slug": "telephony-vs-pipeline-latency",
        "tags": ["Voice AI", "Latency", "Telephony", "SIP"],
        "category": "Technical",
    },
    "05_scaling_pipecat_concurrent": {
        "slug": "scaling-pipecat-concurrent-calls",
        "tags": ["Voice AI", "Pipecat", "LiveKit", "Scaling", "Infrastructure"],
        "category": "Technical",
    },
    "06_first_paying_client": {
        "slug": "first-paying-client-voice-ai",
        "tags": ["Voice AI", "Business", "Sales", "Agency"],
        "category": "Business",
    },
}


# ─────────────────────────────────────────────────────────────────────────────
# MARKDOWN PARSER → NOTION BLOCKS
# ─────────────────────────────────────────────────────────────────────────────

def parse_inline(text: str) -> list:
    """
    Converts inline markdown (bold, italic, links, inline code)
    into a list of Notion rich_text objects.
    """
    rich_texts = []
    # Pattern order matters: links first, then bold+italic, bold, italic, code
    pattern = re.compile(
        r'\[([^\]]+)\]\(([^)]+)\)'   # [text](url)
        r'|\*\*\*(.+?)\*\*\*'        # ***bold+italic***
        r'|\*\*(.+?)\*\*'            # **bold**
        r'|\*(.+?)\*'                # *italic*
        r'|`([^`]+)`'                # `inline code`
    )
    last = 0
    for m in pattern.finditer(text):
        # Plain text before this match
        if m.start() > last:
            rich_texts.append(_plain(text[last:m.start()]))
        if m.group(1):  # Link
            rich_texts.append({
                "type": "text",
                "text": {"content": m.group(1), "link": {"url": m.group(2)}},
                "annotations": _annot(),
            })
        elif m.group(3):  # Bold + italic
            rich_texts.append({
                "type": "text",
                "text": {"content": m.group(3), "link": None},
                "annotations": _annot(bold=True, italic=True),
            })
        elif m.group(4):  # Bold
            rich_texts.append({
                "type": "text",
                "text": {"content": m.group(4), "link": None},
                "annotations": _annot(bold=True),
            })
        elif m.group(5):  # Italic
            rich_texts.append({
                "type": "text",
                "text": {"content": m.group(5), "link": None},
                "annotations": _annot(italic=True),
            })
        elif m.group(6):  # Inline code
            rich_texts.append({
                "type": "text",
                "text": {"content": m.group(6), "link": None},
                "annotations": _annot(code=True),
            })
        last = m.end()
    if last < len(text):
        rich_texts.append(_plain(text[last:]))
    return rich_texts or [_plain(text)]


def _plain(content: str) -> dict:
    return {
        "type": "text",
        "text": {"content": content, "link": None},
        "annotations": _annot(),
    }


def _annot(bold=False, italic=False, code=False, strikethrough=False, underline=False):
    return {
        "bold": bold,
        "italic": italic,
        "strikethrough": strikethrough,
        "underline": underline,
        "code": code,
        "color": "default",
    }


def chunk_rich_text(rich_texts: list, max_len=2000) -> list:
    """Notion limits rich_text content to 2000 chars. Split if needed."""
    result = []
    for rt in rich_texts:
        content = rt["text"]["content"]
        while len(content) > max_len:
            part = dict(rt)
            part["text"] = dict(rt["text"])
            part["text"]["content"] = content[:max_len]
            result.append(part)
            content = content[max_len:]
        if content:
            part = dict(rt)
            part["text"] = dict(rt["text"])
            part["text"]["content"] = content
            result.append(part)
    return result


def md_to_notion_blocks(md: str) -> list:
    """
    Converts a markdown string to a list of Notion block objects.
    Handles: H1-H3, paragraphs, blockquotes, code blocks,
             bullet lists, numbered lists, dividers, blank lines.
    """
    blocks = []
    lines = md.split("\n")
    i = 0
    in_code_block = False
    code_lines = []
    code_lang = ""

    while i < len(lines):
        line = lines[i]

        # ── Code block ────────────────────────────────────────────────────────
        if line.strip().startswith("```"):
            if not in_code_block:
                in_code_block = True
                code_lang = line.strip()[3:].strip() or "plain text"
                code_lines = []
            else:
                in_code_block = False
                blocks.append({
                    "object": "block",
                    "type": "code",
                    "code": {
                        "rich_text": [_plain("\n".join(code_lines))],
                        "language": code_lang if code_lang else "plain text",
                    },
                })
                code_lines = []
            i += 1
            continue

        if in_code_block:
            code_lines.append(line)
            i += 1
            continue

        # ── Divider ───────────────────────────────────────────────────────────
        if re.match(r'^---+$', line.strip()):
            blocks.append({"object": "block", "type": "divider", "divider": {}})
            i += 1
            continue

        # ── Headings ──────────────────────────────────────────────────────────
        if line.startswith("# "):
            # H1 = page title, skip in body blocks
            i += 1
            continue
        if line.startswith("## "):
            rt = chunk_rich_text(parse_inline(line[3:].strip()))
            blocks.append({
                "object": "block",
                "type": "heading_2",
                "heading_2": {"rich_text": rt, "color": "default"},
            })
            i += 1
            continue
        if line.startswith("### "):
            rt = chunk_rich_text(parse_inline(line[4:].strip()))
            blocks.append({
                "object": "block",
                "type": "heading_3",
                "heading_3": {"rich_text": rt, "color": "default"},
            })
            i += 1
            continue

        # ── Blockquote ────────────────────────────────────────────────────────
        if line.startswith("> "):
            rt = chunk_rich_text(parse_inline(line[2:].strip()))
            blocks.append({
                "object": "block",
                "type": "quote",
                "quote": {"rich_text": rt, "color": "default"},
            })
            i += 1
            continue

        # ── Bullet list ───────────────────────────────────────────────────────
        if re.match(r'^[-*] ', line):
            rt = chunk_rich_text(parse_inline(line[2:].strip()))
            blocks.append({
                "object": "block",
                "type": "bulleted_list_item",
                "bulleted_list_item": {"rich_text": rt, "color": "default"},
            })
            i += 1
            continue

        # ── Numbered list ─────────────────────────────────────────────────────
        if re.match(r'^\d+\. ', line):
            text = re.sub(r'^\d+\. ', '', line)
            rt = chunk_rich_text(parse_inline(text.strip()))
            blocks.append({
                "object": "block",
                "type": "numbered_list_item",
                "numbered_list_item": {"rich_text": rt, "color": "default"},
            })
            i += 1
            continue

        # ── Image ─────────────────────────────────────────────────────────────
        img_match = re.match(r'^!\[([^\]]*)\]\(([^)]+)\)$', line.strip())
        if img_match:
            alt_text = img_match.group(1)
            img_url  = img_match.group(2)
            blocks.append({
                "object": "block",
                "type": "image",
                "image": {
                    "type": "external",
                    "external": {"url": img_url},
                    "caption": [_plain(alt_text)] if alt_text else [],
                },
            })
            i += 1
            continue

        # ── Table row (skip — Notion API table creation is complex) ───────────
        if line.strip().startswith("|"):
            i += 1
            continue

        # ── Blank line ────────────────────────────────────────────────────────
        if not line.strip():
            i += 1
            continue

        # ── Paragraph ─────────────────────────────────────────────────────────
        rt = chunk_rich_text(parse_inline(line.strip()))
        if rt:
            blocks.append({
                "object": "block",
                "type": "paragraph",
                "paragraph": {"rich_text": rt, "color": "default"},
            })
        i += 1

    return blocks


# ─────────────────────────────────────────────────────────────────────────────
# BLOG DRAFT PARSER
# ─────────────────────────────────────────────────────────────────────────────

def parse_blog_draft(path: str) -> dict:
    """
    Reads a blog_draft.md and extracts:
    - title (from H1)
    - summary (first plain paragraph after the byline and first divider)
    - body_blocks (Notion blocks for everything after the byline)
    """
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    lines = content.split("\n")

    # Title = first H1
    title = ""
    for line in lines:
        if line.startswith("# "):
            title = line[2:].strip()
            break

    # Summary = first real paragraph (skip H1, byline, dividers, blanks, images)
    summary = ""
    skip_patterns = [r'^#', r'^\*\*By ', r'^---', r'^$', r'^!\[']
    for line in lines:
        if any(re.match(p, line) for p in skip_patterns):
            continue
        # First real paragraph = summary
        summary = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', line)  # strip links
        summary = re.sub(r'\*+', '', summary).strip()             # strip bold/italic
        if len(summary) > 200:
            summary = summary[:197] + "..."
        break

    # Body blocks = full content (H1 is skipped inside md_to_notion_blocks)
    body_blocks = md_to_notion_blocks(content)

    return {
        "title": title,
        "summary": summary,
        "body_blocks": body_blocks,
    }


# ─────────────────────────────────────────────────────────────────────────────
# NOTION PAGE CREATOR
# ─────────────────────────────────────────────────────────────────────────────

def push_to_notion(folder_name: str):
    if not NOTION_TOKEN:
        print("ERROR: NOTION_TOKEN not found in .env")
        sys.exit(1)

    # ── Resolve paths ─────────────────────────────────────────────────────────
    blog_dir  = os.path.join(SCRIPT_DIR, folder_name)
    draft_path = os.path.join(blog_dir, "blog_draft.md")

    if not os.path.exists(draft_path):
        print(f"ERROR: blog_draft.md not found at {draft_path}")
        sys.exit(1)

    meta = BLOG_META.get(folder_name)
    if not meta:
        print(f"ERROR: No metadata configured for '{folder_name}'")
        print(f"Add an entry to BLOG_META in push_to_notion.py")
        sys.exit(1)

    print(f"\n  Reading: {draft_path}")
    parsed = parse_blog_draft(draft_path)
    print(f"  Title:   {parsed['title']}")
    print(f"  Summary: {parsed['summary'][:80]}...")
    print(f"  Blocks:  {len(parsed['body_blocks'])} Notion blocks")

    client = Client(auth=NOTION_TOKEN)

    # ── Build page properties ─────────────────────────────────────────────────
    properties = {
        "title": {
            "title": [{"type": "text", "text": {"content": parsed["title"]}}]
        },
        "slug": {
            "rich_text": [{"type": "text", "text": {"content": meta["slug"]}}]
        },
        "status": {
            "select": {"name": "Private"}
        },
        "type": {
            "select": {"name": "Post"}
        },
        "date": {
            "date": {"start": date.today().isoformat()}
        },
        "summary": {
            "rich_text": [{"type": "text", "text": {"content": parsed["summary"]}}]
        },
        "tags": {
            "multi_select": [{"name": t} for t in meta["tags"]]
        },
        "category": {
            "select": {"name": meta["category"]}
        },
    }

    # ── Create the Notion page ────────────────────────────────────────────────
    # Notion API allows max 100 blocks per create call — batch if needed
    blocks = parsed["body_blocks"]
    first_batch = blocks[:100]

    print(f"\n  Creating Notion page...")
    page = client.pages.create(
        parent={"database_id": BLOG_DATABASE_ID},
        properties=properties,
        children=first_batch,
    )

    page_id  = page["id"]
    page_url = page.get("url", f"https://notion.so/{page_id.replace('-', '')}")

    # ── Append remaining blocks if any ───────────────────────────────────────
    remaining = blocks[100:]
    batch_num = 2
    while remaining:
        batch = remaining[:100]
        client.blocks.children.append(block_id=page_id, children=batch)
        print(f"  Appended block batch {batch_num} ({len(batch)} blocks)")
        remaining = remaining[100:]
        batch_num += 1

    # ── Done ─────────────────────────────────────────────────────────────────
    print("\n╔══════════════════════════════════════════════════════════════════════╗")
    print("║   PUSHED TO NOTION ✓                                                ║")
    print("╚══════════════════════════════════════════════════════════════════════╝")
    print(f"\n  Page URL:  {page_url}")
    print(f"  Status:    Private (only you can see it)")
    print(f"\n  Next steps:")
    print(f"  1. Open the page in Notion and review the formatting")
    print(f"  2. Add a thumbnail image if needed")
    print(f"  3. Change Status → Public to make it live")
    print(f"  4. Site picks it up within 60 seconds via ISR")
    print("")


# ─────────────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("\nUsage: python3 push_to_notion.py [blog-folder-name]")
        print("\nAvailable folders:")
        for k in BLOG_META:
            print(f"  {k}")
        sys.exit(1)

    push_to_notion(sys.argv[1].strip())
