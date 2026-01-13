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
import { australiaServicesFaqs } from "src/data/localeFaqs";

const AustraliaServicesPage = () => {
  return (
    <RootLayout>
      <NextSeo
        title="AI Services Australia | Custom Voice Agents AU"
        description="We combine AI tech with human intelligence and empathy to ship agents people actually trust and teams rely on in Australia. We wire it to your stack, test on real traffic, watch the KPI, and keep it improving."
        openGraph={{
          title: "AI Services Australia | Custom Voice Agents AU",
          description:
            "We combine AI tech with human intelligence and empathy to ship agents people actually trust and teams rely on in Australia.",
          type: "website",
          url: `${CONFIG.link}/australia/services`,
        }}
      />
      <StructuredData type="faq" data={{ faqs: australiaServicesFaqs }} />
      <ServicesHeroSection />
      <TechStackSection />
      <FAQSection faqs={australiaServicesFaqs} />
      <ContactHeroSection noPadding />
      <FooterSection />
    </RootLayout>
  );
};

export default AustraliaServicesPage;
