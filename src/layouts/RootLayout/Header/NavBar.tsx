import Link from "next/link";
import { useRouter } from "next/router";
import { useCountry } from "src/hooks/useCountry";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  isMobile?: boolean;
  onLinkClick?: () => void;
};

type NavLink = { name: string; to: string; desc?: string };
type LinkGroup = { label: string; links: NavLink[] };

// ─── IA v2 data — outcome-first, hero-led (see Information Architecture Research) ──────────

// The one hero. Featured at the top of the Solutions panel. Brand name "AI Sales Agent",
// pointed at the existing /ai-voice-agent/ page (kept as the canonical hero for now).
const HERO = {
  name: "AI Sales Agent",
  to: "/ai-voice-agent/",
  tagline: "One system, every channel — answers, qualifies & books every inbound lead.",
};

// Lens A — By Outcome / job-to-be-done (PRIMARY lens). Mapped to the closest existing pages.
const BY_OUTCOME: NavLink[] = [
  { name: "Answer, qualify & book every lead", to: "/ai-voice-agent/" },
  { name: "Never miss a call", to: "/ai-for-missed-calls/" },
  { name: "Recover no-shows & remind", to: "/ai-show-up-agent-for-online-coaching/" },
  { name: "Confirm COD orders", to: "/ai-cod-confirmation-agent/" },
  { name: "Done-for-you setup", to: "/done-for-you-ai-voice-agent/" },
];

// Lens B — By Industry (the role-hats of the one hero).
const BY_INDUSTRY: LinkGroup[] = [
  {
    label: "Healthcare",
    links: [
      { name: "Dental Clinics", to: "/ai-receptionist-for-dental-clinic/" },
      { name: "Dental Practices", to: "/ai-receptionist-for-dental-practices/" },
      { name: "Medical Clinics", to: "/ai-receptionist-for-medical-clinics/" },
      { name: "Med Spas", to: "/ai-receptionist-for-med-spa/" },
      { name: "Diagnostic Labs", to: "/ai-for-diagnostic-lab/" },
    ],
  },
  {
    label: "Hospitality & Local",
    links: [
      { name: "Restaurants", to: "/ai-receptionist-for-restaurant/" },
      { name: "Salons", to: "/ai-booking-agent-for-salon/" },
      { name: "Travel Agencies", to: "/ai-booking-agent-for-travel-agencies/" },
      { name: "Gym & Fitness", to: "/ai-for-gym-fitness/" },
    ],
  },
  {
    label: "Home & Field Services",
    links: [
      { name: "Home Services", to: "/ai-dispatch-agent-for-home-services/" },
      { name: "Pest Control", to: "/ai-for-pest-control/" },
    ],
  },
  {
    label: "Real Estate",
    links: [
      { name: "Showing Coordinator", to: "/ai-showing-coordinator-for-real-estate/" },
    ],
  },
  {
    label: "Sales & Agencies",
    links: [
      { name: "GHL Agencies (SDR)", to: "/ai-sdr-for-ghl-agencies/" },
      { name: "eCommerce Support", to: "/ai-support-rep-for-ecommerce/" },
    ],
  },
  {
    label: "Coaching & Education",
    links: [
      { name: "Coaching Institutes", to: "/ai-for-coaching-institute/" },
      { name: "Online Coaching", to: "/ai-show-up-agent-for-online-coaching/" },
      { name: "Immigration Consultants", to: "/ai-for-immigration-consultant/" },
    ],
  },
  {
    label: "Hiring & Recruiting",
    links: [
      { name: "Recruiting Agencies", to: "/ai-interviewer-for-recruiting-agencies/" },
      { name: "Blue-Collar Hiring", to: "/ai-interviewer-for-blue-collar-hiring/" },
    ],
  },
];

// Compare — first-class branch for bottom-funnel intent.
const COMPARE_ALTERNATIVES: NavLink[] = [
  { name: "vs Vapi", to: "/vapi-alternative/" },
  { name: "vs Retell AI", to: "/retell-ai-alternative/" },
  { name: "vs Bland AI", to: "/bland-ai-alternative/" },
  { name: "vs GoHighLevel calling", to: "/gohighlevel-ai-calling-alternative/" },
  { name: "vs GHL AI chatbot", to: "/ghl-ai-chatbot-alternative/" },
  { name: "AI vs human receptionist", to: "/ai-vs-human-receptionist/" },
];
const COMPARE_ROUNDUPS: NavLink[] = [
  { name: "Best AI for dental practices", to: "/best-ai-tools-for-dental-practices/" },
  { name: "Best AI voice agents", to: "/best-ai-voice-agents-for-business/" },
  { name: "Best AI for GoHighLevel", to: "/best-ai-for-gohighlevel-agencies/" },
  { name: "Best AI for recruiting", to: "/best-ai-tools-for-recruiting-agencies/" },
];

