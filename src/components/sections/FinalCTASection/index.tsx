import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import RevealText from "src/components/RevealText";
import BracketButton from "src/components/BracketButton";

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
          className="relative overflow-hidden rounded-none bg-white border border-[#e7e6e4] px-4 py-10 sm:px-12 sm:py-16 text-center"
        >
          <div className="relative max-w-2xl mx-auto">
            {/* Eyebrow + animated accent line */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ ...SPRING, delay: 0.1 }}
              className="mb-7 flex items-center justify-center gap-3"
            >
              <span className="font-geist text-[15px] font-normal uppercase tracking-[0.2em] text-red-500">
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
              className="font-alte font-normal text-[40px] sm:text-[56px] lg:text-[75px] leading-[1.1] tracking-[-0.04em] text-[#0A1128] mb-2"
              text="Make AI work."
            />
            <RevealText
              as="h3"
              inView
              delay={0.45}
              className="font-alte font-normal text-[40px] sm:text-[56px] lg:text-[75px] leading-[1.1] tracking-[-0.04em] text-blue-600 mb-8 sm:mb-10"
              text="So you don't have to."
            />

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ ...SPRING, delay: 0.55 }}
              className="font-alte font-normal text-[15px] sm:text-[24px] tracking-[-0.04em] leading-relaxed text-[#0A1128]/70 max-w-md mx-auto mb-9 sm:mb-11"
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
                <BracketButton
                  label="Book a free call"
                  href="/ai-clarity-workshop"
                  variant="primary"
                  className="w-full sm:w-auto"
                />
              </motion.div>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="font-alte font-normal text-[15px] text-[#0A1128]/50 mt-6"
            >
              Or email us:{" "}
              <Link
                href="mailto:aditya@tryagentikai.com"
                className="font-alte underline underline-offset-4 hover:text-[#0A1128]"
              >
                aditya@tryagentikai.com
              </Link>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FinalCTASection;
