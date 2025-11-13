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
import RootLayout from "src/layouts/RootLayout";
import { NextSeo } from "next-seo";
import FooterSection from "src/components/sections/FooterSection";

const AiClarityPage = () =>{
    return (
        <>
        <section className="min-h-screen bg-background [&_*]:box-border">
            <NextSeo
                title="AI Clarity Workshop"
                description="Learn how to use AI to improve your business."
                openGraph={{
                    title: "AI Clarity Workshop",
                    description: "Learn how to use AI to improve your business.",
                    type: "website",
                    url: "https://www.tryagentikai.com/ai-clarity-workshop",
                    images: [{
                        url: "https://www.tryagentikai.com/og.jpg",
                        width: 1200,
                        height: 630,
                        alt: "AI Clarity Workshop",
                    }],
                    }}
                
            />  
            <Hero />
            <WorkshopSection />
            <PainSection />
            <ValueSection />
            <WhoItsForSection />
            <InstructorSection />
            <TeamSection />
            <SocialProofSection />
            <FAQSection />
            <FinalCTA />
        </section>
        <FooterSection />
        </>
    )


}

export default AiClarityPage;