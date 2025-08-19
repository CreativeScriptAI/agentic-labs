import Head from "next/head";

interface StructuredDataProps {
  type:
    | "organization"
    | "service"
    | "softwareApplication"
    | "article"
    | "website"
    | "breadcrumb";
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateSchema = () => {
    const baseContext = "https://schema.org";

    switch (type) {
      case "organization":
        return {
          "@context": baseContext,
          "@type": "Organization",
          name: "Agentic AI Labs",
          url: "https://www.tryagentikai.com",
          logo: "https://www.tryagentikai.com/logo.png",
          description:
            "We turn AI hype into production agents. Build voice, chat, and workflow automation that ships in days.",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-XXX-XXX-XXXX",
            contactType: "customer service",
            email: "contact@tryagentikai.com",
          },
          sameAs: [
            "https://x.com/agenticlabs",
            "https://www.linkedin.com/company/agentic-ai-labs",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Global",
            addressCountry: "US",
          },
          ...data,
        };

      case "service":
        return {
          "@context": baseContext,
          "@type": "Service",
          name: data.name || "Agent Development & Deployment",
          description:
            data.description ||
            "Custom AI agent development and deployment services for businesses",
          provider: {
            "@type": "Organization",
            name: "Agentic AI Labs",
          },
          areaServed: "Global",
          serviceType: "AI Agent Development",
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            category: "Business Services",
          },
          ...data,
        };

      case "softwareApplication":
        return {
          "@context": baseContext,
          "@type": "SoftwareApplication",
          name: data.name,
          description: data.description,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: data.price || "0",
            priceCurrency: "USD",
          },
          creator: {
            "@type": "Organization",
            name: "Agentic AI Labs",
          },
          ...data,
        };

      case "article":
        return {
          "@context": baseContext,
          "@type": "Article",
          headline: data.title,
          description: data.description,
          author: {
            "@type": "Organization",
            name: data.author || "Agentic AI Labs",
          },
          publisher: {
            "@type": "Organization",
            name: "Agentic AI Labs",
            logo: {
              "@type": "ImageObject",
              url: "https://www.tryagentikai.com/logo.png",
            },
          },
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          image: data.image,
          url: data.url,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": data.url,
          },
          ...data,
        };

      case "website":
        return {
          "@context": baseContext,
          "@type": "WebSite",
          name: "Agentic AI Labs",
          url: "https://www.tryagentikai.com",
          description: "Production AI agents for real workflows",
          publisher: {
            "@type": "Organization",
            name: "Agentic AI Labs",
          },
          potentialAction: {
            "@type": "SearchAction",
            target:
              "https://www.tryagentikai.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
          ...data,
        };

      case "breadcrumb":
        return {
          "@context": baseContext,
          "@type": "BreadcrumbList",
          itemListElement:
            data.items?.map((item: any, index: number) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              item: item.url,
            })) || [],
        };

      default:
        return data;
    }
  };

  const schema = generateSchema();

  return (
    <Head>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </Head>
  );
};

export default StructuredData;
