// Copy for /follow-up-automation/ (Stage 3: Warm Up and Follow Up pillar).
// Primary keyword: follow up automation. Voice: lead with the buyer's words
// ("they went quiet, nobody chased it"), mechanism after. No dashes.
// Every statistic carries a named primary source inline. Deliberately excluded:
// "80% of sales need 5 follow-ups" and "44% give up after one" (both trace to
// the nonexistent National Sales Executive Association), the "6-8 touches"
// Salesforce blog assertion, and the Forrester 50%/33% and Annuitas 451%
// claims (no retrievable report). Compliance kept to accurate PDPA basics,
// framed as what the rules require, not legal advice, no invented specifics.

export const META = {
  title: "Follow Up Automation: The System That Chases Every Lead",
  description:
    "Follow up automation is the system that reaches every lead, on the right channel, until they reply or book, then stops. An honest guide to why follow-up fails, sequence design, reply detection, and staying compliant.",
  keywords: [
    "follow up automation",
    "automated follow up",
    "ai follow up",
    "sms follow up automation",
    "speed to lead",
    "multi channel follow up",
    "lead follow up software",
  ],
  url: "https://www.tryagentikai.com/follow-up-automation/",
};

export const HERO = {
  eyebrow: "FOLLOW UP AUTOMATION",
  h1a: "The lead did not say no.",
  h1b: "They just went quiet, and nobody chased it.",
  sub: "Follow up automation is the system that reaches every lead, on the channel they actually answer, until they reply or book, then stops. Not a rep who remembers on a good week.",
  ctaPrimary: { label: "Build my follow-up system", to: "/ai-clarity-workshop/" },
  ctaSecondary: { label: "See how it works", to: "#how-it-works" },
};

export const ANSWER_FIRST =
  "Follow up automation is a system that reaches out to a lead across email, SMS, WhatsApp, voice, or DM on a defined schedule triggered by an event, watches for a reply or a booking, and stops the moment the lead responds. It exists because the reason most follow-up does not happen is not laziness. It is that there is no system, no owner, and no trigger, so the lead quietly goes cold while everyone assumes someone else has it.";

export const FAILS = {
  eyebrow: "WHY FOLLOW-UP ACTUALLY FAILS",
  heading: "It is not that your team is lazy. There is no system.",
  intro:
    "Every guide blames the rep who forgot. That is the symptom, not the cause. Follow-up fails for three structural reasons, and a person with good intentions cannot fix any of them.",
  items: [
    {
      n: "01",
      title: "No trigger",
      body: "Nothing fires when the quote is sent or the demo ends. The follow-up depends on someone remembering, and memory is not a system. The moment passes and no one notices it passed.",
    },
    {
      n: "02",
      title: "No owner",
      body: "Marketing thinks sales has it, sales thinks it was marketing's lead. The lead sits in the gap between two teams, each assuming the other is chasing.",
    },
    {
      n: "03",
      title: "No persistence",
      body: "One email goes out, gets no reply, and that is the end of it. Reaching a busy person takes more than one touch, and a single attempt is not follow-up, it is a formality.",
    },
  ],
  persistence:
    "How many touches it actually takes: the RAIN Group Center for Sales Research found it takes an average of eight touches to reach and start a conversation with a new prospect. Their own data notes top performers did it in around five while everyone else needed eight. Most businesses stop at one.",
  persistenceSource: "RAIN Group Center for Sales Research, 2017 survey of 489 sellers and 488 buyers",
};

export const STALL = {
  eyebrow: "THE COST OF THE GAP",
  heading: "Deals do not usually die. They stall.",
  stats: [
    {
      stat: "91%",
      label: "of B2B purchases stall at some point in the process",
      source: "Forrester, The State of Business Buying, 2024, 16,000+ buyers",
    },
    {
      stat: "63.5%",
      label: "of 1,000 B2B companies never responded to a demo request at all",
      source: "RevenueHero, 2024",
    },
    {
      stat: "21x",
      label: "higher odds of qualifying a lead when contacted within 5 minutes rather than 30",
      source: "Oldroyd and InsideSales.com, 2007",
    },
  ],
  body:
    "A stalled deal is not a lost deal. It is a deal waiting for someone to follow up, and most of the time nobody does. Forrester surveyed more than sixteen thousand business buyers and found nearly all purchases stall somewhere. The follow-up is not the boring part of the sale. It is most of the sale.",
};

