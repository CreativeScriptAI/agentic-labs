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

// Brand-themed post card: white on cream, sharp corners, #e7e6e4 border,
// yellow hover accent, AlteHaas title, geist meta. Same data as before.
const PostCard: React.FC<Props> = ({ data }) => {
  const category = (data.category && data.category?.[0]) || undefined;

  return (
    <Link
      href={`/blog/${data.slug}/`}
      className="group block mb-6 border border-[#e7e6e4] bg-white rounded-none overflow-hidden transition-colors duration-200 hover:border-[#FCCA07]"
    >
      <article>
        {data.thumbnail && (
          <div className="relative w-full aspect-[16/9] bg-[#efeee9] border-b border-[#e7e6e4] overflow-hidden">
            <Image
              src={data.thumbnail}
              fill
              alt={data.title}
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover"
              unoptimized
            />
          </div>
        )}
        <div className="p-6 sm:p-7">
          {category && (
            <div className="mb-4">
              <Category readOnly>{category}</Category>
            </div>
          )}
          <h2 className="font-alte text-[20px] sm:text-[24px] leading-[1.15] tracking-[-0.04em] text-[#0A1128] group-hover:text-blue-600 transition-colors">
            {data.title}
          </h2>
          <p className="mt-2 font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400">
            {formatDate(data?.date?.start_date || data.createdTime, CONFIG.lang)}
          </p>
          {data.summary && (
            <p className="mt-4 font-alte text-[15px] leading-[1.6] tracking-[-0.02em] text-slate-600 line-clamp-3">
              {data.summary}
            </p>
          )}
          {data.tags && data.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {data.tags.slice(0, 4).map((tag: string, idx: number) => (
                <Tag key={idx}>{tag}</Tag>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
