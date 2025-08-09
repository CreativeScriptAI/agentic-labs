import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      className="min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh]"
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
        minHeight: "calc(100vh - 4rem)",
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col h-full max-w-6xl mx-auto">
          <div
            className="flex-1 flex flex-col items-center justify-center py-8 sm:py-12 min-h-screen"
            style={{ transform: "translateY(-100px)" }}
          >
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 text-center font-mondwest px-4">
              <span className="block sm:inline">
                Turn AI hype into production
              </span>{" "}
              <span className="block sm:inline">level working agents</span>
            </h1>

            {/* Subtitle */}
            <p className="text-center text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl px-4">
              We build fast and deploy faster.
              <span className="sm:hidden">
                <br />
              </span>{" "}
              One agent live in 7 days.
            </p>
          </div>

          {/* Call to Action - anchored at bottom */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-8 sm:pb-12">
            <a
              href="#agents-section"
              className="text-base sm:text-lg font-medium text-red-500 hover:text-red-600 transition-colors duration-200 mb-3 px-4 py-2 rounded-lg hover:bg-red-50"
            >
              Explore our Agents
            </a>

            {/* Down Arrow */}
            <a href="#agents-section" className="animate-bounce">
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
