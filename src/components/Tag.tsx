import { useRouter } from "next/router";
import React from "react";

type Props = {
  children: string;
};

const Tag: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  const handleClick = (value: string) => {
    router.push(`/?tag=${value}`);
  };
  return (
    <div
      onClick={() => handleClick(children)}
      className="py-1 px-2 rounded-none border border-[#e7e6e4] font-geist uppercase tracking-[0.02em] font-normal text-[12px] text-[#0A1128] bg-[#F9F6F4] cursor-pointer"
    >
      {children}
    </div>
  );
};

export default Tag;
