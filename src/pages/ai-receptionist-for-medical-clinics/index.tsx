import { NextPageWithLayout } from "../../types";
import MetaConfig from "src/components/MetaConfig";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// ─── Constants ─────────────────────────────────────────────────────────────────
const CAL_LINK = "https://cal.com/free-ai-clarity-call-avoid-costly-automation-mistakes/30min";
const CANONICAL_URL = "https://www.tryagentikai.com/ai-receptionist-for-medical-clinics";

// ─── Reusable Section wrapper ──────────────────────────────────────────────────
const Section = ({
    children,
    id,
    bg = "white",
    className = "",
}: {
    children: React.ReactNode;
    id?: string;
    bg?: "white" | "warm" | "dark";
    className?: string;
}) => {
    const bgMap = {
        white: "bg-white",
        warm: "bg-[#F9F6F4]",
        dark: "bg-[#0A1128]",
    };
    return (
        <section
            id={id}
            className={`py-16 sm:py-20 lg:py-24 ${bgMap[bg]} ${className}`}
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        </section>
    );
};

// ─── Label ─────────────────────────────────────────────────────────────────────
const SectionLabel = ({ text }: { text: string }) => (
    <p className="text-xs font-bold text-blue-600 tracking-[0.15em] uppercase mb-4 font-sfpro">
        {text}
    </p>
);

