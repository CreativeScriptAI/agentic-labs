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
import StructuredData from "src/components/StructuredData";
import { contactFaqs } from "src/data/localeFaqs";

const ContactUsPage = () => {
  return (
    <RootLayout>
      <NextSeo
        title="Contact Us - Get Clarity in 30 Minutes | Agentic AI Labs"
        description="Schedule a FREE 30-minute guided session with our Agentic AI Labs team. Get a clear roadmap for your custom AI agent."
        openGraph={{
          title: "Contact Us - Get Clarity in 30 Minutes",
          description:
            "Schedule a FREE 30-minute guided session with our Agentic AI Labs team. Get a clear roadmap for your custom AI agent.",
          type: "website",
        }}
      />
      <StructuredData type="faq" data={{ faqs: contactFaqs }} />

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

export default ContactUsPage;
