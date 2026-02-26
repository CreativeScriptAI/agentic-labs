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

/* ── Calendar illustration ──────────────────────────────────── */
const CalendarIllustration = () => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 120, height: 120 }}>
        {/* Background card */}
        <rect x="8" y="16" width="104" height="92" rx="10" fill="#fff" stroke="#e5e7eb" strokeWidth="2" />
        {/* Top colored bar */}
        <rect x="8" y="16" width="104" height="28" rx="10" fill="#2563eb" />
        <rect x="8" y="30" width="104" height="14" fill="#2563eb" />
        {/* Calendar header pins */}
        <rect x="30" y="10" width="8" height="14" rx="4" fill="#2563eb" />
        <rect x="82" y="10" width="8" height="14" rx="4" fill="#2563eb" />
        {/* Month label */}
        <text x="60" y="35" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="system-ui">CLARITY CALL</text>
        {/* Grid dots - days */}
        {[0, 1, 2, 3, 4, 5, 6].map(col => (
            <rect key={col} x={20 + col * 13} y="56" width="8" height="8" rx="2" fill={col === 2 ? "#FCCA07" : "#f3f4f6"} />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map(col => (
            <rect key={col} x={20 + col * 13} y="70" width="8" height="8" rx="2" fill={col === 5 ? "#2563eb" : "#f3f4f6"} />
        ))}
        {[0, 1, 2, 3, 4].map(col => (
            <rect key={col} x={20 + col * 13} y="84" width="8" height="8" rx="2" fill="#f3f4f6" />
        ))}
        {/* Checkmark on highlighted day */}
        <circle cx="36" cy="60" r="6" fill="#FCCA07" />
        <path d="M33 60l2 2 4-4" stroke="#0A1128" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/* ── Envelope illustration ──────────────────────────────────── */
const EnvelopeIllustration = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56 }}>
        <rect x="4" y="16" width="56" height="38" rx="6" fill="#fff" stroke="#e5e7eb" strokeWidth="1.5" />
        <path d="M4 22l25.5 18a5 5 0 005 0L60 22" stroke="#2563eb" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="50" cy="18" r="10" fill="#16a34a" />
        <path d="M45 18l3.5 3.5L55 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/* ── Prep item icons ────────────────────────────────────────── */
const BriefcaseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" style={{ width: 22, height: 22 }}>
        <rect x="2" y="8" width="20" height="14" rx="3" stroke="#2563eb" strokeWidth="1.5" />
        <path d="M8 8V6a4 4 0 018 0v2" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 13h20" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);
const PainIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" style={{ width: 22, height: 22 }}>
        <circle cx="12" cy="12" r="9" stroke="#ef4444" strokeWidth="1.5" />
        <path d="M12 8v5" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1" fill="#ef4444" />
    </svg>
);
const IdeaIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" style={{ width: 22, height: 22 }}>
        <path d="M9 21h6M12 3a6 6 0 00-3.5 10.9V17a1 1 0 001 1h5a1 1 0 001-1v-3.1A6 6 0 0012 3z" stroke="#FCCA07" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/* ─── main component ─────────────────────────────────────────── */
