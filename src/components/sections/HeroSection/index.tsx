import React from "react";
import Link from "next/link";

const CAL_LINK =
  "https://cal.com/free-ai-clarity-call-avoid-costly-automation-mistakes/30min";

const HeroSection = () => {
  /* Removed unused isMobile state */

  return (
    <div className="relative overflow-hidden bg-[#F9F6F4] w-[calc(100%+2rem)] pt-32 pb-16 sm:py-24 flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col max-w-6xl mx-auto py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-4 sm:mb-6 text-center font-mondwest tracking-tight"
              style={{ textWrap: "balance" }}
            >
              <span>Your AI works in a demo. </span>
              <span className="text-gray-500">It breaks with real customers. </span>
              <span className="text-blue-600 block sm:inline">We fix that.</span>
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
                href={CAL_LINK}
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
