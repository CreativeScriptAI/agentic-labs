import { NextPageWithLayout } from "../types";
import MetaConfig from "src/components/MetaConfig";
import StructuredData from "src/components/StructuredData";
import { CONFIG } from "site.config";
import HeroSection from "src/components/sections/HeroSection";
import AgentsSection from "src/components/sections/AgentsSection";
import TrustedSection from "src/components/sections/TrustedSection";
import FAQSection from "src/components/sections/FAQSection";
import ContactSection from "src/components/sections/ContactSection";
import FooterSection from "src/components/sections/FooterSection";
import { GetStaticProps } from "next";
import { fetchAgentsData } from "src/libs/api";
import dynamic from "next/dynamic";

// Dynamic import for testimonials with SSR enabled
const TestimonialsSection = dynamic(
  () => import("src/components/sections/TestimonialsSection"),
  {
    ssr: true, // Enable server-side rendering
    loading: () => (
      <div
        className="py-12 sm:py-16 lg:py-20"
        style={{
          backgroundColor: "#F9F6F4",
          width: "calc(100% + 2rem)",
          marginLeft: "-1rem",
          marginRight: "-1rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span
              style={{
                color: "#64748b",
                display: "block",
                fontSize: "12px",
                fontWeight: "500",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "16px",
              }}
            >
              TESTIMONIALS
            </span>
            <hr className="bg-[#E2E8F0] max-w-[540px] mx-auto w-full" />
            <h2
              style={{
                color: "#0f172a",
                display: "block",
                fontSize: "24px",
                fontWeight: "400",
                lineHeight: "1.2",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              Founders have already seen
              <br />
              <span style={{ fontStyle: "italic" }}>
                transformational results
              </span>
            </h2>
          </div>
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
            <span className="ml-3 text-gray-600">Loading testimonials...</span>
          </div>
        </div>
      </div>
    ),
  }
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
