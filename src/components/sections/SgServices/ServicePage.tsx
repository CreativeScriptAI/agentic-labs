"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import Link from "next/link";
import BracketButton from "src/components/BracketButton";
import FooterSection from "src/components/sections/FooterSection";
import { Container, Eyebrow, FadeUp } from "../AiVisibilityChecker/primitives";
import type { ServiceCopy } from "./types";

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

const Faq = ({ faqs }: { faqs: ServiceCopy["faqs"] }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-8 border-t border-[#e7e6e4]">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-[#e7e6e4]">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left py-5"
              aria-expanded={isOpen}
            >
              <span className="font-alte text-[17px] sm:text-[18px] tracking-[-0.03em] text-[#0A1128]">{f.question}</span>
              <span className={`font-geist text-[18px] text-slate-400 flex-shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`} aria-hidden>+</span>
            </button>
            {isOpen && <p className="font-alte text-[15px] sm:text-[16px] tracking-[-0.02em] leading-[1.6] text-slate-600 pb-5 max-w-2xl">{f.answer}</p>}
          </div>
        );
      })}
    </div>
  );
};

const ServicePage = ({
  copy,
  Graphic,
}: {
  copy: ServiceCopy;
  Graphic: ComponentType<{ className?: string }>;
}) => (
  <div className="min-h-screen bg-[#F9F6F4] [&_*]:box-border">
    {/* HERO */}
    <section className="bg-[#F9F6F4] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pb-24 border-b border-[#e7e6e4] overflow-hidden">
      <Container size="lg">
        <nav className="font-geist text-[12px] text-slate-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0A1128]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">{copy.breadcrumb}</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <FadeUp>
              <Eyebrow text={copy.hero.eyebrow} />
              <h1 className="font-alte font-normal text-[2rem] sm:text-4xl lg:text-[2.9rem] leading-[1.08] tracking-[-0.04em] text-balance mb-5">
                <span className="block text-[#0A1128]">{copy.hero.h1a}</span>
                <span className="block text-blue-600">{copy.hero.h1b}</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.08}>
              <p className="font-alte text-[15px] sm:text-[17px] text-slate-600 leading-[1.55] tracking-[-0.04em] max-w-xl mb-8">
                {copy.hero.sub}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <BracketButton label={copy.ctaPrimary.label} href={copy.ctaPrimary.to} variant="primary" />
                <BracketButton label={copy.ctaSecondary.label} href={copy.ctaSecondary.to} variant="secondary" />
              </div>
            </FadeUp>
          </div>
          <FadeUp delay={0.14} className="lg:col-span-6 relative order-last w-full max-w-md mx-auto lg:max-w-none">
            <Graphic />
          </FadeUp>
        </div>
      </Container>
    </section>

    {/* ANSWER FIRST */}
    <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
      <Container size="md">
        <FadeUp>
          <p className="font-alte text-[19px] sm:text-[22px] tracking-[-0.03em] leading-[1.5] text-[#0A1128] max-w-3xl border-l-2 border-[#FCCA07] pl-5">
            {copy.answerFirst}
          </p>
        </FadeUp>
        {copy.relatedProse && copy.relatedProse.length > 0 ? (
          <FadeUp delay={0.06}>
            <p className="font-alte text-[16px] sm:text-[17px] tracking-[-0.02em] leading-[1.6] text-slate-600 max-w-3xl mt-6">
              {copy.relatedProse.map((s, i) => (
                <span key={i}>
                  {s.before}
                  <Link
                    href={s.to}
                    className="text-blue-600 underline underline-offset-2 hover:text-[#0A1128]"
                  >
                    {s.anchor}
                  </Link>
                  {s.after}{" "}
                </span>
              ))}
            </p>
          </FadeUp>
        ) : null}
      </Container>
    </section>

    {/* THE GAP */}
    <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
      <Container size="md">
        <FadeUp>
          <Eyebrow text={copy.gap.eyebrow} />
          <H2>{copy.gap.heading}</H2>
          <Lead>{copy.gap.intro}</Lead>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <FadeUp>
            <div className="h-full border border-[#e7e6e4] bg-white p-6 sm:p-8">
              <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400 mb-3">{copy.gap.stopLabel}</p>
              <p className="font-alte text-[16px] tracking-[-0.02em] leading-[1.55] text-slate-600">{copy.gap.stopBody}</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="h-full border border-[#FCCA07] bg-[#FCCA07]/[0.07] p-6 sm:p-8">
              <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-[#0A1128] mb-3">{copy.gap.goLabel}</p>
              <p className="font-alte text-[16px] tracking-[-0.02em] leading-[1.55] text-[#0A1128]">{copy.gap.goBody}</p>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>

    {/* WHAT IS INCLUDED */}
    <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
      <Container size="md">
        <FadeUp>
          <Eyebrow text={copy.included.eyebrow} />
          <H2>{copy.included.heading}</H2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-10">
          {copy.included.items.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.05}>
              <div className="h-full border border-[#e7e6e4] bg-[#F9F6F4] p-5 sm:p-6">
                <p className="font-alte text-[18px] tracking-[-0.03em] text-[#0A1128]">{item.title}</p>
                <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.55] text-slate-600 mt-2">{item.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>

    {/* AI-NATIVE DIFFERENCE (dark) */}
    <section className="bg-[#0A1128] py-16 sm:py-24">
      <Container size="md">
        <FadeUp>
          <p className="font-geist text-[12px] uppercase tracking-[0.02em] text-[#FCCA07] mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07]" />
            {copy.aiDiff.eyebrow}
          </p>
          <h2 className="font-alte text-[28px] sm:text-[38px] leading-[1.05] tracking-[-0.04em] text-white text-balance">{copy.aiDiff.heading}</h2>
          <p className="font-alte text-[17px] sm:text-[19px] tracking-[-0.02em] leading-[1.5] text-slate-300 mt-4 max-w-2xl">{copy.aiDiff.intro}</p>
        </FadeUp>
        <div className="mt-10 border border-white/10">
          <div className="hidden md:grid grid-cols-[1fr_1.4fr_1.4fr] border-b border-white/10">
            <span className="p-4" />
            <span className="p-4 font-geist text-[11px] uppercase tracking-[0.02em] text-slate-500">Traditional agency</span>
            <span className="p-4 font-geist text-[11px] uppercase tracking-[0.02em] text-[#FCCA07] bg-[#FCCA07]/[0.06]">Us, AI-native</span>
          </div>
          {copy.aiDiff.rows.map((r, i) => (
            <FadeUp key={r.label} delay={i * 0.05}>
              <div className={`grid grid-cols-1 md:grid-cols-[1fr_1.4fr_1.4fr] gap-2 md:gap-0 p-5 md:p-0 ${i > 0 ? "border-t border-white/10" : ""}`}>
                <p className="md:p-4 font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400 md:self-center">{r.label}</p>
                <p className="md:p-4 font-alte text-[15px] tracking-[-0.02em] leading-[1.5] text-slate-400 md:border-l md:border-white/10">{r.old}</p>
                <p className="md:p-4 font-alte text-[15px] tracking-[-0.02em] leading-[1.5] text-white md:border-l md:border-white/10 md:bg-[#FCCA07]/[0.06]">{r.ours}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>

    {/* PRICING */}
    <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
      <Container size="md">
        <FadeUp>
          <Eyebrow text={copy.pricing.eyebrow} />
          <H2>{copy.pricing.heading}</H2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-6 mt-10 items-start">
          <FadeUp>
            <div className="border border-[#0A1128] bg-[#0A1128] p-7 sm:p-9">
              <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-[#FCCA07]">From</p>
              <p className="font-alte text-[46px] sm:text-[56px] leading-[1] tracking-[-0.05em] text-white mt-2 tabular-nums">{copy.pricing.price}</p>
              <p className="font-alte text-[15px] tracking-[-0.02em] text-slate-300 mt-1">{copy.pricing.unit}</p>
              <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-500 mt-4">{copy.pricing.market}</p>
              {copy.pricing.altNote ? (
                <p className="font-alte text-[14px] tracking-[-0.02em] text-slate-400 mt-4 border-t border-white/10 pt-4">{copy.pricing.altNote}</p>
              ) : null}
              <div className="mt-6">
                <BracketButton label={copy.pricing.cta.label} href={copy.pricing.cta.to} variant="primary" />
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="border border-[#e7e6e4] bg-white p-7 sm:p-9">
              <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400 mb-4">What is included</p>
              <ul className="space-y-3">
                {copy.pricing.includes.map((inc) => (
                  <li key={inc} className="flex gap-3">
                    <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center bg-emerald-500 text-white text-[12px] mt-0.5" aria-hidden>✓</span>
                    <span className="font-alte text-[15px] tracking-[-0.02em] leading-[1.5] text-[#0A1128]">{inc}</span>
                  </li>
                ))}
              </ul>
              <p className="font-alte text-[14px] tracking-[-0.02em] leading-[1.5] text-slate-500 mt-6 border-l-2 border-[#FCCA07] pl-4">{copy.pricing.grant}</p>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>

    {/* PROCESS */}
    <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
      <Container size="md">
        <FadeUp>
          <Eyebrow text={copy.process.eyebrow} />
          <H2>{copy.process.heading}</H2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-10">
          {copy.process.steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.07}>
              <div className="h-full border border-[#e7e6e4] bg-[#F9F6F4] p-5 sm:p-6">
                <span className="font-geist text-[13px] text-[#0A1128] bg-[#FCCA07] w-9 h-9 flex items-center justify-center tabular-nums mb-4">{s.n}</span>
                <p className="font-alte text-[18px] tracking-[-0.03em] text-[#0A1128]">{s.title}</p>
                <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.55] text-slate-600 mt-2">{s.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>

    {/* TRUST */}
    <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
      <Container size="md">
        <FadeUp>
          <Eyebrow text={copy.trust.eyebrow} />
          <H2>{copy.trust.heading}</H2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-10">
          {copy.trust.items.map((item, i) => (
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

    {/* DEEP DIVE */}
    {copy.deepDive ? (
      <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
        <Container size="md">
          <FadeUp>
            <Eyebrow text={copy.deepDive.eyebrow} />
            <H2>{copy.deepDive.heading}</H2>
          </FadeUp>
          <div className="mt-10 space-y-10 max-w-3xl">
            {copy.deepDive.sections.map((s, i) => (
              <FadeUp key={s.h2} delay={Math.min(i * 0.04, 0.2)}>
                <h2 className="font-alte text-[22px] sm:text-[26px] leading-[1.15] tracking-[-0.04em] text-[#0A1128]">
                  {s.h2}
                </h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((p, j) => (
                    <p
                      key={j}
                      className="font-alte text-[16px] sm:text-[17px] tracking-[-0.02em] leading-[1.6] text-slate-600"
                    >
                      {typeof p === "string"
                        ? p
                        : p.map((seg, k) =>
                            seg.href ? (
                              <a
                                key={k}
                                href={seg.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-[#FCCA07] decoration-2 underline-offset-2 hover:text-blue-600"
                              >
                                {seg.text}
                              </a>
                            ) : seg.to ? (
                              <Link
                                key={k}
                                href={seg.to}
                                className="underline decoration-[#FCCA07] decoration-2 underline-offset-2 hover:text-blue-600"
                              >
                                {seg.text}
                              </Link>
                            ) : (
                              <span key={k}>{seg.text}</span>
                            )
                          )}
                    </p>
                  ))}
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>
    ) : null}

    {/* CROSS LINKS */}
    <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
      <Container size="md">
        <FadeUp>
          <Eyebrow text={copy.crossLinks.eyebrow} />
          <H2>{copy.crossLinks.heading}</H2>
          <Lead>{copy.crossLinks.intro}</Lead>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-10">
          {copy.crossLinks.links.map((l, i) => (
            <FadeUp key={l.to} delay={i * 0.06}>
              <Link href={l.to} className="h-full block border border-[#e7e6e4] bg-[#F9F6F4] p-5 sm:p-6 hover:border-[#0A1128] transition-colors">
                <p className="font-alte text-[17px] tracking-[-0.03em] text-[#0A1128]">{l.name}</p>
                {l.desc ? <p className="font-alte text-[14px] tracking-[-0.02em] leading-[1.5] text-slate-600 mt-2">{l.desc}</p> : null}
                <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-blue-600 mt-4 inline-block">Explore</span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>

    {/* FAQ */}
    <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
      <Container size="sm">
        <FadeUp>
          <Eyebrow text="COMMON QUESTIONS" />
          <H2>Questions, answered</H2>
        </FadeUp>
        <Faq faqs={copy.faqs} />
      </Container>
    </section>

    {/* FINAL CTA */}
    <section className="bg-[#0A1128] py-16 sm:py-24">
      <Container size="sm">
        <FadeUp>
          <p className="font-geist text-[12px] uppercase tracking-[0.02em] text-[#FCCA07] mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07]" />
            {copy.final.eyebrow}
          </p>
          <h2 className="font-alte text-[30px] sm:text-[42px] leading-[1.03] tracking-[-0.05em] text-white text-balance">{copy.final.heading}</h2>
          <p className="font-alte text-[17px] tracking-[-0.02em] text-slate-300 mt-4">{copy.final.sub}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <BracketButton label={copy.final.ctaA.label} href={copy.final.ctaA.to} variant="primary" />
            <BracketButton label={copy.final.ctaB.label} href={copy.final.ctaB.to} variant="secondary" className="!border-white/20 !text-white hover:!bg-white/10" />
          </div>
        </FadeUp>
      </Container>
    </section>

    <FooterSection />
  </div>
);

export default ServicePage;
