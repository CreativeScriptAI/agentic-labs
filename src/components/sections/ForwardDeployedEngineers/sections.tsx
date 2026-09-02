"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { motionOff } from "src/lib/motionOff";
import Link from "next/link";
import BracketButton from "src/components/BracketButton";
import { Container, Eyebrow, FadeUp } from "../AiVisibilityChecker/primitives";
import HandoverGraphic from "./HandoverGraphic";
import ModelsCompare from "./ModelsCompare";
import {
  ANSWER_FIRST,
  COMPARE,
  DEEP_DIVE,
  FAQS,
  FINAL,
  HERO,
  HOW,
  OBJECTION,
  OWN,
  PROBLEM,
  PROOF,
  START,
  WHATITIS,
} from "./copy";

// Parse [label](/path/) markers in deep-dive prose into in-line Links.
const renderProse = (text: string): React.ReactNode[] => {
  const nodes: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    nodes.push(
      <Link
        key={key++}
        href={m[2]}
        className="text-blue-600 underline underline-offset-2 hover:text-[#0A1128]"
      >
        {m[1]}
      </Link>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
};

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
        <span className="text-slate-500">Forward Deployed Engineers</span>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <div className="lg:col-span-6">
          <FadeUp>
            <Eyebrow text={HERO.eyebrow} />
            <h1 className="font-alte font-normal text-[2rem] sm:text-4xl lg:text-[2.9rem] leading-[1.08] tracking-[-0.04em] text-balance mb-5">
              <span className="block text-[#0A1128]">{HERO.h1a}</span>
              <span className="block text-blue-600">{HERO.h1b}</span>
            </h1>
            <div className="border-l-2 border-[#FCCA07] pl-4 sm:pl-5 mb-5 max-w-xl">
              <p className="font-alte font-medium text-[16px] sm:text-[18px] text-[#0A1128] tracking-[-0.02em] leading-[1.5]">
                Our engineers embed with your team to build and ship the AI
                agents your business runs on, then hand you a system you own.
              </p>
            </div>
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
          <HandoverGraphic />
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

/* 3. THE PROBLEM */
export const Problem = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={PROBLEM.eyebrow} />
        <H2>{PROBLEM.heading}</H2>
        <Lead>{PROBLEM.intro}</Lead>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-10">
        {PROBLEM.items.map((item, i) => (
          <FadeUp key={item.label} delay={i * 0.07}>
            <div className="h-full border border-[#e7e6e4] bg-white p-5 sm:p-6">
              <p className="font-alte text-[20px] tracking-[-0.04em] text-[#0A1128]">{item.label}</p>
              <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.55] text-slate-600 mt-3">{item.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* 4. WHAT IT IS */
export const WhatItIs = () => (
  <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={WHATITIS.eyebrow} />
        <H2>{WHATITIS.heading}</H2>
        {WHATITIS.body.map((p, i) => (
          <p key={i} className="font-alte text-[17px] sm:text-[18px] tracking-[-0.02em] leading-[1.55] text-slate-600 mt-4 max-w-2xl">{p}</p>
        ))}
      </FadeUp>
      <FadeUp delay={0.1}>
        <p className="font-alte text-[16px] tracking-[-0.02em] leading-[1.55] text-[#0A1128] mt-8 max-w-2xl border-l-2 border-[#FCCA07] pl-5">
          {WHATITIS.honest}
        </p>
      </FadeUp>
    </Container>
  </section>
);

/* 5. OBJECTION */
export const Objection = () => (
  <section className="bg-[#0A1128] py-16 sm:py-24">
    <Container size="sm">
      <FadeUp>
        <p className="font-geist text-[12px] uppercase tracking-[0.02em] text-[#FCCA07] mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07]" />
          {OBJECTION.eyebrow}
        </p>
        <h2 className="font-alte text-[26px] sm:text-[34px] leading-[1.1] tracking-[-0.04em] text-white text-balance">{OBJECTION.heading}</h2>
        <p className="font-alte text-[17px] sm:text-[19px] tracking-[-0.02em] leading-[1.55] text-slate-300 mt-5">{OBJECTION.body}</p>
      </FadeUp>
    </Container>
  </section>
);

/* 6. HOW IT WORKS */
export const HowItWorks = () => (
  <section id="how-it-works" className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={HOW.eyebrow} />
        <H2>{HOW.heading}</H2>
        <Lead>{HOW.intro}</Lead>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-10">
        {HOW.steps.map((s, i) => (
          <FadeUp key={s.n} delay={i * 0.08}>
            <div className="h-full border border-[#e7e6e4] bg-[#F9F6F4] p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-geist text-[13px] text-[#0A1128] bg-[#FCCA07] w-9 h-9 flex items-center justify-center tabular-nums">{s.n}</span>
                <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400">{s.dur}</span>
              </div>
              <p className="font-alte text-[19px] tracking-[-0.03em] text-[#0A1128]">{s.title}</p>
              <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.55] text-slate-600 mt-2">{s.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* 7. WHAT YOU OWN */
export const Own = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={OWN.eyebrow} />
        <H2>{OWN.heading}</H2>
        <Lead>{OWN.intro}</Lead>
      </FadeUp>
      <div className="mt-10 border border-[#e7e6e4] bg-white">
        {OWN.items.map((item, i) => (
          <FadeUp key={item.you} delay={i * 0.05}>
            <div className={`grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-2 sm:gap-6 p-5 sm:p-6 items-baseline ${i > 0 ? "border-t border-[#e7e6e4]" : ""}`}>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-[#FCCA07] text-[#0A1128] flex-shrink-0" aria-hidden>+</span>
                <p className="font-alte text-[18px] tracking-[-0.03em] text-[#0A1128]">{item.you}</p>
              </div>
              <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.5] text-slate-600">{item.detail}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* 8. COMPARE */
export const Compare = () => (
  <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="lg">
      <FadeUp>
        <Eyebrow text={COMPARE.eyebrow} />
        <H2>{COMPARE.heading}</H2>
        <Lead>{COMPARE.intro}</Lead>
      </FadeUp>
      <ModelsCompare className="mt-12" />
      <FadeUp delay={0.1}>
        <p className="font-alte text-[16px] tracking-[-0.02em] leading-[1.55] text-[#0A1128] mt-8 max-w-2xl border-l-2 border-[#FCCA07] pl-5">{COMPARE.foot}</p>
      </FadeUp>
    </Container>
  </section>
);

/* 9. PROOF (stats) */
export const Proof = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={PROOF.eyebrow} />
        <H2>{PROOF.heading}</H2>
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-10">
        {PROOF.stats.map((s, i) => (
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
        <p className="font-alte text-[16px] sm:text-[18px] tracking-[-0.02em] leading-[1.55] text-slate-600 mt-8 max-w-2xl">{PROOF.body}</p>
      </FadeUp>
      <FadeUp delay={0.12}>
        <p className="font-alte text-[16px] tracking-[-0.02em] leading-[1.55] text-[#0A1128] mt-6 max-w-2xl border-l-2 border-[#FCCA07] pl-5">{PROOF.dogfood}</p>
      </FadeUp>
    </Container>
  </section>
);

/* 10. START */
export const Start = () => (
  <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="sm">
      <FadeUp>
        <Eyebrow text={START.eyebrow} />
        <H2>{START.heading}</H2>
        {START.body.map((p, i) => (
          <p key={i} className="font-alte text-[17px] sm:text-[19px] tracking-[-0.02em] leading-[1.55] text-slate-600 mt-4">{p}</p>
        ))}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <BracketButton label={START.cta.label} href={START.cta.to} variant="primary" />
          <span className="font-alte text-[15px] tracking-[-0.02em] text-slate-500">{START.support}</span>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* 10b. DEEP DIVE */
export const DeepDive = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={DEEP_DIVE.eyebrow} />
        <H2>{DEEP_DIVE.heading}</H2>
      </FadeUp>
      <div className="mt-10 sm:mt-12 flex flex-col gap-10 sm:gap-12 max-w-2xl">
        {DEEP_DIVE.sections.map((item, i) => (
          <FadeUp key={item.h2} delay={i * 0.05}>
            <div className="border-l-2 border-[#e7e6e4] pl-5 sm:pl-6">
              <h2 className="font-alte text-[20px] sm:text-[23px] tracking-[-0.03em] leading-[1.2] text-[#0A1128]">
                {item.h2}
              </h2>
              <div className="mt-4 flex flex-col gap-4">
                {item.body.map((para, j) => (
                  <p
                    key={j}
                    className="font-alte text-[15px] sm:text-[16px] tracking-[-0.02em] leading-[1.6] text-slate-600"
                  >
                    {renderProse(para)}
                  </p>
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
    <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
      <Container size="sm">
        <FadeUp>
          <Eyebrow text="COMMON QUESTIONS" />
          <H2>Forward deployed engineering, answered</H2>
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

/* 12. FINAL CTA */
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
