import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MetaConfig from "src/components/MetaConfig";
import BracketButton from "src/components/BracketButton";
import { ProgrammaticPageData } from "src/data/programmaticSeoPages";

type Props = { page: ProgrammaticPageData };

// ─── Primitives ───────────────────────────────────────────────────────────────

const Container = ({ children, className = "", size = "md" }: { children: React.ReactNode; className?: string; size?: "sm" | "md" | "lg" }) => {
  const w = { sm: "max-w-3xl", md: "max-w-5xl", lg: "max-w-6xl" };
  return <div className={`${w[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
};

const Label = ({ text, dark }: { text: string; dark?: boolean }) => (
  <p className={`font-geist text-[12px] font-normal tracking-[0.02em] uppercase mb-4 flex items-center gap-2 ${dark ? "text-[#FCCA07]/70" : "text-red-500"}`}>
    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#FCCA07]" />
    {text}
  </p>
);

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
    hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=80&auto=format&fit=crop",
    solution: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=640&q=80&auto=format&fit=crop",
    result: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=640&q=80&auto=format&fit=crop",
  },
  "ai-receptionist-for-dental-clinic": {
    hero: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=640&q=80&auto=format&fit=crop",        // dental clinic
    solution: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=640&q=80&auto=format&fit=crop",    // dental procedure
    result: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=640&q=80&auto=format&fit=crop",      // dental patient smiling
  },
  "ai-booking-agent-for-salon": {
    hero: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=640&q=80&auto=format&fit=crop",           // salon interior
    solution: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=640&q=80&auto=format&fit=crop",    // hair styling
    result: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=640&q=80&auto=format&fit=crop",      // satisfied salon client
  },
  "ai-for-coaching-institute": {
    hero: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=640&q=80&auto=format&fit=crop",        // classroom
    solution: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=640&q=80&auto=format&fit=crop",    // teacher with students
    result: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=640&q=80&auto=format&fit=crop",      // graduation
  },
  "ai-cod-confirmation-agent": {
    hero: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=640&q=80&auto=format&fit=crop",           // ecommerce packages
    solution: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=640&q=80&auto=format&fit=crop",    // delivery
    result: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&q=80&auto=format&fit=crop",         // happy customer
  },
  "ai-receptionist-for-restaurant": {
    hero: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=640&q=80&auto=format&fit=crop",        // restaurant interior
    solution: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=640&q=80&auto=format&fit=crop",    // fine dining
    result: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=640&q=80&auto=format&fit=crop",         // busy restaurant
  },
  "ai-for-diagnostic-lab": {
    hero: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=640&q=80&auto=format&fit=crop",        // lab equipment
    solution: "https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?w=640&q=80&auto=format&fit=crop",    // lab technician
    result: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=640&q=80&auto=format&fit=crop",      // healthcare
  },
  "ai-for-pest-control": {
    hero: "https://images.unsplash.com/photo-1632935190508-30fa00d3cadf?w=640&q=80&auto=format&fit=crop",        // pest control worker
    solution: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=640&q=80&auto=format&fit=crop",    // service worker
    result: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=640&q=80&auto=format&fit=crop",         // satisfied customer
  },
  "ai-for-immigration-consultant": {
    hero: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=640&q=80&auto=format&fit=crop",        // education
    solution: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=640&q=80&auto=format&fit=crop",    // studying documents
    result: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=640&q=80&auto=format&fit=crop",      // graduation abroad
  },
  "ai-voice-agent-hindi": {
    hero: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=640&q=80&auto=format&fit=crop",        // person on phone
    solution: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=640&q=80&auto=format&fit=crop",    // diverse team
    result: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=640&q=80&auto=format&fit=crop",      // team success
  },
  "ai-for-gym-fitness": {
    hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=640&q=80&auto=format&fit=crop",        // gym interior
    solution: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=640&q=80&auto=format&fit=crop",    // personal training
    result: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=640&q=80&auto=format&fit=crop",      // group fitness
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
      <section className="bg-[#F9F6F4] pt-28 pb-16 sm:pt-32 sm:pb-20 relative overflow-hidden">
        <Container size="lg" className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── Left: Copy ── */}
            <div>
              {/* Trust badge */}
              <div className="flex items-center gap-2 mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07]" />
                <span className="font-geist text-[12px] font-normal tracking-[0.02em] uppercase text-red-500">
                  {page.heroLabel}
                </span>
              </div>

              <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.4rem] font-alte font-normal text-[#0A1128] leading-[1.2] tracking-[-0.04em] mb-6">
                {page.heroHeadline}
              </h1>

              <p className="font-alte font-normal text-[15px] sm:text-base text-slate-600 max-w-xl mb-10 leading-[1.5] tracking-[-0.04em]">
                {page.heroSubheadline}
              </p>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center mb-14">
                <BracketButton label={page.ctaLabel} href={page.ctaHref} variant="primary" />
                {page.howItWorks && (
                  <a href="#how-it-works" className="font-alte font-normal inline-flex items-center gap-2 text-[15px] tracking-[-0.04em] text-slate-500 hover:text-[#0A1128] transition-colors px-1 py-3">
                    See how it works
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </a>
                )}
              </div>

              {/* Stats row — bottom of left column */}
              {page.proofStats && (
                <div className="flex items-start gap-0 border-t border-[#e7e6e4] pt-8">
                  {page.proofStats.map((s, i) => (
                    <div key={i} className={`flex-1 ${i > 0 ? "border-l border-[#e7e6e4] pl-6" : ""} ${i < page.proofStats!.length - 1 ? "pr-6" : ""}`}>
                      <p className="font-alte font-normal text-3xl sm:text-4xl text-blue-600 leading-none tracking-[-0.04em]">{s.stat}</p>
                      <p className="font-geist text-[12px] font-normal tracking-[0.02em] uppercase text-slate-400 mt-2 leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ── Right: Image with floating badges ── */}
            <div className="hidden lg:block relative" style={{ minHeight: 480 }}>
              {/* Main image */}
              <div className="relative w-full h-[480px] rounded-none overflow-hidden border border-[#e7e6e4]">
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
              <div className="absolute -top-4 -right-4 bg-[#FCCA07] rounded-none px-5 py-4" style={{ zIndex: 4 }}>
                <p className="font-alte font-normal text-3xl text-[#0A1128] leading-none tracking-[-0.04em]">{page.proofStats?.[2]?.stat || "24/7"}</p>
                <p className="font-geist text-[12px] font-normal tracking-[0.02em] uppercase text-[#0A1128]/50 mt-1.5">{page.proofStats?.[2]?.label || "Always on"}</p>
              </div>

              {/* Floating badge: bottom-left — WhatsApp */}
              <div className="absolute -bottom-3 -left-3 bg-white rounded-none px-5 py-4 border border-[#e7e6e4]" style={{ zIndex: 4 }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-none bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                  </div>
                  <div>
                    <p className="font-alte font-normal text-[15px] text-[#0A1128]">WhatsApp summary</p>
                    <p className="font-alte font-normal text-[12px] text-slate-400">Sent in &lt; 10 seconds</p>
                  </div>
                </div>
              </div>

              {/* Floating badge: bottom-right — live indicator */}
              <div className="absolute bottom-8 -right-3 bg-white rounded-none px-4 py-3 border border-[#e7e6e4]" style={{ zIndex: 4 }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-alte font-normal text-[12px] text-[#0A1128]">Live in 7 days</span>
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
          <h2 className="text-3xl sm:text-[2.5rem] font-alte font-normal text-[#0A1128] leading-[1.2] tracking-[-0.04em] mb-12 max-w-2xl">
            {page.painTitle}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Pain points */}
            <div className="lg:col-span-7 space-y-0">
              {page.painPoints.map((item, i) => (
                <div key={i} className={`flex gap-5 py-6 ${i > 0 ? "border-t border-[#e7e6e4]" : ""}`}>
                  <span className="font-geist text-[12px] text-[#0A1128]/30 pt-0.5 flex-shrink-0 tracking-[0.02em]">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-alte font-normal text-[15px] text-slate-600 leading-[1.5] tracking-[-0.04em]">{item}</p>
                </div>
              ))}
            </div>

            {/* Cost callout */}
            <div className="lg:col-span-5">
              {page.costCallout && (
                <div className="bg-[#F9F6F4] rounded-none border border-[#e7e6e4] overflow-hidden sticky top-28">
                  <div className="p-6 space-y-4">
                    {page.costCallout.items.map((row) => (
                      <div key={row.label} className="flex justify-between gap-3">
                        <span className="font-alte font-normal text-[15px] text-slate-500 tracking-[-0.04em]">{row.label}</span>
                        <span className="font-alte font-normal text-[15px] text-[#0A1128] whitespace-nowrap tracking-[-0.04em]">{row.amount}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[#e7e6e4] p-6 space-y-3">
                    <div className="flex justify-between gap-3">
                      <span className="font-alte font-normal text-[15px] text-[#0A1128] tracking-[-0.04em]">Revenue at risk</span>
                      <span className="font-alte font-normal text-[15px] text-red-500 tracking-[-0.04em]">{page.costCallout.total}</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="font-alte font-normal text-[15px] text-slate-500 tracking-[-0.04em]">We solve it for</span>
                      <span className="font-alte font-normal text-[15px] text-[#0A1128] bg-[#FCCA07]/20 px-2 py-0.5 rounded-none tracking-[-0.04em]">{page.costCallout.solvesFor}</span>
                    </div>
                  </div>
                  {page.costCallout.source && (
                    <div className="border-t border-[#e7e6e4] px-6 py-3">
                      <p className="font-alte font-normal text-[12px] text-slate-400">{page.costCallout.source}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Practitioner quote */}
              {page.practitionerQuote && (
                <div className="mt-6 relative">
                  <QuoteIcon />
                  <p className="font-alte font-normal text-[15px] text-slate-600 leading-[1.5] tracking-[-0.04em] mt-2">
                    &ldquo;{page.practitionerQuote.text}&rdquo;
                  </p>
                  <p className="font-alte font-normal text-[12px] text-slate-400 mt-3">{page.practitionerQuote.attribution}</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* STATUS QUO + INDUSTRY SIGNAL                                          */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#F9F6F4] border-y border-[#e7e6e4]">
        <Container size="lg">
          <Label text="What You've Already Tried" />
          <h2 className="text-3xl sm:text-[2.5rem] font-alte font-normal text-[#0A1128] leading-[1.2] tracking-[-0.04em] mb-10 max-w-2xl">
            {page.statusQuoTitle}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {page.statusQuoItems.map((item, i) => (
              <div key={i} className="bg-white rounded-none border border-[#e7e6e4] p-6 relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 rounded-full border border-rose-200 bg-rose-50 flex items-center justify-center flex-shrink-0">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </span>
                  <span className="font-geist text-[12px] font-normal tracking-[0.02em] uppercase text-slate-400">Option {i + 1}</span>
                </div>
                <p className="font-alte font-normal text-[15px] text-slate-600 leading-[1.5] tracking-[-0.04em]">{item}</p>
              </div>
            ))}
          </div>

          {page.industrySignal && (
            <div className="bg-white rounded-none border border-[#e7e6e4] p-8 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                  <span className="font-geist text-[12px] font-normal tracking-[0.02em] uppercase text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-none">Market Signal</span>
                  <h3 className="text-xl font-alte font-normal text-[#0A1128] mt-4 leading-[1.2] tracking-[-0.04em]">{page.industrySignal.headline}</h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="font-alte font-normal text-[15px] text-slate-500 leading-[1.5] tracking-[-0.04em]">{page.industrySignal.body}</p>
                  <p className="font-alte font-normal text-[12px] text-slate-400 mt-4">
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
              <h2 className="text-3xl sm:text-[2.5rem] font-alte font-normal text-[#0A1128] leading-[1.2] tracking-[-0.04em] max-w-xl">
                {page.solutionTitle}
              </h2>
            </div>
            <div className="relative h-[280px] rounded-none overflow-hidden border border-[#e7e6e4]">
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
                <div key={layer.title} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start py-12 ${i > 0 ? "border-t border-[#e7e6e4]" : ""}`}>
                  {/* Number + title */}
                  <div className={`lg:col-span-4 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <span className="font-alte font-normal text-[5rem] text-[#FCCA07] leading-none block -mb-4 tracking-[-0.04em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-alte font-normal text-[#0A1128] leading-[1.2] tracking-[-0.04em]">{layer.title}</h3>
                  </div>
                  {/* Body */}
                  <div className={`lg:col-span-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="font-alte font-normal text-[15px] text-slate-500 leading-[1.5] tracking-[-0.04em]">{layer.body}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4 max-w-3xl">
              {page.solutionItems.map((item, i) => (
                <div key={i} className="flex gap-4 py-4">
                  <span className="font-alte font-normal text-3xl text-[#0A1128]/20 leading-none flex-shrink-0 w-10 tracking-[-0.04em]">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-alte font-normal text-[15px] text-slate-600 leading-[1.5] tracking-[-0.04em] pt-1">{item}</p>
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
        <section id="how-it-works" className="py-20 sm:py-28 bg-[#F9F6F4] border-y border-[#e7e6e4]">
          <Container size="lg">
            <Label text="The Process" />
            <h2 className="text-3xl sm:text-[2.5rem] font-alte font-normal text-[#0A1128] leading-[1.2] tracking-[-0.04em] mb-4 max-w-2xl">
              From first call to live. One week.
            </h2>
            <p className="font-alte font-normal text-[15px] sm:text-base text-slate-500 mb-14 max-w-xl leading-[1.5] tracking-[-0.04em]">
              We handle the prompts, the telephony, and the integrations. You just answer the qualified pings.
            </p>

            {/* Timeline */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 border border-[#e7e6e4] bg-white">
              {page.howItWorks.map((step, i) => (
                <div
                  key={step.phase}
                  className={`relative cursor-pointer group ${i > 0 ? "lg:border-l border-t lg:border-t-0 border-[#e7e6e4]" : ""}`}
                  onClick={() => setActiveStep(i)}
                >
                  {/* Step content */}
                  <div className={`p-6 lg:p-8 transition-all ${activeStep === i ? "bg-[#F9F6F4]" : "hover:bg-[#F9F6F4]/60"}`}>
                    {/* Phase label */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-geist text-[12px] font-normal tracking-[0.02em] transition-colors ${
                        activeStep === i ? "bg-[#FCCA07] text-[#0A1128]" : "bg-[#F9F6F4] border border-[#e7e6e4] text-slate-400"
                      }`}>
                        {String(step.week).padStart(2, "0")}
                      </span>
                      <span className={`font-geist text-[12px] font-normal tracking-[0.02em] uppercase transition-colors ${
                        activeStep === i ? "text-[#0A1128]" : "text-slate-400"
                      }`}>
                        {step.phase}
                      </span>
                    </div>

                    <p className={`font-alte font-normal text-[15px] leading-[1.5] tracking-[-0.04em] transition-colors ${activeStep === i ? "text-slate-600" : "text-slate-400"}`}>
                      {step.body}
                    </p>

                    <div className={`mt-5 pt-4 border-t transition-colors ${activeStep === i ? "border-[#e7e6e4]" : "border-[#e7e6e4]/60"}`}>
                      <p className={`font-alte font-normal text-[12px] transition-colors ${activeStep === i ? "text-slate-500" : "text-slate-400"}`}>
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
          <h2 className="text-3xl sm:text-[2.5rem] font-alte font-normal text-[#0A1128] leading-[1.2] tracking-[-0.04em] mb-14 max-w-2xl">
            {page.proofTitle}
          </h2>

          {/* Case study */}
          {page.caseStudy && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
              {/* Left — client + problem */}
              <div className="lg:col-span-5">
                <p className="font-geist text-[12px] font-normal tracking-[0.02em] uppercase text-slate-400 mb-3">{page.caseStudy.client}</p>
                <div className="bg-[#F9F6F4] rounded-none border border-[#e7e6e4] p-6">
                  <p className="font-geist text-[12px] font-normal tracking-[0.02em] uppercase text-red-500 mb-2">The problem</p>
                  <p className="font-alte font-normal text-[15px] text-slate-600 leading-[1.5] tracking-[-0.04em]">{page.caseStudy.problem}</p>
                </div>
              </div>

              {/* Right — system + result */}
              <div className="lg:col-span-7 space-y-4">
                <div className="bg-[#F9F6F4] rounded-none border border-[#e7e6e4] p-6">
                  <p className="font-geist text-[12px] font-normal tracking-[0.02em] uppercase text-blue-600 mb-2">What we built</p>
                  <p className="font-alte font-normal text-[15px] text-slate-600 leading-[1.5] tracking-[-0.04em]">{page.caseStudy.system}</p>
                </div>
                <div className="bg-[#F9F6F4] rounded-none p-6 border border-[#e7e6e4] border-l-4 border-l-[#FCCA07]">
                  <p className="font-geist text-[12px] font-normal tracking-[0.02em] uppercase text-emerald-600 mb-2">The result</p>
                  <p className="font-alte font-normal text-[15px] text-[#0A1128] leading-[1.5] tracking-[-0.04em]">{page.caseStudy.result}</p>
                </div>
              </div>
            </div>
          )}

          {/* Testimonial + image */}
          {page.testimonial && (
            <div className="border-t border-[#e7e6e4] pt-10 mt-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <QuoteIcon />
                  <p className="text-xl sm:text-2xl font-alte font-normal text-[#0A1128] leading-[1.2] tracking-[-0.04em] mt-3">
                    &ldquo;{page.testimonial.quote}&rdquo;
                  </p>
                  <p className="font-alte font-normal text-[15px] text-slate-400 mt-4">{page.testimonial.author}</p>
                </div>
                <div className="lg:col-span-5">
                  <div className="relative h-[240px] rounded-none overflow-hidden border border-[#e7e6e4]">
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
                <div key={item} className="flex items-start gap-3 p-5 rounded-none border border-[#e7e6e4] bg-[#F9F6F4]">
                  <CheckSvg />
                  <p className="font-alte font-normal text-[15px] text-slate-600 leading-[1.5] tracking-[-0.04em]">{item}</p>
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
        <section className="py-20 sm:py-28 bg-[#F9F6F4] border-y border-[#e7e6e4]">
          <Container size="lg">
            <Label text="Is This for You?" />
            <h2 className="text-3xl sm:text-[2.5rem] font-alte font-normal text-[#0A1128] leading-[1.2] tracking-[-0.04em] mb-12 max-w-2xl">
              {page.fitChecklist.headline}
            </h2>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* For you */}
              <div className="bg-white rounded-none border border-[#e7e6e4] p-8">
                <p className="font-geist text-[12px] font-normal tracking-[0.02em] uppercase text-emerald-600 mb-6">This is for you if</p>
                <ul className="space-y-4">
                  {page.fitChecklist.forYou.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckSvg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="font-alte font-normal text-[15px] text-[#0A1128] leading-[1.5] tracking-[-0.04em]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not for you */}
              <div className="bg-white rounded-none border border-[#e7e6e4] p-8">
                <p className="font-geist text-[12px] font-normal tracking-[0.02em] uppercase text-slate-400 mb-6">This is NOT for you if</p>
                <ul className="space-y-4">
                  {page.fitChecklist.notForYou.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <XSvg className="w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0" />
                      <span className="font-alte font-normal text-[15px] text-slate-500 leading-[1.5] tracking-[-0.04em]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {page.fitChecklist.geographicNote && (
              <p className="font-alte font-normal text-[15px] text-slate-500 mt-6 text-center tracking-[-0.04em]">{page.fitChecklist.geographicNote}</p>
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
              <h2 className="text-3xl font-alte font-normal text-[#0A1128] leading-[1.2] tracking-[-0.04em] lg:sticky lg:top-28">
                Questions we get asked.
              </h2>
            </div>

            {/* Right accordion */}
            <div className="lg:col-span-8 space-y-0">
              {page.faq.map((item, i) => (
                <div key={i} className={`${i > 0 ? "border-t border-[#e7e6e4]" : ""}`}>
                  <button
                    className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-alte font-normal text-[15px] text-[#0A1128] group-hover:text-[#0A1128]/70 transition-colors tracking-[-0.04em]">{item.question}</span>
                    <span className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${openFaq === i ? "bg-[#FCCA07] border-[#FCCA07] rotate-180" : "border-[#e7e6e4]"}`}>
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
                        <p className="font-alte font-normal text-[15px] text-slate-500 leading-[1.5] tracking-[-0.04em] pb-5 pr-10">{item.answer}</p>
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
      <section className="py-20 sm:py-28 bg-[#F9F6F4]">
        <Container size="md">
          <div className="rounded-none bg-white border border-[#e7e6e4] px-4 py-12 sm:px-12 sm:py-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-alte font-normal text-[#0A1128] leading-[1.2] tracking-[-0.04em] mb-4">
              Stop losing revenue to<br />
              <span className="text-blue-600">an unanswered phone.</span>
            </h2>
            <p className="font-alte font-normal text-slate-500 mb-10 max-w-md mx-auto text-[15px] leading-[1.5] tracking-[-0.04em]">
              {page.ctaSupportText}
            </p>

            <div className="flex justify-center">
              <BracketButton label={page.ctaLabel} href={page.ctaHref} variant="primary" />
            </div>

            {page.ctaEmailFallback && (
              <p className="mt-6 font-alte font-normal text-[15px] text-slate-400">
                Or email{" "}
                <a href={`mailto:${page.ctaEmailFallback}`} className="text-[#0A1128] hover:text-blue-600 transition-colors underline underline-offset-2">
                  {page.ctaEmailFallback}
                </a>
              </p>
            )}
          </div>

          {/* Related links */}
          <div className="mt-16 pt-8 border-t border-[#e7e6e4]">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {page.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="flex items-center gap-2 font-alte font-normal text-[15px] text-slate-500 hover:text-[#0A1128] transition-colors tracking-[-0.04em]">
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
