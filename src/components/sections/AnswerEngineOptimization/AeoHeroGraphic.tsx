"use client";

import { useEffect, useRef, useState } from "react";
import { EngineLogo } from "../AiVisibilityChecker/EngineLogos";

const ENGINES = [
  "ChatGPT",
  "Perplexity",
  "Google AI",
  "Gemini",
  "Grok",
  "Claude",
] as const;

const RESULTS = ["A local firm", "A known competitor", "A third name"] as const;

const ENGINE_MS = 1800;
const ROW_STAGGER_MS = 500;
const ROW_START_MS = 700;
const SEAT_MS = ROW_START_MS + RESULTS.length * ROW_STAGGER_MS + 400;
const CYCLE_MS = 7000;

/* A ranked, filled result row: a competitor the AI picked. */
const ResultRow = ({
  rank,
  label,
  visible,
}: {
  rank: number;
  label: string;
  visible: boolean;
}) => (
  <div
    className="flex items-center gap-3 border border-[#e7e6e4] bg-white px-3 py-2.5 transition-all duration-500 ease-out motion-reduce:transition-none"
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(8px)",
    }}
  >
    <span
      aria-hidden
      className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-[#0A1128] text-white font-geist text-[12px] tabular-nums"
    >
      {rank}
    </span>
    <span className="font-alte text-[15px] text-[#0A1128] tracking-[-0.04em] flex-1">
      {label}
    </span>
    <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400 flex-shrink-0">
      cited
    </span>
  </div>
);

/* The punch: your business, visibly missing from the answer. */
const MissingSeat = () => (
  <div className="border border-dashed border-red-300 bg-red-50 px-3 py-2.5 animate-pulse motion-reduce:animate-none">
    <p className="font-geist text-[10px] uppercase tracking-[0.02em] text-red-500 mb-1.5">
      You are not here.
    </p>
    <div className="flex items-center gap-3">
      <span
        aria-hidden
        className="w-2 h-2 flex-shrink-0 rounded-full bg-red-500"
      />
      <span className="font-alte text-[15px] text-[#0A1128] tracking-[-0.04em] flex-1">
        Your business
      </span>
      <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-red-500 flex-shrink-0">
        Not named
      </span>
    </div>
  </div>
);

const AeoHeroGraphic = ({ className = "" }: { className?: string }) => {
  const [engineIndex, setEngineIndex] = useState(0);
  const [engineFade, setEngineFade] = useState(true);
  const [rowsShown, setRowsShown] = useState(0);
  const [seatShown, setSeatShown] = useState(false);
  const [reduced, setReduced] = useState(false);

  const engineRef = useRef(0);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const intervals = useRef<ReturnType<typeof setInterval>[]>([]);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      // Final static state: one engine, all three names, the empty seat.
      setReduced(true);
      setEngineIndex(0);
      setRowsShown(RESULTS.length);
      setSeatShown(true);
      return;
    }

    const push = (fn: () => void, ms: number) => {
      timeouts.current.push(setTimeout(fn, ms));
    };

    const runCycle = () => {
      setRowsShown(0);
      setSeatShown(false);

      for (let i = 0; i < RESULTS.length; i += 1) {
        push(() => setRowsShown(i + 1), ROW_START_MS + i * ROW_STAGGER_MS);
      }
      push(() => setSeatShown(true), SEAT_MS);
    };

    // Rotate the engine chip with a short fade.
    const engineTimer = setInterval(() => {
      setEngineFade(false);
      timeouts.current.push(
        setTimeout(() => {
          engineRef.current = (engineRef.current + 1) % ENGINES.length;
          setEngineIndex(engineRef.current);
          setEngineFade(true);
        }, 180),
      );
    }, ENGINE_MS);
    intervals.current.push(engineTimer);

    // Loop the row + seat population.
    runCycle();
    const cycleTimer = setInterval(runCycle, CYCLE_MS);
    intervals.current.push(cycleTimer);

    return () => {
      timeouts.current.forEach(clearTimeout);
      intervals.current.forEach(clearInterval);
      timeouts.current = [];
      intervals.current = [];
    };
  }, []);

  const engineName = ENGINES[engineIndex];

  return (
    <div className={`relative w-full ${className}`}>
      {/* Gradient wash framing the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-10 w-[420px] h-[420px] max-w-full rounded-full bg-gradient-to-br from-blue-200/40 to-[#FCCA07]/20 blur-3xl -z-10"
      />
      <div className="relative max-w-md w-full mx-auto">
        {/* Stacked-depth offset */}
        <div
          aria-hidden
          className="absolute inset-0 translate-x-2 translate-y-2 border border-[#e7e6e4] -z-10"
        />
        <div className="bg-white border border-[#e7e6e4] rounded-none shadow-[0_20px_50px_-20px_rgba(10,17,40,0.25)]">
          {/* Header: rotating engine chip */}
          <div className="flex items-center justify-between border-b border-[#e7e6e4] px-3 py-2.5">
            <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500">
              AI answer
            </span>
            <span
              className="inline-flex items-center gap-1.5 border border-[#e7e6e4] bg-[#F9F6F4] px-2 py-1 transition-opacity duration-200 ease-out motion-reduce:transition-none"
              style={{ opacity: reduced ? 1 : engineFade ? 1 : 0 }}
            >
              <EngineLogo name={engineName} className="w-4 h-4" />
              <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-[#0A1128]">
                {engineName}
              </span>
            </span>
          </div>

          {/* Body */}
          <div className="px-3 py-3">
            {/* Buyer question */}
            <p className="font-alte text-[15px] text-[#0A1128] tracking-[-0.04em] mb-3">
              Who should I hire in my space?
            </p>

            <div className="space-y-2">
              {RESULTS.map((label, i) => (
                <ResultRow
                  key={label}
                  rank={i + 1}
                  label={label}
                  visible={i < rowsShown}
                />
              ))}

              <div
                className="transition-all duration-500 ease-out motion-reduce:transition-none"
                style={{
                  opacity: seatShown ? 1 : 0,
                  transform: seatShown ? "translateY(0)" : "translateY(8px)",
                }}
              >
                <MissingSeat />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AeoHeroGraphic;
