"use client";

import FooterSection from "src/components/sections/FooterSection";
import Sources from "src/components/sections/Sources";
import {
  BuiltForSingapore,
  Comparison,
  DeepDive,
  Explore,
  Faq,
  FinalCta,
  Hero,
  LeadJourney,
  Proof,
  StartWith,
  UncomfortableTruth,
  WhatWeDo,
  WhoThisIsFor,
} from "./sections";

const LeadGenSingaporePage = () => {
  return (
    <div className="min-h-screen bg-[#F9F6F4] [&_*]:box-border">
      <Hero />
      <UncomfortableTruth />
      <WhatWeDo />
      <LeadJourney />
      <StartWith />
      <Comparison />
      <BuiltForSingapore />
      <Proof />
      <WhoThisIsFor />
      <DeepDive />
      <Explore />
      <Faq />
      <Sources
        sources={[
          {
            label: "Personal Data Protection Commission: PDPA and the Do Not Call Registry",
            href: "https://www.pdpc.gov.sg/",
          },
        ]}
      />
      <FinalCta />
      <FooterSection />
    </div>
  );
};

export default LeadGenSingaporePage;
