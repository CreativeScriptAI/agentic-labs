#!/usr/bin/env python3
import re
import os
import json
from datetime import datetime
from collections import Counter

# --- Configuration ---
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
INPUT_FILE = os.path.join(SCRIPT_DIR, "voiceai_community_whatsapp.txt")
OUTPUT_REPORT = os.path.join(SCRIPT_DIR, "community_deep_analysis.md")
SEO_TOPICS_FILE = os.path.join(SCRIPT_DIR, "seo_topics_roadmap.md")

# --- Analysis Keywords (Organic & Pain Point focused) ---
PAIN_KEYWORDS = [
    "latency", "delay", "slow", "stuck", "problem", "issue", "struggling",
    "confused", "how to", "why is", "not working", "fails", "hallucinate",
    "spam", "pick up", "compliance", "cost", "expensive", "accuracy",
    "barge", "interruption", "turn detection", "vad", "hipaa", "wer", "ttft"
]

TECH_STACK_KEYWORDS = [
    "vapi", "livekit", "pipecat", "telnyx", "twilio", "plivo", "deepgram",
    "elevenlabs", "cartesia", "groq", "gpt", "claude", "gemini", "agora",
    "retell", "bland", "exotel", "sip", "webrtc", "websockets"
]

# --- Parser ---
def parse_whatsapp(file_path):
    # Regex for WhatsApp export format: [DD/MM/YY, HH:MM:SS AM/PM] Name: Message
    pattern = r'^\[(\d{2}/\d{2}/\d{2,4}),\s+(\d{1,2}:\d{2}:\d{2}\s*[AP]M)\]\s+~?\s*([^:]+):\s*(.+)$'
    messages = []
    
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found.")
        return []

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        # Handle multi-line messages
        lines = content.splitlines()
        
        current_msg = None
        for line in lines:
            match = re.match(pattern, line)
            if match:
                if current_msg:
                    messages.append(current_msg)
                date, time, sender, text = match.groups()
                current_msg = {
                    "date": date,
                    "time": time,
                    "sender": sender.strip(),
                    "text": text.strip()
                }
            elif current_msg:
                current_msg["text"] += " " + line.strip()
        
        if current_msg:
            messages.append(current_msg)
            
    return messages

# --- Aggregators ---
def generate_insights(messages):
    insights = {
        "questions": [],
        "pain_points": [],
        "tools_mentioned": Counter(),
        "hot_topics": Counter(),
        "user_queries": []
    }
    
    for msg in messages:
        text = msg["text"].lower()
        
        # 1. Questions
        if "?" in text and len(text) > 15:
            insights["questions"].append({"sender": msg["sender"], "text": msg["text"]})
            
        # 2. Pain Points
        if any(kw in text for kw in PAIN_KEYWORDS):
            insights["pain_points"].append({"sender": msg["sender"], "text": msg["text"]})
            
        # 3. Tools Tracker
        for tool in TECH_STACK_KEYWORDS:
            if tool in text:
                insights["tools_mentioned"][tool] += 1
                
        # 4. Keyword Clouds (ignoring generic stop words)
        words = re.findall(r'\b\w{4,}\b', text)
        for word in words:
            if word in PAIN_KEYWORDS:
                insights["hot_topics"][word] += 1

    return insights

