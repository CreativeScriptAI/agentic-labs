// Copy for /appointment-booking-ai/ (Stage 4: Book and Convert pillar).
// Voice: buyer-first. Lead with the consequence they say ("the call comes in
// and nobody picks up"), introduce mechanism after. No dashes.
// Every number carries a named primary source inline. Unverified figures
// (HBR 42-hour, industry no-show percentages, voicemail hangup rates,
// "78% buy from whoever responds first") were deliberately excluded.

export const META = {
  title:
    "AI Appointment Booking: How It Actually Works",
  description:
    "AI appointment booking answers the enquiry, qualifies it, checks real availability, and writes the booking into your calendar. An honest guide to how it works, where it breaks, and how to cut no-shows.",
  keywords: [
    "ai appointment booking",
    "appointment booking ai agent",
    "ai appointment setter",
    "ai booking bot",
    "ai no-show recovery",
    "ai appointment scheduling",
  ],
  url: "https://www.tryagentikai.com/appointment-booking-ai/",
};

export const HERO = {
  eyebrow: "AI APPOINTMENT BOOKING",
  h1a: "The enquiry came in at 9pm.",
  h1b: "Nobody booked it.",
  sub: "AI appointment booking answers the call, text, or form the moment it lands, qualifies the lead, checks your real availability, and writes the booking into your calendar. No callback list. No phone tag.",
  ctaPrimary: { label: "Get bookings on autopilot", to: "/ai-clarity-workshop/" },
  ctaSecondary: { label: "See how it works", to: "#how-it-works" },
};

// Answer-first block, first ~100 words of body copy, built for LLM extraction.
export const ANSWER_FIRST =
  "AI appointment booking is a system that handles an inbound enquiry end to end: it answers by phone, SMS, WhatsApp, or web chat, asks the qualifying questions you would ask, looks up genuine open slots in your calendar, holds one, writes the confirmed booking, and sends the confirmation and reminders. It is not a booking link, and it is not a phone menu. The difference that matters is that it works at the moment of intent, including nights and weekends, which is when most enquiries actually arrive and when nobody is at the desk to answer them.";

export const WHATITIS = {
  eyebrow: "WHAT IT IS, AND WHAT IT IS NOT",
  heading: "Three things get called the same name",
  intro:
    "Most confusion about AI booking comes from lumping three different tools together. They solve different problems.",
  items: [
    {
      label: "A booking link",
      sub: "Calendly, Cal.com",
      body: "The customer does the work. They open the link, read your availability, and pick a slot themselves. Great for people who already decided to book. Useless for the lead who called with a question first.",
      is: false,
    },
    {
      label: "A meeting scheduler",
      sub: "Reclaim, Motion, Clockwise",
      body: "Tidies up your internal calendar: focus blocks, moving your own meetings around. It is calendar hygiene for your team, not lead capture. Different job entirely.",
      is: false,
    },
    {
      label: "AI appointment booking",
      sub: "What this page is about",
      body: "Handles the actual enquiry. Answers it, qualifies it, finds real availability, books it, confirms it, and chases the no-show. It works the lead, not just the calendar.",
      is: true,
    },
  ],
};

export const WHYNOW = {
  eyebrow: "WHY THE FIRST FEW MINUTES DECIDE IT",
  heading: "Speed is the whole game, and almost nobody is fast",
  stats: [
    {
      stat: "100x",
      label: "higher odds of reaching a web lead when the call goes out within 5 minutes instead of 30",
      source: "Oldroyd and InsideSales, Lead Response Management Study, 2007",
    },
    {
      stat: "21x",
      label: "higher odds of qualifying that lead at 5 minutes versus 30 minutes",
      source: "Oldroyd and InsideSales, 2007",
    },
    {
      stat: "7%",
      label: "of 433 B2B companies actually responded to a web lead within 5 minutes",
      source: "Drift, Lead Response Report, 2017",
    },
  ],
  body:
    "The gap between what works and what businesses do is enormous, and it is not a discipline problem. Nobody can staff the desk at 9pm on a Sunday. That is the specific hole an AI booking agent fills: it is awake at the moment of intent, and the moment of intent is when the lead is worth the most.",
};

