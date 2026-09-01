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
  // In-prose contextual links rendered as a body paragraph under the answer.
  // Each entry is a sentence with one descriptive inline link.
  relatedProse?: { before: string; anchor: string; to: string; after: string }[];
  faqs: { question: string; answer: string }[];
  final: { eyebrow: string; heading: string; sub: string; ctaA: { label: string; to: string }; ctaB: { label: string; to: string } };
};
