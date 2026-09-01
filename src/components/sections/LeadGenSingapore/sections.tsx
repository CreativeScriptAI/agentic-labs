"use client";

import Image from "next/image";
import Link from "next/link";
import BracketButton from "src/components/BracketButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "src/components/ui/accordion";
import CompareTable from "./CompareTable";
import JourneyStrip from "./JourneyStrip";
import SpeedToLeadCard from "./SpeedToLeadCard";
import {
  COMPARE,
  DO,
  EXPLORE,
  FAQS,
  FINAL,
  HERO,
  JOURNEY,
  PROOF,
  SG,
  START,
  TRUTH,
  WHO,
} from "./copy";
import { Container, Eyebrow, FadeUp } from "./primitives";
import { Icon, IconTile } from "./Icons";

export const Hero = () => {
  const scrollToHow = () => {
    const el = document.getElementById("how-it-works");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <section className="bg-[#F9F6F4] border-b border-[#e7e6e4] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-6 text-left">
            <FadeUp>
              <nav aria-label="Breadcrumb" className="mb-5">
                <ol className="flex flex-wrap items-center justify-start gap-x-2 gap-y-1">
                  <li className="flex items-center gap-2">
                    <Link
                      href="/"
                      className="font-alte text-[13px] text-slate-400 hover:text-[#0A1128] tracking-[-0.04em]"
                    >
                      Home
                    </Link>
                    <span className="text-slate-300 text-[13px]" aria-hidden>
                      /
                    </span>
                  </li>
                  <li>
                    <span
                      aria-current="page"
                      className="font-alte text-[13px] text-slate-500 tracking-[-0.04em]"
                    >
                      Lead Generation Agency Singapore
                    </span>
                  </li>
                </ol>
              </nav>
              <div className="flex justify-start">
                <Eyebrow text={HERO.eyebrow} />
              </div>
              <h1 className="font-alte font-normal text-[1.9rem] sm:text-[2.3rem] lg:text-[2.5rem] leading-[1.06] tracking-[-0.04em] text-balance mb-5">
                <span className="text-[#0A1128] block">{HERO.headline1}</span>
                <span className="text-blue-600 block">{HERO.headline2}</span>
              </h1>
              <div className="border-l-2 border-[#FCCA07] pl-4 sm:pl-5 mb-5 max-w-md lg:mx-0">
                <p className="font-alte font-medium text-[16px] sm:text-[18px] text-[#0A1128] tracking-[-0.02em] leading-[1.5]">
                  We build and run the system that turns the leads you already
                  get into booked calls, inside your own CRM and phone.
                </p>
              </div>
              <p className="font-alte text-[15px] sm:text-[16px] text-slate-600 leading-[1.55] tracking-[-0.04em] max-w-md lg:mx-0 mb-5">
                {HERO.sub}
              </p>
              <p className="hidden lg:block font-alte text-[13px] text-slate-500 tracking-[-0.04em] leading-[1.5] max-w-md lg:mx-0 mb-8">
                {HERO.support}
              </p>
              <div className="flex flex-col sm:flex-row justify-start gap-3">
                <BracketButton label={HERO.ctaPrimary} href={HERO.hrefPrimary} />
                <BracketButton
                  label={HERO.ctaSecondary}
                  onClick={scrollToHow}
                  variant="secondary"
                />
              </div>
            </FadeUp>
          </div>

          {/* Right: infographic */}
          <div className="lg:col-span-6 relative order-last">
            <div
              aria-hidden
              className="absolute -top-10 -right-10 w-[420px] h-[420px] max-w-full rounded-full bg-gradient-to-br from-blue-200/40 to-[#FCCA07]/20 blur-3xl -z-10"
            />
            <SpeedToLeadCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export const UncomfortableTruth = () => (
  <section className="bg-white py-16 sm:py-24">
    <Container size="lg">
      <FadeUp>
        <Eyebrow text={TRUTH.eyebrow} />
        <h2 className="font-alte text-[26px] sm:text-[36px] text-[#0A1128] tracking-[-0.04em] leading-[1.12] max-w-3xl">
          {TRUTH.headline}
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        {/* The 9pm problem: a cold-lead timeline (warm to cold to lost) */}
        <FadeUp>
          <div className="h-full border border-[#e7e6e4] rounded-none bg-[#F9F6F4] p-6 sm:p-7">
            <p className="font-geist text-[11px] uppercase tracking-[0.08em] text-red-500 mb-6">
              {TRUTH.timelineLabel}
            </p>
            <ol className="relative">
              {TRUTH.timeline.map((step, i) => {
                const dot =
                  step.tone === "warm"
                    ? "bg-[#FCCA07]"
                    : step.tone === "lost"
                      ? "bg-red-500"
                      : "bg-slate-300";
                const isLast = i === TRUTH.timeline.length - 1;
                return (
                  <li key={step.text} className="relative flex gap-4 pb-6 last:pb-0">
                    {!isLast && (
                      <span
                        aria-hidden
                        className="absolute left-[5px] top-4 bottom-0 w-px bg-[#e7e6e4]"
                      />
                    )}
                    <span
                      aria-hidden
                      className={`relative z-10 mt-1.5 w-[11px] h-[11px] flex-shrink-0 rounded-full ${dot}`}
                    />
                    <div>
                      <p className="font-geist text-[10px] uppercase tracking-[0.08em] text-slate-400 mb-1">
                        {step.time}
                      </p>
                      <p className="font-alte text-[15px] sm:text-[16px] text-[#0A1128] tracking-[-0.04em] leading-[1.45]">
                        {step.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </FadeUp>

        {/* So you try to fix it: struck-out attempts */}
        <FadeUp delay={0.08}>
          <div className="h-full border border-[#e7e6e4] rounded-none bg-white p-6 sm:p-7 flex flex-col">
            <p className="font-geist text-[11px] uppercase tracking-[0.08em] text-red-500 mb-6">
              {TRUTH.triedLabel}
            </p>
            <ul className="space-y-3">
              {TRUTH.tried.map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center border border-red-200 bg-red-50 text-red-400">
                    <Icon name="x" className="w-3 h-3" />
                  </span>
                  <span className="font-alte text-[15px] sm:text-[16px] text-slate-500 line-through tracking-[-0.04em]">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-alte text-[15px] text-slate-600 tracking-[-0.04em] leading-[1.5] mt-6 pt-5 border-t border-[#e7e6e4]">
              {TRUTH.triedOutcome}
            </p>
          </div>
        </FadeUp>
      </div>

      {/* The reframe: accent callout */}
      <FadeUp delay={0.12}>
        <div className="mt-5 border-l-2 border-[#FCCA07] bg-[#F9F6F4] px-6 sm:px-8 py-6">
          <p className="font-alte text-[18px] sm:text-[22px] text-[#0A1128] tracking-[-0.04em] leading-[1.4] max-w-3xl">
            {TRUTH.reframe}
          </p>
        </div>
      </FadeUp>
    </Container>
  </section>
);

export const WhatWeDo = () => (
  <section id="how-it-works" className="bg-[#F9F6F4] py-16 sm:py-24">
    <Container size="lg">
      <FadeUp>
        <Eyebrow text={DO.eyebrow} />
        <h2 className="font-alte text-[26px] sm:text-[34px] text-[#0A1128] tracking-[-0.04em] leading-[1.1] mb-4 max-w-3xl">
          {DO.heading}
        </h2>
        <p className="font-alte text-[17px] sm:text-[19px] text-slate-600 tracking-[-0.04em] leading-[1.5] max-w-3xl mb-10">
          {DO.intro}
        </p>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DO.steps.map((step, i) => (
          <FadeUp key={step.label} delay={i * 0.08}>
            <div className="bg-white border border-[#e7e6e4] rounded-none p-5 sm:p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <IconTile name={step.icon} />
                <span className="font-geist text-[12px] tracking-[0.08em] text-slate-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="font-alte text-[17px] text-[#0A1128] tracking-[-0.04em] leading-[1.3] mb-2">
                {step.label}
              </p>
              <p className="font-alte text-[15px] text-slate-600 tracking-[-0.04em] leading-[1.5]">
                {step.sub}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

export const LeadJourney = () => (
  <section className="bg-white py-16 sm:py-24">
    <Container size="lg">
      <FadeUp>
        <Eyebrow text={JOURNEY.eyebrow} />
        <p className="font-alte text-[17px] sm:text-[19px] text-[#0A1128] tracking-[-0.04em] leading-[1.5] max-w-3xl">
          {JOURNEY.intro}
        </p>
      </FadeUp>
      <JourneyStrip />
      {/*
        TODO(link): other stage pillars when live
        /qualify (stage 2)
        /warm-up-and-follow-up (stage 3)
        /book-and-convert (stage 4)
      */}
    </Container>
  </section>
);

export const StartWith = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24">
    <Container size="lg">
      <FadeUp>
        <Eyebrow text={START.eyebrow} />
        <p className="font-alte text-[17px] sm:text-[19px] text-[#0A1128] tracking-[-0.04em] leading-[1.5] max-w-3xl mb-10">
          {START.intro}
        </p>
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {START.cards.map((card, i) => {
          const inner = (
            <div className="group bg-white border border-[#e7e6e4] rounded-none p-5 sm:p-6 h-full hover:border-[#0A1128] transition-colors">
              <div className="flex items-center justify-between mb-4">
                <IconTile name={card.icon} />
                {card.href ? (
                  <Icon
                    name="arrow"
                    className="w-4 h-4 text-slate-300 group-hover:text-[#0A1128] transition-colors"
                  />
                ) : null}
              </div>
              <p className="font-alte text-[17px] text-[#0A1128] tracking-[-0.04em] leading-[1.3] mb-3">
                {card.title}
              </p>
              <p className="font-alte text-[14px] text-slate-600 tracking-[-0.04em] leading-[1.5]">
                {card.outcome}
              </p>
            </div>
          );
          return (
            <FadeUp key={card.title} delay={i * 0.07}>
              {card.href ? (
                <Link href={card.href} className="block h-full">
                  {inner}
                </Link>
              ) : (
                inner
              )}
            </FadeUp>
          );
        })}
      </div>
      {/* TODO(link): Find and qualify leads deep page when live */}
    </Container>
  </section>
);

export const Comparison = () => (
  <section className="bg-white py-16 sm:py-24">
    <Container size="lg">
      <FadeUp>
        <Eyebrow text={COMPARE.eyebrow} />
        <h2 className="font-alte text-[26px] sm:text-[34px] text-[#0A1128] tracking-[-0.04em] leading-[1.1] mb-4 max-w-3xl">
          {COMPARE.heading}
        </h2>
        <p className="font-alte text-[17px] sm:text-[19px] text-slate-600 tracking-[-0.04em] leading-[1.5] max-w-3xl">
          {COMPARE.intro}
        </p>
      </FadeUp>
      <CompareTable />
      <p className="font-alte text-[16px] text-slate-600 tracking-[-0.04em] leading-[1.5] mt-8 max-w-3xl">
        {COMPARE.line}
      </p>
      <p className="font-alte text-[16px] text-slate-600 tracking-[-0.04em] leading-[1.5] mt-4 max-w-3xl">
        And because more buyers now ask an AI who to hire before they ever reach
        your form, it pays to{" "}
        <Link href="/answer-engine-optimization/" className="text-blue-600 hover:underline">
          get named in AI answers
        </Link>{" "}
        as well.
      </p>
    </Container>
  </section>
);

export const BuiltForSingapore = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-t border-[#e7e6e4]">
    <Container size="lg">
      <FadeUp>
        <Eyebrow text={SG.eyebrow} />
        <h2 className="font-alte text-[26px] sm:text-[34px] text-[#0A1128] tracking-[-0.04em] leading-[1.1] mb-4 max-w-3xl">
          {SG.heading}
        </h2>
        <p className="font-alte text-[17px] sm:text-[19px] text-slate-600 tracking-[-0.04em] leading-[1.5] max-w-3xl mb-10">
          {SG.intro}
        </p>
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SG.cards.map((card, i) => (
          <FadeUp key={card.title} delay={i * 0.07}>
            <div className="bg-white border border-[#e7e6e4] rounded-none p-5 sm:p-6 h-full">
              <IconTile name={card.icon} className="mb-4" />
              <p className="font-alte text-[17px] text-[#0A1128] tracking-[-0.04em] leading-[1.3] mb-2">
                {card.title}
              </p>
              <p className="font-alte text-[15px] text-slate-600 tracking-[-0.04em] leading-[1.5]">
                {card.body}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
      <FadeUp>
        <p className="font-alte text-[16px] text-[#0A1128] tracking-[-0.04em] leading-[1.5] mt-8 max-w-3xl border-l-2 border-[#FCCA07] pl-5">
          {SG.line}
        </p>
      </FadeUp>
    </Container>
  </section>
);

export const Proof = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24">
    <Container size="sm">
      <FadeUp>
        <p className="font-alte text-[19px] sm:text-[22px] text-[#0A1128] tracking-[-0.04em] leading-[1.4] mb-8">
          {PROOF.line1}
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-5 mb-10">
          {PROOF.logos.map((logo) =>
            logo.src ? (
              <Image
                key={logo.key}
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                className="grayscale opacity-60 h-6 w-auto"
              />
            ) : (
              <span
                key={logo.key}
                className="font-alte text-[15px] text-slate-400 tracking-[-0.04em]"
              >
                {logo.alt}
              </span>
            )
          )}
        </div>
        <p className="font-alte text-[16px] sm:text-[18px] text-[#0A1128] tracking-[-0.04em] leading-[1.5] mb-6">
          {PROOF.line2}
        </p>
        <blockquote className="border-l-2 border-[#FCCA07] pl-6">
          <p className="font-alte text-[16px] sm:text-[18px] text-[#0A1128] tracking-[-0.04em] leading-[1.5]">
            {PROOF.line3}
          </p>
        </blockquote>
      </FadeUp>
    </Container>
  </section>
);

export const WhoThisIsFor = () => (
  <section className="bg-white py-16 sm:py-24">
    <Container size="lg">
      <FadeUp>
        <Eyebrow text={WHO.eyebrow} />
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FadeUp>
          <div className="border border-[#e7e6e4] border-l-2 border-l-[#FCCA07] rounded-none p-6 sm:p-8 bg-[#F9F6F4] h-full">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center justify-center w-5 h-5 flex-shrink-0 bg-green-500 text-white">
                <Icon name="check" className="w-3 h-3" />
              </span>
              <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-[#0A1128]">
                For you if
              </p>
            </div>
            <p className="font-alte text-[16px] sm:text-[18px] text-[#0A1128] tracking-[-0.04em] leading-[1.5]">
              {WHO.forYou}
            </p>
          </div>
        </FadeUp>
        <FadeUp delay={0.08}>
          <div className="border border-[#e7e6e4] rounded-none p-6 sm:p-8 bg-white h-full">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center justify-center w-5 h-5 flex-shrink-0 border border-[#e7e6e4] text-slate-400">
                <Icon name="x" className="w-3 h-3" />
              </span>
              <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400">
                Not for you if
              </p>
            </div>
            <p className="font-alte text-[16px] sm:text-[18px] text-slate-600 tracking-[-0.04em] leading-[1.5]">
              {WHO.notForYou}
            </p>
          </div>
        </FadeUp>
      </div>
    </Container>
  </section>
);

export const Explore = () => {
  const live = EXPLORE.links.filter((l) => l.live);
  return (
    <section className="bg-[#F9F6F4] py-16 sm:py-24">
      <Container size="sm">
        <FadeUp>
          <Eyebrow text={EXPLORE.eyebrow} />
          <p className="font-alte text-[17px] sm:text-[19px] text-[#0A1128] tracking-[-0.04em] leading-[1.5] mb-8">
            {EXPLORE.intro}
          </p>
          <ul className="space-y-3">
            {live.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group inline-flex items-center gap-2.5 font-alte text-[16px] text-blue-600 tracking-[-0.04em]"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 flex-shrink-0 border border-[#e7e6e4] bg-white text-blue-600 group-hover:border-blue-600 transition-colors">
                    <Icon name="arrow" className="w-3.5 h-3.5" />
                  </span>
                  <span className="group-hover:underline">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </FadeUp>
        {/*
          TODO(link): /b2b-lead-generation-singapore/ when live
          TODO(link): /seo-agency-singapore/ when live
          TODO(link): /sem-agency-singapore/ when live
          TODO(link): /content-marketing-agency-singapore/ when live
          TODO(link): /social-media-agency-singapore/ when live
        */}
      </Container>
    </section>
  );
};

export const Faq = () => (
  <section className="bg-white py-16 sm:py-24">
    <Container size="sm">
      <FadeUp>
        <Eyebrow text="COMMON QUESTIONS" />
      </FadeUp>
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

export const FinalCta = () => (
  <section className="bg-[#0A1128] py-16 sm:py-24">
    <Container size="sm">
      <FadeUp>
        <h2 className="font-alte text-2xl sm:text-4xl text-white tracking-[-0.04em] leading-[1.15] mb-4">
          {FINAL.headline}
        </h2>
        <p className="font-alte text-[16px] text-white/70 tracking-[-0.04em] leading-[1.5] mb-8">
          {FINAL.sub}
        </p>
        <BracketButton label={FINAL.cta} href={FINAL.href} />
      </FadeUp>
    </Container>
  </section>
);
