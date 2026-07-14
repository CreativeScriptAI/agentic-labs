"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

type Bar = {
  label: string;
  valueLabel: string;
  widthPercent: number; // 0-100, illustrative — not strictly linear when units span orders of magnitude
  accent?: boolean;
};

const BarFill: React.FC<{ bar: Bar; delay: number }> = ({ bar, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const controls = animate(0, bar.widthPercent / 100, {
      duration: 0.8,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.style.transform = `scaleX(${v})`;
      },
    });
    return () => controls.stop();
  }, [isInView, bar.widthPercent, delay]);

  return (
    <div className="h-2.5 w-full bg-[#e7e6e4] rounded-none overflow-hidden">
      <div
        ref={ref}
        className={`h-full w-full ${bar.accent ? "bg-[#FCCA07]" : "bg-slate-300"}`}
        style={{ transformOrigin: "left", transform: "scaleX(0)" }}
      />
    </div>
  );
};

const ComparisonBars: React.FC<{ title?: string; bars: Bar[] }> = ({ title, bars }) => {
  return (
    <div className="mt-8 space-y-5">
      {title && (
        <p className="font-geist text-[11px] font-normal tracking-[0.02em] uppercase text-slate-400">
          {title}
        </p>
      )}
      {bars.map((bar, i) => (
        <div key={bar.label}>
          <div className="flex justify-between items-baseline mb-1.5">
            <span className="font-alte font-normal text-[14px] text-slate-600 tracking-[-0.04em]">{bar.label}</span>
            <span className={`font-alte font-normal text-[15px] tracking-[-0.04em] ${bar.accent ? "text-[#0A1128]" : "text-slate-500"}`}>
              {bar.valueLabel}
            </span>
          </div>
          <BarFill bar={bar} delay={i * 0.15} />
        </div>
      ))}
    </div>
  );
};

export default ComparisonBars;
