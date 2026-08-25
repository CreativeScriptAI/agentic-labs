"use client";

import { useEffect, useState } from "react";
import { motionOff } from "src/lib/motionOff";
import { CheckSvg, ExampleChip } from "../AiVisibilityChecker/primitives";

type Touch = {
  time: string;
  channel: string;
  outcome: string;
};

const TOUCHES: readonly Touch[] = [
  { time: "Min 1", channel: "EMAIL", outcome: "sent" },
  { time: "Hour 4", channel: "SMS", outcome: "sent" },
  { time: "Day 2", channel: "WHATSAPP", outcome: "sent" },
  { time: "Day 4", channel: "VOICE", outcome: "sent" },
  { time: "Day 7", channel: "EMAIL", outcome: "cancelled" },
] as const;

// Phase timeline (ms, phase):
// 0 idle, 1..4 touches reveal, 5 reply lands + stop, 6 fifth touch cancelled.
const STEPS: readonly [number, number][] = [
  [450, 1],
  [1150, 2],
  [1850, 3],
  [2550, 4],
  [3350, 5],
  [4150, 6],
];
const LOOP_MS = 7400;

const Spine = ({
  active,
  yellow,
  muted,
  isFirst,
  isLast,
}: {
  active: boolean;
  yellow?: boolean;
  muted?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}) => (
  <div className="relative flex w-5 flex-shrink-0 justify-center">
    <span
      aria-hidden
      className="absolute left-1/2 w-px -translate-x-1/2 bg-[#e7e6e4]"
      style={{ top: isFirst ? "12px" : 0, bottom: isLast ? "auto" : 0, height: isLast ? "12px" : undefined }}
    />
    <span
      aria-hidden
      className={[
        "relative z-10 mt-[7px] h-2.5 w-2.5 flex-shrink-0 rounded-full border transition-colors duration-500",
        yellow
          ? "border-[#FCCA07] bg-[#FCCA07]"
          : muted
            ? "border-[#e7e6e4] bg-[#efeee9]"
            : active
              ? "border-[#0A1128] bg-[#0A1128]"
              : "border-[#e7e6e4] bg-white",
      ].join(" ")}
    />
  </div>
);

const ChannelChip = ({ label, dim }: { label: string; dim?: boolean }) => (
  <span
    className={[
      "inline-flex items-center rounded-none border px-1.5 py-0.5 font-geist text-[10px] uppercase tracking-[0.02em] transition-opacity duration-500",
      dim
        ? "border-[#e7e6e4] bg-white text-slate-400 opacity-60"
        : "border-[#e7e6e4] bg-[#efeee9] text-slate-500",
    ].join(" ")}
  >
    {label}
  </span>
);

