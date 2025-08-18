import { CONFIG } from "site.config";
import React from "react";

const d = new Date();
const y = d.getFullYear();
const from = +CONFIG.since;

type Props = {
  className?: string;
};

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <a
        href={`https://github.com/${CONFIG.profile.github}`}
        target="_blank"
        rel="noreferrer"
        className="mt-3 text-sm leading-5 text-gray-600 bg-stone-50 inline-block"
      >
        © {CONFIG.profile.name} {from === y || !from ? y : `${from} - ${y}`}
      </a>
    </div>
  );
};

export default Footer;
