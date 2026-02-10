import { useState } from "react";

export interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: 'What exactly is an "AI memory system" vs. a "memory tool"?',
        answer: 'A memory tool (like Mem0 or Pinecone) stores data. An AI memory system integrates that storage with voice agents and automation so the AI can actually use the memory in real conversations. Think of it this way: A database is a memory tool. A receptionist who remembers every patient is a memory system. We build the system. The tools are just components.',
    },
    {
        question: "How much memory can the AI store?",
        answer: "As much as you need (bounded by your retention policy and budget). We use tiered storage: Hot memory (last 30 days): Fast, expensive storage for instant retrieval. Cold memory (older than 30 days): Cheap, slow storage for archival. Your AI can remember 10,000+ customer interactions without breaking the bank.",
    },
    {
        question: "What if the AI retrieves the wrong memory?",
        answer: "We use a tiered retrieval pipeline: 1. Filter by customer ID (exact match) 2. Semantic search within that customer's history 3. Keyword boost for specific entities (dates, names, products) 4. Recency weighting (prioritize recent interactions). We measure retrieval quality, tune it, and build guardrails. When the AI is unsure, it asks for clarification (or hands off) instead of guessing.",
    },
    {
        question: "Is AI memory HIPAA/GDPR compliant?",
        answer: "We design the system around your compliance requirements (HIPAA/GDPR/CCPA) and implement the controls needed to support them: PII redaction (we don't store SSNs, credit cards, health records), Encryption at rest and in transit, User control (customers can view, edit, or delete their memory), Audit logs (who accessed what, when). If you're in a regulated industry, we'll align storage, retention, access controls, and vendor setup to your specific requirements. Compliance is non-negotiable.",
    },
    {
        question: "How much does AI memory cost?",
        answer: "It depends on usage (number of customers, interactions per month, memory retention period). Typical costs: 1,000 customers, 10,000 interactions/month: $200-$500/month. 10,000 customers, 100,000 interactions/month: $1,500-$3,000/month. We optimize for cost (tiered storage, lazy loading, batch embeddings). You're not paying for unused memory.",
    },
    {
        question: "Can the AI share memory across multiple agents?",
        answer: "Yes. That's procedural memory (shared memory across agents). Example: Your AI Receptionist learns \"Sarah prefers morning appointments.\" Your AI Follow-Up Agent uses that same knowledge when scheduling callbacks. No silos. No repetition. One unified memory layer.",
    },
    {
        question: "What happens if I want to delete a customer's memory?",
        answer: 'You (or the customer) can delete it anytime. GDPR "right to be forgotten" compliance. We also support: Viewing memory (what does the AI know about me?), Editing memory (correct inaccurate information), Exporting memory (download a copy).',
    },
    {
        question: "How long does it take to build an AI memory system?",
        answer: "4 weeks from audit to live deployment. Week 1: Audit (we map your workflows and memory requirements). Week 2: Build (we build the system and integrate with your tools). Week 3: Test (we test with real scenarios and edge cases). Week 4: Live (we deploy and monitor for 30 days).",
    },
];

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => (
    <div className="w-full relative bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-shadow duration-200 hover:shadow-md">
        <button
            onClick={onToggle}
            className="w-full py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
            aria-expanded={isOpen}
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
                {question}
            </h3>
            <div className="pr-3 sm:pr-4 flex-shrink-0">
                <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-600 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""
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

        {isOpen && (
            <div className="px-3 sm:px-4 pb-4 sm:pb-5 animate-fadeIn">
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
                        {answer}
                    </p>
                </div>
            </div>
        )}
    </div>
);

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

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
                <div className="text-center mb-8 sm:mb-12">
                    <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6 font-sfpro">
                        QUESTIONS
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest">
                        You're probably wondering.
                    </h2>
                </div>

                <div className="space-y-3 sm:space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
