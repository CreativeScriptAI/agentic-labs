import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { queryKey } from "src/constants/queryKey";
import { PostDetail } from "src/types";

// During static generation and the first client render, router.query.slug is
// not yet populated, so keying the post cache off it misses and the page would
// render empty server-side (bad for SEO: no title, meta, schema, or body in the
// HTML). The page passes the real slug (from getStaticProps params) through this
// context so the cache lookup resolves during SSR too.
export const PostSlugContext = createContext<string | undefined>(undefined);

const usePostQuery = (slugArg?: string) => {
  const router = useRouter();
  const ctxSlug = useContext(PostSlugContext);
  const slug = slugArg ?? ctxSlug ?? (router.query.slug as string | undefined);
  const { data } = useQuery<PostDetail>({
    queryKey: queryKey.post(`${slug}`),
    enabled: false,
  });

  return data;
};

export default usePostQuery;
