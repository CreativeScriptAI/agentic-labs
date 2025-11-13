import svgPaths from "./svg-vawkqmsybo";

function Frame2147227059() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[0] relative shrink-0 text-center w-[552px]">
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#e53935] text-[14px] tracking-[0.56px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">
          No buzzwords...
          <span className="font-['SF_Pro:Regular',_sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
            Just practical insight
          </span>{" "}
        </p>
      </div>
      <div className="flex flex-col font-['SF_Pro:Medium',_sans-serif] font-[510] justify-center relative shrink-0 text-[#0062ff] text-[24px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">
          <span className="font-['SF_Pro:Regular',_sans-serif] font-normal text-slate-800" style={{ fontVariationSettings: "'wdth' 100" }}>
            Simple, fast, and built for
          </span>
          <span className="font-['SF_Pro:Regular',_sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
            {" "}
          </span>
          busy founders.
        </p>
      </div>
    </div>
  );
}

function Frame2147227067() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-[552px]">
      <Frame2147227059 />
    </div>
  );
}

function Container() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,98,255,0.3)] h-[976px] left-1/2 to-[rgba(0,98,255,0.3)] top-0 translate-x-[-50%] via-50% via-[rgba(0,98,255,0.5)] w-[4px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="bg-[#ff5757] relative rounded-[99px] shrink-0 size-[32px]" data-name="Container">
      <p className="absolute font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[20px] left-[calc(50%+8px)] text-[14px] text-nowrap text-right text-white top-[calc(50%-10px)] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        01
      </p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end justify-center relative shrink-0" data-name="Heading 3">
      <p className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#0a1128] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Discovery Call
      </p>
      <p className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] text-right text-slate-600 w-[220px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        To understand your workflow and your current process.
      </p>
    </div>
  );
}

function Frame2147227182() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-end relative shrink-0">
      <Container1 />
      <Heading3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] items-end justify-center left-[472px] p-[32px] rounded-[12px] top-[20px] w-[363px]" data-name="Container">
      <Frame2147227182 />
    </div>
  );
}

function PhoneCall() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="PhoneCall">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="PhoneCall">
          <path d={svgPaths.p31923480} fill="var(--fill-0, #F8F9FA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#0062ff] content-stretch flex items-center justify-center left-[416px] rounded-[1.67772e+07px] size-[64px] top-[81px]" data-name="Container">
      <PhoneCall />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[226px] relative shrink-0 w-[896px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#ff5757] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <p className="absolute font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[20px] left-[calc(50%+9px)] text-[14px] text-nowrap text-right text-white top-[calc(50%-10px)] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        02
      </p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0" data-name="Heading 3">
      <p className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#0a1128] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Audit & Detection`}</p>
      <p className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] text-slate-600 w-[253px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our AI finds inefficiencies across sales, support, and finance.
      </p>
    </div>
  );
}

function Frame2147227183() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0">
      <Container5 />
      <Heading4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] items-start justify-center left-[63px] p-[32px] rounded-[12px] top-[20px] w-[363px]" data-name="Container">
      <Frame2147227183 />
    </div>
  );
}

function Sparkle() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Sparkle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Sparkle">
          <path d={svgPaths.pf25fd80} fill="var(--fill-0, #F8F9FA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#0062ff] content-stretch flex items-center justify-center left-[416px] rounded-[1.67772e+07px] size-[64px] top-[81px]" data-name="Container">
      <Sparkle />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[226px] relative shrink-0 w-[896px]" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#ff5757] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <p className="absolute font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[20px] left-[calc(50%+9.865px)] text-[14px] text-nowrap text-right text-white top-[calc(50%-10px)] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        03
      </p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end justify-center relative shrink-0" data-name="Heading 3">
      <p className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#0a1128] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        AI Process Mapping
      </p>
      <p className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] text-right text-slate-600 w-[220px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Visual map showing where time and money leak.
      </p>
    </div>
  );
}

function Frame2147227184() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-end relative shrink-0">
      <Container9 />
      <Heading5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] items-end justify-center left-[470px] p-[32px] rounded-[12px] top-[20px] w-[363px]" data-name="Container">
      <Frame2147227184 />
    </div>
  );
}

function MapTrifold() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="MapTrifold">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="MapTrifold">
          <path d={svgPaths.p5c73870} fill="var(--fill-0, #F8F9FA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#0062ff] content-stretch flex items-center justify-center left-[416px] rounded-[1.67772e+07px] size-[64px] top-[81px]" data-name="Container">
      <MapTrifold />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[226px] relative shrink-0 w-[896px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#ff5757] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <p className="absolute font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[20px] left-[calc(50%+10px)] text-[14px] text-nowrap text-right text-white top-[calc(50%-10px)] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        04
      </p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0" data-name="Heading 3">
      <p className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#0a1128] text-[20px] w-[226px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Proof of Concept (Coming Soon)
      </p>
      <p className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] text-slate-600 w-[235px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`A working demo that shows what "fixed" looks like.`}</p>
    </div>
  );
}

function Frame2147227185() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0">
      <Container13 />
      <Heading6 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] items-start justify-center left-[63px] p-[32px] rounded-[12px] top-[8px] w-[363px]" data-name="Container">
      <Frame2147227185 />
    </div>
  );
}

function Target() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Target">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Target">
          <path d={svgPaths.p25100} fill="var(--fill-0, #F8F9FA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#0062ff] content-stretch flex items-center justify-center left-[416px] rounded-[1.67772e+07px] size-[64px] top-[81px]" data-name="Container">
      <Target />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[226px] relative shrink-0 w-[896px]" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container4 />
      <Container8 />
      <Container12 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[896px]" data-name="Container">
      <Frame2147227067 />
      <Container17 />
    </div>
  );
}

export default function Desktop13() {
  return (
    <div className="bg-[#f9f6f4] relative size-full" data-name="Desktop - 13">
      <div className="absolute bg-[#f9f6f4] h-[1326px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1440px]" />
      <Container18 />
    </div>
  );
}