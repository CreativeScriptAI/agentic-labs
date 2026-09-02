// Copy for /answer-engine-optimization/ (pillar page).
// Voice: buyer-first (lead with the consequence they say, introduce AEO as the
// mechanism). No dashes. No fabricated stats: every number is attributed to a
// named primary source. Honest mechanism + honest llms.txt caveat are the
// differentiators. See website changes/SG experiment/05-build/answer-engine-optimization/.

export const META = {
  title:
    "Answer Engine Optimization (AEO): How to Get Named by AI",
  description:
    "Answer engine optimization is how you get your business named when buyers ask ChatGPT, Perplexity, Gemini, and Google AI. A plain, honest guide to how it works, what to fix, and how to rank in ChatGPT.",
  keywords: [
    "answer engine optimization",
    "generative engine optimization",
    "ai search optimization",
    "ai seo",
    "how to rank in chatgpt",
    "chatgpt seo",
    "ai overview optimization",
  ],
  url: "https://www.tryagentikai.com/answer-engine-optimization/",
};

export const HERO = {
  eyebrow: "ANSWER ENGINE OPTIMIZATION",
  h1a: "Your buyers ask AI who to hire.",
  h1b: "Be the name it gives.",
  // Tight hero sub. The long answer-first paragraph now leads the Definition
  // section (still high on the page, LLM-liftable, out of the hero).
  sub: "Buyers now ask ChatGPT, Perplexity, Gemini, and Google AI who to hire, then contact only the two or three names in the answer. Answer engine optimization is how you become one of them.",
  // Answer-first definition, in the first ~100 words of body copy, for LLMs to
  // lift. Rendered as the lead of the Definition section.
  answerFirst:
    "Answer engine optimization (AEO) is the work of getting your business named and cited when someone asks an AI a question. Your website gets traffic but no enquiries partly because the buyer never reaches it. They ask ChatGPT, Perplexity, Gemini, or Google AI for a recommendation, read the answer, and only visit the two or three names it gives. If you are not one of those names, you are not in the running. This page explains, plainly and honestly, how AI answers actually pick names, what to fix on your site, and how we do it for you.",
  ctaPrimary: { label: "Check if AI names you", to: "/ai-visibility-checker/" },
  ctaSecondary: { label: "Get it done for you", to: "/ai-clarity-workshop/" },
};

export const DEFINITION = {
  eyebrow: "THE THREE TERMS, IN PLAIN ENGLISH",
  heading: "AEO, GEO, and AI SEO: what each one means",
  intro:
    "The labels are new and the industry does not fully agree on them. Here is the useful working definition.",
  terms: [
    {
      term: "AEO",
      full: "Answer Engine Optimization",
      def: "Make the page quotable. Structure your content so an answer engine can lift a clean, direct answer straight out of it: clear headings, direct answers, lists, tables, and schema.",
    },
    {
      term: "GEO",
      full: "Generative Engine Optimization",
      def: "Make the source trusted. Build the off-page signals a generative engine uses to decide you are worth citing: entities, third-party citations, reviews, and authority. The term comes from a 2024 Princeton and IIT Delhi research paper.",
    },
    {
      term: "AI SEO",
      full: "AI Search Optimization",
      def: "The informal catch-all for adapting SEO to AI-mediated search across AI Overviews, ChatGPT, and Perplexity. Used loosely, often to mean the same thing as the two above.",
    },
  ],
  honest:
    "Some in the field say AEO and GEO are the same thing and the label does not matter. We think the on-page versus off-page split is the useful one: AEO makes your page quotable, GEO makes your source trusted. You need both.",
};

export const COMPARE = {
  eyebrow: "AEO VS SEO",
  heading: "It is not SEO versus AEO. AEO sits on top of SEO.",
  intro:
    "The pages AI cites are, overwhelmingly, pages that already rank in normal search. Traditional SEO is the foundation. AEO is the layer that makes a ranking page extractable into an answer.",
  columns: ["", "Traditional SEO", "Answer Engine Optimization"],
  rows: [
    { label: "The goal", seo: "Rank a link on the results page", aeo: "Get named inside the AI answer" },
    { label: "The win", seo: "A click to your site", aeo: "A citation, and a shortlist of two or three names" },
    { label: "What it rewards", seo: "Relevance, authority, backlinks", aeo: "The same, plus clean structure the AI can extract" },
    { label: "The unit", seo: "The page", aeo: "The passage, the fact, the direct answer" },
    { label: "How you measure", seo: "Rankings and organic traffic", aeo: "Whether AI names you, and for which questions" },
  ],
  foot: "You do not throw out SEO to do AEO. You do SEO, then make it extractable.",
};

