import { useRouter } from "next/router";
import React from "react";

type Props = {
  children: string;
  readOnly?: boolean;
};

// Brand eyebrow-style category chip: yellow dot + uppercase geist label on a
// white, sharp-cornered chip. Matches the site's Eyebrow component.
const Category: React.FC<Props> = ({ readOnly = false, children }) => {
  const router = useRouter();

  const handleClick = (value: string) => {
    if (readOnly) return;
    router.push(`/?category=${value}`);
  };
  return (
    <span
      onClick={() => handleClick(children)}
      className={`inline-flex items-center gap-1.5 py-1 px-2.5 rounded-none w-fit border border-[#e7e6e4] bg-white font-geist uppercase tracking-[0.02em] text-[11px] text-[#0A1128] ${
        readOnly ? "cursor-default" : "cursor-pointer"
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07] flex-shrink-0" />
      {children}
    </span>
  );
};

export default Category;
