import { useRouter } from "next/router";
import React from "react";

type TOrder = "asc" | "desc";

type Props = Record<string, never>;

const OrderButtons: React.FC<Props> = () => {
  const router = useRouter();

  const currentOrder = `${router.query.order || ``}` || ("desc" as TOrder);

  const handleClickOrderBy = (value: TOrder) => {
    router.push({
      query: {
        ...router.query,
        order: value,
      },
    });
  };

  const base =
    "cursor-pointer font-geist text-[11px] uppercase tracking-[0.02em] pb-0.5 border-b-2 transition-colors";
  return (
    <div className="flex gap-4">
      {(["desc", "asc"] as TOrder[]).map((v) => (
        <a
          key={v}
          onClick={() => handleClickOrderBy(v)}
          className={`${base} ${
            currentOrder === v
              ? "text-[#0A1128] border-[#FCCA07]"
              : "text-slate-400 border-transparent hover:text-[#0A1128]"
          }`}
        >
          {v === "desc" ? "Newest" : "Oldest"}
        </a>
      ))}
    </div>
  );
};

export default OrderButtons;
