"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import {
  buildMockScan,
  type EngineStatus,
  type VisibilityEngine,
} from "src/lib/runVisibilityScan";
import { ENGINES, TRACK } from "./copy";
import { EmptySeat, engineStatusMeta, ExampleChip } from "./primitives";
import { EngineBadge } from "./EngineLogos";

const MiniMeter = ({ score, delay }: { score: number; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const el = ref.current;
    const target = score / 100;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.transform = `scaleX(${target})`;
      return;
    }
    const controls = animate(0, target, {
      duration: 0.7,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        el.style.transform = `scaleX(${v})`;
      },
    });
    return () => controls.stop();
  }, [isInView, score, delay]);

  const tone =
    score >= 80 ? "bg-emerald-500" : score >= 60 ? "bg-amber-500" : "bg-red-500";

  return (
    <div className="h-1.5 w-full bg-[#efeee9] rounded-none overflow-hidden">
      <div
        ref={ref}
        className={`h-full w-full ${tone} origin-left`}
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
};

const linkStyle = (status: EngineStatus) => {
  if (status === "named") {
    return { stroke: "#059669", dash: "0", opacity: 1 };
  }
  if (status === "mentioned") {
    return { stroke: "#d97706", dash: "6 6", opacity: 0.95 };
  }
  return { stroke: "#ef4444", dash: "3 7", opacity: 0.35 };
};

const ShareMeter = ({ shownIn, outOf }: { shownIn: number; outOf: number }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(barRef, { once: true, margin: "-20px" });
  const youPct = shownIn / outOf;

  useEffect(() => {
    if (!isInView || !barRef.current) return;
    const el = barRef.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.transform = `scaleX(${youPct})`;
      return;
    }
    const controls = animate(0, youPct, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate: (v) => {
        el.style.transform = `scaleX(${v})`;
      },
    });
    return () => controls.stop();
  }, [isInView, youPct]);

  return (
    <div className="bg-white border border-[#e7e6e4] rounded-none p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400">
          Share of voice
        </p>
        <ExampleChip />
      </div>
      <div className="h-2.5 w-full bg-[#efeee9] rounded-none overflow-hidden">
        <div
          ref={barRef}
          className="h-full w-full bg-[#0A1128] origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 mt-3">
        <p className="font-alte text-[14px] text-[#0A1128] tracking-[-0.04em]">
          You appear in {shownIn} of {outOf}
        </p>
        <p className="font-alte text-[14px] text-slate-500 tracking-[-0.04em]">
          Competitors take the other {outOf - shownIn}
        </p>
      </div>
    </div>
  );
};

