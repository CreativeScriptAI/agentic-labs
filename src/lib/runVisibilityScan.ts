export type EngineName =
  | "ChatGPT"
  | "Perplexity"
  | "Google AI"
  | "Gemini"
  | "Grok"
  | "Claude";

export type EngineStatus = "named" | "mentioned" | "absent";
export type AeoStatus = "ok" | "partial" | "missing";
export type IssueSeverity = "Critical" | "High" | "Medium" | "Low";
export type IssueEffort = "Quick fix" | "A few hours" | "Bigger project";
export type SiteCategoryKey =
  | "Technical"
  | "Speed"
  | "Content"
  | "Discoverability"
  | "Experience"
  | "Authority";

export type VisibilityEngine = {
  name: EngineName;
  status: EngineStatus;
  namedInstead?: string[];
};

export type VisibilityAeoItem = {
  label: string;
  status: AeoStatus;
  detail: string;
};

export type SiteCategory = {
  key: SiteCategoryKey;
  score: number;
  note: string;
};

export type SiteIssue = {
  title: string;
  category: SiteCategoryKey;
  severity: IssueSeverity;
  effort: IssueEffort;
  affects?: number;
  whyItMatters: string;
  howToFix: string[];
  observed: string;
  shouldBe: string;
};

export type VisibilityScanResult = {
  domain: string;
  isExample: boolean;
  ai: {
    rollingOut: boolean;
    shownIn: number;
    outOf: 6;
    engines: VisibilityEngine[];
  };
  site: {
    healthScore: number;
    grade: string;
    counts: { critical: number; high: number; medium: number; low: number };
    categories: SiteCategory[];
    issues: SiteIssue[];
    aeo: VisibilityAeoItem[];
  };
};

export const normalizeDomain = (raw: string): string => {
  return raw
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split("/")[0]
    .split("?")[0]
    .replace(/\/+$/, "");
};

export const domainToReportId = (domain: string): string =>
  normalizeDomain(domain).replace(/\./g, "-");

export const reportIdToDomain = (id: string): string =>
  id.trim().toLowerCase().replace(/-/g, ".");

export const engineTeaserLine = (engine: VisibilityEngine): string => {
  if (engine.name === "Google AI") {
    if (engine.status === "named") return "Google AI: showing you";
    if (engine.status === "mentioned") return "Google AI: mentions you";
    return "Google AI: not showing you";
  }
  if (engine.status === "named") return `${engine.name}: recommending you`;
  if (engine.status === "mentioned") return `${engine.name}: mentions you`;
  if (engine.namedInstead?.length) {
    return `${engine.name}: names a competitor, not you`;
  }
  return `${engine.name}: not recommending you`;
};

const EXAMPLE_ENGINES: VisibilityEngine[] = [
  {
    name: "ChatGPT",
    status: "absent",
    namedInstead: ["a competitor in your space"],
  },
  {
    name: "Perplexity",
    status: "mentioned",
  },
  {
    name: "Google AI",
    status: "absent",
  },
  {
    name: "Gemini",
    status: "absent",
  },
  {
    name: "Grok",
    status: "absent",
  },
  {
    name: "Claude",
    status: "mentioned",
  },
];

const EXAMPLE_CATEGORIES: SiteCategory[] = [
  {
    key: "Technical",
    score: 75,
    note: "Indexing is mostly fine. Canonical tags are missing on key pages.",
  },
  {
    key: "Speed",
    score: 40,
    note: "Mobile load time is slow and the payload is heavier than it needs to be.",
  },
  {
    key: "Content",
    score: 88,
    note: "Depth is strong. Buyer questions are only partly covered.",
  },
  {
    key: "Discoverability",
    score: 80,
    note: "Schema and sitemap are present. llms.txt is missing.",
  },
  {
    key: "Experience",
    score: 52,
    note: "Layout shift and mobile usability issues on the first screen.",
  },
  {
    key: "Authority",
    score: 35,
    note: "Few referring domains and little real-user history for crawlers to trust.",
  },
];

