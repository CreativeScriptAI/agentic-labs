import { useRouter } from "next/router";
import React from "react";
import { useTagsQuery } from "src/hooks/useTagsQuery";

type Props = Record<string, never>;

const TagList: React.FC<Props> = () => {
  const router = useRouter();
  const currentTag = router.query.tag || undefined;
  const data = useTagsQuery();

  const handleClickTag = (value: string) => {
    if (currentTag === value) {
      router.push({ query: { ...router.query, tag: undefined } });
    } else {
      router.push({ query: { ...router.query, tag: value } });
    }
  };

  return (
    <div>
      <p className="hidden lg:flex items-center gap-2 mb-4 font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07] flex-shrink-0" />
        Tags
      </p>
      <div className="flex lg:block gap-2 mb-6 overflow-x-auto lg:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {Object.keys(data).map((key) => {
          const active = key === currentTag;
          return (
            <a
              key={key}
              onClick={() => handleClickTag(key)}
              className={`flex-shrink-0 block lg:mb-1.5 px-3 py-1.5 rounded-none border cursor-pointer font-geist text-[12px] uppercase tracking-[0.02em] transition-colors ${
                active
                  ? "bg-[#0A1128] text-white border-[#0A1128]"
                  : "bg-white text-slate-500 border-[#e7e6e4] hover:border-[#FCCA07] hover:text-[#0A1128]"
              }`}
            >
              {key}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default TagList;
