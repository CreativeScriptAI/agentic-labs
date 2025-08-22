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
      paths: filteredPost.map((row) => `/blog/${row.slug}`),
      fallback: true,
    };
  } catch (error) {
    console.error("Error generating static paths for blog posts:", error);

    // Return empty paths with fallback true to allow runtime generation
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;

  try {
    const posts = await getPosts();
    const feedPosts = filterPosts(posts);
    await queryClient.prefetchQuery({
      queryKey: queryKey.posts(),
      queryFn: () => feedPosts,
    });

    const detailPosts = filterPosts(posts, filter);
    const postDetail = detailPosts.find((t) => t.slug === slug);

    if (!postDetail?.id) {
      return {
        notFound: true,
      };
    }

    try {
      const recordMap = await getRecordMap(postDetail.id);

      await queryClient.prefetchQuery({
        queryKey: queryKey.post(`${slug}`),
        queryFn: () => ({
          ...postDetail,
          recordMap,
        }),
      });

      return {
        props: {
          dehydratedState: dehydrate(queryClient),
        },
        revalidate: CONFIG.revalidateTime,
      };
    } catch (recordMapError) {
      console.error(`Failed to get recordMap for ${slug}:`, recordMapError);

      // If recordMap fails, still try to render the page with minimal data
      await queryClient.prefetchQuery({
        queryKey: queryKey.post(`${slug}`),
        queryFn: () => ({
          ...postDetail,
          recordMap: {
            block: {},
            collection: {},
            collection_view: {},
            notion_user: {},
            space: {},
            signed_urls: {},
            collection_query: {},
          },
        }),
      });

      return {
        props: {
          dehydratedState: dehydrate(queryClient),
        },
        revalidate: CONFIG.revalidateTime,
      };
    }
  } catch (error) {
    console.error(`Error in getStaticProps for blog/${slug}:`, error);

    // If everything fails, return not found
    return {
      notFound: true,
    };
  }
};

const DetailPage: NextPageWithLayout = () => {
  const post = usePostQuery();

  if (!post) return <CustomError />;

  const image =
    post.thumbnail ??
    CONFIG.ogImageGenerateURL ??
    `${CONFIG.ogImageGenerateURL}/${encodeURIComponent(post.title)}.png`;

  const date = post.date?.start_date || post.createdTime || "";

  const meta = {
    title: post.title,
    date: new Date(date).toISOString(),
    image: image,
    description: post.summary || "",
    type: post.type[0],
    url: `${CONFIG.link}/blog/${post.slug}`,
  };

  // Generate structured data for blog post
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary || "",
    image: image.startsWith("http") ? image : `${CONFIG.link}${image}`,
    url: `${CONFIG.link}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: "Agentic AI Labs",
      url: CONFIG.link,
    },
    publisher: {
      "@type": "Organization",
      name: "Agentic AI Labs",
      url: CONFIG.link,
      logo: {
        "@type": "ImageObject",
        url: `${CONFIG.link}/logo.png`,
      },
    },
    datePublished: new Date(date).toISOString(),
    dateModified: new Date(date).toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${CONFIG.link}/blog/${post.slug}`,
    },
    articleSection: "Technology",
    keywords: ["AI", "Agents", "Automation", "Technology", "Machine Learning"],
  };

  return (
    <>
      <MetaConfig {...meta} />
      <StructuredData type="article" data={articleSchema} />
      <Detail />
    </>
  );
};

DetailPage.getLayout = (page) => {
  return <>{page}</>;
};

export default DetailPage;
