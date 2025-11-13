import { Button } from "./ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Navigation() {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!navRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, { y: -16, opacity: 0, duration: 0.5, ease: "power2.out" });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="relative bg-white backdrop-blur supports-[backdrop-filter]:bg-white/95 border-b border-border/40 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
        <div className="flex h-14 md:h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-['PP_Mondwest'] text-lg md:text-xl lg:text-2xl text-secondary font-normal tracking-[-0.02em]">
              Agentic AI Labs
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            <a 
              href="#automation" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-normal"
            >
              Automation Vault
            </a>
            <a 
              href="#press" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-normal"
            >
              Press Release
            </a>
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-normal"
            >
              About Us
            </a>
            <Button 
              size="sm"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 text-sm rounded-lg font-medium"
              onClick={() => window.open('https://calendly.com', '_blank')}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 20 20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}