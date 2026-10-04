import type { ServiceCopy } from "./types";

// Pillar SHELL for /invoicenow-singapore/ (build-order step 1).
// Structure only. SEO team replaces every TODO with final copy, and every
// [VERIFY ...] with an IRAS/IMDA/MOF-confirmed fact (brief section 7) before
// this ships. Keyword "InvoiceNow" stays in title, H1, and the H2s.
export const INVOICENOW_COPY: ServiceCopy = {
  meta: {
    title: "InvoiceNow Singapore | Agentic AI Labs",
    description:
      "TODO (copy team): meta description, keyword-led, under 160 chars. InvoiceNow mandate + done-for-you setup.",
    keywords: ["invoicenow", "invoicenow singapore", "e invoicing singapore", "peppol singapore", "invoicenow gst"],
    url: "https://www.tryagentikai.com/invoicenow-singapore/",
  },
  schemaName: "InvoiceNow Setup Singapore",
  breadcrumb: "InvoiceNow",
  hero: {
    eyebrow: "INVOICENOW, SINGAPORE",
    h1a: "InvoiceNow is becoming mandatory.",
    h1b: "Be ready before the deadline.",
    sub: "TODO (copy team): one-line hero sub. The mandate is coming, here is what it means and how to be ready.",
  },
  ctaPrimary: { label: "Book a setup call", to: "/ai-clarity-workshop/" },
  ctaSecondary: { label: "Check if you are ready", to: "#" },
  // Section 2: what InvoiceNow actually is (plain language).
  answerFirst:
    "TODO (copy team): plain-language explainer of InvoiceNow. What it is, Peppol, e-invoicing, who it applies to (GST-registered). Owner words, no jargon. No AI in this block.",
  relatedProse: [
    { before: "Most of the cost of getting ready is covered, which we break down on the ", anchor: "InvoiceNow PSG grant page", to: "/invoicenow-psg-grant-singapore/", after: "." },
  ],
  // Section 3: the deadline and who it hits (urgency). Dates VERIFIED first.
  gap: {
    eyebrow: "THE DEADLINE",
    heading: "When InvoiceNow hits, and who it hits first",
    intro: "TODO (copy team): the forced-change framing. [VERIFY: exact mandate dates and which business tiers each date hits, per IRAS.]",
    stopLabel: "If you wait",
    stopBody: "TODO (copy team): what happens if a GST-registered business ignores it until the deadline.",
    goLabel: "If you get ready now",
    goBody: "TODO (copy team): the payoff of setting up early, before the rush.",
  },
  // Section 6: we set it up for you (the offer).
  included: {
    eyebrow: "WHAT WE SET UP",
    heading: "Done-for-you InvoiceNow, start to finish",
    items: [
      { title: "InvoiceNow setup", body: "TODO (copy team)." },
      { title: "Peppol connection", body: "TODO (copy team)." },
      { title: "Invoicing automation", body: "TODO (copy team)." },
      { title: "GST paperwork flow", body: "TODO (copy team)." },
      { title: "Your existing tools", body: "TODO (copy team): wire into what they already run." },
      { title: "Grant application handled", body: "TODO (copy team): link to the PSG grant page." },
    ],
  },
  aiDiff: {
    eyebrow: "DONE-FOR-YOU, NOT A TOOL YOU LEARN",
    heading: "How this differs from buying software",
    intro: "TODO (copy team): forward-deployed framing, we run it for you.",
    rows: [
      { label: "The setup", old: "You figure out Peppol and e-invoicing alone", ours: "We set it up end to end" },
      { label: "The paperwork", old: "Manual invoicing and GST filing", ours: "Automated into one flow" },
      { label: "Who does it", old: "You learn new software", ours: "We build and run it for you" },
    ],
  },
  // Section 7: funded by PSG + incentives. Numbers VERIFIED first.
  pricing: {
    eyebrow: "FUNDED BY PSG",
    heading: "Grant-funded setup",
    price: "TODO",
    unit: "per project, starting from",
    market: "TODO (copy team): short version of the funding story. [VERIFY: PSG funding percentage and current caps for invoicing solutions, per IMDA / Enterprise Singapore.]",
    includes: [
      "TODO (copy team): what the engagement includes",
    ],
    grant: "PSG eligible. [VERIFY: current support percentage and cap before this ships. Confirm with Enterprise Singapore / IMDA.]",
    altNote: "TODO (copy team): scoping note. Deep details on the InvoiceNow PSG grant page.",
    cta: { label: "Book a setup call", to: "/ai-clarity-workshop/" },
  },
  // Section 5: how to comply (the steps).
  process: {
    eyebrow: "HOW TO COMPLY",
    heading: "The path to InvoiceNow, in order",
    steps: [
      { n: "01", title: "TODO: step one", body: "TODO (copy team): what a business does first." },
      { n: "02", title: "TODO: step two", body: "TODO (copy team)." },
      { n: "03", title: "TODO: step three", body: "TODO (copy team)." },
    ],
  },
  // Section 9: proof.
  trust: {
    eyebrow: "PROOF",
    heading: "Why trust us with this",
    items: [
      { title: "We run it ourselves", body: "TODO (copy team): dogfood, honest. No fabricated clients or stats." },
      { title: "Forward-deployed", body: "TODO (copy team)." },
    ],
  },
  // Section 10: explore / cross-links.
  crossLinks: {
    eyebrow: "EXPLORE",
    heading: "Related",
    intro: "TODO (copy team).",
    links: [
      { name: "InvoiceNow PSG grant", to: "/invoicenow-psg-grant-singapore/", desc: "Grants and funding for your setup." },
      { name: "AI Automation Singapore", to: "/ai-automation-singapore/", desc: "Automate the rest of the busywork." },
      { name: "Lead Generation Agency Singapore", to: "/lead-generation-agency-singapore/", desc: "Fill the top of the funnel too." },
    ],
  },
  // Section 4 + 8 as deep-dive H2s (what changes day to day, who this is for).
  deepDive: {
    eyebrow: "THE DETAIL",
    heading: "What to know before the deadline",
    sections: [
      { h2: "What changes in your day to day", body: ["TODO (copy team): GST filing, paperwork, late invoice payments, cashflow. Their words."] },
      { h2: "Who this is for", body: ["TODO (copy team): GST-registered SG SMEs, F&B, trades, services drowning in invoicing paperwork."] },
    ],
  },
  // Section 11: FAQ (own-URL long-tail capture).
  faqs: [
    { question: "Is InvoiceNow mandatory?", answer: "TODO (copy team). [VERIFY against IRAS.]" },
    { question: "When is the InvoiceNow deadline?", answer: "TODO (copy team). [VERIFY exact dates against IRAS.]" },
    { question: "What is Peppol?", answer: "TODO (copy team)." },
    { question: "Do I need new software?", answer: "TODO (copy team)." },
    { question: "Can I get a grant for InvoiceNow?", answer: "TODO (copy team). [VERIFY PSG details.]" },
    { question: "What does setup cost?", answer: "TODO (copy team)." },
  ],
  final: {
    eyebrow: "GET READY",
    heading: "Be InvoiceNow-ready before the deadline",
    sub: "TODO (copy team): final CTA line.",
    ctaA: { label: "Book a setup call", to: "/ai-clarity-workshop/" },
    ctaB: { label: "Check your readiness", to: "#" },
  },
  // sources added after section-7 facts are verified and cited.
};
