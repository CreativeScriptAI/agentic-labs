"use client";

import { useEffect, useState } from "react";
import { motionOff } from "src/lib/motionOff";
import { ExampleChip } from "../AiVisibilityChecker/primitives";

type Outcome = "qualified" | "nurture" | "disqualified";

type Lead = {
  label: string;
  meta: string;
  outcome: Outcome;
  reason?: string;
};

const LEADS: Lead[] = [
  { label: "Enquiry, ready to buy", meta: "Web form, budget confirmed", outcome: "qualified" },
  { label: "Enquiry, enterprise", meta: "Referral, decision maker", outcome: "qualified" },
  { label: "Enquiry, retail", meta: "Web form, fit unclear", outcome: "nurture" },
  { label: "Student, researching", meta: "Live chat, not buying", outcome: "nurture", reason: "not buying" },
  { label: "Enquiry, no budget", meta: "Email, price only", outcome: "disqualified", reason: "no budget" },
  { label: "Spam", meta: "Web form, invalid details", outcome: "disqualified", reason: "no fit" },
];

const OUTCOME_META: Record<
  Outcome,
  { label: string; pill: string }
> = {
  qualified: {
    label: "Qualified",
    pill: "bg-[#FCCA07] text-[#0A1128] border-[#FCCA07]",
  },
  nurture: {
    label: "Nurture",
    pill: "bg-[#efeee9] text-slate-500 border-[#e7e6e4]",
  },
  disqualified: {
    label: "Disqualified",
    pill: "bg-white text-slate-400 border-[#e7e6e4]",
  },
};

const STEP_MS = 850;
// reveal 6 rows, then 2 hold frames, then reset. 8 frames * 850ms is roughly 7s.
const CYCLE = LEADS.length + 2;

const COUNTS = {
  qualified: LEADS.filter((l) => l.outcome === "qualified").length,
  nurture: LEADS.filter((l) => l.outcome === "nurture").length,
  disqualified: LEADS.filter((l) => l.outcome === "disqualified").length,
};

function Pill({ outcome, visible }: { outcome: Outcome; visible: boolean }) {
  const m = OUTCOME_META[outcome];
  return (
    <span
      className={`inline-flex items-center font-geist text-[10px] uppercase tracking-[0.02em] border px-1.5 py-0.5 leading-none transition-all duration-300 ${m.pill} ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1"
      }`}
    >
      {m.label}
    </span>
  );
}

export default function HeroSortGraphic({
  className = "",
}: {
  className?: string;
}) {
  const [sorted, setSorted] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (motionOff()) {
      setReduced(true);
      setSorted(LEADS.length);
      return;
    }
    let n = 0;
    const id = window.setInterval(() => {
      n = n + 1 >= CYCLE ? 0 : n + 1;
      setSorted(Math.min(n, LEADS.length));
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, []);

  const lastLanded = sorted - 1;

  return (
    <div className={`w-full max-w-[440px] mx-auto ${className}`}>
      <div className="bg-white border border-[#e7e6e4] rounded-none">
        {/* Header (permanent scaffolding) */}
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[#e7e6e4]">
          <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-500 truncate">
            Inbound leads
          </span>
          <span className="inline-flex items-center gap-1.5 font-geist text-[10px] uppercase tracking-[0.02em] text-[#0A1128] border border-[#e7e6e4] bg-[#efeee9] px-2 py-0.5 flex-shrink-0">
            <span
              aria-hidden
              className={`w-1.5 h-1.5 rounded-full ${
                sorted < LEADS.length && !reduced
                  ? "bg-[#FCCA07] animate-pulse motion-reduce:animate-none"
                  : "bg-slate-400"
              }`}
            />
            {sorted}/{LEADS.length} sorted
          </span>
        </div>

        {/* Lead rows (scaffolding permanent, only pills + emphasis re-animate) */}
        <div className="divide-y divide-[#e7e6e4]">
          {LEADS.map((lead, i) => {
            const shown = i < sorted;
            const isQualified = lead.outcome === "qualified";
            const justLanded = i === lastLanded && !reduced;
            return (
              <div
                key={lead.label}
                className={`flex items-center gap-3 px-4 py-2.5 transition-colors duration-300 ${
                  shown && isQualified ? "bg-[#FCCA07]/[0.07]" : ""
                } ${justLanded ? "bg-[#efeee9]/60" : ""}`}
              >
                {/* accent rail: yellow only for a landed qualified lead */}
                <span
                  aria-hidden
                  className={`w-0.5 self-stretch flex-shrink-0 transition-colors duration-300 ${
                    shown && isQualified ? "bg-[#FCCA07]" : "bg-[#e7e6e4]"
                  }`}
                />
                <div className="min-w-0 flex-1">
                  <p className="font-alte text-[14px] tracking-[-0.04em] text-[#0A1128] truncate">
                    {lead.label}
                  </p>
                  <p className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400 truncate">
                    {shown && lead.reason ? lead.reason : lead.meta}
                  </p>
                </div>
                <div className="flex-shrink-0 flex items-center justify-end min-w-[84px]">
                  <Pill outcome={lead.outcome} visible={shown} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Split bar (permanent scaffolding) */}
        <div className="px-4 py-3 border-t border-[#e7e6e4]">
          <div className="flex h-1.5 w-full overflow-hidden">
            <span
              className="bg-[#FCCA07]"
              style={{ width: `${(COUNTS.qualified / LEADS.length) * 100}%` }}
            />
            <span
              className="bg-slate-300"
              style={{ width: `${(COUNTS.nurture / LEADS.length) * 100}%` }}
            />
            <span
              className="bg-[#efeee9]"
              style={{ width: `${(COUNTS.disqualified / LEADS.length) * 100}%` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between font-geist text-[9px] sm:text-[10px] uppercase tracking-[0.02em] text-slate-400">
            <span className="text-[#0A1128]">
              {COUNTS.qualified} qualified
            </span>
            <span>{COUNTS.nurture} nurture</span>
            <span>{COUNTS.disqualified} disqualified</span>
          </div>
        </div>
      </div>

      <div className="mt-3 flex justify-center">
        <ExampleChip />
      </div>
    </div>
  );
}
