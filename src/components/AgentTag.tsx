import React from "react";

type Props = {
  children: string;
  variant?: "primary" | "secondary" | "accent";
};

const AgentTag: React.FC<Props> = ({ children, variant = "primary" }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-gray6 text-gray12 border-gray8";
      case "secondary":
        return "bg-sky-100 text-sky-700 border-sky-500 dark:bg-sky-900 dark:text-sky-300 dark:border-sky-600";
      case "accent":
        return "bg-green-50 text-green-700 border-green-500 dark:bg-green-900 dark:text-green-300 dark:border-green-600";
      default:
        return "bg-gray6 text-gray12 border-gray8";
    }
  };

  return (
    <div
      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium leading-4 transition-all duration-200 cursor-default border hover:-translate-y-0.5 hover:shadow-md ${getVariantClasses()}`}
    >
      {children}
    </div>
  );
};

export default AgentTag;
