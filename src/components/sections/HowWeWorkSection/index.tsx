import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealText from "src/components/RevealText";

const CAL_LINK = "https://cal.com/ai-aditya/30min";

const steps = [
  {
    days: "Step 1",
    title: "We talk",
    description:
      "We map what eats your team's time. Every call, every follow-up, every manual task.",
    effort: "You spend: about an hour.",
    deliverable: null,
  },
  {
    days: "Step 2",
    title: "We build",
    description:
      "Agents, automations, and the connections between them, wired to the tools you already use.",
    effort: "You spend: nothing. We build.",
    deliverable: null,
  },
  {
    days: "Step 3",
    title: "It goes live",
    description:
      "We turn it on and watch every interaction from day one.",
    effort: "You spend: a quick review.",
    deliverable: null,
  },
  {
    days: "Step 4",
    title: "We keep tuning",
    description:
      "It gets better every week while you get on with your day.",
    effort: "You spend: nothing.",
    deliverable: null,
  },
];

const spring = { type: "spring" as const, stiffness: 320, damping: 30 };
const viewport = { once: true, margin: "-80px" };

const HowWeWorkSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 80%", "end 60%"],
  });
  // Vertical progress line (mobile + desktop fallback) driven by scroll.
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5 }}
            className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-4 sm:mb-6"
          >
            How it goes
          </motion.p>
          <RevealText
            text="You do almost nothing."
            as="h2"
            inView
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest px-4 mb-2"
          />
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...spring, delay: 0.25 }}
            className="text-lg sm:text-xl lg:text-[24px] font-normal text-[#1E293B] font-sfpro px-4"
          >
            From the first call to a system that runs itself.
          </motion.h3>
        </div>

        {/* ===================== DESKTOP: horizontal timeline ===================== */}
        <div className="hidden lg:block mb-16">
          <DesktopTimeline />
        </div>

        {/* ===================== MOBILE / TABLET: vertical timeline ===================== */}
        <div ref={trackRef} className="lg:hidden relative mb-10 sm:mb-14">
          {/* Track background */}
          <div className="absolute left-[27px] sm:left-[31px] top-2 bottom-2 w-[2px] bg-slate-200 rounded-full" />
          {/* Track progress that draws in on scroll */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[27px] sm:left-[31px] top-2 bottom-2 w-[2px] origin-top bg-gradient-to-b from-blue-600 to-blue-500 rounded-full"
          />

          <div className="space-y-5 sm:space-y-7">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ ...spring, delay: index * 0.08 }}
                className="relative flex gap-4 sm:gap-6"
              >
                {/* Step marker */}
                <div className="flex-shrink-0 relative z-10">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={viewport}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 22,
                      delay: index * 0.08 + 0.1,
                    }}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/25 ring-4 ring-[#F9F6F4]"
                  >
                    <span className="text-white font-mondwest text-xl sm:text-2xl font-bold leading-none">
                      {index + 1}
                    </span>
                  </motion.div>
                </div>

                {/* Card */}
                <div className="flex-grow bg-white rounded-2xl shadow-sm border border-slate-100 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-2">
                    <span className="text-[11px] sm:text-xs text-blue-600 font-sfpro font-semibold uppercase tracking-[0.14em]">
                      {step.days}
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-[#0A1128] font-mondwest">
                      {step.title}
                    </span>
                  </div>
                  <p className="text-slate-600 font-sfpro text-sm sm:text-base leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <p className="inline-flex items-center gap-1.5 text-slate-800 font-sfpro text-sm sm:text-base font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {step.effort}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={spring}
          className="text-center"
        >
          <p className="text-slate-700 font-sfpro text-sm sm:text-base lg:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            Your part is about an hour at the start.{" "}
            <span className="font-semibold text-[#0A1128]">
              After that, you mostly forget it is there.
            </span>
          </p>
          <Link
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-[#FCCA07] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-[#0A1128] shadow-sm transition-all hover:bg-yellow-500 hover:-translate-y-0.5 hover:shadow-md"
          >
            Book a free call
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

/* Horizontal timeline for large screens: an SVG progress track that draws in
   on scroll via pathLength, with markers popping in and cards staggering up. */
const DesktopTimeline = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="relative">
      {/* SVG connecting line spanning the 4 markers */}
      <div className="absolute left-0 right-0" style={{ top: 32 }}>
        <svg
          viewBox="0 0 1000 4"
          preserveAspectRatio="none"
          className="w-full h-1 overflow-visible"
        >
          <line
            x1="0"
            y1="2"
            x2="1000"
            y2="2"
            stroke="#E2E8F0"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <motion.line
            x1="0"
            y1="2"
            x2="1000"
            y2="2"
            stroke="#0062FF"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={viewport}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="relative grid grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Marker */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={viewport}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 20,
                delay: 0.25 + index * 0.18,
              }}
              className="relative z-10 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30 ring-4 ring-[#F9F6F4]"
            >
              <span className="text-white font-mondwest text-2xl font-bold leading-none">
                {index + 1}
              </span>
            </motion.div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...spring, delay: 0.35 + index * 0.18 }}
              className="mt-6 w-full bg-white rounded-3xl shadow-sm border border-slate-100 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <span className="block text-xs text-blue-600 font-sfpro font-semibold uppercase tracking-[0.16em] mb-1.5">
                {step.days}
              </span>
              <h4 className="text-xl font-bold text-[#0A1128] font-mondwest mb-3">
                {step.title}
              </h4>
              <p className="text-slate-600 font-sfpro text-sm leading-relaxed mb-4 min-h-[60px]">
                {step.description}
              </p>
              <p className="inline-flex items-center gap-1.5 text-slate-800 font-sfpro text-sm font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {step.effort}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWorkSection;
