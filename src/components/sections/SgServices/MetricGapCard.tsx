"use client";

import { useEffect, useRef, useState } from "react";
import { ExampleChip } from "../AiVisibilityChecker/primitives";

// The shared "vanity metric vs booked lead" engine behind all four service hero
// graphics. Vanity metrics tick up (ink), a Leads row stays at 0 (the pain),
// then a booked outcome lands in the yellow accent and the status chip flips.
// State + CSS transitions only; imperative, reduced-motion safe, loops without
// blanking the scaffolding.

export type GapConfig = {
  header: string;
  runningChip: string;
  bookedChip: string;
  vanity: { label: string; target: number; suffix?: string; prefix?: string }[];
  painLabel: string;
  bookedLabel: string;
  bookedValue: string;
};

const STEP_MS = 950;
const STEPS = 7; // 0 reset, 1-3 count up, 4 pain, 5 booked, 6 hold

const MetricGapCard = ({ config, className = "" }: { config: GapConfig; className?: string }) => {
  const [step, setStep] = useState(0);
  const [reduced, setReduced] = useState(false);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setReduced(true);
      setStep(6);
      return;
    }
    interval.current = setInterval(() => {
      setStep((s) => (s + 1) % STEPS);
    }, STEP_MS);
    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, []);

  // count-up fraction: 0 at step<=0, full by step 3
  const frac = reduced ? 1 : Math.min(1, Math.max(0, step) / 3);
  const booked = reduced || step >= 5;
  const painShown = reduced || step >= 4;

  return (
    <div className={`w-full max-w-[440px] mx-auto ${className}`}>
      <div className="bg-white border border-[#e7e6e4] rounded-none">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e7e6e4] px-4 py-3">
          <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500">{config.header}</span>
          <span
            className={`font-geist text-[10px] uppercase tracking-[0.02em] px-2 py-1 border transition-colors duration-300 ${
              booked ? "border-[#FCCA07] bg-[#FCCA07] text-[#0A1128]" : "border-[#e7e6e4] bg-[#efeee9] text-slate-500"
            }`}
          >
            {booked ? config.bookedChip : config.runningChip}
          </span>
        </div>

        {/* Body */}
        <div className="px-4 py-4 space-y-3">
          {/* Vanity metrics ticking up */}
          {config.vanity.map((m) => (
            <div key={m.label} className="flex items-center justify-between border-b border-[#efeee9] pb-3">
              <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400">{m.label}</span>
              <span className="font-alte text-[20px] tracking-[-0.04em] text-[#0A1128] tabular-nums">
                {m.prefix ?? ""}
                {Math.round(m.target * frac).toLocaleString()}
                {m.suffix ?? ""}
              </span>
            </div>
          ))}

          {/* The pain: leads stuck at 0 */}
          <div
            className={`flex items-center justify-between transition-opacity duration-300 ${painShown && !booked ? "opacity-100" : "opacity-60"}`}
          >
            <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400">{config.painLabel}</span>
            <span className={`font-alte text-[20px] tracking-[-0.04em] tabular-nums ${booked ? "text-slate-300 line-through" : "text-red-500"}`}>
              0
            </span>
          </div>

          {/* The resolution: booked, in yellow */}
          <div
            className={`flex items-center gap-3 border border-dashed px-3 py-2.5 transition-all duration-500 ${
              booked ? "border-[#FCCA07] bg-[#FCCA07]/10 opacity-100 translate-y-0" : "border-[#e7e6e4] opacity-0 translate-y-1"
            }`}
          >
            <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-[#FCCA07] text-[#0A1128] text-[13px]" aria-hidden>
              ✓
            </span>
            <span className="font-alte text-[15px] tracking-[-0.04em] text-[#0A1128]">{config.bookedLabel}</span>
            <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-[#0A1128] ml-auto">{config.bookedValue}</span>
          </div>
        </div>
      </div>
      <div className="mt-3 flex justify-center">
        <ExampleChip />
      </div>
    </div>
  );
};

export default MetricGapCard;