export const HOW = {
  eyebrow: "HOW IT ACTUALLY WORKS",
  heading: "The six steps between the enquiry and the booking",
  intro:
    "Most vendors say it connects to your calendar and stop there. Here is the chain that actually runs, because knowing it is how you spot a system that will break.",
  steps: [
    {
      n: "01",
      title: "The enquiry lands",
      body: "A phone call, an SMS or WhatsApp message, a web chat, or a form submission. The agent picks up immediately, at any hour.",
    },
    {
      n: "02",
      title: "It identifies and qualifies",
      body: "Who is this, are they an existing customer, what do they need, and do they fit what you actually take on. The same questions your receptionist would ask.",
    },
    {
      n: "03",
      title: "It looks up real availability",
      body: "This is the step people get wrong. A calendar returns busy periods, not bookable slots. Your business hours, buffers, travel time, and service duration are your rules on top of that data.",
    },
    {
      n: "04",
      title: "It holds the slot",
      body: "The slot is held before the conversation ends, either as a tentative event or a lock in the booking system, so two callers cannot take the same time while both are still talking.",
    },
    {
      n: "05",
      title: "It writes the confirmed booking",
      body: "The event is confirmed in the calendar and the record is written to the CRM as a contact and an activity, so your pipeline and your calendar do not drift apart.",
    },
    {
      n: "06",
      title: "It confirms and reminds",
      body: "Confirmation goes out on the confirmed write, never on the hold. Then the reminder sequence runs, with a way to confirm or reschedule in one reply.",
    },
  ],
};

export const BREAKS = {
  eyebrow: "WHERE THESE SYSTEMS BREAK",
  heading: "The five failure modes vendors do not put on the sales page",
  intro:
    "Every one of these is fixable. None of them fixes itself. Ask any vendor how they handle all five.",
  items: [
    {
      symptom: "Two people book the same slot",
      cause:
        "The system polls the calendar every few minutes instead of holding the slot during the conversation. Two callers land inside the same polling window.",
      fix: "Hold the slot the moment it is offered, and use conflict detection on write so a clash is caught and the caller is offered the next slot instead.",
    },
    {
      symptom: "The appointment is an hour off",
      cause:
        "Time zone was guessed from an area code or an IP address, or a daylight saving transition moved a recurring slot.",
      fix: "Have the agent state the time zone out loud and confirm it. Store every booking in a fixed reference time and render it locally, never the other way around.",
    },
    {
      symptom: "The calendar and the CRM disagree",
      cause:
        "The booking wrote to one system and the sync back was one way, so a cancellation never reached the pipeline.",
      fix: "Drive both from the same event, and listen for cancel and reschedule webhooks on both sides.",
    },
    {
      symptom: "The lead gets stuck with the bot",
      cause:
        "No handoff path, so a caller with a question the agent cannot answer loops or hangs up.",
      fix: "Define the handoff up front: warm transfer during hours, guaranteed callback outside them, and a hard escape phrase that always reaches a human.",
    },
    {
      symptom: "A confirmed booking never existed",
      cause:
        "The confirmation was sent on the tentative hold, then the final calendar write failed and nobody noticed.",
      fix: "Send the confirmation only after the confirmed write succeeds, and alert a human on any failed write.",
    },
  ],
};

