"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type Props = {
  value: string;
  className?: string;
  duration?: number;
};

// Counts up a leading number in a string ("391%", "21x", "$97/month") once it
// scrolls into view. Falls back to the raw string for anything unparseable.
const AnimatedStat: React.FC<Props> = ({ value, className, duration = 1.1 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (!match) return;
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ""));
    if (Number.isNaN(target)) return;
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => {
        const formatted =
          decimals > 0
            ? v.toFixed(decimals)
            : Math.round(v).toLocaleString();
        setDisplay(`${prefix}${formatted}${suffix}`);
      },
    });
    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export default AnimatedStat;
