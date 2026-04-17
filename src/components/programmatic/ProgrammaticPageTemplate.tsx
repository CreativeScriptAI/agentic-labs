import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MetaConfig from "src/components/MetaConfig";
import { ProgrammaticPageData } from "src/data/programmaticSeoPages";

type Props = { page: ProgrammaticPageData };

// ─── Primitives ───────────────────────────────────────────────────────────────

const Container = ({ children, className = "", size = "md" }: { children: React.ReactNode; className?: string; size?: "sm" | "md" | "lg" }) => {
  const w = { sm: "max-w-3xl", md: "max-w-5xl", lg: "max-w-6xl" };
  return <div className={`${w[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
};

const Label = ({ text, dark }: { text: string; dark?: boolean }) => (
  <p className={`text-[11px] font-bold tracking-[0.18em] uppercase mb-4 flex items-center gap-2 ${dark ? "text-[#FCCA07]/70" : "text-[#0A1128]/40"}`}>
    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dark ? "bg-[#FCCA07]" : "bg-[#FCCA07]"}`} />
    {text}
  </p>
);

const Btn = ({ href, label, variant = "primary" }: { href: string; label: string; variant?: "primary" | "outline" | "outline-dark" }) => {
  const styles = {
    primary: "bg-[#0A1128] text-white hover:bg-[#131d3a]",
    outline: "border-2 border-[#0A1128]/15 text-[#0A1128] hover:border-[#0A1128]/40",
    "outline-dark": "border-2 border-white/20 text-white hover:border-white/50",
  };
  return (
    <Link href={href} className={`inline-flex items-center justify-center whitespace-nowrap rounded-lg px-7 py-3.5 text-sm font-semibold transition-all active:scale-[0.98] ${styles[variant]}`}>
      {label}
    </Link>
  );
};

// ─── Icons ────────────────────────────────────────────────────────────────────

