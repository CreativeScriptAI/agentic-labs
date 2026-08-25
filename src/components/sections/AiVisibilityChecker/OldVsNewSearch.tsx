"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { motionOff } from "src/lib/motionOff";
import { EmptySeat } from "./primitives";

const NAMES = ["A local firm", "A known competitor", "A third name"] as const;

const OldVsNewSearch = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rootRef, { once: true, margin: "-40px" });
  const [visibleNames, setVisibleNames] = useState(0);
  const [showSeat, setShowSeat] = useState(false);
  const [recede, setRecede] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    if (motionOff()) {
      setRecede(true);
      setVisibleNames(3);
      setShowSeat(true);
      return;
    }
    const timers: number[] = [];
    timers.push(window.setTimeout(() => setRecede(true), 200));
    timers.push(window.setTimeout(() => setVisibleNames(1), 500));
    timers.push(window.setTimeout(() => setVisibleNames(2), 1100));
    timers.push(window.setTimeout(() => setVisibleNames(3), 1700));
    timers.push(window.setTimeout(() => setShowSeat(true), 2300));
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [isInView]);

  const oldRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!oldRef.current) return;
    const el = oldRef.current;
    if (!recede) return;
    if (motionOff()) {
      el.style.opacity = "0.4";
      el.style.transform = "scale(0.96)";
      return;
    }
    const oc = animate(1, 0.4, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate: (v) => {
        el.style.opacity = `${v}`;
      },
    });
    const sc = animate(1, 0.96, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate: (v) => {
        el.style.transform = `scale(${v})`;
      },
    });
    return () => {
      oc.stop();
      sc.stop();
    };
  }, [recede]);

  return (
    <div
      ref={rootRef}
      className="grid sm:grid-cols-2 gap-4 mt-10"
      aria-label="Old search of ten links versus one AI answer with three names and an empty seat"
    >
      <div
        ref={oldRef}
        className="bg-[#F9F6F4] border border-[#e7e6e4] rounded-none p-6 origin-center"
      >
        <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400 mb-2">
          Old search
        </p>
        <p className="font-alte text-[16px] text-[#0A1128] tracking-[-0.04em] mb-5">
          Ten links you scrolled
        </p>
        <div className="space-y-2.5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600/70 flex-shrink-0" />
              <span
                className="h-2 bg-blue-600/15 rounded-none"
                style={{ width: `${72 - (i % 4) * 8}%` }}
              />
              <span className="font-geist text-[10px] text-blue-600/60">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white border border-[#e7e6e4] rounded-none p-6 flex flex-col">
        <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400 mb-2">
          New search
        </p>
        <p className="font-alte text-[16px] text-[#0A1128] tracking-[-0.04em] mb-4">
          One answer, three names
        </p>
        <div className="border border-[#e7e6e4] rounded-none p-4 flex-1 bg-[#F9F6F4]">
          <p className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-400 mb-2">
            AI answer
          </p>
          <p className="font-alte text-[14px] text-slate-500 tracking-[-0.04em] mb-4 leading-[1.5]">
            Who should I hire in this space?
          </p>
          <ol className="space-y-3">
            {NAMES.map((name, i) => (
              <li
                key={name}
                className="flex items-center gap-3"
                style={{
                  opacity: i < visibleNames ? 1 : 0.12,
                  transform: i < visibleNames ? "none" : "translateY(6px)",
                }}
              >
                <span className="w-6 h-6 flex items-center justify-center bg-[#FCCA07] font-geist text-[11px] text-[#0A1128]">
                  {i + 1}
                </span>
                <span className="font-alte text-[15px] text-[#0A1128] tracking-[-0.04em]">
                  {name}
                </span>
              </li>
            ))}
          </ol>
          <div
            className="mt-3"
            style={{
              opacity: showSeat ? 1 : 0,
              transform: showSeat ? "none" : "translateY(6px)",
            }}
          >
            <EmptySeat />
          </div>
        </div>
        <p className="font-alte text-[13px] text-slate-500 tracking-[-0.04em] mt-4 leading-[1.5]">
          If you are not one of those names, you are not in the running.
        </p>
      </div>
    </div>
  );
};

export default OldVsNewSearch;
