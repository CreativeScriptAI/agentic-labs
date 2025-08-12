import { useQuery } from "@tanstack/react-query";
import { queryKey } from "src/constants/queryKey";
import { TPost } from "src/types";
import { getAgents } from "src/apis";
import { filterPosts } from "src/libs/utils/notion";

const useAgentsQuery = () => {
  const { data } = useQuery({
    queryKey: queryKey.agents(),
    queryFn: async () => {
      const agents = await getAgents();
      return filterPosts(agents);
    },
    initialData: [] as TPost[],
    staleTime: 100, // 1 minute
  });

  if (!data) throw new Error("Agents data is not found");

  return data;
};

export default useAgentsQuery;
