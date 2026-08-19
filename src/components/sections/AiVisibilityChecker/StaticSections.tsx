"use client";

import BracketButton from "src/components/BracketButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "src/components/ui/accordion";
import { FAQS, FINAL, FIX, HOW, PROOF, TRACK, WHY } from "./copy";
import HowItWorksFlow from "./HowItWorksFlow";
import OldVsNewSearch from "./OldVsNewSearch";
import WhatWeTrackLayers from "./WhatWeTrackLayers";
import { Container, Eyebrow, FadeUp } from "./primitives";

export const WhatWeTrack = () => (
  <section className="bg-white py-16 sm:py-24">
    <Container size="lg">
      <FadeUp>
        <Eyebrow text={TRACK.eyebrow} />
        <p className="font-alte text-[17px] sm:text-[19px] text-[#0A1128] tracking-[-0.04em] leading-[1.5] max-w-3xl">
          {TRACK.copy}
        </p>
      </FadeUp>
      <WhatWeTrackLayers />
    </Container>
  </section>
);

export const HowItWorks = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24">
    <Container size="lg">
      <FadeUp>
        <Eyebrow text={HOW.eyebrow} />
      </FadeUp>
      <HowItWorksFlow />
    </Container>
  </section>
);

export const WhyItMatters = () => (
  <section className="bg-white py-16 sm:py-24">
    <Container size="sm">
      <FadeUp>
        <Eyebrow text={WHY.eyebrow} />
        <div className="space-y-6">
          <p className="font-alte text-[17px] sm:text-[19px] text-[#0A1128] tracking-[-0.04em] leading-[1.5]">
            {WHY.p1}
          </p>
          <p className="font-alte text-[17px] sm:text-[19px] text-[#0A1128] tracking-[-0.04em] leading-[1.5]">
            {WHY.p2}
          </p>
          <p className="font-alte text-[17px] sm:text-[19px] text-slate-600 tracking-[-0.04em] leading-[1.5]">
            {WHY.p3}
          </p>
        </div>
      </FadeUp>
    </Container>
    <Container size="lg">
      <OldVsNewSearch />
    </Container>
  </section>
);

export const TheFix = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24">
    <Container size="sm">
      <FadeUp>
        <Eyebrow text={FIX.eyebrow} />
        <div className="space-y-6 mb-8">
          <p className="font-alte text-[17px] sm:text-[19px] text-[#0A1128] tracking-[-0.04em] leading-[1.5]">
            {FIX.p1}
          </p>
          <p className="font-alte text-[17px] sm:text-[19px] text-[#0A1128] tracking-[-0.04em] leading-[1.5]">
            {FIX.p2}
          </p>
        </div>
        <BracketButton label={FIX.cta} href={FIX.href} />
        <p className="font-alte text-[13px] text-slate-500 tracking-[-0.04em] mt-3">
          {FIX.support}
        </p>
      </FadeUp>
    </Container>
  </section>
);

export const Proof = () => (
  <section className="bg-white py-16 sm:py-24">
    <Container size="sm">
      <FadeUp>
        <Eyebrow text={PROOF.eyebrow} />
        <blockquote className="border-l-2 border-[#FCCA07] pl-6 mb-6">
          <p className="font-alte text-[19px] sm:text-[22px] text-[#0A1128] tracking-[-0.04em] leading-[1.4]">
            {PROOF.p1}
          </p>
        </blockquote>
        <p className="font-alte text-[16px] text-slate-600 tracking-[-0.04em] leading-[1.5]">
          {PROOF.p2}
        </p>
      </FadeUp>
    </Container>
  </section>
);

export const Faq = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24">
    <Container size="sm">
      <h2 className="sr-only">FAQ</h2>
      <Accordion type="single" collapsible className="w-full">
        {FAQS.map((item, i) => (
          <AccordionItem
            key={item.question}
            value={`faq-${i}`}
            className="border-[#e7e6e4]"
          >
            <AccordionTrigger className="font-alte text-[16px] sm:text-[18px] text-[#0A1128] tracking-[-0.04em] text-left hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="font-alte text-[15px] text-slate-600 tracking-[-0.04em] leading-[1.5]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  </section>
);

export const FinalCta = () => {
  const scrollToTool = () => {
    const el = document.getElementById("checker");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      document.getElementById("domain")?.focus();
    }, 400);
  };

  return (
    <section className="bg-[#0A1128] py-16 sm:py-24">
      <Container size="sm">
        <FadeUp>
          <h2 className="font-alte text-2xl sm:text-4xl text-white tracking-[-0.04em] leading-[1.15] mb-4">
            {FINAL.headline}
          </h2>
          <p className="font-alte text-[16px] text-white/70 tracking-[-0.04em] leading-[1.5] mb-8">
            {FINAL.sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <BracketButton label={FINAL.ctaA} onClick={scrollToTool} />
            <BracketButton
              label={FINAL.ctaB}
              href={FINAL.hrefB}
              variant="secondary"
              className="!border-white/20 !text-white hover:!bg-white/10"
            />
          </div>
        </FadeUp>
      </Container>
    </section>
  );
};
