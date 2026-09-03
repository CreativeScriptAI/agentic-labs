"use client";

import FooterSection from "src/components/sections/FooterSection";
import Sources from "src/components/sections/Sources";
import {
  AnswerFirst,
  Channels,
  Compliance,
  DeepDive,
  Fails,
  Faq,
  FinalCta,
  Fix,
  Hero,
  HowItWorks,
  Measure,
  Sequence,
  Stall,
  Stop,
  WhatItIs,
} from "./sections";

const FollowUpAutomationPage = () => (
  <div className="min-h-screen bg-[#F9F6F4] [&_*]:box-border">
    <Hero />
    <AnswerFirst />
    <Fails />
    <Stall />
    <WhatItIs />
    <Sequence />
    <Channels />
    <Stop />
    <Compliance />
    <HowItWorks />
    <Measure />
    <Fix />
    <DeepDive />
    <Faq />
    <Sources
      sources={[
        {
          label: "Harvard Business Review: The Short Life of Online Sales Leads (2011)",
          href: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
        },
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

export default FollowUpAutomationPage;
