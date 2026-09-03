// Shared copy shape for the four Singapore service pages (SEO, content,
// Google Ads, social). One parameterized ServicePage renders all four from a
// copy object plus a per-page hero graphic, so the design stays identical.

export type Link = { name: string; to: string; desc?: string };

export type ServiceCopy = {
  meta: { title: string; description: string; keywords: string[]; url: string };
  schemaName: string;
  breadcrumb: string;
  hero: { eyebrow: string; h1a: string; h1b: string; sub: string };
  ctaPrimary: { label: string; to: string };
  ctaSecondary: { label: string; to: string };
  answerFirst: string;
  gap: {
    eyebrow: string;
    heading: string;
    intro: string;
    stopLabel: string;
    stopBody: string;
    goLabel: string;
    goBody: string;
  };
  included: { eyebrow: string; heading: string; items: { title: string; body: string }[] };
  aiDiff: {
    eyebrow: string;
    heading: string;
    intro: string;
    rows: { label: string; old: string; ours: string }[];
  };
  pricing: {
    eyebrow: string;
    heading: string;
    price: string;
    unit: string;
    market: string;
    includes: string[];
    grant: string;
    altNote?: string;
    cta: { label: string; to: string };
  };
  process: { eyebrow: string; heading: string; steps: { n: string; title: string; body: string }[] };
  trust: { eyebrow: string; heading: string; items: { title: string; body: string }[] };
  crossLinks: { eyebrow: string; heading: string; intro: string; links: Link[] };
  // Deep-dive body: substantive H2 sections answering the buyer sub-questions,
  // rendered as long-form content to give the page real depth and more H2s.
  deepDive?: {
    eyebrow: string;
    heading: string;
    // A body paragraph is either a plain string, or an array of inline segments
    // so a citation can wrap a phrase in an outbound (href) or internal (to) link.
    sections: { h2: string; body: (string | DeepDiveSegment[])[] }[];
  };
  // In-prose contextual links rendered as a body paragraph under the answer.
  // Each entry is a sentence with one descriptive inline link.
  relatedProse?: { before: string; anchor: string; to: string; after: string }[];
  faqs: { question: string; answer: string }[];
  final: { eyebrow: string; heading: string; sub: string; ctaA: { label: string; to: string }; ctaB: { label: string; to: string } };
};

// One inline run of a deep-dive paragraph. Plain text unless it carries a link:
// `href` is an external citation (opens in a new tab, dofollow); `to` is an
// internal route rendered via next/link.
export type DeepDiveSegment = { text: string; href?: string; to?: string };