const EXAMPLE_ISSUES: SiteIssue[] = [
  {
    title: "Content on service pages does not answer buyer questions",
    category: "Content",
    severity: "Critical",
    effort: "Bigger project",
    affects: 4,
    whyItMatters:
      "AI engines recommend the pages that already answer the question a buyer typed. Thin service copy gets skipped, and a competitor with clearer answers gets named instead.",
    howToFix: [
      "List the questions buyers actually ask before they hire you.",
      "Rewrite each service page so the first screen answers one of those questions in plain language.",
      "Add proof under each answer: process, results, and who it is for.",
    ],
    observed: "Service pages describe features. They do not answer hire-intent questions.",
    shouldBe:
      "Each money page answers a real buyer question in the first viewport, with proof underneath.",
  },
  {
    title: "Services and About pages missing canonical tags",
    category: "Technical",
    severity: "High",
    effort: "Quick fix",
    affects: 2,
    whyItMatters:
      "Without a canonical, crawlers and AI engines can treat the same page as several URLs. That splits trust and makes the page harder to cite.",
    howToFix: [
      "Add a self-referencing canonical tag to every indexable page.",
      "Start with /services and /about, then roll the same pattern sitewide.",
      "Confirm in the rendered HTML, not only in the CMS preview.",
    ],
    observed: "No canonical tags on /services and /about.",
    shouldBe: "Every indexable page has a self-referencing canonical.",
  },
  {
    title: "Mobile load time over 4 seconds",
    category: "Speed",
    severity: "High",
    effort: "A few hours",
    whyItMatters:
      "Slow pages get crawled less often and rank lower. If the page is heavy, both Google and AI engines have less of it to read.",
    howToFix: [
      "Measure mobile load on a mid-range phone, not only desktop.",
      "Compress images and serve next-gen formats.",
      "Defer scripts that are not needed for the first screen.",
    ],
    observed: "Largest contentful paint on mobile is over 4 seconds.",
    shouldBe: "Largest contentful paint on mobile under 2.5 seconds.",
  },
  {
    title: "Layout shift on the first screen",
    category: "Experience",
    severity: "Medium",
    effort: "Quick fix",
    whyItMatters:
      "Unstable layout is a quality signal. Pages that jump while loading are less likely to be treated as a reliable source.",
    howToFix: [
      "Reserve height for images, embeds, and webfonts.",
      "Avoid injecting banners above the first heading after load.",
    ],
    observed: "Hero media loads without a reserved size, shifting the heading.",
    shouldBe: "Cumulative layout shift stays under 0.1 on mobile.",
  },
  {
    title: "Structured data incomplete on service pages",
    category: "Discoverability",
    severity: "Medium",
    effort: "A few hours",
    affects: 4,
    whyItMatters:
      "Structured data is how machines read what you offer, where you operate, and who you are. Incomplete schema is a common reason an AI cannot trust a page enough to name it.",
    howToFix: [
      "Add Organization and Service schema to every money page.",
      "Include name, URL, area served, and a short description that matches the visible copy.",
      "Validate the JSON-LD before publishing.",
    ],
    observed: "Organization schema on the homepage only. Service pages have none.",
    shouldBe: "Organization plus Service (or equivalent) on every money page.",
  },
  {
    title: "Unused JavaScript on template pages",
    category: "Speed",
    severity: "Low",
    effort: "A few hours",
    whyItMatters:
      "Extra JavaScript inflates the payload. That slows the read and wastes crawl budget on code no visitor needs.",
    howToFix: [
      "Find scripts that never run on this template.",
      "Remove or split them so only the needed code loads.",
    ],
    observed: "Multiple unused bundles load on inner pages.",
    shouldBe: "Each template loads only the JavaScript it uses.",
  },
];

const EXAMPLE_AEO: VisibilityAeoItem[] = [
  {
    label: "llms.txt",
    status: "missing",
    detail: "missing",
  },
  {
    label: "Structured data",
    status: "partial",
    detail: "incomplete",
  },
  {
    label: "Clean text version for AI",
    status: "missing",
    detail: "missing",
  },
  {
    label: "Crawlable by AI bots",
    status: "partial",
    detail: "partial",
  },
  {
    label: "Content that answers buyer questions",
    status: "missing",
    detail: "thin",
  },
];

export const buildMockScan = (rawDomain: string): VisibilityScanResult => {
  const domain = normalizeDomain(rawDomain) || "yourwebsite.com";
  const shownIn = EXAMPLE_ENGINES.filter((e) => e.status !== "absent").length;
  return {
    domain,
    isExample: true,
    ai: {
      // HONESTY: AI engine queries are not live on this stub. Label as rolling out.
      rollingOut: true,
      shownIn,
      outOf: 6,
      engines: EXAMPLE_ENGINES,
    },
    site: {
      healthScore: 62,
      grade: "D",
      counts: { critical: 1, high: 2, medium: 2, low: 1 },
      categories: EXAMPLE_CATEGORIES,
      issues: EXAMPLE_ISSUES,
      aeo: EXAMPLE_AEO,
    },
  };
};

/**
 * Run an AI visibility scan for a domain.
 *
 * TODO: replace this stub with the real scan engine on tool.tryagentikai.com
 * (site-health audit live now; six-engine AI queries when that service is live).
 * Keep the return shape so the landing page and report view do not change.
 */
export async function runVisibilityScan(
  domain: string
): Promise<VisibilityScanResult> {
  // TODO(api): POST https://tool.tryagentikai.com/api/visibility-scan
  // body: { domain }
  // map the response onto VisibilityScanResult before returning.
  // When the AI query service is live, set ai.rollingOut to false and
  // isExample to false, and pass through real engine results only.
  return buildMockScan(domain);
}
