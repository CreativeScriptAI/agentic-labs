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
        <div className="space-y-4 relative">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full relative bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
              >
                <h3
                  className="pl-4 font-sfpro"
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
                <div className="pr-4">
                  <svg
                    className={`w-5 h-5 text-slate-600 transition-transform duration-200 ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M16.692 7.94229L10.442 14.1923C10.384 14.2504 10.3151 14.2965 10.2392 14.328C10.1633 14.3594 10.082 14.3756 9.99986 14.3756C9.91772 14.3756 9.8364 14.3594 9.76052 14.328C9.68465 14.2965 9.61572 14.2504 9.55767 14.1923L3.30767 7.94229C3.1904 7.82502 3.12451 7.66596 3.12451 7.5001C3.12451 7.33425 3.1904 7.17519 3.30767 7.05792C3.42495 6.94064 3.58401 6.87476 3.74986 6.87476C3.91571 6.87476 4.07477 6.94064 4.19205 7.05792L9.99986 12.8665L15.8077 7.05792C15.8657 6.99985 15.9347 6.95378 16.0105 6.92236C16.0864 6.89093 16.1677 6.87476 16.2499 6.87476C16.332 6.87476 16.4133 6.89093 16.4892 6.92236C16.565 6.95378 16.634 6.99985 16.692 7.05792C16.7501 7.11598 16.7962 7.18492 16.8276 7.26079C16.859 7.33666 16.8752 7.41798 16.8752 7.5001C16.8752 7.58223 16.859 7.66354 16.8276 7.73941C16.7962 7.81528 16.7501 7.88422 16.692 7.94229Z"
                      fill="#475569"
                    />
                  </svg>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-5">
                  <div className="pt-2 ">
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
