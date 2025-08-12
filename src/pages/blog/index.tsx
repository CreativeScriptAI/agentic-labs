import Feed from "src/routes/Feed";
import { CONFIG } from "site.config";
import { NextPageWithLayout } from "../../types";
import { getPosts } from "../../apis";
import MetaConfig from "src/components/MetaConfig";
import { queryClient } from "src/libs/react-query";
import { queryKey } from "src/constants/queryKey";
import { GetStaticProps } from "next";
import { dehydrate } from "@tanstack/react-query";
import { filterPosts } from "src/libs/utils/notion";
import FooterSection from "src/components/sections/FooterSection";

export const getStaticProps: GetStaticProps = async () => {
  const posts = filterPosts(await getPosts());
  await queryClient.prefetchQuery({
    queryKey: queryKey.posts(),
    queryFn: () => posts,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: CONFIG.revalidateTime,
  };
};

const BlogPage: NextPageWithLayout = () => {
  const meta = {
    title: CONFIG.blog.title,
    description: CONFIG.blog.description,
    type: "website",
    url: `${CONFIG.link}/blog`,
  };

  return (
    <>
      <MetaConfig {...meta} />
      <Feed />
      <FooterSection />
    </>
  );
};

export default BlogPage;
