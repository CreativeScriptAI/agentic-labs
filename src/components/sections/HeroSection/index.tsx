import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      className="h-[70vh] -mx-4 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
      style={{ backgroundColor: "#F9F6F4" }}
    >
      <div className="w-full px-4 h-full">
        <div className="flex flex-col justify-center items-center h-full max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-8 text-center font-mondwest">
            Turn AI hype into production level working agents
          </h1>

          {/* Subtitle */}
          <p className="mb-16 text-center text-slate-600 text-base font-normal leading-normal">
            We build fast and deploy faster. One agent live in 7 days.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col items-center">
            <Link
              href="/agents"
              className="text-lg font-medium text-red-500 hover:text-red-600 transition-colors duration-200 mb-4"
            >
              Explore our Agents
            </Link>

            {/* Down Arrow */}
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-red-500"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
