import React from "react";

export function Testimonials() {
  return (
    <section className="bg-[#f9f6f4] relative w-full overflow-clip">
      <div className="absolute bg-[#f9f6f4] h-full md:h-[1024px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[1440px]" />
      
      {/* Mobile Layout */}
      <div className="md:hidden relative w-full px-4 py-10">
        <div className="max-w-[327px] mx-auto">
          <div className="content-stretch flex flex-col gap-[24px] items-center">
            {/* Header Section - Mobile */}
            <div className="content-stretch flex flex-col font-['SF_Pro',_sans-serif] font-normal gap-[16px] items-center leading-[0] relative shrink-0 text-center w-full">
              <div className="flex flex-col justify-center relative shrink-0 text-[#e53935] text-[12px] tracking-[0.48px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal]">Testimonials</p>
              </div>
              <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-slate-800 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal]">
                  <span className="text-[20px]">{`What founders say after seeing the `}</span>
                  <span className="text-[#e53935] text-[20px]">leaks.</span>
                </p>
              </div>
            </div>
            
            {/* Testimonial Cards - Mobile */}
            <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
              {/* Card 1 */}
              <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start justify-end overflow-clip p-[16px] relative rounded-[8px] shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-slate-800 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">{`"We saved roughly $110K a year after the audit. The clarity alone was worth it."`}</p>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295 1">
                      <line stroke="#E2E8F0" x2="295" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
                <div className="content-stretch flex gap-[42.91px] items-center relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="flex flex-col font-['SF_Pro',_sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[#0d162f] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[20px]">CEO</p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#868a97] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[16px] whitespace-pre">CRM Platform</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[8px] shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-slate-800 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[24px]">{`"The proof-of-concept agent showed immediate value."`}</p>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295 1">
                      <line stroke="#E2E8F0" x2="295" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
                <div className="content-stretch flex gap-[42.91px] items-center relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="flex flex-col font-['SF_Pro',_sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[#0d162f] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[20px] whitespace-pre">Head of Ops</p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#868a97] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[16px] whitespace-pre">Fintech Company</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative w-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-center px-[40px] py-[64px] relative w-[1120px] mx-auto">
          {/* Header Section */}
          <div className="content-stretch flex flex-col font-['SF_Pro',_sans-serif] font-normal gap-[16px] items-center justify-center leading-[0] relative shrink-0 text-center w-full">
            <div className="flex flex-col justify-center relative shrink-0 text-[#e53935] text-[14px] tracking-[0.56px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[normal]">TESTIMONIALS</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0 text-[24px] text-nowrap text-slate-800" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[normal] whitespace-pre">
                <span className="text-[24px]">{`What founders say after seeing the `}</span>
                <span className="text-[#e53935] text-[24px]">leaks.</span>
              </p>
            </div>
          </div>
          
          {/* Testimonial Cards */}
          <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full">
          {/* Card 1 */}
          <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[8px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_6px_25px_0px_rgba(0,0,0,0.08),0px_2px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-[362px]">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[16px] text-slate-800 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p>{`"We saved roughly $110K a year after the audit. The clarity alone was worth it."`}</p>
                </div>
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#E2E8F0] relative shrink-0"></div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['SF_Pro',_sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[#0d162f] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[20px]">CEO</p>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#868a97] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[16px]">CRM Platform</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[8px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_6px_25px_0px_rgba(0,0,0,0.08),0px_2px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-[363px]">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[16px] text-slate-800 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p>{`"The proof-of-concept agent showed immediate value."`}</p>
                </div>
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#E2E8F0] relative shrink-0"></div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['SF_Pro',_sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[#0d162f] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[20px]">Head of Ops</p>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#868a97] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[16px]">Fintech Company</p>
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

