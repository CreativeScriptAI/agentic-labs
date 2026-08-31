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

// One unified, compact card: thumbnail as a cover on the left (top on mobile),
// content on the right, inside a single bordered white container. Brand theme.
const PostCard: React.FC<Props> = ({ data }) => {
  const category = (data.category && data.category?.[0]) || undefined;

  return (
    <Link
      href={`/blog/${data.slug}/`}
      className="group flex flex-col sm:flex-row items-stretch mb-4 border border-[#e7e6e4] bg-white rounded-none overflow-hidden transition-colors duration-200 hover:border-[#FCCA07]"
    >
      {data.thumbnail && (
        <div className="relative w-full sm:w-[300px] lg:w-[330px] sm:flex-shrink-0 aspect-[1200/630] sm:aspect-auto sm:self-stretch bg-[#F9F6F4] border-b sm:border-b-0 sm:border-r border-[#e7e6e4] overflow-hidden">
          <Image
            src={data.thumbnail}
            fill
            alt={data.title}
            sizes="(max-width: 640px) 100vw, 330px"
            className="object-contain"
            unoptimized
          />
        </div>
      )}
      <div className="flex-1 min-w-0 p-5 sm:p-6 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-3">
          {category && <Category readOnly>{category}</Category>}
          <span className="font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400">
            {formatDate(data?.date?.start_date || data.createdTime, CONFIG.lang)}
          </span>
        </div>
        <h2 className="font-alte text-[18px] sm:text-[20px] leading-[1.2] tracking-[-0.04em] text-[#0A1128] group-hover:text-blue-600 transition-colors">
          {data.title}
        </h2>
        {data.summary && (
          <p className="mt-2 font-alte text-[14px] leading-[1.55] tracking-[-0.02em] text-slate-600 line-clamp-2">
            {data.summary}
          </p>
        )}
        {data.tags && data.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
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
