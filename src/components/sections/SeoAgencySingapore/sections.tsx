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
import SeoRankCard from "./SeoRankCard";
import {
  COMPARE,
  DO,
  EXPLORE,
  FAQS,
  FINAL,
  HERO,
  LOCAL,
  PRICING,
  PROOF,
  TRUTH,
  WEDGE,
  WHO,
} from "./copy";
import { Container, Eyebrow, FadeUp } from "../LeadGenSingapore/primitives";
import { Icon, IconTile, type IconName } from "../LeadGenSingapore/Icons";

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
                      SEO Agency Singapore
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
                  We build and run the SEO system that turns search into booked
                  calls, on Google and in the AI answers your buyers now trust.
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
            <SeoRankCard />
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
        <h2 className="font-alte text-[26px] sm:text-[34px] text-[#0A1128] tracking-[-0.04em] leading-[1.1] max-w-3xl">
          {TRUTH.headline}
        </h2>
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {TRUTH.points.map((point, i) => (
          <FadeUp key={point} delay={i * 0.08}>
            <div className="h-full border border-[#e7e6e4] border-l-2 border-l-red-500 rounded-none bg-[#F9F6F4] p-6 sm:p-7">
              <span className="font-geist text-[12px] tracking-[0.08em] text-slate-300 block mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-alte text-[16px] sm:text-[17px] text-[#0A1128] tracking-[-0.04em] leading-[1.5]">
                {point}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
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
      <FadeUp>
        <p className="font-alte text-[16px] sm:text-[17px] text-slate-600 tracking-[-0.04em] leading-[1.5] max-w-3xl mt-8">
          It runs on the same fundamentals we use everywhere else:{" "}
          <Link href="/content-marketing-singapore/" className="text-blue-600 hover:underline">
            content marketing
          </Link>{" "}
          that answers what your buyers actually search,{" "}
          <Link href="/social-media-marketing-singapore/" className="text-blue-600 hover:underline">
            social media marketing
          </Link>{" "}
          that keeps your name in front of them between searches, and{" "}
          <Link href="/answer-engine-optimization/" className="text-blue-600 hover:underline">
            answer engine optimization
          </Link>{" "}
          so the AI engines your buyers now ask name you too.
        </p>
      </FadeUp>
    </Container>
  </section>
);

export const Wedge = () => (
  <section className="bg-white py-16 sm:py-24">
    <Container size="lg">
      <FadeUp>
        <Eyebrow text={WEDGE.eyebrow} />
        <h2 className="font-alte text-[26px] sm:text-[34px] text-[#0A1128] tracking-[-0.04em] leading-[1.1] mb-8 max-w-3xl">
          {WEDGE.heading}
        </h2>
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {WEDGE.points.map((point, i) => (
          <FadeUp key={point} delay={i * 0.08}>
            <div className="h-full border border-[#e7e6e4] border-l-2 border-l-blue-600 rounded-none bg-[#F9F6F4] p-6 sm:p-7">
              <div className="flex items-center justify-between mb-4">
                <IconTile name={(["search", "chat", "check"] as IconName[])[i]} />
                <span className="font-geist text-[12px] tracking-[0.08em] text-slate-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="font-alte text-[16px] sm:text-[17px] text-[#0A1128] tracking-[-0.04em] leading-[1.5]">
                {point}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
      <FadeUp>
        <ul className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8">
          {WEDGE.links.map((item) => (
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
    </Container>
  </section>
);

export const LocalSeo = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-t border-[#e7e6e4]">
    <Container size="lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10">
        <FadeUp>
          <Eyebrow text={LOCAL.eyebrow} />
          <h2 className="font-alte text-[26px] sm:text-[34px] text-[#0A1128] tracking-[-0.04em] leading-[1.1] max-w-xl">
            {LOCAL.heading}
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="relative w-full aspect-[16/10] border border-[#e7e6e4] rounded-none overflow-hidden">
            <Image
              src="/images/seo-agency-singapore/singapore-shophouse-street.webp"
              alt="Colorful heritage shophouses along a Singapore street in a historical district"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </FadeUp>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {LOCAL.cards.map((card, i) => (
          <FadeUp key={card.body} delay={i * 0.07}>
            <div className="bg-white border border-[#e7e6e4] rounded-none p-5 sm:p-6 h-full">
              <IconTile name={card.icon} className="mb-4" />
              <p className="font-alte text-[15px] text-slate-600 tracking-[-0.04em] leading-[1.5]">
                {card.body}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

export const Pricing = () => (
  <section className="bg-white py-16 sm:py-24">
    <Container size="lg">
      <FadeUp>
        <Eyebrow text={PRICING.eyebrow} />
        <h2 className="font-alte text-[26px] sm:text-[34px] text-[#0A1128] tracking-[-0.04em] leading-[1.1] mb-10 max-w-3xl">
          {PRICING.heading}
        </h2>
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PRICING.points.map((point, i) => (
          <FadeUp key={point} delay={i * 0.08}>
            <div className="h-full border border-[#e7e6e4] border-l-2 border-l-[#FCCA07] rounded-none bg-[#F9F6F4] p-6 sm:p-7">
              <span className="inline-flex items-center justify-center w-9 h-9 mb-4 bg-[#FCCA07] text-[#0A1128] font-geist text-[13px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-alte text-[16px] sm:text-[17px] text-[#0A1128] tracking-[-0.04em] leading-[1.5]">
                {point}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

export const Comparison = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-t border-[#e7e6e4]">
    <Container size="lg">
      <FadeUp>
        <Eyebrow text={COMPARE.eyebrow} />
        <h2 className="font-alte text-[26px] sm:text-[34px] text-[#0A1128] tracking-[-0.04em] leading-[1.1] mb-4 max-w-3xl">
          {COMPARE.heading}
        </h2>
      </FadeUp>
      <CompareTable />
      <FadeUp>
        <p className="font-alte text-[16px] text-[#0A1128] tracking-[-0.04em] leading-[1.5] mt-8 max-w-3xl border-l-2 border-[#FCCA07] pl-5">
          {COMPARE.line}
        </p>
      </FadeUp>
    </Container>
  </section>
);

export const Proof = () => (
  <section className="bg-white py-16 sm:py-24">
    <Container size="lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
      <FadeUp className="flex flex-col justify-center">
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
      <FadeUp delay={0.1} className="h-full">
        <div className="relative w-full h-full min-h-[260px] border border-[#e7e6e4] rounded-none overflow-hidden">
          <Image
            src="/images/seo-agency-singapore/seo-analytics-dashboard.webp"
            alt="Laptop screen displaying an analytics dashboard with charts and graphs for tracking SEO performance data"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </FadeUp>
      </div>
    </Container>
  </section>
);

export const WhoThisIsFor = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24">
    <Container size="lg">
      <FadeUp>
        <Eyebrow text={WHO.eyebrow} />
      </FadeUp>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <FadeUp>
          <div className="relative w-full h-full min-h-[220px] border border-[#e7e6e4] rounded-none overflow-hidden">
            <Image
              src="/images/seo-agency-singapore/singapore-business-team-meeting.webp"
              alt="Small business team collaborating in a group discussion around a desk in a modern office"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-center"
            />
          </div>
        </FadeUp>
        <FadeUp delay={0.06}>
          <div className="border border-[#e7e6e4] border-l-2 border-l-[#FCCA07] rounded-none p-6 sm:p-8 bg-white h-full">
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

export const Explore = () => (
  <section className="bg-white py-16 sm:py-24">
    <Container size="sm">
      <FadeUp>
        <Eyebrow text={EXPLORE.eyebrow} />
        <ul className="space-y-3 mt-2">
          {EXPLORE.links.map((item) => (
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
    </Container>
  </section>
);

export const Faq = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24">
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
  <section className="relative bg-[#0A1128] py-20 sm:py-28 overflow-hidden">
    <Image
      src="/images/seo-agency-singapore/singapore-cbd-business-district.webp"
      alt="Singapore CBD financial district skyline with high-rise office towers under a clear daytime sky"
      fill
      sizes="100vw"
      className="object-cover object-center opacity-25"
    />
    <div
      aria-hidden
      className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/85 to-[#0A1128]/60"
    />
    <Container size="sm" className="relative z-10">
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
