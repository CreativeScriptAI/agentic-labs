import React from "react";
import svgPaths from "src/imports/audit-landing/svg-tk0zski4ej";
import { AIROITicker } from "./AIROITicker";

// Star icon component
function Star() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <path d={svgPaths.p1bf29d00} fill="#FFD60A" />
      </svg>
    </div>
  );
}

export function SocialProof() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full">
      {/* Desktop - 17: Problem Statement Section */}
      <div className="bg-[#f9f6f4] min-h-[338px] py-8 pb-16 overflow-visible relative shrink-0 w-full">
        <div className="absolute bg-[#f9f6f4] h-[1199px] left-1/2 top-[calc(50%+304.5px)] translate-x-[-50%] translate-y-[-50%] w-[1440px]" />

        <div className="relative content-stretch flex flex-col gap-[40px] items-center mx-auto w-[552px] max-w-full px-4 pb-8">
          <div
            className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[24px] text-center text-slate-800 w-[min-content]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[normal] px-[120px] py-[0px]">
              <span className="text-[20px] p-[0px]">
                Most teams either underuse or misuse AI wasting thousands{" "}
              </span>
              <span className="text-slate-500 text-[20px]">
                (tickets, reports, handoffs)
              </span>
              <span className="text-[20px]"> of hours on boring stuff...</span>
            </p>
          </div>

          <div className="content-stretch flex flex-col gap-[16px] items-center leading-[0] relative shrink-0 text-[24px] text-center m-[0px] p-[0px]">
            <div
              className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center relative shrink-0 text-[#0062ff]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <p className="leading-[normal] whitespace-pre text-[20px]">
                <span className="text-[20px]">Our AI Audit finds </span>
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">
                  leaks
                </span>
                <span> + </span>
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">
                  shows the $$$ saved
                </span>
              </p>
            </div>
            <div className="flex flex-col font-['Kalam',_sans-serif] justify-center not-italic relative shrink-0 text-slate-400 w-[356px]">
              <p className="leading-[normal] text-[16px]">
                ...and then we fix 'em!
              </p>
            </div>
          </div>

          {/* CTA Buttons - Moved from Hero */}
          <div className="flex flex-col sm:flex-row gap-[24px] items-start justify-center px-4 mt-4">
            {/* Primary CTA */}
            <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full sm:w-auto">
              <button
                className="bg-[#0062ff] hover:bg-[#0052d9] box-border content-stretch flex gap-[6px] items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 transition-colors duration-300 w-full sm:w-auto"
                onClick={() => window.open("https://calendly.com", "_blank")}
              >
                <div
                  className="flex flex-col font-['SF_Pro',_sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[14px] text-[#f8f9fa] text-nowrap"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <p className="leading-[20px] whitespace-pre">
                    Get Your AI Audit
                  </p>
                </div>
              </button>
              <p className="font-['Kalam',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[12px] text-center text-nowrap whitespace-pre">
                Just takes 60 seconds to book.
              </p>
            </div>

            {/* Secondary CTA */}
            <button className="border border-[#0062ff] border-solid box-border content-stretch flex gap-[8px] items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 bg-transparent hover:bg-[#0062ff]/5 transition-colors duration-300 w-full sm:w-auto">
              <div
                className="flex flex-col font-['SF_Pro',_sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[14px] text-[#0062ff] text-nowrap hover:text-[#0052d9]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="leading-[20px] whitespace-pre">
                  See Sample Audit
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop - 16: Social Proof Section */}
      <div className="bg-[#f9f6f4] h-[438px] overflow-clip relative shrink-0 w-full">
        <div className="absolute bg-[#f9f6f4] h-[1199px] left-1/2 top-[calc(50%+219.5px)] translate-x-[-50%] translate-y-[-50%] w-[1440px]" />

        <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-1/2 top-[40px] translate-x-[-50%] w-[1440px]">
          <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
            {/* Rating Card */}
            <div className="border border-[#cbd5e1] border-solid box-border content-stretch flex flex-col gap-[10px] items-start px-[16px] py-[14px] relative rounded-[8px] w-[237px] mx-auto shrink-0">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    {[...Array(5).keys()].map((i) => (
                      <Star key={i} />
                    ))}
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0 text-nowrap whitespace-pre">
                    <p
                      className="font-['SF_Pro',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0062ff] text-[20px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      4.9/5
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trusted Section */}
            <div className="relative shrink-0 w-full">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[160px] py-0 relative w-full">
                  <div className="flex flex-col font-['Kalam',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e53935] text-[14px] text-center uppercase w-full mb-2">
                    <p className="leading-[normal]">
                      Trusted by founders, FROM:
                    </p>
                  </div>

                  {/* AI ROI Ticker - Replaced scrolling logos */}
                  <div className="w-full -mx-[160px] px-0">
                    <AIROITicker />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
