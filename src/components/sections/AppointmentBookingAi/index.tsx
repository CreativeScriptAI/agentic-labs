"use client";

import FooterSection from "src/components/sections/FooterSection";
import {
  Breaks,
  Channels,
  Choose,
  DeepDive,
  Faq,
  FinalCta,
  Fix,
  Hero,
  HowItWorks,
  Integrations,
  NoShow,
  WhatItIs,
  WhySpeed,
} from "./sections";

const AppointmentBookingAiPage = () => (
  <div className="min-h-screen bg-[#F9F6F4] [&_*]:box-border">
    <Hero />
    <WhatItIs />
    <WhySpeed />
    <HowItWorks />
    <Breaks />
    <NoShow />
    <Integrations />
    <Channels />
    <Choose />
    <Fix />
    <DeepDive />
    <Faq />
    <FinalCta />
    <FooterSection />
  </div>
);

export default AppointmentBookingAiPage;
