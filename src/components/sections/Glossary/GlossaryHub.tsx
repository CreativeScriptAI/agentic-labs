import Link from "next/link";
import FooterSection from "src/components/sections/FooterSection";
import { Container, Eyebrow, FadeUp } from "../AiVisibilityChecker/primitives";
import { GLOSSARY_TERMS } from "./terms";

const GlossaryHub = () => {
  const terms = [...GLOSSARY_TERMS].sort((a, b) => a.term.localeCompare(b.term));
  return (
    <div className="min-h-screen bg-[#F9F6F4] [&_*]:box-border">
      <section className="bg-[#F9F6F4] pt-24 pb-16 sm:pt-28 sm:pb-20 border-b border-[#e7e6e4]">
        <Container size="md">
          <nav className="font-geist text-[12px] text-slate-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#0A1128]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-500">Glossary</span>
          </nav>
          <FadeUp>
            <Eyebrow text="GLOSSARY" />
            <h1 className="font-alte font-normal text-[2rem] sm:text-4xl lg:text-[2.6rem] leading-[1.08] tracking-[-0.04em] text-[#0A1128] text-balance mb-5 max-w-3xl">
              AI, lead, and marketing terms, defined plainly
            </h1>
            <p className="font-alte text-[16px] sm:text-[17px] text-slate-600 leading-[1.55] tracking-[-0.02em] max-w-2xl">
              Straight definitions for the terms that come up when you are getting
              found, qualifying leads, and turning them into booked calls.
            </p>
          </FadeUp>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24 border-b border-[#e7e6e4]">
        <Container size="md">
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {terms.map((t, i) => (
              <FadeUp key={t.slug} delay={Math.min(i * 0.03, 0.2)}>
                <Link
                  href={`/glossary/${t.slug}/`}
                  className="block border border-[#e7e6e4] bg-[#F9F6F4] p-5 sm:p-6 hover:border-[#0A1128] transition-colors"
                >
                  <p className="font-alte text-[18px] sm:text-[20px] tracking-[-0.03em] text-[#0A1128]">
                    {t.term}
                  </p>
                  <p className="font-alte text-[15px] tracking-[-0.02em] leading-[1.5] text-slate-600 mt-1.5">
                    {t.description}
                  </p>
                </Link>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <FooterSection />
    </div>
  );
};

export default GlossaryHub;
