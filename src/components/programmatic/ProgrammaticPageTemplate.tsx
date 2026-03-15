import Image from "next/image";
import Link from "next/link";
import MetaConfig from "src/components/MetaConfig";
import { ProgrammaticPageData } from "src/data/programmaticSeoPages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "src/components/ui/accordion";

type Props = { page: ProgrammaticPageData };

// ─── Image pools ───────────────────────────────────────────────────────────────

const IMAGE_POOLS: Record<string, string[]> = {
  persona: [
    "1521737604893-d14cc237f11d",
    "1522071820081-009f0129c71c",
    "1560250097-0b93528c311a",
    "1573496359142-b8d87734a5a2",
  ],
  integration: [
    "1518770660439-4636190af475",
    "1461749280684-dccba630e2f6",
    "1558494949-ef010cbdcc31",
    "1551434678-e076c223a692",
  ],
  comparison: [
    "1460925895917-afdab827c52f",
    "1551288049-bebda4e38f71",
    "1507679799987-c73779587ccf",
    "1543286386-713bdd548da4",
  ],
  glossary: [
    "1677442135703-1787eea5ce01",
    "1531746790731-6c087fecd65a",
    "1488229297570-58520851e868",
    "1507003211169-0a1dd7228f2d",
  ],
  directory: [
    "1497366216548-37526070297c",
    "1497366754035-f200968a6e72",
    "1542744094-24638eff58bb",
    "1552664730-d307ca884978",
  ],
  "memory-use-case": [
    "1451187580459-43490279c0fa",
    "1676277791608-ac54525aa94d",
    "1555255707-c96582f6ed8b",
    "1509228468518-180dd4864904",
  ],
};

function pickImageId(type: string, slug: string): string {
  const pool = IMAGE_POOLS[type] ?? IMAGE_POOLS["glossary"];
  const hash = slug.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return pool[hash % pool.length];
}

// ─── Design tokens ─────────────────────────────────────────────────────────────

const SECTION_BG = {
  warm: "bg-[#F9F6F4]",
  white: "bg-white",
  navy: "bg-[#0A1128]",
} as const;

const PAGE_TYPE_LABELS: Record<string, string> = {
  persona: "Built for You",
  integration: "Integration",
  comparison: "Comparison",
  glossary: "Glossary",
  directory: "Directory",
  "memory-use-case": "AI Memory",
};

// ─── Shared sub-components ─────────────────────────────────────────────────────

const Section = ({
  id,
  bg = "white",
  children,
}: {
  id?: string;
  bg?: keyof typeof SECTION_BG;
  children: React.ReactNode;
}) => (
  <section id={id} className={`py-14 sm:py-16 lg:py-20 ${SECTION_BG[bg]}`}>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

const Eyebrow = ({ label }: { label: string }) => (
  <p className="text-xs font-semibold text-blue-600 tracking-[0.14em] uppercase font-sfpro mb-2">
    {label}
  </p>
);

const CTAButton = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="inline-flex items-center justify-center rounded-lg bg-[#FCCA07] px-7 py-3.5 text-base font-semibold text-[#0A1128] transition-colors duration-200 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-[#FCCA07] focus:ring-offset-2 cursor-pointer"
  >
    {label}
  </Link>
);

const CheckIcon = () => (
  <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
  </svg>
);

const XIcon = () => (
  <svg className="mt-0.5 h-5 w-5 shrink-0 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
  </svg>
);

// ─── Main template ──────────────────────────────────────────────────────────────

