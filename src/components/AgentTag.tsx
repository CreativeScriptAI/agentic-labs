import React from "react";

type Props = {
  children: string;
  variant?: "primary" | "secondary" | "accent";
};

const AgentTag: React.FC<Props> = ({ children, variant = "primary" }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-[#F9F6F4] text-[#0A1128] border-[#e7e6e4]";
      case "secondary":
        return "bg-[#F9F6F4] text-blue-600 border-[#e7e6e4]";
      case "accent":
        return "bg-[#F9F6F4] text-emerald-600 border-[#e7e6e4]";
      default:
        return "bg-[#F9F6F4] text-[#0A1128] border-[#e7e6e4]";
    }
  };

  return (
    <div
      className={`inline-flex items-center px-3 py-1.5 rounded-none font-geist uppercase tracking-[0.02em] text-[12px] font-normal leading-4 transition-colors duration-200 cursor-default border ${getVariantClasses()}`}
    >
      {children}
    </div>
  );
};

export default AgentTag;
