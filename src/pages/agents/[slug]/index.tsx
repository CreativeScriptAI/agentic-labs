import Detail from "src/routes/Detail";
import { filterPosts } from "src/libs/utils/notion";
import { CONFIG } from "site.config";
import { NextPageWithLayout } from "src/types";
import CustomError from "src/routes/Error";
import { getRecordMap, getAgents } from "src/apis";
import MetaConfig from "src/components/MetaConfig";
import { GetStaticProps } from "next";
import { queryClient } from "src/libs/react-query";
import { queryKey } from "src/constants/queryKey";
import { dehydrate } from "@tanstack/react-query";
import useAgentQuery from "src/hooks/useAgentQuery";
import { FilterPostsOptions } from "src/libs/utils/notion/filterPosts";

const filter: FilterPostsOptions = {
  acceptStatus: ["Public", "PublicOnDetail"],
  acceptType: ["Agent", "Post", "Page"],
};

export const getStaticPaths = async () => {
  const agents = await getAgents();
  const filteredAgents = filterPosts(agents, filter);

  return {
    paths: filteredAgents.map((row) => `/agents/${row.slug}`),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;

  const agents = await getAgents();
  const feedAgents = filterPosts(agents);
  await queryClient.prefetchQuery({
    queryKey: queryKey.agents(),
    queryFn: () => feedAgents,
  });

  const detailAgents = filterPosts(agents, filter);
  const agentDetail = detailAgents.find((t) => t.slug === slug);

  if (!agentDetail?.id) {
    return {
      notFound: true,
    };
  }

  const recordMap = await getRecordMap(agentDetail.id);

  await queryClient.prefetchQuery({
    queryKey: queryKey.agent(`${slug}`),
    queryFn: () => ({
      ...agentDetail,
      recordMap,
    }),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: CONFIG.revalidateTime,
  };
};

const AgentDetailPage: NextPageWithLayout = () => {
  const agent = useAgentQuery();

  if (!agent) return <CustomError />;

  const image =
    agent.thumbnail ??
    CONFIG.ogImageGenerateURL ??
    `${CONFIG.ogImageGenerateURL}/${encodeURIComponent(agent.title)}.png`;

  const date = agent.date?.start_date || agent.createdTime || "";

  const meta = {
    title: agent.title,
    date: new Date(date).toISOString(),
    image: image,
    description: agent.summary || "",
    type: agent.type[0],
    url: `${CONFIG.link}/agents/${agent.slug}`,
  };

  return (
    <>
      <MetaConfig {...meta} />
      <Detail />
    </>
  );
};

AgentDetailPage.getLayout = (page) => {
  return <>{page}</>;
};

export default AgentDetailPage;
