import { NextPageWithLayout } from "../../types";
import MetaConfig from "src/components/MetaConfig";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamic imports for below-fold sections (Next.js best practice)
const FAQSection = dynamic(() => import("../ai-memory-system/components/FAQSection"), { ssr: true });
const ProductionVsDemo = dynamic(() => import("../ai-memory-system/components/ProductionVsDemo"), { ssr: true });

// Reusable section wrapper component
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

// CTA Button Component (matching existing design system)
const CTAButton = ({
    href,
    label,
    variant = "primary"
}: {
    href: string;
    label: string;
    variant?: "primary" | "secondary";
}) => (
    <Link
        href={href}
        className={`inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base transition-colors ${variant === "primary"
            ? "bg-[#FCCA07] text-[#0A1128] hover:bg-yellow-500"
            : "bg-white text-[#0A1128] hover:bg-gray-50 border border-gray-200 shadow-sm"
            }`}
    >
        {label}
    </Link>
);

// Memory Type Card Component
const MemoryTypeCard = ({
    number,
    title,
    description,
    example,
    technical,
    whenItBreaks,
}: {
    number: string;
    title: string;
    description: string;
    example: string;
    technical: string;
    whenItBreaks: string;
}) => (
    <div className="relative p-6 sm:p-8 bg-white rounded-lg shadow-sm border border-gray-100">
        {/* Number Badge */}
        <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl sm:text-4xl font-bold text-blue-600/15 font-mondwest leading-none">
                {number}
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-[#0A1128] font-mondwest">
                {title}
            </h4>
        </div>

        <div className="space-y-3 text-sm sm:text-base text-gray-700 font-sfpro">
            <p><strong className="text-gray-900">What it does:</strong> {description}</p>
            <p><strong className="text-gray-900">Example:</strong> {example}</p>
            <p><strong className="text-gray-900">Technical reality:</strong> {technical}</p>
            <p><strong className="text-red-600">When it breaks:</strong> {whenItBreaks}</p>
        </div>
    </div>
);

// Comparison Card Component
const ComparisonCard = ({
    type,
    items,
    variant = "neutral"
}: {
    type: string;
    items: string[];
    variant?: "good" | "bad" | "neutral";
}) => {
    const bgColor = variant === "good" ? "bg-green-50" : variant === "bad" ? "bg-red-50" : "bg-white";
    const borderColor = variant === "good" ? "border-green-200" : variant === "bad" ? "border-red-200" : "border-gray-200";
    const textColor = variant === "good" ? "text-green-900" : variant === "bad" ? "text-red-900" : "text-gray-900";

    return (
        <div className={`p-6 rounded-lg border ${bgColor} ${borderColor}`}>
            <p className={`font-semibold ${textColor} mb-3 font-sfpro`}>{type}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 font-sfpro text-sm sm:text-base">
                {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

// Business Outcome Card
const OutcomeCard = ({
    number,
    title,
    description,
}: {
    number: string;
    title: string;
    description: string;
}) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-start gap-3 mb-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold font-mondwest">
                {number}
            </span>
            <h4 className="font-bold text-gray-900 font-sfpro text-base sm:text-lg">{title}</h4>
        </div>
        <p className="text-gray-700 font-sfpro text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
);

const AIMemorySystemPage: NextPageWithLayout = () => {
    const meta = {
        title: "AI Memory System: Build AI Agents That Remember | Agentic AI Labs",
        description: "Your AI forgets your customers. We build production-grade memory systems that connect voice, memory, and automation. Book a free memory audit.",
        type: "Article",
        url: "https://www.tryagentikai.com/ai-memory-system",
        keywords: [
            "ai memory system",
            "persistent ai memory",
            "ai agent memory",
            "production ai memory",
            "ai memory architecture",
            "ai memory for business",
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: 'What exactly is an "AI memory system" vs. a "memory tool"?',
                acceptedAnswer: {
                    "@type": "Answer",
                    text: 'A memory tool (like Mem0 or Pinecone) stores data. An AI memory system integrates that storage with voice agents and automation so the AI can actually use the memory in real conversations. Think of it this way: A database is a memory tool. A receptionist who remembers every patient is a memory system. We build the system. The tools are just components.',
                },
            },
            {
                "@type": "Question",
                name: "How much memory can the AI store?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "As much as you need (bounded by your retention policy and budget). We use tiered storage: Hot memory (last 30 days): Fast, expensive storage for instant retrieval. Cold memory (older than 30 days): Cheap, slow storage for archival. Your AI can remember 10,000+ customer interactions without breaking the bank.",
                },
            },
            {
                "@type": "Question",
                name: "Is AI memory HIPAA/GDPR compliant?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We design the system around your compliance requirements (HIPAA/GDPR/CCPA) and implement the controls needed to support them: PII redaction, Encryption at rest and in transit, User control, Audit logs. If you're in a regulated industry, we'll align storage, retention, access controls, and vendor setup to your specific requirements. Compliance is non-negotiable.",
                },
            },
        ],
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "AI Memory System: Why Your AI Forgets (And How to Fix It)",
        description: "Your AI forgets your customers. We build production-grade memory systems that connect voice, memory, and automation.",
        author: {
            "@type": "Organization",
            name: "Agentic AI Labs",
        },
        publisher: {
            "@type": "Organization",
            name: "Agentic AI Labs",
            logo: {
                "@type": "ImageObject",
                url: "https://www.tryagentikai.com/logo.png",
            },
        },
        datePublished: "2026-02-10",
        dateModified: "2026-02-10",
    };

    return (
        <>
            <MetaConfig {...meta} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-[#F9F6F4] w-[calc(100%+2rem)] pt-32 pb-16 sm:py-24 flex items-center">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col max-w-6xl mx-auto py-12 sm:py-16 lg:py-20">
                        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
                            {/* Main Headline */}
                            <h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-4 sm:mb-6 text-center font-mondwest tracking-tight"
                                style={{ textWrap: "balance" }}
                            >
                                <span>AI Memory System: </span>
                                <span className="text-gray-500">Why Your AI Forgets </span>
                                <span className="text-blue-600 block sm:inline">(And How to Fix It)</span>
                            </h1>

                            {/* Problem Statement */}
                            <div className="space-y-4 text-center max-w-3xl">
                                <p className="text-slate-600 font-sfpro text-base sm:text-lg leading-relaxed">
                                    Your AI works great on the first call.
                                </p>
                                <p className="text-slate-600 font-sfpro text-base sm:text-lg leading-relaxed">
                                    Then your customer calls back. And the AI asks for their name again.
                                </p>
                                <p className="text-slate-900 font-sfpro text-lg sm:text-xl font-semibold leading-relaxed">
                                    That's not intelligence. That's embarrassing.
                                </p>
                            </div>

                            <div className="w-16 h-0.5 bg-gray-300 my-4" />

                            {/* Extended Problem */}
                            <div className="space-y-4 text-center max-w-3xl">
                                <p className="text-slate-700 font-sfpro text-base sm:text-lg leading-relaxed">
                                    Here's the thing about AI agents—most of them are parrots.
                                </p>
                                <p className="text-slate-700 font-sfpro text-base sm:text-lg leading-relaxed">
                                    They sound smart. They answer questions. They handle conversations like pros.
                                </p>
                                <p className="text-slate-700 font-sfpro text-base sm:text-lg leading-relaxed">
                                    But they forget everything the moment the call ends.
                                </p>
                                <p className="text-slate-900 font-sfpro text-lg sm:text-xl font-bold leading-relaxed">
                                    A voice agent without memory is a parrot. It repeats what it's trained to say. It doesn't remember who it talked to.
                                </p>
                                <p className="text-slate-700 font-sfpro text-base sm:text-lg leading-relaxed">
                                    And if you're charging customers for AI that forgets them, you're selling a demo, not a system.
                                </p>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-6">
                                <CTAButton href="/book-a-call" label="Book a Free Memory Audit Call" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* What is AI Memory Section */}
            <Section bgColor="gray" id="what-is-ai-memory">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-8 sm:mb-12">
                        <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6 font-sfpro">
                            DEFINITION
                        </p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest mb-6">
                            What is AI memory? (and why it's not a database)
                        </h2>
                    </div>

                    <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed font-sfpro mb-12">
                        <p>
                            AI memory is what lets your AI agent remember customers, conversations, and context across interactions—days, weeks, or months later.
                        </p>
                        <p>
                            It's not a database. Databases store facts. Memory stores <strong className="text-gray-900">understanding</strong>.
                        </p>
                        <p className="font-semibold text-gray-900">Here's the difference:</p>
                    </div>

                    {/* Comparison Cards */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <ComparisonCard
                            type="Database thinking:"
                            items={[
                                "Customer ID: 12345",
                                "Name: Sarah",
                                "Last call: 2026-02-05",
                                "Status: Qualified lead",
                            ]}
                        />
                        <ComparisonCard
                            type="Memory thinking:"
                            items={[
                                "Sarah called Monday about pricing for her dental practice",
                                "She was concerned about HIPAA compliance",
                                "She mentioned she's comparing 3 vendors",
                                "She asked about implementation time (wants to go live before March)",
                                "She prefers email follow-ups, not calls",
                            ]}
                            variant="good"
                        />
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-12">
                        <p className="text-blue-900 font-sfpro text-base sm:text-lg leading-relaxed">
                            The database knows <strong>what</strong> happened. Memory knows <strong>why</strong> it matters.
                        </p>
                        <p className="text-blue-800 font-sfpro text-base sm:text-lg leading-relaxed mt-3">
                            When Sarah calls back, your AI doesn't just pull her name from a spreadsheet. It picks up the conversation where it left off.
                            It references her HIPAA concern. It knows she's on a March deadline. It adapts.
                        </p>
                        <p className="text-blue-900 font-sfpro text-lg font-bold mt-3">
                            That's memory.
                        </p>
                    </div>

                    {/* Three Types of Memory */}
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#0A1128] font-mondwest mb-4">
                                The three types of AI memory
                            </h3>
                            <p className="text-gray-700 font-sfpro text-base sm:text-lg">
                                Modern AI memory systems (like the ones we build at Agentic AI Labs) use a <strong>layered architecture</strong>—similar to how human memory works:
                            </p>
                        </div>

                        <MemoryTypeCard
                            number="01"
                            title="Short-Term Memory (Working Memory)"
                            description="Holds the immediate context of the current conversation."
                            example='"You just told me you need an AI receptionist for a 5-doctor practice. Got it. Let me ask about your current call volume..."'
                            technical="This lives in the AI's prompt or temporary RAM. Limited by the model's context window (usually 8K-128K tokens)."
                            whenItBreaks="Long conversations exceed the context window. The AI 'forgets' the beginning of the call by the end."
                        />

                        <MemoryTypeCard
                            number="02"
                            title="Long-Term Memory (Episodic + Semantic Memory)"
                            description="Stores past interactions, customer history, preferences, and learned patterns."
                            example="When Sarah calls back 2 weeks later, the AI remembers her previous questions, her timeline, and her concerns—without asking again."
                            technical="Stored in vector databases (embeddings for semantic search) + relational databases (structured event logs). Retrieval-Augmented Generation (RAG) pulls relevant memories into the current prompt."
                            whenItBreaks="Poor retrieval logic. The AI remembers everything but can't find the right memory at the right time. Or it pulls irrelevant memories and pollutes the context."
                        />

                        <MemoryTypeCard
                            number="03"
                            title="Procedural Memory (Shared Memory Across Agents)"
                            description="Stores how to perform tasks, successful action patterns, and shared knowledge across multiple AI agents."
                            example="Your AI Receptionist learns that 'Dr. Smith's patients prefer morning appointments.' Your AI Follow-Up Agent uses that same knowledge when scheduling callbacks."
                            technical="Multi-agent systems share a unified memory layer. Agent A writes to memory. Agent B reads from it. They collaborate without repeating work."
                            whenItBreaks="Memory silos. Each agent has its own memory. Your customer repeats themselves to every AI they talk to."
                        />
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-8">
                        <p className="font-bold text-blue-900 font-sfpro text-base sm:text-lg">Key Insight:</p>
                        <p className="text-blue-800 font-sfpro text-base sm:text-lg mt-2">
                            Most AI tools give you short-term memory (the conversation context). We build systems with all three layers—connected.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Why It Matters Section */}
            <Section id="why-it-matters">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-8 sm:mb-12">
                        <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6 font-sfpro">
                            BUSINESS IMPACT
                        </p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest mb-6">
                            Why AI memory matters
                        </h2>
                        <p className="text-gray-600 font-sfpro text-lg sm:text-xl">
                            (the difference between a demo and a system)
                        </p>
                    </div>

                    <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed font-sfpro mb-12">
                        <p>Let's be honest. You've seen AI demos that look incredible.</p>
                        <p>The voice agent sounds human. It answers questions. It books appointments. You're impressed.</p>
                        <p>Then you deploy it with real customers. And it breaks.</p>
                        <p>Not because the voice is bad. Not because the automation failed.</p>
                        <p className="font-bold text-gray-900 text-xl">It breaks because it forgets.</p>
                    </div>

                    {/* The Parrot Problem */}
                    <div className="mb-12">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0A1128] font-mondwest mb-6">
                            The Parrot Problem (What Happens Without Memory)
                        </h3>
                        <div className="bg-red-50 p-6 sm:p-8 rounded-lg border border-red-200">
                            <p className="font-semibold text-gray-900 mb-4 font-sfpro">
                                Scenario: You're running a dental practice. You deploy an AI receptionist.
                            </p>
                            <div className="space-y-6 text-gray-700 font-sfpro">
                                <div className="space-y-2">
                                    <p className="font-semibold text-gray-900">Monday, 10 AM:</p>
                                    <p className="text-sm sm:text-base">Patient calls: "Hi, I'm Sarah. I need to book a cleaning."</p>
                                    <p className="text-sm sm:text-base">AI: "Great! Let me check availability. How about Thursday at 2 PM?"</p>
                                    <p className="text-sm sm:text-base">Sarah: "Perfect. Book it."</p>
                                    <p className="text-sm sm:text-base">AI: "Done. You'll get a confirmation text."</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-semibold text-gray-900">Wednesday, 3 PM:</p>
                                    <p className="text-sm sm:text-base">Sarah calls back: "Hi, I need to reschedule my Thursday appointment."</p>
                                    <p className="text-sm sm:text-base">AI: "Sure! What's your name?"</p>
                                    <p className="text-sm sm:text-base">Sarah: "...Sarah. I called Monday. You booked me for Thursday."</p>
                                    <p className="text-sm sm:text-base">AI: "Let me look that up. Can you spell your last name?"</p>
                                </div>
                                <p className="font-bold text-red-900 mt-4 text-lg">Sarah hangs up. She calls a competitor.</p>
                            </div>
                        </div>
                    </div>

                    {/* What Memory Fixes */}
                    <div className="mb-12">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0A1128] font-mondwest mb-6">
                            What Memory Fixes
                        </h3>
                        <div className="bg-green-50 p-6 sm:p-8 rounded-lg border border-green-200">
                            <p className="font-semibold text-gray-900 mb-4 font-sfpro">
                                Same scenario. Same dental practice. But now the AI has <strong>memory</strong>.
                            </p>
                            <div className="space-y-6 text-gray-700 font-sfpro">
                                <div className="space-y-2">
                                    <p className="font-semibold text-gray-900">Monday, 10 AM:</p>
                                    <p className="text-sm sm:text-base">Patient calls: "Hi, I'm Sarah. I need to book a cleaning."</p>
                                    <p className="text-sm sm:text-base">AI: "Great! Let me check availability. How about Thursday at 2 PM?"</p>
                                    <p className="text-sm sm:text-base">Sarah: "Perfect. Book it."</p>
                                    <p className="text-sm sm:text-base">AI: "Done. You'll get a confirmation text."</p>
                                    <p className="text-xs sm:text-sm italic text-green-700">
                                        [AI writes to memory: Sarah | New patient | Cleaning booked Thu 2 PM | Prefers text confirmations]
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-semibold text-gray-900">Wednesday, 3 PM:</p>
                                    <p className="text-sm sm:text-base">Sarah calls back: "Hi, I need to reschedule my Thursday appointment."</p>
                                    <p className="text-sm sm:text-base">AI: "Hi Sarah! I see you're booked for a cleaning Thursday at 2 PM. Want to move it?"</p>
                                    <p className="text-sm sm:text-base">Sarah: "Yes, Friday morning if possible."</p>
                                    <p className="text-sm sm:text-base">AI: "I have 9 AM or 11 AM Friday. Which works?"</p>
                                    <p className="text-sm sm:text-base">Sarah: "11 AM."</p>
                                    <p className="text-sm sm:text-base">AI: "Done. I'll text you the updated confirmation."</p>
                                </div>
                                <p className="font-bold text-green-900 mt-4 text-lg">
                                    Sarah stays. She tells her friends about the practice with the "smart" receptionist.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Business Outcomes */}
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0A1128] font-mondwest mb-6 text-center">
                            The Business Outcomes
                        </h3>
                        <p className="text-center text-gray-600 font-sfpro text-base sm:text-lg mb-8">
                            (Why This Matters to Your Bottom Line)
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <OutcomeCard
                                number="1"
                                title="Customer Retention"
                                description="Customers don't repeat themselves. They feel recognized. They stay longer."
                            />
                            <OutcomeCard
                                number="2"
                                title="Operational Efficiency"
                                description="Your AI handles returning customers without human handoff. Your team focuses on complex cases, not routine follow-ups."
                            />
                            <OutcomeCard
                                number="3"
                                title="Personalization at Scale"
                                description="Every customer gets a personalized experience. The AI remembers their preferences, their history, their quirks. You can't hire enough humans to do this for 10,000 customers. AI with memory can."
                            />
                            <OutcomeCard
                                number="4"
                                title="Compounding Intelligence"
                                description="The AI gets smarter every month. Month 1: it learns your top 20 customer questions. Month 6: it knows 500 edge cases. Month 12: it's better than your best employee at handling routine interactions."
                            />
                            <div className="md:col-span-2">
                                <OutcomeCard
                                    number="5"
                                    title="Competitive Moat"
                                    description="Your competitors can copy your voice agent. They can copy your automation. They can't copy 12 months of accumulated customer memory. Memory is your moat."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Production vs Demo - Dynamically Loaded */}
            <ProductionVsDemo />

            {/* CTA Mid-Page */}
            <Section>
                <div className="text-center max-w-3xl mx-auto">
                    <div className="w-10 h-0.5 bg-blue-600 mx-auto mb-6 sm:mb-8" />
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1128] font-mondwest mb-6">
                        Ready to build AI that remembers?
                    </h3>
                    <p className="text-lg text-gray-700 font-sfpro mb-8 leading-relaxed">
                        Book a free 15-minute memory audit call. We'll show you exactly what a memory system would look like for your business.
                    </p>
                    <CTAButton href="/book-a-call" label="Book Your Free Memory Audit Call" />
                </div>
            </Section>

            {/* Placeholder Sections */}
            <Section bgColor="gray" id="ai-memory-by-role">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6 font-sfpro">
                            BY ROLE
                        </p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest mb-6">
                            AI memory by role
                        </h2>
                        <p className="text-gray-600 font-sfpro text-lg sm:text-xl mb-8">
                            (what it looks like in your business)
                        </p>
                        <p className="text-gray-700 font-sfpro text-base sm:text-lg mb-12">
                            Memory isn't abstract. It's specific to the job your AI does.
                        </p>
                    </div>

                    <div className="bg-blue-50 p-8 rounded-lg border border-blue-200 text-center">
                        <p className="text-blue-900 font-medium font-sfpro">
                            [PLACEHOLDER: 8 AI Role Cards]
                        </p>
                        <p className="text-blue-700 mt-4 text-sm font-sfpro">
                            AI Receptionist, AI Interviewer, AI SDR, AI Support Rep, AI Showing Coordinator, AI Dispatch Agent, AI Membership Advisor, AI Intake Specialist
                        </p>
                    </div>
                </div>
            </Section>

            {/* FAQ Section - Dynamically Loaded */}
            <FAQSection />

            {/* Final CTA */}
            <Section>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest mb-6">
                        Your AI should remember your customers. Let's build that.
                    </h2>
                    <p className="text-lg text-gray-700 font-sfpro mb-4">One call. 15 minutes.</p>
                    <p className="text-lg text-gray-700 font-sfpro mb-8 leading-relaxed">
                        We'll audit your current AI setup and show you exactly what a memory system would look like for your business—and whether it even makes sense.
                    </p>
                    <p className="text-base text-gray-600 font-sfpro mb-8">No pitch. No pressure. Just a straight answer.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton href="/book-a-call" label="Book Your Free Memory Audit Call" />
                        <CTAButton href="/agent/patientlyai" label="Try PatientlyAI" variant="secondary" />
                    </div>
                </div>
            </Section>
        </>
    );
};

export default AIMemorySystemPage;
