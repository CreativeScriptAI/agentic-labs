"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { motionOff } from "src/lib/motionOff";
import Link from "next/link";
import BracketButton from "src/components/BracketButton";
import { Container, Eyebrow, FadeUp } from "../AiVisibilityChecker/primitives";
import SystemGraphic from "./SystemGraphic";
import {
  ANSWER_FIRST,
  DEEP_DIVE,
  FAQS,
  FINAL,
  GAP,
  HERO,
  HOW,
  OWN,
  PROOF,
  TRUST,
  WHATITIS,
  WHATWEBUILD,
} from "./copy";
import type { DeepDivePara } from "./copy";

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
  const decimals = match && match[2].includes(".") ? match[2].split(".")[1].length : 0;

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
        el.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, target, prefix, suffix, decimals, value, match]);

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
        <span className="text-slate-500">AI Implementation Partner Singapore</span>
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
          <SystemGraphic />
        </FadeUp>
      </div>
    </Container>
  </section>
);

/* 2. ANSWER FIRST */
export const AnswerFirst = () => (
  <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <p className="font-alte text-[19px] sm:text-[22px] tracking-[-0.03em] leading-[1.5] text-[#0A1128] max-w-3xl border-l-2 border-[#FCCA07] pl-5">
          {ANSWER_FIRST}
        </p>
      </FadeUp>
    </Container>
  </section>
);

/* 3. THE GAP (stats) */
export const Gap = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={GAP.eyebrow} />
        <H2>{GAP.heading}</H2>
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-10">
        {GAP.stats.map((s, i) => (
          <FadeUp key={i} delay={i * 0.07}>
            <div className="h-full border border-[#e7e6e4] bg-white p-5 sm:p-6">
              <CountUp value={s.stat} className="block font-alte text-[38px] sm:text-[44px] tracking-[-0.05em] text-[#0A1128] tabular-nums" />
              <p className="font-alte text-[14px] tracking-[-0.02em] leading-[1.45] text-slate-600 mt-2">{s.label}</p>
              <p className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400 mt-4 leading-[1.4]">{s.source}</p>
            </div>
          </FadeUp>
        ))}
      </div>
      <FadeUp delay={0.1}>
        <p className="font-alte text-[16px] sm:text-[18px] tracking-[-0.02em] leading-[1.55] text-slate-600 mt-8 max-w-2xl">{GAP.body}</p>
      </FadeUp>
    </Container>
  </section>
);

