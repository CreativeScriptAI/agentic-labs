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
    {
      question: "Who typically hires Agentic AI Labs?",
      answer:
        "Founders, operations leaders, and CX teams across healthcare, real estate, B2B SaaS, logistics, and financial services. If you’ve got repetitive calls, chats, or back-office workflows that drain time, we tailor agents to your stack and compliance needs.",
    },
    {
      question: "How fast can we launch a production agent?",
      answer:
        "Most teams see their first deployed agent in seven days. Day 1: workflow mapping and guardrails. Days 2–4: build plus integrations with HubSpot, Salesforce, Twilio, Zendesk, or internal APIs. Days 5–7: human QA, monitoring, and a live launch with rollback plans.",
    },
    {
      question: "Can AI agents safely hand off to humans?",
      answer:
        "Absolutely. We configure confidence thresholds and policy triggers so the agent escalates via live transfer, ticket creation, or Slack/Teams alerts, attaching transcripts and context. That keeps customers supported while humans handle judgment calls.",
    },
    {
      question: "Do we get monitoring and ongoing optimization?",
      answer:
        "Yes. Every deployment includes dashboards for transcripts, resolution rates, CSAT, and error spikes. During a 30-day optimization window we review conversations, tune prompts, and ship updates—extendable for ongoing managed support.",
    },
    {
      question: "How do pricing and engagement models work?",
      answer:
        "We start with a scoped pilot—fixed price for the first workflow—then expand into retainers or per-agent subscriptions once ROI is proven. You keep full ownership of prompts, integrations, and infrastructure choices.",
    },
  ];

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
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-lg sm:text-xl lg:text-[24px] font-normal text-[#1E293B] max-w-4xl mx-auto text-center font-sfpro px-4">
            AI is becoming an increasingly
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-[24px] font-normal text-[#1E293B] max-w-4xl mx-auto text-center font-sfpro px-4">
            integral part of our lives.
          </h3>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4 relative">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full relative bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
              >
                <h3
                  className="pl-3 sm:pl-4 pr-2 font-sfpro text-sm sm:text-base"
                  style={{
                    color: "var(--Slate-900, #0F172A)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "1.5",
                  }}
                >
                  {faq.question}
                </h3>
                <div className="pr-3 sm:pr-4 flex-shrink-0">
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-600 transition-transform duration-200 ${
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
                <div className="px-3 sm:px-4 pb-4 sm:pb-5">
                  <div className="pt-2">
                    <p
                      className="leading-relaxed font-sfpro text-xs sm:text-sm"
                      style={{
                        color: "var(--Slate-600, #475569)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "1.6",
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
