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
  tagline: "One system across every channel that answers, qualifies, and books every inbound lead.",
};

// Hybrid flagship: a free tool people can use right now (top), then the agents
// and tools below. Live items link; the rest show a "soon" tag (no broken links).
const FLAGSHIP_TOOL = {
  name: "AI Visibility Checker",
  to: "/ai-visibility-checker/",
  tagline: "See if ChatGPT, Gemini, and Google AI name your business.",
};
const FLAGSHIP_MORE: { name: string; to?: string }[] = [
  { name: "AI Sales Agent, voice", to: "/ai-voice-agent/" },
  { name: "Social media agent" },
  { name: "Content agent" },
  { name: "Cost of Lost Leads calculator" },
];

// Lens A — By Outcome, grouped along the lead journey (capture, qualify, follow up, book).
// The flagship "answer, qualify & book" hero is the card on the left, so it is not
// duplicated here. Each stage leads with its pillar page, then its tactical spokes.
const BY_JOURNEY: LinkGroup[] = [
  {
    label: "1 · Get found & capture",
    links: [
      { name: "Lead generation in Singapore", to: "/lead-generation-agency-singapore/" },
      { name: "SEO agency in Singapore", to: "/seo-agency-singapore/" },
      { name: "B2B lead generation", to: "/b2b-lead-generation-singapore/" },
      { name: "Appointment setting", to: "/appointment-setting-singapore/" },
      { name: "AI automation partner", to: "/ai-automation-singapore/" },
      { name: "SEO packages & pricing", to: "/seo-packages-singapore/" },
      { name: "Local SEO services", to: "/local-seo-services-singapore/" },
      { name: "High converting landing pages", to: "/high-converting-landing-pages-singapore/" },
      { name: "Affordable web design", to: "/affordable-web-design-singapore/" },
      { name: "Ecommerce marketing", to: "/ecommerce-marketing-singapore/" },
    ],
  },
  {
    label: "2 · Qualify",
    links: [
      { name: "Qualify leads automatically", to: "/lead-qualification/" },
    ],
  },
  {
    label: "3 · Follow up",
    links: [
      { name: "Follow up until they reply", to: "/follow-up-automation/" },
      { name: "Never miss a call", to: "/ai-for-missed-calls/" },
      { name: "Recover no-shows & remind", to: "/ai-show-up-agent-for-online-coaching/" },
      { name: "WhatsApp Business API", to: "/whatsapp-business-api-singapore/" },
    ],
  },
  {
    label: "4 · Book & convert",
    links: [
      { name: "Book appointments automatically", to: "/appointment-booking-ai/" },
      { name: "Confirm COD orders", to: "/ai-cod-confirmation-agent/" },
      { name: "Done-for-you setup", to: "/done-for-you-ai-voice-agent/" },
      { name: "AI receptionist", to: "/ai-receptionist-singapore/" },
    ],
  },
];
const journeyLinks = BY_JOURNEY.flatMap((g) => g.links);

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
    label: "Hiring & Staffing",
    links: [
      { name: "Staffing Agencies", to: "/ai-interviewer-for-blue-collar-hiring/" },
    ],
  },
];

// Compare — first-class branch for bottom-funnel intent.
const COMPARE_ALTERNATIVES: NavLink[] = [
  { name: "vs Vapi", to: "/vapi-alternative/" },
  { name: "vs Retell AI", to: "/retell-ai-alternative/" },
  { name: "vs Bland AI", to: "/bland-ai-alternative/" },
  { name: "vs GoHighLevel calling", to: "/gohighlevel-ai-calling-alternative/" },
  { name: "AI vs human receptionist", to: "/ai-vs-human-receptionist/" },
];
const COMPARE_ROUNDUPS: NavLink[] = [
  { name: "Best AI for dental practices", to: "/best-ai-tools-for-dental-practices/" },
  { name: "Best AI voice agents", to: "/best-ai-voice-agents-for-business/" },
  { name: "Best AI for GoHighLevel", to: "/best-ai-for-gohighlevel-agencies/" },
];

