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

const AboutPage = () => {
  return (
    <RootLayout>
      <NextSeo
        title={`About • ${CONFIG.blog.title}`}
        description="We combine AI tech with human intelligence and empathy to ship agents people actually trust and teams rely on."
        openGraph={{
          title: `About • ${CONFIG.blog.title}`,
          description:
            "We combine AI tech with human intelligence and empathy to ship agents people actually trust and teams rely on.",
          type: "website",
          url: `${CONFIG.link}/about`,
        }}
      />
      <AboutHero />
      <WhyDifferent />
      <ReasonExist />
      <WhatWeDo />
      <ContactSection />
      <FooterSection />
    </RootLayout>
  );
};

export default AboutPage;
