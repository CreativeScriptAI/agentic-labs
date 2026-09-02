"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import Link from "next/link";
import BracketButton from "src/components/BracketButton";
import { motionOff } from "src/lib/motionOff";
import { Container, Eyebrow, FadeUp } from "../AiVisibilityChecker/primitives";
import HeroReachGraphic from "./HeroReachGraphic";
import SequenceTimeline from "./SequenceTimeline";
import {
  ANSWER_FIRST,
  CHANNELS,
  COMPLIANCE,
  DEEP_DIVE,
  FAILS,
  FAQS,
  FINAL,
  FIX,
  HERO,
  HOW,
  MEASURE,
  SEQUENCE,
  STALL,
  STOP,
  WHATITIS,
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
        <span className="text-slate-500">Follow Up Automation</span>
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
          <HeroReachGraphic />
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

/* 3. WHY IT FAILS */
export const Fails = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={FAILS.eyebrow} />
        <H2>{FAILS.heading}</H2>
        <Lead>{FAILS.intro}</Lead>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-10">
        {FAILS.items.map((item, i) => (
          <FadeUp key={item.n} delay={i * 0.06}>
            <div className="h-full border border-[#e7e6e4] bg-white p-5 sm:p-6">
              <span className="font-geist text-[13px] text-[#0A1128] bg-[#FCCA07] w-9 h-9 flex items-center justify-center tabular-nums mb-4">
                {item.n}
              </span>
              <p className="font-alte text-[19px] tracking-[-0.03em] text-[#0A1128]">{item.title}</p>
              <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.55] text-slate-600 mt-2">{item.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
      <FadeUp delay={0.12}>
        <div className="mt-8 max-w-3xl border-l-2 border-[#FCCA07] pl-5">
          <p className="font-alte text-[16px] tracking-[-0.02em] leading-[1.55] text-[#0A1128]">{FAILS.persistence}</p>
          <p className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400 mt-3">{FAILS.persistenceSource}</p>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* 4. STALL (stats) */
export const Stall = () => (
  <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={STALL.eyebrow} />
        <H2>{STALL.heading}</H2>
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-10">
        {STALL.stats.map((s, i) => (
          <FadeUp key={i} delay={i * 0.07}>
            <div className="h-full border border-[#e7e6e4] bg-[#F9F6F4] p-5 sm:p-6">
              <CountUp value={s.stat} className="block font-alte text-[38px] sm:text-[44px] tracking-[-0.05em] text-[#0A1128] tabular-nums" />
              <p className="font-alte text-[14px] tracking-[-0.02em] leading-[1.45] text-slate-600 mt-2">{s.label}</p>
              <p className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400 mt-4 leading-[1.4]">{s.source}</p>
            </div>
          </FadeUp>
        ))}
      </div>
      <FadeUp delay={0.1}>
        <p className="font-alte text-[16px] sm:text-[18px] tracking-[-0.02em] leading-[1.55] text-slate-600 mt-8 max-w-2xl">{STALL.body}</p>
      </FadeUp>
    </Container>
  </section>
);

/* 5. STATIC VS SIGNAL */
export const WhatItIs = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={WHATITIS.eyebrow} />
        <H2>{WHATITIS.heading}</H2>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        {WHATITIS.items.map((item, i) => (
          <FadeUp key={item.label} delay={i * 0.07}>
            <div className={`h-full border p-6 sm:p-8 ${item.good ? "border-[#FCCA07] bg-[#FCCA07]/[0.07]" : "border-[#e7e6e4] bg-white"}`}>
              <div className="flex items-center justify-between gap-2 mb-3">
                <p className="font-alte text-[22px] tracking-[-0.04em] text-[#0A1128]">{item.label}</p>
                <span className={`font-geist text-[10px] uppercase tracking-[0.02em] px-2 py-0.5 border ${item.good ? "border-[#FCCA07] text-[#0A1128] bg-[#FCCA07]" : "border-[#e7e6e4] text-slate-400 bg-white"}`}>{item.sub}</span>
              </div>
              <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.55] text-slate-600">{item.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* 6. SEQUENCE (timeline graphic) */
export const Sequence = () => (
  <section id="how-it-works" className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={SEQUENCE.eyebrow} />
        <H2>{SEQUENCE.heading}</H2>
        <Lead>{SEQUENCE.intro}</Lead>
      </FadeUp>
      <SequenceTimeline className="mt-12" />
    </Container>
  </section>
);

/* 7. MULTI-CHANNEL */
export const Channels = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={CHANNELS.eyebrow} />
        <H2>{CHANNELS.heading}</H2>
        <Lead>{CHANNELS.intro}</Lead>
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mt-10">
        {CHANNELS.items.map((c, i) => (
          <FadeUp key={c.name} delay={i * 0.05}>
            <div className="h-full border border-[#e7e6e4] bg-white p-5">
              <p className="font-alte text-[18px] tracking-[-0.04em] text-[#0A1128]">{c.name}</p>
              <p className="font-alte text-[14px] tracking-[-0.02em] leading-[1.5] text-slate-600 mt-2">{c.use}</p>
            </div>
          </FadeUp>
        ))}
      </div>
      <FadeUp delay={0.1}>
        <Link href={CHANNELS.voiceLink.to} className="font-geist text-[11px] uppercase tracking-[0.02em] text-blue-600 hover:text-[#0A1128] mt-6 inline-block">
          {CHANNELS.voiceLink.label}
        </Link>
      </FadeUp>
    </Container>
  </section>
);

/* 8. WHEN TO STOP */
export const Stop = () => (
  <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={STOP.eyebrow} />
        <H2>{STOP.heading}</H2>
        <Lead>{STOP.intro}</Lead>
      </FadeUp>
      <div className="mt-10 border border-[#e7e6e4]">
        {STOP.items.map((item, i) => (
          <FadeUp key={item.title} delay={i * 0.04}>
            <div className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2 md:gap-6 p-5 sm:p-6 ${i > 0 ? "border-t border-[#e7e6e4]" : ""}`}>
              <p className="font-alte text-[18px] tracking-[-0.03em] text-[#0A1128]">{item.title}</p>
              <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.55] text-slate-600">{item.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* 9. COMPLIANCE (dark, the differentiator) */
export const Compliance = () => (
  <section className="bg-[#0A1128] py-16 sm:py-24">
    <Container size="md">
      <FadeUp>
        <p className="font-geist text-[12px] uppercase tracking-[0.02em] text-[#FCCA07] mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07]" />
          {COMPLIANCE.eyebrow}
        </p>
        <h2 className="font-alte text-[28px] sm:text-[38px] leading-[1.05] tracking-[-0.04em] text-white text-balance">{COMPLIANCE.heading}</h2>
        <p className="font-alte text-[17px] sm:text-[19px] tracking-[-0.02em] leading-[1.5] text-slate-300 mt-4 max-w-2xl">{COMPLIANCE.intro}</p>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-10">
        {COMPLIANCE.items.map((item, i) => (
          <FadeUp key={item.title} delay={i * 0.05}>
            <div className="h-full border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <p className="font-alte text-[18px] tracking-[-0.03em] text-white">{item.title}</p>
              <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.55] text-slate-400 mt-2">{item.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
      <FadeUp delay={0.1}>
        <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.55] text-slate-300 mt-8 max-w-2xl border-l-2 border-[#FCCA07] pl-5">{COMPLIANCE.note}</p>
        <p className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500 mt-3">{COMPLIANCE.authority}</p>
      </FadeUp>
    </Container>
  </section>
);

/* 10. HOW IT WORKS (flow) */
export const HowItWorks = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={HOW.eyebrow} />
        <H2>{HOW.heading}</H2>
        <Lead>{HOW.intro}</Lead>
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-10">
        {HOW.steps.map((s, i) => (
          <FadeUp key={s.n} delay={i * 0.06}>
            <div className="h-full border border-[#e7e6e4] bg-white p-5 sm:p-6">
              <span className="font-geist text-[12px] text-[#0A1128] bg-[#FCCA07] w-8 h-8 flex items-center justify-center tabular-nums mb-3">{s.n}</span>
              <p className="font-alte text-[18px] tracking-[-0.03em] text-[#0A1128]">{s.title}</p>
              <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.5] text-slate-600 mt-2">{s.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* 11. MEASURE */
export const Measure = () => (
  <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={MEASURE.eyebrow} />
        <H2>{MEASURE.heading}</H2>
      </FadeUp>
      <div className="mt-10 border border-[#e7e6e4] bg-[#F9F6F4]">
        {MEASURE.items.map((m, i) => (
          <FadeUp key={m.metric} delay={i * 0.04}>
            <div className={`grid grid-cols-1 sm:grid-cols-[1fr_1.6fr] gap-2 sm:gap-6 p-5 sm:p-6 ${i > 0 ? "border-t border-[#e7e6e4]" : ""}`}>
              <p className="font-alte text-[17px] tracking-[-0.03em] text-[#0A1128]">{m.metric}</p>
              <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.5] text-slate-600">{m.why}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* 12. FIX */
export const Fix = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="sm">
      <FadeUp>
        <Eyebrow text={FIX.eyebrow} />
        <H2>{FIX.heading}</H2>
        {FIX.body.map((p, i) => (
          <p key={i} className="font-alte text-[17px] sm:text-[19px] tracking-[-0.02em] leading-[1.55] text-slate-600 mt-4">{p}</p>
        ))}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <BracketButton label={FIX.cta.label} href={FIX.cta.to} variant="primary" />
          <span className="font-alte text-[15px] tracking-[-0.02em] text-slate-500">{FIX.support}</span>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* 12b. DEEP DIVE (long-form, keyword-rich) */
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
              <h2 className="font-alte text-[20px] sm:text-[24px] tracking-[-0.04em] leading-[1.2] text-[#0A1128] mb-4">
                {item.h2}
              </h2>
              <div className="flex flex-col gap-4">
                {item.body.map((para, pi) => (
                  <p
                    key={pi}
                    className="font-alte text-[15px] sm:text-[16px] tracking-[-0.02em] leading-[1.6] text-slate-600"
                  >
                    {typeof para === "string"
                      ? para
                      : para.map((seg, si) =>
                          typeof seg === "string" ? (
                            <span key={si}>{seg}</span>
                          ) : (
                            <Link
                              key={si}
                              href={seg.href}
                              className="text-blue-600 hover:underline"
                            >
                              {seg.text}
                            </Link>
                          )
                        )}
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

/* 13. FAQ */
export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
      <Container size="sm">
        <FadeUp>
          <Eyebrow text="COMMON QUESTIONS" />
          <H2>Follow up automation, answered</H2>
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

/* 14. FINAL CTA */
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
