import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Section = ({
    children,
    bgColor = "white",
    id
}: {
    children: React.ReactNode;
    bgColor?: "white" | "gray";
    id?: string;
}) => (
    <div
        id={id}
        className="py-12 sm:py-16 lg:py-20"
        style={{
            backgroundColor: bgColor === "gray" ? "#F9F6F4" : "white",
            width: bgColor === "gray" ? "calc(100% + 2rem)" : "100%",
            marginLeft: bgColor === "gray" ? "-1rem" : "0",
            marginRight: bgColor === "gray" ? "-1rem" : "0",
        }}
    >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    </div>
);

// Data for the accordion
const issues = [
    {
        number: "01",
        title: "Context Window Limits",
        summary: "Why your AI forgets older interactions even with 'large context' models.",
        problem: "Most AI models have a context window (GPT-4: 128K tokens). Sounds like a lot, but a single customer with 50 interactions over 6 months generates 200K+ tokens. Your AI can't fit it all in the prompt.",
        whatBreaks: "The AI 'forgets' older interactions. Your long-term VIP customers get treated like new sign-ups.",
        howWeFix: "Intelligent Semantic Retrieval. We don't dump history into the prompt. We use semantic search to pull only the exact relevant memories for the current specific query."
    },
    {
        number: "02",
        title: "Retrieval Accuracy (The 'Wrong Sarah' Problem)",
        summary: "Vector search is fuzzy. It often pulls the wrong memory.",
        problem: "Your AI has 10,000 customer memories. When Sarah calls, vector search might pull a memory from 'Sara' or a similar context from another client.",
        whatBreaks: "The AI hallucinates facts about the customer. Embarrassing and trust-destroying.",
        howWeFix: "Tiered Retrieval Pipeline: 1. Hard-filter by Customer ID (Exact Match). 2. Semantic search within that ID. 3. Recency weighting. 4. Keyword boosting."
    },
    {
        number: "03",
        title: "Concurrency & Race Conditions",
        summary: "What happens when 50 people talk to your AI at once?",
        problem: "Two agents try to write to the same customer's memory at the same time. Agent A writes 'Prefers Mornings'. Agent B writes 'Prefers Afternoons' 100ms later.",
        whatBreaks: "Memory corruption. The AI operates on stale or conflicting data.",
        howWeFix: "Transactional Writes & Optimistic Locking. We treat memory updates like financial transactions. Atomic, consistent, isolated."
    },
    {
        number: "04",
        title: "Memory Pollution (Signal vs Noise)",
        summary: "90% of conversation history is useless small talk.",
        problem: "If you store every 'Hello' and 'Thanks', your retrieval system gets clogged with junk. Relevant operational data gets buried.",
        whatBreaks: "Retrieval latency increases, and the AI misses key facts because they are drowned out by noise.",
        howWeFix: "LLM-Based Summarization. Background agents compress conversations into key facts ('Insights') and discard the fluff before storage."
    },
    {
        number: "05",
        title: "Data Privacy & Compliance",
        summary: "Storing PII in plain text is a liability.",
        problem: "You are storing names, phones, and potentially health/financial data. If you use a standard vector DB, you might be violating GDPR/HIPAA.",
        whatBreaks: "You fail an audit. You get sued.",
        howWeFix: "PII Redaction & Pointer System. We store references ('Patient ID 12345') in the vector DB, not the raw data. Sensitive data stays in your secure, compliant database."
    },
    {
        number: "06",
        title: "Cost at Scale",
        summary: "Vector DBs get expensive, fast.",
        problem: "Storing 100k+ embedded vectors and querying them on every single message turn burns cash.",
        whatBreaks: "Your infrastructure bill eats your entire margin.",
        howWeFix: "Hot/Cold Storage Architecture. Active conversations stay in fast cache (Redis/Hot Vector). Old history moves to cheaper cold storage (S3/Parquet) and is only thawed when needed."
    }
];

const ProductionIssuesAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-4">
            {issues.map((issue, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={index}
                        className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden scroll-mt-4 ${isOpen ? "border-blue-500 shadow-md" : "border-gray-200 hover:border-blue-300"
                            }`}
                    >
                        <button
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                        >
                            <div className="flex items-center gap-4 md:gap-6">
                                <span className={`font-mondwest text-xl md:text-2xl ${isOpen ? "text-blue-600" : "text-gray-300 group-hover:text-blue-400"}`}>
                                    {issue.number}
                                </span>
                                <div>
                                    <h4 className={`font-bold font-sfpro text-lg md:text-xl transition-colors ${isOpen ? "text-blue-900" : "text-gray-900"}`}>
                                        {issue.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 font-sfpro mt-1 hidden sm:block">
                                        {issue.summary}
                                    </p>
                                </div>
                            </div>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-blue-100 text-blue-600 rotate-180" : "bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500"}`}>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-6 pb-6 md:px-20 md:pb-8 pt-0">
                                        <div className="h-px w-full bg-gray-100 mb-6"></div>
                                        <div className="space-y-6 text-sm md:text-base font-sfpro">
                                            <div>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">The Problem</p>
                                                <p className="text-gray-700 leading-relaxed">{issue.problem}</p>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                                    <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">❌ What Breaks</p>
                                                    <p className="text-red-800 leading-relaxed font-medium">{issue.whatBreaks}</p>
                                                </div>
                                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">✅ How We Fix It</p>
                                                    <p className="text-blue-800 leading-relaxed font-medium">{issue.howWeFix}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};

const ProductionVsDemo = () => {
    return (
        <Section bgColor="gray" id="production-vs-demo">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <p className="text-red-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-4 font-sfpro">
                        Why Demos Don't Scale
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1128] font-mondwest mb-6">
                        Production-grade vs demo-grade.
                    </h2>
                    <p className="text-gray-600 font-sfpro text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                        It's easy to build a demo that remembers your name once. It's brutally hard to build a system that remembers 10,000 customers forever.
                    </p>
                </div>

                {/* Accordion Component */}
                <ProductionIssuesAccordion />

                {/* Comparison Table - Redesigned as Summary Cards */}
                <div className="grid md:grid-cols-2 gap-6 mt-16 text-center md:text-left">
                    <div className="bg-white p-8 rounded-2xl border border-red-100 shadow-sm opacity-70 hover:opacity-100 transition-opacity">
                        <h4 className="font-bold text-gray-900 mb-4 font-sfpro text-lg flex items-center justify-center md:justify-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            The "Demo" Approach
                        </h4>
                        <ul className="space-y-3 text-gray-600 font-sfpro text-sm sm:text-base inline-block text-left">
                            <li className="flex items-start gap-2">❌ Breaks after ~50 interactions</li>
                            <li className="flex items-start gap-2">❌ "Hallucinates" wrong memories</li>
                            <li className="flex items-start gap-2">❌ Non-compliant (GDPR/HIPAA risks)</li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border-2 border-blue-100 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            RECOMMENDED
                        </div>
                        <h4 className="font-bold text-blue-900 mb-4 font-sfpro text-lg flex items-center justify-center md:justify-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            Production-Grade System
                        </h4>
                        <ul className="space-y-3 text-gray-700 font-sfpro text-sm sm:text-base inline-block text-left">
                            <li className="flex items-start gap-2">✅ Scale to millions of vectors</li>
                            <li className="flex items-start gap-2">✅ Atomic locking for concurrency</li>
                            <li className="flex items-start gap-2">✅ Enterprise security & compliance</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ProductionVsDemo;
