import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import RevealText from "src/components/RevealText";
import BracketButton from "src/components/BracketButton";

const CAL_LINK =
  "https://cal.com/ai-aditya/30min";

const SPRING = { type: "spring" as const, stiffness: 320, damping: 30 };
const VIEWPORT = { once: true, margin: "-80px" } as const;
const gridV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const cardV: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: SPRING },
};

const roles = [
  {
    industry: "Healthcare / Clinics",
    role: "AI Receptionist",
    description:
      "Answers every call. Books appointments. Remembers returning patients. Sends confirmations. 24/7.",
  },
  {
    industry: "Recruiting / HR",
    role: "AI Interviewer",
    description:
      "Runs first-round voice screenings. Scores candidates. Pushes the qualified ones to your pipeline. Your team only talks to people worth talking to.",
  },
  {
    industry: "E-Commerce",
    role: "AI Support Rep",
    description:
      "Handles returns, order status, and product questions. Remembers each customer's history, so they never repeat themselves.",
  },
  {
    industry: "Real Estate",
    role: "AI Showing Coordinator",
    description:
      "Answers property inquiries. Qualifies buyers. Schedules showings. Syncs everything to your CRM.",
  },
  {
    industry: "Home Services",
    role: "AI Dispatch Agent",
    description:
      "Answers service calls. Qualifies urgency. Books service windows. Notifies technicians. Never misses a call.",
  },
  {
    industry: "Agencies",
    role: "AI SDR",
    description:
      "Calls leads. Qualifies them. Books meetings. Updates the CRM. White-labeled under your brand.",
    link: { text: "Our agency partnership", href: "/services/" },
  },
];

const industryIcons: Record<string, React.ReactNode> = {
  "Healthcare / Clinics": (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  "Recruiting / HR": (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  "E-Commerce": (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  ),
  "Real Estate": (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  "Home Services": (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Agencies: (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
};

const AIRolesSection = () => {
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={SPRING}
            className="text-blue-600 font-geist font-normal uppercase text-[12px] tracking-[0.02em] mb-4"
          >
            What that looks like for you
          </motion.p>
          <RevealText
            text="If a person does it on repeat, we can automate it."
            as="h2"
            inView
            className="block font-alte font-normal text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.2] tracking-[-0.04em] text-[#0A1128] px-2"
          />
        </div>

        {/* Intro text */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ ...SPRING, delay: 0.12 }}
          className="text-center text-slate-500 font-alte font-normal text-[15px] tracking-[-0.04em] leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-14 px-4"
        >
          Every business is different. The agent we build for a clinic looks
          nothing like the one we build for a recruiter. The engine is the same:
          agents and automations, working as one.
        </motion.p>

        {/* Role Cards — compact uniform grid, light surfaces */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 sm:mb-14"
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          variants={gridV}
        >
          {roles.map((role, i) => {
            const featured = i === 0;

            if (featured) {
              return (
                <motion.div
                  key={role.role}
                  variants={cardV}
                  whileHover={{ y: -4 }}
                  transition={SPRING}
                  className="group relative overflow-hidden rounded-none bg-white border border-[#e7e6e4] p-5 flex flex-col"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-blue-500/70"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-blue-500/70"
                  />
                  <div className="relative flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-none bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      {industryIcons[role.industry] || null}
                    </div>
                    <span className="font-geist font-normal text-[11px] text-blue-600/80 uppercase tracking-[0.02em]">
                      {role.industry}
                    </span>
                  </div>
                  <h4 className="relative font-alte font-normal text-[20px] tracking-[-0.04em] text-[#0A1128] leading-tight mb-2">
                    {role.role}
                  </h4>
                  <p className="relative text-slate-600 font-alte font-normal text-[15px] tracking-[-0.04em] leading-relaxed flex-grow">
                    {role.description}
                  </p>
                  <span className="relative mt-3 inline-flex items-center gap-1.5 self-start rounded-none border border-[#e7e6e4] px-2.5 py-1 font-geist font-normal text-[11px] text-blue-700 uppercase tracking-[0.02em]">
                    <span className="w-1.5 h-1.5 rounded-none bg-emerald-500 animate-pulse" />
                    Most requested
                  </span>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={role.role}
                variants={cardV}
                whileHover={{ y: -4 }}
                transition={SPRING}
                className="group bg-white rounded-none border border-[#e7e6e4] p-5 flex flex-col hover:border-blue-200 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-none bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    {industryIcons[role.industry] || null}
                  </div>
                  <span className="font-geist font-normal text-[11px] text-slate-400 uppercase tracking-[0.02em]">
                    {role.industry}
                  </span>
                </div>
                <h4 className="font-alte font-normal text-[20px] tracking-[-0.04em] text-[#0A1128] mb-2">
                  {role.role}
                </h4>
                <p className="text-slate-500 font-alte font-normal text-[15px] tracking-[-0.04em] leading-relaxed flex-grow">
                  {role.description}
                </p>
                {role.link && (
                  <Link
                    href={role.link.href}
                    className="group/link mt-3 inline-flex items-center gap-1 font-alte font-normal text-[15px] tracking-[-0.04em] text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {role.link.text}
                    <span className="inline-block transition-transform group-hover/link:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing */}
        <div className="text-center">
          <p className="text-slate-700 font-alte font-normal text-[15px] tracking-[-0.04em] leading-relaxed mb-6 max-w-2xl mx-auto">
            Same engine. Different jobs.{" "}
            <span className="font-normal text-[#0A1128]">
              What is the repetitive work your AI should be doing right now?
            </span>
          </p>
          <BracketButton
            label="Book a free call"
            href={CAL_LINK}
            external
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default AIRolesSection;
