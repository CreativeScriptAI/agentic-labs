import type { GetStaticProps } from "next";
import MetaConfig from "src/components/MetaConfig";
import StructuredData from "src/components/StructuredData";
import { fetchAgentsData } from "src/libs/api";
import { CONFIG } from "site.config";
import AgentsRepoDesktopSection from "src/components/sections/AgentsRepoDesktopSection";
import AgentsRepoLeadSection from "src/components/sections/AgentsRepoLeadSection";
import AgentsRepoFooterSection from "src/components/sections/AgentsRepoFooterSection";

type Props = {
  agentsApiRaw: any;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const agentsApiRaw = await fetchAgentsData();
  return {
    props: {
      agentsApiRaw,
    },
    revalidate: CONFIG.revalidateTime,
  };
};

export default function AgentsRepoPage({ agentsApiRaw }: Props) {
  const agentsData = Array.isArray(agentsApiRaw?.data) ? agentsApiRaw.data : [];

  return (
    <>
      <MetaConfig
        title="AI Agents Repo | Agentic AI Labs"
        description="Explore live AI agents deployed by Agentic AI Labs. Browse capabilities, categories, and test production-ready agents."
        type="Website"
        url="https://www.tryagentikai.com/agents-repo"
      />
      <StructuredData
        type="website"
        data={{
          name: "AI Agents Repo",
          description:
            "Live repository of AI agents deployed by Agentic AI Labs.",
        }}
      />

      <AgentsRepoDesktopSection agents={agentsData} />
      <AgentsRepoLeadSection />
      <AgentsRepoFooterSection />
    </>
  );
}
