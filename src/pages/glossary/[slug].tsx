import type { GetStaticPaths, GetStaticProps } from "next";
import MetaConfig from "src/components/MetaConfig";
import GlossaryTermPage from "src/components/sections/Glossary/GlossaryTerm";
import { GLOSSARY_TERMS, type GlossaryTerm } from "src/components/sections/Glossary/terms";

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: GLOSSARY_TERMS.map((t) => ({ params: { slug: t.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ term: GlossaryTerm }> = async ({ params }) => {
  const term = GLOSSARY_TERMS.find((t) => t.slug === params?.slug);
  if (!term) return { notFound: true };
  return { props: { term } };
};

const Page = ({ term }: { term: GlossaryTerm }) => {
  const url = `https://www.tryagentikai.com/glossary/${term.slug}/`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: term.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: [term.definition, ...term.body].join(" "),
        },
      },
    ],
  };

  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    url,
    inDefinedTermSet: "https://www.tryagentikai.com/glossary/",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tryagentikai.com/" },
      { "@type": "ListItem", position: 2, name: "Glossary", item: "https://www.tryagentikai.com/glossary/" },
      { "@type": "ListItem", position: 3, name: term.term, item: url },
    ],
  };

  return (
    <>
      <MetaConfig
        title={term.title}
        description={term.description}
        type="Page"
        url={url}
        canonical={url}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GlossaryTermPage term={term} />
    </>
  );
};

export default Page;
