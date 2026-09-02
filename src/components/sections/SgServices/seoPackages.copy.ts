import type { ServiceCopy } from "./types";

// SEO Packages page. Primary keywords: seo packages singapore, seo pricing
// singapore, seo plans singapore, affordable seo singapore. This is the PRICING
// view, not a second SEO service page. The /seo-agency-singapore/ page owns the
// method (rankings to booked calls); this page owns the transparency wedge:
// we publish a starting price and get judged on booked calls, not rankings.
// Links UP to /seo-agency-singapore/ for the full method.
export const SEO_PACKAGES_COPY: ServiceCopy = {
  meta: {
    title: "SEO Packages Singapore | Honest Pricing, Booked Calls",
    description:
      "SEO packages in Singapore with a published starting price and no lock-in, scoped on a call and measured on booked calls, not ranking reports. Starting from S$100 a month, PSG eligible.",
    keywords: ["seo packages singapore", "seo pricing singapore", "seo plans singapore", "affordable seo singapore", "seo packages price singapore"],
    url: "https://www.tryagentikai.com/seo-packages-singapore/",
  },
  schemaName: "SEO Packages Singapore",
  breadcrumb: "SEO Packages Singapore",
  hero: {
    eyebrow: "SEO PACKAGES, SINGAPORE",
    h1a: "Everyone hides the price.",
    h1b: "We publish ours and get judged on booked calls.",
    sub: "Most Singapore SEO packages sit behind a contact us form and get measured on a ranking report. We publish a real starting point, scope the actual package on a call, and hold ourselves to the enquiries and meetings it produces.",
  },
  ctaPrimary: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
  ctaSecondary: { label: "See how it works", to: "#" },
  answerFirst:
    "SEO packages in Singapore commonly run from around S$800 to S$3,000 or more a month, and almost every provider hides the number behind a request a quote form. That is the frustration you are here for: five agency tabs open, Basic, Standard, and Premium tiers that no two vendors define the same way, and no way to tell what you actually get for the money. We publish a starting point of S$100 a month so you can start small, then scope the real package against your market and margins on a call. The full method, how we tie rankings to booked calls, lives on our SEO agency page. This page is the money question: what it costs, what is genuinely inside, and why the phone should ring.",
  gap: {
    eyebrow: "WHY THE PRICE IS HIDDEN",
    heading: "A quote gate and a ranking report are not a package",
    intro: "Most SEO packages in Singapore are priced behind a form and judged on inputs. The buyer never sees the number or the leads, only a keyword count and a position graph.",
    stopLabel: "What they sell",
    stopBody: "A hidden price, tiers described as X keywords, Y backlinks, and Z blog posts, and a six or twelve month lock-in. You commit before you know the figure, then get a ranking report while the phone stays quiet.",
    goLabel: "What we sell",
    goBody: "A published starting price, a package scoped in the open against your market, and no lock-in. Every line maps to an outcome, and reporting shows the enquiries and booked calls, not just a position that climbed.",
  },
  included: {
    eyebrow: "WHAT IS INSIDE A PACKAGE",
    heading: "Real work, laddered from input to outcome",
    items: [
      { title: "Transparent package scoping", body: "We publish a real starting price and scope the actual package on a call against your market and margins, so you know the number before you commit, not after a sales pitch." },
      { title: "Buyer-intent keyword and page strategy", body: "We target the searches that signal someone ready to buy in Singapore, not high-volume vanity terms, so traffic turns into enquiries instead of bounces." },
      { title: "On-page and technical foundation", body: "We fix the site structure, speed, and on-page basics Google rewards, so the pages you already have start earning rankings that hold." },
      { title: "Content built to convert", body: "Pages and articles written to answer the buyer and lead them to an action, so ranking translates into booked calls rather than passive reads." },
      { title: "Lead capture and speed to lead", body: "Every enquiry the SEO brings in is answered fast, qualified, and booked, because ranking is worthless if the lead waits in a form." },
      { title: "Reporting tied to booked calls", body: "Reporting that shows the enquiries and meetings produced, so every dollar in the package maps to pipeline, not a position graph." },
    ],
  },
  aiDiff: {
    eyebrow: "PRICED IN THE OPEN, NOT BEHIND A GATE",
    heading: "How our packages differ from the market",
    intro: "In a market where SEO packages hide their price and get judged on rankings, we publish ours and get judged on booked calls.",
    rows: [
      { label: "The price", old: "Contact us for a quote", ours: "Published starting point, scoped on a call" },
      { label: "The tiers", old: "Basic, Standard, Premium by input count", ours: "Scoped to your market and margins" },
      { label: "The contract", old: "Six or twelve month lock-in", ours: "No lock-in, you move up as it works" },
      { label: "The measure", old: "A ranking and a backlink count", ours: "Enquiries and booked calls produced" },
    ],
  },
  pricing: {
    eyebrow: "PRICING",
    heading: "The price nobody else publishes",
    price: "S$100",
    unit: "per month, starting from",
    market: "SEO retainers in Singapore commonly run from around S$800 to S$3,000 or more a month, and most providers hide the number. We publish a starting point so you can start small and scale only as it works.",
    includes: [
      "Transparent scoping against your market and margins",
      "Buyer-intent keyword and page strategy",
      "On-page and technical foundation work",
      "Content built to convert, not to fill a calendar",
      "Lead capture and speed to lead wired in",
      "Reporting tied to booked calls, and no lock-in contract",
    ],
    grant: "PSG eligible. Qualifying Singapore SMEs may receive up to 50 percent support, subject to IMDA approval. Confirm current eligibility with Enterprise Singapore.",
    altNote: "S$100 is a real, lean starting point or a paid consultation, not the full program. We scope the actual package against your goals after a short call, and you only move up when it is producing leads.",
    cta: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
  },
  process: {
    eyebrow: "HOW WE START",
    heading: "Scope in the open, then build",
    steps: [
      { n: "01", title: "Scope on a call", body: "We look at your market, margins, and current site, and scope a package with a real figure, so you see the number and the plan before you commit." },
      { n: "02", title: "Build and wire in capture", body: "We do the buyer-intent, technical, and content work, and wire in the lead capture and follow up, so ranking traffic flows to a booked call." },
      { n: "03", title: "Report on booked calls", body: "We run it and report on the enquiries and meetings produced, and you move up a tier only when the package is producing leads." },
    ],
  },
  trust: {
    eyebrow: "BUILT FOR SINGAPORE",
    heading: "Transparent, compliant, no lock-in",
    items: [
      { title: "PSG eligible", body: "Scoped to fit Enterprise Singapore schemes. Qualifying SMEs may receive up to 50 percent support, subject to IMDA approval." },
      { title: "PDPA and Do Not Call", body: "Any follow up on enquiries the SEO brings in respects consent, quiet hours, and the Singapore Do Not Call Registry. This is what the rules require, not legal advice." },
      { title: "Inside Google's guidelines", body: "We work within Google's spam policies. We do not buy junk links or spin content, because those tactics risk a penalty. How we work, not legal advice." },
      { title: "No lock-in, you own it", body: "No six or twelve month hostage contract. You keep the work, the accounts, and the data, and can take it in-house." },
    ],
  },
  crossLinks: {
    eyebrow: "PART OF THE SYSTEM",
    heading: "The pricing view of a bigger method",
    intro: "This page is the packages and pricing view. The full method and the systems that turn ranking into revenue live here.",
    links: [
      { name: "SEO Agency Singapore", to: "/seo-agency-singapore/", desc: "The full SEO service and how we tie rankings to booked calls." },
      { name: "Lead Generation Singapore", to: "/lead-generation-agency-singapore/", desc: "The system that turns SEO traffic into booked calls." },
      { name: "Follow Up Automation", to: "/follow-up-automation/", desc: "Answer every SEO enquiry in seconds, so ranking turns into meetings." },
    ],
  },
  faqs: [
    { question: "How much do SEO packages cost in Singapore?", answer: "SEO packages here commonly run from around S$800 a month for a basic package to S$3,000 or more for serious work. The range is wide because the label package hides very different amounts of real work, from a few blog posts to full technical, content, and authority work. We publish a starting point of S$100 a month as a lean first step and scope the right figure against your site and market on a call, so you can start small and scale only as it produces leads." },
    { question: "Why do most SEO agencies hide their pricing?", answer: "Because a hidden price forces a sales call before you know if you can afford them, which lets them anchor high and pitch. We understand the frustration, so we publish a starting point instead. You see a real number first, then we scope the actual package in the open against your market and margins." },
    { question: "What is actually included in an SEO package?", answer: "Most packages describe inputs, X keywords, Y backlinks, Z blog posts, which mean little to a business owner. In plain terms, a real package is buyer-intent keyword and page strategy, on-page and technical fixes, content written to convert, lead capture wired into the traffic, and reporting tied to booked calls. We scope which of those your business needs rather than selling a fixed tier." },
    { question: "Is cheap SEO at S$300 to S$500 a month worth it, or a risk?", answer: "It is usually a risk. At that price the work is often spun content and low-quality directory or bought links, which violate Google's spam policies and can get a site penalised or deindexed. Recovering costs far more than the package saved. We work within Google's guidelines and scope real work, so we would rather start you lean and honest than cheap and fragile. How we work, not legal advice." },
    { question: "Do you lock me into a six or twelve month contract?", answer: "No. Lock-ins trap you before results appear, so a bad fit becomes an expensive mistake. SEO compounds, so staying makes sense when it is working, but you are never trapped if it is not. You move up a tier only when the package is producing leads." },
    { question: "How long before an SEO package produces results?", answer: "SEO compounds over months rather than days. Technical fixes and better-converting pages can move things in weeks, but ranking competitive terms and building authority takes longer. This is slower than Google Ads, which buys visibility immediately, and it is exactly why we wire lead capture in early, so the enquiries you do earn are answered and booked instead of lost." },
    { question: "Can I use the PSG grant for an SEO package?", answer: "SEO can be PSG eligible for qualifying Singapore SMEs, commonly up to 50 percent support, subject to IMDA approval. Eligibility and caps change, so confirm the current position with Enterprise Singapore before you rely on it. We scope engagements to be grant friendly." },
    { question: "What is the difference between your SEO packages and hiring an SEO agency?", answer: "This page is the pricing and packages view. The full service, the method, and how we connect rankings to booked calls live on our SEO agency page at /seo-agency-singapore/. If you want to understand what we actually do and why, start there. If you want to know the number and what sits inside a package, you are on the right page." },
  ],
  final: {
    eyebrow: "STOP GUESSING WHAT SEO COSTS",
    heading: "See the number, then get judged on booked calls.",
    sub: "SEO packages in Singapore with an honest starting price, no lock-in, and reporting tied to pipeline, not rankings.",
    ctaA: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
    ctaB: { label: "See the full SEO service", to: "/seo-agency-singapore/" },
  },
};
