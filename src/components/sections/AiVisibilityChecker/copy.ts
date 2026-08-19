export const META = {
  title:
    "AI Visibility Checker: See If AI Recommends Your Business | Agentic AI Labs",
  description:
    "Your buyers ask ChatGPT, Gemini, Perplexity, Grok, and Claude who to hire before they ever call you. Check for free whether you show up, get a full site health audit, and get the team that makes you show up, not just a score.",
  keywords: [
    "ai visibility checker",
    "ai visibility tool",
    "ai seo tool",
    "ai overview checker",
    "chatgpt seo",
  ],
  url: "https://www.tryagentikai.com/ai-visibility-checker/",
};

export const HERO_ENGINE_CYCLE = [
  "ChatGPT",
  "Google AI",
  "Perplexity",
  "Gemini",
  "Claude",
  "Grok",
] as const;

export const HERO = {
  eyebrow: "FREE AI VISIBILITY CHECKER",
  headlineLead: "See if",
  headlineRest: "recommends your business.",
  headline2: "Or your competitor.",
  sub: "Buyers ask AI who to hire before they ever call you. We check whether you show up, then audit your whole site for the reasons you do or do not. Free, in about a minute.",
  placeholder: "yourwebsite.com",
  button: "Check my visibility",
  trust: "No signup to see your score.",
  question: "Who should I hire in {your space}?",
};

export const SCAN_GROUPS = {
  ai: {
    label: "AI answer engines",
    lines: [
      "Asking ChatGPT what it recommends...",
      "Asking Perplexity...",
      "Asking Gemini...",
      "Asking Grok...",
      "Asking Claude...",
      "Checking Google AI Overviews...",
    ],
  },
  site: {
    label: "Search and site health",
    lines: [
      "Checking where you rank on Google...",
      "Reading your site the way an AI does...",
      "Scoring technical, speed, content, discoverability, experience, authority...",
    ],
  },
} as const;

export const SCAN_LINES = [
  ...SCAN_GROUPS.ai.lines,
  ...SCAN_GROUPS.site.lines,
] as const;

export const RESULT = {
  headline: "Here is where you stand right now.",
  aiLabel: "AI visibility",
  siteLabel: "Site health",
  ai: (shownIn: number, outOf: number) =>
    `named in ${shownIn} of ${outOf} AI answers your buyers see.`,
  site: (score: number, grade: string) => `${score} of 100. Grade ${grade}.`,
  examplePrefix: "Example:",
  sting: "For the questions your buyers actually ask, someone else is getting named.",
  cta: "See the full report and how to fix it",
};

export const GATE = {
  headline: "Get the full report, and the fixes.",
  sub: "The score is free. The full breakdown of where you are invisible, why, and exactly what to change is in the report. Enter your email and it is yours.",
  placeholder: "you@company.com",
  button: "Send my full report",
  micro: "One email. No spam. Unsubscribe anytime.",
};

export const REPORT = {
  headline: "Your AI visibility report.",
  partATitle: "AI answer-engine visibility",
  partASub:
    "Whether each AI engine names you when a buyer asks who to hire in your space.",
  partBTitle: "Site health audit",
  partBSub:
    "The reasons an AI can or cannot understand and trust your site. This runs today.",
  aeoTitle: "The AEO checklist (why the AI cannot see you)",
  readLine:
    "Every red item is a reason an AI skips you and names someone else. Green is where you already win.",
  rollingOut: "AI answer-engine visibility is included, rolling out.",
};

export const TRACK = {
  eyebrow: "EXACTLY WHAT WE TRACK",
  copy: "Two layers. The foundation is your site health, scored today across six areas the way Google and every AI engine read it. On top of that sits the thing that decides who gets recommended: whether the AI answer engines actually name you.",
  layer1:
    "Search and site health (live). Technical, Speed, Content, Discoverability, Experience, Authority.",
  layer2:
    "AI answer-engine visibility. ChatGPT, Perplexity, Google AI, Gemini, Grok, Claude.",
};

