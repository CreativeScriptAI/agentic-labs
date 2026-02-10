import React from "react";
import Link from "next/link";

const CALENDLY_LINK =
  "https://calendly.com/creative-script/get-free-ai-clarity?month=2025-11";

const forYouItems = [
  "You have a working product and real customers.",
  "You're spending hours on tasks an AI could handle — calls, follow-ups, support, scheduling.",
  "You've tried building AI yourself and hit the wall. It works in a demo. It breaks in production.",
  "You want a system that runs without you — not another tool to manage.",
  "Your budget is $5K+ and you're serious about making AI work, not just playing with it.",
];

const notForYouItems = [
  "You need a $500 chatbot.",
  'You want to "explore AI" with no clear business need.',
  "You want to manage the AI yourself (we build it to run without you).",
];

const WhoItsForSection = () => {
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
            IS THIS FOR YOU?
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest px-4 mb-2">
            Built for founders who have traction
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-[24px] font-normal text-[#1E293B] font-sfpro px-4">
            but not enough time.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* This is for you */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sm:p-8">
            <h4 className="text-base sm:text-lg font-bold text-[#0A1128] font-mondwest mb-4 sm:mb-6">
              This is for you if:
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {forYouItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-600 font-sfpro text-sm sm:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* This is NOT for you */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sm:p-8">
            <h4 className="text-base sm:text-lg font-bold text-[#0A1128] font-mondwest mb-4 sm:mb-6">
              This is NOT for you if:
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {notForYouItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-600 font-sfpro text-sm sm:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center">
          <p className="text-slate-700 font-sfpro text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
            If you&apos;re nodding at the first list, we should talk.
          </p>
          <Link
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-[#FCCA07] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-[#0A1128] transition-colors hover:bg-yellow-500"
          >
            Book a Free Call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhoItsForSection;