const ProgrammaticPageTemplate: React.FC<Props> = ({ page }) => {
  const slug = page.pathSegments.join("-");
  const photoId = pickImageId(page.type, slug);
  const imgSrc = `https://images.unsplash.com/photo-${photoId}?w=900&q=80&auto=format&fit=crop`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": page.type === "glossary" ? "Article" : "Service",
    name: page.heroHeadline,
    headline: page.heroHeadline,
    description: page.description,
    provider: {
      "@type": "Organization",
      name: "Agentic AI Labs",
      url: "https://www.tryagentikai.com",
    },
    url: page.canonicalUrl,
  };

  return (
    <>
      <MetaConfig
        title={page.title}
        description={page.description}
        type={page.type === "glossary" ? "Article" : "Page"}
        url={page.canonicalUrl}
        canonical={page.canonicalUrl}
        keywords={page.keywords}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#F9F6F4] py-14 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 tracking-wide uppercase font-sfpro">
                    {PAGE_TYPE_LABELS[page.type] ?? page.type}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-500 tracking-wide uppercase font-sfpro">
                    {page.heroLabel}
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[#0A1128] font-mondwest">
                  {page.heroHeadline}
                </h1>
                <p className="text-base sm:text-xl text-gray-700 leading-relaxed font-sfpro max-w-2xl">
                  {page.heroSubheadline}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <CTAButton href={page.ctaHref} label={page.ctaLabel} />
                {page.howItWorks && (
                  <a
                    href="#how-it-works"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors px-1 py-3 cursor-pointer"
                  >
                    See how it works ↓
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-500 font-sfpro">{page.ctaSupportText}</p>
            </div>
            <div className="hidden lg:block">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <Image src={imgSrc} alt={page.heroHeadline} fill sizes="380px" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-br from-[#F9F6F4]/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM ───────────────────────────────────────────────────────── */}
      <Section bg="white" id="problem">
        <div className="space-y-6">
          <div>
            <Eyebrow label="The Problem" />
            <h2 className="text-2xl sm:text-3xl font-mondwest text-[#0A1128]">{page.painTitle}</h2>
          </div>

          <div className="grid gap-3">
            {page.painPoints.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50/60 p-4">
                <XIcon />
                <p className="text-base text-gray-800 font-sfpro leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {/* Cost callout block */}
          {page.costCallout && (
            <div className="rounded-xl border border-amber-200 bg-amber-50/60 overflow-hidden">
              <div className="p-5 space-y-2">
                {page.costCallout.items.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4 text-sm font-sfpro text-gray-700">
                    <span>{row.label}</span>
                    <span className="font-semibold text-gray-900 whitespace-nowrap">{row.amount}</span>
                  </div>
                ))}
                <div className="pt-2 mt-2 border-t border-amber-200 flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-gray-900 font-sfpro">Total annual problem</span>
                  <span className="text-sm font-bold text-red-600 font-sfpro">{page.costCallout.total}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-gray-600 font-sfpro">We solve it for</span>
                  <span className="text-sm font-semibold text-blue-700 font-sfpro">{page.costCallout.solvesFor}</span>
                </div>
              </div>
              {page.costCallout.source && (
                <div className="px-5 py-2 bg-amber-100/60 border-t border-amber-200">
                  <p className="text-xs text-gray-500 font-sfpro">Source: {page.costCallout.source}</p>
                </div>
              )}
            </div>
          )}

          {/* Practitioner quote */}
          {page.practitionerQuote && (
            <blockquote className="rounded-xl border-l-4 border-blue-500 bg-blue-50/50 px-6 py-5">
              <p className="text-base italic text-gray-800 font-sfpro leading-relaxed">
                &ldquo;{page.practitionerQuote.text}&rdquo;
              </p>
              <footer className="mt-3 text-xs text-gray-500 font-sfpro font-semibold tracking-wide">
                — {page.practitionerQuote.attribution}
              </footer>
            </blockquote>
          )}
        </div>
      </Section>

      {/* ── 3. STATUS QUO ────────────────────────────────────────────────────── */}
      <Section bg="warm" id="status-quo">
        <div className="space-y-5">
          <div>
            <Eyebrow label="What Teams Try Instead" />
            <h2 className="text-2xl sm:text-3xl font-mondwest text-[#0A1128]">{page.statusQuoTitle}</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.statusQuoItems.map((item) => (
              <div key={item} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-colors duration-200 hover:border-gray-300 hover:shadow-md">
                <p className="text-base text-gray-700 font-sfpro leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 4. INDUSTRY SIGNAL (optional) ────────────────────────────────────── */}
      {page.industrySignal && (
        <Section bg="white" id="industry-signal">
          <div className="space-y-5">
            <div>
              <Eyebrow label="What's Happening Now" />
              <h2 className="text-2xl sm:text-3xl font-mondwest text-[#0A1128]">{page.industrySignal.headline}</h2>
            </div>
            <div className="rounded-xl border border-gray-200 bg-[#F9F6F4] p-6 space-y-3">
              <p className="text-base text-gray-800 font-sfpro leading-relaxed">{page.industrySignal.body}</p>
              <p className="text-xs text-gray-500 font-sfpro font-semibold tracking-wide pt-1">
                Source: {page.industrySignal.source}
                {page.industrySignal.date ? ` · ${page.industrySignal.date}` : ""}
              </p>
            </div>
          </div>
        </Section>
      )}

      {/* ── 5. WHAT WE BUILD ─────────────────────────────────────────────────── */}
      <Section bg={page.industrySignal ? "warm" : "white"} id="solution">
        <div className="space-y-6">
          <div>
            <Eyebrow label="What We Build" />
            <h2 className="text-2xl sm:text-3xl font-mondwest text-[#0A1128]">{page.solutionTitle}</h2>
          </div>

          {page.layers ? (
            <div className="space-y-4">
              {page.layers.map((layer, index) => (
                <div key={layer.title} className="flex gap-4 rounded-xl border border-blue-100 bg-blue-50/50 p-5 transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white mt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-semibold text-[#0A1128] font-mondwest">{layer.title}</h3>
                    <p className="text-base text-gray-700 font-sfpro leading-relaxed">{layer.body}</p>
                  </div>
                </div>
              ))}
              <p className="pt-2 text-sm text-gray-500 font-sfpro italic">
                Most AI gives you one of these layers. We connect all three into one system that runs without you touching anything.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {page.solutionItems.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-xl border border-blue-100 bg-blue-50/50 p-4 transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base text-gray-800 font-sfpro leading-relaxed pt-0.5">{item}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* ── 6. HOW IT WORKS (optional) ───────────────────────────────────────── */}
      {page.howItWorks && (
        <Section bg="white" id="how-it-works">
          <div className="space-y-6">
            <div>
              <Eyebrow label="How It Works" />
              <h2 className="text-2xl sm:text-3xl font-mondwest text-[#0A1128]">
                From &ldquo;I need AI&rdquo; to &ldquo;it&apos;s live.&rdquo; One week.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {page.howItWorks.map((step) => (
                <div key={step.phase} className="rounded-xl border border-gray-200 bg-white p-5 space-y-3 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0A1128] text-xs font-bold text-white">
                      D{step.week}
                    </span>
                    <span className="text-xs font-bold tracking-[0.14em] uppercase text-blue-600 font-sfpro">
                      {step.phase}
                    </span>
                  </div>
                  <p className="text-base text-gray-700 font-sfpro leading-relaxed">{step.body}</p>
                  <div className="pt-1 border-t border-gray-100">
                    <p className="text-xs text-gray-500 font-sfpro">
                      <span className="font-semibold text-gray-700">You spend:</span> {step.youSpend}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center pt-2">
              <CTAButton href={page.ctaHref} label="Book Your Free Audit Call" />
            </div>
          </div>
        </Section>
      )}

      {/* ── 7. RESULTS ───────────────────────────────────────────────────────── */}
      <Section bg={page.howItWorks ? "warm" : "warm"} id="proof">
        <div className="space-y-6">
          <div>
            <Eyebrow label="Results" />
            <h2 className="text-2xl sm:text-3xl font-mondwest text-[#0A1128]">{page.proofTitle}</h2>
          </div>

          {page.caseStudy ? (
            <div className="space-y-5">
              {/* Case study card */}
              <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                <div className="px-5 py-3 bg-[#0A1128]">
                  <p className="text-xs font-bold tracking-[0.14em] uppercase text-gray-300 font-sfpro">
                    {page.caseStudy.client}
                  </p>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-red-500 uppercase tracking-wide font-sfpro mb-1">The problem</p>
                    <p className="text-base text-gray-700 font-sfpro leading-relaxed">{page.caseStudy.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide font-sfpro mb-1">The system we built</p>
                    <p className="text-base text-gray-700 font-sfpro leading-relaxed">{page.caseStudy.system}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-green-600 uppercase tracking-wide font-sfpro mb-1">The result</p>
                    <p className="text-base text-gray-800 font-sfpro leading-relaxed font-medium">{page.caseStudy.result}</p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              {page.testimonial && (
                <blockquote className="rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-sm">
                  <p className="text-base italic text-gray-800 font-sfpro leading-relaxed">
                    &ldquo;{page.testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-3 text-sm font-semibold text-gray-600 font-sfpro">
                    — {page.testimonial.author}
                  </footer>
                </blockquote>
              )}

              {/* Proof stats */}
              {page.proofStats && (
                <div className="grid grid-cols-3 gap-3">
                  {page.proofStats.map((s) => (
                    <div key={s.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm">
                      <p className="text-2xl sm:text-3xl font-bold text-[#0A1128] font-mondwest leading-none">{s.stat}</p>
                      <p className="mt-1.5 text-xs text-gray-500 font-sfpro leading-snug">{s.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {page.proofBullets.map((item) => (
                <li key={item} className="flex items-start gap-2 rounded-xl border border-gray-200 bg-white p-4 text-base text-gray-700 font-sfpro leading-relaxed transition-colors duration-200 hover:border-gray-300 hover:shadow-sm">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>

      {/* ── 8. IS THIS FOR YOU? (optional) ───────────────────────────────────── */}
      {page.fitChecklist && (
        <Section bg="white" id="fit">
          <div className="space-y-6">
            <div>
              <Eyebrow label="Is This for You?" />
              <h2 className="text-2xl sm:text-3xl font-mondwest text-[#0A1128]">{page.fitChecklist.headline}</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {/* For you */}
              <div className="rounded-xl border border-green-100 bg-green-50/50 p-5 space-y-3">
                <p className="text-xs font-bold tracking-[0.14em] uppercase text-green-700 font-sfpro">
                  This is for you if:
                </p>
                <ul className="space-y-2.5">
                  {page.fitChecklist.forYou.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span className="text-base text-gray-800 font-sfpro leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Not for you */}
              <div className="rounded-xl border border-red-100 bg-red-50/50 p-5 space-y-3">
                <p className="text-xs font-bold tracking-[0.14em] uppercase text-red-600 font-sfpro">
                  This is NOT for you if:
                </p>
                <ul className="space-y-2.5">
                  {page.fitChecklist.notForYou.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <XIcon />
                      <span className="text-base text-gray-800 font-sfpro leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {page.fitChecklist.geographicNote && (
              <p className="rounded-xl border border-blue-100 bg-blue-50/50 px-5 py-4 text-sm text-gray-700 font-sfpro leading-relaxed">
                {page.fitChecklist.geographicNote}
              </p>
            )}
          </div>
        </Section>
      )}

      {/* ── 9. FAQ ───────────────────────────────────────────────────────────── */}
      <Section bg={page.fitChecklist ? "warm" : "white"} id="faq">
        <div className="space-y-5">
          <div>
            <Eyebrow label="Common Questions" />
            <h2 className="text-2xl sm:text-3xl font-mondwest text-[#0A1128]">You&apos;re probably wondering.</h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {page.faq.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="rounded-xl border border-gray-200 bg-white px-5 transition-colors duration-200 hover:border-gray-300"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-[#0A1128] font-sfpro hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed font-sfpro pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* ── 10. FINAL CTA ────────────────────────────────────────────────────── */}
      <Section bg="navy" id="next-steps">
        <div className="space-y-6">
          <Eyebrow label="Next Steps" />
          <h2 className="text-2xl sm:text-3xl font-mondwest text-white">
            Build this as a system, not a patchwork
          </h2>
          <p className="text-gray-300 font-sfpro max-w-3xl leading-relaxed text-base sm:text-lg">
            We design AI systems around your actual workflow and tools so you get reliable execution in production — not another fragile demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <CTAButton href={page.ctaHref} label={page.ctaLabel} />
          </div>
          {page.ctaEmailFallback && (
            <p className="text-sm text-gray-400 font-sfpro">
              Or email us:{" "}
              <a href={`mailto:${page.ctaEmailFallback}`} className="text-blue-300 hover:text-white transition-colors">
                {page.ctaEmailFallback}
              </a>
            </p>
          )}

          <div className="pt-6 border-t border-white/20">
            <p className="text-xs uppercase tracking-[0.14em] text-gray-400 font-semibold mb-4">
              Related reads
            </p>
            <div className="grid gap-1 sm:grid-cols-3">
              {page.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-sm text-blue-300 hover:text-white transition-colors duration-200 font-sfpro"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ProgrammaticPageTemplate;
