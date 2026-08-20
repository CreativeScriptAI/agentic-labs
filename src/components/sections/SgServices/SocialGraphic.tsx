"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { ExampleChip } from "../AiVisibilityChecker/primitives";

// Phase model for the ~7.5s loop:
// 0 = reset. vanity metrics low, leads 0, chip muted "FOLLOWERS UP"
// 1 = followers + likes tick up (vanity rising)
// 2 = metrics full, leads still stuck at 0 (the pain)
// 3 = a DM enquiry lands
// 4 = it gets answered
// 5 = it converts. leads 0 -> 1, chip flips to yellow "LEAD BOOKED" (focal)
// then hold and loop back to 0
const PHASE_STEPS: { phase: number; hold: number }[] = [
  { phase: 0, hold: 900 },
  { phase: 1, hold: 1300 },
  { phase: 2, hold: 1200 },
  { phase: 3, hold: 1100 },
  { phase: 4, hold: 1100 },
  { phase: 5, hold: 2300 },
];

// Vanity counters: start (muted floor) -> end (risen)
const FOLLOWERS = { from: 2140, to: 6820 };
const LIKES = { from: 9300, to: 24700 };

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

const CheckMark = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowUp = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path
      fillRule="evenodd"
      d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.28 9.58a.75.75 0 0 1-1.06-1.06l5.25-5.25a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 1 1-1.06 1.06L10.75 5.612V16.25A.75.75 0 0 1 10 17Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function SocialGraphic({
  className = "",
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [phase, setPhase] = useState(0);
  const [reduced, setReduced] = useState(false);

  const followersRef = useRef<HTMLSpanElement>(null);
  const likesRef = useRef<HTMLSpanElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const anims = useRef<{ stop: () => void }[]>([]);

  // Paint the vanity counters imperatively (no re-render churn).
  const setCounter = (
    el: HTMLSpanElement | null,
    range: { from: number; to: number },
    ramp: boolean,
    instant: boolean,
  ) => {
    if (!el) return;
    if (instant || !ramp) {
      el.textContent = fmt(ramp ? range.to : range.from);
      return;
    }
    const c = animate(range.from, range.to, {
      duration: 1.15,
      ease: "easeOut",
      onUpdate: (v) => {
        el.textContent = fmt(v);
      },
    });
    anims.current.push(c);
  };

  useEffect(() => {
    if (!inView) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      setPhase(5);
      setCounter(followersRef.current, FOLLOWERS, true, true);
      setCounter(likesRef.current, LIKES, true, true);
      return;
    }

    let cancelled = false;
    const clearAll = () => {
      timers.current.forEach((t) => clearTimeout(t));
      timers.current = [];
      anims.current.forEach((a) => a.stop());
      anims.current = [];
    };

    const runCycle = () => {
      if (cancelled) return;
      clearAll();
      // seed floor values at the top of every cycle
      setCounter(followersRef.current, FOLLOWERS, false, true);
      setCounter(likesRef.current, LIKES, false, true);

      let acc = 0;
      PHASE_STEPS.forEach((step) => {
        const t = setTimeout(() => {
          if (cancelled) return;
          setPhase(step.phase);
          if (step.phase === 1) {
            setCounter(followersRef.current, FOLLOWERS, true, false);
            setCounter(likesRef.current, LIKES, true, false);
          }
        }, acc);
        timers.current.push(t);
        acc += step.hold;
      });
      const loop = setTimeout(runCycle, acc);
      timers.current.push(loop);
    };

    runCycle();

    return () => {
      cancelled = true;
      clearAll();
    };
  }, [inView]);

  const vanityUp = reduced || phase >= 1;
  const dmVisible = reduced || phase >= 3;
  const answered = reduced || phase >= 4;
  const booked = reduced || phase >= 5;

  return (
    <div ref={ref} className={`w-full max-w-[440px] mx-auto ${className}`}>
      <div className="border border-[#e7e6e4] bg-white">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e7e6e4] px-4 py-3 sm:px-5">
          <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-500">
            Your social
          </span>
          <span
            className={`inline-flex items-center gap-1.5 border px-2 py-1 font-geist text-[10px] uppercase tracking-[0.02em] transition-colors duration-500 ${
              booked
                ? "border-[#FCCA07] bg-[#FCCA07] text-[#0A1128]"
                : "border-[#e7e6e4] bg-[#efeee9] text-slate-400"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
                booked ? "bg-[#0A1128]" : "bg-slate-400"
              }`}
            />
            {booked ? "Lead booked" : "Followers up"}
          </span>
        </div>

        {/* Metrics row: vanity (ink) vs leads (stuck at 0) */}
        <div className="grid grid-cols-3 divide-x divide-[#e7e6e4] border-b border-[#e7e6e4]">
          {/* Followers */}
          <div className="px-3 py-4 sm:px-4">
            <div className="flex items-center gap-1 font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400">
              Followers
              <ArrowUp
                className={`w-2.5 h-2.5 transition-opacity duration-500 ${
                  vanityUp ? "text-slate-400 opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <div className="mt-1.5 font-alte text-[22px] leading-none tracking-[-0.04em] tabular-nums text-[#0A1128]">
              <span ref={followersRef}>{fmt(FOLLOWERS.from)}</span>
            </div>
          </div>

          {/* Likes */}
          <div className="px-3 py-4 sm:px-4">
            <div className="flex items-center gap-1 font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400">
              Likes
              <ArrowUp
                className={`w-2.5 h-2.5 transition-opacity duration-500 ${
                  vanityUp ? "text-slate-400 opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <div className="mt-1.5 font-alte text-[22px] leading-none tracking-[-0.04em] tabular-nums text-[#0A1128]">
              <span ref={likesRef}>{fmt(LIKES.from)}</span>
            </div>
          </div>

          {/* Leads: the pain, stuck at 0 until it books */}
          <div
            className={`px-3 py-4 sm:px-4 transition-colors duration-500 ${
              booked ? "bg-[#FCCA07]/10" : ""
            }`}
          >
            <div className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400">
              Leads
            </div>
            <div
              className={`mt-1.5 font-alte text-[22px] leading-none tracking-[-0.04em] tabular-nums transition-colors duration-500 ${
                booked ? "text-[#0A1128]" : "text-slate-300"
              }`}
            >
              {booked ? "1" : "0"}
            </div>
          </div>
        </div>

        {/* Enquiry thread: DM lands, gets answered, converts */}
        <div className="px-4 py-5 sm:px-5">
          <p className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400 mb-3">
            {booked ? "One answered DM" : "In your DMs"}
          </p>

          <div className="flex flex-col gap-2.5">
            {/* Incoming enquiry */}
            <div
              className="flex items-start gap-2.5 transition-all duration-500"
              style={{
                opacity: dmVisible ? 1 : 0,
                transform: dmVisible ? "none" : "translateY(6px)",
              }}
            >
              <span
                aria-hidden
                className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#efeee9] font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500"
              >
                DM
              </span>
              <span className="max-w-[78%] border border-[#e7e6e4] bg-[#F9F6F4] px-3 py-2 font-alte text-[14px] leading-[1.35] tracking-[-0.04em] text-[#0A1128]">
                is this available?
              </span>
            </div>

            {/* Reply */}
            <div
              className="flex items-start justify-end gap-2.5 transition-all duration-500"
              style={{
                opacity: answered ? 1 : 0,
                transform: answered ? "none" : "translateY(6px)",
              }}
            >
              <span className="max-w-[78%] border border-[#0A1128] bg-[#0A1128] px-3 py-2 font-alte text-[14px] leading-[1.35] tracking-[-0.04em] text-white">
                Yes. Free at 3pm today?
              </span>
            </div>
          </div>

          {/* Outcome: the one focal, yellow beat */}
          <div
            className="mt-4 flex items-center gap-3 border px-3 py-3 transition-all duration-500"
            style={{
              borderColor: booked ? "#FCCA07" : "#e7e6e4",
              background: booked ? "#FCCA07" : "#efeee9",
              opacity: booked ? 1 : 0.55,
              boxShadow: booked ? "0 0 0 4px rgba(252,202,7,0.22)" : "none",
            }}
          >
            <span
              className={`flex h-8 w-8 flex-shrink-0 items-center justify-center border transition-colors duration-500 ${
                booked
                  ? "border-[#0A1128] bg-[#0A1128] text-[#FCCA07]"
                  : "border-[#e7e6e4] bg-white text-slate-400"
              }`}
            >
              <CheckMark className="h-4 w-4" />
            </span>
            <div className="flex flex-col">
              <span className="font-alte text-[15px] tracking-[-0.04em] text-[#0A1128]">
                {booked ? "Call booked, 3:00pm" : "Waiting on a reply"}
              </span>
              <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-[#0A1128]/70">
                {booked ? "From a DM, not a follower" : "The enquiry that pays"}
              </span>
            </div>
          </div>
        </div>

        {/* Footer takeaway */}
        <div className="border-t border-[#e7e6e4] bg-[#F9F6F4] px-4 py-3 sm:px-5">
          <p className="font-alte text-[13px] leading-[1.5] tracking-[-0.04em] text-slate-500">
            Followers and likes are not revenue. An answered DM that books is.
          </p>
        </div>
      </div>

      <div className="mt-3 flex justify-center">
        <ExampleChip />
      </div>
    </div>
  );
}
