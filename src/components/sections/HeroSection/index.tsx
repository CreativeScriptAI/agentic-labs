import React, { useState, useEffect } from "react";
import Link from "next/link";
import EllipseBackground from "src/assets/images/EllipseBackground";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    setIsLoaded(true);

    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#F9F6F4] w-[calc(100%+2rem)] mb-[60px] min-h-[calc(100vh-64px)] flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col max-w-6xl mx-auto py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 text-center font-mondwest px-4">
              <span className="block sm:inline">
                We help businesses save 40 to 90% of their time
              </span>{" "}
              <span className="block sm:inline">
                by automating repetitive & boring workflows.{" "}
                {/* {isLoaded && (
                  <TypewriterEffect
                    words={[
                      "AI Agents",
                      "Voice AI",
                      "AI Assistant",
                      "AI Workflows",
                    ]}
                    className="text-red-500"
                    speed={isMobile ? 120 : 80}
                    deleteSpeed={isMobile ? 60 : 40}
                    delay={isMobile ? 2000 : 1500}
                  />
                )} */}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-center text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl px-4">
              We’re a lab —a place where we test, measure,{" "}
              <span className="sm:hidden">
                <br />
              </span>{" "}
              and optimize how AI performs inside your business.{" "}
            </p>
          </div>

          {/* Call to Action - entire area clickable */}
          <a
            href="#agents_section"
            className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-20 sm:pb-12"
            aria-label="Scroll down to explore our agents"
          >
            <span className="text-base sm:text-lg font-semibold text-red-500 transition-colors duration-200 mb-3 px-4 py-2 rounded-lg">
              Explore our Agents
            </span>
            <span className={isMobile ? "" : "animate-bounce"}>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
