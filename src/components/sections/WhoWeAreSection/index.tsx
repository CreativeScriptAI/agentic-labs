import React from "react";
import { motion } from "framer-motion";
import RevealText from "src/components/RevealText";

const viewport = { once: true, margin: "-80px" } as const;
const spring = { type: "spring" as const, stiffness: 320, damping: 30 };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: spring },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const stats = [
  { value: "3", label: "Co-founders" },
  { value: "50+", label: "Projects shipped" },
  { value: "AI/ML", label: "Core engineering team" },
  { value: "6+", label: "Industries served" },
];

const MemoryIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <path d="M12 3a4 4 0 0 0-4 4 3.5 3.5 0 0 0-1.5 6.6A3.5 3.5 0 0 0 8 20.5 3.5 3.5 0 0 0 12 21V3Z" />
    <path d="M12 3a4 4 0 0 1 4 4 3.5 3.5 0 0 1 1.5 6.6A3.5 3.5 0 0 1 16 20.5 3.5 3.5 0 0 1 12 21" />
    <path d="M8 9h2M14 9h2M9 13h2M13 16h2" />
  </svg>
);

const ChipIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <path d="M9.5 10.5h5v3h-5z" opacity={0.5} />
    <path d="M10 3v2M14 3v2M10 19v2M14 19v2M3 10h2M3 14h2M19 10h2M19 14h2" />
  </svg>
);

const pillars = [
  {
    icon: <MemoryIcon />,
    title: "Memory",
    body:
      "How your AI remembers every customer, so a returning caller never starts from zero.",
  },
  {
    icon: <ChipIcon />,
    title: "Small language models",
    body:
      "How to run it on small language models: lean, fast, and reliable enough to trust with a real customer.",
  },
];

const WhoWeAreSection = () => {
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={spring}
          className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-4 sm:mb-6 text-center"
        >
          WHY IT WORKS
        </motion.p>

        {/* Headline */}
        <RevealText
          as="h2"
          text="We research the hard parts."
          inView
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest text-center mb-6 sm:mb-8"
        />

        {/* Lead-in */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={spring}
          className="text-slate-600 font-sfpro text-base sm:text-lg leading-relaxed text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          We don&apos;t just wire up other people&apos;s tools. We research the
          parts that make AI hold up.
        </motion.p>

        {/* Two research pillars */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 sm:gap-x-10 mb-10 sm:mb-14"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              transition={spring}
              className={`group border-t border-slate-200/70 pt-6 ${
                i === 1 ? "sm:border-l sm:pl-10" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50/70 text-blue-600 transition-colors group-hover:bg-blue-100">
                  {p.icon}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#0A1128] font-mondwest">
                  {p.title}
                </h3>
              </div>
              <p className="text-slate-600 font-sfpro text-sm sm:text-base leading-relaxed">
                {p.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Survives real customers */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={spring}
          className="text-[#0A1128] font-sfpro text-base sm:text-lg font-semibold text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          That is why our work survives real customers, not just a demo. It is
          also why we call ourselves a lab.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewport}
          transition={spring}
          className="w-12 h-0.5 bg-blue-600 mx-auto mb-10 sm:mb-14 origin-center"
        />

        {/* Team callout: left-bordered for minimal accent */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="border-l-2 border-blue-600 pl-5 sm:pl-6 mb-10 sm:mb-14 space-y-4"
        >
          <motion.p
            variants={fadeUp}
            className="text-slate-700 font-sfpro text-base sm:text-lg leading-relaxed"
          >
            Behind the three of us sits a core team of AI devs, backend
            engineers, ML specialists, and ops engineers. The kind of people
            who&apos;d rather break things at 2am than ship something mid.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-slate-700 font-sfpro text-base sm:text-lg leading-relaxed"
          >
            We write scalable code. We build production-level systems.
            We don&apos;t do demos that look pretty and die on day one.
          </motion.p>
        </motion.div>

        {/* Closer: open light statement, type-led with a thin accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={spring}
          className="px-2 py-6 sm:py-10 mb-10 sm:mb-14 text-center"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={spring}
            className="block w-8 h-px bg-blue-600/70 mx-auto mb-6 sm:mb-8 origin-center"
          />
          <p className="text-[#0A1128] font-mondwest text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
            We make AI work,{" "}
            <span className="text-blue-600">so you don&apos;t have to.</span>
          </p>
        </motion.div>

        {/* Credibility: emphasised stat row */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 md:grid-cols-4 text-center border-t border-slate-200/70 pt-8"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className={`px-4 py-2 ${
                i % 2 !== 0 ? "border-l border-slate-200/60" : ""
              } ${i >= 2 ? "md:border-l" : ""} ${
                i === 0 ? "md:border-l-0" : "md:border-l"
              }`}
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1128] font-mondwest leading-none tracking-tight">
                {s.value}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-sfpro mt-2">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
