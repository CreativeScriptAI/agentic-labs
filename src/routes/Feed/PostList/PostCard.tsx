import Link from "next/link";
import { CONFIG } from "site.config";
import { formatDate } from "src/libs/utils";
import Tag from "../../../components/Tag";
import { TPost } from "../../../types";
import Image from "next/image";
import Category from "../../../components/Category";

type Props = {
  data: TPost;
};

// Editorial entry with a clean cover: thin divider between posts (no nested
// boxes), title-led content, and a minimal brand cover image (top on mobile,
// right on desktop). Cover is full-bleed abstract art, so object-cover is safe.
const PostCard: React.FC<Props> = ({ data }) => {
  const category = (data.category && data.category?.[0]) || undefined;

  return (
    <Link
      href={`/blog/${data.slug}/`}
      className="group flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8 py-7 sm:py-8 border-b border-[#e7e6e4] last:border-b-0"
    >
      {data.thumbnail && (
        <div className="relative w-full sm:w-[240px] lg:w-[280px] sm:flex-shrink-0 sm:order-2 aspect-[16/10] bg-[#F9F6F4] border border-[#e7e6e4] overflow-hidden">
          <Image
            src={data.thumbnail}
            fill
            alt={data.title}
            sizes="(max-width: 640px) 100vw, 280px"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            unoptimized
          />
        </div>
      )}
      <div className="flex-1 min-w-0 sm:order-1">
        <div className="flex items-center gap-3 mb-3">
          {category && <Category readOnly>{category}</Category>}
          <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400">
            {formatDate(data?.date?.start_date || data.createdTime, CONFIG.lang)}
          </span>
        </div>
        <h2 className="font-alte text-[22px] sm:text-[26px] leading-[1.15] tracking-[-0.04em] text-[#0A1128] group-hover:text-blue-600 transition-colors">
          {data.title}
        </h2>
        {data.summary && (
          <p className="mt-3 font-alte text-[15px] leading-[1.6] tracking-[-0.02em] text-slate-600 line-clamp-2">
            {data.summary}
          </p>
        )}
        {data.tags && data.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {data.tags.slice(0, 3).map((tag: string, idx: number) => (
              <Tag key={idx}>{tag}</Tag>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default PostCard;
