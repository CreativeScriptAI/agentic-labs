"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { DEFINITION } from "./copy";

// Pull the three definitions straight from copy so wording stays consistent.
// terms[0] = AEO, terms[1] = GEO, terms[2] = AI SEO.
const AEO = DEFINITION.terms[0];
const GEO = DEFINITION.terms[1];
const AISEO = DEFINITION.terms[2];

// First sentence of each def, used as a short caption without rewriting copy.
const firstSentence = (s: string) => s.split(". ")[0];

// The page card's lines. "highlight" rows are the extractable passages that
// sweep in; the others are muted skeleton lines that stand for ordinary body
// copy, so the quotable passages read as the ones an answer engine can lift.
const PASSAGES: { text?: string; highlight: boolean }[] = [
  { highlight: false },
  { text: "We answer this in one clean line.", highlight: true },
  { highlight: false },
  { text: "The direct answer, in a list.", highlight: true },
  { text: "One fact, stated plainly.", highlight: true },
  { highlight: false },
];

// Authority signals that orbit the source. Positions are grid cell centers on a
// 3x3 grid (percent), so the web never overflows its box on any width.
const SIGNALS: { label: string; x: number; y: number }[] = [
  { label: "Mentions", x: 50, y: 16.67 },
  { label: "Citations", x: 16.67, y: 16.67 },
  { label: "Reviews", x: 83.33, y: 16.67 },
  { label: "Directories", x: 16.67, y: 83.33 },
  { label: "Entities", x: 83.33, y: 83.33 },
];

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const TermsDiagram = ({ className = "" }: { className?: string }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { once: true, margin: "-40px" });

  const highlightRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);
  const chipRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!inView) return;
    const controls: { stop: () => void }[] = [];
    const reduced = prefersReduced();

    // Stagger the passage highlights sweeping in from the left.
    highlightRefs.current.forEach((el, i) => {
      if (!el) return;
      if (reduced) {
        el.style.transform = "scaleX(1)";
        return;
      }
      controls.push(
        animate(0, 1, {
          duration: 0.5,
          delay: 0.15 + i * 0.22,
          ease: "easeOut",
          onUpdate: (v) => {
            el.style.transform = `scaleX(${v})`;
          },
        })
      );
    });

    // Stagger the connector reveals drawing from each signal toward the source.
    lineRefs.current.forEach((el, i) => {
      if (!el) return;
      if (reduced) {
        el.style.strokeDashoffset = "0";
        return;
      }
      controls.push(
        animate(1, 0, {
          duration: 0.55,
          delay: 0.35 + i * 0.16,
          ease: "easeOut",
          onUpdate: (v) => {
            el.style.strokeDashoffset = `${v}`;
          },
        })
      );
    });

    // Fade the signal chips in on the same stagger.
    chipRefs.current.forEach((el, i) => {
      if (!el) return;
      if (reduced) {
        el.style.opacity = "1";
        el.style.transform = "none";
        return;
      }
      controls.push(
        animate(0, 1, {
          duration: 0.5,
          delay: 0.35 + i * 0.16,
          ease: "easeOut",
          onUpdate: (v) => {
            el.style.opacity = `${v}`;
            el.style.transform = `translateY(${(1 - v) * 6}px)`;
          },
        })
      );
    });

    return () => controls.forEach((c) => c.stop());
  }, [inView]);

  return (
    <div className={`w-full ${className}`}>
      {/* Umbrella bracket spanning both clusters: AI SEO. */}
      <div
        ref={rootRef}
        className="relative border-2 border-[#0A1128] rounded-none bg-white pt-9 px-3 pb-3 sm:px-5 sm:pb-5"
        aria-label="AEO, GEO and AI SEO shown as on page and off page work"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 flex items-center gap-2 whitespace-nowrap">
          <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-[#0A1128] border border-[#0A1128] bg-[#FCCA07] px-2 py-1">
            {AISEO.term}
          </span>
          <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500">
            {AISEO.full} / the umbrella
          </span>
        </div>

        {/* Two clusters: page (AEO) and authority web (GEO). Stacks on mobile. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {/* Cluster 1: the page, with extractable passages. */}
          <div className="flex flex-col">
            <div className="border border-[#e7e6e4] rounded-none bg-white flex-1">
              <div className="flex items-center justify-between border-b border-[#e7e6e4] px-3 py-2">
                <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500">
                  Your page
                </span>
                <span
                  aria-hidden
                  className="flex gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e7e6e4]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e7e6e4]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e7e6e4]" />
                </span>
              </div>
              <div className="px-3 py-3 space-y-2.5">
                {PASSAGES.map((p, i) =>
                  p.highlight ? (
                    <div key={i} className="relative inline-block max-w-full">
                      <span
                        ref={(el) => {
                          highlightRefs.current[i] = el;
                        }}
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 top-0 origin-left bg-[#FCCA07]"
                        style={{ transform: "scaleX(0)" }}
                      />
                      <span className="relative font-alte text-[13px] sm:text-[14px] text-[#0A1128] tracking-[-0.04em] px-1 leading-snug border-b border-[#0A1128]">
                        {p.text}
                      </span>
                    </div>
                  ) : (
                    <div
                      key={i}
                      aria-hidden
                      className="h-2.5 bg-[#F9F6F4] border border-[#e7e6e4]"
                      style={{ width: i % 2 === 0 ? "100%" : "82%" }}
                    />
                  )
                )}
              </div>
            </div>

            <div className="mt-3">
              <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-[#0A1128] border border-[#0A1128] px-2 py-1 inline-block">
                {AEO.term}
              </span>
              <p className="mt-2 font-alte text-[13px] sm:text-[14px] text-blue-600 tracking-[-0.04em]">
                {firstSentence(AEO.def)}
              </p>
            </div>
          </div>

          {/* Cluster 2: the authority web of off page signals. */}
          <div className="flex flex-col">
            <div className="border border-[#e7e6e4] rounded-none bg-[#F9F6F4] flex-1 p-3">
              <div className="relative w-full aspect-square max-w-[280px] mx-auto">
                {/* Connectors, drawn from each signal toward the source. */}
                <svg
                  aria-hidden
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  {SIGNALS.map((s, i) => (
                    <line
                      key={s.label}
                      ref={(el) => {
                        lineRefs.current[i] = el;
                      }}
                      x1={s.x}
                      y1={s.y}
                      x2={50}
                      y2={50}
                      stroke="#0A1128"
                      strokeWidth={1.25}
                      vectorEffect="non-scaling-stroke"
                      pathLength={1}
                      strokeDasharray={1}
                      strokeDashoffset={1}
                    />
                  ))}
                </svg>

                {/* The source node at the centre. */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <span className="font-geist text-[9px] sm:text-[10px] uppercase tracking-[0.02em] text-white bg-[#0A1128] border border-[#0A1128] px-2 py-1.5 inline-block text-center leading-tight">
                    Your
                    <br />
                    source
                  </span>
                </div>

                {/* Signal chips around the source. */}
                {SIGNALS.map((s, i) => (
                  <div
                    key={s.label}
                    ref={(el) => {
                      chipRefs.current[i] = el;
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                    style={{
                      left: `${s.x}%`,
                      top: `${s.y}%`,
                      opacity: 0,
                    }}
                  >
                    <span className="font-geist text-[9px] sm:text-[10px] uppercase tracking-[0.02em] text-[#0A1128] bg-white border border-[#e7e6e4] px-1.5 py-1 inline-block whitespace-nowrap">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-[#0A1128] border border-[#0A1128] px-2 py-1 inline-block">
                {GEO.term}
              </span>
              <p className="mt-2 font-alte text-[13px] sm:text-[14px] text-blue-600 tracking-[-0.04em]">
                {firstSentence(GEO.def)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsDiagram;
