import ContactUsForm from "src/components/sections/ContactSection";
import ProjectCapabilities from "src/components/sections/AgentsSection/AgentsDetails/ProjectCapabilities";
import ProjectHero from "src/components/sections/AgentsSection/AgentsDetails/ProjectHero";
import ProjectIssues from "src/components/sections/AgentsSection/AgentsDetails/ProjectIssues";
import ProjectProcess from "src/components/sections/AgentsSection/AgentsDetails/ProjectProcess";
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
import ProjectFAQ from "src/components/sections/AgentsSection/AgentsDetails/ProjectFAQ";
import ProjectReleases from "src/components/sections/AgentsSection/AgentsDetails/ProjectReleases";
import { indiaPatientlyAIFaqs } from "src/data/localeFaqs";

// PatientlyAI agent slug
const PATIENTLYAI_SLUG = "689b540eeeab03d6cdeab527";

type StaticProps = { data: any; slug: string };

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<StaticProps> = async (ctx) => {
  const slug = ctx.params?.slug as string | undefined;
  if (!slug) return { notFound: true };
  try {
    const data = await fetchAgentByID(slug);
    if (!data) return { notFound: true, revalidate: CONFIG.revalidateTime };
    return { props: { data, slug }, revalidate: CONFIG.revalidateTime };
  } catch {
    return { notFound: true, revalidate: CONFIG.revalidateTime };
  }
};

const IndiaAgentDetailPage = ({
  data,
  slug,
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

  const agentName = transformedHero?.title || transformedHero?.heading || "AI Agent";
  const agentNameIndia = `${agentName} India | AI Voice Caller for Lead Booking`;
  const agentDescription =
    transformedHero?.description ||
    transformedHero?.subtitle ||
    "Custom AI agent solution for your business needs in India";
  const agentImage = transformedHero?.image || "/og.jpg";
  const agentUrl = `https://www.tryagentikai.com/india/agent/${slug}`;

  // Use locale-specific FAQs for PatientlyAI
  const isPatientlyAI = slug === PATIENTLYAI_SLUG;
  const localeFaqs = isPatientlyAI ? indiaPatientlyAIFaqs : null;
  const faqData = localeFaqs
    ? {
        title: "FAQ",
        questions: localeFaqs.map((f) => ({
          question: f.question,
          answer: f.answer,
        })),
      }
    : data.faq;

  return (
    <>
      <MetaConfig
        title={agentNameIndia}
        description={agentDescription}
        type="Agent"
        url={agentUrl}
        image={agentImage}
        canonical={agentUrl}
        author="Agentic AI Labs"
      />
      <StructuredData type="softwareApplication" data={{}} />
      {localeFaqs && <StructuredData type="faq" data={{ faqs: localeFaqs }} />}
      {transformedHero && <ProjectHero data={transformedHero} />}
      {data.trustedBy && <ProjectTrustedBy data={data.trustedBy} />}
      {transformedHero && <ProjectBenefitsAndVideo data={transformedHero} />}
      {data.issues && <ProjectIssues data={data.issues} />}
      {data.capabilities && <ProjectCapabilities data={data.capabilities} />}
      {data.works && <ProjectWorks data={data.works} />}
      {data.stack && <ProjectStack data={data.stack} />}
      {data.savings && <ProjectSave data={data.savings} />}
      {data.setup && <ProjectSetup data={data.setup} />}
      {data.releases && <ProjectReleases data={data.releases} />}
      {data.process && <ProjectProcess data={data.process} />}
      {faqData && <ProjectFAQ data={faqData} />}
      {data.testimonial && <ProjectTestimonial data={data.testimonial} />}
      <ContactUsForm />
      <FooterSection />
    </>
  );
};

export default IndiaAgentDetailPage;
