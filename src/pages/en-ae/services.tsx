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
import { uaeServicesFaqs } from "src/data/localeFaqs";

const UAEServicesPage = () => {
  return (
    <RootLayout>
      <NextSeo
        title="AI Services Dubai | Custom Voice Agents UAE"
        description="We combine AI tech with human intelligence and empathy to ship agents people actually trust and teams rely on in the UAE. We wire it to your stack, test on real traffic, watch the KPI, and keep it improving."
        openGraph={{
          title: "AI Services Dubai | Custom Voice Agents UAE",
          description:
            "We combine AI tech with human intelligence and empathy to ship agents people actually trust and teams rely on in the UAE.",
          type: "website",
          url: `${CONFIG.link}/uae/services`,
        }}
      />
      <StructuredData type="faq" data={{ faqs: uaeServicesFaqs }} />
      <ServicesHeroSection />
      <TechStackSection />
      <FAQSection faqs={uaeServicesFaqs} />
      <ContactHeroSection noPadding />
      <FooterSection />
    </RootLayout>
  );
};

export default UAEServicesPage;
