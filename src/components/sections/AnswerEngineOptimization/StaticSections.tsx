"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { motionOff } from "src/lib/motionOff";
import Link from "next/link";
import BracketButton from "src/components/BracketButton";
import { Container, Eyebrow, FadeUp } from "../AiVisibilityChecker/primitives";
import OldVsNewSearch from "../AiVisibilityChecker/OldVsNewSearch";
import AeoAnswerCardA from "./AeoAnswerCardA";
import AeoAnswerCardB from "./AeoAnswerCardB";
import TermsDiagram from "./TermsDiagram";
import SeoAeoStack from "./SeoAeoStack";
import MechanismFlow from "./MechanismFlow";
import RankTimeline from "./RankTimeline";
import {
  CHATGPT,
  CHECKLIST,
  COMPARE,
  DEEP_DIVE,
  DEFINITION,
  FAQS,
  FINAL,
  FIX,
  HERO,
  MEASURE,
  MECHANISM,
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

/* Counts a leading number up on scroll-in, keeps any prefix/suffix (e.g. "800M", "25%"). */
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

/* 1. HERO (two-column: copy left, AI-answer infographic right) */
export const Hero = () => (
  <section className="bg-[#F9F6F4] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pb-24 border-b border-[#e7e6e4] overflow-hidden">
    <Container size="lg">
      <nav className="font-geist text-[12px] text-slate-400 mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#0A1128]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">Answer Engine Optimization</span>
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
          <AeoAnswerCardB />
        </FadeUp>
      </div>
    </Container>
  </section>
);

/* 2. DEFINITION */
export const Definition = () => (
  <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <p className="font-alte text-[19px] sm:text-[22px] tracking-[-0.03em] leading-[1.5] text-[#0A1128] max-w-3xl border-l-2 border-[#FCCA07] pl-5">
          {HERO.answerFirst}
        </p>
      </FadeUp>
      <FadeUp delay={0.06} className="mt-14">
        <Eyebrow text={DEFINITION.eyebrow} />
        <H2>{DEFINITION.heading}</H2>
        <Lead>{DEFINITION.intro}</Lead>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {DEFINITION.terms.map((t, i) => (
          <FadeUp key={t.term} delay={i * 0.07}>
            <div className="h-full border border-[#e7e6e4] bg-[#F9F6F4] p-5 sm:p-6">
              <p className="font-alte text-[26px] tracking-[-0.04em] text-[#0A1128]">{t.term}</p>
              <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400 mt-1">
                {t.full}
              </p>
              <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.5] text-slate-600 mt-4">
                {t.def}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
      <FadeUp delay={0.1}>
        <p className="font-alte text-[16px] tracking-[-0.02em] leading-[1.55] text-[#0A1128] mt-8 max-w-2xl border-l-2 border-[#FCCA07] pl-4">
          {DEFINITION.honest}
        </p>
      </FadeUp>
      <TermsDiagram className="mt-12" />
    </Container>
  </section>
);

/* 3. AEO VS SEO (comparison table) */
export const Compare = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={COMPARE.eyebrow} />
        <H2>{COMPARE.heading}</H2>
        <Lead>{COMPARE.intro}</Lead>
      </FadeUp>
      <SeoAeoStack className="mt-12" />
      <FadeUp delay={0.08}>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse bg-white border border-[#e7e6e4]">
            <thead>
              <tr>
                {COMPARE.columns.map((c, i) => (
                  <th
                    key={i}
                    className={`text-left font-geist text-[11px] uppercase tracking-[0.02em] p-4 border-b border-[#e7e6e4] ${
                      i === 2 ? "text-blue-600 bg-blue-50/40" : "text-slate-400"
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE.rows.map((r) => (
                <tr key={r.label} className="align-top">
                  <td className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-500 p-4 border-b border-[#e7e6e4] whitespace-nowrap">
                    {r.label}
                  </td>
                  <td className="font-alte text-[15px] tracking-[-0.02em] leading-[1.4] text-slate-600 p-4 border-b border-[#e7e6e4]">
                    {r.seo}
                  </td>
                  <td className="font-alte text-[15px] tracking-[-0.02em] leading-[1.4] text-[#0A1128] p-4 border-b border-[#e7e6e4] bg-blue-50/40">
                    {r.aeo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeUp>
      <FadeUp delay={0.12}>
        <p className="font-alte text-[16px] tracking-[-0.02em] text-[#0A1128] mt-6">{COMPARE.foot}</p>
      </FadeUp>
    </Container>
  </section>
);

/* 4. WHY NOW (primary stats + old vs new) */
export const WhyNow = () => (
  <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={WHYNOW.eyebrow} />
        <H2>{WHYNOW.heading}</H2>
      </FadeUp>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-10">
        {WHYNOW.stats.map((s, i) => (
          <FadeUp key={i} delay={i * 0.06}>
            <div className="h-full border border-[#e7e6e4] bg-[#F9F6F4] p-4 sm:p-5">
              <CountUp
                value={s.stat}
                className="block font-alte text-[34px] sm:text-[40px] tracking-[-0.05em] text-[#0A1128] tabular-nums"
              />
              <p className="font-alte text-[13px] tracking-[-0.02em] leading-[1.4] text-slate-600 mt-2">
                {s.label}
              </p>
              <p className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400 mt-3">
                {s.sourceHref ? (
                  <a
                    href={s.sourceHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0A1128] hover:underline"
                  >
                    {s.source}
                  </a>
                ) : (
                  s.source
                )}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
      <FadeUp delay={0.1}>
        <p className="font-alte text-[16px] sm:text-[18px] tracking-[-0.02em] leading-[1.55] text-slate-600 mt-8 max-w-2xl">
          <a
            href="https://www.pewresearch.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Pew Research Center
          </a>{" "}
          found that when an AI summary appears, people click a normal result far
          less often, and almost never click a source inside the summary.{" "}
          <a
            href="https://sparktoro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            SparkToro
          </a>
          &apos;s analysis of US search put the share of searches ending with no
          click at roughly 58 percent even before AI answers spread. The buyer
          reads the answer and stops. The only way to be in that answer is to be
          named in it.
        </p>
      </FadeUp>
      <FadeUp delay={0.12}>
        <div className="mt-10">
          <OldVsNewSearch />
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* 5. MECHANISM (animated RAG flow + engine sources) */
export const Mechanism = () => (
  <section className="bg-[#0A1128] py-16 sm:py-24">
    <Container size="md">
      <FadeUp>
        <p className="font-geist text-[12px] uppercase tracking-[0.02em] text-[#FCCA07] mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07]" />
          {MECHANISM.eyebrow}
        </p>
        <h2 className="font-alte text-[28px] sm:text-[38px] leading-[1.05] tracking-[-0.04em] text-white text-balance">
          {MECHANISM.heading}
        </h2>
        <p className="font-alte text-[17px] sm:text-[19px] tracking-[-0.02em] leading-[1.5] text-slate-300 mt-4 max-w-2xl">
          {MECHANISM.intro}
        </p>
      </FadeUp>
      <MechanismFlow className="mt-10" />
      <FadeUp delay={0.1}>
        <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.5] text-slate-400 mt-8 max-w-2xl border-l-2 border-[#FCCA07] pl-4">
          {MECHANISM.honest}
        </p>
      </FadeUp>
    </Container>
  </section>
);

/* 6. CHECKLIST */
export const Checklist = () => (
  <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={CHECKLIST.eyebrow} />
        <H2>{CHECKLIST.heading}</H2>
        <Lead>{CHECKLIST.intro}</Lead>
      </FadeUp>
      <div className="mt-10 border border-[#e7e6e4]">
        {CHECKLIST.items.map((item, i) => (
          <FadeUp key={i} delay={i * 0.04}>
            <div
              className={`flex gap-4 p-5 sm:p-6 ${
                i > 0 ? "border-t border-[#e7e6e4]" : ""
              } ${item.status === "caveat" ? "bg-[#FCCA07]/[0.06]" : ""}`}
            >
              <span
                className={`w-6 h-6 flex-shrink-0 flex items-center justify-center mt-0.5 ${
                  item.status === "caveat"
                    ? "border border-dashed border-[#FCCA07] text-[#0A1128]"
                    : "bg-emerald-500 text-white"
                }`}
                aria-hidden
              >
                {item.status === "caveat" ? "?" : "✓"}
              </span>
              <div>
                <p className="font-alte text-[18px] tracking-[-0.03em] text-[#0A1128]">{item.title}</p>
                <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.5] text-slate-600 mt-1.5">
                  {item.body}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* 7. HOW TO RANK IN CHATGPT (steps) */
export const RankChatGPT = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={CHATGPT.eyebrow} />
        <H2>{CHATGPT.heading}</H2>
        <Lead>{CHATGPT.intro}</Lead>
      </FadeUp>
      <RankTimeline className="mt-12" />
    </Container>
  </section>
);

/* 8. MEASURE */
export const Measure = () => (
  <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={MEASURE.eyebrow} />
        <H2>{MEASURE.heading}</H2>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <FadeUp>
          <div className="h-full border border-[#e7e6e4] bg-[#F9F6F4] p-6 sm:p-8">
            <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400">
              {MEASURE.method.heading}
            </p>
            <p className="font-alte text-[16px] tracking-[-0.02em] leading-[1.55] text-[#0A1128] mt-3">
              {MEASURE.method.body}
            </p>
          </div>
        </FadeUp>
        <FadeUp delay={0.08}>
          <div className="h-full border border-[#e7e6e4] bg-[#0A1128] p-6 sm:p-8 flex flex-col">
            <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-[#FCCA07]">
              {MEASURE.tool.heading}
            </p>
            <p className="font-alte text-[16px] tracking-[-0.02em] leading-[1.55] text-slate-200 mt-3 flex-1">
              {MEASURE.tool.body}
            </p>
            <div className="mt-6">
              <BracketButton label={MEASURE.tool.cta.label} href={MEASURE.tool.cta.to} variant="primary" />
            </div>
          </div>
        </FadeUp>
      </div>
    </Container>
  </section>
);

/* 9. THE FIX + PROOF */
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
        <p className="font-alte text-[17px] sm:text-[19px] tracking-[-0.02em] leading-[1.55] text-slate-600 mt-4">
          That work runs alongside our{" "}
          <Link href="/content-marketing-singapore/" className="text-blue-600 hover:underline">
            content marketing in Singapore
          </Link>
          , and if you want to see where you stand first, you can{" "}
          <Link href="/ai-visibility-checker/" className="text-blue-600 hover:underline">
            check whether AI names your business
          </Link>{" "}
          in about a minute.
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <BracketButton label={FIX.cta.label} href={FIX.cta.to} variant="primary" />
          <span className="font-alte text-[15px] tracking-[-0.02em] text-slate-500">{FIX.support}</span>
        </div>
      </FadeUp>
      <FadeUp delay={0.1}>
        <p className="font-alte text-[16px] tracking-[-0.02em] leading-[1.55] text-[#0A1128] mt-10 border-l-2 border-[#FCCA07] pl-4">
          {FIX.proof}
        </p>
      </FadeUp>
    </Container>
  </section>
);

/* 9b. DEEP DIVE (long-form Q&A, keyword-rich) */
export const DeepDive = () => (
  <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
    <Container size="md">
      <FadeUp>
        <Eyebrow text={DEEP_DIVE.eyebrow} />
        <H2>{DEEP_DIVE.heading}</H2>
        <Lead>{DEEP_DIVE.intro}</Lead>
      </FadeUp>
      <div className="flex flex-col gap-12 sm:gap-14 mt-12 max-w-3xl">
        {DEEP_DIVE.sections.map((item, i) => (
          <FadeUp key={item.h2} delay={i * 0.05}>
            <div className="border-l-2 border-[#e7e6e4] pl-5 sm:pl-6">
              <h2 className="font-alte text-[20px] sm:text-[24px] tracking-[-0.04em] leading-[1.2] text-[#0A1128] mb-4">
                {item.h2}
              </h2>
              <div className="flex flex-col gap-4">
                {item.body.map((para) => (
                  <p
                    key={para}
                    className="font-alte text-[15px] sm:text-[16px] tracking-[-0.02em] leading-[1.65] text-slate-600"
                  >
                    {para}
                  </p>
                ))}
                {item.link && (
                  <p className="font-alte text-[15px] sm:text-[16px] tracking-[-0.02em] leading-[1.65] text-slate-600">
                    {item.link.pre}{" "}
                    <Link href={item.link.href} className="text-blue-600 hover:underline">
                      {item.link.label}
                    </Link>{" "}
                    {item.link.post}
                  </p>
                )}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* 10. FAQ */
export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
      <Container size="sm">
        <FadeUp>
          <Eyebrow text="COMMON QUESTIONS" />
          <H2>Answer engine optimization, answered</H2>
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

/* 11. FINAL CTA */
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
