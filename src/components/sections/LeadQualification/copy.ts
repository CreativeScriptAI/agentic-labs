// Copy for /lead-qualification/ (Stage 2: Qualify pillar).
// Primary keyword: ai lead qualification. Slug kept journey-consistent.
// Voice: lead with the buyer's complaint ("we get leads but they are junk"),
// introduce mechanism after. No dashes.
// Every statistic carries a named primary source inline. Deliberately excluded:
// "27% of leads never contacted", "50% of sales time wasted prospecting",
// "50% more sales-ready leads at 33% lower cost", Gleanster figures, and the
// AI SDR statistics genre. All trace to defunct firms, unnamed reports, or
// vendor blogs with no methodology.

export const META = {
  title: "AI Lead Qualification: Stop Wasting Sales Time on Junk Leads",
  description:
    "Lead qualification decides, before a rep spends time, whether a lead can become revenue. An honest guide to why qualification fails, where the frameworks break, and how to qualify automatically without producing junk faster.",
  keywords: [
    "ai lead qualification",
    "automated lead qualification",
    "lead qualification process",
    "qualify leads automatically",
    "lead qualification framework",
    "ai lead scoring",
    "mql vs sql",
  ],
  url: "https://www.tryagentikai.com/lead-qualification/",
};

export const HERO = {
  eyebrow: "AI LEAD QUALIFICATION",
  h1a: "You do not have a lead problem.",
  h1b: "You have a sorting problem.",
  sub: "The leads arrive. Most are not a fit, nobody agrees what qualified means, and the good ones go cold while your team works through the rest. Qualification is the filter that decides who gets your time.",
  ctaPrimary: { label: "Fix my qualification", to: "/ai-clarity-workshop/" },
  ctaSecondary: { label: "See how it works", to: "#how-it-works" },
};

export const ANSWER_FIRST =
  "Lead qualification is deciding, before a salesperson spends time, whether a lead can realistically become revenue. It combines fit (are they the kind of business you serve) with intent (do they have a real problem, a timeline, and the ability to decide). Done well, it routes the right leads to a person within minutes and sends the rest somewhere useful instead of into a rep's day. Done badly, it is a scoring model nobody trusts, sitting on top of a CRM nobody fills in.";

export const FAILS = {
  eyebrow: "WHY QUALIFICATION ACTUALLY FAILS",
  heading: "Five reasons the leads still feel like junk",
  intro:
    "Every guide tells you how to qualify. Almost none tell you why yours is not working. It is usually one of these, and usually more than one.",
  items: [
    {
      n: "01",
      title: "Nobody agreed what qualified means",
      body: "Marketing counts a form fill. Sales counts a real conversation. Both report honestly and the numbers never reconcile, because the two teams are measuring different things and neither wrote it down.",
    },
    {
      n: "02",
      title: "You are scoring engagement, not intent",
      body: "Opening three emails and downloading a guide makes someone interested in content. It does not mean they have a budget, a problem, or a deadline. Most scoring models quietly reward curiosity and call it buying signal.",
    },
    {
      n: "03",
      title: "The ICP was never actually defined",
      body: "If the definition of a good fit lives in the founder's head, no system can apply it. Automation cannot supply judgment your criteria never contained, so it just produces junk faster.",
    },
    {
      n: "04",
      title: "Response time is measured in hours",
      body: "By the time a qualified lead reaches a person, the moment has passed. Speed is not a nice to have in qualification, it is most of the outcome.",
    },
    {
      n: "05",
      title: "There is no way for a lead to leave",
      body: "Without an explicit disqualification path with a reason attached, bad leads never exit the pipeline. They get recycled, re-worked, and re-counted, and the pipeline slowly fills with things nobody will ever close.",
    },
  ],
};

