import { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "../../apis/notion-client/getPosts";
import { filterPosts } from "src/libs/utils/notion";
import { CONFIG } from "site.config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Set response headers
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate"
    );

    // Get blog posts
    const posts = await getPosts();
    const publicPosts = filterPosts(posts, {
      acceptStatus: ["Public"],
      acceptType: ["Post"],
    });

    // Generate RSS XML
    const baseUrl = "https://www.tryagentikai.com";
    const rssXml = generateRssXml(publicPosts, baseUrl);

    res.status(200).end(rssXml);
  } catch (error) {
    console.error("Error generating RSS feed:", error);
    res.status(500).json({ error: "Error generating RSS feed" });
  }
}

function generateRssXml(posts: any[], baseUrl: string) {
  const now = new Date().toUTCString();

  const rssItems = posts
    .slice(0, 20) // Limit to latest 20 posts
    .map((post) => {
      const pubDate = new Date(
        post.date?.start_date || post.createdTime
      ).toUTCString();
      const postUrl = `${baseUrl}/blog/${post.slug}`;

      return `
    <item>
      <title><![CDATA[${post.title || "Untitled"}]]></title>
      <description><![CDATA[${
        post.summary ||
        post.description ||
        "Read more about this topic on our blog."
      }]]></description>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>${CONFIG.profile.email} (${
        CONFIG.profile.name || "Agentic AI Labs"
      })</author>
      <category>Technology</category>
      <category>AI</category>
      <category>Agents</category>
    </item>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Agentic AI Labs Blog</title>
    <description>Latest insights on AI agents, automation, and production deployments</description>
    <link>${baseUrl}/blog</link>
    <language>en-US</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/api/feed.xml" rel="self" type="application/rss+xml"/>
    <generator>Agentic AI Labs</generator>
    <webMaster>${CONFIG.profile.email} (Agentic AI Labs)</webMaster>
    <managingEditor>${CONFIG.profile.email} (Agentic AI Labs)</managingEditor>
    <copyright>Copyright ${new Date().getFullYear()} Agentic AI Labs</copyright>
    <category>Technology</category>
    <ttl>60</ttl>
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>Agentic AI Labs</title>
      <link>${baseUrl}</link>
      <width>144</width>
      <height>144</height>
    </image>
    ${rssItems}
  </channel>
</rss>`;
}
