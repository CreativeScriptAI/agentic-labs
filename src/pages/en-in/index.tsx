import { NextPageWithLayout } from "../../types";
import MetaConfig from "src/components/MetaConfig";
import StructuredData from "src/components/StructuredData";
import { CONFIG } from "site.config";
import HeroSection from "src/components/sections/HeroSection";
import TrustedSection from "src/components/sections/TrustedSection";
import { GetStaticProps } from "next";
import { fetchAgentsData } from "src/libs/api";
import dynamic from "next/dynamic";
import { indiaFaqs } from "src/data/localeFaqs";

// Dynamic imports for performance optimization
const AgentsSection = dynamic(
  () => import("src/components/sections/AgentsSection"),
  {
    ssr: true,
    loading: () => (
      <div
        className="py-8 sm:py-16 lg:py-20"
        style={{ backgroundColor: "#F9F6F4" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
            <span className="ml-3 text-gray-600">Loading agents...</span>
          </div>
        </div>
      </div>
    ),
  }
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
    props: {
      agentsApiRaw,
    },
    revalidate: CONFIG.revalidateTime,
  };
};

interface AgentsListResponse {
  data?: unknown[] | unknown;
  pages?: unknown;
  total_pages?: number;
  last_updated?: string;
  error?: {
    message: string;
    status?: number;
    timestamp: string;
  };
}

interface HomePageProps {
  agentsApiRaw: AgentsListResponse;
}

const IndiaHomePage: NextPageWithLayout<HomePageProps> = ({ agentsApiRaw }) => {
  const meta = {
    title: "Agentic AI Agents India | AI Voice Callers for Indian Businesses",
    description:
      "Agentic AI Labs builds production-grade AI agents for India—voice, chat, and workflow automation—so founders launch reliable copilots in days.",
    type: "Website",
    url: "https://www.tryagentikai.com/india",
    keywords: [
      "AI agents India",
      "automation India",
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
          areaServed: "India",
          url: "https://www.tryagentikai.com/en-in/",
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
          },
        }} 
      />
      <StructuredData type="website" data={{}} />
      <StructuredData
        type="faq"
        data={{
          faqs: indiaFaqs,
        }}
      />
      <HeroSection />
      <AgentsSection agents={agentsApiRaw?.data} />
      <TrustedSection />
      <TestimonialsSection />
      <FAQSection faqs={indiaFaqs} />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default IndiaHomePage;
