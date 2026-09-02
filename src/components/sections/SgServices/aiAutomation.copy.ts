import type { ServiceCopy } from "./types";

// AI Automation Singapore page. Primary: ai automation / ai and automation
// (vol 390, KD 17, CPC ~S$10), the one ownable category term. This is the hub
// page that sits above the concrete systems (lead gen, booking, follow up,
// qualification). Intent trap: most searchers want to play with a bot; we
// write for the buyer hiring an implementation partner to build automation
// into their business. Forward-deployed, built inside your stack, accountable.
export const AI_AUTOMATION_COPY: ServiceCopy = {
  meta: {
    title: "AI Automation Singapore | Built In, Outcome Owned",
    description:
      "AI automation in Singapore, built and run inside your own tools by a forward-deployed engineering team. Lead capture, instant response, booking, and back-office workflows, accountable for the outcome. Starting from S$100 a month, PSG eligible.",
    keywords: ["ai automation", "ai and automation", "ai automation agency singapore", "business automation singapore", "ai for automation"],
    url: "https://www.tryagentikai.com/ai-automation-singapore/",
  },
  schemaName: "AI Automation Singapore",
  breadcrumb: "AI Automation Singapore",
  hero: {
    eyebrow: "AI AUTOMATION, SINGAPORE",
    h1a: "A tool you have to run is more work.",
    h1b: "We build the automation into your business.",
    sub: "Most AI automation is a product you sign up for and then have to operate yourself. We are a forward-deployed engineering team. We embed, build AI and automation into the tools you already use, ship it, and stay accountable for the outcome.",
  },
  ctaPrimary: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
  ctaSecondary: { label: "See how it works", to: "#" },
  answerFirst:
    "AI automation means using AI to run the repetitive work in your business without a person driving each step: capturing and enriching leads, answering enquiries in seconds, qualifying and booking, chasing follow ups, and moving data between your tools. Most options are a self-serve product you still have to set up and run. We are different. We embed as your implementation partner, build the automation inside your existing stack, GoHighLevel, n8n, your CRM, WhatsApp, and stay accountable for the result: booked calls, hours saved, faster response. Done for you, not another dashboard to manage.",
  gap: {
    eyebrow: "WHERE MOST AI AUTOMATION STOPS",
    heading: "A product you have to operate is not automation off your plate",
    intro: "Buying an AI automation tool is easy. Getting it wired into your business, producing outcomes, and staying that way is the hard part almost nobody owns.",
    stopLabel: "What a tool gives you",
    stopBody: "A login, a template library, and a setup guide. You still have to design the workflows, connect your systems, keep it running, and fix it when it breaks. The work moved, it did not go away.",
    goLabel: "What we deliver",
    goBody: "We build the automation into the tools you already run, connect it to your data, and stay on the hook for the outcome. You get booked calls and hours back, not a new piece of software to babysit.",
  },
  included: {
    eyebrow: "WHAT WE AUTOMATE",
    heading: "The work that should not need a person",
    items: [
      { title: "Lead capture and enrichment", body: "Every enquiry from every channel captured, deduplicated, and enriched, so a real record lands in your CRM instead of a name in an inbox." },
      { title: "Speed to lead response", body: "New leads answered in seconds by voice, SMS, WhatsApp, or chat, because the fastest credible response wins the deal." },
      { title: "Qualification and booking", body: "Leads qualified against your criteria and put on the calendar, so your team only sees meetings worth taking." },
      { title: "Follow up sequences", body: "Persistent, human follow up that runs until they reply or book, so no lead goes cold because someone was busy." },
      { title: "Back-office workflows", body: "Data entry, routing, reminders, and reporting automated, so the admin that eats your week runs itself in the background." },
      { title: "CRM and tool integration", body: "Your GoHighLevel, n8n, CRM, and WhatsApp wired into one system, so nothing falls between tools and everything is tracked." },
    ],
  },
  aiDiff: {
    eyebrow: "A PARTNER, NOT A PRODUCT",
    heading: "How we differ from a self-serve automation tool",
    intro: "We are measured on the outcome, so we cannot hand you a login and walk away.",
    rows: [
      { label: "What you get", old: "Software and a setup guide", ours: "A system built and run for you" },
      { label: "Who does the work", old: "You configure and maintain it", ours: "We embed, build, and stay accountable" },
      { label: "Where it lives", old: "Another dashboard to log into", ours: "Inside the tools you already use" },
      { label: "The measure", old: "Features shipped", ours: "Booked calls and hours saved" },
    ],
  },
  pricing: {
    eyebrow: "PRICING",
    heading: "Honest pricing, below the market",
    price: "S$100",
    unit: "per month, starting from",
    market: "Custom automation builds in Singapore usually start in the thousands. We open far lower so you can start with one workflow and scale only as it earns its place.",
    includes: [
      "Automation built inside your existing tools",
      "Lead capture, response, qualification, and booking",
      "Follow up sequences that run until they reply",
      "Back-office workflow automation",
      "CRM and tool integration, tracked end to end",
      "No lock-in contract",
    ],
    grant: "PSG eligible. Qualifying Singapore SMEs may receive up to 50 percent support, subject to IMDA approval. Confirm current eligibility with Enterprise Singapore.",
    altNote: "S$100 is a real starting point, a lean first step or a paid consultation, not the full build. We scope the actual engagement against your goals after a short call, and you only move up when it is saving hours and booking calls. Larger automation programs are priced to the scope we agree, with no hostage contract.",
    cta: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
  },
  process: {
    eyebrow: "HOW WE START",
    heading: "Map the manual work, then build it out",
    steps: [
      { n: "01", title: "Map the workflow", body: "We sit with your team, map where the manual work and the leaks are, and pick the automation that pays back fastest." },
      { n: "02", title: "Build and connect", body: "We build the automation into your existing tools and wire in capture, response, qualification, and booking, so the work flows on its own." },
      { n: "03", title: "Run and own it", body: "We run it against real outcomes, hours saved and calls booked, fix what breaks, and scale what works. You keep the system and the data." },
    ],
  },
  trust: {
    eyebrow: "BUILT FOR SINGAPORE",
    heading: "Local, compliant, no lock-in",
    items: [
      { title: "PSG eligible", body: "Scoped to fit Enterprise Singapore schemes. Qualifying SMEs may receive up to 50 percent support, subject to IMDA approval." },
      { title: "PDPA and Do Not Call", body: "Automated follow up respects consent, quiet hours, and the Singapore Do Not Call Registry. This is what the rules require, not legal advice." },
      { title: "No lock-in", body: "No hostage contract. If the automation is not saving hours or booking calls, you walk." },
      { title: "We run it, you own it", body: "You keep the tools, the workflows, and the data, and can take it in-house whenever you want." },
    ],
  },
  crossLinks: {
    eyebrow: "PART OF THE SYSTEM",
    heading: "AI automation is the umbrella, these are the systems",
    intro: "Automation is the category. These are the concrete systems we build under it, each one a piece of the same machine.",
    links: [
      { name: "Lead Generation Singapore", to: "/lead-generation-agency-singapore/", desc: "The system that turns interest into booked calls." },
      { name: "Appointment Booking AI", to: "/appointment-booking-ai/", desc: "Qualified leads put straight onto your calendar." },
      { name: "Follow Up Automation", to: "/follow-up-automation/", desc: "Answer and chase every lead until they reply or book." },
      { name: "Lead Qualification", to: "/lead-qualification/", desc: "Only meetings worth taking reach your team." },
      { name: "AI Implementation Partner", to: "/ai-implementation-partner-singapore/", desc: "We build and run the whole thing, inside your tools." },
    ],
  },
  faqs: [
    { question: "What does AI automation actually mean for my business?", answer: "It means using AI to run the repetitive work that normally needs a person: capturing and enriching leads, answering enquiries in seconds, qualifying and booking, chasing follow ups, and moving data between your tools. Done well, it saves hours and stops leads going cold, without you having to operate it yourself." },
    { question: "How is this different from an AI automation tool I can just sign up for?", answer: "A tool gives you a login and leaves the setup, connection, and upkeep to you. We are a forward-deployed engineering team. We build the automation into the tools you already use, run it, and stay accountable for the outcome. You get the result, not another dashboard to manage." },
    { question: "Do I have to replace the tools I already use?", answer: "No. We build inside your existing stack, GoHighLevel, n8n, your CRM, WhatsApp, so the automation lives where your work already happens. Nothing to rip out, nothing new for your team to learn from scratch." },
    { question: "What can I automate first without disrupting everything?", answer: "We usually start with one high-value workflow, often speed to lead response or follow up, because it pays back fast and proves the approach. Once that is running, we scale into qualification, booking, and back-office work at your pace." },
    { question: "Is automated follow up allowed under PDPA and the Do Not Call rules?", answer: "Yes, when it is done right. Automated outreach must respect consent, quiet hours, and the Singapore Do Not Call Registry under PDPA. We build those rules into the system so follow up stays compliant. This is what the rules require, not legal advice." },
    { question: "How much does AI automation cost in Singapore?", answer: "Custom builds often start in the thousands. We open from S$100 a month as a lean first step or paid consultation, then scope the real engagement after a call. You only scale up when it is saving hours and booking calls, and there is no lock-in." },
    { question: "Is AI automation PSG grant eligible?", answer: "It can be for qualifying Singapore SMEs, commonly up to 50 percent support, subject to IMDA approval. Confirm current eligibility with Enterprise Singapore. We scope the work to fit the scheme where it applies." },
    { question: "Who owns the automation once it is built?", answer: "You do. You keep the tools, the workflows, and the data, and you can take it in-house whenever you want. We run it and stay accountable, but there is no hostage contract holding the system captive." },
  ],
  final: {
    eyebrow: "STOP OPERATING SOFTWARE, START GETTING OUTCOMES",
    heading: "Automation built into your business, accountable for the result.",
    sub: "A forward-deployed engineering team that builds AI automation inside your stack and owns the outcome.",
    ctaA: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
    ctaB: { label: "See lead generation", to: "/lead-generation-agency-singapore/" },
  },
};
