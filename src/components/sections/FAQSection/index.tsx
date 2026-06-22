import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealText from "src/components/RevealText";

export interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
}

const defaultFaqs: FAQ[] = [
  {
    question: "What can you actually build?",
    answer:
      "If a human does it on repeat, we can usually build an agent or automation for it. Calls, chats, follow-ups, scheduling, data, internal busywork.",
  },
  {
    question: "How long does it take?",
    answer: "Most builds go live in weeks. Simpler ones, faster.",
  },
  {
    question: "We already use some AI tools. Does that matter?",
    answer:
      "No. We build around what you have and connect it. That is the point.",
  },
  {
    question: "Will it sound like a robot to my customers?",
    answer:
      "No. And when it is not sure, it hands off to a human cleanly. Your customer never feels the seam.",
  },
  {
    question: "Is my business too small?",
    answer: "That is usually exactly who we build for.",
  },
];

const spring = { type: "spring", stiffness: 320, damping: 30 } as const;

const FAQSection: React.FC<FAQSectionProps> = ({ faqs = defaultFaqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ is open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={spring}
            className="text-red-500 font-geist font-normal text-[12px] tracking-[0.02em] uppercase mb-4 sm:mb-5"
          >
            Questions
          </motion.p>
          <RevealText
            text="You're probably wondering."
            as="h2"
            className="font-alte font-normal text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.2] tracking-[-0.04em] text-[#0A1128] px-4"
            delay={0.05}
            stagger={0.04}
            inView
          />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4 relative">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ ...spring, delay: index * 0.06 }}
                className={`w-full relative rounded-none border overflow-hidden transition-colors duration-200 ${
                  isOpen
                    ? "bg-[#F4F7FF] border-[#0062FF]"
                    : "bg-white border-[#e7e6e4]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0062FF]"
                >
                  <h3
                    className="font-alte font-normal text-[15px] sm:text-[18px] tracking-[-0.04em]"
                    style={{
                      color: isOpen ? "#0062FF" : "#0F172A",
                      fontStyle: "normal",
                      lineHeight: "1.5",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {faq.question}
                  </h3>
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={spring}
                    className={`flex-shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-none transition-colors duration-200 ${
                      isOpen
                        ? "bg-[#0062FF] text-white"
                        : "bg-[#f0efed] text-slate-600"
                    }`}
                  >
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 2.5v11M2.5 8h11"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { type: "spring", stiffness: 320, damping: 34 },
                        opacity: { duration: 0.2 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                        <div className="border-t border-[#e7e6e4] pt-3 sm:pt-4">
                          <p
                            className="font-alte font-normal text-[15px] leading-[1.5] tracking-[-0.04em]"
                            style={{
                              color: "#475569",
                              fontStyle: "normal",
                            }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
