import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { queryKey } from "src/constants/queryKey";
import { PostDetail } from "src/types";
import { getAgents, getRecordMap } from "src/apis";
import { filterPosts } from "src/libs/utils/notion";
import { FilterPostsOptions } from "src/libs/utils/notion/filterPosts";

const useAgentQuery = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data } = useQuery<PostDetail>({
    queryKey: queryKey.agent(`${slug}`),
    queryFn: async () => {
      if (!slug) throw new Error("Agent slug is required");

      const agents = await getAgents();
      const filter: FilterPostsOptions = {
        acceptStatus: ["Public", "PublicOnDetail"],
        acceptType: ["Agent", "Post", "Page"],
      };
      const detailAgents = filterPosts(agents, filter);

      const agentDetail = detailAgents.find((t) => t.slug === slug);

      if (!agentDetail?.id) {
        throw new Error("Agent not found");
      }

      const recordMap = await getRecordMap(agentDetail.id);

      return {
        ...agentDetail,
        recordMap,
      };
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return data;
};

export default useAgentQuery;
