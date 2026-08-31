import useDropdown from "src/hooks/useDropdown";
import { useRouter } from "next/router";
import React from "react";
import { MdExpandMore } from "react-icons/md";
import { DEFAULT_CATEGORY } from "src/constants";
import { useCategoriesQuery } from "src/hooks/useCategoriesQuery";

type Props = Record<string, never>;

const CategorySelect: React.FC<Props> = () => {
  const router = useRouter();
  const data = useCategoriesQuery();
  const [dropdownRef, opened, handleOpen] = useDropdown();

  const currentCategory = `${router.query.category || ``}` || DEFAULT_CATEGORY;

  const handleOptionClick = (category: string) => {
    router.push({
      query: {
        ...router.query,
        category,
      },
    });
  };
  return (
    <div className="relative">
      <div
        ref={dropdownRef}
        onClick={handleOpen}
        className="flex items-center gap-1 my-2 cursor-pointer font-alte text-[22px] sm:text-[26px] tracking-[-0.04em] text-[#0A1128]"
      >
        {currentCategory.replace(/^[^\p{L}\p{N}]+/u, "")} Posts <MdExpandMore />
      </div>
      {opened && (
        <div className="absolute z-40 mt-1 p-1 bg-white border border-[#e7e6e4] rounded-none shadow-[0_10px_30px_-12px_rgba(10,17,40,0.25)]">
          {Object.keys(data).map((key, idx) => (
            <div
              className="px-3 py-1.5 rounded-none whitespace-nowrap cursor-pointer font-geist text-[12px] uppercase tracking-[0.02em] text-slate-600 hover:bg-[#F9F6F4] hover:text-[#0A1128]"
              key={idx}
              onClick={() => handleOptionClick(key)}
            >
              {`${key} (${data[key]})`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorySelect;
