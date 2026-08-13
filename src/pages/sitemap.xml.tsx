import { getPosts } from "../apis/notion-client/getPosts";
import { getAgents } from "../apis/notion-client/getAgents";
import { CONFIG } from "site.config";
import { getServerSideSitemapLegacy, ISitemapField } from "next-sitemap";
import { GetServerSidePropsContext } from "next";
import { filterPosts } from "src/libs/utils/notion";
import { PROGRAMMATIC_SEO_PAGES, CONTENT_LASTMOD } from "src/data/programmaticSeoPages";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const base = "https://www.tryagentikai.com";

    // Country codes for localized routes - COMMENTED OUT
    // const countries = ["en-ae", "en-au", "en-ca", "en-gb", "en-in", "en-us"];

    // Static routes - with trailing slashes for SEO (matching trailingSlash: true).
    // Each carries a stable lastmod so the sitemap never reports a live "now".
    const staticRoutes = [
      { path: "", priority: 1.0, lastmod: CONTENT_LASTMOD }, // Root doesn't need trailing slash
      { path: "/about/", priority: 0.8, lastmod: "2026-06-01" },
      { path: "/blog/", priority: 0.8, lastmod: CONTENT_LASTMOD },
      { path: "/contact/", priority: 0.8, lastmod: "2026-07-21" },
      { path: "/services/", priority: 0.8, lastmod: CONTENT_LASTMOD },
      { path: "/ai-clarity-workshop/", priority: 0.9, lastmod: "2026-07-21" },
      { path: "/mcp/", priority: 0.7, lastmod: CONTENT_LASTMOD },
      { path: "/ai-memory-system/", priority: 0.9, lastmod: "2026-06-01" },
      { path: "/ai-voice-agent/", priority: 0.95, lastmod: CONTENT_LASTMOD },
      { path: "/ai-voice-agent-global/", priority: 0.9, lastmod: "2026-06-01" },
      { path: "/ai-receptionist-for-medical-clinics/", priority: 0.9, lastmod: "2026-06-01" },
      { path: "/ai-receptionist-for-dental-practices/", priority: 0.9, lastmod: "2026-06-01" },
      { path: "/indian-ai-voices/", priority: 0.8, lastmod: "2026-06-01" },
      { path: "/agents-repo/", priority: 0.7, lastmod: "2026-06-01" },
      { path: "/privacy-policy/", priority: 0.3, lastmod: "2026-01-15" },
    ];

    const fields: ISitemapField[] = [];

    // Add static routes (root level)
    staticRoutes.forEach(({ path, priority, lastmod }) => {
      fields.push({
        loc: `${base}${path}`,
        lastmod: new Date(lastmod).toISOString(),
        changefreq: "weekly" as const,
        priority,
      });
    });

    // Add programmatic SEO routes (root level)
    const pSeoPriority = (type: string) => {
      if (type === "persona" || type === "integration") return 0.85;
      if (type === "comparison" || type === "memory-use-case") return 0.80;
      if (type === "directory") return 0.70;
      return 0.75; // glossary
    };
    PROGRAMMATIC_SEO_PAGES.forEach((page) => {
      fields.push({
        loc: `${base}/${page.pathSegments.join("/")}/`,
        lastmod: new Date(page.lastmod || CONTENT_LASTMOD).toISOString(),
        changefreq: "weekly" as const,
        priority: pSeoPriority(page.type),
      });
    });

    // Blog posts and agents come from Notion. Fetch them in isolated try/catch
    // blocks so a Notion API failure only drops those URLs, it can never wipe the
    // static and programmatic URLs already pushed above. A single Notion hiccup
    // previously emptied the entire sitemap.
    try {
      const posts = await getPosts();
      const publicPosts = filterPosts(posts, {
        acceptStatus: ["Public"],
        acceptType: ["Post"],
      });
      publicPosts.forEach((post) => {
        fields.push({
          loc: `${base}/blog/${post.slug}/`,
          lastmod: new Date(
            post.date?.start_date || post.createdTime
          ).toISOString(),
          changefreq: "weekly" as const,
          priority: 0.7,
        });
      });
    } catch (error) {
      console.error("Sitemap: failed to fetch blog posts from Notion:", error);
    }

    try {
      const agents = await getAgents();
      const publicAgents = filterPosts(agents, {
        acceptStatus: ["Public", "PublicOnDetail"],
        acceptType: ["Agent"],
      });
      publicAgents.forEach((agent) => {
        fields.push({
          loc: `${base}/agent/${agent.slug}/`,
          lastmod: new Date(
            agent.date?.start_date || agent.createdTime
          ).toISOString(),
          changefreq: "weekly" as const,
          priority: 0.7,
        });
      });
    } catch (error) {
      console.error("Sitemap: failed to fetch agents from Notion:", error);
    }

    return getServerSideSitemapLegacy(ctx, fields);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    // Last-resort fallback: at least emit the static + programmatic URLs, which
    // have no external dependencies, rather than an empty sitemap.
    const base = "https://www.tryagentikai.com";
    const fallback: ISitemapField[] = [
      { loc: base, lastmod: CONTENT_LASTMOD, changefreq: "weekly", priority: 1.0 },
      ...PROGRAMMATIC_SEO_PAGES.map((page) => ({
        loc: `${base}/${page.pathSegments.join("/")}/`,
        lastmod: new Date(page.lastmod || CONTENT_LASTMOD).toISOString(),
        changefreq: "weekly" as const,
        priority: 0.8,
      })),
    ];
    return getServerSideSitemapLegacy(ctx, fallback);
  }
};

// Default export to prevent next.js errors
const Sitemap = () => {
  return null;
};

export default Sitemap;
