// Copy for /forward-deployed-engineers/ (positioning / sales asset, not SEO).
// Job: the page you send when a prospect asks how you differ from an agency.
// Leads with the buyer's real fear (another thing I have to babysit), uses the
// forward-deployed model as the credentialing mechanism, pre-empts the "isn't
// this just consulting" objection, and states its own limits honestly.
// No dashes. Every stat carries a named primary source, framed as prediction
// or survey where that is what it is. Deliberately excluded: the "643 to 5,330
// FDE postings" raw numbers (they are index values, not counts), "88% of
// pilots never reach production", "85% of AI projects fail", and any vendor
// self-reported result. Avoided the category's banned phrases (AI-native, days
// not months, book a free AI audit, not another consultancy, we own the
// outcome as a slogan) as hero language.

export const META = {
  title: "Forward Deployed Engineers for Marketing and Sales",
  description:
    "Most AI you buy becomes your problem to run. A forward deployed team writes the code inside your business, ships a working marketing and sales system, and hands it back documented. You keep it.",
  keywords: [
    "forward deployed engineers",
    "forward deployed engineering",
    "ai implementation partner",
    "gtm engineering team",
    "done for you ai",
  ],
  url: "https://www.tryagentikai.com/forward-deployed-engineers/",
};

export const HERO = {
  eyebrow: "FORWARD DEPLOYED ENGINEERING",
  h1a: "Most AI you buy becomes your problem to run.",
  h1b: "We build it inside your business and stay on the hook.",
  sub: "You have tried the software you have to operate and the agency that only advises. A forward deployed team writes the code in the tools you already use, ships a working marketing and sales system, and hands it back documented. You keep it.",
  ctaPrimary: { label: "Talk to an engineer", to: "/ai-clarity-workshop/" },
  ctaSecondary: { label: "See how it works", to: "#how-it-works" },
};

export const ANSWER_FIRST =
  "A forward deployed engineer is a builder who works inside your business rather than from a vendor's office. The model was named and industrialised by Palantir, whose framing is one customer and many capabilities, the opposite of a product engineer serving many customers with one feature. In 2025 and 2026 the model went mainstream: Palantir, OpenAI, AWS, Deloitte, and Accenture all now run forward deployed teams. We point the same model at your pipeline instead of a data lake: we embed, build your marketing and sales agents in your own systems, and own whether they work.";

export const PROBLEM = {
  eyebrow: "THE PROBLEM YOU ACTUALLY HAVE",
  heading: "You have bought AI before. It did not run itself.",
  intro:
    "There are three ways to get AI into a business today, and each one leaves you holding something. We are fair about all three, because the honest version is more useful than a strawman.",
  items: [
    {
      label: "Software you operate",
      body: "The tool works. It ships you a login and a blank canvas. Now you own the configuration, the maintenance, and the one person who understands it. When they leave, the system leaves with them. Software never promised to run itself, and it does not.",
    },
    {
      label: "An agency that advises",
      body: "You get a strategy, a roadmap, an audit. Someone else still has to build it. Good agencies exist, but most are priced against time and retainer rather than against a working system, so the incentive is to keep advising, not to finish.",
    },
    {
      label: "A freelancer who vanishes",
      body: "Something gets built. Nobody wrote down how. It breaks in month four and the person who made it is gone, and no one who is left can read it. The cheapest option up front is often the most expensive by the end.",
    },
  ],
};

export const WHATITIS = {
  eyebrow: "WHAT A FORWARD DEPLOYED ENGINEER IS",
  heading: "The delivery model Palantir named, pointed at your pipeline",
  body: [
    "Palantir built the role in the early 2010s. The distinction that matters: a forward deployed engineer writes production code in the customer's own environment and is measured against a working system, while a consultant delivers a recommendation and is measured against time. One builds, the other advises.",
    "The model is no longer fringe. In 2025 and 2026 Deloitte launched a forward deployed engineering practice, AWS built a partner programme around it, and OpenAI, Microsoft, Anthropic, and Google all stood up large deployment teams. AWS put the shift plainly: enterprise AI has outgrown the advisory model, and the move is from counsel to outcomes.",
  ],
  honest:
    "The honest limit, and we will say it before you ask: the goal is that you stop needing us. Forrester calls embedded engineers the training wheels for AI adoption, useful precisely because someone eventually takes them off. A good engagement ends with your team owning a system they understand, not with a dependency you cannot exit.",
};

export const OBJECTION = {
  eyebrow: "THE OBVIOUS QUESTION",
  heading: "Is this just consulting with a new name?",
  body: "Fair question, and the honest answer is narrow. A consultant hands you a recommendation and bills for the time it took to produce. A forward deployed engineer hands you a working system built in your own tools and is priced against whether it works. If we only advised, you would be right to call it consulting. We write the code, in your environment, and it is running when we are done.",
};

