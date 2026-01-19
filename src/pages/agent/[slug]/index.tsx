import ContactUsForm from "src/components/sections/ContactSection";
import AICaller from "src/components/sections/AICaller";
import ProjectCapabilities from "src/components/sections/AgentsSection/AgentsDetails/ProjectCapabilities";
import ProjectEdgeCases from "src/components/sections/AgentsSection/AgentsDetails/ProjectEdgeCases";
import ProjectFAQ from "src/components/sections/AgentsSection/AgentsDetails/ProjectFAQ";
import ProjectHeader from "src/components/sections/AgentsSection/AgentsDetails/ProjectHeader";
import ProjectHero from "src/components/sections/AgentsSection/AgentsDetails/ProjectHero";
import ProjectIssues from "src/components/sections/AgentsSection/AgentsDetails/ProjectIssues";
import ProjectProcess from "src/components/sections/AgentsSection/AgentsDetails/ProjectProcess";
import ProjectReleases from "src/components/sections/AgentsSection/AgentsDetails/ProjectReleases";
import ProjectSave from "src/components/sections/AgentsSection/AgentsDetails/ProjectSave";
import ProjectSetup from "src/components/sections/AgentsSection/AgentsDetails/ProjectSetup";
import ProjectStack from "src/components/sections/AgentsSection/AgentsDetails/ProjectStack";
import ProjectTestimonial from "src/components/sections/AgentsSection/AgentsDetails/ProjectTestimonial";
import ProjectTrustedBy from "src/components/sections/AgentsSection/AgentsDetails/ProjectTrustedBy";
import ProjectWorks from "src/components/sections/AgentsSection/AgentsDetails/ProjectWorks";
import { fetchAgentByID } from "src/libs/api";
import FooterSection from "src/components/sections/FooterSection";
import MetaConfig from "src/components/MetaConfig";
import StructuredData from "src/components/StructuredData";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { CONFIG } from "site.config";
import ProjectBenefitsAndVideo from "src/components/sections/AgentsSection/AgentsDetails/ProjectBenefitsAndVideo";

type StaticProps = {
  data: any;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Since we're fetching agents by ID directly, we can use fallback: 'blocking'
  // This allows any valid agent ID to be accessed without pre-generating paths
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<StaticProps> = async (ctx) => {
  const slug = ctx.params?.slug as string | undefined;
  if (!slug) return { notFound: true };

  try {
    // Treat the dynamic route segment as the unique ID
    const data = await fetchAgentByID(slug);
    if (!data) return { notFound: true, revalidate: CONFIG.revalidateTime };

    return {
      props: { data },
      revalidate: CONFIG.revalidateTime,
    };
  } catch {
    return { notFound: true, revalidate: CONFIG.revalidateTime };
  }
};

const AgentDetailPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // Transform hero data: apply prop changes
  const isAIInterviewerAgent = data?.hero?.title === "M2ai" || data?.hero?.title === "AI Interviewer Agent";
  const transformedHero = data?.hero
    ? {
        ...data.hero,
        title: data.hero.title === "M2ai" ? "AI Interviewer Agent" : data.hero.title,
        subtitle: isAIInterviewerAgent && data.hero.subtitle === "" 
          ? "🔴 LIVE (40+ interviews done)" 
          : data.hero.subtitle === "sdfdsf" 
          ? "🔴 LIVE (40+ interviews done)" 
          : data.hero.subtitle,
        titleHighlight: isAIInterviewerAgent && data.hero.titleHighlight === "" 
          ? "" 
          : data.hero.titleHighlight,
        description: data.hero.description === "Automating the blue-collar hiring process with AI Voice Agent, achieving a 46% operational cost reduction."
          ? "Automating the blue-collar hiring process with AI Voice Interviewer Agent, achieving a 46% operational cost reduction."
          : data.hero.description,
      }
    : null;

  // Extract agent data for meta tags
  const agentName = transformedHero?.title || transformedHero?.heading || "AI Agent";
  const agentDescription =
    transformedHero?.description ||
    transformedHero?.subtitle ||
    "Custom AI agent solution for your business needs";
  const agentImage = transformedHero?.image || "/og.jpg";
  const agentUrl = `https://www.tryagentikai.com/agent/${data?.id || ""}`;

  // Generate keywords based on agent data
  const keywords = [
    "AI Agent",
    "Artificial Intelligence",
    "Automation",
    "Business Process",
    "Custom AI Solution",
    "Machine Learning",
    "Workflow Automation",
    "Digital Transformation",
    "AI Development",
    "Agentic AI Labs",
  ];

  // Add agent-specific keywords if available
  if (data?.stack?.technologies) {
    keywords.push(
      ...data.stack.technologies.map((tech: any) => tech.name || tech)
    );
  }

  // Generate structured data for the agent
  const agentSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: agentName,
    description: agentDescription,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: agentUrl,
    image: agentImage.startsWith("http")
      ? agentImage
      : `https://www.tryagentikai.com${agentImage}`,
    creator: {
      "@type": "Organization",
      name: "Agentic AI Labs",
      url: "https://www.tryagentikai.com",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: data?.testimonial
      ? {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "1",
        }
      : undefined,
    ...(data?.capabilities?.features && {
      featureList: data.capabilities.features.map(
        (feature: any) => feature.title || feature
      ),
    }),
  };

  return (
    <>
      {/* Meta Tags */}
      <MetaConfig
        title={agentName}
        description={agentDescription}
        type="Agent"
        url={agentUrl}
        image={agentImage}
        keywords={keywords}
        canonical={agentUrl}
        author="Agentic AI Labs"
      />

      {/* Structured Data */}
      <StructuredData type="softwareApplication" data={agentSchema} />

      {/* Page Content */}
      {/* <ProjectHeader data={data.header} /> */}
      {transformedHero && <ProjectHero data={transformedHero} />}
      {data.trustedBy && <ProjectTrustedBy data={data.trustedBy} />}
      {transformedHero && (
        <ProjectBenefitsAndVideo data={transformedHero} />
      )}
      
      {data.issues && <ProjectIssues data={data.issues} />}
      {data.capabilities && <ProjectCapabilities data={data.capabilities} />}
      {data.works && <ProjectWorks data={data.works} />}
      {data.stack && <ProjectStack data={data.stack} />}
      {data.savings && <ProjectSave data={data.savings} />}
      {data.setup && <ProjectSetup data={data.setup} />}
      {data.releases && <ProjectReleases data={data.releases} />}
      {/* {data.edgeCases && <ProjectEdgeCases data={data.edgeCases} />} */}
      {data.process && <ProjectProcess data={data.process} />}
      {data.faq && <ProjectFAQ data={data.faq} />}
      {data.testimonial && <ProjectTestimonial data={data.testimonial} />}
      <ContactUsForm />
      <FooterSection />
    </>
  );
};

export default AgentDetailPage;
