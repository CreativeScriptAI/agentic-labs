import React from "react";
import RootLayout from "src/layouts/RootLayout";
import { NextSeo } from "next-seo";
import ContactHeroSection from "src/components/sections/ContactHeroSection";
import WhoItsForSection from "src/components/sections/WhoItsForSection";
import WhyBookThisSection from "src/components/sections/WhyBookThisSection";

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

      <ContactHeroSection />
      <WhoItsForSection />
      <WhyBookThisSection />

      {/* Load Calendly Script */}
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </RootLayout>
  );
};

export default ContactUsPage;
