import { ProgrammaticPageData } from "src/data/programmaticSeoPages";

const BASE = "https://www.tryagentikai.com";

// Serializes a programmatic page into clean, LLM-friendly markdown. AI answer
// engines (ChatGPT, Claude) crawl markdown and HTML at roughly equal rates and
// prefer a structured text version when one is offered via content negotiation.
// This gives every page a canonical plain-text representation with no markup
// noise, no JS, and no layout chrome.
export function pageToMarkdown(page: ProgrammaticPageData): string {
  const out: string[] = [];
  const url = `${BASE}/${page.pathSegments.join("/")}/`;

  out.push(`# ${page.heroHeadline}`);
  out.push("");
  out.push(`> ${page.heroSubheadline}`);
  out.push("");
  out.push(`**Source:** ${url}`);
  out.push(`**Provider:** Agentic AI Labs (tryagentikai.com)`);
  out.push("");

  if (page.heroSteps?.length) {
    out.push(`## How it works`);
    page.heroSteps.forEach((s, i) => {
      out.push(`${i + 1}. **${s.label}**: ${s.sub}`);
    });
    out.push("");
  }

  out.push(`## ${page.painTitle}`);
  page.painPoints.forEach((p) => out.push(`- ${p}`));
  out.push("");

  if (page.costCallout) {
    out.push(`## Cost breakdown`);
    page.costCallout.items.forEach((it) => out.push(`- ${it.label}: ${it.amount}`));
    out.push(`- **Total:** ${page.costCallout.total}`);
    out.push(`- **We solve it for:** ${page.costCallout.solvesFor}`);
    out.push(`- _Source: ${page.costCallout.source}_`);
    out.push("");
  }

  out.push(`## ${page.statusQuoTitle}`);
  page.statusQuoItems.forEach((s) => out.push(`- ${s}`));
  out.push("");

  if (page.industrySignal) {
    out.push(`## ${page.industrySignal.headline}`);
    out.push(page.industrySignal.body);
    if (page.industrySignal.stat) {
      out.push("");
      out.push(`**${page.industrySignal.stat}** ${page.industrySignal.statLabel || ""}`.trim());
    }
    out.push(`_Source: ${page.industrySignal.source}, ${page.industrySignal.date}_`);
    out.push("");
  }

  out.push(`## ${page.solutionTitle}`);
  if (page.layers?.length) {
    page.layers.forEach((l) => {
      out.push(`### ${l.title}`);
      out.push(l.body);
      out.push("");
    });
  } else {
    page.solutionItems.forEach((s) => out.push(`- ${s}`));
    out.push("");
  }

  if (page.howItWorks?.length) {
    out.push(`## The build`);
    page.howItWorks.forEach((w) => {
      out.push(`### ${w.phase}`);
      out.push(w.body);
      out.push(`_You spend: ${w.youSpend}_`);
      out.push("");
    });
  }

  out.push(`## ${page.proofTitle}`);
  if (page.proofStats?.length) {
    page.proofStats.forEach((s) => out.push(`- **${s.stat}**: ${s.label}`));
  }
  page.proofBullets.forEach((b) => out.push(`- ${b}`));
  out.push("");

  if (page.caseStudy) {
    out.push(`## Case study: ${page.caseStudy.client}`);
    out.push(`**Problem:** ${page.caseStudy.problem}`);
    out.push(`**System:** ${page.caseStudy.system}`);
    out.push(`**Result:** ${page.caseStudy.result}`);
    out.push("");
  }

  if (page.faq?.length) {
    out.push(`## Frequently asked questions`);
    page.faq.forEach((f) => {
      out.push(`### ${f.question}`);
      out.push(f.answer);
      out.push("");
    });
  }

  out.push(`## Get started`);
  out.push(`${page.ctaSupportText}`);
  if (page.ctaEmailFallback) out.push(`Email: ${page.ctaEmailFallback}`);
  out.push("");

  if (page.relatedLinks?.length) {
    out.push(`## Related pages`);
    page.relatedLinks.forEach((l) => {
      const href = l.href.startsWith("http") ? l.href : `${BASE}${l.href}`;
      out.push(`- [${l.label}](${href})`);
    });
    out.push("");
  }

  return out.join("\n");
}
