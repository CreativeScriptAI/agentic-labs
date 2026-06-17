import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { TOOLS, CONTEXT, ToolChip, ContextChip } from "./logos";

/* ─────────────────────────────────────────────────────────
 * ANIMATION STORYBOARD  —  the processing machine
 *
 * Raw input (tools + your client context) is fed into a funnel,
 * processed by the Agentic AI Labs layer, and the outcome comes
 * out the bottom. Plays once; the machine keeps a subtle idle hum.
 *
 *    0ms   hidden (waiting for scroll into view)
 *  150ms   "Raw input" label fades in
 *  300ms   input chips drop in from above (staggered 70ms)
 * 1100ms   funnel walls draw, channeling inputs down
 * 1400ms   Agentic AI Labs processor powers on (scale + glow)
 *           → scan line + glow loop forever (the machine running)
 * 1850ms   output chute arrow draws
 * 2050ms   outcome card prints out; checks stagger in (140ms)
 * ───────────────────────────────────────────────────────── */

const TIMING = {
  inputLabel: 150, // "Raw input" label
  inputDrop: 300, // chips drop into the hopper
  funnel: 1100, // funnel walls draw
  processor: 1400, // machine powers on
  arrow: 1850, // output chute arrow
  outcome: 2050, // outcome prints + checks stagger
};

/* Raw input chips — fed in from above */
const INPUT = {
  stagger: 0.07, // s between chips
  offsetY: -12, // px each chip drops from (above)
  spring: { type: "spring" as const, stiffness: 480, damping: 26 },
};

/* Funnel / hopper walls */
const FUNNEL = {
  draw: 0.6, // s to draw walls
  // wide top (x10..x230) converging to a neck (x104..x136)
  wallL: "M12 4 L104 52",
  wallR: "M228 4 L136 52",
  fill: "M12 4 L104 52 L136 52 L228 4 Z",
};

/* The processor — Agentic AI Labs machine (compact pill) */
const PROCESSOR = {
  initialScale: 0.82, // scale before power-on
  spring: { type: "spring" as const, stiffness: 460, damping: 22 },
};

/* Output chute */
const ARROW = { offsetY: -4, draw: 0.35 };

/* Outcome card + checklist */
const OUTCOME = {
  cardOffsetY: 14, // px card rises from
  rowOffsetX: -6, // px each row slides from
  stagger: 0.14, // s between checks
  spring: { type: "spring" as const, stiffness: 340, damping: 28 },
  items: [
    "Every call answered",
    "Every lead qualified",
    "Every meeting booked",
  ],
};

