import React, { useState } from "react";

const ContactFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ is open by default

  const faqs = [
    {
      question: "What do I actually get from this call?",
      answer:
        "A free, roadmap that covers feasibility, estimated cost, timeline, and integration steps. You can use it to build internally or let us help.",
    },
    {
      question: "Can you integrate with my existing tools?",
      answer:
        "Yes, we can integrate with most existing tools including CRM systems, WhatsApp, Twilio, GoHighLevel, Slack, websites, and many other platforms. During our call, we'll discuss your specific tech stack and create an integration plan.",
    },
    {
      question: "How soon can I launch an AI agent?",
      answer:
        "The timeline depends on the complexity of your agent and integration requirements. Simple agents can be launched in 2-4 weeks, while more complex solutions may take 6-12 weeks. We'll provide you with a detailed timeline during our consultation.",
    },
    {
      question: "What if my idea isn't feasible yet?",
      answer:
        "That's perfectly fine! We'll provide honest feedback about feasibility and suggest alternative approaches or modifications that could make your idea work. We can also discuss a phased approach to build towards your ultimate goal.",
    },
    {
      question: "What makes you different from just using a chatbot builder?",
      answer:
        "We build custom AI agents that can perform complex workflows, integrate with multiple systems, and handle sophisticated business logic. Unlike simple chatbots, our agents can take actions, make decisions, and work autonomously within your business processes.",
    },
    {
      question: "What's the cost?",
      answer:
        "Costs vary based on complexity, integrations, and ongoing support needs. We'll provide transparent pricing during our consultation based on your specific requirements. There are no hidden fees, and you'll know exactly what to expect upfront.",
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
            Still have Questions?
          </h2>
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

export default ContactFAQSection;