export const NOSHOW = {
  eyebrow: "THE PART EVERYONE SKIPS",
  heading: "Booking it is half the job. Getting them to turn up is the other half.",
  intro:
    "A booked appointment that nobody attends costs more than the enquiry you never answered, because you held capacity for it. Reminders are the cheapest intervention available, and there is real evidence behind them.",
  evidence:
    "A Cochrane systematic review found that text message reminders improved attendance at healthcare appointments compared with no reminder, with a risk ratio of 1.10 (95% confidence interval 1.03 to 1.17), and cost between 55 and 65 percent of phone call reminders per attended appointment.",
  evidenceSource: "Gurol-Urganci et al., Cochrane Database of Systematic Reviews, 2013",
  loop: [
    {
      n: "01",
      title: "Confirm at booking",
      body: "Immediate confirmation with the date, time, time zone, and a one tap way to change it.",
    },
    {
      n: "02",
      title: "Remind, then remind again",
      body: "A reminder the day before and one a couple of hours out. Each one asks for a reply to confirm or reschedule.",
    },
    {
      n: "03",
      title: "Rebook, do not just record",
      body: "If they cannot make it, the same conversation offers the next slots. A cancellation should end as a rebooking, not a gap.",
    },
    {
      n: "04",
      title: "Backfill and reactivate",
      body: "The freed slot goes to the waitlist. The person who missed gets a follow up rather than quietly falling out of the pipeline.",
    },
  ],
};

export const INTEGRATIONS = {
  eyebrow: "THE HONEST INTEGRATION PICTURE",
  heading: "What actually connects, and what it takes",
  intro:
    "Everyone shows a wall of logos. Fewer explain what the connection genuinely does. This is the accurate version.",
  columns: ["Platform", "Can it be booked into", "What it takes"],
  rows: [
    {
      platform: "Google Calendar",
      can: "Yes, full read and write",
      needs:
        "Availability comes back as busy periods, not slots, so bookable time is your own logic. Live updates need change notifications, not polling.",
    },
    {
      platform: "Microsoft 365 and Outlook",
      can: "Yes, full read and write",
      needs:
        "Equivalent capability through Microsoft Graph, with subscriptions that have to be renewed to keep updates flowing.",
    },
    {
      platform: "GoHighLevel",
      can: "Yes, end to end",
      needs:
        "First class endpoints for fetching free slots and creating the appointment, which is why it is the smoothest path for agencies already on it.",
    },
    {
      platform: "Cal.com",
      can: "Yes, straightforward",
      needs: "Open source with a clean slots and bookings API. The easiest true integration of the set.",
    },
    {
      platform: "Calendly",
      can: "Yes, with conditions",
      needs:
        "Programmatic booking is possible through its scheduling API, but it requires an OAuth application and a paid plan. Older guides claiming it is impossible are out of date.",
    },
    {
      platform: "HubSpot and Salesforce",
      can: "For the record, not the calendar",
      needs:
        "These hold the contact, the deal, and the activity. The calendar write still happens on the calendar side, so both have to be driven from the same event.",
    },
  ],
};

export const CHANNELS = {
  eyebrow: "THE FOUR WAYS IT ANSWERS",
  heading: "Not every enquiry arrives as a phone call",
  items: [
    {
      name: "Voice",
      good: "The highest intent channel. Someone calling wants an answer now, and a booked call beats a voicemail every time.",
      watch: "Needs a real handoff path and a natural voice, or callers hang up.",
      link: { label: "AI voice agents", to: "/ai-voice-agent/" },
    },
    {
      name: "SMS and WhatsApp",
      good: "Best for confirming, reminding, and rescheduling. People reply to texts they would never return a call for.",
      watch: "Consent and quiet hours are not optional. Get the opt in right.",
      link: null,
    },
    {
      name: "Web chat",
      good: "Catches the visitor who is comparing you against two competitors and will not pick up the phone.",
      watch: "Only worth it if it can actually book, not just collect an email.",
      link: null,
    },
    {
      name: "Outbound follow up",
      good: "The one that recovers revenue. Old enquiries, no shows, and quotes that went quiet.",
      watch: "Respect do not call rules and local regulations.",
      link: { label: "Follow up automation", to: "/follow-up-automation/" },
    },
  ],
};

