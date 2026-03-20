import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";
import { CONFIG } from "site.config";

type LogoProps = {
  setIsMobileMenuOpen?: Dispatch<SetStateAction<boolean>>;
};

const Logo: React.FC<LogoProps> = ({ setIsMobileMenuOpen }) => {
  return (
    <Link
      href="/"
      aria-label={CONFIG.blog.title}
      className="text-[24px] font-bold text-blue-600 font-mondwest hover:text-blue-700 transition-colors"
      onClick={() => {
        if (setIsMobileMenuOpen) setIsMobileMenuOpen(false);
      }}
    >
      {CONFIG.blog.title}
    </Link>
  );
};

export default Logo;
