"use client";

import FooterSection from "src/components/sections/FooterSection";
import Sources from "src/components/sections/Sources";
import {
  Comparison,
  DeepDive,
  Explore,
  Faq,
  FinalCta,
  Hero,
  LocalSeo,
  Pricing,
  Proof,
  UncomfortableTruth,
  WhatWeDo,
  Wedge,
  WhoThisIsFor,
} from "./sections";

const SeoAgencySingaporePage = () => {
  return (
    <div className="min-h-screen bg-[#F9F6F4] [&_*]:box-border">
      <Hero />
      <UncomfortableTruth />
      <WhatWeDo />
      <Wedge />
      <LocalSeo />
      <Pricing />
      <Comparison />
      <Proof />
      <DeepDive />
      <WhoThisIsFor />
      <Explore />
      <Faq />
      <Sources
        sources={[
          {
            label: "Google Search Central: SEO documentation",
            href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
          },
        ]}
      />
      <FinalCta />
      <FooterSection />
    </div>
  );
};

export default SeoAgencySingaporePage;
