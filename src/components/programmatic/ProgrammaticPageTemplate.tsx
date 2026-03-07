import Link from "next/link";
import MetaConfig from "src/components/MetaConfig";
import { ProgrammaticPageData } from "src/data/programmaticSeoPages";

type ProgrammaticPageTemplateProps = {
  page: ProgrammaticPageData;
};

const SECTION_BG = {
  warm: "bg-[#F9F6F4]",
  white: "bg-white",
  navy: "bg-[#0A1128]",
} as const;

const Section = ({
  id,
  bg = "white",
  children,
}: {
  id?: string;
  bg?: keyof typeof SECTION_BG;
  children: React.ReactNode;
}) => (
  <section id={id} className={`py-14 sm:py-18 lg:py-22 ${SECTION_BG[bg]}`}>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

const CTAButton = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="inline-flex items-center justify-center rounded-lg bg-[#FCCA07] px-7 py-3.5 text-sm font-semibold text-[#0A1128] transition-colors hover:bg-yellow-400"
  >
    {label}
  </Link>
);

const ProgrammaticPageTemplate: React.FC<ProgrammaticPageTemplateProps> = ({
  page,
}) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Section bg="warm">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-bold text-blue-600 tracking-[0.14em] uppercase font-sfpro">
              {page.heroLabel}
            </p>
            <h1 className="text-3xl sm:text-5xl leading-[1.1] tracking-tight text-[#0A1128] font-mondwest">
              {page.heroHeadline}
            </h1>
            <p className="text-base sm:text-xl text-gray-700 leading-relaxed font-sfpro max-w-3xl">
              {page.heroSubheadline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <CTAButton href={page.ctaHref} label={page.ctaLabel} />
            <p className="text-sm text-gray-600 font-sfpro">{page.ctaSupportText}</p>
          </div>
        </div>
      </Section>

      <Section bg="white" id="problem">
        <div className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-mondwest text-[#0A1128]">{page.painTitle}</h2>
          <div className="grid gap-3">
            {page.painPoints.map((item) => (
              <div key={item} className="rounded-xl border border-red-100 bg-red-50/60 p-4">
                <p className="text-gray-800 font-sfpro">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="warm" id="status-quo">
        <div className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-mondwest text-[#0A1128]">{page.statusQuoTitle}</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {page.statusQuoItems.map((item) => (
              <div key={item} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <p className="text-sm text-gray-700 font-sfpro leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="white" id="solution">
        <div className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-mondwest text-[#0A1128]">{page.solutionTitle}</h2>
          <div className="space-y-3">
            {page.solutionItems.map((item, index) => (
              <div key={item} className="flex gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-gray-800 font-sfpro leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="warm" id="proof">
        <div className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-mondwest text-[#0A1128]">{page.proofTitle}</h2>
          <ul className="grid gap-3 sm:grid-cols-3">
            {page.proofBullets.map((item) => (
              <li key={item} className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700 font-sfpro">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section bg="white" id="faq">
        <div className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-mondwest text-[#0A1128]">FAQs</h2>
          <div className="space-y-4">
            {page.faq.map((item) => (
              <div key={item.question} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="text-base sm:text-lg font-semibold text-[#0A1128] font-sfpro">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-700 leading-relaxed font-sfpro">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="navy" id="next-steps">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-mondwest text-white">Build this as a system, not a patchwork</h2>
          <p className="text-gray-200 font-sfpro max-w-3xl leading-relaxed">
            We design AI systems around your actual workflow and tools so you get reliable execution in production, not another fragile demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <CTAButton href={page.ctaHref} label={page.ctaLabel} />
            <p className="text-sm text-gray-300 font-sfpro">{page.ctaSupportText}</p>
          </div>

          <div className="pt-4 border-t border-white/20">
            <p className="text-xs uppercase tracking-[0.14em] text-gray-400 font-semibold mb-3">
              Related reads
            </p>
            <div className="grid gap-2 sm:grid-cols-3">
              {page.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-blue-200 hover:text-white transition-colors font-sfpro"
                >
                  {link.label}
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
