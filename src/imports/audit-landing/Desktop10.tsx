import svgPaths from "./svg-0nz4hwa6tp";

function Frame2147227058() {
  return (
    <div className="bg-[#0062ff] box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-slate-50" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Contact Us</p>
      </div>
    </div>
  );
}

function Frame2147227056() {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-center left-[calc(87.5%-142px)] top-[30px] translate-x-[-50%]">
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-slate-600" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Automation Vault</p>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-slate-600" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Press Release</p>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-slate-600" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">About Us</p>
      </div>
      <Frame2147227058 />
    </div>
  );
}

function Container() {
  return <div className="absolute bg-gradient-to-r blur-[13px] filter from-[rgba(0,98,255,0.2)] left-[-6.5px] rounded-[26px] size-[16.25px] to-[rgba(0,98,255,0.2)] top-[-6.5px] via-50% via-[rgba(10,17,40,0.1)]" data-name="Container" />;
}

function Container1() {
  return <div className="bg-gradient-to-t from-[rgba(0,98,255,0.05)] h-0 shrink-0 to-[rgba(0,0,0,0)] w-full" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] left-0 rounded-[22.75px] size-[3.25px] top-0" data-name="Container">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-[1.625px] relative rounded-[inherit] size-[3.25px]">
        <Container1 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.625px] border-[rgba(10,17,40,0.05)] border-solid inset-0 pointer-events-none rounded-[22.75px] shadow-[0px_32.5px_40.625px_-8.125px_rgba(0,0,0,0.1),0px_13px_16.25px_-9.75px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute left-[calc(91.667%-122.25px)] size-[3.25px] top-[150px]" data-name="Container">
      <Container />
      <Container2 />
    </div>
  );
}

export default function Desktop10() {
  return (
    <div className="bg-[#f9f6f4] relative size-full" data-name="Desktop - 10">
      <div className="absolute bg-[#f9f6f4] h-[1024px] left-1/2 top-[calc(50%+283px)] translate-x-[-50%] translate-y-[-50%] w-[1440px]" />
      <div className="absolute bottom-[183px] flex h-[676px] items-center justify-center left-1/2 translate-x-[-50%] w-[1120px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[676px] relative w-[1120px]">
            <div className="absolute inset-[-23.67%_-14.29%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 996">
                <g filter="url(#filter0_f_4_56)" id="Ellipse 989" opacity="0.2">
                  <path d={svgPaths.p18951780} fill="url(#paint0_linear_4_56)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="996" id="filter0_f_4_56" width="1440" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_4_56" stdDeviation="80" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4_56" x1="699.566" x2="699.566" y1="100.766" y2="1016.45">
                    <stop stopColor="#0062FF" />
                    <stop offset="1" stopColor="#0062FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col font-['PP_Mondwest:Regular',_sans-serif] justify-center leading-[0] left-[231px] not-italic text-[#0062ff] text-[24px] text-center text-nowrap top-[56px] tracking-[-0.48px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Agentic AI Labs</p>
      </div>
      <Frame2147227056 />
      <Container3 />
    </div>
  );
}