// Glossary cluster. One term per page, slug = title = H1. Definitions are
// extracted from copy the team already wrote (the AEO and lead-qualification
// FAQ accordions, and the PDPA/PSG notes on the SG service pages). Each term
// links back to the ranking page it belongs to so it earns an in-body inlink.

export type GlossaryTerm = {
  slug: string;
  term: string; // short display term, e.g. "Answer Engine Optimization (AEO)"
  title: string; // meta title, keyword-led, <= 60 chars
  description: string; // meta description
  question: string; // the definitional query this page owns
  definition: string; // 1 to 2 sentence direct answer (the featured-snippet line)
  body: string[]; // 2 to 4 short paragraphs expanding the definition
  related: { anchor: string; to: string }[]; // incl. the ranking page it belongs to
};

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    slug: "what-is-aeo",
    term: "Answer Engine Optimization (AEO)",
    title: "What Is Answer Engine Optimization (AEO)?",
    description:
      "Answer engine optimization (AEO) is the practice of getting your business named and cited in AI answers from ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
    question: "What is answer engine optimization (AEO)?",
    definition:
      "Answer engine optimization (AEO) is the work of getting your business named and cited when someone asks an AI a question. Instead of ranking a link for a click, the goal is to be one of the two or three names the AI gives in its answer.",
    body: [
      "Buyers increasingly ask ChatGPT, Perplexity, Gemini, or Google AI who to hire, read the answer, and then contact only the two or three names it lists. If you are not one of those names, you are not in the running.",
      "AEO is the on-page half of the work: structure your content so an answer engine can lift a clean, direct answer straight out of it, using clear headings, direct answers, lists, tables, and schema. The off-page half, building the authority that makes a source trusted, is usually called GEO.",
      "AEO sits on top of SEO rather than replacing it. AI answers overwhelmingly cite pages that already rank in normal search, so traditional SEO is the foundation and AEO is the layer that makes a ranking page extractable into an answer.",
    ],
    related: [
      { anchor: "answer engine optimization", to: "/answer-engine-optimization/" },
      { anchor: "check whether AI names your business", to: "/ai-visibility-checker/" },
    ],
  },
  {
    slug: "aeo-vs-geo-vs-seo",
    term: "AEO vs GEO vs SEO",
    title: "AEO vs GEO vs SEO: What Is the Difference?",
    description:
      "AEO, GEO, and SEO all get you found, but on different surfaces. Here is what each means and how they fit together.",
    question: "What is the difference between AEO, GEO, and SEO?",
    definition:
      "SEO ranks a link on the results page, AEO makes your page quotable so an answer engine can lift a direct answer from it, and GEO builds the off-page authority that makes a generative engine trust and cite your source. AEO and GEO both target visibility inside AI answers; SEO is the foundation they sit on.",
    body: [
      "SEO, search engine optimization, is about ranking a link on the results page and earning a click to your site. It rewards relevance, authority, and backlinks, and you measure it with rankings and organic traffic.",
      "AEO, answer engine optimization, is the on-page work of making a page quotable. It structures content into clear headings, direct answers, lists, and tables so an answer engine can extract a clean passage. The win is a citation and a spot on the shortlist of two or three names.",
      "GEO, generative engine optimization, is the off-page work of making your source trusted, through entities, third-party citations, reviews, and authority. Some in the field treat AEO and GEO as the same thing; the useful split is on-page versus off-page.",
      "The three are not rivals. You do SEO to rank, make those pages extractable with AEO, and build the authority with GEO that gets you cited. You need all three.",
    ],
    related: [
      { anchor: "answer engine optimization", to: "/answer-engine-optimization/" },
      { anchor: "SEO agency in Singapore", to: "/seo-agency-singapore/" },
    ],
  },
  {
    slug: "what-is-speed-to-lead",
    term: "Speed to Lead",
    title: "What Is Speed to Lead?",
    description:
      "Speed to lead is how fast you respond to a new enquiry. The faster the first credible reply, the more likely the lead books with you.",
    question: "What is speed to lead?",
    definition:
      "Speed to lead is how fast you respond to a new enquiry after it comes in. The faster the first credible reply, the more likely the lead qualifies and books with you, because a qualified lead you reach on Thursday was often not qualified on Tuesday.",
    body: [
      "Speed is not a nice to have in qualification, it is most of the outcome. By the time a lead reaches a person hours later, the moment has usually passed and the buyer has moved on to whoever answered first.",
      "The research is old but directional. Oldroyd and InsideSales.com found in 2007 that the odds of qualifying a lead were about 21 times higher at 5 minutes than at 30, and a 2011 Harvard Business Review study found firms responding within the first hour were roughly 7 times more likely to qualify a lead than those waiting an hour longer. Both studies involve a vendor that sold response software, so treat them as directional rather than a current benchmark.",
      "Measure it with the median, not the average. One lead answered in four days will hide a hundred answered in ten minutes. The practical fix is availability aware routing and follow up that reaches an available person within minutes, then lets the lead book on the spot.",
    ],
    related: [
      { anchor: "lead generation agency, Singapore", to: "/lead-generation-agency-singapore/" },
      { anchor: "follow-up automation", to: "/follow-up-automation/" },
    ],
  },
  {
    slug: "what-is-lead-qualification",
    term: "Lead Qualification",
    title: "What Is Lead Qualification?",
    description:
      "Lead qualification is deciding which leads are worth your sales team's time before anyone calls, so you spend effort only on the ones likely to buy.",
    question: "What is lead qualification?",
    definition:
      "Lead qualification is deciding, before a salesperson spends time, whether a lead can realistically become revenue. It combines fit, meaning whether they are the kind of business you serve, with intent, meaning whether they have a real problem, a timeline, and the ability to decide.",
    body: [
      "Done well, qualification routes the right leads to a person within minutes and sends the rest somewhere useful instead of into a rep's day. Done badly, it is a scoring model nobody trusts sitting on top of a CRM nobody fills in.",
      "Fit and intent are two separate inputs that get confused constantly. Fit is who they are, firmographic and stable. Intent is what they did, behavioural and perishable. Score them separately or you will rank a curious student above a buying committee.",
      "It usually fails for practical reasons, not clever ones: nobody agreed what qualified means, the model scores engagement instead of intent, the ideal customer profile was never written down, response time is measured in hours, or there is no explicit path for a bad lead to leave the pipeline.",
      "Automation cannot supply an ideal customer profile you never defined. Define the fit criteria first, then a pipeline of capture, enrichment, scoring, routing, and disqualification can apply it consistently and fast.",
    ],
    related: [
      { anchor: "lead qualification", to: "/lead-qualification/" },
      { anchor: "lead generation agency, Singapore", to: "/lead-generation-agency-singapore/" },
    ],
  },
  {
    slug: "mql-vs-sql",
    term: "MQL vs SQL",
    title: "MQL vs SQL: What Is the Difference?",
    description:
      "An MQL (marketing qualified lead) has shown interest. An SQL (sales qualified lead) is ready for a sales conversation. Here is where the line sits.",
    question: "What is the difference between an MQL and an SQL?",
    definition:
      "An MQL, or marketing qualified lead, is a lead marketing judges ready to hand to sales based on fit and engagement. An SQL, or sales qualified lead, is a lead sales has spoken to and confirmed as a real opportunity.",
    body: [
      "An MQL is an opinion, not a commitment. Marketing decides this person is ready to hand over, based on who they are plus how they have engaged. It is the top of the handoff, not proof of a deal.",
      "An SQL is the one that should drive forecasting. Sales has actually had a conversation and confirmed there is a real opportunity worth pursuing.",
      "The step most companies skip sits between the two: the sales accepted lead, where sales explicitly accepts or rejects the MQL with a reason. Without it, nobody can tell whether marketing is passing junk or sales is ignoring good leads. Adding that accept or reject step is the cheapest way to settle arguments about lead quality.",
      "One caution on measurement: comparing your MQL to SQL rate against an industry benchmark is close to meaningless, because every company defines an MQL differently. Track your own trend instead.",
    ],
    related: [
      { anchor: "lead qualification", to: "/lead-qualification/" },
    ],
  },
  {
    slug: "what-is-a-product-qualified-lead",
    term: "Product Qualified Lead (PQL)",
    title: "What Is a Product Qualified Lead (PQL)?",
    description:
      "A product qualified lead (PQL) is a user who has experienced real value in your product, usually via a free trial or freemium tier, and is likely to convert.",
    question: "What is a product qualified lead?",
    definition:
      "A product qualified lead (PQL) is a free or trial user whose actual behaviour in your product signals readiness to buy, such as hitting a usage limit or inviting their team. It is behavioural rather than demographic, which usually makes it the strongest signal available if you have a product you can instrument.",
    body: [
      "Unlike an MQL, which rests on fit and engagement, a PQL is grounded in what the person did inside the product. That behaviour is a much harder signal than opening emails or downloading a guide.",
      "Typical PQL signals include reaching a usage limit on a free or freemium tier, inviting teammates, or repeatedly using a core feature. These actions show real value has been experienced, not just interest.",
      "PQLs only exist if you have a product you can instrument to capture that behaviour. Where you can, they are usually the highest quality signal available, because they measure demonstrated value rather than demographics.",
    ],
    related: [
      { anchor: "lead qualification", to: "/lead-qualification/" },
      { anchor: "lead generation for B2B SaaS in Singapore", to: "/lead-generation-for-b2b-saas-singapore/" },
    ],
  },
  {
    slug: "what-is-bant",
    term: "BANT",
    title: "What Is BANT in Sales?",
    description:
      "BANT stands for Budget, Authority, Need, and Timeline. It is a classic framework for qualifying whether a lead is worth pursuing.",
    question: "What is BANT?",
    definition:
      "BANT stands for Budget, Authority, Need, and Timing. It is a classic sales checklist, widely credited to IBM, for judging whether a lead is worth pursuing.",
    body: [
      "BANT was designed for a salesperson in a conversation, not to run automatically against hundreds of form fills a week. Used as a human checklist it is still useful; used as a scoring gate at the top of a funnel it strains.",
      "Leading with budget prices you as a vendor before you have shown value, and buyers routinely pick a preferred supplier before a budget line exists. That is the wrong end to start from for most inbound.",
      "The bigger problem is Authority. Forrester's 2021 B2B buying survey found more than 80 percent of buyers involved a group of stakeholders in their most recent purchase, so a single authority field cannot represent a buying committee. Newer frameworks like CHAMP lead with the challenge instead of the budget, though they still inherit the single authority assumption.",
    ],
    related: [
      { anchor: "lead qualification", to: "/lead-qualification/" },
    ],
  },
  {
    slug: "lead-qualification-vs-lead-scoring",
    term: "Lead Qualification vs Lead Scoring",
    title: "Lead Qualification vs Lead Scoring",
    description:
      "Lead scoring ranks leads with a number. Lead qualification decides yes or no on whether to pursue them. Here is how the two work together.",
    question: "What is the difference between lead qualification and lead scoring?",
    definition:
      "Lead scoring is a ranking mechanism that assigns points based on who someone is and what they did. Lead qualification is the decision about whether to spend sales time on them. Scoring is one input to qualification, not a replacement for it.",
    body: [
      "Scoring answers questions well when the answer is in the data: is this the right kind of company by size, industry, and geography, have they shown repeated interest, and should this be prioritised above the other forty leads today. It is fast, consistent, and cheap.",
      "Scoring is also blind to anything the person did not do on your website. It cannot ask what they are actually trying to fix, whether the timeline is real, who else is involved, or what happens if they do nothing. Those answers only come from a conversation.",
      "The useful pattern is both. Score to decide who is worth a conversation, then have the conversation immediately, by voice or chat, while the intent is still live. A score cannot ask a follow up question, so the score sorts and the conversation qualifies.",
    ],
    related: [
      { anchor: "lead qualification", to: "/lead-qualification/" },
    ],
  },
  {
    slug: "what-is-pdpa",
    term: "PDPA (Singapore)",
    title: "What Is the PDPA in Singapore?",
    description:
      "The PDPA is Singapore's Personal Data Protection Act. It governs how businesses collect, use, and disclose personal data, including outbound marketing and the Do Not Call registry.",
    question: "What is the PDPA in Singapore?",
    definition:
      "The PDPA is Singapore's Personal Data Protection Act, the law that governs how businesses collect, use, and disclose personal data. It also covers the Do Not Call Registry, which restricts marketing messages to Singapore numbers that have opted out.",
    body: [
      "For lead generation and outreach, the practical effect is that contact respects consent, quiet hours, and the Singapore Do Not Call Registry under the PDPA. This matters especially for cold outreach, where the rules are strictest.",
      "Compliant systems build these rules in rather than bolting them on, so follow up and outbound stay within consent and the registry by default rather than relying on someone to remember.",
      "This is general information about what the rules require, not legal advice. Confirm the specifics that apply to your business with your own compliance team or the Personal Data Protection Commission.",
    ],
    related: [
      { anchor: "lead generation agency, Singapore", to: "/lead-generation-agency-singapore/" },
      { anchor: "appointment setting in Singapore", to: "/appointment-setting-singapore/" },
    ],
  },
  {
    slug: "what-is-the-psg-grant",
    term: "PSG Grant (Singapore)",
    title: "What Is the PSG Grant in Singapore?",
    description:
      "The Productivity Solutions Grant (PSG) helps Singapore SMEs adopt approved digital solutions, commonly with up to 50 percent support, subject to approval.",
    question: "What is the PSG grant in Singapore?",
    definition:
      "The Productivity Solutions Grant (PSG) helps Singapore SMEs adopt approved digital solutions. Qualifying businesses may receive up to 50 percent support, subject to approval.",
    body: [
      "The PSG supports pre-approved solutions across areas like digital marketing, customer management, and productivity tools. Support is offered to qualifying Singapore SMEs, commonly at up to 50 percent, subject to IMDA approval.",
      "Eligibility, support levels, and the list of approved solutions change over time. Treat any figure here as a general guide, not a guarantee.",
      "This is general information, not grant advice. Confirm current eligibility, rates, and which solutions qualify with Enterprise Singapore before you rely on the grant for a purchase.",
    ],
    related: [
      { anchor: "SEO agency in Singapore", to: "/seo-agency-singapore/" },
      { anchor: "lead generation agency, Singapore", to: "/lead-generation-agency-singapore/" },
    ],
  },
  {
    slug: "how-to-rank-in-chatgpt",
    term: "Ranking in ChatGPT",
    title: "How Do I Rank in ChatGPT?",
    description:
      "ChatGPT search retrieves from the Bing index, so a page Bing has not indexed cannot be cited. Get indexed, answer the exact question up top, and earn trusted mentions.",
    question: "How do I rank in ChatGPT?",
    definition:
      "ChatGPT search retrieves candidate pages from the Bing index, so the first requirement is that Bing has indexed your key pages. A page Bing has not indexed cannot be cited by ChatGPT search.",
    body: [
      "After indexing, answer the exact questions buyers ask, with the answer at the top of the page, and earn mentions on sources ChatGPT already trusts.",
      "Under the hood, ChatGPT runs a search, retrieves candidates from Bing, reranks them, and writes an answer grounded in what it retrieved, with citations. The exact ranking weights are not published, so be wary of any guide that quotes specific percentages.",
      "This is the on-page half of answer engine optimization. The foundation underneath it is ordinary SEO, since AI answers overwhelmingly cite pages that already rank in normal search.",
    ],
    related: [
      { anchor: "answer engine optimization", to: "/answer-engine-optimization/" },
      { anchor: "check whether AI names your business", to: "/ai-visibility-checker/" },
    ],
  },
  {
    slug: "how-to-get-cited-by-perplexity",
    term: "Getting Cited by Perplexity",
    title: "How Do I Get Cited by Perplexity?",
    description:
      "Perplexity retrieves live from the web and generates answers with citations. Clear, current, on-topic pages that directly answer the query tend to surface.",
    question: "How do I get cited by Perplexity?",
    definition:
      "Perplexity retrieves live from the web on almost every query and generates answers with citations built in. Clear, current, on-topic pages that directly answer the query tend to surface. It does not publish its exact ranking formula.",
    body: [
      "Because Perplexity fetches live rather than relying only on a stored index, freshness and a direct answer to the exact question matter. A page that states the answer plainly, near the top, is easier to lift into a cited response.",
      "The same groundwork that helps you get cited by ChatGPT and Google AI helps here: be indexable, answer real buyer questions directly, and build the third-party mentions that make your source trusted.",
      "Measure it the same way you measure any AI visibility: put the questions a buyer would ask to Perplexity once a month and record whether you are named, mentioned, or absent.",
    ],
    related: [
      { anchor: "answer engine optimization", to: "/answer-engine-optimization/" },
      { anchor: "check whether AI names your business", to: "/ai-visibility-checker/" },
    ],
  },
  {
    slug: "does-llms-txt-help",
    term: "Does llms.txt Help?",
    title: "Does llms.txt Help With AI Search?",
    description:
      "As of early 2026, no major AI engine confirms using llms.txt, and Google says Search does not read it. It is low cost to add but should not be expected to lift AI rankings.",
    question: "Does llms.txt actually help with AI search?",
    definition:
      "As of early 2026, no major AI engine confirms using llms.txt, and Google has stated plainly that Search does not read it. It is low cost to add but should not be expected to improve your AI rankings.",
    body: [
      "llms.txt is a proposed file that lists a site's key content for language models. The idea is reasonable, but adoption by the engines that matter is unconfirmed, so treat it as a low-cost, low-certainty addition rather than a ranking lever.",
      "What actually moves AI visibility is being indexable, answering the exact questions buyers ask, and earning trusted mentions. Spend your effort there first.",
    ],
    related: [
      { anchor: "answer engine optimization", to: "/answer-engine-optimization/" },
      { anchor: "check whether AI names your business", to: "/ai-visibility-checker/" },
    ],
  },
];