export const WHATITIS = {
  eyebrow: "STATIC VERSUS SIGNAL DRIVEN",
  heading: "There are two kinds of follow-up automation, and one of them annoys people",
  items: [
    {
      label: "Static cadence",
      sub: "The old way",
      body: "A fixed list of emails goes out on a timer regardless of what the lead does. It keeps sending even after they replied, which is how automation earns its bad name. It treats a person like a queue position.",
      good: false,
    },
    {
      label: "Signal driven",
      sub: "What good looks like",
      body: "The sequence reacts to behaviour. Opened but silent gets a different touch than clicked the pricing page. A reply or a booking stops it instantly. It reaches out like someone paying attention, because it is watching.",
      good: true,
    },
  ],
};

export const SEQUENCE = {
  eyebrow: "WHAT A REAL SEQUENCE LOOKS LIKE",
  heading: "One quote, followed up until it is answered",
  intro:
    "A worked example. A prospect asked for a quote, you sent it, and they went quiet. Here is the system doing what a person rarely does consistently.",
  steps: [
    { day: "Minute 1", channel: "Email", body: "The quote lands, with a clear next step and a link to book a call. Sent instantly, not the next morning." },
    { day: "Hour 4", channel: "SMS", body: "A short nudge to the phone: the quote is in your inbox, any questions. People reply to a text they would ignore as an email." },
    { day: "Day 2", channel: "WhatsApp", body: "A softer check in on the channel they actually read, offering to answer anything holding them up." },
    { day: "Day 4", channel: "Voice", body: "A call, or an AI voice agent, for the high intent lead who clicked but never replied. The one touch that gets an answer." },
    { day: "Day 7", channel: "Email", body: "A graceful last touch: it looks like the timing is not right, here is how to reach us when it is. This is the breakup, and it often gets the reply." },
  ],
  note:
    "Every step in that sequence stops the instant the lead replies or books. Nobody gets chased after they answer.",
};

export const CHANNELS = {
  eyebrow: "MULTI CHANNEL ORCHESTRATION",
  heading: "Reach them where they answer, not where you prefer",
  intro:
    "Most tools that say multi-channel mean email plus LinkedIn. Real orchestration routes each lead to the channel they actually respond on, and moves between them.",
  items: [
    { name: "Email", use: "The workhorse for detail: the quote, the proposal, the recap. Cheap, but easy to ignore." },
    { name: "SMS", use: "The highest reply rate for a short nudge. Consent and timing are not optional here." },
    { name: "WhatsApp", use: "Where a lot of buyers actually live, especially outside the US. Needs approved templates for outbound." },
    { name: "Voice", use: "For high intent. A booked call beats a voicemail, and an AI voice agent can make the attempt at scale." },
    { name: "DM", use: "The soft, social touch for warming a lead who is not ready for a call." },
  ],
  voiceLink: { label: "AI voice agents", to: "/ai-voice-agent/" },
};

export const STOP = {
  eyebrow: "REPLY DETECTION AND WHEN TO STOP",
  heading: "Knowing when to stop is the hard part",
  intro:
    "Anyone can send messages. The system is only as good as the moment it decides to stop, and that decision is what separates helpful from spam.",
  items: [
    {
      title: "Stop on reply",
      body: "The instant a real reply arrives, the sequence halts and hands off to a person. Good systems tell a genuine reply from an out of office auto-responder. Naive ones stop on the auto-reply and lose the thread.",
    },
    {
      title: "Stop on booking",
      body: "If they book a call, every remaining touch cancels. Chasing someone who already said yes is the fastest way to undo the yes.",
    },
    {
      title: "Stop on opt out",
      body: "An unsubscribe or a stop is honoured immediately and permanently, and it is recorded, so no other sequence ever enrols them again.",
    },
    {
      title: "Cap the touches",
      body: "A maximum number of attempts, then a clean breakup message and a return to nurture. Persistence has a limit, and past it you are just a nuisance.",
    },
    {
      title: "Respect quiet hours",
      body: "No messages at 2am. The system checks local time before every send, because a helpful message at the wrong hour is not helpful.",
    },
  ],
};

export const COMPLIANCE = {
  eyebrow: "THE PART NO COMPETITOR WRITES ABOUT",
  heading: "Automated follow-up has rules, and Singapore has teeth",
  intro:
    "This is not legal advice, it is what the rules require, and it is the section every other follow-up page leaves out. Getting it wrong is not a style problem, it is a fine.",
  items: [
    {
      title: "Consent for marketing messages",
      body: "Under Singapore's Personal Data Protection Act, you generally need clear consent before sending marketing messages. Consent for one purpose is not consent for everything.",
    },
    {
      title: "The Do Not Call Registry",
      body: "Before sending a marketing call, text, or fax to a Singapore number, you must check it against the national Do Not Call Registry, unless you have the right ongoing relationship exemption. The registry is run by the PDPC.",
    },
    {
      title: "Purpose limitation",
      body: "A phone number someone gave you to confirm an order cannot be quietly reused to market to them. The purpose the data was collected for constrains what you can do with it.",
    },
    {
      title: "Easy, honoured opt-out",
      body: "Every marketing message needs a simple way to stop, and a stop has to actually stop, across every channel and every sequence.",
    },
  ],
  note:
    "We build these checks into the send step itself, so consent, Do Not Call status, and local time are verified before any outbound marketing touch goes out. Compliance is not a disclaimer at the bottom, it is a gate before the message.",
  authority: "Authority: Singapore Personal Data Protection Commission (PDPC).",
};

