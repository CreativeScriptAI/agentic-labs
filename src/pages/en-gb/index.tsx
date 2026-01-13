import { NextPageWithLayout } from "../../types";
import MetaConfig from "src/components/MetaConfig";
import StructuredData from "src/components/StructuredData";
import { CONFIG } from "site.config";
import HeroSection from "src/components/sections/HeroSection";
import TrustedSection from "src/components/sections/TrustedSection";
import { GetStaticProps } from "next";
import { fetchAgentsData } from "src/libs/api";
import dynamic from "next/dynamic";
import { ukEuropeFaqs } from "src/data/localeFaqs";

const AgentsSection = dynamic(
  () => import("src/components/sections/AgentsSection"),
  { ssr: true }
);
const TestimonialsSection = dynamic(
  () => import("src/components/sections/TestimonialsSection"),
  { ssr: true }
);
const FAQSection = dynamic(() => import("src/components/sections/FAQSection"), {
  ssr: true,
});
const ContactSection = dynamic(
  () => import("src/components/sections/ContactSection"),
  { ssr: true }
);
const FooterSection = dynamic(
  () => import("src/components/sections/FooterSection"),
  { ssr: true }
);

export const getStaticProps: GetStaticProps = async () => {
  const agentsApiRaw = await fetchAgentsData();
  return {
    props: { agentsApiRaw },
    revalidate: CONFIG.revalidateTime,
  };
};

interface AgentsListResponse {
  data?: unknown[] | unknown;
  pages?: unknown;
  total_pages?: number;
  last_updated?: string;
  error?: { message: string; status?: number; timestamp: string };
}

interface HomePageProps {
  agentsApiRaw: AgentsListResponse;
}

const UKHomePage: NextPageWithLayout<HomePageProps> = ({ agentsApiRaw }) => {
  const meta = {
    title: "Agentic AI Agents UK | AI Voice Callers British Businesses",
    description:
      "Agentic AI Labs builds production-grade AI agents in the UK—voice, chat, and workflow automation—so founders launch reliable copilots in days.",
    type: "Website",
    url: "https://www.tryagentikai.com/uk",
    keywords: [
      "AI agents UK",
      "automation UK",
      "artificial intelligence",
      "workflow automation",
      "voice agents",
      "chat agents",
    ],
  };

  return (
    <>
      <MetaConfig {...meta} />
      <StructuredData 
        type="organization" 
        data={{
          areaServed: "United Kingdom",
          url: "https://www.tryagentikai.com/en-gb/",
          address: {
            "@type": "PostalAddress",
            addressCountry: "GB",
          },
        }} 
      />
      <StructuredData type="website" data={{}} />
      <StructuredData
        type="faq"
        data={{
          faqs: ukEuropeFaqs,
        }}
      />
      <HeroSection />
      <AgentsSection agents={agentsApiRaw?.data} />
      <TrustedSection />
      <TestimonialsSection />
      <FAQSection faqs={ukEuropeFaqs} />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default UKHomePage;
