"use client";

import FooterSection from "src/components/sections/FooterSection";
import type { VisibilityScanResult } from "src/lib/runVisibilityScan";
import {
  Faq,
  FinalCta,
  HowItWorks,
  Proof,
  TheFix,
  WhatWeTrack,
  WhyItMatters,
} from "./StaticSections";
import ToolFlow from "./ToolFlow";

type Props = {
  initialResult?: VisibilityScanResult;
};

const AiVisibilityCheckerPage = ({ initialResult }: Props) => {
  return (
    <div className="min-h-screen bg-[#F9F6F4] [&_*]:box-border">
      <ToolFlow initialResult={initialResult} />
      <WhatWeTrack />
      <HowItWorks />
      <WhyItMatters />
      <TheFix />
      <Proof />
      <Faq />
      <FinalCta />
      {/*
        TODO: internal links once these pages exist:
        /seo-agency-singapore/
        /answer-engine-optimization/
        /forward-deployed-engineers/
      */}
      <FooterSection />
    </div>
  );
};

export default AiVisibilityCheckerPage;
