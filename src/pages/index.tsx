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
  // Debug logging (development only)
  if (process.env.NODE_ENV === 'development') {
    console.log("Agents API Response:", agentsApiRaw);
    const agentsData = agentsApiRaw?.data;
    const agentsCount = Array.isArray(agentsData) ? agentsData.length : 0;
    console.log("Agents Count:", agentsCount);
    if (agentsApiRaw?.error) {
      console.warn("⚠️ API Error detected:", agentsApiRaw.error);
    }
  }
  const meta = {
    title: "Agentic AI Labs | AI Agents, Voice & Automation Services",
    description:
      "Agentic AI Labs builds production-grade AI agents—voice, chat, and workflow automation—so founders launch reliable copilots in days.",
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
      <StructuredData
        type="faq"
        data={{
          faqs: [
            {
              question: "What is an AI Workforce?",
              answer:
                "Every day, AI is becoming an increasingly integral part of our lives. At Inflection AI, we're rapidly innovating— pushing boundaries, experimenting boldly, and continuously learning —to create solutions centered around human experiences.",
            },
            {
              question: "How do I build an agent?",
              answer:
                "Building an agent involves defining its purpose, selecting the right tools and frameworks, training it with relevant data, and implementing it in your workflow. Our platform provides step-by-step guidance throughout this process.",
            },
            {
              question: "What are tools?",
              answer:
                "Tools are the building blocks that enable agents to perform specific tasks. They can include APIs, databases, machine learning models, and other software components that agents use to complete their objectives.",
            },
            {
              question: "Which LLMs do you support?",
              answer:
                "We support a wide range of Large Language Models including GPT-4, Claude, PaLM, and other leading models. Our platform is designed to be model-agnostic, allowing you to choose the best LLM for your specific use case.",
            },
            {
              question: "How does Relevance AI protect my privacy",
              answer:
                "We implement enterprise-grade security measures including end-to-end encryption, strict access controls, and compliance with major privacy regulations like GDPR and CCPA. Your data is never used to train our models without explicit consent.",
            },
            {
              question: "Who typically hires Agentic AI Labs?",
              answer:
                "Founders, operations leaders, and CX teams across healthcare, real estate, B2B SaaS, logistics, and financial services. If you've got repetitive calls, chats, or back-office workflows that drain time, we tailor agents to your stack and compliance needs.",
            },
            {
              question: "How fast can we launch a production agent?",
              answer:
                "Most teams see their first deployed agent in seven days. Day 1: workflow mapping and guardrails. Days 2–4: build plus integrations with HubSpot, Salesforce, Twilio, Zendesk, or internal APIs. Days 5–7: human QA, monitoring, and a live launch with rollback plans.",
            },
            {
              question: "Can AI agents safely hand off to humans?",
              answer:
                "Absolutely. We configure confidence thresholds and policy triggers so the agent escalates via live transfer, ticket creation, or Slack/Teams alerts, attaching transcripts and context. That keeps customers supported while humans handle judgment calls.",
            },
            {
              question: "Do we get monitoring and ongoing optimization?",
              answer:
                "Yes. Every deployment includes dashboards for transcripts, resolution rates, CSAT, and error spikes. During a 30-day optimization window we review conversations, tune prompts, and ship updates—extendable for ongoing managed support.",
            },
            {
              question: "How do pricing and engagement models work?",
              answer:
                "We start with a scoped pilot—fixed price for the first workflow—then expand into retainers or per-agent subscriptions once ROI is proven. You keep full ownership of prompts, integrations, and infrastructure choices.",
            },
          ],
        }}
      />
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
