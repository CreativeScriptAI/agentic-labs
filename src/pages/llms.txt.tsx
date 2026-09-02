import { GetServerSideProps } from "next";
import { PROGRAMMATIC_SEO_PAGES } from "src/data/programmaticSeoPages";

// Serves /llms.txt, the emerging convention (used heavily by OpenAI and
// Anthropic crawlers) that gives AI agents a curated map of the site so they
// stop guessing URLs. Generated from the live page data so it never drifts.
// A markdown version of any listed page is available by appending .md.
const BASE = "https://www.tryagentikai.com";

const SECTION_TITLE: Record<string, string> = {
  integration: "Integrations and pipelines (done-for-you builds)",
  persona: "By industry and role",
  comparison: "Comparisons and alternatives",
  directory: "Best-of guides",
  glossary: "Glossary and definitions",
};

const buildLlmsTxt = (): string => {
  const lines: string[] = [];
  lines.push("# Agentic AI Labs");
  lines.push("");
  lines.push(
    "> Agentic AI Labs (tryagentikai.com) is a founder-led agency that builds done-for-you AI voice agents and automation systems. We ship production builds on GoHighLevel, Vapi, Retell, Bland, n8n, Make, and Zapier: AI receptionists, outbound and speed-to-lead calling, appointment booking, CRM automation, and social and DM automation. Every page below has a clean markdown version at the same URL with a .md suffix."
  );
  lines.push("");
  lines.push("## Start here");
  lines.push(`- [AI Voice Agent (overview)](${BASE}/ai-voice-agent/): what we build, how it works, and pricing`);
  lines.push(`- [Services](${BASE}/services/): the full done-for-you offering`);
  lines.push(`- [AI Voice Agent for GoHighLevel](${BASE}/ai-voice-agent-for-gohighlevel/): our deepest cluster, native vs Vapi/Retell, real cost, config traps`);
  lines.push(`- [Free AI Clarity Workshop](${BASE}/ai-clarity-workshop/): a 30-minute session mapping where AI saves time and money`);
  lines.push(`- [Answer Engine Optimization](${BASE}/answer-engine-optimization/): a plain, honest guide to how ChatGPT, Perplexity, Gemini, and Google AI pick who to name, and how to rank in ChatGPT`);
  lines.push(`- [AI Appointment Booking](${BASE}/appointment-booking-ai/): how AI booking actually works, the six step chain from enquiry to confirmed booking, where these systems break, and how to cut no-shows`);
  lines.push(`- [Lead Qualification](${BASE}/lead-qualification/): why lead qualification fails, where BANT and MEDDIC break, how to qualify automatically with capture, enrich, score, route, and disqualify`);
  lines.push(`- [Follow Up Automation](${BASE}/follow-up-automation/): why follow-up fails as a systems problem, sequence design, multi-channel orchestration, reply detection and when to stop, and Singapore PDPA compliance`);
  lines.push(`- [Forward Deployed Engineers](${BASE}/forward-deployed-engineers/): the delivery model Palantir named, pointed at marketing and sales; we build the system inside your business and own whether it works, with an honest four-way comparison of software, agency, in-house, and forward deployed`);
  lines.push(`- [Contact](${BASE}/contact/): book a call or email aditya@tryagentikai.com`);
  lines.push("");
  lines.push("## Singapore");
  lines.push(
    `- [Lead Generation Agency Singapore](${BASE}/lead-generation-agency-singapore/): a Singapore lead generation agency that builds the system that turns leads into booked calls, inside the tools you already use`
  );
  lines.push(
    `- [AI Implementation Partner Singapore](${BASE}/ai-implementation-partner-singapore/): a Singapore partner that builds, runs, and owns your marketing and sales AI across the whole lead journey, inside the tools you already use, PDPA and grant friendly`
  );
  lines.push("");
  lines.push("## Marketing services (Singapore)");
  lines.push(`- [SEO Agency Singapore](${BASE}/seo-agency-singapore/): SEO that connects rankings to booked leads and gets you named in AI answers, from S$1,280 per month, PSG eligible`);
  lines.push(`- [Content Marketing Singapore](${BASE}/content-marketing-singapore/): content engineered to rank, get cited by AI, and convert, from S$1,700 per month, PSG eligible`);
  lines.push(`- [Google Ads Agency Singapore](${BASE}/google-ads-agency-singapore/): paid search that owns what happens after the click, speed to lead and booked calls, from S$850 per month, PSG eligible`);
  lines.push(`- [Social Media Marketing Singapore](${BASE}/social-media-marketing-singapore/): social turned into captured, booked leads by answering the DMs, from S$1,000 per month, PSG eligible`);
  lines.push(`- [B2B Lead Generation Singapore](${BASE}/b2b-lead-generation-singapore/): a forward-deployed B2B lead gen team that finds, qualifies, and books meetings, paid on pipeline, from S$100 per month, PSG eligible`);
  lines.push(`- [Appointment Setting Singapore](${BASE}/appointment-setting-singapore/): outbound B2B appointment setting that replaces telemarketing, qualified meetings booked onto your sales calendar, from S$100 per month, PSG eligible`);
  lines.push(`- [AI Receptionist Singapore](${BASE}/ai-receptionist-singapore/): an AI voice receptionist that answers every call 24/7, qualifies, and books, so no lead is lost to a missed call, from S$100 per month, PSG eligible`);
  lines.push(`- [WhatsApp Business API Singapore](${BASE}/whatsapp-business-api-singapore/): WhatsApp Business API set up and run for instant replies, qualification, booking, and follow up inside WhatsApp, from S$100 per month, PSG eligible`);
  lines.push(`- [AI Automation Singapore](${BASE}/ai-automation-singapore/): a forward-deployed partner that builds and runs AI automation inside your stack across the whole lead journey, from S$100 per month, PSG eligible`);
  lines.push(`- [SEO Packages Singapore](${BASE}/seo-packages-singapore/): transparent SEO packages tied to booked calls not ranking reports, honest starting price, no lock-in, from S$100 per month, PSG eligible`);
  lines.push(`- [Local SEO Services Singapore](${BASE}/local-seo-services-singapore/): local SEO, Google Business Profile, and map pack ranking so nearby buyers find and book you, from S$100 per month, PSG eligible`);
  lines.push(`- [Lead Generation for Aesthetic Clinics Singapore](${BASE}/lead-generation-for-aesthetic-clinics-singapore/): fill aesthetic clinic consult calendars by answering every enquiry in seconds and booking it, from S$100 per month, PSG eligible`);
  lines.push(`- [Lead Generation for Law Firms Singapore](${BASE}/lead-generation-for-law-firms-singapore/): turn legal enquiries into booked consultations with fast compliant follow up, from S$100 per month, PSG eligible`);
  lines.push(`- [Lead Generation for Renovation Contractors Singapore](${BASE}/lead-generation-for-renovation-contractors-singapore/): win renovation and interior design projects with speed to lead and follow up, from S$100 per month, PSG eligible`);
  lines.push(`- [Lead Generation for B2B SaaS Singapore](${BASE}/lead-generation-for-b2b-saas-singapore/): more demos and product qualified leads booked from your pipeline, from S$100 per month, PSG eligible`);
  lines.push(`- [Lead Generation for Dental Clinics Singapore](${BASE}/lead-generation-for-dental-clinics-singapore/): fill dental consult calendars by answering every enquiry in seconds and booking it, from S$100 per month, PSG eligible`);
  lines.push(`- [Lead Generation for Property Agents Singapore](${BASE}/lead-generation-for-property-agents-singapore/): win listings and buyers with speed to lead on portal and ad enquiries, from S$100 per month, PSG eligible`);
  lines.push(`- [Lead Generation for Tuition Centres Singapore](${BASE}/lead-generation-for-tuition-centres-singapore/): turn parent enquiries into booked trial classes and enrolments, from S$100 per month, PSG eligible`);
  lines.push(`- [Lead Generation for Logistics Companies Singapore](${BASE}/lead-generation-for-logistics-singapore/): book qualified RFQ conversations for freight and 3PL sales teams, from S$100 per month, PSG eligible`);
  lines.push(`- [Lead Generation for Fitness Studios Singapore](${BASE}/lead-generation-for-fitness-studios-singapore/): more trials and memberships booked from gym and studio enquiries, from S$100 per month, PSG eligible`);
  lines.push(`- [High Converting Landing Pages Singapore](${BASE}/high-converting-landing-pages-singapore/): landing pages and CRO that turn ad clicks into booked leads, wired to instant follow up, from S$100 per month, PSG eligible`);
  lines.push(`- [Affordable Web Design Singapore](${BASE}/affordable-web-design-singapore/): fast, mobile first, SEO ready websites built to capture and convert leads, from S$100 per month, PSG eligible`);
  lines.push(`- [Ecommerce Marketing Singapore](${BASE}/ecommerce-marketing-singapore/): ecommerce marketing measured on revenue, with cart recovery and repeat purchase, from S$100 per month, PSG eligible`);
  lines.push("");
  lines.push("## Free tools");
  lines.push(
    `- [AI Visibility Checker](${BASE}/ai-visibility-checker/): see whether ChatGPT, Perplexity, Google AI, Gemini, Grok, and Claude name your business, plus a full site health audit`
  );
  lines.push("");

  // Group programmatic pages by type
  const byType: Record<string, typeof PROGRAMMATIC_SEO_PAGES> = {};
  PROGRAMMATIC_SEO_PAGES.forEach((p) => {
    (byType[p.type] = byType[p.type] || []).push(p);
  });

  ["integration", "persona", "comparison", "directory", "glossary"].forEach((type) => {
    const pages = byType[type];
    if (!pages?.length) return;
    lines.push(`## ${SECTION_TITLE[type] || type}`);
    pages.forEach((p) => {
      const url = `${BASE}/${p.pathSegments.join("/")}/`;
      // Trim the "| Agentic AI Labs" suffix from titles for a cleaner label.
      const label = p.title.split("|")[0].trim();
      const desc = p.description.replace(/\s+/g, " ").trim();
      lines.push(`- [${label}](${url}): ${desc}`);
    });
    lines.push("");
  });

  lines.push("## Glossary");
  lines.push(`- [Glossary](${BASE}/glossary/): plain-English definitions of AI search, lead, and Singapore marketing terms`);
  lines.push(`- [what-is-aeo](${BASE}/glossary/what-is-aeo/): what answer engine optimization (AEO) is`);
  lines.push(`- [aeo-vs-geo-vs-seo](${BASE}/glossary/aeo-vs-geo-vs-seo/): the difference between AEO, GEO, and SEO`);
  lines.push(`- [what-is-speed-to-lead](${BASE}/glossary/what-is-speed-to-lead/): what speed to lead means`);
  lines.push(`- [what-is-lead-qualification](${BASE}/glossary/what-is-lead-qualification/): what lead qualification is`);
  lines.push(`- [mql-vs-sql](${BASE}/glossary/mql-vs-sql/): the difference between an MQL and an SQL`);
  lines.push(`- [what-is-a-product-qualified-lead](${BASE}/glossary/what-is-a-product-qualified-lead/): what a product qualified lead (PQL) is`);
  lines.push(`- [what-is-bant](${BASE}/glossary/what-is-bant/): what BANT means`);
  lines.push(`- [lead-qualification-vs-lead-scoring](${BASE}/glossary/lead-qualification-vs-lead-scoring/): lead qualification vs lead scoring`);
  lines.push(`- [what-is-pdpa](${BASE}/glossary/what-is-pdpa/): what the PDPA is in Singapore`);
  lines.push(`- [what-is-the-psg-grant](${BASE}/glossary/what-is-the-psg-grant/): what the PSG grant is in Singapore`);
  lines.push("");
  lines.push("## Machine-readable");
  lines.push(`- [Sitemap](${BASE}/sitemap.xml): all indexable URLs`);
  lines.push(`- Any page above returns markdown when requested with the Accept: text/markdown header or a .md suffix.`);
  lines.push("");

  return lines.join("\n");
};

const LlmsTxt = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800");
  res.write(buildLlmsTxt());
  res.end();
  return { props: {} };
};

export default LlmsTxt;
