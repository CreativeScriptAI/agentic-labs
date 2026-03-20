# 🎙️ Voice AI Community Deep Analysis

*Total Messages Analyzed: 767*
*Analysis Date: 2026-03-20*

## 🏗️ The Tech Stack Hierarchy
| Tool | Mentions | Strength |
|---|---|---|
| Sip | 37 | ██████████████████ |
| Livekit | 32 | ████████████████ |
| Pipecat | 23 | ███████████ |
| Twilio | 16 | ████████ |
| Plivo | 16 | ████████ |
| Telnyx | 14 | ███████ |
| Deepgram | 12 | ██████ |
| Vapi | 11 | █████ |
| Gpt | 7 | ███ |
| Exotel | 6 | ███ |
| Claude | 5 | ██ |
| Websockets | 5 | ██ |
| Gemini | 5 | ██ |
| Webrtc | 5 | ██ |
| Agora | 4 | ██ |
| Elevenlabs | 3 | █ |
| Groq | 3 | █ |
| Cartesia | 2 | █ |
| Retell | 1 |  |

## 🔴 Critical Pain Points (High Organic Demand)
These are the problems people are *struggling* with right now. Content here will likely have zero competition because it's too specific for generic SEO tools.

- **[Gabriele Proni]**: Hello all! Gabriele here, nice to meet you all :)  I'm italian and i ran a pbx saas with 1600+ b2b active customers for the last 10 years, now enjoying the VoiceAI evolution.   Hey @⁨~David Casem⁩! it's great to see you here. I take the occasion to share something it might be usefull to all :)  I was evaluating the switch to telnyx (nowadays i have my hosted infra that i want to decommission).  While doing some tests i realised that platforms like yours and twilio are not 100% compatible with SIP functions ( re invite music on hold just as an example) and i was really "shocked" when i noticed that.  Needless to say that voiceAI is present and future but i also think that a seamless integration with legacy systems (hardware phone) will be crucial in the next 2-3yrs at least.  Real world example: i am implementing a voiceAI for a chain of car-wash points. They need an intercom that when activated will allow the customer to talk with the AI for basic support, and eventually forward to the right extension depending on the issue. An all in one solution (legacy pbx + voiceAI) is really powerful here.  PS: I added you on Linkedin as well :)

- **[Gabriele Proni]**: thanks for your quick answer. what about sip presence? that s another thing twilio is completely missing, idk if you guys are supporting

- **[Eswara Naidu]**: Quick question/help  We’re building CRM-native voice  AI applications for platforms like Salesforce and ServiceNow.  Are there any API-first voice AI platforms like Vapi where we can initiate a call directly via API by just passing:  • assistant config (prompt / tools / voice) • "to" number • "from" number  Most platforms I tried require creating the assistant/agent first and then using the assistant ID in the API.  Also seeing $100k–$200k commitments from Vapi for things like HIPAA or enterprise support, which is a huge investment for a startup.  Curious if anyone has found developer-friendly alternatives that allow fully programmatic call creation.  @⁨~David Casem⁩ @⁨~Suman Gandham⁩  @⁨‪+91 94403 08877‬⁩

- **[Ritu Malik]**: Hi Everyone,  I am Ritu from RightSide (India). We build telephony infrastructure for large-scale calling systems.  Our platform, HYDA Voice, provides the voice layer for AI agents, including GSM, SIP connectivity, PSTN routing, real-time audio streaming, call control, and integrations with STT/TTS/LLM pipelines.  We currently support use cases such as AI voice bots, inbound/outbound automation, and contact centre AI integrations.  We also build products on the same stack, including an omnichannel CRM, dialer, ticketing, and contact centre platform.  Always interested in learning how others here are building voice agents and solving latency/telephony integration challenges.

- **[Sunil😎]**: okay got it, thanks ‎[16/03/26, 4:34:33 PM] ~ Neha Agarwal: Does anyone have idea how to increase the call pick up rate.. ? we have white labelled our Plivo number in Airtel and also in true caller… but still pick up rate is very low..  anyone getting this problem ? any recommendations  ? ‎image omitted

- **[V]**: This strategy sounds good, but the service providers will typically hate this. When spam  reports happen, the carrier reaches out to Plivo for proof that this is solicited calling. And if there is no convincing proof, Plivo has to close down that account. So throwing away numbers would not be a great long term strategy. For the “let the number be marked spam” strategy to work, you should have enough volume of good traffic to blend cold outreach traffic with. ‎<This message was edited>

- **[V]**: @⁨~Neha Agarwal⁩ - DMing you about this. I lead product at Plivo. Want to brainstorm potential solutions that could solve this problem.

- **[Nilesh]**: One thing everyone in the community is trying to achieve is get the call answered by real person.. but the fact of the matter is telephony as a channel is saturated .. it isn’t going to be different if the person is calling or an AI calls ..  This is because the very nature of SIP has allowed over last decade to spoof the calls which has led to lot of call masking and frauds and due to which the trust on the telephony call channel is eroded.

