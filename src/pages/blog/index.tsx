import Feed from "src/routes/Feed";
import { CONFIG } from "site.config";
import { NextPageWithLayout } from "../../types";
import { getPosts } from "../../apis";
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

const BlogPage: NextPageWithLayout = () => {
  const meta = {
    title: CONFIG.blog.title,
    description: CONFIG.blog.description,
    type: "website",
    url: `${CONFIG.link}/blog`,
  };

  // Generate structured data for blog listing page
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: CONFIG.blog.title,
    description: CONFIG.blog.description,
    url: `${CONFIG.link}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Agentic AI Labs",
      url: CONFIG.link,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [], // Will be populated with blog posts
    },
  };

  return (
    <>
      <MetaConfig {...meta} />
      <StructuredData type="website" data={blogSchema} />
      <Feed />
      <FooterSection />
    </>
  );
};

export default BlogPage;
