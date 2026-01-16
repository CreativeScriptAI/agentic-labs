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
import { uaeWorkshopFaqs } from "src/data/localeFaqs";

export default function UAEAiClarityPage() {
  return (
    <>
      <section className="min-h-screen bg-background [&_*]:box-border">
        <NextSeo
          title="AI Clarity Workshop Dubai | UAE Founders"
          description="Learn how to use AI to improve your business in UAE. Free 30-minute clarity session for Dubai and UAE founders."
          openGraph={{
            title: "AI Clarity Workshop Dubai | UAE Founders",
            description:
              "Learn how to use AI to improve your business in UAE. Free 30-minute clarity session for Dubai and UAE founders.",
            type: "website",
            url: "https://www.tryagentikai.com/en-ae/ai-clarity-workshop",
            images: [
              {
                url: "https://www.tryagentikai.com/og.jpg",
                width: 1200,
                height: 630,
                alt: "AI Clarity Workshop Dubai UAE",
              },
            ],
          }}
        />
        <StructuredData type="faq" data={{ faqs: uaeWorkshopFaqs }} />
        <Hero />
        <WorkshopSection />
        <SocialProofSection />
        <PainSection />
        <ValueSection />
        <WhoItsForSection />
        <InstructorSection />
        <TeamSection />
        <FAQSection faqs={uaeWorkshopFaqs} />
        <FinalCTA />
      </section>
      <FooterSection />
    </>
  );
}
