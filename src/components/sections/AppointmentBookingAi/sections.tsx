"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import Link from "next/link";
import BracketButton from "src/components/BracketButton";
import { Container, Eyebrow, FadeUp } from "../AiVisibilityChecker/primitives";
import HeroBookingGraphic from "./HeroBookingGraphic";
import BookingChainFlow from "./BookingChainFlow";
import NoShowLoop from "./NoShowLoop";
import { motionOff } from "src/lib/motionOff";
import {
  ANSWER_FIRST,
  BREAKS,
  CHANNELS,
  CHOOSE,
  DEEP_DIVE,
  FAQS,
  FINAL,
  FIX,
  HERO,
  HOW,
  INTEGRATIONS,
  NOSHOW,
  WHATITIS,
  WHYNOW,
} from "./copy";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-alte text-[28px] sm:text-[38px] leading-[1.05] tracking-[-0.04em] text-[#0A1128] text-balance">
    {children}
  </h2>
);

const Lead = ({ children }: { children: React.ReactNode }) => (
  <p className="font-alte text-[17px] sm:text-[19px] tracking-[-0.02em] leading-[1.5] text-slate-600 mt-4 max-w-2xl">
    {children}
  </p>
);

const CountUp = ({ value, className = "" }: { value: string; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : value;

  useEffect(() => {
    if (!inView || !ref.current || !match) return;
    const el = ref.current;
    if (motionOff()) {
      el.textContent = value;
      return;
    }
    const controls = animate(0, target, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (v) => {
        el.textContent = `${prefix}${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, target, prefix, suffix, value, match]);

  return (
    <span ref={ref} className={className}>
      {match ? `${prefix}0${suffix}` : value}
    </span>
  );
};

/* 1. HERO */
export const Hero = () => (
  <section className="bg-[#F9F6F4] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pb-24 border-b border-[#e7e6e4] overflow-hidden">
    <Container size="lg">
      <nav className="font-geist text-[12px] text-slate-400 mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#0A1128]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">AI Appointment Booking</span>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <div className="lg:col-span-6">
          <FadeUp>
            <Eyebrow text={HERO.eyebrow} />
            <h1 className="font-alte font-normal text-[2rem] sm:text-4xl lg:text-[2.9rem] leading-[1.08] tracking-[-0.04em] text-balance mb-5">
              <span className="block text-[#0A1128]">{HERO.h1a}</span>
              <span className="block text-blue-600">{HERO.h1b}</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="font-alte text-[15px] sm:text-[17px] text-slate-600 leading-[1.55] tracking-[-0.04em] max-w-xl mb-8">
              {HERO.sub}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <BracketButton label={HERO.ctaPrimary.label} href={HERO.ctaPrimary.to} variant="primary" />
              <BracketButton label={HERO.ctaSecondary.label} href={HERO.ctaSecondary.to} variant="secondary" />
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.14} className="lg:col-span-6 relative order-last w-full max-w-md mx-auto lg:max-w-none">
          <HeroBookingGraphic />
        </FadeUp>
      </div>
    </Container>
  </section>
);

/* 2. ANSWER FIRST + WHAT IT IS / IS NOT */
export const WhatItIs = () => (
  <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <p className="font-alte text-[19px] sm:text-[22px] tracking-[-0.03em] leading-[1.5] text-[#0A1128] max-w-3xl border-l-2 border-[#FCCA07] pl-5">
          {ANSWER_FIRST}
        </p>
      </FadeUp>
      <FadeUp delay={0.06} className="mt-14">
        <Eyebrow text={WHATITIS.eyebrow} />
        <H2>{WHATITIS.heading}</H2>
        <Lead>{WHATITIS.intro}</Lead>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {WHATITIS.items.map((item, i) => (
          <FadeUp key={item.label} delay={i * 0.07}>
            <div
              className={`h-full border p-5 sm:p-6 ${
                item.is
                  ? "border-[#FCCA07] bg-[#FCCA07]/[0.07]"
                  : "border-[#e7e6e4] bg-[#F9F6F4]"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <p className="font-alte text-[20px] tracking-[-0.04em] text-[#0A1128]">{item.label}</p>
                <span
                  className={`font-geist text-[10px] uppercase tracking-[0.02em] px-2 py-0.5 border ${
                    item.is
                      ? "border-[#FCCA07] text-[#0A1128] bg-[#FCCA07]"
                      : "border-[#e7e6e4] text-slate-400 bg-white"
                  }`}
                >
                  {item.is ? "This page" : "Not this"}
                </span>
              </div>
              <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400 mb-3">
                {item.sub}
              </p>
              <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.5] text-slate-600">
                {item.body}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* 3. WHY SPEED (stats) */
export const WhySpeed = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={WHYNOW.eyebrow} />
        <H2>{WHYNOW.heading}</H2>
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-10">
        {WHYNOW.stats.map((s, i) => (
          <FadeUp key={i} delay={i * 0.07}>
            <div className="h-full border border-[#e7e6e4] bg-white p-5 sm:p-6">
              <CountUp
                value={s.stat}
                className="block font-alte text-[38px] sm:text-[44px] tracking-[-0.05em] text-[#0A1128] tabular-nums"
              />
              <p className="font-alte text-[14px] tracking-[-0.02em] leading-[1.45] text-slate-600 mt-2">
                {s.label}
              </p>
              <p className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400 mt-4 leading-[1.4]">
                {s.source}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
      <FadeUp delay={0.1}>
        <p className="font-alte text-[16px] sm:text-[18px] tracking-[-0.02em] leading-[1.55] text-slate-600 mt-8 max-w-2xl">
          {WHYNOW.body}
        </p>
      </FadeUp>
    </Container>
  </section>
);

/* 4. HOW IT WORKS (flagship flow) */
export const HowItWorks = () => (
  <section id="how-it-works" className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={HOW.eyebrow} />
        <H2>{HOW.heading}</H2>
        <Lead>{HOW.intro}</Lead>
      </FadeUp>
      <BookingChainFlow className="mt-12" />
    </Container>
  </section>
);

/* 5. WHERE IT BREAKS (dark) */
export const Breaks = () => (
  <section className="bg-[#0A1128] py-16 sm:py-24">
    <Container size="md">
      <FadeUp>
        <p className="font-geist text-[12px] uppercase tracking-[0.02em] text-[#FCCA07] mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07]" />
          {BREAKS.eyebrow}
        </p>
        <h2 className="font-alte text-[28px] sm:text-[38px] leading-[1.05] tracking-[-0.04em] text-white text-balance">
          {BREAKS.heading}
        </h2>
        <p className="font-alte text-[17px] sm:text-[19px] tracking-[-0.02em] leading-[1.5] text-slate-300 mt-4 max-w-2xl">
          {BREAKS.intro}
        </p>
      </FadeUp>
      <div className="mt-10 border border-white/10">
        {BREAKS.items.map((item, i) => (
          <FadeUp key={item.symptom} delay={i * 0.05}>
            <div
              className={`grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-4 md:gap-6 p-5 sm:p-6 ${
                i > 0 ? "border-t border-white/10" : ""
              }`}
            >
              <div>
                <p className="font-geist text-[10px] uppercase tracking-[0.02em] text-red-400 mb-2">
                  Symptom
                </p>
                <p className="font-alte text-[17px] tracking-[-0.03em] text-white leading-[1.3]">
                  {item.symptom}
                </p>
              </div>
              <div>
                <p className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500 mb-2">
                  Cause
                </p>
                <p className="font-alte text-[15px] tracking-[-0.02em] text-slate-400 leading-[1.5]">
                  {item.cause}
                </p>
              </div>
              <div>
                <p className="font-geist text-[10px] uppercase tracking-[0.02em] text-[#FCCA07] mb-2">
                  Fix
                </p>
                <p className="font-alte text-[15px] tracking-[-0.02em] text-slate-200 leading-[1.5]">
                  {item.fix}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* 6. NO-SHOW RECOVERY */
export const NoShow = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={NOSHOW.eyebrow} />
        <H2>{NOSHOW.heading}</H2>
        <Lead>{NOSHOW.intro}</Lead>
      </FadeUp>
      <NoShowLoop className="mt-12" />
      <FadeUp delay={0.1}>
        <div className="mt-10 max-w-2xl border-l-2 border-[#FCCA07] pl-5">
          <p className="font-alte text-[16px] tracking-[-0.02em] leading-[1.55] text-[#0A1128]">
            {NOSHOW.evidence}
          </p>
          <p className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400 mt-3">
            {NOSHOW.evidenceSource}
          </p>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* 7. INTEGRATIONS (honest table) */
export const Integrations = () => (
  <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={INTEGRATIONS.eyebrow} />
        <H2>{INTEGRATIONS.heading}</H2>
        <Lead>{INTEGRATIONS.intro}</Lead>
      </FadeUp>
      <FadeUp delay={0.08}>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse bg-white border border-[#e7e6e4]">
            <thead>
              <tr>
                {INTEGRATIONS.columns.map((c, i) => (
                  <th
                    key={c}
                    className={`text-left font-geist text-[11px] uppercase tracking-[0.02em] p-4 border-b border-[#e7e6e4] ${
                      i === 1 ? "text-blue-600 bg-blue-50/40" : "text-slate-400"
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {INTEGRATIONS.rows.map((r) => (
                <tr key={r.platform} className="align-top">
                  <td className="font-alte text-[16px] tracking-[-0.03em] text-[#0A1128] p-4 border-b border-[#e7e6e4] whitespace-nowrap">
                    {r.platform}
                  </td>
                  <td className="font-alte text-[15px] tracking-[-0.02em] leading-[1.4] text-[#0A1128] p-4 border-b border-[#e7e6e4] bg-blue-50/40">
                    {r.can}
                  </td>
                  <td className="font-alte text-[15px] tracking-[-0.02em] leading-[1.45] text-slate-600 p-4 border-b border-[#e7e6e4]">
                    {r.needs}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* 8. CHANNELS */
export const Channels = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={CHANNELS.eyebrow} />
        <H2>{CHANNELS.heading}</H2>
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-10">
        {CHANNELS.items.map((c, i) => (
          <FadeUp key={c.name} delay={i * 0.06}>
            <div className="h-full border border-[#e7e6e4] bg-white p-5 sm:p-6 flex flex-col">
              <p className="font-alte text-[20px] tracking-[-0.04em] text-[#0A1128]">{c.name}</p>
              <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.5] text-slate-600 mt-3 flex-1">
                {c.good}
              </p>
              <p className="font-alte text-[14px] tracking-[-0.02em] leading-[1.45] text-slate-500 mt-3 border-l-2 border-[#e7e6e4] pl-3">
                {c.watch}
              </p>
              {c.link ? (
                <Link
                  href={c.link.to}
                  className="font-geist text-[11px] uppercase tracking-[0.02em] text-blue-600 hover:text-[#0A1128] mt-4 inline-block"
                >
                  {c.link.label}
                </Link>
              ) : null}
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* 9. HOW TO CHOOSE */
export const Choose = () => (
  <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="sm">
      <FadeUp>
        <Eyebrow text={CHOOSE.eyebrow} />
        <H2>{CHOOSE.heading}</H2>
      </FadeUp>
      <div className="mt-10 border border-[#e7e6e4]">
        {CHOOSE.items.map((q, i) => (
          <FadeUp key={i} delay={i * 0.03}>
            <div className={`flex gap-4 p-4 sm:p-5 ${i > 0 ? "border-t border-[#e7e6e4]" : ""}`}>
              <span className="font-geist text-[11px] text-slate-400 tabular-nums pt-1 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-alte text-[16px] tracking-[-0.03em] leading-[1.45] text-[#0A1128]">
                {q}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* 10. THE FIX */
export const Fix = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="sm">
      <FadeUp>
        <Eyebrow text={FIX.eyebrow} />
        <H2>{FIX.heading}</H2>
        {FIX.body.map((p, i) => (
          <p
            key={i}
            className="font-alte text-[17px] sm:text-[19px] tracking-[-0.02em] leading-[1.55] text-slate-600 mt-4"
          >
            {p}
          </p>
        ))}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <BracketButton label={FIX.cta.label} href={FIX.cta.to} variant="primary" />
          <span className="font-alte text-[15px] tracking-[-0.02em] text-slate-500">{FIX.support}</span>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* 10b. DEEP DIVE (long-form) */
export const DeepDive = () => (
  <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={DEEP_DIVE.eyebrow} />
        <H2>{DEEP_DIVE.heading}</H2>
      </FadeUp>
      <div className="flex flex-col gap-12 sm:gap-14 mt-12 max-w-3xl">
        {DEEP_DIVE.sections.map((item, i) => (
          <FadeUp key={item.h2} delay={i * 0.05}>
            <div className="border-l-2 border-[#e7e6e4] pl-5 sm:pl-6">
              <h2 className="font-alte text-[19px] sm:text-[22px] text-[#0A1128] tracking-[-0.04em] leading-[1.25] mb-4">
                {item.h2}
              </h2>
              <div className="flex flex-col gap-4">
                {item.body.map((para) => (
                  <p
                    key={para}
                    className="font-alte text-[15px] sm:text-[16px] text-slate-600 tracking-[-0.02em] leading-[1.6] [&_a]:text-blue-600 [&_a]:underline hover:[&_a]:text-[#0A1128]"
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* 11. FAQ */
export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
      <Container size="sm">
        <FadeUp>
          <Eyebrow text="COMMON QUESTIONS" />
          <H2>AI appointment booking, answered</H2>
        </FadeUp>
        <div className="mt-8 border-t border-[#e7e6e4]">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-[#e7e6e4]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-alte text-[17px] sm:text-[18px] tracking-[-0.03em] text-[#0A1128]">
                    {f.question}
                  </span>
                  <span
                    className={`font-geist text-[18px] text-slate-400 flex-shrink-0 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="font-alte text-[15px] sm:text-[16px] tracking-[-0.02em] leading-[1.6] text-slate-600 pb-5 max-w-2xl">
                    {f.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

/* 12. FINAL CTA */
export const FinalCta = () => (
  <section className="bg-[#0A1128] py-16 sm:py-24">
    <Container size="sm">
      <FadeUp>
        <p className="font-geist text-[12px] uppercase tracking-[0.02em] text-[#FCCA07] mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07]" />
          {FINAL.eyebrow}
        </p>
        <h2 className="font-alte text-[30px] sm:text-[42px] leading-[1.03] tracking-[-0.05em] text-white text-balance">
          {FINAL.heading}
        </h2>
        <p className="font-alte text-[17px] tracking-[-0.02em] text-slate-300 mt-4">{FINAL.sub}</p>
        <div className="flex flex-wrap gap-3 mt-8">
          <BracketButton label={FINAL.ctaA.label} href={FINAL.ctaA.to} variant="primary" />
          <BracketButton
            label={FINAL.ctaB.label}
            href={FINAL.ctaB.to}
            variant="secondary"
            className="!border-white/20 !text-white hover:!bg-white/10"
          />
        </div>
      </FadeUp>
    </Container>
  </section>
);
