"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { HERO, HERO_ENGINE_CYCLE } from "./copy";
import { EmptySeat } from "./primitives";
import { EngineBadge } from "./EngineLogos";

export const useRotatingEngine = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIndex(0);
      return;
    }
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_ENGINE_CYCLE.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, [paused]);

  return {
    engine: HERO_ENGINE_CYCLE[index],
    setPaused,
  };
};

export const RotatingEngineWord = ({
  engine,
  onPause,
}: {
  engine: string;
  onPause: (next: boolean) => void;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const shown = useRef(engine);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (shown.current === engine) {
      el.textContent = engine;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = engine;
      shown.current = engine;
      return;
    }
    const out = animate(0, 1, {
      duration: 0.2,
      ease: "easeIn",
      onUpdate: (v) => {
        el.style.opacity = `${1 - v}`;
        el.style.transform = `translateY(${v * 8}px)`;
      },
      onComplete: () => {
        el.textContent = engine;
        shown.current = engine;
        animate(0, 1, {
          duration: 0.26,
          ease: "easeOut",
          onUpdate: (v) => {
            el.style.opacity = `${v}`;
            el.style.transform = `translateY(${(1 - v) * -8}px)`;
          },
        });
      },
    });
    return () => out.stop();
  }, [engine]);

  return (
    <span
      className="inline-grid align-baseline text-blue-600 text-left"
      onMouseEnter={() => onPause(true)}
      onMouseLeave={() => onPause(false)}
      onFocus={() => onPause(true)}
      onBlur={() => onPause(false)}
      tabIndex={0}
    >
      {HERO_ENGINE_CYCLE.map((name) => (
        <span
          key={name}
          aria-hidden
          className="invisible col-start-1 row-start-1 whitespace-nowrap pointer-events-none"
        >
          {name}
        </span>
      ))}
      <span ref={ref} className="col-start-1 row-start-1 whitespace-nowrap">
        {engine}
      </span>
    </span>
  );
};

const NAMES = ["A local firm", "A known competitor", "A third name"] as const;

export const HeroAnswerGraphic = ({ engine }: { engine: string }) => {
  const [visibleNames, setVisibleNames] = useState(0);
  const [showSeat, setShowSeat] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleNames(3);
      setShowSeat(true);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = (now - start) % 7200;
      if (t < 700) {
        setVisibleNames(0);
        setShowSeat(false);
      } else if (t < 1500) {
        setVisibleNames(1);
        setShowSeat(false);
      } else if (t < 2300) {
        setVisibleNames(2);
        setShowSeat(false);
      } else if (t < 3100) {
        setVisibleNames(3);
        setShowSeat(false);
      } else {
        setVisibleNames(3);
        setShowSeat(true);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="mt-10 max-w-md mx-auto bg-white border border-[#e7e6e4] rounded-none p-5 sm:p-6 text-left"
      aria-label="AI answer naming competitors, with an empty seat for your business"
    >
      <div className="flex items-center gap-2 mb-4">
        <EngineBadge name={engine} className="w-8 h-7" logoClassName="w-4 h-4" />
        <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400">
          {engine}
        </p>
      </div>
      <p className="font-alte text-[14px] text-slate-500 tracking-[-0.04em] mb-5 leading-[1.5]">
        {HERO.question}
      </p>
      <ol className="space-y-3">
        {NAMES.map((name, i) => (
          <li
            key={name}
            className="flex items-center gap-3"
            style={{
              opacity: i < visibleNames ? 1 : 0.12,
              transform: i < visibleNames ? "none" : "translateY(4px)",
            }}
          >
            <span className="w-6 h-6 flex items-center justify-center bg-[#F9F6F4] border border-[#e7e6e4] font-geist text-[11px] text-slate-500">
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
  );
};
