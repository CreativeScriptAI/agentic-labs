import MetaConfig from "src/components/MetaConfig";
import LeadGenSingaporePage from "src/components/sections/LeadGenSingapore";
import { FAQS, META } from "src/components/sections/LeadGenSingapore/copy";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lead Generation",
  description: META.description,
  url: META.url,
  provider: { "@id": "https://www.tryagentikai.com/#organization" },
  areaServed: "Singapore",
  serviceType: "Lead Generation",
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
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.tryagentikai.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Lead Generation Agency Singapore",
      item: META.url,
    },
  ],
};

const Page = () => {
  return (
    <>
      <MetaConfig
        title={META.title}
        description={META.description}
        type="Page"
        url={META.url}
        canonical={META.url}
        keywords={META.keywords}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LeadGenSingaporePage />
    </>
  );
};

export default Page;
