"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { SEQUENCE } from "./copy";

type Channel = "Email" | "SMS" | "WhatsApp" | "Voice";

const ChannelIcon = ({ channel }: { channel: Channel }) => {
  const common = {
    width: 13,
    height: 13,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (channel === "Email") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" />
        <path d="M3 6l9 7 9-7" />
      </svg>
    );
  }
  if (channel === "SMS") {
    return (
      <svg {...common}>
        <path d="M4 4h16v12H8l-4 4z" />
        <path d="M8 10h8M8 13h5" />
      </svg>
    );
  }
  if (channel === "WhatsApp") {
    return (
      <svg {...common}>
        <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12z" />
        <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4z" />
    </svg>
  );
};

// Escalation strength per touch, encoded as filled ticks (form, not just color).
// Email nudge, SMS, WhatsApp, then the Voice peak, easing to a graceful last email.
const LEVELS = [1, 2, 3, 4, 1];
const TICKS = 4;

const IntensityTicks = ({ level, peak }: { level: number; peak: boolean }) => (
  <span className="inline-flex items-end gap-[3px]" aria-hidden>
    {Array.from({ length: TICKS }).map((_, i) => {
      const on = i < level;
      return (
        <span
          key={i}
          className={`w-[3px] ${
            on
              ? peak
                ? "bg-[#0A1128]"
                : "bg-slate-400"
              : "bg-[#efeee9]"
          }`}
          style={{ height: `${5 + i * 2}px` }}
        />
      );
    })}
  </span>
);

const ChannelChip = ({
  channel,
  peak,
}: {
  channel: Channel;
  peak: boolean;
}) => (
  <span
    className={`inline-flex items-center gap-1.5 font-geist text-[10px] uppercase tracking-[0.02em] px-2 py-1 border ${
      peak
        ? "bg-[#0A1128] text-white border-[#0A1128]"
        : "bg-white text-[#0A1128] border-[#e7e6e4]"
    }`}
  >
    <ChannelIcon channel={channel} />
    {channel}
  </span>
);

const Marker = ({ index, peak }: { index: number; peak: boolean }) => (
  <span
    className={`relative z-10 flex items-center justify-center w-8 h-8 font-geist text-[12px] tabular-nums border ${
      peak
        ? "bg-[#0A1128] text-white border-[#0A1128] ring-2 ring-[#0A1128]/15"
        : "bg-white text-[#0A1128] border-[#e7e6e4]"
    }`}
  >
    {String(index + 1).padStart(2, "0")}
  </span>
);

