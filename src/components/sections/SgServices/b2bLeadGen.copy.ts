import type { ServiceCopy } from "./types";

// B2B Lead Generation page. Primary: b2b lead generation singapore (vol 20,
// CPC ~S$20) + b2b marketing agency / company / firm singapore (vol 70-110,
// KD 0-8). Secondary intent: the thing this replaces, telemarketing / cold
// calling / telesales / appointment setting. Wedge: incumbents sell lead
// LISTS or hand off a report, self-serve tools sell an outreach product; we
// are a forward-deployed engineering team paid on pipeline, accountable for
// booked meetings, built inside the client's own stack. Page must survive the
// silent credibility check by SG B2B buyers who read outbound but do not reply.
export const B2B_LEAD_GEN_COPY: ServiceCopy = {
  meta: {
    title: "B2B Lead Generation Singapore | Booked Meetings, Not Lead Lists",
    description:
      "A B2B lead generation team in Singapore that is paid on pipeline and accountable for booked meetings, not a lead list or a report. An AI-SDR system built inside your stack. Starting from S$100 a month, PSG eligible.",
    keywords: ["b2b lead generation singapore", "b2b marketing agency singapore", "b2b marketing company singapore", "b2b marketing firm singapore", "appointment setting singapore"],
    url: "https://www.tryagentikai.com/b2b-lead-generation-singapore/",
  },
  schemaName: "B2B Lead Generation Singapore",
  breadcrumb: "B2B Lead Generation Singapore",
  hero: {
    eyebrow: "B2B LEAD GENERATION, SINGAPORE",
    h1a: "A lead list is not pipeline.",
    h1b: "We are paid on the meeting.",
    sub: "Most B2B lead generation in Singapore ends with a list or a report handed to your sales team. We are a forward-deployed engineering team that finds and qualifies your buyers, responds in seconds, and books the meeting, inside your own stack. Paid on pipeline, not on volume.",
  },
  ctaPrimary: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
  ctaSecondary: { label: "See how it works", to: "#" },
  answerFirst:
    "A B2B lead generation agency in Singapore is meant to fill your sales team's calendar with qualified meetings. The problem is that most sell you a lead list or a monthly report and call it done, so the work of contacting, chasing, and qualifying still lands on your team, and it goes cold. We work differently. We are a forward-deployed engineering team paid on pipeline: we find and enrich your B2B buyers, run an AI-SDR that answers in seconds, qualifies against your real criteria, and books the meeting, all inside your own CRM and tools. You get booked calls, not a spreadsheet.",
  gap: {
    eyebrow: "WHERE MOST LEAD GEN STOPS",
    heading: "A list is where they finish and where the pipeline leaks",
    intro: "Any agency can scrape contacts and send you a list, or run a report and call it a campaign. Almost none stay accountable for the meeting that actually matters.",
    stopLabel: "What they deliver",
    stopBody: "A list of names, or a monthly report on activity. The follow up, the qualification, and the booking still land on your team, and Singapore buyers who read the outbound but do not reply quietly go cold.",
    goLabel: "What we deliver",
    goBody: "The same sourcing and enrichment, plus the system that answers in seconds, qualifies against your criteria, and books the meeting in your calendar. You are measured on pipeline, so you get meetings, not a spreadsheet of leads to chase.",
  },
  included: {
    eyebrow: "WHAT WE DO",
    heading: "B2B pipeline, built end to end",
    items: [
      { title: "Find and enrich buyers", body: "We source your ideal B2B accounts and contacts, verify them, and enrich with the signals your sales team needs to open a real conversation." },
      { title: "AI-SDR outreach", body: "Multichannel outreach across email, LinkedIn, SMS, and voice, run from one system so no channel is left cold." },
      { title: "Speed to lead", body: "Every reply and inbound is answered in seconds, because with B2B buyers the fastest credible response wins the conversation." },
      { title: "Qualification against your criteria", body: "Leads are qualified against your real fit and intent rules, so your team only sees meetings worth taking." },
      { title: "Appointment booking", body: "The qualified buyer is put straight on your calendar, replacing the manual back and forth of appointment setting and telemarketing." },
      { title: "Built in your stack", body: "We build and run it inside your own tools, GoHighLevel, n8n, and your CRM, so the pipeline and the data stay yours." },
    ],
  },
  aiDiff: {
    eyebrow: "FORWARD-DEPLOYED, NOT A LIST VENDOR",
    heading: "How we differ from a lead list or a self-serve tool",
    intro: "We are measured on booked meetings, so we cannot stop at a list or hand you a tool and walk away.",
    rows: [
      { label: "The deliverable", old: "A lead list or a report", ours: "Booked meetings in your calendar" },
      { label: "Who does the work", old: "Your team chases the list", ours: "We run it, forward-deployed" },
      { label: "Where it lives", old: "A tool you log into", ours: "Inside your own CRM and stack" },
      { label: "What we are paid on", old: "Volume of leads", ours: "Pipeline and booked meetings" },
    ],
  },
  pricing: {
    eyebrow: "PRICING",
    heading: "Honest pricing, below the market",
    price: "S$100",
    unit: "per month, starting from",
    market: "B2B lead generation and appointment setting retainers in Singapore usually start well into the thousands a month. We open far lower so you can start small and scale only as it books meetings.",
    includes: [
      "Buyer sourcing and enrichment",
      "AI-SDR outreach across email, LinkedIn, SMS, and voice",
      "Speed to lead: replies answered in seconds",
      "Qualification and appointment booking built in",
      "Built and run inside your own CRM and stack",
      "PDPA and Do Not Call compliant follow up",
      "No lock-in contract",
    ],
    grant: "PSG eligible. Qualifying Singapore SMEs may receive up to 50 percent support, subject to IMDA approval. Confirm current eligibility with Enterprise Singapore.",
    altNote: "S$100 is a real starting point, a lean first step or a paid consultation, not the full program. The actual engagement is scoped against your goals after a short call, and because we work forward-deployed and are accountable for pipeline, the real pricing tracks the meetings we book rather than a fixed list size. You only move up when it is producing meetings.",
    cta: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
  },
  process: {
    eyebrow: "HOW WE START",
    heading: "Map the buyer, then build the machine",
    steps: [
      { n: "01", title: "Define the buyer", body: "We map your ideal customer, your fit and intent criteria, and the exact outcome that counts as a booked meeting, then scope the build." },
      { n: "02", title: "Build and connect", body: "We build the sourcing, AI-SDR outreach, qualification, and booking inside your own CRM and tools, wired for speed to lead." },
      { n: "03", title: "Run and optimise", body: "We run it against booked meetings, cut what does not convert, and scale the messaging and channels that fill the calendar." },
    ],
  },
  trust: {
    eyebrow: "BUILT FOR SINGAPORE",
    heading: "Local, compliant, no lock-in",
    items: [
      { title: "PSG eligible", body: "Scoped to fit Enterprise Singapore schemes. Qualifying SMEs may receive up to 50 percent support, subject to IMDA approval." },
      { title: "PDPA and Do Not Call", body: "Follow up respects consent, quiet hours, and the Singapore Do Not Call Registry under the PDPA. This is what the rules require, not legal advice." },
      { title: "Survives the silent check", body: "Singapore B2B buyers read your outbound, then quietly check your site and LinkedIn before replying. We build the credibility that turns silent researchers into meetings." },
      { title: "We run it, you own it", body: "You keep the CRM, the system, and the data, and can take the whole pipeline in-house whenever you want." },
    ],
  },
  crossLinks: {
    eyebrow: "PART OF THE SYSTEM",
    heading: "Sourcing is the start of the journey",
    intro: "Finding buyers fills the top of the funnel. These pages are what turns an outbound touch into booked revenue.",
    links: [
      { name: "Lead Generation Singapore", to: "/lead-generation-agency-singapore/", desc: "The broader system that turns interest into booked calls." },
      { name: "Follow Up Automation", to: "/follow-up-automation/", desc: "Answer every reply in seconds, until they book or opt out." },
      { name: "Appointment Booking AI", to: "/appointment-booking-ai/", desc: "Put qualified buyers straight onto your calendar." },
      { name: "AI Implementation Partner", to: "/ai-implementation-partner-singapore/", desc: "We build and run the whole thing, inside your tools." },
    ],
  },
  faqs: [
    { question: "What does a B2B lead generation agency in Singapore actually do?", answer: "It is meant to fill your sales team's calendar with qualified meetings. Most stop at a lead list or a monthly report, which leaves your team to chase, qualify, and book. We stay accountable for the meeting itself: we source and enrich buyers, run the outreach, qualify, and book the call inside your own stack." },
    { question: "How is this different from buying a lead list?", answer: "A list is a static file of names that your team still has to work, and most of it goes cold before anyone calls. We do the working, not just the sourcing: outreach, speed to lead, qualification, and booking, and we are paid on pipeline, so a list that never converts is our problem, not yours." },
    { question: "How is this different from a self-serve AI outreach tool?", answer: "A self-serve tool hands you software and leaves you to run it, configure it, and fix it. We are forward-deployed: we build and operate the system inside your own CRM and tools and stay accountable for booked meetings, so you get the outcome rather than another dashboard to manage." },
    { question: "Is this a replacement for telemarketing and cold calling?", answer: "Yes. It replaces slow, hard to scale, and often non-compliant telemarketing, cold calling, and appointment setting with an AI-SDR system that finds your buyers, responds in seconds, qualifies, and books, while respecting consent and the Do Not Call Registry." },
    { question: "My B2B buyers never reply to outbound. How does this help?", answer: "That is the Singapore pattern: buyers read the outbound, do not reply, then check your website and LinkedIn before they engage. We build outreach and a credibility trail that survives that silent check, and answer in seconds the moment a silent researcher does reach out, so the interest actually converts to a meeting." },
    { question: "Do you work inside our existing CRM and tools?", answer: "Yes. We build and run everything inside your own stack, including GoHighLevel, n8n, and your CRM, so the pipeline, the workflows, and the data stay yours and can be taken in-house at any time." },
    { question: "How does your follow up stay compliant with PDPA in Singapore?", answer: "Follow up respects consent, quiet hours, and the Singapore Do Not Call Registry under the PDPA. We build these rules into the system rather than bolting them on. This is what the rules require, not legal advice, so confirm specifics with your own compliance team." },
    { question: "Is B2B lead generation PSG grant eligible, and do you lock me in?", answer: "This work can be PSG eligible for qualifying Singapore SMEs, commonly up to 50 percent support, subject to IMDA approval. Confirm current eligibility with Enterprise Singapore. And no, we do not lock you into a contract. If it is not booking meetings, you walk." },
  ],
  final: {
    eyebrow: "STOP BUYING LISTS THAT GO COLD",
    heading: "Turn outbound into booked meetings, not a spreadsheet to chase.",
    sub: "An AI-native B2B lead generation team in Singapore, paid on pipeline and accountable for the meeting.",
    ctaA: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
    ctaB: { label: "See lead generation", to: "/lead-generation-agency-singapore/" },
  },
};
