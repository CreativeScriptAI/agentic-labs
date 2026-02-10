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

interface RoleCardProps {
    role: string;
    icon: React.ReactNode;
    whatItRemembers: string[];
    example: {
        scenario: string;
        response: string;
    };
    businessOutcome: string[];
}

const RoleCard: React.FC<RoleCardProps> = ({ role, icon, whatItRemembers, example, businessOutcome }) => (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                {icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#0A1128] font-mondwest">
                {role}
            </h3>
        </div>

        {/* What it remembers */}
        <div className="mb-5">
            <p className="font-semibold text-gray-900 font-sfpro text-sm sm:text-base mb-3">What it remembers:</p>
            <ul className="space-y-2 text-gray-700 font-sfpro text-sm sm:text-base">
                {whatItRemembers.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>

        {/* Example */}
        <div className="mb-5 bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="font-semibold text-blue-900 font-sfpro text-sm sm:text-base mb-2">Example:</p>
            <p className="text-blue-800 font-sfpro text-sm mb-2">{example.scenario}</p>
            <p className="text-blue-900 font-sfpro text-sm italic">AI: "{example.response}"</p>
        </div>

        {/* Business outcome */}
        <div>
            <p className="font-semibold text-gray-900 font-sfpro text-sm sm:text-base mb-3">Business outcome:</p>
            <ul className="space-y-2 text-gray-700 font-sfpro text-sm sm:text-base">
                {businessOutcome.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const AIMemoryByRole = () => {
    const roles: RoleCardProps[] = [
        {
            role: "AI Receptionist (Healthcare, Dental, Clinics)",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            whatItRemembers: [
                "Patient appointment history",
                "Insurance details",
                "Preferred appointment times (morning vs. afternoon)",
                "Communication preferences (text vs. call)",
                "Past concerns or questions",
            ],
            example: {
                scenario: "Patient calls: 'Hi, I need to reschedule my cleaning.'",
                response: "Hi Sarah! I see you're booked for Thursday at 2 PM. Want to move it to Friday morning like last time?",
            },
            businessOutcome: [
                "80% reduction in 'repeat question' calls",
                "Front desk staff freed for patient care",
                "Patients feel recognized, not processed",
            ],
        },
        {
            role: "AI Interviewer (Recruiting, HR)",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            whatItRemembers: [
                "Candidate screening history",
                "Skills and experience discussed",
                "Salary expectations",
                "Availability for next rounds",
                "Red flags or standout moments",
            ],
            example: {
                scenario: "Candidate calls back: 'Hi, I wanted to follow up on my interview.'",
                response: "Hi John! I remember our conversation last week. You mentioned you're looking for remote roles with $120K+ salary. I flagged you as a strong fit for the Senior Engineer role. Let me check the status...",
            },
            businessOutcome: [
                "Recruiters only talk to pre-qualified candidates",
                "Candidates don't repeat their background 5 times",
                "15 hours/week saved on phone screens",
            ],
        },
        {
            role: "AI SDR (Marketing Agencies, B2B Sales)",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            whatItRemembers: [
                "Lead source and campaign",
                "Previous outreach attempts",
                "Objections raised",
                "Decision timeline",
                "Stakeholders involved",
            ],
            example: {
                scenario: "Lead calls: 'I got your voicemail.'",
                response: "Hi Mike! I called last week about our AI receptionist for dental practices. You mentioned you're evaluating options for your 3 clinic locations. Still on track for a March decision?",
            },
            businessOutcome: [
                "No duplicate outreach (AI knows who it called)",
                "Personalized follow-ups based on objections",
                "Higher conversion (context = trust)",
            ],
        },
        {
            role: "AI Support Rep (E-commerce, SaaS)",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            whatItRemembers: [
                "Order history",
                "Past returns or issues",
                "Product preferences",
                "Support ticket history",
            ],
            example: {
                scenario: "Customer: 'I need to return this.'",
                response: "Hi Sarah! I see you ordered the blue sweater last week. Want to exchange it for a different size, or get a refund? (Last time you exchanged for a larger size—want me to send that again?)",
            },
            businessOutcome: [
                "60% reduction in support tickets",
                "Response time: 12 seconds (down from 4 hours)",
                "Customers never repeat themselves",
            ],
        },
        {
            role: "AI Showing Coordinator (Real Estate)",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            whatItRemembers: [
                "Property preferences (bedrooms, location, budget)",
                "Past showings attended",
                "Feedback on properties",
                "Decision timeline",
            ],
            example: {
                scenario: "Buyer calls: 'I want to see that 3-bedroom in downtown.'",
                response: "Hi Lisa! I remember you liked the modern kitchen in the last property we showed you. This one has a similar layout. Want to book a showing for Saturday morning like usual?",
            },
            businessOutcome: [
                "Buyers feel understood, not sold to",
                "Agents focus on closings, not logistics",
                "Higher conversion (personalized recommendations)",
            ],
        },
        {
            role: "AI Dispatch Agent (Home Services: HVAC, Plumbing, Roofing)",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            whatItRemembers: [
                "Service history",
                "Property details (equipment type, age)",
                "Past issues",
                "Preferred technicians",
            ],
            example: {
                scenario: "Customer: 'My AC stopped working again.'",
                response: "Hi Tom! I see we serviced your AC 6 months ago. Same unit? I'll send Mike—he handled it last time and knows your system.",
            },
            businessOutcome: [
                "Faster diagnosis (AI knows the history)",
                "Customer trust (same technician, continuity)",
                "No missed service calls",
            ],
        },
        {
            role: "AI Membership Advisor (Fitness, Gyms, Studios)",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            whatItRemembers: [
                "Member preferences (class types, times)",
                "Attendance history",
                "Goals and progress",
                "Lapsed members (re-engagement triggers)",
            ],
            example: {
                scenario: "Member calls: 'I want to book a yoga class.'",
                response: "Hi Sarah! You usually take the 6 PM Tuesday class with Instructor Amy. Want me to book you for this week?",
            },
            businessOutcome: [
                "Members feel seen, not processed",
                "Re-engagement campaigns based on behavior",
                "Higher retention",
            ],
        },
        {
            role: "AI Intake Specialist (Legal)",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            whatItRemembers: [
                "Case type and details",
                "Consultation history",
                "Retainer status",
                "Stakeholders and contacts",
            ],
            example: {
                scenario: "Client calls: 'I need to follow up on my consultation.'",
                response: "Hi John! I remember we discussed your contract dispute last week. You mentioned you're waiting on documents from the other party. Have those come through?",
            },
            businessOutcome: [
                "Lawyers only talk to qualified cases",
                "Clients don't repeat their story 5 times",
                "Higher close rate (continuity = trust)",
            ],
        },
    ];

    return (
        <Section bgColor="gray" id="ai-memory-by-role">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6 font-sfpro">
                        BY ROLE
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest mb-6">
                        AI memory by role
                    </h2>
                    <p className="text-gray-600 font-sfpro text-lg sm:text-xl mb-4">
                        (what it looks like in your business)
                    </p>
                    <p className="text-gray-700 font-sfpro text-base sm:text-lg max-w-3xl mx-auto mb-8">
                        Memory isn't abstract. It's specific to the job your AI does.
                    </p>
                    <p className="text-gray-700 font-sfpro text-base sm:text-lg max-w-3xl mx-auto">
                        Here's how memory works for different AI roles:
                    </p>
                </div>

                {/* Role Cards Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {roles.map((role, index) => (
                        <RoleCard key={index} {...role} />
                    ))}
                </div>

                {/* Key Insight */}
                <div className="bg-blue-50 p-6 sm:p-8 rounded-lg border border-blue-200 text-center">
                    <p className="font-bold text-blue-900 font-sfpro text-lg sm:text-xl mb-3">Key Insight:</p>
                    <p className="text-blue-800 font-sfpro text-base sm:text-lg">
                        Same system (voice + memory + automation). Different roles. Different memories. One question: <strong>What's the repetitive job your AI should be doing right now?</strong>
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default AIMemoryByRole;
