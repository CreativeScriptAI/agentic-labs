import MetaConfig from "src/components/MetaConfig";
import ServicePage from "src/components/sections/SgServices/ServicePage";
import LawFirmLeadsGraphic from "src/components/sections/SgServices/LawFirmLeadsGraphic";
import { LAW_FIRM_LEADS_COPY } from "src/components/sections/SgServices/lawFirmLeads.copy";

const copy = LAW_FIRM_LEADS_COPY;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: copy.schemaName,
  description: copy.meta.description,
  url: copy.meta.url,
  provider: { "@id": "https://www.tryagentikai.com/#organization" },
  areaServed: "Singapore",
  serviceType: copy.schemaName,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: copy.faqs.map((item) => ({
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
    { "@type": "ListItem", position: 2, name: copy.breadcrumb, item: copy.meta.url },
  ],
};

const Page = () => (
  <>
    <MetaConfig title={copy.meta.title} description={copy.meta.description} type="Page" url={copy.meta.url} canonical={copy.meta.url} keywords={copy.meta.keywords} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <ServicePage copy={copy} Graphic={LawFirmLeadsGraphic} />
  </>
);

export default Page;