export const WHYNOW = {
  eyebrow: "WHY THIS IS HAPPENING NOW",
  heading: "The click is disappearing. The answer is replacing it.",
  // Only primary-sourced stats, attributed inline.
  stats: [
    {
      stat: "8%",
      label: "of visits get a click when Google shows an AI summary, against 15 percent without one",
      source: "Pew Research Center, 2025",
      sourceHref: "https://www.pewresearch.org",
    },
    {
      stat: "1%",
      label: "of visits click a source listed inside the AI summary itself",
      source: "Pew Research Center, 2025",
      sourceHref: "https://www.pewresearch.org",
    },
    {
      stat: "25%",
      label: "projected drop in traditional search engine volume by 2026 as buyers shift to AI",
      source: "Gartner, 2024",
      sourceHref: "https://www.gartner.com",
    },
    {
      stat: "800M",
      label: "weekly ChatGPT users as of its October 2025 announcement",
      source: "OpenAI",
      sourceHref: "",
    },
  ],
  body:
    "Pew Research Center found that when an AI summary appears, people click a normal result far less often, and almost never click a source inside the summary. SparkToro's analysis of US search put the share of searches ending with no click at roughly 58 percent even before AI answers spread. The buyer reads the answer and stops. The only way to be in that answer is to be named in it.",
};

export const MECHANISM = {
  eyebrow: "HOW AI ANSWERS PICK NAMES",
  heading: "How each engine actually decides who to cite",
  intro:
    "Most guides hand-wave this. Here is what is documented, and what is not. The shared pattern is retrieval augmented generation: the AI runs a search, retrieves candidate pages, reranks them, and writes an answer grounded in what it retrieved, with citations. What differs is where each engine retrieves from.",
  engines: [
    {
      name: "ChatGPT",
      how: "ChatGPT search retrieves from the Bing index through OpenAI's search partnership. The practical consequence is blunt: a page Bing has not indexed cannot be retrieved by ChatGPT search. Getting indexed by Bing is the prerequisite, not an afterthought.",
    },
    {
      name: "Perplexity",
      how: "Perplexity runs a live web retrieval on almost every query using its own crawler and search partners, reranks the results, and generates the answer with citations built in. Freshness and clear, on-topic pages tend to surface, though Perplexity does not publish its ranking formula.",
    },
    {
      name: "Google AI",
      how: "Google AI Overviews and AI Mode are grounded against Google's own search index. Google calls it grounding with Google Search. Citations skew heavily toward pages that already rank organically, so your normal SEO is the substrate the AI answer is built on.",
    },
    {
      name: "Gemini",
      how: "Gemini uses the same grounding with Google Search mechanism, documented in Google's Gemini API. Grounded answers must show their supporting sources, so the same authority and structure signals apply.",
    },
  ],
  honest:
    "What we will not tell you: the exact weightings each engine uses. Numbers like 'ChatGPT weighs domain authority 40 percent' circulate on AEO blogs and are invented. No AI provider publishes them. We optimise for what is documented and observable, not for made-up percentages.",
};

export const CHECKLIST = {
  eyebrow: "WHAT TO ACTUALLY FIX",
  heading: "The AEO checklist",
  intro:
    "This is what decides whether an AI can read, trust, and quote you. It is also what our free checker measures.",
  items: [
    {
      title: "Content that answers the question directly",
      body: "Lead each page with a clear, direct answer, then support it. The Princeton and IIT Delhi study found that adding citations, quotations, and statistics were among the most effective ways to lift visibility in AI answers, by up to 40 percent.",
      status: "core",
    },
    {
      title: "Clean structure the AI can extract",
      body: "Real headings, short direct passages, lists, and tables. AI answers are built from passages, not whole pages. Make the passage liftable.",
      status: "core",
    },
    {
      title: "Structured data (schema)",
      body: "Mark up your content so machines can parse what it is: articles, FAQs, products, organisation. It helps engines understand and reuse your content.",
      status: "core",
    },
    {
      title: "Crawlable and server-rendered",
      body: "If your content only appears after JavaScript runs, some crawlers miss it. Make sure the answer is in the HTML, and that AI crawlers are not blocked.",
      status: "core",
    },
    {
      title: "Indexed by Bing, not just Google",
      body: "ChatGPT search retrieves from Bing. If Bing has not indexed you, ChatGPT cannot cite you. Most businesses never check this.",
      status: "core",
    },
    {
      title: "Third-party citations and authority",
      body: "Being named on sites the AI already trusts, directories, reviews, and mentions, is a strong signal. This is the GEO half: make the source trusted, not just the page quotable.",
      status: "core",
    },
    {
      title: "llms.txt (optional, honest note)",
      body: "You will see llms.txt recommended everywhere. The truth as of early 2026: no major AI engine confirms using it, and Google has said plainly that Search does not. It is low cost to add, but do not expect it to move AI rankings. We would rather tell you that than sell you a no-op.",
      status: "caveat",
    },
  ],
};

