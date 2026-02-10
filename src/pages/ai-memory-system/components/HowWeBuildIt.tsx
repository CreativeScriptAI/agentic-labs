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

interface WeekProps {
    week: string;
    title: string;
    description: string;
    deliverables: string[];
    icon: React.ReactNode;
}

const WeekCard: React.FC<WeekProps> = ({ week, title, description, deliverables, icon }) => (
    <div className="relative">
        {/* Connector line (hidden on last item) */}
        <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-blue-200 -z-10"
            style={{ display: week === "WEEK 4" ? "none" : "block" }} />

        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            {/* Week badge */}
            <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                    {icon}
                </div>
            </div>

            {/* Week label */}
            <p className="text-center text-blue-600 font-bold font-sfpro text-sm tracking-wider uppercase mb-2">
                {week}
            </p>

            {/* Title */}
            <h3 className="text-center text-xl font-bold text-[#0A1128] font-mondwest mb-3">
                {title}
            </h3>

            {/* Description */}
            <p className="text-center text-gray-700 font-sfpro text-sm sm:text-base mb-5 leading-relaxed">
                {description}
            </p>

            {/* Deliverables */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-blue-900 font-sfpro text-sm mb-2">Deliverables:</p>
                <ul className="space-y-1.5 text-blue-800 font-sfpro text-sm">
                    {deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-0.5">✓</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

const HowWeBuildIt = () => {
    const weeks: WeekProps[] = [
        {
            week: "WEEK 1",
            title: "Audit",
            description: "We map your workflows, identify memory requirements, and design the system architecture.",
            deliverables: [
                "Memory requirements doc",
                "System architecture diagram",
                "Integration plan (CRM, calendar, etc.)",
                "Compliance checklist (HIPAA/GDPR if needed)",
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            ),
        },
        {
            week: "WEEK 2",
            title: "Build",
            description: "We build the memory system, integrate with your tools (CRM, calendar, etc.), and configure retrieval logic.",
            deliverables: [
                "Memory system deployed",
                "CRM/calendar integration live",
                "Retrieval pipeline configured",
                "Test environment ready",
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            week: "WEEK 3",
            title: "Test",
            description: "We test with real scenarios, edge cases, and stress tests. You review and approve.",
            deliverables: [
                "Test results report",
                "Edge case handling verified",
                "Performance benchmarks",
                "Your team trained on the system",
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            week: "WEEK 4",
            title: "Live",
            description: "We deploy to production and monitor for 30 days. We tune retrieval, fix bugs, and optimize performance.",
            deliverables: [
                "Production deployment",
                "30-day monitoring",
                "Performance tuning",
                "Handoff documentation",
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
    ];

    return (
        <Section bgColor="gray" id="how-we-build-it">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6 font-sfpro">
                        PROCESS
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest mb-6">
                        How we build it
                    </h2>
                    <p className="text-gray-600 font-sfpro text-lg sm:text-xl mb-4">
                        (4 weeks from audit to live deployment)
                    </p>
                    <p className="text-gray-700 font-sfpro text-base sm:text-lg max-w-3xl mx-auto">
                        We don't sell you a tool. We build a custom memory system for your business. Here's the process:
                    </p>
                </div>

                {/* Timeline */}
                <div className="grid lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
                    {weeks.map((week, index) => (
                        <WeekCard key={index} {...week} />
                    ))}
                </div>

                {/* Key Points */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-gray-900 font-sfpro text-base sm:text-lg mb-3">
                            What you get:
                        </h4>
                        <ul className="space-y-2 text-gray-700 font-sfpro text-sm sm:text-base">
                            <li className="flex items-start gap-2">
                                <span className="text-green-600 mt-1">✓</span>
                                <span>Custom memory system (not a template)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-600 mt-1">✓</span>
                                <span>Integrated with your existing tools</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-600 mt-1">✓</span>
                                <span>30-day monitoring and tuning</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-600 mt-1">✓</span>
                                <span>Full documentation and training</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-gray-900 font-sfpro text-base sm:text-lg mb-3">
                            What you don't get:
                        </h4>
                        <ul className="space-y-2 text-gray-700 font-sfpro text-sm sm:text-base">
                            <li className="flex items-start gap-2">
                                <span className="text-red-600 mt-1">✗</span>
                                <span>A generic template</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-600 mt-1">✗</span>
                                <span>A tool you have to configure yourself</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-600 mt-1">✗</span>
                                <span>A 6-month implementation timeline</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-600 mt-1">✗</span>
                                <span>A system that breaks in production</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom insight */}
                <div className="bg-blue-50 p-6 sm:p-8 rounded-lg border border-blue-200 text-center">
                    <p className="font-bold text-blue-900 font-sfpro text-lg sm:text-xl mb-3">
                        Timeline guarantee:
                    </p>
                    <p className="text-blue-800 font-sfpro text-base sm:text-lg">
                        If we can't deploy a working memory system in 4 weeks, we don't charge you. (We've never missed this deadline.)
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default HowWeBuildIt;