export const SPEED = {
  eyebrow: "SPEED IS PART OF QUALIFICATION",
  heading: "A qualified lead you reach on Thursday was not qualified on Tuesday",
  stats: [
    {
      stat: "21x",
      label: "higher odds of qualifying a lead when contacted within 5 minutes rather than 30",
      source: "Oldroyd and InsideSales.com, Lead Response Management study, 2007",
    },
    {
      stat: "7x",
      label: "more likely to qualify a lead when responding within the first hour than one hour later",
      source: "Oldroyd, McElheran and Elkington, Harvard Business Review, 2011",
    },
    {
      stat: "23%",
      label: "of 2,241 audited US companies never responded to a web lead at all",
      source: "Harvard Business Review, 2011",
    },
  ],
  disclosure:
    "A note on these numbers, because most pages will not give you one. Both studies involve InsideSales.com, a company that sold lead response software, and both are more than a decade old. We use them because they are the only speed to lead research with a published method and a retrievable sample. Treat them as directional, not as a current benchmark.",
};

export const DEFINITIONS = {
  eyebrow: "WHO DECIDES A LEAD IS QUALIFIED",
  heading: "MQL, SQL, PQL, and the handshake in between",
  intro:
    "These labels only help if both teams use them the same way. Here is what each one actually means.",
  items: [
    {
      term: "MQL",
      full: "Marketing Qualified Lead",
      def: "Marketing judges this person ready to hand over, based on fit plus engagement. It is an opinion, not a commitment.",
    },
    {
      term: "SAL",
      full: "Sales Accepted Lead",
      def: "The handshake most companies skip. Sales has looked at the lead and accepted it as worth working. Without this step, nobody can tell whether marketing is passing junk or sales is ignoring good leads.",
    },
    {
      term: "SQL",
      full: "Sales Qualified Lead",
      def: "Sales has spoken to them and confirmed there is a real opportunity. This is the one that should drive forecasting.",
    },
    {
      term: "PQL",
      full: "Product Qualified Lead",
      def: "A trial or free user whose actual product behaviour signals readiness to buy. Behavioural rather than demographic, and usually the highest quality signal available if you have a product to instrument.",
    },
  ],
  note:
    "The SAL step comes from the SiriusDecisions demand waterfall, now part of Forrester. It is the cheapest fix on this page: adding an explicit accept or reject with a reason turns an argument between two teams into data.",
};

export const FRAMEWORKS = {
  eyebrow: "THE FRAMEWORKS, AND WHERE THEY BREAK",
  heading: "These are question sets for humans, not scoring algorithms",
  intro:
    "Every one of these was designed for a salesperson in a conversation. None was designed to run automatically against 400 form fills a week. That mismatch is where most automated qualification goes wrong.",
  items: [
    {
      name: "BANT",
      expand: "Budget, Authority, Need, Timing",
      origin: "Widely credited to IBM, dating to the mid twentieth century.",
      limit:
        "Budget first prices you as a vendor before you have shown value, and buyers routinely pick a preferred supplier before a budget line exists. The bigger problem is Authority: Forrester's 2021 B2B buying survey found more than 80 percent of buyers involved a group of stakeholders in their most recent purchase. A single authority field cannot represent a buying committee.",
    },
    {
      name: "MEDDIC",
      expand: "Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion",
      origin: "Created at PTC in 1996 by Dick Dunkel and Jack Napoli. MEDDICC adds Competition, MEDDPICC adds Paper Process.",
      limit:
        "Genuinely strong, because it treats qualification as continuous rather than a one time gate. But it is built for large multi stakeholder deals with a formal evaluation process. Applying it to a five thousand dollar inbound enquiry is theatre.",
    },
    {
      name: "CHAMP",
      expand: "Challenges, Authority, Money, Prioritization",
      origin: "Popularised by InsightSquared, a deliberate inversion of BANT.",
      limit:
        "Leads with the problem instead of the budget, which is the right instinct. It still assumes a single authority, so it inherits BANT's committee problem.",
    },
    {
      name: "GPCTBA/C&I",
      expand: "Goals, Plans, Challenges, Timeline, Budget, Authority, Consequences and Implications",
      origin: "HubSpot's own inbound sales discovery framework.",
      limit:
        "The most thorough of the set and the most demanding. It is a discovery structure for a long conversation, not a filter you can run at the top of a funnel.",
    },
  ],
  honest:
    "One more piece of honesty. There is a loud argument that the MQL is dead and should be replaced by buying group models. Forrester makes a serious version of that case. It is also amplified by vendors selling the replacement. The practical answer for most businesses is less dramatic: keep the labels, define them properly, and add the accept or reject step.",
};

