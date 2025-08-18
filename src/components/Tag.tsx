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
      className="py-1 px-2 rounded-full text-xs font-normal text-gray10 bg-gray5 cursor-pointer"
    >
      {children}
    </div>
  );
};

export default Tag;
