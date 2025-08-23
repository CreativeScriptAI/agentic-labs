import NavBar from "./NavBar";
import Logo from "./Logo";
import Link from "next/link";
import EllipseBackground from "../../../assets/images/EllipseBackground";
import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { mondwest } from "../../../assets/fonts/mondwest";

type Props = {
  fullWidth: boolean;
};

const Header: React.FC<Props> = ({ fullWidth }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const burgerButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileBurgerButtonRef = useRef<HTMLButtonElement | null>(null);
  const [clipCenter, setClipCenter] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [clipRadius, setClipRadius] = useState<number>(0);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Optimized scroll detection with throttling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          setIsScrolled(scrollTop > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const computeMaxRadius = useCallback((x: number, y: number) => {
    if (typeof window === "undefined") return 0;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const dx = Math.max(x, w - x);
    const dy = Math.max(y, h - y);
    return Math.sqrt(dx * dx + dy * dy);
  }, []);

  const updateClipFromButton = useCallback(() => {
    if (isMobile) return; // Skip complex animations on mobile

    const buttonRef = burgerButtonRef.current;
    if (!buttonRef || typeof window === "undefined") return;
    const rect = buttonRef.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    setClipCenter({ x, y });
    setClipRadius(computeMaxRadius(x, y));
  }, [computeMaxRadius, isMobile]);

  const toggleMobileMenu = () => {
    if (!isMobile) {
      // Desktop: Use complex animation
      updateClipFromButton();
    }
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Recompute radius on resize/scroll while open (desktop only)
  useEffect(() => {
    if (!isMobileMenuOpen || isMobile) return;

    const handler = () => updateClipFromButton();
    window.addEventListener("resize", handler, { passive: true });
    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("resize", handler);
      window.removeEventListener("scroll", handler);
    };
  }, [isMobileMenuOpen, updateClipFromButton, isMobile]);

  const router = useRouter();

  return (
    <>
      {/* Ellipse background image - non-sticky */}
      <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none z-10 h-full w-full">
        <EllipseBackground />
      </div>
      <div className="block md:hidden absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none z-10 w-full">
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="375"
          height="383"
          viewBox="0 0 375 383"
          fill="none"
        >
          <g opacity="0.2" filter="url(#filter0_f_798_3107)">
            <path
              d="M-144 -48.6957C-144 -119.556 4.19376 -177 187 -177C369.806 -177 518 -119.556 518 -48.6956C518 22.1649 369.806 223 187 223C4.19373 223 -144 22.1648 -144 -48.6957Z"
              fill="url(#paint0_linear_798_3107)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_798_3107"
              x="-304"
              y="-337"
              width="982"
              height="720"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="80"
                result="effect1_foregroundBlur_798_3107"
              />
            </filter>
            <linearGradient
              id="paint0_linear_798_3107"
              x1="199.078"
              y1="258.049"
              x2="199.078"
              y2="-283.774"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0062FF" />
              <stop offset="1" stop-color="#0062FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "md:bg-white md:shadow-lg pb-2"
            : "bg-[#F9F6F4] bg-transparent"
        }`}
      >
        <div className="pt-0 px-4 md:px-24 lg:px-24 xl:px-24 md:px-4 mx-auto mx-2 md:mx-0 flex h-16 items-center justify-between ml-4 mr-4 translate-y-10 md:translate-y-[calc(40px_-_50%)] rounded-xl md:bg-transparent bg-white md:shadow-none shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_6px_25px_0_rgba(0,0,0,0.08),0_2px_8px_0_rgba(0,0,0,0.10)] relative">
          {/* Desktop Logo - hidden on mobile */}
          <div className="hidden md:flex flex-shrink-0">
            <Logo setIsMobileMenuOpen={setIsMobileMenuOpen} />
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between w-full">
            {/* Burger Menu Button - Left */}
            <button
              className="flex flex-col justify-center items-center w-8 h-8 border-0 bg-transparent cursor-pointer"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              ref={mobileBurgerButtonRef}
            >
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-in-out mt-1 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-in-out mt-1 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>

            {/* Agentic AI Text - Center */}
            <div
              onClick={() => (window.location.href = "/")}
              className={`${mondwest.variable} font-mondwest text-blue-600 text-lg font-bold cursor-pointer`}
            >
              Agentic AI
            </div>

            {/* Book a Call Button - Right */}
            <button
              onClick={() => {
                if (
                  typeof window !== "undefined" &&
                  (window as any).gtag_report_conversion
                ) {
                  return (window as any).gtag_report_conversion(
                    "https://tryagentikai.com/contact"
                  );
                }
                return true;
              }}
              className="rounded-lg bg-yellow-400 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-yellow-500 focus:outline-none"
            >
              Book a Call
            </button>
          </div>

          {/* Desktop Navigation - positioned on the right end */}
          <div className="hidden md:flex items-center justify-center gap-8">
            <NavBar />
            <Link
              href="/contact"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button - Hidden on all screens */}
          <button
            className="hidden flex-col justify-center items-center w-8 h-8 border-0 bg-transparent cursor-pointer"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            ref={burgerButtonRef}
          >
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-in-out mt-1 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-in-out mt-1 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Overlay - Simplified for mobile performance */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu-overlay"
              className="md:hidden fixed inset-0 z-40"
              initial={
                isMobile
                  ? { opacity: 0 }
                  : {
                      clipPath: `circle(0px at ${clipCenter.x}px ${clipCenter.y}px)`,
                      backgroundColor: "rgba(255,255,255,1)",
                    }
              }
              animate={
                isMobile
                  ? { opacity: 1 }
                  : {
                      clipPath: `circle(${Math.max(clipRadius, 1)}px at ${
                        clipCenter.x
                      }px ${clipCenter.y}px)`,
                    }
              }
              exit={
                isMobile
                  ? { opacity: 0 }
                  : {
                      clipPath: `circle(0px at ${clipCenter.x}px ${clipCenter.y}px)`,
                    }
              }
              transition={
                isMobile
                  ? { duration: 0.2 }
                  : { type: "spring", stiffness: 100, damping: 20 }
              }
            >
              <div className="absolute inset-0 bg-white" />
              <motion.div
                className="absolute top-0 left-0 right-0 z-50"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between px-6 pt-12">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <Logo setIsMobileMenuOpen={setIsMobileMenuOpen} />
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
                    aria-label="Close mobile menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M16.067 15.1828C16.1251 15.2409 16.1712 15.3098 16.2026 15.3857C16.234 15.4616 16.2502 15.5429 16.2502 15.625C16.2502 15.7071 16.234 15.7884 16.2026 15.8643C16.1712 15.9402 16.1251 16.0091 16.067 16.0672C16.009 16.1253 15.94 16.1713 15.8642 16.2027C15.7883 16.2342 15.707 16.2503 15.6249 16.2503C15.5427 16.2503 15.4614 16.2342 15.3855 16.2027C15.3097 16.1713 15.2407 16.1253 15.1827 16.0672L9.99986 10.8836L4.81705 16.0672C4.69977 16.1845 4.54071 16.2503 4.37486 16.2503C4.20901 16.2503 4.04995 16.1845 3.93267 16.0672C3.8154 15.9499 3.74951 15.7909 3.74951 15.625C3.74951 15.4591 3.8154 15.3001 3.93267 15.1828L9.11627 10L3.93267 4.81719C3.8154 4.69991 3.74951 4.54085 3.74951 4.375C3.74951 4.20915 3.8154 4.05009 3.93267 3.93281C4.04995 3.81554 4.20901 3.74965 4.37486 3.74965C4.54071 3.74965 4.69977 3.81554 4.81705 3.93281L9.99986 9.11641L15.1827 3.93281C15.2999 3.81554 15.459 3.74965 15.6249 3.74965C15.7907 3.74965 15.9498 3.81554 16.067 3.93281C16.1843 4.05009 16.2502 4.20915 16.2502 4.375C16.2502 4.54085 16.1843 4.69991 16.067 4.81719L10.8835 10L16.067 15.1828Z"
                        fill="#0062FF"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col pt-6 pb-6 px-6">
                  {/* Navigation Items */}
                  <div className="mb-6">
                    <NavBar
                      isMobile={true}
                      onLinkClick={() => setIsMobileMenuOpen(false)}
                    />
                  </div>

                  {/* Book a Call Button - Fixed responsiveness */}
                  <div className="w-full">
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        if (
                          typeof window !== "undefined" &&
                          (window as any).gtag_report_conversion
                        ) {
                          return (window as any).gtag_report_conversion(
                            "https://tryagentikai.com/contact"
                          );
                        }
                        return true;
                      }}
                      className="block w-full text-center rounded-lg bg-yellow-400 px-4 py-4 text-base font-medium text-black transition-colors hover:bg-yellow-500 focus:outline-none overflow-hidden"
                    >
                      Book a Call
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
