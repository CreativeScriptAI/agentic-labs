import React from "react";
import Link from "next/link";

const CAL_LINK =
  "https://cal.com/ai-aditya/30min";

const HeroSection = () => {
  /* Removed unused isMobile state */

  return (
    <div className="relative overflow-hidden bg-[#F9F6F4] w-[calc(100%+2rem)] pt-32 pb-16 sm:py-24 flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col max-w-6xl mx-auto py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
            {/* Main Headline — tiered hierarchy: premise, problem, payoff */}
            <h1
              className="text-center font-mondwest tracking-tight mb-4 sm:mb-6"
              style={{ textWrap: "balance" }}
            >
              {/* Premise + problem: smaller setup */}
              <span className="block text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
                You wanted to get ahead with AI.
              </span>
              <span className="block text-xl sm:text-2xl lg:text-3xl font-bold text-gray-400 leading-snug mb-3 sm:mb-5">
                You ended up with six tools and no time.
              </span>
              {/* Payoff: the dominant line */}
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 leading-[1.04]">
                We give you the outcome instead.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-center text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl px-4">
              Agentic AI Labs builds AI that runs the repetitive parts of your
              business, on real customers, in production. Not another tool for
              your list. The result you were actually chasing.
            </p>
            <p className="text-center text-slate-800 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-2xl px-4">
              Make AI work. So you don&apos;t have to.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4">
              <Link
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-[#FCCA07] px-7 py-3.5 text-sm font-semibold text-[#0A1128] transition-all hover:bg-[#f0bd00] active:scale-[0.98]"
              >
                Book a Free Call
              </Link>
              <a
                href="#what_we_build"
                className="text-sm sm:text-base font-medium text-blue-600 hover:text-blue-700 transition-colors px-4 py-3"
              >
                See how it works &darr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
