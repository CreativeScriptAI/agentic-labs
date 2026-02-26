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

/* ─── animated counter (only on client, only when visible) ──── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
    const [val, setVal] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el || started) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    obs.disconnect();
                    setStarted(true);
                    let current = 0;
                    const step = Math.ceil(to / 40);
                    const id = setInterval(() => {
                        current += step;
                        if (current >= to) { setVal(to); clearInterval(id); }
                        else setVal(current);
                    }, 30);
                }
            },
            { threshold: 0.4 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [to, started]);

    return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── CTA Button — guaranteed yellow regardless of global reset  */
const CTAButton = ({
    href,
    id,
    children,
    fullWidth = false,
}: {
    href: string;
    id?: string;
    children: React.ReactNode;
    fullWidth?: boolean;
}) => (
    <a
        href={href}
        id={id}
        target="_blank"
        rel="noopener noreferrer"
        style={{
            display: fullWidth ? "flex" : "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FCCA07",
            color: "#0A1128",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: 1.25,
            padding: fullWidth ? "18px 24px" : "14px 32px",
            borderRadius: "8px",
            textDecoration: "none",
            width: fullWidth ? "100%" : "auto",
            cursor: "pointer",
            transition: "background-color 0.15s ease",
            WebkitTapHighlightColor: "transparent",
            minHeight: "52px", /* 44px+ touch target */
        }}
        onMouseOver={e => (e.currentTarget.style.backgroundColor = "#f0bc00")}
        onMouseOut={e => (e.currentTarget.style.backgroundColor = "#FCCA07")}
    >
        {children}
    </a>
);

/* ─── section-label — matches site red label style ─────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p
            style={{
                color: "#ef4444",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "16px",
            }}
        >
            {children}
        </p>
    );
}

/* ─── CheckIcon SVG ─────────────────────────────────────────── */
const CheckIcon = () => (
    <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: 20, height: 20, flexShrink: 0, color: "#16a34a", marginTop: 2 }}>
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

