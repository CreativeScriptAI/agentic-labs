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

const USAServicesPage = () => {
  return (
    <RootLayout>
      <NextSeo
        title="AI Services USA | Custom Voice Agents America"
        description="We combine AI tech with human intelligence and empathy to ship agents people actually trust and teams rely on in the USA. We wire it to your stack, test on real traffic, watch the KPI, and keep it improving."
        openGraph={{
          title: "AI Services USA | Custom Voice Agents America",
          description:
            "We combine AI tech with human intelligence and empathy to ship agents people actually trust and teams rely on in the USA.",
          type: "website",
          url: `${CONFIG.link}/usa/services`,
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

export default USAServicesPage;