export const HOW = {
  eyebrow: "HOW AUTOMATED QUALIFICATION WORKS",
  heading: "Capture, enrich, score, route, disqualify",
  intro:
    "This is the actual pipeline. Most of it is not AI, and the parts that are not AI do most of the work.",
  steps: [
    {
      n: "01",
      title: "Capture",
      body: "The form, the call, the chat, the ad click. Whatever they filled in is usually an email and a name, which is not enough to qualify anyone.",
    },
    {
      n: "02",
      title: "Enrich",
      body: "Fill in what they did not tell you: company size, industry, role, seniority, location, tech stack. Querying several providers in sequence beats relying on one, because coverage gaps differ by provider.",
    },
    {
      n: "03",
      title: "Score",
      body: "Two separate inputs that get confused constantly. Fit is who they are, firmographic and stable. Intent is what they did, behavioural and perishable. Score them separately or you will rank a curious student above a buying committee.",
    },
    {
      n: "04",
      title: "Route",
      body: "The valuable part is availability aware routing: skip the rep who is in a meeting and reach someone who can respond now, then let the lead book on the spot instead of entering an email loop.",
    },
    {
      n: "05",
      title: "Disqualify",
      body: "An explicit no, logged with a reason code, routed to nurture rather than to a rep. This is the output nobody builds and the one that makes the whole system auditable.",
    },
  ],
};

export const SCOREVSTALK = {
  eyebrow: "SCORING VERSUS CONVERSATION",
  heading: "A score cannot ask a follow up question",
  intro:
    "This is the distinction that decides whether your qualification works, and almost no page covers it.",
  left: {
    label: "What scoring answers well",
    items: [
      "Is this the right kind of company, by size, industry, and geography",
      "Have they shown repeated interest over time",
      "Does this match the shape of deals we have closed before",
      "Should this be prioritised above the other forty leads today",
    ],
    foot: "Scoring is fast, consistent, and cheap. It is also blind to anything the person did not do on your website.",
  },
  right: {
    label: "What only a conversation answers",
    items: [
      "What are you actually trying to fix, in your own words",
      "Is this a real timeline or an idea you are exploring",
      "Are you the person who decides, and who else is involved",
      "What happens if you do nothing for six months",
    ],
    foot: "A conversation reaches intent that no behavioural model can infer. It is also the step most businesses cannot staff at the moment the lead arrives, which is exactly what an AI agent is for.",
  },
  close:
    "The useful pattern is both. Score to decide who is worth a conversation, then have the conversation immediately, by voice or chat, while the intent is still live. The score sorts. The conversation qualifies.",
};

export const LIMITS = {
  eyebrow: "WHAT AI QUALIFICATION DOES NOT FIX",
  heading: "The honest limits",
  intro:
    "We would rather tell you this before you buy anything than after.",
  items: [
    {
      title: "It cannot supply an ICP you never defined",
      body: "If nobody has written down what a good customer looks like, automation just applies that vagueness faster and more consistently. Define the fit criteria first. It is not a technology problem.",
    },
    {
      title: "It inherits your CRM's data quality",
      body: "A model trained on records where job title is missing on a third of rows and industry on half will produce confident, well formatted nonsense. Fix the fields before you trust the score.",
    },
    {
      title: "Predictive scoring learns your history, including its bias",
      body: "If your team historically ignored a segment, the model learns that they never convert, and keeps them buried. The model is not discovering truth, it is repeating your past behaviour.",
    },
    {
      title: "Conversational agents need a handoff and a leash",
      body: "They are strong on structured, repeatable qualification. They should hand off to a human on anything complex, sensitive, or unexpected, and they should be grounded in your actual information rather than left to improvise.",
    },
    {
      title: "Automating disqualification without auditing it is dangerous",
      body: "The whole point of reason codes is that you can go back and check whether the system is quietly binning good leads. If nobody reviews the rejections, you will never know.",
    },
  ],
};

