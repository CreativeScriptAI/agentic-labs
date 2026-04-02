# Vapi to LiveKit/Pipecat: A Migration Guide for Production Voice AI Builders

**By [Aditya Pandey](https://www.linkedin.com/in/aditya-pandey-7588021b1) | Agentic AI Labs | March 2026**

![LiveKit voice AI agent dashboard — production infrastructure for real-time voice pipelines](https://iqruyoeyjyecuytgfzbn.supabase.co/storage/v1/object/public/tool-images/hero-images/1746478271351-Screenshot_2025-05-05_10.51.00_PM.png)

---

There is a pattern that repeats itself across almost every serious Voice AI builder's journey.

They start on Vapi. It works. The demo impresses the client. The first production deployment goes live. And then — somewhere between the first 500 calls and the first real edge case — they hit a wall.

The wall isn't Vapi failing. It's Vapi doing exactly what it was designed to do. The problem is that what they need now is something different.

This is a guide for builders who are at that wall: what it actually means, what the alternatives are, and what moving to LiveKit or Pipecat actually involves in practice.

---

## Why Vapi Is Genuinely Good (and Why That's Relevant)

Start here because it matters for the decision.

Vapi is an excellent platform for getting a Voice AI agent into production quickly. The managed telephony, the pre-built integrations, the dashboard for monitoring calls — these are real, well-built features that save weeks of infrastructure work. Companies like Ringg AI, which now handles 1M+ customer calls daily for Flipkart and CRED, started somewhere too.

The trade-off Vapi makes is deliberate: it abstracts the infrastructure so you can move fast. That abstraction is the product. It's not a bug.

The issue is that abstraction has a ceiling. When your use case sits comfortably within Vapi's design parameters, you never hit it. When your use case requires something below that abstraction layer — custom audio processing, granular session control, specific latency targets, non-standard telephony routing — you start fighting the platform instead of building on it.

> *"Your agent is more than just the platform or LLM/STT/TTS models. It's a whole system that listens, understands, decides, and acts. If one part fails, the whole thing breaks."*
> — r/VoiceAutomationAI builder, March 2026

That quote captures what Vapi builders discover when they hit production complexity: the system underneath the platform starts mattering as much as the platform itself.

---

## The 4 Signs You've Hit the Vapi Ceiling

**1. You're fighting the latency floor**

Vapi has a baseline latency that comes from its managed infrastructure. For most use cases this is fine. For high-frequency outbound calling in latency-sensitive markets (financial services, India PSTN), builders report hitting a floor they can't push through — even after optimising every variable they can control.

If you've already switched to faster STT (Deepgram Nova-3), downgraded your LLM (GPT-4o-mini or Groq), and enabled streaming TTS — and you're still not hitting your target — the remaining latency is likely in Vapi's routing layer, not your stack.

**2. You need audio-level control**

Vapi gives you hooks and functions. It does not give you raw audio frames.

If your use case requires noise cancellation, custom VAD (voice activity detection) tuning, background audio injection, or any real-time audio processing between the microphone and the STT model — you cannot do this on Vapi. The audio pipeline is managed. You get what it gives you.

**3. Your call volume makes the per-minute pricing hurt**

Vapi's pricing works well at low and medium volume. At scale — thousands of concurrent calls, millions of minutes per month — the managed pricing becomes a meaningful cost line. Companies at that scale typically need infrastructure economics, not SaaS pricing.

At 100,000 minutes/month, the math on self-managed infrastructure vs managed platforms changes materially. The operational overhead is real, but so is the cost difference.

**4. You need custom session logic that Vapi can't express**

Multi-party calls, dynamic participant routing, mid-call agent handoffs with context preservation, calls that change behaviour based on real-time external state — these are architecturally complex on Vapi because the session model is opinionated.

If you've spent more than a week trying to make a non-standard call flow work within Vapi's model, you're likely fighting the abstraction rather than working with it.

---

## LiveKit vs Pipecat: Understanding the Choice

These are not the same kind of tool.

**LiveKit** is a real-time communications infrastructure layer. It handles WebRTC, SFU (Selective Forwarding Unit) for multi-party audio, and session management. It is not opinionated about AI models. You bring your own STT, LLM, and TTS. LiveKit gives you the transport layer.

A community poll of production Voice AI builders asked how they deploy their voice agent pipelines. LiveKit Cloud came first (4 votes), followed by various self-hosted setups (9 votes combined), with Pipecat Cloud at 1 vote. The pattern in production is that LiveKit's scaling properties — WebRTC native, SFU architecture, horizontal scaling built-in — make it the default choice when scale is the primary concern.

**Pipecat** is a Python framework for building voice AI pipelines. It is designed around the pipeline pattern: audio in → STT → LLM → TTS → audio out. It is opinionated about structure but gives you full control of each component. Pipecat is faster to build with than raw LiveKit but less flexible at the infrastructure layer.

A useful heuristic:

| Your priority | Use |
|---|---|
| Horizontal scale, WebRTC, multi-party | LiveKit |
| Fast pipeline iteration, Python-native, custom processors | Pipecat |
| Both (Pipecat deployed on LiveKit) | LiveKit + Pipecat together |

The last option — Pipecat running on LiveKit transport — is increasingly how production deployments are structured. You get Pipecat's clean pipeline architecture and LiveKit's infrastructure.

---

## What the Migration Actually Involves

This is what most migration guides skip. The actual work is not just "swap the SDK."

**Step 1 — Rebuild your telephony layer**

Vapi handles your PSTN/SIP connection. When you leave, you own this. You'll need a SIP trunk (Telnyx, Twilio, or Plivo) and the configuration to connect it to your LiveKit or Pipecat pipeline. This is not complex, but it is real work — typically 2-3 days for a builder who hasn't done it before.

Telnyx is the current community preference for Voice AI workloads because it offers 16kHz audio (vs Twilio's 8kHz default), which meaningfully improves STT accuracy. Worth choosing this upfront rather than migrating again later.

**Step 2 — Own your STT/LLM/TTS connections**

Vapi manages these integrations. You'll be calling Deepgram, OpenAI, and Cartesia (or your chosen stack) directly. This means API keys, rate limit management, error handling, and retry logic — all of which Vapi was handling for you.

The upside: you can now choose any model version, switch providers mid-deployment, and tune each component independently. The downside: you own the operational burden.

**Step 3 — Rebuild your session and state management**

Vapi's `assistant` model carries state between turns. In LiveKit/Pipecat, you manage this yourself. This means implementing your own context window management, call state tracking, and — if relevant — memory across sessions.

This is the part that takes the most time. Budget a week for a clean implementation on a medium-complexity agent.

**Step 4 — Rebuild your monitoring layer**

Vapi's dashboard gives you call logs, transcript playback, and basic analytics. You'll need to rebuild this. Options: send call events to your own logging stack, or use a purpose-built Voice AI observability tool. Cekura AI (YC-backed, raised $2.4M) is building specifically for this — worth evaluating before rolling your own.

**Step 5 — Re-test your conversation flows end to end**

The same prompt that worked on Vapi will not necessarily behave identically on a different pipeline. Latency differences change how the VAD behaves. Different audio characteristics change how the STT interprets speech. Plan for a proper QA cycle — at minimum a week of structured testing before switching production traffic.

---

## What You'll Gain and What You'll Lose

**You'll gain:**
- Full control over every component and its configuration
- No per-minute managed pricing at scale
- Ability to process raw audio (noise cancellation, custom VAD, etc.)
- Horizontal scaling with LiveKit's SFU architecture
- Freedom to use any model version or provider without waiting for platform support

**You'll lose:**
- Managed telephony (you now own SIP configuration)
- Out-of-the-box call dashboard and analytics
- The speed of Vapi's integrations ecosystem
- Simpler debugging (Vapi's logs are more accessible than raw pipeline logs)

The honest summary: migration adds operational complexity in exchange for architectural freedom. It is the right trade at a certain scale and use case complexity. It is the wrong trade if you haven't actually hit one of the four ceiling signs above.

---

## When NOT to Migrate

Most builders who ask about migration are better served by first exhausting Vapi's optimisation options.

If your agent's problem is conversation quality — hallucinations, poor barge-in handling, wrong persona — that is a prompting and conversation design problem, not an infrastructure problem. Migration won't fix it.

If your problem is latency but you haven't yet switched to Groq for LLM inference or Cartesia for TTS, do that first on Vapi. You may close the gap without migrating.

If your problem is cost but you're under 50,000 minutes per month, the operational overhead of self-managed infrastructure likely costs more in engineering time than you'd save on per-minute pricing.

Migrate when you've genuinely hit the platform's architectural limits — not when you're frustrated with a specific bug.

---

## The Migration Decision in One Question

*Do you need to do something that requires owning the audio pipeline or the infrastructure layer directly?*

If yes: migrate. LiveKit for scale-first deployments, Pipecat for pipeline-first development, both together for production deployments that need both.

If no: stay on Vapi and invest the time in prompt engineering, conversation design, and model tuning instead. The best [AI voice agent](https://www.tryagentikai.com/ai-voice-agent) isn't always the one on the most powerful infrastructure — it's the one with the best-designed conversation.

Agencies like [Agentic AI Labs](https://www.tryagentikai.com/ai-voice-agent) that build production voice AI systems regularly evaluate this decision for clients: when Vapi is the right call, we say so. When the use case has outgrown it, we handle the migration. The answer depends entirely on what the system needs to do.

---

*Agentic AI Labs builds production voice AI systems — including migrations from managed platforms to self-hosted infrastructure when the use case demands it. If you're evaluating whether to stay on Vapi or move to LiveKit/Pipecat, reach out at aditya@tryagentikai.com.*
