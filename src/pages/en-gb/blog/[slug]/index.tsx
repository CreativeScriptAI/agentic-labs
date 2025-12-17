import Detail from "src/routes/Detail";
import { filterPosts } from "src/libs/utils/notion";
import { CONFIG } from "site.config";
import { NextPageWithLayout } from "src/types";
import CustomError from "src/routes/Error";
import { getRecordMap, getPosts } from "src/apis";
import MetaConfig from "src/components/MetaConfig";
import StructuredData from "src/components/StructuredData";
import { GetStaticProps } from "next";
import { queryClient } from "src/libs/react-query";
import { queryKey } from "src/constants/queryKey";
import { dehydrate } from "@tanstack/react-query";
import usePostQuery from "src/hooks/usePostQuery";
import { FilterPostsOptions } from "src/libs/utils/notion/filterPosts";

const filter: FilterPostsOptions = {
  acceptStatus: ["Public", "PublicOnDetail"],
  acceptType: ["Paper", "Post", "Page"],
};

export const getStaticPaths = async () => {
  try {
    const posts = await getPosts();
    const filteredPost = filterPosts(posts, filter);
    return {
      paths: filteredPost.map((row) => `/uk/blog/${row.slug}`),
      fallback: true,
    };
  } catch (error) {
    return { paths: [], fallback: true };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  try {
    const posts = await getPosts();
    const feedPosts = filterPosts(posts);
    await queryClient.prefetchQuery({ queryKey: queryKey.posts(), queryFn: () => feedPosts });
    const detailPosts = filterPosts(posts, filter);
    const postDetail = detailPosts.find((t) => t.slug === slug);
    if (!postDetail?.id) return { notFound: true };
    try {
      const recordMap = await getRecordMap(postDetail.id);
      await queryClient.prefetchQuery({ queryKey: queryKey.post(`${slug}`), queryFn: () => ({ ...postDetail, recordMap }) });
      return { props: { dehydratedState: dehydrate(queryClient) }, revalidate: CONFIG.revalidateTime };
    } catch (recordMapError) {
      await queryClient.prefetchQuery({ queryKey: queryKey.post(`${slug}`), queryFn: () => ({ ...postDetail, recordMap: { block: {}, collection: {}, collection_view: {}, notion_user: {}, space: {}, signed_urls: {}, collection_query: {} } }) });
      return { props: { dehydratedState: dehydrate(queryClient) }, revalidate: CONFIG.revalidateTime };
    }
  } catch (error) {
    return { notFound: true };
  }
};

const uukDetailPage: NextPageWithLayout = () => {
  const post = usePostQuery();
  if (!post) return <CustomError />;
  const image = post.thumbnail ?? CONFIG.ogImageGenerateURL ?? `${CONFIG.ogImageGenerateURL}/${encodeURIComponent(post.title)}.png`;
  const date = post.date?.start_date || post.createdTime || "";
  const meta = {
    title: post.title,
    date: new Date(date).toISOString(),
    image: image,
    description: post.summary || "",
    type: post.type[0],
    url: `${CONFIG.link}/uk/blog/${post.slug}`,
  };
  return (
    <>
      <MetaConfig {...meta} />
      <StructuredData type="article" data={{}} />
      <Detail />
    </>
  );
};

uukDetailPage.getLayout = (page) => <>{page}</>;
export default uukDetailPage;
