import React from "react";
import RootLayout from "src/layouts/RootLayout";
import { NextSeo } from "next-seo";
import ContactHeroSection from "src/components/sections/ContactHeroSection";
import WhoItsForSection from "src/components/sections/WhoItsForSection";
import WhyBookThisSection from "src/components/sections/WhyBookThisSection";
import WhatHappensNext from "src/components/sections/HowItWorksSection";
import ContactFAQSection from "src/components/sections/ContactFAQSection";
import ContactCTASection from "src/components/sections/ContactCTASection";
import FooterSection from "src/components/sections/FooterSection";

const USAContactUsPage = () => {
  return (
    <RootLayout>
      <NextSeo
        title="Contact Us USA - Get Clarity in 30 Minutes | Agentic AI Labs"
        description="Schedule a FREE 30-minute guided session with our Agentic AI Labs team in the USA. Get a clear roadmap for your custom AI agent."
        openGraph={{
          title: "Contact Us USA - Get Clarity in 30 Minutes",
          description:
            "Schedule a FREE 30-minute guided session with our Agentic AI Labs team in the USA. Get a clear roadmap for your custom AI agent.",
          type: "website",
          url: "https://www.tryagentikai.com/usa/contact",
        }}
      />
      <ContactHeroSection />
      <WhoItsForSection />
      <WhyBookThisSection />
      <WhatHappensNext />
      <ContactFAQSection />
      <ContactCTASection />
      <FooterSection />
    </RootLayout>
  );
};

export default USAContactUsPage;
