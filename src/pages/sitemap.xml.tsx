import { getPosts } from "../apis/notion-client/getPosts";
import { getAgents } from "../apis/notion-client/getAgents";
import { CONFIG } from "site.config";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { GetServerSideProps } from "next";
import { filterPosts } from "src/libs/utils/notion";

export const getServerSideProps = async (ctx: any) => {
  const base = "https://www.tryagentikai.com";

  // Static routes
  const staticRoutes = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.8 },
    { path: "/blog", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/services", priority: 0.8 },
  ];

  // Get blog posts
  const posts = await getPosts();
  const publicPosts = filterPosts(posts, {
    acceptStatus: ["Public"],
    acceptType: ["Post"],
  });

  // Get agents
  const agents = await getAgents();
  const publicAgents = filterPosts(agents, {
    acceptStatus: ["Public", "PublicOnDetail"],
    acceptType: ["Agent"],
  });

  const fields: ISitemapField[] = [];

  // Add static routes
  staticRoutes.forEach(({ path, priority }) => {
    fields.push({
      loc: `${base}${path}`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority,
    });
  });

  // Add blog posts
  publicPosts.forEach((post) => {
    fields.push({
      loc: `${base}/blog/${post.slug}`,
      lastmod: new Date(
        post.date?.start_date || post.createdTime
      ).toISOString(),
      changefreq: "weekly",
      priority: 0.7,
    });
  });

  // Add agent pages
  publicAgents.forEach((agent) => {
    fields.push({
      loc: `${base}/agent/${agent.slug}`,
      lastmod: new Date(
        agent.date?.start_date || agent.createdTime
      ).toISOString(),
      changefreq: "weekly",
      priority: 0.7,
    });
  });

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
const Sitemap = () => {
  return null;
};

export default Sitemap;
