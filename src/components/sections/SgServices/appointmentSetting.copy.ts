import type { ServiceCopy } from "./types";

// Appointment Setting page. Primary: appointment setting singapore +
// appointment setting services / b2b appointment setting singapore +
// lead generation appointment setting. Secondary intent: the thing it
// replaces, telemarketing / telesales / cold calling singapore (real
// volume, KD 0-9). Wedge: outbound B2B appointment setting that replaces
// slow, expensive, hard-to-staff telemarketing with a system that answers
// in seconds and never forgets to follow up, accountable on booked
// meetings, not a dialer you have to staff. Distinct from
// /appointment-booking-ai/ (inbound: book the enquiry that comes to you);
// this page is OUTBOUND: proactively reach prospects and set the meeting.
// Must survive the silent credibility check by SG B2B buyers who read the
// outreach, then check the site and LinkedIn before they engage.
export const APPOINTMENT_SETTING_COPY: ServiceCopy = {
  meta: {
    title: "Appointment Setting Singapore | Booked Meetings, Not Dials",
    description:
      "AI-powered B2B appointment setting in Singapore that replaces slow telemarketing and telesales. We find and qualify your buyers, follow up across voice, SMS, and WhatsApp, and book meetings straight onto your sales team's calendar. Starting from S$100 a month, PSG eligible.",
    keywords: ["appointment setting singapore", "appointment setting services singapore", "b2b appointment setting singapore", "lead generation appointment setting", "telemarketing singapore"],
    url: "https://www.tryagentikai.com/appointment-setting-singapore/",
  },
  schemaName: "Appointment Setting Singapore",
  breadcrumb: "Appointment Setting Singapore",
  hero: {
    eyebrow: "B2B APPOINTMENT SETTING, SINGAPORE",
    h1a: "A dial is not a meeting.",
    h1b: "We are paid on the booking.",
    sub: "Most appointment setting in Singapore means telemarketers making dials and reporting activity. We replace that with an AI-powered system that finds and qualifies your buyers, follows up across voice, SMS, and WhatsApp, and books the meeting straight onto your sales team's calendar. Accountable on booked meetings, not on the number of calls made.",
  },
  ctaPrimary: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
  ctaSecondary: { label: "See how it works", to: "#" },
  answerFirst:
    "B2B appointment setting in Singapore is meant to fill your sales team's calendar with qualified meetings. The old way is telemarketing and telesales: a dialer, a script, and a team that is slow to hire, expensive to keep, and easy to distract, so most prospects are contacted once and never followed up. We replace that with an AI-powered system. It finds and qualifies prospects that match your best customers, reaches out and follows up across voice, SMS, and WhatsApp, responds in seconds, and books the meeting straight onto your calendar. You get booked meetings, not a call log.",
  gap: {
    eyebrow: "WHERE MOST APPOINTMENT SETTING STOPS",
    heading: "The dial is where they finish and where the pipeline leaks",
    intro: "Any telemarketing team can make calls and report the count. Almost none stay on the prospect long enough, or follow up fast enough, to actually set the meeting.",
    stopLabel: "What they deliver",
    stopBody: "Dials made, prospects contacted, and an activity report. The prospect who did not pick up sits without a second touch, and Singapore buyers who quietly researched you but did not reply go cold, because nobody followed up in time.",
    goLabel: "What we deliver",
    goBody: "The same outreach, plus the system that follows up across voice, SMS, and WhatsApp, answers in seconds, qualifies against your criteria, and books the meeting on your calendar. You are measured on meetings set, so the follow up never gets forgotten.",
  },
  included: {
    eyebrow: "WHAT WE DO",
    heading: "B2B appointments, set end to end",
    items: [
      { title: "Find and qualify prospects", body: "We source prospects that match your best customers, verify them, and qualify against your real fit and intent criteria before a meeting is ever booked." },
      { title: "Multichannel outreach", body: "Reach and follow up across voice, SMS, and WhatsApp from one system, so the prospect is met on the channel they actually answer." },
      { title: "Relentless follow up", body: "The system never forgets a second touch. It follows up on a cadence until the prospect books, replies, or opts out, which is where telemarketing quietly leaks pipeline." },
      { title: "Speed to lead", body: "Every reply and inbound is answered in seconds, because with B2B buyers the fastest credible response wins the conversation." },
      { title: "Meetings on the calendar", body: "The qualified prospect is booked straight onto your sales team's calendar, replacing the manual back and forth of chasing a slot." },
      { title: "Built in your stack", body: "We build and run it inside your own tools, GoHighLevel, n8n, and your CRM, so the pipeline and the data stay yours." },
    ],
  },
  aiDiff: {
    eyebrow: "AI-POWERED, NOT A CALL CENTRE",
    heading: "How we differ from telemarketing and telesales",
    intro: "We are measured on booked meetings, so we cannot stop at a dial or an activity report.",
    rows: [
      { label: "The deliverable", old: "Dials made and a call log", ours: "Qualified meetings on your calendar" },
      { label: "Follow up", old: "One touch, then forgotten", ours: "Relentless until booked or opted out" },
      { label: "Response time", old: "Hours or days, if at all", ours: "Answered in seconds" },
      { label: "What we are paid on", old: "Call volume and activity", ours: "Booked meetings" },
    ],
  },
  pricing: {
    eyebrow: "PRICING",
    heading: "Honest pricing, below the market",
    price: "S$100",
    unit: "per month, starting from",
    market: "Appointment setting and telemarketing retainers in Singapore usually start well into the thousands a month, plus the cost of staffing a caller. We open far lower so you can start small and scale only as it books meetings.",
    includes: [
      "Prospect sourcing and qualification",
      "Outreach and follow up across voice, SMS, and WhatsApp",
      "Speed to lead: replies answered in seconds",
      "Meetings booked straight onto your calendar",
      "Built and run inside your own CRM and stack",
      "PDPA and Do Not Call compliant outreach",
      "No lock-in contract",
    ],
    grant: "PSG eligible. Qualifying Singapore SMEs may receive up to 50 percent support, subject to IMDA approval. Confirm current eligibility with Enterprise Singapore.",
    altNote: "S$100 is a real starting point, a lean first step or a paid consultation, not the full program. The actual engagement is scoped against your goals after a short call, and because we are accountable for meetings set rather than dials made, larger engagements can be scoped per booked meeting rather than a fixed call volume. You only move up when it is booking meetings.",
    cta: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
  },
  process: {
    eyebrow: "HOW WE START",
    heading: "Define the meeting, then build the machine",
    steps: [
      { n: "01", title: "Define the prospect", body: "We map your ideal customer, your fit and intent criteria, and the exact outcome that counts as a booked meeting, then scope the build." },
      { n: "02", title: "Build and connect", body: "We build the sourcing, multichannel outreach, follow up, qualification, and booking inside your own CRM and tools, wired for speed to lead." },
      { n: "03", title: "Run and optimise", body: "We run it against meetings set, cut the messaging that does not convert, and scale the channels and cadences that fill the calendar." },
    ],
  },
  trust: {
    eyebrow: "BUILT FOR SINGAPORE",
    heading: "Local, compliant, no lock-in",
    items: [
      { title: "PSG eligible", body: "Scoped to fit Enterprise Singapore schemes. Qualifying SMEs may receive up to 50 percent support, subject to IMDA approval." },
      { title: "PDPA and Do Not Call", body: "Outbound respects consent, quiet hours, and the Singapore Do Not Call Registry under the PDPA. This matters especially for cold outreach, and it is what the rules require, not legal advice." },
      { title: "Survives the silent check", body: "Singapore B2B buyers read your outreach, then quietly check your site and LinkedIn before they engage. We build the credibility that turns a silent researcher into a booked meeting." },
      { title: "We run it, you own it", body: "You keep the CRM, the system, and the data, and can take the whole thing in-house whenever you want." },
    ],
  },
  crossLinks: {
    eyebrow: "PART OF THE SYSTEM",
    heading: "Setting the meeting is one step in the journey",
    intro: "Appointment setting fills the calendar. These pages are the rest of the system that turns an outbound touch into booked revenue.",
    links: [
      { name: "B2B Lead Generation Singapore", to: "/b2b-lead-generation-singapore/", desc: "The wider pipeline system: source, enrich, and qualify your B2B buyers." },
      { name: "Lead Qualification", to: "/lead-qualification/", desc: "Qualify against your real fit and intent criteria before a meeting is set." },
      { name: "Appointment Booking AI", to: "/appointment-booking-ai/", desc: "The inbound side: answer the enquiry that comes to you and book it." },
      { name: "Follow Up Automation", to: "/follow-up-automation/", desc: "Answer every reply in seconds, until they book or opt out." },
    ],
  },
  faqs: [
    { question: "What does a B2B appointment setting service in Singapore actually do?", answer: "It is meant to fill your sales team's calendar with qualified meetings. The old way is telemarketing: a team making dials and reporting activity, with most prospects contacted once and never followed up. We replace that with an AI-powered system that finds and qualifies your buyers, follows up across voice, SMS, and WhatsApp, and books the meeting straight onto your calendar." },
    { question: "How is this different from telemarketing or telesales?", answer: "Telemarketing is a dialer and a team that is slow to hire, expensive to keep, and easy to distract, so the follow up gets forgotten. Our system responds in seconds, never forgets a second touch, and is accountable on meetings set rather than calls made. You are paying for booked meetings, not call volume." },
    { question: "How is this different from your Appointment Booking AI page?", answer: "Appointment Booking AI is inbound: it answers the enquiry that already came to you and books it. This page is outbound: we proactively find and qualify prospects who have not contacted you yet, reach out and follow up, and set the meeting for your sales team. They are two halves of the same calendar, and many clients use both." },
    { question: "Which channels do you use to reach prospects?", answer: "Voice, SMS, and WhatsApp, run from one system so a prospect is met and followed up on the channel they actually answer. The follow up runs on a cadence across channels until the prospect books, replies, or opts out." },
    { question: "My prospects never reply to outreach. How does this help?", answer: "That is the Singapore pattern: buyers read the outreach, do not reply, then check your website and LinkedIn before they engage. The outreach only earns the meeting if that credibility holds up, so we build for the silent check and answer in seconds the moment a silent researcher does respond, so the interest actually converts to a meeting." },
    { question: "Do you work inside our existing CRM and tools?", answer: "Yes. We build and run everything inside your own stack, including GoHighLevel, n8n, and your CRM, so the pipeline, the workflows, and the data stay yours and can be taken in-house at any time." },
    { question: "How does your outbound stay compliant with PDPA in Singapore?", answer: "Outbound respects consent, quiet hours, and the Singapore Do Not Call Registry under the PDPA, which matters especially for cold outreach. We build these rules into the system rather than bolting them on. This is what the rules require, not legal advice, so confirm specifics with your own compliance team." },
    { question: "Is appointment setting PSG grant eligible, and do you lock me in?", answer: "This work can be PSG eligible for qualifying Singapore SMEs, commonly up to 50 percent support, subject to IMDA approval. Confirm current eligibility with Enterprise Singapore. And no, we do not lock you into a contract. If it is not booking meetings, you walk." },
  ],
  final: {
    eyebrow: "STOP PAYING FOR DIALS THAT GO NOWHERE",
    heading: "Turn outbound into booked meetings, not a call log.",
    sub: "AI-powered B2B appointment setting in Singapore, accountable on the meeting, not the dial.",
    ctaA: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
    ctaB: { label: "See B2B lead generation", to: "/b2b-lead-generation-singapore/" },
  },
};
