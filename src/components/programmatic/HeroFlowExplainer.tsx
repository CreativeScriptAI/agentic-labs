"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export type FlowStep = { label: string; sub: string; accent?: boolean };

const StepRow: React.FC<{ step: FlowStep; index: number; last: boolean }> = ({ step, index, last }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const el = ref.current;
    const delay = index * 0.12;
    const oc = animate(0, 1, { duration: 0.4, delay, ease: "easeOut", onUpdate: (v) => { el.style.opacity = `${v}`; } });
    const xc = animate(12, 0, { duration: 0.4, delay, ease: "easeOut", onUpdate: (v) => { el.style.transform = `translateX(${v}px)`; } });
    return () => { oc.stop(); xc.stop(); };
  }, [isInView, index]);

  return (
    <div ref={ref} className="relative flex gap-4 pb-6 last:pb-0" style={{ opacity: 0, transform: "translateX(12px)" }}>
      {/* Node + connector */}
      <div className="relative flex flex-col items-center flex-shrink-0">
        <span
          className={`w-9 h-9 rounded-full flex items-center justify-center font-geist text-[13px] font-normal z-10 ${
            step.accent ? "bg-[#FCCA07] text-[#0A1128]" : "bg-white border border-[#e7e6e4] text-slate-500"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        {!last && <span className="w-px flex-1 bg-[#e7e6e4] mt-1" />}
      </div>
      {/* Copy */}
      <div className="pt-1.5">
        <p className="font-alte font-normal text-[15px] text-[#0A1128] leading-[1.3] tracking-[-0.04em]">{step.label}</p>
        <p className="font-alte font-normal text-[13px] text-slate-500 leading-[1.4] tracking-[-0.04em] mt-0.5">{step.sub}</p>
      </div>
    </div>
  );
};

// Hero explainer infographic. Renders the page's core mechanism as an animated
// vertical flow, used in place of a stock hero image (real images are hard to
// source and weaker than an explainer of what the system actually does).
const HeroFlowExplainer: React.FC<{ steps: FlowStep[]; caption?: string }> = ({ steps, caption }) => {
  return (
    <div className="hidden lg:block relative">
      <div className="bg-[#F9F6F4] border border-[#e7e6e4] rounded-none p-8">
        <p className="font-geist text-[11px] font-normal tracking-[0.02em] uppercase text-slate-400 mb-6">
          {caption || "How it works"}
        </p>
        <div>
          {steps.map((step, i) => (
            <StepRow key={step.label} step={step} index={i} last={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroFlowExplainer;
