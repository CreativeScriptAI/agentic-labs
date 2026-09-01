import MetaConfig from "src/components/MetaConfig";
import AnswerEngineOptimizationPage from "src/components/sections/AnswerEngineOptimization";
import { META } from "src/components/sections/AnswerEngineOptimization/copy";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Answer Engine Optimization: How to Get Named by AI",
  description: META.description,
  url: META.url,
  mainEntityOfPage: META.url,
  author: { "@id": "https://www.tryagentikai.com/#organization" },
  publisher: { "@id": "https://www.tryagentikai.com/#organization" },
  datePublished: "2026-08-19",
  dateModified: "2026-08-19",
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
      name: "Answer Engine Optimization",
      item: META.url,
    },
  ],
};

const Page = () => (
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
    <AnswerEngineOptimizationPage />
  </>
);

export default Page;
