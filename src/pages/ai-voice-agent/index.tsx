import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import MetaConfig from "src/components/MetaConfig";
import { NextPageWithLayout } from "../../types";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const CAL_LINK =
  "https://cal.com/free-ai-clarity-call-avoid-costly-automation-mistakes/30min";
const CANONICAL_URL = "https://www.tryagentikai.com/ai-voice-agent";
const STATS = {
  businessesLive: null as string | null,
  callsAnswered: null as string | null,
  demoNumber: null as string | null,
};

// ─── Scroll helper ────────────────────────────────────────────────────────────
function smoothScrollTo(id: string) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - 68;
  window.scrollTo({ top: y, behavior: "smooth" });
}

// ─── Shared primitives ────────────────────────────────────────────────────────
const Container = ({
  children,
  className = "",
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}) => {
  const maxWidths = { sm: "max-w-3xl", md: "max-w-5xl", lg: "max-w-6xl" };
  return (
    <div className={`${maxWidths[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

const SectionLabel = ({ text, dark = false }: { text: string; dark?: boolean }) => (
  <p
    className={`text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2 ${
      dark ? "text-blue-400" : "text-blue-600"
    }`}
  >
    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dark ? "bg-emerald-400" : "bg-emerald-500"}`} />
    {text}
  </p>
);

const PrimaryBtn = ({
  href,
  label,
  fullWidth = false,
  onClick,
  size = "md",
}: {
  href?: string;
  label: string;
  fullWidth?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}) => {
  const sizeMap = {
    sm: "px-5 py-2.5 text-sm min-h-[40px]",
    md: "px-7 py-3.5 text-sm min-h-[48px]",
    lg: "px-8 py-4 text-base min-h-[52px]",
  };
  const cls = `inline-flex items-center justify-center rounded-lg bg-[#FCCA07] text-[#0A1128] font-semibold transition-all hover:bg-[#f0bd00] active:scale-[0.98] cursor-pointer ${sizeMap[size]} ${fullWidth ? "w-full" : ""}`;
  if (onClick) return <button onClick={onClick} className={cls}>{label}</button>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{label}</a>;
};

const OutlineBtn = ({
  href,
  label,
  dark = false,
  fullWidth = false,
  onClick,
  size = "md",
}: {
  href?: string;
  label: string;
  dark?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}) => {
  const sizeMap = {
    sm: "px-5 py-2.5 text-sm min-h-[40px]",
    md: "px-7 py-3.5 text-sm min-h-[48px]",
    lg: "px-8 py-4 text-base min-h-[52px]",
  };
  const cls = `inline-flex items-center justify-center rounded-lg border-2 font-semibold transition-all active:scale-[0.98] cursor-pointer ${
    dark
      ? "border-white/40 text-white hover:border-white hover:bg-white/10"
      : "border-[#0A1128]/20 text-[#0A1128] hover:border-[#0A1128] hover:bg-[#0A1128] hover:text-white"
  } ${sizeMap[size]} ${fullWidth ? "w-full" : ""}`;
  if (onClick) return <button onClick={onClick} className={cls}>{label}</button>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{label}</a>;
};

// ─── DEMO DATA ────────────────────────────────────────────────────────────────
const DEMO_TABS = ["dental", "realestate", "hiring"] as const;
type DemoTab = typeof DEMO_TABS[number];

const DEMOS: Record<DemoTab, {
  label: string;
  cardLabel: string;
  color: string;
  audioSrc: string;
  transcript: { speaker: "Caller" | "Dhvani"; text: string }[];
}> = {
  dental: {
    label: "Dental Clinic",
    cardLabel: "Dental & Medical",
    color: "#FF5500",
    audioSrc: "/audio/demo-dental.mp3",
    transcript: [
      { speaker: "Caller", text: "Hi, I wanted to book an appointment for a dental check-up." },
      { speaker: "Dhvani", text: "Of course! Are you a new patient or have you visited us before?" },
      { speaker: "Caller", text: "I'm a new patient, actually." },
      { speaker: "Dhvani", text: "Great! We have slots tomorrow at 10am or Thursday at 3pm. Which works better for you?" },
      { speaker: "Caller", text: "Thursday at 3pm works perfectly." },
      { speaker: "Dhvani", text: "Done! Thursday 3pm is confirmed. You'll get a WhatsApp reminder 2 hours before. See you then!" },
    ],
  },
  realestate: {
    label: "Real Estate",
    cardLabel: "Real Estate",
    color: "#3300FF",
    audioSrc: "/audio/demo-realestate.mp3",
    transcript: [
      { speaker: "Caller", text: "I saw your listing for the 2BHK in Bandra. Is it still available?" },
      { speaker: "Dhvani", text: "Yes it is! That flat is listed at ₹1.2 crore. May I know your budget range?" },
      { speaker: "Caller", text: "Somewhere between 1 to 1.5 crore." },
      { speaker: "Dhvani", text: "That fits perfectly. When would you like to schedule a viewing?" },
      { speaker: "Caller", text: "This Saturday if possible." },
      { speaker: "Dhvani", text: "Saturday 11am is confirmed. I'll send the address and agent details to your WhatsApp right now." },
    ],
  },
  hiring: {
    label: "Hiring Agency",
    cardLabel: "Hiring & Staffing",
    color: "#FF0055",
    audioSrc: "/audio/demo-hiring.mp3",
    transcript: [
      { speaker: "Caller", text: "I'm calling about the warehouse supervisor position." },
      { speaker: "Dhvani", text: "Thanks for calling! Do you have experience managing a warehouse team?" },
      { speaker: "Caller", text: "Yes, I've managed a 15-person team for about 3 years." },
      { speaker: "Dhvani", text: "Excellent. Are you available to start within the next two weeks?" },
      { speaker: "Caller", text: "Yes, I'm available immediately." },
      { speaker: "Dhvani", text: "Perfect. Our recruiter will review your profile — expect a call within 24 hours. Thank you!" },
    ],
  },
};

// ─── HERO ─────────────────────────────────────────────────────────────────────
const Hero = ({ onCardPlay }: { onCardPlay: (tab: DemoTab) => void }) => (
  <section className="bg-[#0A1128] pt-32 pb-20 sm:pt-36 sm:pb-24 relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
    {/* Grain texture overlay — Lomo/Organic Gradients aesthetic */}
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
        opacity: 0.045,
        mixBlendMode: "overlay",
      }}
    />
    <Container size="lg" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div>
          <SectionLabel text="Guftugu — AI Conversation System by Agentic AI Labs" dark />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-6">
            The call came in at 10pm.
            <br />
            <span className="text-white/70">You were asleep.</span>
            <br />
            Your competitor wasn&apos;t.
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-xl mb-2 leading-relaxed">
            Guftugu answers every call and follows up on WhatsApp. Automatically. In Hindi or English. 24/7.
          </p>
          <p className="text-base text-white/50 mb-10">
            Dhvani handles the voice. Sandesh handles the message. Together, nothing gets missed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
            <PrimaryBtn href={CAL_LINK} label="Book a Discovery Call" size="lg" />
            {STATS.demoNumber ? (
              <OutlineBtn
                href={`tel:${STATS.demoNumber}`}
                label={`Call our AI: ${STATS.demoNumber}`}
                dark
                size="lg"
              />
            ) : (
              <button
                disabled
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white/20 text-white/40 text-base font-medium min-h-[52px] cursor-not-allowed"
              >
                Demo number coming soon
              </button>
            )}
          </div>
          <p className="text-sm text-white/40">
            We learn your business first. Then we build.{" "}
            <span className="text-white/60 font-medium">Live in 7 days.</span>
          </p>
        </div>

        {/* Right: Aura card collage */}
        <div className="relative hidden lg:block h-[600px]" style={{ perspective: "1000px" }}>
          {/* Card 1 — Dental · orange + yellow */}
          <div className="absolute" style={{ top: "10%", right: "20%", transform: "rotate(8deg)", zIndex: 3 }}>
            <div className="bg-white w-[260px] h-[360px] p-4 flex flex-col border border-black/[0.08]" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
              <div className="flex justify-between text-[8px] uppercase tracking-[0.05em] border-b border-gray-100 pb-2 mb-3 text-gray-500 font-semibold">
                <span>Dental &amp; Medical</span>
                <span>AI-001</span>
              </div>
              <div className="flex-1 relative overflow-hidden mb-3" style={{ background: "#fafafa", borderRadius: "2px", isolation: "isolate" }}>
                <div className="animate-aura-breath absolute rounded-full" style={{ top: 0, left: 0, width: "150%", height: "100%", background: "#ff5500", filter: "blur(35px)", mixBlendMode: "multiply", opacity: 0.8 }} />
                <div className="animate-aura-breath absolute rounded-full" style={{ bottom: 0, right: 0, width: "100%", height: "150%", background: "#ffcc00", filter: "blur(35px)", mixBlendMode: "multiply", opacity: 0.8, animationDelay: "-2s" }} />
              </div>
              <div className="mt-auto border-t border-gray-100 pt-3 flex justify-between items-end">
                <div className="font-eb-garamond italic text-[#111111] text-xl leading-none">AI Receptionist</div>
                <button
                  onClick={() => { onCardPlay("dental"); document.getElementById("hear-it")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
                  style={{ width: 28, height: 28, borderRadius: "50%", background: "#FF5500", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 8px rgba(255,85,0,0.4)" }}
                  title="Hear this agent"
                >
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="white"><path d="M0 0L10 6L0 12V0Z"/></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 — Hiring · pink + cyan */}
          <div className="absolute" style={{ top: "30%", right: "42%", transform: "rotate(-12deg) scale(0.95)", zIndex: 2 }}>
            <div className="bg-white w-[260px] h-[360px] p-4 flex flex-col border border-black/[0.08]" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
              <div className="flex justify-between text-[8px] uppercase tracking-[0.05em] border-b border-gray-100 pb-2 mb-3 text-gray-500 font-semibold">
                <span>Hiring &amp; Staffing</span>
                <span>AI-002</span>
              </div>
              <div className="flex-1 relative overflow-hidden mb-3" style={{ background: "#fafafa", borderRadius: "2px", isolation: "isolate" }}>
                <div className="animate-aura-breath absolute rounded-full" style={{ top: "-10%", left: "-10%", width: "140%", height: "140%", background: "#ff0055", filter: "blur(35px)", mixBlendMode: "multiply", opacity: 0.8 }} />
                <div className="animate-aura-breath absolute rounded-full" style={{ bottom: "-20%", right: "-20%", width: "120%", height: "120%", background: "#00ccff", filter: "blur(35px)", mixBlendMode: "multiply", opacity: 0.8, animationDelay: "-4s" }} />
              </div>
              <div className="mt-auto border-t border-gray-100 pt-3 flex justify-between items-end">
                <div className="font-eb-garamond italic text-[#111111] text-xl leading-none">AI Interviewer</div>
                <button
                  onClick={() => { onCardPlay("hiring"); document.getElementById("hear-it")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
                  style={{ width: 28, height: 28, borderRadius: "50%", background: "#FF0055", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 8px rgba(255,0,85,0.4)" }}
                  title="Hear this agent"
                >
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="white"><path d="M0 0L10 6L0 12V0Z"/></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 — Real Estate · blue + teal */}
          <div className="absolute" style={{ top: "48%", right: "8%", transform: "rotate(15deg) scale(0.9)", zIndex: 1 }}>
            <div className="bg-white w-[260px] h-[360px] p-4 flex flex-col border border-black/[0.08]" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
              <div className="flex justify-between text-[8px] uppercase tracking-[0.05em] border-b border-gray-100 pb-2 mb-3 text-gray-500 font-semibold">
                <span>Real Estate</span>
                <span>AI-003</span>
              </div>
              <div className="flex-1 relative overflow-hidden mb-3" style={{ background: "#fafafa", borderRadius: "2px", isolation: "isolate" }}>
                <div className="animate-aura-breath absolute rounded-full" style={{ top: "-20%", right: "-20%", width: "160%", height: "160%", background: "#3300ff", filter: "blur(35px)", mixBlendMode: "multiply", opacity: 0.8 }} />
                <div className="animate-aura-breath absolute rounded-full" style={{ bottom: "-20%", left: "-20%", width: "140%", height: "140%", background: "#00ffcc", filter: "blur(35px)", mixBlendMode: "multiply", opacity: 0.8, animationDelay: "-1s" }} />
              </div>
              <div className="mt-auto border-t border-gray-100 pt-3 flex justify-between items-end">
                <div className="font-eb-garamond italic text-[#111111] text-xl leading-none">Lead Qualifier</div>
                <button
                  onClick={() => { onCardPlay("realestate"); document.getElementById("hear-it")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
                  style={{ width: 28, height: 28, borderRadius: "50%", background: "#3300FF", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 8px rgba(51,0,255,0.4)" }}
                  title="Hear this agent"
                >
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="white"><path d="M0 0L10 6L0 12V0Z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

// ─── HEAR IT YOURSELF ─────────────────────────────────────────────────────────
const WaveformBars = ({ isPlaying, color }: { isPlaying: boolean; color: string }) => {
  const BAR_COUNT = 28;
  const heights = [30, 55, 70, 45, 80, 60, 90, 40, 75, 50, 85, 35, 65, 95, 45, 70, 55, 80, 40, 65, 50, 90, 35, 75, 60, 85, 45, 70];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 3, height: 48 }}>
      {Array.from({ length: BAR_COUNT }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 3,
            borderRadius: 2,
            background: isPlaying ? color : "#d1d5db",
            height: isPlaying ? `${heights[i % heights.length]}%` : "30%",
            transition: "height 0.15s ease, background 0.3s ease",
            animation: isPlaying ? `waveBar${(i % 4) + 1} ${0.6 + (i % 3) * 0.15}s ease-in-out infinite alternate` : "none",
          }}
        />
      ))}
    </div>
  );
};

const HearItYourselfSection = ({ activeTab, onTabChange }: { activeTab: DemoTab; onTabChange: (t: DemoTab) => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const transcriptRef = useRef<HTMLDivElement | null>(null);
  const demo = DEMOS[activeTab];

  // Reset transcript when tab changes
  useEffect(() => {
    setVisibleMessages(0);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [activeTab]);

  // Auto-scroll transcript
  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  const handlePlay = useCallback(() => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
      return;
    }
    // Try real audio first, fall back to transcript simulation
    const audio = new Audio(demo.audioSrc);
    audioRef.current = audio;
    audio.onloadedmetadata = () => setDuration(audio.duration);
    audio.ontimeupdate = () => setCurrentTime(audio.currentTime);
    audio.onended = () => { setIsPlaying(false); setCurrentTime(0); };
    audio.play().catch(() => {
      // No audio file — simulate with transcript animation only
    });
    setIsPlaying(true);
    // Animate transcript regardless of audio
    setVisibleMessages(0);
    const intervals: ReturnType<typeof setTimeout>[] = [];
    demo.transcript.forEach((_, i) => {
      const t = setTimeout(() => setVisibleMessages(i + 1), i * 2200 + 400);
      intervals.push(t);
    });
    const done = setTimeout(() => setIsPlaying(false), demo.transcript.length * 2200 + 600);
    intervals.push(done);
    return () => intervals.forEach(clearTimeout);
  }, [isPlaying, demo]);

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  return (
    <section id="hear-it" className="py-20 sm:py-24 bg-[#0A1128] relative overflow-hidden">
      {/* Atmospheric colour blobs — Digital Impressionism, shifts with active tab */}
      <div aria-hidden="true" style={{ position: "absolute", top: "-15%", left: "-8%", width: 360, height: 360, borderRadius: "50%", background: demo.color, filter: "blur(90px)", opacity: 0.07, transition: "background 0.6s ease", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", bottom: "-10%", right: "-5%", width: 280, height: 280, borderRadius: "50%", background: demo.color, filter: "blur(80px)", opacity: 0.05, transition: "background 0.6s ease", pointerEvents: "none" }} />
      <Container size="lg">
        <div className="text-center mb-12">
          <SectionLabel text="Hear it yourself" dark />
          <h2 className="text-3xl sm:text-4xl font-eb-garamond italic text-white leading-tight mb-3">
            Don&apos;t trust us. Listen.
          </h2>
          <p className="text-white/50 text-base max-w-lg mx-auto">
            Real conversations. Real industries. This is exactly what your callers will hear.
          </p>
        </div>

        {/* Tab pills */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {(Object.keys(DEMOS) as DemoTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                border: "1.5px solid",
                transition: "all 0.15s ease",
                background: activeTab === tab ? DEMOS[tab].color : "transparent",
                borderColor: activeTab === tab ? DEMOS[tab].color : "rgba(255,255,255,0.2)",
                color: activeTab === tab ? "#fff" : "rgba(255,255,255,0.5)",
              }}
            >
              {DEMOS[tab].label}
            </button>
          ))}
        </div>

        {/* Player card */}
        <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden border border-white/10" style={{ background: "rgba(255,255,255,0.04)" }}>
          {/* Header bar */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: demo.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14v2.92z"/>
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{demo.label} — Dhvani AI</p>
                <p className="text-white/40 text-xs">{isPlaying ? "Live call in progress..." : visibleMessages > 0 ? "Call ended" : "Ready to play"}</p>
              </div>
            </div>
            <div className="text-white/30 text-xs font-mono">
              {duration > 0 ? `${formatTime(currentTime)} / ${formatTime(duration)}` : visibleMessages > 0 ? `${visibleMessages}/${demo.transcript.length} messages` : ""}
            </div>
          </div>

          {/* Transcript */}
          <div
            ref={transcriptRef}
            className="px-6 py-5 space-y-3 overflow-y-auto"
            style={{ minHeight: 240, maxHeight: 280 }}
          >
            {visibleMessages === 0 && !isPlaying && (
              <div className="flex items-center justify-center h-32 text-white/20 text-sm">
                Press play to hear the conversation
              </div>
            )}
            {demo.transcript.slice(0, visibleMessages).map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.speaker === "Dhvani" ? "flex-row" : "flex-row-reverse"}`}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, background: msg.speaker === "Dhvani" ? demo.color : "rgba(255,255,255,0.15)", color: "white" }}>
                  {msg.speaker === "Dhvani" ? "D" : "C"}
                </div>
                <div style={{ maxWidth: "72%", padding: "8px 12px", borderRadius: msg.speaker === "Dhvani" ? "4px 14px 14px 14px" : "14px 4px 14px 14px", background: msg.speaker === "Dhvani" ? `${demo.color}22` : "rgba(255,255,255,0.08)", border: `1px solid ${msg.speaker === "Dhvani" ? `${demo.color}40` : "rgba(255,255,255,0.1)"}` }}>
                  <p className="text-[11px] font-bold mb-0.5" style={{ color: msg.speaker === "Dhvani" ? demo.color : "rgba(255,255,255,0.4)" }}>{msg.speaker}</p>
                  <p className="text-white/80 text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isPlaying && visibleMessages < demo.transcript.length && (
              <div className="flex gap-3">
                <div style={{ width: 28, height: 28, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, background: demo.color, color: "white" }}>D</div>
                <div style={{ padding: "10px 14px", borderRadius: "4px 14px 14px 14px", background: `${demo.color}22`, border: `1px solid ${demo.color}40`, display: "flex", gap: 4, alignItems: "center" }}>
                  {[0, 1, 2].map(d => <div key={d} style={{ width: 6, height: 6, borderRadius: "50%", background: demo.color, animation: `dotPulse 1.2s ease-in-out ${d * 0.2}s infinite` }} />)}
                </div>
              </div>
            )}
          </div>

          {/* Waveform + Controls */}
          <div className="px-6 py-5 border-t border-white/10">
            <div className="mb-4">
              <WaveformBars isPlaying={isPlaying} color={demo.color} />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-white/30 text-xs">
                {isPlaying ? "Dhvani is speaking..." : "Tap play to hear the full call"}
              </p>
              <button
                onClick={handlePlay}
                style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 8, background: isPlaying ? "rgba(255,255,255,0.1)" : demo.color, border: "none", cursor: "pointer", color: "white", fontSize: 13, fontWeight: 600, transition: "all 0.15s ease" }}
              >
                {isPlaying ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                )}
                {isPlaying ? "Pause" : "Play call"}
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-white/25 text-xs mt-6">
          Sample conversation — representative of actual Dhvani agent behavior
        </p>
      </Container>
    </section>
  );
};

// ─── SOCIAL PROOF BAR ─────────────────────────────────────────────────────────
const SocialProofBar = () => {
  const metrics = [
    { value: "7", label: "Days to Go Live" },
    { value: "₹0", label: "To Start" },
    { value: "24/7", label: "Always On" },
    { value: "2s", label: "Answer Time" },
  ];
  return (
    <div className="bg-[#F9F6F4] border-b border-gray-200">
      <Container size="lg">
        <div className="py-10 sm:py-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {metrics.map((m, i) => (
            <div key={i}>
              <p className="font-eb-garamond italic text-5xl sm:text-6xl text-[#0A1128] leading-none">{m.value}</p>
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mt-2">{m.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

// ─── PROBLEM ──────────────────────────────────────────────────────────────────
const ProblemSection = () => {
  const costs = [
    { industry: "1 missed dental patient", cost: "Rs 15,000", note: "in lost revenue" },
    { industry: "1 missed real estate inquiry", cost: "Rs 40,000", note: "in lost commission" },
    { industry: "1 missed AC repair call", cost: "Rs 1,500", note: "gone. Plus a one-star Google review." },
  ];
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <SectionLabel text="The real problem" />
        <h2 className="text-3xl sm:text-4xl font-eb-garamond italic text-[#0A1128] leading-tight mb-6 max-w-2xl">
          You&apos;re not losing leads to bad marketing.
          <br />
          You&apos;re losing them to missed calls.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="text-gray-600 space-y-4 text-base leading-relaxed">
            <p>
              Your receptionist is with a patient. Phone rings.
              <br />
              Your agent is in a showing. Phone rings.
              <br />
              Your recruiter finished for the day. Phone rings.
            </p>
            <p>Nobody answers. The lead waits three seconds. Then calls the next number on Google Maps.</p>
            <p className="font-semibold text-[#0A1128]">That&apos;s not a bad day. That&apos;s Tuesday.</p>
          </div>
          <div className="space-y-3">
            {costs.map((c, i) => (
              <div key={i} className="flex items-start gap-4 bg-red-50 border border-red-100 rounded-xl p-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-400 mt-1.5" />
                <div>
                  <p className="text-sm text-gray-500">{c.industry}</p>
                  <p className="text-xl font-bold text-red-600">
                    {c.cost}{" "}
                    <span className="text-sm font-normal text-gray-500">{c.note}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#F9F6F4] rounded-2xl p-6 sm:p-8 text-gray-600 space-y-3 text-base leading-relaxed">
          <p>It doesn&apos;t end at the missed call.</p>
          <p>The WhatsApp sent at 8pm that nobody replied to.</p>
          <p>The lead who said &quot;call me later.&quot; Nobody did.</p>
          <p>The candidate who applied Monday and got screened Thursday.</p>
          <p className="font-semibold text-[#0A1128]">
            Every one of these is revenue you already earned. Left on the table.
          </p>
        </div>
      </Container>
    </section>
  );
};

// ─── SOLUTION ─────────────────────────────────────────────────────────────────
const SolutionSection = () => (
  <section className="py-20 sm:py-24 bg-[#F9F6F4]">
    <Container>
      <h2 className="text-3xl sm:text-4xl font-eb-garamond italic text-[#0A1128] leading-tight mb-4 max-w-2xl">
        Most businesses try to fix this by being more available.
        <br />
        <span className="text-gray-400">That never works.</span>
      </h2>

      <div className="space-y-2 text-gray-500 mb-3 text-base leading-relaxed">
        <p>A second receptionist helps. Until she&apos;s busy too.</p>
        <p>A WhatsApp chatbot helps. Until someone calls instead of typing.</p>
        <p>A voice bot helps. Until the lead goes cold and nobody followed up.</p>
      </div>
      <p className="text-base font-bold text-[#0A1128] mb-10">
        None of them fix the whole problem. <span className="text-blue-600">Guftugu fixes the whole problem.</span>
      </p>

      {/* DHVANI + SANDESH feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* DHVANI */}
        <div
          className="bg-white border border-black/[0.06] flex flex-col overflow-hidden"
          style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.04)" }}
        >
          {/* Aura visual — orange / yellow */}
          <div
            className="h-[160px] relative overflow-hidden"
            style={{ background: "#fafafa", isolation: "isolate" }}
          >
            <div
              className="animate-aura-breath absolute rounded-full"
              style={{ top: "-20%", left: "-10%", width: "200px", height: "200px", background: "#ff5500", filter: "blur(30px)", mixBlendMode: "multiply", opacity: 0.75 }}
            />
            <div
              className="animate-aura-breath absolute rounded-full"
              style={{ bottom: "-30%", right: "0%", width: "160px", height: "160px", background: "#ffcc00", filter: "blur(30px)", mixBlendMode: "multiply", opacity: 0.75, animationDelay: "-3s" }}
            />
          </div>
          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
              <p className="text-xs font-bold text-orange-500 tracking-widest uppercase">Dhvani · Voice AI</p>
            </div>
            <h3 className="font-eb-garamond italic text-[#0A1128] text-2xl mb-4">Catches every call</h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li className="flex gap-2.5"><span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>Answers in under 2 seconds. Hindi, English, or both mid-sentence.</li>
              <li className="flex gap-2.5"><span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>Asks your questions. Captures what matters.</li>
              <li className="flex gap-2.5"><span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>No IVR. No &quot;press 1.&quot; A conversation, not a maze.</li>
            </ul>
          </div>
        </div>

        {/* SANDESH */}
        <div
          className="bg-white border border-black/[0.06] flex flex-col overflow-hidden"
          style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.04)" }}
        >
          {/* Aura visual — green / blue */}
          <div
            className="h-[160px] relative overflow-hidden"
            style={{ background: "#fafafa", isolation: "isolate" }}
          >
            <div
              className="animate-aura-breath absolute rounded-full"
              style={{ top: "-10%", left: "-10%", width: "180px", height: "180px", background: "#00cc88", filter: "blur(30px)", mixBlendMode: "multiply", opacity: 0.75 }}
            />
            <div
              className="animate-aura-breath absolute rounded-full"
              style={{ bottom: "-20%", right: "-10%", width: "160px", height: "160px", background: "#0066ff", filter: "blur(30px)", mixBlendMode: "multiply", opacity: 0.75, animationDelay: "-5s" }}
            />
          </div>
          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
              <p className="text-xs font-bold text-green-600 tracking-widest uppercase">Sandesh · WhatsApp</p>
            </div>
            <h3 className="font-eb-garamond italic text-[#0A1128] text-2xl mb-4">Works every lead</h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li className="flex gap-2.5"><span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>Didn&apos;t answer? WhatsApp fires automatically.</li>
              <li className="flex gap-2.5"><span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>Booked? Reminder sent 2 hours before.</li>
              <li className="flex gap-2.5"><span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>Went cold? 14-day follow-up sequence runs.</li>
              <li className="flex gap-2.5"><span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>You get a ping when the lead is actually ready.</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-base text-gray-600 mb-2">
        Together, Guftugu does what your best employee would do — answer, follow up, only bother you when the lead is hot.
      </p>
      <p className="text-base text-gray-600 mb-8">
        Except Guftugu works at 2am, speaks Hindi and English, and never takes a Diwali off.
      </p>

      {/* Memory callout */}
      <div className="bg-[#0A1128] rounded-2xl p-6 sm:p-8 text-white border border-blue-800/30">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center mt-0.5">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-lg mb-3">It remembers, too.</p>
            <div className="space-y-2 text-sm text-white/70">
              <p>Returning patient? It knows the last visit.</p>
              <p>Familiar candidate? It pulls the history.</p>
              <p>Warm lead? It picks up where it left off.</p>
            </div>
            <p className="mt-4 text-sm font-medium text-blue-300">
              Guftugu learns from every call. The longer it runs, the sharper it gets.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "We learn your business",
      subtitle: "One 30-minute call. No slides. No pitch.",
      body: "We map how your callers talk, what they ask most, and what your current process looks like. Bring call recordings if you have them — we train your AI on your actual conversations, your language, your tone, the exact objections your callers raise.",
      note: "By the end of the call, we know exactly what to build.",
    },
    {
      number: "02",
      title: "We build it",
      subtitle: "Done-for-you. Live in 7 days.",
      body: "We write the script, train the AI on your business, set up WhatsApp flows, and connect to your calendar or CRM. You don't touch the technology.",
      note: null,
    },
    {
      number: "03",
      title: "Your AI goes to work",
      subtitle: "You only get pinged when a lead is ready.",
      body: "Every call answered. Every lead followed up. You get a WhatsApp message when someone is actually ready to book. That's the only time you need to pick up the phone.",
      note: null,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <SectionLabel text="Process" />
        <h2 className="text-3xl sm:text-4xl font-eb-garamond italic text-[#0A1128] leading-tight mb-4">
          Three steps.
          <br />
          <span className="text-gray-400">You barely have to show up.</span>
        </h2>

        <div className="mt-12 space-y-0">
          {steps.map((step, i) => (
            <div key={i} className="relative flex gap-6 sm:gap-8 pb-10 last:pb-0">
              {i < steps.length - 1 && (
                <div className="absolute left-[19px] top-12 bottom-0" style={{ borderLeft: "2px dashed #d1d5db" }} />
              )}
              <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#0A1128] bg-white flex items-center justify-center z-10">
                <span className="text-xs font-bold text-[#0A1128]">{step.number}</span>
              </div>
              <div className="flex-1 bg-[#F9F6F4] rounded-2xl p-6 sm:p-8">
                <p className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Step {step.number}
                </p>
                <h3 className="text-xl font-eb-garamond italic text-[#0A1128] mb-1">{step.title}</h3>
                <p className="text-sm font-medium text-gray-500 mb-3">{step.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                {step.note && (
                  <p className="mt-3 text-sm font-semibold text-[#0A1128]">{step.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <PrimaryBtn href={CAL_LINK} label="Book a Discovery Call" size="lg" />
        </div>
      </Container>
    </section>
  );
};

// ─── USE CASES ────────────────────────────────────────────────────────────────
type UseCaseTab = "dental" | "realestate" | "hiring";

const useCaseData = {
  dental: {
    label: "Dental & Medical",
    role: "Guftugu Receptionist",
    accentColor: "#F97316",
    headline: "Your new receptionist. Books appointments at 11pm. Never asks for a holiday.",
    story: {
      scene: "Monday morning. Three missed calls from Sunday evening.",
      lines: [
        "One was a new patient asking about a dental implant — Rs 15,000 minimum.",
        "One was a returning patient who needed to reschedule her root canal.",
        "One hung up without leaving a message. You'll never know who.",
      ],
      punchline: "All three called another clinic before 9am. Before you made your first chai.",
    },
    bullets: [
      "Dhvani answers every call. Instantly. 24/7. No voicemail.",
      "Books appointments directly into Google Cal, Calendly, or your practice software.",
      "Handles FAQs in Hindi, English, or both — pricing, availability, insurance, directions.",
      "Sandesh sends a WhatsApp reminder 2 hours before so patients actually show up.",
      "Sandesh follows up every lead who called but didn't book. Automatically.",
      "Alerts you on WhatsApp when a high-value inquiry lands: implants, cosmetic, new patients.",
    ],
    stat: "Most clinics miss 3 to 5 high-value inquiries a week — Rs 45,000 to Rs 75,000 in missed revenue, not from bad marketing, from an unanswered phone.",
    before: "Phone rings during a procedure. Receptionist is checking in the next patient. Nobody answers. Lead books with the clinic 200 metres down the road.",
    after: "Dhvani answers in under 2 seconds. Three questions. Appointment booked. Sandesh sends a confirmation. Your receptionist walks in to a full calendar she didn't have to fill.",
    cta: { label: "Get a Free Ghost Patient Report", note: "We call your clinic as a mystery patient, at peak hours and at 9pm." },
  },
  realestate: {
    label: "Real Estate",
    role: "Guftugu Lead Qualifier",
    accentColor: "#3B82F6",
    headline: "That inquiry just came in. You're in a showing. Your competitor answered.",
    story: {
      scene: "Tuesday, 3pm. You're in a showing. Phone rings — unknown number.",
      lines: [
        "You let it go.",
        "You call back 40 minutes later. The caller spoke to another agent who answered immediately.",
        "That agent is showing them a flat tomorrow.",
      ],
      punchline: "Rs 40,000 in commission. Gone. Because of 40 minutes and one missed call.",
    },
    bullets: [
      "Dhvani answers every call — in showings, meetings, drives, anywhere.",
      "Qualifies on the call: budget, timeline, area, property type.",
      "Logs everything to your CRM or Google Sheet, automatically.",
      "Sandesh follows up on WhatsApp if the call goes unanswered.",
      "Runs a 14-day follow-up sequence for leads who didn't convert right away.",
      "Sandesh sends you a WhatsApp summary — name, budget, needs — before you call them back.",
    ],
    stat: "Missing 2–3 calls a week is Rs 80,000 to Rs 1,20,000 leaking from a perfectly functioning pipeline.",
    before: "Hot lead calls. You're in a showing. Voicemail. They call the agent directly below yours on the listing.",
    after: "Dhvani answers, qualifies, logs. Sandesh sends you their name, budget, and property needs. You call back as the most prepared agent they'll speak to all day.",
    cta: { label: "Get a Free Speed-to-Lead Test", note: "We submit a property inquiry to your agency and time the response." },
  },
  hiring: {
    label: "Hiring & Staffing",
    role: "Guftugu Interviewer",
    accentColor: "#8B5CF6",
    headline: "First-round interviews. Any language. You get only the qualified ones.",
    story: {
      scene: "140 applications by Thursday. Your recruiter spends four hours calling.",
      lines: [
        "Half don't pick up. A quarter aren't qualified in the first 30 seconds.",
        "After four hours she's found two candidates worth talking to.",
        "The client wants an update. The role is still open.",
      ],
      punchline: "Your best recruiter is burning out on work that shouldn't need a human.",
    },
    bullets: [
      "Dhvani calls every applicant — or takes inbound calls directly from job ads.",
      "Conducts voice interviews in Hindi, English, Hinglish, Gujarati, Marathi, Tamil.",
      "Asks your exact qualification questions: experience, availability, location, skills.",
      "Records every call for compliance, quality review, and client audits.",
      "Sandesh follows up candidates who didn't pick up — automatically, on WhatsApp.",
      "Hands you only the qualified candidates. Your recruiter speaks to people worth speaking to.",
    ],
    stat: "That's 40 hours a month back from your most senior people — straight into placements.",
    before: "140 applicants. 1 recruiter. 4 days of calls. 8 qualified candidates. 36 hours wasted.",
    after: "Dhvani screens all 140 in 24 hours. Sandesh chases everyone who didn't pick up. Recruiter receives a clean shortlist with recordings and summaries.",
    cta: { label: "Get a Free Screening Volume Audit", note: "We review your current first-round volume before you commit to anything." },
  },
};

const UseCasesSection = () => {
  const [active, setActive] = useState<UseCaseTab>("dental");
  const tabs: { key: UseCaseTab; label: string }[] = [
    { key: "dental", label: "Dental & Medical" },
    { key: "realestate", label: "Real Estate" },
    { key: "hiring", label: "Hiring & Staffing" },
  ];
  const uc = useCaseData[active];

  return (
    <section id="use-cases" className="py-20 sm:py-24 bg-[#F9F6F4]">
      <Container>
        <SectionLabel text="Primary use cases" />
        <h2 className="text-3xl sm:text-4xl font-eb-garamond italic text-[#0A1128] leading-tight mb-8">
          What role does your business need?
        </h2>

        {/* Tab bar — editorial underline style */}
        <div className="flex gap-0 mb-10 border-b border-gray-200 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-5 py-3 text-sm font-semibold whitespace-nowrap transition-all border-b-2 -mb-px ${
                active === t.key
                  ? "border-[#0A1128] text-[#0A1128]"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Active use case */}
        <div className="bg-white border border-black/[0.06] overflow-hidden" style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.04)" }}>
          {/* Accent bar + header */}
          <div style={{ borderTop: `3px solid ${uc.accentColor}` }}>
            <div className="bg-[#0A1128] px-6 sm:px-8 py-6">
              <span className="text-xs font-bold tracking-widest uppercase flex items-center gap-2" style={{ color: uc.accentColor }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: uc.accentColor }} />
                {uc.role}
              </span>
              <h3 className="text-xl sm:text-2xl font-eb-garamond italic text-white mt-2 leading-snug">
                {uc.headline}
              </h3>
            </div>
          </div>

          {/* Story */}
          <div className="px-6 sm:px-8 py-6 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-500 mb-3">{uc.story.scene}</p>
            <ul className="space-y-2 mb-4">
              {uc.story.lines.map((l, i) => (
                <li key={i} className="text-sm text-gray-600 pl-4 border-l-2 border-gray-200">{l}</li>
              ))}
            </ul>
            <p className="text-base font-bold text-[#0A1128]">{uc.story.punchline}</p>
          </div>

          {/* Bullets */}
          <div className="px-6 sm:px-8 py-6 border-b border-gray-100">
            <p className="text-sm font-bold text-[#0A1128] mb-4">What {uc.role} handles:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {uc.bullets.map((b, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Stat */}
          <div className="bg-amber-50 px-6 sm:px-8 py-4 border-b border-gray-100">
            <p className="text-sm text-amber-800 font-medium">{uc.stat}</p>
          </div>

          {/* Before / After */}
          <div className="px-6 sm:px-8 py-6 border-b border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-xl p-4">
                <p className="text-xs font-bold text-red-500 tracking-widest uppercase mb-2">Before</p>
                <p className="text-sm text-gray-700 leading-relaxed">{uc.before}</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-xs font-bold text-green-600 tracking-widest uppercase mb-2">After</p>
                <p className="text-sm text-gray-700 leading-relaxed">{uc.after}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="px-6 sm:px-8 py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[#0A1128]">{uc.cta.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{uc.cta.note}</p>
              </div>
              <PrimaryBtn href={CAL_LINK} label="Request Free Audit" />
            </div>
          </div>
        </div>
      </Container>

      <AllUseCasesGrid />
    </section>
  );
};

const AllUseCasesGrid = () => {
  const cases = [
    { industry: "Dental & Medical Clinics", role: "Guftugu Receptionist", desc: "Dhvani answers calls. Sandesh books, reminds, and recovers no-shows.", accent: "#F97316" },
    { industry: "Real Estate Agencies", role: "Guftugu Lead Qualifier", desc: "Dhvani qualifies callers. Sandesh follows up for 14 days.", accent: "#3B82F6" },
    { industry: "Hiring & Staffing Agencies", role: "Guftugu Interviewer", desc: "Dhvani screens in any language. Sandesh chases candidates who didn't pick up.", accent: "#8B5CF6" },
    { industry: "Home Services", role: "Guftugu Dispatcher", desc: "Dhvani qualifies the job. Sandesh sends the brief to your team on WhatsApp.", accent: "#10B981" },
    { industry: "Hotels & Hospitality", role: "Guftugu Concierge", desc: "Dhvani answers guest queries 24/7. Sandesh handles follow-up and confirmations.", accent: "#F59E0B" },
    { industry: "Marketing Agencies", role: "Guftugu for Agencies", desc: "We run Guftugu for your clients. You sell it under your brand.", accent: "#EC4899" },
    { industry: "Technical Support", role: "Guftugu Support Line", desc: "Dhvani handles fault queries and ticket triage. Sandesh sends updates.", accent: "#6366F1" },
  ];

  return (
    <Container className="mt-12">
      <p className="text-sm font-bold text-[#0A1128] mb-2">Guftugu. Same system. Different role.</p>
      <p className="text-sm text-gray-500 mb-6">Built for how your specific business works.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {cases.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-4 border border-gray-100 border-l-[3px]"
            style={{ borderLeftColor: c.accent }}
          >
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: c.accent }}>{c.role}</span>
            <p className="font-semibold text-[#0A1128] text-sm mt-1 mb-1">{c.industry}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
          </div>
        ))}
        <div className="bg-[#0A1128] rounded-xl p-4 flex flex-col justify-between">
          <p className="text-sm text-white/70 mb-4">
            Don&apos;t see your industry? We&apos;ve built for 20+ use cases.
          </p>
          <PrimaryBtn href={CAL_LINK} label="Talk to us" size="sm" />
        </div>
      </div>
    </Container>
  );
};

// ─── WHY WE'RE DIFFERENT ──────────────────────────────────────────────────────
const WhyDifferentSection = () => {
  const competitors = [
    {
      type: "Platform companies",
      note: "Built for developers",
      desc: "They sell infrastructure. You'd need a tech team and months to build on it.",
    },
    {
      type: "Enterprise vendors",
      note: "Built for Flipkart and CRED",
      desc: "Minimum engagement starts at budgets most SMBs spend in a full year. You're not their customer.",
    },
    {
      type: "WhatsApp chatbots",
      note: "Built for messages only",
      desc: "Great at text. Can't answer a call. Half your leads call instead of typing.",
    },
  ];

  const differentiators = [
    { title: "Done-for-you, not a platform", body: "You don't touch the tech. We run Guftugu. You get the leads." },
    { title: "Both channels, connected", body: "Dhvani catches the call. Sandesh works the lead. Nothing falls through." },
    { title: "We learn your business before we build", body: "30-minute call. Call recordings if you have them. What goes live is trained on your actual business." },
    { title: "No IVR. No \u201Cpress 1 for service.\u201D", body: "Conversational from the first second. In Hindi, English, or both." },
    { title: "Gets smarter every month", body: "Guftugu learns from every call. The longer it runs, the more it knows about your callers." },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <SectionLabel text="What makes us different" />
        <h2 className="text-3xl sm:text-4xl font-eb-garamond italic text-[#0A1128] leading-tight mb-4 max-w-2xl">
          Every other AI company starts with a demo.
          <br />
          <span className="text-gray-400">We start with a question.</span>
        </h2>
        <p className="text-gray-500 mb-10 max-w-xl text-base">
          Demos always work. Then you go live. Your callers speak Hinglish. Three calls come in at once.
          Most voice AI is built for demos — not for the actual chaos of an Indian business at 11am on a Monday.
          That&apos;s where it breaks. <span className="text-[#0A1128] font-medium">Guftugu is built for that chaos.</span>
        </p>

        {/* Competitor cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {competitors.map((c, i) => (
            <div key={i} className="bg-gray-50 border border-dashed border-gray-200 rounded-xl p-5">
              <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">{c.note}</p>
              <p className="font-bold text-gray-700 text-sm mb-2">{c.type}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-base font-semibold text-[#0A1128] mb-2">Guftugu is none of those.</p>
        <p className="text-gray-500 mb-8 text-base">
          Done-for-you, for businesses without dev teams, without enterprise budgets, and without time to manage software.
          Agentic AI Labs builds it, runs it, and tunes it. You get the leads.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {differentiators.map((d, i) => (
            <div key={i} className={`rounded-xl p-5 border ${i === 0 ? "bg-blue-50 border-blue-100" : "bg-[#F9F6F4] border-gray-100"}`}>
              <p className="font-bold text-[#0A1128] text-sm mb-1">{d.title}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

// ─── PRICING ──────────────────────────────────────────────────────────────────
const PricingSection = () => {
  const tiers = [
    {
      name: "Starter",
      metaphor: "Think of this as hiring an intern.",
      setup: "Rs 0 setup",
      monthly: "Rs 2,499",
      period: "/month",
      highlight: false,
      cta: "Build My AI Agent",
      ctaHref: CAL_LINK,
      best: "Clinics, brokers, and service businesses who want proof before committing.",
      features: [
        "100 voice minutes/month",
        "1 AI agent (support or sales)",
        "1 dedicated Indian business number",
        "1 language: Hindi or English",
        "Instant WhatsApp reply to every inbound lead, 24/7",
        "Missed-call WhatsApp fallback",
        "Lead pipeline dashboard",
        "3 script tweaks/month",
        "Email support, 48h SLA",
      ],
      overage: "Rs 600 for 100 extra minutes",
    },
    {
      name: "Professional",
      badge: "Most businesses upgrade here",
      metaphor: "Think of this as your Junior Associate.",
      setup: "Rs 15,000 setup",
      monthly: "Rs 9,999",
      period: "/month",
      highlight: true,
      cta: "Build My AI Agent",
      ctaHref: CAL_LINK,
      best: "Dental clinics, real estate agencies, and hiring teams who want the full system.",
      features: [
        "1,500 voice minutes/month",
        "2 agents (Dhvani + Sandesh)",
        "3 concurrent calls",
        "Bilingual — auto Hindi ↔ English mid-sentence",
        "Done-for-you script engineering, unlimited tweaks",
        "14-day WhatsApp + voice follow-up sequence",
        "Smart channel switching",
        "Owner WhatsApp alerts: new lead, hot flag, booking",
        "No-Show Recovery — Sandesh checks in 2 hours before",
        "1-way CRM export: Sheets, Airtable, Webhook",
        "Priority WhatsApp support, 24h SLA",
      ],
      overage: null,
    },
    {
      name: "Enterprise",
      metaphor: "Think of this as the Senior Manager.",
      setup: "Rs 45,000+ setup",
      monthly: "Rs 24,999",
      period: "/month",
      highlight: false,
      cta: "Build My AI Agent",
      ctaHref: CAL_LINK,
      best: "Hospitals, large brokerages, BPOs, staffing agencies, marketing agencies.",
      features: [
        "5,000 voice minutes/month",
        "Unlimited agents, custom routing",
        "10+ concurrent calls",
        "Up to 3 dedicated Indian business numbers",
        "Any supported language, multilingual routing",
        "Dead Lead Reactivation — 30-day drip campaign",
        "Autonomous A/B testing — AI adopts winner automatically",
        "2-way CRM sync: Salesforce, HubSpot, Zoho",
        "Weekly WhatsApp performance summary",
        "Dedicated Account Manager",
      ],
      overage: null,
    },
  ];

  const tableRows = [
    { feature: "Setup", values: ["Rs 0", "Rs 15,000", "Rs 45,000+"] },
    { feature: "Monthly", values: ["Rs 2,499", "Rs 9,999", "Rs 24,999"] },
    { feature: "Voice minutes", values: ["100", "1,500", "5,000"] },
    { feature: "Concurrent calls", values: ["1", "3", "10+"] },
    { feature: "Languages", values: ["1", "Bilingual", "Multilingual"] },
    { feature: "Script setup", values: ["DIY", "Done-for-you", "Done-for-you"] },
    { feature: "WhatsApp instant reply", values: ["✓", "✓", "✓"] },
    { feature: "Missed-call fallback", values: ["✓", "✓", "✓"] },
    { feature: "14-day follow-up", values: ["—", "✓", "✓"] },
    { feature: "No-Show Recovery", values: ["—", "✓", "✓"] },
    { feature: "Dead Lead Reactivation", values: ["—", "—", "✓"] },
    { feature: "A/B testing", values: ["—", "—", "✓"] },
    { feature: "Support", values: ["Email 48h", "WhatsApp 24h", "Dedicated AM"] },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-24 bg-[#F9F6F4]">
      <Container>
        <SectionLabel text="Pricing" />
        <h2 className="text-3xl sm:text-4xl font-eb-garamond italic text-[#0A1128] leading-tight mb-2">
          Start at Rs 0.
        </h2>
        <p className="text-gray-500 mb-1">Scale when the results justify it. (Usually by month 2.)</p>
        <p className="text-sm text-gray-400 mb-10">No hidden charges. No confusing per-minute billing at month end.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 md:items-stretch">
          {tiers.map((t, i) => (
            <div key={i} className={`relative flex flex-col ${t.badge ? "mt-4" : ""}`}>
              {t.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FCCA07] text-[#0A1128] text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap z-10 shadow-sm">
                  {t.badge}
                </div>
              )}
              <div
                className={`relative rounded-2xl border flex flex-col flex-1 ${
                  t.highlight
                    ? "bg-[#0A1128] border-[#0A1128] text-white"
                    : "bg-white border-gray-200 text-[#0A1128]"
                }`}
              >

              {/* Header */}
              <div className="px-6 pt-8 pb-5 border-b border-current/10">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.12em] uppercase mb-3 ${
                  t.highlight ? "bg-blue-500/20 text-blue-300" : "bg-blue-50 text-blue-600"
                }`}>
                  {t.name}
                </span>
                <p className={`text-sm mb-4 ${t.highlight ? "text-white/60" : "text-gray-400"}`}>{t.metaphor}</p>
                <p className={`text-xs font-medium mb-1 ${t.highlight ? "text-white/50" : "text-gray-400"}`}>{t.setup}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">{t.monthly}</span>
                  <span className={`text-sm ${t.highlight ? "text-white/50" : "text-gray-400"}`}>{t.period}</span>
                </div>
              </div>

              {/* Features — compact, no stretching */}
              <div className="px-6 py-5">
                <ul className="space-y-2.5">
                  {t.features.map((f, j) => (
                    <li key={j} className={`flex gap-2.5 text-sm leading-snug ${t.highlight ? "text-white/80" : "text-gray-600"}`}>
                      <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${t.highlight ? "text-green-400" : "text-green-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spacer pushes footer to bottom */}
              <div className="flex-1" />

              {/* Footer — always at bottom */}
              <div className={`px-6 pb-6 pt-5 border-t ${t.highlight ? "border-white/10" : "border-gray-100"}`}>
                {t.overage && (
                  <p className={`text-xs mb-2 ${t.highlight ? "text-white/40" : "text-gray-400"}`}>
                    Overage: {t.overage}
                  </p>
                )}
                <p className={`text-xs mb-5 ${t.highlight ? "text-white/50" : "text-gray-400"}`}>
                  Best for: {t.best}
                </p>
                <button
                  onClick={() => window.open(t.ctaHref, "_blank", "noopener,noreferrer")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "14px 20px",
                    border: t.highlight ? "none" : "2px solid #0A1128",
                    borderRadius: "8px",
                    background: t.highlight ? "#FCCA07" : "transparent",
                    color: t.highlight ? "#0A1128" : "#0A1128",
                    fontSize: "14px",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={e => {
                    if (t.highlight) {
                      (e.currentTarget as HTMLButtonElement).style.background = "#f0bd00";
                    } else {
                      (e.currentTarget as HTMLButtonElement).style.background = "#0A1128";
                      (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                    }
                  }}
                  onMouseLeave={e => {
                    if (t.highlight) {
                      (e.currentTarget as HTMLButtonElement).style.background = "#FCCA07";
                    } else {
                      (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                      (e.currentTarget as HTMLButtonElement).style.color = "#0A1128";
                    }
                  }}
                >
                  {t.cta}
                </button>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div>
          <p className="text-sm font-bold text-[#0A1128] mb-4">Full comparison</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full min-w-[540px] text-sm">
              <thead>
                <tr className="bg-[#0A1128] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Feature</th>
                  <th className="text-center px-4 py-3 font-semibold">Starter</th>
                  <th className="text-center px-4 py-3 font-semibold bg-blue-900/50">Pro</th>
                  <th className="text-center px-4 py-3 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-2.5 font-medium text-gray-700">{row.feature}</td>
                    {row.values.map((v, j) => (
                      <td
                        key={j}
                        className={`px-4 py-2.5 text-center ${
                          j === 1 ? "bg-blue-50 font-semibold text-blue-800" : "text-gray-600"
                        } ${v === "✓" ? "text-green-600 text-lg" : ""} ${v === "—" ? "text-gray-300" : ""}`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            WhatsApp charges billed directly to your Meta Business account at Meta&apos;s standard rates. We handle the full technical setup.
          </p>
        </div>
      </Container>
    </section>
  );
};

// ─── FREE AUDIT ───────────────────────────────────────────────────────────────
const FreeAuditSection = () => {
  const audits = [
    {
      icon: "👻",
      name: "Ghost Patient Report",
      for: "for clinics",
      desc: "We call your clinic as a mystery patient — at peak hours and at 9pm. You see what a new patient hears on first contact.",
    },
    {
      icon: "⚡",
      name: "Speed-to-Lead Test",
      for: "for real estate",
      desc: "We submit a property inquiry and time your response: phone, WhatsApp, and email. You see your speed-to-lead in cold numbers.",
    },
    {
      icon: "📊",
      name: "Unqualified Volume Review",
      for: "for hiring agencies",
      desc: "We review your first-round screening data: volume, time per screen, qualified rate. You see the true cost of your current process.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <SectionLabel text="Free audit" />
        <h2 className="text-3xl sm:text-4xl font-eb-garamond italic text-[#0A1128] leading-tight mb-2 max-w-2xl">
          Find out how many leads you&apos;re losing right now.
          <br />
          <span className="text-gray-400">Before you spend anything.</span>
        </h2>
        <p className="text-gray-500 mb-10 max-w-xl">
          The audit makes the invisible visible — missed calls, response times, follow-through.
          After seeing it, you&apos;ll know exactly what needs fixing.{" "}
          <strong className="text-[#0A1128]">48 hours. Free. No commitment.</strong>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {audits.map((a, i) => (
            <div key={i} className="bg-[#F9F6F4] rounded-2xl p-6 flex flex-col">
              <div className="text-3xl mb-3">{a.icon}</div>
              <p className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-1">{a.for}</p>
              <p className="font-eb-garamond italic text-[#0A1128] text-xl mb-2">{a.name}</p>
              <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{a.desc}</p>
              <OutlineBtn href={CAL_LINK} label="Request this audit" size="sm" />
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-400 text-center">
          Not a clinic, agency, or recruiter?{" "}
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
            Request a general missed-call audit.
          </a>
        </p>
      </Container>
    </section>
  );
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Will my callers trust it?",
      a: "Most callers don't ask if they're speaking to a human — they want their question answered and their appointment booked. When they do ask, Guftugu answers honestly. Trust comes from speed and accuracy, not whether it's human.",
    },
    {
      q: "What if it says something wrong?",
      a: "It never makes up an answer. If it doesn't know something, it says \"let me have the team follow up with you,\" logs the message, and sends your team a WhatsApp alert immediately. Every call has an escalation path built in from day one.",
    },
    {
      q: "Do I need a new phone number?",
      a: "No. We forward calls from your existing business number. Your callers see your number, not ours. Dedicated line available if you want one.",
    },
    {
      q: "How fast does it go live?",
      a: "7 business days for most setups. We need your script, calendar access, and one 30-minute call. We handle everything else.",
    },
    {
      q: "Is there a guarantee?",
      a: "If your AI isn't live within 10 business days of us receiving your setup materials, we refund the setup fee. No questions asked. Once live, we tune at no extra cost until it performs to spec.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#F9F6F4]">
      <Container size="sm">
        <SectionLabel text="FAQ" />
        <h2 className="text-3xl sm:text-4xl font-eb-garamond italic text-[#0A1128] leading-tight mb-8">
          The questions we actually get asked.
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <button
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm text-[#0A1128]">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

// ─── FINAL CTA ────────────────────────────────────────────────────────────────
const FinalCTA = () => (
  <section className="py-20 sm:py-24 bg-[#0A1128]">
    <Container className="text-center">
      <SectionLabel text="Ready?" dark />
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-eb-garamond italic text-white leading-tight mb-4">
        Your competitor picked up that call.
        <br />
        You can answer the next one.
      </h2>
      <p className="text-white/60 mb-3 max-w-xl mx-auto">
        The leads are there. The calls are coming in. The problem isn&apos;t demand — it&apos;s that your business can&apos;t respond fast enough, at all hours, in both languages, with follow-through that lasts more than a day.
      </p>
      <p className="text-white/50 mb-10 max-w-lg mx-auto text-sm">
        That&apos;s exactly what Guftugu fixes. The first step is a 30-minute call. No slides. No pitch. We learn how your business works, then we build what actually fits.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
        <PrimaryBtn href={CAL_LINK} label="Book a Discovery Call" size="lg" />
      </div>

      <p className="text-white/40 text-sm mb-4">Not ready to talk? Start with a free audit:</p>
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {["Ghost Patient Report", "Speed-to-Lead Test", "Hiring Audit"].map((label) => (
          <a
            key={label}
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/50 hover:text-white transition-colors underline underline-offset-2"
          >
            {label}
          </a>
        ))}
      </div>

      {STATS.demoNumber && (
        <p className="text-white/30 text-sm">
          Or call our AI right now: <span className="text-white/60 font-medium">{STATS.demoNumber}</span>
          <br />
          <span className="text-xs">Hear exactly what your callers will hear. Takes 2 minutes.</span>
        </p>
      )}

      <div className="mt-10 pt-8 border-t border-white/10">
        <p className="text-white/50 text-sm font-medium">
          Rs 0 to start &nbsp;·&nbsp; Live in 7 days &nbsp;·&nbsp; We learn your business first, then we build.
        </p>
      </div>
    </Container>
  </section>
);

// ─── FOOTER ───────────────────────────────────────────────────────────────────
const PageFooter = () => (
  <footer className="bg-[#060D1F] py-10">
    <Container size="lg">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <Link href="/" className="font-mondwest text-xl text-white/80 font-normal tracking-[-0.02em]">
          tryagentic.ai
        </Link>
        <nav className="flex flex-wrap gap-6 text-sm text-white/40">
          <button onClick={() => smoothScrollTo("use-cases")} className="hover:text-white/70 transition-colors">Use Cases</button>
          <button onClick={() => smoothScrollTo("pricing")} className="hover:text-white/70 transition-colors">Pricing</button>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">Book a Discovery Call</a>
          <button onClick={() => smoothScrollTo("faq")} className="hover:text-white/70 transition-colors">Free Audit</button>
        </nav>
      </div>
      <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4">
        <p className="text-xs text-white/30">
          Guftugu by Agentic AI Labs. Dhvani answers the call. Sandesh works the lead. Built in India. Running everywhere.
        </p>
        <div className="flex gap-4 text-xs text-white/30">
          <Link href="/privacy" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white/50 transition-colors">Terms of Service</Link>
          <Link href="/contact" className="hover:text-white/50 transition-colors">Contact</Link>
        </div>
      </div>
    </Container>
  </footer>
);

// ─── STICKY MOBILE CTA ────────────────────────────────────────────────────────
const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  if (!visible) return null;
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <PrimaryBtn href={CAL_LINK} label="Book a Discovery Call" fullWidth size="lg" />
    </div>
  );
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
const AiVoiceAgentPage: NextPageWithLayout = () => {
  const [demoTab, setDemoTab] = useState<DemoTab>("dental");

  const handleCardPlay = useCallback((tab: DemoTab) => {
    setDemoTab(tab);
  }, []);

  return (
    <>
      <MetaConfig
        title="Guftugu — AI Voice Agent for Indian Businesses | tryagentic.ai"
        description="Guftugu answers every call and follows up on WhatsApp. Automatically. In Hindi or English. 24/7. Dhvani handles voice. Sandesh handles the message. Built for dental clinics, real estate agencies, and hiring teams."
        type="Website"
        url={CANONICAL_URL}
        keywords={[
          "AI voice agent India",
          "Guftugu AI",
          "AI receptionist India",
          "AI phone answering India",
          "WhatsApp AI follow-up",
          "missed call AI India",
          "Hindi English AI agent",
        ]}
      />

      <Hero onCardPlay={handleCardPlay} />
      <HearItYourselfSection activeTab={demoTab} onTabChange={setDemoTab} />
      <SocialProofBar />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <UseCasesSection />
      <WhyDifferentSection />
      <PricingSection />
      <FreeAuditSection />
      <FAQSection />
      <FinalCTA />
      <PageFooter />
      <StickyMobileCTA />
    </>
  );
};

export default AiVoiceAgentPage;