export const HOW = {
  eyebrow: "HOW THE MECHANISM WORKS",
  heading: "From trigger to handoff",
  intro:
    "The whole system, end to end. Most of it is plumbing, and the plumbing is what makes it reliable.",
  steps: [
    { n: "01", title: "Trigger", body: "An event starts it: a form, a missed call, a quote sent, a no-show, a pricing page revisit. Time-based or behaviour-based." },
    { n: "02", title: "Branch", body: "The sequence forks on what the lead does. Clicked pricing gets a fast human touch, silence gets a value touch or a channel switch." },
    { n: "03", title: "Orchestrate", body: "Each step picks the channel: email, SMS, WhatsApp, voice, or DM, gated by consent and local time before it sends." },
    { n: "04", title: "Detect", body: "The system watches for replies, bookings, and opt-outs, and distinguishes a real reply from an auto-responder." },
    { n: "05", title: "Score and route", body: "Engagement updates a score. Hot leads jump the queue to a human, cooling ones drop to a longer nurture." },
    { n: "06", title: "Hand off", body: "At the right moment it stops automating and passes the lead to a person with the full context of what happened." },
  ],
};

export const MEASURE = {
  eyebrow: "HOW TO MEASURE IT",
  heading: "Sent is not a metric",
  items: [
    { metric: "Speed to first touch", why: "How fast the first follow-up fires after the trigger. Minutes, measured as a median." },
    { metric: "Reply rate per sequence", why: "The point of the whole thing. Emails sent tells you nothing about whether anyone answered." },
    { metric: "Meetings booked", why: "The outcome that pays for the system. Track it back to the sequence that produced it." },
    { metric: "Touches to reply", why: "How many attempts it actually takes you. If it is one, your persistence is too low." },
    { metric: "Opt-out rate", why: "The early warning that your timing, targeting, or message is wrong. Rising opt-outs mean stop and fix." },
    { metric: "Deliverability", why: "Bounce and spam rates. A perfect sequence in the spam folder converts nobody." },
  ],
};

export const FIX = {
  eyebrow: "WE BUILD IT AND WE RUN IT",
  heading: "This is a system, and systems are engineering, not a tool you were handed",
  body: [
    "You can buy a follow-up tool today. The reason the leads still go cold is that connecting the trigger to the sequence to five channels to reply detection to your CRM, and keeping it compliant and deliverable, is the actual work. The tool is the easy part.",
    "We are a GTM engineering team. We build the follow-up system into the tools you already use, wire the consent and Do Not Call checks into the send step, and run it. You get replies and booked calls, not another dashboard to maintain.",
  ],
  cta: { label: "Build my follow-up system", to: "/ai-clarity-workshop/" },
  support: "You are hiring a team, not buying software.",
};

// Long-form deep dive. Buyer-voice, problem-first, question-style H2s.
// Body paragraphs are either a plain string or an array of segments, where a
// segment is a string or an in-prose internal link { text, href }.
type DeepDiveSegment = string | { text: string; href: string };
type DeepDivePara = string | DeepDiveSegment[];