export const CHATGPT = {
  eyebrow: "HOW TO RANK IN CHATGPT",
  heading: "How to get named by ChatGPT specifically",
  intro:
    "The most asked question, with the most concrete answer, because ChatGPT's retrieval source is known.",
  steps: [
    {
      n: "01",
      title: "Get indexed by Bing first",
      body: "ChatGPT search pulls from the Bing index. Submit your site to Bing Webmaster Tools and confirm your key pages are indexed. Nothing else works until this does.",
    },
    {
      n: "02",
      title: "Answer the exact questions buyers ask",
      body: "Write pages that answer the real questions in your space, in plain language, with the answer up top. That is what gets retrieved and quoted.",
    },
    {
      n: "03",
      title: "Earn mentions on sources it trusts",
      body: "Get named in directories, roundups, and reviews in your niche. ChatGPT assembles answers from multiple sources, so presence beyond your own site matters.",
    },
    {
      n: "04",
      title: "Check, then fix what is missing",
      body: "Ask ChatGPT the questions your buyers ask and see who it names. Then close the gaps between you and the names it gives.",
    },
  ],
};

export const MEASURE = {
  eyebrow: "MEASURE IT, DO NOT GUESS",
  heading: "How to measure AI visibility",
  method: {
    heading: "The method (do this yourself)",
    body: "Write down the ten questions a buyer would ask an AI before hiring someone like you. Once a month, put each one to ChatGPT, Perplexity, and Google AI, and record whether you are named, mentioned, or absent, and who is named instead. That trend line is your AI visibility.",
  },
  tool: {
    heading: "Or run our free checker",
    body: "The AI Visibility Checker does the run for you and audits your site against the checklist above, so you see where you stand and why in about a minute.",
    cta: { label: "Check my visibility", to: "/ai-visibility-checker/" },
  },
};

export const FIX = {
  eyebrow: "EVERY GUIDE TELLS YOU. WE DO IT.",
  heading: "Reading this is the easy part. Doing it is the work.",
  body: [
    "You now know how AEO works. Turning it into your business actually getting named is content, technical fixes, and authority built over time. It is not a setting you flip.",
    "We are a GTM engineering team. We do the work for you: the technical fixes, the content that answers what your buyers ask, and the third-party proof that makes an AI trust you enough to name you. You do not learn AEO. We make you show up.",
  ],
  cta: { label: "Get my visibility fixed", to: "/ai-clarity-workshop/" },
  support: "You are hiring a team, not buying software.",
  proof:
    "We did this to our own site before selling it. Ask ChatGPT about getting more customers with AI, and our name comes up. In a space this crowded, that is the proof the method works.",
};

