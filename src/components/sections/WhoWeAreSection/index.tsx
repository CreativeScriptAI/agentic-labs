import React from "react";

const WhoWeAreSection = () => {
  return (
    <div
      className="py-12 sm:py-16 lg:py-20"
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6 text-center">
          WHO WE ARE
        </p>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest text-center mb-10 sm:mb-14 lg:mb-16">
          Built by engineers. Not an agency.
        </h2>

        {/* Origin — flowing narrative */}
        <div className="space-y-5 sm:space-y-6 mb-10 sm:mb-14">
          <p className="text-slate-600 font-sfpro text-base sm:text-lg leading-relaxed">
            Three co-founders. Years of shipping SaaS apps and backend systems.
            We were good at it.
          </p>

          <p className="text-[#0A1128] font-mondwest text-xl sm:text-2xl font-bold">
            Then AI changed the game.
          </p>

          <p className="text-slate-600 font-sfpro text-base sm:text-lg leading-relaxed">
            Building software got cheap overnight. But making AI actually work
            inside a real business? That stayed hard. Founders could vibe-code a
            chatbot in an afternoon. They couldn&apos;t make it handle 500 real
            customer calls without breaking.
          </p>

          <p className="text-[#0A1128] font-sfpro text-base sm:text-lg font-semibold">
            That gap is where we walked in.
          </p>
        </div>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-blue-600 mx-auto mb-10 sm:mb-14" />

        {/* Team callout — left-bordered for minimal accent */}
        <div className="border-l-2 border-blue-600 pl-5 sm:pl-6 mb-10 sm:mb-14 space-y-4">
          <p className="text-slate-700 font-sfpro text-base sm:text-lg leading-relaxed">
            Behind the three of us sits a core team of AI devs, backend
            engineers, ML specialists, and ops engineers — the kind of people
            who&apos;d rather break things at 2am than ship something mid.
          </p>
          <p className="text-slate-700 font-sfpro text-base sm:text-lg leading-relaxed">
            We write scalable code. We build production-level systems.
            We don&apos;t do demos that look pretty and die on day one.
          </p>
        </div>

        {/* Closer */}
        <p className="text-blue-600 font-mondwest text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-10 sm:mb-14">
          We&apos;re Agentic AI Labs. We build AI systems that work.
        </p>

        {/* Credibility — minimal stat row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-[#0A1128] font-mondwest">3</p>
            <p className="text-xs sm:text-sm text-slate-500 font-sfpro mt-1">Co-founders</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-[#0A1128] font-mondwest">50+</p>
            <p className="text-xs sm:text-sm text-slate-500 font-sfpro mt-1">Projects shipped</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-[#0A1128] font-mondwest">AI/ML</p>
            <p className="text-xs sm:text-sm text-slate-500 font-sfpro mt-1">Core engineering team</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-[#0A1128] font-mondwest">6+</p>
            <p className="text-xs sm:text-sm text-slate-500 font-sfpro mt-1">Industries served</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
