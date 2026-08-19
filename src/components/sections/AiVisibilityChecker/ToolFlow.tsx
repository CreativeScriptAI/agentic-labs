"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import BracketButton from "src/components/BracketButton";
import {
  normalizeDomain,
  runVisibilityScan,
  type VisibilityScanResult,
} from "src/lib/runVisibilityScan";
import { GATE, HERO, RESULT, SCAN_GROUPS, SCAN_LINES } from "./copy";
import EngineVisibilityPanel from "./EngineVisibilityPanel";
import {
  HeroAnswerGraphic,
  RotatingEngineWord,
  useRotatingEngine,
} from "./HeroMotion";
import { Container, ExampleChip, Eyebrow, FadeUp } from "./primitives";
import { FullReport } from "./ReportVisuals";

export type ToolPhase = "idle" | "scanning" | "result" | "gate" | "report";

type Props = {
  initialResult?: VisibilityScanResult;
  startInReport?: boolean;
};

const ToolFlow = ({ initialResult, startInReport = false }: Props) => {
  const [domain, setDomain] = useState(initialResult?.domain ?? "");
  const [phase, setPhase] = useState<ToolPhase>(
    startInReport && initialResult ? "report" : "idle"
  );
  const [scanLine, setScanLine] = useState(0);
  const [result, setResult] = useState<VisibilityScanResult | null>(
    initialResult ?? null
  );
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const rotating = useRotatingEngine();

  useEffect(() => {
    if (phase !== "scanning") return;
    setScanLine(0);
    const id = setInterval(() => {
      setScanLine((prev) => {
        if (prev >= SCAN_LINES.length - 1) {
          clearInterval(id);
          return prev;
        }
        return prev + 1;
      });
    }, 750);
    return () => clearInterval(id);
  }, [phase]);

  const onCheck = async (e?: FormEvent) => {
    e?.preventDefault();
    const cleaned = normalizeDomain(domain);
    if (!cleaned || !cleaned.includes(".")) {
      setError("Enter a website like yourwebsite.com");
      return;
    }
    setError("");
    setDomain(cleaned);
    setPhase("scanning");
    setResult(null);
    const wait = new Promise((resolve) =>
      window.setTimeout(resolve, SCAN_LINES.length * 750)
    );
    const [data] = await Promise.all([runVisibilityScan(cleaned), wait]);
    setResult(data);
    setPhase("result");
    window.setTimeout(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById("instant-result")?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    }, 50);
  };

  const onEmail = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Enter a work email like you@company.com");
      return;
    }
    setError("");
    // TODO(api): send { email, domain, scan } to tool.tryagentikai.com so the
    // full report is emailed and the lead is captured.
    setPhase("report");
    window.setTimeout(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById("full-report")?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    }, 50);
  };

  const inputForm = (
    <form onSubmit={onCheck} className="max-w-xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-stretch border border-[#e7e6e4] bg-white rounded-none">
        <label className="sr-only" htmlFor="domain">
          Website
        </label>
        <input
          id="domain"
          type="text"
          inputMode="url"
          autoComplete="url"
          placeholder={HERO.placeholder}
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="flex-1 h-[50px] px-4 bg-white border-0 border-b sm:border-b-0 sm:border-r border-[#e7e6e4] rounded-none font-alte text-[15px] tracking-[-0.04em] text-[#0A1128] placeholder:text-slate-400 focus:outline-none text-center sm:text-left"
        />
        <BracketButton
          label={HERO.button}
          onClick={() => onCheck()}
          className="w-full sm:w-auto sm:flex-shrink-0"
        />
      </div>
      <p className="font-alte text-[12px] text-slate-400 tracking-[-0.04em] mt-2">
        {HERO.trust}
      </p>
      {error && phase === "idle" && (
        <p className="font-alte text-[13px] text-red-500 tracking-[-0.04em] mt-2">
          {error}
        </p>
      )}
    </form>
  );

  const aiLines = SCAN_GROUPS.ai.lines;
  const siteLines = SCAN_GROUPS.site.lines;

  return (
    <section
      id="checker"
      className="bg-[#F9F6F4] pt-28 pb-16 sm:pt-32 sm:pb-24 relative"
    >
      <Container size="lg">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 justify-center">
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
                AI Visibility Checker
              </span>
            </li>
          </ol>
        </nav>

        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow text={HERO.eyebrow} center />
          <h1 className="font-alte font-normal text-[1.75rem] sm:text-5xl lg:text-[3.25rem] leading-[1.15] tracking-[-0.04em] mb-5 break-words">
            <span className="text-[#0A1128] block">
              {HERO.headlineLead}{" "}
              <RotatingEngineWord
                engine={rotating.engine}
                onPause={rotating.setPaused}
              />{" "}
              {HERO.headlineRest}
            </span>
            <span className="text-[#0A1128] block">{HERO.headline2}</span>
          </h1>
          <p className="font-alte text-[15px] sm:text-base text-slate-600 leading-[1.5] tracking-[-0.04em] mb-7 max-w-xl mx-auto">
            {HERO.sub}
          </p>

          {(phase === "idle" || phase === "result" || phase === "gate" || phase === "report") &&
            inputForm}

          {phase === "idle" && <HeroAnswerGraphic engine={rotating.engine} />}

          {phase === "scanning" && (
            <div
              className="max-w-xl mx-auto bg-white border border-[#e7e6e4] rounded-none p-6 text-left"
              aria-live="polite"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#FCCA07] animate-pulse" />
                <p className="font-geist text-[12px] uppercase tracking-[0.02em] text-red-500">
                  Checking
                </p>
              </div>
              <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400 mb-2">
                {SCAN_GROUPS.ai.label}
              </p>
              <ul className="space-y-2 mb-6">
                {aiLines.map((line, i) => (
                  <li
                    key={line}
                    className={`font-alte text-[15px] tracking-[-0.04em] leading-[1.4] ${
                      i === scanLine
                        ? "text-[#0A1128]"
                        : i < scanLine
                          ? "text-slate-400"
                          : "text-slate-300"
                    }`}
                  >
                    {line}
                  </li>
                ))}
              </ul>
              <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400 mb-2">
                {SCAN_GROUPS.site.label}
              </p>
              <ul className="space-y-2">
                {siteLines.map((line, i) => {
                  const idx = aiLines.length + i;
                  return (
                    <li
                      key={line}
                      className={`font-alte text-[15px] tracking-[-0.04em] leading-[1.4] ${
                        idx === scanLine
                          ? "text-[#0A1128]"
                          : idx < scanLine
                            ? "text-slate-400"
                            : "text-slate-300"
                      }`}
                    >
                      {line}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        {result && (phase === "result" || phase === "gate" || phase === "report") && (
          <div id="instant-result" className="mt-16 sm:mt-20">
            <FadeUp>
              <h2 className="font-alte text-2xl sm:text-4xl text-[#0A1128] tracking-[-0.04em] leading-[1.15] mb-6">
                {RESULT.headline}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white border border-[#e7e6e4] rounded-none p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400">
                      {RESULT.aiLabel}
                    </p>
                    <ExampleChip />
                  </div>
                  <p className="font-alte text-[20px] sm:text-[24px] text-[#0A1128] tracking-[-0.04em] leading-[1.25]">
                    {RESULT.examplePrefix} {RESULT.ai(result.ai.shownIn, result.ai.outOf)}
                  </p>
                  {result.ai.rollingOut ? (
                    <p className="font-alte text-[13px] text-slate-500 tracking-[-0.04em] mt-3 leading-[1.4]">
                      Included, rolling out.
                    </p>
                  ) : null}
                </div>
                <div className="bg-white border border-[#e7e6e4] rounded-none p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400">
                      {RESULT.siteLabel}
                    </p>
                    <ExampleChip />
                  </div>
                  <p className="font-alte text-[20px] sm:text-[24px] text-[#0A1128] tracking-[-0.04em] leading-[1.25]">
                    {RESULT.examplePrefix} {RESULT.site(result.site.healthScore, result.site.grade)}
                  </p>
                </div>
              </div>
            </FadeUp>
            <EngineVisibilityPanel result={result} />
            <p className="font-alte text-[16px] text-slate-600 tracking-[-0.04em] leading-[1.5] mt-8">
              {RESULT.sting}
            </p>
            {phase === "result" && (
              <div className="mt-6">
                <BracketButton
                  label={RESULT.cta}
                  onClick={() => setPhase("gate")}
                />
              </div>
            )}
          </div>
        )}

        {phase === "gate" && (
          <div className="mt-12 max-w-xl">
            <FadeUp>
              <h2 className="font-alte text-2xl sm:text-3xl text-[#0A1128] tracking-[-0.04em] leading-[1.15] mb-3">
                {GATE.headline}
              </h2>
              <p className="font-alte text-[15px] text-slate-600 tracking-[-0.04em] leading-[1.5] mb-6">
                {GATE.sub}
              </p>
              <form id="visibility-email-form" onSubmit={onEmail}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder={GATE.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-[50px] px-4 bg-white border border-[#e7e6e4] rounded-none font-alte text-[15px] tracking-[-0.04em] text-[#0A1128] placeholder:text-slate-400 focus:outline-none focus:border-[#0A1128]"
                  />
                  <BracketButton
                    label={GATE.button}
                    onClick={() => {
                      const form = document.getElementById(
                        "visibility-email-form"
                      ) as HTMLFormElement | null;
                      form?.requestSubmit();
                    }}
                    className="sm:w-auto w-full"
                  />
                </div>
                <p className="font-alte text-[13px] text-slate-500 tracking-[-0.04em] mt-3">
                  {GATE.micro}
                </p>
                {error && (
                  <p className="font-alte text-[13px] text-red-500 tracking-[-0.04em] mt-2">
                    {error}
                  </p>
                )}
              </form>
            </FadeUp>
          </div>
        )}

        {phase === "report" && result && (
          <div className="mt-12">
            <FullReport result={result} />
          </div>
        )}
      </Container>
    </section>
  );
};

export default ToolFlow;
