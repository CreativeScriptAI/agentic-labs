"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { animate, useInView } from "framer-motion";
import { motionOff } from "src/lib/motionOff";
import {
  domainToReportId,
  type SiteIssue,
  type VisibilityAeoItem,
  type VisibilityScanResult,
} from "src/lib/runVisibilityScan";
import { REPORT } from "./copy";
import { CheckSvg, ExampleChip, XSvg } from "./primitives";
import EngineVisibilityPanel from "./EngineVisibilityPanel";

const gradeTone = (grade: string) => {
  if (grade === "A" || grade === "B") return "text-emerald-600";
  if (grade === "C") return "text-amber-600";
  return "text-red-600";
};

export const ScoreRing = ({
  score,
  grade,
}: {
  score: number;
  grade: string;
}) => {
  const r = 52;
  const c = 2 * Math.PI * r;
  const circleRef = useRef<SVGCircleElement>(null);
  const isInView = useInView(circleRef, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView) return;
    const reduced = motionOff();
    if (reduced) {
      if (circleRef.current) {
        circleRef.current.style.strokeDashoffset = `${c * (1 - score / 100)}`;
      }
      return;
    }
    const ring = animate(1, 1 - score / 100, {
      duration: 0.9,
      ease: "easeOut",
      onUpdate: (v) => {
        if (circleRef.current) {
          circleRef.current.style.strokeDashoffset = `${c * v}`;
        }
      },
    });
    return () => {
      ring.stop();
    };
  }, [isInView, score, c]);

  const stroke =
    score >= 80 ? "#059669" : score >= 60 ? "#d97706" : "#ef4444";

  return (
    <div className="flex items-center gap-5 sm:gap-8">
      <div className="relative w-[140px] h-[140px] flex-shrink-0">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90" aria-hidden>
          <circle
            cx="60"
            cy="60"
            r={r}
            fill="none"
            stroke="#efeee9"
            strokeWidth="8"
          />
          <circle
            ref={circleRef}
            cx="60"
            cy="60"
            r={r}
            fill="none"
            stroke={stroke}
            strokeWidth="8"
            strokeDasharray={c}
            strokeDashoffset={c}
            strokeLinecap="butt"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-alte text-[32px] text-[#0A1128] tracking-[-0.04em] leading-none">
            {score}
          </span>
          <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400 mt-1">
            of 100
          </span>
        </div>
      </div>
      <div>
        <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400 mb-1">
          Site health
        </p>
        <p className={`font-alte text-[28px] sm:text-[34px] tracking-[-0.04em] leading-none ${gradeTone(grade)}`}>
          Grade {grade}
        </p>
        <div className="mt-3">
          <ExampleChip />
        </div>
      </div>
    </div>
  );
};

export const SeverityCounters = ({
  counts,
}: {
  counts: VisibilityScanResult["site"]["counts"];
}) => {
  const items: { key: keyof typeof counts; label: string; tone: string }[] = [
    { key: "critical", label: "Critical", tone: "border-red-200 bg-red-50 text-red-700" },
    { key: "high", label: "High", tone: "border-orange-200 bg-orange-50 text-orange-800" },
    { key: "medium", label: "Medium", tone: "border-amber-200 bg-amber-50 text-amber-800" },
    { key: "low", label: "Low", tone: "border-slate-200 bg-slate-50 text-slate-600" },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {items.map((item) => (
        <div
          key={item.key}
          className={`rounded-none border px-4 py-3 ${item.tone}`}
        >
          <p className="font-geist text-[11px] uppercase tracking-[0.02em]">
            {item.label}
          </p>
          <p className="font-alte text-[24px] tracking-[-0.04em] leading-none mt-1">
            {counts[item.key]}
          </p>
        </div>
      ))}
    </div>
  );
};

const CategoryBar = ({
  label,
  score,
  note,
  delay,
}: {
  label: string;
  score: number;
  note: string;
  delay: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const tone =
    score >= 80 ? "bg-emerald-500" : score >= 60 ? "bg-amber-500" : "bg-red-500";

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const el = ref.current;
    const target = score / 100;
    if (motionOff()) {
      el.style.transform = `scaleX(${target})`;
      return;
    }
    const controls = animate(0, target, {
      duration: 0.7,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        el.style.transform = `scaleX(${v})`;
      },
    });
    return () => controls.stop();
  }, [isInView, score, delay]);

  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 mb-1.5">
        <p className="font-alte text-[15px] text-[#0A1128] tracking-[-0.04em]">
          {label}
        </p>
        <p className="font-alte text-[15px] text-slate-500 tracking-[-0.04em]">
          {score}
        </p>
      </div>
      <div className="h-2 w-full bg-[#efeee9] rounded-none overflow-hidden">
        <div
          ref={ref}
          className={`h-full w-full ${tone} origin-left`}
          style={{ transform: "scaleX(0)" }}
        />
      </div>
      <p className="font-alte text-[13px] text-slate-500 tracking-[-0.04em] leading-[1.4] mt-1.5">
        {note}
      </p>
    </div>
  );
};

