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
    sm: "px-5 py-2.5 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-3.5 text-sm",
  };
  const cls = `inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-[#FCCA07] text-[#0A1128] font-semibold transition-all hover:bg-[#f0bd00] active:scale-[0.98] cursor-pointer ${sizeMap[size]} ${fullWidth ? "w-full" : ""}`;
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
  callerName: string;
  scenario: string;
  color: string;
  audioSrc: string;
  transcript: { speaker: "Caller" | "Dhvani"; text: string }[];
}> = {
  dental: {
    label: "Dental Clinic",
    cardLabel: "Dental & Medical",
    callerName: "Rahul",
    scenario: "Sunday 9:47pm · New patient inquiry",
    color: "#FF5500",
    audioSrc: "/audio/demo-dental.mp3",
    transcript: [
      { speaker: "Caller", text: "Hello, Dr. Mehta ki clinic hai? Main appointment lena chahta tha, cleaning aur checkup ke liye." },
      { speaker: "Dhvani", text: "Haan ji! Aap naye patient hain ya pehle aaye hain humare yahan?" },
      { speaker: "Caller", text: "Naya hoon. Bhai ne refer kiya tha. Fees kitni hai cleaning ki?" },
      { speaker: "Dhvani", text: "Cleaning aur checkup combo ₹800 mein hota hai. Kal subah 10 baje ya Thursday 4 baje, kaunsa time suit karega?" },
      { speaker: "Caller", text: "Thursday 4 baje perfect rahega." },
      { speaker: "Dhvani", text: "Done Rahul ji! Thursday 4 baje confirm ho gayi. WhatsApp pe reminder aayega 2 ghante pehle, aur directions bhi. Dhanyawaad!" },
    ],
  },
  realestate: {
    label: "Real Estate",
    cardLabel: "Real Estate",
    callerName: "Vikram",
    scenario: "Tuesday 3:12pm · Agent in a site visit",
    color: "#3300FF",
    audioSrc: "/audio/demo-realestate.mp3",
    transcript: [
      { speaker: "Caller", text: "Bhai, wo 2BHK Bandra West mein, abhi bhi available hai? MagicBricks pe dekha." },
      { speaker: "Dhvani", text: "Haan ji available hai! ₹1.2 crore mein listed hai. Aapka budget range kya hai?" },
      { speaker: "Caller", text: "1 to 1.5 crore ke beech mein soch rahe hain. Covered parking bhi chahiye." },
      { speaker: "Dhvani", text: "Parking included hai is flat mein. Saturday ko site visit ka time doon?" },
      { speaker: "Caller", text: "Haan Saturday subah kaafi acha rahega." },
      { speaker: "Dhvani", text: "Saturday 11 baje confirm Vikram ji. Agent ka number aur exact address abhi WhatsApp pe bhej raha hoon." },
    ],
  },
  hiring: {
    label: "Hiring Agency",
    cardLabel: "Hiring & Staffing",
    callerName: "Suresh",
    scenario: "Monday 8:30am · 140 applications pending",
    color: "#FF0055",
    audioSrc: "/audio/demo-hiring.mp3",
    transcript: [
      { speaker: "Caller", text: "Hello, main Naukri pe warehouse supervisor ki vacancy dekhi thi, usi ke baare mein call kiya tha." },
      { speaker: "Dhvani", text: "Ji bilkul Suresh ji! Aapka warehouse management mein kitne saal ka experience hai?" },
      { speaker: "Caller", text: "3 saal se zyada. Pehle ek logistics company mein tha, 20 logon ki team handle karta tha." },
      { speaker: "Dhvani", text: "Bahut achha. Joining kab tak possible hai, 2 hafte mein ho sakta hai?" },
      { speaker: "Caller", text: "Haan, 2 hafte mein ho jayega. Urgent ho toh pehle bhi kar sakta hoon." },
      { speaker: "Dhvani", text: "Perfect. Recruiter ka call 24 ghante mein aayega. Aapki details ka summary WhatsApp pe bhej raha hoon. Shukriya!" },
    ],
  },
};

