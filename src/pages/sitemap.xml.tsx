import { getPosts } from "../apis/notion-client/getPosts";
import { getAgents } from "../apis/notion-client/getAgents";
import { CONFIG } from "site.config";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { GetServerSideProps } from "next";
import { filterPosts } from "src/libs/utils/notion";

export const getServerSideProps = async (ctx: any) => {
  const base = "https://www.tryagentikai.com";

  // Country codes for localized routes
  const countries = ["en-ae", "en-au", "en-ca", "en-gb", "en-in", "en-us"];

  // Static routes - with trailing slashes for SEO (matching trailingSlash: true)
  const staticRoutes = [
    { path: "", priority: 1.0 }, // Root doesn't need trailing slash
    { path: "/about/", priority: 0.8 },
    { path: "/blog/", priority: 0.8 },
    { path: "/contact/", priority: 0.8 },
    { path: "/services/", priority: 0.8 },
    { path: "/audit/", priority: 0.9 },
    { path: "/ai-clarity-workshop/", priority: 0.9 },
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

  // Add static routes (root level)
  staticRoutes.forEach(({ path, priority }) => {
    fields.push({
      loc: `${base}${path}`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority,
    });
  });

  // Add country-specific static routes
  countries.forEach((country) => {
    staticRoutes.forEach(({ path, priority }) => {
      // Adjust priority slightly lower for country-specific pages
      const countryPriority = path === "" ? 0.9 : priority * 0.9;
      const countryPath = path === "" ? `/${country}/` : `/${country}${path}`;
      
      fields.push({
        loc: `${base}${countryPath}`,
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: countryPriority,
      });
    });
  });

  // Add blog posts - with trailing slashes for SEO
  publicPosts.forEach((post) => {
    fields.push({
      loc: `${base}/blog/${post.slug}/`,
      lastmod: new Date(
        post.date?.start_date || post.createdTime
      ).toISOString(),
      changefreq: "weekly",
      priority: 0.7,
    });

    // Add country-specific blog posts
    countries.forEach((country) => {
      fields.push({
        loc: `${base}/${country}/blog/${post.slug}/`,
        lastmod: new Date(
          post.date?.start_date || post.createdTime
        ).toISOString(),
        changefreq: "weekly",
        priority: 0.65,
      });
    });
  });

  // Add agent pages - with trailing slashes for SEO
  publicAgents.forEach((agent) => {
    fields.push({
      loc: `${base}/agent/${agent.slug}/`,
      lastmod: new Date(
        agent.date?.start_date || agent.createdTime
      ).toISOString(),
      changefreq: "weekly",
      priority: 0.7,
    });

    // Add country-specific agent pages
    countries.forEach((country) => {
      fields.push({
        loc: `${base}/${country}/agent/${agent.slug}/`,
        lastmod: new Date(
          agent.date?.start_date || agent.createdTime
        ).toISOString(),
        changefreq: "weekly",
        priority: 0.65,
      });
    });
  });

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
const Sitemap = () => {
  return null;
};

export default Sitemap;
