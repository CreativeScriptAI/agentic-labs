import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ClarityPageProps } from "src/pages/clarity/index";
import ctaLinks from "src/constants/cta-links";

const CAL_LINK = ctaLinks.aiClarityWorkshop;

/* ─── date formatter ─────────────────────────────────────────── */
function formatBookingDate(raw: string | null): string {
    if (!raw) return "";
    try {
        return new Date(raw).toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
        });
    } catch {
        return raw;
    }
}

/* ─── animated counter ──────────────────────────────────────────*/
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
    const [val, setVal] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    obs.disconnect();
                    let start = 0;
                    const step = Math.ceil(to / 50);
                    const id = setInterval(() => {
                        start += step;
                        if (start >= to) { setVal(to); clearInterval(id); }
                        else setVal(start);
                    }, 25);
                }
            },
            { threshold: 0.5 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [to]);
    return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── scroll-reveal hook ────────────────────────────────────────*/
function useReveal() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                    obs.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

/* ─── reveal wrapper ─────────────────────────────────────────── */
function Reveal({ children, className = "", delay = 0 }: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    const ref = useReveal();
    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: 0,
                transform: "translateY(24px)",
                transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}

/* ─── section-label component — matches site red label style ── */
function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6">
            {children}
        </p>
    );
}

/* ─── full-bleed section helper — matches site pattern ─────── */
function FullBleed({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div
            className={`py-12 sm:py-16 lg:py-20 ${className}`}
            style={{
                backgroundColor: "#F9F6F4",
                width: "calc(100% + 2rem)",
                marginLeft: "-1rem",
                marginRight: "-1rem",
            }}
        >
            {children}
        </div>
    );
}

