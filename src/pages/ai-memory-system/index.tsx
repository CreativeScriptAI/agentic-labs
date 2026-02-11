import { NextPageWithLayout } from "../../types";
import MetaConfig from "src/components/MetaConfig";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Dynamic imports for below-fold sections (Next.js best practice)
const FAQSection = dynamic(() => import("../ai-memory-system/components/FAQSection"), { ssr: true });
const ProductionVsDemo = dynamic(() => import("../ai-memory-system/components/ProductionVsDemo"), { ssr: true });
const AIMemoryByRole = dynamic(() => import("../ai-memory-system/components/AIMemoryByRole"), { ssr: true });
const AIMemoryByIndustry = dynamic(() => import("../ai-memory-system/components/AIMemoryByIndustry"), { ssr: true });
const HowWeBuildIt = dynamic(() => import("../ai-memory-system/components/HowWeBuildIt"), { ssr: true });

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

const AIMemorySystemPage: NextPageWithLayout = () => {
    const [showStickyCTA, setShowStickyCTA] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setShowStickyCTA(true);
            } else {
                setShowStickyCTA(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const meta = {
        title: "AI Memory System: Build AI That Actually Remembers Your Customers | Agentic AI Labs",
        description: "You spent $50K on an AI receptionist. Your customer called twice. The AI asked for their name both times. You just paid for a parrot with a phone line.",
        type: "Article",
        url: "https://www.tryagentikai.com/ai-memory-system",
        keywords: [
            "ai memory system",
            "ai agent memory",
            "persistent ai memory",
            "ai that remembers customers",
            "production ai memory",
            "ai receptionist with memory",
            "ai voice agent memory",
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
                    text: 'A memory tool stores data. An AI memory system integrates that storage with voice agents and automation so the AI can actually use the memory in real conversations. A database is a memory tool. A receptionist who remembers every patient is a memory system. We build the system. The tools are components inside it.',
                },
            },
            {
                "@type": "Question",
                name: "How much memory can the AI store?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "As much as you need. We use tiered storage: Hot memory (last 30 days) for fast retrieval of active customers, and cold memory (older than 30 days) for cheap archival storage. Your AI can remember 10,000+ customer interactions without breaking the bank.",
                },
            },
            {
                "@type": "Question",
                name: "Is AI memory HIPAA/GDPR compliant?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We design the system around your compliance requirements: PII redaction (no SSNs, credit cards, or health records stored in memory), encryption at rest and in transit, user control (customers can view, edit, or delete their memory), and audit logs. If you're in a regulated industry, we align storage, retention, access controls, and vendor setup to your specific requirements.",
                },
            },
        ],
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "AI Memory System: Build AI That Actually Remembers Your Customers",
        description: "You spent $50K on an AI receptionist. Your customer called twice. The AI asked for their name both times. You just paid for a parrot with a phone line.",
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
        datePublished: "2026-02-11",
        dateModified: "2026-02-11",
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

            {/* Hero Section - Split Screen with Chat */}
            <div className="relative overflow-hidden bg-[#F9F6F4] w-[calc(100%+2rem)]">
                <div className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                    <div className="max-w-7xl mx-auto">
                        {/* Split Layout */}
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Left: Hero Content - Streamlined */}
                            <div className="space-y-8">
                                {/* Main Headline - Shorter & Punchier */}
                                <div className="space-y-4">
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] font-mondwest tracking-tight">
                                        Your AI has the memory of a goldfish
                                    </h1>

                                    <p className="text-xl sm:text-2xl text-gray-600 font-sfpro leading-relaxed">
                                        It forgot your customer. <span className="text-red-600 font-semibold">They booked with a competitor.</span>
                                    </p>
                                </div>

                                {/* Value Prop - Single Line */}
                                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                                    <p className="text-base sm:text-lg text-gray-800 font-sfpro leading-relaxed">
                                        We build AI memory systems that actually remember your customers—so you don't lose $50K patients to forgetful bots.
                                    </p>
                                </div>

                                {/* CTAs */}
                                <div className="flex flex-col sm:flex-row items-start gap-4">
                                    <CTAButton href="/book-a-call" label="Book Free Memory Audit" />
                                    <a
                                        href="#what-is-ai-memory"
                                        className="group flex items-center gap-2 text-base font-medium text-blue-600 hover:text-blue-700 transition-colors px-4 py-3 font-sfpro"
                                    >
                                        <span>See how it works</span>
                                        <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </a>
                                </div>

                                {/* Social Proof & Testimonial */}
                                <div className="space-y-6 pt-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex -space-x-2">
                                            <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">A</div>
                                            <div className="w-8 h-8 rounded-full bg-purple-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">B</div>
                                            <div className="w-8 h-8 rounded-full bg-green-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">C</div>
                                        </div>
                                        <p className="text-sm text-gray-600 font-sfpro">
                                            Trusted by <span className="font-semibold text-gray-900">50+ AI-first companies</span>
                                        </p>
                                    </div>

                                    {/* Injected Testimonial - Minimal & Fast */}
                                    <div className="border-l-2 border-blue-200 pl-4 py-1">
                                        <p className="text-gray-600 italic font-sfpro text-sm leading-relaxed">
                                            "Our previous AI forgot patients the moment they hung up. Agentic's memory system remembers their kids' names 6 months later."
                                        </p>
                                        <p className="text-gray-900 font-bold text-xs mt-2 font-sfpro">— Dr. Sarah Jenkins, Dental Director</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Chat Conversation Preview - Keep as is */}
                            <div className="lg:pl-8">
                                <div className="space-y-4">
                                    {/* Header */}
                                    <div className="text-center lg:text-left mb-4">
                                        <p className="text-sm font-medium text-gray-500 font-sfpro mb-1">This happened last Tuesday:</p>
                                        <h3 className="text-xl sm:text-2xl font-bold text-[#0A1128] font-mondwest">
                                            The $50K Mistake
                                        </h3>
                                    </div>


                                    {/* Animated Chat - Wednesday (The Problem) - Moved to Hero */}
                                    <div className="bg-white rounded-xl shadow-lg border-2 border-red-300 overflow-hidden hover:shadow-xl transition-shadow mb-6">
                                        {/* Chat Header */}
                                        <div className="bg-gradient-to-r from-red-50 to-red-100 border-b border-red-200 px-5 py-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-bold text-red-700 font-sfpro text-sm">
                                                        3:42 PM — Wednesday
                                                    </p>
                                                    <p className="text-gray-600 font-sfpro text-xs mt-1">
                                                        Return call - Reschedule request
                                                    </p>
                                                </div>
                                                <div className="bg-red-100 border border-red-300 rounded-full px-3 py-1">
                                                    <p className="text-red-700 font-sfpro text-xs font-medium">
                                                        ✗ Failed
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Chat Messages - Animated Sequence */}
                                        <div className="p-5 space-y-3 bg-gradient-to-b from-red-50/30 to-white min-h-[320px]">
                                            {/* AI Message - No Memory */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ duration: 0.4, delay: 0.1 }}
                                                className="flex items-start gap-2"
                                            >
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                                                    AI
                                                </div>
                                                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm max-w-[75%] border-2 border-red-200">
                                                    <p className="text-gray-800 font-sfpro text-sm leading-relaxed">
                                                        Hi! How can I help you today?
                                                    </p>
                                                    <div className="flex items-center gap-1 mt-2 text-red-600">
                                                        <span className="text-xs">⚠️</span>
                                                        <p className="font-sfpro text-xs italic">
                                                            No memory of Monday's call
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Customer Message */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ duration: 0.4, delay: 0.8 }}
                                                className="flex items-start gap-2 justify-end"
                                            >
                                                <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm max-w-[75%]">
                                                    <p className="text-white font-sfpro text-sm leading-relaxed">
                                                        I need to reschedule my Thursday appointment.
                                                    </p>
                                                </div>
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 text-xs font-bold shadow-sm">
                                                    S
                                                </div>
                                            </motion.div>

                                            {/* AI Message - Asking Name */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ duration: 0.4, delay: 1.5 }}
                                                className="flex items-start gap-2"
                                            >
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                                                    AI
                                                </div>
                                                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm max-w-[75%] border-2 border-red-200">
                                                    <p className="text-gray-800 font-sfpro text-sm leading-relaxed">
                                                        Sure! What's your name?
                                                    </p>
                                                    <div className="flex items-center gap-1 mt-2 text-red-600">
                                                        <span className="text-xs">⚠️</span>
                                                        <p className="font-sfpro text-xs italic">
                                                            Should already know this
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Customer Message - Frustrated */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ duration: 0.4, delay: 2.2 }}
                                                className="flex items-start gap-2 justify-end"
                                            >
                                                <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm max-w-[75%]">
                                                    <p className="text-white font-sfpro text-sm leading-relaxed">
                                                        ...Sarah. I called Monday.
                                                    </p>
                                                </div>
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 text-xs font-bold shadow-sm">
                                                    S
                                                </div>
                                            </motion.div>

                                            {/* Call Ended */}
                                            <div className="flex items-center justify-center py-3">
                                                <div className="bg-red-100 border-2 border-red-400 rounded-full px-4 py-2 shadow-sm">
                                                    <p className="text-red-700 font-sfpro text-xs font-bold">
                                                        📞 Call ended → Booked with competitor
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Impact Statement */}
                                    <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 rounded-r-lg p-4">
                                        <p className="text-red-900 font-sfpro text-sm font-bold">
                                            Lost: $50K/year patient
                                        </p>
                                        <p className="text-red-800 font-sfpro text-xs mt-1">
                                            Because your AI has the memory of a goldfish.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Full Chat Conversation Section - Horizontal Cards */}
            {/* Section 2: The Uncomfortable Truth - Simplified */}
            <Section bgColor="gray">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1128] font-mondwest mb-8 text-center">
                        "But my AI works fine."
                    </h2>

                    <div className="space-y-6 text-gray-700 font-sfpro text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
                        <p className="text-center">Does it?</p>
                        <p className="text-center">Here's what's happening right now:</p>

                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <ul className="space-y-3 text-gray-700 font-sfpro text-base sm:text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>Your AI handles 300 calls/month</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>40% are returning customers</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span className="font-bold text-gray-900">Every single one gets treated like a stranger</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-center text-gray-700">
                            Your customers are calling back. Asking follow-up questions. Rescheduling appointments. Checking order status.
                        </p>
                        <p className="text-center text-[#0A1128] font-bold text-xl sm:text-2xl">
                            And your AI says: "Hi! How can I help you today?"
                        </p>
                        <p className="text-center text-gray-500 italic text-base">
                            Like it's never met them before.
                        </p>
                    </div>

                    {/* Stats Block - Minimal Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-5xl sm:text-6xl font-bold text-blue-600 font-mondwest mb-2">23%</p>
                            <p className="text-gray-700 font-sfpro text-sm leading-relaxed">
                                Customer churn rate when AI doesn't remember them
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-5xl sm:text-6xl font-bold text-blue-600 font-mondwest mb-2">$127K</p>
                            <p className="text-gray-700 font-sfpro text-sm leading-relaxed">
                                Average annual revenue lost per 1,000 customers
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-5xl sm:text-6xl font-bold text-blue-600 font-mondwest mb-2">6 mo</p>
                            <p className="text-gray-700 font-sfpro text-sm leading-relaxed">
                                How long it takes competitors to steal your customers
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center space-y-2">
                        <p className="text-gray-700 font-sfpro text-xl sm:text-2xl font-bold">
                            This isn't a feature gap.
                        </p>
                        <p className="text-blue-600 font-sfpro text-2xl sm:text-3xl font-bold">
                            It's a revenue leak.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Section 3: What is AI Memory */}
            <Section bgColor="gray" id="what-is-ai-memory">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8 sm:mb-12">
                        <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6 font-sfpro">
                            DEFINITION
                        </p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest mb-6">
                            What is AI memory?
                        </h2>
                        <p className="text-gray-600 font-sfpro text-lg sm:text-xl mb-4">
                            (and why it's not a database)
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 font-sfpro text-base sm:text-lg leading-relaxed mb-6">
                            AI memory is what lets your AI agent remember customers, conversations, and context across interactions—days, weeks, or months later.
                        </p>
                        <p className="text-gray-700 font-sfpro text-base sm:text-lg leading-relaxed mb-6">
                            It's not a database. Databases store facts. Memory stores <strong>understanding</strong>.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-white p-6 rounded-lg border border-gray-200">
                                <h4 className="font-bold text-gray-900 font-sfpro text-lg mb-3">Database thinking:</h4>
                                <ul className="space-y-2 text-gray-700 font-sfpro text-sm">
                                    <li>• Customer ID: 12345</li>
                                    <li>• Name: Sarah</li>
                                    <li>• Last call: 2026-02-05</li>
                                    <li>• Status: Qualified lead</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                <h4 className="font-bold text-blue-900 font-sfpro text-lg mb-3">Memory thinking:</h4>
                                <ul className="space-y-2 text-blue-800 font-sfpro text-sm">
                                    <li>• Sarah called Monday about pricing for her dental practice</li>
                                    <li>• She was concerned about HIPAA compliance</li>
                                    <li>• She's comparing 3 vendors</li>
                                    <li>• She wants to go live before March</li>
                                    <li>• She prefers email follow-ups, not calls</li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-gray-700 font-sfpro text-base sm:text-lg leading-relaxed">
                            The database knows <strong>what</strong> happened. Memory knows <strong>why</strong> it matters.
                        </p>
                    </div>

                    {/* Brain-Centered Infographic */}
                    <div className="mt-16 mb-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1128] font-mondwest mb-8 text-center">
                            How it works: One brain, multiple agents
                        </h3>

                        <div className="relative max-w-4xl mx-auto py-12">
                            {/* Central Brain */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="relative">
                                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                                        <svg className="w-16 h-16 sm:w-20 sm:h-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                        <p className="text-sm font-bold text-gray-900 font-sfpro">AI Memory</p>
                                        <p className="text-xs text-gray-600 font-sfpro">Central Brain</p>
                                    </div>
                                </div>
                            </div>

                            {/* Agent Nodes - Positioned in a circle */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                                {/* Voice Agent - Top Left */}
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-blue-300 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-900 font-sfpro mt-3 text-center">Voice Agent</p>
                                    <p className="text-xs text-gray-600 font-sfpro text-center">Calls & Conversations</p>
                                </div>

                                {/* Receptionist Agent - Top Right */}
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-purple-300 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-900 font-sfpro mt-3 text-center">Receptionist</p>
                                    <p className="text-xs text-gray-600 font-sfpro text-center">Scheduling & Booking</p>
                                </div>

                                {/* Follow-up Agent - Bottom Left */}
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-green-300 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-900 font-sfpro mt-3 text-center">Follow-up Agent</p>
                                    <p className="text-xs text-gray-600 font-sfpro text-center">Reminders & Nurture</p>
                                </div>

                                {/* Support Agent - Bottom Right */}
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-orange-300 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-900 font-sfpro mt-3 text-center">Support Agent</p>
                                    <p className="text-xs text-gray-600 font-sfpro text-center">Help & Questions</p>
                                </div>
                            </div>

                            {/* Connection Lines - SVG overlay */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none -z-0" style={{ top: 0, left: 0 }}>
                                <defs>
                                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                        <polygon points="0 0, 10 3, 0 6" fill="#9CA3AF" />
                                    </marker>
                                </defs>
                                {/* Lines connecting agents to brain - will be visible on larger screens */}
                                <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="#E5E7EB" strokeWidth="2" markerEnd="url(#arrowhead)" className="hidden md:block" />
                                <line x1="80%" y1="30%" x2="50%" y2="50%" stroke="#E5E7EB" strokeWidth="2" markerEnd="url(#arrowhead)" className="hidden md:block" />
                                <line x1="20%" y1="70%" x2="50%" y2="50%" stroke="#E5E7EB" strokeWidth="2" markerEnd="url(#arrowhead)" className="hidden md:block" />
                                <line x1="80%" y1="70%" x2="50%" y2="50%" stroke="#E5E7EB" strokeWidth="2" markerEnd="url(#arrowhead)" className="hidden md:block" />
                            </svg>
                        </div>

                        {/* Explanation */}
                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 max-w-3xl mx-auto mt-8">
                            <p className="text-blue-900 font-sfpro text-base sm:text-lg leading-relaxed text-center">
                                <span className="font-bold">All agents share one memory.</span> When the Voice Agent learns something, the Receptionist remembers it. When Support answers a question, Follow-up knows the context. No repetition. No frustration.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Three Types of Memory - Minimal & Premium */}
            <Section id="memory-types">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl sm:text-4xl font-bold text-[#0A1128] font-mondwest mb-4">
                            The three types of AI memory
                        </h3>
                        <p className="text-gray-600 font-sfpro text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
                            Modern AI memory systems use a <span className="text-blue-600 font-semibold">layered architecture</span>—similar to how human memory works
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 mb-10">
                        {/* Memory Type 1 - Short-Term */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all group">
                            {/* Header with gradient accent */}
                            <div className="bg-gradient-to-br from-blue-50 to-white p-6 border-b border-gray-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
                                        <span className="text-white font-bold text-xl font-mondwest">01</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-[#0A1128] font-mondwest leading-tight">
                                        Short-Term Memory
                                    </h4>
                                </div>
                                <p className="text-sm text-gray-500 font-sfpro italic">Working Memory</p>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div>
                                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1 font-sfpro">What it does</p>
                                    <p className="text-sm text-gray-700 font-sfpro leading-relaxed">
                                        Holds the immediate context of the current conversation.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1 font-sfpro">Example</p>
                                    <p className="text-sm text-gray-600 font-sfpro leading-relaxed italic">
                                        "You just told me you need an AI receptionist for a 5-doctor practice. Got it."
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1 font-sfpro">Technical reality</p>
                                    <p className="text-sm text-gray-600 font-sfpro leading-relaxed">
                                        Lives in the AI's prompt or temporary RAM. Limited by context window (8K-128K tokens).
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-red-100">
                                    <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-1 font-sfpro">⚠️ When it breaks</p>
                                    <p className="text-sm text-red-700 font-sfpro leading-relaxed">
                                        Long conversations exceed the context window. The AI "forgets" the beginning.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Memory Type 2 - Long-Term */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all group">
                            {/* Header with gradient accent */}
                            <div className="bg-gradient-to-br from-purple-50 to-white p-6 border-b border-gray-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center shadow-sm">
                                        <span className="text-white font-bold text-xl font-mondwest">02</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-[#0A1128] font-mondwest leading-tight">
                                        Long-Term Memory
                                    </h4>
                                </div>
                                <p className="text-sm text-gray-500 font-sfpro italic">Episodic + Semantic Memory</p>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div>
                                    <p className="text-xs font-bold text-purple-600 uppercase tracking-wide mb-1 font-sfpro">What it does</p>
                                    <p className="text-sm text-gray-700 font-sfpro leading-relaxed">
                                        Stores past interactions, customer history, preferences, and learned patterns.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <div>
                                        <p className="text-xs font-semibold text-gray-700 font-sfpro">Episodic Memory:</p>
                                        <p className="text-sm text-gray-600 font-sfpro leading-relaxed">
                                            "Sarah called Feb 5 about HIPAA compliance."
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-700 font-sfpro">Semantic Memory:</p>
                                        <p className="text-sm text-gray-600 font-sfpro leading-relaxed">
                                            "Dental practices care about HIPAA."
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1 font-sfpro">Technical reality</p>
                                    <p className="text-sm text-gray-600 font-sfpro leading-relaxed">
                                        Vector databases + RAG pulls relevant memories into the current prompt.
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-red-100">
                                    <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-1 font-sfpro">⚠️ When it breaks</p>
                                    <p className="text-sm text-red-700 font-sfpro leading-relaxed">
                                        Poor retrieval logic. Can't find the right memory at the right time.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Memory Type 3 - Procedural */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all group">
                            {/* Header with gradient accent */}
                            <div className="bg-gradient-to-br from-green-50 to-white p-6 border-b border-gray-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center shadow-sm">
                                        <span className="text-white font-bold text-xl font-mondwest">03</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-[#0A1128] font-mondwest leading-tight">
                                        Procedural Memory
                                    </h4>
                                </div>
                                <p className="text-sm text-gray-500 font-sfpro italic">Shared Memory Across Agents</p>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div>
                                    <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-1 font-sfpro">What it does</p>
                                    <p className="text-sm text-gray-700 font-sfpro leading-relaxed">
                                        Stores how to perform tasks and shared knowledge across multiple AI agents.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1 font-sfpro">Example</p>
                                    <p className="text-sm text-gray-600 font-sfpro leading-relaxed italic">
                                        AI Receptionist learns "Dr. Smith's patients prefer mornings." AI Follow-Up Agent uses that knowledge.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1 font-sfpro">Technical reality</p>
                                    <p className="text-sm text-gray-600 font-sfpro leading-relaxed">
                                        Multi-agent systems share a unified memory layer. They collaborate without repeating work.
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-red-100">
                                    <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-1 font-sfpro">⚠️ When it breaks</p>
                                    <p className="text-sm text-red-700 font-sfpro leading-relaxed">
                                        Memory silos. Your customer repeats themselves to every AI they talk to.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Insight Box */}
                    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-2xl p-8 border border-blue-200 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                                <span className="text-white text-xl">💡</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-blue-900 uppercase tracking-wide mb-2 font-sfpro">Key Insight</p>
                                <p className="text-blue-900 font-sfpro text-base sm:text-lg leading-relaxed">
                                    Most AI tools give you <span className="font-bold">short-term memory</span> (the conversation context).
                                    We build systems with <span className="font-bold">all three layers—connected</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Production vs Demo Section */}
            <ProductionVsDemo />

            {/* Mid-Page CTA */}
            <Section bgColor="gray">
                <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1128] font-mondwest mb-4">
                        Ready to build AI that actually remembers?
                    </h3>
                    <p className="text-gray-700 font-sfpro text-base sm:text-lg mb-6">
                        Book a free 15-minute memory audit. We'll show you exactly what's broken and how to fix it.
                    </p>
                    <CTAButton href="/book-a-call" label="Book Your Free Memory Audit" />
                </div>
            </Section>

            {/* AI Memory by Role */}
            <AIMemoryByRole />

            {/* AI Memory by Industry */}
            <AIMemoryByIndustry />

            {/* How We Build It */}
            <HowWeBuildIt />

            {/* FAQ Section */}
            <FAQSection />

            {/* Final CTA - Minimal */}
            <Section bgColor="gray">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1128] font-mondwest mb-8">
                        Your AI should remember your customers.
                    </h2>

                    <p className="text-gray-700 font-sfpro text-lg sm:text-xl mb-8">
                        You have two options:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 text-left">
                            <p className="font-bold text-gray-900 font-sfpro text-lg mb-2">Option A:</p>
                            <p className="text-gray-700 font-sfpro text-base">
                                Keep losing customers because your AI treats them like strangers.
                            </p>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
                            <p className="font-bold text-blue-900 font-sfpro text-lg mb-2">Option B:</p>
                            <p className="text-blue-800 font-sfpro text-base">
                                Book a 15-minute call. We'll audit your AI setup and show you exactly what a memory system would look like for your business.
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-600 font-sfpro text-base mb-6">
                        No pitch. No pressure. Just a straight answer.
                    </p>

                    <CTAButton href="/book-a-call" label="Book Your Free Memory Audit Call" />

                    <p className="text-gray-500 font-sfpro text-sm mt-6">
                        Or email us: hello@tryagentikai.com
                    </p>
                </div>
            </Section>
            {/* Sticky Bottom CTA - Scroll Triggered */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: showStickyCTA ? 0 : 100, opacity: showStickyCTA ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-blue-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] py-4 px-6 md:px-8 hidden md:flex items-center justify-between"
            >
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        AI
                    </div>
                    <div>
                        <p className="font-bold text-gray-900 font-sfpro text-sm sm:text-base">
                            Stop losing customers to forgetful AI
                        </p>
                        <p className="text-gray-500 font-sfpro text-xs sm:text-sm">
                            Get a memory system that improves LTV by 40%
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-600">A</div>
                        <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-600">B</div>
                        <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-600">+</div>
                    </div>
                    <Link
                        href="/book-a-call"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg text-sm font-sfpro whitespace-nowrap transform hover:-translate-y-0.5"
                    >
                        Book Free Audit
                    </Link>
                </div>
            </motion.div>
        </>
    );
};

AIMemorySystemPage.getLayout = (page) => page;

export default AIMemorySystemPage;
