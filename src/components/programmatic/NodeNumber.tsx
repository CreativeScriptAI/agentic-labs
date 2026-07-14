"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

const NodeNumber: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const el = ref.current;
    const opacityControls = animate(0, 1, {
      duration: 0.35,
      ease: "easeOut",
      onUpdate: (v) => {
        el.style.opacity = `${v}`;
      },
    });
    const scaleControls = animate(0.85, 1, {
      duration: 0.35,
      ease: "easeOut",
      onUpdate: (v) => {
        el.style.transform = `scale(${v})`;
      },
    });
    return () => {
      opacityControls.stop();
      scaleControls.stop();
    };
  }, [isInView]);

  return (
    <span ref={ref} className={className} style={{ opacity: 0, transform: "scale(0.85)" }}>
      {children}
    </span>
  );
};

export default NodeNumber;
