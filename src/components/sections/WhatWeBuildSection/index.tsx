import React from "react";

const layers = [
  {
    number: "01",
    label: "VOICE",
    title: "Your AI talks.",
    description:
      "It picks up calls. Answers questions. Qualifies leads. Handles conversations that used to take your team hours.",
    tagline: "Not a script. A real conversation.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "MEMORY",
    title: "Your AI remembers.",
    description:
      "Every customer. Every conversation. Every preference. It gets smarter every month. Returning callers never repeat themselves.",
    tagline: "Not a database. Intelligence.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "ACTION",
    title: "Your AI acts.",
    description:
      "Books appointments. Updates your CRM. Sends follow-ups. Triggers workflows. Processes requests.",
    tagline: "Not a task list. Autonomous action.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const WhatWeBuildSection = () => {
  return (
    <div
      id="what_we_build"
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
        <div className="text-center mb-6 sm:mb-10">
          <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6">
            WHAT WE BUILD
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1128] font-mondwest px-4 mb-2">
            Talk. Remember. Act.
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-[24px] font-normal text-[#1E293B] font-sfpro px-4">
            One AI system. Three layers. Zero babysitting.
          </h3>
        </div>

        {/* Intro */}
        <p className="text-center text-slate-600 font-sfpro text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-14 px-4">
          We don&apos;t sell you a voice agent. We don&apos;t sell you an
          automation. We build one AI system where everything is connected.
        </p>

        {/* Three Layers — horizontal on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 mb-10 sm:mb-14">
          {layers.map((layer, index) => (
            <div
              key={index}
              className={`relative p-6 sm:p-8 ${
                index < layers.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-gray-200"
                  : ""
              }`}
            >
              {/* Number + Label */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl sm:text-4xl font-bold text-blue-600/15 font-mondwest leading-none">
                  {layer.number}
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                    {layer.icon}
                  </div>
                  <span className="text-[10px] sm:text-xs text-blue-600 font-sfpro font-semibold uppercase tracking-widest">
                    {layer.label}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h4 className="text-lg sm:text-xl font-bold text-[#0A1128] font-mondwest mb-3">
                {layer.title}
              </h4>

              {/* Description */}
              <p className="text-slate-600 font-sfpro text-sm sm:text-base leading-relaxed mb-4">
                {layer.description}
              </p>

              {/* Tagline */}
              <p className="text-blue-600 font-sfpro text-xs sm:text-sm font-semibold tracking-wide">
                {layer.tagline}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-10 h-0.5 bg-blue-600 mx-auto mb-6 sm:mb-8" />
          <p className="text-slate-700 font-sfpro text-sm sm:text-base lg:text-lg leading-relaxed">
            Most AI gives you one of these. We connect all three.{" "}
            <span className="font-semibold text-[#0A1128]">
              That&apos;s the difference between a demo and a system.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeBuildSection;
