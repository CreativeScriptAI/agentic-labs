import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import RevealText from "src/components/RevealText";

const proofCards = [
  {
    industry: "Healthcare",
    stat: "85%",
    statLabel: "resolved without a human",
    metric: "300 calls handled every month.",
    client: "Healthcare Practice",
  },
  {
    industry: "Real Estate",
    stat: "2x",
    statLabel: "booking rate",
    metric: "Doubled within 48 hours.",
    client: "Real Estate Agency",
  },
  {
    industry: "E-Commerce",
    stat: "12s",
    statLabel: "response time, down from 4 hours",
    metric: "60% fewer support tickets.",
    client: "E-Commerce Brand",
  },
];

const spring = { type: "spring", stiffness: 320, damping: 30 } as const;
const viewport = { once: true, margin: "-80px" } as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: spring },
};

const ProofSection = () => {
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
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={spring}
            className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-4 sm:mb-6"
          >
            Proof
          </motion.p>
          <RevealText
            as="h2"
            text="Don't take our word for it."
            inView
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest px-4 mb-3"
          />
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...spring, delay: 0.1 }}
            className="text-lg sm:text-xl lg:text-[24px] font-normal text-[#1E293B] font-sfpro px-4 max-w-2xl mx-auto"
          >
            Call our AI from your own phone and have a real conversation. Then
            picture it answering yours.
          </motion.h3>
        </div>

        {/* Featured Case Study - light, airy hero */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={spring}
          className="relative rounded-3xl bg-[#EEF3FF] p-6 sm:p-9 lg:p-11 mb-10 sm:mb-14"
        >
          <div className="relative">
            <div className="flex items-center gap-3 mb-5">
              <span className="rounded-full bg-red-500 px-3 py-1 text-gray-50 font-sfpro text-xs font-bold tracking-[0.18em] uppercase">
                Featured
              </span>
              <span className="text-xs sm:text-sm text-slate-500 font-sfpro">
                Live with real customers
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0A1128] font-mondwest mb-1">
              PatientlyAI
            </h3>
            <p className="text-sm sm:text-base text-blue-600 font-sfpro mb-8">
              AI Voice Agent for Healthcare
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-7 sm:gap-y-8">
              {[
                {
                  label: "The problem",
                  body: "A healthcare practice was losing leads every week because calls went unanswered after hours.",
                },
                {
                  label: "The system we built",
                  body: "Voice agent that calls new leads instantly. Follows up Day 1 through Day 5. Qualifies and handles objections. Books straight into GoHighLevel. Sends a Stripe deposit by SMS. Runs a T-24h reminder call.",
                },
                {
                  label: "The result",
                  body: "Doubled the appointment booking rate. Running 24/7 with zero human receptionists in the loop. Built and deployed in under 2 weeks.",
                  highlight: true,
                },
              ].map((col, i) => (
                <motion.div
                  key={col.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ ...spring, delay: 0.12 + i * 0.08 }}
                  className={
                    col.highlight
                      ? "rounded-2xl bg-white border-l-2 border-emerald-400 p-5 -mx-1 sm:mx-0 lg:-mt-5"
                      : ""
                  }
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        col.highlight ? "bg-emerald-500" : "bg-blue-500"
                      }`}
                    />
                    <h4
                      className={`text-xs sm:text-sm font-bold font-sfpro uppercase tracking-[0.14em] ${
                        col.highlight ? "text-emerald-600" : "text-slate-500"
                      }`}
                    >
                      {col.label}
                    </h4>
                  </div>
                  <p
                    className={`font-sfpro text-sm sm:text-base leading-relaxed ${
                      col.highlight ? "text-[#0A1128] font-medium" : "text-slate-600"
                    }`}
                  >
                    {col.body}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/agent/patientlyai"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 text-white font-sfpro text-sm sm:text-base font-semibold px-6 py-3 hover:bg-blue-700 transition-colors"
              >
                Try PatientlyAI &rarr;
              </Link>
              <Link
                href="/agent/patientlyai"
                className="inline-flex items-center justify-center rounded-xl border border-blue-200 text-blue-700 font-sfpro text-sm sm:text-base font-medium px-6 py-3 hover:bg-white transition-colors"
              >
                Talk to the AI
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Proof Cards - metric-forward, staggered */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14"
        >
          {proofCards.map((card) => (
            <motion.div
              key={card.industry}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={spring}
              className="bg-white rounded-2xl border border-slate-100 p-6 transition-colors hover:border-slate-200"
            >
              <p className="text-xs text-red-500 font-bold font-sfpro uppercase tracking-[0.16em] mb-4">
                {card.industry}
              </p>
              <p className="text-4xl sm:text-5xl font-bold text-blue-600 font-mondwest leading-none mb-1">
                {card.stat}
              </p>
              <p className="text-sm text-emerald-600 font-sfpro font-medium mb-4">
                {card.statLabel}
              </p>
              <p className="text-slate-700 font-sfpro text-sm sm:text-base leading-relaxed mb-3">
                {card.metric}
              </p>
              <p className="text-xs text-slate-400 font-sfpro">
                {card.client}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial highlight */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={spring}
          className="relative rounded-3xl border-y border-slate-100 p-8 sm:p-12 text-center"
        >
          <span
            aria-hidden
            className="absolute left-6 top-2 sm:left-10 sm:top-4 font-mondwest text-6xl sm:text-7xl text-blue-600/15 leading-none select-none"
          >
            &ldquo;
          </span>
          <blockquote className="relative text-slate-700 font-sfpro text-lg sm:text-xl lg:text-2xl leading-relaxed italic mb-5 max-w-2xl mx-auto">
            Within 48 hours they built an AI caller that doubled our booking
            rate. It feels like having a full-time receptionist who never
            sleeps.
          </blockquote>
          <figcaption className="flex items-center justify-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700 font-mondwest text-sm">
              A
            </span>
            <span className="text-sm sm:text-base text-slate-500 font-sfpro font-medium">
              Aiden, Founder
            </span>
          </figcaption>
        </motion.figure>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ ...spring, delay: 0.05 }}
          className="text-center text-base sm:text-lg text-slate-600 font-sfpro leading-relaxed mt-10 sm:mt-14 px-4 max-w-3xl mx-auto"
        >
          We have built and shipped for real businesses in travel, home
          services, hiring, and coaching. Working with real customers. Not
          sitting in a demo.
        </motion.p>
      </div>
    </div>
  );
};

export default ProofSection;