// Resources — the authority layer.
const RESOURCES: NavLink[] = [
  { name: "Blog", to: "/blog/", desc: "Guides, case studies, and insights." },
  { name: "AI Agents Repo", to: "/agents-repo/", desc: "Browse our library of pre-built AI agents." },
  { name: "Why our agents remember", to: "/ai-memory-system/", desc: "The memory system behind production-grade AI." },
  { name: "Glossary: What is Agentic AI?", to: "/glossary/what-is-agentic-ai/", desc: "Plain-English definitions." },
];

// ─── Icons ─────────────────────────────────────────────────────────────────────

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ─── Component ─────────────────────────────────────────────────────────────────

// Top-level nav item ids
const NAV = {
  SOLUTIONS: 1,
  COMPARE: 2,
  RESOURCES: 3,
} as const;

const NavBar: React.FC<Props> = ({ isMobile = false, onLinkClick }) => {
  const router = useRouter();
  const { countryPrefix } = useCountry();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  // The Solutions mega-panel is portal'd to <body> (see below), so it lives outside
  // navRef — track it separately for the outside-click check.
  const panelRef = useRef<HTMLDivElement>(null);

  const currentPath = router.pathname.replace(/\/$/, "") || "/";
  const isActive = (to: string) =>
    currentPath === to.replace(/\/$/, "") || currentPath === to;
  const anyActive = (links: NavLink[]) => links.some((l) => isActive(l.to));

  // Flat industry list — the redesigned panel drops per-sector micro-headers for a
  // cleaner, ManyChat/Notion-style list. Shared by mobile + desktop.
  const allIndustries = BY_INDUSTRY.flatMap((g) => g.links);

  // Portals need the DOM — only render them after mount (avoids SSR mismatch).
  useEffect(() => setMounted(true), []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const t = e.target as Node;
      const insideNav = navRef.current?.contains(t);
      const insidePanel = panelRef.current?.contains(t);
      if (!insideNav && !insidePanel) {
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

  const close = () => {
    setOpenDropdown(null);
    onLinkClick?.();
  };

  // ── MOBILE ────────────────────────────────────────────────────────────────────
  if (isMobile) {
    const toggleGroup = (id: number) =>
      setOpenMobileGroup(openMobileGroup === id ? null : id);

    return (
      <nav className="w-full">
        <ul className="space-y-1">
          {/* Solutions */}
          <li>
            <button
              onClick={() => toggleGroup(NAV.SOLUTIONS)}
              className="w-full flex items-center justify-between py-3 px-2 text-base font-medium text-gray-700 rounded-lg"
            >
              <span>Solutions</span>
              <ChevronDown open={openMobileGroup === NAV.SOLUTIONS} />
            </button>
            {openMobileGroup === NAV.SOLUTIONS && (
              <div className="pl-2 pb-3 space-y-5">
                {/* Featured hero */}
                <Link
                  href={HERO.to}
                  onClick={onLinkClick}
                  className="block rounded-2xl bg-[#0A1128] text-white px-4 py-4"
                >
                  <span className="flex items-center gap-2 text-base font-semibold">
                    {HERO.name}
                    <span className="text-[10px] font-bold bg-[#FCCA07] text-[#0A1128] px-2 py-0.5 rounded-full">Flagship</span>
                  </span>
                  <span className="block text-sm text-gray-300/90 mt-1.5 leading-relaxed">{HERO.tagline}</span>
                </Link>

                {/* By Outcome */}
                <div>
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.14em] mb-2 px-2">By Outcome</p>
                  <ul className="space-y-0.5">
                    {BY_OUTCOME.map((l) => (
                      <li key={l.name}>
                        <Link href={l.to} onClick={onLinkClick} className="block py-2.5 px-2 text-[15px] font-medium text-gray-800 hover:text-[#0062FF] rounded-lg">{l.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* By Industry — flat list, no nested accordions */}
                <div>
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.14em] mb-2 px-2">By Industry</p>
                  <ul className="space-y-0.5">
                    {allIndustries.map((l) => (
                      <li key={l.to}>
                        <Link href={l.to} onClick={onLinkClick} className="block py-2.5 px-2 text-[15px] text-gray-700 hover:text-[#0062FF] rounded-lg">{l.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>

          {/* Compare */}
          <li>
            <button
              onClick={() => toggleGroup(NAV.COMPARE)}
              className="w-full flex items-center justify-between py-3 px-2 text-base font-medium text-gray-700 rounded-lg"
            >
              <span>Compare</span>
              <ChevronDown open={openMobileGroup === NAV.COMPARE} />
            </button>
            {openMobileGroup === NAV.COMPARE && (
              <div className="pl-2 pb-3 space-y-3">
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 px-2">Alternatives</p>
                  <ul className="space-y-0.5">
                    {COMPARE_ALTERNATIVES.map((l) => (
                      <li key={l.to}><Link href={l.to} onClick={onLinkClick} className="block py-2 px-2 text-sm text-gray-600 hover:text-[#0062FF] rounded-lg">{l.name}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 px-2">Best-of roundups</p>
                  <ul className="space-y-0.5">
                    {COMPARE_ROUNDUPS.map((l) => (
                      <li key={l.to}><Link href={l.to} onClick={onLinkClick} className="block py-2 px-2 text-sm text-gray-600 hover:text-[#0062FF] rounded-lg">{l.name}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>

          {/* Resources */}
          <li>
            <button
              onClick={() => toggleGroup(NAV.RESOURCES)}
              className="w-full flex items-center justify-between py-3 px-2 text-base font-medium text-gray-700 rounded-lg"
            >
              <span>Resources</span>
              <ChevronDown open={openMobileGroup === NAV.RESOURCES} />
            </button>
            {openMobileGroup === NAV.RESOURCES && (
              <ul className="pl-4 pb-2 space-y-1">
                {RESOURCES.map((l) => (
                  <li key={l.to}><Link href={l.to} onClick={onLinkClick} className="block py-2.5 px-2 text-sm text-gray-600 hover:text-[#0062FF] rounded-lg">{l.name}</Link></li>
                ))}
              </ul>
            )}
          </li>

          {/* Services */}
          <li>
            <Link
              href={`${countryPrefix}/services/`}
              onClick={onLinkClick}
              className={`flex items-center justify-between py-3 px-2 text-base font-medium rounded-lg ${isActive("/services/") ? "text-[#0A1128] font-semibold" : "text-gray-700 hover:text-[#0A1128]"}`}
            >
              <span>Services</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </li>

          {/* About */}
          <li>
            <Link
              href={`${countryPrefix}/about/`}
              onClick={onLinkClick}
              className={`flex items-center justify-between py-3 px-2 text-base font-medium rounded-lg ${isActive("/about/") ? "text-[#0A1128] font-semibold" : "text-gray-700 hover:text-[#0A1128]"}`}
            >
              <span>About</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  // ── DESKTOP ───────────────────────────────────────────────────────────────────
  const toggle = (id: number) => setOpenDropdown(openDropdown === id ? null : id);

  // shared trigger button styling
  const triggerClass = (active: boolean, open: boolean) =>
    `flex items-center gap-1.5 text-sm font-medium transition-colors ${
      active || open ? "text-[#0A1128] font-semibold" : "text-gray-500 hover:text-[#0A1128]"
    }`;

  // Split the flat industry list into two balanced columns for the desktop panel.
  const industryColSize = Math.ceil(allIndustries.length / 2);
  const industryCols = [
    allIndustries.slice(0, industryColSize),
    allIndustries.slice(industryColSize),
  ];

  const solutionsActive = anyActive([...BY_OUTCOME, ...allIndustries, { name: "", to: HERO.to }]);
  const compareActive = anyActive([...COMPARE_ALTERNATIVES, ...COMPARE_ROUNDUPS]);
  const resourcesActive = anyActive(RESOURCES);

  return (
    <nav ref={navRef} className="flex">
      <ul className="flex items-center space-x-6">
        {/* ── Solutions (mega-menu) ── */}
        <li className="relative">
          <button onClick={() => toggle(NAV.SOLUTIONS)} className={triggerClass(solutionsActive, openDropdown === NAV.SOLUTIONS)}>
            Solutions
            <ChevronDown open={openDropdown === NAV.SOLUTIONS} />
          </button>
          {/* Portal to <body> so the pill's backdrop-filter doesn't trap the fixed panel */}
          {mounted && createPortal(
            <AnimatePresence>
            {openDropdown === NAV.SOLUTIONS && (
              <motion.div
                ref={panelRef}
                key="solutions-mega"
                // x:"-50%" must live in the motion transform — framer-motion writes inline
                // `transform`, which overrides any Tailwind `-translate-x-1/2` class.
                initial={{ opacity: 0, x: "-50%", y: -6 }}
                animate={{ opacity: 1, x: "-50%", y: 0 }}
                exit={{ opacity: 0, x: "-50%", y: -6 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="fixed left-1/2 top-[88px] z-[200] bg-white rounded-[20px] border border-gray-100 shadow-[0_20px_64px_rgba(0,0,0,0.16)] overflow-hidden"
                style={{ width: "min(960px, calc(100vw - 48px))" }}
              >
                <div className="flex">
                  {/* Featured hero — left rail */}
                  <div className="w-[260px] shrink-0 bg-[#0A1128] p-8 flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-[10px] font-bold tracking-wider bg-[#FCCA07] text-[#0A1128] px-2.5 py-1 rounded-full mb-5">FLAGSHIP</span>
                      <Link href={HERO.to} onClick={close} className="block text-2xl font-semibold text-white leading-tight hover:text-[#FCCA07] transition-colors">
                        {HERO.name}
                      </Link>
                      <p className="text-sm text-gray-300/90 mt-3 leading-relaxed">{HERO.tagline}</p>
                    </div>
                    <Link href={HERO.to} onClick={close} className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FCCA07] hover:gap-2.5 transition-all">
                      See the agent →
                    </Link>
                  </div>

                  {/* Right content — two clean lenses, big type, generous spacing */}
                  <div className="flex-1 flex gap-10 p-9">
                    {/* By Outcome */}
                    <div className="shrink-0">
                      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.14em] mb-5">By Outcome</p>
                      <ul className="space-y-4">
                        {BY_OUTCOME.map((l) => (
                          <li key={l.name}>
                            <Link href={l.to} onClick={close} className={`text-[15px] leading-snug block transition-colors ${isActive(l.to) ? "text-[#0062FF] font-semibold" : "text-gray-800 font-medium hover:text-[#0062FF]"}`}>{l.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* By Industry — flat two-column list, no sub-headers */}
                    <div className="flex-1 pl-10 border-l border-gray-100">
                      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.14em] mb-5">By Industry</p>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        {industryCols.map((col, ci) => (
                          <ul key={ci} className="space-y-4">
                            {col.map((l) => (
                              <li key={l.to}>
                                <Link href={l.to} onClick={close} className={`text-[15px] leading-snug block transition-colors ${isActive(l.to) ? "text-[#0062FF] font-semibold" : "text-gray-700 hover:text-[#0062FF]"}`}>{l.name}</Link>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            </AnimatePresence>,
            document.body
          )}
        </li>

        {/* ── Compare (dropdown) ── */}
        <li className="relative">
          <button onClick={() => toggle(NAV.COMPARE)} className={triggerClass(compareActive, openDropdown === NAV.COMPARE)}>
            Compare
            <ChevronDown open={openDropdown === NAV.COMPARE} />
          </button>
          {openDropdown === NAV.COMPARE && (
            <div className="absolute top-full left-0 mt-3 rounded-2xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.14)] border border-gray-100 z-50 p-5" style={{ width: "max-content", minWidth: "480px" }}>
              <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
              <div className="grid grid-cols-2 gap-x-8">
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Alternatives</p>
                  <ul className="space-y-2">
                    {COMPARE_ALTERNATIVES.map((l) => (
                      <li key={l.to}><Link href={l.to} onClick={close} className={`text-sm block ${isActive(l.to) ? "text-[#0062FF] font-medium" : "text-gray-600 hover:text-[#0062FF]"}`}>{l.name}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Best-of roundups</p>
                  <ul className="space-y-2">
                    {COMPARE_ROUNDUPS.map((l) => (
                      <li key={l.to}><Link href={l.to} onClick={close} className={`text-sm block ${isActive(l.to) ? "text-[#0062FF] font-medium" : "text-gray-600 hover:text-[#0062FF]"}`}>{l.name}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* ── Resources (dropdown) ── */}
        <li className="relative">
          <button onClick={() => toggle(NAV.RESOURCES)} className={triggerClass(resourcesActive, openDropdown === NAV.RESOURCES)}>
            Resources
            <ChevronDown open={openDropdown === NAV.RESOURCES} />
          </button>
          {openDropdown === NAV.RESOURCES && (
            <div className="absolute top-full left-0 mt-3 rounded-2xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.14)] border border-gray-100 z-50" style={{ width: "max-content", minWidth: "280px", maxWidth: "340px" }}>
              <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
              <ul className="p-2">
                {RESOURCES.map((l) => (
                  <li key={l.to}>
                    <Link href={l.to} onClick={close} className={`block px-3 py-3 rounded-xl transition-colors hover:bg-gray-50 ${isActive(l.to) ? "bg-gray-50" : ""}`}>
                      <span className="text-sm font-semibold text-[#0A1128] block" style={{ whiteSpace: "nowrap" }}>{l.name}</span>
                      {l.desc && <p className="text-xs text-gray-400 leading-snug mt-0.5">{l.desc}</p>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>

        {/* ── Services (link) ── */}
        <li>
          <Link href={`${countryPrefix}/services/`} onClick={onLinkClick} className={`text-sm font-medium transition-colors ${isActive("/services/") ? "text-[#0A1128] font-semibold" : "text-gray-500 hover:text-[#0A1128]"}`}>
            Services
          </Link>
        </li>

        {/* ── About (link) ── */}
        <li>
          <Link href={`${countryPrefix}/about/`} onClick={onLinkClick} className={`text-sm font-medium transition-colors ${isActive("/about/") ? "text-[#0A1128] font-semibold" : "text-gray-500 hover:text-[#0A1128]"}`}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
