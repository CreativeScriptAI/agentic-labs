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
  {
    slug: "what-is-geo",
    term: "Generative Engine Optimization (GEO)",
    title: "What Is Generative Engine Optimization (GEO)?",
    description:
      "Generative engine optimization (GEO) is the off-page work of building the authority and mentions that make AI answer engines trust and cite your business.",
    question: "What is generative engine optimization (GEO)?",
    definition:
      "Generative engine optimization (GEO) is the off-page work of making your brand trusted enough that AI answer engines cite it. Where AEO structures a page so an answer can be lifted from it, GEO builds the entities, third-party mentions, reviews, and authority that make a generative engine treat your business as a credible source.",
    body: [
      "When someone asks ChatGPT, Perplexity, or Google AI who to hire, the engine names a handful of sources it trusts. GEO is the work of becoming one of those trusted sources, so the goal is being cited, not just ranked.",
      "GEO and AEO are two halves of the same job. AEO is on-page: clear headings, direct answers, lists, tables, and schema so a passage is extractable. GEO is off-page: consistent business entities, mentions on sites the engines already trust, and reviews that back up your claims.",
      "Some practitioners use AEO and GEO interchangeably. The useful distinction is on-page versus off-page. Either way, both sit on top of ordinary SEO, because AI answers overwhelmingly cite pages that already rank in normal search.",
    ],
    related: [
      { anchor: "answer engine optimization", to: "/answer-engine-optimization/" },
      { anchor: "AEO vs GEO vs SEO", to: "/glossary/aeo-vs-geo-vs-seo/" },
    ],
  },
  {
    slug: "what-is-rag",
    term: "Retrieval Augmented Generation (RAG)",
    title: "What Is Retrieval Augmented Generation (RAG)?",
    description:
      "Retrieval augmented generation (RAG) is when an AI retrieves relevant documents first, then writes its answer from them. It is how ChatGPT search and Perplexity ground and cite answers.",
    question: "What is retrieval augmented generation (RAG)?",
    definition:
      "Retrieval augmented generation (RAG) is a technique where an AI model retrieves relevant documents from an external source, then uses them to write its answer, rather than relying only on what it memorised during training. It is how tools like ChatGPT search and Perplexity ground answers in live web pages and cite them.",
    body: [
      "A plain language model answers from its training data, which can be out of date or invented. RAG adds a retrieval step first: the system searches a source, pulls back the most relevant passages, and gives the model those passages to write from.",
      "This is why answer engines can cite specific pages. When Perplexity or ChatGPT search answers a question, it retrieves candidate pages, then generates an answer grounded in what it pulled back, with links to the sources.",
      "For a business, RAG is the reason being indexable and quotable matters. If your page is not in the source the engine retrieves from, it cannot be pulled into the answer, no matter how good the content is.",
    ],
    related: [
      { anchor: "answer engine optimization", to: "/answer-engine-optimization/" },
      { anchor: "how to rank in ChatGPT", to: "/glossary/how-to-rank-in-chatgpt/" },
    ],
  },
  {
    slug: "what-is-lead-scoring",
    term: "Lead Scoring",
    title: "What Is Lead Scoring?",
    description:
      "Lead scoring ranks leads with points based on who they are and what they have done, so your team can prioritise the ones most likely to buy.",
    question: "What is lead scoring?",
    definition:
      "Lead scoring is a way of ranking leads by assigning points based on who they are (fit) and what they have done (engagement), so your team can prioritise the ones most likely to buy. It is one input to qualification, not the decision itself.",
    body: [
      "A scoring model adds points for signals that correlate with buying: the right company size, industry, and location, plus actions like repeat visits, pricing page views, or a demo request. Higher scores rise to the top of the queue.",
      "Scoring is fast, consistent, and cheap, and it answers well when the answer is already in your data. It is blind to anything the person did not do on your site, such as their real timeline, budget, or who else is involved in the decision.",
      "The reliable pattern is to score to decide who is worth a conversation, then have that conversation quickly while intent is still live. A score sorts leads; a conversation qualifies them.",
    ],
    related: [
      { anchor: "lead qualification", to: "/lead-qualification/" },
      { anchor: "lead qualification vs lead scoring", to: "/glossary/lead-qualification-vs-lead-scoring/" },
    ],
  },
  {
    slug: "what-is-conversational-ai",
    term: "Conversational AI",
    title: "What Is Conversational AI?",
    description:
      "Conversational AI is software that understands and responds in natural language, by chat or voice, so it can hold a real back and forth instead of following a fixed menu.",
    question: "What is conversational AI?",
    definition:
      "Conversational AI is software that understands and responds in natural language, by text or voice, so it can hold a back and forth with a person instead of following a fixed menu. Modern versions use large language models, which lets them handle questions phrased in many ways rather than only exact keywords.",
    body: [
      "Older chatbots followed rigid decision trees and broke the moment someone phrased a question differently. Conversational AI interprets intent, so a visitor can ask in their own words and still get a useful answer.",
      "For lead work, this matters because a conversation can do what a form cannot: ask a follow up question, qualify on the spot, answer objections, and book a call while the person is still interested.",
      "Conversational AI covers both chat and voice. A voice agent that answers calls and a chat assistant on your website are the same idea applied to different channels.",
    ],
    related: [
      { anchor: "AI receptionist in Singapore", to: "/ai-receptionist-singapore/" },
      { anchor: "AI voice agent", to: "/ai-voice-agent/" },
    ],
  },
  {
    slug: "what-is-whatsapp-business-api",
    term: "WhatsApp Business API",
    title: "What Is the WhatsApp Business API?",
    description:
      "The WhatsApp Business API is Meta's official interface for teams to send and receive WhatsApp messages at scale through their own software, with automation and multiple agents on one number.",
    question: "What is the WhatsApp Business API?",
    definition:
      "The WhatsApp Business API is Meta's official interface for medium and large businesses to send and receive WhatsApp messages at scale through their own software, rather than tapping on a phone. It supports automation, multiple agents on one number, and integration with your CRM or booking system.",
    body: [
      "It is different from the free WhatsApp Business app, which is built for a single small business owner on one device. The API is for teams and software: it lets automated systems and multiple staff handle conversations on one business number.",
      "Meta requires businesses to use an approved provider to access the API, and outbound messages that start a conversation must use pre-approved message templates. Ongoing replies within a set service window are freer form.",
      "In Singapore, where WhatsApp is a default channel for enquiries, it is a common way to reach a new lead fast and let them reply in the app they already use, while staying within consent and the rules on business messaging.",
    ],
    related: [
      { anchor: "WhatsApp Business API in Singapore", to: "/whatsapp-business-api-singapore/" },
      { anchor: "follow-up automation", to: "/follow-up-automation/" },
    ],
  },
  {
    slug: "what-is-the-do-not-call-registry",
    term: "Do Not Call Registry (Singapore)",
    title: "What Is Singapore's Do Not Call Registry?",
    description:
      "Singapore's Do Not Call (DNC) Registry lets people opt out of marketing messages. Under the PDPA, organisations must check it before sending marketing calls, texts, or faxes.",
    question: "What is Singapore's Do Not Call registry?",
    definition:
      "The Do Not Call (DNC) Registry is part of Singapore's Personal Data Protection Act. It lets individuals register their Singapore phone numbers to opt out of marketing messages, and it requires organisations to check the registry before sending marketing calls, texts, or faxes to those numbers.",
    body: [
      "Before sending a marketing message to a Singapore number, an organisation generally has to check whether that number is listed on the relevant DNC register, unless it has clear, unexpired consent from the person to send it.",
      "The rules apply to voice calls, SMS, and faxes sent for marketing purposes. They sit alongside the wider PDPA obligations on how personal data is collected, used, and disclosed.",
      "This is general information about what the rules require, not legal advice. Confirm the current obligations and any exemptions that apply to your business with the Personal Data Protection Commission or your own compliance team.",
    ],
    related: [
      { anchor: "PDPA in Singapore", to: "/glossary/what-is-pdpa/" },
      { anchor: "lead generation agency, Singapore", to: "/lead-generation-agency-singapore/" },
    ],
  },
  {
    slug: "what-is-click-through-rate",
    term: "Click Through Rate (CTR)",
    title: "What Is Click Through Rate (CTR)?",
    description:
      "Click through rate (CTR) is the percentage of people who click a link out of everyone who saw it. It measures how compelling an ad, search result, or email is.",
    question: "What is click through rate (CTR)?",
    definition:
      "Click through rate (CTR) is the percentage of people who click a link out of everyone who saw it. You calculate it by dividing clicks by impressions, so 20 clicks from 1,000 impressions is a 2 percent CTR. It is a core measure of how compelling an ad, search result, or email is.",
    body: [
      "CTR shows up across channels: search results, paid ads, email subject lines, and social posts. In each case it measures the same thing, whether the people who saw your listing found it worth clicking.",
      "A low CTR usually points at the message, not the traffic. If plenty of people see your ad or result and few click, the headline, description, or offer is not matching what they were looking for.",
      "CTR is a step, not the goal. A high CTR that brings unqualified clicks costs money without producing leads, so read it alongside cost per lead and conversion, not on its own.",
    ],
    related: [
      { anchor: "Google Ads agency in Singapore", to: "/google-ads-agency-singapore/" },
      { anchor: "cost per lead", to: "/glossary/what-is-cost-per-lead/" },
    ],
  },
  {
    slug: "what-is-cost-per-lead",
    term: "Cost Per Lead (CPL)",
    title: "What Is Cost Per Lead (CPL)?",
    description:
      "Cost per lead (CPL) is how much you spend on marketing to generate one new lead. It shows what you are paying to fill the top of your pipeline.",
    question: "What is cost per lead (CPL)?",
    definition:
      "Cost per lead (CPL) is how much you spend on marketing to generate one new lead. You calculate it by dividing total spend on a channel or campaign by the number of leads it produced. It tells you what you are paying to fill the top of your pipeline.",
    body: [
      "CPL is easy to compare across channels: if Google Ads produces leads at one cost and SEO at another, CPL puts them side by side. It is one of the fastest ways to see where your marketing budget works hardest.",
      "CPL on its own can mislead, because a cheap lead that never buys is not cheap. Read it next to lead quality and cost per acquisition, so you are not optimising for volume of leads that go nowhere.",
      "Lowering CPL usually comes from better targeting and higher conversion rather than just cutting spend. A page that turns more of the same visitors into leads lowers the cost of every one of them.",
    ],
    related: [
      { anchor: "customer acquisition cost", to: "/glossary/what-is-customer-acquisition-cost/" },
      { anchor: "lead generation agency, Singapore", to: "/lead-generation-agency-singapore/" },
    ],
  },
  {
    slug: "what-is-customer-acquisition-cost",
    term: "Customer Acquisition Cost (CAC)",
    title: "What Is Customer Acquisition Cost (CAC)?",
    description:
      "Customer acquisition cost (CAC) is the total sales and marketing spend it takes to win one new paying customer. It tells you whether growth is actually profitable.",
    question: "What is customer acquisition cost (CAC)?",
    definition:
      "Customer acquisition cost (CAC) is the total sales and marketing spend it takes to win one new paying customer. You calculate it by dividing everything you spent on acquiring customers in a period by the number of customers you gained. It tells you whether growth is actually profitable.",
    body: [
      "CAC goes further than cost per lead, because most leads never buy. It counts the full cost of turning strangers into customers, including the leads that did not convert along the way.",
      "CAC only means something next to what a customer is worth to you over time. If it costs more to win a customer than they will ever pay you, the model loses money no matter how many you acquire.",
      "You lower CAC by qualifying earlier, responding faster, and converting more of the leads you already pay for, rather than simply spending more at the top of the funnel.",
    ],
    related: [
      { anchor: "cost per lead", to: "/glossary/what-is-cost-per-lead/" },
      { anchor: "lead qualification", to: "/lead-qualification/" },
    ],
  },
  {
    slug: "what-is-marketing-automation",
    term: "Marketing Automation",
    title: "What Is Marketing Automation?",
    description:
      "Marketing automation is software that runs repetitive marketing tasks on their own, such as follow up emails, lead scoring, and routing, based on rules and triggers you set once.",
    question: "What is marketing automation?",
    definition:
      "Marketing automation is software that runs repetitive marketing tasks on their own, such as sending follow up emails, scoring leads, and routing them, based on rules and triggers you set once. The point is to reach people at the right moment without a person doing every step by hand.",
    body: [
      "Typical uses include a welcome sequence after someone signs up, a reminder when a lead goes quiet, scoring leads as they engage, and passing hot ones to sales. The system watches for a trigger and acts on it automatically.",
      "Automation applies the rules you give it consistently and instantly, which is its strength and its risk. It cannot supply strategy or an ideal customer profile you never defined; it will only scale whatever logic you put in.",
      "For a small team, the biggest early win is usually speed and follow up: reaching a new lead within minutes and never letting one slip because someone was busy.",
    ],
    related: [
      { anchor: "follow-up automation", to: "/follow-up-automation/" },
      { anchor: "drip campaign", to: "/glossary/what-is-a-drip-campaign/" },
    ],
  },
  {
    slug: "what-is-a-drip-campaign",
    term: "Drip Campaign",
    title: "What Is a Drip Campaign?",
    description:
      "A drip campaign is a series of pre written messages sent automatically on a schedule or in response to what someone does, to nurture a lead toward a decision.",
    question: "What is a drip campaign?",
    definition:
      "A drip campaign is a series of pre written messages, usually emails, sent automatically on a set schedule or in response to what someone does. Instead of one blast, the messages drip out over days or weeks to nurture a lead toward a decision.",
    body: [
      "A time based drip sends messages at fixed intervals after someone joins, for example on day one, day three, and day seven. A behaviour based drip reacts to actions, such as sending a case study after someone views your pricing page.",
      "Drip campaigns are useful because most leads are not ready to buy the moment they arrive. A steady, relevant sequence keeps you present until the timing is right, without a person writing each message.",
      "The messages only work if they are relevant and genuinely useful. A generic sequence that ignores what the person did tends to get ignored, so the best drips branch based on behaviour.",
    ],
    related: [
      { anchor: "follow-up automation", to: "/follow-up-automation/" },
      { anchor: "marketing automation", to: "/glossary/what-is-marketing-automation/" },
    ],
  },
  {
    slug: "what-is-no-show-rate",
    term: "No-Show Rate",
    title: "What Is a No-Show Rate?",
    description:
      "No-show rate is the percentage of booked appointments where the person does not turn up. For any business that runs on booked calls or visits, it is a direct drain on revenue.",
    question: "What is a no-show rate?",
    definition:
      "No-show rate is the percentage of booked appointments where the person does not turn up. You calculate it by dividing no-shows by total booked appointments. For any business that runs on booked calls or visits, it is a direct drain on revenue and calendar time.",
    body: [
      "Every no-show is capacity you cannot resell and time your team already set aside. In appointment led businesses like clinics and consultancies, a high no-show rate quietly caps how much you can earn from the same diary.",
      "The most common causes are simple: too long a gap between booking and appointment, no reminder, or an appointment the person was never really committed to. Faster booking and timely reminders address the first two directly.",
      "Automated confirmations and reminders by the channel the person actually reads, plus an easy way to reschedule rather than silently drop, are the usual levers for bringing the rate down.",
    ],
    related: [
      { anchor: "appointment setting in Singapore", to: "/appointment-setting-singapore/" },
      { anchor: "follow-up automation", to: "/follow-up-automation/" },
    ],
  },
  {
    slug: "what-is-appointment-setting",
    term: "Appointment Setting",
    title: "What Is Appointment Setting?",
    description:
      "Appointment setting is the work of turning an interested lead into a confirmed meeting on a sales calendar, so salespeople spend their time in meetings rather than chasing.",
    question: "What is appointment setting?",
    definition:
      "Appointment setting is the work of turning an interested lead into a confirmed meeting on a sales calendar. It covers reaching out, qualifying briefly, handling objections, and getting a specific time booked, so that salespeople spend their time in meetings rather than chasing.",
    body: [
      "It sits between lead generation and the sales conversation. Generation creates interest; appointment setting converts that interest into a booked slot with someone qualified enough to be worth a rep's time.",
      "Speed and persistence decide most outcomes. Reaching a lead within minutes, then following up consistently across channels, books far more meetings than a single slow attempt.",
      "It can be done by a dedicated person, an SDR team, or an AI agent that answers, qualifies, and books straight into the calendar. The measure that matters is qualified meetings booked, not calls made.",
    ],
    related: [
      { anchor: "appointment setting in Singapore", to: "/appointment-setting-singapore/" },
      { anchor: "sales development representative (SDR)", to: "/glossary/what-is-a-sales-development-representative/" },
    ],
  },
  {
    slug: "what-is-a-sales-development-representative",
    term: "Sales Development Representative (SDR)",
    title: "What Is a Sales Development Rep (SDR)?",
    description:
      "A sales development representative (SDR) qualifies leads and books meetings for the closers, bridging marketing's interest and the account executive's sales conversation.",
    question: "What is a sales development representative (SDR)?",
    definition:
      "A sales development representative (SDR) is a salesperson whose job is the early part of the funnel: qualifying leads and booking meetings for the closers, rather than closing deals themselves. They are the bridge between marketing generating interest and account executives running the sales conversation.",
    body: [
      "SDRs focus on outreach and qualification. They follow up on inbound enquiries and reach out to prospects, work out who is a genuine fit, and hand qualified opportunities to an account executive to close.",
      "Splitting the role this way lets closers spend their time in real sales conversations instead of chasing and screening. It works when the handoff is clean and both sides agree on what qualified means.",
      "The same early funnel work, qualifying quickly and booking meetings, can be supported or handled by an AI agent that answers every enquiry instantly, which is useful for small teams without a full SDR function.",
    ],
    related: [
      { anchor: "appointment setting", to: "/glossary/what-is-appointment-setting/" },
      { anchor: "lead qualification", to: "/lead-qualification/" },
    ],
  },
  {
    slug: "what-is-return-on-ad-spend",
    term: "Return on Ad Spend (ROAS)",
    title: "What Is Return on Ad Spend (ROAS)?",
    description:
      "Return on ad spend (ROAS) is the revenue you earn for every dollar you spend on advertising. It shows whether a campaign pays for itself.",
    question: "What is return on ad spend (ROAS)?",
    definition:
      "Return on ad spend (ROAS) is the revenue you earn for every dollar you spend on advertising. You calculate it by dividing revenue attributed to ads by the ad spend, so 4,000 dollars of revenue from 1,000 dollars of ads is a ROAS of 4, often written 4:1. It shows whether a campaign pays for itself.",
    body: [
      "ROAS answers a direct question: is this campaign making more than it costs. A ROAS above 1 means the ads earned back more than you spent, though the level you need depends on your margins, not a universal benchmark.",
      "ROAS measures revenue, not profit. A campaign can look healthy on ROAS while losing money once product costs, fulfilment, and overheads are counted, so read it against your margins.",
      "For lead based businesses, ROAS depends on what happens after the click. The same ad spend produces a very different return when leads are answered fast and qualified well, which is why speed to lead and conversion sit underneath any ROAS figure.",
    ],
    related: [
      { anchor: "Google Ads agency in Singapore", to: "/google-ads-agency-singapore/" },
      { anchor: "cost per lead", to: "/glossary/what-is-cost-per-lead/" },
    ],
  },
];
