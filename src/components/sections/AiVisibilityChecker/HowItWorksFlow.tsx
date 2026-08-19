"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { CATEGORIES, ENGINES, HOW } from "./copy";
import { EngineLogo } from "./EngineLogos";

const StepBody = ({
  index,
}: {
  index: number;
}) => {
  if (index === 0) {
    return (
      <div className="mt-4 border border-dashed border-[#e7e6e4] bg-[#F9F6F4] px-3 py-2">
        <p className="font-alte text-[13px] text-slate-400 tracking-[-0.04em]">
          yourwebsite.com
        </p>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="mt-4 flex flex-wrap gap-1.5">
        {ENGINES.map((name) => (
          <span
            key={name}
            className="font-geist text-[10px] uppercase tracking-[0.02em] text-[#0A1128] border border-[#e7e6e4] bg-white px-2 py-1 inline-flex items-center gap-1.5"
          >
            <EngineLogo name={name} className="w-3.5 h-3.5" />
            {name}
          </span>
        ))}
      </div>
    );
  }
  if (index === 2) {
    return (
      <div className="mt-4 flex flex-wrap gap-1.5">
        {CATEGORIES.map((name) => (
          <span
            key={name}
            className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-600 border border-[#e7e6e4] bg-[#F9F6F4] px-2 py-1"
          >
            {name}
          </span>
        ))}
      </div>
    );
  }
  return (
    <div className="mt-4 flex items-center gap-3">
      <span className="font-alte text-[22px] text-[#0A1128] tracking-[-0.04em]">
        62
      </span>
      <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-red-500">
        Grade D
      </span>
      <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400 border border-[#e7e6e4] px-1.5 py-0.5">
        Example
      </span>
    </div>
  );
};

const Node = ({
  index,
  delay,
  inView,
  hideNode = false,
}: {
  index: number;
  delay: number;
  inView: boolean;
  hideNode?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }
    const oc = animate(0, 1, {
      duration: 0.4,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        el.style.opacity = `${v}`;
      },
    });
    const yc = animate(10, 0, {
      duration: 0.4,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        el.style.transform = `translateY(${v}px)`;
      },
    });
    return () => {
      oc.stop();
      yc.stop();
    };
  }, [inView, delay]);

  const step = HOW.steps[index];

  return (
    <div
      ref={ref}
      className="relative"
      style={{ opacity: 0, transform: "translateY(10px)" }}
    >
      {!hideNode && (
        <span className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-geist text-[13px] bg-[#FCCA07] text-[#0A1128]">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <div className={hideNode ? "pr-2" : "mt-4 pr-2"}>
        <p className="font-alte text-[16px] sm:text-[17px] text-[#0A1128] tracking-[-0.04em] leading-[1.3] mb-2">
          {step.label}
        </p>
        <p className="font-alte text-[14px] text-slate-500 tracking-[-0.04em] leading-[1.5]">
          {step.sub}
        </p>
        <StepBody index={index} />
      </div>
    </div>
  );
};

const HowItWorksFlow = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const hLine = useRef<HTMLDivElement>(null);
  const vLine = useRef<HTMLDivElement>(null);
  const isInView = useInView(rootRef, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const run = (el: HTMLDivElement | null, axis: "x" | "y") => {
      if (!el) return;
      if (reduced) {
        el.style.transform = axis === "x" ? "scaleX(1)" : "scaleY(1)";
        return;
      }
      animate(0, 1, {
        duration: 0.9,
        ease: "easeOut",
        onUpdate: (v) => {
          el.style.transform = axis === "x" ? `scaleX(${v})` : `scaleY(${v})`;
        },
      });
    };
    run(hLine.current, "x");
    run(vLine.current, "y");
  }, [isInView]);

  return (
    <div
      ref={rootRef}
      className="mt-10"
      aria-label="How the AI visibility check works, four step timeline"
    >
      <div className="hidden lg:block relative pt-1">
        <div className="absolute top-5 left-[6%] right-[6%] h-px bg-[#e7e6e4]">
          <div
            ref={hLine}
            className="h-full bg-[#0A1128] origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
        <div className="grid grid-cols-4 gap-6">
          {HOW.steps.map((_, i) => (
            <Node key={HOW.steps[i].label} index={i} delay={i * 0.12} inView={isInView} />
          ))}
        </div>
      </div>

      <div className="lg:hidden relative pl-14">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[#e7e6e4]">
          <div
            ref={vLine}
            className="w-full h-full bg-[#0A1128] origin-top"
            style={{ transform: "scaleY(0)" }}
          />
        </div>
        <div className="space-y-10">
          {HOW.steps.map((_, i) => (
            <div key={HOW.steps[i].label} className="relative">
              <div className="absolute -left-14 top-0">
                <span className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-geist text-[13px] bg-[#FCCA07] text-[#0A1128]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <Node index={i} delay={i * 0.12} inView={isInView} hideNode />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksFlow;
