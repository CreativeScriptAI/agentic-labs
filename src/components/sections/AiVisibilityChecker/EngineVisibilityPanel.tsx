"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import {
  buildMockScan,
  engineTeaserLine,
  type VisibilityEngine,
  type VisibilityScanResult,
} from "src/lib/runVisibilityScan";
import { BUYER_QUESTION } from "./copy";
import { CheckSvg, engineStatusMeta, ExampleChip, XSvg } from "./primitives";
import { EngineBadge } from "./EngineLogos";

const EngineMark = ({ name }: { name: string }) => (
  <EngineBadge name={name} className="w-9 h-8" logoClassName="w-5 h-5" />
);

const EngineCard = ({
  engine,
  delay,
  detailed = false,
}: {
  engine: VisibilityEngine;
  delay: number;
  detailed?: boolean;
}) => {
  const meta = engineStatusMeta[engine.status];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;
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
  }, [isInView, delay]);

  return (
    <div
      ref={ref}
      className={`rounded-none border p-4 sm:p-5 ${meta.wrap}`}
      style={{ opacity: 0, transform: "translateY(10px)" }}
    >
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <EngineMark name={engine.name} />
          <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-[#0A1128] truncate">
            {engine.name}
          </p>
        </div>
        <span
          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white ${meta.dot}`}
        >
          {engine.status === "absent" ? (
            <XSvg className="w-3 h-3" />
          ) : (
            <CheckSvg className="w-3 h-3" />
          )}
        </span>
      </div>
      <p className={`font-alte text-[14px] tracking-[-0.04em] leading-[1.35] ${meta.text}`}>
        {meta.label}
      </p>
      <p className="font-alte text-[13px] text-slate-600 tracking-[-0.04em] leading-[1.4] mt-1">
        {engineTeaserLine(engine)}
      </p>
      {detailed ? (
        <p className="font-alte text-[13px] text-slate-500 tracking-[-0.04em] leading-[1.4] mt-2">
          For the buyer question &ldquo;{BUYER_QUESTION}&rdquo;
          {engine.namedInstead?.length
            ? `, they name ${engine.namedInstead.join(", ")} instead.`
            : engine.status !== "absent"
              ? ", you appear in the answer."
              : "."}
        </p>
      ) : engine.namedInstead?.length ? (
        <p className="mt-3 inline-flex max-w-full items-center font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500 border border-[#e7e6e4] bg-white px-2 py-1">
          Named instead: {engine.namedInstead.join(", ")}
        </p>
      ) : null}
    </div>
  );
};

const ShareOfVoice = ({
  shownIn,
  outOf,
}: {
  shownIn: number;
  outOf: number;
}) => {
  const youPct = Math.round((shownIn / outOf) * 100);
  const barRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(barRef, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView || !barRef.current) return;
    const el = barRef.current;
    const target = youPct / 100;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.transform = `scaleX(${target})`;
      return;
    }
    const controls = animate(0, target, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate: (v) => {
        el.style.transform = `scaleX(${v})`;
      },
    });
    return () => controls.stop();
  }, [isInView, youPct]);

  return (
    <div className="mt-6 bg-white border border-[#e7e6e4] rounded-none p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400">
          Share of voice across six engines
        </p>
        <ExampleChip />
      </div>
      <div className="h-3 w-full bg-[#efeee9] rounded-none overflow-hidden flex">
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

type Props = {
  result?: VisibilityScanResult;
  compact?: boolean;
  detailed?: boolean;
};

const EngineVisibilityPanel = ({
  result,
  compact = false,
  detailed = false,
}: Props) => {
  const data = result ?? buildMockScan("example.com");
  const engines = data.ai.engines;

  return (
    <div
      className={compact ? "" : "mt-8"}
      aria-label="Six engine AI visibility panel, example data"
    >
      {!compact && (
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400">
            Six engines your buyers ask
          </p>
          <ExampleChip />
          {data.ai.rollingOut ? (
            <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-amber-700 border border-amber-200 bg-amber-50 px-2 py-0.5">
              Included, rolling out
            </span>
          ) : null}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {engines.map((engine, i) => (
          <EngineCard
            key={engine.name}
            engine={engine}
            delay={i * 0.06}
            detailed={detailed}
          />
        ))}
      </div>
      <ShareOfVoice shownIn={data.ai.shownIn} outOf={data.ai.outOf} />
    </div>
  );
};

export default EngineVisibilityPanel;
