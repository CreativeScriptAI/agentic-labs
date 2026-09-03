import type { ServiceCopy } from "./types";

// Lead Generation for B2B SaaS Singapore page. Narrower than the generic
// b2b-lead-generation page: the unit of value is a demo booked, a trial
// activated, or a product-qualified lead routed to sales fast, not a raw MQL.
// Anchored to a product-led plus sales-led hybrid motion. Wedge: a sign-up is
// not a customer and an MQL is not pipeline; we are paid on the demo and the
// PQL, built and run inside the client's own SaaS stack.
export const B2B_SAAS_LEADS_COPY: ServiceCopy = {
  meta: {
    title: "Lead Generation for B2B SaaS Singapore | Demos Booked",
    description:
      "Lead generation for B2B SaaS in Singapore. We turn trials, sign-ups, and demo requests into booked demos and product-qualified leads, built and run inside your own stack. From S$100 a month, PSG eligible.",
    keywords: [
      "lead generation for b2b saas singapore",
      "saas marketing singapore",
      "demand generation singapore",
      "saas demo bookings",
      "product qualified lead singapore",
    ],
    url: "https://www.tryagentikai.com/lead-generation-for-b2b-saas-singapore/",
  },
  schemaName: "Lead Generation for B2B SaaS Singapore",
  breadcrumb: "Lead Generation for B2B SaaS Singapore",
  hero: {
    eyebrow: "LEAD GENERATION FOR B2B SAAS, SINGAPORE",
    h1a: "A sign-up is not a customer.",
    h1b: "An MQL is not pipeline.",
    sub: "Most lead-gen agencies count leads and route unqualified sign-ups to your reps. We are paid on the demo booked and the product-qualified lead: trials activated, intent answered in seconds, and PQLs routed to sales fast, built and run inside your own SaaS stack.",
  },
  ctaPrimary: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
  ctaSecondary: { label: "See how it works", to: "#" },
  answerFirst:
    "Lead generation for a B2B SaaS company in Singapore is not about buying a list or counting ebook downloads. It is about turning trials, sign-ups, and demo requests into booked demos and product-qualified leads your reps can actually close. We define your ICP and what counts as a PQL, meet every new trial the moment intent is highest, answer inbound demo requests in seconds, and run signal-based outbound to the accounts you want, all wired into your product usage data and your CRM. The result is pipeline measured in held demos and activated trials, not a volume metric that looks fine while the funnel stays empty.",
  relatedProse: [
    { before: "This page is the SaaS view of our ", anchor: "lead generation agency, Singapore", to: "/lead-generation-agency-singapore/", after: " work, the system that turns trials and demo requests into held demos and PQLs." },
    { before: "Signal-based outbound to the accounts you want runs on our ", anchor: "B2B lead generation in Singapore", to: "/b2b-lead-generation-singapore/", after: " playbook, built around your ICP rather than a bought list." },
    { before: "Inbound demo requests move into ", anchor: "appointment setting in Singapore", to: "/appointment-setting-singapore/", after: " so a rep meets a booked, briefed prospect instead of a callback queue." },
    { before: "Every trial and enquiry passes through ", anchor: "lead qualification", to: "/lead-qualification/", after: " against what counts as a PQL, so reps spend time on accounts they can close." },
  ],
  gap: {
    eyebrow: "WHERE THE FUNNEL LEAKS",
    heading: "The sign-up arrives and then goes quiet",
    intro: "Any agency can send you more form fills. Almost none understand trials, activation, and PQLs, so the intent leaks in the hours after someone raises a hand.",
    stopLabel: "What usually happens",
    stopBody: "A trial signs up, pokes around, and vanishes. A demo form emails back we will be in touch, then a two-day gap, then a no-show. Marketing counts leads that sales refuses to call. Product usage data that shows real intent never triggers a single sales action.",
    goLabel: "What we deliver",
    goBody: "Every trial and demo request met in seconds on the channel they use, qualified against your ICP, and put on the calendar. Product signals like activation or hitting a plan limit route a PQL straight to sales. Pipeline you can measure in held demos, not untouched form fills.",
  },
  included: {
    eyebrow: "WHAT WE DO",
    heading: "The SaaS pipeline engine, built and run",
    items: [
      { title: "Define your ICP and PQL rules", body: "We map your ideal SaaS buyer, your fit and intent criteria, and what actually counts as a product-qualified lead, so sales only spends time on accounts that can close." },
      { title: "Trial and sign-up activation", body: "Every new trial or sign-up is met in seconds with a relevant, non-spammy nudge and a clear path to a demo, on the channel they already use, so hot trials do not go cold in silence." },
      { title: "Demo booking, answered in seconds", body: "Inbound book a demo and contact us requests are qualified and put straight on the calendar, with reminders that cut no-shows, so ad and inbound intent turns into held demos." },
      { title: "Signal-based outbound", body: "Multichannel outreach by email, LinkedIn, and where consented SMS or WhatsApp, to accounts that match your ICP, run from one system so no channel goes cold and pipeline comes from accounts you actually want." },
      { title: "Long-cycle nurture", body: "A follow-up cadence that keeps in touch with buyers who are researching but not ready, until they book, reply, or opt out, so you capture the majority who were not ready on day one." },
      { title: "Built inside your own stack", body: "We build the whole engine inside your CRM and tools such as GoHighLevel, n8n, HubSpot, or Pipedrive, wired to your product usage signals, so the pipeline, data, and system stay yours." },
    ],
  },
  aiDiff: {
    eyebrow: "SAAS-FLUENT, NOT A LEAD FACTORY",
    heading: "How we differ from a generic lead-gen agency",
    intro: "We speak trials, activation, and PQLs, and we are measured on booked demos, so we cannot stop at a form fill.",
    rows: [
      { label: "The unit of value", old: "A raw MQL or a scraped list", ours: "A booked demo and a routed PQL" },
      { label: "After the sign-up", old: "The trial is your problem", ours: "Answered in seconds and activated" },
      { label: "Routing", old: "Every lead treated the same", ours: "Routed on product usage signal" },
      { label: "The motion", old: "Generic outbound only", ours: "Product-led and sales-led hybrid" },
      { label: "Where it lives", old: "A black box you cannot see", ours: "Your CRM, your tools, you own it" },
    ],
  },
  pricing: {
    eyebrow: "PRICING",
    heading: "Honest pricing, built to start lean",
    price: "S$100",
    unit: "per month, starting from",
    market: "SaaS demand-gen retainers in Singapore usually start well into the thousands a month. We open far lower so an early-stage SaaS team can start small and scale only as the demos come in.",
    includes: [
      "ICP and PQL definition",
      "Trial and sign-up activation follow-up",
      "Demo booking with reminders that cut no-shows",
      "Signal-based outbound to your target accounts",
      "Long-cycle nurture for the silent majority",
      "Built inside your CRM and product usage data",
      "No lock-in contract",
    ],
    grant: "PSG eligible. Qualifying Singapore SMEs may receive up to 50 percent support, subject to IMDA approval. Confirm current eligibility with Enterprise Singapore.",
    altNote: "S$100 is a lean starting point, a first step or a paid consultation, not the full program. We scope the real engagement against your motion, your stack, and your PQL definition after a short call, and you only move up as it produces booked demos.",
    cta: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
  },
  process: {
    eyebrow: "HOW WE START",
    heading: "Map the motion, then build the engine",
    steps: [
      { n: "01", title: "ICP and stack audit", body: "We map your ideal buyer, define what counts as a PQL, and audit your CRM, product signals, and where intent is leaking today." },
      { n: "02", title: "Build and connect", body: "We build activation follow-up, demo booking, outbound, and nurture inside your own tools, wired to your product usage data." },
      { n: "03", title: "Run and tune", body: "We run it against booked demos and activated trials, cut what wastes rep time, and scale the plays that put PQLs on the calendar." },
    ],
  },
  trust: {
    eyebrow: "BUILT FOR SINGAPORE SAAS",
    heading: "Local, compliant, no lock-in",
    items: [
      { title: "PSG eligible", body: "Scoped to fit Enterprise Singapore schemes. Qualifying SMEs may receive up to 50 percent support, subject to IMDA approval." },
      { title: "PDPA and Do Not Call", body: "Outbound and follow-up respect consent, quiet hours, and the Singapore Do Not Call Registry, with a clear opt-out. This is what the rules require, not legal advice, and broader jurisdictions are scoped per engagement." },
      { title: "No lock-in", body: "No hostage contract. If the engine is not producing booked demos and PQLs, you walk." },
      { title: "We run it, you own it", body: "You keep the CRM, the automations, and the data, and can take the whole engine in-house anytime." },
    ],
  },
  crossLinks: {
    eyebrow: "PART OF THE SYSTEM",
    heading: "The SaaS engine, connected",
    intro: "This page is the SaaS-specific cut of our broader pipeline work. These are the pieces that turn a trial into a held demo.",
    links: [
      { name: "B2B Lead Generation Singapore", to: "/b2b-lead-generation-singapore/", desc: "The broader booked-meetings engine this SaaS page is a vertical of." },
      { name: "Appointment Setting Singapore", to: "/appointment-setting-singapore/", desc: "The meeting-booking mechanism behind every held demo." },
      { name: "Lead Qualification", to: "/lead-qualification/", desc: "The ICP and PQL layer so reps only see leads that can close." },
    ],
  },
  faqs: [
    { question: "How do you generate leads for a B2B SaaS company, versus just any business?", answer: "We start by defining your ICP and what counts as a product-qualified lead, then meet every trial and sign-up at the moment of intent, answer inbound demo requests in seconds, and run signal-based outbound to accounts that fit. Everything is tied to SaaS metrics like activated trials, demos booked, and demo-to-close, not raw lead counts that look fine while pipeline stays empty." },
    { question: "What is a product-qualified lead (PQL) and how do you route one to my sales team?", answer: "A PQL is a lead qualified by product usage rather than a form fill. An MQL downloaded an ebook or signed up for a webinar. A PQL activated the product, hit a key feature, invited a teammate, or is near a plan limit, so they are showing real buying intent. We wire those product signals into your CRM so that when someone crosses your PQL threshold, it triggers a sales action or a demo offer automatically, instead of sitting invisible inside the product." },
    { question: "Can you get us more demo bookings and reduce no-shows?", answer: "Yes, and that is the core outcome we are measured on. Inbound book a demo and contact us requests are answered in seconds, qualified against your ICP, and put straight on the calendar, because the fastest credible response wins. Automated reminders on the channel the buyer uses cut the no-show rate, so intent turns into demos that are actually held." },
    { question: "Do you work with product-led (free trial or freemium) or sales-led motions, or both?", answer: "Both, and most SaaS teams we work with are a hybrid. For a product-led motion, activation follow-up meets each new trial or sign-up, nudges them toward the aha moment, and offers a demo when product signals say they are ready. For a sales-led motion, we run ICP-matched outbound and qualify inbound into booked demos. The two run from one system so a self-serve trial and a target account are handled with the same speed and the same rules." },
    { question: "Will this connect to our existing stack (HubSpot, Pipedrive, GoHighLevel, or our product usage data)?", answer: "Yes. We build the whole engine inside your own tools rather than a separate platform you have to log into. We connect to your CRM, wire in your product usage signals, and use glue like n8n or Zapier where it fits. The pipeline, the automations, and the data stay yours, and you can take the whole thing in-house whenever you want." },
    { question: "How is this different from a generic lead-gen agency or an offshore SDR team?", answer: "A generic agency hands over lists or dials and treats every lead the same, so unqualified sign-ups land on your reps. A performance marketing agency optimizes clicks and sign-up volume and hands off at the form, so intent leaks after the click. An offshore SDR team is headcount you manage with scripted dials and PDPA and DNC risk. We are a forward-deployed engineering team, paid on demos booked and PQLs, routing on product signal, and running a system inside your own stack with consent and DNC handling built in." },
    { question: "How do you handle Singapore PDPA and the Do Not Call rules for outreach?", answer: "Outbound and follow-up of a marketing nature respect consent, quiet hours, and Do Not Call Registry screening, with a clear opt-out on every message. People who start a trial gave you their data for a purpose, so we keep follow-up within reasonable, consented use and frame it as helpful and expected, not cold spam. This is what the rules require, not legal advice. SaaS often sells across SEA and may touch buyers under other regimes such as GDPR for EU contacts, so we keep the on-page scope to Singapore PDPA and DNC and scope broader jurisdictions per engagement. Confirm specifics with a qualified advisor." },
    { question: "What does it cost, and is it PSG grant eligible for a Singapore SaaS startup?", answer: "Pricing starts from S$100 a month as a lean starting point, either a first step or a paid consultation, with the real engagement scoped against your motion and stack after a short call. It is PSG eligible, and qualifying Singapore SMEs may receive up to 50 percent support, subject to IMDA approval. Confirm current eligibility with Enterprise Singapore. There is no lock-in contract." },
  ],
  final: {
    eyebrow: "STOP LOSING TRIALS TO SILENCE",
    heading: "Turn trials and sign-ups into booked demos, not a backlog nobody works.",
    sub: "Lead generation for B2B SaaS in Singapore, paid on the demo booked and the PQL, built and run inside your own stack.",
    ctaA: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
    ctaB: { label: "See B2B lead generation", to: "/b2b-lead-generation-singapore/" },
  },
  sources: [
    { label: "Personal Data Protection Commission: PDPA and the Do Not Call Registry", href: "https://www.pdpc.gov.sg/" },
  ],
};
