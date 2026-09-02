import MetaConfig from "src/components/MetaConfig";
import GlossaryHub from "src/components/sections/Glossary/GlossaryHub";
import { GLOSSARY_TERMS } from "src/components/sections/Glossary/terms";

const URL = "https://www.tryagentikai.com/glossary/";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tryagentikai.com/" },
    { "@type": "ListItem", position: 2, name: "Glossary", item: URL },
  ],
};

const listSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Agentic AI Labs Glossary",
  url: URL,
  hasDefinedTerm: GLOSSARY_TERMS.map((t) => ({
    "@type": "DefinedTerm",
    name: t.term,
    url: `https://www.tryagentikai.com/glossary/${t.slug}/`,
  })),
};

const Page = () => (
  <>
    <MetaConfig
      title="Glossary: AI, Lead, and Marketing Terms"
      description="Plain-English definitions for AI search, lead qualification, and Singapore marketing terms, from AEO and speed to lead to PDPA and the PSG grant."
      type="Page"
      url={URL}
      canonical={URL}
      keywords={["marketing glossary", "aeo", "lead qualification", "pdpa", "psg grant"]}
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
    <GlossaryHub />
  </>
);

export default Page;
