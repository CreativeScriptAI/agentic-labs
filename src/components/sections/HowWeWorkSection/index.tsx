import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealText from "src/components/RevealText";
import BracketButton from "src/components/BracketButton";

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
            className="text-[#0062FF] font-geist uppercase text-[12px] tracking-[0.02em] mb-4 sm:mb-6"
          >
            How it goes
          </motion.p>
          <RevealText
            text="You do almost nothing."
            as="h2"
            inView
            className="font-alte font-normal text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.2] tracking-[-0.04em] text-[#0A1128] px-4 mb-2"
          />
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...spring, delay: 0.25 }}
            className="font-alte font-normal text-[15px] sm:text-[17px] lg:text-[19px] tracking-[-0.02em] text-[#1E293B] px-4"
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
          <div className="absolute left-[27px] sm:left-[31px] top-2 bottom-2 w-[2px] bg-[#e7e6e4]" />
          {/* Track progress that draws in on scroll */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[27px] sm:left-[31px] top-2 bottom-2 w-[2px] origin-top bg-[#0062FF]"
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
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-none bg-[#0062FF] flex items-center justify-center ring-4 ring-[#F9F6F4]"
                  >
                    <span className="text-white font-alte font-normal text-2xl sm:text-3xl leading-none">
                      {index + 1}
                    </span>
                  </motion.div>
                </div>

                {/* Card */}
                <div className="flex-grow bg-white rounded-none border border-[#e7e6e4] p-5 sm:p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-2">
                    <span className="font-geist uppercase text-[12px] tracking-[0.02em] text-[#0062FF]">
                      {step.days}
                    </span>
                    <span className="font-alte font-normal text-[20px] tracking-[-0.04em] text-[#0A1128]">
                      {step.title}
                    </span>
                  </div>
                  <p className="text-[#475569] font-alte font-normal text-[15px] leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <p className="inline-flex items-center gap-1.5 text-[#0A1128] font-alte font-normal text-[15px]">
                    <span className="h-1.5 w-1.5 rounded-none bg-emerald-500" />
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
          <p className="text-[#334155] font-alte font-normal text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed mb-6 max-w-2xl mx-auto">
            Your part is about an hour at the start.{" "}
            <span className="text-[#0A1128]">
              After that, you mostly forget it is there.
            </span>
          </p>
          <BracketButton
            label="Book a free call"
            href={CAL_LINK}
            variant="primary"
            external
          />
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
            stroke="#e7e6e4"
            strokeWidth="4"
          />
          <motion.line
            x1="0"
            y1="2"
            x2="1000"
            y2="2"
            stroke="#0062FF"
            strokeWidth="4"
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
              className="relative z-10 w-16 h-16 rounded-none bg-[#0062FF] flex items-center justify-center ring-4 ring-[#F9F6F4]"
            >
              <span className="text-white font-alte font-normal text-3xl leading-none">
                {index + 1}
              </span>
            </motion.div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...spring, delay: 0.35 + index * 0.18 }}
              className="mt-6 w-full bg-white rounded-none border border-[#e7e6e4] p-6 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span className="block font-geist uppercase text-[12px] tracking-[0.02em] text-[#0062FF] mb-1.5">
                {step.days}
              </span>
              <h4 className="font-alte font-normal text-[20px] tracking-[-0.04em] text-[#0A1128] mb-3">
                {step.title}
              </h4>
              <p className="text-[#475569] font-alte font-normal text-[15px] leading-relaxed mb-4 min-h-[60px]">
                {step.description}
              </p>
              <p className="inline-flex items-center gap-1.5 text-[#0A1128] font-alte font-normal text-[15px]">
                <span className="h-1.5 w-1.5 rounded-none bg-emerald-500" />
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
