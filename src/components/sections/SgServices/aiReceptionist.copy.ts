import type { ServiceCopy } from "./types";

// AI Receptionist Singapore page. This is the Singapore receptionist hub.
// Primary: ai receptionist singapore, virtual receptionist singapore, ai phone
// answering service singapore, 24/7 receptionist singapore, ai call answering
// singapore. Wedge: a missed call is a lost lead; the fastest credible response
// wins, so an AI voice receptionist answers every call 24/7, qualifies, and
// books. Pricing follows the honest S$100 starting point pattern.
export const AI_RECEPTIONIST_COPY: ServiceCopy = {
  meta: {
    title: "AI Receptionist Singapore | Every Call Answered 24/7",
    description:
      "An AI receptionist for Singapore businesses that answers every call 24/7, including after hours, qualifies the caller, and books the appointment. Starting from S$100 a month, PSG eligible.",
    keywords: ["ai receptionist singapore", "virtual receptionist singapore", "ai phone answering service singapore", "24/7 receptionist singapore", "ai call answering singapore"],
    url: "https://www.tryagentikai.com/ai-receptionist-singapore/",
  },
  schemaName: "AI Receptionist Singapore",
  breadcrumb: "AI Receptionist Singapore",
  hero: {
    eyebrow: "AI RECEPTIONIST, SINGAPORE",
    h1a: "A missed call is a lost customer.",
    h1b: "Ours answers every one, day and night.",
    sub: "Most Singapore businesses lose leads to voicemail and after-hours calls nobody picks up. We build an AI voice receptionist that answers every call in seconds, qualifies the caller, and books them straight into your calendar, 24/7.",
  },
  ctaPrimary: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
  ctaSecondary: { label: "See how it works", to: "#" },
  answerFirst:
    "An AI receptionist in Singapore is an AI voice agent that answers your phone and enquiries around the clock, including after hours and when your team is busy or on another call. It greets the caller, answers common questions, qualifies the enquiry, and books the appointment straight into your calendar. Because the fastest credible response wins, every call is picked up in seconds instead of going to voicemail, so a clinic, salon, home services firm, or professional practice never loses a lead to a missed call. We build and run it inside your own tools, your GoHighLevel, CRM, and calendar, forward-deployed and accountable, not a self-serve bot you set up alone.",
  relatedProse: [
    { before: "A receptionist that never misses a call is one part of a wider ", anchor: "lead generation agency, Singapore", to: "/lead-generation-agency-singapore/", after: ", so we tie it to how those enquiries turn into booked work." },
    { before: "Most calls should end on the calendar, which is why we connect ", anchor: "AI appointment booking", to: "/appointment-booking-ai/", after: " straight into the conversation." },
    { before: "For buyers who message instead of call, the same system runs the ", anchor: "WhatsApp Business API in Singapore", to: "/whatsapp-business-api-singapore/", after: " so no channel goes unanswered." },
    { before: "Anyone who cannot be reached first time is caught by ", anchor: "follow up automation", to: "/follow-up-automation/", after: " that keeps trying until they reply." },
  ],
  gap: {
    eyebrow: "WHERE THE LEADS LEAK",
    heading: "The call you miss is the customer your competitor books",
    intro: "Every unanswered call, voicemail, and after-hours enquiry is a buyer ready to spend. Most go to whoever answers first, and that is rarely the business that let it ring out.",
    stopLabel: "What happens now",
    stopBody: "Calls come in while you are with a customer, closed, or short-staffed. They hit voicemail, and most callers hang up and dial the next name on the list rather than leave a message. The lead is gone before you knew it existed.",
    goLabel: "What we deliver",
    goBody: "Every call answered in seconds, day or night, in a natural voice. The caller is greeted, their questions answered, the enquiry qualified, and the appointment booked into your calendar, so the enquiry becomes a booking instead of a missed call.",
  },
  included: {
    eyebrow: "WHAT IT DOES",
    heading: "A receptionist that never misses a call",
    items: [
      { title: "24/7 call answering", body: "Every call picked up in seconds, after hours, weekends, and public holidays, so nothing lands in voicemail and goes cold." },
      { title: "Natural voice conversations", body: "A natural sounding AI voice greets callers, answers your common questions, and handles the enquiry without a clunky phone tree." },
      { title: "Caller qualification", body: "The receptionist asks the right questions, captures the details you need, and separates real enquiries from the noise." },
      { title: "Appointment booking", body: "Qualified callers are booked straight into your calendar, so an enquiry becomes a confirmed slot, not a note to call back." },
      { title: "Overflow and after-hours cover", body: "It picks up when your team is on another line, busy, or closed, so no call is left ringing out." },
      { title: "Message capture and handoff", body: "For anything it should not handle, it takes a clear message and routes it to the right person, with the full context." },
    ],
  },
  aiDiff: {
    eyebrow: "FORWARD-DEPLOYED, NOT A SELF-SERVE BOT",
    heading: "How this differs from voicemail or a chatbot",
    intro: "We are measured on booked appointments, so answering the call is only the start.",
    rows: [
      { label: "The missed call", old: "Goes to voicemail and goes cold", ours: "Answered in seconds and qualified" },
      { label: "After hours", old: "Nobody picks up until tomorrow", ours: "Covered 24/7, including weekends" },
      { label: "The outcome", old: "A message to call back later", ours: "An appointment on your calendar" },
      { label: "Who builds it", old: "You configure a bot alone", ours: "We build and run it in your tools" },
    ],
  },
  pricing: {
    eyebrow: "PRICING",
    heading: "Honest pricing, below the market",
    price: "S$100",
    unit: "per month, starting from",
    market: "A human answering service or virtual receptionist in Singapore usually starts well above this, and a full-time front desk hire costs far more. We open low so you can start small and scale only as it books meetings.",
    includes: [
      "24/7 call answering in a natural voice",
      "Caller qualification built in",
      "Appointment booking into your calendar",
      "After-hours and overflow cover",
      "Built inside your own GoHighLevel, CRM, and calendar",
      "No lock-in contract",
    ],
    grant: "PSG eligible. Qualifying Singapore SMEs may receive up to 50 percent support, subject to IMDA approval. Confirm current eligibility with Enterprise Singapore.",
    altNote: "S$100 is a real starting point, a lean first step or a paid consultation, not the full program. We scope the actual engagement against your call volume and workflow after a short call, and you only move up when it is booking appointments. Larger setups with more integrations and higher volume are scoped after we understand your front desk.",
    cta: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
  },
  process: {
    eyebrow: "HOW WE START",
    heading: "Map the calls, then build the receptionist",
    steps: [
      { n: "01", title: "Map your front desk", body: "We listen to how calls come in, what callers ask, and where leads leak, then scope the build against your calendar and tools." },
      { n: "02", title: "Build and connect", body: "We build the AI receptionist inside your GoHighLevel, CRM, and calendar, wire in qualification and booking, and set the quiet hours and consent rules." },
      { n: "03", title: "Run and refine", body: "We run it against booked appointments, tune the script and handoffs, and expand cover as it proves out." },
    ],
  },
  trust: {
    eyebrow: "BUILT FOR SINGAPORE",
    heading: "Local, compliant, no lock-in",
    items: [
      { title: "PSG eligible", body: "Scoped to fit Enterprise Singapore schemes. Qualifying SMEs may receive up to 50 percent support, subject to IMDA approval." },
      { title: "PDPA and Do Not Call", body: "Call handling and follow up respect consent, quiet hours, and the Singapore Do Not Call Registry. This is what the rules require, not legal advice." },
      { title: "No lock-in", body: "No hostage contract. If the receptionist is not booking appointments, you walk." },
      { title: "We run it, you own it", body: "You keep the number, the system, and the data, and can take it in-house." },
    ],
  },
  crossLinks: {
    eyebrow: "PART OF THE SYSTEM",
    heading: "The receptionist is the front door",
    intro: "This is the Singapore receptionist hub. These pages go deeper by industry and into what happens after the call is booked.",
    links: [
      { name: "AI Receptionist for Dental Practices", to: "/ai-receptionist-for-dental-practices/", desc: "The same receptionist, built for the way dental clinics take calls." },
      { name: "AI Receptionist for Medical Clinics", to: "/ai-receptionist-for-medical-clinics/", desc: "Built for medical clinics, from triage questions to booking." },
      { name: "Appointment Booking AI", to: "/appointment-booking-ai/", desc: "The booking pillar the receptionist feeds into." },
      { name: "Follow Up Automation", to: "/follow-up-automation/", desc: "Answer every enquiry in seconds, until they reply or book." },
    ],
  },
  deepDive: {
    eyebrow: "THE DETAIL BUYERS ASK ABOUT",
    heading: "What an AI receptionist actually does on a live call",
    sections: [
      {
        h2: "What can an AI receptionist handle, and what should still go to a person?",
        body: [
          "The everyday questions are the ones it answers best, because they are the same ones your front desk repeats all day. Opening hours, where you are and where to park, what you charge, whether you take walk-ins, whether you do a particular service, whether there is a slot free this week. It takes a caller's name and number and the reason they are calling, and it books or reschedules the appointment. These are the calls that clog a phone line during the day and go to voicemail after hours, and they are exactly what it clears.",
          "Where it earns its place is the call that would otherwise be lost. When your line is busy or it is eleven at night, it still picks up, gets the details, and books the slot, instead of the caller hanging up and dialling the next name on the list. The caller does not know or care that your team is with someone else or has gone home. They get an answer and a booking.",
          "The line you keep with a person is drawn on purpose. A clinical judgement call, a pricing exception, an upset customer who wants a manager, anything legal or medical that needs a real human, all of that is handed off rather than guessed at. The receptionist is built to recognise these moments, say it will get the right person on it, and take a clear message with full context, not to bluff its way through.",
          "It works from the answers you give it about your own business, so it does not invent prices or make promises you did not authorise. If it does not know something, it says so and takes a message. A caller asking a dental clinic whether you do Medisave claims for wisdom tooth surgery gets either the answer you loaded or a clean handoff to your team, never a made up figure that you then have to walk back.",
        ],
      },
      {
        h2: "How does the AI receptionist book into my calendar without double-booking?",
        body: [
          "It reads your real availability at the moment of the call. That is the part that stops double-booking. Rather than working off a copy or a list that drifts out of date, it checks what is genuinely open right then and only offers those slots, so it cannot promise a time that is already taken.",
          "The booking is written back into the same calendar your team already uses, whether that is Google Calendar, your GoHighLevel calendar, or your practice or salon system. There is no second list to reconcile at the end of the day. The moment a caller confirms, the slot shows up for your staff with the name, number, and reason captured on the call, and the caller gets their own confirmation.",
          "Rescheduling and cancellations can run the same way, so a caller can move an appointment at nine at night without waiting for your front desk to open in the morning. It respects the buffers and working hours you set, which means it will not drop a consult over your lunch break or squeeze one in after your last slot of the day.",
          "The honest boundary is what happens when two callers reach for the last slot at the same moment. It holds to real availability rather than overbooking to please everyone. One caller gets the slot, and the other is routed to the next open time or offered a callback, so your diary stays true to what your team can actually deliver.",
        ],
      },
      {
        h2: "How long does it take to set up an AI receptionist, and what do you need from me?",
        body: [
          "What you hand over is knowledge, not a project plan. Your common questions and the answers to them, your prices or price ranges, the services you offer, your opening hours and your quiet hours, and access to the calendar and the phone number you want it to work with. Think of it as a short handover of how your front desk already talks to callers, not a build you have to manage.",
          "You do not write scripts or configure a bot yourself. The build and the wiring are done for you, which is the whole point of a team that deploys into your tools rather than handing you software. You supply the knowledge about your business, and the receptionist is built around it.",
          "Before it answers a single real customer, there is a listen and test step. You hear how it handles your kind of calls, catch anything that sounds off, and correct it while no live caller is on the line. Only once it sounds right on your calls does it start answering them.",
          "Setup is measured in days to a couple of weeks, depending on how many questions, services, and integrations are involved. A simple single-calendar front desk goes live faster than a multi-location clinic with several booking systems and a long list of services. Through all of it you keep your existing phone number, so you are not asking your customers to call something new or reprint anything.",
        ],
      },
      {
        h2: "Is an AI receptionist cheaper than hiring a receptionist in Singapore?",
        body: [
          "A full-time front desk hire in Singapore is a monthly salary plus CPF, and then leave, MC days, training, and the cost of replacing them when they move on. Even with all of that, one person covers office hours on one line at a time. A human answering service is usually billed per call or per minute, which climbs with your volume and often still does not cover nights and public holidays.",
          "The honest way to frame it is not a replacement for your team but a way to stop losing the calls they cannot get to. Your front desk keeps the relationship work, the regulars, the judgement calls, the walk-ins. The receptionist catches the overflow when every line is busy and the after-hours calls that were quietly going to voicemail. An owner who values a good human receptionist is not choosing between the two.",
          "So the real comparison is not a salary against a hundred dollars. It is the cost of the leads you currently lose to voicemail against the cost of answering them. For a high-value service like dental, aesthetics, or home repair, one recovered booking a month often covers the whole thing, and the after-hours calls are frequently the higher-intent ones. The pricing section on this page carries the number; the point here is what sits on the other side of it.",
          "This is why the fastest credible response matters. Research on online sales leads, including the widely cited Lead Response Management study associated with James Oldroyd and the related Harvard Business Review work on the short life of online leads, found that answering within about five minutes made a lead far likelier to qualify than waiting longer. That is US B2B online-lead data, directional support for answering fast rather than a Singapore phone benchmark, but the direction holds. A call answered now is worth more than the same call returned tomorrow.",
        ],
      },
    ],
  },
  faqs: [
    { question: "What is an AI receptionist?", answer: "An AI receptionist is an AI voice agent that answers your phone and enquiries, greets the caller, answers common questions, qualifies them, and books the appointment into your calendar. It works around the clock, so calls are picked up in seconds instead of going to voicemail." },
    { question: "How is this different from a normal virtual receptionist in Singapore?", answer: "A human virtual receptionist answers during set hours and costs more per call. An AI receptionist answers every call 24/7, including after hours and public holidays, at a lower cost, and books straight into your calendar. We build and run it inside your own tools rather than handing you a bot to set up alone." },
    { question: "Does it really answer calls after hours and on weekends?", answer: "Yes. The receptionist covers nights, weekends, and public holidays, which is when a lot of enquiries come in and most businesses miss them. Every call is answered in seconds, so an after-hours lead becomes a booking instead of a lost voicemail." },
    { question: "Will callers know they are speaking to an AI?", answer: "The voice is natural, and we are honest in how it introduces itself. The goal is not to trick anyone, it is to answer fast, be helpful, qualify the enquiry, and book the appointment, so callers get what they came for instead of a voicemail beep." },
    { question: "Which businesses is this best for?", answer: "Any Singapore business that loses leads to missed calls: clinics, dental and medical practices, salons and aesthetics, home services, and professional services. If a missed call means a lost customer, a 24/7 AI receptionist pays for itself." },
    { question: "How does it book appointments?", answer: "It connects to your calendar and booking tools, checks real availability, and books the caller into an open slot, then confirms. We build it inside your own GoHighLevel, CRM, and calendar, so the booking lands where your team already works." },
    { question: "Is this PDPA compliant, and what about the Do Not Call Registry?", answer: "Call handling and any follow up respect consent, quiet hours, and the Singapore Do Not Call Registry under PDPA. We set this up as what the rules require. This is not legal advice, and you stay the data controller for your own callers." },
    { question: "Is it PSG grant eligible, and do you lock me in?", answer: "An AI receptionist can be PSG eligible for qualifying Singapore SMEs, commonly up to 50 percent support, subject to IMDA approval. Confirm current eligibility with Enterprise Singapore. And no, we do not lock you into a contract." },
  ],
  final: {
    eyebrow: "STOP LOSING LEADS TO VOICEMAIL",
    heading: "Answer every call, day and night, and book it.",
    sub: "An AI receptionist for Singapore businesses that turns missed calls into appointments.",
    ctaA: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
    ctaB: { label: "See appointment booking", to: "/appointment-booking-ai/" },
  },
};