const OrbitalDesktop = ({ engines }: { engines: VisibilityEngine[] }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapRef, { once: true, margin: "-40px" });
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);

  useEffect(() => {
    if (!isInView) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    lineRefs.current.forEach((line, i) => {
      if (!line) return;
      const target = Number(line.dataset.opacity || "1");
      if (reduced) {
        line.style.opacity = `${target}`;
        return;
      }
      line.style.opacity = "0";
      animate(0, target, {
        duration: 0.55,
        delay: 0.1 + i * 0.08,
        ease: "easeOut",
        onUpdate: (v) => {
          line.style.opacity = `${v}`;
        },
      });
    });
  }, [isInView]);

  const size = 420;
  const cx = 210;
  const cy = 210;
  const r = 148;

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto hidden sm:block"
      style={{ width: "min(100%, 420px)", aspectRatio: "1" }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        {engines.map((engine, i) => {
          const angle = ((i * 60 - 90) * Math.PI) / 180;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle);
          const style = linkStyle(engine.status);
          return (
            <line
              key={engine.name}
              ref={(el) => {
                lineRefs.current[i] = el;
              }}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke={style.stroke}
              strokeWidth="2"
              strokeDasharray={style.dash === "0" ? undefined : style.dash}
              data-opacity={String(style.opacity)}
              opacity={0}
            />
          );
        })}
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[108px] text-center">
        <div className="border border-dashed border-[#FCCA07] bg-[#0A1128] px-3 py-3 animate-pulse motion-reduce:animate-none">
          <p className="font-geist text-[10px] uppercase tracking-[0.08em] text-[#FCCA07]">
            You
          </p>
          <p className="font-alte text-[13px] text-white tracking-[-0.04em] mt-1 leading-[1.2]">
            Your business?
          </p>
        </div>
      </div>

      {engines.map((engine, i) => {
        const angle = ((i * 60 - 90) * Math.PI) / 180;
        const x = 50 + 35.5 * Math.cos(angle);
        const y = 50 + 35.5 * Math.sin(angle);
        const meta = engineStatusMeta[engine.status];
        return (
          <div
            key={engine.name}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-[108px]"
            style={{ left: `${x}%`, top: `${y}%` }}
            title={`${engine.name}: ${meta.label}`}
          >
            <div className={`border rounded-none bg-white px-2 py-2 ${meta.wrap}`}>
              <div className="flex items-center gap-1.5">
                <EngineBadge
                  name={engine.name}
                  className="w-6 h-5"
                  logoClassName="w-3.5 h-3.5"
                />
                <p className="font-geist text-[9px] uppercase tracking-[0.02em] text-[#0A1128] truncate">
                  {engine.name}
                </p>
              </div>
              <p className={`font-alte text-[11px] tracking-[-0.04em] mt-1 ${meta.text}`}>
                {meta.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const OrbitalMobile = ({ engines }: { engines: VisibilityEngine[] }) => (
  <div className="sm:hidden space-y-2">
    {engines.map((engine) => {
      const meta = engineStatusMeta[engine.status];
      const style = linkStyle(engine.status);
      return (
        <div
          key={engine.name}
          className="flex items-center gap-3 bg-white border border-[#e7e6e4] rounded-none px-3 py-3"
        >
          <EngineBadge
            name={engine.name}
            className="w-8 h-7"
            logoClassName="w-4 h-4"
          />
          <div className="min-w-0 flex-1">
            <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-[#0A1128]">
              {engine.name}
            </p>
            <p className={`font-alte text-[13px] tracking-[-0.04em] ${meta.text}`}>
              {meta.label}
            </p>
          </div>
          <svg width="36" height="12" viewBox="0 0 36 12" aria-hidden>
            <line
              x1="0"
              y1="6"
              x2="36"
              y2="6"
              stroke={style.stroke}
              strokeWidth="2"
              strokeDasharray={style.dash === "0" ? undefined : style.dash}
              opacity={style.opacity}
            />
          </svg>
        </div>
      );
    })}
  </div>
);

const WhatWeTrackLayers = () => {
  const sample = buildMockScan("example.com");
  const ordered = ENGINES.map(
    (name) => sample.ai.engines.find((e) => e.name === name)!
  );

  return (
    <div className="mt-10" aria-label="Two layers of what we track">
      <div className="relative bg-white border border-[#e7e6e4] rounded-none p-5 sm:p-8 overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div>
            <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-red-500 mb-1">
              Layer 2. Outcome
            </p>
            <p className="font-alte text-[16px] sm:text-[18px] text-[#0A1128] tracking-[-0.04em] leading-[1.3]">
              {TRACK.layer2}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <ExampleChip />
            <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-amber-700 border border-amber-200 bg-amber-50 px-2 py-1">
              Included, rolling out
            </span>
          </div>
        </div>

        <ShareMeter shownIn={sample.ai.shownIn} outOf={sample.ai.outOf} />
        <div className="mt-6">
          <OrbitalDesktop engines={ordered} />
          <OrbitalMobile engines={ordered} />
        </div>
        <div className="mt-5 max-w-sm mx-auto sm:hidden">
          <EmptySeat />
        </div>
      </div>

      <div className="flex flex-col items-center py-3" aria-hidden>
        <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400 mb-1">
          Foundation supports the answer
        </p>
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
          <path d="M12 28V8" stroke="#FCCA07" strokeWidth="2" />
          <path d="M4 16l8-8 8 8" stroke="#FCCA07" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="relative bg-[#0A1128] rounded-none p-5 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div>
            <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-[#FCCA07] mb-1">
              Layer 1. Foundation, live
            </p>
            <p className="font-alte text-[16px] sm:text-[18px] text-white tracking-[-0.04em] leading-[1.3]">
              {TRACK.layer1}
            </p>
          </div>
          <ExampleChip className="!bg-transparent !text-white/70 !border-white/20" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {sample.site.categories.map((cat, i) => (
            <div
              key={cat.key}
              className="border border-white/10 bg-white/[0.04] rounded-none p-4"
            >
              <div className="flex items-baseline justify-between gap-2 mb-3">
                <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-white/70">
                  {cat.key}
                </p>
                <p className="font-alte text-[18px] text-white tracking-[-0.04em]">
                  {cat.score}
                </p>
              </div>
              <MiniMeter score={cat.score} delay={i * 0.07} />
              <p className="font-alte text-[12px] text-white/50 tracking-[-0.04em] leading-[1.4] mt-3">
                {cat.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeTrackLayers;