// Long-form, keyword-rich deep dive rendered just before the FAQ. Buyer-voice,
// problem-first, question-style H2s. No dashes, no fabricated numbers, honest
// about how retrieval and citation actually work (no guaranteed citations).
export const DEEP_DIVE: {
  eyebrow: string;
  heading: string;
  intro: string;
  sections: {
    h2: string;
    body: string[];
    link?: { pre: string; label: string; href: string; post: string };
  }[];
} = {
  eyebrow: "THE LONGER ANSWER",
  heading: "Answer engine optimization, in depth",
  intro:
    "The plainer, longer version of the questions buyers ask us most about AEO, GEO, and getting named by AI. No hype and no invented percentages, just how it works and what it means for you.",
  sections: [
    {
      h2: "Why does my site get traffic but never get named by AI?",
      body: [
        "This is the gap most owners feel before they have a word for it. Your analytics show visits, your rankings look fine, and yet when you ask ChatGPT or Perplexity who to hire in your space, your name is not in the answer. Traffic and AI search visibility are two different games. A page can rank on Google and still never be pulled into an AI answer, because the engine is looking for something it can quote cleanly, not just a link it can list.",
        "The reason is how these answers are built. When a buyer asks an assistant a question, it does not read your whole site. It retrieves a handful of candidate pages, reranks them, and writes a short answer grounded in the passages it trusts most. If your best answer is buried three scrolls down, wrapped in marketing language, or only appears after JavaScript loads, the engine often cannot lift it. You were in the library, but not on the shelf it reached for.",
        "So the honest first step is not more content. It is finding out where you actually stand today: which questions name you, which name a competitor, and which return nobody at all. That map tells you whether your real problem is being unquotable, being untrusted, or simply not being indexed where the engine looks.",
      ],
      link: {
        pre: "The fastest way to get that map is to",
        label: "check whether AI names your business",
        href: "/ai-visibility-checker/",
        post: "and read the gaps for yourself.",
      },
    },
    {
      h2: "AEO vs SEO: do I still need traditional SEO to show up in AI answers?",
      body: [
        "Yes, and this trips up a lot of people who hear that AI is replacing search. Answer engine optimization does not sit next to SEO as a rival. It sits on top of it. The pages that AI assistants cite are, overwhelmingly, pages that already earn trust in ordinary search. Google AI Overviews are grounded in Google's own index, and ChatGPT search retrieves from Bing, so if neither has indexed and ranked you, there is nothing for the AI to pull.",
        "The practical way to hold both ideas at once: SEO decides whether you are eligible, AEO decides whether you get chosen. Traditional SEO builds the relevance, the authority, and the technical health that get a page indexed and ranked. AEO is the layer that makes that ranking page easy to extract into an answer, with a direct response up top, clean headings, and structure a machine can parse. Skip the foundation and the AEO polish has nothing to sit on.",
        "This is why we treat the two as one job rather than two invoices. If your organic footprint is thin, the fastest route to AI visibility often runs through fixing the fundamentals first.",
      ],
      link: {
        pre: "That groundwork is the same work our",
        label: "SEO agency in Singapore",
        href: "/seo-agency-singapore/",
        post: "runs before layering AEO on top.",
      },
    },
    {
      h2: "How do AI assistants actually pick which sources to cite?",
      body: [
        "Under the branding, most assistants share one pattern called retrieval augmented generation. The model does not answer from memory alone. It runs a search, retrieves a set of candidate pages, reranks them by relevance and trust, and then writes an answer grounded in the passages it kept, usually with citations attached. What changes between engines is where they retrieve from and how they weight what they find.",
        "Be wary of any guide that hands you exact percentages for this. No major provider publishes the weights its reranker uses, and numbers like a source counting for a fixed share of the decision are invented. What is documented and observable is enough to act on: clear, direct answers get quoted more than vague prose, pages a machine can parse get extracted more than tangled ones, and sources the engine already trusts get cited more than unknown ones. Those are the levers you can actually pull.",
        "The useful mental model is a careful researcher on a deadline. It wants a claim it can lift, from a page it can read, published by a source it has reason to believe. Make each of those three easy and you improve your odds. Nobody, including us, can promise a specific citation, because the engines change and the retrieval is probabilistic. What you can do is stop being the source that is hard to quote.",
      ],
    },
    {
      h2: "How do I get cited by ChatGPT and Perplexity specifically?",
      body: [
        "Start with ChatGPT, because its retrieval source is the most concrete. ChatGPT search pulls from the Bing index through OpenAI's search partnership, which means a blunt prerequisite: if Bing has not indexed your key pages, ChatGPT search cannot cite them, no matter how good the writing is. Submit your site in Bing Webmaster Tools, confirm your important pages are indexed, and only then worry about the finer AEO work. Most businesses have never checked this, and it is the single most common blind spot we find.",
        "Perplexity behaves differently. It runs a live web retrieval on almost every query with its own crawler and search partners, so freshness and clear, on-topic pages that answer the question directly tend to surface. It does not publish its ranking formula, so treat anyone who claims to know the exact recipe with suspicion. For both engines, being named on third-party sources they already trust, the directories, roundups, and reviews in your niche, raises the odds, because assistants assemble answers from more than your own site.",
        "None of this is a guaranteed citation, and any vendor promising one is selling certainty that does not exist. What it does is move you from unciteable to citeable, then keep tightening the gap between you and the names the AI gives today.",
      ],
    },
    {
      h2: "Is generative engine optimization (GEO) different from AEO, and which do I need?",
      body: [
        "You will see AEO and GEO used interchangeably, and some in the field argue the labels do not matter. The distinction we find useful is on-page versus off-page. Answer engine optimization is the work on your own pages: leading with a direct answer, structuring content so it can be lifted, and marking it up so machines understand what it is. Generative engine optimization is the work off your pages: the citations, mentions, reviews, and entity signals that make a generative engine trust your source enough to name it.",
        "The short answer to which you need is both. A perfectly structured page nobody else vouches for stays invisible, and a well-cited brand with an unreadable site gives the engine nothing clean to quote. AEO makes you quotable. GEO makes you trusted. Visibility in AI answers comes from the overlap of the two.",
        "If the terminology feels like it is multiplying faster than the substance, that instinct is correct. The underlying playbook has not changed much: publish genuinely useful answers, make them easy for both people and machines to read, and earn real credibility from other sources. The labels are new. The work is mostly the same work good marketers were already doing, pointed at a new kind of reader.",
      ],
    },
  ],
};

