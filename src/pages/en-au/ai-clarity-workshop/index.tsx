import RootLayout from "src/layouts/RootLayout";
import { NextSeo } from "next-seo";
import FooterSection from "src/components/sections/FooterSection";
import Hero from "src/components/sections/AiClarityWorkshop/Hero";
import PainSection from "src/components/sections/AiClarityWorkshop/PainSection";
import ValueSection from "src/components/sections/AiClarityWorkshop/ValueSection";
import WhoItsForSection from "src/components/sections/AiClarityWorkshop/WhoItsForSection";
import WorkshopSection from "src/components/sections/AiClarityWorkshop/WorkshopSection";
import InstructorSection from "src/components/sections/AiClarityWorkshop/InstructorSection";
import TeamSection from "src/components/sections/AiClarityWorkshop/TeamSection";
import SocialProofSection from "src/components/sections/AiClarityWorkshop/SocialProofSection";
import FAQSection from "src/components/sections/AiClarityWorkshop/FAQSection";
import FinalCTA from "src/components/sections/AiClarityWorkshop/FinalCTA";
import StructuredData from "src/components/StructuredData";

export default function AustraliaAiClarityPage() {
  return (
    <>
      <section className="min-h-screen bg-background [&_*]:box-border">
        <NextSeo
          title="AI Clarity Workshop Australia | AU Founders"
          description="Learn how to use AI to improve your business in Australia. Free 30-minute clarity session for Australian founders."
          openGraph={{
            title: "AI Clarity Workshop Australia | AU Founders",
            description: "Learn how to use AI to improve your business in Australia. Free 30-minute clarity session for Australian founders.",
            type: "website",
            url: "https://www.tryagentikai.com/australia/ai-clarity-workshop",
            images: [
              {
                url: "https://www.tryagentikai.com/og.jpg",
                width: 1200,
                height: 630,
                alt: "AI Clarity Workshop Australia",
              },
            ],
          }}
        />
        <StructuredData
          type="faq"
          data={{
            faqs: [
              {
                question: "Is this a sales call?",
                answer:
                  "No. This is a clarity session. We look at your workflows, spot inefficiencies, and show you where AI can actually save time and money. No pressure. No pitches. Just honest insight.",
              },
              {
                question: "Do I need to know AI?",
                answer:
                  "Not at all. You don't need technical skills or AI knowledge. You bring the problems — we translate them into simple automation opportunities.",
              },
              {
                question: "What do I need before the call?",
                answer:
                  "Just three things: • Your top repetitive tasks • A basic understanding of how work moves in your team • 30 minutes of distraction-free time. That's enough for us to create value.",
              },
              {
                question: "How long does the workshop take?",
                answer:
                  "The session is 30 minutes. Short, sharp, and focused — designed to save you weeks of trial-and-error.",
              },
              {
                question: "What happens after the call?",
                answer:
                  "You get a simple 1-page breakdown: • What to automate • Expected ROI (time + cost savings) • A clear next-step plan. You can execute it yourself or work with us — your call.",
              },
              {
                question: "Who is this workshop for?",
                answer:
                  "Founders, operators, growth leaders, and teams drowning in manual work — especially across sales, support, ops, and marketing. If you're stuck deciding what to automate, this is for you.",
              },
              {
                question: "What if I'm a small team?",
                answer:
                  "Small teams benefit the most. Automation replaces repetitive tasks and gives your limited bandwidth more leverage. Think of it as adding an extra team member without hiring.",
              },
              {
                question: "What if we already use AI tools?",
                answer:
                  "Perfect. Most companies use AI as isolated tools — not systems. We look at end-to-end workflow gaps and help you connect everything so the tools actually work together.",
              },
              {
                question: "Is my data safe?",
                answer:
                  "Yes. We don't store, share, or use your internal data beyond the workshop context. Everything stays between us, and we can sign an NDA if required.",
              },
              {
                question:
                  "What if you can't find any automation opportunities?",
                answer:
                  "Hasn't happened yet — but if it does, the workshop is free. We only charge when we unlock clear ROI.",
              },
              {
                question: "Who actually leads the AI Clarity Workshop?",
                answer:
                  "Every workshop is run by Agentic AI Labs' senior builders—the same team that ships production voice, chat, and workflow agents. You're talking to architects who've executed 50+ founder workshops, not a sales crew reading a script.",
              },
              {
                question:
                  "What makes this workshop different from an AI brainstorm or webinar?",
                answer:
                  "It's a working session tailored to your workflow. We map real bottlenecks, prioritize automation moves, and leave you with a 1-page roadmap that calls out what to automate now, later, or never. No jargon, no fluff.",
              },
              {
                question:
                  "Can we bring our own recordings, scripts, or dashboards to review?",
                answer:
                  "Absolutely. Bring call recordings, SOPs, dashboards—anything that shows how your work actually happens. The more honest context we get, the sharper the recommendations.",
              },
              {
                question: "What if we already have an AI team or vendor?",
                answer:
                  "Perfect. Consider us your second-opinion partner. We benchmark what you've built, highlight gaps, and show how a production-grade agent could sit alongside—or replace—piecemeal tools. It's clarity before you spend another dollar.",
              },
              {
                question:
                  "Do you give specific tooling and model recommendations?",
                answer:
                  "Yes. We flag which LLMs or automation stacks make sense for your latency, privacy, and budget requirements, from GPT to Claude or Gemini or any other model or any leading LLM. You'll know exactly which stack to test and why.",
              },
              {
                question:
                  "What happens if we decide to build with Agentic AI Labs afterward?",
                answer:
                  "We move straight into a 7-day sprint using the workshop roadmap. Day 1 locks in guardrails, days 2–4 cover build + integrations, and days 5–7 wrap QA plus monitoring so you launch a reliable agent fast.",
              },
            ],
          }}
        />
        <Hero />
        <WorkshopSection />
        <SocialProofSection />
        <PainSection />
        <ValueSection />
        <WhoItsForSection />
        <InstructorSection />
        <TeamSection />
        <FAQSection />
        <FinalCTA />
      </section>
      <FooterSection />
    </>
  );
}
