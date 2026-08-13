import type { NextApiRequest, NextApiResponse } from "next";
import { findProgrammaticPageByPath } from "src/data/programmaticSeoPages";
import { pageToMarkdown } from "src/libs/pageMarkdown";

// Serves the markdown representation of a programmatic page. Reached two ways:
// 1. Directly at /api/md/<slug> (and via the pretty /<slug>.md rewrite in middleware).
// 2. Via content negotiation: middleware rewrites a normal page request here when
//    the client sends Accept: text/markdown.
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const slugParam = req.query.slug;
  const parts = Array.isArray(slugParam) ? slugParam : slugParam ? [slugParam] : [];
  // Tolerate a trailing .md on the last segment (from the /<slug>.md rewrite).
  if (parts.length) parts[parts.length - 1] = parts[parts.length - 1].replace(/\.md$/, "");

  const page = findProgrammaticPageByPath(parts);
  if (!page) {
    res.status(404).setHeader("Content-Type", "text/plain; charset=utf-8").send("Not found");
    return;
  }

  res.setHeader("Content-Type", "text/markdown; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800");
  res.status(200).send(pageToMarkdown(page));
}
