"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

/*
 * SpeedToLeadCard: illustrative "speed to lead" infographic.
 * NOT a client claim. No real names. Generic sources only.
 * The 9s and 4 hours are illustrative UI, not a real result.
 */
export default function SpeedToLeadCard() {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const secondsRef = useRef<HTMLSpanElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const compRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const card = cardRef.current;
    const seconds = secondsRef.current;
    const badge = badgeRef.current;
    const comp = compRef.current;
    if (!card || !seconds || !badge || !comp) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      card.style.opacity = "1";
      card.style.transform = "none";
      seconds.textContent = "9s";
      badge.style.opacity = "1";
      badge.style.transform = "none";
      comp.style.opacity = "1";
      return;
    }

    const controls: { stop: () => void }[] = [];

    controls.push(
      animate(0, 1, {
        duration: 0.5,
        ease: "easeOut",
        onUpdate: (v) => {
          card.style.opacity = `${v}`;
        },
      })
    );
    controls.push(
      animate(16, 0, {
        duration: 0.5,
        ease: "easeOut",
        onUpdate: (v) => {
          card.style.transform = `translateY(${v}px)`;
        },
      })
    );

    controls.push(
      animate(0, 9, {
        duration: 1,
        delay: 0.35,
        ease: "easeOut",
        onUpdate: (v) => {
          seconds.textContent = `${Math.round(v)}s`;
        },
      })
    );

    controls.push(
      animate(0, 1, {
        duration: 0.35,
        delay: 1.3,
        ease: "easeOut",
        onUpdate: (v) => {
          badge.style.opacity = `${v}`;
          badge.style.transform = `scale(${0.9 + v * 0.1})`;
        },
      })
    );

    controls.push(
      animate(0, 1, {
        duration: 0.45,
        delay: 1.6,
        ease: "easeOut",
        onUpdate: (v) => {
          comp.style.opacity = `${v}`;
        },
      })
    );

    return () => controls.forEach((c) => c.stop());
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-full max-w-[400px] mx-auto lg:mx-0">
      {/* stacked-depth offset border */}
      <div
        aria-hidden
        className="absolute inset-0 translate-x-2 translate-y-2 border border-[#e7e6e4] -z-10"
      />
      <div
        ref={cardRef}
        className="relative bg-white border border-[#e7e6e4] rounded-none text-left shadow-[0_24px_60px_-24px_rgba(10,17,40,0.28)]"
        style={reduce ? undefined : { opacity: 0, transform: "translateY(16px)" }}
        aria-label="Illustration: a new lead is called in seconds and the call is booked before a competitor follows up"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#e7e6e4]">
          <p className="font-geist text-[10px] uppercase tracking-[0.08em] text-slate-500">
            New lead
          </p>
          <span className="inline-flex items-center gap-1.5 font-geist text-[10px] uppercase tracking-[0.08em] text-slate-500">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-green-500/60 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-green-500" />
            </span>
            just now
          </span>
        </div>

        {/* Lead source */}
        <div className="flex items-center gap-3 px-5 py-4">
          <span className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-[#F9F6F4] border border-[#e7e6e4] text-slate-400">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" strokeLinecap="round" />
            </svg>
          </span>
          <div>
            <p className="font-alte text-[15px] text-[#0A1128] tracking-[-0.04em] leading-tight">
              Website enquiry
            </p>
            <p className="font-geist text-[10px] uppercase tracking-[0.08em] text-slate-400 mt-1">
              Inbound lead
            </p>
          </div>
        </div>

        {/* Response comparison */}
        <div className="px-5 pb-1 space-y-2">
          {/* You row (highlighted, the win) */}
          <div className="flex items-center gap-3 border-l-2 border-green-500 bg-green-50/70 pl-3 pr-3 py-2.5">
            <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center bg-green-500 text-white">
              <svg viewBox="0 0 20 20" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden>
                <path d="M5 10l3.5 3.5L15 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="flex-1 font-alte text-[15px] text-[#0A1128] tracking-[-0.04em] leading-tight">
              Called and texted in{" "}
              <span ref={secondsRef} className="text-blue-600">
                {reduce ? "9s" : "0s"}
              </span>
            </p>
            <span
              ref={badgeRef}
              className="flex-shrink-0 font-geist text-[10px] uppercase tracking-[0.06em] bg-[#FCCA07] text-[#0A1128] px-2 py-1"
              style={reduce ? undefined : { opacity: 0, transform: "scale(0.9)" }}
            >
              Call booked
            </span>
          </div>

          {/* Competitor row (muted, the loss) */}
          <div
            ref={compRef}
            className="flex items-center gap-3 border-l-2 border-[#e7e6e4] pl-3 pr-3 py-2.5"
            style={reduce ? undefined : { opacity: 0 }}
          >
            <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center border border-[#e7e6e4] text-slate-400">
              <svg viewBox="0 0 20 20" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <circle cx="10" cy="10" r="6.5" />
                <path d="M10 6.5V10l2.5 1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="flex-1 font-alte text-[15px] text-slate-400 tracking-[-0.04em] leading-tight">
              Followed up 4 hours later
            </p>
            <span className="flex-shrink-0 font-geist text-[10px] uppercase tracking-[0.06em] text-slate-400 line-through">
              Lead booked
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 mt-4 border-t border-[#e7e6e4]">
          <p className="font-geist text-[10px] uppercase tracking-[0.08em] text-slate-500">
            Speed to lead
          </p>
          <p className="font-geist text-[10px] uppercase tracking-[0.08em] text-slate-400">
            First reply wins
          </p>
        </div>
      </div>
    </div>
  );
}
