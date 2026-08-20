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
