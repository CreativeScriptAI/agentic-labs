import React from "react";
import RootLayout from "src/layouts/RootLayout";
import { NextSeo } from "next-seo";
import { CONFIG } from "site.config";
import AboutHero from "src/components/sections/AboutHero";
import WhyDifferent from "src/components/sections/WhyDifferent";
import ReasonExist from "src/components/sections/ReasonExist";
import ContactSection from "src/components/sections/ContactSection";
import FooterSection from "src/components/sections/FooterSection";
import WhatWeDo from "src/components/sections/WhatWeDo";
import FounderTeamSection from "src/components/sections/AiVoiceAgent/FounderTeamSection";

const AboutPage = () => {
  return (
    <RootLayout>
      <NextSeo
        title={`About • ${CONFIG.blog.title}`}
        description="The lab that turns AI into outcomes. You shouldn't have to become an AI expert to get ahead. We build the systems that do the work and keep them running in production."
        openGraph={{
          title: `About • ${CONFIG.blog.title}`,
          description:
            "The lab that turns AI into outcomes. You shouldn't have to become an AI expert to get ahead. We build the systems that do the work and keep them running in production.",
          type: "website",
          url: `${CONFIG.link}/about`,
        }}
      />
      <AboutHero />
      <ReasonExist />
      <WhyDifferent />
      <WhatWeDo />
      <FounderTeamSection variant="light" />
      <ContactSection />
      <FooterSection />
    </RootLayout>
  );
};

export default AboutPage;
