import Link from "next/link";
import { CONFIG } from "site.config";
import { formatDate } from "src/libs/utils";
import Tag from "../../../components/Tag";
import { TPost } from "../../../types";
import Category from "../../../components/Category";

type Props = {
  data: TPost;
};

// Editorial, typography-led entry: thin divider between posts (no nested boxes),
// generous spacing, title as the hero. Clean and on-brand, not blocky.
const PostCard: React.FC<Props> = ({ data }) => {
  const category = (data.category && data.category?.[0]) || undefined;

  return (
    <Link
      href={`/blog/${data.slug}/`}
      className="group block py-7 sm:py-8 border-b border-[#e7e6e4] last:border-b-0"
    >
      <div className="flex items-center gap-3 mb-3">
        {category && <Category readOnly>{category}</Category>}
        <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400">
          {formatDate(data?.date?.start_date || data.createdTime, CONFIG.lang)}
        </span>
      </div>
      <h2 className="font-alte text-[22px] sm:text-[28px] leading-[1.15] tracking-[-0.04em] text-[#0A1128] group-hover:text-blue-600 transition-colors max-w-3xl">
        {data.title}
      </h2>
      {data.summary && (
        <p className="mt-3 font-alte text-[15px] sm:text-[16px] leading-[1.6] tracking-[-0.02em] text-slate-600 line-clamp-2 max-w-2xl">
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
    </Link>
  );
};

export default PostCard;