// ─── CTA Button ────────────────────────────────────────────────────────────────
const CTAButton = ({
    href,
    label,
    variant = "primary",
    fullWidth = false,
}: {
    href: string;
    label: string;
    variant?: "primary" | "secondary";
    fullWidth?: boolean;
}) => (
    <Link
        href={href}
        className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer ${fullWidth ? "w-full" : ""
            } ${variant === "primary"
                ? "bg-[#FCCA07] text-[#0A1128] hover:bg-yellow-400 shadow-sm hover:shadow-md"
                : "bg-white text-[#0A1128] border border-gray-200 hover:border-gray-300 hover:shadow-sm"
            }`}
    >
        {label}
        {variant === "primary" && (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
        )}
    </Link>
);

// ─── Animated number counter ───────────────────────────────────────────────────
const CountUp = ({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        let frame = 0;
        const total = 60;
        const step = () => {
            frame++;
            setCount(Math.min(Math.round((end * frame) / total), end));
            if (frame < total) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [started, end]);

    return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

// ─── Schema ────────────────────────────────────────────────────────────────────
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Receptionist for Medical Clinics",
    serviceType: "AI System",
    description:
        "AI receptionist that answers every call, books appointments into your EMR (Athena, Epic, or advancedMD), and remembers every patient — 24/7 without human intervention.",
    provider: {
        "@type": "Organization",
        name: "Agentic AI Labs",
        url: "https://www.tryagentikai.com",
    },
    areaServed: "US",
    url: CANONICAL_URL,
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How is this different from a medical answering service?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Answering services take messages. They can't book appointments, access your scheduling software, or remember past conversations. Our AI Receptionist closes the loop completely — it books the appointment, sends the confirmation, and remembers the patient the next time they call. No follow-up required.",
            },
        },
        {
            "@type": "Question",
            name: "What scheduling software does it integrate with?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We integrate with Athena, Epic, AdvancedMD, DrChrono, and most practice management systems with an API. We use GHL or n8n for the automation layer depending on your setup.",
            },
        },
        {
            "@type": "Question",
            name: "Can it handle after-hours calls and weekends?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Calls that come in at 9pm, Saturday morning, or during a busy stretch when nobody can pick up — the AI handles them the same as any other call. A patient who calls at 10pm gets booked and confirmed. They're in your calendar before you open on Monday.",
            },
        },
        {
            "@type": "Question",
            name: "How much does it cost?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Medical clinic AI Receptionist systems start at $2,000–$5,000 for the initial build, with $800–$2,000/month for ongoing monitoring and optimization. Every project is scoped based on your call volume, tools, and specific workflows.",
            },
        },
    ],
};

// ─── Page Component ────────────────────────────────────────────────────────────
const AiReceptionistMedicalPage: NextPageWithLayout = () => {
    const [showSticky, setShowSticky] = useState(false);
    const [activeLayer, setActiveLayer] = useState(0);

    useEffect(() => {
        const handleScroll = () => setShowSticky(window.scrollY > 700);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Auto-cycle layers
    useEffect(() => {
        const t = setInterval(() => setActiveLayer((p) => (p + 1) % 3), 3000);
        return () => clearInterval(t);
    }, []);

    const meta = {
        title: "AI Receptionist for Medical Clinics | Agentic AI Labs",
        description:
            "Medical clinics lose $73K+/yr to a $38,500/yr front desk and missed after-hours calls. We build an AI receptionist that answers every call, books into your EMR, and remembers every patient — 24/7.",
        type: "Page",
        url: CANONICAL_URL,
        canonical: CANONICAL_URL,
        keywords: [
            "AI receptionist for medical clinics",
            "AI receptionist for clinics",
            "medical AI receptionist",
            "AI answering service for medical clinics",
            "medical answering service alternative",
            "medical clinic automation",
            "AI voice agent medical",
        ],
    };

    const layers = [
        {
            num: "01",
            title: "Your AI talks.",
            color: "blue",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            ),
            body: "Picks up every call — 24/7 including after-hours and weekends. Handles booking, rescheduling, insurance questions, directions. Not a phone tree. A real conversation that knows your practice.",
            detail: "New patients get qualified and booked in one call. Returning patients get treated like they've called before — because the AI knows them.",
        },
        {
            num: "02",
            title: "Your AI remembers.",
            color: "purple",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            body: "Every patient. Every preference. Every conversation. Built on Mem0 — persistent memory that compounds with use. The longer it runs, the better it knows your patients.",
            detail: "Mrs. Garcia prefers mornings. The AI already knows when she calls back. She doesn't repeat herself. She doesn't feel like a number.",
        },
        {
            num: "03",
            title: "Your AI acts.",
            color: "green",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            body: "Books directly into Athena, Epic, AdvancedMD, DrChrono, or your EMR API. Sends SMS confirmations instantly. Fires T-24hr reminder calls automatically. No human in the loop for routine calls.",
            detail: "Your team handles the patients in the chair — not the ones on the phone.",
        },
    ];

    const colorMap: Record<string, { bg: string; text: string; border: string; tab: string }> = {
        blue: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", tab: "bg-blue-600" },
        purple: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200", tab: "bg-purple-600" },
        green: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200", tab: "bg-green-600" },
    };

    const faqs = [
        {
            q: "How is this different from a medical answering service?",
            a: "Answering services take messages. They can't book appointments, access your scheduling software, or remember past conversations. That's why searches for \"medical answering service\" are down 88% on Google — practices have been through that experience and moved on. Our AI closes the loop completely: books the appointment, sends the confirmation, remembers the patient next time. No follow-up required.",
        },
        {
            q: "What scheduling software does it integrate with?",
            a: "We integrate with the software you already use: Athena, Epic, AdvancedMD, DrChrono, and most practice management systems with an API. We use GHL or n8n for the automation layer depending on your setup. If you're unsure — ask us on the call. We'll tell you in 5 minutes.",
        },
        {
            q: "What if the AI says something wrong to a patient?",
            a: "Every system is tested with real-world scenarios — edge cases, angry patients, insurance questions, unusual requests — before it handles a single real call. We build guardrails: topics the AI always escalates to a human (complaints, clinical questions). The patient gets a smooth transfer. We also monitor every call for the first 30 days and adjust as needed.",
        },
        {
            q: "Can it handle after-hours calls and weekends?",
            a: "Yes — that's one of the main reasons medical clinics use it. Calls at 9pm, Saturday morning, or during a busy stretch — the AI handles them the same as any other call. A patient who calls at 10pm gets booked and confirmed. They're in your calendar before you open on Monday.",
        },
        {
            q: "How does the memory actually work?",
            a: "We use Mem0 — a persistent memory layer — to store conversation context per patient. When a returning patient calls, the AI already knows their name, appointment history, and any preferences they've mentioned. They never have to repeat themselves. The memory compounds — the longer the system runs, the better it knows your patients.",
        },
        {
            q: "How much does it cost?",
            a: "Medical clinic AI Receptionist systems start at $2,000–$5,000 for the initial build, with $800–$2,000/month for ongoing monitoring and optimization. Every project is scoped to your call volume, tools, and workflows. We give you a clear number before you commit. No vague estimates.",
        },
    ];

    return (
        <>
            <MetaConfig {...meta} />

            {/* Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* ── Breadcrumb ── */}
            <div className="bg-white border-b border-gray-100 pt-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <nav aria-label="Breadcrumb">
                        <ol className="flex items-center gap-2 text-xs text-gray-500 font-sfpro">
                            <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
                            <li><span className="text-gray-300">/</span></li>
                            <li><span className="text-gray-400">AI Systems</span></li>
                            <li><span className="text-gray-300">/</span></li>
                            <li className="text-gray-800 font-medium">AI Receptionist for Medical Clinics</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* HERO                                                              */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <div className="relative overflow-hidden bg-[#F9F6F4]">
                {/* Subtle grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#0A1128 1px, transparent 1px), linear-gradient(90deg, #0A1128 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left — Copy */}
                        <div className="space-y-7">
                            {/* Label */}
                            <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase py-1.5 px-3 rounded-full font-sfpro"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                AI Receptionist · Medical Clinics
                            </motion.div>

                            {/* H1 */}
                            <motion.h1
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#0A1128] leading-[1.1] font-mondwest tracking-tight"
                            >
                                AI Receptionist for{" "}
                                <span className="text-blue-600">Medical Clinics</span>
                            </motion.h1>

                            {/* Subheadline */}
                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.18 }}
                                className="text-lg text-gray-600 leading-relaxed font-sfpro max-w-xl"
                            >
                                Answers every call. Books directly into your EMR (Athena, Epic, or advancedMD). Remembers
                                returning patients. Sends confirmations. Runs 24/7 — without a front desk
                                staff member on the phone.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.26 }}
                                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                            >
                                <CTAButton href={CAL_LINK} label="Book a Free Call" />
                                <a
                                    href="#how-it-works"
                                    className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors py-3.5 px-4 border border-transparent hover:bg-blue-50 rounded-lg font-sfpro cursor-pointer"
                                >
                                    See how it works
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </a>
                            </motion.div>

                            {/* Social proof line */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.38 }}
                                className="flex items-center gap-3 pt-2"
                            >
                                <div className="flex -space-x-2">
                                    {["/images/avatar-1.png", "/images/avatar-2.png", "/images/avatar-3.png"].map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt="Client"
                                            className="w-7 h-7 rounded-full border-2 border-white object-cover"
                                        />
                                    ))}
                                </div>
                                <p className="text-sm text-gray-500 font-sfpro">
                                    Proven on <span className="font-semibold text-gray-800">49,000+ minutes</span> of live calls
                                </p>
                            </motion.div>
                        </div>

                        {/* Right — Live signal card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-4"
                        >
                            {/* The cost block */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                                <div className="bg-red-50 border-b border-red-100 px-6 py-4">
                                    <p className="text-xs font-bold text-red-600 uppercase tracking-wider font-sfpro">
                                        What it costs you right now
                                    </p>
                                </div>
                                <div className="px-6 py-5 space-y-3">
                                    {[
                                        { label: "Front desk salary (BLS 2024)", val: "$38,500 / yr" },
                                        { label: "Missed after-hours appointments", val: "~$35,000 / yr" },
                                    ].map((row, i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600 font-sfpro">{row.label}</span>
                                            <span className="text-sm font-bold text-gray-900 font-sfpro">{row.val}</span>
                                        </div>
                                    ))}
                                    <div className="pt-3 mt-1 border-t border-gray-100 flex items-center justify-between">
                                        <span className="text-sm font-bold text-gray-800 font-sfpro">Total problem</span>
                                        <span className="text-base font-bold text-red-600 font-mondwest">$73,500+ / yr</span>
                                    </div>
                                </div>
                                <div className="bg-green-50 border-t border-green-100 px-6 py-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-green-800 font-sfpro font-medium">We solve it for</span>
                                        <span className="text-sm font-bold text-green-700 font-sfpro">$11,600 in Year 1</span>
                                    </div>
                                    <p className="text-xs text-green-600 font-sfpro mt-1">
                                        Source: U.S. Bureau of Labor Statistics, OEWS May 2024
                                    </p>
                                </div>
                            </div>

                            {/* Industry news callout */}
                            <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-4 flex items-start gap-3">
                                <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-blue-800 font-sfpro leading-relaxed">
                                        Searches for \"medical clinic AI\" have grown 100% in 12 months.
                                    </p>
                                    <p className="text-xs text-blue-600 mt-0.5 font-sfpro">
                                        Source: Google Trends, United States · The industry is moving.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* THE PROBLEM                                                        */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <Section id="problem" bg="white">
                <SectionLabel text="The Problem" />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1128] font-mondwest tracking-tight mb-6">
                    Your front desk is your most expensive bottleneck.
                </h2>
                <p className="text-lg text-gray-600 font-sfpro leading-relaxed max-w-3xl mb-10">
                    If you run a medical clinic, your front desk staff spends 4–6 hours every day answering
                    the same calls. Appointment booking. Rescheduling. Insurance questions. Confirmation
                    reminders.
                </p>
                <p className="text-lg text-gray-600 font-sfpro leading-relaxed max-w-3xl mb-10">
                    The median medical receptionist salary is{" "}
                    <strong className="text-gray-900">$38,500 per year</strong> — that's according to the
                    U.S. Bureau of Labor Statistics. For that money, you get someone who can only answer one
                    call at a time, can't work after 5pm, and is probably already stretched too thin.
                </p>
                <p className="text-lg text-gray-600 font-sfpro leading-relaxed max-w-3xl mb-12">
                    And that's when someone picks up. When they're with a patient at the desk, the phone rings
                    out. When the office is closed, calls go to voicemail. Most patients don't leave one.{" "}
                    <strong className="text-gray-900">They just call the next clinic.</strong>
                </p>

                {/* Reddit quote */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-[#F9F6F4] border-l-4 border-blue-400 rounded-r-xl pl-6 pr-6 py-6 mb-10 max-w-3xl"
                >
                    <svg
                        className="absolute top-4 left-4 w-5 h-5 text-blue-300 opacity-60"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="text-gray-800 font-sfpro text-base leading-relaxed italic pt-4">
                        "My no show rate is atrocious - easily 60-70%. This is refractory to overbooking and patient calls (families confirm they will be here the day before then suddenly change their minds."
                    </blockquote>
                    <footer className="mt-4 text-xs text-gray-500 font-sfpro flex items-center gap-2">
                        <span className="inline-block bg-orange-100 text-orange-700 px-2 py-0.5 rounded font-bold text-[10px] uppercase tracking-wider">
                            r/medicine
                        </span>
                        <span>Clinic Doctor, Oct 2025 · 397 upvotes</span>
                    </footer>
                </motion.div>

                <p className="text-lg text-gray-600 font-sfpro leading-relaxed max-w-3xl mb-4">
                    You've probably tried to fix this already. A second front desk person. An answering service.
                    A chatbot. None of them close the loop — someone still has to follow through.
                </p>
                <p className="text-lg text-gray-700 font-sfpro font-semibold max-w-3xl mb-12">
                    That's what an AI receptionist does. It closes the loop — every time.
                </p>

                {/* Trend stat */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl px-6 py-5 max-w-2xl">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-amber-900 font-sfpro">
                                "Medical answering service" searches dropped 88% in 12 months (Google Trends, US).
                            </p>
                            <p className="text-xs text-amber-700 mt-1 font-sfpro">
                                Practices are already moving away from legacy answering services.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* WHAT WE BUILD — 3 LAYERS                                          */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <Section id="what-we-build" bg="warm">
                <SectionLabel text="What We Build" />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1128] font-mondwest tracking-tight mb-3">
                    Talk. Remember. Act.
                </h2>
                <p className="text-xl text-blue-600 font-sfpro font-semibold mb-3">
                    One AI system. Three layers. Zero missed calls.
                </p>
                <p className="text-lg text-gray-600 font-sfpro leading-relaxed max-w-3xl mb-12">
                    We don't sell you a voice agent. We don't sell you an automation. We build one AI
                    Receptionist for your medical clinic where every layer is connected — and the whole thing
                    runs without you in the loop.
                </p>

                {/* Layer tabs */}
                <div className="flex gap-2 mb-6">
                    {layers.map((l, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveLayer(i)}
                            aria-label={`View layer ${l.num}`}
                            className={`flex-1 py-2 rounded-lg text-xs font-bold font-sfpro transition-all duration-200 cursor-pointer ${activeLayer === i
                                ? `${colorMap[l.color].tab} text-white shadow-sm`
                                : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300"
                                }`}
                        >
                            {l.num}
                        </button>
                    ))}
                </div>

                {/* Active layer card */}
                {layers.map((layer, i) =>
                    i !== activeLayer ? null : (
                        <motion.div
                            key={layer.num}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`bg-white rounded-2xl border ${colorMap[layer.color].border} shadow-sm overflow-hidden mb-6`}
                        >
                            <div className={`${colorMap[layer.color].bg} px-7 py-6 border-b ${colorMap[layer.color].border}`}>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className={`w-8 h-8 rounded-lg ${colorMap[layer.color].tab} flex items-center justify-center text-white`}>
                                        {layer.icon}
                                    </div>
                                    <span className={`text-xs font-bold ${colorMap[layer.color].text} tracking-widest uppercase font-sfpro`}>
                                        Layer {layer.num}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-[#0A1128] font-mondwest">{layer.title}</h3>
                            </div>
                            <div className="px-7 py-6 space-y-4">
                                <p className="text-gray-700 font-sfpro text-base leading-relaxed">{layer.body}</p>
                                <p className="text-gray-500 font-sfpro text-sm leading-relaxed italic border-l-2 border-gray-100 pl-4">
                                    {layer.detail}
                                </p>
                            </div>
                        </motion.div>
                    )
                )}

                {/* Layer dots on desktop — full 3-col grid */}
                <div className="hidden lg:grid grid-cols-3 gap-5">
                    {layers.map((layer, i) => (
                        <div
                            key={layer.num}
                            onClick={() => setActiveLayer(i)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Select layer ${layer.num}`}
                            onKeyDown={(e) => e.key === "Enter" && setActiveLayer(i)}
                            className={`rounded-xl border p-5 cursor-pointer transition-all duration-200 ${activeLayer === i
                                ? `${colorMap[layer.color].bg} ${colorMap[layer.color].border} shadow-sm`
                                : "bg-white border-gray-100 hover:border-gray-200"
                                }`}
                        >
                            <div className={`w-8 h-8 rounded-lg ${colorMap[layer.color].tab} flex items-center justify-center text-white mb-3`}>
                                {layer.icon}
                            </div>
                            <h4 className="text-sm font-bold text-[#0A1128] font-mondwest mb-1">{layer.title}</h4>
                            <p className="text-xs text-gray-500 font-sfpro leading-relaxed line-clamp-3">{layer.body}</p>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-500 font-sfpro text-sm mt-10 max-w-xl mx-auto">
                    Most AI gives you one of these layers. We connect all three into one system that runs your
                    front desk — 24/7, without you touching anything.
                </p>
            </Section>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* HOW IT WORKS — 4-WEEK TIMELINE                                    */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <Section id="how-it-works" bg="white">
                <SectionLabel text="How It Works" />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1128] font-mondwest tracking-tight mb-3">
                    From "I need an AI receptionist" to "it's live."
                </h2>
                <p className="text-xl text-blue-600 font-sfpro font-semibold mb-12">Four weeks.</p>

                <div className="space-y-0">
                    {[
                        {
                            week: "Week 1",
                            tag: "Audit",
                            color: "blue",
                            cost: "You spend: 1 hour on a call with us.",
                            deliver: "We deliver: A clear spec of exactly what the AI will handle.",
                            body: "We spend a week understanding your practice — how calls come in, common questions your front desk handles, your scheduling software, appointment types, insurance accepted, after-hours protocol.",
                        },
                        {
                            week: "Week 2",
                            tag: "Build",
                            color: "indigo",
                            cost: "You spend: Nothing. We build.",
                            deliver: "",
                            body: "We build the AI Receptionist. Voice agent, patient memory, scheduling integration, confirmation automation — all connected, all integrated with your existing tools.",
                        },
                        {
                            week: "Week 3",
                            tag: "Test",
                            color: "purple",
                            cost: "You spend: 30 minutes reviewing and giving us feedback.",
                            deliver: "",
                            body: "We run real-world call scenarios. New patients. Returning patients. Confused callers. Angry callers. Edge cases your front desk has seen. We break it on purpose so it doesn't break with your patients.",
                        },
                        {
                            week: "Week 4",
                            tag: "Live",
                            color: "green",
                            cost: "You spend: Zero. It runs without you.",
                            deliver: "You get: A dashboard — calls handled, appointments booked, any escalations.",
                            body: "Your AI Receptionist goes live. We monitor every call for the first 30 days. We optimize phrasing. We tune confidence thresholds.",
                        },
                    ].map((step, i) => {
                        const dotColor = {
                            blue: "bg-blue-600",
                            indigo: "bg-indigo-600",
                            purple: "bg-purple-600",
                            green: "bg-green-600",
                        }[step.color];
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.4, delay: i * 0.09 }}
                                className="relative flex gap-6 pb-10 last:pb-0"
                            >
                                {/* Timeline line */}
                                {i < 3 && (
                                    <div className="absolute left-[17px] top-10 bottom-0 w-px bg-gray-100" />
                                )}
                                {/* Dot */}
                                <div className={`flex-shrink-0 w-9 h-9 rounded-full ${dotColor} flex items-center justify-center shadow-sm z-10`}>
                                    <span className="text-white text-xs font-bold font-mondwest">{i + 1}</span>
                                </div>
                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sfpro">{step.week}</span>
                                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full font-sfpro ${dotColor} text-white`}>
                                            {step.tag}
                                        </span>
                                    </div>
                                    <p className="text-gray-700 font-sfpro text-base leading-relaxed mb-3">{step.body}</p>
                                    <p className="text-sm font-semibold text-gray-800 font-sfpro">{step.cost}</p>
                                    {step.deliver && (
                                        <p className="text-sm text-blue-600 font-sfpro mt-0.5">{step.deliver}</p>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 p-6 bg-[#F9F6F4] rounded-xl border border-gray-200">
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800 font-sfpro">
                            After week 4, your AI handles every routine call.
                        </p>
                        <p className="text-sm text-gray-500 font-sfpro mt-0.5">Your front desk handles your patients.</p>
                    </div>
                    <CTAButton href={CAL_LINK} label="Book Your Free Audit Call" />
                </div>
            </Section>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* PROOF / STATS                                                      */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <Section id="results" bg="warm">
                <SectionLabel text="Results" />
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1128] font-mondwest tracking-tight mb-4">
                    We don't say "trust us."<br />We show you what we built.
                </h2>
                <p className="text-base text-gray-500 font-sfpro mb-10 max-w-2xl">
                    PatientlyAI is a real AI voice caller we built and deployed for healthcare practices.
                    The numbers below are from our actual Vapi billing dashboard — not projections.
                </p>

                {/* PatientlyAI Agent Card — matches portfolio design */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6 shadow-sm"
                >
                    {/* Card header */}
                    <div className="px-6 pt-6 pb-4 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                        {/* Avatar */}
                        <div className="w-20 h-20 rounded-full bg-[#F9F6F4] border border-gray-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
                            <img
                                src="/images/patiently-bot.png"
                                alt="PatientlyAI voice caller avatar"
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "/images/robot.png";
                                }}
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded font-sfpro uppercase tracking-wide">
                                    NEW
                                </span>
                                <span className="text-xs text-gray-400 font-sfpro">Live healthcare AI</span>
                            </div>
                            <h3 className="text-xl font-bold text-blue-600 font-mondwest mb-1">
                                PatientlyAI — your AI voice caller
                            </h3>
                            <p className="text-sm font-semibold text-gray-800 font-sfpro mb-1">
                                Voice AI agent that calls leads, books on GHL, and cuts no-shows
                            </p>
                            <p className="text-sm text-gray-500 font-sfpro leading-relaxed">
                                It calls new leads instantly, follows up Day 1–Day 5, qualifies and handles
                                objections, books straight into GoHighLevel, sends a Stripe deposit by SMS, and
                                runs a T-24h reminder call.
                            </p>
                        </div>
                        <div className="flex-shrink-0 self-start sm:self-center">
                            <Link
                                href="/agent/689b540eeeab03d6cdeab527"
                                className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors font-sfpro cursor-pointer"
                            >
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Try PatientlyAI
                            </Link>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-100 mx-6" />

                    {/* Real data banner */}
                    <div className="px-6 py-4 bg-[#F9F6F4]">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider font-sfpro mb-3">
                            Real billing data · Vapi dashboard · Usage period Oct 01 – Oct 09, 2025
                        </p>
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { val: "$10,647.29", label: "Total Cost", sub: "Oct billing period" },
                                { val: "49,496", label: "Call Minutes", sub: "mins of live voice" },
                                { val: "$0.22", label: "Cost per Minute", sub: "fully managed" },
                            ].map((item, i) => (
                                <div key={i} className="bg-white border border-gray-200 rounded-xl px-4 py-4 text-center shadow-sm">
                                    <p className="text-xl sm:text-2xl font-bold text-[#0A1128] font-mondwest mb-0.5">
                                        {item.val}
                                    </p>
                                    <p className="text-xs font-semibold text-gray-700 font-sfpro">{item.label}</p>
                                    <p className="text-[10px] text-gray-400 font-sfpro mt-0.5">{item.sub}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-[10px] text-gray-400 font-sfpro mt-3 flex items-center gap-1">
                            <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            These are real figures from our Vapi platform dashboard — not estimates. The AI ran 49,496 minutes of live healthcare calls in a single billing period.
                        </p>
                    </div>
                </motion.div>

                {/* Testimonial */}
                <blockquote className="border-l-4 border-[#FCCA07] pl-6 py-1 mb-10 max-w-2xl">
                    <p className="text-lg text-gray-700 font-sfpro italic leading-relaxed">
                        "Within 48 hours they built an AI caller that doubled our booking rate. It feels like
                        having a full-time receptionist who never sleeps."
                    </p>
                    <footer className="mt-3 text-sm font-semibold text-gray-900 font-sfpro">— Aiden, Founder</footer>
                </blockquote>

                {/* Live stats row — real numbers */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    {[
                        { stat: 49496, suffix: "", label: "Minutes of live calls run", prefix: "" },
                        { stat: 85, suffix: "%", label: "Resolved without human", prefix: "" },
                        { stat: 4, suffix: " wks", label: "From audit to live", prefix: "" },
                        { stat: 150000, suffix: "+", label: "Medical receptionist jobs open (BLS)", prefix: "" },
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="bg-white rounded-xl border border-gray-200 px-5 py-5 text-center shadow-sm"
                        >
                            <p className="text-2xl sm:text-3xl font-bold text-[#0A1128] font-mondwest mb-1">
                                <CountUp end={s.stat} suffix={s.suffix} prefix={s.prefix} />
                            </p>
                            <p className="text-xs text-gray-500 font-sfpro leading-tight">{s.label}</p>
                        </motion.div>
                    ))}
                </div>
                <p className="text-xs text-gray-400 font-sfpro">
                    49,496 mins: Vapi billing dashboard, Oct 2025 · BLS figure: OEWS 2024, 150,000 openings/yr
                </p>
            </Section>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* IS THIS FOR YOU                                                    */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <Section id="is-this-for-you" bg="white">
                <SectionLabel text="Is This For You?" />
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1128] font-mondwest tracking-tight mb-10">
                    Built for medical clinics that have a phone problem.
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {/* Yes */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <p className="text-xs font-bold text-green-700 uppercase tracking-wider font-sfpro mb-4">
                            This is for you if:
                        </p>
                        <ul className="space-y-3">
                            {[
                                "You handle 100+ inbound calls per week",
                                "Your front desk spends more time on the phone than with patients",
                                "You're missing after-hours or lunchtime calls and losing bookings",
                                "You've tried an answering service and it couldn't actually book appointments",
                                "Your budget is $5K+ and you're serious about solving this properly",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 font-sfpro">
                                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* No */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider font-sfpro mb-4">
                            This is NOT for you if:
                        </p>
                        <ul className="space-y-3">
                            {[
                                "You need a $500 chatbot on your website",
                                "You have fewer than 50 calls per week (not enough volume for AI ROI)",
                                "You want to manage and maintain the AI system yourself",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-500 font-sfpro">
                                    <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Geographic signal */}
                <div className="bg-[#F9F6F4] border border-gray-200 rounded-xl px-6 py-5 mb-10">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider font-sfpro mb-3">
                        Highest AI receptionist demand by state (Google Trends, Feb 2026)
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {[
                            { state: "North Carolina", score: "100" },
                            { state: "Florida", score: "100" },
                            { state: "California", score: "56" },
                            { state: "Texas", score: "46" },
                            { state: "New York", score: "43" },
                        ].map(({ state, score }) => (
                            <div key={state} className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-sfpro">
                                <span className="font-semibold text-gray-800">{state}</span>
                                <span className="text-gray-400">·</span>
                                <span className="text-blue-600 font-bold">{score}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-gray-400 font-sfpro mt-3">
                        If your practice is in one of these states, early movers are already pulling ahead.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                    <CTAButton href={CAL_LINK} label="Book a Free Call" />
                    <p className="text-sm text-gray-500 font-sfpro pt-3 sm:pt-0 sm:self-center">
                        If you nodded at the first list, we should talk.
                    </p>
                </div>
            </Section>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* FAQ                                                                */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <Section id="faq" bg="warm">
                <SectionLabel text="Questions" />
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1128] font-mondwest tracking-tight mb-10">
                    You're probably wondering.
                </h2>
                <div className="space-y-3 max-w-3xl">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} q={faq.q} a={faq.a} />
                    ))}
                </div>
            </Section>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* FINAL CTA                                                          */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <section className="bg-[#0A1128] py-20 px-4">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-mondwest tracking-tight leading-tight">
                        Your medical clinic runs.
                        <br />
                        <span className="text-[#FCCA07]">Your AI should too.</span>
                    </h2>
                    <p className="text-lg text-gray-300 font-sfpro leading-relaxed max-w-xl mx-auto">
                        One call. 15 minutes. We'll tell you exactly what an AI Receptionist would look like for
                        your practice — and whether it even makes sense.
                    </p>
                    <p className="text-sm text-gray-400 font-sfpro">No pitch. No pressure. Just a straight answer.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                        <CTAButton href={CAL_LINK} label="Book Your Free Call" />
                        <a
                            href="mailto:hello@tryagentikai.com"
                            className="text-sm text-gray-400 hover:text-white transition-colors font-sfpro"
                        >
                            Or email hello@tryagentikai.com
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Related Pages ── */}
            <Section bg="white">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sfpro mb-5">
                    Also building AI for:
                </p>
                <div className="flex flex-wrap gap-3">
                    {[
                        { label: "AI Receptionist for Medical Clinics", href: "/ai-receptionist-for-medical-clinics" },
                        { label: "AI Receptionist for Med Spas", href: "/ai-receptionist-for-med-spa" },
                        { label: "AI Voice Agent for GoHighLevel", href: "/ai-voice-agent-for-gohighlevel" },
                        { label: "What is an AI Receptionist?", href: "/glossary/what-is-an-ai-receptionist" },
                    ].map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-sm text-blue-600 hover:text-blue-800 font-sfpro border border-blue-100 hover:border-blue-300 rounded-full px-4 py-2 transition-all duration-150 hover:bg-blue-50"
                        >
                            {label} →
                        </Link>
                    ))}
                </div>
            </Section>

            {/* ── Sticky CTA ── */}
            {showSticky && (
                <motion.div
                    initial={{ y: 80 }}
                    animate={{ y: 0 }}
                    exit={{ y: 80 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm"
                >
                    <div className="bg-[#0A1128] rounded-xl shadow-2xl border border-white/10 px-5 py-3.5 flex items-center justify-between gap-4">
                        <p className="text-sm text-white font-sfpro font-medium leading-tight">
                            Ready to stop missing calls?
                        </p>
                        <Link
                            href={CAL_LINK}
                            className="flex-shrink-0 bg-[#FCCA07] text-[#0A1128] text-sm font-bold px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors cursor-pointer font-sfpro"
                        >
                            Book a Call
                        </Link>
                    </div>
                </motion.div>
            )}
        </>
    );
};

// ─── Accordion FAQ item ────────────────────────────────────────────────────────
const FAQItem = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <button
                onClick={() => setOpen((p) => !p)}
                aria-expanded={open}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-gray-50 transition-colors"
            >
                <span className="text-sm font-semibold text-gray-900 font-sfpro pr-4">{q}</span>
                <span
                    className={`flex-shrink-0 w-5 h-5 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                >
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            {open && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-5"
                >
                    <p className="text-sm text-gray-600 font-sfpro leading-relaxed border-t border-gray-100 pt-4">{a}</p>
                </motion.div>
            )}
        </div>
    );
};

// ─── Layout ────────────────────────────────────────────────────────────────────
AiReceptionistMedicalPage.getLayout = (page) => page;

export default AiReceptionistMedicalPage;
