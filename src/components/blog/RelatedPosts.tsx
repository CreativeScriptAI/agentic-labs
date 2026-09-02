import React from "react";
import Link from "next/link";
import usePostQuery from "src/hooks/usePostQuery";
import usePostsQuery from "src/hooks/usePostsQuery";

// Blog-to-blog cluster. Each post links to a few sibling posts (same category
// first, then most recent), so the blog is an interlinked cluster instead of a
// set of dead-end pages. This gives every post inbound in-body links from its
// siblings, which is what the SEO audit calls for.

const RelatedPosts: React.FC = () => {
  const current = usePostQuery();
  const posts = usePostsQuery();

  if (!current || !posts || posts.length === 0) return null;

  const currentSlug = current.slug;
  const currentCat = current.category?.[0];

  const pool = posts.filter(
    (p) => p.slug !== currentSlug && (p.type?.[0] ?? "Post") === "Post"
  );
  if (pool.length === 0) return null;

  const sameCat = currentCat
    ? pool.filter((p) => p.category?.[0] === currentCat)
    : [];
  const rest = pool.filter((p) => !sameCat.includes(p));
  const picks = [...sameCat, ...rest].slice(0, 3);
  if (picks.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-[#e7e6e4]">
      <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400 mb-4">
        Keep reading
      </p>
      <div className="grid grid-cols-1 gap-3">
        {picks.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}/`}
            className="block border border-[#e7e6e4] bg-[#F9F6F4] p-4 sm:p-5 hover:border-[#0A1128] transition-colors"
          >
            <p className="font-alte text-[16px] sm:text-[17px] tracking-[-0.03em] text-[#0A1128]">
              {p.title}
            </p>
            {p.summary ? (
              <p className="font-alte text-[14px] tracking-[-0.02em] leading-[1.5] text-slate-600 mt-1.5 line-clamp-2">
                {p.summary}
              </p>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
