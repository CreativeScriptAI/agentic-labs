import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import BridgeMotion from "./BridgeMotion";
import RevealText from "src/components/RevealText";

/* hero copy fades up after the headline reveals */
const FADE_UP = { type: "spring" as const, stiffness: 320, damping: 30 };

const CAL_LINK =
  "https://cal.com/ai-aditya/30min";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-[#F9F6F4] w-[calc(100%+2rem)] -ml-4 -mr-4 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:py-28">
      {/* lab "blueprint" dot texture — even + very subtle, fades at all edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(10,17,40,0.045) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(circle at 50% 45%, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 45%, black 30%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: copy (animates in on load) ────────────────────────── */}
          <div className="text-center lg:text-left">
            {/* Headline: opinionated hook, word-by-word reveal */}
            <h1 className="font-mondwest font-bold tracking-tight leading-[1.06] mb-6 text-3xl sm:text-4xl lg:text-5xl">
              <RevealText
                as="span"
                text="Most AI is a demo."
                delay={0.1}
                stagger={0.06}
                className="block text-[#0A1128]"
              />
              <span className="relative inline-block mt-1">
                <RevealText
                  as="span"
                  text="We build the kind that survives a real customer."
                  delay={0.45}
                  stagger={0.05}
                  className="block text-blue-600"
                />
                {/* hand-drawn underline accent, draws in after the words land */}
                <motion.svg
                  aria-hidden="true"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1.5 left-0 w-full h-2.5 text-blue-500/60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <motion.path
                    d="M3 8 C 60 3, 120 3, 160 6 S 250 10, 297 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 1.05, ease: "easeOut" }}
                  />
                </motion.svg>
              </span>
            </h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...FADE_UP, delay: 0.9 }}
              className="font-sfpro text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              We build the AI agents and automations that handle the repetitive
              work: the calls, the follow-ups, the bookings, the busywork. Then we
              run them for you. You get the outcome. You never touch the wires.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...FADE_UP, delay: 1.0 }}
              className="font-sfpro text-slate-800 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-lg mx-auto lg:mx-0 mt-3"
            >
              Make AI work. So you don&apos;t have to.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...FADE_UP, delay: 1.1 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4 mt-8"
            >
              <Link
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-[#FCCA07] px-7 py-3.5 text-sm font-semibold text-[#0A1128] shadow-[0_6px_20px_rgba(252,202,7,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#f0bd00] hover:shadow-[0_10px_26px_rgba(252,202,7,0.45)] active:scale-[0.98]"
              >
                Book a free call
              </Link>
              <a
                href="#what_we_build"
                className="group inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-blue-600 hover:text-blue-700 transition-colors px-4 py-3"
              >
                Talk to the AI
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="font-sfpro text-xs text-slate-400 mt-8 max-w-lg mx-auto lg:mx-0"
            >
              Quietly running work for businesses across travel, home services,
              hiring, and coaching.
            </motion.p>
          </div>

          {/* ── Right: tools → us → outcome (animated, the bridge we are) ── */}
          <BridgeMotion />
        </div>
      </div>

      {/* ── Scroll cue ───────────────────────────────────────────────── */}
      <motion.a
        href="#what_we_build"
        aria-label="Scroll to see how it works"
        className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/60 text-slate-500 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </motion.a>
    </div>
  );
};

export default HeroSection;
