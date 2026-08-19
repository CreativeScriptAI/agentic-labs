import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import MetaConfig from "src/components/MetaConfig";
import FooterSection from "src/components/sections/FooterSection";
import { FIX, META } from "src/components/sections/AiVisibilityChecker/copy";
import { FullReport } from "src/components/sections/AiVisibilityChecker/ReportVisuals";
import { Container } from "src/components/sections/AiVisibilityChecker/primitives";
import BracketButton from "src/components/BracketButton";
import {
  buildMockScan,
  reportIdToDomain,
  type VisibilityScanResult,
} from "src/lib/runVisibilityScan";

type Props = {
  result: VisibilityScanResult;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "tryagentikai-com" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const id = ctx.params?.id;
  if (typeof id !== "string" || !id) return { notFound: true };
  const domain = reportIdToDomain(id);
  if (!domain) return { notFound: true };
  // TODO(api): load the persisted scan from tool.tryagentikai.com by id
  const result = buildMockScan(domain);
  return { props: { result }, revalidate: 3600 };
};

const ReportPage = ({ result }: Props) => {
  const url = `https://www.tryagentikai.com/ai-visibility-checker/report/${result.domain.replace(/\./g, "-")}/`;
  const title = `AI visibility report for ${result.domain} | Agentic AI Labs`;
  const description = META.description;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.tryagentikai.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "AI Visibility Checker",
        item: META.url,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Report: ${result.domain}`,
        item: url,
      },
    ],
  };

  return (
    <>
      <MetaConfig
        title={title}
        description={description}
        type="Page"
        url={url}
        canonical={url}
        keywords={META.keywords}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-[#F9F6F4] [&_*]:box-border">
        <section className="pt-28 pb-16 sm:pt-32 sm:pb-24">
          <Container size="lg">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li className="flex items-center gap-2">
                  <Link
                    href="/"
                    className="font-alte text-[13px] text-slate-400 hover:text-[#0A1128] tracking-[-0.04em]"
                  >
                    Home
                  </Link>
                  <span className="text-slate-300 text-[13px]" aria-hidden>
                    /
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Link
                    href="/ai-visibility-checker/"
                    className="font-alte text-[13px] text-slate-400 hover:text-[#0A1128] tracking-[-0.04em]"
                  >
                    AI Visibility Checker
                  </Link>
                  <span className="text-slate-300 text-[13px]" aria-hidden>
                    /
                  </span>
                </li>
                <li>
                  <span
                    aria-current="page"
                    className="font-alte text-[13px] text-slate-500 tracking-[-0.04em]"
                  >
                    {result.domain}
                  </span>
                </li>
              </ol>
            </nav>
            <FullReport result={result} shareLink={false} />
            <div className="mt-10">
              <p className="font-alte text-[15px] text-slate-600 tracking-[-0.04em] mb-4">
                {FIX.support}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <BracketButton label={FIX.cta} href={FIX.href} />
                <BracketButton
                  label="Check my visibility"
                  href="/ai-visibility-checker/"
                  variant="secondary"
                />
              </div>
            </div>
          </Container>
        </section>
        <FooterSection />
      </div>
    </>
  );
};

export default ReportPage;
