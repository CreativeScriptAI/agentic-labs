import React from "react";
import { motion } from "framer-motion";
import RevealText from "src/components/RevealText";

const cards = [
  {
    label: "Ready to deploy",
    description: "Agents we have already built. Live in days, not months.",
    meta: "Speed",
    metaValue: "Live in days",
    variant: "plain" as const,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
      </svg>
    ),
  },
  {
    label: "Custom build",
    description: "Designed around how your business actually works.",
    meta: "Fit",
    metaValue: "Built for you",
    variant: "tint" as const,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="m12 2 1.6 4.7L18.5 8l-3.5 3.4.9 4.9L12 14l-3.9 2.3.9-4.9L5.5 8l4.9-1.3L12 2Z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 320, damping: 30 },
  },
};

const WhatWeBuildSection = () => {
  return (
    <div
      id="what_we_build"
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
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-4 font-sfpro">
            What we do
          </p>

          <div className="relative inline-block px-4">
            <RevealText
              as="h2"
              text="Tell us the outcome. We build it."
              inView
              stagger={0.14}
              className="block text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1128] font-mondwest mb-4"
            />
            {/* Hand-drawn underline accent under "build it." */}
            <motion.svg
              viewBox="0 0 240 14"
              fill="none"
              preserveAspectRatio="none"
              className="absolute -bottom-1 right-4 w-[150px] sm:w-[180px] h-3 text-blue-600"
              aria-hidden="true"
            >
              <motion.path
                d="M2 9C40 4 90 3 150 5c30 1 60 3 88 2"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.7, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base sm:text-lg lg:text-[20px] font-normal text-[#1E293B] font-sfpro px-4 max-w-2xl mx-auto leading-relaxed mt-2"
          >
            We build the AI agents and automations that run the work. Not one
            product. Whatever the job needs.
          </motion.p>

          {/* One door, two speeds */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-[0_4px_16px_rgba(10,17,40,0.04)]"
          >
            <span className="font-sfpro text-xs sm:text-sm font-semibold text-[#0A1128]">
              One door
            </span>
            <span className="h-1 w-1 rounded-full bg-blue-600" />
            <span className="font-sfpro text-xs sm:text-sm font-semibold text-blue-600">
              two speeds
            </span>
          </motion.div>
        </div>

        {/* Two contrasting cards: stack on mobile, 2-up on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-12 sm:mb-16"
        >
          {cards.map((card, index) => {
            const isTint = card.variant === "tint";
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className={[
                  "group relative overflow-hidden rounded-3xl p-7 sm:p-9 transition-colors duration-300",
                  isTint
                    ? "bg-[#EEF3FF]"
                    : "bg-white border border-slate-100",
                ].join(" ")}
              >
                {/* Thin top accent line */}
                <div
                  aria-hidden="true"
                  className={[
                    "pointer-events-none absolute inset-x-0 top-0 h-0.5 transition-opacity duration-500",
                    isTint
                      ? "bg-blue-600/40 opacity-100"
                      : "bg-blue-600/20 opacity-70 group-hover:opacity-100",
                  ].join(" ")}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={[
                      "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-blue-600",
                      isTint ? "bg-white" : "bg-blue-600/10",
                    ].join(" ")}
                  >
                    {card.icon}
                  </div>

                  {/* Meta label */}
                  <p className="font-sfpro text-[11px] font-bold uppercase tracking-[0.16em] mb-2 text-blue-600">
                    {card.meta}
                  </p>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-[28px] font-bold font-mondwest mb-3 leading-tight text-[#0A1128]">
                    {card.label}
                  </h3>

                  {/* Description */}
                  <p className="font-sfpro text-sm sm:text-base leading-relaxed text-slate-600">
                    {card.description}
                  </p>

                  {/* Footer tag */}
                  <div
                    className={[
                      "mt-6 flex items-center gap-2 border-t pt-4",
                      isTint ? "border-blue-600/15" : "border-slate-100",
                    ].join(" ")}
                  >
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span className="font-sfpro text-xs sm:text-sm font-semibold text-[#0A1128]">
                      {card.metaValue}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="w-10 h-0.5 bg-blue-600 mx-auto mb-6 sm:mb-8" />
          <p className="text-slate-700 font-sfpro text-base sm:text-lg lg:text-xl leading-relaxed">
            Ready or custom, same promise:{" "}
            <span className="font-semibold text-[#0A1128]">
              it works, and you don&apos;t run it.
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeBuildSection;
