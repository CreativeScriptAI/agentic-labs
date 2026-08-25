"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { NOSHOW } from "./copy";
import { motionOff } from "src/lib/motionOff";

/* ---------- ring geometry (desktop) ---------- */

const CX = 480;
const CY = 340;
const R = 175;

const polar = (deg: number): [number, number] => {
  const rad = (deg * Math.PI) / 180;
  return [CX + R * Math.cos(rad), CY + R * Math.sin(rad)];
};

const arc = (from: number, to: number): string => {
  const [x1, y1] = polar(from);
  const [x2, y2] = polar(to);
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${R} ${R} 0 0 1 ${x2.toFixed(
    2
  )} ${y2.toFixed(2)}`;
};

/* clockwise from the top: 01 -> 02 -> 03 -> 04 -> back to 01 */
const ARCS: string[] = [
  arc(-80, -10),
  arc(10, 80),
  arc(100, 170),
  arc(190, 260),
];

const NODES: Array<[number, number]> = [
  polar(-90),
  polar(0),
  polar(90),
  polar(180),
];

const ARROW = polar(260);
const ARROW_ROTATION = 260 + 90;

const INK = "#0A1128";
const ACCENT = "#FCCA07";

/* card placement around the ring, index matches NOSHOW.loop order */
const CARD_POSITION: string[] = [
  "left-1/2 -translate-x-1/2 top-0",
  "right-0 top-1/2 -translate-y-1/2",
  "left-1/2 -translate-x-1/2 bottom-0",
  "left-0 top-1/2 -translate-y-1/2",
];

const STEP_DELAY = 0.5;

type Step = { n: string; title: string; body: string };

const steps: Step[] = NOSHOW.loop;

export default function NoShowLoop({ className = "" }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { once: true, margin: "-40px" });

  const arcRefs = useRef<Array<SVGPathElement | null>>([]);
  const nodeRefs = useRef<Array<SVGGElement | null>>([]);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const spineRefs = useRef<Array<HTMLDivElement | null>>([]);
  const centreRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGGElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const railArrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inView) return;

    const arcs = arcRefs.current;
    const nodes = nodeRefs.current;
    const cards = cardRefs.current;
    const rows = rowRefs.current;
    const spines = spineRefs.current;
    const centre = centreRef.current;
    const arrow = arrowRef.current;
    const rail = railRef.current;
    const railArrow = railArrowRef.current;

    if (motionOff()) {
      arcs.forEach((el) => {
        if (el) el.style.strokeDashoffset = "0";
      });
      nodes.forEach((el) => {
        if (el) el.style.opacity = "1";
      });
      cards.forEach((el) => {
        if (el) {
          el.style.opacity = "1";
          el.style.transform = "none";
        }
      });
      rows.forEach((el) => {
        if (el) {
          el.style.opacity = "1";
          el.style.transform = "none";
        }
      });
      spines.forEach((el) => {
        if (el) el.style.transform = "scaleY(1)";
      });
      if (centre) centre.style.opacity = "1";
      if (arrow) arrow.style.opacity = "1";
      if (rail) rail.style.transform = "scaleY(1)";
      if (railArrow) railArrow.style.opacity = "1";
      return;
    }

    const controls: Array<{ stop: () => void }> = [];

    if (centre) {
      controls.push(
        animate(0, 1, {
          duration: 0.5,
          delay: 0.1,
          ease: "easeOut",
          onUpdate: (v) => {
            centre.style.opacity = String(v);
          },
        })
      );
    }

    steps.forEach((_, i) => {
      const base = i * STEP_DELAY;

      const card = cards[i];
      if (card) {
        controls.push(
          animate(0, 1, {
            duration: 0.45,
            delay: base,
            ease: "easeOut",
            onUpdate: (v) => {
              card.style.opacity = String(v);
              card.style.transform = `translateY(${(1 - v) * 12}px)`;
            },
          })
        );
      }

      const row = rows[i];
      if (row) {
        controls.push(
          animate(0, 1, {
            duration: 0.45,
            delay: base,
            ease: "easeOut",
            onUpdate: (v) => {
              row.style.opacity = String(v);
              row.style.transform = `translateY(${(1 - v) * 10}px)`;
            },
          })
        );
      }

      const node = nodes[i];
      if (node) {
        controls.push(
          animate(0, 1, {
            duration: 0.3,
            delay: base,
            ease: "easeOut",
            onUpdate: (v) => {
              node.style.opacity = String(v);
            },
          })
        );
      }

      const path = arcs[i];
      if (path) {
        controls.push(
          animate(1, 0, {
            duration: 0.55,
            delay: base + 0.2,
            ease: "easeInOut",
            onUpdate: (v) => {
              path.style.strokeDashoffset = String(v);
            },
          })
        );
      }

      const spine = spines[i];
      if (spine) {
        controls.push(
          animate(0, 1, {
            duration: 0.4,
            delay: base + 0.2,
            ease: "easeInOut",
            onUpdate: (v) => {
              spine.style.transform = `scaleY(${v})`;
            },
          })
        );
      }
    });

    const closeAt = 3 * STEP_DELAY + 0.2;

    if (arrow) {
      controls.push(
        animate(0, 1, {
          duration: 0.35,
          delay: closeAt + 0.5,
          ease: "easeOut",
          onUpdate: (v) => {
            arrow.style.opacity = String(v);
          },
        })
      );
    }

    if (rail) {
      controls.push(
        animate(0, 1, {
          duration: 0.7,
          delay: closeAt,
          ease: "easeInOut",
          onUpdate: (v) => {
            rail.style.transform = `scaleY(${v})`;
          },
        })
      );
    }

    if (railArrow) {
      controls.push(
        animate(0, 1, {
          duration: 0.35,
          delay: closeAt + 0.6,
          ease: "easeOut",
          onUpdate: (v) => {
            railArrow.style.opacity = String(v);
          },
        })
      );
    }

    return () => {
      controls.forEach((c) => c.stop());
    };
  }, [inView]);

  return (
    <div ref={rootRef} className={`w-full ${className}`}>
      {/* ---------- desktop: closed ring ---------- */}
      <div className="hidden lg:block overflow-x-auto">
        <div className="relative mx-auto w-[960px] h-[680px]">
          <svg
            viewBox="0 0 960 680"
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
            focusable="false"
          >
            <circle
              cx={CX}
              cy={CY}
              r={R}
              fill="none"
              stroke="#e7e6e4"
              strokeWidth={10}
            />
            {ARCS.map((d, i) => (
              <path
                key={d}
                ref={(el) => {
                  arcRefs.current[i] = el;
                }}
                d={d}
                fill="none"
                stroke={i === 3 ? ACCENT : INK}
                strokeWidth={i === 3 ? 6 : 3}
                strokeLinecap="butt"
                pathLength={1}
                strokeDasharray={1}
                style={{ strokeDashoffset: 1 }}
              />
            ))}

            {NODES.map(([x, y], i) => (
              <g
                key={`node-${steps[i].n}`}
                ref={(el) => {
                  nodeRefs.current[i] = el;
                }}
                style={{ opacity: 0 }}
              >
                <circle cx={x} cy={y} r={9} fill="#FFFFFF" />
                <circle
                  cx={x}
                  cy={y}
                  r={6}
                  fill={i === 0 ? ACCENT : INK}
                  stroke={i === 0 ? ACCENT : INK}
                  strokeWidth={2}
                />
              </g>
            ))}

            <g
              ref={arrowRef}
              style={{ opacity: 0 }}
              transform={`translate(${ARROW[0].toFixed(2)} ${ARROW[1].toFixed(
                2
              )}) rotate(${ARROW_ROTATION})`}
            >
              <polygon points="0,0 -13,-7 -13,7" fill={ACCENT} />
            </g>
          </svg>

          {/* centre label */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] text-center">
            <div ref={centreRef} style={{ opacity: 0 }}>
              <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-500">
                The recovery loop
              </p>
              <div className="mx-auto mt-3 mb-3 h-px w-10 bg-[#FCCA07]" />
              <p className="font-alte text-[15px] leading-[1.4] tracking-[-0.04em] text-[#0A1128]">
                A cancellation should end as a rebooking.
              </p>
            </div>
          </div>

          {/* step cards */}
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`absolute w-[280px] ${CARD_POSITION[i]}`}
            >
              <div
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                style={{ opacity: 0 }}
                className={`bg-white border rounded-none p-4 ${
                  i === 0 ? "border-[#FCCA07]" : "border-[#e7e6e4]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center justify-center h-6 w-7 rounded-none font-geist text-[11px] uppercase tracking-[0.02em] tabular-nums ${
                      i === 0
                        ? "bg-[#FCCA07] text-[#0A1128]"
                        : "bg-[#0A1128] text-white"
                    }`}
                  >
                    {s.n}
                  </span>
                  <span className="font-alte text-[15px] leading-[1.2] tracking-[-0.04em] text-[#0A1128]">
                    {s.title}
                  </span>
                </div>
                <p className="mt-2 font-alte text-[12.5px] leading-[1.45] tracking-[-0.04em] text-slate-600">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- mobile and tablet: vertical flow with a return rail ---------- */}
      <div className="lg:hidden relative pl-10 pr-14">
        {steps.map((s, i) => (
          <div key={s.n} className="relative pb-7 last:pb-0">
            <span
              className={`absolute left-[-40px] top-0 inline-flex items-center justify-center h-7 w-8 rounded-none font-geist text-[11px] uppercase tracking-[0.02em] tabular-nums ${
                i === 0
                  ? "bg-[#FCCA07] text-[#0A1128]"
                  : "bg-[#0A1128] text-white"
              }`}
            >
              {s.n}
            </span>

            {i < steps.length - 1 && (
              <div
                ref={(el) => {
                  spineRefs.current[i] = el;
                }}
                style={{ transform: "scaleY(0)" }}
                className="absolute left-[-24px] top-7 bottom-0 w-px origin-top bg-[#0A1128]/25"
              />
            )}

            <div
              ref={(el) => {
                rowRefs.current[i] = el;
              }}
              style={{ opacity: 0 }}
              className={`bg-white border rounded-none p-4 ${
                i === 0 ? "border-[#FCCA07]" : "border-[#e7e6e4]"
              }`}
            >
              <p className="font-alte text-[16px] leading-[1.2] tracking-[-0.04em] text-[#0A1128]">
                {s.title}
              </p>
              <p className="mt-2 font-alte text-[14px] leading-[1.5] tracking-[-0.04em] text-slate-600">
                {s.body}
              </p>
            </div>
          </div>
        ))}

        {/* the loop closes: 04 returns to 01 */}
        <div
          aria-hidden="true"
          className="absolute right-[15px] top-[14px] h-px w-9 bg-[#FCCA07]"
        />
        <div
          aria-hidden="true"
          className="absolute right-[15px] bottom-[14px] h-px w-9 bg-[#FCCA07]"
        />
        <div
          aria-hidden="true"
          ref={railRef}
          style={{ transform: "scaleY(0)" }}
          className="absolute right-[15px] top-[14px] bottom-[14px] w-[2px] origin-bottom bg-[#FCCA07]"
        />
        <div
          aria-hidden="true"
          ref={railArrowRef}
          style={{ opacity: 0 }}
          className="absolute right-[42px] top-[9px]"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" focusable="false">
            <polygon points="0,5 10,0 10,10" fill={ACCENT} />
          </svg>
        </div>
      </div>

      <p className="lg:hidden mt-4 font-geist text-[11px] uppercase tracking-[0.02em] text-slate-500">
        04 returns to 01. The loop closes.
      </p>

      {/* evidence footnote */}
      <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#e7e6e4] pt-4">
        <span className="inline-flex items-center rounded-none border border-[#e7e6e4] bg-white px-2 py-0.5 font-geist text-[11px] uppercase tracking-[0.02em] text-slate-500">
          Source
        </span>
        <span className="font-alte text-[12px] leading-[1.4] tracking-[-0.04em] text-slate-400">
          {NOSHOW.evidenceSource}
        </span>
      </div>
    </div>
  );
}
