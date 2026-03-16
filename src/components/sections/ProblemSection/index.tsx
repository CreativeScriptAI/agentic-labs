import React from "react";

const painPoints = [
  {
    tool: "Retell.ai / Vapi",
    label: "Voice",
    description:
      "The AI sounded great until a customer called back and it had no idea who they were.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    tool: "n8n / make.com",
    label: "Automation",
    description:
      "The workflow ran until a field came in blank at 2am and the whole sequence died silently.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    tool: "Claude / ChatGPT",
    label: "Support",
    description:
      "It gave a confident, completely wrong answer. A customer screenshotted it.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const breakdownItems = [
  { tool: "Retell", gives: "voice", missing: "no memory" },
  { tool: "n8n", gives: "automation", missing: "no conversation" },
  { tool: "Mem0", gives: "memory", missing: "no interface" },
];

const ProblemSection = () => {
  return (
    <div
      className="py-14 sm:py-20"
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-red-500 font-bold text-xs tracking-widest uppercase mb-4 font-sfpro">
            THE PROBLEM
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1128] font-mondwest leading-tight">
            You&apos;ve tried the tools.<br className="hidden sm:block" /> Here&apos;s why they broke.
          </h2>
        </div>

        {/* Pain Point Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-red-100 p-5 flex flex-col gap-3 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-400 flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-sfpro uppercase tracking-widest block leading-none mb-0.5">
                    {point.label}
                  </span>
                  <span className="text-sm font-semibold text-[#0A1128] font-sfpro leading-tight">
                    {point.tool}
                  </span>
                </div>
              </div>
              <p className="text-slate-500 font-sfpro text-sm leading-relaxed border-t border-gray-100 pt-3">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Breakdown: tools gap visualisation */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-10">
          <div className="px-5 py-3 border-b border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest font-sfpro">
              Each tool worked alone. None of them worked together.
            </p>
          </div>
          <div className="divide-y divide-gray-100">
            {breakdownItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-4 px-5 py-4"
              >
                <span className="text-sm font-bold text-blue-600 font-sfpro w-12 sm:w-16 flex-shrink-0">
                  {item.tool}
                </span>
                <span className="text-slate-500 font-sfpro text-sm flex-1">
                  gives you {item.gives}
                </span>
                <div className="flex items-center gap-2">
                  <span className="hidden sm:block text-gray-300 text-sm">but</span>
                  <span className="inline-flex items-center gap-1 bg-red-50 border border-red-100 text-red-500 font-sfpro text-xs font-semibold px-3 py-1 rounded-full">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item.missing}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Punchline — navy callout */}
        <div className="rounded-2xl bg-[#0A1128] px-8 py-8 sm:py-10 text-center relative overflow-hidden">
          {/* subtle top gradient accent */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          <p className="text-white font-mondwest text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-3">
            The tools are commodities.
            <br />
            <span className="text-blue-400">The system that connects them</span> is the moat.
          </p>
          <p className="text-gray-400 font-sfpro text-base sm:text-lg">
            That&apos;s what we build. Not another tool.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProblemSection;
