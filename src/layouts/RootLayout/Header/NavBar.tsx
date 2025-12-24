import Link from "next/link";
import { useRouter } from "next/router";
import { useCountry } from "src/hooks/useCountry";

type Props = {
  isMobile?: boolean;
  onLinkClick?: () => void;
};

const NavBar: React.FC<Props> = ({ isMobile = false, onLinkClick }) => {
  const router = useRouter();
  const { countryPrefix } = useCountry();

  // Normalize pathname for comparison (works with or without trailing slash)
  const currentPath = router.pathname.replace(/\/$/, "") || "/";

  const links = [
    { id: 1, name: "Blog", to: `${countryPrefix}/blog/` },
    { id: 2, name: "About", to: `${countryPrefix}/about/` },
    { id: 3, name: "Services", to: `${countryPrefix}/services/` },
    {
      id: 4,
      name: "AI Clarity Workshop",
      to: `${countryPrefix}/ai-clarity-workshop/`,
    },
    // { id: 4, name: "Contact", to: `${countryPrefix}/contact/` },
  ];

  if (isMobile) {
    return (
      <nav className="w-full">
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.to}
                className="flex items-center justify-between py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors active:text-blue-600"
                onClick={(e) => {
                  // Ensure menu closes on navigation
                  if (onLinkClick) {
                    onLinkClick();
                  }
                }}
              >
                <span>{link.name}</span>
                <svg
                  className="w-5 h-5 text-gray-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav className="flex">
      <ul className="flex items-center space-x-8">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.to}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                currentPath === link.to.replace(/\/$/, "") ||
                currentPath === link.to
                  ? "text-blue-600 font-semibold"
                  : "text-[#475569] dark:text-gray-200"
              }`}
              onClick={onLinkClick}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