export const CategoryBars = ({
  categories,
}: {
  categories: VisibilityScanResult["site"]["categories"];
}) => (
  <div className="space-y-5">
    {categories.map((cat, i) => (
      <CategoryBar
        key={cat.key}
        label={cat.key}
        score={cat.score}
        note={cat.note}
        delay={i * 0.08}
      />
    ))}
  </div>
);

const severityChip = (severity: SiteIssue["severity"]) => {
  if (severity === "Critical") return "bg-red-50 text-red-700 border-red-200";
  if (severity === "High") return "bg-orange-50 text-orange-800 border-orange-200";
  if (severity === "Medium") return "bg-amber-50 text-amber-800 border-amber-200";
  return "bg-slate-50 text-slate-600 border-slate-200";
};

const IssueCard = ({ issue }: { issue: SiteIssue }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#e7e6e4] rounded-none bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-4 sm:px-5 py-4"
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-3">
          <p className="font-alte text-[16px] text-[#0A1128] tracking-[-0.04em] leading-[1.3]">
            {issue.title}
          </p>
          <span className="font-geist text-[11px] text-slate-400 flex-shrink-0 mt-1">
            {open ? "Hide" : "Open"}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500 border border-[#e7e6e4] px-2 py-1">
            {issue.category}
          </span>
          <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500 border border-[#e7e6e4] px-2 py-1">
            {issue.effort}
          </span>
          {typeof issue.affects === "number" ? (
            <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500 border border-[#e7e6e4] px-2 py-1">
              {issue.affects} {issue.affects === 1 ? "page" : "pages"}
            </span>
          ) : null}
          <span
            className={`font-geist text-[10px] uppercase tracking-[0.02em] border px-2 py-1 ${severityChip(
              issue.severity
            )}`}
          >
            {issue.severity}
          </span>
        </div>
      </button>
      {open && (
        <div className="px-4 sm:px-5 pb-5 border-t border-[#e7e6e4] pt-4 space-y-4">
          <div>
            <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-red-500 mb-1">
              Why this matters
            </p>
            <p className="font-alte text-[14px] text-slate-600 tracking-[-0.04em] leading-[1.5]">
              {issue.whyItMatters}
            </p>
          </div>
          <div>
            <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-red-500 mb-1">
              How to fix it
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              {issue.howToFix.map((step) => (
                <li
                  key={step}
                  className="font-alte text-[14px] text-slate-600 tracking-[-0.04em] leading-[1.5]"
                >
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="border border-red-200 bg-red-50/50 rounded-none p-3">
              <p className="font-geist text-[10px] uppercase tracking-[0.02em] text-red-600 mb-1">
                Observed
              </p>
              <p className="font-alte text-[13px] text-[#0A1128] tracking-[-0.04em] leading-[1.45]">
                {issue.observed}
              </p>
            </div>
            <div className="border border-emerald-200 bg-emerald-50/50 rounded-none p-3">
              <p className="font-geist text-[10px] uppercase tracking-[0.02em] text-emerald-700 mb-1">
                Should be
              </p>
              <p className="font-alte text-[13px] text-[#0A1128] tracking-[-0.04em] leading-[1.45]">
                {issue.shouldBe}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const IssueList = ({ issues }: { issues: SiteIssue[] }) => (
  <div className="space-y-3">
    {issues.map((issue) => (
      <IssueCard key={issue.title} issue={issue} />
    ))}
  </div>
);

const aeoTone = (status: VisibilityAeoItem["status"]) => {
  if (status === "ok") return "text-emerald-700 bg-emerald-50 border-emerald-200";
  if (status === "partial") return "text-amber-700 bg-amber-50 border-amber-200";
  return "text-red-600 bg-red-50 border-red-200";
};

export const AeoChecklist = ({ items }: { items: VisibilityAeoItem[] }) => (
  <div className="space-y-3">
    {items.map((item) => {
      const ok = item.status === "ok";
      return (
        <div
          key={item.label}
          className="flex items-center justify-between gap-3 border border-[#e7e6e4] rounded-none bg-white px-4 py-3"
        >
          <span className="flex items-start gap-3 min-w-0">
            <span
              className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white ${
                ok ? "bg-emerald-500" : item.status === "partial" ? "bg-amber-500" : "bg-red-500"
              }`}
            >
              {ok ? <CheckSvg className="w-3 h-3" /> : <XSvg className="w-3 h-3" />}
            </span>
            <span className="font-alte text-[14px] tracking-[-0.04em] text-[#0A1128]">
              {item.label}: {item.detail}
              {item.label === "llms.txt" ? (
                <span className="block font-alte text-[12px] text-slate-400 mt-0.5 tracking-[-0.04em]">
                  the file that tells AI what your site is
                </span>
              ) : null}
            </span>
          </span>
          <span
            className={`font-geist text-[11px] uppercase tracking-[0.02em] px-2 py-1 border rounded-none flex-shrink-0 ${aeoTone(
              item.status
            )}`}
          >
            {item.detail}
          </span>
        </div>
      );
    })}
  </div>
);

export const FullReport = ({
  result,
  shareLink = true,
}: {
  result: VisibilityScanResult;
  shareLink?: boolean;
}) => (
  <div
    id="full-report"
    className="bg-white border border-[#e7e6e4] rounded-none p-6 sm:p-8"
  >
    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
      <h2 className="font-alte text-2xl sm:text-3xl text-[#0A1128] tracking-[-0.04em] leading-[1.15]">
        {REPORT.headline}
      </h2>
      <ExampleChip />
    </div>
    <p className="font-alte text-[13px] text-slate-400 tracking-[-0.04em] mb-8">
      {result.domain}
    </p>

    <div className="mb-12">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-red-500">
          Part A
        </p>
        {result.ai.rollingOut ? (
          <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-amber-700 border border-amber-200 bg-amber-50 px-2 py-0.5">
            Included, rolling out
          </span>
        ) : null}
      </div>
      <h3 className="font-alte text-xl sm:text-2xl text-[#0A1128] tracking-[-0.04em] leading-[1.2] mb-2">
        {REPORT.partATitle}
      </h3>
      <p className="font-alte text-[15px] text-slate-600 tracking-[-0.04em] leading-[1.5] mb-6">
        {REPORT.partASub}
      </p>
      {result.ai.rollingOut ? (
        <p className="font-alte text-[14px] text-slate-500 tracking-[-0.04em] leading-[1.5] mb-6">
          {REPORT.rollingOut}
        </p>
      ) : null}
      <EngineVisibilityPanel result={result} detailed />
    </div>

    <div>
      <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-red-500 mb-2">
        Part B. Live
      </p>
      <h3 className="font-alte text-xl sm:text-2xl text-[#0A1128] tracking-[-0.04em] leading-[1.2] mb-2">
        {REPORT.partBTitle}
      </h3>
      <p className="font-alte text-[15px] text-slate-600 tracking-[-0.04em] leading-[1.5] mb-6">
        {REPORT.partBSub}
      </p>
      <ScoreRing score={result.site.healthScore} grade={result.site.grade} />
      <div className="mt-8">
        <SeverityCounters counts={result.site.counts} />
      </div>
      <div className="mt-10">
        <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400 mb-4">
          Six category scores
        </p>
        <CategoryBars categories={result.site.categories} />
      </div>
      <div className="mt-10">
        <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400 mb-4">
          Prioritized issue list
        </p>
        <IssueList issues={result.site.issues} />
      </div>
      <div className="mt-10">
        <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400 mb-4">
          {REPORT.aeoTitle}
        </p>
        <AeoChecklist items={result.site.aeo} />
      </div>
      <p className="font-alte text-[15px] text-slate-600 tracking-[-0.04em] leading-[1.5] mt-8">
        {REPORT.readLine}
      </p>
    </div>

    {shareLink && (
      <p className="mt-6">
        <Link
          href={`/ai-visibility-checker/report/${domainToReportId(result.domain)}/`}
          className="font-alte text-[14px] text-blue-600 tracking-[-0.04em] hover:underline"
        >
          {REPORT.headline}
        </Link>
      </p>
    )}
  </div>
);