// ─── HERO ─────────────────────────────────────────────────────────────────────
const Hero = ({ onCardPlay }: { onCardPlay: (tab: DemoTab) => void }) => (
  <section className="bg-[#0A1128] pt-32 pb-20 sm:pt-36 sm:pb-24 relative overflow-hidden">
    {/* Subtle grid */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
    {/* Saffron/turmeric ambient glow, Indian warmth */}
    <div
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{
        top: "-10%",
        left: "-5%",
        width: "55%",
        height: "70%",
        background: "radial-gradient(ellipse at center, rgba(255,136,0,0.10) 0%, transparent 65%)",
      }}
    />
    {/* Deep magenta glow, right side warmth */}
    <div
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{
        bottom: "0%",
        right: "-5%",
        width: "45%",
        height: "60%",
        background: "radial-gradient(ellipse at center, rgba(220,38,127,0.08) 0%, transparent 65%)",
      }}
    />
    {/* Grain texture overlay */}
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
          <SectionLabel text="Guftugu · Calls answered. Follow-ups on WhatsApp." dark />

          <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-white leading-[1.08] tracking-[-0.02em] mb-6">
            <span className="text-[#FF8800]">7 leads</span> called<br />
            last night.<br />
            <span className="text-white/65">All 7 got answered.</span>
          </h1>

          {/* Outcome-first sub, Indian framing */}
          <p className="text-lg sm:text-xl text-white/80 max-w-lg mb-3 leading-relaxed">
            Guftugu answers every call and follows up on WhatsApp, automatically, in Hindi or English, 24/7.
          </p>
          <p className="text-base text-white/50 mb-4 max-w-md leading-relaxed">
            Like a full-time receptionist, except she costs{" "}
            <span className="text-white/75 font-semibold">₹2,499/month</span> and never misses a call.
          </p>

          {/* WhatsApp trust badge */}
          <div className="flex items-center gap-2 mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/25 rounded-full px-3 py-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp follow-up included
            </span>
            <span className="text-xs text-white/35 font-medium tracking-wide">हर कॉल का जवाब</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
            <PrimaryBtn href={CAL_LINK} label="Book a Free Discovery Call" size="lg" />
            <button
              onClick={() => smoothScrollTo("pricing")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-7 py-3.5 rounded-xl border border-white/25 text-white text-sm font-semibold transition-all hover:border-white/50 hover:bg-white/10 active:scale-[0.98]"
            >
              Plans from ₹2,499/mo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Trust footer */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/40">
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-400/70 flex-shrink-0" />
              No tech setup needed
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-400/70 flex-shrink-0" />
              No long contracts
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#FCCA07]/70 flex-shrink-0" />
              <span className="text-white/55 font-medium">Live in 30 mins</span>
            </span>
          </div>
        </div>

        {/* Right: Aura card collage */}
        <div className="relative hidden lg:block h-[600px]" style={{ perspective: "1000px" }}>
          {/* Card 1, Dental · saffron + gold */}
          <div className="absolute" style={{ top: "10%", right: "20%", transform: "rotate(8deg)", zIndex: 3 }}>
            <div className="bg-white w-[260px] h-[360px] p-4 flex flex-col border border-black/[0.08]" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
              <div className="flex justify-between text-[8px] uppercase tracking-[0.05em] border-b border-gray-100 pb-2 mb-3 text-gray-500 font-semibold">
                <span>Dental &amp; Medical</span>
                <span className="text-[#FF8800]">AI-001</span>
              </div>
              <div className="flex-1 relative overflow-hidden mb-3" style={{ background: "#fafafa", borderRadius: "2px", isolation: "isolate" }}>
                <div className="animate-aura-breath absolute rounded-full" style={{ top: 0, left: 0, width: "150%", height: "100%", background: "#ff5500", filter: "blur(35px)", mixBlendMode: "multiply", opacity: 0.85 }} />
                <div className="animate-aura-breath absolute rounded-full" style={{ bottom: 0, right: 0, width: "100%", height: "150%", background: "#ffaa00", filter: "blur(35px)", mixBlendMode: "multiply", opacity: 0.85, animationDelay: "-2s" }} />
              </div>
              <div className="mt-auto border-t border-gray-100 pt-3 flex justify-between items-end">
                <div>
                  <div className="font-eb-garamond italic text-[#111111] text-xl leading-none">AI Receptionist</div>
                  <div className="text-[9px] text-gray-400 mt-0.5 tracking-wide">+4 appointments today</div>
                </div>
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

          {/* Card 2, Hiring · pink + cyan */}
          <div className="absolute" style={{ top: "30%", right: "42%", transform: "rotate(-12deg) scale(0.95)", zIndex: 2 }}>
            <div className="bg-white w-[260px] h-[360px] p-4 flex flex-col border border-black/[0.08]" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
              <div className="flex justify-between text-[8px] uppercase tracking-[0.05em] border-b border-gray-100 pb-2 mb-3 text-gray-500 font-semibold">
                <span>Hiring &amp; Staffing</span>
                <span className="text-[#FF0055]">AI-002</span>
              </div>
              <div className="flex-1 relative overflow-hidden mb-3" style={{ background: "#fafafa", borderRadius: "2px", isolation: "isolate" }}>
                <div className="animate-aura-breath absolute rounded-full" style={{ top: "-10%", left: "-10%", width: "140%", height: "140%", background: "#ff0055", filter: "blur(35px)", mixBlendMode: "multiply", opacity: 0.8 }} />
                <div className="animate-aura-breath absolute rounded-full" style={{ bottom: "-20%", right: "-20%", width: "120%", height: "120%", background: "#00ccff", filter: "blur(35px)", mixBlendMode: "multiply", opacity: 0.8, animationDelay: "-4s" }} />
              </div>
              <div className="mt-auto border-t border-gray-100 pt-3 flex justify-between items-end">
                <div>
                  <div className="font-eb-garamond italic text-[#111111] text-xl leading-none">AI Interviewer</div>
                  <div className="text-[9px] text-gray-400 mt-0.5 tracking-wide">12 candidates screened</div>
                </div>
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

          {/* Card 3, Real Estate · blue + teal */}
          <div className="absolute" style={{ top: "48%", right: "8%", transform: "rotate(15deg) scale(0.9)", zIndex: 1 }}>
            <div className="bg-white w-[260px] h-[360px] p-4 flex flex-col border border-black/[0.08]" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
              <div className="flex justify-between text-[8px] uppercase tracking-[0.05em] border-b border-gray-100 pb-2 mb-3 text-gray-500 font-semibold">
                <span>Real Estate</span>
                <span className="text-[#3300FF]">AI-003</span>
              </div>
              <div className="flex-1 relative overflow-hidden mb-3" style={{ background: "#fafafa", borderRadius: "2px", isolation: "isolate" }}>
                <div className="animate-aura-breath absolute rounded-full" style={{ top: "-20%", right: "-20%", width: "160%", height: "160%", background: "#3300ff", filter: "blur(35px)", mixBlendMode: "multiply", opacity: 0.8 }} />
                <div className="animate-aura-breath absolute rounded-full" style={{ bottom: "-20%", left: "-20%", width: "140%", height: "140%", background: "#00ffcc", filter: "blur(35px)", mixBlendMode: "multiply", opacity: 0.8, animationDelay: "-1s" }} />
              </div>
              <div className="mt-auto border-t border-gray-100 pt-3 flex justify-between items-end">
                <div>
                  <div className="font-eb-garamond italic text-[#111111] text-xl leading-none">Lead Qualifier</div>
                  <div className="text-[9px] text-gray-400 mt-0.5 tracking-wide">3 site visits booked</div>
                </div>
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
      // No audio file, simulate with transcript animation only
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
      {/* Atmospheric colour blobs, Digital Impressionism, shifts with active tab */}
      <div aria-hidden="true" style={{ position: "absolute", top: "-15%", left: "-8%", width: 360, height: 360, borderRadius: "50%", background: demo.color, filter: "blur(90px)", opacity: 0.07, transition: "background 0.6s ease", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", bottom: "-10%", right: "-5%", width: 280, height: 280, borderRadius: "50%", background: demo.color, filter: "blur(80px)", opacity: 0.05, transition: "background 0.6s ease", pointerEvents: "none" }} />
      <Container size="lg">
        <div className="text-center mb-12">
          <SectionLabel text="Suno khud · Hear it yourself" dark />
          <h2 className="text-3xl sm:text-4xl font-eb-garamond italic text-white leading-tight mb-3">
            Bharosa mat karo. Sun lo.
          </h2>
          <p className="text-white/70 text-base max-w-lg mx-auto mb-2">
            Yahi sunenge aapke customers, Hindi mein, English mein, ya dono ek saath.
          </p>
          <p className="text-white/40 text-sm max-w-md mx-auto">
            Real Indian business scenarios. This is exactly what your callers hear on the first ring.
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
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: demo.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14v2.92z"/>
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{demo.callerName} → Dhvani AI</p>
                <p className="text-white/40 text-xs">{isPlaying ? "Call in progress..." : visibleMessages > 0 ? "Call ended" : demo.scenario}</p>
              </div>
            </div>
            <div className="text-white/30 text-xs font-mono">
              {duration > 0 ? `${formatTime(currentTime)} / ${formatTime(duration)}` : visibleMessages > 0 ? `${visibleMessages}/${demo.transcript.length} exchanges` : ""}
            </div>
          </div>

          {/* Transcript */}
          <div
            ref={transcriptRef}
            className="px-6 py-5 space-y-3 overflow-y-auto"
            style={{ minHeight: 240, maxHeight: 280 }}
          >
            {visibleMessages === 0 && !isPlaying && (
              <div className="flex flex-col items-center justify-center h-32 gap-1">
                <p className="text-white/20 text-sm">Play karo aur suno</p>
                <p className="text-white/12 text-xs">{demo.scenario}</p>
              </div>
            )}
            {demo.transcript.slice(0, visibleMessages).map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.speaker === "Dhvani" ? "flex-row" : "flex-row-reverse"}`}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, background: msg.speaker === "Dhvani" ? demo.color : "rgba(255,255,255,0.15)", color: "white" }}>
                  {msg.speaker === "Dhvani" ? "D" : demo.callerName[0]}
                </div>
                <div style={{ maxWidth: "72%", padding: "8px 12px", borderRadius: msg.speaker === "Dhvani" ? "4px 14px 14px 14px" : "14px 4px 14px 14px", background: msg.speaker === "Dhvani" ? `${demo.color}22` : "rgba(255,255,255,0.08)", border: `1px solid ${msg.speaker === "Dhvani" ? `${demo.color}40` : "rgba(255,255,255,0.1)"}` }}>
                  <p className="text-[11px] font-bold mb-0.5" style={{ color: msg.speaker === "Dhvani" ? demo.color : "rgba(255,255,255,0.4)" }}>
                    {msg.speaker === "Dhvani" ? "Dhvani" : demo.callerName}
                  </p>
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
                {isPlaying ? "Dhvani bol rahi hai..." : "Play karke suno"}
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
          Sample conversations, representative of actual Dhvani agent behavior across Indian businesses
        </p>
      </Container>
    </section>
  );
};

// ─── SOCIAL PROOF BAR ─────────────────────────────────────────────────────────
const SocialProofBar = () => {
  const metrics: {
    num: string;
    unit?: string;
    prefix?: string;
    label: string;
    icon: React.ReactNode;
  }[] = [
    {
      num: "30",
      unit: "min",
      label: "One Call to Go Live",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
        </svg>
      ),
    },
    {
      num: "₹0",
      label: "To Start",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/><path d="M8 8h5a2 2 0 010 4H8v4m0-8v8m3-8h1"/>
        </svg>
      ),
    },
    {
      num: "24/7",
      label: "Always On",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>
        </svg>
      ),
    },
    {
      num: "2",
      unit: "s",
      prefix: "<",
      label: "Answer Latency",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
    },
    {
      num: "5",
      unit: "s",
      prefix: "<",
      label: "WhatsApp Ping",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
    },
  ];
  return (
    <div className="bg-[#F9F6F4] border-b border-gray-200">
      <Container size="lg">
        <div className="py-10 sm:py-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-4">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <span className="text-gray-300">{m.icon}</span>
              {/* Number: elegant serif + tiny mono unit */}
              <div className="flex items-baseline justify-center gap-0.5 leading-none">
                {m.prefix && (
                  <span className="font-mono text-lg text-gray-400 mr-0.5 leading-none" style={{ fontFeatureSettings: '"tnum"' }}>{m.prefix}</span>
                )}
                <span className="font-eb-garamond italic text-5xl sm:text-6xl text-[#0A1128] leading-none">{m.num}</span>
                {m.unit && (
                  <span className="font-mono text-base text-gray-400 ml-0.5 leading-none" style={{ fontFeatureSettings: '"tnum"' }}>{m.unit}</span>
                )}
              </div>
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 leading-tight">{m.label}</p>
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
    {
      scenario: "Dental clinic misses 1 new patient call",
      cost: "₹15,000",
      note: "in lost revenue, per call",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
    },
    {
      scenario: "Real estate agent misses 1 property inquiry",
      cost: "₹40,000",
      note: "in commission, gone in 40 minutes",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
    },
    {
      scenario: "Home service misses 1 AC repair call",
      cost: "₹1,500",
      note: "lost + a one-star Google review on top",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      ),
    },
  ];

  const leakage = [
    { text: "WhatsApp message sent at 8pm.", sub: "Nobody replied. Lead went cold." },
    { text: "\"Call me later,\" the lead said.", sub: "Nobody called. They booked with someone who did." },
    { text: "Candidate applied on Monday.", sub: "Got screened Thursday. Joined elsewhere on Wednesday." },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <Container size="md">

        {/* Header */}
        <SectionLabel text="Asli problem" />
        <h2 className="text-3xl sm:text-5xl font-eb-garamond italic text-[#0A1128] leading-[1.1] mb-4 max-w-3xl">
          Aapka marketing theek hai.<br />
          <span className="text-gray-400">Missed calls problem hai.</span>
        </h2>
        <p className="text-base text-gray-500 max-w-xl mb-12 leading-relaxed">
          Most Indian businesses don&apos;t lose leads to bad ads or wrong pricing.
          They lose them in the 3 seconds after the phone rings and nobody picks up.
        </p>

        {/* Ledger, scenario + consequence on the same row */}
        <div className="mb-3">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-1">
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-300">The scenario</p>
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-300">What it costs</p>
          </div>

          {costs.map((c, i) => (
            <div key={i} className="group py-5 border-b border-gray-100 flex items-center gap-4 sm:gap-6">
              {/* Icon */}
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#F9F6F4] flex items-center justify-center text-gray-300">
                {c.icon}
              </div>

              {/* Scenario text */}
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base text-[#0A1128] leading-snug">{c.scenario}</p>
                <p className="text-xs text-gray-400 mt-0.5">{c.note}</p>
              </div>

              {/* Arrow */}
              <div className="hidden sm:block flex-shrink-0 text-gray-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              {/* Cost, the punchline */}
              <div className="flex-shrink-0 text-right">
                <span className="font-eb-garamond italic text-3xl sm:text-4xl text-red-600 leading-none">{c.cost}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Punchline under the ledger */}
        <div className="pl-4 border-l-2 border-[#0A1128] mb-12">
          <p className="text-sm text-gray-500">
            Nobody answers. Lead waits 3 seconds. Then opens Google Maps and calls the next clinic, agent, or recruiter.
          </p>
          <p className="mt-2 text-base font-semibold text-[#0A1128]">
            Yeh ek bura din nahi hai. Yeh Tuesday hai.
          </p>
        </div>

        {/* Leakage block */}
        <div className="bg-[#0A1128] rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="px-6 sm:px-8 pt-7 pb-6">
            <p className="text-white font-semibold text-lg leading-snug">
              Sirf missed call nahi hai yeh.
            </p>
            <p className="text-white/40 text-sm mt-1">
              The leak happens at every step after the call too.
            </p>
          </div>

          {/* Rows */}
          <div className="border-t border-white/[0.08] divide-y divide-white/[0.06]">
            {[
              {
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                ),
                text: "WhatsApp message sent at 8pm.",
                sub: "Nobody replied. Lead went cold.",
                tag: "Lead lost",
              },
              {
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-white/40">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14v2.92z"/>
                  </svg>
                ),
                text: "\"Call me later,\" the lead said.",
                sub: "Nobody called. They booked with someone who did.",
                tag: "Booking lost",
              },
              {
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-white/40">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                  </svg>
                ),
                text: "Candidate applied on Monday.",
                sub: "Got screened Thursday. Joined elsewhere on Wednesday.",
                tag: "Hire lost",
              },
            ].map((l, i) => (
              <div key={i} className="px-6 sm:px-8 py-4 flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center">
                  {l.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/80 text-sm font-medium">{l.text}</p>
                  <p className="text-white/35 text-xs mt-0.5">{l.sub}</p>
                </div>
                <span className="flex-shrink-0 text-[10px] font-bold tracking-[0.1em] uppercase text-white/25 bg-white/[0.06] border border-white/10 rounded-full px-2.5 py-1">
                  {l.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Footer, closing statement */}
          <div className="px-6 sm:px-8 py-6 border-t border-white/[0.08]">
            <p className="font-eb-garamond italic text-white text-xl sm:text-2xl leading-snug">
              Yeh sab revenue aapne pehle se kama liya tha.
            </p>
            <p className="text-white/40 text-sm mt-1">Table pe pada reh gaya.</p>
          </div>
        </div>

      </Container>
    </section>
  );
};

// ─── SOLUTION ─────────────────────────────────────────────────────────────────
const SolutionSection = () => (
  <section className="py-20 sm:py-24 bg-[#F9F6F4]">
    <Container size="md">

      {/* Transition, dismiss the half-fixes fast */}
      <div className="flex flex-col gap-1.5 mb-6">
        {["Hire a second receptionist. She gets busy too.", "Add a WhatsApp chatbot. Half your leads call instead of typing.", "Buy a voice bot. Lead goes cold. Nobody follows up."].map((t, i) => (
          <div key={i} className="flex items-center gap-2.5 text-sm text-gray-400">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-gray-300"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            {t}
          </div>
        ))}
      </div>
      <p className="text-base font-semibold text-[#0A1128] mb-12">
        None of them fix the whole pipeline. Guftugu is the whole pipeline.
      </p>

      {/* Heading, leverage framing */}
      <SectionLabel text="The system · Guftugu" />
      <h2 className="text-3xl sm:text-4xl font-eb-garamond italic text-[#0A1128] leading-tight mb-3 max-w-xl">
        Every call answered.<br />
        Every lead followed up.<br />
        <span className="text-gray-400">You get pinged only when it&apos;s hot.</span>
      </h2>
      <p className="text-base text-gray-500 mb-10 max-w-lg leading-relaxed">
        Guftugu is not a chatbot or a voice bot, it&apos;s your complete lead pipeline, trained on your business and running 24/7 without you.
      </p>

      {/* ICP leverage statements, 3 lines */}
      <div className="space-y-2 mb-12">
        {[
          { who: "Doctor/Clinic", line: "While you're with a patient, Guftugu is booking your next one." },
          { who: "Real Estate", line: "While you're in a site visit, Guftugu is qualifying the next buyer." },
          { who: "Recruiter", line: "While your team screens one candidate, Guftugu is screening the other 139." },
        ].map((s, i) => (
          <div key={i} className="flex items-baseline gap-3">
            <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-gray-300 w-24 flex-shrink-0">{s.who}</span>
            <p className="text-sm text-gray-700">{s.line}</p>
          </div>
        ))}
      </div>

      {/* Flowchart, two-character system */}
      <div className="mb-6">
        <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-300 mb-4">How Guftugu runs</p>

        {/* Trigger node */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full bg-white px-4 py-2">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14v2.92z"/></svg>
            <span className="text-xs font-semibold text-gray-500">Call comes in</span>
          </div>
        </div>

        {/* Down arrow */}
        <div className="flex justify-center mb-3">
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round"><line x1="6" y1="0" x2="6" y2="16"/><polyline points="2,12 6,18 10,12"/></svg>
        </div>

        {/* Two-bot zone */}
        <div className="grid grid-cols-1 sm:grid-cols-[1fr,40px,1fr] gap-0 items-start">

          {/* Dhvani zone */}
          <div className="bg-white border border-orange-100 rounded-2xl p-5" style={{ boxShadow: "0 2px 12px rgba(255,136,0,0.06)" }}>
            {/* Character avatar */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF8800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
                  <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.12em] uppercase text-orange-500">Dhvani</p>
                <p className="text-[10px] text-gray-400">Voice AI</p>
              </div>
            </div>
            <div className="space-y-2.5">
              {[
                "Answers in under 2 seconds, Hindi, English, or Hinglish",
                "Asks your exact questions. Captures name, need, intent.",
                "Books directly into your calendar. No IVR. No press-1.",
              ].map((t, i) => (
                <div key={i} className="flex gap-2.5 text-xs text-gray-600">
                  <span className="text-orange-300 flex-shrink-0 mt-0.5">→</span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Handoff arrow, center */}
          <div className="flex items-center justify-center h-full py-6 sm:py-0">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" className="hidden sm:block"><line x1="0" y1="6" x2="16" y2="6"/><polyline points="12,2 18,6 12,10"/></svg>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" className="sm:hidden"><line x1="6" y1="0" x2="6" y2="16"/><polyline points="2,12 6,18 10,12"/></svg>
          </div>

          {/* Sandesh zone */}
          <div className="bg-white border border-green-100 rounded-2xl p-5" style={{ boxShadow: "0 2px 12px rgba(37,211,102,0.06)" }}>
            {/* Character avatar */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.12em] uppercase text-green-600">Sandesh</p>
                <p className="text-[10px] text-gray-400">WhatsApp</p>
              </div>
            </div>
            <div className="space-y-2.5">
              {[
                "Didn't pick up? WhatsApp fires automatically within 5 seconds.",
                "Booked? Reminder sent 2 hours before, no-shows drop.",
                "Went cold? 14-day follow-up runs. You get pinged when they're hot.",
              ].map((t, i) => (
                <div key={i} className="flex gap-2.5 text-xs text-gray-600">
                  <span className="text-green-400 flex-shrink-0 mt-0.5">→</span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Down arrow to outcome */}
        <div className="flex justify-center my-3">
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round"><line x1="6" y1="0" x2="6" y2="16"/><polyline points="2,12 6,18 10,12"/></svg>
        </div>

        {/* Outcome node */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 bg-[#FCCA07] rounded-full px-5 py-2.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0A1128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
            <span className="text-xs font-bold text-[#0A1128]">You get pinged, only when the lead is hot</span>
          </div>
        </div>
      </div>

      {/* Memory callout, compounding advantage */}
      <div className="bg-[#0A1128] rounded-2xl p-6 sm:p-8 text-white">
        <p className="font-semibold text-white text-base mb-1">Gets sharper with every call.</p>
        <p className="text-white/50 text-sm leading-relaxed mb-5">
          Every conversation Guftugu handles makes the next one better. It learns what your callers actually say, so it handles them better than a new hire ever could.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              when: "Week 1",
              headline: "Live and answering",
              icp: "Your chair stops sitting empty after hours.",
            },
            {
              when: "Week 3",
              headline: "Knows your regulars",
              icp: "Returning patient? Warm buyer? It recognises them.",
            },
            {
              when: "Month 2",
              headline: "Filters your best leads",
              icp: "Your agent, doctor, recruiter, only talks to people worth their time.",
            },
          ].map((m, i) => (
            <div key={i} className="bg-white/[0.06] rounded-xl px-4 py-3 border border-white/[0.06]">
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">{m.when}</p>
              <p className="text-sm font-semibold text-white/80 mb-1">{m.headline}</p>
              <p className="text-xs text-white/40 leading-relaxed">{m.icp}</p>
            </div>
          ))}
        </div>
      </div>

    </Container>
  </section>
);

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────
const HowItWorksSection = () => {
  const steps = [
    {
      num: "01",
      badge: "30 min",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14v2.92z"/>
        </svg>
      ),
      title: "You talk. We listen.",
      sub: "One call. No slides. No commitment.",
      bullets: ["We map your callers, your questions, your tone.", "Bring recordings if you have them, we'll train on real calls."],
      you: "Your effort: 30 minutes.",
    },
    {
      num: "02",
      badge: "30 mins",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
      ),
      title: "We build everything.",
      sub: "Done-for-you. You don't touch the tech.",
      bullets: ["Script written. AI trained. WhatsApp flows set up.", "Connected to your calendar or CRM."],
      you: "Your effort: zero.",
    },
    {
      num: "03",
      badge: "24/7",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
        </svg>
      ),
      title: "Guftugu runs. You get leads.",
      sub: "You only pick up when it's worth it.",
      bullets: ["Every call answered. Every lead followed up.", "You get a WhatsApp ping when someone is ready to book."],
      you: "Your effort: show up for the close.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container size="md">
        <SectionLabel text="Process" />
        <h2 className="text-3xl sm:text-4xl font-eb-garamond italic text-[#0A1128] leading-tight mb-10">
          Three steps.<br />
          <span className="text-gray-400">You barely have to show up.</span>
        </h2>

        {/* Step cards, horizontal on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {steps.map((step, i) => (
            <div key={i} className="relative bg-[#F9F6F4] border border-gray-200 rounded-2xl p-5 flex flex-col gap-4">
              {/* Step number + badge row */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-gray-400">{step.num}</span>
                <span className="text-[10px] font-bold tracking-[0.1em] uppercase bg-[#0A1128] text-white rounded-full px-2.5 py-1">
                  {step.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#0A1128]">
                {step.icon}
              </div>

              {/* Title + sub */}
              <div>
                <p className="font-eb-garamond italic text-[#0A1128] text-xl leading-snug mb-0.5">{step.title}</p>
                <p className="text-xs text-gray-500">{step.sub}</p>
              </div>

              {/* Bullets */}
              <ul className="space-y-1.5 flex-1">
                {step.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-xs text-gray-600 leading-relaxed">
                    <span className="text-gray-400 flex-shrink-0 mt-0.5">-</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Your effort callout */}
              <p className="text-[11px] font-semibold text-[#0A1128] border-t border-gray-300 pt-3">{step.you}</p>

              {/* Connector arrow, hidden on last */}
              {i < steps.length - 1 && (
                <div className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 justify-center">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round"><line x1="0" y1="6" x2="12" y2="6"/><polyline points="8,2 14,6 8,10"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <PrimaryBtn href={CAL_LINK} label="Book your 30-min call" size="lg" />
        </div>
      </Container>
    </section>
  );
};

// ─── USE CASES ────────────────────────────────────────────────────────────────
type UseCaseTab = "dental" | "realestate" | "hiring";

const OUTCOME_ICONS: Record<string, React.ReactNode> = {
  clock: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  lang: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  bell: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  alert: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  refresh: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.51"/></svg>,
  rupee: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="3" x2="18" y2="3"/><line x1="6" y1="8" x2="18" y2="8"/><line x1="6" y1="13" x2="18" y2="21"/><path d="M6 8h8a4 4 0 0 0 0-8H6"/></svg>,
  phone: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.34 2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  qualify: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
  crm: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  wa: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
  bolt: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  star: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  users: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  mic: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
  filter: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
};

const useCaseData = {
  dental: {
    label: "Dental & Medical",
    role: "Guftugu Receptionist",
    accentColor: "#F97316",
    headline: "Your new receptionist. Books appointments at 11pm. Never calls in sick.",
    snap: [
      { value: "3–5", label: "high-value calls missed per week" },
      { value: "₹45k", label: "leaking weekly from unanswered calls" },
      { value: "0", label: "of those leads recovered" },
    ],
    punchline: "Not bad marketing. Just an unanswered phone.",
    outcomes: [
      { icon: "clock", text: "24/7 booking, even at 11pm" },
      { icon: "lang", text: "Hindi + English, in the same call" },
      { icon: "bell", text: "WhatsApp reminders → no-shows drop" },
      { icon: "alert", text: "High-value inquiry? You get pinged instantly" },
      { icon: "refresh", text: "Auto follow-up on every missed call" },
      { icon: "rupee", text: "Full reception, ₹2,499/mo, no extra staff" },
    ],
    comparison: [
      { metric: "After-hours calls", before: "Voicemail / missed", after: "Answered & booked" },
      { metric: "Response time", before: "30+ min callback", after: "< 2 seconds" },
      { metric: "No-show rate", before: "High, no reminders", after: "WhatsApp reminders sent" },
    ],
    cta: { label: "Get a Free Ghost Patient Report", note: "We call your clinic as a mystery patient, at peak hours and at 9pm." },
  },
  realestate: {
    label: "Real Estate",
    role: "Guftugu Lead Qualifier",
    accentColor: "#3B82F6",
    headline: "That inquiry just came in. You're on a site visit. Your competitor answered.",
    snap: [
      { value: "40 min", label: "avg. callback delay when on a visit" },
      { value: "₹40k", label: "commission per missed hot lead" },
      { value: "0", label: "follow-ups after a missed call" },
    ],
    punchline: "Your pipeline isn't broken. Your phone response is.",
    outcomes: [
      { icon: "phone", text: "Answered during site visits, drives, meetings" },
      { icon: "qualify", text: "Budget, area, timeline, qualified on the call" },
      { icon: "crm", text: "Auto-logged to your CRM or Google Sheet" },
      { icon: "wa", text: "14-day WhatsApp follow-up for cold leads" },
      { icon: "bolt", text: "<2s response, faster than any competitor" },
      { icon: "star", text: "You call back as the most prepared agent" },
    ],
    comparison: [
      { metric: "Response time", before: "40 min (if lucky)", after: "< 2 seconds" },
      { metric: "Lead qualification", before: "Next day, unprepared", after: "On the call, fully qualified" },
      { metric: "Follow-up cadence", before: "Manual, often forgotten", after: "14-day WhatsApp auto" },
    ],
    cta: { label: "Get a Free Speed-to-Lead Test", note: "We submit a property inquiry to your agency and time the response." },
  },
  hiring: {
    label: "Hiring & Staffing",
    role: "Guftugu Interviewer",
    accentColor: "#8B5CF6",
    headline: "140 applications. All first-round screened in 24 hours. You get only the qualified ones.",
    snap: [
      { value: "140", label: "applications, 4 hrs of cold calling" },
      { value: "36 hrs", label: "wasted per batch on screening" },
      { value: "2", label: "qualified found after all that effort" },
    ],
    punchline: "Your best recruiter is burning out on work that shouldn't need a human.",
    outcomes: [
      { icon: "users", text: "140 candidates screened in 24 hours" },
      { icon: "lang", text: "Hindi, English, Gujarati, Tamil, Marathi" },
      { icon: "mic", text: "Every call recorded for compliance + QA" },
      { icon: "wa", text: "WhatsApp follow-up for candidates who didn't pick up" },
      { icon: "filter", text: "Clean shortlist, only the qualified ones" },
      { icon: "clock", text: "40 hours/month back to senior staff" },
    ],
    comparison: [
      { metric: "Screen 140 applicants", before: "4 days of calling", after: "24 hours" },
      { metric: "Hours wasted on screening", before: "36 hours", after: "0" },
      { metric: "Shortlist quality", before: "8 of 140 qualified", after: "100% pre-qualified" },
    ],
    cta: { label: "Get a Free Screening Volume Audit", note: "We review your current first-round volume before you commit to anything." },
  },
};

const TAB_ICONS: Record<UseCaseTab, React.ReactNode> = {
  dental: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
      <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5.8 4.5 1.8 6.2C8.8 16 9.5 17.5 9.5 20h5c0-2.5.7-4 1.7-5.8C17.2 12.5 18 10.5 18 8c0-3.5-2.5-6-6-6z"/>
    </svg>
  ),
  realestate: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  hiring: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
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
          Pick your industry. See what you stop losing.
        </h2>

        {/* Tab bar */}
        <div className="flex gap-0 mb-10 border-b border-gray-200 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold whitespace-nowrap transition-all border-b-2 -mb-px ${
                active === t.key
                  ? "border-[#0A1128] text-[#0A1128]"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              <span className={active === t.key ? "text-[#0A1128]" : "text-gray-400"}>
                {TAB_ICONS[t.key]}
              </span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Active use case card */}
        <div className="bg-white border border-black/[0.06] overflow-hidden rounded-2xl" style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.04)" }}>

          {/* Header */}
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

          {/* Problem snapshot + Outcome chips, 2 col on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-5 border-b border-gray-100">
            {/* Problem snapshot */}
            <div className="sm:col-span-2 px-6 sm:px-8 py-6 bg-gray-50 border-b border-gray-100 sm:border-b-0 sm:border-r sm:border-gray-100">
              <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-4">The problem</p>
              <div className="flex gap-2 mb-5">
                {uc.snap.map((s, i) => (
                  <div key={i} className="flex-1 bg-white rounded-xl border border-gray-100 p-3 text-center" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                    <p className="font-eb-garamond italic text-xl text-[#0A1128] leading-none">{s.value}</p>
                    <p className="text-[10px] text-gray-400 mt-1.5 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
              <p className="font-eb-garamond italic text-[#0A1128] text-base leading-snug">{uc.punchline}</p>
            </div>

            {/* Outcome chips */}
            <div className="sm:col-span-3 px-6 sm:px-8 py-6">
              <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-4">With Guftugu</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {uc.outcomes.map((o, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 rounded-lg border border-gray-100 bg-white px-3 py-2.5"
                    style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                  >
                    <span className="flex-shrink-0" style={{ color: uc.accentColor }}>
                      {OUTCOME_ICONS[o.icon]}
                    </span>
                    <span className="text-[13px] text-[#0A1128] font-medium leading-snug">{o.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics comparison table */}
          <div className="px-6 sm:px-8 py-6 border-b border-gray-100">
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-x-3 gap-y-2">
              {/* Header */}
              <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 pb-1" />
              <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 pb-1">Before</div>
              <div className="text-[10px] font-bold tracking-widest uppercase pb-1" style={{ color: uc.accentColor }}>With Guftugu</div>
              {/* Rows */}
              {uc.comparison.map((row, i) => (
                <>
                  <div key={`m${i}`} className="text-xs text-gray-500 self-center py-1">{row.metric}</div>
                  <div key={`b${i}`} className="bg-gray-100 rounded-lg px-3 py-2 text-xs font-semibold text-gray-600">{row.before}</div>
                  <div key={`a${i}`} className="rounded-lg px-3 py-2 text-xs font-semibold" style={{ background: "#F0FDF4", color: "#15803d" }}>{row.after}</div>
                </>
              ))}
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
    {
      industry: "Dental & Medical Clinics",
      role: "Guftugu Receptionist",
      outcome: "Every missed call becomes a booked appointment.",
      accent: "#F97316",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5.8 4.5 1.8 6.2C8.8 16 9.5 17.5 9.5 20h5c0-2.5.7-4 1.7-5.8C17.2 12.5 18 10.5 18 8c0-3.5-2.5-6-6-6z"/>
        </svg>
      ),
    },
    {
      industry: "Real Estate Agencies",
      role: "Guftugu Lead Qualifier",
      outcome: "Every inquiry answered, qualified, and followed up.",
      accent: "#3B82F6",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
    },
    {
      industry: "Hiring & Staffing Agencies",
      role: "Guftugu Interviewer",
      outcome: "140 screened in 24h. Your recruiter gets only the qualified.",
      accent: "#8B5CF6",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
    {
      industry: "Home Services",
      role: "Guftugu Dispatcher",
      outcome: "Job qualified on the call. Brief on your team's WhatsApp.",
      accent: "#10B981",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
    },
    {
      industry: "Hotels & Hospitality",
      role: "Guftugu Concierge",
      outcome: "Guest queries answered 24/7. Follow-up handled automatically.",
      accent: "#F59E0B",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
    },
    {
      industry: "Marketing Agencies",
      role: "Guftugu for Agencies",
      outcome: "Run it for your clients. White-labelled under your brand.",
      accent: "#EC4899",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
    },
    {
      industry: "Technical Support",
      role: "Guftugu Support Line",
      outcome: "Fault triage handled by voice. Updates sent via WhatsApp.",
      accent: "#6366F1",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
        </svg>
      ),
    },
  ];

  return (
    <Container className="mt-12">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xl sm:text-2xl font-eb-garamond italic text-[#0A1128] mb-1">One system. Seven industries. Zero missed calls.</p>
        <p className="text-sm text-gray-500">Same Guftugu, configured for how your business actually works.</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
        {cases.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 border border-gray-100 flex flex-col gap-3"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
          >
            {/* Icon badge */}
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${c.accent}15`, color: c.accent }}>
              {c.icon}
            </div>
            {/* Text */}
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: c.accent }}>{c.role}</p>
              <p className="font-semibold text-[#0A1128] text-sm mb-1">{c.industry}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{c.outcome}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA banner */}
      <div className="bg-[#0A1128] rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-white font-semibold text-sm">Don&apos;t see your industry?</p>
          <p className="text-white/50 text-xs mt-0.5">We&apos;ve built for 20+ use cases. If you have calls, leads, or candidates, Guftugu works.</p>
        </div>
        <PrimaryBtn href={CAL_LINK} label="Talk to us" size="sm" />
      </div>
    </Container>
  );
};

