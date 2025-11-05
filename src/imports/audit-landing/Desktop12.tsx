import svgPaths from "./svg-dcr4r2p1rg";

function SolidCta() {
  return (
    <div className="bg-[#0062ff] box-border content-stretch flex gap-[6px] items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Solid_CTA">
      <div className="flex flex-col font-['SF_Pro:Medium',_sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[#f8f9fa] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">Start Your $99 Audit →</p>
      </div>
    </div>
  );
}

function Frame2147227125() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <SolidCta />
      <p className="font-['Kalam:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-slate-400 whitespace-pre">no upsells, no pitch, just clarity.</p>
    </div>
  );
}

function Frame2147227124() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0">
      <Frame2147227125 />
    </div>
  );
}

function Frame2147227139() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[24px] text-center text-slate-800 w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">
          <span>{`Get measurable clarity in `}</span>
          <span className="font-['SF_Pro:Semibold',_sans-serif] font-[590] text-[#0062ff]" style={{ fontVariationSettings: "'wdth' 100" }}>
            1 week for just $99
          </span>
        </p>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-center text-slate-600 w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">In 7 days, we’ll show you exactly where your business is bleeding money, what’s causing it, and how AI can fix it fast.</p>
      </div>
      <Frame2147227124 />
    </div>
  );
}

function FileText() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="FileText">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="FileText">
          <path d={svgPaths.p189ec180} fill="var(--fill-0, #0062FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2147227027() {
  return (
    <div className="bg-[#3dffc9] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[16px] relative rounded-[8px] shrink-0">
      <FileText />
    </div>
  );
}

function Frame2147227105() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0 text-[#0062ff] text-nowrap w-full whitespace-pre">
      <p className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Data Insights Report
      </p>
      <p className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] opacity-60 relative shrink-0 text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        See where the money’s leaking.
      </p>
    </div>
  );
}

function Frame2147227134() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal gap-[16px] items-start relative shrink-0 w-full">
      <p className="leading-[20px] min-w-full relative shrink-0 text-[14px] text-slate-600 tracking-[-0.28px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        A simple report showing hours lost, recurring inefficiencies, and the hidden cost of manual workflows.
      </p>
      <p className="leading-[normal] relative shrink-0 text-[#ff5757] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        (Delivered as PDF or Google Sheet.)
      </p>
    </div>
  );
}

function Frame2147227106() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame2147227105 />
      <Frame2147227134 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame2147227027 />
          <Frame2147227106 />
        </div>
      </div>
    </div>
  );
}

function Frame2147227130() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[362px]">
      <p className="font-['Kalam:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e53935] text-[14px] text-center w-full">See the leaks!</p>
      <Frame13 />
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="FlowArrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="FlowArrow">
          <path d={svgPaths.p1373c380} fill="var(--fill-0, #0062FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2147227028() {
  return (
    <div className="bg-[#3dffc9] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[16px] relative rounded-[8px] shrink-0">
      <FlowArrow />
    </div>
  );
}

function Frame2147227107() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0 text-[#0062ff] text-nowrap w-full whitespace-pre">
      <p className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Workflow Map
      </p>
      <p className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] opacity-60 relative shrink-0 text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        See the full picture, visually
      </p>
    </div>
  );
}

function Frame2147227135() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal gap-[16px] items-start relative shrink-0 w-full">
      <p className="leading-[20px] min-w-full relative shrink-0 text-[14px] text-slate-600 tracking-[-0.28px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`We turn your business process into a  visual map that shows what’s working, what’s broken, and what’s just busywork.`}</p>
      <p className="leading-[normal] relative shrink-0 text-[#ff5757] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        (Delivered as Notion or Figma map.)
      </p>
    </div>
  );
}

function Frame2147227108() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame2147227107 />
      <Frame2147227135 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[14px] relative w-full">
          <Frame2147227028 />
          <Frame2147227108 />
        </div>
      </div>
    </div>
  );
}

function Frame2147227131() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[363px]">
      <p className="font-['Kalam:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e53935] text-[14px] text-center w-full">Bottlenecks marked!</p>
      <Frame14 />
    </div>
  );
}

function ChartLineUp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ChartLineUp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ChartLineUp">
          <path d={svgPaths.p377b3380} fill="var(--fill-0, #0062FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2147227029() {
  return (
    <div className="bg-[#3dffc9] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[16px] relative rounded-[8px] shrink-0">
      <ChartLineUp />
    </div>
  );
}

function Frame2147227109() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0 text-[#0062ff] text-nowrap w-full whitespace-pre">
      <p className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        ROI Projection Plan
      </p>
      <p className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] opacity-60 relative shrink-0 text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        See what you could save.
      </p>
    </div>
  );
}

function Frame2147227136() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal gap-[16px] items-start relative shrink-0">
      <p className="leading-[20px] relative shrink-0 text-[14px] text-slate-600 tracking-[-0.28px] w-[279px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        We translate your leaks into numbers how much time and cost can be saved by fixing 1–3 key problems using AI.
      </p>
      <p className="leading-[normal] relative shrink-0 text-[#ff5757] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        (Delivered as ROI summary dashboard.)
      </p>
    </div>
  );
}

function Frame2147227110() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame2147227109 />
      <Frame2147227136 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame2147227029 />
          <Frame2147227110 />
        </div>
      </div>
    </div>
  );
}

function Frame2147227132() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[363px]">
      <p className="font-['Kalam:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e53935] text-[14px] text-center w-full">Your next 10x move!</p>
      <Frame15 />
    </div>
  );
}

function Frame2147227133() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0">
      <Frame2147227130 />
      <Frame2147227131 />
      <Frame2147227132 />
    </div>
  );
}

function Frame2147227138() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-center text-slate-800 w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Here’s what you’ll walk away with:</p>
      </div>
      <Frame2147227133 />
    </div>
  );
}

function Frame2147227059() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-[552px]">
      <Frame2147227139 />
      <Frame2147227138 />
    </div>
  );
}

function Frame2147227066() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center justify-center relative shrink-0 w-full">
      <Frame2147227059 />
    </div>
  );
}

function Frame2147227137() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[160px] top-[80px] w-[1120px]">
      <Frame2147227066 />
    </div>
  );
}

export default function Desktop12() {
  return (
    <div className="bg-[#f9f6f4] relative size-full" data-name="Desktop - 12">
      <div className="absolute bg-[#f9f6f4] h-[800px] left-1/2 top-[calc(50%-44.5px)] translate-x-[-50%] translate-y-[-50%] w-[1440px]" />
      <Frame2147227137 />
    </div>
  );
}