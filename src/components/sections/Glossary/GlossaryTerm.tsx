import Link from "next/link";
import FooterSection from "src/components/sections/FooterSection";
import { Container, Eyebrow, FadeUp } from "../AiVisibilityChecker/primitives";
import type { GlossaryTerm } from "./terms";

const GlossaryTermPage = ({ term }: { term: GlossaryTerm }) => (
  <div className="min-h-screen bg-[#F9F6F4] [&_*]:box-border">
    <section className="bg-[#F9F6F4] pt-24 pb-16 sm:pt-28 sm:pb-20 border-b border-[#e7e6e4]">
      <Container size="md">
        <nav className="font-geist text-[12px] text-slate-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0A1128]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/glossary/" className="hover:text-[#0A1128]">Glossary</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">{term.term}</span>
        </nav>
        <FadeUp>
          <Eyebrow text="GLOSSARY" />
          <h1 className="font-alte font-normal text-[2rem] sm:text-4xl lg:text-[2.6rem] leading-[1.08] tracking-[-0.04em] text-[#0A1128] text-balance mb-6 max-w-3xl">
            {term.question}
          </h1>
          <p className="font-alte text-[19px] sm:text-[22px] tracking-[-0.03em] leading-[1.5] text-[#0A1128] max-w-3xl border-l-2 border-[#FCCA07] pl-5">
            {term.definition}
          </p>
        </FadeUp>
      </Container>
    </section>

    <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
      <Container size="md">
        <FadeUp>
          <div className="max-w-2xl space-y-5">
            {term.body.map((p, i) => (
              <p key={i} className="font-alte text-[16px] sm:text-[17px] tracking-[-0.02em] leading-[1.6] text-slate-600">
                {p}
              </p>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>

    <section className="bg-[#F9F6F4] py-16 sm:py-24 border-b border-[#e7e6e4]">
      <Container size="md">
        <FadeUp>
          <Eyebrow text="KEEP READING" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8">
            {term.related.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                className="block border border-[#e7e6e4] bg-white p-5 sm:p-6 hover:border-[#0A1128] transition-colors font-alte text-[16px] tracking-[-0.03em] text-[#0A1128]"
              >
                {l.anchor}
              </Link>
            ))}
            <Link
              href="/glossary/"
              className="block border border-[#e7e6e4] bg-white p-5 sm:p-6 hover:border-[#0A1128] transition-colors font-alte text-[16px] tracking-[-0.03em] text-[#0A1128]"
            >
              Back to the full glossary
            </Link>
          </div>
        </FadeUp>
      </Container>
    </section>

    <FooterSection />
  </div>
);

export default GlossaryTermPage;
