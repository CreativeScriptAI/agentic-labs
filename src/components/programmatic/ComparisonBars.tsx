"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

type Bar = {
  label: string;
  valueLabel: string;
  widthPercent: number; // kept for API compatibility; no longer drives length
  accent?: boolean;
};

const CheckMark = () => (
  <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
);
const XMark = () => (
  <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" /></svg>
);

// A winning row (accent) always gets the full gold bar; every other row gets a
// short muted bar. Length is a fixed signal (winner vs the rest), never the raw
// widthPercent, so the chart reads clearly even when values are words ("seconds"
// vs "47 hours") rather than comparable numbers.
const Row: React.FC<{ bar: Bar; delay: number }> = ({ bar, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const target = bar.accent ? 1 : 0.4;

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, target, {
      duration: 0.8,
      delay,
      ease: "easeOut",
      onUpdate: (v) => { el.style.transform = `scaleX(${v})`; },
    });
    return () => controls.stop();
  }, [isInView, target, delay]);

  return (
    <div className={bar.accent ? "rounded-none border-l-2 border-[#FCCA07] pl-4" : "pl-4 border-l-2 border-transparent"}>
      <div className="flex items-center justify-between gap-3 mb-2">
        <span className="flex items-center gap-2 min-w-0">
          <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${bar.accent ? "bg-[#FCCA07] text-[#0A1128]" : "bg-[#F9F6F4] border border-[#e7e6e4] text-slate-300"}`}>
            {bar.accent ? <CheckMark /> : <XMark />}
          </span>
          <span className={`font-alte font-normal text-[14px] tracking-[-0.04em] truncate ${bar.accent ? "text-[#0A1128]" : "text-slate-500"}`}>{bar.label}</span>
        </span>
        <span className={`font-alte text-[15px] tracking-[-0.04em] whitespace-nowrap ${bar.accent ? "text-[#0A1128] font-medium" : "text-slate-400 font-normal"}`}>{bar.valueLabel}</span>
      </div>
      <div className="h-2 w-full bg-[#efeee9] rounded-none overflow-hidden">
        <div
          ref={ref}
          className={`h-full w-full ${bar.accent ? "bg-[#FCCA07]" : "bg-slate-300"}`}
          style={{ transformOrigin: "left", transform: "scaleX(0)" }}
        />
      </div>
    </div>
  );
};

const ComparisonBars: React.FC<{ title?: string; bars: Bar[] }> = ({ title, bars }) => {
  return (
    <div className="mt-8 space-y-6">
      {title && (
        <p className="font-geist text-[11px] font-normal tracking-[0.02em] uppercase text-slate-400">
          {title}
        </p>
      )}
      {bars.map((bar, i) => (
        <Row key={bar.label} bar={bar} delay={i * 0.12} />
      ))}
    </div>
  );
};

export default ComparisonBars;
