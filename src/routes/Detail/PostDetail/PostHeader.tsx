import { CONFIG } from "site.config";
import Tag from "src/components/Tag";
import { TPost } from "src/types";
import { formatDate } from "src/libs/utils";
import Image from "next/image";
import React from "react";

type Props = {
  data: TPost;
};

// Editorial post header matching the site theme: AlteHaas title, geist meta,
// brand tag chips, and a sharp-cornered cover that shows the full motif.
const PostHeader: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1 className="font-alte font-normal text-[28px] sm:text-[40px] leading-[1.1] tracking-[-0.04em] text-[#0A1128]">
        {data.title}
      </h1>
      {data.type[0] !== "Paper" && (
        <div className="mt-5">
          <div className="flex items-center gap-3 flex-wrap">
            {data.author && data.author[0] && data.author[0].name && (
              <>
                <div className="flex items-center gap-2">
                  <Image
                    className="rounded-full"
                    src={data.author[0].profile_photo || CONFIG.profile.image}
                    alt={data.author[0].name}
                    width={26}
                    height={26}
                  />
                  <span className="font-geist text-[12px] uppercase tracking-[0.02em] text-[#0A1128]">
                    {data.author[0].name}
                  </span>
                </div>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
              </>
            )}
            <span className="font-geist text-[12px] uppercase tracking-[0.02em] text-slate-400">
              {formatDate(
                data?.date?.start_date || data.createdTime,
                CONFIG.lang
              )}
            </span>
          </div>

          {data.tags && data.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {data.tags.map((tag: string) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}

          {data.thumbnail && (
            <div className="relative w-full aspect-[1200/750] mt-8 bg-[#F9F6F4] border border-[#e7e6e4] rounded-none overflow-hidden">
              <Image
                src={data.thumbnail}
                className="object-contain"
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                alt={data.title}
                unoptimized
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostHeader;