/* ─── main component ─────────────────────────────────────────── */
export default function ClarityPage({ isBooked, name, date }: ClarityPageProps) {
    const firstName = name?.split(" ")[0] ?? null;
    const formattedDate = formatBookingDate(date);

    return (
        <div
            className="min-h-screen"
            style={{ backgroundColor: "#F9F6F4", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif" }}
        >

            {/* ── Minimal Top Bar — no site nav ───────────────────── */}
            <header
                className="sticky top-0 z-50 border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-8"
                style={{ backgroundColor: "#F9F6F4", height: "60px" }}
            >
                <Link
                    href="/"
                    className="font-mondwest text-[#0A1128] text-base sm:text-lg tracking-tight hover:opacity-75 transition-opacity"
                >
                    Agentic AI Labs
                </Link>
                {!isBooked && (
                    <a
                        href={CAL_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-[#FCCA07] px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#0A1128] transition-colors hover:bg-yellow-500 cursor-pointer"
                    >
                        Book Free Call
                    </a>
                )}
                {isBooked && (
                    <span className="text-xs sm:text-sm text-slate-500 font-sfpro">
                        ✓ Confirmed{firstName ? ` · ${firstName}` : ""}
                    </span>
                )}
            </header>

            {/* ── Post-booking confirmation banner ────────────────── */}
            {isBooked && (
                <div className="bg-[#0A1128] text-white text-center py-3 px-4 text-xs sm:text-sm font-sfpro">
                    <span className="font-semibold">
                        ✓ You&apos;re confirmed{firstName ? `, ${firstName}` : ""}
                    </span>
                    {formattedDate && (
                        <span className="text-white/70"> · {formattedDate}</span>
                    )}
                    <span className="text-white/70"> — check your inbox for the calendar invite</span>
                </div>
            )}

            {/* ── Container ─────────────────────────────────────── */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ─────────────────────────────────────────────────── */}
                {/* SECTION 1: HERO                                     */}
                {/* ─────────────────────────────────────────────────── */}
                <div
                    className="relative overflow-hidden pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20"
                    style={{ width: "calc(100% + 2rem)", marginLeft: "-1rem", marginRight: "-1rem", paddingLeft: "1rem", paddingRight: "1rem" }}
                >
                    {/* Subtle background orbs — matches main site hero */}
                    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
                        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
                        <div className="absolute bottom-10 left-10 w-64 h-64 bg-yellow-50/60 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-3xl mx-auto text-center">
                        {/* Trust badge */}
                        <Reveal delay={0}>
                            <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
                                <span className="flex">
                                    {["★", "★", "★", "★", "★"].map((s, i) => (
                                        <span key={i} className="text-[#FCCA07] text-base">
                                            {s}
                                        </span>
                                    ))}
                                </span>
                                <span className="text-slate-500 font-sfpro text-xs sm:text-sm">
                                    Trusted by 50+ founders in Healthcare, Real Estate & B2B SaaS
                                </span>
                            </div>
                        </Reveal>

                        {/* Main headline */}
                        <Reveal delay={80}>
                            {isBooked ? (
                                <h1
                                    className="font-mondwest text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0A1128] leading-[1.1] tracking-tight mb-4 sm:mb-6"
                                    style={{ textWrap: "balance" } as React.CSSProperties}
                                >
                                    {firstName ? `${firstName}, your call` : "Your call"} is{" "}
                                    <span className="text-blue-600">locked in.</span>
                                </h1>
                            ) : (
                                <h1
                                    className="font-mondwest text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0A1128] leading-[1.1] tracking-tight mb-4 sm:mb-6"
                                    style={{ textWrap: "balance" } as React.CSSProperties}
                                >
                                    We build AI systems that run{" "}
                                    <span className="text-blue-600">
                                        parts of your business
                                    </span>{" "}
                                    autonomously.
                                </h1>
                            )}
                        </Reveal>

                        {/* Sub-headline */}
                        <Reveal delay={140}>
                            <p className="text-slate-600 font-sfpro text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
                                {isBooked
                                    ? "Before we meet — here's exactly what Agentic AI Labs builds, how we work, and what to bring to the call. No slides. No demo. Just a straight answer on where AI fits in your operations."
                                    : "Not tools. Not chatbots. Production-grade AI systems that talk to your customers, remember every interaction, and take action — without you in the loop. Voice. Memory. Automation."}
                            </p>
                        </Reveal>

                        {/* CTA */}
                        <Reveal delay={200}>
                            {isBooked ? (
                                <div className="inline-flex items-center gap-3 bg-white rounded-xl shadow-sm border border-gray-100 px-5 sm:px-6 py-4 text-sm font-sfpro text-slate-700">
                                    <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                        <svg viewBox="0 0 10 10" fill="none" className="w-3 h-3">
                                            <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span>
                                        <strong className="font-semibold text-[#0A1128]">You&apos;re all set.</strong>{" "}
                                        Scroll down to see what we build and what to prepare.
                                    </span>
                                </div>
                            ) : (
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                                    <a
                                        href={CAL_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-lg bg-[#FCCA07] px-8 sm:px-10 py-4 sm:py-4 text-sm sm:text-base font-semibold text-[#0A1128] transition-colors hover:bg-yellow-500 cursor-pointer"
                                        id="clarity-hero-cta"
                                    >
                                        Book Your Free AI Clarity Call
                                    </a>
                                    <a
                                        href="#what-to-expect"
                                        className="text-sm sm:text-base font-medium text-blue-600 hover:text-blue-700 transition-colors px-4 py-3 cursor-pointer"
                                    >
                                        See what happens on the call ↓
                                    </a>
                                </div>
                            )}
                        </Reveal>

                        {/* Trust sub-line */}
                        {!isBooked && (
                            <Reveal delay={260}>
                                <p className="text-slate-400 font-sfpro text-xs sm:text-sm mt-4">
                                    Free. 30 minutes. Specific to your business. Not a sales pitch.
                                </p>
                            </Reveal>
                        )}
                    </div>
                </div>

                {/* ─────────────────────────────────────────────────── */}
                {/* SECTION 2: WHY FOUNDERS WORK WITH US               */}
                {/* ─────────────────────────────────────────────────── */}
                <FullBleed>
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Reveal>
                            <div className="text-center mb-8 sm:mb-12 lg:mb-14">
                                <SectionLabel>Why Agentic AI Labs</SectionLabel>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest px-4 mb-2">
                                    Built by engineers.
                                </h2>
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 font-mondwest px-4">
                                    Trusted by founders.
                                </h3>
                            </div>
                        </Reveal>

                        {/* Feature cards — 2-col grid on desktop */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
                            {[
                                {
                                    title: "3 technical co-founders",
                                    desc: "We build — we don't just consult. Every system we deploy, we've architected and shipped ourselves.",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    ),
                                },
                                {
                                    title: "50+ AI systems shipped",
                                    desc: "Across healthcare, real estate, B2B SaaS, and home services — in production, with real customers.",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                    ),
                                },
                                {
                                    title: "Working prototype in 48hrs",
                                    desc: "Not a deck. Not wireframes. An actual running bot within two business days of kickoff.",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    ),
                                },
                                {
                                    title: "30 days active monitoring post-launch",
                                    desc: "We watch every interaction, tune the model, and ship optimizations. No disappearing act.",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    ),
                                },
                            ].map((card, i) => (
                                <Reveal key={i} delay={i * 60}>
                                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 sm:p-6 h-full">
                                        <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white mb-4">
                                            {card.icon}
                                        </div>
                                        <h4 className="font-bold text-[#0A1128] font-mondwest text-base sm:text-lg mb-2">
                                            {card.title}
                                        </h4>
                                        <p className="text-slate-600 font-sfpro text-sm sm:text-base leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>

                        {/* Stats bar — matches ProofSection style */}
                        <Reveal>
                            <div className="grid grid-cols-3 gap-px bg-gray-200 rounded-xl overflow-hidden border border-gray-200">
                                {[
                                    { num: 50, suffix: "+", label: "Projects Shipped" },
                                    { num: 4, suffix: "+", label: "Industries" },
                                    { label: "48hrs", labelFixed: true, desc: "To First Prototype" },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white py-6 sm:py-8 px-4 text-center">
                                        <span className="block font-mondwest text-3xl sm:text-4xl lg:text-5xl text-[#0A1128] mb-1">
                                            {stat.labelFixed ? stat.label : <Counter to={stat.num as number} suffix={stat.suffix} />}
                                        </span>
                                        <span className="text-slate-500 font-sfpro text-xs sm:text-sm uppercase tracking-wider">
                                            {stat.labelFixed ? stat.desc : stat.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </FullBleed>

                {/* ─────────────────────────────────────────────────── */}
                {/* SECTION 3: FEATURED CASE STUDY (PatientlyAI)       */}
                {/* ─────────────────────────────────────────────────── */}
                <div className="py-12 sm:py-16 lg:py-20">
                    <Reveal>
                        <div className="text-center mb-8 sm:mb-12">
                            <SectionLabel>Real results</SectionLabel>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest px-4 mb-2">
                                We don&apos;t say &ldquo;trust us.&rdquo;
                            </h2>
                            <h3 className="text-lg sm:text-xl lg:text-[24px] font-normal text-[#1E293B] font-sfpro px-4">
                                We show you what we built.
                            </h3>
                        </div>
                    </Reveal>

                    <Reveal delay={80}>
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 lg:p-10">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="rounded-lg bg-red-500 px-2 sm:px-3 py-1 text-gray-50 font-sfpro text-xs sm:text-sm font-medium">
                                    FEATURED
                                </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 font-mondwest mb-6">
                                PatientlyAI — AI Voice Agent for Healthcare
                            </h3>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-6">
                                {[
                                    {
                                        label: "The problem:",
                                        text: "A healthcare practice was losing leads every week because calls went unanswered after hours.",
                                    },
                                    {
                                        label: "The system we built:",
                                        text: "Voice agent that calls new leads instantly, follows up Day 1–5, qualifies, handles objections, books into GoHighLevel, and sends a Stripe deposit by SMS.",
                                    },
                                    {
                                        label: "The result:",
                                        text: "Doubled appointment booking rate. Running 24/7 with zero human receptionists in the loop. Built and deployed in under 2 weeks.",
                                    },
                                ].map((col, i) => (
                                    <div key={i}>
                                        <h4 className="text-sm sm:text-base font-semibold text-[#0A1128] font-sfpro mb-2">
                                            {col.label}
                                        </h4>
                                        <p className="text-slate-600 font-sfpro text-sm sm:text-base leading-relaxed">
                                            {col.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="/agent/patientlyai"
                                className="inline-block rounded-lg bg-blue-600 text-white font-sfpro text-sm sm:text-base font-medium px-4 sm:px-6 py-2 sm:py-3 hover:bg-blue-700 transition-colors cursor-pointer"
                            >
                                View PatientlyAI →
                            </Link>
                        </div>
                    </Reveal>
                </div>

                {/* ─────────────────────────────────────────────────── */}
                {/* SECTION 4: TESTIMONIAL                              */}
                {/* ─────────────────────────────────────────────────── */}
                <FullBleed>
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Reveal>
                            <div className="text-center mb-8 sm:mb-10">
                                <SectionLabel>What founders say</SectionLabel>
                            </div>
                        </Reveal>
                        <Reveal delay={80}>
                            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sm:p-8 text-center max-w-3xl mx-auto">
                                <p className="text-slate-700 font-sfpro text-base sm:text-lg lg:text-xl leading-relaxed italic mb-4">
                                    &ldquo;Within 48 hours they built an AI caller that doubled our booking rate.
                                    It feels like having a full-time receptionist who never sleeps.&rdquo;
                                </p>
                                <p className="text-sm sm:text-base text-slate-500 font-sfpro font-medium">
                                    — Aiden, Founder · Healthcare industry
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </FullBleed>

                {/* ─────────────────────────────────────────────────── */}
                {/* SECTION 5: WHAT HAPPENS ON THE CALL                */}
                {/* ─────────────────────────────────────────────────── */}
                <div id="what-to-expect" className="py-12 sm:py-16 lg:py-20">
                    <Reveal>
                        <div className="text-center mb-8 sm:mb-12 lg:mb-14">
                            <SectionLabel>What to expect</SectionLabel>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest px-4 mb-2">
                                30 minutes. A plan. Zero pitch.
                            </h2>
                            <h3 className="text-lg sm:text-xl lg:text-[24px] font-normal text-[#1E293B] font-sfpro px-4">
                                Here&apos;s exactly what happens on the call.
                            </h3>
                        </div>
                    </Reveal>

                    <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                        {[
                            {
                                title: "We look at your business and your workflows.",
                                desc: "Tell us what your team does every day. We listen first — no script, no agenda, no slide deck. You do most of the talking.",
                                effort: "You need: 10 minutes of honest context.",
                            },
                            {
                                title: "We map your #1 AI opportunity — ranked by time and money saved.",
                                desc: "Every business has one or two workflows where AI does the heavy lifting. We find yours — and explain how we'd build it.",
                                effort: "We deliver: A specific, ranked recommendation.",
                            },
                            {
                                title: "You leave with a clear 'build this first' plan.",
                                desc: "Not a proposal. Not a follow-up deck. A plain-language plan you can act on — with us or on your own.",
                                effort: "No pressure. No commitment required.",
                            },
                        ].map((step, i) => (
                            <Reveal key={i} delay={i * 80}>
                                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 sm:p-6 lg:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 flex items-center justify-center">
                                            <span className="text-white font-mondwest text-lg sm:text-xl font-bold">
                                                {i + 1}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-lg sm:text-xl font-bold text-[#0A1128] font-mondwest mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-600 font-sfpro text-sm sm:text-base leading-relaxed mb-3">
                                            {step.desc}
                                        </p>
                                        <p className="text-blue-600 font-sfpro text-sm sm:text-base font-medium">
                                            {step.effort}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* ─────────────────────────────────────────────────── */}
                {/* SECTION 6: FINAL CTA or PREP REMINDER              */}
                {/* ─────────────────────────────────────────────────── */}
                <FullBleed>
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        {!isBooked ? (
                            <>
                                <Reveal>
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest px-4 mb-2">
                                        Your business runs.
                                    </h2>
                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 font-mondwest px-4 mb-6 sm:mb-8">
                                        Your AI should too.
                                    </h3>
                                </Reveal>
                                <Reveal delay={80}>
                                    <p className="text-slate-600 font-sfpro text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto mb-2">
                                        Free. 30 minutes. Specific to your business.
                                    </p>
                                    <p className="text-slate-700 font-sfpro text-sm sm:text-base lg:text-lg leading-relaxed font-medium max-w-xl mx-auto mb-8 sm:mb-10">
                                        No pitch. No pressure. A straight answer on where AI fits in your operations.
                                    </p>
                                </Reveal>
                                <Reveal delay={140}>
                                    <a
                                        href={CAL_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block rounded-lg bg-[#FCCA07] px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold text-[#0A1128] transition-colors hover:bg-yellow-500 cursor-pointer"
                                        id="clarity-final-cta"
                                    >
                                        Book Your Free AI Clarity Call
                                    </a>
                                    <p className="text-slate-400 font-sfpro text-xs sm:text-sm mt-4">
                                        Worst case: 30 minutes. Best case: you find an opportunity worth $X,XXX/month.
                                    </p>
                                </Reveal>
                            </>
                        ) : (
                            <>
                                <Reveal>
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest px-4 mb-6">
                                        One thing to bring to the call.
                                    </h2>
                                </Reveal>
                                <Reveal delay={80}>
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 text-left max-w-xl mx-auto mb-6">
                                        <p className="text-slate-700 font-sfpro text-sm sm:text-base leading-relaxed mb-4">
                                            Think of your <strong className="text-[#0A1128]">top 3 repetitive tasks</strong> — the ones you or your team do every day that could theoretically run without you.
                                        </p>
                                        <p className="text-slate-600 font-sfpro text-sm sm:text-base leading-relaxed">
                                            That&apos;s all the context we need to make the 30 minutes genuinely useful. No prep deck. No slides. Just your honest answer on where the friction is.
                                        </p>
                                    </div>
                                </Reveal>
                                <Reveal delay={140}>
                                    <p className="text-slate-400 font-sfpro text-xs sm:text-sm">
                                        Questions before the call? Email{" "}
                                        <a href="mailto:hello@tryagentikai.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                                            hello@tryagentikai.com
                                        </a>{" "}
                                        — Aditya reads every one.
                                    </p>
                                </Reveal>
                            </>
                        )}
                    </div>
                </FullBleed>

                {/* ─────────────────────────────────────────────────── */}
                {/* FOOTER CLOSE                                        */}
                {/* ─────────────────────────────────────────────────── */}
                <div className="py-12 sm:py-16 text-center">
                    <Reveal>
                        <p className="font-mondwest text-lg sm:text-xl text-[#0A1128] mb-1">
                            — Aditya
                        </p>
                        <p className="text-slate-500 font-sfpro text-sm">
                            Founder, Agentic AI Labs &nbsp;·&nbsp;{" "}
                            <a href="https://www.tryagentikai.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                                tryagentikai.com
                            </a>
                        </p>
                    </Reveal>
                </div>

            </div>
        </div>
    );
}
