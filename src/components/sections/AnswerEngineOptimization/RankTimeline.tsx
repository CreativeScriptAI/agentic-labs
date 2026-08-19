"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { CHATGPT } from "./copy";
import { EngineLogo } from "../AiVisibilityChecker/EngineLogos";

type Step = { n: string; title: string; body: string };

const STEPS = CHATGPT.steps as ReadonlyArray<Step>;

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const RankTimeline = ({ className = "" }: { className?: string }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapRef, { once: true, margin: "-40px" });

  // Two spines (horizontal desktop, vertical mobile) and one wrapper per node.
  const spineHRef = useRef<HTMLDivElement>(null);
  const spineVRef = useRef<HTMLDivElement>(null);
  // Separate arrays: both layouts mount, so a shared array would collide.
  const nodeRefsMobile = useRef<(HTMLLIElement | null)[]>([]);
  const nodeRefsDesktop = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (!isInView) return;
    const reduced = prefersReduced();
    const controls: { stop: () => void }[] = [];

    const spines = [
      { el: spineHRef.current, axis: "scaleX" as const },
      { el: spineVRef.current, axis: "scaleY" as const },
    ];

    // Draw the spine in first, then reveal the nodes in sequence on top of it.
    spines.forEach(({ el, axis }) => {
      if (!el) return;
      if (reduced) {
        el.style.transform = `${axis}(1)`;
        return;
      }
      el.style.transform = `${axis}(0)`;
      controls.push(
        animate(0, 1, {
          duration: 0.7,
          ease: "easeInOut",
          onUpdate: (v) => {
            el.style.transform = `${axis}(${v})`;
          },
        })
      );
    });

    const revealNode = (el: HTMLLIElement | null, i: number) => {
      if (!el) return;
      if (reduced) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0px)";
        return;
      }
      el.style.opacity = "0";
      el.style.transform = "translateY(14px)";
      controls.push(
        animate(0, 1, {
          duration: 0.5,
          delay: 0.2 + i * 0.12,
          ease: "easeOut",
          onUpdate: (v) => {
            el.style.opacity = `${v}`;
            el.style.transform = `translateY(${(1 - v) * 14}px)`;
          },
        })
      );
    };

    nodeRefsMobile.current.forEach(revealNode);
    nodeRefsDesktop.current.forEach(revealNode);

    return () => controls.forEach((c) => c.stop());
  }, [isInView]);

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      {/* MOBILE: vertical timeline */}
      <div className="sm:hidden relative pl-14">
        {/* vertical spine */}
        <div
          aria-hidden
          className="absolute left-[27px] top-3 bottom-3 w-px bg-[#e7e6e4] origin-top"
          ref={spineVRef}
          style={{ transform: "scaleY(0)" }}
        />
        <ol className="space-y-6">
          {STEPS.map((step, i) => {
            const isFirst = i === 0;
            return (
              <li
                key={step.n}
                ref={(el) => {
                  nodeRefsMobile.current[i] = el;
                }}
                className="relative"
                style={{ opacity: 0 }}
              >
                {/* node badge on the spine */}
                <div className="absolute -left-14 top-0">
                  <div
                    className={`relative flex items-center justify-center w-14 h-14 bg-[#FCCA07] rounded-none ${
                      isFirst ? "ring-2 ring-offset-2 ring-offset-[#F9F6F4] ring-[#FCCA07]" : ""
                    }`}
                  >
                    <span className="font-geist text-[16px] font-medium text-[#0A1128] tracking-[0.02em]">
                      {step.n}
                    </span>
                    {isFirst && (
                      <span
                        aria-hidden
                        className="absolute -right-2 -top-2 flex items-center justify-center w-6 h-6 bg-white border border-[#e7e6e4] rounded-none"
                      >
                        <EngineLogo name="ChatGPT" className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </div>
                <NodeCard step={step} isFirst={isFirst} />
              </li>
            );
          })}
        </ol>
      </div>

      {/* DESKTOP: horizontal timeline */}
      <div className="hidden sm:block relative">
        {/* horizontal spine, aligned with node badge centers (top-7 => center of 14 tall badge) */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-7 h-px bg-[#e7e6e4] origin-left"
          ref={spineHRef}
          style={{ transform: "scaleX(0)" }}
        />
        <ol className="grid grid-cols-4 gap-5">
          {STEPS.map((step, i) => {
            const isFirst = i === 0;
            return (
              <li
                key={step.n}
                ref={(el) => {
                  nodeRefsDesktop.current[i] = el;
                }}
                className="relative flex flex-col"
                style={{ opacity: 0 }}
              >
                <div className="relative flex mb-5">
                  <div
                    className={`relative flex items-center justify-center w-14 h-14 bg-[#FCCA07] rounded-none ${
                      isFirst ? "ring-2 ring-offset-2 ring-offset-[#F9F6F4] ring-[#FCCA07]" : ""
                    }`}
                  >
                    <span className="font-geist text-[16px] font-medium text-[#0A1128] tracking-[0.02em]">
                      {step.n}
                    </span>
                    {isFirst && (
                      <span
                        aria-hidden
                        className="absolute -right-2 -top-2 flex items-center justify-center w-6 h-6 bg-white border border-[#e7e6e4] rounded-none"
                      >
                        <EngineLogo name="ChatGPT" className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </div>
                <NodeCard step={step} isFirst={isFirst} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

const NodeCard = ({ step, isFirst }: { step: Step; isFirst: boolean }) => (
  <div
    className={`bg-white rounded-none p-4 sm:p-5 h-full ${
      isFirst ? "border-2 border-[#FCCA07]" : "border border-[#e7e6e4]"
    }`}
  >
    {isFirst && (
      <p className="font-geist text-[10px] uppercase tracking-[0.02em] text-[#0A1128]/60 mb-2">
        Prerequisite
      </p>
    )}
    <h3 className="font-alte text-[16px] sm:text-[17px] text-[#0A1128] tracking-[-0.04em] leading-[1.25]">
      {step.title}
    </h3>
    <p className="font-alte text-[13px] sm:text-[14px] text-[#0A1128]/70 tracking-[-0.04em] leading-[1.5] mt-2">
      {step.body}
    </p>
  </div>
);

export default RankTimeline;
