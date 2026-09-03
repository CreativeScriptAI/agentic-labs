"use client";

import FooterSection from "src/components/sections/FooterSection";
import Sources from "src/components/sections/Sources";
import {
  AnswerFirst,
  DeepDive,
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
    <DeepDive />
    <Faq />
    <Sources
      sources={[
        {
          label: "Harvard Business Review: The Short Life of Online Sales Leads (2011)",
          href: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
        },
      ]}
    />
    <FinalCta />
    <FooterSection />
  </div>
);

export default LeadQualificationPage;
