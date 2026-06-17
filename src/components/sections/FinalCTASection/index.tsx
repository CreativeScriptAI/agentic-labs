import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import RevealText from "src/components/RevealText";

const CAL_LINK =
  "https://cal.com/ai-aditya/30min";

const VIEWPORT = { once: true, margin: "-80px" };
const SPRING = { type: "spring", stiffness: 320, damping: 30 } as const;

const FinalCTASection = () => {
  return (
    <div
      className="py-12 sm:py-16 lg:py-20"
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ ...SPRING, damping: 26 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white to-blue-50/60 px-4 py-10 sm:px-12 sm:py-16 text-center ring-1 ring-[#0A1128]/[0.06]"
        >
          {/* Soft in-palette glow, light surface */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
            className="pointer-events-none absolute -top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.10), transparent 70%)" }}
          />

          <div className="relative max-w-2xl mx-auto">
            {/* Eyebrow + animated accent line */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ ...SPRING, delay: 0.1 }}
              className="mb-7 flex items-center justify-center gap-3"
            >
              <span className="font-sfpro text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Ready when you are
              </span>
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={VIEWPORT}
              transition={{ ...SPRING, delay: 0.2 }}
              className="mx-auto mb-8 h-px w-24 origin-center bg-gradient-to-r from-transparent via-blue-600 to-transparent"
            />

            {/* Headline */}
            <RevealText
              as="h2"
              inView
              delay={0.25}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A1128] font-mondwest mb-2 tracking-tight"
              text="Make AI work."
            />
            <RevealText
              as="h3"
              inView
              delay={0.45}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600 font-mondwest mb-8 sm:mb-10 tracking-tight"
              text="So you don't have to."
            />

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ ...SPRING, delay: 0.55 }}
              className="text-[#0A1128]/70 font-sfpro text-base sm:text-lg leading-relaxed font-medium max-w-md mx-auto mb-9 sm:mb-11"
            >
              Book a free call, or call the AI yourself and hear it first.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ ...SPRING, delay: 0.65 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ y: -1 }}
                transition={SPRING}
                className="w-full sm:w-auto"
              >
                <Link
                  href={CAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full sm:w-auto rounded-xl bg-[#FCCA07] px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold text-[#0A1128] shadow-[0_12px_30px_-10px_rgba(252,202,7,0.55)] transition-shadow hover:shadow-[0_18px_40px_-10px_rgba(252,202,7,0.7)]"
                >
                  Book a free call
                </Link>
              </motion.div>
              <Link
                href="#talk-to-ai"
                className="group inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-[#0A1128]/15 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold text-[#0A1128] transition-colors hover:bg-[#0A1128]/[0.04]"
              >
                Talk to the AI
                <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="text-[#0A1128]/50 font-sfpro text-xs sm:text-sm mt-6"
            >
              Or email us: aditya@tryagentikai.com
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FinalCTASection;
