import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ is open by default

  const faqs = [
    {
      question: "What is an AI Workforce?",
      answer:
        "Every day, AI is becoming an increasingly integral part of our lives. At Inflection AI, we're rapidly innovating— pushing boundaries, experimenting boldly, and continuously learning —to create solutions centered around human experiences.",
    },
    {
      question: "How do I build an agent?",
      answer:
        "Building an agent involves defining its purpose, selecting the right tools and frameworks, training it with relevant data, and implementing it in your workflow. Our platform provides step-by-step guidance throughout this process.",
    },
    {
      question: "What are tools?",
      answer:
        "Tools are the building blocks that enable agents to perform specific tasks. They can include APIs, databases, machine learning models, and other software components that agents use to complete their objectives.",
    },
    {
      question: "Which LLMs do you support?",
      answer:
        "We support a wide range of Large Language Models including GPT-4, Claude, PaLM, and other leading models. Our platform is designed to be model-agnostic, allowing you to choose the best LLM for your specific use case.",
    },
    {
      question: "How does Relevance AI protect my privacy",
      answer:
        "We implement enterprise-grade security measures including end-to-end encryption, strict access controls, and compliance with major privacy regulations like GDPR and CCPA. Your data is never used to train our models without explicit consent.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="py-16 -mx-4 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
      style={{ backgroundColor: "#F9F6F4" }}
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-red-500 font-medium text-sm tracking-wider uppercase mb-6">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-[24px] font-normal text-[#1E293B] max-w-4xl mx-auto text-center font-sfpro">
            AI is becoming an increasingly
          </h2>
          <h3 className="text-[24px] font-normal text-[#1E293B] max-w-4xl mx-auto text-center font-sfpro">
            integral part of our lives.
          </h3>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
              >
                <h3
                  className="pr-4 font-sfpro"
                  style={{
                    color: "var(--Slate-900, #0F172A)",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px",
                  }}
                >
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-4">
                  <svg
                    className={`w-6 h-6 text-slate-600 transition-transform duration-200 ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-gray-100">
                    <p
                      className="leading-relaxed font-sfpro"
                      style={{
                        color: "var(--Slate-600, #475569)",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "20px",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
