"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { motionOff } from "src/lib/motionOff";
import { COMPARE } from "./copy";

type OptionKey = "software" | "agency" | "inhouse" | "fde";

type OptionMeta = {
  key: OptionKey;
  header: string;
  note: string;
  focal: boolean;
};

// Column order mirrors COMPARE.columns (index 0 is the empty criterion header).
const OPTIONS: OptionMeta[] = [
  { key: "software", header: COMPARE.columns[1], note: "Fastest to buy", focal: false },
  { key: "agency", header: COMPARE.columns[2], note: "Off your plate", focal: false },
  { key: "inhouse", header: COMPARE.columns[3], note: "Best end state", focal: false },
  { key: "fde", header: COMPARE.columns[4], note: "Built to hand over", focal: true },
];

function useReveal(index: number) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    const el = ref.current;
    if (!inView || !el) return;

    if (motionOff()) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    el.style.opacity = "0";
    el.style.transform = "translateY(14px)";
    const controls = animate(0, 1, {
      duration: 0.5,
      ease: "easeOut",
      delay: index * 0.08,
      onUpdate: (v) => {
        el.style.opacity = String(v);
        el.style.transform = `translateY(${(1 - v) * 14}px)`;
      },
    });
    return () => controls.stop();
  }, [inView, index]);

  return ref;
}

/* Desktop: one focal-aware column of the matrix. */
function DesktopColumn({ option, index }: { option: OptionMeta; index: number }) {
  const ref = useReveal(index);
  return (
    <div
      ref={ref}
      style={{ opacity: 0 }}
      className={[
        "flex flex-col border-l border-[#e7e6e4]",
        option.focal ? "bg-[#FCCA07]/[0.06]" : "bg-white",
      ].join(" ")}
    >
      <div
        className={[
          "px-5 pt-5 pb-4 border-b border-[#e7e6e4]",
          option.focal ? "border-t-2 border-t-[#FCCA07]" : "border-t-2 border-t-transparent",
        ].join(" ")}
      >
        <div className="flex items-start justify-between gap-2">
          <span className="font-geist uppercase tracking-[0.02em] text-[13px] leading-tight text-[#0A1128]">
            {option.header}
          </span>
          {option.focal && (
            <span
              aria-hidden
              className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#FCCA07]"
            />
          )}
        </div>
        <span className="mt-2 block font-geist uppercase tracking-[0.02em] text-[10px] text-slate-400">
          {option.note}
        </span>
      </div>
      {COMPARE.rows.map((row) => (
        <div
          key={row.label}
          className="px-5 py-4 border-b border-[#e7e6e4] last:border-b-0 flex-1"
        >
          <p className="font-alte tracking-[-0.04em] text-[14px] leading-[1.45] text-slate-600">
            {row[option.key]}
          </p>
        </div>
      ))}
    </div>
  );
}

/* Mobile: one card per option, criteria as label/value pairs. */
function MobileCard({ option, index }: { option: OptionMeta; index: number }) {
  const ref = useReveal(index);
  return (
    <div
      ref={ref}
      style={{ opacity: 0 }}
      className={[
        "border border-[#e7e6e4]",
        option.focal ? "border-t-2 border-t-[#FCCA07] bg-[#FCCA07]/[0.06]" : "bg-white",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-2 px-5 py-4 border-b border-[#e7e6e4]">
        <div>
          <span className="font-geist uppercase tracking-[0.02em] text-[13px] text-[#0A1128]">
            {option.header}
          </span>
          <span className="mt-1 block font-geist uppercase tracking-[0.02em] text-[10px] text-slate-400">
            {option.note}
          </span>
        </div>
        {option.focal && (
          <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#FCCA07]" />
        )}
      </div>
      <dl className="divide-y divide-[#e7e6e4]">
        {COMPARE.rows.map((row) => (
          <div key={row.label} className="px-5 py-3">
            <dt className="font-geist uppercase tracking-[0.02em] text-[10px] text-slate-400">
              {row.label}
            </dt>
            <dd className="mt-1 font-alte tracking-[-0.04em] text-[14px] leading-[1.45] text-slate-600">
              {row[option.key]}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function ModelsCompare({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      {/* Desktop matrix */}
      <div className="hidden md:block">
        <div className="overflow-x-auto border border-[#e7e6e4] bg-white">
          <div className="grid min-w-[720px] grid-cols-[minmax(150px,0.9fr)_repeat(4,1fr)]">
            {/* Row-label rail */}
            <div className="flex flex-col bg-white">
              <div className="px-5 pt-5 pb-4 border-b border-[#e7e6e4] border-t-2 border-t-transparent">
                <span className="font-geist uppercase tracking-[0.02em] text-[10px] text-slate-400">
                  Compared honestly
                </span>
              </div>
              {COMPARE.rows.map((row) => (
                <div
                  key={row.label}
                  className="px-5 py-4 border-b border-[#e7e6e4] last:border-b-0 flex-1 flex items-start"
                >
                  <span className="font-geist uppercase tracking-[0.02em] text-[12px] leading-tight text-[#0A1128]">
                    {row.label}
                  </span>
                </div>
              ))}
            </div>
            {OPTIONS.map((option, i) => (
              <DesktopColumn key={option.key} option={option} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile stacked cards */}
      <div className="md:hidden space-y-4">
        {OPTIONS.map((option, i) => (
          <MobileCard key={option.key} option={option} index={i} />
        ))}
      </div>

      <p className="mt-6 font-alte tracking-[-0.04em] text-[14px] leading-[1.5] text-slate-500">
        {COMPARE.foot}
      </p>
    </div>
  );
}
