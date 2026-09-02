"use client";

import FooterSection from "src/components/sections/FooterSection";
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
      <FinalCta />
      <FooterSection />
    </div>
  );
};

export default LeadGenSingaporePage;
