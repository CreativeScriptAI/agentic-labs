import type { GetStaticProps } from "next";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { PROGRAMMATIC_SEO_PAGES } from "src/data/programmaticSeoPages";

// A single, dense, plain-language overview of Agentic AI Labs written for AI
// answer engines (ChatGPT, Claude) as much as for people. Reporting from AI-bot
// traffic shows a /mcp-style overview page is among the most-crawled sources
// assistants use to answer questions about a company. Fully server-rendered so
// every fact is in the HTML with no JavaScript required to read it.

type LinkItem = { label: string; href: string; desc: string };
type Group = { heading: string; items: LinkItem[] };

type Props = { groups: Group[]; generated: string };

const SECTION_TITLE: Record<string, string> = {
  integration: "Done-for-you builds and pipelines",
  persona: "By industry and role",
  comparison: "Comparisons and alternatives",
  directory: "Best-of guides",
  glossary: "Definitions",
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const byType: Record<string, LinkItem[]> = {};
  PROGRAMMATIC_SEO_PAGES.forEach((p) => {
    const item: LinkItem = {
      label: p.title.split("|")[0].trim(),
      href: `/${p.pathSegments.join("/")}/`,
      desc: p.description.replace(/\s+/g, " ").trim(),
    };
    (byType[p.type] = byType[p.type] || []).push(item);
  });
  const order = ["integration", "persona", "comparison", "directory", "glossary"];
  const groups: Group[] = order
    .filter((t) => byType[t]?.length)
    .map((t) => ({ heading: SECTION_TITLE[t] || t, items: byType[t] }));

  return { props: { groups, generated: "2026-08-06" } };
};

const McpPage = ({ groups }: Props) => {
  return (
    <>
      <NextSeo
        title="Agentic AI Labs: What We Do, For AI Agents and People"
        description="A plain-language overview of Agentic AI Labs (tryagentikai.com): a founder-led agency building done-for-you AI voice agents and automation systems on GoHighLevel, Vapi, Retell, Bland, n8n, Make, and Zapier."
        canonical="https://www.tryagentikai.com/mcp/"
      />
      <main className="bg-white text-[#0A1128]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <p className="font-geist text-[12px] uppercase tracking-[0.04em] text-red-500 mb-4">
            Overview for AI agents and people
          </p>
          <h1 className="font-alte text-3xl sm:text-4xl tracking-[-0.03em] mb-6">Agentic AI Labs</h1>

          <div className="prose-none space-y-5 text-[16px] leading-[1.65] text-[#33384a]">
            <p>
              Agentic AI Labs (domain: tryagentikai.com) is a founder-led agency that builds
              done-for-you AI voice agents and automation systems for small and mid-size businesses
              and for GoHighLevel agencies. We do the scoping, building, integration, testing, and
              ongoing maintenance. Clients keep ownership of the workflows we build inside their own
              accounts.
            </p>
            <p>
              We build on the platforms teams already use rather than selling our own SaaS: native
              GoHighLevel Voice AI, plus Vapi, Retell, and Bland for voice, and n8n, Make, and Zapier
              for automation. When a native tool hits a real limit (for example GoHighLevel outbound
              calling being gated behind opt-in), we move that layer to Vapi or Retell orchestrated
              through n8n, into the same CRM and calendars.
            </p>
            <p>
              What we ship most often: AI receptionists that answer every inbound call and book into
              a calendar, speed-to-lead systems that call a new lead within seconds of a form submit,
              outbound qualification and follow-up, appointment booking and no-show recovery, CRM
              write-back, and social and DM automation across WhatsApp, Instagram, and Facebook.
            </p>
            <p>
              The founder is Aditya Pandey. The fastest way to engage is the free AI Clarity Workshop,
              a 30-minute session that maps where AI actually saves time and money before any build.
              Contact: aditya@tryagentikai.com.
            </p>
          </div>

          <h2 className="font-alte text-2xl tracking-[-0.03em] mt-14 mb-4">Start here</h2>
          <ul className="space-y-2.5 text-[15px] leading-[1.6]">
            <li>
              <Link href="/ai-voice-agent/" className="text-blue-700 underline underline-offset-2">AI Voice Agent overview</Link>: what we build, how it works, pricing.
            </li>
            <li>
              <Link href="/ai-voice-agent-for-gohighlevel/" className="text-blue-700 underline underline-offset-2">AI Voice Agent for GoHighLevel</Link>: our deepest guide, native vs Vapi/Retell, the real two-layer cost, and config traps.
            </li>
            <li>
              <Link href="/services/" className="text-blue-700 underline underline-offset-2">Services</Link>: the full done-for-you offering.
            </li>
            <li>
              <Link href="/ai-clarity-workshop/" className="text-blue-700 underline underline-offset-2">Free AI Clarity Workshop</Link>: 30-minute mapping session.
            </li>
          </ul>

          {groups.map((g) => (
            <section key={g.heading} className="mt-12">
              <h2 className="font-alte text-2xl tracking-[-0.03em] mb-4">{g.heading}</h2>
              <ul className="space-y-3 text-[15px] leading-[1.55]">
                {g.items.map((it) => (
                  <li key={it.href}>
                    <Link href={it.href} className="text-blue-700 underline underline-offset-2">
                      {it.label}
                    </Link>
                    <span className="text-[#5b6072]">: {it.desc}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <h2 className="font-alte text-2xl tracking-[-0.03em] mt-14 mb-4">For machines</h2>
          <ul className="space-y-2.5 text-[15px] leading-[1.6]">
            <li>
              <a href="/llms.txt" className="text-blue-700 underline underline-offset-2">/llms.txt</a>: curated map of the site for AI crawlers.
            </li>
            <li>
              <a href="/sitemap.xml" className="text-blue-700 underline underline-offset-2">/sitemap.xml</a>: all indexable URLs.
            </li>
            <li>
              Every programmatic page returns clean markdown when requested with an{" "}
              <code className="text-[13px] bg-[#F9F6F4] px-1.5 py-0.5 rounded">Accept: text/markdown</code>{" "}
              header or a <code className="text-[13px] bg-[#F9F6F4] px-1.5 py-0.5 rounded">.md</code> suffix.
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default McpPage;