export default function BridgeMotion({
  replayTrigger = 0,
}: {
  replayTrigger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setStage(0);
      return;
    }
    setStage(0);
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setStage(1), TIMING.inputLabel));
    timers.push(setTimeout(() => setStage(2), TIMING.inputDrop));
    timers.push(setTimeout(() => setStage(3), TIMING.funnel));
    timers.push(setTimeout(() => setStage(4), TIMING.processor));
    timers.push(setTimeout(() => setStage(5), TIMING.arrow));
    timers.push(setTimeout(() => setStage(6), TIMING.outcome));
    return () => timers.forEach(clearTimeout);
  }, [isInView, replayTrigger]);

  // tools + client context = the raw input, fed together
  const inputs = [
    ...TOOLS.map((t) => ({ key: t.name, node: <ToolChip tool={t} /> })),
    ...CONTEXT.map((c) => ({ key: c, node: <ContextChip label={c} /> })),
  ];

  return (
    <div ref={ref} className="w-full max-w-[440px] mx-auto lg:ml-auto lg:mr-0">
      {/* ── Raw input ───────────────────────────────────────── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: stage >= 1 ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="font-sfpro text-[11px] font-semibold tracking-[0.16em] uppercase text-gray-400 mb-3"
      >
        Raw input
      </motion.p>

      <div className="flex flex-wrap justify-center gap-2">
        {inputs.map((item, i) => (
          <motion.span
            key={item.key}
            initial={{ opacity: 0, y: INPUT.offsetY, scale: 0.92 }}
            animate={{
              opacity: stage >= 2 ? 1 : 0,
              y: stage >= 2 ? 0 : INPUT.offsetY,
              scale: stage >= 2 ? 1 : 0.92,
            }}
            transition={{
              ...INPUT.spring,
              delay: stage >= 2 ? i * INPUT.stagger : 0,
            }}
          >
            {item.node}
          </motion.span>
        ))}
      </div>

      <p className="text-center font-sfpro text-xs text-slate-400 mt-3">
        Your tools and your data. Powerful, but disconnected.
      </p>

      {/* ── Funnel walls ────────────────────────────────────── */}
      <div className="flex justify-center -mb-1">
        <svg
          viewBox="0 0 240 56"
          className="w-48 h-12 mt-2"
          fill="none"
          aria-hidden="true"
        >
          <motion.path
            d={FUNNEL.fill}
            fill="#0062FF"
            initial={{ opacity: 0 }}
            animate={{ opacity: stage >= 3 ? 0.06 : 0 }}
            transition={{ duration: FUNNEL.draw }}
          />
          {[FUNNEL.wallL, FUNNEL.wallR].map((d) => (
            <motion.path
              key={d}
              d={d}
              stroke="#94a3b8"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: stage >= 3 ? 1 : 0,
                opacity: stage >= 3 ? 1 : 0,
              }}
              transition={{ duration: FUNNEL.draw }}
            />
          ))}
        </svg>
      </div>

      {/* ── The processor (Agentic AI Labs) — compact pill ──── */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: PROCESSOR.initialScale }}
          animate={{
            opacity: stage >= 4 ? 1 : 0,
            scale: stage >= 4 ? 1 : PROCESSOR.initialScale,
          }}
          transition={PROCESSOR.spring}
          className="inline-flex items-center gap-2.5 rounded-full bg-[#0062FF] text-white pl-2 pr-3.5 py-1.5 shadow-[0_8px_22px_rgba(0,98,255,0.22)]"
        >
          <span className="shrink-0 w-7 h-7 rounded-full bg-white/15 flex items-center justify-center overflow-hidden">
            <Image
              src="/images/notebot_emoji.png"
              alt=""
              width={22}
              height={22}
              className="w-[22px] h-[22px]"
            />
          </span>
          <span className="font-mondwest text-sm sm:text-base leading-none">
            Agentic AI Labs
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 font-sfpro text-[10px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
            processing
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: stage >= 4 ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="font-sfpro text-xs text-slate-400 mt-2.5 text-center"
        >
          We wire them into one system that works.
        </motion.p>
      </div>

      {/* ── Output chute ────────────────────────────────────── */}
      <div className="flex justify-center">
        <motion.svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          className="my-3 text-[#0062FF]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, y: ARROW.offsetY }}
          animate={{
            opacity: stage >= 5 ? 1 : 0,
            y: stage >= 5 ? 0 : ARROW.offsetY,
          }}
          transition={{ duration: ARROW.draw }}
        >
          <path d="M10 1 V18" />
          <path d="M4 12 L10 19 L16 12" />
        </motion.svg>
      </div>

      {/* ── Output: the outcome — minimal, no box ───────────── */}
      <motion.div
        initial={{ opacity: 0, y: OUTCOME.cardOffsetY }}
        animate={{
          opacity: stage >= 6 ? 1 : 0,
          y: stage >= 6 ? 0 : OUTCOME.cardOffsetY,
        }}
        transition={OUTCOME.spring}
        className="flex flex-col items-center"
      >
        <p className="font-sfpro text-[11px] font-semibold tracking-[0.16em] uppercase text-emerald-500 mb-3">
          The outcome
        </p>
        <ul className="space-y-2.5">
          {OUTCOME.items.map((o, i) => (
            <motion.li
              key={o}
              initial={{ opacity: 0, x: OUTCOME.rowOffsetX }}
              animate={{
                opacity: stage >= 6 ? 1 : 0,
                x: stage >= 6 ? 0 : OUTCOME.rowOffsetX,
              }}
              transition={{
                ...OUTCOME.spring,
                delay: stage >= 6 ? 0.15 + i * OUTCOME.stagger : 0,
              }}
              className="flex items-center gap-2.5 font-sfpro text-sm text-[#0A1128]"
            >
              <svg
                className="shrink-0 w-4 h-4 text-emerald-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 011.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z"
                  clipRule="evenodd"
                />
              </svg>
              {o}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* the fight line */}
      <p className="text-center font-mondwest text-sm text-slate-400 mt-4">
        Outcomes, not tools.
      </p>
    </div>
  );
}
