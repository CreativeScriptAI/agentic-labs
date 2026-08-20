"use client";

import { useEffect, useRef } from "react";
import { animate } from "framer-motion";
import type { EngineStatus } from "src/lib/runVisibilityScan";

export const Container = ({
  children,
  className = "",
  size = "lg",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}) => {
  const w = { sm: "max-w-3xl", md: "max-w-5xl", lg: "max-w-6xl" };
  return (
    <div className={`${w[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export const Eyebrow = ({
  text,
  center = false,
}: {
  text: string;
  center?: boolean;
}) => (
  <p
    className={`font-geist text-[12px] uppercase tracking-[0.02em] text-red-500 mb-4 flex items-center gap-2 ${
      center ? "justify-center" : ""
    }`}
  >
    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#FCCA07]" />
    {text}
  </p>
);

export const ExampleChip = ({ className = "" }: { className?: string }) => (
  <span
    className={`inline-flex items-center font-geist text-[11px] uppercase tracking-[0.02em] text-slate-500 border border-[#e7e6e4] bg-white px-2 py-0.5 ${className}`}
  >
    Example
  </span>
);

export const EmptySeat = ({
  className = "",
}: {
  className?: string;
}) => (
  <div
    className={`flex items-center gap-3 border border-dashed border-[#FCCA07] bg-[#FCCA07]/10 px-3 py-2.5 animate-pulse motion-reduce:animate-none ${className}`}
  >
    <span
      aria-hidden
      className="w-6 h-6 flex-shrink-0 border border-dashed border-[#FCCA07] bg-transparent"
    />
    <span className="font-alte text-[15px] text-[#0A1128] tracking-[-0.04em]">
      Your business?
    </span>
  </div>
);

export const FadeUp = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Content renders visible in the SSR HTML so first paint never waits on JS
    // (good LCP, and safe if JS is slow on mobile). We only hide-then-animate
    // blocks that are still below the fold when this mounts, which is where the
    // scroll reveal actually reads.
    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(14px)";
    let oc: ReturnType<typeof animate> | null = null;
    let yc: ReturnType<typeof animate> | null = null;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        oc = animate(0, 1, {
          duration: 0.45,
          delay,
          ease: "easeOut",
          onUpdate: (v) => {
            el.style.opacity = `${v}`;
          },
        });
        yc = animate(14, 0, {
          duration: 0.45,
          delay,
          ease: "easeOut",
          onUpdate: (v) => {
            el.style.transform = `translateY(${v}px)`;
          },
        });
      },
      { rootMargin: "-40px" }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      oc?.stop();
      yc?.stop();
    };
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export const CheckSvg = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
      clipRule="evenodd"
    />
  </svg>
);

export const XSvg = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
  </svg>
);

export const engineStatusMeta: Record<
  EngineStatus,
  { label: string; wrap: string; dot: string; text: string }
> = {
  named: {
    label: "Names you",
    wrap: "border-emerald-500/40 bg-emerald-50/70",
    dot: "bg-emerald-500",
    text: "text-emerald-800",
  },
  mentioned: {
    label: "Mentions you",
    wrap: "border-amber-500/40 bg-amber-50/70",
    dot: "bg-amber-500",
    text: "text-amber-800",
  },
  absent: {
    label: "Names someone else",
    wrap: "border-red-500/30 bg-red-50/60",
    dot: "bg-red-500",
    text: "text-red-700",
  },
};


