"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { JOURNEY } from "./copy";

const JourneyStrip = () => {
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
        duration: 0.85,
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
      aria-label="Four stage lead journey, you are at get found and capture"
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
          {JOURNEY.stages.map((stage, i) => (
            <Stage
              key={stage.label}
              index={i}
              stage={stage}
              delay={i * 0.1}
              inView={isInView}
            />
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
          {JOURNEY.stages.map((stage, i) => (
            <div key={stage.label} className="relative">
              <div className="absolute -left-14 top-0">
                <span
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-geist text-[13px] ${
                    stage.here
                      ? "bg-[#FCCA07] text-[#0A1128]"
                      : "bg-white border border-[#e7e6e4] text-slate-500"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <Stage
                index={i}
                stage={stage}
                delay={i * 0.1}
                inView={isInView}
                hideNode
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Stage = ({
  index,
  stage,
  delay,
  inView,
  hideNode = false,
}: {
  index: number;
  stage: (typeof JOURNEY.stages)[number];
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

  return (
    <div
      ref={ref}
      className="relative"
      style={{ opacity: 0, transform: "translateY(10px)" }}
    >
      {!hideNode && (
        <span
          className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-geist text-[13px] ${
            stage.here
              ? "bg-[#FCCA07] text-[#0A1128]"
              : "bg-white border border-[#e7e6e4] text-slate-500"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <div className={hideNode ? "pr-2" : "mt-4 pr-2"}>
        {stage.here && (
          <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-red-500 mb-2">
            You are here
          </p>
        )}
        <p className="font-alte text-[16px] sm:text-[17px] text-[#0A1128] tracking-[-0.04em] leading-[1.3] mb-2">
          {stage.label}
        </p>
        <p className="font-alte text-[14px] text-slate-500 tracking-[-0.04em] leading-[1.5]">
          {stage.sub}
        </p>
      </div>
    </div>
  );
};

export default JourneyStrip;