export const HOW = {
  eyebrow: "HOW THE ENGAGEMENT WORKS",
  heading: "Three phases, real durations, a handover at the end",
  intro:
    "No open-ended retainer. Each phase has a deliverable, and the last one is you owning the system.",
  steps: [
    {
      n: "01",
      title: "Assessment",
      dur: "1 to 2 weeks",
      body: "We map how leads reach you today, where they leak, and which one workflow is worth building first. You get the plan and the scope whether or not you continue.",
    },
    {
      n: "02",
      title: "Embedded build",
      dur: "a few weeks",
      body: "We build the agreed system in your own tools, working alongside your team, not in a black box. You see it take shape and can redirect it while it is cheap to change.",
    },
    {
      n: "03",
      title: "Production and handover",
      dur: "on completion",
      body: "The system goes live, and we hand over the repository, the documentation, and the runbooks. Your team can operate it, and so can we if you want us to. The handover is the deliverable, not an afterthought.",
    },
  ],
};

export const OWN = {
  eyebrow: "WHAT YOU OWN, IN WRITING",
  heading: "You keep the system. This is what that actually means.",
  intro:
    "Most teams wave at this. Here are the specific things you own when we are done, because a claim you can put in a contract is worth more than a slogan.",
  items: [
    { you: "The code repository", detail: "Assigned to you, in your account. Not rented, not locked to us." },
    { you: "The integrations", detail: "Built in the tools you already pay for, so nothing depends on our licence." },
    { you: "The documentation", detail: "Written for a person who was not in the room, so a new hire can pick it up." },
    { you: "The runbooks", detail: "What to do when it breaks, who to call, and how to change it safely." },
    { you: "The exit", detail: "A clean way to part. If we are not adding value, you keep everything and walk." },
  ],
};

export const COMPARE = {
  eyebrow: "THE FOUR OPTIONS, HONESTLY",
  heading: "Who runs it, who owns the result, what happens when it breaks",
  intro:
    "Each of these has a real advantage. The point is not that three are bad, it is that they answer different questions.",
  columns: ["", "Buy software", "Hire an agency", "Hire in-house", "Forward deployed"],
  rows: [
    {
      label: "Who operates it",
      software: "You. The vendor ships capability, not operation.",
      agency: "Them, in their tools, often opaque to you.",
      inhouse: "You, permanently. The best long-term answer if you can hire.",
      fde: "Them first, you by design. Handover is the deliverable.",
    },
    {
      label: "Who owns the result",
      software: "Nobody. The vendor owns their product's uptime, not your results.",
      agency: "Usually activity or deliverables, not the outcome.",
      inhouse: "You, entirely. The clearest accountability of the four.",
      fde: "Us, priced against a working system, and it is in the contract.",
    },
    {
      label: "Time to value",
      software: "Fast to access, slow to value. The integration is the real project.",
      agency: "Weeks to activity. Time to a working system varies a lot.",
      inhouse: "Slowest. Months to hire, then ramp.",
      fde: "Weeks to a scoped pilot, production for a defined use case soon after.",
    },
    {
      label: "When it breaks",
      software: "A support ticket for their product. Your setup is yours.",
      agency: "Depends on the retainer. If it ended, you are on your own.",
      inhouse: "You fix it, if the person who built it still works there.",
      fde: "We fix it during the engagement, you fix it after, because the runbooks are yours.",
    },
  ],
  foot: "In-house is genuinely the best end state. That is why we build toward it rather than against it.",
};

export const PROOF = {
  eyebrow: "WHY THIS IS NOT ANOTHER AI PROMISE",
  heading: "The industry is littered with AI that never shipped",
  stats: [
    {
      stat: "40%",
      label: "of agentic AI projects Gartner predicts will be cancelled by the end of 2027, on cost, unclear value, or weak controls",
      source: "Gartner, June 2025",
    },
    {
      stat: "74%",
      label: "of companies have yet to show tangible value from AI, and only 26 percent can move beyond a proof of concept",
      source: "BCG, Where's the Value in AI, October 2024",
    },
    {
      stat: "42%",
      label: "of businesses abandoned most of their AI initiatives in 2025, up from 17 percent a year earlier",
      source: "S&P Global Market Intelligence, reported by CIO Dive, 2025",
    },
  ],
  body:
    "Gartner also estimates that of the thousands of vendors claiming agentic AI, only around 130 are real, and calls the rest agent washing. The reason so much AI never reaches production is not the model. It is that nobody owned the last mile: the integration, the edge cases, and the person who keeps it running. That last mile is the entire job we do.",
  dogfood:
    "We did this to our own business before selling it. Ask ChatGPT about getting more customers with AI, and our name comes up, because we built the system that gets us named. In a crowded space, that is the proof the method works.",
};

