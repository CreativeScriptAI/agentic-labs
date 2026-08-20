import MetaConfig from "src/components/MetaConfig";
import AiImplementationPartnerSgPage from "src/components/sections/AiImplementationPartnerSg";
import { FAQS, META } from "src/components/sections/AiImplementationPartnerSg/copy";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Implementation Partner Singapore",
  description: META.description,
  url: META.url,
  provider: { "@id": "https://www.tryagentikai.com/#organization" },
  areaServed: "Singapore",
  serviceType: "AI implementation for marketing and sales",
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
    { "@type": "ListItem", position: 2, name: "AI Implementation Partner Singapore", item: META.url },
  ],
};

const Page = () => (
  <>
    <MetaConfig title={META.title} description={META.description} type="Page" url={META.url} canonical={META.url} keywords={META.keywords} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <AiImplementationPartnerSgPage />
  </>
);

export default Page;
