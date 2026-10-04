import type { ServiceCopy } from "./types";

// Support child SHELL for /invoicenow-psg-grant-singapore/ (build-order step 1).
// Thin, grant-intent page. Links UP into the pillar. SEO team fills TODOs;
// every [VERIFY ...] must be confirmed on IMDA / Enterprise Singapore / IRAS /
// MOF before it ships (brief section 7). Keyword "PSG grant" in title + H1.
export const INVOICENOW_PSG_GRANT_COPY: ServiceCopy = {
  meta: {
    title: "PSG Grant for InvoiceNow Singapore | Agentic AI Labs",
    description:
      "TODO (copy team): meta description. What the PSG grant covers for InvoiceNow / e-invoicing, eligibility, and how we handle the application.",
    keywords: ["psg grant", "psg grant invoicing", "invoicenow grant", "e invoicing grant singapore"],
    url: "https://www.tryagentikai.com/invoicenow-psg-grant-singapore/",
  },
  schemaName: "PSG Grant for InvoiceNow",
  breadcrumb: "InvoiceNow PSG Grant",
  hero: {
    eyebrow: "PSG GRANT, SINGAPORE",
    h1a: "Fund your InvoiceNow setup",
    h1b: "with the PSG grant.",
    sub: "TODO (copy team): one-line sub. Most of the cost is pre-approved funding.",
  },
  ctaPrimary: { label: "Book a setup call", to: "/ai-clarity-workshop/" },
  ctaSecondary: { label: "See the pillar", to: "/invoicenow-singapore/" },
  answerFirst:
    "TODO (copy team): what the PSG grant covers for invoicing / InvoiceNow solutions, in plain words. [VERIFY current scope + percentage with IMDA / Enterprise Singapore.]",
  relatedProse: [
    { before: "This page sits under the full ", anchor: "InvoiceNow Singapore guide", to: "/invoicenow-singapore/", after: ", which covers the mandate and the setup." },
  ],
  gap: {
    eyebrow: "ELIGIBILITY",
    heading: "Who qualifies, and for how much",
    intro: "TODO (copy team). [VERIFY eligibility criteria + funding cap.]",
    stopLabel: "Without the grant",
    stopBody: "TODO (copy team): paying full price out of pocket.",
    goLabel: "With the grant",
    goBody: "TODO (copy team): pre-approved funding covers most of it.",
  },
  included: {
    eyebrow: "WHAT WE HANDLE",
    heading: "The grant application, done for you",
    items: [
      { title: "Eligibility check", body: "TODO (copy team)." },
      { title: "Application paperwork", body: "TODO (copy team)." },
      { title: "InvoiceNow setup", body: "TODO (copy team): link up to the pillar." },
    ],
  },
  aiDiff: {
    eyebrow: "HOW IT WORKS",
    heading: "From application to live setup",
    intro: "TODO (copy team).",
    rows: [
      { label: "The grant", old: "You navigate PSG alone", ours: "We handle the application" },
      { label: "The setup", old: "Separate vendor", ours: "Same team sets up InvoiceNow" },
    ],
  },
  pricing: {
    eyebrow: "FUNDING",
    heading: "What the grant covers",
    price: "TODO",
    unit: "funded portion",
    market: "TODO (copy team). [VERIFY: PSG support percentage + current cap for invoicing solutions.]",
    includes: ["TODO (copy team)."],
    grant: "PSG eligible. [VERIFY percentage + cap before ship.]",
    cta: { label: "Book a setup call", to: "/ai-clarity-workshop/" },
  },
  process: {
    eyebrow: "THE STEPS",
    heading: "How we get you funded and set up",
    steps: [
      { n: "01", title: "TODO: check eligibility", body: "TODO (copy team)." },
      { n: "02", title: "TODO: apply", body: "TODO (copy team)." },
      { n: "03", title: "TODO: set up InvoiceNow", body: "TODO (copy team)." },
    ],
  },
  trust: {
    eyebrow: "PROOF",
    heading: "Why trust us",
    items: [{ title: "Honest, forward-deployed", body: "TODO (copy team). No fabricated figures." }],
  },
  crossLinks: {
    eyebrow: "EXPLORE",
    heading: "Related",
    intro: "TODO (copy team).",
    links: [
      { name: "InvoiceNow Singapore", to: "/invoicenow-singapore/", desc: "The full mandate and setup guide." },
      { name: "AI Automation Singapore", to: "/ai-automation-singapore/", desc: "Automate the rest." },
    ],
  },
  faqs: [
    { question: "What does the PSG grant cover for invoicing?", answer: "TODO (copy team). [VERIFY with IMDA.]" },
    { question: "Am I eligible for the PSG grant?", answer: "TODO (copy team). [VERIFY criteria.]" },
    { question: "How much is funded?", answer: "TODO (copy team). [VERIFY percentage + cap.]" },
    { question: "Is there a tax incentive too?", answer: "TODO (copy team). ONLY include once the claim is verified on an official MOF / IRAS source." },
    { question: "How do you handle the application?", answer: "TODO (copy team)." },
  ],
  final: {
    eyebrow: "GET FUNDED",
    heading: "Set up InvoiceNow with the grant behind you",
    sub: "TODO (copy team).",
    ctaA: { label: "Book a setup call", to: "/ai-clarity-workshop/" },
    ctaB: { label: "Read the InvoiceNow guide", to: "/invoicenow-singapore/" },
  },
};