export const START = {
  eyebrow: "HOW WE START",
  heading: "A paid first step, not a free audit",
  body: [
    "We do not sell a free AI audit, because a free audit is a sales call wearing a lab coat. We sell the first phase: a short, paid assessment that maps your funnel, finds where leads leak, and scopes the first system to build. You get the plan and the scope as a deliverable, and you own it whether or not you continue with the build.",
    "If the assessment says AI is not the answer for you right now, we will tell you that too. It is cheaper for everyone than a build that should not have happened.",
  ],
  cta: { label: "Talk to an engineer", to: "/ai-clarity-workshop/" },
  support: "You are hiring a team, not buying software.",
};

// Long-form deep dive. Buyer voice, problem first, question-style H2s.
// In-prose internal links use [label](/path/) and are parsed in the render.
// No dashes anywhere. No fabricated stats, names, or testimonials.
export const DEEP_DIVE = {
  eyebrow: "THE LONGER ANSWER",
  heading: "Forward deployed engineering, explained for the person paying for it",
  sections: [
    {
      h2: "What does a forward deployed engineer actually do day to day?",
      body: [
        "A forward deployed engineer is not a strategist who visits, presents a deck, and leaves. The day to day is building. They sit inside your stack, read how your leads actually move, and write the code that ties your CRM, your inbox, and your automation tools into one working system. The word forward is the point: the engineer is deployed to where the work happens, your business, not kept back at a vendor's office shipping generic features for everyone at once.",
        "In practice an embedded AI engineer spends the first days mapping reality rather than the ideal. Which form feeds which list, where a reply gets dropped, which follow up never goes out. Then they build against that map, test it on your real traffic, and adjust while you watch it take shape. Nothing gets thrown over a wall for you to reverse engineer later.",
        "The difference you feel is accountability. Because the engineer is measured against a system that has to run in your environment, the edge cases are their problem, not a footnote in a report. That is the core of forward deployed engineering, and it is why the model has spread from where Palantir named it out to the largest AI vendors.",
      ],
    },
    {
      h2: "Why do so many AI pilots fail to reach production?",
      body: [
        "Most AI pilots do not fail because the model is weak. They fail at the last mile, the unglamorous work of wiring a demo into the systems a business actually runs on. A pilot that dazzles in a sandbox still has to survive real data, real volume, and the messy exceptions that never appear in a demo. When nobody owns that last mile, the pilot stalls in a slide deck and quietly gets written off.",
        "The second reason is that a pilot often loses its owner once the excitement fades. The person who championed it moves on, the one who understood it leaves, and there is no documentation for anyone else to pick it up. A working demo with no runbook is not a production system. It is a liability waiting for month four.",
        "Forward deployed engineering exists to close that gap on purpose. The whole job is to build past the pilot into something live, documented, and handed over, so the very thing that makes most AI pilots fail to reach production, an unowned last mile, is the thing this model was built to carry. The demo is never the deliverable. The running system is.",
      ],
    },
    {
      h2: "Done for you AI implementation, or a SaaS tool you run yourself?",
      body: [
        "A SaaS tool sells you capability and hands you the operating manual. That is a fair trade when you have the team and the time to configure it, maintain it, and carry the one person who understands it. The catch is that the tool never promised to run itself, so the work of turning a login into results quietly becomes yours the day the trial ends.",
        "Done for you AI implementation flips who holds that work. Instead of a blank canvas you get a system built inside the tools you already pay for, running against your real pipeline, with the build owned by the team that shipped it. The honest way to frame the choice of an AI implementation partner vs a SaaS tool is this: one sells you software and wishes you luck, the other builds the working system and stays on the hook for whether it performs.",
        "Neither is universally right. If you have the in house capacity, software is the cheaper answer over time. If you do not, a done for you build gets you to a working marketing and sales system faster, and you can read how we structure that on our [AI implementation partner](/ai-implementation-partner-singapore/) page.",
      ],
    },
    {
      h2: "How is an embedded AI engineer different from an agency?",
      body: [
        "An agency usually sells advice priced against time. You get a strategy, an audit, a roadmap, and someone else still has to build it. Good agencies exist, but the retainer model rewards continued advising rather than a finished system, so the incentive quietly points away from done.",
        "An embedded AI engineer is priced against a working system instead of hours logged. They write production code in your environment, and the deliverable is something running, not something recommended. If the leads do not move, that is their problem to fix, not a green arrow in next month's report. It is also why forward deployed work pairs so naturally with the rest of a pipeline, from the build itself to the [lead generation](/lead-generation-agency-singapore/) that has to fill it.",
        "The narrow honest caveat is that some agencies genuinely own outcomes, and the structure matters more than the label. Ask who operates the system when you are done, who owns the code, and what happens when it breaks. The answers tell you which model you are really buying, whatever it is called on the invoice.",
      ],
    },
    {
      h2: "How do you keep forward deployed engineering from becoming a dependency you cannot leave?",
      body: [
        "It is a fair worry. A team that builds inside your business could, in principle, make itself impossible to remove. The fix is to design the exit from the start. Everything is built in tools you already own, the repository is assigned to your account, and the documentation is written for a person who was not in the room when it was made.",
        "The goal of a good engagement is that you stop needing the engineer. The training wheels come off. A dependency you cannot exit is a failure of the model, not a feature of it, and any partner who arranges things so you can never leave has quietly sold you the same lock in that software and agencies get criticised for.",
        "So the test is simple. When the work is done, can your own team run the system, and could you walk away with everything if you chose to. If the answer to both is yes, forward deployed engineering did its job. If not, you bought a dependency with a nicer name on it.",
      ],
    },
  ],
};

