import React, { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────
 * ScrambleText — characters cycle through random glyphs, then
 * resolve left-to-right with a per-character stagger.
 *
 * Hero only: Display / H1 / H2 (heading mode) on page load, and
 * the hero description (body mode) shortly after.
 *
 * Layout safety: the final string is always what occupies layout
 * (one glyph per final character, whitespace never scrambles), so
 * the rendered line count never exceeds the resolved text.
 * ───────────────────────────────────────────────────────── */

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#%&*/\\|—·".split("");
const randGlyph = (seed: number) =>
  GLYPHS[Math.floor((Math.sin(seed * 999.13) * 0.5 + 0.5) * GLYPHS.length) % GLYPHS.length];

type Tag = "h1" | "h2" | "h3" | "p" | "span" | "div";

type Props = {
  text: string;
  as?: Tag;
  className?: string;
  delay?: number; // ms before the scramble starts
  mode?: "heading" | "body";
};

export default function ScrambleText({
  text,
  as = "span",
  className,
  delay = 220,
  mode = "heading",
}: Props) {
  const Tag = as as React.ElementType;
  const [display, setDisplay] = useState(text);
  const frame = useRef<number>(0);

  useEffect(() => {
    // Respect reduced motion: show the resolved text immediately.
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(text);
      return;
    }

    const chars = text.split("");
    const stagger = mode === "heading" ? 18 : 10; // ms between characters
    const durMin = mode === "heading" ? 20 : 10;
    const durMax = mode === "heading" ? 40 : 20;
    const maxTotal = mode === "heading" ? 600 : 400;

    // Each non-space char resolves at: index*stagger + a random window, capped.
    const resolveAt = chars.map((c, i) => {
      if (c.trim() === "") return 0;
      const window = durMin + Math.abs(Math.sin(i * 12.9898) * (durMax - durMin));
      return Math.min(i * stagger + window * 6, maxTotal);
    });

    let start = 0;
    const tick = (now: number) => {
      if (!start) start = now;
      const elapsed = now - start;
      let allDone = true;
      const out = chars.map((c, i) => {
        if (c.trim() === "") return c; // never scramble whitespace
        if (elapsed >= resolveAt[i]) return c; // resolved
        allDone = false;
        return randGlyph(i + Math.floor(elapsed / 32)); // cycle ~30fps
      });
      setDisplay(out.join(""));
      if (!allDone && elapsed < maxTotal) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    const startTimer = setTimeout(() => {
      frame.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(startTimer);
      cancelAnimationFrame(frame.current);
    };
  }, [text, delay, mode]);

  return (
    <Tag className={className} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </Tag>
  );
}
