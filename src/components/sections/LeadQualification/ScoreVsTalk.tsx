"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { SCOREVSTALK } from "./copy";

// Decorative meter fills for the scoring lane. They encode the idea that a
// score is a systematic, quantified ranking. Not real data, purely visual.
const SCORE_FILLS = [0.92, 0.74, 1, 0.58];

const SpeechIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
    className={className}
  >
    <path
      d="M4 4h16v12H9l-5 4V4Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="12.5" cy="10" r="1" fill="currentColor" />
    <circle cx="16" cy="10" r="1" fill="currentColor" />
  </svg>
);

export default function ScoreVsTalk({ className = "" }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || !rootRef.current) return;
    const root = rootRef.current;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>("[data-item]")
    );
    const bars = Array.from(root.querySelectorAll<HTMLElement>("[data-bar]"));
    const connector = root.querySelector<SVGPathElement>("[data-connector]");
    const node = root.querySelector<SVGElement>("[data-node]");
    const close = root.querySelector<HTMLElement>("[data-close]");

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) {
      items.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      bars.forEach((el) => {
        const fill = Number(el.dataset.fill ?? "1");
        el.style.transform = `scaleX(${fill})`;
      });
      if (connector) connector.style.strokeDashoffset = "0";
      if (node) {
        node.style.opacity = "1";
        node.style.transform = "rotate(45deg) scale(1)";
      }
      if (close) {
        close.style.opacity = "1";
        close.style.transform = "none";
      }
      return;
    }

    const controls: ReturnType<typeof animate>[] = [];

    // 1. Reveal each list item in sequence, left and right interleaved by DOM order.
    items.forEach((el, i) => {
      controls.push(
        animate(0, 1, {
          duration: 0.5,
          delay: i * 0.08,
          ease: "easeOut",
          onUpdate: (v) => {
            el.style.opacity = String(v);
            el.style.transform = `translateY(${(1 - v) * 10}px)`;
          },
        })
      );
    });

    // 2. Fill the scoring meters as their rows arrive.
    bars.forEach((el, i) => {
      const fill = Number(el.dataset.fill ?? "1");
      controls.push(
        animate(0, fill, {
          duration: 0.7,
          delay: i * 0.08 + 0.18,
          ease: "easeOut",
          onUpdate: (v) => {
            el.style.transform = `scaleX(${v})`;
          },
        })
      );
    });

    const tail = items.length * 0.08;

    // 3. Draw the two connectors converging into one, last.
    if (connector) {
      const len = connector.getTotalLength();
      connector.style.strokeDasharray = String(len);
      connector.style.strokeDashoffset = String(len);
      controls.push(
        animate(len, 0, {
          duration: 0.85,
          delay: tail + 0.4,
          ease: "easeInOut",
          onUpdate: (v) => {
            connector.style.strokeDashoffset = String(v);
          },
        })
      );
    }

    // 4. Land the focal node where they meet.
    if (node) {
      controls.push(
        animate(0, 1, {
          duration: 0.4,
          delay: tail + 1.05,
          ease: "easeOut",
          onUpdate: (v) => {
            node.style.opacity = String(v);
            node.style.transform = `rotate(45deg) scale(${0.55 + v * 0.45})`;
          },
        })
      );
    }

    // 5. Resolve into the payoff line.
    if (close) {
      controls.push(
        animate(0, 1, {
          duration: 0.5,
          delay: tail + 1.15,
          ease: "easeOut",
          onUpdate: (v) => {
            close.style.opacity = String(v);
            close.style.transform = `translateY(${(1 - v) * 8}px)`;
          },
        })
      );
    }

    return () => controls.forEach((c) => c.stop());
  }, [inView]);

  const { left, right, close } = SCOREVSTALK;

  return (
    <div ref={rootRef} className={`w-full ${className}`}>
      {/* Two lanes sharing one frame, split by a central spine. */}
      <div className="grid grid-cols-1 md:grid-cols-2 border border-[#e7e6e4] bg-white">
        {/* SCORING lane, calm and systematic */}
        <div className="p-6 sm:p-8">
          <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400 mb-1">
            Scoring
          </p>
          <h3 className="font-alte text-[17px] sm:text-[19px] text-[#0A1128] tracking-[-0.04em] leading-[1.3] mb-6">
            {left.label}
          </h3>
          <ul className="space-y-5">
            {left.items.map((item, i) => (
              <li key={item} data-item className="opacity-0">
                <div className="h-1.5 w-full bg-[#efeee9] overflow-hidden mb-2.5">
                  <div
                    data-bar
                    data-fill={SCORE_FILLS[i] ?? 1}
                    className="h-full bg-[#0A1128]"
                    style={{ transformOrigin: "left", transform: "scaleX(0)" }}
                  />
                </div>
                <span className="block font-alte text-[14px] sm:text-[15px] text-slate-600 tracking-[-0.04em] leading-[1.45]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 pt-5 border-t border-[#e7e6e4] font-alte text-[13px] sm:text-[14px] text-slate-500 tracking-[-0.04em] leading-[1.5]">
            {left.foot}
          </p>
        </div>

        {/* CONVERSATION lane, warmer and human */}
        <div className="p-6 sm:p-8 bg-[#F9F6F4] border-t md:border-t-0 md:border-l border-[#e7e6e4]">
          <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400 mb-1">
            Conversation
          </p>
          <h3 className="font-alte text-[17px] sm:text-[19px] text-[#0A1128] tracking-[-0.04em] leading-[1.3] mb-6">
            {right.label}
          </h3>
          <ul className="space-y-5">
            {right.items.map((item) => (
              <li
                key={item}
                data-item
                className="flex items-start gap-3 opacity-0"
              >
                <SpeechIcon className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#0A1128]/45" />
                <span className="block font-alte text-[14px] sm:text-[15px] text-[#0A1128] tracking-[-0.04em] leading-[1.45]">
                  {item}?
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 pt-5 border-t border-[#e7e6e4] font-alte text-[13px] sm:text-[14px] text-slate-500 tracking-[-0.04em] leading-[1.5]">
            {right.foot}
          </p>
        </div>
      </div>

      {/* Convergence: two connectors meeting into one, then the payoff. */}
      <div className="relative">
        <svg
          viewBox="0 0 300 84"
          preserveAspectRatio="none"
          className="block w-full h-[64px] sm:h-[76px]"
          aria-hidden
        >
          <path
            data-connector
            d="M75 0 C 75 38 150 30 150 54 M225 0 C 225 38 150 30 150 54 L150 84"
            fill="none"
            stroke="#0A1128"
            strokeWidth="1.25"
            vectorEffect="non-scaling-stroke"
          />
          <rect
            data-node
            x="143"
            y="47"
            width="14"
            height="14"
            fill="#FCCA07"
            className="opacity-0"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
              transform: "rotate(45deg) scale(0.55)",
            }}
          />
        </svg>

        <div
          data-close
          className="opacity-0 border border-[#e7e6e4] bg-white p-6 sm:p-8 text-center"
        >
          <p className="mx-auto max-w-2xl font-alte text-[16px] sm:text-[18px] text-[#0A1128] tracking-[-0.04em] leading-[1.5]">
            {close}
          </p>
        </div>
      </div>
    </div>
  );
}
