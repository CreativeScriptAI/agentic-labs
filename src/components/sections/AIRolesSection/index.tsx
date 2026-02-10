import React from "react";
import Link from "next/link";

const CALENDLY_LINK =
  "https://calendly.com/creative-script/get-free-ai-clarity?month=2025-11";

const roles = [
  {
    industry: "Healthcare / Clinics",
    role: "AI Receptionist",
    description:
      "Answers every call. Books appointments. Remembers returning patients. Sends confirmations. 24/7.",
    metric: "X calls handled/month for a dental practice",
  },
  {
    industry: "Recruiting / HR",
    role: "AI Interviewer",
    description:
      "Conducts first-round voice screenings. Scores candidates. Pushes qualified ones to your pipeline. Your team only talks to people worth talking to.",
    metric: "X candidates screened/week",
  },
  {
    industry: "E-Commerce",
    role: "AI Support Rep",
    description:
      "Handles returns, order status, product questions. Remembers each customer's history. They never repeat themselves.",
    metric: "X% reduction in support tickets",
  },
  {
    industry: "Real Estate",
    role: "AI Showing Coordinator",
    description:
      "Answers property inquiries. Qualifies buyers. Schedules showings. Syncs everything to your CRM.",
    metric: "X showings booked/month",
  },
  {
    industry: "Home Services",
    role: "AI Dispatch Agent",
    description:
      "Answers service calls. Qualifies urgency. Books service windows. Notifies technicians. Never misses a call.",
    metric: "X service calls handled/month",
  },
  {
    industry: "Agencies",
    role: "AI SDR",
    description:
      "Calls leads. Qualifies them. Books meetings. Updates CRM. White-labeled under your brand.",
    metric: null,
    link: { text: "Learn about our agency partnership", href: "#" },
  },
];

const industryIcons: Record<string, React.ReactNode> = {
  "Healthcare / Clinics": (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  "Recruiting / HR": (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  "E-Commerce": (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  ),
  "Real Estate": (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  "Home Services": (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Agencies: (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
};

const AIRolesSection = () => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6">
            BUILT FOR YOUR BUSINESS
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest px-4 mb-2">
            We don&apos;t build generic AI.
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest px-4">
            We build your AI{" "}
            <span className="text-blue-600">role</span>.
          </h3>
        </div>

        {/* Intro text */}
        <p className="text-center text-slate-600 font-sfpro text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-4">
          Every business is different. The AI system we build for a dental
          practice looks different from one we build for a recruiting firm. But
          the engine is the same: voice + memory + automation, working as one.
        </p>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 sm:p-6 flex flex-col hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  {industryIcons[role.industry] || null}
                </div>
                <span className="text-xs sm:text-sm text-slate-500 font-sfpro uppercase tracking-wider">
                  {role.industry}
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#0A1128] font-mondwest mb-2">
                {role.role}
              </h4>
              <p className="text-slate-600 font-sfpro text-sm sm:text-base leading-relaxed mb-3 flex-grow">
                {role.description}
              </p>
              {role.metric && (
                <p className="text-xs sm:text-sm text-slate-400 font-sfpro italic">
                  [{role.metric}]
                </p>
              )}
              {role.link && (
                <Link
                  href={role.link.href}
                  className="text-sm text-blue-600 font-sfpro font-medium hover:text-blue-700 transition-colors mt-2"
                >
                  {role.link.text} &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="text-center">
          <p className="text-slate-700 font-sfpro text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
            Same system. Different roles. One question:{" "}
            <span className="font-semibold text-[#0A1128]">
              What&apos;s the repetitive job your AI should be doing right now?
            </span>
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

export default AIRolesSection;
