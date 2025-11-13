import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
// @ts-expect-error - GSAP types may not be available
import gsap from "gsap";

export function Navigation() {
  const navRef = useRef<HTMLElement | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, { y: -16, opacity: 0, duration: 0.5, ease: "power2.out" });
    }, navRef);
    return () => ctx.revert();
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.position = "";
        document.body.style.width = "";
      };
    }
  }, [isMobileMenuOpen]);

  // Close menu on escape key
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

  // Smooth scroll handler for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offset = 80; // Account for sticky header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { href: "#automation", label: "Automation Vault" },
    { href: "#press", label: "Press Release" },
    { href: "#about", label: "About Us" },
  ];

  return (
    <>
      <nav 
        ref={navRef} 
        className="bg-white backdrop-blur supports-[backdrop-filter]:bg-white/95 border-b border-border/40 sticky top-0 z-[98] shadow-sm"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          <div className="flex h-14 md:h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="font-['PP_Mondwest'] text-lg md:text-xl lg:text-2xl text-secondary font-normal tracking-[-0.02em]">
                Agentic AI Labs
              </h1>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-normal"
                >
                  {link.label}
                </a>
              ))}
              <Button 
                size="sm"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 text-sm rounded-lg font-medium"
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 border-0 bg-transparent cursor-pointer active:opacity-70 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMobileMenuOpen((prev) => !prev);
              }}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              <span
                className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ease-in-out mt-1 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ease-in-out mt-1 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-[100] bg-white"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsMobileMenuOpen(false);
            }
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 z-[101] bg-white border-b border-border/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
              <div className="flex flex-col pt-6 pb-6">
                {/* Navigation Links */}
                <nav className="mb-6">
                  <ul className="space-y-4">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={(e) => handleAnchorClick(e, link.href)}
                          className="flex items-center justify-between py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors active:text-foreground"
                        >
                          <span>{link.label}</span>
                          <svg
                            className="w-5 h-5 text-muted-foreground flex-shrink-0"
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
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Contact Button */}
                <div className="w-full">
                  <Button
                    size="sm"
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-3 text-base font-medium rounded-lg"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.open('https://calendly.com', '_blank');
                    }}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}