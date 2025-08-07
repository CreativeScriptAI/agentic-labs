import Link from "next/link";
import { CONFIG } from "site.config";

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label={CONFIG.blog.title}
      className="text-[24px] font-bold text-blue-600 font-mondwest hover:text-blue-700 transition-colors"
    >
      {CONFIG.blog.title}
    </Link>
  );
};

export default Logo;