export const HOW = {
  eyebrow: "HOW THE CHECK WORKS",
  steps: [
    {
      label: "You paste your website.",
      sub: "One field. No signup for the score.",
    },
    {
      label: "We ask the AI engines what your buyers ask.",
      sub: "Real discovery questions in your space, put to ChatGPT, Perplexity, Google AI, Gemini, Grok, and Claude.",
    },
    {
      label: "We audit your whole site.",
      sub: "We read it the way an AI does and score six areas of health, then list every fix in priority order.",
    },
    {
      label: "You get a score and a plan.",
      sub: "A visibility score and a site health grade in a minute, the full report and fix list in your inbox.",
    },
  ],
};

export const WHY = {
  eyebrow: "WHY THIS IS NOT OPTIONAL ANYMORE",
  p1: "Your buyers changed how they shop. They used to Google ten links and choose. Now they ask an AI one question and get one answer, with a few names in it.",
  p2: "If you are not one of those names, you are not in the running. Not because you are worse. Because the AI never learned you exist.",
  p3: "This is a new kind of search, and it has a name: getting your business into AI answers, sometimes called answer engine optimization or AI SEO. Most businesses have done nothing about it, which is exactly why the ones who move now get named for years.",
};

export const FIX = {
  eyebrow: "EVERY TOOL TELLS YOU THE SCORE. WE FIX IT.",
  p1: "A dozen tools can tell you that you are invisible. That is the easy part. Making an AI actually recommend you is the work, and it is not a setting you flip.",
  p2: "We are a GTM engineering team. We do the work for you: the technical fixes the report flags, the content that answers what your buyers ask, and the proof that makes an AI trust you enough to name you. You do not learn a tool. We make you show up.",
  cta: "Get my visibility fixed",
  href: "/ai-clarity-workshop/",
  support: "You are hiring a team, not buying software.",
};

export const PROOF = {
  eyebrow: "WE RAN THIS ON OURSELVES FIRST",
  p1: "We did not start selling this until we had done it to our own site. Ask ChatGPT about getting more customers with AI, and our name comes up.",
  p2: "If we can get ourselves into the answer in a space this crowded, we can do it for you.",
};

export const FAQS: { question: string; answer: string }[] = [
  {
    question: "Is it free?",
    answer:
      "Yes. The score is instant with no signup. The full report is free too, in exchange for your email.",
  },
  {
    question: "Which AI engines do you check?",
    answer:
      "ChatGPT, Perplexity, Google AI, Gemini, Grok, and Claude, plus Google AI Overviews.",
  },
  {
    question: "How accurate is it?",
    answer:
      "We ask the AI engines the same kind of questions your buyers ask and record what they answer, and we audit your live site directly. It reflects what a real buyer would see today.",
  },
  {
    question: "What is AI visibility?",
    answer:
      "Whether AI tools name or recommend your business when someone asks. It is becoming the new front page of search.",
  },
  {
    question: "What is answer engine optimization?",
    answer:
      "The work of getting your business into those AI answers. Same goal as SEO, new surface.",
  },
  {
    question: "Why am I not showing up?",
    answer:
      "Usually the AI cannot read or trust your site yet: missing llms.txt, thin content on what buyers ask, weak structured data, slow pages. The report shows which.",
  },
  {
    question: "Can I just use a free tool and fix it myself?",
    answer:
      "You can see the problem with a tool. Fixing it is content, technical work, and proof over time. That is what we do for you.",
  },
  {
    question: "How long until I show up?",
    answer:
      "It varies by how crowded your space is and where you start. We scope it honestly after the check.",
  },
  {
    question: "Do you work with my industry or location?",
    answer:
      "Yes. The check works for any business; the fix is tailored to your space.",
  },
];

export const FINAL = {
  headline: "Find out if AI is recommending you, or your competitor.",
  sub: "Takes a minute. Free score, no signup.",
  ctaA: "Check my visibility",
  ctaB: "Get it fixed for me",
  hrefB: "/ai-clarity-workshop/",
};

export const BUYER_QUESTION = "who to hire in your space";

export const ENGINES = [
  "ChatGPT",
  "Perplexity",
  "Google AI",
  "Gemini",
  "Grok",
  "Claude",
] as const;

export const CATEGORIES = [
  "Technical",
  "Speed",
  "Content",
  "Discoverability",
  "Experience",
  "Authority",
] as const;
