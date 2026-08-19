"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { EngineLogo } from "../AiVisibilityChecker/EngineLogos";

const ENGINES = [
  "ChatGPT",
  "Perplexity",
  "Google AI",
  "Gemini",
  "Grok",
  "Claude",
] as const;

const ENGINE_MS = 2000;
const FADE_MS = 180;

type Row = {
  rank: number;
  name: string;
  fill: number; // 0..1, competitor bar length
  focal?: boolean;
};

const ROWS: Row[] = [
  { rank: 1, name: "A known competitor", fill: 0.92 },
  { rank: 2, name: "A local firm", fill: 0.6 },
  { rank: 3, name: "A third name", fill: 0.35 },
  { rank: 4, name: "Your business", fill: 0, focal: true },
];

// A single competitor mentions bar that fills on scroll into view.
const MentionBar = ({ fill, delay }: { fill: number; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const el = ref.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.transform = `scaleX(${fill})`;
      return;
    }
    const controls = animate(0, fill, {
      duration: 0.8,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        el.style.transform = `scaleX(${v})`;
      },
    });
    return () => controls.stop();
  }, [isInView, fill, delay]);

  return (
    <div className="h-2.5 w-full bg-[#efeee9] rounded-none overflow-hidden">
      <div
        ref={ref}
        className="h-full w-full bg-[#0A1128] origin-left"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
};

const LeaderRow = ({ row, index }: { row: Row; index: number }) => {
  if (row.focal) {
    return (
      <div className="relative flex items-center gap-3 border-2 border-dashed border-[#FCCA07] bg-[#FFFDF4] px-3 py-3">
        {/* soft pulsing glow behind the focal row */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-px bg-[#FCCA07]/10 animate-pulse motion-reduce:animate-none"
        />
        <span
          aria-hidden
          className="relative z-10 flex h-7 w-7 flex-shrink-0 items-center justify-center bg-[#FCCA07] font-geist text-[13px] font-medium tabular-nums text-[#0A1128]"
        >
          {row.rank}
        </span>
        <div className="relative z-10 min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <span className="font-alte text-[15px] tracking-[-0.04em] text-[#0A1128] truncate">
              {row.name}
            </span>
            <span className="font-geist text-[9px] uppercase tracking-[0.02em] text-[#0A1128] bg-[#FCCA07] px-1.5 py-0.5 flex-shrink-0">
              not named yet
            </span>
          </div>
          {/* empty dashed yellow bar, stays at zero */}
          <div className="mt-2 h-2.5 w-full border border-dashed border-[#FCCA07] bg-white" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 border border-[#e7e6e4] bg-white px-3 py-3">
      <span
        aria-hidden
        className="flex h-7 w-7 flex-shrink-0 items-center justify-center bg-[#0A1128] font-geist text-[13px] font-medium tabular-nums text-white"
      >
        {row.rank}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="font-alte text-[15px] tracking-[-0.04em] text-[#0A1128] truncate">
            {row.name}
          </span>
          {row.rank === 1 && (
            <span className="font-geist text-[9px] uppercase tracking-[0.02em] text-slate-500 border border-[#e7e6e4] px-1.5 py-0.5 flex-shrink-0">
              named
            </span>
          )}
        </div>
        <div className="mt-2">
          <MentionBar fill={row.fill} delay={0.15 + index * 0.12} />
        </div>
      </div>
    </div>
  );
};

const AeoAnswerCardB = ({ className = "" }: { className?: string }) => {
  const [engineIndex, setEngineIndex] = useState(0);
  const [engineFade, setEngineFade] = useState(true);
  const [reduced, setReduced] = useState(false);

  const engineRef = useRef(0);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setReduced(true);
      return;
    }

    const engineTimer = setInterval(() => {
      setEngineFade(false);
      timeouts.current.push(
        setTimeout(() => {
          engineRef.current = (engineRef.current + 1) % ENGINES.length;
          setEngineIndex(engineRef.current);
          setEngineFade(true);
        }, FADE_MS),
      );
    }, ENGINE_MS);

    return () => {
      clearInterval(engineTimer);
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
    };
  }, []);

  const engineName = ENGINES[engineIndex];

  return (
    <div className={`w-full max-w-[440px] mx-auto ${className}`}>
      <div className="w-full bg-white border border-[#e7e6e4] rounded-none">
        {/* Header: ranking label + rotating engine chip */}
        <div className="flex items-center justify-between border-b border-[#e7e6e4] px-4 py-3">
          <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500">
            Who AI names
          </span>
          <span
            className="inline-flex items-center gap-1.5 border border-[#e7e6e4] bg-white px-2 py-1 transition-opacity duration-200 ease-out motion-reduce:transition-none"
            style={{ opacity: reduced ? 1 : engineFade ? 1 : 0 }}
          >
            <span
              aria-hidden
              className="flex h-4 w-4 items-center justify-center bg-white"
            >
              <EngineLogo name={engineName} className="w-4 h-4" />
            </span>
            <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-[#0A1128]">
              {engineName}
            </span>
          </span>
        </div>

        {/* Body */}
        <div className="px-4 py-4">
          <p className="font-alte text-[14px] leading-[1.45] tracking-[-0.04em] text-slate-500 mb-4">
            When buyers ask who to hire, here is who gets named.
          </p>

          <div className="space-y-2.5">
            {ROWS.map((row, i) => (
              <LeaderRow key={row.rank} row={row} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AeoAnswerCardB;
