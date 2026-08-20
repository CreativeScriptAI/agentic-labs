"use client";

import FooterSection from "src/components/sections/FooterSection";
import {
  AnswerFirst,
  Definitions,
  Fails,
  Faq,
  FinalCta,
  Fix,
  Frameworks,
  Hero,
  HowItWorks,
  Limits,
  Measure,
  ScoreVsConversation,
  Speed,
} from "./sections";

const LeadQualificationPage = () => (
  <div className="min-h-screen bg-[#F9F6F4] [&_*]:box-border">
    <Hero />
    <AnswerFirst />
    <Fails />
    <Speed />
    <Definitions />
    <Frameworks />
    <HowItWorks />
    <ScoreVsConversation />
    <Limits />
    <Measure />
    <Fix />
    <Faq />
    <FinalCta />
    <FooterSection />
  </div>
);

export default LeadQualificationPage;
