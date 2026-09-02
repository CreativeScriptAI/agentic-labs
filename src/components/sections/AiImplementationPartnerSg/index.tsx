"use client";

import FooterSection from "src/components/sections/FooterSection";
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
    <FinalCta />
    <FooterSection />
  </div>
);

export default AiImplementationPartnerSgPage;
