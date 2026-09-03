"use client";

import FooterSection from "src/components/sections/FooterSection";
import Sources from "src/components/sections/Sources";
import {
  AnswerFirst,
  DeepDive,
  Faq,
  FinalCta,
  Gap,
  Hero,
  How,
  Own,
  Proof,
  Trust,
  WhatItIs,
  WhatWeBuild,
} from "./sections";

const AiImplementationPartnerSgPage = () => (
  <div className="min-h-screen bg-[#F9F6F4] [&_*]:box-border">
    <Hero />
    <AnswerFirst />
    <Gap />
    <WhatItIs />
    <WhatWeBuild />
    <How />
    <Own />
    <Trust />
    <Proof />
    <DeepDive />
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

export default AiImplementationPartnerSgPage;
