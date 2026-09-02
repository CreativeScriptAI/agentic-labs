"use client";

import FooterSection from "src/components/sections/FooterSection";
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
    <FinalCta />
    <FooterSection />
  </div>
);

export default FollowUpAutomationPage;
