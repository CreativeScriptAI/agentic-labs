import React from "react";
import { motion, type Variants } from "framer-motion";
import RevealText from "src/components/RevealText";

/* ─────────────────────────────────────────────────────────
 * "The problem" — the relatable feeling, then the honest turn.
 * Everyday misses stack in like notifications, then resolve into
 * "you don't need another tool, you need it done."
 * ───────────────────────────────────────────────────────── */

const SPRING = { type: "spring" as const, stiffness: 320, damping: 30 };
const VIEWPORT = { once: true, margin: "-80px" } as const;

const listV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};
const rowV: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: SPRING },
};

const misses = [
  {
    title: "Missed call",
    time: "9:14 PM",
    note: "A new customer. Straight to voicemail.",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Follow-up never sent",
    time: "3 days late",
    note: "Still sitting in your drafts.",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "The same reply, typed again",
    time: "100th time",
    note: "By hand. Like every day this week.",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Another AI subscription",
    time: "auto-renews",
    note: "For a tool you never switched on.",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
      </svg>
    ),
  },
];

const ProblemSection = () => {
  return (
    <div
      className="py-16 sm:py-24"
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={SPRING}
            className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-4 font-sfpro"
          >
            The problem
          </motion.p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mondwest leading-tight">
            <RevealText
              as="span"
              text="You keep buying AI tools."
              inView
              stagger={0.06}
              className="block text-[#0A1128]"
            />
            <span className="relative inline-block mt-1">
              <RevealText
                as="span"
                text="You still don't have the outcome."
                inView
                delay={0.28}
                stagger={0.05}
                className="block text-[#0A1128]"
              />
              <motion.svg
                aria-hidden="true"
                viewBox="0 0 320 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 w-full h-2.5 text-red-400/70"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <motion.path
                  d="M3 8 C 70 3, 140 4, 180 6 S 270 10, 317 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
                />
              </motion.svg>
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ ...SPRING, delay: 0.15 }}
            className="text-slate-500 font-sfpro text-base sm:text-lg max-w-xl mx-auto mt-6 leading-relaxed"
          >
            You&apos;ve got the tabs open. ChatGPT, a workflow tool, three more you
            signed up for last month. And the work? Still sitting on you.
          </motion.p>
        </div>

        {/* The misses, stacking in like notifications */}
        <motion.div
          className="max-w-md mx-auto space-y-3"
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          variants={listV}
        >
          {misses.map((m) => (
            <motion.div
              key={m.title}
              variants={rowV}
              className="flex items-start gap-3.5 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_18px_rgba(10,17,40,0.05)] px-4 py-3.5"
            >
              <div className="shrink-0 w-9 h-9 rounded-xl bg-red-50 text-red-400 flex items-center justify-center">
                {m.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-sfpro text-sm font-semibold text-[#0A1128]">
                    {m.title}
                  </span>
                  <span className="font-sfpro text-[11px] text-slate-400 whitespace-nowrap">
                    {m.time}
                  </span>
                </div>
                <p className="font-sfpro text-sm text-slate-500 mt-0.5">{m.note}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* The honest turn */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={SPRING}
          className="text-center mt-14 sm:mt-16"
        >
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mx-auto mb-6 h-0.5 w-12 rounded-full bg-blue-500"
          />
          <p className="text-[#0A1128] font-mondwest text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-4">
            You don&apos;t need another tool.
            <br />
            <span className="text-blue-600">You need it done.</span>
          </p>
          <p className="text-slate-500 font-sfpro text-base sm:text-lg max-w-xl mx-auto">
            You didn&apos;t want more software. You wanted it handled. That is our
            whole job.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemSection;
