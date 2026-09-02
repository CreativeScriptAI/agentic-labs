import MetaConfig from "src/components/MetaConfig";
import CostCalculatorPage from "src/components/sections/CostCalculator";

const META = {
  title: "Cost of Lost Leads Calculator | Singapore",
  description:
    "See how much revenue your Singapore business loses to slow lead follow-up. A free calculator that uses your own numbers to show the extra deals and revenue fast replies could win.",
  keywords: [
    "cost of lost leads calculator",
    "lead response time calculator",
    "speed to lead calculator",
    "lost revenue calculator singapore",
    "lead follow up roi",
  ],
  url: "https://www.tryagentikai.com/cost-of-lost-leads-calculator/",
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Cost of Lost Leads Calculator",
  description: META.description,
  url: META.url,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  provider: { "@id": "https://www.tryagentikai.com/#organization" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "SGD",
  },
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
      name: "Cost of Lost Leads Calculator",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CostCalculatorPage />
    </>
  );
};

export default Page;
