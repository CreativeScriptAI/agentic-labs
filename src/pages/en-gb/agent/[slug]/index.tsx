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
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { CONFIG } from "site.config";
import ProjectBenefitsAndVideo from "src/components/sections/AgentsSection/AgentsDetails/ProjectBenefitsAndVideo";
import ProjectFAQ from "src/components/sections/AgentsSection/AgentsDetails/ProjectFAQ";
import ProjectReleases from "src/components/sections/AgentsSection/AgentsDetails/ProjectReleases";

type StaticProps = { data: any };

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<StaticProps> = async (ctx) => {
  const slug = ctx.params?.slug as string | undefined;
  if (!slug) return { notFound: true };
  try {
    const data = await fetchAgentByID(slug);
    if (!data) return { notFound: true, revalidate: CONFIG.revalidateTime };
    return { props: { data }, revalidate: CONFIG.revalidateTime };
  } catch {
    return { notFound: true, revalidate: CONFIG.revalidateTime };
  }
};

const uukAgentDetailPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const agentName = data?.hero?.title || data?.hero?.heading || "AI Agent";
  const agentDescription = data?.hero?.description || data?.hero?.subtitle || "Custom AI agent solution for your business needs";
  const agentImage = data?.hero?.image || "/og.jpg";
  const agentUrl = `https://www.tryagentikai.com/uk/agent/${data?.id || ""}`;

  return (
    <>
      <MetaConfig
        title={agentName}
        description={agentDescription}
        type="Agent"
        url={agentUrl}
        image={agentImage}
        canonical={agentUrl}
        author="Agentic AI Labs"
      />
      <StructuredData type="softwareApplication" data={{}} />
      {data.hero && <ProjectHero data={data.hero} />}
      {data.trustedBy && <ProjectTrustedBy data={data.trustedBy} />}
      {data.hero && <ProjectBenefitsAndVideo data={data.hero} />}
      {data.issues && <ProjectIssues data={data.issues} />}
      {data.capabilities && <ProjectCapabilities data={data.capabilities} />}
      {data.works && <ProjectWorks data={data.works} />}
      {data.stack && <ProjectStack data={data.stack} />}
      {data.savings && <ProjectSave data={data.savings} />}
      {data.setup && <ProjectSetup data={data.setup} />}
      {data.releases && <ProjectReleases data={data.releases} />}
      {data.process && <ProjectProcess data={data.process} />}
      {data.faq && <ProjectFAQ data={data.faq} />}
      {data.testimonial && <ProjectTestimonial data={data.testimonial} />}
      <ContactUsForm />
      <FooterSection />
    </>
  );
};

export default uukAgentDetailPage;
