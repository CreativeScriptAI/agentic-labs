import React from "react";
import Link from "next/link";

const CAL_LINK =
  "https://cal.com/free-ai-clarity-call-avoid-costly-automation-mistakes/30min";

const FinalCTASection = () => {
  return (
    <div
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
      }}
    >
      {/* Atmospheric blobs */}
      <div aria-hidden="true" style={{ position: "absolute", top: "-30%", right: "-10%", width: 400, height: 400, borderRadius: "50%", background: "#0062FF", filter: "blur(110px)", opacity: 0.05, pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", bottom: "-30%", left: "-10%", width: 360, height: 360, borderRadius: "50%", background: "#FCCA07", filter: "blur(100px)", opacity: 0.06, pointerEvents: "none" }} />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest px-4 mb-2">
          Your business runs.
        </h2>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 font-mondwest px-4 mb-6 sm:mb-8">
          Your AI should too.
        </h3>

        {/* Body */}
        <p className="text-slate-600 font-sfpro text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto mb-2">
          One call. 15 minutes. We&apos;ll tell you exactly what an AI system
          would look like for your business — and whether it even makes sense.
        </p>
        <p className="text-slate-700 font-sfpro text-sm sm:text-base lg:text-lg leading-relaxed font-medium max-w-xl mx-auto mb-8 sm:mb-10">
          No pitch. No pressure. Just a straight answer.
        </p>

        {/* CTA */}
        <Link
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-[#FCCA07] px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold text-[#0A1128] transition-colors hover:bg-yellow-500"
        >
          Book Your Free Call
        </Link>

        {/* Subtext */}
        <p className="text-slate-400 font-sfpro text-xs sm:text-sm mt-4">
          Or email us: aditya@tryagentikai.com
        </p>
      </div>
    </div>
  );
};

export default FinalCTASection;
