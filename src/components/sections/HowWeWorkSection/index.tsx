import React from "react";
import Link from "next/link";

const CAL_LINK =
  "https://cal.com/free-ai-clarity-call-avoid-costly-automation-mistakes/30min";

const steps = [
  {
    days: "Day 1–2",
    title: "Discovery",
    description:
      "We get on a call and map your workflows — every call, every follow-up, every manual task. We identify what the AI should handle and what stays human.",
    effort: "You spend: 1 hour on a call with us.",
    deliverable: "We deliver: A clear scope and build plan.",
  },
  {
    days: "Day 3–7",
    title: "Build",
    description:
      "We build the AI system. Voice agent, memory layer, automation workflows — all connected. Integrated with your existing tools (GHL, HubSpot, Calendly, Stripe — whatever you use).",
    effort: "You spend: Nothing. We build.",
    deliverable: null,
  },
  {
    days: "Day 8–11",
    title: "Test",
    description:
      "We run real scenarios through the system. Your edge cases. Your tricky customers. The weird questions. We break it on purpose so it doesn't break on your customers.",
    effort: "You spend: 30 minutes reviewing and giving feedback.",
    deliverable: null,
  },
  {
    days: "Day 12–14",
    title: "Live",
    description:
      "Your AI system goes live. We monitor every interaction from day one. We optimize, fix, and tune. You get a dashboard showing calls handled, appointments booked, and issues flagged.",
    effort: "You spend: Zero. It runs without you.",
    deliverable: null,
  },
];

const HowWeWorkSection = () => {
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
            HOW IT WORKS
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest px-4 mb-2">
            From &ldquo;I need AI&rdquo; to &ldquo;my AI is live.&rdquo;
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-[24px] font-normal text-[#1E293B] font-sfpro px-4">
            14 days.
          </h3>
        </div>

        {/* Timeline Steps */}
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 sm:p-6 lg:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-mondwest text-lg sm:text-xl font-bold">
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-grow">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xs sm:text-sm text-blue-600 font-sfpro font-semibold uppercase tracking-wider">
                    {step.days}
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-[#0A1128] font-mondwest">
                    — {step.title}
                  </span>
                </div>
                <p className="text-slate-600 font-sfpro text-sm sm:text-base leading-relaxed mb-3">
                  {step.description}
                </p>
                <p className="text-slate-800 font-sfpro text-sm sm:text-base font-medium">
                  {step.effort}
                </p>
                {step.deliverable && (
                  <p className="text-blue-600 font-sfpro text-sm sm:text-base font-medium">
                    {step.deliverable}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="text-center">
          <p className="text-slate-700 font-sfpro text-sm sm:text-base lg:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            After day 14, your AI handles the repetitive work.{" "}
            <span className="font-semibold text-[#0A1128]">
              You handle the growth.
            </span>
          </p>
          <Link
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-[#FCCA07] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-[#0A1128] transition-colors hover:bg-yellow-500"
          >
            Book Your Free Discovery Call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkSection;
