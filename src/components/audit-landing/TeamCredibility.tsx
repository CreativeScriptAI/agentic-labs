import React from "react";
import svgPaths from "src/imports/audit-landing/svg-lafhi9atqf";

function ArrowUpRight({ color = "#0062FF" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="ArrowUpRight">
          <path d={svgPaths.p12e71f00} fill={color} id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export function TeamCredibility() {
  return (
    <section className="bg-[#f9f6f4] relative py-20 overflow-clip">
      <div className="absolute bg-[#f9f6f4] h-[822px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1440px]" />

      <div className="relative content-stretch flex flex-col gap-[64px] items-center justify-center w-full max-w-[1200px] mx-auto px-4">
        {/* Header Section */}
        <div className="content-stretch flex flex-col gap-[24px] items-center text-center w-full">
          <div
            className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center text-[#e53935] text-[14px] tracking-[0.06em] uppercase w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[normal]">
              WHO&apos;S ACTUALLY RUNNING YOUR AI AUDIT?
            </p>
          </div>
          <div
            className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center text-[24px] text-slate-800 w-full max-w-[70ch]"
            style={{ fontVariationSettings: "'wdth' 100", lineHeight: "1.2" }}
          >
            <p className="leading-[1.2]">
              Real engineers. Real experience. Real results.
            </p>
          </div>
        </div>

        {/* Main Content Section - 60/40 Layout */}
        <div className="content-stretch flex flex-col lg:flex-row items-start justify-between gap-[40px] lg:gap-[56px] w-full">
          {/* Left Column - Text Content (60%) with Card */}
          <div className="w-full lg:w-[60%] flex flex-col">
            <div className="bg-white/50 backdrop-blur-sm border border-[rgba(0,0,0,0.06)] rounded-[16px] p-6 md:p-7 flex flex-col gap-[24px]">
              {/* First Paragraph */}
              <div className="flex flex-col gap-[16px]">
                {/* Badges */}
                <div className="flex flex-wrap gap-[8px] items-center">
                  <div className="bg-slate-100/80 px-3 py-2 rounded-[10px] border border-slate-200/50">
                    <p
                      className="font-['SF_Pro',_sans-serif] font-[510] text-[14px] text-slate-700 whitespace-nowrap"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      10+ production AI agents
                    </p>
                  </div>
                  <div className="bg-slate-100/80 px-3 py-2 rounded-[10px] border border-slate-200/50">
                    <p
                      className="font-['SF_Pro',_sans-serif] font-[510] text-[14px] text-slate-700 whitespace-nowrap"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Core team: 10+ experts
                    </p>
                  </div>
                </div>

                {/* First Paragraph */}
                <p
                  className="font-['SF_Pro',_sans-serif] font-normal text-[16px] text-slate-600 leading-[1.6] max-w-[70ch]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Your audit isn&apos;t done by some random chatbot - it&apos;s led by the
                  same team that has shipped{" "}
                  <span className="font-[510] text-slate-800">
                    10+ production-level AI agents
                  </span>{" "}
                  for real businesses.
                </p>
              </div>

              {/* Bullet Points */}
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-start">
                  <span className="text-green-600 text-xl mt-0.5 shrink-0">
                    ✅
                  </span>
                  <p
                    className="font-['SF_Pro',_sans-serif] font-normal text-[16px] text-slate-600 leading-[1.6] flex-1"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Built and deployed{" "}
                    <span className="font-[590]">agentic AI systems</span>
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-green-600 text-xl mt-0.5 shrink-0">
                    ✅
                  </span>
                  <p
                    className="font-['SF_Pro',_sans-serif] font-normal text-[16px] text-slate-600 leading-[1.6] flex-1"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Automate workflows & surface insights
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-green-600 text-xl mt-0.5 shrink-0">
                    ✅
                  </span>
                  <p
                    className="font-['SF_Pro',_sans-serif] font-normal text-[16px] text-slate-600 leading-[1.6] flex-1"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Deliver <span className="font-[590]">measurable ROI</span>{" "}
                    across industries
                  </p>
                </div>
              </div>

              {/* Bottom Text with Highlight Chip */}
              <div className="flex flex-col gap-[12px]">
                <p
                  className="font-['SF_Pro',_sans-serif] font-normal text-[16px] text-slate-600 leading-[1.6]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  We know what works in the real world.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-[10px] transition-all duration-300 cursor-pointer group max-w-fit"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <span
                    className="font-['SF_Pro',_sans-serif] font-[510] text-[14px] text-[#0062ff] group-hover:underline"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    We&apos;ve built it, tested it, and scaled it →
                  </span>
                </a>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col gap-2">
                <button
                  className="bg-[#0062ff] hover:bg-[#0052d9] box-border flex gap-[8px] items-center justify-center px-[24px] py-[12px] rounded-[8px] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0062ff] focus-visible:ring-offset-2"
                  onClick={() =>
                    window.open("https://yourdomain.com/agents", "_blank")
                  }
                >
                  <span
                    className="font-['SF_Pro',_sans-serif] font-[510] text-[14px] text-white"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    See all AI Agents we&apos;ve built
                  </span>
                  <ArrowUpRight color="#FFFFFF" />
                </button>
                <p
                  className="font-['SF_Pro',_sans-serif] font-normal text-[12px] text-slate-500 text-center"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Opens live examples we&apos;ve shipped.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image (40%) */}
          <div className="w-full lg:w-[40%] flex items-center justify-center order-last mt-8 lg:mt-0">
            <div
              className="relative w-full max-w-[362px] flex items-center justify-center"
              style={{ transform: "scale(0.87)" }}
            >
              <div
                className="relative w-full"
                style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.08))" }}
              >
                {/* Main Image */}
                <div className="relative w-full h-[383px] overflow-hidden">
                  <img
                    alt="AI engineer working on laptop"
                    className="w-full h-full object-contain"
                    src="/images/audit/2a9b413bd28e4738a1ff1198e9fe4fe7f64d1fbe.png"
                  />

                  {/* Blue highlight bar behind badge */}
                  <div className="absolute bg-[#0952ff] h-[49.615px] left-[133.25px] top-[201.66px] w-[114.169px]" />

                  {/* AI For Lyf Badge - Rotated */}
                  <div
                    className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.1892606019973755)+(var(--transform-inner-height)*0.9819269180297852)))] items-center justify-center left-[129px] top-[202px] w-[calc(1px*((var(--transform-inner-height)*0.1892606019973755)+(var(--transform-inner-width)*0.9819269180297852)))]"
                    style={
                      {
                        "--transform-inner-width": "72.15625",
                        "--transform-inner-height": "24",
                      } as React.CSSProperties
                    }
                  >
                    <div className="flex-none rotate-[349.09deg]">
                      <div className="bg-[#ffd60a] box-border content-stretch flex gap-[8px] items-center justify-center px-[6px] py-[4px] relative border border-[#f8f9fa] border-solid shadow-[-1px_1px_0px_0px_rgba(0,0,0,0.25)]">
                        <div className="flex flex-col font-['PP_Mondwest',_sans-serif] justify-center not-italic text-[#0a1128] text-[14px]">
                          <p className="leading-[normal]">AI For Lyf</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
