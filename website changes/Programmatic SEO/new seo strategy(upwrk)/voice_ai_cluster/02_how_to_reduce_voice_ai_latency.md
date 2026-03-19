# How to Reduce Voice AI Latency for Business Calls

**By Agentic AI Labs | March 2026**

---

There is a number that determines whether your voice AI agent sounds like a natural conversation or a broken phone call: **600 milliseconds**.

Below 600ms end-to-end latency, callers experience a natural turn. Above it, they start talking over the agent, lose confidence in the system, or hang up. Above 1,000ms, most callers assume the call has dropped.

The problem is that most default voice AI configurations run 900ms–1,400ms. Not because the technology can't do better — it can — but because getting below 600ms requires deliberate choices at every layer of the stack. Most developers don't know which layers to optimize or in what order.

This is the guide we wish existed when we first built production voice AI systems.

---

## Where the Time Actually Goes

Before optimizing, you need to know what you're optimizing. A voice AI call has four sequential latency sources:

```
Caller speaks
     ↓
[1] STT — Speech-to-Text         (50ms – 300ms)
     ↓
[2] LLM — Language Model         (200ms – 800ms)
     ↓
[3] TTS — Text-to-Speech         (100ms – 400ms)
     ↓
Caller hears response
```

Total end-to-end: **350ms** (best case, optimized) to **1,500ms** (worst case, unoptimized).

Each layer has independent optimization levers. The biggest gains come from LLM and TTS — those are where most default configurations leave performance on the table.

---

## Layer 1 — STT (Speech-to-Text): 50ms–300ms

**The problem:** Your STT system needs to detect when the caller has finished speaking (end-of-turn detection) before it sends the transcript to the LLM. If the silence threshold is too high, it waits too long. If it's too low, it cuts the caller off mid-sentence.

**Default behavior:** Most platforms default to 400ms–700ms of silence before triggering end-of-turn. That alone adds nearly half a second before the LLM even starts thinking.

**What to do:**

- **Use Deepgram Nova-2 or Nova-3** — currently the fastest production STT with the lowest word error rate. AssemblyAI Universal-2 is close. Whisper-based models are slower and not suitable for real-time.
- **Set silence threshold to 200ms–300ms** — for business call contexts (not podcasts or noisy environments), this is enough to distinguish end-of-turn from a brief pause.
- **Enable streaming transcription** — don't wait for the full utterance. Start passing partial transcripts to the LLM pipeline so processing can begin before the caller finishes speaking. Vapi supports this; check your platform's docs.

**Realistic gain:** 100ms–250ms reduction.

---

## Layer 2 — LLM (Language Model): 200ms–800ms

This is where most unoptimized systems bleed time. It's also where most developers are reluctant to optimize because "better model = better conversation."

That tradeoff is real — but it's also often overstated for structured use cases like appointment setting or inbound support.

**The problem with default model choices:**

- GPT-4o: ~400ms–700ms time-to-first-token
- Claude Sonnet: ~300ms–600ms time-to-first-token
- GPT-4o-mini: ~150ms–250ms time-to-first-token
- Claude Haiku: ~100ms–200ms time-to-first-token

For a voice AI handling appointment booking ("What day works for you?" → "Tuesday" → "Morning or afternoon?"), you do not need GPT-4o. The conversation is structured and bounded. A smaller, faster model handles it correctly with the right system prompt.

**What to do:**

- **Use streaming output** — start passing LLM tokens to TTS as they arrive, rather than waiting for the complete response. This is the single highest-impact change for perceived latency.
- **Downgrade the model for structured flows** — GPT-4o-mini or Claude Haiku for appointment setting, lead qualification, and inbound FAQ handling. Reserve the heavy model for edge cases or escalation.
- **Shorten your system prompt** — every token in your system prompt is context the LLM has to process. A 2,000-token system prompt adds latency compared to a focused 400-token one. Be surgical.
- **Cap response length** — instruct the model explicitly: "Keep all responses under 2 sentences." Shorter generation = faster TTS.
- **Pre-compute common responses** — if 60% of calls follow a predictable path (greeting → availability check → slot offer → confirmation), cache the LLM responses for those steps and only invoke live LLM for deviation handling.

