"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate, useInView } from "framer-motion";

type Shot = { src: string; caption: string; credit?: string };

const Card: React.FC<{ shot: Shot; index: number; wide: boolean }> = ({ shot, index, wide }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const el = ref.current;
    const delay = index * 0.1;
    const oc = animate(0, 1, { duration: 0.45, delay, ease: "easeOut", onUpdate: (v) => { el.style.opacity = `${v}`; } });
    const yc = animate(16, 0, { duration: 0.45, delay, ease: "easeOut", onUpdate: (v) => { el.style.transform = `translateY(${v}px)`; } });
    return () => { oc.stop(); yc.stop(); };
  }, [isInView, index]);

  return (
    <div
      ref={ref}
      className={`${wide ? "sm:col-span-2" : ""} rounded-none border border-[#e7e6e4] bg-white overflow-hidden`}
      style={{ opacity: 0, transform: "translateY(16px)" }}
    >
      {/* Browser chrome bar */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#e7e6e4] bg-[#F9F6F4]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#e7e6e4]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#e7e6e4]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#e7e6e4]" />
      </div>
      <div className={`relative w-full ${wide ? "h-[320px]" : "h-[220px]"} bg-[#F9F6F4]`}>
        <Image src={shot.src} alt={shot.caption} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover object-top" />
      </div>
      <div className="px-5 py-4 border-t border-[#e7e6e4]">
        <p className="font-alte font-normal text-[14px] text-[#0A1128] leading-[1.4] tracking-[-0.04em]">{shot.caption}</p>
        {shot.credit && (
          <p className="font-alte font-normal text-[12px] text-slate-400 mt-1 tracking-[-0.04em]">{shot.credit}</p>
        )}
      </div>
    </div>
  );
};

// Real product-UI screenshots rendered as a browser-framed gallery. Keeps the
// page image-dense with on-topic, non-stock visuals. First shot spans full width.
const ScreenshotShowcase: React.FC<{ title?: string; shots: Shot[] }> = ({ title, shots }) => {
  if (!shots?.length) return null;
  return (
    <section className="py-20 sm:py-28 bg-[#F9F6F4] border-y border-[#e7e6e4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-geist text-[12px] font-normal tracking-[0.02em] uppercase text-red-500 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07]" />
          What it looks like
        </p>
        {title && (
          <h2 className="text-3xl sm:text-[2.5rem] font-alte font-normal text-[#0A1128] leading-[1.2] tracking-[-0.04em] mb-12 max-w-2xl">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {shots.map((shot, i) => (
            <Card key={shot.src} shot={shot} index={i} wide={i === 0 && shots.length % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotShowcase;
