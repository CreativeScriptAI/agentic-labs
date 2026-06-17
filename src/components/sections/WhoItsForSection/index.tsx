import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import RevealText from "src/components/RevealText";

const CAL_LINK =
  "https://cal.com/ai-aditya/30min";

const forYouItems = [
  "You run a small or mid-size business and the work piles on you.",
  "You have real customers and real demand.",
  "You don't have the hours, or the patience to learn one more tool.",
  "You want it done, not explained.",
];

const notForYouItems = [
  "You want to explore AI with no real outcome in mind.",
  "You want to run the tool yourself. We build it to run without you.",
  "You are shopping for a 500 dollar chatbot.",
];

const spring = { type: "spring", stiffness: 320, damping: 30 } as const;

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: spring },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: spring },
};

const CheckIcon = () => (
  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const WhoItsForSection = () => {
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
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-4 sm:mb-5">
            Who this is for
          </p>
          <RevealText
            as="h2"
            text="Built for the person who became the bottleneck."
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest px-4"
            inView
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-14">
          {/* This is for you — light emerald-tinted surface with thin left accent */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ y: -4 }}
            transition={spring}
            className="relative rounded-2xl border-l-2 border-emerald-400 bg-emerald-50/60 p-6 sm:p-8"
          >
            <div className="mb-5 sm:mb-6 flex items-center gap-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 ring-1 ring-emerald-200">
                <CheckIcon />
              </span>
              <h4 className="text-base sm:text-lg font-bold text-[#0A1128] font-mondwest">
                This is for you if:
              </h4>
            </div>
            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-3.5 sm:space-y-4"
            >
              {forYouItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 ring-1 ring-emerald-200">
                    <CheckIcon />
                  </span>
                  <span className="text-slate-700 font-sfpro text-sm sm:text-base leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* This is NOT for you — plain, lighter treatment */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ y: -4 }}
            transition={spring}
            className="rounded-2xl p-6 sm:p-8 md:border-l md:border-slate-200/80"
          >
            <div className="mb-5 sm:mb-6 flex items-center gap-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-red-400 ring-1 ring-red-100">
                <XIcon />
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-400 font-mondwest">
                This is NOT for you if:
              </h4>
            </div>
            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-3.5 sm:space-y-4"
            >
              {notForYouItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-red-400 ring-1 ring-red-100">
                    <XIcon />
                  </span>
                  <span className="text-slate-400 font-sfpro text-sm sm:text-base leading-relaxed line-through decoration-red-200 decoration-1">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={spring}
          className="text-center"
        >
          <p className="text-[#0A1128] font-sfpro text-base sm:text-lg lg:text-xl font-medium leading-relaxed mb-6">
            If you&apos;re nodding at the first list, we should talk.
          </p>
          <Link
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#FCCA07] px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#0A1128] shadow-lg shadow-[#FCCA07]/30 transition-all hover:-translate-y-0.5 hover:bg-yellow-500 hover:shadow-xl hover:shadow-[#FCCA07]/40"
          >
            Book a free call
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default WhoItsForSection;
