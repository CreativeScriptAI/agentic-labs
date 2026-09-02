"use client";

import FooterSection from "src/components/sections/FooterSection";
import {
  Checklist,
  Compare,
  DeepDive,
  Definition,
  Faq,
  FinalCta,
  Fix,
  Hero,
  Measure,
  Mechanism,
  RankChatGPT,
  WhyNow,
} from "./StaticSections";

const AnswerEngineOptimizationPage = () => (
  <div className="min-h-screen bg-[#F9F6F4] [&_*]:box-border">
    <Hero />
    <Definition />
    <Compare />
    <WhyNow />
    <Mechanism />
    <Checklist />
    <RankChatGPT />
    <Measure />
    <Fix />
    <DeepDive />
    <Faq />
    <FinalCta />
    {/* Internal links live in nav (Resources), footer, llms.txt, and the CTAs
        to /ai-visibility-checker/ and /ai-clarity-workshop/. Cross-links to
        /lead-generation-agency-singapore/ (built in parallel) can be added
        once that route exists. */}
    <FooterSection />
  </div>
);

export default AnswerEngineOptimizationPage;
