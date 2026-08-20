import MetaConfig from "src/components/MetaConfig";
import LeadQualificationPage from "src/components/sections/LeadQualification";
import { FAQS, META } from "src/components/sections/LeadQualification/copy";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "AI Lead Qualification: Stop Wasting Sales Time on Junk Leads",
  description: META.description,
  url: META.url,
  mainEntityOfPage: META.url,
  author: { "@id": "https://www.tryagentikai.com/#organization" },
  publisher: { "@id": "https://www.tryagentikai.com/#organization" },
  datePublished: "2026-08-20",
  dateModified: "2026-08-20",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tryagentikai.com/" },
    { "@type": "ListItem", position: 2, name: "Lead Qualification", item: META.url },
  ],
};

const Page = () => (
  <>
    <MetaConfig title={META.title} description={META.description} type="Page" url={META.url} canonical={META.url} keywords={META.keywords} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <LeadQualificationPage />
  </>
);

export default Page;
