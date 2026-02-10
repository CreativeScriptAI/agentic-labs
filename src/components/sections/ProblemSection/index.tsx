import React from "react";

const painPoints = [
  {
    tool: "Retell.ai / Vapi",
    label: "Voice",
    description:
      "The AI sounded great until a customer called back and it had no idea who they were.",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      className="py-12 sm:py-16 lg:py-20"
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6">
            THE PROBLEM
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest px-4">
            You&apos;ve tried the tools. Here&apos;s why they broke.
          </h2>
        </div>

        {/* Pain Point Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 sm:p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-500 flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-sfpro uppercase tracking-wider block">
                    {point.label}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#0A1128] font-sfpro">
                    {point.tool}
                  </span>
                </div>
              </div>
              <p className="text-slate-600 font-sfpro text-sm sm:text-base leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Punch line above breakdown */}
        <p className="text-center text-[#0A1128] font-sfpro text-base sm:text-lg lg:text-xl font-semibold leading-relaxed mb-6 sm:mb-8">
          Each tool worked alone. None of them worked together.
        </p>

        {/* Breakdown callout */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-100">
            {breakdownItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-4"
              >
                <span className="text-sm sm:text-base font-semibold text-blue-600 font-sfpro w-14 sm:w-16 flex-shrink-0">
                  {item.tool}
                </span>
                <span className="text-slate-600 font-sfpro text-sm sm:text-base">
                  gives you {item.gives}
                </span>
                <span className="text-slate-300 mx-1">—</span>
                <span className="text-red-500 font-sfpro text-sm sm:text-base font-medium">
                  {item.missing}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Punchline + Bridge */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#0A1128] font-mondwest text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            The tools are commodities.
            <br />
            The system that connects them is the moat.
          </p>
          <p className="text-blue-600 font-sfpro text-base sm:text-lg font-medium">
            That&apos;s what we build. Not another tool.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
