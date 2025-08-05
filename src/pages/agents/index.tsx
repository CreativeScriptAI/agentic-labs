import { GetStaticProps } from "next";
import { dehydrate } from "@tanstack/react-query";
import { getAgents } from "src/apis";
import { filterPosts } from "src/libs/utils/notion";
import { queryClient } from "src/libs/react-query";
import { queryKey } from "src/constants/queryKey";
import { NextPageWithLayout } from "src/types";
import MetaConfig from "src/components/MetaConfig";
import Agents from "src/routes/Agents";
import { CONFIG } from "site.config";

export const getStaticProps: GetStaticProps = async () => {
  const agents = filterPosts(await getAgents());
  await queryClient.prefetchQuery({
    queryKey: queryKey.agents(),
    queryFn: () => agents,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: CONFIG.revalidateTime,
  };
};

const AgentsPage: NextPageWithLayout = () => {
  const meta = {
    title: "AI Agents - Discover Powerful AI Tools",
    description:
      "Explore our collection of AI agents designed to enhance your productivity and workflow. Find the perfect AI assistant for your needs.",
    type: "website",
    url: `${CONFIG.link}/agents`,
  };

  return (
    <>
      <MetaConfig {...meta} />
      <Agents />
    </>
  );
};

export default AgentsPage;
