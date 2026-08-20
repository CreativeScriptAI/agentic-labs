"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

/*
 * SeoRankCard: illustrative "found on Google, named by AI" infographic.
 * NOT a client claim. No real names, no real numbers. Generic placeholders only.
 * The Google result row and the AI answer row are illustrative UI, not a result.
 */
export default function SeoRankCard() {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const rankRef = useRef<HTMLSpanElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const card = cardRef.current;
    const rank = rankRef.current;
    const badge = badgeRef.current;
    const answer = answerRef.current;
    if (!card || !rank || !badge || !answer) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      card.style.opacity = "1";
      card.style.transform = "none";
      rank.textContent = "#1";
      badge.style.opacity = "1";
      badge.style.transform = "none";
      answer.style.opacity = "1";
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
      animate(8, 1, {
        duration: 1,
        delay: 0.35,
        ease: "easeOut",
        onUpdate: (v) => {
          rank.textContent = `#${Math.max(1, Math.round(v))}`;
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
          answer.style.opacity = `${v}`;
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
        aria-label="Illustration: your business ranks on Google search and is named in an AI answer"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#e7e6e4]">
          <p className="font-geist text-[10px] uppercase tracking-[0.08em] text-slate-500">
            Search visibility
          </p>
          <span className="inline-flex items-center gap-1.5 font-geist text-[10px] uppercase tracking-[0.08em] text-slate-500">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-green-500/60 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-green-500" />
            </span>
            live
          </span>
        </div>

        {/* Google search row */}
        <div className="px-5 py-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-[#F9F6F4] border border-[#e7e6e4] text-slate-400">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
              </svg>
            </span>
            <p className="font-geist text-[10px] uppercase tracking-[0.08em] text-slate-400">
              Google search
            </p>
          </div>
          <div className="flex items-center gap-3 border-l-2 border-green-500 bg-green-50/70 pl-3 pr-3 py-2.5">
            <span
              ref={rankRef}
              className="flex-shrink-0 font-alte text-[15px] text-blue-600 tracking-[-0.04em] w-8"
            >
              {reduce ? "#1" : "#8"}
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-alte text-[15px] text-[#0A1128] tracking-[-0.04em] leading-tight truncate">
                Your business
              </p>
              <div className="mt-1 h-1 w-24 bg-[#e7e6e4]" aria-hidden />
            </div>
            <span
              ref={badgeRef}
              className="flex-shrink-0 font-geist text-[10px] uppercase tracking-[0.06em] bg-[#FCCA07] text-[#0A1128] px-2 py-1"
              style={reduce ? undefined : { opacity: 0, transform: "scale(0.9)" }}
            >
              Ranked
            </span>
          </div>
        </div>

        {/* AI answer row */}
        <div
          ref={answerRef}
          className="px-5 pb-1"
          style={reduce ? undefined : { opacity: 0 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-[#F9F6F4] border border-[#e7e6e4] text-slate-400">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M4 4h16v12H8l-4 4V4z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="font-geist text-[10px] uppercase tracking-[0.08em] text-slate-400">
              AI answer
            </p>
          </div>
          <div className="border border-[#e7e6e4] bg-[#F9F6F4] p-3">
            <div className="space-y-1.5" aria-hidden>
              <div className="h-1.5 w-full bg-[#e7e6e4]" />
              <div className="h-1.5 w-4/5 bg-[#e7e6e4]" />
            </div>
            <p className="font-alte text-[14px] text-[#0A1128] tracking-[-0.04em] leading-snug mt-2.5">
              A good option is{" "}
              <span className="inline-flex items-center gap-1 text-green-700">
                <span className="w-3.5 h-3.5 inline-flex items-center justify-center bg-green-500 text-white">
                  <svg viewBox="0 0 20 20" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden>
                    <path d="M5 10l3.5 3.5L15 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Your business
              </span>
              .
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 mt-4 border-t border-[#e7e6e4]">
          <p className="font-geist text-[10px] uppercase tracking-[0.08em] text-slate-500">
            Found on Google
          </p>
          <p className="font-geist text-[10px] uppercase tracking-[0.08em] text-slate-400">
            Named by AI
          </p>
        </div>
      </div>
    </div>
  );
}
