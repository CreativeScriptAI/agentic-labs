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
    title: "B2B Lead Generation Singapore | Booked Meetings",
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
  relatedProse: [
    { before: "B2B outreach is one engine inside a wider ", anchor: "lead generation agency, Singapore", to: "/lead-generation-agency-singapore/", after: ", so we build it to hand your team booked calls, not lists." },
    { before: "The meetings are set through ", anchor: "appointment setting in Singapore", to: "/appointment-setting-singapore/", after: ", so a qualified reply becomes a slot on the calendar." },
    { before: "Before anything is booked, every prospect runs through ", anchor: "lead qualification", to: "/lead-qualification/", after: " against your real fit and intent criteria." },
    { before: "No reply is left to go cold, because ", anchor: "follow up automation", to: "/follow-up-automation/", after: " keeps chasing on a cadence until they answer or opt out." },
  ],
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
  deepDive: {
    eyebrow: "THE ECONOMICS OF BOOKED PIPELINE",
    heading: "What B2B lead generation actually costs, and when meetings show up",
    sections: [
      {
        h2: "how much does b2b lead generation cost in singapore?",
        body: [
          "When you put a few quotes side by side in Singapore, they usually come in three shapes, and it helps to know what each one is really selling. The first is a lead list or database priced per record, where you pay for names and contact details in bulk. The second is a monthly retainer with an agency or an appointment setting firm, which typically runs into the low to mid thousands a month and covers a team doing outreach on your behalf. The third is a per meeting or per qualified lead price, where you pay only when a specific outcome lands. A cheap list looks like the best deal on the page, but it is cheap because the expensive part, contacting and qualifying every one of those names, is still sitting on your side of the table.",
          "There is a cost most quotes never show you, and it is the tooling and data stack underneath the work. Outreach platforms, enrichment providers, and verification tools each carry their own monthly seat fees and data credits, and if you run the outreach in house those costs sit on top of a salaried person's time. It is common to end up paying for five subscriptions you only half use. Part of what a run system does is fold that stack into a single line rather than a drawer of logins and renewal dates you have to manage yourself.",
          "The honest trade is this. A lower monthly number that leaves the chasing with your own team is not actually cheaper once you count the hours it eats from people who are meant to be closing, not dialling. So the figure worth comparing is not the retainer at the top of the quote. It is what you end up paying for each meeting that actually happens, which is a different number entirely and the one the next sections build toward.",
        ],
      },
      {
        h2: "how long before a b2b outreach campaign books meetings?",
        body: [
          "A realistic timeline is measured in weeks, and the first stretch is quiet by design. Weeks one and two are build and connect: agreeing the target list, setting the fit and intent criteria, and wiring the system into your CRM so nothing leaks. Nothing books in that window, and that is normal rather than a warning sign. First replies and first booked calls tend to appear once outreach has been live for a little while and a follow up cadence has had time to run its course, because most B2B buyers in Singapore do not answer the first touch and were never going to.",
          "The early meetings are doing double duty. They are not only pipeline, they are a live test of whether the message and the list are right. The first booked calls tell you fast whether the targeting and the offer are landing with the people you meant to reach, and the system gets tuned against what actually books rather than what you assumed would. That is why month two usually looks different from month one, and better, if the first month's signal is read honestly.",
          "Two habits reset the clock and are worth naming. The first is a list that is too broad, which buys a lot of low quality replies and teaches you very little. The second is switching the offer every week before any cadence has finished running, so no version ever gets a fair test. Consistency of targeting is the thing that compounds, and impatience is the thing that quietly starts you over.",
          "There is one external finding worth keeping in view, with caution. The Lead Response Management study written up by Harvard Business Review, \"The Short Life of Online Sales Leads\" by James Oldroyd and colleagues in 2011, found that firms contacting a web lead within the first hour were far more likely to qualify it than those that waited longer. Treat that as directional and dated rather than a benchmark for your own numbers. The point it supports is narrow: responding inside the first window, while a buyer is still paying attention, is a real lever on how quickly interest turns into a meeting.",
        ],
      },
      {
        h2: "what does a realistic b2b sales pipeline look like month to month?",
        body: [
          "It helps to picture the funnel in plain steps rather than a single headline number. Accounts get sourced, contacts get reached, some reply, some of those turn into qualified conversations, a share of those become booked meetings, and a share of those meetings actually happen, because no shows are real. Every step drops off, so a healthy pipeline is a shrinking funnel, not a flat pile of leads. When someone quotes you one big number without the shape underneath it, they are usually counting the widest step and hoping you do not ask about the rest.",
          "The honest point is that a smaller number of well qualified meetings beats a big list of weak ones, because your reps' time is the scarce resource in the whole system. Ten meetings that genuinely fit is a better month than a hundred names nobody has the hours to call. A quote that boasts about volume is often quietly moving the work, and the cost of that work, back onto your team.",
          "Pipeline also arrives unevenly, and it is worth expecting that before it happens. Some weeks are quiet, some are heavy, and a single slow week is not a broken system. What you watch is the trend across a quarter and whether qualified conversations are rising over that span, not whether every week matches the last.",
          "The shape ties directly to targeting, and this is the lever you actually control. A narrow, well defined buyer produces fewer replies but a higher share that convert into real meetings. Widening the net inflates the reply count and dilutes the meetings, which feels like progress on a report and rarely is. Deciding how tightly to aim is your call to make, and it moves the whole funnel more than any single tactic downstream.",
        ],
      },
      {
        h2: "how do you measure cost per booked meeting?",
        body: [
          "There is one metric that cuts through vendor comparisons, and it is simple to run on the back of an envelope: total spend for the period divided by meetings that actually happened. Not leads, not replies, not meetings that were booked and then no showed. Just the meetings that took place. That single number lets you put a list vendor, a retainer agency, and a run system on the same footing, which none of their quotes will do for you, because each prefers to be judged on the step that flatters it most.",
          "Cost per lead is the figure that flatters the wrong vendor. A cheap lead that never converts has an effectively infinite cost per meeting once you finish the arithmetic, and the gap between the two numbers is the rep hours spent chasing something that was never going to book. Cost per booked meeting quietly prices in the work a list leaves sitting on your desk, which is exactly the work a per record price pretends is free.",
          "For the buyer who thinks in revenue, extend the metric one step: track meeting to opportunity to closed deal, so cost per meeting can be read against your average deal value and your own close rate. A meeting that costs more is perfectly fine if the deals it produces are large, and a cheap meeting that never closes is not a bargain. That judgement belongs to you, not to whoever is selling the outreach, because only you know what a customer is worth to you.",
          "This is also why the number is hard to hide behind. Because it counts meetings that happened rather than activity, a quiet month shows up immediately and in plain sight. There is nowhere for a busy looking report full of touches and opens to pad the gap, which keeps the whole arrangement honest in the direction that matters to you.",
        ],
      },
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