// Resources — the authority layer.
const RESOURCES: NavLink[] = [
  { name: "Free AI Clarity Workshop", to: "/ai-clarity-workshop/", desc: "A free 30-minute session mapping where AI saves you time and money." },
  { name: "Answer Engine Optimization", to: "/answer-engine-optimization/", desc: "How to get named by ChatGPT, Perplexity, Gemini, and Google AI." },
  { name: "Forward Deployed Engineers", to: "/forward-deployed-engineers/", desc: "How we build your marketing and sales AI inside your business, and own whether it works." },
  { name: "AI Implementation Partner (SG)", to: "/ai-implementation-partner-singapore/", desc: "We build, run, and own your marketing and sales AI. Built for Singapore." },
  { name: "Blog", to: "/blog/", desc: "Guides, case studies, and insights." },
  { name: "AI Agents Repo", to: "/agents-repo/", desc: "Browse our library of pre-built AI agents." },
  { name: "Why our agents remember", to: "/ai-memory-system/", desc: "The memory system behind production-grade AI." },
  { name: "Glossary", to: "/glossary/", desc: "Plain-English definitions of AI, lead, and marketing terms." },
];

const FREE_TOOLS: NavLink[] = [
  { name: "AI Visibility Checker", to: "/ai-visibility-checker/", desc: "See if ChatGPT, Perplexity, Google AI, Gemini, Grok, and Claude name you, plus site health." },
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
  TOOLS: 4,
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
              className="w-full flex items-center justify-between py-3 px-2 font-alte text-base font-normal tracking-[-0.04em] text-gray-700 rounded-none"
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
                  className="block rounded-none bg-[#0A1128] text-white px-4 py-4"
                >
                  <span className="flex items-center gap-2 font-alte text-base font-normal tracking-[-0.04em]">
                    {HERO.name}
                    <span className="font-geist text-[12px] tracking-[0.02em] uppercase bg-[#FCCA07] text-[#0A1128] px-2 py-0.5 rounded-none">Flagship</span>
                  </span>
                  <span className="block font-alte text-[15px] tracking-[-0.04em] text-gray-300/90 mt-1.5 leading-relaxed">{HERO.tagline}</span>
                </Link>

                {/* By Outcome — grouped along the lead journey */}
                <div>
                  <p className="font-geist text-[12px] text-gray-400 uppercase tracking-[0.02em] mb-2 px-2">By Outcome</p>
                  <div className="space-y-3">
                    {BY_JOURNEY.map((g) => (
                      <div key={g.label}>
                        <p className="font-geist text-[10px] text-[#c79a00] uppercase tracking-[0.02em] mb-1 px-2">{g.label}</p>
                        <ul className="space-y-0.5">
                          {g.links.map((l) => (
                            <li key={l.to}>
                              <Link href={l.to} onClick={onLinkClick} className="block py-2 px-2 font-alte text-[15px] font-normal tracking-[-0.04em] text-gray-800 hover:text-[#0062FF] rounded-none">{l.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* By Industry — flat list, no nested accordions */}
                <div>
                  <p className="font-geist text-[12px] text-gray-400 uppercase tracking-[0.02em] mb-2 px-2">By Industry</p>
                  <ul className="space-y-0.5">
                    {allIndustries.map((l) => (
                      <li key={l.to}>
                        <Link href={l.to} onClick={onLinkClick} className="block py-2.5 px-2 font-alte text-[15px] font-normal tracking-[-0.04em] text-gray-700 hover:text-[#0062FF] rounded-none">{l.name}</Link>
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
              className="w-full flex items-center justify-between py-3 px-2 font-alte text-base font-normal tracking-[-0.04em] text-gray-700 rounded-none"
            >
              <span>Compare</span>
              <ChevronDown open={openMobileGroup === NAV.COMPARE} />
            </button>
            {openMobileGroup === NAV.COMPARE && (
              <div className="pl-2 pb-3 space-y-3">
                <div>
                  <p className="font-geist text-[12px] text-gray-400 uppercase tracking-[0.02em] mb-1 px-2">Alternatives</p>
                  <ul className="space-y-0.5">
                    {COMPARE_ALTERNATIVES.map((l) => (
                      <li key={l.to}><Link href={l.to} onClick={onLinkClick} className="block py-2 px-2 font-alte text-[15px] font-normal tracking-[-0.04em] text-gray-600 hover:text-[#0062FF] rounded-none">{l.name}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-geist text-[12px] text-gray-400 uppercase tracking-[0.02em] mb-1 px-2">Best-of roundups</p>
                  <ul className="space-y-0.5">
                    {COMPARE_ROUNDUPS.map((l) => (
                      <li key={l.to}><Link href={l.to} onClick={onLinkClick} className="block py-2 px-2 font-alte text-[15px] font-normal tracking-[-0.04em] text-gray-600 hover:text-[#0062FF] rounded-none">{l.name}</Link></li>
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
              className="w-full flex items-center justify-between py-3 px-2 font-alte text-base font-normal tracking-[-0.04em] text-gray-700 rounded-none"
            >
              <span>Resources</span>
              <ChevronDown open={openMobileGroup === NAV.RESOURCES} />
            </button>
            {openMobileGroup === NAV.RESOURCES && (
              <ul className="pl-4 pb-2 space-y-1">
                {RESOURCES.map((l) => (
                  <li key={l.to}><Link href={l.to} onClick={onLinkClick} className="block py-2.5 px-2 font-alte text-[15px] font-normal tracking-[-0.04em] text-gray-600 hover:text-[#0062FF] rounded-none">{l.name}</Link></li>
                ))}
              </ul>
            )}
          </li>

          {/* Free Tools */}
          <li>
            <button
              onClick={() => toggleGroup(NAV.TOOLS)}
              className="w-full flex items-center justify-between py-3 px-2 font-alte text-base font-normal tracking-[-0.04em] text-gray-700 rounded-none"
            >
              <span>Free Tools</span>
              <ChevronDown open={openMobileGroup === NAV.TOOLS} />
            </button>
            {openMobileGroup === NAV.TOOLS && (
              <ul className="pl-4 pb-2 space-y-1">
                {FREE_TOOLS.map((l) => (
                  <li key={l.to}><Link href={l.to} onClick={onLinkClick} className="block py-2.5 px-2 font-alte text-[15px] font-normal tracking-[-0.04em] text-gray-600 hover:text-[#0062FF] rounded-none">{l.name}</Link></li>
                ))}
              </ul>
            )}
          </li>

          {/* Services */}
          <li>
            <Link
              href={`${countryPrefix}/services/`}
              onClick={onLinkClick}
              className={`flex items-center justify-between py-3 px-2 font-alte text-base font-normal tracking-[-0.04em] rounded-none ${isActive("/services/") ? "text-[#0A1128]" : "text-gray-700 hover:text-[#0A1128]"}`}
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
              className={`flex items-center justify-between py-3 px-2 font-alte text-base font-normal tracking-[-0.04em] rounded-none ${isActive("/about/") ? "text-[#0A1128]" : "text-gray-700 hover:text-[#0A1128]"}`}
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
    `flex items-center gap-1.5 font-alte text-[15px] font-normal tracking-[-0.04em] transition-colors ${
      active || open ? "text-[#0A1128]" : "text-gray-500 hover:text-[#0A1128]"
    }`;

  // Split the flat industry list into two balanced columns for the desktop panel.
  const industryColSize = Math.ceil(allIndustries.length / 2);
  const industryCols = [
    allIndustries.slice(0, industryColSize),
    allIndustries.slice(industryColSize),
  ];

  const solutionsActive = anyActive([...journeyLinks, ...allIndustries, { name: "", to: HERO.to }]);
  const compareActive = anyActive([...COMPARE_ALTERNATIVES, ...COMPARE_ROUNDUPS]);
  const resourcesActive = anyActive(RESOURCES);
  const toolsActive = anyActive(FREE_TOOLS);

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
                className="fixed left-1/2 top-[80px] z-[200] bg-white rounded-none border border-[#e7e6e4] overflow-hidden"
                style={{ width: "min(960px, calc(100vw - 48px))" }}
              >
                <div className="flex">
                  {/* Featured hero — left rail */}
                  <div className="w-[280px] shrink-0 bg-[#0A1128] p-7 flex flex-col">
                    <span className="inline-block self-start font-geist text-[12px] tracking-[0.02em] uppercase bg-[#FCCA07] text-[#0A1128] px-2.5 py-1 rounded-none mb-6">FLAGSHIP</span>
                    {/* Free tool, usable right now */}
                    <p className="font-geist text-[11px] tracking-[0.08em] uppercase text-[#FCCA07] mb-2">Free · no signup</p>
                    <Link href={FLAGSHIP_TOOL.to} onClick={close} className="block font-alte text-2xl font-normal tracking-[-0.04em] text-white leading-tight hover:text-[#FCCA07] transition-colors">
                      {FLAGSHIP_TOOL.name}
                    </Link>
                    <p className="font-alte text-[14px] tracking-[-0.04em] text-gray-300/90 mt-2.5 leading-relaxed">{FLAGSHIP_TOOL.tagline}</p>
                    <Link href={FLAGSHIP_TOOL.to} onClick={close} className="mt-4 inline-flex items-center gap-1.5 font-alte text-[15px] tracking-[-0.04em] text-[#FCCA07] hover:gap-2.5 transition-all">
                      Try it free →
                    </Link>
                    {/* Agents & tools */}
                    <div className="border-t border-white/10 my-6" />
                    <p className="font-geist text-[11px] tracking-[0.08em] uppercase text-gray-400 mb-3">Agents &amp; tools</p>
                    <ul className="space-y-2.5">
                      {FLAGSHIP_MORE.map((m) =>
                        m.to ? (
                          <li key={m.name}>
                            <Link href={m.to} onClick={close} className="group inline-flex items-center gap-1.5 font-alte text-[14px] tracking-[-0.04em] text-gray-200 hover:text-white transition-colors">
                              {m.name}
                              <span className="text-[#FCCA07] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                            </Link>
                          </li>
                        ) : (
                          <li key={m.name} className="flex items-center gap-2">
                            <span className="font-alte text-[14px] tracking-[-0.04em] text-gray-400">{m.name}</span>
                            <span className="font-geist text-[10px] tracking-[0.06em] uppercase text-gray-500 border border-white/15 px-1.5 py-0.5">soon</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Right content — two clean lenses, big type, generous spacing */}
                  <div className="flex-1 flex gap-10 p-9">
                    {/* By Outcome — grouped along the lead journey */}
                    <div className="shrink-0">
                      <p className="font-geist text-[12px] text-gray-400 uppercase tracking-[0.02em] mb-5">By Outcome</p>
                      <div className="space-y-5">
                        {BY_JOURNEY.map((g) => (
                          <div key={g.label}>
                            <p className="font-geist text-[10px] text-[#c79a00] uppercase tracking-[0.02em] mb-2">{g.label}</p>
                            <ul className="space-y-2.5">
                              {g.links.map((l) => (
                                <li key={l.to}>
                                  <Link href={l.to} onClick={close} className={`font-alte text-[15px] font-normal tracking-[-0.04em] leading-snug block transition-colors ${isActive(l.to) ? "text-[#0062FF]" : "text-gray-800 hover:text-[#0062FF]"}`}>{l.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* By Industry — flat two-column list, no sub-headers */}
                    <div className="flex-1 pl-10 border-l border-[#e7e6e4]">
                      <p className="font-geist text-[12px] text-gray-400 uppercase tracking-[0.02em] mb-5">By Industry</p>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        {industryCols.map((col, ci) => (
                          <ul key={ci} className="space-y-4">
                            {col.map((l) => (
                              <li key={l.to}>
                                <Link href={l.to} onClick={close} className={`font-alte text-[15px] font-normal tracking-[-0.04em] leading-snug block transition-colors ${isActive(l.to) ? "text-[#0062FF]" : "text-gray-700 hover:text-[#0062FF]"}`}>{l.name}</Link>
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
            <div className="absolute top-full left-0 mt-3 rounded-none bg-white border border-[#e7e6e4] z-50 p-5" style={{ width: "max-content", minWidth: "480px" }}>
              <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-l border-t border-[#e7e6e4] rotate-45" />
              <div className="grid grid-cols-2 gap-x-8">
                <div>
                  <p className="font-geist text-[12px] text-gray-400 uppercase tracking-[0.02em] mb-3">Alternatives</p>
                  <ul className="space-y-2">
                    {COMPARE_ALTERNATIVES.map((l) => (
                      <li key={l.to}><Link href={l.to} onClick={close} className={`font-alte text-[15px] font-normal tracking-[-0.04em] block ${isActive(l.to) ? "text-[#0062FF]" : "text-gray-600 hover:text-[#0062FF]"}`}>{l.name}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-geist text-[12px] text-gray-400 uppercase tracking-[0.02em] mb-3">Best-of roundups</p>
                  <ul className="space-y-2">
                    {COMPARE_ROUNDUPS.map((l) => (
                      <li key={l.to}><Link href={l.to} onClick={close} className={`font-alte text-[15px] font-normal tracking-[-0.04em] block ${isActive(l.to) ? "text-[#0062FF]" : "text-gray-600 hover:text-[#0062FF]"}`}>{l.name}</Link></li>
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
            <div className="absolute top-full left-0 mt-3 rounded-none bg-white border border-[#e7e6e4] z-50" style={{ width: "max-content", minWidth: "280px", maxWidth: "340px" }}>
              <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-l border-t border-[#e7e6e4] rotate-45" />
              <ul className="p-2">
                {RESOURCES.map((l) => (
                  <li key={l.to}>
                    <Link href={l.to} onClick={close} className={`block px-3 py-3 rounded-none transition-colors hover:bg-[#F9F6F4] ${isActive(l.to) ? "bg-[#F9F6F4]" : ""}`}>
                      <span className="font-alte text-[15px] font-normal tracking-[-0.04em] text-[#0A1128] block" style={{ whiteSpace: "nowrap" }}>{l.name}</span>
                      {l.desc && <p className="font-alte text-[15px] tracking-[-0.04em] text-gray-400 leading-snug mt-0.5">{l.desc}</p>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>

        {/* ── Free Tools (dropdown) ── */}
        <li className="relative">
          <button onClick={() => toggle(NAV.TOOLS)} className={triggerClass(toolsActive, openDropdown === NAV.TOOLS)}>
            Free Tools
            <ChevronDown open={openDropdown === NAV.TOOLS} />
          </button>
          {openDropdown === NAV.TOOLS && (
            <div className="absolute top-full left-0 mt-3 rounded-none bg-white border border-[#e7e6e4] z-50" style={{ width: "max-content", minWidth: "280px", maxWidth: "340px" }}>
              <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-l border-t border-[#e7e6e4] rotate-45" />
              <ul className="p-2">
                {FREE_TOOLS.map((l) => (
                  <li key={l.to}>
                    <Link href={l.to} onClick={close} className={`block px-3 py-3 rounded-none transition-colors hover:bg-[#F9F6F4] ${isActive(l.to) ? "bg-[#F9F6F4]" : ""}`}>
                      <span className="font-alte text-[15px] font-normal tracking-[-0.04em] text-[#0A1128] block" style={{ whiteSpace: "nowrap" }}>{l.name}</span>
                      {l.desc && <p className="font-alte text-[15px] tracking-[-0.04em] text-gray-400 leading-snug mt-0.5">{l.desc}</p>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>

        {/* ── Services (link) ── */}
        <li>
          <Link href={`${countryPrefix}/services/`} onClick={onLinkClick} className={`font-alte text-[15px] font-normal tracking-[-0.04em] transition-colors ${isActive("/services/") ? "text-[#0A1128]" : "text-gray-500 hover:text-[#0A1128]"}`}>
            Services
          </Link>
        </li>

        {/* ── About (link) ── */}
        <li>
          <Link href={`${countryPrefix}/about/`} onClick={onLinkClick} className={`font-alte text-[15px] font-normal tracking-[-0.04em] transition-colors ${isActive("/about/") ? "text-[#0A1128]" : "text-gray-500 hover:text-[#0A1128]"}`}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