export const FAQS = [
  {
    question: "What is a forward deployed engineer, and where did the term come from?",
    answer:
      "A forward deployed engineer is a builder who writes production code inside the customer's own environment rather than from a vendor's office. Palantir named and industrialised the role in the early 2010s. Its framing is one customer and many capabilities, as opposed to a product engineer who serves many customers with one feature.",
  },
  {
    question: "How is this different from hiring a marketing agency?",
    answer:
      "An agency usually delivers advice, a strategy, or a roadmap, and is priced against the time it spends. A forward deployed team writes the working system in your own tools and is priced against whether it works. Some agencies genuinely own outcomes, but most are structured to keep advising rather than to finish and hand over.",
  },
  {
    question: "Isn't forward deployed engineering just consulting with a new name?",
    answer:
      "The honest distinction is narrow but real. A consultant produces a recommendation and bills for the time. A forward deployed engineer produces a running system built in your environment and is measured against it. If we only advised, the label would be fair. We ship code that is live when we are done.",
  },
  {
    question: "Who owns the code and the systems you build?",
    answer:
      "You do. The repository is assigned to you in your own account, the integrations are built in tools you already pay for, and you receive the documentation and runbooks at handover. Nothing is rented back to you or locked to our licence.",
  },
  {
    question: "What happens when something breaks after the engagement ends?",
    answer:
      "You can fix it, because the runbooks and documentation are yours and were written for someone who was not in the room. We can also stay on to run it if you prefer. The point of the handover is that you are not stranded either way.",
  },
  {
    question: "Do I need to hire someone internally to run what you build?",
    answer:
      "Not necessarily. The system is built in your existing tools and documented so an ordinary team member can operate it. If you want us to keep running it we can, but that is a choice, not a dependency we design in.",
  },
  {
    question: "How long before something is actually live, not a demo?",
    answer:
      "A scoped pilot is usually weeks, and production for a well defined use case follows soon after. The assessment phase that comes first takes one to two weeks. We scope real durations against your specific systems rather than promising a slogan.",
  },
  {
    question: "How is this priced?",
    answer:
      "We start with a short paid assessment that produces a plan and a scope you own. The build is priced against the agreed system rather than an open-ended retainer. We would rather be measured on a working outcome than on hours logged.",
  },
  {
    question: "What tools do you build on, and am I locked into them?",
    answer:
      "We build in the tools you already use wherever possible, such as your CRM, your calendar, and your automation platform, so nothing depends on a licence only we hold. Avoiding lock-in is part of the design, not an add-on.",
  },
  {
    question: "How do you measure whether the system is actually working?",
    answer:
      "Against the outcome it was built for: replies, booked calls, qualified leads, whatever the scoped use case targets, tracked back to the system that produced it. We also define what happens when the agent gets something wrong and when it hands off to a person.",
  },
  {
    question: "Why wouldn't I just hire a forward deployed engineer full-time?",
    answer:
      "If you can hire and retain one, that is often the best long-term answer, and we build toward you being able to run things in-house. Hiring is slow and single-threaded, though, and a specialist team gets a working system live faster than a new hire can ramp. Many businesses use us to get there, then take it in-house.",
  },
];

export const FINAL = {
  eyebrow: "STOP BUYING AI YOU HAVE TO BABYSIT",
  heading: "Have someone build it, run it, and hand you the keys.",
  sub: "A forward deployed team that ships your marketing and sales system inside your business, and owns whether it works.",
  ctaA: { label: "Talk to an engineer", to: "/ai-clarity-workshop/" },
  ctaB: { label: "Check if AI names you", to: "/ai-visibility-checker/" },
};
