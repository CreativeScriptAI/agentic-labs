import React from "react";
import Link from "next/link";

const proofCards = [
  {
    industry: "Healthcare",
    metric: "300 calls handled/month. 85% resolved without human intervention.",
    client: "Healthcare Practice",
  },
  {
    industry: "Real Estate",
    metric: "Doubled booking rate within 48 hours.",
    client: "Real Estate Agency",
  },
  {
    industry: "E-Commerce",
    metric:
      "60% reduction in support tickets. Response time from 4 hours to 12 seconds.",
    client: "E-Commerce Brand",
  },
];

const ProofSection = () => {
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
            RESULTS
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest px-4 mb-2">
            We don&apos;t say &ldquo;trust us.&rdquo;
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-[24px] font-normal text-[#1E293B] font-sfpro px-4">
            We show you what we built.
          </h3>
        </div>

        {/* Featured Case Study */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="rounded-lg bg-red-500 px-2 sm:px-3 py-1 text-gray-50 font-sfpro text-xs sm:text-sm font-medium">
              FEATURED
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 font-mondwest mb-4">
            PatientlyAI — AI Voice Agent for Healthcare
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h4 className="text-sm sm:text-base font-semibold text-[#0A1128] font-sfpro mb-2">
                The problem:
              </h4>
              <p className="text-slate-600 font-sfpro text-sm sm:text-base leading-relaxed">
                A healthcare practice was losing leads every week because calls
                went unanswered after hours.
              </p>
            </div>

            <div>
              <h4 className="text-sm sm:text-base font-semibold text-[#0A1128] font-sfpro mb-2">
                The system we built:
              </h4>
              <p className="text-slate-600 font-sfpro text-sm sm:text-base leading-relaxed">
                Voice agent that calls new leads instantly. Follows up Day 1
                through Day 5. Qualifies and handles objections. Books straight
                into GoHighLevel. Sends a Stripe deposit by SMS. Runs a T-24h
                reminder call.
              </p>
            </div>

            <div>
              <h4 className="text-sm sm:text-base font-semibold text-[#0A1128] font-sfpro mb-2">
                The result:
              </h4>
              <p className="text-slate-600 font-sfpro text-sm sm:text-base leading-relaxed">
                [X calls handled, X bookings increased, X no-shows reduced, X
                hours saved per week]
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/agent/patientlyai"
              className="inline-block rounded-lg bg-blue-600 text-white font-sfpro text-sm sm:text-base font-medium px-4 sm:px-6 py-2 sm:py-3 hover:bg-blue-700 transition-colors"
            >
              Try PatientlyAI &rarr;
            </Link>
          </div>
        </div>

        {/* Proof Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {proofCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 sm:p-6"
            >
              <p className="text-xs sm:text-sm text-red-500 font-sfpro uppercase tracking-wider mb-2">
                {card.industry}
              </p>
              <p className="text-slate-700 font-sfpro text-sm sm:text-base leading-relaxed mb-3">
                &ldquo;{card.metric}&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-sfpro">
                — {card.client}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial highlight */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sm:p-8 text-center">
          <p className="text-slate-700 font-sfpro text-base sm:text-lg lg:text-xl leading-relaxed italic mb-4">
            &ldquo;Within 48 hours they built an AI caller that doubled our
            booking rate. It feels like having a full-time receptionist who never
            sleeps.&rdquo;
          </p>
          <p className="text-sm sm:text-base text-slate-500 font-sfpro font-medium">
            — Aiden, Founder
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProofSection;
