import ContactUsForm from "src/components/sections/ContactSection";
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
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { CONFIG } from "site.config";

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
    // Directly fetch agent by ID (assuming slug is the ID or can be converted to ID)
    const data = await fetchAgentByID("6888739e0e03b447e3158604");
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
  return (
    <>
      <ProjectHeader data={data.header} />
      {data.hero && <ProjectHero data={data.hero} />}
      {data.trustedBy && <ProjectTrustedBy data={data.trustedBy} />}
      {data.issues && <ProjectIssues data={data.issues} />}
      {data.capabilities && <ProjectCapabilities data={data.capabilities} />}
      {data.works && <ProjectWorks data={data.works} />}
      {data.stack && <ProjectStack data={data.stack} />}
      {data.savings && <ProjectSave data={data.savings} />}
      {data.setup && <ProjectSetup data={data.setup} />}
      {data.releases && <ProjectReleases data={data.releases} />}
      {data.edgeCases && <ProjectEdgeCases data={data.edgeCases} />}
      {data.process && <ProjectProcess data={data.process} />}
      {data.faq && <ProjectFAQ data={data.faq} />}
      {data.testimonial && <ProjectTestimonial data={data.testimonial} />}
      <ContactUsForm />
    </>
  );
};

export default AgentDetailPage;
