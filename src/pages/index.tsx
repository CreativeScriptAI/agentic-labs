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

const WhoItsForSection = dynamic(
  () => import("src/components/sections/WhoItsForSection"),
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
    title: "Agentic AI Labs | AI Systems That Work — Voice, Memory & Automation",
    description:
      "We build AI systems that talk to your customers, remember every interaction, and take action — without you in the loop. Voice. Memory. Automation. Production-grade.",
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
            "Custom AI system development — voice agents, memory layers, and automation workflows — built for production.",
        }}
      />
      <StructuredData type="website" data={{}} />
      <StructuredData
        type="faq"
        data={{
          faqs: [
            {
              question: 'What exactly is an "AI system" vs an "AI tool"?',
              answer:
                "An AI tool does one thing. A chatbot chats. An automation triggers a workflow. A voice agent makes calls. Our AI system connects all three: the voice talks to your customer, the memory remembers them, and the automation takes action. One integrated system, not three disconnected tools.",
            },
            {
              question: "How fast can you build it?",
              answer:
                "Most systems are live in 4 weeks. Week 1: we audit your workflows. Week 2: we build. Week 3: we test with real scenarios. Week 4: you're live with monitoring.",
            },
            {
              question: "What if the AI says something wrong to a customer?",
              answer:
                "Every system goes through a testing phase with real edge cases before it touches a single customer. We build guardrails — things the AI won't say, fallback to human handoff when it's unsure. And we monitor every interaction for the first 30 days.",
            },
            {
              question: "What tools do you integrate with?",
              answer:
                "We work with whatever you already use. GoHighLevel, HubSpot, Salesforce, Calendly, Stripe, Twilio, Zendesk, Slack — and custom APIs. The system plugs into your stack, not the other way around.",
            },
            {
              question: "How much does it cost?",
              answer:
                "Projects typically start at $5,000 for the initial build, with ongoing monthly maintenance for monitoring and optimization. Every project is scoped based on your specific workflows. We'll give you a clear number before you commit to anything.",
            },
            {
              question: "Can the AI hand off to a real person?",
              answer:
                "Yes. We set confidence thresholds so the AI escalates to a human when it's unsure — via live transfer, ticket creation, or Slack alert. The human gets the full transcript and context. The customer never notices the switch.",
            },
            {
              question: "Who are your typical clients?",
              answer:
                "Founders and operations leaders at the 1-10 stage. They have a working product, real customers, and they're drowning in repetitive work — calls, follow-ups, support, scheduling. Common industries: healthcare, real estate, B2B SaaS, home services, e-commerce, recruiting.",
            },
            {
              question: "What happens after the system goes live?",
              answer:
                "We don't disappear. The first 30 days include active monitoring and optimization. After that, you can extend with a monthly maintenance plan — we watch the system, tune it, and ship updates as your business evolves.",
            },
          ],
        }}
      />

      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: The Problem */}
      <ProblemSection />

      {/* Section 3: What We Build (Talk. Remember. Act.) */}
      <WhatWeBuildSection />

      {/* Section 4: Agents We've Shipped (existing dynamic section) */}
      <AgentsSection agents={agentsApiRaw?.data} />

      {/* Section 5: AI Roles (static industry cards) */}
      <AIRolesSection />

      {/* Section 6: Trusted By (existing logo carousel) */}
      <TrustedSection />

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