export const DEEP_DIVE: {
  eyebrow: string;
  heading: string;
  sections: { h2: string; body: DeepDivePara[] }[];
} = {
  eyebrow: "THE LONGER ANSWER",
  heading: "Follow up automation, explained for the person who keeps losing leads to silence",
  sections: [
    {
      h2: "Why do leads go cold in the first place?",
      body: [
        "A lead rarely goes cold because they decided against you. Most go quiet because the timing was wrong, they got busy, or your first message landed in a crowded inbox on a bad day. None of that is a no. It is a not right now that never got a second chance, because the second chance depended on a human remembering to send it.",
        "The gap is structural, not motivational. When there is no trigger that fires the moment a lead is due for another touch, no single owner on the hook for chasing it, and no persistence built in, one unanswered message gets quietly treated as the end. The lead sits in the CRM looking answered while everyone assumes a colleague has it. That is how a warm enquiry becomes a cold record without anyone deciding to let it die.",
        "Automated lead follow up closes that gap by making the chase a property of the system rather than a task on someone's list. The trigger fires whether or not anyone is watching, the sequence runs on nights and weekends, and the lead keeps hearing from you until they reply, book, or opt out. The reason leads go cold is almost always the absence of a system, so the fix is a system.",
      ],
    },
    {
      h2: "What is speed to lead, and why does it decide the outcome?",
      body: [
        "Speed to lead is simply how fast you respond after a new enquiry arrives. It matters more than almost anything else you can control, because the odds of ever reaching a lead fall away sharply in the minutes after they raise their hand. A prospect who filled in a form is, for a short window, actively thinking about the problem you solve. Reach them inside that window and you are talking to someone paying attention. Reach them a day later and you are interrupting someone who has moved on.",
        [
          "This is where human effort loses and automation wins. A rep cannot answer a 9pm enquiry at 9pm, or a Saturday enquiry on Saturday, but a follow up system can send the first touch in seconds, any hour, every day. That first fast touch does not have to close anything. It just has to hold the lead's attention long enough to route them into a real conversation, or into ",
          { text: "automated lead qualification", href: "/lead-qualification/" },
          " that sorts the ready buyers from the browsers before a human ever spends a minute on them.",
        ],
        "Speed to lead is directional US B2B research, not a Singapore benchmark, but the mechanism is universal: attention decays fast, and the business that shows up first while the intent is still warm is the one that gets the reply. Automation is how you win a race that starts the instant a form is submitted.",
      ],
    },
    {
      h2: "How many follow ups does it actually take, and what should a multi touch sequence look like?",
      body: [
        "More than most businesses send, and far more than one. The honest answer is that a single message is almost never enough, yet one message is exactly where most follow-up stops. Being persistent past the first attempt is the cheapest advantage available, because so few competitors bother. You do not need a dozen touches. You need enough, spaced sensibly, across the channels the lead actually uses.",
        "A multi touch follow up sequence is not the same message resent on a timer. It is a planned series that changes channel and angle as it goes: a fast first touch while intent is hot, a helpful second that adds something useful rather than just asking again, then a shift to a different channel when one goes unanswered. The point is to be present without being a nuisance, and to give the lead several natural moments to re-engage instead of one.",
        [
          "The rules of the sequence matter as much as the messages. Cap the total attempts so you never become the business that cannot take a hint, respect quiet hours, and vary the timing so it does not read as a machine. When a high-intent lead is worth a real conversation, the sequence can hand them to an ",
          { text: "AI voice agent or a booked appointment-setting call", href: "/appointment-setting-singapore/" },
          " rather than another email. A good sequence is designed, measured, and tuned, not guessed once and left running forever.",
        ],
      ],
    },
    {
      h2: "How is follow up automation different from lead nurturing automation?",
      body: [
        "They are close cousins and often confused, but they solve different problems. Follow up automation is the near-term chase: a lead just raised their hand, and the job is to reach them quickly and keep reaching them until they reply or book. It is about persistence and speed on an active lead whose interest is fresh and time-sensitive.",
        "Lead nurturing automation is the long game. It is for the leads who are genuinely interested but not ready yet, the ones who need months of useful, low-pressure contact before the timing is right. Nurturing keeps you present and credible so that when the buyer is finally ready, you are the name they already trust, rather than a form they filled in once and forgot.",
        [
          "A good system moves leads between the two rather than treating them as separate tools. A lead who does not respond to the active chase drops into a slower nurture track instead of the bin, and a nurtured lead who suddenly re-engages gets pulled back into a fast follow-up sequence. Wire it into the channels your buyers actually answer, whether that is email, SMS, or the ",
          { text: "WhatsApp Business API", href: "/whatsapp-business-api-singapore/" },
          ", and the same contact record carries the consent and history through both stages so nobody is ever messaged twice or chased after they opted out.",
        ],
      ],
    },
    {
      h2: "Does automated follow up feel robotic, and how do you keep it from becoming spam?",
      body: [
        "It feels robotic only when it is built badly. The version everyone dreads is a static cadence: the same messages fired on a fixed timer that keeps sending even after the person has already replied, booked, or asked you to stop. That is the automation that makes people opt out, and it deserves to, because it is broadcasting at leads rather than paying attention to them.",
        "A signal-driven system behaves the opposite way. It watches for a genuine reply, a booking, or an opt-out, and it halts the instant any of those arrive. It can tell a real reply from an out-of-office bounce, so it neither stops for the wrong reason nor keeps chasing someone who has clearly answered. Done well, it reads as a person who is simply attentive and prompt, not a machine working through a list.",
        "Staying out of spam territory is a design choice, not luck. Cap the attempts, respect consent and quiet hours, personalise the touch to what the lead actually did, and treat a rising opt-out rate as a signal to fix the timing or the message rather than push harder. The best follow up automation is the kind the recipient never files as automation at all.",
      ],
    },
  ],
};

