import React from "react";
import { motion } from "framer-motion";
import RevealText from "src/components/RevealText";
import BracketButton from "src/components/BracketButton";

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
          <p className="font-geist uppercase text-[12px] tracking-[0.02em] text-red-500 font-normal mb-4 sm:mb-5">
            Who this is for
          </p>
          <RevealText
            as="h2"
            text="Built for the person who became the bottleneck."
            className="font-alte font-normal text-[#0A1128] text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.2] tracking-[-0.04em] px-4"
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
            className="relative rounded-none border border-[#e7e6e4] bg-white p-6 sm:p-8"
          >
            <div className="mb-5 sm:mb-6 flex items-center gap-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-none border border-emerald-300 text-emerald-600">
                <CheckIcon />
              </span>
              <h4 className="font-geist uppercase font-normal text-[#0A1128] text-[12px] tracking-[0.02em]">
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
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-none border border-emerald-300 text-emerald-600">
                    <CheckIcon />
                  </span>
                  <span className="font-alte font-normal text-slate-700 text-[15px] tracking-[-0.04em] leading-relaxed">
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
            className="rounded-none border border-[#e7e6e4] bg-white p-6 sm:p-8"
          >
            <div className="mb-5 sm:mb-6 flex items-center gap-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-none border border-red-300 text-red-400">
                <XIcon />
              </span>
              <h4 className="font-geist uppercase font-normal text-slate-400 text-[12px] tracking-[0.02em]">
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
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-none border border-red-300 text-red-400">
                    <XIcon />
                  </span>
                  <span className="font-alte font-normal text-slate-400 text-[15px] tracking-[-0.04em] leading-relaxed line-through decoration-red-200 decoration-1">
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
          <p className="font-alte font-normal text-[#0A1128] text-[15px] tracking-[-0.04em] leading-relaxed mb-6">
            If you&apos;re nodding at the first list, we should talk.
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

export default WhoItsForSection;
