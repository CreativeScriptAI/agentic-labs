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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    </div>
);

interface WeekProps {
    week: string;
    title: string;
    description: string;
    deliverables: string[];
    icon: React.ReactNode;
}

const weeks: WeekProps[] = [
    {
        week: "WEEK 1",
        title: "Audit & Architecture",
        description: "We map your workflows, identify memory requirements, and design the system architecture.",
        deliverables: [
            "Memory requirements doc",
            "System architecture diagram",
            "Integration plan (CRM, calendar, etc.)",
            "Compliance checklist (HIPAA/GDPR)",
        ],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
    },
    {
        week: "WEEK 2",
        title: "Build & Integration",
        description: "We build the memory system, integrate with your tools (CRM, calendar, etc.), and configure retrieval logic.",
        deliverables: [
            "Memory system deployed",
            "CRM/calendar integration live",
            "Retrieval pipeline configured",
            "Test environment ready",
        ],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        week: "WEEK 3",
        title: "Testing & Validation",
        description: "We test with real scenarios, edge cases, and stress tests. You review and approve.",
        deliverables: [
            "Test results report",
            "Edge case handling verified",
            "Performance benchmarks",
            "Team training session",
        ],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        week: "WEEK 4",
        title: "Live Deployment",
        description: "We deploy to production and monitor for 30 days. We tune retrieval, fix bugs, and optimize performance.",
        deliverables: [
            "Production deployment",
            "30-day monitoring active",
            "Performance tuning",
            "Handoff documentation",
        ],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
];

const HowWeBuildIt = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <Section bgColor="gray" id="how-we-build-it">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <p className="text-blue-600 font-bold text-xs sm:text-sm tracking-widest uppercase mb-4 font-sfpro">
                        Implementation Process
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1128] font-mondwest mb-6">
                        From audit to live in 4 weeks.
                    </h2>
                    <p className="text-gray-600 font-sfpro text-lg sm:text-xl max-w-2xl mx-auto mb-8">
                        We don't sell you a tool and walk away. We build a custom memory system for your business.
                    </p>
                </div>

                {/* Timeline Accordion */}
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-200 before:to-transparent before:hidden md:before:hidden">
                    {/* Note: Hidden vertical line on mobile for now, card style is cleaner */}

                    {weeks.map((week, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="relative z-10">
                                <div
                                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "border-blue-500 shadow-lg ring-1 ring-blue-100" : "border-gray-200 hover:border-blue-300 hover:shadow-md"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full flex items-center gap-4 sm:gap-6 p-6 sm:p-8 text-left"
                                    >
                                        {/* Icon Box */}
                                        <div className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center transition-all ${isOpen ? "bg-blue-600 text-white shadow-md scale-110" : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
                                            }`}>
                                            {week.icon}
                                        </div>

                                        {/* Header Text */}
                                        <div className="flex-grow">
                                            <p className={`text-xs sm:text-sm font-bold tracking-widest uppercase mb-1 ${isOpen ? "text-blue-600" : "text-gray-400"
                                                }`}>
                                                {week.week}
                                            </p>
                                            <h3 className={`text-lg sm:text-2xl font-bold font-mondwest transition-colors ${isOpen ? "text-[#0A1128]" : "text-gray-700"
                                                }`}>
                                                {week.title}
                                            </h3>
                                        </div>

                                        {/* Chevron */}
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-blue-100 text-blue-600 rotate-180" : "bg-gray-50 text-gray-400 group-hover:bg-blue-50"
                                            }`}>
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </button>

                                    {/* Expanded Content */}
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="px-6 sm:px-8 pb-8 pt-0">
                                                    <div className="pl-0 sm:pl-[5.5rem]"> {/* Indent to align with text */}
                                                        <p className="text-gray-600 font-sfpro text-base sm:text-lg mb-6 leading-relaxed border-l-2 border-blue-100 pl-4">
                                                            {week.description}
                                                        </p>

                                                        <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100">
                                                            <p className="font-bold text-blue-900 font-sfpro text-xs uppercase tracking-wide mb-3 flex items-center gap-2">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                                                Key Deliverables
                                                            </p>
                                                            <div className="grid sm:grid-cols-2 gap-3">
                                                                {week.deliverables.map((item, idx) => (
                                                                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-700 font-sfpro">
                                                                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                        </svg>
                                                                        <span>{item}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Guarantee Box */}
                <div className="mt-12 bg-white rounded-2xl p-8 border-2 border-blue-100 text-center shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"></div>
                    <p className="text-blue-600 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3 font-sfpro">
                        Our Guarantee
                    </p>
                    <p className="text-[#0A1128] font-sfpro text-lg sm:text-xl font-medium max-w-3xl mx-auto">
                        If we can't deploy a working memory system in 4 weeks, <span className="text-blue-600 font-bold">we don't charge you.</span>
                    </p>
                    <p className="text-gray-400 text-sm mt-2 italic">(We've never missed a deadline.)</p>
                </div>
            </div>
        </Section>
    );
};

export default HowWeBuildIt;