export const FAQS = [
  {
    question: "What is follow up automation?",
    answer:
      "Follow up automation is a system that reaches out to a lead across email, SMS, WhatsApp, voice, or DM on a schedule triggered by an event, watches for a reply or a booking, and stops the moment they respond. It replaces a person remembering to chase leads with a system that always does.",
  },
  {
    question: "Why do most sales follow-ups fail?",
    answer:
      "Not because reps are lazy. They fail for three structural reasons: no trigger fires when a follow-up is due, no single person owns it so it falls between teams, and there is no persistence so one unanswered message is treated as the end. A system fixes all three.",
  },
  {
    question: "How many times should you follow up with a lead before giving up?",
    answer:
      "More than most businesses do. The RAIN Group Center for Sales Research found it takes an average of eight touches to reach and start a conversation with a new prospect, with top performers doing it in around five. Most stop at one. Cap the attempts, but one is far too few.",
  },
  {
    question: "What is speed to lead and why does it matter?",
    answer:
      "Speed to lead is how fast you respond to a new enquiry. It matters because the odds collapse quickly. Research by Oldroyd and InsideSales.com in 2007 found the odds of qualifying a lead were 21 times higher at 5 minutes than at 30. Automation wins the speed race that humans lose after hours and on weekends.",
  },
  {
    question: "Does automated follow-up feel spammy or robotic to prospects?",
    answer:
      "It does if it is a static cadence that keeps sending after someone replied. A signal driven system reacts to behaviour, personalises the touch, and stops the instant the lead responds, which feels like a person paying attention rather than a machine working through a list.",
  },
  {
    question: "How does a follow-up system know when to stop messaging someone?",
    answer:
      "It watches for signals and halts on any of them: a genuine reply, a booking, or an opt-out. It also caps the total number of attempts and respects quiet hours. Good systems tell a real reply from an out of office auto-responder, so they do not stop for the wrong reason or chase for the wrong reason.",
  },
  {
    question: "What channels can automated follow-up use?",
    answer:
      "Email, SMS, WhatsApp, voice, and DM. Real multi-channel orchestration routes each lead to the channel they actually respond on and moves between them, rather than blasting the same message everywhere. Voice is often handled by an AI voice agent for high intent leads.",
  },
  {
    question: "Do I need consent to send marketing messages in Singapore?",
    answer:
      "Generally yes. Under Singapore's Personal Data Protection Act you usually need clear consent before sending marketing messages, and before a marketing call or text to a Singapore number you must check the national Do Not Call Registry unless a valid exemption applies. This is what the rules require and is not legal advice.",
  },
  {
    question: "Can I reuse a phone number a customer gave me for an order to send marketing?",
    answer:
      "Not freely. Under purpose limitation, data collected for one purpose, such as confirming an order, cannot simply be repurposed for marketing. You generally need consent for the new purpose. Building the consent check into the system is how you stay on the right side of it.",
  },
  {
    question: "Does follow-up automation work with my existing CRM?",
    answer:
      "Yes. The CRM is the source of truth for the contact record, consent status, sequence membership, and do-not-contact flags. A well built system reads and writes that state so the same lead is never enrolled twice or messaged after opting out. It works with the tools you already use rather than replacing them.",
  },
  {
    question: "What is the difference between follow-up automation and lead nurturing?",
    answer:
      "Follow-up automation is about persistence and speed on an active lead: reach them until they reply or book. Lead nurturing is the longer, slower warming of leads who are not ready yet. Follow-up is the near-term chase, nurturing is the long game, and a good system moves leads between the two.",
  },
  {
    question: "How do you measure whether follow-up automation is working?",
    answer:
      "By outcomes, not activity. Track speed to first touch, reply rate per sequence, meetings booked, touches to reply, opt-out rate, and deliverability. Emails sent is not a metric. A rising opt-out rate is the signal to stop and fix the timing or the message.",
  },
];

export const FINAL = {
  eyebrow: "STOP LETTING QUIET LEADS DIE",
  heading: "The lead that went quiet is still there. Follow up until they answer.",
  sub: "We build and run the system that reaches every lead, on the right channel, and stops when they reply.",
  ctaA: { label: "Build my follow-up system", to: "/ai-clarity-workshop/" },
  ctaB: { label: "Qualify leads automatically", to: "/lead-qualification/" },
};
