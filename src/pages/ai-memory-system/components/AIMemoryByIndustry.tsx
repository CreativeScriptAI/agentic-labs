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

interface IndustryCardProps {
    industry: string;
    icon: React.ReactNode;
    memoryUseCase: string;
    whatItStores: string[];
    realWorldExample: string;
    metric: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
    industry,
    icon,
    memoryUseCase,
    whatItStores,
    realWorldExample,
    metric
}) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-[#0A1128] font-mondwest">
                {industry}
            </h3>
        </div>

        {/* Use case */}
        <p className="text-gray-700 font-sfpro text-sm sm:text-base mb-4 leading-relaxed">
            <strong className="text-gray-900">Use case:</strong> {memoryUseCase}
        </p>

        {/* What it stores */}
        <div className="mb-4">
            <p className="font-semibold text-gray-900 font-sfpro text-sm mb-2">What it stores:</p>
            <ul className="space-y-1 text-gray-700 font-sfpro text-sm">
                {whatItStores.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>

        {/* Real-world example */}
        <div className="bg-green-50 p-3 rounded-lg border border-green-200 mb-3">
            <p className="text-green-900 font-sfpro text-sm">
                <strong>Real-world:</strong> {realWorldExample}
            </p>
        </div>

        {/* Metric */}
        <div className="bg-blue-600 text-white p-3 rounded-lg text-center">
            <p className="font-bold font-mondwest text-sm sm:text-base">{metric}</p>
        </div>
    </div>
);

const AIMemoryByIndustry = () => {
    const industries: IndustryCardProps[] = [
        {
            industry: "Healthcare (Dental, Medical, Clinics)",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            memoryUseCase: "AI Receptionist remembers patient appointment history, insurance, and preferences.",
            whatItStores: [
                "Appointment history",
                "Insurance details",
                "Preferred times",
                "Past concerns",
            ],
            realWorldExample: "PatientlyAI (dental practice) reduced no-shows by 40% because the AI reminds patients of their history and preferences.",
            metric: "40% reduction in no-shows",
        },
        {
            industry: "Real Estate (Agents, Brokers)",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            memoryUseCase: "AI Showing Coordinator remembers buyer preferences, past showings, and feedback.",
            whatItStores: [
                "Property preferences",
                "Past showings",
                "Feedback on properties",
                "Decision timeline",
            ],
            realWorldExample: "Real estate team saved 20 hours/week on scheduling by letting the AI handle repeat buyers who already stated their preferences.",
            metric: "20 hours/week saved",
        },
        {
            industry: "E-commerce (Shopify, WooCommerce)",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            ),
            memoryUseCase: "AI Support Rep remembers order history, returns, and product preferences.",
            whatItStores: [
                "Order history",
                "Past returns",
                "Product preferences",
                "Support tickets",
            ],
            realWorldExample: "E-commerce brand reduced support tickets by 60% because the AI answers questions based on customer history.",
            metric: "60% fewer support tickets",
        },
        {
            industry: "Recruiting (Staffing Agencies, HR)",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            memoryUseCase: "AI Interviewer remembers candidate screening history, skills, and availability.",
            whatItStores: [
                "Screening history",
                "Skills discussed",
                "Salary expectations",
                "Availability",
            ],
            realWorldExample: "Recruiting firm saved 15 hours/week on phone screens because the AI pre-qualifies candidates and remembers their details.",
            metric: "15 hours/week saved",
        },
        {
            industry: "Home Services (HVAC, Plumbing, Roofing)",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            memoryUseCase: "AI Dispatch Agent remembers service history, equipment details, and preferred technicians.",
            whatItStores: [
                "Service history",
                "Equipment type/age",
                "Past issues",
                "Preferred techs",
            ],
            realWorldExample: "HVAC company reduced missed calls by 90% because the AI handles after-hours scheduling and remembers customer equipment.",
            metric: "90% fewer missed calls",
        },
        {
            industry: "Legal (Law Firms, Solo Practitioners)",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
            ),
            memoryUseCase: "AI Intake Specialist remembers case details, consultation history, and retainer status.",
            whatItStores: [
                "Case type/details",
                "Consultation history",
                "Retainer status",
                "Stakeholders",
            ],
            realWorldExample: "Law firm increased qualified consultations by 35% because the AI pre-screens cases and remembers client details.",
            metric: "35% more qualified leads",
        },
        {
            industry: "Fintech (Banks, Credit Unions, Lenders)",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            memoryUseCase: "AI Loan Advisor remembers application status, document submissions, and approval timeline.",
            whatItStores: [
                "Application status",
                "Documents submitted",
                "Approval timeline",
                "Communication history",
            ],
            realWorldExample: "Credit union reduced loan processing time by 50% because the AI tracks document submissions and reminds applicants of missing items.",
            metric: "50% faster processing",
        },
    ];

    return (
        <Section id="ai-memory-by-industry">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6 font-sfpro">
                        BY INDUSTRY
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest mb-6">
                        AI memory by industry
                    </h2>
                    <p className="text-gray-600 font-sfpro text-lg sm:text-xl mb-4">
                        (proven results across verticals)
                    </p>
                    <p className="text-gray-700 font-sfpro text-base sm:text-lg max-w-3xl mx-auto">
                        We've built memory systems for businesses in these industries. Here's what memory unlocks:
                    </p>
                </div>

                {/* Industry Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {industries.map((industry, index) => (
                        <IndustryCard key={index} {...industry} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="bg-blue-50 p-6 sm:p-8 rounded-lg border border-blue-200 text-center">
                    <p className="font-bold text-blue-900 font-sfpro text-lg sm:text-xl mb-3">
                        Don't see your industry?
                    </p>
                    <p className="text-blue-800 font-sfpro text-base sm:text-lg mb-4">
                        We've built memory systems for 20+ industries. If your business has repeat customers, memory works.
                    </p>
                    <p className="text-blue-700 font-sfpro text-sm">
                        Book a call. We'll show you exactly how memory would work for your business.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default AIMemoryByIndustry;