export const MEASURE = {
  eyebrow: "HOW TO MEASURE IT",
  heading: "Six numbers worth tracking",
  items: [
    { metric: "Median speed to lead", why: "Use the median, not the average. One lead answered in four days will hide a hundred answered in ten minutes." },
    { metric: "Sales accept rate", why: "Of the leads marketing passed, how many did sales actually take. The single fastest way to end the quality argument." },
    { metric: "Disqualification rate and reasons", why: "How many leave, and why. If one reason dominates, your targeting or your form is wrong." },
    { metric: "Qualified lead to opportunity rate", why: "Whether the leads you accepted actually became something real." },
    { metric: "Cost per qualified lead", why: "Not cost per lead. Cost per lead rewards volume, which is how you got here." },
    { metric: "Time from qualified to first meeting", why: "The gap where good leads quietly go cold." },
  ],
  caution:
    "One caution. Comparing your MQL to SQL rate against an industry benchmark is close to meaningless, because every company defines MQL differently. Track your own trend instead.",
};

export const FIX = {
  eyebrow: "WE BUILD IT, YOU DO NOT OPERATE IT",
  heading: "Most qualification projects fail on the wiring, not the idea",
  body: [
    "Nothing on this page is a secret. The reason it usually does not get built is that it touches your forms, your enrichment, your CRM fields, your routing rules, your calendar, and your follow up, and it has to keep working when any one of them changes.",
    "We are a GTM engineering team. We define the fit criteria with you, build the qualification into the tools you already use, wire the routing and the disqualification path, and own the result. You get leads that are sorted before anyone touches them.",
  ],
  cta: { label: "Fix my qualification", to: "/ai-clarity-workshop/" },
  support: "You are hiring a team, not buying software.",
};

export const FAQS = [
  {
    question: "What is lead qualification?",
    answer:
      "Lead qualification is deciding, before a salesperson spends time, whether a lead can realistically become revenue. It combines fit, meaning whether they are the kind of business you serve, with intent, meaning whether they have a real problem, a timeline, and the ability to decide.",
  },
  {
    question: "What is the difference between lead qualification and lead scoring?",
    answer:
      "Lead scoring is a ranking mechanism that assigns points based on who someone is and what they did. Lead qualification is the decision about whether to spend sales time on them. Scoring is one input to qualification, not a replacement for it, because a score cannot ask a follow up question.",
  },
  {
    question: "What is the difference between an MQL and an SQL?",
    answer:
      "An MQL is a lead marketing judges ready to hand to sales, based on fit and engagement. An SQL is a lead sales has spoken to and confirmed as a real opportunity. The step between them, where sales explicitly accepts or rejects the lead with a reason, is the one most companies skip and the one that settles arguments about lead quality.",
  },
  {
    question: "What is a product qualified lead?",
    answer:
      "A product qualified lead is a free or trial user whose actual behaviour in your product signals readiness to buy, such as hitting a usage limit or inviting their team. It is behavioural rather than demographic, which usually makes it the strongest signal available if you have a product you can instrument.",
  },
  {
    question: "Can AI qualify leads automatically, and how does it work?",
    answer:
      "Yes, through a pipeline of capture, enrichment, scoring, routing, and disqualification. Enrichment fills in what the form did not ask, scoring separates fit from intent, routing gets the lead to an available person immediately, and disqualification logs an explicit no with a reason. A conversational agent can also ask qualifying questions at the moment the lead arrives, which is the part scoring cannot do.",
  },
  {
    question: "Is BANT still relevant, or is it outdated?",
    answer:
      "BANT is still a useful checklist but its assumptions have aged. Leading with budget prices you as a vendor before you have shown value, and its single authority field cannot represent a buying committee. Forrester found more than 80 percent of B2B buyers involved a group of stakeholders in their most recent purchase.",
  },
  {
    question: "Which lead qualification framework should I use?",
    answer:
      "Match the framework to the deal. CHAMP or a simple fit and intent check suits high volume inbound. MEDDIC or MEDDPICC suits large multi stakeholder deals with a formal evaluation process, because it treats qualification as continuous rather than a one time gate. Applying an enterprise framework to a small inbound enquiry wastes everyone's time.",
  },
  {
    question: "How fast should you respond to an inbound lead?",
    answer:
      "Within minutes. Research by Oldroyd and InsideSales.com in 2007 found the odds of qualifying a lead were 21 times higher at 5 minutes than at 30. A 2011 Harvard Business Review study found firms responding within the first hour were about 7 times more likely to qualify a lead than those waiting an hour longer. Both studies are old and involve a vendor that sold response software, so treat them as directional.",
  },
  {
    question: "Who should own lead qualification, marketing or sales?",
    answer:
      "Both, at different points, with one written definition between them. Marketing owns fit and the initial filter. Sales owns the accept or reject decision and the conversation that confirms intent. The failure mode is not bad ownership, it is two teams using the word qualified to mean different things.",
  },
  {
    question: "How do you disqualify a lead without losing future business?",
    answer:
      "Disqualify with a reason code and route them to nurture rather than deleting them. Not now is different from never, and the two should end up in different places. Reviewing the reason codes also tells you whether your system is quietly rejecting leads it should have kept.",
  },
  {
    question: "How do you measure whether lead qualification is working?",
    answer:
      "Track median speed to lead, sales accept rate, disqualification rate with reasons, qualified lead to opportunity rate, cost per qualified lead, and time from qualified to first meeting. Avoid comparing your MQL to SQL rate against industry benchmarks, since every company defines an MQL differently.",
  },
  {
    question: "Will AI qualification fix our lead quality problem?",
    answer:
      "Only if the problem is speed, consistency, or capacity. If nobody has defined what a good customer looks like, or your CRM is missing half its fields, automation will apply that vagueness faster rather than fix it. Define the fit criteria and clean the fields first.",
  },
];

