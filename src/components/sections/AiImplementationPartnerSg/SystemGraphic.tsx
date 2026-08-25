"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motionOff } from "src/lib/motionOff";
import { ExampleChip } from "../AiVisibilityChecker/primitives";

type Stage = {
  key: string;
  name: string;
};

const STAGES: Stage[] = [
  { key: "capture", name: "Capture" },
  { key: "qualify", name: "Qualify" },
  { key: "follow", name: "Follow up" },
  { key: "book", name: "Book" },
];

const TOOLS = ["CRM", "Calendar", "WhatsApp", "Email"];

// Phase model for the loop:
// 0  = reset, disconnected, muted
// 1  = spine connects (line draws)
// 2  = stage 1 active
// 3  = stage 2 active
// 4  = stage 3 active
// 5  = stage 4 active, chip flips to RUNNING
// 6  = lead travels 0 -> Booked (focal beat)
// then hold, loop back to 0
const PHASE_STEPS = [
  { phase: 0, hold: 900 },
  { phase: 1, hold: 700 },
  { phase: 2, hold: 550 },
  { phase: 3, hold: 550 },
  { phase: 4, hold: 550 },
  { phase: 5, hold: 700 },
  { phase: 6, hold: 2200 },
];

const CheckMark = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function SystemGraphic({
  className = "",
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [phase, setPhase] = useState(0);
  const [reduced, setReduced] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (!inView) return;

    if (motionOff()) {
      setReduced(true);
      setPhase(6);
      return;
    }

    let cancelled = false;
    const clearAll = () => {
      timers.current.forEach((t) => clearTimeout(t));
      timers.current = [];
    };

    const runCycle = () => {
      if (cancelled) return;
      clearAll();
      let acc = 0;
      PHASE_STEPS.forEach((step) => {
        const t = setTimeout(() => {
          if (!cancelled) setPhase(step.phase);
        }, acc);
        timers.current.push(t);
        acc += step.hold;
      });
      const loop = setTimeout(runCycle, acc);
      timers.current.push(loop);
    };

    runCycle();

    return () => {
      cancelled = true;
      clearAll();
    };
  }, [inView]);

  const connected = reduced || phase >= 1;
  const running = reduced || phase >= 5;
  // Active count of stages (how many have lit up in order)
  const activeCount = reduced ? 4 : Math.max(0, Math.min(4, phase - 1));
  const leadTravelling = reduced || phase >= 6;

  const isActive = (i: number) => i < activeCount;
  const isBooked = (i: number) => i === STAGES.length - 1 && running;

  return (
    <div ref={ref} className={`w-full max-w-[440px] mx-auto ${className}`}>
      <div className="border border-[#e7e6e4] bg-white">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e7e6e4] px-4 py-3 sm:px-5">
          <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-500">
            Your pipeline
          </span>
          <span
            className={`inline-flex items-center gap-1.5 border px-2 py-1 font-geist text-[10px] uppercase tracking-[0.02em] transition-colors duration-500 ${
              running
                ? "border-[#FCCA07] bg-[#FCCA07] text-[#0A1128]"
                : "border-[#e7e6e4] bg-[#efeee9] text-slate-400"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
                running ? "bg-[#0A1128]" : "bg-slate-400"
              }`}
            />
            {running ? "Running" : "Disconnected"}
          </span>
        </div>

        {/* Pipeline body */}
        <div className="px-4 py-6 sm:px-5">
          {/* Desktop: horizontal spine. Mobile: vertical spine. */}
          <div className="relative">
            {/* MOBILE vertical spine track (behind nodes) */}
            <span
              aria-hidden
              className="sm:hidden absolute left-[19px] top-3 bottom-3 w-px bg-[#e7e6e4]"
            />
            <span
              aria-hidden
              className="sm:hidden absolute left-[19px] top-3 w-px bg-[#0A1128] origin-top transition-transform duration-700 ease-out"
              style={{
                bottom: "12px",
                transform: `scaleY(${connected ? 1 : 0})`,
              }}
            />

            {/* DESKTOP horizontal spine track */}
            <span
              aria-hidden
              className="hidden sm:block absolute left-5 right-5 top-[19px] h-px bg-[#e7e6e4]"
            />
            <span
              aria-hidden
              className="hidden sm:block absolute left-5 top-[19px] h-px bg-[#0A1128] origin-left transition-transform duration-700 ease-out"
              style={{
                right: "20px",
                transform: `scaleX(${connected ? 1 : 0})`,
              }}
            />

            {/* Travelling lead token (desktop, along horizontal spine) */}
            <span
              aria-hidden
              className={`hidden sm:block absolute top-[19px] z-20 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 border-white transition-all ease-in-out ${
                leadTravelling
                  ? "bg-[#FCCA07] opacity-100 duration-[1400ms]"
                  : "bg-[#0A1128] opacity-0 duration-200"
              }`}
              style={{
                left: leadTravelling
                  ? "calc(100% - 20px)"
                  : "20px",
                boxShadow: leadTravelling
                  ? "0 0 0 3px rgba(252,202,7,0.28)"
                  : "none",
              }}
            />

            {/* Stages */}
            <ol className="relative flex flex-col gap-4 sm:flex-row sm:gap-2 sm:justify-between">
              {STAGES.map((stage, i) => {
                const active = isActive(i);
                const booked = isBooked(i);
                return (
                  <li
                    key={stage.key}
                    className="flex items-center gap-3 sm:flex-col sm:items-center sm:gap-2.5 sm:flex-1"
                  >
                    {/* Node dot */}
                    <span
                      className={`relative z-10 flex-shrink-0 flex items-center justify-center w-10 h-10 border transition-all duration-500 ${
                        booked
                          ? "border-[#FCCA07] bg-[#FCCA07] text-[#0A1128]"
                          : active
                          ? "border-[#0A1128] bg-[#0A1128] text-white"
                          : "border-[#e7e6e4] bg-[#efeee9] text-slate-400"
                      }`}
                      style={
                        booked
                          ? { boxShadow: "0 0 0 4px rgba(252,202,7,0.22)" }
                          : undefined
                      }
                    >
                      {active || booked ? (
                        <CheckMark className="w-4 h-4" />
                      ) : (
                        <span className="font-geist text-[12px] tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      )}
                    </span>

                    {/* Label */}
                    <span className="flex flex-col sm:items-center">
                      <span
                        className={`font-alte text-[15px] tracking-[-0.04em] transition-colors duration-500 ${
                          active || booked ? "text-[#0A1128]" : "text-slate-400"
                        }`}
                      >
                        {stage.name}
                      </span>
                      <span
                        aria-hidden={!booked}
                        className="font-geist text-[10px] uppercase tracking-[0.02em] text-[#0A1128] sm:text-center transition-opacity duration-500"
                        style={{ opacity: booked ? 1 : 0 }}
                      >
                        Booked
                      </span>
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Caption */}
          <p className="mt-6 font-alte text-[13px] leading-[1.5] tracking-[-0.04em] text-slate-500">
            {running
              ? "One system. It runs a stranger to a booked call."
              : "Four tools you bought. Nothing hands off yet."}
          </p>
        </div>

        {/* Footer: tools it is built into */}
        <div className="flex flex-wrap items-center gap-1.5 border-t border-[#e7e6e4] bg-[#F9F6F4] px-4 py-3 sm:px-5">
          <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400 mr-1">
            Built into
          </span>
          {TOOLS.map((tool) => (
            <span
              key={tool}
              className={`font-geist text-[10px] uppercase tracking-[0.02em] border px-2 py-1 transition-colors duration-500 ${
                connected
                  ? "border-[#e7e6e4] bg-white text-[#0A1128]"
                  : "border-[#e7e6e4] bg-[#efeee9] text-slate-400"
              }`}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3 flex justify-center">
        <ExampleChip />
      </div>
    </div>
  );
}
