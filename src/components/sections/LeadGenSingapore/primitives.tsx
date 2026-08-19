"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

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
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  // Safety net: never leave content stuck at opacity 0 if the observer is slow
  // to fire (above-the-fold hydration timing). Forces a reveal after a beat.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => {
      if (!el.style.opacity || el.style.opacity === "0") {
        el.style.opacity = "1";
        el.style.transform = "none";
      }
    }, 450);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const el = ref.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }
    const oc = animate(0, 1, {
      duration: 0.45,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        el.style.opacity = `${v}`;
      },
    });
    const yc = animate(14, 0, {
      duration: 0.45,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        el.style.transform = `translateY(${v}px)`;
      },
    });
    return () => {
      oc.stop();
      yc.stop();
    };
  }, [isInView, delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: "translateY(14px)" }}
    >
      {children}
    </div>
  );
};
