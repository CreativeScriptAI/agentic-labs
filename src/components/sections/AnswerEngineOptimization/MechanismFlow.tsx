"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { MECHANISM } from "./copy";
import { EngineLogo } from "../AiVisibilityChecker/EngineLogos";

// Flagship infographic for the "how AI answers pick names" section. Lives on a
// dark panel (#0A1128), so text is white/slate and logo tiles get a white
// background. Animation uses the imperative framer-motion pattern gated by
// useInView, because whileInView does not fire reliably in this app. Respects
// prefers-reduced-motion by snapping to the final state. No dashes anywhere.

type Stage = {
  n: string;
  label: string;
  caption: string;
};

const STAGES: Stage[] = [
  {
    n: "01",
    label: "Buyer asks",
    caption: "A question goes to the AI.",
  },
  {
    n: "02",
    label: "Engine searches its index",
    caption: "It runs one or more searches.",
  },
  {
    n: "03",
    label: "Retrieves + reranks",
    caption: "Pulls candidate pages, ranks them.",
  },
  {
    n: "04",
    label: "Writes answer, cites a few",
    caption: "Names two or three sources.",
  },
];

// Short source chip per engine, derived from MECHANISM.engines text. We keep to
// exactly these four claims and invent nothing further.
const SOURCE_BY_ENGINE: Record<string, string> = {
  ChatGPT: "Bing index",
  Perplexity: "Live web",
  "Google AI": "Google index",
  Gemini: "Google index",
};

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Numbered node square. Adds a repeating glow when `pulse` is set (the final
// "cites" node), unless reduced motion is requested.
const NumberSquare = ({
  n,
  pulse = false,
  inView,
  delay,
}: {
  n: string;
  pulse?: boolean;
  inView: boolean;
  delay: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!pulse || !inView || !ref.current) return;
    const el = ref.current;
    if (reducedMotion()) return;
    const pc = animate(1, 0, {
      duration: 1.6,
      delay: delay + 0.5,
      ease: "easeOut",
      repeat: Infinity,
      repeatDelay: 0.4,
      onUpdate: (v) => {
        el.style.boxShadow = `0 0 0 ${(1 - v) * 8}px rgba(252, 202, 7, ${
          v * 0.5
        })`;
      },
    });
    return () => {
      pc.stop();
      el.style.boxShadow = "none";
    };
  }, [pulse, inView, delay]);

  return (
    <span
      ref={ref}
      className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-none bg-[#FCCA07] font-geist text-[13px] uppercase tracking-[0.02em] text-[#0A1128]"
    >
      {n}
    </span>
  );
};

// One stage: reveals (opacity + slide) once in view. `hideSquare` omits the
// number square so the mobile column can position it on the vertical line.
const StageNode = ({
  stage,
  index,
  inView,
  isFinal,
  hideSquare = false,
}: {
  stage: Stage;
  index: number;
  inView: boolean;
  isFinal?: boolean;
  hideSquare?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const delay = index * 0.16;

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    if (reducedMotion()) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }
    const oc = animate(0, 1, {
      duration: 0.45,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        el.style.opacity = `${v}`;
      },
    });
    const yc = animate(12, 0, {
      duration: 0.45,
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
      style={{ opacity: 0, transform: "translateY(12px)" }}
    >
      {!hideSquare && (
        <NumberSquare
          n={stage.n}
          pulse={isFinal}
          inView={inView}
          delay={delay}
        />
      )}
      <div className={hideSquare ? "pr-2" : "mt-4 pr-2"}>
        <p className="mb-2 font-alte text-[16px] leading-[1.3] tracking-[-0.04em] text-white sm:text-[17px]">
          {stage.label}
        </p>
        <p className="font-alte text-[14px] leading-[1.5] tracking-[-0.04em] text-slate-400">
          {stage.caption}
        </p>
      </div>
    </div>
  );
};

const MechanismFlow = ({ className = "" }: { className?: string }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const hLine = useRef<HTMLDivElement>(null);
  const vLine = useRef<HTMLDivElement>(null);
  const isInView = useInView(rootRef, { once: true, margin: "-40px" });

  // Draw the connecting line (horizontal on sm+, vertical on mobile).
  useEffect(() => {
    if (!isInView) return;
    const reduced = reducedMotion();
    const run = (el: HTMLDivElement | null, axis: "x" | "y") => {
      if (!el) return;
      if (reduced) {
        el.style.transform = axis === "x" ? "scaleX(1)" : "scaleY(1)";
        return;
      }
      return animate(0, 1, {
        duration: 0.9,
        ease: "easeOut",
        onUpdate: (v) => {
          el.style.transform = axis === "x" ? `scaleX(${v})` : `scaleY(${v})`;
        },
      });
    };
    const a = run(hLine.current, "x");
    const b = run(vLine.current, "y");
    return () => {
      a?.stop();
      b?.stop();
    };
  }, [isInView]);

  return (
    <div
      ref={rootRef}
      className={`w-full ${className}`}
      aria-label="How an AI answer engine decides who to cite, a four stage pipeline"
    >
      {/* PART A: four stage flow. Horizontal on sm+ */}
      <div className="relative hidden pt-1 sm:block">
        <div className="absolute left-[10%] right-[10%] top-5 h-px bg-white/10">
          <div
            ref={hLine}
            className="h-full origin-left bg-[#FCCA07]"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
        <div className="grid grid-cols-4 gap-5">
          {STAGES.map((stage, i) => (
            <StageNode
              key={stage.n}
              stage={stage}
              index={i}
              inView={isInView}
              isFinal={i === STAGES.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Vertical stack on mobile */}
      <div className="relative pl-14 sm:hidden">
        <div className="absolute bottom-2 left-[19px] top-2 w-px bg-white/10">
          <div
            ref={vLine}
            className="h-full w-full origin-top bg-[#FCCA07]"
            style={{ transform: "scaleY(0)" }}
          />
        </div>
        <div className="space-y-9">
          {STAGES.map((stage, i) => (
            <div key={stage.n} className="relative">
              <div className="absolute -left-14 top-0">
                <NumberSquare
                  n={stage.n}
                  pulse={i === STAGES.length - 1}
                  inView={isInView}
                  delay={i * 0.16}
                />
              </div>
              <StageNode
                stage={stage}
                index={i}
                inView={isInView}
                isFinal={i === STAGES.length - 1}
                hideSquare
              />
            </div>
          ))}
        </div>
      </div>

      {/* PART B: where each engine retrieves from */}
      <div className="mt-12 border-t border-white/10 pt-8">
        <p className="mb-5 font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400">
          Where each engine retrieves from
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {MECHANISM.engines.map((e) => (
            <div
              key={e.name}
              className="flex flex-col gap-3 rounded-none border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-none bg-white">
                  <EngineLogo name={e.name} className="w-5 h-5" />
                </span>
                <span className="font-alte text-[15px] tracking-[-0.04em] text-white">
                  {e.name}
                </span>
              </div>
              <span className="inline-flex w-fit items-center rounded-none border border-white/10 px-2 py-1 font-geist text-[10px] uppercase tracking-[0.02em] text-slate-300">
                {SOURCE_BY_ENGINE[e.name] ?? "Web index"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MechanismFlow;
