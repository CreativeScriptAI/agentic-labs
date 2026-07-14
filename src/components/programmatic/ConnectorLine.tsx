"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

// Draws a horizontal line in on scroll. Uses the imperative useInView + animate()
// pattern (not framer's declarative whileInView, which was found to silently no-op
// in this app's dev environment).
const ConnectorLine: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const controls = animate(0, 1, {
      duration: 0.6,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.style.transform = `scaleX(${v})`;
      },
    });
    return () => controls.stop();
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 right-0 h-px bg-[#e7e6e4]"
      style={{ transformOrigin: "left", transform: "scaleX(0)" }}
    />
  );
};

export default ConnectorLine;
