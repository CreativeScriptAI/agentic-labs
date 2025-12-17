import { NextPageWithLayout } from "../../types";
import MetaConfig from "src/components/MetaConfig";
import StructuredData from "src/components/StructuredData";
import { CONFIG } from "site.config";
import HeroSection from "src/components/sections/HeroSection";
import TrustedSection from "src/components/sections/TrustedSection";
import { GetStaticProps } from "next";
import { fetchAgentsData } from "src/libs/api";
import dynamic from "next/dynamic";

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

const USAHomePage: NextPageWithLayout<HomePageProps> = ({ agentsApiRaw }) => {
  const meta = {
    title: "Agentic AI Labs USA | AI Agents, Voice & Automation Services",
    description:
      "Agentic AI Labs builds production-grade AI agents in the USA—voice, chat, and workflow automation—so founders launch reliable copilots in days.",
    type: "Website",
    url: "https://www.tryagentikai.com/usa",
    keywords: [
      "AI agents USA",
      "automation USA",
      "artificial intelligence",
      "workflow automation",
      "voice agents",
      "chat agents",
    ],
  };

  return (
    <>
      <MetaConfig {...meta} />
      <StructuredData type="organization" data={{}} />
      <StructuredData type="website" data={{}} />
      <HeroSection />
      <AgentsSection agents={agentsApiRaw?.data} />
      <TrustedSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default USAHomePage;