export const FAQS = [
  {
    question: "What is answer engine optimization (AEO)?",
    answer:
      "Answer engine optimization is the work of getting your business named and cited when someone asks an AI a question. Instead of ranking a link for a click, the goal is to be one of the two or three names the AI gives in its answer.",
  },
  {
    question: "What is the difference between AEO, GEO, and SEO?",
    answer:
      "SEO ranks a link on the results page. AEO makes your page quotable so an answer engine can lift a direct answer from it. GEO builds the off-page authority that makes a generative engine trust and cite your source. AEO and GEO both target visibility inside AI answers; SEO is the foundation they sit on.",
  },
  {
    question: "Are AEO and GEO the same thing?",
    answer:
      "Some in the field treat them as the same, and the labels do overlap. The useful distinction is on-page versus off-page: AEO makes your page extractable, GEO makes your source trusted. You need both.",
  },
  {
    question: "How do I rank in ChatGPT?",
    answer:
      "ChatGPT search retrieves from the Bing index, so first make sure Bing has indexed your key pages. Then answer the exact questions buyers ask, with the answer up top, and earn mentions on sources ChatGPT already trusts. A page Bing has not indexed cannot be cited by ChatGPT search.",
  },
  {
    question: "How does ChatGPT choose which sources to cite?",
    answer:
      "It runs a search, retrieves candidate pages from the Bing index, reranks them, and writes an answer grounded in what it retrieved, with citations. The exact ranking weights are not published, so be wary of any guide that quotes specific percentages.",
  },
  {
    question: "Does llms.txt actually help with AI search?",
    answer:
      "As of early 2026, no major AI engine confirms using llms.txt, and Google has stated plainly that Search does not read it. It is low cost to add but should not be expected to improve your AI rankings.",
  },
  {
    question: "How do I measure AI visibility?",
    answer:
      "List the ten questions a buyer would ask an AI before hiring, and once a month put each to ChatGPT, Perplexity, and Google AI, recording whether you are named, mentioned, or absent. Our free AI Visibility Checker automates the run and audits your site.",
  },
  {
    question: "Does AEO replace SEO, or do I still need traditional SEO?",
    answer:
      "You still need SEO. AI answers overwhelmingly cite pages that already rank in normal search, so traditional SEO is the foundation and AEO is the layer that makes those pages extractable into answers.",
  },
  {
    question: "How do I get cited by Perplexity?",
    answer:
      "Perplexity retrieves live from the web on almost every query and generates answers with citations built in. Clear, current, on-topic pages that directly answer the query tend to surface. It does not publish its exact ranking formula.",
  },
  {
    question: "What is Google AI Overviews and how does it pick sources?",
    answer:
      "AI Overviews are AI summaries at the top of Google results, grounded against Google's own search index. Citations skew toward pages that already rank organically, so your normal search visibility strongly influences whether you appear.",
  },
  {
    question: "Does schema markup help with AEO?",
    answer:
      "Structured data helps machines parse what your content is, which supports understanding and reuse. It is part of the checklist, alongside clean structure, direct answers, and crawlability.",
  },
  {
    question: "How long does AEO take to show results?",
    answer:
      "It depends on how crowded your space is and where you start. Some fixes, like getting indexed by Bing and adding direct answers, show up quickly. Building the authority that earns citations takes longer. We scope it honestly after a check.",
  },
];

export const FINAL = {
  eyebrow: "FIND OUT WHERE YOU STAND",
  heading: "See whether AI names you, or your competitor.",
  sub: "Takes a minute. Free score, no signup.",
  ctaA: { label: "Check my visibility", to: "/ai-visibility-checker/" },
  ctaB: { label: "Get it done for me", to: "/ai-clarity-workshop/" },
};
