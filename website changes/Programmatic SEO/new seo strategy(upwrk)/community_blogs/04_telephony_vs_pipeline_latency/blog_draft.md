# Telephony Latency vs Pipeline Latency: Why Voice AI Builders Confuse Them

**By [Aditya Pandey](https://www.linkedin.com/in/aditya-pandey-7588021b1) | Agentic AI Labs | March 2026**

![Voice AI pipeline architecture — STT, LLM, TTS and telephony layers explained](https://cdn.prod.website-files.com/61082de7b224bb1768edad68/67bf3292229a459c003f62af_Voice%20assistant%20pipeline.webp)

---

A question that comes up constantly in Voice AI builder communities, usually phrased exactly like this:

> *"By 'STT+LLM+TTS' do you mean just the system in/out processing time or does it include telephony as well?"*

This confusion has real consequences. Builders who conflate these two layers debug the wrong component, optimise the wrong layer, and then wonder why their latency doesn't improve despite switching to faster models.

This is the complete breakdown.

---

## The Two Latency Layers Are Physically Separate

A Voice AI call has two distinct latency sources that operate independently of each other.

**Pipeline latency** is the time your software takes to process audio. It starts when raw audio arrives at your STT model and ends when TTS audio is ready to play back. Everything in between — transcription, LLM inference, text-to-speech synthesis — is pipeline latency. You control this entirely.

**Telephony latency** is the time audio takes to travel across networks. It starts when the caller speaks into their phone and ends when that audio arrives at your server. It starts again when your server sends audio and ends when the caller hears it. You do not fully control this — it depends on your telephony provider, their SIP infrastructure, the PSTN network path, and the caller's carrier.

The total latency a caller experiences is the sum of both. Builders who measure only pipeline latency are measuring half the problem.

---

## Pipeline Latency: The Four Components

**1. STT (Speech-to-Text) — 100 to 400ms**

The time from audio arriving at your STT provider to receiving the transcript. This varies significantly by provider and configuration:

- Deepgram Nova-3 streaming: ~120ms to first token
- OpenAI Whisper API: ~300–500ms (not designed for real-time)
- AssemblyAI streaming: ~150–200ms

The key variable is whether you're using streaming STT (transcribes as the caller speaks, delivers interim results) or batch STT (waits for the full utterance, then transcribes). For real-time Voice AI, streaming is mandatory. Batch STT adds 300–800ms of unnecessary latency.

**2. LLM Inference — 200 to 1,200ms**

The time from receiving the transcript to the first token of the LLM response. This is the largest single variable in your pipeline:

- Groq (Llama 3.1 70B): ~180–250ms to first token
- GPT-4o-mini: ~300–500ms to first token
- GPT-4o: ~600–1,200ms to first token
- Claude Haiku: ~250–400ms to first token

The key insight: use streaming inference and begin piping tokens to TTS as soon as the first sentence fragment is available. Don't wait for the full LLM response before starting TTS. This alone can reduce perceived latency by 400–700ms.

**3. TTS (Text-to-Speech) — 100 to 500ms**

The time from receiving text to playable audio. Again, streaming matters:

- Cartesia streaming: ~80–120ms to first audio chunk
- ElevenLabs Turbo streaming: ~100–150ms
- OpenAI TTS: ~200–400ms

**4. Audio buffering and processing — 20 to 80ms**

The small but real overhead of chunking audio, handling WebSockets, and moving data between components. Usually negligible but accumulates in poorly designed pipelines.

**Optimised pipeline total: 400–700ms**
**Unoptimised pipeline total: 1,500–3,000ms**

The difference is almost entirely streaming — STT streaming, LLM streaming, TTS streaming. Non-streaming implementations at each layer can add 2+ seconds before you've even touched telephony.

---

## Telephony Latency: The Part You Can't Fully Control

Telephony latency comes from the physical and logical path audio takes between the caller's phone and your server.

**PSTN routing (30 to 150ms)**

The Public Switched Telephone Network adds latency based on geographic distance and carrier routing. A call from Mumbai to a server in Mumbai has very different PSTN latency than a call from Mumbai to a server in US-East-1. Geographic co-location of your servers and your target call geography is the single largest lever for telephony latency.

**SIP processing overhead (20 to 80ms)**

SIP trunking providers add latency at their edge. Telnyx's SIP infrastructure is generally lower-latency for Voice AI workloads than Twilio because Telnyx routes SIP natively whereas Twilio adds an additional media processing layer. In direct comparisons, builders consistently report 40–80ms lower latency with Telnyx vs Twilio for US calling.

**Audio codec and transcoding (10 to 50ms)**

G.711 (the standard PSTN codec) operates at 8kHz sample rate. Telnyx supports 16kHz audio natively — which not only improves STT accuracy but avoids the upsampling step that some providers perform. Transcoding audio from 8kHz to 16kHz for your STT model adds a small but real latency hit.

**Network jitter and packet loss handling (variable)**

Jitter buffers in SIP systems introduce 20–100ms of intentional delay to smooth out packet arrival variance. This is designed behaviour — it prevents choppy audio — but it adds to your total latency floor.

**Typical telephony overhead: 80 to 250ms per direction (160–500ms round trip)**

---

## Why They're Confused: The Measurement Problem

When builders say "my latency is 800ms," they usually mean the time between their STT receiving audio and the TTS audio being ready. What the caller actually experiences is:

```
Caller speaks → [telephony latency] → your server receives audio
→ [pipeline latency: STT + LLM + TTS]
→ server sends audio → [telephony latency] → caller hears response
```

The caller-perceived latency is: **telephony (inbound) + pipeline + telephony (outbound)**

A builder who reduces pipeline latency from 1,200ms to 600ms but is on high-latency telephony infrastructure might measure a 50% improvement in their logs — but the caller perceives a much smaller improvement because 300ms of telephony overhead is baked into both ends.

> *"Everyone talks about better LLMs and more human-like voices for AI callers. But in real production setups, telephony infrastructure is the real blocker, not the AI models."*
> — r/VoiceAutomationAI, February 2026

---

## Diagnosing Which Layer Is Your Bottleneck

**Step 1 — Measure pipeline latency in isolation**

Log timestamps at: audio received by STT → STT transcript returned → LLM first token → TTS first audio chunk. This is pure pipeline latency with no telephony.

**Step 2 — Measure round-trip call latency**

Use a test call where you play a known audio prompt and measure the time until your server receives it. Compare to your pipeline-only measurement. The difference is your telephony overhead.

**Step 3 — Compare providers**

If telephony overhead is >200ms and you're on Twilio, test Telnyx or Plivo with the same call geography. Provider differences of 40–100ms are real and measurable.

**Step 4 — Check your server geography**

If you're calling India from a US-East server, you've added 150–200ms of pure geographic latency that no pipeline optimisation can remove. Deploy a server closer to your call geography.

---

## The Practical Fix Map

| Your measured latency | Likely cause | Fix |
|---|---|---|
| High pipeline, low telephony | Non-streaming STT/LLM/TTS | Enable streaming at every layer |
| Low pipeline, high telephony | Provider or geography | Switch provider or co-locate server |
| High both | Everything | Fix pipeline first, then telephony |
| Inconsistent (spiky) | Jitter or model cold starts | Check jitter buffer settings, use provisioned LLM capacity |

---

## The Number That Actually Matters

Caller experience research consistently shows that responses under 700ms feel conversational. Responses between 700ms and 1,200ms feel slightly slow but acceptable. Above 1,200ms, callers start filling the silence by speaking again — causing barge-in events and conversation breakdown.

Your target is sub-700ms caller-perceived latency. That means budgeting: ~150ms telephony each way (300ms round trip) + ~400ms pipeline = 700ms total. This is achievable but requires streaming at every pipeline stage and a geographically co-located telephony provider.

For [production voice AI systems](https://www.tryagentikai.com/ai-voice-agent), latency is an architecture decision made at the start — not a tuning problem addressed after deployment. Choosing your STT provider, LLM, TTS, and telephony stack together with latency budgets in mind is the correct approach.

---

*Agentic AI Labs designs and builds production voice AI systems with latency budgeted from the architecture stage. If your agent feels slow and you can't identify which layer is the problem, reach out at aditya@tryagentikai.com.*
