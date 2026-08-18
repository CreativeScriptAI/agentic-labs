import { NextPageWithLayout } from "../types";
import MetaConfig from "src/components/MetaConfig";
import StructuredData from "src/components/StructuredData";
import { CONFIG } from "site.config";
import HeroSection from "src/components/sections/HeroSection";
import ProblemSection from "src/components/sections/ProblemSection";
import WhatWeBuildSection from "src/components/sections/WhatWeBuildSection";
import TrustedSection from "src/components/sections/TrustedSection";
import { GetStaticProps } from "next";
import { fetchAgentsData } from "src/libs/api";
import dynamic from "next/dynamic";
// COMMENTED OUT: Language pages redirection disabled
// import { useAutoCountryDetection } from "src/hooks/useAutoCountryDetection";

// Performance Optimization: Code split heavy components to reduce initial bundle size

const sectionLoadingStyle = {
  backgroundColor: "#F9F6F4",
  width: "calc(100% + 2rem)",
  marginLeft: "-1rem",
  marginRight: "-1rem",
};

const SectionLoader = ({ label }: { label: string }) => (
  <div className="py-12 sm:py-16 lg:py-20" style={sectionLoadingStyle}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-8">
        <p className="text-red-500 font-medium text-sm tracking-wider uppercase mb-4">
          {label}
        </p>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
          <span className="ml-3 text-gray-600">Loading...</span>
        </div>
      </div>
    </div>
  </div>
);

// Dynamic imports for below-fold sections
const AgentsSection = dynamic(
  () => import("src/components/sections/AgentsSection"),
  { ssr: true, loading: () => <SectionLoader label="AGENTS WE'VE SHIPPED" /> }
);

const AIRolesSection = dynamic(
  () => import("src/components/sections/AIRolesSection"),
  { ssr: true, loading: () => <SectionLoader label="BUILT FOR YOUR BUSINESS" /> }
);

const ProofSection = dynamic(
  () => import("src/components/sections/ProofSection"),
  { ssr: true, loading: () => <SectionLoader label="RESULTS" /> }
);

const TestimonialsSection = dynamic(
  () => import("src/components/sections/TestimonialsSection"),
  { ssr: true, loading: () => <SectionLoader label="TESTIMONIALS" /> }
);

const HowWeWorkSection = dynamic(
  () => import("src/components/sections/HowWeWorkSection"),
  { ssr: true, loading: () => <SectionLoader label="HOW IT WORKS" /> }
);

// NOTE: explicit "/index" path — a legacy WhoItsForSection.tsx file sits beside this
// directory and would otherwise win module resolution, rendering the old section.
const WhoItsForSection = dynamic(
  () => import("src/components/sections/WhoItsForSection/index"),
  { ssr: true, loading: () => <SectionLoader label="IS THIS FOR YOU?" /> }
);

const WhoWeAreSection = dynamic(
  () => import("src/components/sections/WhoWeAreSection"),
  { ssr: true, loading: () => <SectionLoader label="WHO WE ARE" /> }
);

const FAQSection = dynamic(
  () => import("src/components/sections/FAQSection"),
  { ssr: true, loading: () => <SectionLoader label="QUESTIONS" /> }
);

const FinalCTASection = dynamic(
  () => import("src/components/sections/FinalCTASection"),
  { ssr: true }
);

const FooterSection = dynamic(
  () => import("src/components/sections/FooterSection"),
  {
    ssr: true,
    loading: () => (
      <div className="py-12 sm:py-16" style={sectionLoadingStyle}>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
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

const HomePage: NextPageWithLayout<HomePageProps> = ({ agentsApiRaw }) => {
  // COMMENTED OUT: Auto-detect country and redirect to language pages
  // useAutoCountryDetection();

  // Debug logging (development only)
  if (process.env.NODE_ENV === 'development') {
    console.log("Agents API Response:", agentsApiRaw);
    const agentsData = agentsApiRaw?.data;
    const agentsCount = Array.isArray(agentsData) ? agentsData.length : 0;
    console.log("Agents Count:", agentsCount);
    if (agentsApiRaw?.error) {
      console.warn("API Error detected:", agentsApiRaw.error);
    }
  }

  const meta = {
    title: "Agentic AI Labs | AI That Answers, Qualifies & Books Your Leads",
    description:
      "We build AI that handles every call and message, qualifies leads, and books them, across every channel. Outcomes, not tools. Make AI work, so you don't have to.",
    type: "Website",
    url: "https://www.tryagentikai.com",
    keywords: [
      "AI systems",
      "voice agents",
      "AI automation",
      "AI memory",
      "production AI",
      "AI for business",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Agentic AI Labs",
      url: "https://www.tryagentikai.com",
      logo: "https://www.tryagentikai.com/logo.png",
      sameAs: [
        "https://x.com/tryagentikai",
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
          name: "AI System Development & Deployment",
          description:
            "Custom AI system development: voice agents, memory layers, and automation workflows, built for production.",
        }}
      />
      <StructuredData type="website" data={{}} />
      <StructuredData
        type="faq"
        data={{
          faqs: [
            {
              question: "What can you actually build?",
              answer:
                "If a human does it on repeat, we can usually build an agent or automation for it. Calls, chats, follow-ups, scheduling, data, internal busywork.",
            },
            {
              question: "How long does it take?",
              answer: "Most builds go live in weeks. Simpler ones, faster.",
            },
            {
              question: "We already use some AI tools. Does that matter?",
              answer:
                "No. We build around what you have and connect it. That is the point.",
            },
            {
              question: "Will it sound like a robot to my customers?",
              answer:
                "No. And when it is not sure, it hands off to a human cleanly. Your customer never feels the seam.",
            },
            {
              question: "Is my business too small?",
              answer: "That is usually exactly who we build for.",
            },
          ],
        }}
      />

      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: The Problem */}
      <ProblemSection />

      {/* Section 3: Agents We've Shipped (existing dynamic section) */}
      <AgentsSection agents={agentsApiRaw?.data} />

      {/* Section 4: AI Roles (static industry cards) */}
      <AIRolesSection />

      {/* Section 5: Trusted By (existing logo carousel) */}
      <TrustedSection />

      {/* Section 6: What We Build (Talk. Remember. Act.) — moved under Trusted By */}
      <WhatWeBuildSection />

      {/* Section 7: Proof / Results */}
      <ProofSection />

      {/* Section 8: Testimonials (existing dynamic section) */}
      <TestimonialsSection />

      {/* Section 9: How We Work (4-week timeline) */}
      <HowWeWorkSection />

      {/* Section 10: Who This Is For */}
      <WhoItsForSection />

      {/* Section 11: Who We Are */}
      <WhoWeAreSection />

      {/* Section 12: FAQ */}
      <FAQSection />

      {/* Section 13: Final CTA */}
      <FinalCTASection />

      {/* Section 14: Footer */}
      <FooterSection />
    </>
  );
};

export default HomePage;
