import Link from "next/link";
import { useRouter } from "next/router";
import { useCountry } from "src/hooks/useCountry";
import { useState, useEffect, useRef } from "react";

type Props = {
  isMobile?: boolean;
  onLinkClick?: () => void;
};

type DropdownItem = { name: string; to: string; badge?: string; desc?: string };
type NavItem =
  | { type: "link"; id: number; name: string; to: string }
  | { type: "dropdown"; id: number; name: string; items: DropdownItem[] };

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const NavBar: React.FC<Props> = ({ isMobile = false, onLinkClick }) => {
  const router = useRouter();
  const { countryPrefix } = useCountry();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const currentPath = router.pathname.replace(/\/$/, "") || "/";

  const isActive = (to: string) =>
    currentPath === to.replace(/\/$/, "") || currentPath === to;

  const isGroupActive = (items: DropdownItem[]) =>
    items.some((i) => isActive(i.to));

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpenDropdown(null);
  }, [router.pathname]);

  const navItems: NavItem[] = [
    {
      type: "dropdown",
      id: 1,
      name: "Products",
      items: [
        { name: "AI Voice Agent", to: "/ai-voice-agent/", badge: "New", desc: "Calls answered. Follow-ups on WhatsApp." },
        { name: "AI Memory System", to: `${countryPrefix}/ai-memory-system/`, desc: "Memory that persists across every session." },
        { name: "AI Workshop", to: `${countryPrefix}/ai-clarity-workshop/`, desc: "One session. A clear AI roadmap for your business." },
      ],
    },
    { type: "link", id: 2, name: "Services", to: `${countryPrefix}/services/` },
    {
      type: "dropdown",
      id: 3,
      name: "Resources",
      items: [
        { name: "Blog", to: `${countryPrefix}/blog/`, desc: "Guides, case studies, and insights." },
        { name: "AI Agents Repo", to: `${countryPrefix}/agents-repo/`, desc: "Browse our library of pre-built AI agents." },
      ],
    },
    { type: "link", id: 4, name: "About", to: `${countryPrefix}/about/` },
  ];

  // ── MOBILE ──────────────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <nav className="w-full">
        <ul className="space-y-1">
          {navItems.map((item) => {
            if (item.type === "link") {
              return (
                <li key={item.id}>
                  <Link
                    href={item.to}
                    onClick={onLinkClick}
                    className={`flex items-center justify-between py-3 px-2 text-base font-medium rounded-lg transition-colors ${
                      isActive(item.to) ? "text-[#0A1128] font-semibold" : "text-gray-700 hover:text-[#0A1128]"
                    }`}
                  >
                    <span>{item.name}</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              );
            }

            const isOpen = openMobileGroup === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setOpenMobileGroup(isOpen ? null : item.id)}
                  className={`w-full flex items-center justify-between py-3 px-2 text-base font-medium rounded-lg transition-colors ${
                    isGroupActive(item.items) ? "text-[#0A1128] font-semibold" : "text-gray-700"
                  }`}
                >
                  <span>{item.name}</span>
                  <ChevronDown open={isOpen} />
                </button>
                {isOpen && (
                  <ul className="pl-4 pb-2 space-y-1">
                    {item.items.map((sub) => (
                      <li key={sub.to}>
                        <Link
                          href={sub.to}
                          onClick={onLinkClick}
                          className={`flex items-center justify-between py-2.5 px-2 text-sm rounded-lg transition-colors ${
                            isActive(sub.to) ? "text-[#0A1128] font-semibold" : "text-gray-600 hover:text-[#0A1128]"
                          }`}
                        >
                          <span>{sub.name}</span>
                          {sub.badge && (
                            <span className="text-[10px] font-bold bg-[#FCCA07] text-[#0A1128] px-2 py-0.5 rounded-full">{sub.badge}</span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  // ── DESKTOP ─────────────────────────────────────────────────────────────────
  return (
    <nav ref={navRef} className="flex">
      <ul className="flex items-center space-x-6">
        {navItems.map((item) => {
          if (item.type === "link") {
            return (
              <li key={item.id}>
                <Link
                  href={item.to}
                  onClick={onLinkClick}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    isActive(item.to) ? "text-white font-semibold" : "text-white/65"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          }

          const isOpen = openDropdown === item.id;
          const groupActive = isGroupActive(item.items);
          return (
            <li key={item.id} className="relative">
              <button
                onClick={() => setOpenDropdown(isOpen ? null : item.id)}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-white ${
                  groupActive ? "text-white font-semibold" : "text-white/65"
                }`}
              >
                {item.name}
                <ChevronDown open={isOpen} />
              </button>

              {isOpen && (
                <div className="absolute top-full left-0 mt-3 w-72 rounded-2xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.14)] border border-gray-100 overflow-hidden z-50">
                  {/* Triangle pointer */}
                  <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
                  <ul className="p-2">
                    {item.items.map((sub) => (
                      <li key={sub.to}>
                        <Link
                          href={sub.to}
                          onClick={() => { setOpenDropdown(null); onLinkClick?.(); }}
                          className={`flex items-center justify-between gap-3 px-3 py-3 rounded-xl transition-colors group hover:bg-gray-50 ${
                            isActive(sub.to) ? "bg-gray-50" : ""
                          }`}
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-[#0A1128] whitespace-nowrap">
                                {sub.name}
                              </span>
                              {sub.badge && (
                                <span className="text-[9px] font-bold bg-[#FCCA07] text-[#0A1128] px-1.5 py-0.5 rounded-full tracking-wide whitespace-nowrap">
                                  {sub.badge}
                                </span>
                              )}
                            </div>
                            {sub.desc && (
                              <p className="text-xs text-gray-400 mt-0.5 leading-snug">{sub.desc}</p>
                            )}
                          </div>
                          <svg className="w-3.5 h-3.5 text-gray-300 flex-shrink-0 group-hover:text-gray-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
