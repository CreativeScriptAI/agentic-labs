import { NextPageWithLayout } from "../types";
import MetaConfig from "src/components/MetaConfig";
import StructuredData from "src/components/StructuredData";
import { CONFIG } from "site.config";
import HeroSection from "src/components/sections/HeroSection";
import AgentsSection from "src/components/sections/AgentsSection";
import TrustedSection from "src/components/sections/TrustedSection";
import TestimonialsSection from "src/components/sections/TestimonialsSection";
import FAQSection from "src/components/sections/FAQSection";
import ContactSection from "src/components/sections/ContactSection";
import FooterSection from "src/components/sections/FooterSection";
import { GetStaticProps } from "next";
import { fetchAgentsData } from "src/libs/api";

export const getStaticProps: GetStaticProps = async () => {
  const agentsApiRaw = await fetchAgentsData();
  return {
    props: {
      agentsApiRaw,
    },
    revalidate: CONFIG.revalidateTime,
  };
};

interface AgentsListResponse {
  data?: unknown;
  pages?: unknown;
  total_pages?: number;
  last_updated?: string;
}

interface HomePageProps {
  agentsApiRaw: AgentsListResponse;
}

const HomePage: NextPageWithLayout<HomePageProps> = ({ agentsApiRaw }) => {
  console.log("", agentsApiRaw);
  const meta = {
    title: "Agentic AI Labs",
    description:
      "We turn AI hype into production agents. Build voice, chat, and workflow automation that ships in days.",
    type: "Website",
    url: "https://www.tryagentikai.com",
    keywords: [
      "AI agents",
      "automation",
      "artificial intelligence",
      "workflow automation",
      "voice agents",
      "chat agents",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Agentic AI Labs",
      url: "https://www.tryagentikai.com",
      logo: "https://www.tryagentikai.com/logo.png",
      sameAs: [
        "https://x.com/agenticlabs",
        "https://www.linkedin.com/company/agentic-ai-labs",
      ],
    },
  };

  return (
    <>
      <MetaConfig {...meta} />
      <StructuredData type="organization" data={{}} />
      <StructuredData
        type="service"
        data={{
          name: "Agent Development & Deployment",
          description: "Custom AI agent development and deployment services",
        }}
      />
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

export default HomePage;
