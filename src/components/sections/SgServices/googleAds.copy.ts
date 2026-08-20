import type { ServiceCopy } from "./types";

// Google Ads / SEM page. Primary: sem agency singapore (480, CPC S$89) +
// google ads agency singapore. H1 leads Google Ads. Wedge: agencies optimise
// the click and hand off; we own after the click (speed to lead, booked).
// Pricing from S$850/mo or 12% of spend, min S$1,500 spend.
export const GOOGLE_ADS_COPY: ServiceCopy = {
  meta: {
    title: "Google Ads Agency Singapore | We Own What Happens After the Click | Agentic AI Labs",
    description:
      "A Google Ads and SEM agency in Singapore that owns what happens after the click: instant follow up and booked calls, not leads left waiting in a form. From S$850 a month, PSG eligible.",
    keywords: ["sem agency singapore", "google ads agency singapore", "google ads singapore", "ppc agency singapore", "google ads management singapore"],
    url: "https://www.tryagentikai.com/google-ads-agency-singapore/",
  },
  schemaName: "Google Ads Agency Singapore",
  breadcrumb: "Google Ads Agency Singapore",
  hero: {
    eyebrow: "GOOGLE ADS AND SEM, SINGAPORE",
    h1a: "A click is not a customer.",
    h1b: "We own what happens after it.",
    sub: "Most Singapore Google Ads agencies optimise the click, then hand off. The lead lands in a form and waits. We own the moment after the click: instant follow up, qualification, and a booked call.",
  },
  ctaPrimary: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
  ctaSecondary: { label: "See how it works", to: "#" },
  answerFirst:
    "A Google Ads agency in Singapore manages your paid search and SEM campaigns to bring in clicks. The problem is that most stop at the click. You pay for the visit, the lead fills in a form, and then it sits, because the fastest credible response wins and nobody was watching. We run the ads and own the next step: the lead is answered in seconds, qualified, and booked, so your ad spend turns into meetings instead of a full inbox.",
  gap: {
    eyebrow: "WHERE MOST ADS STOP",
    heading: "The click is where they finish and where the money leaks",
    intro: "Any agency can run a campaign and report a click through rate. Almost none own what happens in the minutes after someone clicks.",
    stopLabel: "What they deliver",
    stopBody: "Clicks, a cost per click, and a dashboard. The enquiry that comes in sits in a form until someone on your side gets to it, by which time the buyer has moved on.",
    goLabel: "What we deliver",
    goBody: "The same clicks, plus the system that answers the enquiry in seconds, qualifies it, and books the call. Ad spend becomes booked meetings, not a pile of untouched leads.",
  },
  included: {
    eyebrow: "WHAT WE DO",
    heading: "Paid search, run end to end",
    items: [
      { title: "Google Ads management", body: "Search, Performance Max, and remarketing, structured and optimised against booked leads, not just clicks." },
      { title: "Meta and LinkedIn ads", body: "Paid social where your buyers are, run from the same system so nothing falls between channels." },
      { title: "Wasted spend control", body: "Negative keywords, audience tightening, and bid discipline so you stop paying for clicks that never convert." },
      { title: "Speed to lead", body: "Every enquiry answered in seconds by voice, SMS, or chat, because the fastest credible response wins." },
      { title: "Qualification and booking", body: "The lead is qualified and put on the calendar, so your team only sees meetings worth taking." },
      { title: "Real ROAS reporting", body: "Reporting tied to booked calls and revenue, not impressions and a click through rate." },
    ],
  },
  aiDiff: {
    eyebrow: "AI-NATIVE, NOT A CLICK FACTORY",
    heading: "How we differ from a traditional ads agency",
    intro: "We are measured on booked calls, so we cannot stop at the click.",
    rows: [
      { label: "The goal", old: "Clicks and a click through rate", ours: "Booked calls from the same budget" },
      { label: "After the click", old: "The lead is your problem", ours: "Answered in seconds and booked" },
      { label: "The fee", old: "A percentage that rewards more spend", ours: "A flat fee, or a lower percentage" },
      { label: "Reporting", old: "Impressions and clicks", ours: "Cost per booked call" },
    ],
  },
  pricing: {
    eyebrow: "PRICING",
    heading: "Honest pricing, below the market",
    price: "S$850",
    unit: "per month management fee, from",
    market: "Singapore agencies typically charge a flat fee from around S$1,000 a month, or 15 to 20 percent of ad spend. We priced ours below that.",
    includes: [
      "Google Ads plus Meta and LinkedIn management",
      "Wasted spend control and bid discipline",
      "Speed to lead: enquiries answered in seconds",
      "Qualification and booking built in",
      "Reporting tied to booked calls, not clicks",
      "No lock-in contract",
    ],
    grant: "PSG eligible. Qualifying Singapore SMEs may receive up to 50 percent support, subject to IMDA approval. Confirm current eligibility with Enterprise Singapore.",
    altNote: "On larger accounts we can work at 12 percent of ad spend instead of a flat fee. A minimum ad budget of around S$1,500 a month is the market norm to get real data.",
    cta: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
  },
  process: {
    eyebrow: "HOW WE START",
    heading: "Audit the spend, then build the machine",
    steps: [
      { n: "01", title: "Account audit", body: "We audit your current ads or campaign plan, find the wasted spend and the leaks after the click, and scope the build." },
      { n: "02", title: "Build and connect", body: "We set up the campaigns and wire in the speed to lead, qualification, and booking, so the click flows to a meeting." },
      { n: "03", title: "Run and optimise", body: "We run it against cost per booked call, cut what wastes budget, and scale what books meetings." },
    ],
  },
  trust: {
    eyebrow: "BUILT FOR SINGAPORE",
    heading: "Local, compliant, no lock-in",
    items: [
      { title: "PSG eligible", body: "Scoped to fit Enterprise Singapore schemes. Qualifying SMEs may receive up to 50 percent support, subject to IMDA approval." },
      { title: "PDPA and Do Not Call", body: "Follow up respects consent, quiet hours, and the Singapore Do Not Call Registry. This is what the rules require, not legal advice." },
      { title: "No lock-in", body: "No hostage contract. If the ads are not producing booked calls, you walk." },
      { title: "We run it, you own it", body: "You keep the accounts, the system, and the data, and can take it in-house." },
    ],
  },
  crossLinks: {
    eyebrow: "PART OF THE SYSTEM",
    heading: "Ads are the top of the journey",
    intro: "Paid search fills the funnel. These pages are what turns a click into revenue.",
    links: [
      { name: "Lead Generation Singapore", to: "/lead-generation-agency-singapore/", desc: "The system that turns ad clicks into booked calls." },
      { name: "Follow Up Automation", to: "/follow-up-automation/", desc: "Answer every enquiry in seconds, until they reply or book." },
      { name: "AI Implementation Partner", to: "/ai-implementation-partner-singapore/", desc: "We build and run the whole thing, inside your tools." },
    ],
  },
  faqs: [
    { question: "How much should I budget for Google Ads in Singapore?", answer: "A common starting point is around S$1,500 a month in ad spend to gather real data, on top of a management fee. Competitive industries need more. We scope a realistic budget against your market and margins rather than pushing you to spend more." },
    { question: "What is a typical Google Ads management fee in Singapore?", answer: "Agencies usually charge a flat fee from around S$1,000 a month, or 15 to 20 percent of ad spend. We start from S$850 a month, or 12 percent of spend on larger accounts, priced below the typical market." },
    { question: "Google Ads or SEO, which should I do first?", answer: "Ads buy immediate visibility while SEO compounds over months, so ads are usually the faster path to leads today and SEO the cheaper path over time. Many businesses run both. Either way, the win is booked calls, which is what we connect the traffic to." },
    { question: "How fast will I see results from Google Ads?", answer: "Clicks start immediately, and with speed to lead wired in, booked calls can follow within days. The first weeks are about cutting wasted spend and finding what converts, then scaling it." },
    { question: "Do you run Meta and LinkedIn ads too?", answer: "Yes. We run paid social alongside Google from the same system, so a lead from any channel is answered and booked the same way, with nothing falling between platforms." },
    { question: "What happens to leads after someone clicks my ad?", answer: "That is the part most agencies ignore and the part we own. The enquiry is answered in seconds by voice, SMS, or chat, qualified, and booked, because a lead that waits in a form goes cold fast." },
    { question: "How do you stop wasted ad spend?", answer: "Negative keywords, tighter audiences, disciplined bidding, and cutting placements that click but never convert. Because we are measured on booked calls, not clicks, our incentive is to spend less to get more." },
    { question: "Is Google Ads PSG grant eligible, and do you lock me in?", answer: "SEM can be PSG eligible for qualifying Singapore SMEs, commonly up to 50 percent support. Confirm current eligibility with Enterprise Singapore. And no, we do not lock you into a contract." },
  ],
  final: {
    eyebrow: "STOP PAYING FOR CLICKS THAT GO COLD",
    heading: "Turn ad spend into booked calls, not a full inbox.",
    sub: "An AI-native Google Ads agency in Singapore that owns the moment after the click.",
    ctaA: { label: "Book a scoping call", to: "/ai-clarity-workshop/" },
    ctaB: { label: "See lead generation", to: "/lead-generation-agency-singapore/" },
  },
};