export const CHOOSE = {
  eyebrow: "HOW TO CHOOSE",
  heading: "Nine questions that separate a demo from a system",
  items: [
    "Does it hold the slot during the conversation, or only write after the call ends?",
    "What happens when two people ask for the same slot at the same time?",
    "How does it establish the caller's time zone, and does it say it out loud?",
    "Does the confirmation send on the hold or on the confirmed write?",
    "What is the handoff to a human, in hours and out of hours?",
    "Does it write to the CRM as well as the calendar, from the same event?",
    "Does it handle cancellations and reschedules, or only new bookings?",
    "Does anyone get alerted when a booking fails to write?",
    "Who fixes it when it breaks, and how fast?",
  ],
};

export const FIX = {
  eyebrow: "WE BUILD IT, YOU DO NOT OPERATE IT",
  heading: "You do not want a booking tool. You want the bookings.",
  body: [
    "The tools on this page are all real and all buyable. The reason most businesses still miss the 9pm enquiry is not that the software does not exist. It is that connecting the phone line to the qualifying logic to the calendar to the CRM to the reminder sequence, and keeping it working, is engineering.",
    "We are a GTM engineering team. We build the booking system inside the tools you already use, wire the failure modes on this page out of it, and own the result. You get the bookings. You never touch the wiring.",
  ],
  cta: { label: "Get my bookings handled", to: "/ai-clarity-workshop/" },
  support: "You are hiring a team, not buying software.",
};

export const FAQS = [
  {
    question: "What is AI appointment booking?",
    answer:
      "AI appointment booking is a system that answers an inbound enquiry by phone, SMS, WhatsApp, or web chat, qualifies the person, checks genuine availability in your calendar, books the appointment, and sends the confirmation and reminders. Unlike a booking link, it handles the conversation as well as the calendar.",
  },
  {
    question: "How does an AI agent check my calendar before booking?",
    answer:
      "It queries your calendar for busy periods, then applies your own rules on top: business hours, buffers between appointments, travel time, and how long each service takes. Calendars return time that is already taken, not time that is bookable, so the bookable slots are always calculated by the booking system rather than read directly from the calendar.",
  },
  {
    question: "Can AI book directly into Google Calendar and Outlook?",
    answer:
      "Yes. Both Google Calendar and Microsoft 365 support full read and write access, so an agent can check availability and create a confirmed event. Keeping it current in real time requires change notifications from the calendar rather than checking on a timer.",
  },
  {
    question: "Does AI appointment booking work with Calendly?",
    answer:
      "Yes, with conditions. Calendly now offers a scheduling API that allows a booking to be created programmatically, but it requires an OAuth application and a paid Calendly plan. Guides claiming Calendly cannot be booked through an API are out of date.",
  },
  {
    question: "Can an AI booking agent double-book me?",
    answer:
      "It can, if it is built badly. Double-booking happens when the system checks the calendar on a timer instead of holding the slot while the conversation is still happening, so two callers land inside the same window. A well built system holds the slot the moment it is offered and detects conflicts when it writes.",
  },
  {
    question: "How does an AI booking agent handle time zones?",
    answer:
      "Reliably only when it asks. Time zone guessed from an area code or an IP address is often wrong, and daylight saving transitions shift recurring appointments. The safe pattern is for the agent to state the time zone out loud and have the caller confirm it, with bookings stored in a fixed reference time.",
  },
  {
    question: "What happens if the AI cannot answer a caller's question?",
    answer:
      "It should hand off, and the path should be defined before launch. During business hours that usually means a warm transfer to a person. Outside them it means a guaranteed callback booked into the calendar. There should also be an escape phrase that always reaches a human.",
  },
  {
    question: "Can AI reduce no-shows?",
    answer:
      "Reminders are the proven lever, and AI makes the follow up conversational rather than one way. A Cochrane systematic review found text message reminders improved appointment attendance compared with no reminder, with a risk ratio of 1.10 and a confidence interval of 1.03 to 1.17, at 55 to 65 percent of the cost per attended appointment of phone call reminders.",
  },
  {
    question: "What is the difference between an AI appointment setter and an AI receptionist?",
    answer:
      "An AI receptionist is inbound first: it answers calls, routes them, and books. An AI appointment setter is outbound first: it works a list of leads to get meetings on the calendar. Many businesses need both, driven by the same qualifying logic and the same calendar.",
  },
  {
    question: "Does it work over SMS and WhatsApp, or only phone calls?",
    answer:
      "Both. Voice suits the high intent caller who wants an answer immediately, while SMS and WhatsApp are better for confirming, reminding, and rescheduling because people reply to a text they would not return a call for. Consent rules and quiet hours apply to messaging.",
  },
  {
    question: "Can an AI agent reschedule or cancel an existing appointment?",
    answer:
      "Yes, and it should. A system that only creates new bookings leaves your calendar and your pipeline drifting apart. Rescheduling should be a conversation that ends in a new slot rather than a cancellation that ends in a gap.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "The conversation and the calendar connection are usually quick. The work that takes time is the edge cases: what counts as qualified, what happens out of hours, how handoff works, and what happens when a write fails. We scope it honestly after looking at how enquiries reach you today.",
  },
];

