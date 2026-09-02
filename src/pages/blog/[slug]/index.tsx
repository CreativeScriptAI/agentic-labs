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
import usePostQuery, { PostSlugContext } from "src/hooks/usePostQuery";
import { FilterPostsOptions } from "src/libs/utils/notion/filterPosts";
import { useRouter } from "next/router";

const filter: FilterPostsOptions = {
  acceptStatus: ["Public", "PublicOnDetail"],
  acceptType: ["Paper", "Post", "Page"],
};

type FaqItem = { question: string; answer: string };

// Pull the "Common questions" Q/A pairs out of the Notion recordMap so the post
// can emit FAQPage schema (helps AEO). Posts follow the convention: an H2 titled
// "Common questions", then H3 questions each followed by paragraph answers.
const blockText = (block: any): string =>
  (block?.value?.properties?.title || [])
    .map((seg: any[]) => seg?.[0] || "")
    .join("")
    .trim();

const extractFaqFromRecordMap = (
  recordMap: any,
  pageId: string
): FaqItem[] => {
  try {
    const blocks = recordMap?.block || {};
    const order: string[] = blocks?.[pageId]?.value?.content || [];
    const items: FaqItem[] = [];
    let inFaq = false;
    let current: FaqItem | null = null;
    for (const id of order) {
      const b = blocks[id];
      const type = b?.value?.type;
      if (!type) continue;
      const text = blockText(b);
      if (type === "sub_header") {
        if (inFaq) break; // next H2 ends the FAQ section
        if (/^common questions$/i.test(text)) inFaq = true;
        continue;
      }
      if (!inFaq) continue;
      if (type === "sub_sub_header") {
        if (current?.question && current.answer) items.push(current);
        current = { question: text, answer: "" };
      } else if (type === "text" && current) {
        current.answer = current.answer ? `${current.answer} ${text}` : text;
      }
    }
    if (current?.question && current.answer) items.push(current);
    return items.filter((i) => i.question && i.answer);
  } catch {
    return [];
  }
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
    // Harden slug matching: trim slashes and ensure comparison is resilient
    const normalizedSlug = (slug as string)?.replace(/\/$/, "");
    const postDetail = detailPosts.find((t) => 
      t.slug?.replace(/\/$/, "") === normalizedSlug
    );

    if (!postDetail?.id) {
      return {
        notFound: true,
      };
    }

    try {
      const recordMap = await getRecordMap(postDetail.id);
      const faqItems = extractFaqFromRecordMap(recordMap, postDetail.id);

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
          slug: normalizedSlug,
          faqItems,
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
          slug: normalizedSlug,
          faqItems: [],
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

const DetailPage: NextPageWithLayout = ({
  slug,
  faqItems = [],
}: {
  slug?: string;
  faqItems?: FaqItem[];
}) => {
  const router = useRouter();
  // Pass the slug from getStaticProps params so the post resolves during SSR
  // (router.query.slug is empty at static generation time). This keeps the
  // title, meta, Article schema, and body in the server HTML for crawlers.
  const post = usePostQuery(slug);

  // Only the fallback (not-yet-generated) state has no data; render nothing then.
  if (router.isFallback) return null;

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
    <PostSlugContext.Provider value={post.slug ?? slug}>
      <MetaConfig {...meta} />
      <StructuredData type="article" data={articleSchema} />
      {faqItems && faqItems.length > 0 ? (
        <StructuredData type="faq" data={{ faqs: faqItems }} />
      ) : null}
      <Detail />
    </PostSlugContext.Provider>
  );
};

DetailPage.getLayout = (page) => {
  return <>{page}</>;
};

export default DetailPage;
