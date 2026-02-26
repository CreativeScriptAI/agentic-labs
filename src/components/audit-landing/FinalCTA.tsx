import svgPaths from "src/imports/audit-landing/svg-qb86qx90z2";

export function FinalCTA() {
  const handlePrimaryCTA = () => {
    // Scroll to hero section or open booking modal
    window.open(
      "https://cal.com/free-ai-clarity-call-avoid-costly-automation-mistakes/30min",
      "_blank"
    );
  };

  const handleSecondaryCTA = () => {
    // Open sample audit or navigate to sample page
    window.open("https://yourdomain.com/sample-audit", "_blank");
  };

  return (
    <section className="bg-[#f9f6f4] min-h-[600px] md:h-[813px] overflow-clip relative shrink-0 w-full py-12 md:py-0">
      <div className="absolute bg-[#f9f6f4] h-full md:h-[463px] left-1/2 top-1/2 md:top-[calc(50%-175px)] -translate-x-1/2 -translate-y-1/2 w-full md:w-[1440px]" />

      {/* Mobile Layout */}
      <div className="md:hidden relative w-full px-4">
        <div className="max-w-[375px] mx-auto">
          <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip p-[24px] relative shrink-0 w-full">
            {/* Blue gradient background - Mobile */}
            <div className="absolute bottom-[-145px] h-[438px] left-[calc(50%+0.5px)] translate-x-[-50%] w-[728px] pointer-events-none">
              <div className="absolute inset-[-36.53%_-21.98%]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 1048 758"
                >
                  <g
                    filter="url(#filter0_f_100_3665)"
                    id="Ellipse 990"
                    opacity="0.2"
                  >
                    <path
                      d={svgPaths.p343e1580}
                      fill="url(#paint0_linear_100_3665)"
                    />
                  </g>
                  <defs>
                    <filter
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                      height="758"
                      id="filter0_f_100_3665"
                      width="1048"
                      x="0"
                      y="0"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="shape"
                      />
                      <feGaussianBlur
                        result="effect1_foregroundBlur_100_3665"
                        stdDeviation="80"
                      />
                    </filter>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint0_linear_100_3665"
                      x1="510.718"
                      x2="510.718"
                      y1="121.621"
                      y2="714.918"
                    >
                      <stop stopColor="#0062FF" />
                      <stop offset="1" stopColor="#0062FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Content - Mobile */}
            <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full z-10">
              {/* Header - Mobile */}
              <div className="content-stretch flex flex-col font-['SF_Pro',_sans-serif] font-normal gap-[24px] items-center leading-[0] relative shrink-0 text-center w-full">
                <div
                  className="css-4muush flex flex-col justify-center relative shrink-0 text-[#e53935] text-[14px] tracking-[0.56px] uppercase w-full"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <p className="leading-[normal]">Ready to find your leaks?</p>
                </div>
                <div
                  className="flex flex-col justify-center relative shrink-0 text-[#0a1128] text-[24px] tracking-[-0.48px] w-full"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <p className="leading-[normal]">{`Don't guess where your business is leaking, know it. `}</p>
                </div>
              </div>

              {/* Body Text - Mobile */}
              <div
                className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-center text-slate-600 w-[min-content]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="leading-[normal]">
                  Join 50+ SaaS teams who found hidden $$ inside their
                  workflows. Book your Free Clarity Call today - and see your
                  ops differently in 20 minutes.
                </p>
              </div>

              {/* CTA Buttons - Mobile Stacked */}
              <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
                  <button
                    className="bg-[#0062ff] box-border content-stretch flex gap-[6px] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 hover:bg-[#0052d9] transition-colors duration-300 w-full"
                    onClick={handlePrimaryCTA}
                  >
                    <div
                      className="flex flex-col font-['SF_Pro',_sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[#f8f9fa] text-[14px] text-nowrap"
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

                <button
                  className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 hover:bg-[#0062ff]/5 transition-colors duration-300 w-full"
                  onClick={handleSecondaryCTA}
                >
                  <div
                    aria-hidden="true"
                    className="absolute border border-[#0062ff] border-solid inset-0 pointer-events-none rounded-[8px]"
                  />
                  <div
                    className="flex flex-col font-['SF_Pro',_sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[#0062ff] text-[14px] text-nowrap"
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
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block absolute box-border content-stretch flex flex-col gap-[24px] h-[463px] items-center justify-center left-1/2 overflow-clip px-[40px] py-[64px] top-[calc(50%-175px)] -translate-x-1/2 -translate-y-1/2 w-[1440px]">
        {/* Blue gradient background */}
        <div className="absolute bottom-[-296.5px] h-[676px] left-1/2 -translate-x-1/2 w-[1120px]">
          <div className="absolute inset-[-23.67%_-14.29%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1440 996"
            >
              <g
                filter="url(#filter0_f_100_2144)"
                id="Ellipse 989"
                opacity="0.2"
              >
                <path
                  d={svgPaths.p343e1580}
                  fill="url(#paint0_linear_100_2144)"
                />
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="996"
                  id="filter0_f_100_2144"
                  width="1440"
                  x="0"
                  y="0"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="shape"
                  />
                  <feGaussianBlur
                    result="effect1_foregroundBlur_100_2144"
                    stdDeviation="80"
                  />
                </filter>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_100_2144"
                  x1="699.566"
                  x2="699.566"
                  y1="100.766"
                  y2="1016.45"
                >
                  <stop stopColor="#0062FF" />
                  <stop offset="1" stopColor="#0062FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-[1120px]">
          {/* Header */}
          <div className="content-stretch flex flex-col font-['SF_Pro',_sans-serif] font-normal gap-[16px] items-center justify-center leading-[0] relative shrink-0 text-center w-full">
            <div
              className="css-4muush flex flex-col justify-center relative shrink-0 text-[#e53935] text-[14px] text-nowrap tracking-[0.56px] uppercase"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <p className="leading-[normal] whitespace-pre">
                Ready to find your leaks?
              </p>
            </div>
            <div
              className="flex flex-col justify-center relative shrink-0 text-[#0a1128] text-[32px] tracking-[-0.64px] w-[418px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <p className="leading-[normal]">{`Don't guess where your business is leaking, know it. `}</p>
            </div>
          </div>

          {/* Body Text */}
          <div
            className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-slate-600 w-[444px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[normal]">
              Join 50+ SaaS teams who found hidden $$ inside their workflows.
              Book your Free Clarity Call today - and see your ops differently
              in 20 minutes.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
              <button
                className="bg-[#0062ff] box-border content-stretch flex gap-[6px] items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 hover:bg-[#0052d9] transition-colors duration-300"
                onClick={handlePrimaryCTA}
              >
                <div
                  className="flex flex-col font-['SF_Pro',_sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[#f8f9fa] text-[14px] text-nowrap"
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

            <button
              className="box-border content-stretch flex gap-[8px] items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 hover:bg-[#0062ff]/5 transition-colors duration-300"
              onClick={handleSecondaryCTA}
            >
              <div
                aria-hidden="true"
                className="absolute border border-[#0062ff] border-solid inset-0 pointer-events-none rounded-[8px]"
              />
              <div
                className="flex flex-col font-['SF_Pro',_sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[#0062ff] text-[14px] text-nowrap"
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
    </section>
  );
}
