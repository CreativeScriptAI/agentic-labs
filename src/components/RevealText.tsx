import React from "react";
import { motion, type Variants } from "framer-motion";

/* ─────────────────────────────────────────────────────────
 * RevealText — word-by-word entrance (GenieStudio-style).
 * Each word rises + fades in, staggered. Plays on mount by
 * default; pass `inView` to trigger on scroll instead.
 * ───────────────────────────────────────────────────────── */

const WORD_SPRING = { type: "spring" as const, stiffness: 380, damping: 30 };

type Tag = "h1" | "h2" | "h3" | "p" | "span" | "div";

type Props = {
  text: string;
  as?: Tag;
  className?: string;
  delay?: number; // s before the first word
  stagger?: number; // s between words
  inView?: boolean; // animate on scroll-into-view instead of mount
};

const container = (delay: number, stagger: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const word: Variants = {
  hidden: { y: 14, opacity: 0 },
  show: { y: 0, opacity: 1, transition: WORD_SPRING },
};

export default function RevealText({
  text,
  as = "span",
  className,
  delay = 0,
  stagger = 0.06,
  inView = false,
}: Props) {
  const MotionTag = motion[as] as typeof motion.span;
  const words = text.split(" ");

  const trigger = inView
    ? { whileInView: "show", viewport: { once: true, margin: "-80px" } as const }
    : { animate: "show" };

  return (
    <MotionTag
      className={className}
      aria-label={text}
      initial="hidden"
      variants={container(delay, stagger)}
      {...trigger}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          aria-hidden="true"
          className="inline-block"
          variants={word}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