const CheckSvg = ({ className = "w-4 h-4 text-emerald-500" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
);

const XSvg = ({ className = "w-4 h-4 text-gray-300" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" /></svg>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
);

const QuoteIcon = () => (
  <svg className="w-8 h-8 text-[#0A1128]/[0.06]" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"/></svg>
);

// ─── Images per vertical ─────────────────────────────────────────────────────

type PageImages = { hero: string; solution: string; result: string };

const PAGE_IMAGES: Record<string, PageImages> = {
  "ai-booking-agent-for-travel-agencies": {
    hero: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=640&q=80&auto=format&fit=crop",         // bus on highway
    solution: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=640&q=80&auto=format&fit=crop",    // person on phone call
    result: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=640&q=80&auto=format&fit=crop",      // team celebrating
  },
  "ai-dispatch-agent-for-home-services": {
    hero: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=640&q=80&auto=format&fit=crop",        // AC technician
    solution: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=640&q=80&auto=format&fit=crop",    // home repair worker
    result: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=640&q=80&auto=format&fit=crop",         // happy customer
  },
  "ai-interviewer-for-blue-collar-hiring": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=640&q=80&auto=format&fit=crop",        // construction workers
    solution: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=640&q=80&auto=format&fit=crop",    // handshake / hiring
    result: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=640&q=80&auto=format&fit=crop",      // team working
  },
  "ai-show-up-agent-for-online-coaching": {
    hero: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=640&q=80&auto=format&fit=crop",        // group collaboration
    solution: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=640&q=80&auto=format&fit=crop",    // video call on laptop
    result: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=640&q=80&auto=format&fit=crop",         // coaching session
  },
  "ai-showing-coordinator-for-real-estate": {
    hero: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=640&q=80&auto=format&fit=crop",           // house keys
    solution: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=640&q=80&auto=format&fit=crop",       // property interior
    result: "https://images.unsplash.com/photo-1582407947092-a0f67a36b839?w=640&q=80&auto=format&fit=crop",      // real estate handover
  },
  "ai-receptionist-for-med-spa": {
    hero: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=640&q=80&auto=format&fit=crop",        // clinic interior
    solution: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=640&q=80&auto=format&fit=crop",    // medical reception
    result: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=640&q=80&auto=format&fit=crop",      // patient care
  },
  "ghl-ai-chatbot-alternative": {
    hero: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=640&q=80&auto=format&fit=crop",           // team at laptops
    solution: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=80&auto=format&fit=crop",    // dashboard analytics
    result: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=640&q=80&auto=format&fit=crop",         // pipeline / charts
  },
  "done-for-you-ai-voice-agent": {
    hero: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=640&q=80&auto=format&fit=crop",           // team at work
    solution: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=640&q=80&auto=format&fit=crop",    // collaborative team
    result: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=640&q=80&auto=format&fit=crop",         // business meeting
  },
  "ai-vs-human-receptionist": {
    hero: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&q=80&auto=format&fit=crop",           // receptionist at desk
    solution: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=640&q=80&auto=format&fit=crop",    // professional woman
    result: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=640&q=80&auto=format&fit=crop",         // happy customer
  },
  "ai-for-missed-calls": {
    hero: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?w=640&q=80&auto=format&fit=crop",        // phone ringing
    solution: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=640&q=80&auto=format&fit=crop",    // person on phone
    result: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=640&q=80&auto=format&fit=crop",      // team celebrating
  },
  "gohighlevel-ai-calling-alternative": {
    hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=80&auto=format&fit=crop",        // dashboard
    solution: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=640&q=80&auto=format&fit=crop",       // team at laptops
    result: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=640&q=80&auto=format&fit=crop",         // pipeline charts
  },
};

const DEFAULT_IMAGES: PageImages = {
  hero: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&q=80&auto=format&fit=crop",
  solution: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=640&q=80&auto=format&fit=crop",
  result: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=640&q=80&auto=format&fit=crop",
};

const getImages = (slug: string): PageImages => PAGE_IMAGES[slug] || DEFAULT_IMAGES;

// ─── Template ─────────────────────────────────────────────────────────────────

const ProgrammaticPageTemplate: React.FC<Props> = ({ page }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Structured data
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
  const serviceSchema = { "@context": "https://schema.org", "@type": page.type === "glossary" ? "Article" : "Service", name: page.heroHeadline, headline: page.heroHeadline, description: page.description, provider: { "@type": "Organization", name: "Agentic AI Labs", url: "https://www.tryagentikai.com" }, url: page.canonicalUrl };

  return (
    <>
      <MetaConfig title={page.title} description={page.description} type={page.type === "glossary" ? "Article" : "Page"} url={page.canonicalUrl} canonical={page.canonicalUrl} keywords={page.keywords} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* HERO                                                                  */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A1128] pt-28 pb-16 sm:pt-32 sm:pb-20 relative overflow-hidden">
        <Container size="lg" className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── Left: Copy ── */}
            <div>
              {/* Trust badge */}
              <div className="flex items-center gap-2 mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07]" />
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/35">
                  {page.heroLabel}
                </span>
              </div>

              <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.4rem] font-eb-garamond italic text-white leading-[1.1] tracking-[-0.01em] mb-6">
                {page.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-white/45 max-w-xl mb-10 leading-relaxed">
                {page.heroSubheadline}
              </p>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center mb-14">
                <Link href={page.ctaHref} className="inline-flex items-center justify-center rounded-lg bg-[#FCCA07] text-[#0A1128] font-semibold px-7 py-3.5 text-sm hover:bg-[#f0bd00] transition-all active:scale-[0.98]">
                  {page.ctaLabel}
                </Link>
                {page.howItWorks && (
                  <a href="#how-it-works" className="inline-flex items-center gap-2 text-sm font-medium text-white/35 hover:text-white/60 transition-colors px-1 py-3">
                    See how it works
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </a>
                )}
              </div>

              {/* Stats row — bottom of left column */}
              {page.proofStats && (
                <div className="flex items-start gap-0 border-t border-white/[0.06] pt-8">
                  {page.proofStats.map((s, i) => (
                    <div key={i} className={`flex-1 ${i > 0 ? "border-l border-white/[0.06] pl-6" : ""} ${i < page.proofStats!.length - 1 ? "pr-6" : ""}`}>
                      <p className="font-eb-garamond italic text-3xl sm:text-4xl text-[#FCCA07] leading-none tracking-tight">{s.stat}</p>
                      <p className="text-[9px] font-bold tracking-[0.12em] uppercase text-white/25 mt-2 leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ── Right: Image with floating badges ── */}
            <div className="hidden lg:block relative" style={{ minHeight: 480 }}>
              {/* Main image */}
              <div className="relative w-full h-[480px] rounded-3xl overflow-hidden">
                <Image
                  src={getImages(page.pathSegments[0]).hero}
                  alt={page.heroHeadline}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
                {/* Subtle overlay for contrast with badges */}
                <div className="absolute inset-0 bg-[#0A1128]/20" />
              </div>

              {/* Floating badge: top-right — yellow accent card */}
              <div className="absolute -top-4 -right-4 bg-[#FCCA07] rounded-2xl px-5 py-4 shadow-lg" style={{ zIndex: 4 }}>
                <p className="font-eb-garamond italic text-3xl text-[#0A1128] leading-none">{page.proofStats?.[2]?.stat || "24/7"}</p>
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#0A1128]/50 mt-1.5">{page.proofStats?.[2]?.label || "Always on"}</p>
              </div>

              {/* Floating badge: bottom-left — WhatsApp */}
              <div className="absolute -bottom-3 -left-3 bg-white rounded-2xl px-5 py-4 shadow-lg border border-gray-100" style={{ zIndex: 4 }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0A1128]">WhatsApp summary</p>
                    <p className="text-[11px] text-gray-400">Sent in &lt; 10 seconds</p>
                  </div>
                </div>
              </div>

              {/* Floating badge: bottom-right — live indicator */}
              <div className="absolute bottom-8 -right-3 bg-[#0A1128] rounded-xl px-4 py-3 shadow-lg border border-white/10" style={{ zIndex: 4 }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] text-white/70 font-medium">Live in 7 days</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* PROBLEM                                                               */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <Container size="lg">
          <Label text="The Problem" />
          <h2 className="text-3xl sm:text-[2.75rem] font-eb-garamond italic text-[#0A1128] leading-[1.1] mb-12 max-w-2xl">
            {page.painTitle}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Pain points */}
            <div className="lg:col-span-7 space-y-0">
              {page.painPoints.map((item, i) => (
                <div key={i} className={`flex gap-5 py-6 ${i > 0 ? "border-t border-gray-100" : ""}`}>
                  <span className="text-[13px] font-mono text-[#0A1128]/20 pt-0.5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[15px] text-gray-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            {/* Cost callout */}
            <div className="lg:col-span-5">
              {page.costCallout && (
                <div className="bg-[#FAFAF8] rounded-2xl border border-gray-100 overflow-hidden sticky top-28">
                  <div className="p-6 space-y-4">
                    {page.costCallout.items.map((row) => (
                      <div key={row.label} className="flex justify-between gap-3">
                        <span className="text-sm text-gray-500">{row.label}</span>
                        <span className="text-sm font-semibold text-[#0A1128] whitespace-nowrap">{row.amount}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 p-6 space-y-3">
                    <div className="flex justify-between gap-3">
                      <span className="text-sm font-semibold text-gray-900">Revenue at risk</span>
                      <span className="text-sm font-bold text-rose-600">{page.costCallout.total}</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="text-sm text-gray-500">We solve it for</span>
                      <span className="text-sm font-bold text-[#0A1128] bg-[#FCCA07]/20 px-2 py-0.5 rounded">{page.costCallout.solvesFor}</span>
                    </div>
                  </div>
                  {page.costCallout.source && (
                    <div className="border-t border-gray-100 px-6 py-3">
                      <p className="text-[10px] text-gray-400">{page.costCallout.source}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Practitioner quote */}
              {page.practitionerQuote && (
                <div className="mt-6 relative">
                  <QuoteIcon />
                  <p className="text-[15px] text-gray-600 italic leading-relaxed mt-2">
                    &ldquo;{page.practitionerQuote.text}&rdquo;
                  </p>
                  <p className="text-xs text-gray-400 font-medium mt-3">— {page.practitionerQuote.attribution}</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* STATUS QUO + INDUSTRY SIGNAL                                          */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#FAFAF8] border-y border-gray-100">
        <Container size="lg">
          <Label text="What You've Already Tried" />
          <h2 className="text-3xl sm:text-[2.75rem] font-eb-garamond italic text-[#0A1128] leading-[1.1] mb-10 max-w-2xl">
            {page.statusQuoTitle}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {page.statusQuoItems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6 relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 rounded-full border border-rose-200 bg-rose-50 flex items-center justify-center flex-shrink-0">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Option {i + 1}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {page.industrySignal && (
            <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">Market Signal</span>
                  <h3 className="text-xl font-eb-garamond italic text-[#0A1128] mt-4 leading-snug">{page.industrySignal.headline}</h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-sm text-gray-500 leading-relaxed">{page.industrySignal.body}</p>
                  <p className="text-[10px] text-gray-400 font-medium mt-4">
                    {page.industrySignal.source}{page.industrySignal.date ? ` · ${page.industrySignal.date}` : ""}
                  </p>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* SOLUTION / LAYERS                                                     */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <Label text="What We Build" />
              <h2 className="text-3xl sm:text-[2.75rem] font-eb-garamond italic text-[#0A1128] leading-[1.1] max-w-xl">
                {page.solutionTitle}
              </h2>
            </div>
            <div className="relative h-[280px] rounded-2xl overflow-hidden">
              <Image
                src={getImages(page.pathSegments[0]).solution}
                alt={page.solutionTitle}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {page.layers ? (
            <div className="space-y-0">
              {page.layers.map((layer, i) => (
                <div key={layer.title} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start py-12 ${i > 0 ? "border-t border-gray-100" : ""}`}>
                  {/* Number + title */}
                  <div className={`lg:col-span-4 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <span className="font-eb-garamond italic text-[5rem] text-[#FCCA07]/20 leading-none block -mb-4">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-eb-garamond italic text-[#0A1128] leading-snug">{layer.title}</h3>
                  </div>
                  {/* Body */}
                  <div className={`lg:col-span-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="text-[15px] text-gray-500 leading-[1.8]">{layer.body}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4 max-w-3xl">
              {page.solutionItems.map((item, i) => (
                <div key={i} className="flex gap-4 py-4">
                  <span className="font-eb-garamond italic text-3xl text-[#0A1128]/10 leading-none flex-shrink-0 w-10">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[15px] text-gray-600 leading-relaxed pt-1">{item}</p>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* HOW IT WORKS                                                          */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      {page.howItWorks && (
        <section id="how-it-works" className="py-20 sm:py-28 bg-[#0A1128]">
          <Container size="lg">
            <Label text="The Process" dark />
            <h2 className="text-3xl sm:text-[2.75rem] font-eb-garamond italic text-white leading-[1.1] mb-4 max-w-2xl">
              From first call to live. One week.
            </h2>
            <p className="text-base text-white/35 mb-14 max-w-xl">
              We handle the prompts, the telephony, and the integrations. You just answer the qualified pings.
            </p>

            {/* Timeline */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
              {page.howItWorks.map((step, i) => (
                <div
                  key={step.phase}
                  className={`relative cursor-pointer group ${i > 0 ? "lg:border-l border-t lg:border-t-0 border-white/[0.06]" : ""}`}
                  onClick={() => setActiveStep(i)}
                >
                  {/* Step content */}
                  <div className={`p-6 lg:p-8 transition-all ${activeStep === i ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"}`}>
                    {/* Phase label */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        activeStep === i ? "bg-[#FCCA07] text-[#0A1128]" : "bg-white/[0.06] text-white/40"
                      }`}>
                        {String(step.week).padStart(2, "0")}
                      </span>
                      <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${
                        activeStep === i ? "text-white/70" : "text-white/25"
                      }`}>
                        {step.phase}
                      </span>
                    </div>

                    <p className={`text-sm leading-relaxed transition-colors ${activeStep === i ? "text-white/60" : "text-white/20"}`}>
                      {step.body}
                    </p>

                    <div className={`mt-5 pt-4 border-t transition-colors ${activeStep === i ? "border-white/10" : "border-white/[0.04]"}`}>
                      <p className={`text-xs font-medium transition-colors ${activeStep === i ? "text-white/40" : "text-white/15"}`}>
                        Your time: {step.youSpend}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* RESULTS                                                               */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <Container size="lg">
          <Label text="Results" />
          <h2 className="text-3xl sm:text-[2.75rem] font-eb-garamond italic text-[#0A1128] leading-[1.1] mb-14 max-w-2xl">
            {page.proofTitle}
          </h2>

          {/* Case study */}
          {page.caseStudy && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
              {/* Left — client + problem */}
              <div className="lg:col-span-5">
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-3">{page.caseStudy.client}</p>
                <div className="bg-[#FAFAF8] rounded-2xl border border-gray-100 p-6">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-rose-500 mb-2">The problem</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{page.caseStudy.problem}</p>
                </div>
              </div>

              {/* Right — system + result */}
              <div className="lg:col-span-7 space-y-4">
                <div className="bg-[#FAFAF8] rounded-2xl border border-gray-100 p-6">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-blue-600 mb-2">What we built</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{page.caseStudy.system}</p>
                </div>
                <div className="bg-[#0A1128] rounded-2xl p-6 border-l-4 border-[#FCCA07]">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-[#FCCA07] mb-2">The result</p>
                  <p className="text-sm text-white/70 leading-relaxed">{page.caseStudy.result}</p>
                </div>
              </div>
            </div>
          )}

          {/* Testimonial + image */}
          {page.testimonial && (
            <div className="border-t border-gray-100 pt-10 mt-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <QuoteIcon />
                  <p className="text-xl sm:text-2xl font-eb-garamond italic text-[#0A1128] leading-snug mt-3">
                    &ldquo;{page.testimonial.quote}&rdquo;
                  </p>
                  <p className="text-sm text-gray-400 font-medium mt-4">— {page.testimonial.author}</p>
                </div>
                <div className="lg:col-span-5">
                  <div className="relative h-[240px] rounded-2xl overflow-hidden">
                    <Image
                      src={getImages(page.pathSegments[0]).result}
                      alt="Result"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Fallback proof bullets */}
          {!page.caseStudy && (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {page.proofBullets.map((item) => (
                <div key={item} className="flex items-start gap-3 p-5 rounded-xl border border-gray-100 bg-[#FAFAF8]">
                  <CheckSvg />
                  <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* FIT CHECKLIST                                                         */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      {page.fitChecklist && (
        <section className="py-20 sm:py-28 bg-[#FAFAF8] border-y border-gray-100">
          <Container size="lg">
            <Label text="Is This for You?" />
            <h2 className="text-3xl sm:text-[2.75rem] font-eb-garamond italic text-[#0A1128] leading-[1.1] mb-12 max-w-2xl">
              {page.fitChecklist.headline}
            </h2>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* For you */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8">
                <p className="text-[10px] font-bold tracking-widest uppercase text-emerald-600 mb-6">This is for you if</p>
                <ul className="space-y-4">
                  {page.fitChecklist.forYou.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckSvg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not for you */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8">
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-6">This is NOT for you if</p>
                <ul className="space-y-4">
                  {page.fitChecklist.notForYou.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <XSvg className="w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-500 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {page.fitChecklist.geographicNote && (
              <p className="text-sm text-gray-500 mt-6 text-center">{page.fitChecklist.geographicNote}</p>
            )}
          </Container>
        </section>
      )}

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* FAQ                                                                   */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <Container size="md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left heading */}
            <div className="lg:col-span-4">
              <Label text="FAQ" />
              <h2 className="text-3xl font-eb-garamond italic text-[#0A1128] leading-tight lg:sticky lg:top-28">
                Questions we get asked.
              </h2>
            </div>

            {/* Right accordion */}
            <div className="lg:col-span-8 space-y-0">
              {page.faq.map((item, i) => (
                <div key={i} className={`${i > 0 ? "border-t border-gray-100" : ""}`}>
                  <button
                    className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-[15px] text-[#0A1128] group-hover:text-[#0A1128]/70 transition-colors">{item.question}</span>
                    <span className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${openFaq === i ? "bg-[#FCCA07] border-[#FCCA07] rotate-180" : "border-gray-200"}`}>
                      <svg className={`w-3 h-3 ${openFaq === i ? "text-[#0A1128]" : "text-gray-400"}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-gray-500 leading-relaxed pb-5 pr-10">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* FINAL CTA                                                             */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0A1128]">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-eb-garamond italic text-white leading-tight mb-4">
              Stop losing revenue to<br />
              <span className="text-white/40">an unanswered phone.</span>
            </h2>
            <p className="text-white/35 mb-10 max-w-md mx-auto text-sm leading-relaxed">
              {page.ctaSupportText}
            </p>

            <Link href={page.ctaHref} className="inline-flex items-center justify-center rounded-lg bg-[#FCCA07] text-[#0A1128] font-semibold px-8 py-4 text-sm hover:bg-[#f0bd00] transition-all active:scale-[0.98]">
              {page.ctaLabel}
            </Link>

            {page.ctaEmailFallback && (
              <p className="mt-6 text-sm text-white/25">
                Or email{" "}
                <a href={`mailto:${page.ctaEmailFallback}`} className="text-white/40 hover:text-white/70 transition-colors underline underline-offset-2">
                  {page.ctaEmailFallback}
                </a>
              </p>
            )}
          </div>

          {/* Related links */}
          <div className="mt-16 pt-8 border-t border-white/[0.06]">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {page.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors">
                  {link.label}
                  <ArrowIcon />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProgrammaticPageTemplate;
