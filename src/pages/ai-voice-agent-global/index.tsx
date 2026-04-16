import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MetaConfig from "src/components/MetaConfig";
import { NextPageWithLayout } from "../../types";
import SocialProofSection from "src/components/sections/AiClarityWorkshop/SocialProofSection";
import FounderTeamSection from "src/components/sections/AiVoiceAgent/FounderTeamSection";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const CAL_LINK = "https://cal.com/ai-aditya/30min";
const CANONICAL_URL = "https://www.tryagentikai.com/ai-voice-agent-global";
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
  transcript: { speaker: "Caller" | "Vox"; text: string }[];
  whatsappMessage: string;
  crmData: { status: string; notes: string; source: string; };
}> = {
  dental: {
    label: "Dental Clinic", cardLabel: "Dental & Medical", callerName: "Alex",
    scenario: "Sunday 9:47pm · New patient inquiry", color: "#FF5500", audioSrc: "/audio/demo-dental.mp3",
    transcript: [
      { speaker: "Caller", text: "Hi, I'd like to book an appointment for a cleaning at Dr. Green's clinic?" },
      { speaker: "Vox", text: "Of course, Alex! I have Thursday at 4 PM or Saturday at 11 AM. Which works better for you?" },
      { speaker: "Caller", text: "Thursday at 4 works great. What are the fees?" },
      { speaker: "Vox", text: "A cleaning and check-up is $120. All done! I'm sending your appointment details and directions now." },
    ],
    whatsappMessage: "Hi Alex! Your appointment with Dr. Green for **Cleaning & Check-up** is confirmed for **Thursday at 4:00 PM**. \n\n📍 Location: https://maps.google.com/?q=Green+Dental+Clinic",
    crmData: { status: "Appointment Booked", notes: "Cleaning & check-up - Thursday 4PM. New patient.", source: "Loop AI (Voice)" }
  },
  realestate: {
    label: "Real Estate", cardLabel: "Real Estate", callerName: "James",
    scenario: "Tuesday 3:12pm · Agent at a showing", color: "#3300FF", audioSrc: "/audio/demo-realestate.mp3",
    transcript: [
      { speaker: "Caller", text: "Hi, is the 2-bedroom apartment in Chelsea still on the market?" },
      { speaker: "Vox", text: "Hi James! Yes, it's available at $850,000. Shall I book a viewing for Saturday morning?" },
      { speaker: "Caller", text: "Saturday at 11 AM would be perfect." },
      { speaker: "Vox", text: "Confirmed! I'm sending the agent's contact and full property details to you right now." },
    ],
    whatsappMessage: "Hi James! Here are the details for the **2-Bed Chelsea** apartment. Viewing confirmed for **Saturday 11:00 AM**. \n\nAgent: +1 (555) 987-6543",
    crmData: { status: "Viewing Scheduled", notes: "Interested in 2-Bed Chelsea. Sat 11AM viewing.", source: "Loop AI (Voice)" }
  },
  hiring: {
    label: "Hiring Agency", cardLabel: "Hiring & Staffing", callerName: "Sarah",
    scenario: "Monday 8:30am · 140 applications pending", color: "#FF0055", audioSrc: "/audio/demo-hiring.mp3",
    transcript: [
      { speaker: "Caller", text: "Hi, I'm calling about the Warehouse Supervisor position I applied for." },
      { speaker: "Vox", text: "Hi Sarah! Do you have at least 3 years of team management experience?" },
      { speaker: "Caller", text: "Yes, I managed a team of 20. I can start in 2 weeks." },
      { speaker: "Vox", text: "Excellent. A recruiter will be in touch within 24 hours. I've sent your interview details now." },
    ],
    whatsappMessage: "Hi Sarah! Thank you for applying for the **Warehouse Supervisor** role. Your profile has been shortlisted. \n\nA recruiter will call within 24 hours. Please have your references ready!",
    crmData: { status: "Lead Qualified", notes: "Warehouse Supervisor. 3y exp. 2wk notice.", source: "Loop AI (Voice)" }
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
    <div
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{
        top: "-10%", left: "-5%", width: "55%", height: "70%",
        background: "radial-gradient(ellipse at center, rgba(45,34,255,0.10) 0%, transparent 65%)",
      }}
    />
    <div
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{
        bottom: "0%", right: "-5%", width: "45%", height: "60%",
        background: "radial-gradient(ellipse at center, rgba(252,202,7,0.07) 0%, transparent 65%)",
      }}
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
        opacity: 0.045, mixBlendMode: "overlay",
      }}
    />
    <Container size="lg" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div>
          <SectionLabel text="Loop · Calls answered. Follow-ups on text." dark />

          <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-white leading-[1.08] tracking-[-0.02em] mb-6">
            <span className="text-[#FCCA07]">7 leads</span> called<br />
            last night.<br />
            <span className="text-white/65">All 7 got answered.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-lg mb-3 leading-relaxed">
            Loop answers every call and follows up on text — automatically, in any language, 24/7.
          </p>
          <p className="text-base text-white/50 mb-4 max-w-md leading-relaxed">
            Like a full-time receptionist, except it costs{" "}
            <span className="text-white/75 font-semibold">$49/month</span> and never misses a call.
          </p>

          <div className="flex items-center gap-2 mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/25 rounded-full px-3 py-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Text follow-up included
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
            <PrimaryBtn href={CAL_LINK} label="Take Your AI Agent Live in 30 Mins" size="lg" />
            <button
              onClick={() => smoothScrollTo("pricing")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-7 py-3.5 rounded-xl text-white text-sm font-semibold transition-all hover:bg-white/10 active:scale-[0.98]" style={{ border: "1px solid rgba(255,255,255,0.55)" }}
            >
              Plans from $49/mo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

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

        {/* Right: card collage */}
        <div className="relative hidden lg:block h-[600px]" style={{ perspective: "1000px" }}>
          {/* Card 1, Dental */}
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

          {/* Card 2, Hiring */}
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

          {/* Card 3, Real Estate */}
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
                  <div className="text-[9px] text-gray-400 mt-0.5 tracking-wide">3 viewings booked</div>
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
    {/* Seamless blend into demo section */}
    <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #050B1B)" }} aria-hidden="true" />
  </section>
);

// ─── HEAR IT SECTION HELPERS ─────────────────────────────────────────────────
const WaveformBars = ({ isPlaying, color }: { isPlaying: boolean; color: string }) => {
  const heights = [35, 60, 40, 75, 55, 90, 45, 80, 65, 30, 85, 50, 70, 45, 95, 60, 80, 40, 75, 55, 90, 45, 80, 65, 30, 85, 50, 70, 45, 95, 60, 40];
  return (
    <div className="flex items-center justify-center gap-[3px] h-12 w-full">
      {heights.map((h, i) => (
        <div key={i}
          style={{
            width: 3, borderRadius: "4px",
            background: isPlaying ? color : "rgba(255,255,255,0.15)",
            height: isPlaying ? `${h}%` : "15%",
            transition: "height 0.2s ease, background 0.4s ease",
            animation: isPlaying ? `waveBarAnim ${0.8 + (i % 5) * 0.2}s ease-in-out infinite alternate` : "none",
            animationDelay: `${i * 0.05}s`
          }}
        />
      ))}
    </div>
  );
};