**Realistic gain:** 200ms–500ms reduction, depending on model swap.

---

## Layer 3 — TTS (Text-to-Speech): 100ms–400ms

TTS is the most underestimated latency source. Developers focus on the LLM, optimize it, then wonder why the call still feels slow — because the TTS is now the bottleneck.

**The problem with default TTS choices:**

- ElevenLabs (standard): 200ms–400ms to first audio chunk
- ElevenLabs (turbo v2.5): 100ms–150ms to first audio chunk
- Cartesia Sonic: 50ms–100ms to first audio chunk
- PlayHT 2.0 Turbo: 80ms–120ms to first audio chunk
- OpenAI TTS: 300ms–500ms (not recommended for real-time)

**What to do:**

- **Use Cartesia Sonic or ElevenLabs Turbo** for production voice AI. The quality difference versus standard models is smaller than the latency difference.
- **Stream TTS audio** — don't wait for the full audio file. Start playing the first audio chunk as soon as it arrives. Vapi does this by default; if you're building custom, implement chunked audio streaming.
- **Pre-generate fixed phrases** — greetings, hold phrases ("Let me check that for you"), and confirmations ("Got it, I'll book that now") can be pre-generated and cached. No TTS latency for the most common utterances.
- **Match voice to use case** — a highly realistic ElevenLabs voice at 150ms is better for consumer-facing calls; a slightly synthetic Cartesia voice at 60ms may be better for high-volume B2B outbound where latency is the conversion driver.

**Realistic gain:** 100ms–300ms reduction.

---

## Layer 4 — Network and Infrastructure: 20ms–150ms

Often ignored, but meaningful at the margins.

**What to do:**

- **Co-locate your LLM and TTS calls** — if your LLM is on US-East and your TTS is routed through EU, you're adding 80ms–120ms of unnecessary round-trip latency.
- **Use edge functions for function calling** — when your voice agent needs to query a calendar or CRM mid-conversation, the function endpoint should be geographically close to your voice infrastructure. A Vercel Edge Function in the same region as your Vapi deployment will be meaningfully faster than a server in a different continent.
- **Avoid sequential API calls** — if your agent needs to check both calendar availability and lead history before responding, query both in parallel, not in series.

**Realistic gain:** 20ms–100ms reduction.

---

## Putting It Together — What a Tuned Stack Looks Like

| Component | Default (unoptimized) | Optimized |
|---|---|---|
| STT | Whisper or default | Deepgram Nova-2, streaming, 250ms silence threshold |
| LLM | GPT-4o, full response | Claude Haiku or GPT-4o-mini, streaming, capped at 2 sentences |
| TTS | ElevenLabs standard | Cartesia Sonic or ElevenLabs Turbo v2.5, chunked streaming |
| Infrastructure | Default region | Co-located, edge functions for API calls |
| **Total latency** | **900ms–1,400ms** | **350ms–600ms** |

The difference between these two configurations is not a subtle quality improvement. It's the difference between a call that sounds like AI and a call that sounds like a fast human.

---

## The One Thing Most Teams Get Wrong

They optimize for average latency and ignore tail latency.

Your p50 latency might be 500ms — but if your p95 is 1,200ms, 5% of turns will feel broken. For an appointment-setting call with 15–20 turns, that means roughly one broken-feeling moment per call. That one moment is often enough for the caller to lose confidence.

Monitor p95 and p99, not just average. Set alerts when tail latency spikes. The most common causes are LLM provider slowdowns (GPT-4o has well-documented performance variance), TTS queue backups during high-traffic periods, and function call timeouts when your calendar API is slow.

Production voice AI is not a deploy-and-forget system. It's a system that needs ongoing latency monitoring to keep performing.

---

*Agentic AI Labs builds and operates [production voice AI systems](https://www.tryagentikai.com/ai-voice-agent) for appointment setting and inbound support — including latency optimization, conversation design, and monitoring. If your current voice agent isn't hitting the performance you need, reach out at aditya@tryagentikai.com.*
