# Scaling Voice AI to 50+ Concurrent Calls: Infrastructure Guide for Pipecat and LiveKit

**By [Aditya Pandey](https://www.linkedin.com/in/aditya-pandey-7588021b1) | Agentic AI Labs | March 2026**

![Pipecat reference architecture on AWS — production Voice AI infrastructure for concurrent calls](https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2025/05/09/Reference-Architecture-Pipecat.png)

---

A voice AI agent in a demo runs one call. A voice AI agent in production runs many calls simultaneously — and almost everything that works in the demo breaks in a different way at scale.

This is not a theoretical concern. The community question is direct: *"How are folks optimising for LiveKit costs? Self-hosted vs other provider vs custom implementation?"* The follow-up: *"What happens when you need to handle 50+ concurrent calls?"*

The answer depends on your stack, your architecture decisions, and — critically — which component you expect to be the bottleneck. This is the practical guide.

---

## What Actually Breaks at Scale (That Works in Demo)

**Single-process pipeline**

Most Pipecat tutorials run the pipeline in a single Python process. One process, one call. At 50 concurrent calls, you'd need 50 processes — each holding a WebSocket connection, a TTS stream, an LLM context, and an STT session. On a single server, this runs out of memory and CPU before it runs out of concurrent call capacity.

**Stateful session handling**

Demo agents hold conversation state in memory. At scale, if a pod restarts (and pods will restart), all in-flight calls lose their context. A caller mid-conversation suddenly gets an agent that doesn't remember anything said in the last two minutes. Production requires externalising state.

**WebSocket connection limits**

Each call holds an open WebSocket to your audio processing infrastructure. Default OS-level limits on simultaneous connections (typically 1,024 file descriptors per process) become a real constraint. This is a configuration issue, not a code issue — but it needs to be addressed explicitly.

**LLM rate limits**

At 50 concurrent calls, each calling a language model, you hit provider rate limits fast. 50 calls × average 3 LLM calls per minute = 150 RPM minimum. OpenAI's default tier for GPT-4o-mini is 500 RPM — sufficient at 50 concurrent calls but not at 200.

---

## The Architecture Decision: Self-Hosted vs Managed

**LiveKit Cloud**

LiveKit Cloud handles the SFU (media routing) layer for you. You pay per participant-minute but skip the complexity of running and scaling WebRTC infrastructure. In a community production poll, 4 builders reported using LiveKit Cloud as their primary deployment — the most common single choice.

The cost model works well up to moderate scale. At very high concurrent call volumes (1,000+), self-hosted LiveKit on your own cluster typically becomes cheaper. The breakeven depends on your call duration and frequency, but most builders hit it somewhere between 500,000 and 2,000,000 minutes per month.

**Self-hosted LiveKit on Kubernetes**

LiveKit is open-source. Running it on your own K8s cluster gives you full control over scaling behaviour, no per-minute media costs, and the ability to co-locate with your telephony infrastructure for lower latency.

The operational complexity is real: you're responsible for LiveKit upgrades, SFU capacity planning, and the K8s cluster itself. For teams with DevOps capacity, this is manageable. For solo builders or small teams, LiveKit Cloud is worth the premium.

**Pipecat Cloud**

Pipecat has its own managed hosting. In the community poll, 1 builder used Pipecat Cloud in production. It's the simplest path for Pipecat deployments but currently the least mature of the three options.

---

## Kubernetes Architecture for Voice AI at Scale

For teams self-hosting, here is the production-tested architecture pattern:

**Component 1 — Call ingress service**
A lightweight service that receives inbound SIP calls from your telephony provider and creates a LiveKit room for each call. Stateless, horizontally scalable. Each pod handles 100–200 calls.

**Component 2 — Pipecat worker pods**
Each pod runs N Pipecat pipeline instances (typically 5–20 depending on model inference load). Workers pull call assignments from a queue. This is where STT, LLM, and TTS processing happens.

**Component 3 — LiveKit SFU cluster**
Handles WebRTC media routing. Scale horizontally by adding SFU nodes — LiveKit handles room distribution automatically.

**Component 4 — Session state store**
Redis or a fast key-value store. All conversation state (LLM context, call metadata, progress through the conversation flow) is written here. If any pod dies, the replacement pod picks up from the last persisted state.

**Component 5 — Monitoring layer**
Prometheus + Grafana for infrastructure metrics. A Voice AI-specific observability layer (Cekura AI is purpose-built for this, backed by YC with $2.4M raised) for call quality, transcript accuracy, and agent behaviour monitoring.

---

## Sizing for 50 Concurrent Calls

As a baseline starting point:

**LLM compute budget:**
50 concurrent calls × avg 2 LLM requests/minute = 100 RPM. Use Groq for lowest latency (check their concurrent request limits for your tier) or provision dedicated OpenAI capacity.

**STT budget:**
Deepgram's streaming API handles concurrent connections well — verify your tier's concurrent stream limit before scaling. Their Growth tier supports 200+ concurrent streams.

**TTS budget:**
Cartesia and ElevenLabs both have concurrent stream limits on lower tiers. At 50 concurrent calls, 50 simultaneous TTS streams are the worst case. Check your provider's concurrent limit — this is a common surprise at scale.

**Server compute for Pipecat workers:**
A 4-core / 16GB RAM server handles approximately 15–25 concurrent Pipecat pipelines at typical LLM/TTS load. For 50 concurrent calls, plan for 3–4 servers of this size, plus headroom.

**WebSocket file descriptor limits:**
Set `ulimit -n 65536` on your worker servers. Default is 1,024 — will cause failures before you hit meaningful call volume.

---

## The Cost Reality at Scale

Running 100,000 minutes/month of outbound Voice AI (roughly 35 concurrent calls for 8 hours/day):

| Layer | Provider | Approximate cost |
|---|---|---|
| LLM (GPT-4o-mini) | OpenAI | ~$1,000 |
| STT (Deepgram Nova-3) | Deepgram | ~$300 |
| TTS (Cartesia) | Cartesia | ~$400 |
| Telephony (Telnyx) | Telnyx | ~$500 |
| Infrastructure (K8s) | AWS/GCP | ~$600 |
| **Total** | | **~$2,800/month** |

At this scale, the LLM is typically the largest line item. This is why builders at higher scale migrate from GPT-4o to GPT-4o-mini or Groq — not for latency alone, but because the cost difference at 1M+ minutes/month is significant.

---

## What to Build Before You Need It

The temptation is to build for 5 concurrent calls and scale later. The problem is that the architectural decisions that enable scale (external state management, stateless workers, queue-based job assignment) are hard to retrofit. Two things worth building from the start even at small scale:

**1. External session state from day one**
Don't hold conversation context in-memory in your Pipecat process. Write it to Redis on every turn. The cost is negligible. The benefit when your first pod restarts unexpectedly is significant.

**2. A call queue, not direct instantiation**
Don't spin up a Pipecat pipeline directly on call arrival. Put the call into a queue. Workers pull from the queue. This decouples your ingress capacity from your processing capacity and gives you backpressure handling for free.

These two patterns are what separates [production-grade AI voice agents](https://www.tryagentikai.com/ai-voice-agent) from demo deployments — and they cost almost nothing to implement upfront.

---

*Agentic AI Labs builds and scales production voice AI infrastructure — from single-deployment agents to high-concurrency outbound systems. If you're planning a scale-up and want to avoid the architecture mistakes that slow down retrofits, reach out at aditya@tryagentikai.com.*
