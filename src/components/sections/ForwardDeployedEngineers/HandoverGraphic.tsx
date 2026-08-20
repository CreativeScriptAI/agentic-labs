"use client";

import { useEffect, useRef, useState } from "react";
import { ExampleChip } from "../AiVisibilityChecker/primitives";

const KeySvg = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path
      fillRule="evenodd"
      d="M8 1a5 5 0 0 0-1.5 9.77V17l1.5 1.5L9.5 17l-1-1 1-1-1-1 1.5-1.5V10.77A5 5 0 0 0 8 1Zm1.5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      clipRule="evenodd"
    />
  </svg>
);

const CheckSvg = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path
      fillRule="evenodd"
      d="M16.7 4.15a.75.75 0 0 1 .15 1.05l-8 10.5a.75.75 0 0 1-1.13.08l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.9 3.89 7.48-9.82a.75.75 0 0 1 1.04-.14Z"
      clipRule="evenodd"
    />
  </svg>
);

const PHASES = ["Assess", "Build", "Handover"] as const;
const OWNERSHIP = ["Repo", "Docs", "Runbooks", "Exit"] as const;

// Status chip label for a given step in the loop.
const chipFor = (step: number): { label: string; own: boolean } => {
  if (step <= 0) return { label: "Embedded", own: false };
  if (step === 1) return { label: "Building", own: false };
  if (step === 2) return { label: "Live", own: false };
  return { label: "Yours", own: true };
};

const FINAL_STEP = 7;
const CYCLE = FINAL_STEP + 1; // steps 0..7

export default function HandoverGraphic({
  className = "",
}: {
  className?: string;
}) {
  const [step, setStep] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setStep(FINAL_STEP);
      return;
    }
    timer.current = setInterval(() => {
      setStep((s) => (s + 1) % CYCLE);
    }, 950);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const fill = Math.min(step, 3) / 3; // spine fill 0, 1/3, 2/3, 1
  const ownCount = Math.max(0, Math.min(4, step - 3)); // chips landed
  const chip = chipFor(step);

  // Phase state: 0 pending, 1 active, 2 done
  const phaseState = (i: number): 0 | 1 | 2 => {
    if (step > i) return 2;
    if (step === i) return 1;
    return 0;
  };

  return (
    <div className={`w-full max-w-[440px] mx-auto ${className}`}>
      <div className="border border-[#e7e6e4] bg-white rounded-none">
        {/* Header (scaffold, never blank) */}
        <div className="flex items-center justify-between gap-3 border-b border-[#e7e6e4] px-4 py-3 sm:px-5">
          <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400 truncate">
            Engagement
          </span>
          <span
            className={`inline-flex items-center gap-1.5 border px-2 py-1 font-geist text-[10px] uppercase tracking-[0.02em] transition-colors duration-300 ${
              chip.own
                ? "border-[#FCCA07] bg-[#FCCA07] text-[#0A1128]"
                : "border-[#e7e6e4] bg-[#efeee9] text-slate-500"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                chip.own ? "bg-[#0A1128]" : "bg-slate-400"
              }`}
            />
            {chip.label}
          </span>
        </div>

        {/* Phase progression (scaffold, never blank) */}
        <div className="px-4 pt-6 pb-5 sm:px-5">
          <div className="relative">
            {/* Track */}
            <div className="absolute top-[10px] left-[16.66%] right-[16.66%] h-[2px] bg-[#efeee9]" />
            {/* Fill */}
            <div
              className="absolute top-[10px] left-[16.66%] h-[2px] w-[66.66%] origin-left bg-[#0A1128] transition-transform duration-500 ease-out"
              style={{ transform: `scaleX(${fill})` }}
            />

            <div className="relative grid grid-cols-3">
              {PHASES.map((name, i) => {
                const s = phaseState(i);
                return (
                  <div key={name} className="flex flex-col items-center">
                    <span
                      className={`flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center border transition-colors duration-300 ${
                        s === 2
                          ? "border-[#0A1128] bg-[#0A1128] text-white"
                          : s === 1
                            ? "border-[#0A1128] bg-white text-[#0A1128]"
                            : "border-[#e7e6e4] bg-[#efeee9] text-transparent"
                      }`}
                    >
                      {s === 2 ? (
                        <CheckSvg />
                      ) : (
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            s === 1 ? "bg-[#0A1128]" : "bg-slate-300"
                          }`}
                        />
                      )}
                    </span>
                    <span
                      className={`mt-2 font-alte text-[13px] tracking-[-0.04em] transition-colors duration-300 ${
                        s === 0 ? "text-slate-400" : "text-[#0A1128]"
                      }`}
                    >
                      {name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Focal end state: You own it */}
        <div className="border-t border-[#e7e6e4] bg-[#F9F6F4] px-4 py-4 sm:px-5">
          <div className="mb-3 flex items-center gap-1.5">
            <span
              className={`transition-colors duration-300 ${
                chip.own ? "text-[#FCCA07]" : "text-slate-400"
              }`}
            >
              <KeySvg />
            </span>
            <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-500">
              You own it
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {OWNERSHIP.map((label, i) => {
              const landed = i < ownCount;
              return (
                <span
                  key={label}
                  className={`inline-flex items-center justify-center border px-1 py-1.5 font-geist text-[10px] uppercase tracking-[0.02em] transition-all duration-300 ${
                    landed
                      ? "border-[#FCCA07] bg-[#FCCA07] text-[#0A1128]"
                      : "border-dashed border-[#e7e6e4] bg-white text-slate-300"
                  }`}
                  style={{
                    transform: landed ? "translateY(0)" : "translateY(4px)",
                    opacity: landed ? 1 : 0.55,
                  }}
                >
                  <span className="truncate">{label}</span>
                </span>
              );
            })}
          </div>

          <p className="mt-3 font-alte text-[12px] leading-[1.4] tracking-[-0.04em] text-slate-500">
            A documented system that is yours to run. No lock in, clean exit.
          </p>
        </div>
      </div>

      <div className="mt-3 flex justify-center">
        <ExampleChip />
      </div>
    </div>
  );
}
