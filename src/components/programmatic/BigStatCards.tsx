"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import AnimatedStat from "src/components/programmatic/AnimatedStat";

type Card = { stat: string; label: string; support?: string };

const StatCard: React.FC<{ card: Card; delay: number }> = ({ card, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const el = ref.current;
    const opacityControls = animate(0, 1, {
      duration: 0.45,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        el.style.opacity = `${v}`;
      },
    });
    const yControls = animate(14, 0, {
      duration: 0.45,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        el.style.transform = `translateY(${v}px)`;
      },
    });
    return () => {
      opacityControls.stop();
      yControls.stop();
    };
  }, [isInView, delay]);

  return (
    <div
      ref={ref}
      className="p-6 rounded-none border border-[#e7e6e4] bg-[#F9F6F4]"
      style={{ opacity: 0, transform: "translateY(14px)" }}
    >
      <p className="font-alte font-normal text-4xl sm:text-5xl text-[#0A1128] leading-none tracking-[-0.04em]">
        <AnimatedStat value={card.stat} />
      </p>
      <p className="font-geist text-[11px] font-normal tracking-[0.02em] uppercase text-slate-400 mt-3">
        {card.label}
      </p>
      {card.support && (
        <p className="font-alte font-normal text-[13px] text-slate-500 leading-[1.5] tracking-[-0.04em] mt-2 pt-2 border-t border-[#e7e6e4]">
          {card.support}
        </p>
      )}
    </div>
  );
};

const BigStatCards: React.FC<{ cards: Card[] }> = ({ cards }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {cards.map((card, i) => (
        <StatCard key={card.label} card={card} delay={i * 0.1} />
      ))}
    </div>
  );
};

export default BigStatCards;