/* ─── main component ─────────────────────────────────────────── */
export default function ClarityPage({ isBooked, name, date }: ClarityPageProps) {
    const firstName = name?.split(" ")[0] ?? null;
    const formattedDate = formatBookingDate(date);

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#F9F6F4", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif", overflowX: "hidden" }}>

            {/* ── Minimal Top Bar ───────────────────────────────────  */}
            <header
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 50,
                    backgroundColor: "#F9F6F4",
                    borderBottom: "1px solid #e5e7eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 16px",
                    height: "60px",
                }}
            >
                <Link
                    href="/"
                    style={{
                        fontFamily: "var(--font-mondwest), serif",
                        color: "#0A1128",
                        fontSize: "16px",
                        fontWeight: 700,
                        textDecoration: "none",
                        letterSpacing: "-0.01em",
                    }}
                >
                    Agentic AI Labs
                </Link>

                {isBooked ? (
                    <span style={{ fontSize: "13px", color: "#6b7280" }}>
                        ✓ Confirmed{firstName ? ` · ${firstName}` : ""}
                    </span>
                ) : (
                    <a
                        href={CAL_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            backgroundColor: "#FCCA07",
                            color: "#0A1128",
                            fontWeight: 600,
                            fontSize: "13px",
                            padding: "8px 16px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            minHeight: "44px",
                            cursor: "pointer",
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        Book Free Call
                    </a>
                )}
            </header>

            {/* ── Booking confirmation banner ───────────────────────  */}
            {isBooked && (
                <div
                    style={{
                        backgroundColor: "#0A1128",
                        color: "#fff",
                        textAlign: "center",
                        padding: "10px 16px",
                        fontSize: "13px",
                        lineHeight: 1.5,
                    }}
                >
                    <span style={{ fontWeight: 600 }}>
                        ✓ You&apos;re confirmed{firstName ? `, ${firstName}` : ""}
                    </span>
                    {formattedDate && (
                        <span style={{ color: "rgba(255,255,255,0.65)" }}> · {formattedDate}</span>
                    )}
                    <span style={{ color: "rgba(255,255,255,0.65)" }}>
                        {" "}— check your inbox for the calendar invite
                    </span>
                </div>
            )}

            {/* ── Max-width container ───────────────────────────────  */}
            <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 16px" }}>

                {/* ═══════════════════════════════════════════════════  */}
                {/* HERO SECTION                                         */}
                {/* ═══════════════════════════════════════════════════  */}
                <section
                    style={{
                        paddingTop: "48px",
                        paddingBottom: "48px",
                        textAlign: "center",
                        position: "relative",
                    }}
                >
                    {/* Trust badge */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            marginBottom: "24px",
                            flexWrap: "wrap",
                        }}
                    >
                        <span style={{ color: "#FCCA07", fontSize: "14px", letterSpacing: "2px" }}>★★★★★</span>
                        <span style={{ color: "#6b7280", fontSize: "12px", fontWeight: 500 }}>
                            50+ founders · Healthcare · Real Estate · B2B SaaS
                        </span>
                    </div>

                    {/* Headline */}
                    <h1
                        style={{
                            fontFamily: "var(--font-mondwest), serif",
                            fontSize: "clamp(28px, 7vw, 56px)",
                            fontWeight: 700,
                            color: "#0A1128",
                            lineHeight: 1.1,
                            letterSpacing: "-0.02em",
                            marginBottom: "20px",
                            textWrap: "balance",
                        } as React.CSSProperties}
                    >
                        {isBooked ? (
                            <>
                                {firstName ? `${firstName}, your call` : "Your call"} is{" "}
                                <span style={{ color: "#2563eb" }}>locked in.</span>
                            </>
                        ) : (
                            <>
                                We build AI systems that run{" "}
                                <span style={{ color: "#2563eb" }}>parts of your business</span>{" "}
                                autonomously.
                            </>
                        )}
                    </h1>

                    {/* Sub-copy */}
                    <p
                        style={{
                            color: "#475569",
                            fontSize: "clamp(15px, 3.5vw, 18px)",
                            lineHeight: 1.65,
                            maxWidth: "600px",
                            margin: "0 auto 32px",
                        }}
                    >
                        {isBooked
                            ? "Before we meet — here's exactly what we build, how we work, and what to bring. No slides. A straight answer on where AI fits your operations."
                            : "Not tools. Not demos. Production-grade AI systems that talk to your customers, remember every interaction, and take action — without you in the loop."}
                    </p>

                    {/* CTA area */}
                    {isBooked ? (
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "flex-start",
                                gap: "12px",
                                backgroundColor: "#fff",
                                border: "1px solid #e5e7eb",
                                borderRadius: "12px",
                                padding: "16px 20px",
                                maxWidth: "480px",
                                textAlign: "left",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                            }}
                        >
                            <span
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    borderRadius: "50%",
                                    backgroundColor: "#16a34a",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    marginTop: "2px",
                                }}
                            >
                                <svg viewBox="0 0 10 10" fill="none" style={{ width: 12, height: 12 }}>
                                    <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span style={{ fontSize: "14px", color: "#374151", lineHeight: 1.5 }}>
                                <strong style={{ color: "#0A1128", fontWeight: 600 }}>You&apos;re all set.</strong>{" "}
                                Scroll down to see what we build and what to prepare for the call.
                            </span>
                        </div>
                    ) : (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                            <CTAButton href={CAL_LINK} id="clarity-hero-cta" fullWidth={false}>
                                Book Your Free AI Clarity Call
                            </CTAButton>
                            <a
                                href="#what-to-expect"
                                style={{
                                    fontSize: "14px",
                                    color: "#2563eb",
                                    textDecoration: "none",
                                    display: "inline-block",
                                    padding: "8px",
                                    minHeight: "44px",
                                    lineHeight: "28px",
                                    cursor: "pointer",
                                }}
                            >
                                See what happens on the call ↓
                            </a>
                            <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "-4px" }}>
                                Free. 30 minutes. Not a sales pitch.
                            </p>
                        </div>
                    )}
                </section>

                {/* ═══════════════════════════════════════════════════  */}
                {/* WHY US — Feature Cards                               */}
                {/* ═══════════════════════════════════════════════════  */}
                <section
                    style={{
                        backgroundColor: "#F9F6F4",
                        width: "calc(100% + 32px)",
                        marginLeft: "-16px",
                        marginRight: "-16px",
                        padding: "48px 16px",
                    }}
                >
                    <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                        <div style={{ textAlign: "center", marginBottom: "32px" }}>
                            <SectionLabel>Why Agentic AI Labs</SectionLabel>
                            <h2
                                style={{
                                    fontFamily: "var(--font-mondwest), serif",
                                    fontSize: "clamp(22px, 5vw, 38px)",
                                    fontWeight: 700,
                                    color: "#0A1128",
                                    lineHeight: 1.2,
                                    marginBottom: "4px",
                                }}
                            >
                                Built by engineers.
                            </h2>
                            <h3
                                style={{
                                    fontFamily: "var(--font-mondwest), serif",
                                    fontSize: "clamp(22px, 5vw, 38px)",
                                    fontWeight: 700,
                                    color: "#2563eb",
                                    lineHeight: 1.2,
                                }}
                            >
                                Trusted by founders.
                            </h3>
                        </div>

                        {/* Feature list — mobile: stacked checkmarks, desktop: 2-col cards */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                gap: "12px",
                                marginBottom: "24px",
                            }}
                        >
                            {[
                                { text: "3 technical co-founders — we build, we don't just consult." },
                                { text: "50+ AI systems shipped across healthcare, real estate, SaaS, and home services." },
                                { text: "Working prototype within 48 hours of kickoff — not a deck, a running bot." },
                                { text: "30 days active monitoring post-launch. We watch every interaction. No disappearing act." },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    style={{
                                        backgroundColor: "#fff",
                                        borderRadius: "12px",
                                        border: "1px solid #f3f4f6",
                                        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                                        padding: "16px 20px",
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "12px",
                                    }}
                                >
                                    <CheckIcon />
                                    <span style={{ fontSize: "14px", color: "#374151", lineHeight: 1.55, fontWeight: 500 }}>
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Stats bar */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "1px",
                                backgroundColor: "#e5e7eb",
                                borderRadius: "12px",
                                overflow: "hidden",
                                border: "1px solid #e5e7eb",
                            }}
                        >
                            {[
                                { num: 50, suffix: "+", label: "Projects" },
                                { num: 4, suffix: "+", label: "Industries" },
                                { fixed: "48h", label: "To Prototype" },
                            ].map((s, i) => (
                                <div
                                    key={i}
                                    style={{
                                        backgroundColor: "#fff",
                                        padding: "20px 8px",
                                        textAlign: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontFamily: "var(--font-mondwest), serif",
                                            fontSize: "clamp(24px, 6vw, 40px)",
                                            fontWeight: 700,
                                            color: "#0A1128",
                                            lineHeight: 1,
                                            marginBottom: "6px",
                                        }}
                                    >
                                        {s.fixed ? s.fixed : <Counter to={s.num as number} suffix={s.suffix} />}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "10px",
                                            color: "#6b7280",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.06em",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════  */}
                {/* CASE STUDY — PatientlyAI                            */}
                {/* ═══════════════════════════════════════════════════  */}
                <section style={{ padding: "48px 0" }}>
                    <div style={{ textAlign: "center", marginBottom: "28px" }}>
                        <SectionLabel>Real results</SectionLabel>
                        <h2
                            style={{
                                fontFamily: "var(--font-mondwest), serif",
                                fontSize: "clamp(22px, 5vw, 36px)",
                                fontWeight: 700,
                                color: "#0A1128",
                                marginBottom: "4px",
                            }}
                        >
                            We don&apos;t say &ldquo;trust us.&rdquo;
                        </h2>
                        <p style={{ fontSize: "16px", color: "#334155" }}>We show you what we built.</p>
                    </div>

                    <div
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: "16px",
                            border: "1px solid #f3f4f6",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                            padding: "24px",
                        }}
                    >
                        <span
                            style={{
                                display: "inline-block",
                                backgroundColor: "#ef4444",
                                color: "#fff",
                                fontSize: "11px",
                                fontWeight: 600,
                                padding: "3px 10px",
                                borderRadius: "6px",
                                letterSpacing: "0.06em",
                                marginBottom: "12px",
                            }}
                        >
                            FEATURED
                        </span>
                        <h3
                            style={{
                                fontFamily: "var(--font-mondwest), serif",
                                fontSize: "clamp(18px, 4vw, 28px)",
                                fontWeight: 700,
                                color: "#2563eb",
                                marginBottom: "20px",
                                lineHeight: 1.2,
                            }}
                        >
                            PatientlyAI — AI Voice Agent for Healthcare
                        </h3>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                gap: "20px",
                                marginBottom: "20px",
                            }}
                        >
                            {[
                                { label: "The problem:", text: "A healthcare practice was losing leads every week because calls went unanswered after hours." },
                                { label: "The system we built:", text: "Voice agent: calls new leads instantly, follows up Day 1–5, qualifies, handles objections, books into GoHighLevel, sends a Stripe deposit by SMS." },
                                { label: "The result:", text: "Doubled appointment booking rate. Running 24/7 with zero human receptionists in the loop. Built and deployed in under 2 weeks." },
                            ].map((col, i) => (
                                <div key={i}>
                                    <p style={{ fontSize: "13px", fontWeight: 600, color: "#0A1128", marginBottom: "6px" }}>
                                        {col.label}
                                    </p>
                                    <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6 }}>{col.text}</p>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/agent/patientlyai"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                backgroundColor: "#2563eb",
                                color: "#fff",
                                fontSize: "14px",
                                fontWeight: 600,
                                padding: "10px 20px",
                                borderRadius: "8px",
                                textDecoration: "none",
                                minHeight: "44px",
                                cursor: "pointer",
                            }}
                        >
                            View PatientlyAI →
                        </Link>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════  */}
                {/* TESTIMONIAL                                          */}
                {/* ═══════════════════════════════════════════════════  */}
                <section
                    style={{
                        backgroundColor: "#F9F6F4",
                        width: "calc(100% + 32px)",
                        marginLeft: "-16px",
                        marginRight: "-16px",
                        padding: "48px 16px",
                    }}
                >
                    <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
                        <SectionLabel>What founders say</SectionLabel>
                        <div
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: "16px",
                                border: "1px solid #f3f4f6",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                                padding: "28px 24px",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "clamp(15px, 3.5vw, 18px)",
                                    color: "#334155",
                                    fontStyle: "italic",
                                    lineHeight: 1.65,
                                    marginBottom: "16px",
                                }}
                            >
                                &ldquo;Within 48 hours they built an AI caller that doubled our booking rate.
                                It feels like having a full-time receptionist who never sleeps.&rdquo;
                            </p>
                            <p style={{ fontSize: "14px", color: "#6b7280", fontWeight: 500 }}>
                                — Aiden, Founder · Healthcare
                            </p>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════  */}
                {/* WHAT HAPPENS ON THE CALL                            */}
                {/* ═══════════════════════════════════════════════════  */}
                <section id="what-to-expect" style={{ padding: "48px 0" }}>
                    <div style={{ textAlign: "center", marginBottom: "28px" }}>
                        <SectionLabel>What to expect</SectionLabel>
                        <h2
                            style={{
                                fontFamily: "var(--font-mondwest), serif",
                                fontSize: "clamp(22px, 5vw, 36px)",
                                fontWeight: 700,
                                color: "#0A1128",
                                marginBottom: "4px",
                            }}
                        >
                            30 minutes. A plan. Zero pitch.
                        </h2>
                        <p style={{ fontSize: "16px", color: "#334155" }}>
                            Here&apos;s exactly what happens on the call.
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {[
                            {
                                title: "We look at your business and your workflows.",
                                desc: "Tell us what your team does every day. We listen first — no script, no agenda, no slide deck. You do most of the talking.",
                                note: "You need: 10 minutes of honest context.",
                            },
                            {
                                title: "We map your #1 AI opportunity — ranked by time and money saved.",
                                desc: "Every business has one or two workflows where AI does the heavy lifting. We find yours — and explain how we'd build it.",
                                note: "We deliver: A specific, ranked recommendation.",
                            },
                            {
                                title: "You leave with a clear 'build this first' plan.",
                                desc: "Not a proposal. Not a follow-up deck. A plain-language plan you can act on — with us or on your own.",
                                note: "No pressure. No commitment required.",
                            },
                        ].map((step, i) => (
                            <div
                                key={i}
                                style={{
                                    backgroundColor: "#fff",
                                    borderRadius: "12px",
                                    border: "1px solid #f3f4f6",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                                    padding: "20px",
                                    display: "flex",
                                    gap: "16px",
                                    alignItems: "flex-start",
                                }}
                            >
                                <div
                                    style={{
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "50%",
                                        backgroundColor: "#2563eb",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                        marginTop: "2px",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: "#fff",
                                            fontFamily: "var(--font-mondwest), serif",
                                            fontSize: "16px",
                                            fontWeight: 700,
                                        }}
                                    >
                                        {i + 1}
                                    </span>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3
                                        style={{
                                            fontFamily: "var(--font-mondwest), serif",
                                            fontSize: "clamp(15px, 3.5vw, 18px)",
                                            fontWeight: 700,
                                            color: "#0A1128",
                                            marginBottom: "8px",
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        {step.title}
                                    </h3>
                                    <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6, marginBottom: "8px" }}>
                                        {step.desc}
                                    </p>
                                    <p style={{ fontSize: "13px", color: "#2563eb", fontWeight: 600 }}>
                                        {step.note}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════  */}
                {/* FINAL CTA or PREP REMINDER                          */}
                {/* ═══════════════════════════════════════════════════  */}
                <section
                    style={{
                        backgroundColor: "#F9F6F4",
                        width: "calc(100% + 32px)",
                        marginLeft: "-16px",
                        marginRight: "-16px",
                        padding: "48px 16px",
                    }}
                >
                    <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
                        {!isBooked ? (
                            <>
                                <h2
                                    style={{
                                        fontFamily: "var(--font-mondwest), serif",
                                        fontSize: "clamp(24px, 6vw, 40px)",
                                        fontWeight: 700,
                                        color: "#0A1128",
                                        lineHeight: 1.15,
                                        marginBottom: "4px",
                                    }}
                                >
                                    Your business runs.
                                </h2>
                                <h3
                                    style={{
                                        fontFamily: "var(--font-mondwest), serif",
                                        fontSize: "clamp(24px, 6vw, 40px)",
                                        fontWeight: 700,
                                        color: "#2563eb",
                                        lineHeight: 1.15,
                                        marginBottom: "20px",
                                    }}
                                >
                                    Your AI should too.
                                </h3>
                                <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.65, marginBottom: "28px", maxWidth: "440px", margin: "0 auto 28px" }}>
                                    Free. 30 minutes. No pitch. No pressure. A straight answer on where AI fits in your operations.
                                </p>
                                <CTAButton href={CAL_LINK} id="clarity-final-cta" fullWidth>
                                    Book Your Free AI Clarity Call →
                                </CTAButton>
                                <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "12px" }}>
                                    Worst case: 30 minutes. Best case: an opportunity worth thousands per month.
                                </p>
                            </>
                        ) : (
                            <>
                                <h2
                                    style={{
                                        fontFamily: "var(--font-mondwest), serif",
                                        fontSize: "clamp(22px, 5vw, 36px)",
                                        fontWeight: 700,
                                        color: "#0A1128",
                                        marginBottom: "20px",
                                    }}
                                >
                                    One thing to bring to the call.
                                </h2>
                                <div
                                    style={{
                                        backgroundColor: "#fff",
                                        borderRadius: "16px",
                                        border: "1px solid #f3f4f6",
                                        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                                        padding: "24px",
                                        textAlign: "left",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.65, marginBottom: "12px" }}>
                                        Think of your <strong style={{ color: "#0A1128" }}>top 3 repetitive tasks</strong> — the ones you or your team do every day that could theoretically run without you.
                                    </p>
                                    <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: 1.65 }}>
                                        That&apos;s all the context we need. No prep deck. No slides. Just your honest answer on where the friction is.
                                    </p>
                                </div>
                                <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: 1.6 }}>
                                    Questions?{" "}
                                    <a
                                        href="mailto:hello@tryagentikai.com"
                                        style={{ color: "#2563eb", textDecoration: "none" }}
                                    >
                                        hello@tryagentikai.com
                                    </a>
                                    {" "}— Aditya reads every one.
                                </p>
                            </>
                        )}
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════  */}
                {/* FOUNDER SIGN-OFF                                     */}
                {/* ═══════════════════════════════════════════════════  */}
                <section style={{ padding: "40px 0", textAlign: "center" }}>
                    <p
                        style={{
                            fontFamily: "var(--font-mondwest), serif",
                            fontSize: "18px",
                            color: "#0A1128",
                            marginBottom: "4px",
                        }}
                    >
                        — Aditya
                    </p>
                    <p style={{ fontSize: "13px", color: "#6b7280" }}>
                        Founder, Agentic AI Labs &nbsp;·&nbsp;{" "}
                        <a
                            href="https://www.tryagentikai.com"
                            style={{ color: "#2563eb", textDecoration: "none" }}
                        >
                            tryagentikai.com
                        </a>
                    </p>
                </section>

            </div>
        </div>
    );
}
