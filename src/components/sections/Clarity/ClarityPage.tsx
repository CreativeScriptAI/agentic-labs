import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ClarityPageProps } from "src/pages/clarity/index";
import ctaLinks from "src/constants/cta-links";

/* ─── design tokens ─────────────────────────────────────────── */
const CAL_LINK = ctaLinks.aiClarityWorkshop;

/* ─── tiny helpers ───────────────────────────────────────────── */
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

/* ─── intersection-observer fade-in hook ────────────────────── */
function useFadeIn() {
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
            { threshold: 0.12 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

/* ─── animated counter ──────────────────────────────────────── */
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
                    const step = Math.ceil(to / 60);
                    const id = setInterval(() => {
                        start += step;
                        if (start >= to) {
                            setVal(to);
                            clearInterval(id);
                        } else {
                            setVal(start);
                        }
                    }, 20);
                }
            },
            { threshold: 0.5 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [to]);
    return (
        <span ref={ref}>
            {val}
            {suffix}
        </span>
    );
}

/* ─── section wrapper ────────────────────────────────────────── */
function Section({
    children,
    className = "",
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) {
    const ref = useFadeIn();
    return (
        <div
            id={id}
            ref={ref}
            className={className}
            style={{
                opacity: 0,
                transform: "translateY(28px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
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
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        .clarity-root {
          font-family: 'DM Sans', sans-serif;
          background: #FAFAF8;
          color: #111111;
          min-height: 100vh;
        }

        .clarity-serif {
          font-family: 'Instrument Serif', Georgia, serif;
        }

        /* ── top bar ── */
        .clarity-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid #E8E6E1;
          background: #FAFAF8;
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(8px);
        }

        .clarity-logo {
          font-family: 'Instrument Serif', serif;
          font-size: 17px;
          color: #111;
          text-decoration: none;
          letter-spacing: -0.01em;
        }

        .clarity-cta-mini {
          background: #111;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 9px 18px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: background 0.2s;
        }

        .clarity-cta-mini:hover { background: #2a2a2a; }

        /* ── layout ── */
        .clarity-inner {
          max-width: 680px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── confirmation banner ── */
        .clarity-confirm-banner {
          background: #111;
          color: #fff;
          text-align: center;
          padding: 14px 24px;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.01em;
        }

        .clarity-confirm-banner span {
          opacity: 0.7;
          font-weight: 400;
        }

        /* ── trust badge ── */
        .clarity-trust-badge {
          text-align: center;
          padding: 36px 0 8px;
          font-size: 13px;
          color: #888;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ── hero ── */
        .clarity-hero {
          padding: 28px 0 40px;
          text-align: center;
        }

        .clarity-hero h1 {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(32px, 6vw, 52px);
          line-height: 1.12;
          letter-spacing: -0.025em;
          color: #0D0D0D;
          margin: 0 0 18px;
          font-weight: 400;
        }

        .clarity-hero h1 em {
          font-style: italic;
          color: #555;
        }

        .clarity-hero-sub {
          font-size: 16px;
          line-height: 1.65;
          color: #555;
          max-width: 520px;
          margin: 0 auto 32px;
        }

        /* ── divider ── */
        .clarity-divider {
          border: none;
          border-top: 1px solid #E8E6E1;
          margin: 40px 0;
        }

        /* ── section label ── */
        .clarity-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 16px;
        }

        /* ── checkmarks ── */
        .clarity-checks {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .clarity-checks li {
          display: flex;
          gap: 12px;
          font-size: 15px;
          line-height: 1.55;
          color: #222;
        }

        .clarity-checks .ck-icon {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          background: #1a9e52;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
        }

        .clarity-checks .ck-icon svg {
          width: 10px;
          height: 10px;
        }

        /* ── stat bar ── */
        .clarity-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #E8E6E1;
          border: 1px solid #E8E6E1;
          border-radius: 10px;
          overflow: hidden;
          margin: 0;
        }

        .clarity-stat {
          background: #fff;
          padding: 24px 20px;
          text-align: center;
        }

        .clarity-stat-num {
          font-family: 'Instrument Serif', serif;
          font-size: 38px;
          line-height: 1;
          color: #0D0D0D;
          display: block;
          margin-bottom: 4px;
        }

        .clarity-stat-label {
          font-size: 12px;
          color: #888;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* ── client strip ── */
        .clarity-clients {
          text-align: center;
          font-size: 14px;
          color: #888;
          padding: 16px 0;
          letter-spacing: 0.04em;
        }

        /* ── testimonial ── */
        .clarity-testimonial {
          background: #fff;
          border: 1px solid #E8E6E1;
          border-radius: 12px;
          padding: 32px;
          position: relative;
        }

        .clarity-testimonial blockquote {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(17px, 3vw, 22px);
          font-style: italic;
          line-height: 1.5;
          color: #1a1a1a;
          margin: 0 0 20px;
        }

        .clarity-testimonial cite {
          font-size: 13px;
          color: #888;
          font-style: normal;
        }

        .clarity-quote-mark {
          font-family: Georgia, serif;
          font-size: 80px;
          line-height: 0.6;
          color: #E8E6E1;
          position: absolute;
          top: 24px;
          left: 28px;
          pointer-events: none;
          user-select: none;
        }

        /* ── steps ── */
        .clarity-steps {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .clarity-step {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .clarity-step-num {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1.5px solid #E8E6E1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 600;
          color: #555;
          margin-top: 2px;
        }

        .clarity-step-body h3 {
          font-size: 15px;
          font-weight: 600;
          color: #111;
          margin: 0 0 4px;
        }

        .clarity-step-body p {
          font-size: 14px;
          color: #666;
          line-height: 1.55;
          margin: 0;
        }

        /* ── final cta ── */
        .clarity-final-cta {
          background: #111;
          border-radius: 14px;
          padding: 48px 36px;
          text-align: center;
          color: #fff;
        }

        .clarity-final-cta h2 {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(24px, 4.5vw, 38px);
          line-height: 1.15;
          font-weight: 400;
          margin: 0 0 12px;
          letter-spacing: -0.02em;
        }

        .clarity-final-cta p {
          font-size: 15px;
          color: rgba(255,255,255,0.65);
          line-height: 1.6;
          margin: 0 0 28px;
          max-width: 420px;
          margin-left: auto;
          margin-right: auto;
        }

        .clarity-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          color: #111;
          border: none;
          border-radius: 8px;
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          width: 100%;
          max-width: 400px;
        }

        .clarity-btn:hover {
          background: #f0ede8;
          transform: translateY(-1px);
        }

        .clarity-risk-reversal {
          margin-top: 14px;
          font-size: 12.5px;
          color: rgba(255,255,255,0.45);
          line-height: 1.5;
        }

        /* ── footer ── */
        .clarity-footer {
          padding: 40px 0 60px;
          text-align: center;
          font-size: 13px;
          color: #888;
          line-height: 1.8;
        }

        .clarity-footer a {
          color: #555;
          text-decoration: none;
        }

        .clarity-footer a:hover { text-decoration: underline; }

        /* ── already-booked note ── */
        .clarity-already-note {
          background: #f0f7f3;
          border: 1px solid #c2dece;
          border-radius: 8px;
          padding: 16px 20px;
          font-size: 14px;
          color: #1a6040;
          text-align: center;
          line-height: 1.6;
        }

        .clarity-already-note strong { font-weight: 600; }

        @media (max-width: 480px) {
          .clarity-topbar { padding: 16px 16px; }
          .clarity-inner { padding: 0 16px; }
          .clarity-final-cta { padding: 36px 20px; }
          .clarity-testimonial { padding: 24px 20px; }
          .clarity-stats { grid-template-columns: 1fr; }
        }
      `}</style>

            <div className="clarity-root">

                {/* ── Sticky Top Bar (logo + mini CTA) ── */}
                <header className="clarity-topbar">
                    <Link href="/" className="clarity-logo">
                        Agentic AI Labs
                    </Link>
                    {!isBooked && (
                        <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="clarity-cta-mini">
                            Book Free Call →
                        </a>
                    )}
                </header>

                {/* ── Post-booking confirmation banner ── */}
                {isBooked && (
                    <div className="clarity-confirm-banner">
                        ✓ You&apos;re confirmed{firstName ? `, ${firstName}` : ""}
                        {formattedDate && (
                            <>
                                {" "}
                                <span>· {formattedDate}</span>
                            </>
                        )}
                        &nbsp;— a confirmation is on its way to your inbox
                    </div>
                )}

                <div className="clarity-inner">

                    {/* ── Trust Badge ── */}
                    <Section>
                        <p className="clarity-trust-badge">
                            ★★★★★ &nbsp; Trusted by founders in healthcare, real estate, B2B SaaS &amp; home services
                        </p>
                    </Section>

                    {/* ── HERO ── */}
                    <Section className="clarity-hero">
                        {isBooked ? (
                            <h1>
                                {firstName ? `${firstName}, your call` : "Your call"} is locked in.
                                <br />
                                <em>Here&apos;s what we do — and why it matters.</em>
                            </h1>
                        ) : (
                            <h1>
                                We build AI systems that run
                                <br />
                                <em>parts of your business autonomously.</em>
                            </h1>
                        )}

                        <p className="clarity-hero-sub">
                            {isBooked
                                ? "Before we meet — here's exactly what Agentic AI Labs does, how we work, and what to expect on the call. No slides. No pitch. Just a straight answer on where AI fits in your operations."
                                : "Not tools. Not demos. Systems that work in production — 24/7, without you in the loop. Book your free 30-minute AI Clarity Call and walk away with a plan, not a pitch."}
                        </p>

                        {isBooked ? (
                            <div className="clarity-already-note">
                                <strong>You&apos;re all set.</strong> Scroll down to understand exactly what we build and what to prepare before the call.
                            </div>
                        ) : (
                            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="clarity-btn" style={{ background: "#111", color: "#fff", maxWidth: "380px" }}>
                                → Book Your Free AI Clarity Call
                            </a>
                        )}
                    </Section>

                    <hr className="clarity-divider" />

                    {/* ── WHY FOUNDERS WORK WITH US ── */}
                    <Section>
                        <p className="clarity-label">Why Agentic AI Labs</p>
                        <h2 className="clarity-serif" style={{ fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 400, lineHeight: 1.2, marginBottom: "24px", letterSpacing: "-0.02em" }}>
                            Built by engineers.<br />Trusted by founders.
                        </h2>
                        <ul className="clarity-checks">
                            {[
                                "3 technical co-founders — we build, we don't just consult.",
                                "50+ AI systems shipped across healthcare, real estate, SaaS & home services.",
                                "Within 48 hours of kickoff, most clients have a working prototype.",
                                "We build systems that work in production — not demos that break with real customers.",
                                "After go-live: 30 days of active monitoring. No disappearing act.",
                            ].map((item, i) => (
                                <li key={i}>
                                    <span className="ck-icon">
                                        <svg viewBox="0 0 10 10" fill="none">
                                            <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <hr className="clarity-divider" />

                    {/* ── STATS BAR ── */}
                    <Section>
                        <div className="clarity-stats">
                            <div className="clarity-stat">
                                <span className="clarity-stat-num">
                                    <Counter to={50} suffix="+" />
                                </span>
                                <span className="clarity-stat-label">Projects</span>
                            </div>
                            <div className="clarity-stat">
                                <span className="clarity-stat-num">
                                    <Counter to={4} suffix="+" />
                                </span>
                                <span className="clarity-stat-label">Industries</span>
                            </div>
                            <div className="clarity-stat">
                                <span className="clarity-stat-num">48hrs</span>
                                <span className="clarity-stat-label">To Kickoff</span>
                            </div>
                        </div>
                        <p className="clarity-clients" style={{ marginTop: "16px" }}>
                            Healthcare · Real Estate · B2B SaaS · Home Services
                        </p>
                    </Section>

                    <hr className="clarity-divider" />

                    {/* ── TRUSTED BY / CLIENTS ── */}
                    <Section>
                        <p className="clarity-label">Worked with founders in</p>
                        <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.6", margin: 0 }}>
                            PatientlyAI — an AI receptionist that doubled appointment booking rates, running 24/7 without a single human receptionist in the loop. Built and deployed in under 2 weeks.
                        </p>
                    </Section>

                    <hr className="clarity-divider" />

                    {/* ── TESTIMONIAL ── */}
                    <Section>
                        <p className="clarity-label">What founders say</p>
                        <div className="clarity-testimonial">
                            <span className="clarity-quote-mark" aria-hidden="true">&ldquo;</span>
                            <blockquote>
                                Within 48 hours they built an AI caller that doubled our booking rate. It feels like having a full-time receptionist who never sleeps.
                            </blockquote>
                            <cite>— Aiden, Founder · Healthcare industry</cite>
                        </div>
                    </Section>

                    <hr className="clarity-divider" />

                    {/* ── WHAT HAPPENS ON THE CALL ── */}
                    <Section id="what-to-expect">
                        <p className="clarity-label">What to expect</p>
                        <h2 className="clarity-serif" style={{ fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 400, lineHeight: 1.2, marginBottom: "28px", letterSpacing: "-0.02em" }}>
                            30 minutes. A plan. Zero pitch.
                        </h2>
                        <div className="clarity-steps">
                            {[
                                {
                                    title: "We look at your business and your workflows.",
                                    desc: "Tell us what your team does every day. We listen first — no script, no slide deck.",
                                },
                                {
                                    title: "We map your #1 AI opportunity — ranked by time and money saved.",
                                    desc: "Every business has one or two workflows where AI can do the heavy lifting. We find yours.",
                                },
                                {
                                    title: "You leave with a clear \"build this first\" plan.",
                                    desc: "Not a proposal. Not a follow-up. A plain-language plan you can act on — with us or on your own.",
                                },
                            ].map((step, i) => (
                                <div key={i} className="clarity-step">
                                    <span className="clarity-step-num">{i + 1}</span>
                                    <div className="clarity-step-body">
                                        <h3>{step.title}</h3>
                                        <p>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <hr className="clarity-divider" />

                    {/* ── FINAL CTA ── */}
                    {!isBooked && (
                        <Section>
                            <div className="clarity-final-cta">
                                <h2>Your business runs.<br />Your AI should too.</h2>
                                <p>
                                    Free. 30 minutes. Specific to your business.
                                    No pitch. No pressure. Just a straight answer on where AI fits in your operations.
                                </p>
                                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="clarity-btn">
                                    → Book Your Free AI Clarity Call
                                </a>
                                <p className="clarity-risk-reversal">
                                    Worst case: 30 minutes. You know where you stand.<br />
                                    Best case: You find an opportunity worth $X,XXX/month.
                                </p>
                            </div>
                        </Section>
                    )}

                    {/* ── If already booked — replace CTA with a prep reminder ── */}
                    {isBooked && (
                        <Section>
                            <div className="clarity-final-cta">
                                <h2>One thing to bring to the call.</h2>
                                <p>
                                    Think of your top 3 repetitive tasks — the ones you or your team do every day that could theoretically run without you. That&apos;s all we need to make this call genuinely useful.
                                </p>
                                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: 0 }}>
                                    Questions before the call? Reply to your confirmation email — Aditya reads every one.
                                </p>
                            </div>
                        </Section>
                    )}

                    {/* ── FOOTER CLOSE ── */}
                    <Section>
                        <div className="clarity-footer">
                            <p style={{ marginBottom: "8px", color: "#333", fontStyle: "italic", fontFamily: "'Instrument Serif', serif", fontSize: "16px" }}>
                                — Aditya
                            </p>
                            <p>
                                Founder, Agentic AI Labs<br />
                                <a href="https://www.tryagentikai.com">tryagentikai.com</a>
                            </p>
                        </div>
                    </Section>

                </div>
            </div>
        </>
    );
}
