import React from "react";
import CategorySelect from "./CategorySelect";
import OrderButtons from "./OrderButtons";

type Props = Record<string, never>;

const FeedHeader: React.FC<Props> = () => {
  return (
    <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#e7e6e4]">
      <CategorySelect />
      <OrderButtons />
    </div>
  );
};

export default FeedHeader;