const SequenceTimeline = ({ className = "" }: { className?: string }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { once: true, margin: "-40px" });

  const vSpine = useRef<HTMLDivElement>(null);
  const hSpine = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const nodes = nodeRefs.current.filter(
      (n): n is HTMLElement => n !== null
    );

    if (reduce) {
      if (vSpine.current) vSpine.current.style.transform = "scaleY(1)";
      if (hSpine.current) hSpine.current.style.transform = "scaleX(1)";
      nodes.forEach((n) => {
        n.style.opacity = "1";
        n.style.transform = "none";
      });
      if (noteRef.current) {
        noteRef.current.style.opacity = "1";
        noteRef.current.style.transform = "none";
      }
      return;
    }

    const controls = [
      animate(0, 1, {
        duration: 0.9,
        ease: "easeInOut",
        onUpdate: (v) => {
          if (vSpine.current) vSpine.current.style.transform = `scaleY(${v})`;
          if (hSpine.current) hSpine.current.style.transform = `scaleX(${v})`;
        },
      }),
    ];

    const cols = SEQUENCE.steps.length;
    nodes.forEach((el, i) => {
      const delay = 0.2 + (i % cols) * 0.1;
      controls.push(
        animate(0, 1, {
          duration: 0.4,
          delay,
          ease: "easeOut",
          onUpdate: (v) => {
            el.style.opacity = `${v}`;
          },
        }),
        animate(12, 0, {
          duration: 0.4,
          delay,
          ease: "easeOut",
          onUpdate: (v) => {
            el.style.transform = `translateY(${v}px)`;
          },
        })
      );
    });

    controls.push(
      animate(0, 1, {
        duration: 0.5,
        delay: 0.2 + SEQUENCE.steps.length * 0.1,
        ease: "easeOut",
        onUpdate: (v) => {
          if (!noteRef.current) return;
          noteRef.current.style.opacity = `${v}`;
          noteRef.current.style.transform = `translateY(${(1 - v) * 10}px)`;
        },
      })
    );

    return () => controls.forEach((c) => c.stop());
  }, [inView]);

  const setNode =
    (i: number) =>
    (el: HTMLElement | null): void => {
      nodeRefs.current[i] = el;
    };

  return (
    <div ref={rootRef} className={className}>
      {/* MOBILE: vertical spine */}
      <ol className="relative lg:hidden">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-[#e7e6e4]" />
        <div
          ref={vSpine}
          className="absolute left-4 top-2 bottom-2 w-px bg-[#0A1128] origin-top"
          style={{ transform: "scaleY(0)" }}
        />
        {SEQUENCE.steps.map((step, i) => {
          const peak = step.channel === "Voice";
          return (
            <li
              key={i}
              ref={setNode(i)}
              className="relative flex gap-4 pb-7 last:pb-0"
              style={{ opacity: 0, transform: "translateY(12px)" }}
            >
              <div className="relative z-10 -translate-x-[15px] pt-1">
                <Marker index={i} peak={peak} />
              </div>
              <div className="flex-1 -ml-[15px] border border-[#e7e6e4] bg-white px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-geist text-[11px] uppercase tracking-[0.02em] tabular-nums text-[#0A1128] border border-[#e7e6e4] bg-[#F9F6F4] px-2 py-0.5">
                    {step.day}
                  </span>
                  <IntensityTicks level={LEVELS[i]} peak={peak} />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <ChannelChip channel={step.channel as Channel} peak={peak} />
                </div>
                <p className="mt-3 font-alte text-[14px] leading-[1.55] tracking-[-0.04em] text-slate-600">
                  {step.body}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      {/* DESKTOP: horizontal spine, 5-column track */}
      <div className="hidden lg:block">
        {/* time badges */}
        <div className="grid grid-cols-5 gap-4">
          {SEQUENCE.steps.map((step, i) => {
            const peak = step.channel === "Voice";
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-2 text-center"
              >
                <span className="font-geist text-[11px] uppercase tracking-[0.02em] tabular-nums text-[#0A1128] border border-[#e7e6e4] bg-[#F9F6F4] px-2 py-0.5">
                  {step.day}
                </span>
                <IntensityTicks level={LEVELS[i]} peak={peak} />
              </div>
            );
          })}
        </div>

        {/* rail with markers */}
        <div className="relative h-8 my-4">
          <div className="absolute top-1/2 left-[10%] right-[10%] h-px -translate-y-1/2 bg-[#e7e6e4]" />
          <div
            ref={hSpine}
            className="absolute top-1/2 left-[10%] right-[10%] h-px -translate-y-1/2 bg-[#0A1128] origin-left"
            style={{ transform: "scaleX(0)" }}
          />
          <div className="relative grid grid-cols-5 h-full">
            {SEQUENCE.steps.map((step, i) => (
              <div key={i} className="flex items-center justify-center">
                <Marker index={i} peak={step.channel === "Voice"} />
              </div>
            ))}
          </div>
        </div>

        {/* cards */}
        <div className="grid grid-cols-5 gap-4 items-stretch">
          {SEQUENCE.steps.map((step, i) => {
            const peak = step.channel === "Voice";
            return (
              <div
                key={i}
                ref={setNode(SEQUENCE.steps.length + i)}
                className={`h-full border bg-white px-4 py-4 ${
                  peak ? "border-[#0A1128]" : "border-[#e7e6e4]"
                }`}
                style={{ opacity: 0, transform: "translateY(12px)" }}
              >
                <ChannelChip channel={step.channel as Channel} peak={peak} />
                <p className="mt-3 font-alte text-[13.5px] leading-[1.5] tracking-[-0.04em] text-slate-600">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* closing note: the single yellow payoff */}
      <div
        ref={noteRef}
        className="mt-8 flex items-start gap-3 border border-[#e7e6e4] bg-white p-4 sm:p-5"
        style={{ opacity: 0, transform: "translateY(10px)" }}
      >
        <span
          aria-hidden
          className="mt-1 w-1 self-stretch flex-shrink-0 bg-[#FCCA07]"
        />
        <p className="font-alte text-[15px] sm:text-[16px] leading-[1.5] tracking-[-0.04em] text-[#0A1128]">
          {SEQUENCE.note}
        </p>
      </div>
    </div>
  );
};

export default SequenceTimeline;