// ─── WHY WE'RE DIFFERENT ──────────────────────────────────────────────────────
const WhyDifferentSection = () => {
  const criteria = [
    { label: "Answers voice calls",         vals: [false, false, false, true] },
    { label: "Built for Indian SMBs",       vals: [false, false, false, true] },
    { label: "Done-for-you service",        vals: [false, false, false, true] },
    { label: "No dev team required",        vals: [false, false, false, true] },
    { label: "Hindi + English voice",       vals: [false, false, false, true] },
    { label: "Learns your business",        vals: [false, false, false, true] },
  ];

  const differentiators = [
    {
      title: "Done-for-you, not a platform",
      body: "We run Guftugu. You get the leads.",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    },
    {
      title: "Both channels, connected",
      body: "Dhvani catches the call. Sandesh works the lead. Nothing falls through.",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.34 2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 2a9 9 0 0 1 8 7.94M14.05 6A5 5 0 0 1 18 10"/></svg>,
    },
    {
      title: "Trained on your business",
      body: "30-min call. Call recordings if you have them. It knows your clinic, agency, or team before going live.",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    },
    {
      title: 'No IVR. No "press 1 for service."',
      body: "Conversational from the first second, in Hindi, English, or both.",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>,
    },
    {
      title: "Gets smarter every month",
      body: "Guftugu learns from every call. The longer it runs, the more it knows about your specific callers.",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    },
  ];

  const Check = () => (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FCCA07]">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0A1128" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </span>
  );
  const Cross = () => (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </span>
  );

  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container size="md">
        <SectionLabel text="What makes us different" />
        <h2 className="text-3xl sm:text-4xl font-eb-garamond italic text-[#0A1128] leading-tight mb-2 max-w-2xl">
          Every other AI company starts with a demo.
          <br />
          <span className="text-gray-400">We start with a question.</span>
        </h2>
        <p className="text-gray-500 mb-10 text-sm max-w-lg">
          Most voice AI breaks the moment it goes live in an Indian business. Guftugu is built for that chaos.
        </p>

        {/* Comparison table */}
        <div className="rounded-2xl border border-gray-100 overflow-hidden mb-12" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
          {/* Table header */}
          <div className="grid grid-cols-[1fr_80px_80px_80px_100px] bg-gray-50 border-b border-gray-100">
            <div className="px-5 py-3" />
            {["Platform cos", "Enterprise", "WA Chatbots"].map((h) => (
              <div key={h} className="py-3 text-center">
                <p className="text-[10px] font-bold tracking-wider uppercase text-gray-400 leading-tight">{h}</p>
              </div>
            ))}
            <div className="py-3 text-center bg-[#0A1128]">
              <p className="text-[10px] font-bold tracking-wider uppercase text-[#FCCA07] leading-tight">Guftugu</p>
            </div>
          </div>

          {/* Rows */}
          {criteria.map((row, i) => (
            <div key={i} className={`grid grid-cols-[1fr_80px_80px_80px_100px] border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
              <div className="px-5 py-3.5 text-xs font-medium text-gray-600 self-center">{row.label}</div>
              {row.vals.slice(0, 3).map((v, j) => (
                <div key={j} className="py-3.5 flex items-center justify-center">
                  {v ? <Check /> : <Cross />}
                </div>
              ))}
              <div className="py-3.5 flex items-center justify-center bg-[#0A1128]/[0.03]">
                <Check />
              </div>
            </div>
          ))}
        </div>

        {/* Differentiators */}
        <p className="text-lg font-eb-garamond italic text-[#0A1128] mb-6">What you actually get with Guftugu</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
          {differentiators.map((d, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0A1128] flex items-center justify-center flex-shrink-0 mt-0.5 text-[#FCCA07]">
                {d.icon}
              </div>
              <div>
                <p className="font-semibold text-[#0A1128] text-sm mb-0.5">{d.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{d.body}</p>
              </div>
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
      tag: "STARTER",
      highlight: false,
      badge: null,
      setup: "₹0 setup",
      monthly: "₹2,499",
      perDay: "₹83/day",
      worthOf: "₹18,000+",
      replaces: "Part-time answering service",
      roi: "Convert 1 extra lead/month and you've already broken even.",
      ctaHref: CAL_LINK,
      featureGroups: [
        { label: "Calls & Coverage", items: [
          { text: "100 voice minutes/month", val: null },
          { text: "1 AI agent — support or sales", val: null },
          { text: "Indian business number + Hindi or English", val: null },
        ]},
        { label: "Follow-up", items: [
          { text: "Instant WhatsApp reply to every lead, 24/7", val: "₹5,000/mo value" },
          { text: "Missed-call WhatsApp fallback", val: null },
        ]},
        { label: "Tools & Support", items: [
          { text: "Lead pipeline dashboard", val: null },
          { text: "3 script tweaks/month + Email support, 48h", val: null },
        ]},
      ],
      overage: "₹600 per 100 extra minutes",
      best: "Clinics, brokers, service businesses who want proof first.",
    },
    {
      tag: "PROFESSIONAL",
      highlight: true,
      badge: "Most businesses upgrade here",
      setup: "₹15,000 setup",
      monthly: "₹9,999",
      perDay: "₹333/day",
      worthOf: "₹65,000+",
      replaces: "Full-time receptionist (₹25,000-35,000/mo salary)",
      roi: "Convert 3 extra leads/month and the agent pays for itself 3x over.",
      ctaHref: CAL_LINK,
      featureGroups: [
        { label: "Calls & Coverage", items: [
          { text: "1,500 min · 2 agents (Dhvani + Sandesh)", val: null },
          { text: "3 concurrent calls · Bilingual Hindi ↔ English", val: null },
        ]},
        { label: "Follow-up System", items: [
          { text: "14-day WhatsApp + voice follow-up sequence", val: "₹8,000 value" },
          { text: "No-Show Recovery — checks in 2 hrs before", val: "₹5,000 value" },
          { text: "Smart channel switching + Owner alerts", val: null },
        ]},
        { label: "Setup & Automation", items: [
          { text: "Done-for-you scripts, unlimited tweaks", val: "₹15,000 value" },
          { text: "CRM export: Sheets, Airtable, Webhook", val: null },
        ]},
        { label: "Support", items: [
          { text: "Priority WhatsApp support, 24h SLA", val: null },
        ]},
      ],
      overage: null,
      best: "Dental clinics, real estate agencies, hiring teams.",
    },
    {
      tag: "ENTERPRISE",
      highlight: false,
      badge: null,
      setup: "₹45,000+ setup",
      monthly: "₹24,999",
      perDay: "₹833/day",
      worthOf: "₹1,50,000+",
      replaces: "3-person call center team (₹75,000-90,000/mo)",
      roi: "Typical ROI: 8-12x within the first 90 days.",
      ctaHref: CAL_LINK,
      featureGroups: [
        { label: "Calls & Coverage", items: [
          { text: "5,000 min · Unlimited agents · 10+ concurrent", val: null },
          { text: "3 numbers · Any language, multilingual routing", val: null },
        ]},
        { label: "Growth Automation", items: [
          { text: "Dead Lead Reactivation, 30-day drip", val: "₹20,000 value" },
          { text: "Autonomous A/B testing — AI picks the winner", val: "₹15,000 value" },
          { text: "2-way CRM sync: Salesforce, HubSpot, Zoho", val: null },
        ]},
        { label: "Success & Reporting", items: [
          { text: "Weekly WhatsApp performance summary", val: null },
          { text: "Dedicated Account Manager", val: "₹30,000 value" },
        ]},
      ],
      overage: null,
      best: "Hospitals, large brokerages, BPOs, staffing agencies.",
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-24 bg-[#F9F6F4]">
      <Container>
        <SectionLabel text="Pricing" />

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-eb-garamond italic text-[#0A1128] leading-tight mb-3">
          One missed call costs more<br className="hidden sm:block" /> than your entire monthly plan.
        </h2>
        <p className="text-gray-500 mb-10 max-w-lg">
          A single converted lead pays for 3 months. No hidden fees. No per-minute surprise billing at month end.
        </p>

        {/* Human vs AI anchor bar */}
        <div className="flex flex-col sm:flex-row mb-12 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="flex-1 bg-[#0A1128] px-6 py-5">
            <p className="text-[10px] font-bold tracking-widest uppercase text-white/60 mb-1.5">What you pay a human receptionist</p>
            <p className="text-2xl font-bold text-white">₹25,000 – ₹35,000<span className="text-sm font-normal text-white/60">/month</span></p>
            <p className="text-xs text-white/60 mt-1">Salary only. Add training, sick days, and zero night/weekend coverage.</p>
          </div>
          <div className="flex items-center justify-center bg-[#FCCA07] px-5 py-3 sm:py-0">
            <span className="text-[#0A1128] font-black text-base tracking-tight">VS</span>
          </div>
          <div className="flex-1 bg-white px-6 py-5">
            <p className="text-[10px] font-bold tracking-widest uppercase text-gray-600 mb-1.5">Your Guftugu AI agent</p>
            <p className="text-2xl font-bold text-[#0A1128]">Starts at ₹2,499<span className="text-sm font-normal text-gray-500">/month</span></p>
            <p className="text-xs text-gray-600 mt-1">Answers every call. Follows up on WhatsApp. Works 24/7. Never quits.</p>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 md:items-stretch">
          {tiers.map((t, i) => (
            <div key={i} className={`relative flex flex-col ${t.badge ? "mt-5" : ""}`}>
              {t.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FCCA07] text-[#0A1128] text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap z-10 shadow-sm">
                  {t.badge}
                </div>
              )}
              <div className={`rounded-2xl border flex flex-col flex-1 overflow-hidden ${
                t.highlight ? "bg-[#0A1128] border-[#0A1128] text-white" : "bg-white border-gray-200 text-[#0A1128]"
              }`}>

                {/* Header */}
                <div className={`px-6 pt-7 pb-5 border-b ${t.highlight ? "border-white/10" : "border-gray-100"}`}>
                  <span className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.12em] uppercase mb-3 ${
                    t.highlight ? "bg-blue-500/20 text-blue-300" : "bg-blue-50 text-blue-600"
                  }`}>
                    {t.tag}
                  </span>

                  {/* Replaces */}
                  <div className={`flex items-start gap-1.5 text-xs mb-4 min-h-[2.5rem] ${t.highlight ? "text-white/60" : "text-gray-500"}`}>
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    Replaces: {t.replaces}
                  </div>

                  {/* Price */}
                  <p className={`text-xs font-medium mb-0.5 ${t.highlight ? "text-white/50" : "text-gray-400"}`}>{t.setup}</p>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-4xl font-bold tracking-tight">{t.monthly}</span>
                    <span className={`text-sm ${t.highlight ? "text-white/50" : "text-gray-400"}`}>/month</span>
                  </div>
                  <p className={`text-xs mb-4 font-medium ${t.highlight ? "text-[#FCCA07]/70" : "text-gray-400"}`}>
                    {t.perDay} — less than your chai per appointment
                  </p>

                  {/* Value stack */}
                  <div className={`rounded-xl px-4 py-3 ${t.highlight ? "bg-white/8" : "bg-gray-100"}`}>
                    <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${t.highlight ? "text-white/50" : "text-gray-500"}`}>
                      Total value inside
                    </p>
                    <div className="flex items-center gap-2">
                      <span className={`text-lg font-bold line-through ${t.highlight ? "text-white/40" : "text-gray-400"}`}>{t.worthOf}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${t.highlight ? "bg-white/15 text-white/70" : "bg-gray-300 text-gray-600"}`}>you save</span>
                    </div>
                  </div>
                </div>

                {/* ROI callout */}
                <div className={`mx-5 mt-4 px-3.5 py-2.5 rounded-xl flex items-start gap-2.5 ${t.highlight ? "bg-green-400/10 border border-green-400/20" : "bg-green-50 border border-green-100"}`}>
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <p className={`text-xs leading-snug ${t.highlight ? "text-green-300" : "text-green-700"}`}>{t.roi}</p>
                </div>

                {/* Features */}
                <div className="px-6 py-5 space-y-5">
                  {t.featureGroups.map((group, gi) => (
                    <div key={gi}>
                      <p className={`text-[9px] font-bold tracking-[0.14em] uppercase mb-2 ${t.highlight ? "text-white/35" : "text-gray-400"}`}>
                        {group.label}
                      </p>
                      <ul className="space-y-1.5">
                        {group.items.map((f, j) => (
                          <li key={j} className={`flex items-start gap-2 text-sm leading-snug ${t.highlight ? "text-white/80" : "text-gray-600"}`}>
                            <svg className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${t.highlight ? "text-green-400" : "text-green-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>
                              {f.text}
                              {f.val && (
                                <span className={`ml-1.5 text-[10px] font-bold px-1.5 py-0.5 rounded-md ${t.highlight ? "bg-[#FCCA07]/20 text-[#FCCA07]" : "bg-blue-50 text-blue-500"}`}>
                                  {f.val}
                                </span>
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex-1" />

                {/* Footer */}
                <div className={`px-6 pb-6 pt-4 border-t ${t.highlight ? "border-white/10" : "border-gray-100"}`}>
                  {t.overage && (
                    <p className={`text-xs mb-2 ${t.highlight ? "text-white/30" : "text-gray-400"}`}>Overage: {t.overage}</p>
                  )}
                  <p className={`text-xs mb-4 ${t.highlight ? "text-white/40" : "text-gray-400"}`}>Best for: {t.best}</p>
                  <button
                    onClick={() => window.open(t.ctaHref, "_blank", "noopener,noreferrer")}
                    className={`inline-flex items-center justify-center w-full py-3 rounded-lg text-sm font-semibold transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap ${
                      t.highlight
                        ? "bg-[#FCCA07] text-[#0A1128] hover:bg-[#f0bd00]"
                        : "bg-[#0A1128] text-white hover:bg-[#0d1633]"
                    }`}
                  >
                    Build My AI Agent
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-5 px-6 rounded-2xl border border-gray-200 bg-white text-sm text-gray-500`}>
          {["No hidden fees", "No per-minute billing surprises", "Cancel anytime", "Live in 30 mins", "TRAI-compliant numbers"].map((item) => (
            <span key={item} className="flex items-center gap-1.5 whitespace-nowrap">
              <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </span>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-3 text-center">
          WhatsApp charges billed directly to your Meta Business account at Meta&apos;s standard rates. We handle the full technical setup.
        </p>
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
      desc: "We call your clinic as a mystery patient, at peak hours and at 9pm. You see what a new patient hears on first contact.",
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
          The audit makes the invisible visible, missed calls, response times, follow-through.
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
      q: "Can it handle callers who speak Hindi, English, or switch between both?",
      a: "Yes, Guftugu is built specifically for Indian callers who code-switch mid-conversation. It responds in the language the caller uses and handles Hinglish naturally. You can set a default language or allow both. Most other voice AI tools break on this.",
    },
    {
      q: "What's the difference between Guftugu and a WhatsApp chatbot?",
      a: "A WhatsApp chatbot waits for the customer to message. Guftugu answers the phone, where the majority of Indian SMB leads arrive first. Sandesh (the WhatsApp layer) handles follow-up after the call. You get both channels, connected. Chatbots handle text. Guftugu handles conversations.",
    },
    {
      q: "How does it compare to hiring a human receptionist?",
      a: "A trained receptionist costs ₹15,000–₹25,000/month, works 8 hours a day, and takes weekends off. Guftugu starts at ₹2,499/month, answers every call in under 2 seconds, works 24/7, and never calls in sick. It handles the volume your team can't, so your staff focuses on the clients who show up.",
    },
    {
      q: "Will my callers know they're talking to an AI?",
      a: "Most don't ask, they want their question answered and their appointment booked. If a caller directly asks, Guftugu answers honestly. Trust comes from how fast and accurately it responds, not whether it's human. Our clinic clients report no drop in booking conversion after switching.",
    },
    {
      q: "What if the AI doesn't know the answer?",
      a: "It never guesses. If it can't answer something, it says 'let me have the team get back to you', logs the full message and sends your team an immediate WhatsApp alert with the caller's name and question. Every call has a human escalation path built in from day one.",
    },
    {
      q: "How does the AI learn my specific business?",
      a: "We start with a 30-minute onboarding call. You walk us through your most common questions, your booking process, and your pricing. If you have existing call recordings, they accelerate training. What goes live is trained on your actual business, not a generic script that fits nobody.",
    },
    {
      q: "What happens when a caller needs a human?",
      a: "Guftugu routes it immediately. For urgent or complex queries, it either transfers the call live to your number (hot transfer) or sends you a WhatsApp alert with the caller's full context, name, question, urgency, so you call back fully briefed. You're always in control of the handoff.",
    },
    {
      q: "How fast does it go live?",
      a: "30 minutes to set up. We need your business details, calendar access, and one 30-minute call. We handle the entire build, testing, and QA, you don't touch any tech.",
    },
    {
      q: "Do I need a new phone number?",
      a: "No. We forward calls from your existing business number. Your callers see your number, not ours. If you want a dedicated AI line, we provide one at no extra cost on Professional and Enterprise plans.",
    },
    {
      q: "Is there a money-back guarantee?",
      a: "If your system isn't live within the same session of us receiving your setup materials, we refund the setup fee, no questions asked. Once live, we tune the system at no extra cost until it performs to your specification.",
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
const FinalCTA = () => {
  const audits = [
    {
      label: "Ghost Patient Report",
      desc: "For dental & medical clinics",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.5 2 6 4.5 6 8c0 2.5.8 4.5 1.8 6.2C8.8 16 9.5 17.5 9.5 20h5c0-2.5.7-4 1.7-5.8C17.2 12.5 18 10.5 18 8c0-3.5-2.5-6-6-6z"/></svg>,
    },
    {
      label: "Speed-to-Lead Test",
      desc: "For real estate agencies",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    },
    {
      label: "Hiring Volume Audit",
      desc: "For staffing & recruiting",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0A1128]">
      <Container className="text-center" size="md">
        <SectionLabel text="Get started today" dark />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-eb-garamond italic text-white leading-tight mb-4">
          Your competitor picked up that call.
          <br />
          <span className="text-white/60">You can answer the next one.</span>
        </h2>
        <p className="text-white/50 mb-10 max-w-md mx-auto text-sm leading-relaxed">
          30-minute call. No slides. No pitch. We learn how your business works, then we build what actually fits.
        </p>

        <PrimaryBtn href={CAL_LINK} label="Book a Discovery Call" size="lg" />

        {STATS.demoNumber && (
          <p className="mt-4 text-white/30 text-xs">
            Or call our AI right now: <span className="text-white/50 font-medium">{STATS.demoNumber}</span>
          </p>
        )}

        {/* Audit cards */}
        <div className="mt-12 mb-10">
          <p className="text-white/30 text-xs font-bold tracking-widest uppercase mb-5">Not ready to talk? Start with a free audit</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {audits.map((a) => (
              <a
                key={a.label}
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 hover:bg-white/[0.08] hover:border-white/20 transition-all"
              >
                <span className="text-[#FCCA07]/80 group-hover:text-[#FCCA07] transition-colors">{a.icon}</span>
                <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{a.label}</p>
                <p className="text-[11px] text-white/35">{a.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Trust bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {["₹0 to start", "Live in 30 mins", "No tech setup", "Cancel anytime"].map((t, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-white/40">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FCCA07" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-60"><polyline points="20 6 9 17 4 12"/></svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

// ─── FOOTER ───────────────────────────────────────────────────────────────────
const PageFooter = () => (
  <footer className="bg-[#060D1F] pt-14 pb-8">
    <Container size="lg">
      {/* Main footer grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/[0.08]">

        {/* Brand block */}
        <div className="lg:col-span-2">
          <Link href="/" className="font-mondwest text-lg text-white font-normal tracking-[-0.02em] mb-2 block">
            Guftugu
          </Link>
          <p className="text-xs text-white/40 mb-1">Voice + WhatsApp AI</p>
          <p className="text-sm text-white/55 leading-relaxed mt-3 max-w-xs">
            Dhvani answers the call. Sandesh follows up on WhatsApp. Your business never misses a lead again.
          </p>
          <div className="flex items-center gap-4 mt-5">
            <a
              href="mailto:aditya@tryagentikai.com"
              className="flex items-center gap-1.5 text-xs text-white/35 hover:text-white/60 transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              aditya@tryagentikai.com
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/35 hover:text-[#25D366] transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp us
            </a>
          </div>
        </div>

        {/* Product links */}
        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-4">Product</p>
          <nav className="flex flex-col gap-2.5">
            <button onClick={() => smoothScrollTo("use-cases")} className="text-sm text-white/50 hover:text-white text-left transition-colors">Use Cases</button>
            <button onClick={() => smoothScrollTo("pricing")} className="text-sm text-white/50 hover:text-white text-left transition-colors">Pricing</button>
            <button onClick={() => smoothScrollTo("faq")} className="text-sm text-white/50 hover:text-white text-left transition-colors">FAQ</button>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">Book a Call</a>
          </nav>
        </div>

        {/* Free audits */}
        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-4">Free Audits</p>
          <nav className="flex flex-col gap-2.5">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">Ghost Patient Report</a>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">Speed-to-Lead Test</a>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">Hiring Volume Audit</a>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs text-white/25">
          © 2026 Agentic AI Labs. Built in India.
        </p>
        <div className="flex gap-5 text-xs text-white/25">
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
        title="Guftugu, AI Voice Agent for Indian Businesses | tryagentic.ai"
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
