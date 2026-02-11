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
                {/* Increased top padding for mobile to clear fixed navbar */}
                <div className="w-full px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:py-24 lg:py-32">
                    <div className="max-w-7xl mx-auto">
                        {/* Split Layout */}
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                            {/* Left: Hero Content - Streamlined */}
                            <div className="space-y-6 sm:space-y-8">
                                {/* Main Headline - Adjusted for Mobile */}
                                <div className="space-y-3 sm:space-y-4">
                                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] font-mondwest tracking-tight">
                                        Your AI has the memory of <span className="text-blue-600 block sm:inline">a goldfish.</span>
                                    </h1>

                                    <p className="text-lg sm:text-2xl text-gray-600 font-sfpro leading-relaxed">
                                        It forgot your customer. <span className="text-red-600 font-semibold block sm:inline">They booked with a competitor.</span>
                                    </p>
                                </div>

                                {/* Value Prop - Cleaner Mobile Box */}
                                <div className="bg-white/80 sm:bg-white/60 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-gray-200/50 sm:border-gray-200 shadow-sm">
                                    <p className="text-sm sm:text-lg text-gray-800 font-sfpro leading-relaxed">
                                        We build AI memory systems that actually remember your customers—so you don't lose $50K patients to forgetful bots.
                                    </p>
                                </div>

                                {/* CTAs - Full Width on Mobile */}
                                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                                    <div className="w-full sm:w-auto">
                                        <CTAButton href="/book-a-call" label="Book Free Memory Audit" />
                                    </div>
                                    <a
                                        href="#what-is-ai-memory"
                                        className="group flex items-center justify-center gap-2 text-sm sm:text-base font-medium text-blue-600 hover:text-blue-700 transition-colors px-4 py-3 font-sfpro w-full sm:w-auto border border-transparent hover:bg-blue-50 rounded-lg"
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
                                            Proven on <span className="font-semibold text-gray-900">49,000+ minutes</span> of live calls
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
                                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow mb-6">
                                        {/* Chat Header - Muted but indicating context */}
                                        <div className="bg-red-50/50 border-b border-red-100 px-5 py-4 flex items-center justify-between">
                                            <div>
                                                <p className="font-bold text-gray-900 font-sfpro text-sm">
                                                    Wednesday 3:42 PM
                                                </p>
                                                <p className="text-gray-500 font-sfpro text-xs mt-0.5">
                                                    Reschedule request
                                                </p>
                                            </div>
                                            <div className="bg-white border border-red-200 rounded-full px-3 py-1 shadow-sm">
                                                <p className="text-red-600 font-sfpro text-xs font-bold flex items-center gap-1">
                                                    ✗ Failed
                                                </p>
                                            </div>
                                        </div>

                                        {/* Chat Messages - Animated Sequence */}
                                        <div className="p-5 space-y-4 bg-gray-50/50 min-h-[320px]">
                                            {/* AI Message - No Memory */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-blue-600 text-xs font-bold shadow-sm">
                                                    AI
                                                </div>
                                                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%] border border-red-100 relative group">
                                                    <p className="text-gray-800 font-sfpro text-sm leading-relaxed">
                                                        Hi! How can I help you today?
                                                    </p>
                                                    {/* Warning Badge */}
                                                    <div className="flex items-center gap-1.5 mt-2 bg-red-50 rounded-md px-2 py-1 border border-red-100 inline-block">
                                                        <span className="text-xs">⚠️</span>
                                                        <p className="font-sfpro text-xs font-medium text-red-600">
                                                            No memory of Monday's call
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Customer Message - Muted */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.8 }}
                                                className="flex items-start gap-3 justify-end"
                                            >
                                                <div className="bg-gray-200 rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm max-w-[85%]">
                                                    <p className="text-gray-900 font-sfpro text-sm leading-relaxed">
                                                        I need to reschedule my Thursday appointment.
                                                    </p>
                                                </div>
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-bold shadow-sm">
                                                    S
                                                </div>
                                            </motion.div>

                                            {/* AI Message - Asking Name */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1.5 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-blue-600 text-xs font-bold shadow-sm">
                                                    AI
                                                </div>
                                                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%] border border-red-100">
                                                    <p className="text-gray-800 font-sfpro text-sm leading-relaxed">
                                                        Sure! What's your name?
                                                    </p>
                                                    {/* Warning Badge */}
                                                    <div className="flex items-center gap-1.5 mt-2 bg-red-50 rounded-md px-2 py-1 border border-red-100 inline-block">
                                                        <span className="text-xs">⚠️</span>
                                                        <p className="font-sfpro text-xs font-medium text-red-600">
                                                            Should already know this
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Customer Message - Frustrated - Muted */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 2.2 }}
                                                className="flex items-start gap-3 justify-end"
                                            >
                                                <div className="bg-gray-200 rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm max-w-[85%]">
                                                    <p className="text-gray-900 font-sfpro text-sm leading-relaxed">
                                                        ...Sarah. I called Monday.
                                                    </p>
                                                </div>
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-bold shadow-sm">
                                                    S
                                                </div>
                                            </motion.div>

                                            {/* Call Ended - Highlighted Action */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ type: "spring", delay: 3.0 }}
                                                className="flex items-center justify-center py-4"
                                            >
                                                <div className="bg-red-600 text-white rounded-full px-5 py-2 shadow-md hover:bg-red-700 transition-colors flex items-center gap-2">
                                                    <span className="text-xs">📞</span>
                                                    <p className="font-sfpro text-xs font-bold uppercase tracking-wide">
                                                        Call ended → Lost to competitor
                                                    </p>
                                                </div>
                                            </motion.div>
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
            {/* Section 2: The Reality Check - Simplified & Visual */}
            <Section bgColor="gray">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1128] font-mondwest mb-6 text-center">
                        "But my AI works fine."
                    </h2>

                    <p className="text-center text-gray-600 font-sfpro text-lg sm:text-xl mb-12 max-w-2xl mx-auto">
                        It handles the calls. But does it handle the <span className="text-gray-900 font-semibold">relationship</span>?
                    </p>

                    {/* The Problem Visualized - Compact Split Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
                        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                            {/* Left: The Reality */}
                            <div className="p-8 sm:p-10 flex flex-col justify-center items-center text-center bg-gray-50/50">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 text-2xl">
                                    📊
                                </div>
                                <h3 className="font-bold text-gray-900 font-sfpro text-lg mb-1">The Reality</h3>
                                <p className="text-gray-500 text-sm font-sfpro mb-6">Your call metrics</p>

                                <div className="space-y-4 w-full max-w-xs">
                                    <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                                        <span className="text-gray-600 font-medium text-sm">Monthly Calls</span>
                                        <span className="text-gray-900 font-bold">300+</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                                        <span className="text-gray-600 font-medium text-sm">Returning Customers</span>
                                        <span className="text-blue-600 font-bold">40%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: The Failure */}
                            <div className="p-8 sm:p-10 flex flex-col justify-center items-center text-center">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4 text-2xl">
                                    😶
                                </div>
                                <h3 className="font-bold text-gray-900 font-sfpro text-lg mb-1">The Failure</h3>
                                <p className="text-gray-500 text-sm font-sfpro mb-6">What your AI does</p>

                                <blockquote className="text-xl font-mondwest text-gray-900 mb-4">
                                    "Hi! How can I help you today?"
                                </blockquote>
                                <p className="text-red-500 font-bold font-sfpro text-sm bg-red-50 px-3 py-1 rounded-full border border-red-100">
                                    Treats 100% of them like strangers
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Block - Real Performance Data (Muted/Secondary) */}
                    <div className="grid grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto opacity-60 hover:opacity-100 transition-opacity">
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                            <p className="text-2xl sm:text-3xl font-bold text-gray-400 font-mondwest mb-1">49,496</p>
                            <p className="text-gray-500 font-sfpro text-xs leading-tight">
                                Mins of voice data
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                            <p className="text-2xl sm:text-3xl font-bold text-gray-400 font-mondwest mb-1">$0.22</p>
                            <p className="text-gray-500 font-sfpro text-xs leading-tight">
                                Cost per min
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                            <p className="text-2xl sm:text-3xl font-bold text-gray-400 font-mondwest mb-1">$10.6k</p>
                            <p className="text-gray-500 font-sfpro text-xs leading-tight">
                                Volume handled
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center space-y-2 opacity-80">
                        <p className="text-gray-500 font-sfpro text-sm uppercase tracking-widest">
                            The Solution
                        </p>
                        <p className="text-blue-600 font-sfpro text-lg font-bold">
                            Production-ready infrastructure for AI memory.
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

                        <div className="grid md:grid-cols-2 gap-8 my-12 items-stretch">
                            {/* Database Thinking - The Old Way (Terminal Style) */}
                            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700 shadow-2xl overflow-hidden relative group">
                                <div className="absolute top-4 right-4 flex gap-1.5 opacity-50">
                                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                                </div>
                                <h4 className="font-mono text-slate-400 text-xs mb-6 border-b border-slate-700 pb-3 uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    Database_Store.json
                                </h4>
                                <ul className="space-y-4 font-mono text-sm text-slate-300">
                                    <li className="flex gap-3 text-slate-500">
                                        <span>01</span> <span><span className="text-purple-400">"id"</span>: <span className="text-green-400">12345</span>,</span>
                                    </li>
                                    <li className="flex gap-3 text-slate-500">
                                        <span>02</span> <span><span className="text-purple-400">"name"</span>: <span className="text-green-400">"Sarah"</span>,</span>
                                    </li>
                                    <li className="flex gap-3 text-slate-500">
                                        <span>03</span> <span><span className="text-purple-400">"last_contact"</span>: <span className="text-green-400">"2026-02-05"</span>,</span>
                                    </li>
                                    <li className="flex gap-3 text-slate-500">
                                        <span>04</span> <span><span className="text-purple-400">"status"</span>: <span className="text-green-400">"Qualified"</span></span>
                                    </li>
                                </ul>
                                <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-500 font-mono">
                                    {"// Knows facts, misses context."}
                                </div>
                            </div>

                            {/* Memory Thinking - The New Way (Insight Card) */}
                            <div className="bg-white rounded-xl p-8 border border-blue-100 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.15)] relative overflow-hidden group hover:border-blue-300 transition-colors">
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                                <h4 className="font-bold text-gray-900 font-sfpro text-xl mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-xl">🧠</div>
                                    The Core Context
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Called Monday regarding <span class='font-bold text-blue-700'>pricing for dental practice</span>",
                                        "Concerned about <span class='font-bold text-purple-700'>HIPAA compliance</span>",
                                        "Comparing us with <span class='font-bold text-gray-800'>3 competitors</span>",
                                        "Goal: Go live before <span class='font-bold text-gray-800'>March 1st</span>",
                                        "Prefers <span class='font-bold text-gray-800'>email follow-ups</span>"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-sfpro leading-relaxed">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span dangerouslySetInnerHTML={{ __html: item }}></span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                                    <span>✨</span> Represents Understanding & Intent
                                </div>
                            </div>
                        </div>

                        <p className="text-center text-gray-500 font-sfpro text-xl italic mb-20 max-w-2xl mx-auto">
                            The database knows <span className="text-slate-800 font-semibold">what</span> happened. Memory knows <span className="text-blue-600 font-bold">why</span> it matters.
                        </p>
                    </div>

                    {/* Brain-Centered Infographic - Cloud Architecture Style */}
                    <div className="mt-16 mb-12">
                        <h3 className="text-3xl sm:text-4xl font-bold text-[#0A1128] font-mondwest mb-12 text-center">
                            How it works: One brain, multiple agents
                        </h3>

                        <div className="relative max-w-6xl mx-auto py-12 px-4">
                            {/* Connection Lines (SVG) - Behind everything */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ top: 0, left: 0 }}>
                                <defs>
                                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.2" />
                                        <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.2" />
                                    </linearGradient>
                                </defs>
                                {/* Curved connectors from each agent slot to center */}
                                {/* Left-Far (Voice) to Center */}
                                <path d="M 15% 40% Q 30% 20% 50% 50%" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="8 4" className="hidden md:block animate-pulse-slow" />
                                {/* Left-Near (Receptionist) to Center */}
                                <path d="M 35% 40% Q 40% 30% 50% 50%" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="8 4" className="hidden md:block animate-pulse-slow delay-100" />
                                {/* Right-Near (Follow-up) to Center */}
                                <path d="M 65% 40% Q 60% 30% 50% 50%" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="8 4" className="hidden md:block animate-pulse-slow delay-200" />
                                {/* Right-Far (Support) to Center */}
                                <path d="M 85% 40% Q 70% 20% 50% 50%" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="8 4" className="hidden md:block animate-pulse-slow delay-300" />
                            </svg>

                            {/* Central Brain - Properly Positioned in Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center relative z-10">

                                {/* 1. Voice Agent */}
                                <div className="flex flex-col items-center group">
                                    <div className="relative">
                                        <div className="absolute -inset-2 bg-blue-100/50 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mb-4 relative z-10 group-hover:-translate-y-1 transition-transform">
                                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm font-bold text-gray-900 font-sfpro">Voice Agent</p>
                                    <p className="text-xs text-gray-500 font-sfpro text-center">Calls</p>
                                </div>

                                {/* 2. Receptionist */}
                                <div className="flex flex-col items-center group">
                                    <div className="relative">
                                        <div className="absolute -inset-2 bg-purple-100/50 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mb-4 relative z-10 group-hover:-translate-y-1 transition-transform">
                                            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm font-bold text-gray-900 font-sfpro">Receptionist</p>
                                    <p className="text-xs text-gray-500 font-sfpro text-center">Scheduling</p>
                                </div>

                                {/* 3. CENTER: Brain Core */}
                                <div className="flex flex-col items-center justify-center relative my-12 md:my-0 scale-100 md:scale-125 z-20">
                                    <div className="relative group cursor-pointer">
                                        <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
                                        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#0A1128] via-blue-900 to-indigo-900 flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.4)] border-4 border-white/10 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
                                            {/* Brain Icon */}
                                            <svg className="w-16 h-16 sm:w-20 sm:h-20 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M9.5 8C8.11929 8 7 9.11929 7 10.5C7 11.8807 8.11929 13 9.5 13C10.8807 13 12 11.8807 12 10.5C12 9.11929 10.8807 8 9.5 8Z" />
                                                <path d="M14.5 8C13.1193 8 12 9.11929 12 10.5C12 11.8807 13.1193 13 14.5 13C15.8807 13 17 11.8807 17 10.5C17 9.11929 15.8807 8 14.5 8Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 13V16M12 16C10 16 8.5 15 7 17C5.5 19 4 17 4 17M12 16C14 16 15.5 15 17 17C18.5 19 20 17 20 17" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8V6C12 4 16 4 16 6C16 6.5 16.5 7 17 7C19 7 20 5 20 5" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8V6C12 4 8 4 8 6C8 6.5 7.5 7 7 7C5 7 4 5 4 5" />
                                            </svg>
                                        </div>
                                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                                            <p className="text-lg font-bold text-[#0A1128] font-mondwest">AI Memory Core</p>
                                            <p className="text-xs text-blue-600 font-sfpro font-bold tracking-wider uppercase bg-white/80 px-2 py-0.5 rounded-full inline-block mt-1">Central Brain</p>
                                        </div>
                                    </div>
                                </div>

                                {/* 4. Follow-up */}
                                <div className="flex flex-col items-center group">
                                    <div className="relative">
                                        <div className="absolute -inset-2 bg-green-100/50 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mb-4 relative z-10 group-hover:-translate-y-1 transition-transform">
                                            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm font-bold text-gray-900 font-sfpro">Follow-up</p>
                                    <p className="text-xs text-gray-500 font-sfpro text-center">Email/SMS</p>
                                </div>

                                {/* 5. Support */}
                                <div className="flex flex-col items-center group">
                                    <div className="relative">
                                        <div className="absolute -inset-2 bg-orange-100/50 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mb-4 relative z-10 group-hover:-translate-y-1 transition-transform">
                                            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm font-bold text-gray-900 font-sfpro">Support</p>
                                    <p className="text-xs text-gray-500 font-sfpro text-center">Resolutions</p>
                                </div>
                            </div>
                        </div>

                        {/* Explanation */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 max-w-4xl mx-auto mt-8 text-center shadow-sm">
                            <p className="text-blue-900 font-sfpro text-lg sm:text-xl leading-relaxed">
                                <span className="font-bold">One shared consciousness.</span> When the Voice Agent hears it, the Support Agent knows it. No data silos. No repetition.
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

            {/* Final CTA - Premium "Fork in the Road" Design */}
            <Section bgColor="white">
                <div className="bg-[#0A1128] rounded-3xl overflow-hidden relative isolate">
                    {/* Background Gradients */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 -z-10"></div>

                    <div className="max-w-4xl mx-auto px-6 py-16 sm:px-12 sm:py-20 text-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-mondwest mb-6">
                            Your AI should remember your customers.
                        </h2>

                        <p className="text-blue-200 font-sfpro text-lg sm:text-xl mb-12 max-w-2xl mx-auto">
                            It's the difference between a "cool demo" and a revenue engine.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
                            {/* Option A: Status Quo */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                                <div className="flex items-center gap-3 mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 font-bold text-sm">A</div>
                                    <p className="font-bold text-gray-300 font-sfpro text-sm uppercase tracking-wider">The "Default" Way</p>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">Ignore the Memory Gap</h4>
                                <p className="text-gray-400 font-sfpro leading-relaxed text-sm sm:text-base">
                                    Keep treating every repeat customer like a stranger. Risk 23% churn. Stay in "prototype" mode forever.
                                </p>
                            </div>

                            {/* Option B: The Solution */}
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 shadow-xl transform md:scale-105 border border-blue-400/30 relative">
                                <div className="absolute top-0 right-0 bg-[#FCCA07] text-[#0A1128] text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    RECOMMENDED
                                </div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-700 font-bold text-sm">B</div>
                                    <p className="font-bold text-blue-100 font-sfpro text-sm uppercase tracking-wider">The Agentic Way</p>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">Build a Memory System</h4>
                                <p className="text-blue-100 font-sfpro leading-relaxed text-sm sm:text-base mb-2">
                                    Get the audit. Fix the gap. Turn your AI into a relationship builder that increases LTV by 40%.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <Link
                                href="/book-a-call"
                                className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold rounded-xl text-[#0A1128] bg-[#FCCA07] hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(252,202,7,0.4)]"
                            >
                                Book Your Free Memory Audit
                                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>

                            <div className="flex items-center gap-4 text-sm text-gray-400 font-sfpro">
                                <div className="flex -space-x-2 opacity-70">
                                    <div className="w-6 h-6 rounded-full bg-gray-600 border border-[#0A1128]"></div>
                                    <div className="w-6 h-6 rounded-full bg-gray-500 border border-[#0A1128]"></div>
                                    <div className="w-6 h-6 rounded-full bg-gray-400 border border-[#0A1128]"></div>
                                </div>
                                <p>Booked by 50+ founders this month</p>
                            </div>
                        </div>
                    </div>
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
