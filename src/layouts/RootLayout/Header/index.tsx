import NavBar from "./NavBar";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
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
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      // Prevent scroll on iOS
      document.body.style.position = "fixed";
      document.body.style.width = "100%";

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.position = "";
        document.body.style.width = "";
      };
    }
  }, [isMobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Close menu on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => {
        window.removeEventListener("keydown", handleEscape);
      };
    }
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
      <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none z-10 w-full">
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
        className={`fixed top-0 left-0 w-full z-[99] transition-all duration-300 ease-in-out ${
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
          <div className="md:hidden flex items-center justify-between w-full relative z-[102]">
            {/* Burger Menu Button - Left */}
            <button
              className="flex flex-col justify-center items-center w-10 h-10 border-0 bg-transparent cursor-pointer -ml-2 active:opacity-70 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleMobileMenu();
              }}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              ref={mobileBurgerButtonRef}
              type="button"
            >
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out mt-1 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out mt-1 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>

            {/* Agentic AI Text - Center */}
            <Link
              href="/"
              className={`${mondwest.variable} font-mondwest text-blue-600 text-lg font-bold cursor-pointer`}
            >
              Agentic AI
            </Link>

            {/* Book a Call Button - Right */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (
                    typeof window !== "undefined" &&
                    (window as any).gtag_report_conversion
                  ) {
                    return (window as any).gtag_report_conversion(
                      "https://calendly.com/creative-script/get-free-ai-clarity?month=2025-11"
                    );
                  }
                  return true;
                }}
                className="rounded-lg bg-yellow-400 px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-yellow-500 focus:outline-none"
              >
                Book Free Call
              </button>
              {/* <div
                className="flex items-center justify-center p-2"
                style={{ borderRadius: "8px", border: "1px solid #E0E0E0" }}
                onClick={() => {
                  window.open("https://wa.me/919532555110", "_blank");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="28"
                  viewBox="0 0 27 28"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1835_6372)">
                    <path
                      d="M0.953122 13.9609C0.952508 16.1804 1.53247 18.3477 2.63525 20.258L0.847656 26.7848L7.52703 25.0334C9.37446 26.0391 11.4444 26.5661 13.5478 26.5663H13.5533C20.4972 26.5663 26.1496 20.9159 26.1526 13.9708C26.1539 10.6054 24.8445 7.4408 22.4655 5.05994C20.0869 2.67927 16.9234 1.3675 13.5528 1.36597C6.60814 1.36597 0.956092 7.01607 0.953225 13.9609"
                      fill="url(#paint0_linear_1835_6372)"
                    />
                    <path
                      d="M0.503116 13.957C0.5024 16.2565 1.10315 18.5013 2.24525 20.48L0.393555 27.2407L7.31243 25.4266C9.2188 26.466 11.3652 27.014 13.5493 27.0149H13.5549C20.7479 27.0149 26.6034 21.1612 26.6064 13.9675C26.6077 10.4812 25.2512 7.20283 22.7871 4.73666C20.3228 2.27081 17.0462 0.911834 13.5549 0.9104C6.36067 0.9104 0.505983 6.76325 0.503116 13.957ZM4.62356 20.1392L4.36522 19.7291C3.27923 18.0023 2.70602 16.0069 2.70684 13.9579C2.70909 7.97856 7.57527 3.11392 13.559 3.11392C16.4567 3.11515 19.18 4.24476 21.2283 6.29428C23.2765 8.34401 24.4035 11.0687 24.4028 13.9667C24.4002 19.946 19.5339 24.8112 13.5549 24.8112H13.5506C11.6038 24.8102 9.69442 24.2874 8.02929 23.2994L7.63302 23.0644L3.52722 24.1409L4.62356 20.1392Z"
                      fill="url(#paint1_linear_1835_6372)"
                    />
                    <path
                      d="M10.2922 8.50246C10.0478 7.95946 9.79073 7.94851 9.5584 7.93898C9.36815 7.93079 9.15066 7.93141 8.93338 7.93141C8.7159 7.93141 8.36254 8.01322 8.06385 8.33935C7.76486 8.66578 6.92236 9.45462 6.92236 11.059C6.92236 12.6634 8.09099 14.2141 8.2539 14.4319C8.41701 14.6493 10.5099 18.0471 13.8246 19.3543C16.5795 20.4406 17.1401 20.2245 17.7379 20.1701C18.3359 20.1158 19.6675 19.3814 19.9391 18.6199C20.211 17.8585 20.211 17.2059 20.1295 17.0695C20.048 16.9336 19.8305 16.852 19.5043 16.689C19.1782 16.526 17.5748 15.7369 17.2759 15.6281C16.977 15.5193 16.7596 15.4651 16.5421 15.7916C16.3246 16.1176 15.7001 16.852 15.5097 17.0695C15.3196 17.2875 15.1293 17.3146 14.8032 17.1515C14.4769 16.9879 13.4266 16.6439 12.1806 15.533C11.2111 14.6686 10.5566 13.6012 10.3664 13.2746C10.1761 12.9486 10.346 12.7719 10.5095 12.6094C10.6561 12.4633 10.8358 12.2286 10.999 12.0382C11.1616 11.8478 11.2159 11.7119 11.3246 11.4944C11.4334 11.2767 11.379 11.0863 11.2976 10.9232C11.2159 10.76 10.5821 9.14723 10.2922 8.50246Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1835_6372"
                      x1="1266.1"
                      y1="2543.25"
                      x2="1266.1"
                      y2="1.36597"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1FAF38" />
                      <stop offset="1" stop-color="#60D669" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1835_6372"
                      x1="1311.04"
                      y1="2633.94"
                      x2="1311.04"
                      y2="0.9104"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F9F9F9" />
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                    <clipPath id="clip0_1835_6372">
                      <rect
                        width="26.2129"
                        height="26.4177"
                        fill="white"
                        transform="translate(0.393555 0.9104)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div> */}
            </div>
          </div>

          {/* Desktop Navigation - positioned on the right end */}
          <div className="hidden md:flex items-center justify-center gap-8">
            <NavBar />
            <Link
              href="https://calendly.com/creative-script/get-free-ai-clarity?month=2025-11"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#FCCA07] px-6 py-2 text-sm font-medium text-[#0A1128] transition-colors focus:outline-none"
            >
              Book Free Call
            </Link>
            {/* <div
              className="-ml-4 rounded-lg p-[6px] bg-white"
              style={{ borderRadius: "8px", border: "1px solid #E0E0E0" }}
              onClick={() => {
                window.open("https://wa.me/919532555110", "_blank");
              }}
            >
              <Image
                src="/images/whatsappicon.png"
                alt="WhatsApp"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div> */}
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

        {/* Mobile Menu Overlay - Simplified for performance */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu-overlay"
              className="md:hidden fixed inset-0 z-[100] bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => {
                // Close menu when clicking on backdrop
                if (e.target === e.currentTarget) {
                  setIsMobileMenuOpen(false);
                }
              }}
            >
              <motion.div
                className="absolute top-0 left-0 right-0 z-[101]"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                onClick={(e) => e.stopPropagation()}
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
                            "https://calendly.com/creative-script/get-free-ai-clarity?month=2025-11"
                          );
                        }
                        return true;
                      }}
                      className="block w-full text-center rounded-lg bg-yellow-400 px-4 py-4 text-base font-medium text-black transition-colors hover:bg-yellow-500 focus:outline-none overflow-hidden"
                    >
                      Book Free Call
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
