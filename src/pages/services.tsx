import React from "react";
import RootLayout from "src/layouts/RootLayout";
import { NextSeo } from "next-seo";
import { CONFIG } from "site.config";
import ServicesHeroSection from "src/components/sections/ServicesHeroSection";
import TechStackSection from "src/components/sections/TechStackSection";
import ContactHeroSection from "src/components/sections/ContactHeroSection";
import FooterSection from "src/components/sections/FooterSection";

const ServicesPage = () => {
  return (
    <RootLayout>
      <NextSeo
        title={`Our Services • ${CONFIG.blog.title}`}
        description="Outcomes, ready or custom. We build AI agents that handle your calls, chats, and leads across every channel, wired to your stack, tested on real traffic, kept working. Book a consultation."
        openGraph={{
          title: `Our Services • ${CONFIG.blog.title}`,
          description:
            "Outcomes, ready or custom. We build AI agents that handle your calls, chats, and leads across every channel, wired to your stack, tested on real traffic, kept working. Book a consultation.",
          type: "website",
          url: `${CONFIG.link}/services`,
        }}
      />
      <ServicesHeroSection />
      <TechStackSection />
      <ContactHeroSection noPadding />
      <FooterSection />
    </RootLayout>
  );
};

export default ServicesPage;
