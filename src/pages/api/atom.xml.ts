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
    res.setHeader("Content-Type", "application/atom+xml; charset=utf-8");
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

    // Generate Atom XML
    const baseUrl = "https://www.tryagentikai.com";
    const atomXml = generateAtomXml(publicPosts, baseUrl);

    res.status(200).end(atomXml);
  } catch (error) {
    console.error("Error generating Atom feed:", error);
    res.status(500).json({ error: "Error generating Atom feed" });
  }
}

function generateAtomXml(posts: any[], baseUrl: string) {
  const now = new Date().toISOString();
  const updated =
    posts.length > 0
      ? new Date(
          posts[0].date?.start_date || posts[0].createdTime
        ).toISOString()
      : now;

  const atomEntries = posts
    .slice(0, 20) // Limit to latest 20 posts
    .map((post) => {
      const postDate = new Date(
        post.date?.start_date || post.createdTime
      ).toISOString();
      const postUrl = `${baseUrl}/blog/${post.slug}`;

      return `
    <entry>
      <title type="html"><![CDATA[${post.title || "Untitled"}]]></title>
      <link href="${postUrl}" rel="alternate" type="text/html"/>
      <id>${postUrl}</id>
      <published>${postDate}</published>
      <updated>${postDate}</updated>
      <author>
        <name>${CONFIG.profile.name || "Agentic AI Labs"}</name>
        <email>${CONFIG.profile.email}</email>
      </author>
      <summary type="html"><![CDATA[${
        post.summary ||
        post.description ||
        "Read more about this topic on our blog."
      }]]></summary>
      <category term="Technology"/>
      <category term="AI"/>
      <category term="Agents"/>
    </entry>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Agentic AI Labs Blog</title>
  <subtitle>Latest insights on AI agents, automation, and production deployments</subtitle>
  <link href="${baseUrl}/blog" rel="alternate" type="text/html"/>
  <link href="${baseUrl}/api/atom.xml" rel="self" type="application/atom+xml"/>
  <id>${baseUrl}/</id>
  <updated>${updated}</updated>
  <generator uri="${baseUrl}" version="1.0">Agentic AI Labs</generator>
  <author>
    <name>Agentic AI Labs</name>
    <email>${CONFIG.profile.email}</email>
    <uri>${baseUrl}</uri>
  </author>
  <icon>${baseUrl}/favicon.ico</icon>
  <logo>${baseUrl}/logo.png</logo>
  <rights>Copyright ${new Date().getFullYear()} Agentic AI Labs</rights>
  ${atomEntries}
</feed>`;
}