const CRMMockup = ({ isVisible, leadName, data }: { isVisible: boolean; leadName: string; data: any }) => (
  <div className="bg-slate-50 rounded-[2.5rem] border-4 border-[#1e293b] overflow-hidden shadow-2xl relative h-full flex flex-col font-sfpro transition-all">
    <div className="bg-white px-6 py-5 flex items-center justify-between border-b border-slate-200 shadow-sm relative z-10">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
        </div>
        <h5 className="text-slate-800 text-xs font-bold tracking-widest uppercase">Lead CRM</h5>
      </div>
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 border border-emerald-100">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
        <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700">Live Sync</span>
      </div>
    </div>
    <div className="flex-1 p-5 bg-slate-50 overflow-hidden relative">
      <div className="absolute left-7 top-6 bottom-6 w-px bg-slate-200" />
      <div className="space-y-4 relative h-full">
        {[
          { name: "Emma W.", status: "Contacted", time: "2h ago", color: "bg-blue-100 text-blue-700 border-blue-200" },
          { name: "David C.", status: "Closed", time: "5h ago", color: "bg-amber-100 text-amber-700 border-amber-200" },
        ].map((lead, i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 shadow-sm opacity-50 relative ml-8">
            <div className="absolute -left-10 w-2.5 h-2.5 rounded-full bg-slate-200 border-2 border-slate-50" />
            <div className="flex items-center gap-3.5">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border ${lead.color}`}>{lead.name[0]}</div>
              <div>
                <p className="text-sm text-slate-700 font-bold">{lead.name}</p>
                <p className="text-[10px] text-slate-400 font-medium">{lead.time}</p>
              </div>
            </div>
          </div>
        ))}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              className="p-5 rounded-2xl border border-[#2D22FF]/20 bg-white relative shadow-xl ml-8 z-10"
            >
              <div className="absolute -left-[40px] top-6 w-3 h-3 rounded-full bg-[#2D22FF] border-2 border-slate-50 shadow-[0_0_12px_rgba(45,34,255,0.4)]" />
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2D22FF] to-[#1e17ba] flex items-center justify-center text-sm font-bold text-white shadow-md">{leadName[0]}</div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-800 truncate">{leadName}</p>
                    <p className="text-[10px] text-slate-500 font-medium">Synced via Voice</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 leading-none">Appointment Booked</span>
              </div>
              <div className="space-y-3">
                <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Summary</span>
                    <span className="text-[9px] text-[#2D22FF] font-bold bg-[#2D22FF]/5 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/></svg> Voice Agent
                    </span>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <p className="text-xs text-slate-600 leading-relaxed italic">&quot;{data.notes}&quot;</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    <div className="py-4 bg-white border-t border-slate-100 flex items-center justify-center gap-1.5 opacity-40 grayscale">
      <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Powered by Loop AI</span>
    </div>
  </div>
);

const WhatsAppMockup = ({ isVisible, message }: { isVisible: boolean; message: string }) => (
  <div className="h-full flex flex-col font-sfpro bg-[#e5ddd5]" style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')", backgroundSize: "450px" }}>
    <div className="bg-[#075e54] pt-10 pb-3 px-3 flex items-center shadow-md z-20 sticky top-0">
      <div className="flex items-center gap-1 text-white mr-1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">R</div>
      </div>
      <div className="flex-1 min-w-0">
        <h5 className="text-white text-[16px] font-bold leading-tight truncate">Loop AI</h5>
        <p className="text-white/70 text-[11px] leading-none mt-0.5">online</p>
      </div>
      <div className="flex items-center gap-4 text-white/90 ml-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01c-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
      </div>
    </div>
    <div className="flex-1 p-3 overflow-y-auto scrollbar-hide flex flex-col gap-2">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10, transformOrigin: 'top left' }} animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white p-2.5 rounded-[12px] rounded-tl-none shadow-[0_1px_1px_rgba(0,0,0,0.1)] max-w-[85%] relative self-start mt-2"
          >
            <div className="absolute top-0 -left-2 w-3 h-3 bg-white" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
            <div className="pr-12 min-w-[120px]">
              <p className="text-[#111b21] text-[14px] leading-[1.4] whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: message.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#111b21]">$1</strong>') }} />
            </div>
            <div className="absolute bottom-1 right-1.5 flex items-center gap-0.5 opacity-50">
              <span className="text-[9px] text-[#667781] font-medium leading-none">16:42</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 12l4 4 10-10" stroke="#53bdeb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l4 4 10-10" stroke="#53bdeb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-ml-[11px]"/></svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    <div className="p-2 pb-6 flex gap-2 items-center bg-transparent z-10">
      <div className="bg-white rounded-full flex-1 h-[42px] px-3 flex items-center gap-3 shadow-sm border border-black/5">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#667781" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>
        <span className="text-[#667781] text-sm flex-1">Message</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#667781" strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19"/></svg>
      </div>
      <div className="w-[42px] h-[42px] rounded-full bg-[#00a884] flex items-center justify-center text-white shadow-md active:scale-95 transition-transform">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-1"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
      </div>
    </div>
  </div>
);

const StepArrow = ({ isActive }: { isActive: boolean }) => (
  <div className="hidden xl:flex items-center justify-center w-12 -mx-6 z-20">
    <motion.svg width="32" height="24" viewBox="0 0 32 24" fill="none" animate={{ opacity: isActive ? 1 : 0.05, x: isActive ? 0 : -8 }} transition={{ duration: 0.5 }}>
      <path d="M2 12H30M30 12L22 4M30 12L22 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={isActive ? "animate-pulse" : ""} />
    </motion.svg>
  </div>
);

const HearItYourselfSection = ({
  activeTab,
  onTabChange,
  autoPlayTrigger
}: {
  activeTab: DemoTab;
  onTabChange: (t: DemoTab) => void;
  autoPlayTrigger?: number
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasScrolledIn, setHasScrolledIn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const transcriptRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const demo = DEMOS[activeTab];

  useEffect(() => {
    setVisibleMessages(0); setIsPlaying(false); setCurrentStep(0);
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
  }, [activeTab]);

  useEffect(() => {
    if (transcriptRef.current) { transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight; }
  }, [visibleMessages]);

  const handlePlay = useCallback(() => {
    if (isPlaying) { audioRef.current?.pause(); setIsPlaying(false); return; }
    setIsPlaying(true); setCurrentStep(1); setVisibleMessages(0);
    const audio = new Audio(demo.audioSrc); audioRef.current = audio;
    audio.play().catch(() => {});
    const intervals: any[] = [];
    demo.transcript.forEach((_, i) => { intervals.push(setTimeout(() => setVisibleMessages(i + 1), i * 1800 + 400)); });
    const callEndDelay = demo.transcript.length * 1900 + 600;
    intervals.push(setTimeout(() => { setIsPlaying(false); setCurrentStep(2); setTimeout(() => setCurrentStep(3), 2800); }, callEndDelay));
    return () => intervals.forEach(clearTimeout);
  }, [isPlaying, demo]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasScrolledIn && !isPlaying) {
        setHasScrolledIn(true);
        handlePlay();
      }
    }, { threshold: 0.4 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasScrolledIn, isPlaying, handlePlay]);

  useEffect(() => {
    if (autoPlayTrigger && !isPlaying) { handlePlay(); }
  }, [autoPlayTrigger, isPlaying, handlePlay]);

  return (
    <section ref={sectionRef} id="hear-it" className="py-24 sm:py-32 bg-[#050B1B] relative overflow-hidden">
      <div aria-hidden="true" className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none transition-all duration-1000"
        style={{ background: `radial-gradient(circle, ${demo.color}15 0%, transparent 70%)`, opacity: isPlaying ? 0.8 : 0.3 }} />
      <Container>
        <div className="text-center mb-16">
          <SectionLabel text="Automation Stack" dark />
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-eb-garamond italic text-white leading-tight mb-6">Experience the <span className="text-white/80">End-to-End</span> Loop.</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-sfpro">Watch how Vox answers the call, triggers Relay for follow-up, and logs everything to your CRM in real-time.</p>
        </div>

        <div className="flex justify-center gap-3 mb-16">
          {(Object.keys(DEMOS) as DemoTab[]).map((tab) => (
            <button key={tab} onClick={() => onTabChange(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border-2 ${activeTab === tab ? "bg-[#2D22FF] border-[#2D22FF] text-white shadow-lg" : "border-white/10 text-white/40 hover:text-white"}`}>
              {DEMOS[tab].label}
            </button>
          ))}
        </div>

        <div className="max-w-[1400px] mx-auto relative mt-8">
          <div className="flex flex-col xl:flex-row items-stretch gap-10 xl:gap-6">
            {/* 1. VOICE */}
            <div className={`flex-[1.4] transition-all duration-700 ${currentStep < 1 ? "opacity-20 blur-[2px]" : "opacity-100"}`}>
              <div className="mb-4 flex items-center gap-2 px-2 text-[10px] font-bold tracking-widest text-white/30 uppercase">
                <div className={`w-2 h-2 rounded-full ${currentStep === 1 ? 'bg-[#2D22FF] animate-pulse' : 'bg-white/10'}`} /> 01. Voice Agent (Vox)
              </div>
              <div className="rounded-[2.5rem] border-4 border-[#1e293b] overflow-hidden relative h-[600px] flex flex-col transition-all duration-500 bg-[#0A0D14] shadow-2xl">
                <div className="px-6 pt-12 pb-5 border-b border-white/5 flex items-center justify-between bg-black/40 backdrop-blur-xl z-20">
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all ${currentStep >= 1 ? "bg-[#2D22FF] shadow-[0_0_20px_#2D22FF66]" : "bg-white/5"}`}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14v2.92z"/></svg>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="text-white text-[15px] font-bold flex items-center gap-1.5 leading-tight truncate">
                        {demo.callerName} <span className="text-white/20 font-normal">to</span> <span className="text-[#818cf8] shrink-0">Vox AI</span>
                      </div>
                      <p className="text-white/30 text-[10px] font-bold mt-1 uppercase tracking-wider truncate">{demo.scenario}</p>
                    </div>
                  </div>
                </div>
                <div className="relative flex-1 overflow-hidden bg-[#0A0D14]">
                  <AnimatePresence mode="wait">
                    {currentStep === 0 ? (
                      <motion.div key="p" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center p-8 text-center">
                        <button onClick={handlePlay} className="w-20 h-20 rounded-full bg-[#2D22FF] flex items-center justify-center mb-6 shadow-[0_0_40px_#2D22FF88] transition-transform hover:scale-110 active:scale-95"><svg width="36" height="36" viewBox="0 0 24 24" fill="white" className="ml-1.5"><path d="M5 3l14 9-14 9V3z"/></svg></button>
                        <p className="text-white/20 text-[11px] font-bold tracking-[0.2em] uppercase">Simulate Real Interaction</p>
                      </motion.div>
                    ) : (
                      <motion.div key="t" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full px-5 py-8 overflow-y-auto scrollbar-hide flex flex-col gap-6 pb-20" ref={transcriptRef}>
                        {demo.transcript.slice(0, visibleMessages).map((msg, i) => (
                          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} key={i} className={`flex gap-3 max-w-[85%] ${msg.speaker === "Vox" ? "flex-row mr-auto" : "flex-row-reverse ml-auto"}`}>
                            <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold mt-auto mb-1 shadow-sm ${msg.speaker === "Vox" ? "bg-[#1e293b] text-white" : "bg-white/10 text-white/60"}`}>{msg.speaker === "Vox" ? "V" : demo.callerName[0]}</div>
                            <div className={`px-4 py-3 rounded-[1.25rem] text-[13.5px] shadow-sm leading-relaxed ${msg.speaker === "Vox" ? "bg-[#1e293b]/80 border border-white/5 text-white/90 rounded-bl-none" : "bg-[#2D22FF] text-white rounded-br-none"}`}><p>{msg.text}</p></div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="p-6 bg-black/40 backdrop-blur-xl border-t border-white/5 flex flex-col gap-4 sticky bottom-0 z-20">
                  <WaveformBars isPlaying={isPlaying} color="#818cf8" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2"><div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-white/10'}`} /><span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">{isPlaying ? 'Processing Voice' : 'Ready'}</span></div>
                    {currentStep > 0 && <button onClick={handlePlay} className="text-[10px] text-[#2D22FF] font-bold uppercase tracking-widest">Restart</button>}
                  </div>
                </div>
              </div>
            </div>

            <StepArrow isActive={currentStep >= 2} />

            {/* 2. WHATSAPP (Relay) */}
            <div className={`flex-[1.1] transition-all duration-700 ${currentStep < 2 ? "opacity-10 blur-[3px] scale-95" : "opacity-100 scale-100"}`}>
              <div className="mb-4 flex items-center gap-2 px-2 text-[10px] font-bold tracking-widest text-white/30 uppercase">
                <div className={`w-2 h-2 rounded-full ${currentStep === 2 ? 'bg-[#25D366] animate-pulse' : 'bg-white/10'}`} /> 02. SMS / Text (Relay)
              </div>
              <div className="h-[600px] rounded-[2.5rem] border-4 border-[#1e293b] overflow-hidden shadow-2xl">
                <WhatsAppMockup isVisible={currentStep >= 2} message={demo.whatsappMessage} />
              </div>
            </div>

            <StepArrow isActive={currentStep >= 3} />

            {/* 3. CRM */}
            <div className={`flex-[1.1] transition-all duration-700 ${currentStep < 3 ? "opacity-10 blur-[3px] scale-95" : "opacity-100 scale-100"}`}>
              <div className="mb-4 flex items-center gap-2 px-2 text-[10px] font-bold tracking-widest text-white/30 uppercase">
                <div className={`w-2 h-2 rounded-full ${currentStep === 3 ? 'bg-emerald-400 animate-pulse' : 'bg-white/10'}`} /> 03. Sync (CRM)
              </div>
              <div className="h-[600px]"><CRMMockup isVisible={currentStep >= 3} leadName={demo.callerName} data={demo.crmData} /></div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-px bg-white/10" />
          <p className="max-w-md text-white/20 text-xs font-medium tracking-wide font-sfpro leading-relaxed px-6">
            Showing actual Loop behavior: Vox handles the conversation over voice, and Relay automatically triggers the text follow-up — in this case, to {demo.callerName}.
          </p>
        </div>
      </Container>
    </section>
  );
};

