import { NextPageWithLayout } from "../../types";
import MetaConfig from "src/components/MetaConfig";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AI_MEMORY_VARIABLE_LINKS } from "src/data/programmaticSeoPages";
import BracketButton from "src/components/BracketButton";

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

// CTA Button Component (matching design system)
const CTAButton = ({
    href,
    label,
    variant = "primary"
}: {
    href: string;
    label: string;
    variant?: "primary" | "secondary";
}) => (
    <BracketButton href={href} label={label} variant={variant} />
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
            "memory as a service",
            "ai agent memory",
            "persistent ai memory",
            "shared memory for ai agents",
            "long term memory for ai",
            "ai context memory",
            "multi agent memory system",
            "ai memory layer",
            "ai agents with memory",
            "memory infrastructure for ai",
            "agentic memory",
            "long term memory for ai agents",
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
                                    <h1 className="text-[32px] sm:text-[52px] lg:text-[60px] font-normal text-gray-900 leading-[1.1] font-alte tracking-[-0.04em]">
                                        Your AI has the memory of <span className="text-blue-600 block sm:inline">a goldfish.</span>
                                    </h1>

                                    <p className="text-[17px] sm:text-[24px] text-gray-600 font-alte font-normal leading-[1.4] tracking-[-0.04em]">
                                        It forgot your customer. <span className="text-red-600 block sm:inline">They booked with a competitor.</span>
                                    </p>
                                </div>

                                {/* Value Prop - Cleaner Mobile Box */}
                                <div className="bg-white rounded-none p-5 sm:p-6 border border-[#e7e6e4]">
                                    <p className="text-[15px] sm:text-[17px] text-gray-800 font-alte font-normal leading-[1.5] tracking-[-0.04em]">
                                        We build AI memory systems that actually remember your customers, so you don't lose $50K patients to forgetful bots.
                                    </p>
                                </div>

                                {/* CTAs - Full Width on Mobile */}
                                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                                    <div className="w-full sm:w-auto">
                                        <CTAButton href="/book-a-call" label="Book Free Memory Audit" />
                                    </div>
                                    <a
                                        href="#what-is-ai-memory"
                                        className="group flex items-center justify-center gap-2 text-[15px] font-normal text-blue-600 hover:text-blue-700 transition-colors px-4 py-3 font-alte tracking-[-0.04em] w-full sm:w-auto border border-transparent hover:bg-blue-50 rounded-none"
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
                                            <img src="/images/avatar-1.png" alt="Customer" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                            <img src="/images/avatar-2.png" alt="Customer" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                            <img src="/images/avatar-3.png" alt="Customer" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                        </div>
                                        <p className="text-[15px] text-gray-600 font-alte font-normal tracking-[-0.04em]">
                                            Proven on <span className="text-gray-900">49,000+ minutes</span> of live calls
                                        </p>
                                    </div>

                                    {/* Injected Testimonial - Minimal & Fast */}
                                    <div className="border-l-2 border-blue-200 pl-4 py-1">
                                        <p className="text-gray-600 italic font-alte font-normal text-[15px] leading-[1.5] tracking-[-0.04em]">
                                            "Our previous AI forgot patients the moment they hung up. Agentic's memory system remembers their kids' names 6 months later."
                                        </p>
                                        <p className="text-gray-900 font-geist text-[12px] mt-2 uppercase tracking-[0.02em] font-normal">Dr. Sarah Jenkins, Dental Director</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Chat Conversation Preview - Keep as is */}
                            <div className="lg:pl-8">
                                <div className="space-y-4">
                                    {/* Header */}
                                    <div className="text-center lg:text-left mb-4">
                                        <p className="text-[12px] font-normal text-gray-500 font-geist uppercase tracking-[0.02em] mb-1">This happened last Tuesday:</p>
                                        <h3 className="text-[20px] sm:text-[24px] font-normal text-[#0A1128] font-alte leading-[1.2] tracking-[-0.04em]">
                                            The $50K Mistake
                                        </h3>
                                    </div>


                                    {/* Animated Chat - Wednesday (The Problem) - Moved to Hero */}
                                    <div className="bg-white rounded-none border border-[#e7e6e4] overflow-hidden transition-colors mb-6">
                                        {/* Chat Header - Muted but indicating context */}
                                        <div className="bg-red-50/50 border-b border-[#e7e6e4] px-5 py-4 flex items-center justify-between">
                                            <div>
                                                <p className="font-alte font-normal text-gray-900 text-[15px] tracking-[-0.04em]">
                                                    Wednesday 3:42 PM
                                                </p>
                                                <p className="text-gray-500 font-geist text-[12px] mt-0.5 uppercase tracking-[0.02em]">
                                                    Reschedule request
                                                </p>
                                            </div>
                                            <div className="bg-white border border-[#e7e6e4] rounded-none px-3 py-1">
                                                <p className="text-red-600 font-geist text-[12px] uppercase tracking-[0.02em] flex items-center gap-1">
                                                    ✗ Failed
                                                </p>
                                            </div>
                                        </div>

                                        {/* Chat Messages - Animated Sequence */}
                                        <div className="p-5 space-y-4 bg-[#F9F6F4] min-h-[320px]">
                                            {/* AI Message - No Memory */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-[#e7e6e4] flex items-center justify-center text-blue-600 text-[12px] font-geist">
                                                    AI
                                                </div>
                                                <div className="bg-white rounded-none px-4 py-3 max-w-[85%] border border-[#e7e6e4] relative group">
                                                    <p className="text-gray-800 font-alte font-normal text-[15px] leading-[1.5] tracking-[-0.04em]">
                                                        Hi! How can I help you today?
                                                    </p>
                                                    {/* Warning Badge */}
                                                    <div className="flex items-center gap-1.5 mt-2 bg-red-50 rounded-none px-2 py-1 border border-[#e7e6e4] inline-block">
                                                        <span className="text-xs">⚠️</span>
                                                        <p className="font-alte text-[12px] font-normal text-red-600">
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
                                                <div className="bg-gray-200 rounded-none px-4 py-3 max-w-[85%]">
                                                    <p className="text-gray-900 font-alte font-normal text-[15px] leading-[1.5] tracking-[-0.04em]">
                                                        I need to reschedule my Thursday appointment.
                                                    </p>
                                                </div>
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-[12px] font-geist">
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
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-[#e7e6e4] flex items-center justify-center text-blue-600 text-[12px] font-geist">
                                                    AI
                                                </div>
                                                <div className="bg-white rounded-none px-4 py-3 max-w-[85%] border border-[#e7e6e4]">
                                                    <p className="text-gray-800 font-alte font-normal text-[15px] leading-[1.5] tracking-[-0.04em]">
                                                        Sure! What's your name?
                                                    </p>
                                                    {/* Warning Badge */}
                                                    <div className="flex items-center gap-1.5 mt-2 bg-red-50 rounded-none px-2 py-1 border border-[#e7e6e4] inline-block">
                                                        <span className="text-xs">⚠️</span>
                                                        <p className="font-alte text-[12px] font-normal text-red-600">
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
                                                <div className="bg-gray-200 rounded-none px-4 py-3 max-w-[85%]">
                                                    <p className="text-gray-900 font-alte font-normal text-[15px] leading-[1.5] tracking-[-0.04em]">
                                                        ...Sarah. I called Monday.
                                                    </p>
                                                </div>
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-[12px] font-geist">
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
                                                <div className="bg-red-600 text-white rounded-none px-5 py-2 hover:bg-red-700 transition-colors flex items-center gap-2">
                                                    <span className="text-xs">📞</span>
                                                    <p className="font-geist text-[12px] uppercase tracking-[0.02em]">
                                                        Call ended. Lost to competitor
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Impact Statement */}
                                    <div className="bg-red-50 border-l-4 border-red-600 rounded-none p-4">
                                        <p className="text-red-900 font-alte font-normal text-[15px] tracking-[-0.04em]">
                                            Lost: $50K/year patient
                                        </p>
                                        <p className="text-red-800 font-alte font-normal text-[12px] mt-1 tracking-[-0.04em]">
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
                    <h2 className="text-[32px] sm:text-[40px] font-normal text-[#0A1128] font-alte mb-6 text-center leading-[1.2] tracking-[-0.04em]">
                        "But my AI works fine."
                    </h2>

                    <p className="text-center text-gray-600 font-alte font-normal text-[15px] sm:text-[17px] mb-12 max-w-2xl mx-auto leading-[1.5] tracking-[-0.04em]">
                        It handles the calls. But does it handle the <span className="text-gray-900">relationship</span>?
                    </p>

                    {/* The Problem Visualized - Compact Split Card */}
                    <div className="bg-white rounded-none border border-[#e7e6e4] overflow-hidden mb-12">
                        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#e7e6e4]">
                            {/* Left: The Reality */}
                            <div className="p-8 sm:p-10 flex flex-col justify-center items-center text-center bg-[#F9F6F4]">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-none flex items-center justify-center mb-4 text-2xl">
                                    📊
                                </div>
                                <h3 className="font-normal text-gray-900 font-alte text-[17px] mb-1 tracking-[-0.04em]">The Reality</h3>
                                <p className="text-gray-500 text-[12px] font-geist mb-6 uppercase tracking-[0.02em]">Your call metrics</p>

                                <div className="space-y-4 w-full max-w-xs">
                                    <div className="flex justify-between items-center bg-white p-3 rounded-none border border-[#e7e6e4]">
                                        <span className="text-gray-600 font-alte font-normal text-[15px] tracking-[-0.04em]">Monthly Calls</span>
                                        <span className="text-gray-900 font-alte font-normal">300+</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white p-3 rounded-none border border-[#e7e6e4]">
                                        <span className="text-gray-600 font-alte font-normal text-[15px] tracking-[-0.04em]">Returning Customers</span>
                                        <span className="text-blue-600 font-alte font-normal">40%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: The Failure */}
                            <div className="p-8 sm:p-10 flex flex-col justify-center items-center text-center">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-none flex items-center justify-center mb-4 text-2xl">
                                    😶
                                </div>
                                <h3 className="font-normal text-gray-900 font-alte text-[17px] mb-1 tracking-[-0.04em]">The Failure</h3>
                                <p className="text-gray-500 text-[12px] font-geist mb-6 uppercase tracking-[0.02em]">What your AI does</p>

                                <blockquote className="text-[20px] font-alte font-normal text-gray-900 mb-4 tracking-[-0.04em]">
                                    "Hi! How can I help you today?"
                                </blockquote>
                                <p className="text-red-500 font-alte font-normal text-[15px] bg-red-50 px-3 py-1 rounded-none border border-[#e7e6e4] tracking-[-0.04em]">
                                    Treats 100% of them like strangers
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Block - Real Performance Data (Muted/Secondary) */}
                    <div className="grid grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto opacity-60 hover:opacity-100 transition-opacity">
                        <div className="bg-[#F9F6F4] rounded-none p-4 text-center border border-[#e7e6e4]">
                            <p className="text-2xl sm:text-3xl font-normal text-gray-400 font-alte mb-1 tracking-[-0.04em]">49,496</p>
                            <p className="text-gray-500 font-alte font-normal text-[12px] leading-tight tracking-[-0.04em]">
                                Mins of voice data
                            </p>
                        </div>

                        <div className="bg-[#F9F6F4] rounded-none p-4 text-center border border-[#e7e6e4]">
                            <p className="text-2xl sm:text-3xl font-normal text-gray-400 font-alte mb-1 tracking-[-0.04em]">$0.22</p>
                            <p className="text-gray-500 font-alte font-normal text-[12px] leading-tight tracking-[-0.04em]">
                                Cost per min
                            </p>
                        </div>

                        <div className="bg-[#F9F6F4] rounded-none p-4 text-center border border-[#e7e6e4]">
                            <p className="text-2xl sm:text-3xl font-normal text-gray-400 font-alte mb-1 tracking-[-0.04em]">$10.6k</p>
                            <p className="text-gray-500 font-alte font-normal text-[12px] leading-tight tracking-[-0.04em]">
                                Volume handled
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center space-y-2 opacity-80">
                        <p className="text-gray-500 font-geist text-[12px] uppercase tracking-[0.02em]">
                            The Solution
                        </p>
                        <p className="text-blue-600 font-alte text-[17px] font-normal tracking-[-0.04em]">
                            Production-ready infrastructure for AI memory.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Section 3: What is AI Memory */}
            <Section bgColor="gray" id="what-is-ai-memory">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8 sm:mb-12">
                        <p className="text-red-500 font-normal text-[12px] tracking-[0.02em] uppercase mb-4 sm:mb-6 font-geist">
                            DEFINITION
                        </p>
                        <h2 className="text-[32px] sm:text-[40px] font-normal text-[#0A1128] font-alte mb-6 leading-[1.2] tracking-[-0.04em]">
                            What is AI memory?
                        </h2>
                        <p className="text-gray-600 font-alte font-normal text-[15px] sm:text-[17px] mb-4 tracking-[-0.04em]">
                            (and why it's not a database)
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 font-alte font-normal text-[15px] sm:text-[17px] leading-[1.5] mb-6 tracking-[-0.04em]">
                            AI memory is what lets your AI agent remember customers, conversations, and context across interactions: days, weeks, or months later.
                        </p>
                        <p className="text-gray-700 font-alte font-normal text-[15px] sm:text-[17px] leading-[1.5] mb-6 tracking-[-0.04em]">
                            It's not a database. Databases store facts. Memory stores <strong className="font-normal">understanding</strong>.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-12 items-stretch">
                            {/* Database Thinking - The Old Way (Terminal Style) */}
                            <div className="bg-white rounded-none p-8 border border-[#e7e6e4] overflow-hidden relative group">
                                <div className="absolute top-4 right-4 flex gap-1.5 opacity-50">
                                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                                </div>
                                <h4 className="font-geist text-gray-500 text-[12px] mb-6 border-b border-[#e7e6e4] pb-3 uppercase tracking-[0.02em] flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    Database_Store.json
                                </h4>
                                <ul className="space-y-4 font-geist text-[15px] text-gray-700">
                                    <li className="flex gap-3 text-gray-400">
                                        <span>01</span> <span><span className="text-purple-600">"id"</span>: <span className="text-green-600">12345</span>,</span>
                                    </li>
                                    <li className="flex gap-3 text-gray-400">
                                        <span>02</span> <span><span className="text-purple-600">"name"</span>: <span className="text-green-600">"Sarah"</span>,</span>
                                    </li>
                                    <li className="flex gap-3 text-gray-400">
                                        <span>03</span> <span><span className="text-purple-600">"last_contact"</span>: <span className="text-green-600">"2026-02-05"</span>,</span>
                                    </li>
                                    <li className="flex gap-3 text-gray-400">
                                        <span>04</span> <span><span className="text-purple-600">"status"</span>: <span className="text-green-600">"Qualified"</span></span>
                                    </li>
                                </ul>
                                <div className="mt-8 pt-4 border-t border-[#e7e6e4] text-[12px] text-gray-400 font-geist">
                                    {"// Knows facts, misses context."}
                                </div>
                            </div>

                            {/* Memory Thinking - The New Way (Insight Card) */}
                            <div className="bg-white rounded-none p-8 border border-[#e7e6e4] relative overflow-hidden group hover:border-blue-300 transition-colors">
                                <h4 className="font-normal text-gray-900 font-alte text-[20px] mb-6 flex items-center gap-3 tracking-[-0.04em]">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-xl">🧠</div>
                                    The Core Context
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Called Monday regarding <span class='font-normal text-blue-700'>pricing for dental practice</span>",
                                        "Concerned about <span class='font-normal text-purple-700'>HIPAA compliance</span>",
                                        "Comparing us with <span class='font-normal text-gray-800'>3 competitors</span>",
                                        "Goal: Go live before <span class='font-normal text-gray-800'>March 1st</span>",
                                        "Prefers <span class='font-normal text-gray-800'>email follow-ups</span>"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-[15px] text-gray-600 font-alte font-normal leading-[1.5] tracking-[-0.04em]">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span dangerouslySetInnerHTML={{ __html: item }}></span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 inline-flex items-center gap-2 text-[12px] font-normal text-blue-700 bg-blue-50 px-4 py-2 rounded-none border border-[#e7e6e4] font-geist uppercase tracking-[0.02em]">
                                    <span>✨</span> Represents Understanding & Intent
                                </div>
                            </div>
                        </div>

                        <p className="text-center text-gray-500 font-alte font-normal text-[20px] italic mb-20 max-w-2xl mx-auto tracking-[-0.04em]">
                            The database knows <span className="text-[#0A1128]">what</span> happened. Memory knows <span className="text-blue-600">why</span> it matters.
                        </p>
                    </div>

                    {/* Brain-Centered Infographic - Cloud Architecture Style */}
                    <div className="mt-16 mb-12">
                        <h3 className="text-[32px] sm:text-[40px] font-normal text-[#0A1128] font-alte mb-12 text-center leading-[1.2] tracking-[-0.04em]">
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
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-none border border-[#e7e6e4] flex items-center justify-center mb-4 relative z-10 group-hover:-translate-y-1 transition-transform">
                                            <div className="w-12 h-12 bg-blue-50 rounded-none flex items-center justify-center text-blue-600">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-[15px] font-alte font-normal text-gray-900 tracking-[-0.04em]">Voice Agent</p>
                                    <p className="text-[12px] text-gray-500 font-geist text-center uppercase tracking-[0.02em]">Calls</p>
                                </div>

                                {/* 2. Receptionist */}
                                <div className="flex flex-col items-center group">
                                    <div className="relative">
                                        <div className="absolute -inset-2 bg-purple-100/50 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-none border border-[#e7e6e4] flex items-center justify-center mb-4 relative z-10 group-hover:-translate-y-1 transition-transform">
                                            <div className="w-12 h-12 bg-purple-50 rounded-none flex items-center justify-center text-purple-600">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-[15px] font-alte font-normal text-gray-900 tracking-[-0.04em]">Receptionist</p>
                                    <p className="text-[12px] text-gray-500 font-geist text-center uppercase tracking-[0.02em]">Scheduling</p>
                                </div>

                                {/* 3. CENTER: Brain Core */}
                                <div className="flex flex-col items-center justify-center relative my-12 md:my-0 scale-100 md:scale-125 z-20">
                                    <div className="relative group cursor-pointer">
                                        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-blue-50 flex items-center justify-center border border-[#e7e6e4] relative overflow-hidden">
                                            {/* Brain Icon */}
                                            <svg className="w-16 h-16 sm:w-20 sm:h-20 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M9.5 8C8.11929 8 7 9.11929 7 10.5C7 11.8807 8.11929 13 9.5 13C10.8807 13 12 11.8807 12 10.5C12 9.11929 10.8807 8 9.5 8Z" />
                                                <path d="M14.5 8C13.1193 8 12 9.11929 12 10.5C12 11.8807 13.1193 13 14.5 13C15.8807 13 17 11.8807 17 10.5C17 9.11929 15.8807 8 14.5 8Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 13V16M12 16C10 16 8.5 15 7 17C5.5 19 4 17 4 17M12 16C14 16 15.5 15 17 17C18.5 19 20 17 20 17" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8V6C12 4 16 4 16 6C16 6.5 16.5 7 17 7C19 7 20 5 20 5" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8V6C12 4 8 4 8 6C8 6.5 7.5 7 7 7C5 7 4 5 4 5" />
                                            </svg>
                                        </div>
                                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                                            <p className="text-[17px] font-normal text-[#0A1128] font-alte tracking-[-0.04em]">AI Memory Core</p>
                                            <p className="text-[12px] text-blue-600 font-geist tracking-[0.02em] uppercase bg-white/80 px-2 py-0.5 rounded-none inline-block mt-1">Central Brain</p>
                                        </div>
                                    </div>
                                </div>

                                {/* 4. Follow-up */}
                                <div className="flex flex-col items-center group">
                                    <div className="relative">
                                        <div className="absolute -inset-2 bg-green-100/50 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-none border border-[#e7e6e4] flex items-center justify-center mb-4 relative z-10 group-hover:-translate-y-1 transition-transform">
                                            <div className="w-12 h-12 bg-green-50 rounded-none flex items-center justify-center text-green-600">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-[15px] font-alte font-normal text-gray-900 tracking-[-0.04em]">Follow-up</p>
                                    <p className="text-[12px] text-gray-500 font-geist text-center uppercase tracking-[0.02em]">Email/SMS</p>
                                </div>

                                {/* 5. Support */}
                                <div className="flex flex-col items-center group">
                                    <div className="relative">
                                        <div className="absolute -inset-2 bg-orange-100/50 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-none border border-[#e7e6e4] flex items-center justify-center mb-4 relative z-10 group-hover:-translate-y-1 transition-transform">
                                            <div className="w-12 h-12 bg-orange-50 rounded-none flex items-center justify-center text-orange-600">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-[15px] font-alte font-normal text-gray-900 tracking-[-0.04em]">Support</p>
                                    <p className="text-[12px] text-gray-500 font-geist text-center uppercase tracking-[0.02em]">Resolutions</p>
                                </div>
                            </div>
                        </div>

                        {/* Explanation */}
                        <div className="bg-blue-50 rounded-none p-8 border border-[#e7e6e4] max-w-4xl mx-auto mt-8 text-center">
                            <p className="text-blue-900 font-alte font-normal text-[15px] sm:text-[17px] leading-[1.5] tracking-[-0.04em]">
                                <span className="font-normal">One shared consciousness.</span> When the Voice Agent hears it, the Support Agent knows it. No data silos. No repetition.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Three Types of Memory - Minimal & Premium */}
            <Section id="memory-types">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-[32px] sm:text-[40px] font-normal text-[#0A1128] font-alte mb-4 leading-[1.2] tracking-[-0.04em]">
                            The three types of AI memory
                        </h3>
                        <p className="text-gray-600 font-alte font-normal text-[15px] sm:text-[17px] leading-[1.5] max-w-3xl mx-auto tracking-[-0.04em]">
                            Modern AI memory systems use a <span className="text-blue-600">layered architecture</span>, similar to how human memory works
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 mb-10">
                        {/* Memory Type 1 - Short-Term */}
                        <div className="bg-white rounded-none border border-[#e7e6e4] overflow-hidden hover:bg-[#F9F6F4] transition-colors group">
                            {/* Header with gradient accent */}
                            <div className="bg-blue-50 p-6 border-b border-[#e7e6e4]">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-none bg-blue-600 flex items-center justify-center">
                                        <span className="text-white font-geist text-[15px] tracking-[0.02em]">01</span>
                                    </div>
                                    <h4 className="text-[17px] font-normal text-[#0A1128] font-alte leading-[1.2] tracking-[-0.04em]">
                                        Short-Term Memory
                                    </h4>
                                </div>
                                <p className="text-[15px] text-gray-500 font-alte font-normal italic tracking-[-0.04em]">Working Memory</p>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div>
                                    <p className="text-[12px] font-normal text-blue-600 uppercase tracking-[0.02em] mb-1 font-geist">What it does</p>
                                    <p className="text-[15px] text-gray-700 font-alte font-normal leading-[1.5] tracking-[-0.04em]">
                                        Holds the immediate context of the current conversation.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[12px] font-normal text-gray-500 uppercase tracking-[0.02em] mb-1 font-geist">Example</p>
                                    <p className="text-[15px] text-gray-600 font-alte font-normal leading-[1.5] italic tracking-[-0.04em]">
                                        "You just told me you need an AI receptionist for a 5-doctor practice. Got it."
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[12px] font-normal text-gray-500 uppercase tracking-[0.02em] mb-1 font-geist">Technical reality</p>
                                    <p className="text-[15px] text-gray-600 font-alte font-normal leading-[1.5] tracking-[-0.04em]">
                                        Lives in the AI's prompt or temporary RAM. Limited by context window (8K-128K tokens).
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-[#e7e6e4]">
                                    <p className="text-[12px] font-normal text-red-600 uppercase tracking-[0.02em] mb-1 font-geist">When it breaks</p>
                                    <p className="text-[15px] text-red-700 font-alte font-normal leading-[1.5] tracking-[-0.04em]">
                                        Long conversations exceed the context window. The AI "forgets" the beginning.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Memory Type 2 - Long-Term */}
                        <div className="bg-white rounded-none border border-[#e7e6e4] overflow-hidden hover:bg-[#F9F6F4] transition-colors group">
                            {/* Header with gradient accent */}
                            <div className="bg-purple-50 p-6 border-b border-[#e7e6e4]">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-none bg-purple-600 flex items-center justify-center">
                                        <span className="text-white font-geist text-[15px] tracking-[0.02em]">02</span>
                                    </div>
                                    <h4 className="text-[17px] font-normal text-[#0A1128] font-alte leading-[1.2] tracking-[-0.04em]">
                                        Long-Term Memory
                                    </h4>
                                </div>
                                <p className="text-[15px] text-gray-500 font-alte font-normal italic tracking-[-0.04em]">Episodic + Semantic Memory</p>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div>
                                    <p className="text-[12px] font-normal text-purple-600 uppercase tracking-[0.02em] mb-1 font-geist">What it does</p>
                                    <p className="text-[15px] text-gray-700 font-alte font-normal leading-[1.5] tracking-[-0.04em]">
                                        Stores past interactions, customer history, preferences, and learned patterns.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <div>
                                        <p className="text-[12px] font-normal text-gray-700 font-geist uppercase tracking-[0.02em]">Episodic Memory:</p>
                                        <p className="text-[15px] text-gray-600 font-alte font-normal leading-[1.5] tracking-[-0.04em]">
                                            "Sarah called Feb 5 about HIPAA compliance."
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[12px] font-normal text-gray-700 font-geist uppercase tracking-[0.02em]">Semantic Memory:</p>
                                        <p className="text-[15px] text-gray-600 font-alte font-normal leading-[1.5] tracking-[-0.04em]">
                                            "Dental practices care about HIPAA."
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[12px] font-normal text-gray-500 uppercase tracking-[0.02em] mb-1 font-geist">Technical reality</p>
                                    <p className="text-[15px] text-gray-600 font-alte font-normal leading-[1.5] tracking-[-0.04em]">
                                        Vector databases + RAG pulls relevant memories into the current prompt.
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-[#e7e6e4]">
                                    <p className="text-[12px] font-normal text-red-600 uppercase tracking-[0.02em] mb-1 font-geist">When it breaks</p>
                                    <p className="text-[15px] text-red-700 font-alte font-normal leading-[1.5] tracking-[-0.04em]">
                                        Poor retrieval logic. Can't find the right memory at the right time.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Memory Type 3 - Procedural */}
                        <div className="bg-white rounded-none border border-[#e7e6e4] overflow-hidden hover:bg-[#F9F6F4] transition-colors group">
                            {/* Header with gradient accent */}
                            <div className="bg-green-50 p-6 border-b border-[#e7e6e4]">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-none bg-green-600 flex items-center justify-center">
                                        <span className="text-white font-geist text-[15px] tracking-[0.02em]">03</span>
                                    </div>
                                    <h4 className="text-[17px] font-normal text-[#0A1128] font-alte leading-[1.2] tracking-[-0.04em]">
                                        Procedural Memory
                                    </h4>
                                </div>
                                <p className="text-[15px] text-gray-500 font-alte font-normal italic tracking-[-0.04em]">Shared Memory Across Agents</p>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div>
                                    <p className="text-[12px] font-normal text-green-600 uppercase tracking-[0.02em] mb-1 font-geist">What it does</p>
                                    <p className="text-[15px] text-gray-700 font-alte font-normal leading-[1.5] tracking-[-0.04em]">
                                        Stores how to perform tasks and shared knowledge across multiple AI agents.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[12px] font-normal text-gray-500 uppercase tracking-[0.02em] mb-1 font-geist">Example</p>
                                    <p className="text-[15px] text-gray-600 font-alte font-normal leading-[1.5] italic tracking-[-0.04em]">
                                        AI Receptionist learns "Dr. Smith's patients prefer mornings." AI Follow-Up Agent uses that knowledge.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[12px] font-normal text-gray-500 uppercase tracking-[0.02em] mb-1 font-geist">Technical reality</p>
                                    <p className="text-[15px] text-gray-600 font-alte font-normal leading-[1.5] tracking-[-0.04em]">
                                        Multi-agent systems share a unified memory layer. They collaborate without repeating work.
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-[#e7e6e4]">
                                    <p className="text-[12px] font-normal text-red-600 uppercase tracking-[0.02em] mb-1 font-geist">When it breaks</p>
                                    <p className="text-[15px] text-red-700 font-alte font-normal leading-[1.5] tracking-[-0.04em]">
                                        Memory silos. Your customer repeats themselves to every AI they talk to.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Insight Box */}
                    <div className="bg-blue-50 rounded-none p-8 border border-[#e7e6e4]">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                                <span className="text-white text-xl">💡</span>
                            </div>
                            <div>
                                <p className="text-[12px] font-normal text-blue-900 uppercase tracking-[0.02em] mb-2 font-geist">Key Insight</p>
                                <p className="text-blue-900 font-alte font-normal text-[15px] sm:text-[17px] leading-[1.5] tracking-[-0.04em]">
                                    Most AI tools give you <span className="font-normal">short-term memory</span> (the conversation context).
                                    We build systems with <span className="font-normal">all three layers, connected</span>.
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
                <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
                    <h3 className="text-[32px] sm:text-[40px] font-normal text-[#0A1128] font-alte mb-4 leading-[1.2] tracking-[-0.04em]">
                        Ready to build AI that actually remembers?
                    </h3>
                    <p className="text-gray-700 font-alte font-normal text-[15px] sm:text-[17px] mb-6 leading-[1.5] tracking-[-0.04em]">
                        Book a free 15-minute memory audit. We'll show you exactly what's broken and how to fix it.
                    </p>
                    <CTAButton href="/book-a-call" label="Book Your Free Memory Audit" />
                </div>
            </Section>

            {/* AI Memory by Role */}
            <AIMemoryByRole />

            {/* AI Memory by Industry */}
            <AIMemoryByIndustry />

            {/* Programmatic Hub: AI Memory for Use Cases */}
            <Section bgColor="gray" id="ai-memory-use-cases">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="text-[12px] font-normal text-blue-600 tracking-[0.02em] uppercase mb-3 font-geist">
                            Programmatic Memory Pages
                        </p>
                        <h3 className="text-[32px] sm:text-[40px] font-normal text-[#0A1128] font-alte mb-3 leading-[1.2] tracking-[-0.04em]">
                            AI Memory by role, industry, workflow, and agent type
                        </h3>
                        <p className="text-gray-700 font-alte font-normal text-[15px] sm:text-[17px] leading-[1.5] tracking-[-0.04em]">
                            Explore focused pages built from the same memory-system architecture: persistent AI memory, shared memory for AI agents, and long-term context memory.
                        </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {AI_MEMORY_VARIABLE_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="group rounded-none border border-[#e7e6e4] bg-white p-4 hover:bg-[#F9F6F4] hover:border-blue-300 transition-colors"
                            >
                                <p className="text-[#0A1128] font-normal font-alte text-[15px] group-hover:text-blue-700 transition-colors tracking-[-0.04em]">
                                    {link.label}
                                </p>
                                <p className="text-[12px] text-gray-500 mt-1 font-geist tracking-[0.02em]">{link.href}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>

            {/* How We Build It */}
            <HowWeBuildIt />

            {/* FAQ Section */}
            <FAQSection />

            {/* Final CTA - Premium "Fork in the Road" Design */}
            <Section bgColor="white">
                <div className="bg-white border border-[#e7e6e4] rounded-none overflow-hidden relative isolate">
                    <div className="max-w-4xl mx-auto px-6 py-16 sm:px-12 sm:py-20 text-center">
                        <h2 className="text-[32px] sm:text-[40px] font-normal text-[#0A1128] font-alte mb-6 leading-[1.2] tracking-[-0.04em]">
                            Your AI should remember your customers.
                        </h2>

                        <p className="text-gray-600 font-alte font-normal text-[15px] sm:text-[17px] mb-12 max-w-2xl mx-auto leading-[1.5] tracking-[-0.04em]">
                            It's the difference between a "cool demo" and a revenue engine.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
                            {/* Option A: Status Quo */}
                            <div className="bg-white border border-[#e7e6e4] rounded-none p-8 hover:bg-[#F9F6F4] transition-colors group">
                                <div className="flex items-center gap-3 mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-geist text-[12px]">A</div>
                                    <p className="font-normal text-gray-500 font-geist text-[12px] uppercase tracking-[0.02em]">The "Default" Way</p>
                                </div>
                                <h4 className="text-[20px] font-normal text-[#0A1128] mb-3 font-alte tracking-[-0.04em]">Ignore the Memory Gap</h4>
                                <p className="text-gray-600 font-alte font-normal leading-[1.5] text-[15px] tracking-[-0.04em]">
                                    Keep treating every repeat customer like a stranger. Risk 23% churn. Stay in "prototype" mode forever.
                                </p>
                            </div>

                            {/* Option B: The Solution */}
                            <div className="bg-blue-50 rounded-none p-8 border border-[#e7e6e4] relative">
                                <div className="absolute top-0 right-0 bg-[#FCCA07] text-[#0A1128] text-[12px] font-normal px-3 py-1 rounded-none font-geist uppercase tracking-[0.02em]">
                                    RECOMMENDED
                                </div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-geist text-[12px]">B</div>
                                    <p className="font-normal text-blue-700 font-geist text-[12px] uppercase tracking-[0.02em]">The Agentic Way</p>
                                </div>
                                <h4 className="text-[20px] font-normal text-[#0A1128] mb-3 font-alte tracking-[-0.04em]">Build a Memory System</h4>
                                <p className="text-blue-900 font-alte font-normal leading-[1.5] text-[15px] mb-2 tracking-[-0.04em]">
                                    Get the audit. Fix the gap. Turn your AI into a relationship builder that increases LTV by 40%.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <BracketButton href="/book-a-call" label="Book Your Free Memory Audit" variant="primary" />

                            <div className="flex items-center gap-4 text-[15px] text-gray-500 font-alte font-normal tracking-[-0.04em]">
                                <div className="flex -space-x-2 opacity-70">
                                    <div className="w-6 h-6 rounded-full bg-gray-300 border border-white"></div>
                                    <div className="w-6 h-6 rounded-full bg-gray-400 border border-white"></div>
                                    <div className="w-6 h-6 rounded-full bg-gray-500 border border-white"></div>
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
                className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#e7e6e4] py-4 px-6 md:px-8 hidden md:flex items-center justify-between"
            >
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-geist text-[12px]">
                        AI
                    </div>
                    <div>
                        <p className="font-alte font-normal text-gray-900 text-[15px] tracking-[-0.04em]">
                            Stop losing customers to forgetful AI
                        </p>
                        <p className="text-gray-500 font-alte font-normal text-[12px] tracking-[-0.04em]">
                            Get a memory system that improves LTV by 40%
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-geist text-gray-600">A</div>
                        <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-geist text-gray-600">B</div>
                        <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-geist text-gray-600">+</div>
                    </div>
                    <BracketButton href="/book-a-call" label="Book Free Audit" variant="primary" />
                </div>
            </motion.div>
        </>
    );
};

AIMemorySystemPage.getLayout = (page) => page;

export default AIMemorySystemPage;
