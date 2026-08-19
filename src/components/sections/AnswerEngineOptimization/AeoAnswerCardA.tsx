"use client";

import { useEffect, useRef, useState } from "react";
import { EngineLogo } from "../AiVisibilityChecker/EngineLogos";

// Perplexity-style cited AI answer card. A rotating engine chip cycles the six
// answer engines, a ranked answer list populates in sequence, and the focal
// element is an empty yellow seat: the reader's business is not cited yet.

const ENGINES = [
  "ChatGPT",
  "Perplexity",
  "Google AI",
  "Gemini",
  "Grok",
  "Claude",
] as const;

const NAMES = [
  { rank: "1", name: "A local firm" },
  { rank: "2", name: "A known competitor" },
  { rank: "3", name: "A third name" },
] as const;

const SOURCES = ["A directory", "A review site", "A roundup"] as const;

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const AeoAnswerCardA = ({ className = "" }: { className?: string }) => {
  // engineIndex drives the rotating chip; revealed is how many ranked rows show.
  const [engineIndex, setEngineIndex] = useState(0);
  const [revealed, setRevealed] = useState(0);
  const [seatOn, setSeatOn] = useState(false);
  const [chipFade, setChipFade] = useState(false);

  useEffect(() => {
    if (prefersReduced()) {
      setRevealed(NAMES.length);
      setSeatOn(true);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Rotate the engine chip on its own gentle ~2s cadence with a fade.
    const engineTick = setInterval(() => {
      setChipFade(true);
      const t = setTimeout(() => {
        setEngineIndex((i) => (i + 1) % ENGINES.length);
        setChipFade(false);
      }, 260);
      timers.push(t);
    }, 2000);

    // One populate cycle: rows appear one by one, then the empty seat, hold,
    // then reset the rows/seat (header + question stay mounted, never blank).
    let cycleTimers: ReturnType<typeof setTimeout>[] = [];
    const runCycle = () => {
      cycleTimers.forEach(clearTimeout);
      cycleTimers = [];
      setRevealed(0);
      setSeatOn(false);
      cycleTimers.push(setTimeout(() => setRevealed(1), 500));
      cycleTimers.push(setTimeout(() => setRevealed(2), 1100));
      cycleTimers.push(setTimeout(() => setRevealed(3), 1700));
      cycleTimers.push(setTimeout(() => setSeatOn(true), 2400));
    };
    runCycle();
    const cycle = setInterval(runCycle, 7000);

    return () => {
      clearInterval(engineTick);
      clearInterval(cycle);
      cycleTimers.forEach(clearTimeout);
      timers.forEach(clearTimeout);
    };
  }, []);

  const engine = ENGINES[engineIndex];

  return (
    <div
      className={`w-full max-w-[440px] mx-auto bg-white border border-[#e7e6e4] rounded-none ${className}`}
    >
      {/* Header: AI ANSWER label + rotating engine chip */}
      <div className="flex items-center justify-between px-5 sm:px-6 pt-5 pb-4 border-b border-[#e7e6e4]">
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="inline-block w-1.5 h-1.5 bg-[#FCCA07] rounded-none"
          />
          <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500">
            AI Answer
          </span>
        </div>
        <div
          className="flex items-center gap-2 px-2.5 py-1.5 bg-[#F9F6F4] border border-[#e7e6e4] rounded-none transition-opacity duration-300"
          style={{ opacity: chipFade ? 0 : 1 }}
        >
          <span
            aria-hidden
            className="flex items-center justify-center w-6 h-6 bg-white border border-[#e7e6e4] rounded-none"
          >
            <EngineLogo name={engine} className="w-4 h-4" />
          </span>
          <span className="font-geist text-[11px] tracking-[0.02em] text-[#0A1128]">
            {engine}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 sm:px-6 py-5">
        {/* Buyer question as a prompt line */}
        <div className="flex items-start gap-2.5">
          <span
            aria-hidden
            className="font-geist text-[13px] text-slate-400 leading-[1.3] mt-px"
          >
            &gt;
          </span>
          <p className="font-alte text-[14px] text-slate-500 tracking-[-0.04em] leading-[1.4]">
            Who should I hire in my space?
          </p>
        </div>

        {/* AI answer intro */}
        <p className="font-alte text-[15px] text-[#0A1128] tracking-[-0.04em] leading-[1.4] mt-4">
          Three names people trust for this:
        </p>

        {/* Ranked answer list */}
        <ul className="mt-4 space-y-2.5">
          {NAMES.map((row, i) => {
            const shown = i < revealed;
            return (
              <li
                key={row.rank}
                className="flex items-center gap-3 transition-all duration-500 ease-out"
                style={{
                  opacity: shown ? 1 : 0,
                  transform: shown ? "translateY(0)" : "translateY(8px)",
                }}
              >
                <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 bg-[#0A1128] rounded-none">
                  <span className="font-geist text-[11px] tracking-[0.02em] text-white">
                    {row.rank}
                  </span>
                </span>
                <span className="font-alte text-[15px] text-[#0A1128] tracking-[-0.04em] leading-[1.3] flex-1 min-w-0">
                  {row.name}
                </span>
                <span className="font-geist text-[9px] uppercase tracking-[0.02em] text-slate-400 flex-shrink-0">
                  cited
                </span>
              </li>
            );
          })}
        </ul>

        {/* Focal empty seat */}
        <div
          className="relative mt-3 flex items-center gap-3 px-3 py-3 border border-dashed rounded-none transition-all duration-700 ease-out"
          style={{
            borderColor: "#FCCA07",
            backgroundColor: "rgba(252, 202, 7, 0.06)",
            boxShadow: seatOn ? "0 0 0 3px rgba(252, 202, 7, 0.14)" : "0 0 0 0 rgba(252, 202, 7, 0)",
            animation: seatOn ? "aeoSeatPulse 2.4s ease-in-out infinite" : "none",
          }}
        >
          <span className="flex items-center justify-center flex-shrink-0 w-7 h-7 border border-dashed border-[#FCCA07] rounded-none">
            <span className="font-geist text-[13px] text-[#FCCA07]">?</span>
          </span>
          <span className="font-alte text-[16px] text-[#0A1128] tracking-[-0.04em] leading-[1.3] flex-1 min-w-0">
            Your business?
          </span>
          <span className="font-geist text-[9px] uppercase tracking-[0.02em] text-slate-400 flex-shrink-0 text-right">
            not cited yet
          </span>
        </div>
      </div>

      {/* Sources footer */}
      <div className="px-5 sm:px-6 pb-5 pt-1">
        <p className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400 mb-2.5">
          Sources
        </p>
        <div className="flex flex-wrap gap-2">
          {SOURCES.map((s) => (
            <span
              key={s}
              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#F9F6F4] border border-[#e7e6e4] rounded-none"
            >
              <span
                aria-hidden
                className="inline-block w-1 h-1 bg-slate-400 rounded-none"
              />
              <span className="font-alte text-[12px] text-slate-500 tracking-[-0.04em]">
                {s}
              </span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes aeoSeatPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(252, 202, 7, 0.14); }
          50% { box-shadow: 0 0 0 5px rgba(252, 202, 7, 0.05); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="aeoSeatPulse"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
};

export default AeoAnswerCardA;
