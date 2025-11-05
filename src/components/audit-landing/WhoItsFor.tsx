import React from "react";
import svgPaths from "../imports/audit-landing/svg-106z9v1fri";

function CheckIcon() {
  return <div className="bg-[#0062ff] shrink-0 size-[20px]" />;
}

function CheckIconMuted() {
  return <div className="bg-[#cbd5e1] shrink-0 size-[20px]" />;
}

export function WhoItsFor() {
  const handleCTAClick = () => {
    // Scroll to hero section or open booking modal
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-[#f9f6f4] relative py-20 overflow-clip">
      <div className="absolute bg-[#f9f6f4] h-[822px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1440px]" />

      <div className="relative content-stretch flex flex-col gap-[64px] items-center justify-center w-full max-w-[1120px] mx-auto px-4">
        {/* Header Section */}
        <div className="content-stretch flex flex-col gap-[16px] items-center text-center w-full">
          <div
            className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center text-[#e53935] text-[14px] tracking-[0.56px] uppercase w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[normal]">Is this AI Audit for you?</p>
          </div>
          <div
            className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center text-[24px] text-[#1e293b] w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[normal]">
              Not everyone needs it - but the right people see massive ROI.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full max-w-[1120px]">
          <div className="content-stretch flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-[16px] relative shrink-0 w-full">
            {/* Who it's for Card */}
            <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[8px] shrink-0 w-full lg:w-[552px]">
              <div
                className="flex flex-col font-['SF_Pro',_sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[20px] text-[#0f172a] w-full"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="leading-[normal]">Who it's for:</p>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                  <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[4px] relative shrink-0">
                    <div className="bg-[#0062ff] shrink-0 size-[20px]" />
                  </div>
                  <p
                    className="basis-0 font-['SF_Pro',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-[#475569]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Founders, business owners, and teams who want to use AI to
                    cut operational costs and boost efficiency.
                  </p>
                </div>
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                  <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[4px] relative shrink-0">
                    <div className="bg-[#0062ff] shrink-0 size-[20px]" />
                  </div>
                  <p
                    className="basis-0 font-['SF_Pro',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-[#475569]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Companies already using AI but not sure if it's working or
                    wasting money.
                  </p>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                  <div className="box-border content-stretch flex gap-[8px] items-start px-0 py-[4px] relative shrink-0">
                    <div className="bg-[#0062ff] shrink-0 size-[20px]" />
                  </div>
                  <p
                    className="basis-0 font-['SF_Pro',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-[#475569]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Businesses ready to implement AI the right way - practical,
                    measurable, and fast.
                  </p>
                </div>
              </div>
            </div>

            {/* Who it's not for Card */}
            <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[8px] shrink-0 w-full lg:w-[552px]">
              <div
                className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-[#0f172a] w-full max-w-[433px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="leading-[normal]">
                  <span>{`Who it's `}</span>
                  <span
                    className="font-['SF_Pro',_sans-serif] font-[590]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >{`not `}</span>
                  for:
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[280px]">
                  <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[4px] relative shrink-0">
                    <div className="bg-gray-400 shrink-0 w-[20px] h-[20px] block" />
                  </div>
                  <p
                    className="basis-0 font-['SF_Pro',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-[#475569]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    People chasing hype
                    <br />
                    without clear goals.
                  </p>
                </div>
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                  <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[4px] relative shrink-0">
                    <div className="bg-gray-400 shrink-0 w-[20px] h-[20px] block" />
                  </div>
                  <p
                    className="font-['SF_Pro',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[#475569] w-[233px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Teams who'd rather
                    <br />
                    discuss AI than deploy it.
                  </p>
                </div>
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
                  <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[4px] relative shrink-0">
                    <div className="bg-gray-400 shrink-0 w-[20px] h-[20px] block" />
                  </div>
                  <p
                    className="font-['SF_Pro',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[#475569] w-[231px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Anyone comfortable
                    <br />
                    falling behind competitors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="content-stretch flex flex-col gap-[24px] items-center">
            <div
              className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center text-[16px] text-center text-[#475569] w-full max-w-[684px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <p className="leading-[normal]">
                <span>{`If you're serious about finding where your business is leaking money, and how AI can fix it. `}</span>
                <span className="text-[#0062ff]">
                  This audit is built for you.
                </span>
              </p>
            </div>
            <button
              className="bg-[#0062ff] box-border content-stretch flex gap-[6px] items-center px-[24px] py-[12px] rounded-[8px] hover:bg-[#0052d9] transition-colors duration-300"
              onClick={handleCTAClick}
            >
              <div
                className="flex flex-col font-['SF_Pro',_sans-serif] font-[510] justify-center text-[#f8f9fa] text-[14px] text-nowrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="leading-[20px] whitespace-pre">
                  Get Your AI Audit
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
