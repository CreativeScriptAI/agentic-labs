"use client";

import { useEffect, useRef, useState } from "react";

import { ExampleChip } from "../AiVisibilityChecker/primitives";

type Row = {
  time: string;
  channel: string;
  outcome: string;
  lost: boolean;
};

const ROWS: Row[] = [
  { time: "6:42 PM", channel: "Call", outcome: "Voicemail", lost: true },
  { time: "8:15 PM", channel: "Form", outcome: "No reply", lost: true },
  { time: "9:03 PM", channel: "WhatsApp", outcome: "Missed", lost: true },
  { time: "11:20 PM", channel: "Call", outcome: "Booked, 11:21 PM", lost: false },
];

const STEP_MS = 400;
const FIRST_STEP_MS = 500;
const LOOP_MS = 7000;

const ClockSvg = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg
    viewBox="0 0 20 20"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden
  >
    <circle cx="10" cy="10" r="7" />
    <path d="M10 6v4.2l2.6 1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CalendarTickSvg = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg
    viewBox="0 0 20 20"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden
  >
    <rect x="2.75" y="4.25" width="14.5" height="13" />
    <path d="M2.75 8h14.5M6.5 2.75v3M13.5 2.75v3" strokeLinecap="round" />
    <path
      d="M6.9 12.4l2.1 2.1 4.1-4.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.1"
    />
  </svg>
);

export default function HeroBookingGraphic({
  className = "",
}: {
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(0);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setMounted(true);
      setStep(ROWS.length);
      return;
    }

    setMounted(true);

    const clear = () => {
      timeouts.current.forEach((t) => clearTimeout(t));
      timeouts.current = [];
    };

    const run = () => {
      setStep(0);
      ROWS.forEach((_, i) => {
        timeouts.current.push(
          setTimeout(() => setStep(i + 1), FIRST_STEP_MS + i * STEP_MS)
        );
      });
    };

    run();
    const loop = setInterval(() => {
      clear();
      run();
    }, LOOP_MS);

    return () => {
      clearInterval(loop);
      clear();
    };
  }, []);

  const lostShown = ROWS.slice(0, Math.min(step, 3)).filter((r) => r.lost).length;
  const bookedShown = step >= ROWS.length ? 1 : 0;
  const focal = step >= ROWS.length;

  return (
    <div className={`w-full max-w-[440px] mx-auto ${className}`}>
      <div className="relative">
        <div
          aria-hidden
          className="absolute inset-0 translate-x-2 translate-y-2 border border-[#e7e6e4] -z-10"
        />
        <div
          className="relative bg-white border border-[#e7e6e4] rounded-none shadow-[0_24px_60px_-24px_rgba(10,17,40,0.28)] transition-[opacity,transform] duration-500 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0px)" : "translateY(14px)",
          }}
          aria-label="Illustration: three after hours enquiries were lost to voicemail and no reply, while the fourth was booked one minute after it arrived"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-[#e7e6e4]">
            <p className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500 truncate">
              Inbound, last night
            </p>
            <span className="flex-shrink-0 inline-flex items-center gap-1.5 font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500 border border-[#e7e6e4] bg-[#efeee9] px-2 py-1">
              <ClockSvg />
              After hours
            </span>
          </div>

          {/* Rows */}
          <div className="px-4 sm:px-5 py-3 sm:py-4">
            <ul className="space-y-2">
              {ROWS.map((row, i) => {
                const shown = step > i;
                const isFocal = i === ROWS.length - 1;
                return (
                  <li
                    key={row.time}
                    className={`relative border-l-2 pl-3 pr-2.5 py-2.5 transition-[border-color,background-color,box-shadow,transform] duration-500 ease-out ${
                      isFocal
                        ? "border-[#FCCA07] bg-[#FCCA07]/[0.07]"
                        : "border-[#e7e6e4]"
                    }`}
                    style={
                      isFocal
                        ? {
                            transform: focal ? "scale(1)" : "scale(0.98)",
                            boxShadow: focal
                              ? "0 0 0 1px rgba(252,202,7,0.55), 0 10px 26px -14px rgba(252,202,7,0.85)"
                              : "0 0 0 1px rgba(252,202,7,0)",
                          }
                        : undefined
                    }
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className="flex-shrink-0 w-[52px] sm:w-[58px] font-geist text-[10px] sm:text-[11px] uppercase tracking-[0.02em] tabular-nums text-slate-500">
                        {row.time}
                      </span>
                      <span
                        className={`flex-shrink-0 font-geist text-[9px] sm:text-[10px] uppercase tracking-[0.02em] px-1.5 py-1 border ${
                          isFocal
                            ? "border-[#0A1128]/15 bg-[#0A1128] text-white"
                            : "border-[#e7e6e4] bg-[#efeee9] text-slate-500"
                        }`}
                      >
                        {row.channel}
                      </span>

                      <span
                        className="flex-1 min-w-0 transition-[opacity,transform] duration-[400ms] ease-out"
                        style={{
                          opacity: shown ? 1 : 0,
                          transform: shown
                            ? "translateX(0px)"
                            : "translateX(-6px)",
                        }}
                      >
                        <span
                          className={`flex items-center gap-1.5 font-alte tracking-[-0.04em] text-[14px] sm:text-[15px] leading-tight truncate ${
                            row.lost ? "text-slate-400" : "text-[#0A1128]"
                          }`}
                        >
                          {isFocal ? (
                            <span className="flex-shrink-0 text-[#0A1128]">
                              <CalendarTickSvg />
                            </span>
                          ) : null}
                          <span className="truncate">{row.outcome}</span>
                        </span>
                      </span>

                      <span
                        className="flex-shrink-0 transition-opacity duration-500 ease-out"
                        style={{ opacity: shown ? 1 : 0 }}
                      >
                        {row.lost ? (
                          <span className="inline-flex items-center gap-1 font-geist text-[9px] sm:text-[10px] uppercase tracking-[0.02em] text-red-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            Lost
                          </span>
                        ) : (
                          <span className="inline-flex items-center font-geist text-[9px] sm:text-[10px] uppercase tracking-[0.02em] bg-[#FCCA07] text-[#0A1128] px-1.5 py-1">
                            +1 Booking
                          </span>
                        )}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Summary strip */}
          <div className="px-4 sm:px-5 py-3 border-t border-[#e7e6e4]">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-[#efeee9] overflow-hidden">
                <div
                  className="h-full bg-slate-300 origin-left transition-transform duration-500 ease-out"
                  style={{ transform: `scaleX(${lostShown / 3})` }}
                />
              </div>
              <div className="w-[26%] h-1.5 bg-[#efeee9] overflow-hidden">
                <div
                  className="h-full bg-[#FCCA07] origin-left transition-transform duration-500 ease-out"
                  style={{ transform: `scaleX(${bookedShown})` }}
                />
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between gap-3">
              <p className="font-geist text-[10px] uppercase tracking-[0.02em] tabular-nums text-slate-500 truncate">
                3 lost
              </p>
              <p className="font-geist text-[10px] uppercase tracking-[0.02em] tabular-nums text-[#0A1128] truncate">
                1 booked
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex justify-end">
        <ExampleChip />
      </div>
    </div>
  );
}
