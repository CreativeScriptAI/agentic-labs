import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";
import { useCountry } from "src/hooks/useCountry";
import { CONFIG } from "site.config";

type LogoProps = {
  setIsMobileMenuOpen?: Dispatch<SetStateAction<boolean>>;
};

const Logo: React.FC<LogoProps> = ({ setIsMobileMenuOpen }) => {
  const { buildUrl } = useCountry();
  const homeLink = buildUrl("/");

  return (
    <Link
      href={homeLink}
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