export default function HeroReachGraphic({ className = "" }: { className?: string }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (motionOff()) {
      setPhase(6);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    const schedule = () => {
      setPhase(0);
      STEPS.forEach(([t, p]) => {
        timers.push(setTimeout(() => setPhase(p), t));
      });
      timers.push(setTimeout(schedule, LOOP_MS));
    };
    schedule();

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  const stopped = phase >= 5;
  const replyShown = phase >= 5;
  const cancelShown = phase >= 6;

  return (
    <div className={className}>
      <div className="w-full max-w-[440px] mx-auto rounded-none border border-[#e7e6e4] bg-white">
        {/* Header: scaffolding, never blank */}
        <div className="flex items-center justify-between gap-3 border-b border-[#e7e6e4] px-4 py-3">
          <span className="min-w-0 truncate font-geist text-[11px] uppercase tracking-[0.02em] text-slate-500">
            Follow-up sequence
          </span>
          <span
            className={[
              "inline-flex flex-shrink-0 items-center gap-1.5 rounded-none border px-2 py-1 font-geist text-[10px] uppercase tracking-[0.02em] transition-colors duration-500",
              stopped
                ? "border-[#FCCA07] bg-[#FCCA07]/15 text-[#0A1128]"
                : "border-[#e7e6e4] bg-white text-[#0A1128]",
            ].join(" ")}
          >
            <span
              aria-hidden
              className={[
                "h-1.5 w-1.5 flex-shrink-0 rounded-full",
                stopped ? "bg-[#FCCA07]" : "bg-emerald-500 animate-pulse motion-reduce:animate-none",
              ].join(" ")}
            />
            {stopped ? "Stopped, replied" : "Running"}
          </span>
        </div>

        {/* Timeline */}
        <div className="px-4 py-4">
          {TOUCHES.slice(0, 4).map((t, i) => {
            const revealed = phase >= i + 1;
            return (
              <div key={t.time} className="flex items-stretch gap-3">
                <div className="w-[52px] flex-shrink-0 pt-[5px] text-right font-geist text-[11px] uppercase tracking-[0.02em] tabular-nums text-slate-400">
                  {t.time}
                </div>
                <Spine active={revealed} isFirst={i === 0} />
                <div className="min-w-0 flex-1 pb-4">
                  <div className="flex items-center gap-2">
                    <ChannelChip label={t.channel} />
                    <span
                      className="truncate font-alte text-[13px] tracking-[-0.04em] text-slate-500 transition-all duration-500"
                      style={{
                        opacity: revealed ? 1 : 0,
                        transform: revealed ? "translateX(0)" : "translateX(-4px)",
                      }}
                    >
                      {t.outcome}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Focal moment: the reply lands. The only yellow. */}
          <div className="flex items-stretch gap-3">
            <div className="w-[52px] flex-shrink-0 pt-[5px] text-right font-geist text-[11px] uppercase tracking-[0.02em] tabular-nums text-slate-400">
              Day 4
            </div>
            <Spine active={replyShown} yellow={replyShown} muted={!replyShown} />
            <div className="min-w-0 flex-1 pb-4">
              <div
                className="transition-all duration-500"
                style={{
                  opacity: replyShown ? 1 : 0,
                  transform: replyShown ? "translateY(0)" : "translateY(4px)",
                }}
              >
                <div className="inline-flex max-w-full items-center gap-2 rounded-none border border-[#FCCA07] bg-[#FCCA07]/15 px-2 py-1">
                  <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#FCCA07] text-[#0A1128]">
                    <CheckSvg className="h-3 w-3" />
                  </span>
                  <span className="truncate font-geist text-[10px] uppercase tracking-[0.02em] text-[#0A1128]">
                    Lead replied
                  </span>
                </div>
                <p className="mt-1 font-alte text-[12px] tracking-[-0.04em] text-slate-500">
                  They answered. The chase stops here.
                </p>
              </div>
            </div>
          </div>

          {/* Fifth touch: auto-cancelled once they reply */}
          <div className="flex items-stretch gap-3">
            <div
              className={[
                "w-[52px] flex-shrink-0 pt-[5px] text-right font-geist text-[11px] uppercase tracking-[0.02em] tabular-nums transition-opacity duration-500",
                cancelShown ? "text-slate-300" : "text-slate-400",
              ].join(" ")}
            >
              {TOUCHES[4].time}
            </div>
            <Spine active={false} muted isLast />
            <div className="min-w-0 flex-1 pb-1">
              <div
                className="flex items-center gap-2 transition-opacity duration-500"
                style={{ opacity: cancelShown ? 0.6 : 0.9 }}
              >
                <ChannelChip label={TOUCHES[4].channel} dim={cancelShown} />
                <span
                  className="truncate font-alte text-[13px] tracking-[-0.04em] text-slate-400 transition-all duration-500"
                  style={{
                    opacity: cancelShown ? 1 : 0,
                    transform: cancelShown ? "translateX(0)" : "translateX(-4px)",
                    textDecoration: cancelShown ? "line-through" : "none",
                  }}
                >
                  cancelled
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex justify-center">
        <ExampleChip />
      </div>
    </div>
  );
}