- **[~]**: Aah okay, my bad. I thought you were asking about calling the us numbers which is why I recommend twilio

- **[Mehul Elision]**: I’m Mehul, founder & CEO of Elision (elisiontec.com). We hold a VNO license for Indian telephony and offer VoiceLink (voicelink.co.in) — a platform for Voice AI integration with carrier-grade Indian DIDs, SIP trunking, PSTN connectivity, developer APIs and fast onboarding.  I’m in Chennai this week and Bangalore next week — keen to meet for partnerships (integrations, resellers, pilots).  How VoiceLink helps & keeps your numbers reach customers  - Carrier-grade Indian numbers & SIP trunking - Fast integration (APIs/SDKs) and telephony + conversational stack support - Number reputation: warm-up, consent management, correct CLI/CNAM, complaint handling - Compliance, traffic shaping and fraud controls to stay off blocklists  Interested? DM or email mehul@elisiontec.com — happy to set up a quick meet.

- **[Suman Paudel]**: yeah scaling issues, first start with claude then you get to know how you can unify things.

- **[Edgar]**: As an example elevenlabs focuses on many different services but they don't necessary excel in all those services. They have fantastic TTS but their STT services are very general and unprecise. In my book accuracy is no1 if the information you transcribe gets passed to LLM is wrong everything else fails in pipeline. I did video recently on benchmarks that got announced by pipecat to cover little on that.

- **[Cam]**: Thanks for sharing this and pipecat’s benchmarks. Super handy as I’m currently reviewing different STT providers and it’s really hard to get accurate information without doing real world tests on live customers. I’m currently building out a source of truth for ‘real’ WER based on our real recordings by transcribing the call offline with multiple different providers and aggregating the results to obtain a source of truth I can reference when A/B testing new providers.

- **[Gabriele Proni]**: Hey guys, any suggestion on how to reduce the delay in response using vapi? i have a couple of agents that are working fine, but to get an answer sometimes i should wait even 5 seconds. What's your process to analyze and fix this kind of issues and optimize an agent?

- **[Umesh Pande]**: Vapi operates over the public network, which will always introduce latency. To reduce latency for AI interactions, you need to establish private network connectivity.

- **[Chitrang]**: I’d start with pcap and work my way into logs to figure what part of the pipeline gives. If it’s the llm - I’ve noticed with GPT family - bringing your own from Azure (Datazone Standard deployment) would get you sub ~450ms ttft in us east, east-2 from exp. This is 4.1-mini

- **[Gabriele Proni]**: so the logic works perfectly, the problem is that sometimes to get an answer i can even wait 4-5 seconds, and i do not perform any external request. just prompt + vapi KB (not big)

- **[SimsBuddy]**: For llm in my case use , Groq Llama 3.3 70B Versatile 128k was the best combination of latency, cost and doing the job with good standard. It is still not perfect of course.

- **[Edgar]**: I think everyone answered questions well. Generally Groq will do the trick if latency is no1 concern. One thing to consider also is where speech provider endpoints are being hosted Vapi has some customisation for that from some providers. E.g we provide multiple endpoints for US or EU.  In terms of frameworks. It really depends on your use case and what you building with voice if you require more customisation then Livekit or Pipecat is good considerations to make. But with more costumisation more complexity gets introduced 😃 ‎<This message was edited>

- **[Suman Paudel]**: I was preferring websockets like 2 3 years ago, but real deal and ultra low latency is in webrtc bro... ‎<This message was edited>

- **[Mohit]**: how are folks optimising for Livekit costs ? self-hosted vs other provider vs custom implementation


## ❓ Real Questions (The Search Intent Map)
Direct queries people have. These are exact titles for 'How-to' guides.

> "which platform is this @⁨~Raghav⁩ ?"

> "200rs fo 5 hours of talk time ?"

> "what is your platform?"

> "do u feel its worth building a new platform everything from scratch since there r good ones already out there? what do u feel? What is unique"

> "what is the drawbacks? I see low-code is better"

> "thanks for your quick answer. what about sip presence? that s another thing twilio is completely missing, idk if you guys are supporting"

> "Do you know Acrobits Cloudsoftphone? ‎<This message was edited>"

> "do twilio/vonage/telenyx/plivo offer any startup credits?"

> "hey Mehul, do u support dynamic websocket endpoint? also, couldn’t find pricing on the website"

> "everybody here who is selling AI Voice Agents, how'd you get your first paying customer?"

> "Can you drop a link? Would love to check it out"

> "okay got it, thanks ‎[16/03/26, 4:34:33 PM] ~ Neha Agarwal: Does anyone have idea how to increase the call pick up rate.. ? we have white labelled our Plivo number in Airtel and also in true caller… but still pick up rate is very low..  anyone getting this problem ? any recommendations  ? ‎image omitted"

> "are these cold calls? if yes, then such calls tend to have this problem, even with different number series, your metric will just shift from call cut to picked but unanswered."

> "how do you identify number is marked spam?"

> "Does anyone have contacts at Plivo ? Have been trying to get a number from them for India for my business, no luck so far"

