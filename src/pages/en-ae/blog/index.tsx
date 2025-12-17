import Feed from "src/routes/Feed";
import { CONFIG } from "site.config";
import { NextPageWithLayout } from "../../../types";
import { getPosts } from "../../../apis";
import MetaConfig from "src/components/MetaConfig";
import StructuredData from "src/components/StructuredData";
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

const UAEBlogPage: NextPageWithLayout = () => {
  const meta = {
    title: `${CONFIG.blog.title} • UAE`,
    description: CONFIG.blog.description,
    type: "website",
    url: `${CONFIG.link}/uae/blog`,
  };

  return (
    <>
      <MetaConfig {...meta} />
      <StructuredData type="website" data={{}} />
      <Feed />
      <FooterSection />
    </>
  );
};

export default UAEBlogPage;
