"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { COMPARE } from "./copy";

const NAMES = ["You", "A known competitor", "A third name"] as const;

type SlabProps = {
  slabRef: React.RefObject<HTMLDivElement | null>;
  label: string;
  caption: string;
  tint: string;
};

const Slab = ({ slabRef, label, caption, tint }: SlabProps) => (
  <div
    ref={slabRef}
    className={`w-full border border-[#e7e6e4] rounded-none px-4 py-4 ${tint} will-change-transform`}
    style={{ opacity: 0, transform: "translateY(28px)" }}
  >
    <div className="flex items-baseline justify-between gap-3">
      <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-[#0A1128]">
        {label}
      </span>
      <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500 text-right">
        {caption}
      </span>
    </div>
  </div>
);

const SeoAeoStack = ({ className = "" }: { className?: string }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rootRef, { once: true, margin: "-40px" });

  const seoRef = useRef<HTMLDivElement>(null);
  const aeoRef = useRef<HTMLDivElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isInView) return;

    const seo = seoRef.current;
    const aeo = aeoRef.current;
    const answer = answerRef.current;
    if (!seo || !aeo || !answer) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced) {
      for (const el of [seo, aeo, answer]) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
      return;
    }

    const controls: { stop: () => void }[] = [];

    const rise = (el: HTMLElement, from: number, delay: number) => {
      const o = animate(0, 1, {
        duration: 0.5,
        delay,
        ease: "easeOut",
        onUpdate: (v) => {
          el.style.opacity = `${v}`;
        },
      });
      const t = animate(from, 0, {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (v) => {
          el.style.transform = `translateY(${v}px)`;
        },
      });
      controls.push(o, t);
    };

    // Bottom slab settles first, then the middle slab, then the answer lifts out.
    rise(seo, 28, 0);
    rise(aeo, 28, 0.35);
    rise(answer, 36, 0.85);

    return () => controls.forEach((c) => c.stop());
  }, [isInView]);

  return (
    <div className={`w-full ${className}`}>
      <div
        ref={rootRef}
        className="max-w-xl mx-auto flex flex-col items-center"
        aria-label="AEO layer sits on top of the SEO foundation, and the AI answer rises out of the top"
      >
        {/* Answer card: lifts up and out of the stack */}
        <div
          ref={answerRef}
          className="w-full max-w-sm bg-white border border-[#0A1128] rounded-none will-change-transform"
          style={{ opacity: 0, transform: "translateY(36px)" }}
        >
          <div className="flex items-center justify-between border-b border-[#e7e6e4] px-4 py-2.5">
            <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-slate-500">
              AI answer
            </span>
            <span className="font-geist text-[10px] uppercase tracking-[0.02em] text-blue-600">
              You get named
            </span>
          </div>
          <div className="px-4 py-3 space-y-2">
            {NAMES.map((name, i) => {
              const isYou = i === 0;
              return (
                <div
                  key={name}
                  className={`flex items-center gap-3 border rounded-none px-3 py-2 ${
                    isYou
                      ? "border-blue-600 bg-[#FCCA07]/10"
                      : "border-[#e7e6e4] bg-white"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`w-5 h-5 flex-shrink-0 border rounded-none ${
                      isYou
                        ? "border-blue-600 bg-[#FCCA07]"
                        : "border-[#e7e6e4] bg-[#F9F6F4]"
                    }`}
                  />
                  <span
                    className={`font-alte text-[15px] tracking-[-0.04em] ${
                      isYou ? "text-blue-600" : "text-[#0A1128]"
                    }`}
                  >
                    {name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Connector: the answer only appears because of the layers below */}
        <div
          aria-hidden
          className="w-px h-5 bg-[#e7e6e4]"
        />

        {/* The stack: AEO layer resting on the SEO foundation */}
        <div className="w-full max-w-md flex flex-col gap-1.5">
          <Slab
            slabRef={aeoRef}
            label="AEO layer"
            caption="Make the ranking page extractable"
            tint="bg-white"
          />
          <Slab
            slabRef={seoRef}
            label="SEO foundation"
            caption="Rank in normal search"
            tint="bg-[#efeee9]"
          />
        </div>

        {/* Compact caption from copy, verbatim */}
        <p className="font-alte text-[13px] leading-snug text-slate-600 tracking-[-0.04em] text-center mt-5 max-w-md">
          {COMPARE.foot}
        </p>
      </div>
    </div>
  );
};

export default SeoAeoStack;
