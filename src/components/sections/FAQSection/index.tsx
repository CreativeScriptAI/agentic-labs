import React, { useState } from "react";

export interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
}

const defaultFaqs: FAQ[] = [
  {
    question: 'What exactly is an "AI system" vs an "AI tool"?',
    answer:
      "An AI tool does one thing. A chatbot chats. An automation triggers a workflow. A voice agent makes calls. Our AI system connects all three: the voice talks to your customer, the memory remembers them, and the automation takes action. One integrated system, not three disconnected tools.",
  },
  {
    question: "How fast can you build it?",
    answer:
      "Most systems are live in 4 weeks. Week 1: we audit your workflows. Week 2: we build. Week 3: we test with real scenarios. Week 4: you're live with monitoring.",
  },
  {
    question: "What if the AI says something wrong to a customer?",
    answer:
      "Every system goes through a testing phase with real edge cases before it touches a single customer. We build guardrails — things the AI won't say, fallback to human handoff when it's unsure. And we monitor every interaction for the first 30 days.",
  },
  {
    question: "What tools do you integrate with?",
    answer:
      "We work with whatever you already use. GoHighLevel, HubSpot, Salesforce, Calendly, Stripe, Twilio, Zendesk, Slack — and custom APIs. The system plugs into your stack, not the other way around.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Projects typically start at $5,000 for the initial build, with ongoing monthly maintenance for monitoring and optimization. Every project is scoped based on your specific workflows. We'll give you a clear number before you commit to anything.",
  },
  {
    question: "Can the AI hand off to a real person?",
    answer:
      "Yes. We set confidence thresholds so the AI escalates to a human when it's unsure — via live transfer, ticket creation, or Slack alert. The human gets the full transcript and context. The customer never notices the switch.",
  },
  {
    question: "Who are your typical clients?",
    answer:
      "Founders and operations leaders at the 1-10 stage. They have a working product, real customers, and they're drowning in repetitive work — calls, follow-ups, support, scheduling. Common industries: healthcare, real estate, B2B SaaS, home services, e-commerce, recruiting.",
  },
  {
    question: "What happens after the system goes live?",
    answer:
      "We don't disappear. The first 30 days include active monitoring and optimization. After that, you can extend with a monthly maintenance plan — we watch the system, tune it, and ship updates as your business evolves.",
  },
];

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
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6">
            QUESTIONS
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest px-4">
            You&apos;re probably wondering.
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

export default FAQSection;