/* 4. FOUR OPTIONS */
export const WhatItIs = () => (
  <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={WHATITIS.eyebrow} />
        <H2>{WHATITIS.heading}</H2>
        <Lead>{WHATITIS.intro}</Lead>
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-10">
        {WHATITIS.items.map((item, i) => (
          <FadeUp key={item.label} delay={i * 0.06}>
            <div className={`h-full border p-5 sm:p-6 ${item.focal ? "border-[#FCCA07] bg-[#FCCA07]/[0.07]" : "border-[#e7e6e4] bg-[#F9F6F4]"}`}>
              <div className="flex items-center justify-between gap-2 mb-2">
                <p className="font-alte text-[20px] tracking-[-0.04em] text-[#0A1128]">{item.label}</p>
                {item.focal ? <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-[#0A1128] bg-[#FCCA07] px-2 py-0.5">This is us</span> : null}
              </div>
              <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.55] text-slate-600">{item.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* 5. WHAT WE BUILD (the 4-stage system, cross-linked) */
export const WhatWeBuild = () => (
  <section id="how-it-works" className="bg-[#0A1128] py-16 sm:py-24">
    <Container size="md">
      <FadeUp>
        <p className="font-geist text-[12px] uppercase tracking-[0.02em] text-[#FCCA07] mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07]" />
          {WHATWEBUILD.eyebrow}
        </p>
        <h2 className="font-alte text-[28px] sm:text-[38px] leading-[1.05] tracking-[-0.04em] text-white text-balance">{WHATWEBUILD.heading}</h2>
        <p className="font-alte text-[17px] sm:text-[19px] tracking-[-0.02em] leading-[1.5] text-slate-300 mt-4 max-w-2xl">{WHATWEBUILD.intro}</p>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-10">
        {WHATWEBUILD.stages.map((s, i) => (
          <FadeUp key={s.n} delay={i * 0.07}>
            <div className="h-full border border-white/10 bg-white/[0.03] p-5 flex flex-col">
              <span className="font-geist text-[12px] text-[#0A1128] bg-[#FCCA07] w-8 h-8 flex items-center justify-center tabular-nums mb-3">{s.n}</span>
              <p className="font-alte text-[18px] tracking-[-0.03em] text-white">{s.title}</p>
              <p className="font-alte text-[14px] tracking-[-0.02em] leading-[1.5] text-slate-400 mt-2 flex-1">{s.body}</p>
              <Link href={s.link.to} className="font-geist text-[10px] uppercase tracking-[0.02em] text-[#FCCA07] hover:text-white mt-4 inline-block">{s.link.label}</Link>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* 6. HOW ENGAGEMENT WORKS */
export const How = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={HOW.eyebrow} />
        <H2>{HOW.heading}</H2>
        <Lead>{HOW.intro}</Lead>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-10">
        {HOW.steps.map((s, i) => (
          <FadeUp key={s.n} delay={i * 0.08}>
            <div className="h-full border border-[#e7e6e4] bg-white p-5 sm:p-6">
              <span className="font-geist text-[13px] text-[#0A1128] bg-[#FCCA07] w-9 h-9 flex items-center justify-center tabular-nums mb-4">{s.n}</span>
              <p className="font-alte text-[19px] tracking-[-0.03em] text-[#0A1128]">{s.title}</p>
              <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.55] text-slate-600 mt-2">{s.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
      <FadeUp delay={0.12}>
        <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.55] text-[#0A1128] mt-8 max-w-3xl border-l-2 border-[#FCCA07] pl-5">{HOW.grant}</p>
      </FadeUp>
    </Container>
  </section>
);

/* 7. WHAT YOU OWN */
export const Own = () => (
  <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={OWN.eyebrow} />
        <H2>{OWN.heading}</H2>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-10">
        {OWN.items.map((item, i) => (
          <FadeUp key={item.you} delay={i * 0.06}>
            <div className="h-full border border-[#e7e6e4] bg-[#F9F6F4] p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 flex items-center justify-center bg-[#FCCA07] text-[#0A1128] flex-shrink-0" aria-hidden>+</span>
                <p className="font-alte text-[17px] tracking-[-0.03em] text-[#0A1128]">{item.you}</p>
              </div>
              <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.5] text-slate-600">{item.detail}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* 8. SINGAPORE TRUST LAYER */
export const Trust = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={TRUST.eyebrow} />
        <H2>{TRUST.heading}</H2>
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-10">
        {TRUST.items.map((item, i) => (
          <FadeUp key={item.title} delay={i * 0.05}>
            <div className="h-full border border-[#e7e6e4] bg-white p-5 sm:p-6">
              <p className="font-alte text-[18px] tracking-[-0.03em] text-[#0A1128]">{item.title}</p>
              <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.55] text-slate-600 mt-2">{item.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* 9. PROOF */
export const Proof = () => (
  <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="sm">
      <FadeUp>
        <Eyebrow text={PROOF.eyebrow} />
        <H2>{PROOF.heading}</H2>
        <p className="font-alte text-[17px] sm:text-[19px] tracking-[-0.02em] leading-[1.55] text-slate-600 mt-4">{PROOF.body}</p>
      </FadeUp>
    </Container>
  </section>
);

/* 10. FAQ */
export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
      <Container size="sm">
        <FadeUp>
          <Eyebrow text="COMMON QUESTIONS" />
          <H2>AI implementation in Singapore, answered</H2>
        </FadeUp>
        <div className="mt-8 border-t border-[#e7e6e4]">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-[#e7e6e4]">
                <button type="button" onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 text-left py-5" aria-expanded={isOpen}>
                  <span className="font-alte text-[17px] sm:text-[18px] tracking-[-0.03em] text-[#0A1128]">{f.question}</span>
                  <span className={`font-geist text-[18px] text-slate-400 flex-shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`} aria-hidden>+</span>
                </button>
                {isOpen && <p className="font-alte text-[15px] sm:text-[16px] tracking-[-0.02em] leading-[1.6] text-slate-600 pb-5 max-w-2xl">{f.answer}</p>}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

/* 10b. DEEP DIVE (long-form, keyword-rich) */
const DeepDivePara = ({ para }: { para: DeepDivePara }) => (
  <p className="font-alte text-[15px] sm:text-[16px] tracking-[-0.02em] leading-[1.65] text-slate-600">
    {typeof para === "string"
      ? para
      : para.map((part, i) =>
          typeof part === "string" ? (
            <span key={i}>{part}</span>
          ) : (
            <Link key={i} href={part.to} className="text-blue-600 hover:underline">
              {part.text}
            </Link>
          )
        )}
  </p>
);

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
              <h2 className="font-alte text-[20px] sm:text-[24px] tracking-[-0.03em] leading-[1.2] text-[#0A1128] mb-4">
                {item.h2}
              </h2>
              <div className="flex flex-col gap-4">
                {item.body.map((para, j) => (
                  <DeepDivePara key={j} para={para} />
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* 11. FINAL CTA */
export const FinalCta = () => (
  <section className="bg-[#0A1128] py-16 sm:py-24">
    <Container size="sm">
      <FadeUp>
        <p className="font-geist text-[12px] uppercase tracking-[0.02em] text-[#FCCA07] mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07]" />
          {FINAL.eyebrow}
        </p>
        <h2 className="font-alte text-[30px] sm:text-[42px] leading-[1.03] tracking-[-0.05em] text-white text-balance">{FINAL.heading}</h2>
        <p className="font-alte text-[17px] tracking-[-0.02em] text-slate-300 mt-4">{FINAL.sub}</p>
        <div className="flex flex-wrap gap-3 mt-8">
          <BracketButton label={FINAL.ctaA.label} href={FINAL.ctaA.to} variant="primary" />
          <BracketButton label={FINAL.ctaB.label} href={FINAL.ctaB.to} variant="secondary" className="!border-white/20 !text-white hover:!bg-white/10" />
        </div>
      </FadeUp>
    </Container>
  </section>
);