// ─── SOCIAL PROOF BAR ─────────────────────────────────────────────────────────
const SocialProofBar = () => {
  const metrics: { num: string; unit?: string; prefix?: string; label: string; icon: React.ReactNode; }[] = [
    { num: "30", unit: "min", label: "One Call to Go Live", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg> },
    { num: "$0", label: "To Start", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 8h5a2 2 0 010 4H8v4m0-8v8m3-8h1"/></svg> },
    { num: "24/7", label: "Always On", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg> },
    { num: "2", unit: "s", prefix: "<", label: "Answer Latency", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
    { num: "5", unit: "s", prefix: "<", label: "WhatsApp Ping", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
  ];
  return (
    <div className="bg-[#FAF9F8] border-b border-black/[0.04]">
      <Container size="lg">
        <div className="py-8 sm:py-10 grid grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-4 items-center justify-center">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center group">
              <span className="text-[#0A1128]/15 mb-2.5 transition-colors duration-300 group-hover:text-[#0A1128]/30">{m.icon}</span>
              <div className="flex items-baseline justify-center gap-[2px]">
                {m.prefix && <span className="font-mono text-sm text-[#0A1128]/30 mr-0.5" style={{ fontFeatureSettings: '"tnum"' }}>{m.prefix}</span>}
                <span className="font-eb-garamond italic text-[2.75rem] sm:text-[3rem] text-[#0A1128] leading-none tracking-tight">{m.num}</span>
                {m.unit && <span className="font-mono text-xs text-[#0A1128]/30 ml-0.5 uppercase tracking-[0.1em]">{m.unit}</span>}
              </div>
              <p className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#0A1128]/30 mt-3">{m.label}</p>
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
    { scenario: "Dental clinic misses 1 new patient call", cost: "$500", note: "loss per missed patient call", impact: "$6k monthly leakage" },
    { scenario: "Real estate agent misses 1 property inquiry", cost: "$3,000", note: "lost commission per missed lead", impact: "$24k monthly leakage" },
    { scenario: "Home service misses 1 emergency call", cost: "$200", note: "lost job + potential 1-star review", impact: "$3k monthly leakage" },
  ];
  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionLabel text="The Problem" />
            <h2 className="text-4xl sm:text-5xl font-eb-garamond italic text-[#0A1128] leading-[1.05] mb-6">
              Your marketing is working.<br />
              <span className="text-gray-400">Missed calls aren&apos;t.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Most businesses don&apos;t lose leads to competitors or wrong pricing.
              They lose them in the <span className="text-[#0A1128] font-bold">3 seconds</span> after the phone rings and nobody picks up.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 p-5 rounded-2xl bg-[#0A1128]/[0.02] border border-[#0A1128]/5">
                <div className="w-10 h-10 rounded-full bg-[#0A1128] text-[#FCCA07] flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <div>
                  <p className="font-bold text-[#0A1128] text-sm mb-1">The 3-Second Rule</p>
                  <p className="text-sm text-gray-500 leading-relaxed">If you don&apos;t answer, a lead takes 3 seconds to open Google Maps and call your next competitor. You never get a second chance.</p>
                </div>
              </div>
              <div className="pl-5 border-l-2 border-[#0A1128]/10">
                <p className="text-sm text-gray-400 italic font-eb-garamond text-lg">
                  &quot;Nobody answers. Lead waits. Lead calls the next listing. You just paid Google for your competitor&apos;s customer.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2rem] border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden flex flex-col">
              <div className="px-7 py-5 bg-[#0A1128] flex justify-between items-center z-10">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">Ledger of Uncaptured Revenue</p>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400/80 animate-pulse" />
                  <p className="text-[9px] font-bold text-rose-300/80 tracking-wider uppercase">Active Leakage</p>
                </div>
              </div>
              <div className="divide-y divide-gray-100/80 bg-white">
                {costs.map((c, i) => (
                  <div key={i} className="group px-7 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:bg-gray-50/50">
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">{c.scenario}</p>
                      <p className="text-sm text-[#0A1128] font-medium max-w-xs">{c.note}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-eb-garamond italic text-3xl sm:text-[2.25rem] text-[#D44A4A] leading-none mb-1.5 tracking-tight group-hover:text-rose-700 transition-colors duration-300">{c.cost}</span>
                      <span className="text-[9px] font-bold text-gray-300 uppercase tracking-wider">{c.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#050A14] p-8 text-white relative border-t border-gray-100 flex-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[40px] pointer-events-none" />
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-white/10" /> The Hidden Cost Flow
                </p>
                <div className="space-y-4">
                  {[
                    { t: "Text message sent at 8pm.", s: "Nobody replied. Lead went cold.", tag: "82% Drop-off" },
                    { t: "\"Call me later,\" the lead said.", s: "Nobody called. They booked elsewhere.", tag: "Lost Booking" },
                    { t: "Candidate applied on Monday.", s: "Screened Thursday. Joined elsewhere.", tag: "Hire Lost" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-7 h-7 rounded bg-white/[0.02] border border-white/5 flex items-center justify-center flex-shrink-0 text-white/30 text-[10px] font-mono group-hover:bg-white/5 transition-colors">0{i+1}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-medium text-white/80 truncate mb-0.5">{row.t}</p>
                        <p className="text-[11px] text-white/30">{row.s}</p>
                      </div>
                      <div className="text-[9px] font-semibold px-2.5 py-1 rounded bg-white/[0.03] text-white/40 border border-white/5 whitespace-nowrap">{row.tag}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="font-eb-garamond italic text-[1.35rem] text-white/90 leading-snug">
                    All of this revenue was already yours.<br/>
                    <span className="text-white/30 italic">It just slipped through the cracks.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// ─── SOLUTION ─────────────────────────────────────────────────────────────────
const SolutionSection = () => (
  <section className="py-24 sm:py-32 bg-[#F9F6F4] relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    <Container size="lg">
      <div className="flex flex-col gap-3 mb-12">
        {["Hire a second receptionist. She gets busy too.", "Add a chatbot. Half your leads call instead of typing.", "Buy a generic voice bot. Lead goes cold. Nobody follows up."].map((t, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-gray-400 group">
            <div className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-red-200 group-hover:bg-red-50 group-hover:text-red-400 transition-colors">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </div>
            {t}
          </div>
        ))}
        <p className="text-lg font-bold text-[#0A1128] mt-4 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-[#0A1128]/10" />
          None of them fix the whole pipeline. Loop is the whole pipeline.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-16">
        <div>
          <SectionLabel text="The System · Loop" />
          <h2 className="text-4xl sm:text-5xl font-eb-garamond italic text-[#0A1128] leading-[1.05] mb-4">
            Every call answered.<br />
            Every lead followed up.<br />
            <span className="text-gray-400">You only get pinged when it&apos;s hot.</span>
          </h2>
        </div>
        <p className="text-lg text-gray-500 max-w-md leading-relaxed mb-1">
          Loop is not a &quot;chatbot&quot; or a &quot;voice bot.&quot; It&apos;s your complete lead capture system — trained on your data and running 24/7.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A1128" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M13 5l7 7-7 7"/></svg>
          </div>
        </div>

        {/* Vox (Voice) */}
        <div className="group bg-white rounded-[32px] p-8 sm:p-10 border border-orange-100 shadow-sm transition-all hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-3xl overflow-hidden border-2 border-orange-50 flex-shrink-0 bg-gray-50">
              <img src="https://www.facehash.dev/api/avatar?name=Vox&size=128&shape=round" width={64} height={64} alt="Vox" loading="lazy" />
            </div>
            <div>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-orange-500 bg-orange-50 px-2 py-0.5 rounded">The Voice</span>
              <p className="text-2xl font-bold text-[#0A1128]">Vox</p>
            </div>
          </div>
          <ul className="space-y-5">
            {[
              { t: "Instant Response", s: "Answers in under 2 seconds — in English, Spanish, Arabic, or any supported language." },
              { t: "Deep Qualification", s: "Asks your exact questions. Captures specific intent, budget, and urgency on every call." },
              { t: "Auto-Scheduling", s: "Books directly into your calendar. No IVR menu. No \"Press 1\" friction." },
            ].map((f, i) => (
              <li key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0 text-orange-500 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0A1128] mb-0.5">{f.t}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.s}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Relay (SMS/Text) */}
        <div className="group bg-white rounded-[32px] p-8 sm:p-10 border border-green-100 shadow-sm transition-all hover:shadow-xl hover:shadow-green-500/5 hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-3xl overflow-hidden border-2 border-green-50 flex-shrink-0 bg-gray-50">
              <img src="https://www.facehash.dev/api/avatar?name=Relay&size=128&shape=round" width={64} height={64} alt="Relay" loading="lazy" />
            </div>
            <div>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-green-600 bg-green-50 px-2 py-0.5 rounded">The Follow-Up</span>
              <p className="text-2xl font-bold text-[#0A1128]">Relay</p>
            </div>
          </div>
          <ul className="space-y-5">
            {[
              { t: "Immediate Follow-up", s: "Missed call or finished call? An SMS or text fires within 5 seconds for higher trust." },
              { t: "No-Show Recovery", s: "Reminders sent 2 hours before every booking. No-shows drop by up to 40%." },
              { t: "14-Day Drip Cadence", s: "Lead went cold? A 14-day sequence keeps you top of mind — automatically." },
            ].map((f, i) => (
              <li key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0 text-green-600 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0A1128] mb-0.5">{f.t}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.s}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center mt-12 mb-20">
        <div className="w-1 h-12 bg-gradient-to-b from-gray-200 to-[#FCCA07] mb-4 rounded-full" />
        <div className="bg-[#0A1128] text-white px-8 py-4 rounded-2xl flex items-center gap-4 shadow-xl">
          <div className="w-10 h-10 rounded-full bg-[#FCCA07] flex items-center justify-center text-[#0A1128] flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          </div>
          <div>
            <p className="text-sm font-bold leading-tight">You only get pinged when a lead is HOT.</p>
            <p className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">Direct SMS or text alert to your phone</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A1128]/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          <div className="lg:col-span-4">
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black tracking-widest uppercase">Continuous Improvement</div>
            <h3 className="text-3xl font-eb-garamond italic text-[#0A1128] mb-4">Gets sharper with every call.</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Unlike a human hire, Loop never stops learning. It analyzes every rejection, every doubt, and every question to refine your script automatically.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { w: "Week 1: Foundations", h: "Answering & Capture", s: "Your phone stops ringing after hours. Calendar starts filling up.", icon: "🎯" },
              { w: "Week 3: Pattern Match", h: "Context Awareness", s: "Recognizes returning callers, maps frequent doubts automatically.", icon: "🧠" },
              { w: "Month 2: High Gear", h: "Lead Filtering", s: "Your team only talks to pre-qualified leads worth their time.", icon: "⚡" },
            ].map((m, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 group transition-all hover:bg-[#0A1128] hover:text-white">
                <div className="text-2xl mb-4 grayscale group-hover:grayscale-0 transition-all">{m.icon}</div>
                <p className="text-[10px] font-black tracking-widest uppercase text-gray-400 group-hover:text-white/40 mb-2">{m.w}</p>
                <p className="font-bold text-sm mb-2 text-[#0A1128] group-hover:text-white">{m.h}</p>
                <p className="text-xs text-gray-500 group-hover:text-white/60 leading-relaxed">{m.s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </section>
);

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────
const HowItWorksSection = () => {
  const steps = [
    { num: "01", badge: "Discovery", title: "The 30-Min Audit", sub: "We map your current call flow, points of failure, and existing script.", bullets: ["Audit existing call recordings", "Map your qualification criteria", "Identify high-intent keywords"], you: "Your effort: 30-min call", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
    { num: "02", badge: "Building", title: "The Agent Buildout", sub: "We build your exact logic into Vox and Relay. You review and approve.", bullets: ["Prompt engineering for your brand", "WhatsApp & SMS cadence automation", "Calendar & CRM integration"], you: "Your effort: 5-min review", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> },
    { num: "03", badge: "Live", title: "Day Zero. Go Live.", sub: "We route your calls to Reach. Your phone stops ringing during deep work.", bullets: ["Zero downtime transition", "Testing on actual numbers", "Live dashboard access"], you: "Your effort: Set forwarding", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> },
  ];
  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <Container size="lg">
        <div className="text-center mb-16 relative">
          <SectionLabel text="The Process" />
          <h2 className="text-4xl sm:text-6xl font-eb-garamond italic text-[#0A1128] leading-[1.05] mb-4">
            Three steps.<br /><span className="text-gray-400">You barely have to show up.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            We are a done-for-you service. We handle the prompts, the telephony, and the integrations. You just answer the qualified pings.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          <div className="hidden lg:block absolute top-[120px] left-[30%] right-[30%] h-px pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          </div>
          {steps.map((step, i) => (
            <div key={i} className="group relative bg-[#F9F6F4]/50 border border-gray-100 rounded-[32px] p-8 transition-all hover:bg-white hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#0A1128] text-[#FCCA07] flex items-center justify-center font-bold text-xl shadow-lg shadow-black/10">{step.num}</div>
                <div className="px-3 py-1 rounded-full bg-[#0A1128]/5 border border-[#0A1128]/5 text-[#0A1128] text-[10px] font-black tracking-widest uppercase">{step.badge}</div>
              </div>
              <div className="mb-6">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#0A1128] mb-4 shadow-sm group-hover:scale-110 transition-transform">{step.icon}</div>
                <h3 className="text-2xl font-eb-garamond italic text-[#0A1128] mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed min-h-[48px]">{step.sub}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {step.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-xs text-gray-600 leading-relaxed">
                    <span className="text-gray-400 flex-shrink-0 mt-0.5">-</span>{b}
                  </li>
                ))}
              </ul>
              <p className="text-[11px] font-semibold text-[#0A1128] border-t border-gray-300 pt-3">{step.you}</p>
              {i < steps.length - 1 && (
                <div className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 justify-center">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round"><line x1="0" y1="6" x2="12" y2="6"/><polyline points="8,2 14,6 8,10"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <PrimaryBtn href={CAL_LINK} label="Take Your AI Agent Live in 30 Mins" size="lg" />
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
  dollar: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
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
    role: "Loop Receptionist",
    accentColor: "#F97316",
    headline: "Your new receptionist. Books appointments at 11pm. Never calls in sick.",
    snap: [
      { value: "3–5", label: "high-value calls missed per week" },
      { value: "$2,500", label: "leaking weekly from unanswered calls" },
      { value: "0", label: "of those leads recovered" },
    ],
    punchline: "Not bad marketing. Just an unanswered phone.",
    outcomes: [
      { icon: "clock", text: "24/7 booking, even at 11pm" },
      { icon: "lang", text: "English, Spanish, Arabic — same call" },
      { icon: "bell", text: "Text reminders → no-shows drop" },
      { icon: "alert", text: "High-value inquiry? You get pinged instantly" },
      { icon: "refresh", text: "Auto follow-up on every missed call" },
      { icon: "dollar", text: "Full reception from $49/mo, no extra staff" },
    ],
    comparison: [
      { metric: "After-hours calls", before: "Voicemail / missed", after: "Answered & booked" },
      { metric: "Response time", before: "30+ min callback", after: "< 2 seconds" },
      { metric: "No-show rate", before: "High, no reminders", after: "Text reminders sent" },
    ],
    cta: { label: "Get a Free Ghost Patient Report", note: "We call your clinic as a mystery patient, at peak hours and at 9pm." },
  },
  realestate: {
    label: "Real Estate",
    role: "Loop Lead Qualifier",
    accentColor: "#3B82F6",
    headline: "That inquiry just came in. You're at a showing. Your competitor answered.",
    snap: [
      { value: "40 min", label: "avg. callback delay when on a showing" },
      { value: "$3,000", label: "commission per missed hot lead" },
      { value: "0", label: "follow-ups after a missed call" },
    ],
    punchline: "Your pipeline isn't broken. Your phone response is.",
    outcomes: [
      { icon: "phone", text: "Answered during showings, drives, meetings" },
      { icon: "qualify", text: "Budget, area, timeline — qualified on the call" },
      { icon: "crm", text: "Auto-logged to your CRM or Google Sheet" },
      { icon: "wa", text: "14-day text follow-up for cold leads" },
      { icon: "bolt", text: "<2s response, faster than any competitor" },
      { icon: "star", text: "You call back as the most prepared agent" },
    ],
    comparison: [
      { metric: "Response time", before: "40 min (if lucky)", after: "< 2 seconds" },
      { metric: "Lead qualification", before: "Next day, unprepared", after: "On the call, fully qualified" },
      { metric: "Follow-up cadence", before: "Manual, often forgotten", after: "14-day text auto" },
    ],
    cta: { label: "Get a Free Speed-to-Lead Test", note: "We submit a property inquiry to your agency and time the response." },
  },
  hiring: {
    label: "Hiring & Staffing",
    role: "Loop Interviewer",
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
      { icon: "lang", text: "English, Spanish, Arabic, French, German" },
      { icon: "mic", text: "Every call recorded for compliance + QA" },
      { icon: "wa", text: "Text follow-up for candidates who didn't pick up" },
      { icon: "filter", text: "Clean shortlist — only the qualified ones" },
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
  dental: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M12 2C8.5 2 6 4.5 6 8c0 2.5.8 4.5 1.8 6.2C8.8 16 9.5 17.5 9.5 20h5c0-2.5.7-4 1.7-5.8C17.2 12.5 18 10.5 18 8c0-3.5-2.5-6-6-6z"/></svg>,
  realestate: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  hiring: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
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
        <div className="flex gap-0 mb-10 border-b border-gray-200 overflow-x-auto">
          {tabs.map((t) => (
            <button key={t.key} onClick={() => setActive(t.key)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold whitespace-nowrap transition-all border-b-2 -mb-px ${active === t.key ? "border-[#0A1128] text-[#0A1128]" : "border-transparent text-gray-400 hover:text-gray-600"}`}>
              <span className={active === t.key ? "text-[#0A1128]" : "text-gray-400"}>{TAB_ICONS[t.key]}</span>
              {t.label}
            </button>
          ))}
        </div>
        <div className="bg-white border border-black/[0.06] overflow-hidden rounded-2xl" style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.04)" }}>
          <div style={{ borderTop: `3px solid ${uc.accentColor}` }}>
            <div className="bg-[#0A1128] px-6 sm:px-8 py-6">
              <span className="text-xs font-bold tracking-widest uppercase flex items-center gap-2" style={{ color: uc.accentColor }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: uc.accentColor }} />{uc.role}
              </span>
              <h3 className="text-xl sm:text-2xl font-eb-garamond italic text-white mt-2 leading-snug">{uc.headline}</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 border-b border-gray-100">
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
            <div className="sm:col-span-3 px-6 sm:px-8 py-6">
              <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-4">With Loop</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {uc.outcomes.map((o, i) => (
                  <div key={i} className="flex items-center gap-2.5 rounded-lg border border-gray-100 bg-white px-3 py-2.5" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                    <span className="flex-shrink-0" style={{ color: uc.accentColor }}>{OUTCOME_ICONS[o.icon]}</span>
                    <span className="text-[13px] text-[#0A1128] font-medium leading-snug">{o.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="px-6 sm:px-8 py-6 border-b border-gray-100">
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-x-3 gap-y-2">
              <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 pb-1" />
              <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 pb-1">Before</div>
              <div className="text-[10px] font-bold tracking-widest uppercase pb-1" style={{ color: uc.accentColor }}>With Loop</div>
              {uc.comparison.map((row, i) => (
                <>
                  <div key={`m${i}`} className="text-xs text-gray-500 self-center py-1">{row.metric}</div>
                  <div key={`b${i}`} className="bg-gray-100 rounded-lg px-3 py-2 text-xs font-semibold text-gray-600">{row.before}</div>
                  <div key={`a${i}`} className="rounded-lg px-3 py-2 text-xs font-semibold" style={{ background: "#F0FDF4", color: "#15803d" }}>{row.after}</div>
                </>
              ))}
            </div>
          </div>
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
    { industry: "Dental & Medical Clinics", role: "Loop Receptionist", outcome: "Every missed call becomes a booked appointment.", accent: "#F97316", avatar: "Emma", metric: "$500+ leakage/missed call" },
    { industry: "Real Estate Agencies", role: "Loop Lead Qualifier", outcome: "Every inquiry answered, qualified, and followed up.", accent: "#3B82F6", avatar: "James", metric: "40 min callback cut to <2s" },
    { industry: "Hiring & Staffing Agencies", role: "Loop Interviewer", outcome: "140 screened in 24h. Your recruiter gets only the qualified.", accent: "#8B5CF6", avatar: "Sarah", metric: "36 hours manual work automated" },
    { industry: "Home Services", role: "Loop Dispatcher", outcome: "Job qualified on the call. Brief sent to your team instantly.", accent: "#10B981", avatar: "Omar", metric: "Zero missed emergency leads" },
    { industry: "Hotels & Hospitality", role: "Loop Concierge", outcome: "Guest queries answered 24/7. Follow-up handled automatically.", accent: "#F59E0B", avatar: "Lena", metric: "24/7 night coverage at 1/10th cost" },
    { industry: "Marketing Agencies", role: "Loop for Agencies", outcome: "Run it for your clients. White-labelled under your brand.", accent: "#EC4899", avatar: "Zoe", metric: "Add $5,000+ MRR to your agency" },
    { industry: "Technical Support", role: "Loop Support Line", outcome: "Fault triage handled by voice. Updates sent via text.", accent: "#6366F1", avatar: "Chris", metric: "70% first-ring resolution rate" },
  ];
  return (
    <Container className="mt-16">
      <div className="mb-10">
        <p className="text-xl sm:text-3xl font-eb-garamond italic text-[#0A1128] mb-1.5">One system. Seven industries. Zero missed calls.</p>
        <p className="text-sm text-gray-500 max-w-lg">Same Loop, configured for how your business actually works.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {cases.map((c, i) => (
          <div key={i} className="group relative bg-white rounded-2xl p-6 border border-gray-100 flex flex-col gap-4 transition-all hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1" style={{ borderTop: `2px solid ${c.accent}` }}>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0 bg-gray-50">
                <img src={`https://www.facehash.dev/api/avatar?name=${c.avatar}&size=96&shape=round`} width={48} height={48} alt={c.avatar} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-black tracking-widest uppercase mb-0.5" style={{ color: c.accent }}>{c.role}</p>
                <p className="font-bold text-[#0A1128] text-sm truncate">{c.industry}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">{c.outcome}</p>
            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
              <span className={`inline-flex px-2 py-1 rounded-md text-[9px] font-bold tracking-tight ${i % 2 === 0 ? "bg-blue-50 text-blue-600" : "bg-orange-50 text-orange-600"}`}>{c.metric}</span>
              <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#0A1128] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#0A1128] rounded-2xl px-7 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="relative">
          <p className="text-white font-bold text-base mb-1">Don&apos;t see your industry?</p>
          <p className="text-white/50 text-xs max-w-md leading-relaxed">We&apos;ve built for 20+ use cases. If you have calls, leads, or candidates, Loop works. We build your exact script in 30 minutes.</p>
        </div>
        <div className="relative"><PrimaryBtn href={CAL_LINK} label="Check your use case" size="md" /></div>
      </div>
    </Container>
  );
};

// ─── WHY WE'RE DIFFERENT ──────────────────────────────────────────────────────
const WhyDifferentSection = () => {
  const points = [
    { title: "Done-for-you Service", sub: "Unlike platforms where you build the bot yourself, we build, train, and maintain your Loop agents. You don't write a single line of logic.", icon: "🎯" },
    { title: "Built for Real-World Conditions", sub: "Handles diverse accents, background noise, and multilingual callers where generic voice bots fail. Built to work in actual business environments, not just demos.", icon: "🌍" },
    { title: "The Whole Pipeline", sub: "Voice + text is one system. Vox qualifies on the call, Relay follows up on text. No complex Zapiers or manual integrations needed.", icon: "⚡" },
    { title: "Go Live in 30 Mins", sub: "Our team builds your first agent while you're on the onboarding call. You leave the meeting with a working number.", icon: "🚀" },
  ];
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-gray-100 to-transparent" />
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionLabel text="Loop Advantage" />
            <h2 className="text-4xl sm:text-5xl font-eb-garamond italic text-[#0A1128] leading-[1.05] mb-6">
              Every other AI company starts with a demo.<br />
              <span className="text-gray-400">We start with your business.</span>
            </h2>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Most Voice AI sounds robotic the moment it goes live in a real business. The accent is wrong, the follow-up never happens, or the integration breaks.
            </p>
            <div className="p-6 rounded-2xl bg-[#0A1128] text-white">
              <p className="text-sm font-bold text-[#FCCA07] uppercase tracking-widest mb-2">The Loop Promise</p>
              <p className="text-xs text-white/60 leading-relaxed mb-4">
                We don&apos;t just sell software. We provide the headcount. Loop is your digital receptionist that actually works in the real world.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-white/30">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />No developers required
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4">
            {points.map((p, i) => (
              <div key={i} className="group relative p-8 bg-gray-50 rounded-[32px] border border-gray-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-black/5 hover:border-[#FCCA07]/30">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-2xl shadow-sm transition-transform group-hover:scale-110">{p.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-[#0A1128] mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">{p.sub}</p>
                  </div>
                  <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A1128" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-12 p-8 rounded-[32px] border border-dashed border-gray-200 opacity-50 bg-gray-50/50">
              <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 mb-6">Traditional Alternatives</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold text-gray-400 mb-1 line-through">Generic Voice Platforms</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Requires Dev Team · Robotic outputs · Higher cost</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 mb-1 line-through">Text Chatbots</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Lower conversion · Lead friction · Manual entry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// ─── PRICING CALCULATOR ───────────────────────────────────────────────────────
const PricingCalculator = () => {
  const [callsPerDay, setCallsPerDay] = useState(4);
  const [avgDuration, setAvgDuration] = useState(1);

  type TierKey = 1 | 2 | 3;

  const TIERS = {
    1: { name: "Starter",      voiceRate: 0.20, monthly: 49,  included: 250,  concurrent: 1,  maxCallsPerDay: 15  },
    2: { name: "Professional", voiceRate: 0.18, monthly: 199, included: 1100, concurrent: 3,  maxCallsPerDay: 40  },
    3: { name: "Enterprise",   voiceRate: 0.16, monthly: 499, included: 2850, concurrent: 10, maxCallsPerDay: 999 },
  } as const;

  const callsPerMonth = callsPerDay * 30;
  const minutesNeeded = callsPerMonth * avgDuration;
  const sliderPct = ((callsPerDay - 1) / (100 - 1)) * 100;

  const calc = (key: TierKey) => {
    const t = TIERS[key];
    const capacityOk = callsPerDay <= t.maxCallsPerDay;
    const extraMin = Math.max(0, minutesNeeded - t.included);
    const overageCost = Math.round(extraMin * t.voiceRate);
    const bundleUsedPct = Math.min(100, (minutesNeeded / t.included) * 100);
    const total = t.monthly + overageCost;
    return { ...t, capacityOk, extraMin, overageCost, bundleUsedPct, total };
  };

  const results = { 1: calc(1), 2: calc(2), 3: calc(3) };

  const eligibleKeys = ([1, 2, 3] as TierKey[]).filter(k => results[k].capacityOk);
  const smartKey: TierKey = eligibleKeys.length > 0
    ? eligibleKeys.reduce<TierKey>((best, k) => results[k].total < results[best].total ? k : best, eligibleKeys[0])
    : 3;

  const DurationBtn = ({ val }: { val: number }) => (
    <button onClick={() => setAvgDuration(val)}
      className={`px-5 py-2 rounded-xl text-sm font-bold border-2 transition-all ${
        avgDuration === val
          ? "bg-[#0A1128] border-[#0A1128] text-white"
          : "border-gray-200 text-gray-400 hover:border-[#0A1128]/30 hover:text-[#0A1128]"
      }`}>
      {val} min
    </button>
  );

  return (
    <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-md mb-12 bg-white">

      {/* ── Header ── */}
      <div className="px-8 py-5 border-b border-gray-100">
        <p className="text-[10px] font-black tracking-[0.2em] uppercase text-[#2D22FF] mb-0.5">Pricing Calculator</p>
        <p className="text-base font-semibold text-[#0A1128]">
          Drag the slider — see exactly what you pay beyond the free bundle.
        </p>
      </div>

      {/* ── Inputs ── */}
      <div className="px-8 py-7 border-b border-gray-100 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-8 items-start">
        <div>
          <div className="flex items-end justify-between mb-3">
            <div>
              <p className="text-sm font-bold text-[#0A1128]">How many calls do you get per day?</p>
              <p className="text-xs text-gray-400 mt-0.5">Include missed calls, after-hours, voicemail rings</p>
            </div>
            <div className="ml-4 flex-shrink-0 text-right">
              <span className="text-3xl font-eb-garamond italic text-[#0A1128] leading-none">{callsPerDay}</span>
              <span className="text-sm font-normal text-gray-400 ml-1">/day</span>
              <p className="text-[11px] text-gray-400 mt-0.5">{callsPerMonth} calls/mo · {minutesNeeded} min/mo</p>
            </div>
          </div>
          <input type="range" min="1" max="100" step="1" value={callsPerDay}
            onChange={e => setCallsPerDay(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #0A1128 0%, #0A1128 ${sliderPct}%, #e5e7eb ${sliderPct}%, #e5e7eb 100%)`,
              WebkitAppearance: "none",
            }}
          />
          <div className="flex justify-between mt-2">
            {[{ v: 5, l: "Quiet" }, { v: 15, l: "Steady" }, { v: 30, l: "Busy" }, { v: 60, l: "High" }, { v: 100, l: "Enterprise" }].map(({ v, l }) => (
              <button key={v} onClick={() => setCallsPerDay(v)}
                className={`text-[10px] font-bold transition-colors ${callsPerDay === v ? "text-[#0A1128]" : "text-gray-300 hover:text-gray-500"}`}>
                {l}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold text-[#0A1128] mb-1">Avg call length</p>
          <p className="text-xs text-gray-400 mb-3">Most business calls: 1–2 min</p>
          <div className="flex gap-2">
            <DurationBtn val={1} />
            <DurationBtn val={2} />
            <DurationBtn val={3} />
          </div>
        </div>
      </div>

      {/* ── Three-tier cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
        {([1, 2, 3] as TierKey[]).map((key) => {
          const r = results[key];
          const isSmart = key === smartKey;
          const isBlocked = !r.capacityOk;
          const isOver = r.extraMin > 0;

          return (
            <div key={key}
              className={`p-6 flex flex-col gap-4 transition-all ${
                isSmart ? "bg-[#0A1128]" : isBlocked ? "bg-gray-50 opacity-55" : "bg-white"
              }`}>

              {/* Tier name + badge */}
              <div className="flex items-center justify-between">
                <p className={`text-xs font-black tracking-widest uppercase ${
                  isSmart ? "text-white/40" : isBlocked ? "text-gray-300" : "text-gray-400"
                }`}>{r.name}</p>
                {isSmart && <span className="text-[9px] font-black tracking-[0.15em] uppercase px-2.5 py-1 rounded-full bg-[#FCCA07] text-[#0A1128]">Best fit</span>}
                {!isSmart && !isBlocked && key === 2 && <span className="text-[9px] font-bold text-[#2D22FF] bg-blue-50 px-2 py-0.5 rounded-full">Most popular</span>}
                {isBlocked && <span className="text-[9px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Volume too high</span>}
              </div>

              {/* Plan fee + voice rate */}
              <div className={`flex items-center gap-3 pb-4 border-b ${isSmart ? "border-white/10" : "border-gray-100"}`}>
                <div>
                  <span className={`text-2xl font-bold ${isSmart ? "text-white" : "text-[#0A1128]"}`}>${r.monthly}</span>
                  <span className={`text-xs ml-0.5 ${isSmart ? "text-white/30" : "text-gray-400"}`}>/mo</span>
                </div>
                <div className={`text-[11px] font-bold px-2.5 py-1 rounded-lg ${isSmart ? "bg-white/10 text-white/60" : "bg-gray-100 text-gray-500"}`}>
                  ${r.voiceRate.toFixed(2)}/min
                </div>
              </div>

              {/* Capacity warning */}
              {isBlocked && (
                <div className="text-[11px] text-amber-600 bg-amber-50 rounded-xl px-3 py-2.5 leading-snug">
                  {r.concurrent} concurrent line{r.concurrent > 1 ? "s" : ""} — {callsPerDay} calls/day would cause missed calls.
                </div>
              )}

              {!isBlocked && (
                <>
                  {/* Bundle progress bar */}
                  <div>
                    <div className="flex justify-between text-[10px] mb-1.5">
                      <span className={isSmart ? "text-white/40" : "text-gray-400"}>
                        {r.included.toLocaleString()} min free bundle
                      </span>
                      <span className={`font-bold ${isOver ? "text-amber-400" : "text-emerald-400"}`}>
                        {minutesNeeded.toLocaleString()} min/mo
                      </span>
                    </div>
                    <div className={`h-1.5 rounded-full overflow-hidden ${isSmart ? "bg-white/10" : "bg-gray-100"}`}>
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${isOver ? "bg-amber-400" : "bg-emerald-400"}`}
                        style={{ width: `${r.bundleUsedPct}%` }}
                      />
                    </div>
                    <p className={`text-[10px] mt-1 ${isSmart ? "text-white/25" : "text-gray-400"}`}>
                      {isOver
                        ? `bundle full — +${r.extraMin.toLocaleString()} min over`
                        : `${(r.included - minutesNeeded).toLocaleString()} min remaining`
                      }
                    </p>
                  </div>

                  {/* HERO: extra voice charges */}
                  <div className={`rounded-2xl p-5 text-center ${isSmart ? "bg-white/5" : "bg-gray-50 border border-gray-100"}`}>
                    <p className={`text-[10px] font-bold uppercase tracking-[0.15em] mb-3 ${isSmart ? "text-white/30" : "text-gray-400"}`}>
                      Extra voice charges
                    </p>
                    <p
                      className={`font-eb-garamond italic leading-none transition-colors ${isOver ? "text-amber-400" : "text-emerald-400"}`}
                      style={{ fontSize: "3.5rem" }}>
                      {isOver ? `$${r.overageCost}` : "$0"}
                    </p>
                    <p className={`text-[11px] mt-2 leading-snug ${isSmart ? "text-white/25" : "text-gray-400"}`}>
                      {isOver
                        ? `+${r.extraMin.toLocaleString()} min × $${r.voiceRate.toFixed(2)}/min`
                        : `all ${minutesNeeded} min within free bundle`
                      }
                    </p>
                  </div>

                  {/* Monthly total */}
                  <div className={`flex justify-between text-xs font-bold pt-1 ${isSmart ? "text-white/60" : "text-gray-500"}`}>
                    <span>Est. monthly total</span>
                    <span className={isSmart ? "text-white" : "text-[#0A1128]"}>${r.total.toLocaleString()}/mo</span>
                  </div>

                  {/* SMS unlimited */}
                  <div className={`flex items-center justify-between text-xs pt-1 border-t ${isSmart ? "border-white/10 text-white/40" : "border-gray-100 text-gray-400"}`}>
                    <span>SMS / text follow-ups</span>
                    <span className={`font-bold ${isSmart ? "text-white/70" : "text-[#0A1128]"}`}>Unlimited ∞</span>
                  </div>
                </>
              )}

              {/* CTA */}
              {isSmart ? (
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                  className="mt-auto w-full bg-[#FCCA07] text-[#0A1128] text-xs font-black py-3 rounded-xl text-center block hover:bg-[#f0bd00] transition-colors active:scale-[0.98] tracking-wide">
                  Start with {r.name} →
                </a>
              ) : (
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                  className={`mt-auto w-full border-2 text-xs font-bold py-3 rounded-xl text-center block transition-all ${
                    isBlocked
                      ? "border-gray-100 text-gray-300 cursor-not-allowed pointer-events-none"
                      : "border-gray-200 text-gray-400 hover:border-[#0A1128] hover:text-[#0A1128]"
                  }`}>
                  {isBlocked ? "Not enough capacity" : `Choose ${r.name}`}
                </a>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Footer ── */}
      <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
        <p className="text-[11px] text-gray-400 leading-relaxed">
          <span className="font-bold text-gray-500">How it works:</span> The monthly fee covers your AI agent, dedicated number, automated text/SMS follow-ups, and management. Each plan includes a free voice bundle — no extra charges until you exceed it. Beyond the bundle, usage is billed at the voice rate shown. Estimate based on {avgDuration} min avg call.
        </p>
      </div>

    </div>
  );
};

// ─── PRICING ──────────────────────────────────────────────────────────────────
const PricingSection = () => {
  const tiers = [
    {
      tag: "MICRO-PILOT",
      highlight: false,
      badge: null,
      setup: "$0 setup",
      monthly: "$49",
      perDay: "$1.63/day",
      worthOf: "$400+",
      replaces: "Part-time answering service",
      roi: "Convert 1 extra lead/month and you've already broken even.",
      ctaHref: CAL_LINK,
      featureGroups: [
        { label: "Calls & Coverage", items: [
          { text: "250 voice minutes/month", val: null },
          { text: "1 AI agent — support or sales", val: null },
          { text: "1 dedicated number (US, UK, or UAE)", val: null },
          { text: "Up to 1 concurrent call", val: null },
        ]},
        { label: "Follow-up", items: [
          { text: "Done-for-you text/SMS automation", val: "$200/mo value" },
          { text: "Missed-call text fallback", val: null },
        ]},
        { label: "Tools & Support", items: [
          { text: "Inbuilt pipeline dashboard", val: null },
          { text: "Static AI knowledge (1 doc/link)", val: null },
          { text: "3 prompt tweaks/month · Email support, 48h", val: null },
        ]},
      ],
      overage: "$0.20/min overage",
      best: "Clinics, brokers, service businesses who want proof first.",
    },
    {
      tag: "PROFESSIONAL",
      highlight: true,
      badge: "Most businesses upgrade here",
      setup: "$199 setup",
      monthly: "$199",
      perDay: "$6.60/day",
      worthOf: "$2,200+",
      replaces: "Full-time receptionist ($3,000–4,500/mo salary)",
      roi: "Convert 3–4 extra leads/month and the agent pays for itself many times over.",
      ctaHref: CAL_LINK,
      featureGroups: [
        { label: "Calls & Coverage", items: [
          { text: "1,100 min · 2 agents (Sales + Support)", val: null },
          { text: "3 concurrent calls · Bilingual auto-detect", val: null },
          { text: "1 dedicated number (US, UK, or UAE)", val: null },
        ]},
        { label: "Follow-up System", items: [
          { text: "14-day text + voice follow-up sequence", val: "$400 value" },
          { text: "No-Show Resurrector — checks in 2 hrs before", val: "$200 value" },
          { text: "AI Call Summarizer + Hot-Transfer Protocol", val: null },
        ]},
        { label: "Setup & Automation", items: [
          { text: "Done-for-you scripts, unlimited tweaks", val: "$600 value" },
          { text: "1-way CRM export: Sheets, Airtable, Webhook", val: null },
          { text: "Dynamic AI knowledge — 5 docs, learns from lost deals", val: null },
        ]},
        { label: "Support", items: [
          { text: "Priority Slack/email support, 24h SLA", val: null },
        ]},
      ],
      overage: null,
      best: "Dental clinics, real estate agencies, hiring teams.",
    },
    {
      tag: "ENTERPRISE",
      highlight: false,
      badge: null,
      setup: "$499+ setup",
      monthly: "$499",
      perDay: "$16.60/day",
      worthOf: "$5,500+",
      replaces: "3-person call center team ($9,000–15,000/mo)",
      roi: "Typical ROI: 8–12x within the first 90 days.",
      ctaHref: CAL_LINK,
      featureGroups: [
        { label: "Calls & Coverage", items: [
          { text: "2,850 min · Unlimited agents · 10+ concurrent", val: null },
          { text: "Up to 3 dedicated numbers (any supported country)", val: null },
          { text: "Multilingual routing — any supported language", val: null },
        ]},
        { label: "Growth Automation", items: [
          { text: "Dead Lead Reactivation — 30-day drip", val: "$800 value" },
          { text: "Autonomous A/B testing — AI picks the winner", val: "$600 value" },
          { text: "2-way CRM sync: Salesforce, HubSpot, GoHighLevel", val: null },
        ]},
        { label: "Success & Reporting", items: [
          { text: "Weekly performance summary", val: null },
          { text: "Dedicated Account Manager + AI Architect", val: "$1,200 value" },
          { text: "Unlimited prompt iterations", val: null },
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
        <h2 className="text-3xl sm:text-4xl font-eb-garamond italic text-[#0A1128] leading-tight mb-3">
          One missed call costs more<br className="hidden sm:block" /> than your entire monthly plan.
        </h2>
        <p className="text-gray-500 mb-10 max-w-lg">
          A single converted lead pays for months. No hidden fees. No per-minute surprise billing at month end.
        </p>

        {/* Human vs AI anchor bar */}
        <div className="flex flex-col sm:flex-row mb-12 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="flex-1 bg-[#0A1128] px-6 py-5">
            <p className="text-[10px] font-bold tracking-widest uppercase text-white/60 mb-1.5">What you pay a human receptionist</p>
            <p className="text-2xl font-bold text-white">$3,000 – $4,500<span className="text-sm font-normal text-white/60">/month</span></p>
            <p className="text-xs text-white/60 mt-1">Salary only. Add training, sick days, and zero night/weekend coverage.</p>
          </div>
          <div className="flex items-center justify-center bg-[#FCCA07] px-5 py-3 sm:py-0">
            <span className="text-[#0A1128] font-black text-base tracking-tight">VS</span>
          </div>
          <div className="flex-1 bg-white px-6 py-5">
            <p className="text-[10px] font-bold tracking-widest uppercase text-gray-600 mb-1.5">Your Loop AI agent</p>
            <p className="text-2xl font-bold text-[#0A1128]">Starts at $49<span className="text-sm font-normal text-gray-500">/month</span></p>
            <p className="text-xs text-gray-600 mt-1">Answers every call. Follows up on text. Works 24/7. Never quits.</p>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 md:items-stretch">
          {tiers.map((t, i) => (
            <div key={i} className={`relative flex flex-col ${t.badge ? "mt-5" : ""}`}>
              {t.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FCCA07] text-[#0A1128] text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap z-10 shadow-sm">{t.badge}</div>
              )}
              <div className={`rounded-2xl border flex flex-col flex-1 overflow-hidden ${t.highlight ? "bg-[#0A1128] border-[#0A1128] text-white" : "bg-white border-gray-200 text-[#0A1128]"}`}>
                <div className={`px-6 pt-7 pb-5 border-b ${t.highlight ? "border-white/10" : "border-gray-100"}`}>
                  <span className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.12em] uppercase mb-3 ${t.highlight ? "bg-blue-500/20 text-blue-300" : "bg-blue-50 text-blue-600"}`}>{t.tag}</span>
                  <div className={`flex items-start gap-1.5 text-xs mb-4 min-h-[2.5rem] ${t.highlight ? "text-white/60" : "text-gray-500"}`}>
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                    Replaces: {t.replaces}
                  </div>
                  <p className={`text-xs font-medium mb-0.5 ${t.highlight ? "text-white/50" : "text-gray-400"}`}>{t.setup}</p>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-4xl font-bold tracking-tight">{t.monthly}</span>
                    <span className={`text-sm ${t.highlight ? "text-white/50" : "text-gray-400"}`}>/month</span>
                  </div>
                  <p className={`text-xs mb-4 font-medium ${t.highlight ? "text-[#FCCA07]/70" : "text-gray-400"}`}>{t.perDay} — less than your coffee per appointment</p>
                  <div className={`rounded-xl px-4 py-3 ${t.highlight ? "bg-white/8" : "bg-gray-100"}`}>
                    <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${t.highlight ? "text-white/50" : "text-gray-500"}`}>Total value inside</p>
                    <div className="flex items-center gap-2">
                      <span className={`text-lg font-bold line-through ${t.highlight ? "text-white/40" : "text-gray-400"}`}>{t.worthOf}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${t.highlight ? "bg-white/15 text-white/70" : "bg-gray-300 text-gray-600"}`}>you save</span>
                    </div>
                  </div>
                </div>
                <div className={`mx-5 mt-4 px-3.5 py-2.5 rounded-xl flex items-start gap-2.5 ${t.highlight ? "bg-green-400/10 border border-green-400/20" : "bg-green-50 border border-green-100"}`}>
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  <p className={`text-xs leading-snug ${t.highlight ? "text-green-300" : "text-green-700"}`}>{t.roi}</p>
                </div>
                <div className="px-6 py-5 space-y-5">
                  {t.featureGroups.map((group, gi) => (
                    <div key={gi}>
                      <p className={`text-[9px] font-bold tracking-[0.14em] uppercase mb-2 ${t.highlight ? "text-white/35" : "text-gray-400"}`}>{group.label}</p>
                      <ul className="space-y-1.5">
                        {group.items.map((f, j) => (
                          <li key={j} className={`flex items-start gap-2 text-sm leading-snug ${t.highlight ? "text-white/80" : "text-gray-600"}`}>
                            <svg className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${t.highlight ? "text-green-400" : "text-green-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                            <span>
                              {f.text}
                              {f.val && <span className={`ml-1.5 text-[10px] font-bold px-1.5 py-0.5 rounded-md ${t.highlight ? "bg-[#FCCA07]/20 text-[#FCCA07]" : "bg-blue-50 text-blue-500"}`}>{f.val}</span>}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="flex-1" />
                <div className={`px-6 pb-6 pt-4 border-t ${t.highlight ? "border-white/10" : "border-gray-100"}`}>
                  {t.overage && <p className={`text-xs mb-2 ${t.highlight ? "text-white/30" : "text-gray-400"}`}>Overage: {t.overage}</p>}
                  <p className={`text-xs mb-4 ${t.highlight ? "text-white/40" : "text-gray-400"}`}>Best for: {t.best}</p>
                  <button onClick={() => window.open(t.ctaHref, "_blank", "noopener,noreferrer")}
                    className={`inline-flex items-center justify-center w-full py-3 rounded-lg text-sm font-semibold transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap ${t.highlight ? "bg-[#FCCA07] text-[#0A1128] hover:bg-[#f0bd00]" : "bg-[#0A1128] text-white hover:bg-[#0d1633]"}`}>
                    Build My AI Agent
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-5 px-6 rounded-2xl border border-gray-200 bg-white text-sm text-gray-500">
          {["No hidden fees", "No per-minute billing surprises", "Cancel anytime", "Live in 30 mins", "FCC & Ofcom-compliant numbers"].map((item) => (
            <span key={item} className="flex items-center gap-1.5 whitespace-nowrap">
              <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              {item}
            </span>
          ))}
        </div>

        <PricingCalculator />

        {/* Booster Packs */}
        <div className="mt-8 border border-gray-200 rounded-2xl overflow-hidden bg-white">
          <div className="px-6 py-5 border-b border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base">🔋</span>
              <p className="text-sm font-bold text-[#0A1128]">Booster Pack Recharge</p>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xl">
              When your included minutes are used up, top up with a Booster Pack. Set it to{" "}
              <strong className="text-gray-700">trigger automatically</strong> when your balance drops below a threshold — or do it{" "}
              <strong className="text-gray-700">manually</strong> from the dashboard. No surprise charges either way.
            </p>
          </div>
          <div className="px-6 py-4">
            <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-3">⏱ Minutes Booster</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    {["For Plan", "Pack", "Price", "Minutes Added", "Effective Rate"].map((h) => (
                      <th key={h} className="text-left text-[10px] font-bold text-gray-500 uppercase tracking-wide px-4 py-2.5 border border-gray-100 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { plan: "🌱 Micro-Pilot", pack: "Emergency Add-On", price: "$20", minutes: "100 min", rate: "$0.20/min" },
                    { plan: "🌱 Micro-Pilot", pack: "Double-Up", price: "$36", minutes: "200 min", rate: "$0.18/min" },
                    { plan: "📈 Professional", pack: "Standard Voice Booster", price: "$85", minutes: "500 min", rate: "$0.17/min" },
                    { plan: "🏢 Enterprise", pack: "Wholesale Voice Booster", price: "$160", minutes: "1,000 min", rate: "$0.16/min" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/60 transition-colors">
                      <td className="px-4 py-3 border border-gray-100 font-medium text-[#0A1128] text-xs whitespace-nowrap">{row.plan}</td>
                      <td className="px-4 py-3 border border-gray-100 text-gray-600 text-xs">{row.pack}</td>
                      <td className="px-4 py-3 border border-gray-100 font-bold text-[#0A1128] text-sm">{row.price}</td>
                      <td className="px-4 py-3 border border-gray-100 text-gray-600 text-xs">{row.minutes}</td>
                      <td className="px-4 py-3 border border-gray-100 text-gray-600 text-xs font-medium">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-gray-400 mt-2.5">Unused minutes roll over to the next month. Packs can be stacked.</p>
          </div>
          <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
            <p className="text-[11px] text-gray-400 text-center">All Booster Packs are pre-purchased blocks — not per-minute billing. You always know exactly what you&apos;re spending.</p>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">
          SMS/text charges billed at carrier rates. We handle the full technical setup.
        </p>
      </Container>
    </section>
  );
};

// ─── FREE AUDIT ───────────────────────────────────────────────────────────────
const FreeAuditSection = () => {
  const audits = [
    { icon: "👻", name: "Ghost Patient Report", for: "for clinics", desc: "We call your clinic as a mystery patient, at peak hours and at 9pm. You see what a new patient hears on first contact." },
    { icon: "⚡", name: "Speed-to-Lead Test", for: "for real estate", desc: "We submit a property inquiry and time your response: phone, SMS, and email. You see your speed-to-lead in cold numbers." },
    { icon: "📊", name: "Unqualified Volume Review", for: "for hiring agencies", desc: "We review your first-round screening data: volume, time per screen, qualified rate. You see the true cost of your current process." },
  ];
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <SectionLabel text="Free audit" />
        <h2 className="text-3xl sm:text-4xl font-eb-garamond italic text-[#0A1128] leading-tight mb-2 max-w-2xl">
          Find out how many leads you&apos;re losing right now.<br />
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
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Request a general missed-call audit.</a>
        </p>
      </Container>
    </section>
  );
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "Can it handle callers with different accents or multiple languages?", a: "Yes. Loop is built to handle diverse accents, non-native speakers, and multilingual callers. Vox can respond in the language the caller uses — English, Spanish, Arabic, and more. You set a default or allow auto-detection. Most generic voice AI breaks on accent variation; Loop is built specifically for real-world conditions." },
    { q: "What's the difference between Loop and a text chatbot?", a: "A text chatbot waits for the customer to message. Loop answers the phone — where the majority of leads arrive first. Relay (the text layer) handles follow-up after the call via SMS or your preferred messaging channel. You get both channels, connected. Chatbots handle inbound text. Loop handles conversations." },
    { q: "How does it compare to hiring a human receptionist?", a: "A trained receptionist costs $3,000–$4,500/month, works 8 hours a day, and takes weekends off. Loop starts at $49/month, answers every call in under 2 seconds, works 24/7, and never calls in sick. It handles the volume your team can't, so your staff focuses on the clients who show up." },
    { q: "Will my callers know they're talking to an AI?", a: "Most don't ask — they want their question answered and their appointment booked. If a caller directly asks, Vox answers honestly. Trust comes from how fast and accurately it responds, not whether it's human. Our clients report no drop in booking conversion after switching." },
    { q: "What if the AI doesn't know the answer?", a: "It never guesses. If it can't answer something, it says 'let me have the team get back to you', logs the full message and sends your team an immediate text alert with the caller's name and question. Every call has a human escalation path built in from day one." },
    { q: "How does the AI learn my specific business?", a: "We start with a 30-minute onboarding call. You walk us through your most common questions, your booking process, and your pricing. If you have existing call recordings, they accelerate training. What goes live is trained on your actual business — not a generic script that fits nobody." },
    { q: "What happens when a caller needs a human?", a: "Loop routes it immediately. For urgent or complex queries, it either transfers the call live to your number (hot transfer) or sends you a text alert with the caller's full context — name, question, urgency — so you call back fully briefed. You're always in control of the handoff." },
    { q: "How fast does it go live?", a: "30 minutes to set up. We need your business details, calendar access, and one 30-minute call. We handle the entire build, testing, and QA — you don't touch any tech." },
    { q: "Do I need a new phone number?", a: "No. We forward calls from your existing business number. Your callers see your number, not ours. If you want a dedicated AI line, we provide one at no extra cost on Professional and Enterprise plans." },
    { q: "Is there a money-back guarantee?", a: "If your system isn't live within the same session of us receiving your setup materials, we refund the setup fee — no questions asked. Once live, we tune the system at no extra cost until it performs to your specification." },
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
                <svg className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    { label: "Ghost Patient Report", desc: "For dental & medical clinics", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.5 2 6 4.5 6 8c0 2.5.8 4.5 1.8 6.2C8.8 16 9.5 17.5 9.5 20h5c0-2.5.7-4 1.7-5.8C17.2 12.5 18 10.5 18 8c0-3.5-2.5-6-6-6z"/></svg> },
    { label: "Speed-to-Lead Test", desc: "For real estate agencies", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
    { label: "Hiring Volume Audit", desc: "For staffing & recruiting", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  ];
  return (
    <section className="py-20 sm:py-28 bg-[#0A1128]">
      <Container className="text-center" size="md">
        <SectionLabel text="Get started today" dark />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-eb-garamond italic text-white leading-tight mb-4">
          Your competitor picked up that call.<br />
          <span className="text-white/60">You can answer the next one.</span>
        </h2>
        <p className="text-white/50 mb-10 max-w-md mx-auto text-sm leading-relaxed">
          30-minute call. No slides. No pitch. We learn how your business works, then we build what actually fits.
        </p>
        <PrimaryBtn href={CAL_LINK} label="Take Your AI Agent Live in 30 Mins" size="lg" />
        {STATS.demoNumber && (
          <p className="mt-4 text-white/30 text-xs">
            Or call our AI right now: <span className="text-white/50 font-medium">{STATS.demoNumber}</span>
          </p>
        )}
        <div className="mt-12 mb-10">
          <p className="text-white/30 text-xs font-bold tracking-widest uppercase mb-5">Not ready to talk? Start with a free audit</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {audits.map((a) => (
              <a key={a.label} href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 hover:bg-white/[0.08] hover:border-white/20 transition-all">
                <span className="text-[#FCCA07]/80 group-hover:text-[#FCCA07] transition-colors">{a.icon}</span>
                <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{a.label}</p>
                <p className="text-[11px] text-white/35">{a.desc}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {["$0 to start", "Live in 30 mins", "No tech setup", "Cancel anytime"].map((t, i) => (
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/[0.08]">
        <div className="lg:col-span-2">
          <Link href="/" className="font-mondwest text-lg text-white font-normal tracking-[-0.02em] mb-2 block">Loop</Link>
          <p className="text-xs text-white/40 mb-1">Voice + Text AI</p>
          <p className="text-sm text-white/55 leading-relaxed mt-3 max-w-xs">
            Vox answers the call. Relay follows up on text. Your business never misses a lead again.
          </p>
          <div className="flex items-center gap-4 mt-5">
            <a href="mailto:aditya@tryagentikai.com" className="flex items-center gap-1.5 text-xs text-white/35 hover:text-white/60 transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              aditya@tryagentikai.com
            </a>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-white/35 hover:text-[#FCCA07] transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              Book a call
            </a>
          </div>
        </div>
        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-4">Product</p>
          <nav className="flex flex-col gap-2.5">
            <button onClick={() => smoothScrollTo("use-cases")} className="text-sm text-white/50 hover:text-white text-left transition-colors">Use Cases</button>
            <button onClick={() => smoothScrollTo("pricing")} className="text-sm text-white/50 hover:text-white text-left transition-colors">Pricing</button>
            <button onClick={() => smoothScrollTo("faq")} className="text-sm text-white/50 hover:text-white text-left transition-colors">FAQ</button>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">Book a Call</a>
          </nav>
        </div>
        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-4">Free Audits</p>
          <nav className="flex flex-col gap-2.5">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">Ghost Patient Report</a>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">Speed-to-Lead Test</a>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">Hiring Volume Audit</a>
          </nav>
        </div>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs text-white/25">© 2026 Agentic AI Labs. Built for global businesses.</p>
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
      <PrimaryBtn href={CAL_LINK} label="Take Your AI Live in 30 Mins" fullWidth size="lg" />
    </div>
  );
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
const AiVoiceAgentGlobalPage: NextPageWithLayout = () => {
  const [demoTab, setDemoTab] = useState<DemoTab>("dental");
  const [autoPlayTrigger, setAutoPlayTrigger] = useState<number>(0);
  const handleCardPlay = useCallback((tab: DemoTab) => {
    setDemoTab(tab);
    setAutoPlayTrigger(Date.now());
  }, []);

  return (
    <>
      <MetaConfig
        title="Loop — AI Voice Agent for Global Businesses | tryagentic.ai"
        description="Loop answers every call and follows up on text — automatically, in any language, 24/7. Vox handles voice. Relay handles the message. Built for dental clinics, real estate agencies, and hiring teams worldwide."
        type="Website"
        url={CANONICAL_URL}
        keywords={[
          "AI voice agent",
          "AI receptionist",
          "AI phone answering",
          "SMS AI follow-up",
          "missed call AI",
          "voice AI for business",
          "automated lead follow-up",
          "AI appointment booking",
        ]}
      />
      <Hero onCardPlay={handleCardPlay} />
      <HearItYourselfSection activeTab={demoTab} onTabChange={setDemoTab} autoPlayTrigger={autoPlayTrigger} />
      <SocialProofBar />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <UseCasesSection />
      <WhyDifferentSection />
      <SocialProofSection />
      <PricingSection />
      <FounderTeamSection productName="Loop" />
      <FreeAuditSection />
      <FAQSection />
      <FinalCTA />
      <PageFooter />
      <StickyMobileCTA />
      <style jsx global>{`
        @keyframes waveBarAnim {
          0% { transform: scaleY(0.4); }
          100% { transform: scaleY(1); }
        }
        @keyframes aura-breath {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.85; }
          50% { transform: scale(1.08) translate(5%, -5%); opacity: 0.75; }
        }
        .animate-aura-breath { animation: aura-breath 6s ease-in-out infinite; }
        .font-sfpro { font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif; }
        .font-mondwest { font-family: 'Mondwest', sans-serif; }
        .font-eb-garamond { font-family: 'EB Garamond', Georgia, serif; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
};

AiVoiceAgentGlobalPage.getLayout = (page) => page;
export default AiVoiceAgentGlobalPage;
