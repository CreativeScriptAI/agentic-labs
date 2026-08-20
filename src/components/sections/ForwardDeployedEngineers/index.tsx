"use client";

import FooterSection from "src/components/sections/FooterSection";
import {
  AnswerFirst,
  Compare,
  Faq,
  FinalCta,
  Hero,
  HowItWorks,
  Objection,
  Own,
  Problem,
  Proof,
  Start,
  WhatItIs,
} from "./sections";

const ForwardDeployedEngineersPage = () => (
  <div className="min-h-screen bg-[#F9F6F4] [&_*]:box-border">
    <Hero />
    <AnswerFirst />
    <Problem />
    <WhatItIs />
    <Objection />
    <HowItWorks />
    <Own />
    <Compare />
    <Proof />
    <Start />
    <Faq />
    <FinalCta />
    <FooterSection />
  </div>
);

export default ForwardDeployedEngineersPage;
