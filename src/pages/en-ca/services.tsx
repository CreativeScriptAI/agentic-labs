import React from "react";
import RootLayout from "src/layouts/RootLayout";
import { NextSeo } from "next-seo";
import { CONFIG } from "site.config";
import ServicesHeroSection from "src/components/sections/ServicesHeroSection";
import TechStackSection from "src/components/sections/TechStackSection";
import ContactHeroSection from "src/components/sections/ContactHeroSection";
import FooterSection from "src/components/sections/FooterSection";
import FAQSection from "src/components/sections/FAQSection";
import StructuredData from "src/components/StructuredData";
import { northAmericaServicesFaqs } from "src/data/localeFaqs";

const CanadaServicesPage = () => {
  return (
    <RootLayout>
      <NextSeo
        title={`Our Services • ${CONFIG.blog.title} • Canada`}
        description="We combine AI tech with human intelligence and empathy to ship agents people actually trust and teams rely on in Canada. We wire it to your stack, test on real traffic, watch the KPI, and keep it improving."
        openGraph={{
          title: `Our Services • ${CONFIG.blog.title} • Canada`,
          description:
            "We combine AI tech with human intelligence and empathy to ship agents people actually trust and teams rely on in Canada.",
          type: "website",
          url: `${CONFIG.link}/canada/services`,
        }}
      />
      <StructuredData type="faq" data={{ faqs: northAmericaServicesFaqs }} />
      <ServicesHeroSection />
      <TechStackSection />
      <FAQSection faqs={northAmericaServicesFaqs} />
      <ContactHeroSection noPadding />
      <FooterSection />
    </RootLayout>
  );
};

export default CanadaServicesPage;