export default function ClarityPage({ isBooked, name, email, date }: ClarityPageProps) {
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
                    <span style={{ fontSize: "13px", color: "#16a34a", fontWeight: 600, display: "flex", alignItems: "center", gap: "5px" }}>
                        <svg viewBox="0 0 16 16" fill="none" style={{ width: 14, height: 14 }}><circle cx="8" cy="8" r="7" fill="#16a34a" /><path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {firstName ? `${firstName}'s call is confirmed` : "Call confirmed"}
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
                    {isBooked ? (
                        <>
                            <div style={{ marginBottom: "20px" }}>
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#dcfce7", color: "#15803d", padding: "6px 14px", borderRadius: "20px", fontSize: "14px", fontWeight: 600, border: "1px solid #bbf7d0" }}>
                                    <svg viewBox="0 0 12 12" fill="none" style={{ width: 14, height: 14 }}>
                                        <circle cx="6" cy="6" r="5" fill="#16a34a" />
                                        <path d="M3.5 6l1.8 1.8L8.5 4.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Booking Confirmed
                                </span>
                            </div>
                            <h1
                                style={{
                                    fontFamily: "var(--font-mondwest), serif",
                                    fontSize: "clamp(36px, 8vw, 64px)",
                                    fontWeight: 700,
                                    color: "#0A1128",
                                    lineHeight: 1.05,
                                    letterSpacing: "-0.02em",
                                    marginBottom: "16px",
                                    textWrap: "balance",
                                } as React.CSSProperties}
                            >
                                You&apos;re locked in{firstName ? `, ${firstName}` : ""}.
                            </h1>
                            <p
                                style={{
                                    color: "#475569",
                                    fontSize: "clamp(16px, 4vw, 20px)",
                                    lineHeight: 1.6,
                                    maxWidth: "540px",
                                    margin: "0 auto 40px",
                                }}
                            >
                                {email ? (
                                    <>We&apos;ve sent a calendar invite to <strong style={{ color: "#0A1128", fontWeight: 600 }}>{email}</strong> with the Google Meet link.</>
                                ) : (
                                    <>We&apos;ve sent a calendar invite to your inbox with the Google Meet link.</>
                                )}
                                {formattedDate ? ` See you on ${formattedDate}.` : " See you soon."}
                            </p>

                            {/* ── Illustrated booking confirmation card ── */}
                            <div
                                style={{
                                    maxWidth: "480px",
                                    margin: "0 auto",
                                    backgroundColor: "#fff",
                                    borderRadius: "20px",
                                    border: "1px solid #e5e7eb",
                                    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                                    overflow: "hidden",
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: "#f8fafc",
                                        padding: "32px 24px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: "12px",
                                        borderBottom: "1px solid #f1f5f9",
                                    }}
                                >
                                    <img
                                        src="/AiClarity/aditya-photo.png"
                                        alt="Aditya AI"
                                        style={{ width: "120px", height: "auto", mixBlendMode: "multiply", opacity: 0.9 }}
                                    />
                                </div>

                                <div style={{ padding: "20px 24px" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            padding: "12px 16px",
                                            backgroundColor: "#EEF4FF",
                                            border: "1px solid #dbeafe",
                                            borderRadius: "12px",
                                            marginBottom: "16px",
                                        }}
                                    >
                                        <svg viewBox="0 0 20 20" fill="none" style={{ width: 20, height: 20, flexShrink: 0 }}>
                                            <rect x="2" y="4" width="16" height="14" rx="3" stroke="#2563eb" strokeWidth="1.5" />
                                            <path d="M6 2v3M14 2v3M2 9h16" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        <div>
                                            <p style={{ fontSize: "11px", color: "#2563eb", fontWeight: 700, marginBottom: "2px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Next Step</p>
                                            <p style={{ fontSize: "14px", color: "#0A1128", fontWeight: 600 }}>Scroll down to view what to prepare</p>
                                        </div>
                                    </div>
                                    <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.6, textAlign: "center" }}>
                                        No presentations or decks required.
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
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
                                We build AI systems that run{" "}
                                <span style={{ color: "#2563eb" }}>parts of your business</span>{" "}
                                autonomously.
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
                                Not tools. Not demos. Production-grade AI systems that talk to your customers, remember every interaction, and take action — without you in the loop.
                            </p>

                            {/* CTA area */}
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
                        </>
                    )}
                </section>

                {/* ═══════════════════════════════════════════════════  */}
                {/* MEET THE FOUNDER                                     */}
                {/* ═══════════════════════════════════════════════════  */}
                <section style={{ padding: "0 0 48px" }}>
                    <div
                        className="flex flex-col md:flex-row items-center gap-8"
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: "24px",
                            border: "1px solid #e5e7eb",
                            boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                            padding: "32px",
                        }}
                    >
                        {/* Left: Video */}
                        <div style={{ flex: "0 0 260px", margin: "0 auto", width: "100%", maxWidth: "320px" }}>
                            <div style={{ position: "relative", paddingBottom: "177.78%", height: 0, overflow: "hidden", borderRadius: "16px", backgroundColor: "#000" }}>
                                <iframe
                                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                                    src="https://www.youtube.com/embed/jFnRKUxFBHI?rel=0"
                                    title="Aditya - Founder of Agentic AI Labs"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        {/* Right: Text */}
                        <div style={{ flex: 1 }}>
                            <SectionLabel>Who you&apos;ll meet on the call</SectionLabel>
                            <h2 style={{
                                fontFamily: "var(--font-mondwest), serif",
                                fontSize: "clamp(24px, 6vw, 42px)",
                                fontWeight: 700,
                                color: "#0A1128",
                                lineHeight: 1.15,
                                marginBottom: "20px",
                            }}>
                                (say hi) to Aditya
                            </h2>
                            <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.7, marginBottom: "16px" }}>
                                Hi, I&apos;m Aditya, the founder of Agentic AI Labs. I&apos;ll be the one you&apos;ll speak with on our Clarity Call.
                            </p>
                            <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.7, marginBottom: "24px" }}>
                                My job right now isn&apos;t to sell you software — it&apos;s to figure out where your business is literally losing hours every single week, and map out exactly how we can automate it. No frills, no presentations. I look forward to meeting you.
                            </p>
                            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                                <span style={{ color: "#FCCA07", fontSize: "16px" }}>★★★</span>
                                <span style={{ fontSize: "12px", fontWeight: 600, color: "#2563eb", textTransform: "uppercase", letterSpacing: "0.05em" }}>Founder & Lead Engineer</span>
                            </div>
                        </div>
                    </div>
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
                {/* MEET THE TEAM                                        */}
                {/* ═══════════════════════════════════════════════════  */}
                <section style={{ padding: "48px 0" }}>
                    <div style={{ textAlign: "center", marginBottom: "32px" }}>
                        <SectionLabel>Behind the systems</SectionLabel>
                        <h2 style={{
                            fontFamily: "var(--font-mondwest), serif",
                            fontSize: "clamp(24px, 6vw, 42px)",
                            fontWeight: 700,
                            color: "#0A1128",
                            marginBottom: "8px",
                            lineHeight: 1.15,
                        }}>
                            (say hi) to our team.
                        </h2>
                        <p style={{ fontSize: "16px", color: "#475569" }}>We are engineers, builders, and operators.</p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        {/* Video */}
                        <div style={{
                            width: "100%",
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                            backgroundColor: "#000",
                            border: "1px solid #e5e7eb",
                        }}>
                            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                                <iframe
                                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                                    src="https://www.youtube.com/embed/k9mjlkEDkGk?rel=0"
                                    title="The Team behind Agentic AI Labs"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        {/* Image */}
                        <div style={{
                            width: "100%",
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                            backgroundColor: "#fff",
                            border: "1px solid #e5e7eb",
                        }}>
                            <img
                                src="/AiClarity/team-illustration.png"
                                alt="Agentic AI Labs Team"
                                style={{ width: "100%", height: "auto", display: "block" }}
                            />
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════  */}
                {/* TESTIMONIALS                                         */}
                {/* ═══════════════════════════════════════════════════  */}
                <section
                    style={{
                        backgroundColor: "#F9F6F4",
                        width: "calc(100% + 32px)",
                        marginLeft: "-16px",
                        marginRight: "-16px",
                        padding: "64px 16px",
                    }}
                >
                    <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                        <div style={{ textAlign: "center", marginBottom: "40px" }}>
                            <SectionLabel>What founders say</SectionLabel>
                            <h2 style={{
                                fontFamily: "var(--font-mondwest), serif",
                                fontSize: "clamp(24px, 6vw, 42px)",
                                fontWeight: 700,
                                color: "#0A1128",
                            }}>
                                Proven results. Real clients.
                            </h2>
                        </div>

                        {/* Videos Grid */}
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "24px",
                            marginBottom: "32px",
                        }}>
                            <div style={{ borderRadius: "16px", overflow: "hidden", backgroundColor: "#000", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                                <video
                                    src="https://d34gt69eepjr0b.cloudfront.net/aiden_testimonial.mp4"
                                    controls
                                    playsInline
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: "block" }}
                                />
                            </div>
                            <div style={{ borderRadius: "16px", overflow: "hidden", backgroundColor: "#000", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                                <video
                                    src="https://d34gt69eepjr0b.cloudfront.net/olu_2f.mp4"
                                    controls
                                    playsInline
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: "block" }}
                                />
                            </div>
                        </div>

                        {/* Text grid */}
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "20px",
                        }}>
                            {[
                                {
                                    quote: "Aditya definitely knows his stuff when it comes to AI and development. He brought strong technical expertise to the table and helped guide us through some complex systems with clarity and precision. It was a smooth and productive experience working with him, and I appreciated his thoughtful input throughout the project. Would absolutely recommend him to anyone needing high-level AI or dev support!",
                                    name: "Founder",
                                    role: "AI Integration Client"
                                },
                                {
                                    quote: "Aditya helped me save tremendous amout of time with his expertise. I highly recommend him.",
                                    name: "Founder",
                                    role: "Operations Client"
                                },
                                {
                                    quote: "These guys are super helpful and communicative! Definitely consider them on your next AI build or MVP.",
                                    name: "Founder",
                                    role: "Startup Client"
                                }
                            ].map((t, i) => (
                                <div key={i} style={{
                                    backgroundColor: "#fff",
                                    borderRadius: "16px",
                                    border: "1px solid #e5e7eb",
                                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                                    padding: "24px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }}>
                                    <div>
                                        <div style={{ color: "#FCCA07", fontSize: "14px", letterSpacing: "2px", marginBottom: "12px" }}>★★★★★</div>
                                        <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.6, marginBottom: "20px", fontStyle: "italic" }}>
                                            &ldquo;{t.quote}&rdquo;
                                        </p>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: "14px", fontWeight: 700, color: "#0A1128" }}>{t.name}</p>
                                        <p style={{ fontSize: "12px", color: "#6b7280" }}>{t.role}</p>
                                    </div>
                                </div>
                            ))}
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
                                        marginBottom: "6px",
                                    }}
                                >
                                    {firstName ? `${firstName}, here's` : "Here's"} how to prepare.
                                </h2>
                                <p style={{ fontSize: "15px", color: "#6b7280", marginBottom: "24px" }}>3 things to think about before we meet.</p>

                                {/* Illustrated prep checklist */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "12px", textAlign: "left", marginBottom: "20px" }}>
                                    {[
                                        {
                                            icon: <BriefcaseIcon />,
                                            bg: "#EEF4FF",
                                            border: "#dbeafe",
                                            label: "Your daily operations",
                                            desc: "What does your team actually do every day that eats up time? Answering leads? Scheduling? Follow-ups? That's our starting point.",
                                        },
                                        {
                                            icon: <PainIcon />,
                                            bg: "#FFF5F5",
                                            border: "#fecaca",
                                            label: "Your biggest bottleneck",
                                            desc: "One thing — if it ran on autopilot — would change the week. That's what we'll map first.",
                                        },
                                        {
                                            icon: <IdeaIcon />,
                                            bg: "#FFFBEB",
                                            border: "#fde68a",
                                            label: "Any AI ideas you've had",
                                            desc: "You've probably thought \"I wish AI could do ___\" — bring that gut sense. Even half-formed. We'll sharpen it.",
                                        },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                backgroundColor: item.bg,
                                                border: `1px solid ${item.border}`,
                                                borderRadius: "14px",
                                                padding: "16px 18px",
                                                display: "flex",
                                                gap: "14px",
                                                alignItems: "flex-start",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: "10px",
                                                    backgroundColor: "#fff",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    flexShrink: 0,
                                                    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                                                }}
                                            >
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p style={{ fontSize: "14px", fontWeight: 700, color: "#0A1128", marginBottom: "4px" }}>{item.label}</p>
                                                <p style={{ fontSize: "13px", color: "#475569", lineHeight: 1.6 }}>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
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
