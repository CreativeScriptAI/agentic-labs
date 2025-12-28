import React from "react";
import RootLayout from "src/layouts/RootLayout";
import { NextSeo } from "next-seo";
import { CONFIG } from "site.config";
import ServicesHeroSection from "src/components/sections/ServicesHeroSection";
import TechStackSection from "src/components/sections/TechStackSection";
import ContactHeroSection from "src/components/sections/ContactHeroSection";
import FooterSection from "src/components/sections/FooterSection";

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
      <ServicesHeroSection />
      <TechStackSection />
      <ContactHeroSection noPadding />
      <FooterSection />
    </RootLayout>
  );
};

export default AustraliaServicesPage;
