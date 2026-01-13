import { NextPageWithLayout } from "../../types";
import MetaConfig from "src/components/MetaConfig";
import StructuredData from "src/components/StructuredData";
import { CONFIG } from "site.config";
import HeroSection from "src/components/sections/HeroSection";
import TrustedSection from "src/components/sections/TrustedSection";
import { GetStaticProps } from "next";
import { fetchAgentsData } from "src/libs/api";
import dynamic from "next/dynamic";
import { uaeFaqs } from "src/data/localeFaqs";

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

const UAEHomePage: NextPageWithLayout<HomePageProps> = ({ agentsApiRaw }) => {
  const meta = {
    title: "Agentic AI Agents UAE | AI Voice Callers Dubai Businesses",
    description:
      "Agentic AI Labs builds production-grade AI agents in UAE—voice, chat, and workflow automation—so founders launch reliable copilots in days.",
    type: "Website",
    url: "https://www.tryagentikai.com/uae",
    keywords: [
      "AI agents UAE",
      "automation UAE",
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
          areaServed: "United Arab Emirates",
          url: "https://www.tryagentikai.com/en-ae/",
          address: {
            "@type": "PostalAddress",
            addressCountry: "AE",
          },
        }} 
      />
      <StructuredData type="website" data={{}} />
      <StructuredData
        type="faq"
        data={{
          faqs: uaeFaqs,
        }}
      />
      <HeroSection />
      <AgentsSection agents={agentsApiRaw?.data} />
      <TrustedSection />
      <TestimonialsSection />
      <FAQSection faqs={uaeFaqs} />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default UAEHomePage;
