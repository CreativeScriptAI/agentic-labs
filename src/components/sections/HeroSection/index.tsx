import React from "react";
import { motion } from "framer-motion";
import BridgeMotion from "./BridgeMotion";
import ScrambleText from "src/components/ScrambleText";
import BracketButton from "src/components/BracketButton";

/* hero copy fades up after the headline reveals */
const FADE_UP = { type: "spring" as const, stiffness: 320, damping: 30 };

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-[#F9F6F4] w-[calc(100%+2rem)] -ml-4 -mr-4 pt-[80px] pb-[70px] sm:pt-[100px] sm:pb-[90px] lg:py-[120px]">
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
            {/* Headline: opinionated hook, scramble reveal */}
            <h1 className="font-alte font-normal tracking-[-0.04em] leading-[1.08] mb-6 text-[34px] sm:text-[44px] lg:text-[52px]">
              <ScrambleText
                as="span"
                mode="heading"
                text="Most AI is a demo."
                delay={220}
                className="block text-[#0A1128]"
              />
              <ScrambleText
                as="span"
                mode="heading"
                text="We build the kind that survives a real customer."
                delay={480}
                className="block text-blue-600 mt-1"
              />
            </h1>

            {/* Subhead */}
            <ScrambleText
              as="p"
              mode="body"
              delay={700}
              text="We build the AI agents and automations that handle the repetitive work: the calls, the follow-ups, the bookings, the busywork. Then we run them for you. You get the outcome. You never touch the wires."
              className="font-alte font-normal text-slate-600 text-[15px] leading-[1.5] tracking-[-0.04em] max-w-lg mx-auto lg:mx-0"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...FADE_UP, delay: 1.0 }}
              className="font-alte font-normal text-slate-800 text-[15px] leading-[1.5] tracking-[-0.04em] max-w-lg mx-auto lg:mx-0 mt-3"
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
              <BracketButton
                label="Book a free call"
                href="/ai-clarity-workshop"
                variant="primary"
              />
            </motion.div>

            {/* Trust strip */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="font-alte font-normal text-[15px] leading-[1.5] tracking-[-0.04em] text-slate-400 mt-8 max-w-lg mx-auto lg:mx-0"
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
        className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 h-9 w-9 items-center justify-center rounded-none border border-[#e7e6e4] text-slate-500"
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