export const DEEP_DIVE = {
  eyebrow: "THE LONGER ANSWER",
  heading: "What Singapore owners actually ask before automating their bookings",
  sections: [
    {
      h2: "Do I even need AI appointment booking if I already have an online booking form?",
      body: [
        "This is the first thing most owners ask, and it is a fair one. A booking form or a Calendly link already lets people pick a slot, so why pay for anything smarter. The honest answer is that a form only works for the customer who has already decided to book. They know what they want, they are happy to read your availability, and they will do the clicking themselves. For that person, a form is enough, and you should keep it.",
        "The gap is everyone else. Most enquiries in a service business do not arrive as a confident booking. They arrive as a question. Can you see my mother on a weekday morning, do you handle this kind of case, how much is it, is there parking. A static form cannot answer any of that, so the person closes the tab and messages the next business instead. AI appointment booking sits in that gap: it answers the question first, then books the slot in the same conversation, which is the difference between capturing the lead and losing it.",
        "So the two are not really competitors. The form is a fine front door for the ready buyer. Automated appointment scheduling with an AI assistant is what catches the hesitant one, the after-hours one, and the one who would rather talk than fill in fields. Most businesses end up running both, and the AI simply becomes the channel that stops the almost-customers from leaking away.",
      ],
    },
    {
      h2: "Can a 24/7 booking assistant really take bookings overnight without me watching it?",
      body: [
        "Yes, and this is the part that pays for itself. A large share of enquiries land outside office hours, in the evening after work or over the weekend, which is exactly when no one is at the desk. A 24/7 booking assistant answers those the moment they arrive, qualifies the person, checks your genuine availability, and writes the confirmed appointment while you sleep. You wake up to a booked calendar rather than a voicemail backlog.",
        "The caveat worth stating plainly is that automated does not mean unsupervised forever. A booking assistant is only as safe as the rules behind it: your business hours, your buffers, what counts as a job you actually take, and a clear path to a human when the question is outside its script. A well built system runs on its own day to day and flags the genuine edge cases to you, rather than silently guessing and quietly booking the wrong thing.",
        "The same always-on logic is what makes messaging channels so effective here. Once the assistant can hold a real conversation, it can just as easily confirm and reschedule over chat, which is why we usually pair it with a proper messaging setup like the <a href=\"/whatsapp-business-api-singapore/\">WhatsApp Business API</a> so the booking, the reminder, and the reschedule all happen in the thread the customer already lives in.",
      ],
    },
    {
      h2: "Will it plug into the calendar and tools my business already runs on?",
      body: [
        "In almost every case, yes, though what the connection genuinely does matters more than the logo on the page. Google Calendar and Microsoft 365 both allow full read and write, so the agent can check availability and create a confirmed event. GoHighLevel is the smoothest path for anyone already on it, because it exposes proper endpoints for fetching free slots and creating the appointment end to end. Calendly connects too, with conditions: programmatic booking works through its scheduling API, but it needs an OAuth app and a paid plan, so anyone telling you Calendly cannot be booked by an API is working from an out-of-date guide.",
        "The detail that trips up cheap builds is that a calendar returns busy periods, not bookable slots. Your real availability is your own logic layered on top of that raw data: opening hours, travel time between jobs, buffers, and how long each service takes. If a vendor treats the calendar feed as the source of truth, you get double bookings and slots offered when you are already out. The right pattern calculates bookable time from your rules and only then writes to the calendar and the CRM from the same event, so your pipeline and your diary never drift apart.",
        "None of this requires you to rip out your current stack. The goal is to wire the AI into the tools you already pay for, not to migrate you onto a new platform you did not ask for.",
      ],
    },
    {
      h2: "How much can automated scheduling actually reduce no-shows?",
      body: [
        "No-shows are where a lot of the return hides, because an empty slot you held open costs more than an enquiry you never answered. The proven lever here is reminders, and the evidence for them is genuine rather than marketing: a Cochrane systematic review found that text message reminders improved appointment attendance compared with sending nothing, at a meaningfully lower cost per attended appointment than phone call reminders. Treat that as directional support for reminders as a tactic, not a promise of a specific number for your business, because your own no-show rate depends on your industry and your customers.",
        "What AI adds on top of a plain reminder is that the reminder becomes a conversation instead of a one-way text. When the customer replies that they cannot make it, the same thread offers the next open slots and rebooks them there, so a cancellation ends as a moved appointment rather than a gap in your day. That difference, rebooking versus merely recording, is where most of the recovered revenue actually comes from.",
        "Reminders also work best as part of a wider follow-up rhythm rather than a single nudge. If you want to see how that sequencing is built out across old enquiries, quiet quotes, and past no-shows, our <a href=\"/follow-up-automation/\">follow-up automation</a> approach covers the same machinery applied beyond the first booking.",
      ],
    },
    {
      h2: "What does this cost, and does it make sense for a small Singapore business?",
      body: [
        "There is no honest single price, because the software is the cheap part and the wiring is where the real work sits. Connecting the phone line or chat to the qualifying logic, to the calendar, to the CRM, to the reminder sequence, and keeping all of it working when a caller does something unexpected, is engineering rather than a subscription you flip on. Anyone quoting a flat monthly figure before they have seen how enquiries reach you today is guessing at the scope.",
        "For a smaller business the maths usually turns on one question: what is a single booked job worth to you, and how many are you currently losing after hours or to slow replies. If you take a handful of enquiries a week and each booking is worth a meaningful amount, recovering even a few that used to leak away tends to cover the cost quickly. If your volume is genuinely tiny, a good booking link plus manual follow-up may be the more honest answer, and a straight vendor will tell you so.",
        "If you would rather not run the wiring yourself, that is the job we do. We build the booking system inside the tools you already use, design the after-hours and human-handoff paths, and own the result, which is closely related to how our <a href=\"/appointment-setting-singapore/\">appointment setting</a> work is structured. You get the bookings without becoming the person who maintains the automation.",
      ],
    },
  ],
};

export const FINAL = {
  eyebrow: "STOP LOSING THE 9PM ENQUIRY",
  heading: "Every missed enquiry is a booking your competitor takes.",
  sub: "We build the system that answers, qualifies, and books it. Inside the tools you already use.",
  ctaA: { label: "Get bookings on autopilot", to: "/ai-clarity-workshop/" },
  ctaB: { label: "Check if AI names you", to: "/ai-visibility-checker/" },
};
