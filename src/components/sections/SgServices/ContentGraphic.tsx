"use client";

import { useEffect, useRef, useState } from "react";
import { ExampleChip } from "../AiVisibilityChecker/primitives";
import { motionOff } from "src/lib/motionOff";

type Row = {
  title: string;
  kind: string;
  /** order in which this row lights up (0 = never, 1 = first, 2 = second) */
  lights: number;
};

const ROWS: Row[] = [
  { title: "A guide", kind: "Guide", lights: 1 },
  { title: "A how-to", kind: "How-to", lights: 0 },
  { title: "A comparison", kind: "Comparison", lights: 2 },
  { title: "A checklist", kind: "Checklist", lights: 0 },
  { title: "A case study", kind: "Case study", lights: 0 },
];

const LOOP_MS = 7600;

const CitedTag = () => (
  <span className="inline-flex items-center gap-1 font-geist text-[10px] uppercase tracking-[0.02em] text-[#0A1128] border border-[#FCCA07] bg-[#FCCA07] px-1.5 py-[3px] leading-none">
    <svg
      className="w-2.5 h-2.5"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path d="M10 1.5l2.472 5.008 5.528.803-4 3.898.944 5.506L10 15.6l-4.944 2.615.944-5.506-4-3.898 5.528-.803L10 1.5z" />
    </svg>
    Cited by AI
  </span>
);

const CardInner = ({
  visibleRows,
  citedStage,
  converting,
}: {
  visibleRows: number;
  citedStage: number;
  converting: boolean;
}) => {
  const leadCount = ROWS.filter(
    (r) => r.lights > 0 && r.lights <= citedStage
  ).length;

  return (
    <div className="w-full max-w-[440px] mx-auto bg-white border border-[#e7e6e4] rounded-none p-5 sm:p-6 text-left">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-1">
        <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-500">
          Your content
        </p>
        <div className="relative">
          {/* Published chip (muted) */}
          <span
            className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500 border border-[#e7e6e4] bg-[#efeee9] px-2 py-1 leading-none transition-opacity duration-300"
            style={{ opacity: converting ? 0 : 1 }}
            aria-hidden={converting}
          >
            Published
          </span>
          {/* Cited & converting chip (yellow, focal) */}
          <span
            className="absolute inset-0 flex items-center justify-center whitespace-nowrap font-geist text-[10px] uppercase tracking-[0.02em] text-[#0A1128] border border-[#FCCA07] bg-[#FCCA07] px-2 py-1 leading-none transition-opacity duration-300"
            style={{ opacity: converting ? 1 : 0 }}
            aria-hidden={!converting}
          >
            Cited &amp; converting
          </span>
        </div>
      </div>

      <p className="font-alte text-[13px] text-slate-400 tracking-[-0.04em] mb-4 leading-[1.5]">
        Published, but who read it?
      </p>

      {/* Article stack */}
      <ul className="space-y-2.5">
        {ROWS.map((row, i) => {
          const shown = i < visibleRows;
          const cited = row.lights > 0 && row.lights <= citedStage;
          return (
            <li
              key={row.title}
              className="border rounded-none px-3 py-2.5 transition-colors duration-300"
              style={{
                opacity: shown ? 1 : 0.12,
                transform: shown ? "none" : "translateY(4px)",
                transition:
                  "opacity 300ms ease, transform 300ms ease, border-color 300ms ease, background-color 300ms ease",
                borderColor: cited ? "#FCCA07" : "#e7e6e4",
                backgroundColor: cited ? "rgba(252,202,7,0.08)" : "#ffffff",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: cited ? "#FCCA07" : "#cbd5e1" }}
                />
                <span
                  className="font-alte text-[15px] tracking-[-0.04em] flex-1 min-w-0 truncate"
                  style={{ color: cited ? "#0A1128" : "#94a3b8" }}
                >
                  {row.title}
                </span>
                <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400 flex-shrink-0">
                  {row.kind}
                </span>
              </div>

              {/* Resolution: cited + lead markers */}
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: cited ? 34 : 0,
                  opacity: cited ? 1 : 0,
                  marginTop: cited ? 8 : 0,
                }}
              >
                <div className="flex items-center gap-2 pl-[18px]">
                  <CitedTag />
                  <span className="inline-flex items-center font-geist text-[10px] uppercase tracking-[0.02em] text-[#0A1128] font-medium">
                    +1 lead
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Footer tally */}
      <div className="mt-4 pt-3 border-t border-[#e7e6e4] flex items-center justify-between">
        <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400">
          Not how much you publish
        </span>
        <span
          className="font-geist text-[11px] uppercase tracking-[0.02em] tabular-nums transition-colors duration-300"
          style={{ color: leadCount > 0 ? "#0A1128" : "#94a3b8" }}
        >
          {leadCount > 0 ? `${leadCount} cited, ${leadCount} leads` : "0 leads"}
        </span>
      </div>
    </div>
  );
};

export default function ContentGraphic({
  className = "",
}: {
  className?: string;
}) {
  const [visibleRows, setVisibleRows] = useState(0);
  const [citedStage, setCitedStage] = useState(0);
  const [converting, setConverting] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (motionOff()) {
      setVisibleRows(ROWS.length);
      setCitedStage(2);
      setConverting(true);
      return;
    }

    const start = performance.now();
    const tick = (now: number) => {
      const t = (now - start) % LOOP_MS;

      // Rows fill in one by one (muted, "published but inert")
      if (t < 600) setVisibleRows(0);
      else if (t < 1150) setVisibleRows(1);
      else if (t < 1600) setVisibleRows(2);
      else if (t < 2050) setVisibleRows(3);
      else if (t < 2500) setVisibleRows(4);
      else setVisibleRows(5);

      // Resolution: rows light up as cited + converting
      if (t < 3400) {
        setCitedStage(0);
        setConverting(false);
      } else if (t < 4700) {
        setCitedStage(1);
        setConverting(true);
      } else {
        setCitedStage(2);
        setConverting(true);
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className={className}>
      <CardInner
        visibleRows={visibleRows}
        citedStage={citedStage}
        converting={converting}
      />
      <div className="mt-3 flex justify-center">
        <ExampleChip />
      </div>
    </div>
  );
}
