import { NextPageWithLayout } from "../types";
import MetaConfig from "src/components/MetaConfig";
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
    title: CONFIG.blog.title,
    description: CONFIG.blog.description,
    type: "website",
    url: CONFIG.link,
  };

  return (
    <>
      <MetaConfig {...meta} />
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
