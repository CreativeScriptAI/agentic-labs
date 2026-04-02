# AMD for AI Voice Agents: How to Detect Voicemail Under 2 Seconds

**By [Aditya Pandey](https://www.linkedin.com/in/aditya-pandey-7588021b1) | Agentic AI Labs | March 2026**

![How AI voicemail detection works — answering machine detection for outbound voice agents](https://ozonetel.com/wp-content/uploads/2025/01/how-ai-voice-detection-works.jpeg)

---

A large percentage of outbound calls hit voicemail. The exact number varies by industry, time of day, and list quality — but for most outbound Voice AI deployments, the figure is somewhere between 30% and 60%.

What happens to those calls determines whether your campaign is compliant, efficient, and professional — or whether it creates legal exposure, wastes per-minute costs, and leaves confused recipients wondering why a robot spoke at their voicemail for 45 seconds.

Answering Machine Detection (AMD) is the component that handles this. Most builders wire it in as an afterthought. This is the guide for doing it properly.

---

## What AMD Actually Does

When an outbound call connects, there's a brief window — typically 1 to 4 seconds — where the audio on the line tells you who or what answered.

A human answering sounds like this: short, abrupt audio followed by silence. *"Hello?"* is typically under 500 milliseconds of audio.

A voicemail greeting sounds like this: a continuous audio segment, often including the person's name, an instruction to leave a message, and a beep at the end. Total duration: 5 to 30 seconds.

AMD listens to this initial audio window and classifies it. The output is binary: human or machine. What your agent does with that output is your call flow design.

Simple in theory. The implementation is where it gets hard.

---

## Why 2 Seconds Is the Hard Constraint

The 2-second detection requirement isn't arbitrary. It comes from two separate pressures:

**TCPA compliance (US market)**
The Telephone Consumer Protection Act governs outbound calling in the US. Under TCPA, there's a specific constraint on the silent pause between call connection and when a human first hears a live voice or a message. The FCC's interpretation has historically treated excessive silence after pickup as a violation. The practical implication: your AMD needs to classify the call and either connect the agent or drop cleanly before the caller experiences a confusing dead-air period. That window is roughly 1.5 to 2 seconds in enterprise compliance implementations.

**Caller experience**
Even outside TCPA, a human who answers and hears 3–4 seconds of silence before an AI starts speaking will hang up or distrust the call. The AMD detection time directly determines when your agent starts speaking. Longer detection = longer silence = worse call outcomes.

Sub-2-second AMD with 90%+ accuracy is the production target. Getting there requires understanding where the latency and errors actually come from.

---

## Where AMD Accuracy Breaks Down

**The greeting length problem**

Short voicemail greetings are hard to classify. A carrier-generated voicemail that says *"The person at [number] is unavailable"* can start in a way that's acoustically similar to a human voice. AMD systems that rely purely on greeting duration will misclassify these.

**The background noise problem**

Calls answered in noisy environments produce audio that AMD systems read as continuous speech — which looks like a voicemail greeting. A human answering in a busy kitchen or while driving can trigger false machine detection.

**The custom greeting problem**

Enterprise voicemail systems with custom greetings that start with *"Hi, you've reached..."* — spoken in a natural voice — are particularly difficult. The audio characteristics match a live human closely enough to fool simpler classifiers.

**The beep detection problem**

The definitive signal that you've reached voicemail is the beep at the end of the greeting. Waiting for the beep guarantees accuracy but blows the 2-second requirement entirely. A 20-second voicemail greeting followed by a beep means your agent either waits 20 seconds (unacceptable) or cuts in before confirmation (risks speaking over the end of the greeting).

---

## The Two AMD Approaches in Production

**Rule-based AMD (traditional)**

Analyzes audio segment duration, energy patterns, and silence/speech ratios. Fast — typically classifies in 1.2 to 1.8 seconds. Accuracy in the 85–90% range. Misclassifies short voicemails and noisy human answers at meaningful rates.

This is what Twilio's built-in AMD uses. It's good enough for most use cases and requires no additional infrastructure.

**ML-based AMD**

Uses a trained audio classifier on the initial call audio. Accuracy reaches 93–97% in well-tuned implementations. Latency is higher — 1.5 to 2.5 seconds depending on the model and compute.

Twilio, Telnyx, and Deepgram each offer different AMD capabilities. Telnyx's implementation is generally considered more accurate for Indian and non-US call patterns because it was trained on more diverse audio. For US enterprise outbound, Twilio's native AMD is sufficient for most deployments.

---

## Implementation: What Good AMD Looks Like

A production AMD implementation has four components:

**1. Detection configuration**

Set your detection timeout explicitly — don't rely on defaults. For TCPA-sensitive deployments, 1750ms (1.75 seconds) is the standard enterprise setting. Set your sensitivity threshold: higher sensitivity catches more voicemails but increases false positives on noisy human answers.

**2. Post-detection routing**

Define what happens on each classification:
- **Human detected:** Start your agent immediately, no pause
- **Machine detected:** Either drop the call, leave a pre-recorded voicemail message, or schedule a callback — depending on your campaign logic
- **Uncertain/timeout:** Treat as human if you're optimising for compliance, treat as machine if you're optimising for agent efficiency

**3. False positive handling**

Build a fallback for the cases where AMD misclassifies. If your agent starts speaking and then detects it's talking to a voicemail (the classic tell: no interruption, no barge-in, silence from the other end), it should gracefully stop mid-sentence and either drop or leave a brief message. An agent that delivers its entire 90-second pitch into a voicemail box is both wasteful and annoying.

**4. Monitoring AMD accuracy separately**

Track AMD accuracy as its own metric in your call analytics. A campaign with 92% AMD accuracy on 10,000 calls means 800 misclassified calls — 800 humans who heard silence or a voicemail message, and 800 voicemails that got the live agent pitch. Both outcomes matter.

---

## What Most Builders Get Wrong

**Leaving AMD on default settings**

Every telephony provider ships AMD with default sensitivity settings tuned for their average customer. Your use case is not average. The call list quality, the geographic market, the time-of-day calling patterns — all of these affect what the optimal AMD configuration is. Calibrate it for your specific campaign.

**Not testing against your actual call list**

AMD accuracy varies significantly by list type. A scrubbed DNC-compliant list of opted-in leads hits voicemail differently than a cold list. Test your AMD configuration against a representative sample of your actual target numbers before scaling.

**Ignoring the voicemail-left metric**

Many builders track pickup rate and conversion rate but don't track voicemail-left rate. If 45% of your calls are hitting voicemail and your AMD is dropping those calls silently, you're leaving a warm-outbound channel unused. A well-crafted voicemail message — 20 to 25 seconds, specific to the campaign — can generate meaningful callbacks.

---

## The Compliance Bottom Line

If you're running outbound calls in the US, AMD isn't optional — it's part of compliance architecture. The FCC's abandoned call rate rule (no more than 3% of answered calls may be abandoned) means your AMD false-positive rate directly affects your compliance posture.

Build AMD monitoring into your production dashboard from day one. Track it per campaign, not just per deployment. And if you're building [AI voice agents](https://www.tryagentikai.com/ai-voice-agent) for clients in regulated industries — financial services, healthcare, insurance — get your AMD configuration reviewed before going live, not after the first compliance inquiry.

---

*Agentic AI Labs builds production outbound voice AI systems with AMD compliance built in from the architecture stage. If your campaign is hitting voicemail at rates you can't explain, reach out at aditya@tryagentikai.com.*