# --- Report Builders ---
def write_report(insights, messages):
    with open(OUTPUT_REPORT, "w", encoding="utf-8") as f:
        f.write("# 🎙️ Voice AI Community Deep Analysis\n\n")
        f.write(f"*Total Messages Analyzed: {len(messages)}*\n")
        f.write(f"*Analysis Date: {datetime.now().strftime('%Y-%m-%d')}*\n\n")
        
        f.write("## 🏗️ The Tech Stack Hierarchy\n")
        f.write("| Tool | Mentions | Strength |\n|---|---|---|\n")
        for tool, count in insights["tools_mentioned"].most_common():
            f.write(f"| {tool.capitalize()} | {count} | {'█' * (count // 2)} |\n")
            
        f.write("\n## 🔴 Critical Pain Points (High Organic Demand)\n")
        f.write("These are the problems people are *struggling* with right now. Content here will likely have zero competition because it's too specific for generic SEO tools.\n\n")
        
        # Select high-signal pain points
        seen = set()
        count = 0
        for p in insights["pain_points"]:
            if count > 20: break
            # Heuristic for high signal: mentions a tool and a pain word
            if any(t in p['text'].lower() for t in TECH_STACK_KEYWORDS) and len(p['text']) > 40:
                snippet = p['text'][:200].strip()
                if snippet[:30] not in seen:
                    f.write(f"- **[{p['sender']}]**: {p['text']}\n\n")
                    seen.add(snippet[:30])
                    count += 1

        f.write("\n## ❓ Real Questions (The Search Intent Map)\n")
        f.write("Direct queries people have. These are exact titles for 'How-to' guides.\n\n")
        for q in insights["questions"][:15]:
            f.write(f"> \"{q['text']}\"\n\n")

def write_seo_topics(insights):
    # Derived topics based on chat sentiment
    topics = [
        {
            "title": "How to scale Pipecat to 50+ concurrent Voice AI calls: Infrastructure & K8s guide",
            "why": "Builders are asking about infra for concurrent calls on Pipecat vs LiveKit.",
            "type": "Technical / Scaling"
        },
        {
            "title": "Why your Indian outbound calls are marked SPAM: The '9-series' vs '8-series' strategy",
            "why": "Heavy discussion on Airtel/Jio spam filters and number series selection.",
            "type": "Market Specific (India)"
        },
        {
            "title": "Telephony Latency vs Pipeline Latency: Why choosing the right SIP provider matters in 2026",
            "why": "Confusion between model latency and PSTN/SIP overhead (Telnyx vs Plivo).",
            "type": "Comparison"
        },
        {
            "title": "Answering Machine Detection (AMD) accuracy: How to detect voicemails under 2 seconds for TCPA compliance",
            "why": "Specific mentions of IraCPA and the 1.75s requirement for enterprise.",
            "type": "Technical Guide"
        },
        {
            "title": "Switching from Vapi to LiveKit/Pipecat: A guide for production-grade Voice AI builders",
            "why": "The 'Vapi is for POC' sentiment is strong in the community.",
            "type": "Strategic Migration"
        },
        {
            "title": "Voice AI for Sales: How to handle interruptions and barge-in without agent hallucinations",
            "why": "Builders struggling with agents talking over users or skipping prompt steps.",
            "type": "Conversation Design"
        },
        {
            "title": "Training Voice AI Agents: The definitive checklist of requirements for your first client",
            "why": "The 'Aditya' (user) question about what to ask clients for training.",
            "type": "Business / Outreach"
        }
    ]
    
    with open(SEO_TOPICS_FILE, "w", encoding="utf-8") as f:
        f.write("# 🚀 Optimized SEO Topics (Derived from Organic Chat)\n\n")
        f.write("These topics are selected because they solve *real* friction observed in the builder community.\n\n")
        for i, t in enumerate(topics, 1):
            f.write(f"### {i}. {t['title']}\n")
            f.write(f"**Type:** {t['type']}\n\n")
            f.write(f"**Context:** {t['why']}\n\n")
            f.write("---\n")

def main():
    print(f"🚀 Analyzing {INPUT_FILE}...")
    messages = parse_whatsapp(INPUT_FILE)
    if not messages:
        return
        
    insights = generate_insights(messages)
    
    print("📝 Generating Report...")
    write_report(insights, messages)
    
    print("🎯 Creating SEO Topics Roadmap...")
    write_seo_topics(insights)
    
    print(f"\n✅ Done! Check the folder for:\n1. {OUTPUT_REPORT}\n2. {SEO_TOPICS_FILE}")

if __name__ == "__main__":
    main()
