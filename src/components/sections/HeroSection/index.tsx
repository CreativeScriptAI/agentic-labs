import React from "react";
import Link from "next/link";

const CALENDLY_LINK =
  "https://calendly.com/creative-script/get-free-ai-clarity?month=2025-11";

const HeroSection = () => {
  /* Removed unused isMobile state */

  return (
    <div className="relative overflow-hidden bg-[#F9F6F4] w-[calc(100%+2rem)] pt-32 pb-16 sm:py-24 flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col max-w-6xl mx-auto py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 text-center font-mondwest px-4">
              <span className="block">Your AI works in a demo.</span>
              <span className="block">It breaks with real customers.</span>
              <span className="block text-blue-600">We fix that.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-center text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl px-4">
              We build AI systems that talk to your customers, remember every
              interaction, and take action — without you in the loop.
            </p>
            <p className="text-center text-slate-800 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-2xl px-4">
              Voice. Memory. Automation. One system. Production-grade.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4">
              <Link
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#FCCA07] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-[#0A1128] transition-colors hover:bg-yellow-500"
              >
                Book a Free Call
              </Link>
              <a
                href="#what_we_build"
                className="text-sm sm:text-base font-medium text-blue-600 hover:text-blue-700 transition-colors px-4 py-3"
              >
                See How It Works &darr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