type DeepDivePara =
  | string
  | { pre: string; link: { href: string; label: string }; post: string };

export const DEEP_DIVE: {
  eyebrow: string;
  heading: string;
  sections: { h2: string; body: DeepDivePara[] }[];
} = {
  eyebrow: "THE LONGER ANSWER",
  heading: "A plain guide to lead qualification, scoring, and the frameworks",
  sections: [
    {
      h2: "What is lead qualification, and why does it decide whether sales time gets wasted?",
      body: [
        "Lead qualification is the work of deciding which of the people who raised a hand are worth a salesperson's time, and in what order. Every inbound channel produces a mix: a few buyers with a real problem and a budget, a larger group who are curious but months away, and a tail of tyre kickers, students, and competitors. Without a filter, all of them land in the same queue, and your closers spend their best hours on the ones least likely to buy.",
        "The reason this matters is math, not tidiness. A rep who talks to twenty leads a day converts far more when the fifteen worst are removed before the call than when they are discovered mid conversation. Qualification is how you protect the scarce, expensive resource in the whole funnel, which is human selling attention. Everything upstream of it, the ads and the content and the forms, only pays off if the sorting at this step is honest.",
        {
          pre: "Qualification is also not the same as generation. Filling the top of the funnel is a different job with different tools, and if the raw volume is not there yet, sorting harder will not save you. When the problem is quantity rather than quality, the fix lives further up, in ",
          link: { href: "/lead-generation-agency-singapore/", label: "how you generate demand in the first place" },
          post: ". Qualification assumes leads exist and asks which ones deserve the next step.",
        },
      ],
    },
    {
      h2: "What is the difference between an MQL, an SQL, and a PQL?",
      body: [
        "These three labels describe the same lead at different stages of belief, and confusing them is the most common reason marketing and sales end up at war. An MQL, a marketing qualified lead, is someone whose behaviour and fit suggest they are worth a closer look: they match your target profile and they did something, downloaded, requested, replied. It is a hypothesis, not a promise. An SQL, a sales qualified lead, is one a salesperson has looked at and agreed is worth pursuing, which means a human took ownership of the risk.",
        "A PQL, a product qualified lead, is newer and only applies if people can try before they buy. It is a lead who has used the product, hit a limit or a moment of value, and shown intent through action rather than a form fill. For a free trial or freemium motion a PQL is usually the strongest of the three, because using something is a louder signal than clicking on it. For a services business with no self serve product, PQL may not apply at all, and that is fine.",
        "The honest caution is that none of these terms has a fixed, industry wide definition. One company's MQL is another company's cold list. Benchmarks that compare your MQL to SQL conversion against a published average are mostly noise, because you are comparing your definition to a hundred others. The only version that matters is the one you and your sales team write down together and agree to defend.",
      ],
    },
    {
      h2: "What is the BANT framework, and does it still work for inbound leads?",
      body: [
        "BANT stands for Budget, Authority, Need, and Timeline, and it came out of IBM as a checklist for reps to confirm before spending time on an opportunity. Does the prospect have money to spend, are we talking to someone who can decide, is there a real need our product meets, and is there a timeframe for buying. As a memory aid for what a serious buyer looks like, it has aged well, and most qualification frameworks that followed are variations on the same four questions.",
        "Where BANT strains is with modern inbound. A buyer who found you through search and read three articles often will not disclose budget on a first touch, may be a researcher rather than the decision maker, and may have a real need but no fixed timeline yet. Treating BANT as a rigid gate disqualifies good early stage leads for failing to answer questions they are not ready to answer. Directional research on how buyers now self educate before talking to sales supports using it as a guide, not a bouncer.",
        "The practical move is to treat need and fit as the hard filters and treat budget, authority, and timeline as things you learn across the relationship rather than extract on contact. Qualification is not a single yes or no at the door. It is a confidence level that rises as you gather signal, which is exactly why speed and structured follow up matter more than a perfect first conversation.",
      ],
    },
    {
      h2: "How do you qualify leads automatically without losing the human read?",
      body: [
        "Automatic qualification usually means two things working together: lead scoring and routing. Scoring assigns points for fit attributes, industry, company size, role, region, and for behaviour, pages viewed, replies, meetings booked, then uses the total to sort leads into tiers. Routing takes those tiers and sends each one somewhere sensible, the hottest to a rep in minutes, the warm to nurture, the unqualified to a polite decline with a reason attached. Done well, this happens before a human has read a single form.",
        {
          pre: "The trap is thinking automation replaces judgement. A score is only as good as the definition behind it, and a model that was never taught what a good customer looks like will confidently mis-sort at scale. The reliable pattern is to let software handle speed and consistency, instant response, no lead left overnight, every lead scored the same way, and let people handle the reads a rule cannot make. Pairing scoring with fast, structured ",
          link: { href: "/follow-up-automation/", label: "follow up automation" },
          post: " is what turns a score into a booked conversation instead of a number in a dashboard.",
        },
        "Before automating anything, check that the inputs exist. If half your CRM fields are blank and nobody has written down the fit criteria, automation will apply that vagueness faster rather than fix it. Clean the data and agree the definition first, then let the system enforce it consistently. The value of automatic qualification is not cleverness, it is that it never gets tired, never plays favourites, and never lets a hot lead sit for a day.",
      ],
    },
    {
      h2: "What lead qualification questions actually separate a buyer from a browser?",
      body: [
        "The best qualification questions surface need and fit early and leave budget and timing for later. Useful openers ask what pushed them to look now, what they have already tried, what happens if they do nothing, and who else is affected by the problem. A person with a real, current problem answers these easily and specifically. A browser gives vague, hypothetical answers, and that difference tells you more than any single demographic field.",
        "Notice that none of these are yes or no. Questions that invite a story reveal intent, urgency, and whether you are even talking to the right person, all at once. Rigid scorecards that only capture checkboxes miss the tone underneath, which is often where the real signal is. This is why a short conversation, human or a well built assistant, frequently qualifies better than a longer form nobody wants to fill.",
        {
          pre: "Once a lead answers well and clears the bar, the next failure point is friction. A qualified buyer who has to wait, or chase a reply, or navigate a clumsy hand off will cool fast. Getting them straight into ",
          link: { href: "/appointment-setting-singapore/", label: "a booked appointment" },
          post: " while the intent is still warm protects the work qualification just did. Qualifying well and then stalling on the follow through wastes both the lead and the effort spent sorting it.",
        },
      ],
    },
  ],
};

export const FINAL = {
  eyebrow: "STOP PAYING FOR LEADS NOBODY SORTS",
  heading: "Your team should only see the leads worth their time.",
  sub: "We build the qualification, routing, and follow up into the tools you already use.",
  ctaA: { label: "Fix my qualification", to: "/ai-clarity-workshop/" },
  ctaB: { label: "Book appointments automatically", to: "/appointment-booking-ai/" },
};
