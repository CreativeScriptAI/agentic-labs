import svgPaths from "./svg-sn70boi2fg";
import NextImage from "next/image";
import { imgGroup, imgGroup1, imgGroup2 } from "./svg-6u2iv";

function Button() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['PP_Mondwest:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-slate-950">
        <p className="leading-[30px] whitespace-pre">Agentic AI Labs</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Item"
    >
      <Button />
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="List">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="List">
          <path
            d={svgPaths.p12909d00}
            fill="var(--fill-0, #0062FF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function NavList() {
  return (
    <div
      className="absolute bg-white box-border content-stretch flex h-[60px] items-center justify-between left-1/2 overflow-clip px-[16px] py-[8px] rounded-[12px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_6px_25px_0px_rgba(0,0,0,0.08),0px_2px_8px_0px_rgba(0,0,0,0.1)] top-[71px] translate-x-[-50%] w-[327px]"
      data-name="Nav → List"
    >
      <Item />
      <List />
    </div>
  );
}

function TimeIPhone() {
  return (
    <div
      className="h-[21px] relative shrink-0 w-[54px]"
      data-name="🧰/Time (iPhone)"
    >
      <p className="absolute css-kltpit font-['SF_Pro_Display:Semibold',_sans-serif] leading-[22px] left-[27px] not-italic text-[#2a2a2a] text-[17px] text-center top-[calc(50%-10.5px)] tracking-[-0.408px] translate-x-[-50%] w-[54px]">
        9:41
      </p>
    </div>
  );
}

function CellularWifiBatteryIPhone() {
  return (
    <div
      className="h-[13px] relative shrink-0 w-[78.261px]"
      data-name="🧰/Cellular,Wifi,Battery (iPhone)"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 79 13"
      >
        <g id="ð§°/Cellular,Wifi,Battery (iPhone)">
          <g id="Battery">
            <rect
              height="12"
              id="Border"
              opacity="0.35"
              rx="3"
              stroke="var(--stroke-0, #2A2A2A)"
              width="24"
              x="51.4333"
              y="0.5"
            />
            <path
              d={svgPaths.p25b67360}
              fill="var(--fill-0, #2A2A2A)"
              id="Cap"
              opacity="0.4"
            />
            <rect
              fill="var(--fill-0, #2A2A2A)"
              height="9"
              id="Capacity"
              rx="1.33333"
              width="21"
              x="52.9333"
              y="2"
            />
          </g>
          <path
            d={svgPaths.p2eadca80}
            fill="var(--fill-0, #2A2A2A)"
            id="Wifi"
          />
          <path
            d={svgPaths.p31669080}
            fill="var(--fill-0, #2A2A2A)"
            id="Cellular Connection"
          />
        </g>
      </svg>
    </div>
  );
}

function StatusBarIPhone() {
  return (
    <div
      className="absolute box-border content-stretch flex items-center justify-between left-1/2 pb-[12px] pl-[27px] pr-[26px] pt-[14px] top-0 translate-x-[-50%] w-[375px]"
      data-name="Status Bar (iPhone)"
    >
      <TimeIPhone />
      <CellularWifiBatteryIPhone />
    </div>
  );
}

function Frame2147227123() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center leading-[0] left-1/2 text-center top-[2626px] translate-x-[-50%] w-[327px]">
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#e53935] text-[12px] tracking-[0.48px] uppercase w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">{`No buzzwords...Just practical insight `}</p>
      </div>
      <div
        className="flex flex-col font-['SF_Pro:Medium',_sans-serif] font-[510] h-[47px] justify-center leading-[normal] relative shrink-0 text-[#0062ff] text-[0px] text-[20px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="font-['SF_Pro:Regular',_sans-serif] font-normal mb-0">
          <span
            className="text-slate-800"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Simple, fast, and built for
          </span>
          <span style={{ fontVariationSettings: "'wdth' 100" }}> </span>
        </p>
        <p>busy founders.</p>
      </div>
    </div>
  );
}

function Frame2147227148() {
  return (
    <div className="absolute content-stretch flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal gap-[16px] items-center leading-[0] left-1/2 text-center top-[3438px] translate-x-[-50%] w-[327px]">
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#e53935] text-[12px] tracking-[0.48px] uppercase w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">
          Who’s actually running your AI Audit?
        </p>
      </div>
      <div
        className="flex flex-col h-[47px] justify-center relative shrink-0 text-[20px] text-slate-800 w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">
          Real engineers. Real experience. Real results.
        </p>
      </div>
    </div>
  );
}

function Frame2147227173() {
  return (
    <div className="absolute content-stretch flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal gap-[16px] items-center leading-[0] left-1/2 text-center top-[4225px] translate-x-[-50%] w-[327px]">
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#e53935] text-[12px] tracking-[0.48px] uppercase w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">Is this AI Audit for you?</p>
      </div>
      <div
        className="flex flex-col h-[47px] justify-center relative shrink-0 text-[20px] text-slate-800 w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">
          Not everyone needs it - but the right people see massive ROI.
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="absolute bg-gradient-to-b from-[rgba(0,98,255,0.3)] h-[631px] left-[calc(50%-139.5px)] to-[rgba(0,98,255,0.3)] top-0 translate-x-[-50%] via-50% via-[rgba(0,98,255,0.5)] w-[4px]"
      data-name="Container"
    />
  );
}

function PhoneCall() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="PhoneCall">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="PhoneCall">
          <path
            d={svgPaths.p1f6f0500}
            fill="var(--fill-0, #F8F9FA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="bg-[#0062ff] content-stretch flex items-center justify-center relative rounded-[1.25829e+07px] shrink-0 size-[48px]"
      data-name="Container"
    >
      <PhoneCall />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="bg-[#ff5757] relative rounded-[99px] shrink-0 size-[32px]"
      data-name="Container"
    >
      <p
        className="absolute font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[20px] left-[calc(50%+8px)] text-[14px] text-nowrap text-right text-white top-[calc(50%-10px)] translate-x-[-100%] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        01
      </p>
    </div>
  );
}

function Heading3() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0"
      data-name="Heading 3"
    >
      <p
        className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#0a1128] text-[16px] text-nowrap whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Discovery Call
      </p>
      <p
        className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-slate-600 w-[194px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        To understand your workflow and your current process.
      </p>
    </div>
  );
}

function Frame2147227182() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Container2 />
      <Heading3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-[14px] relative w-full">
          <Frame2147227182 />
        </div>
      </div>
    </div>
  );
}

function Frame2147227189() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Container1 />
      <Frame13 />
    </div>
  );
}

function Sparkle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Sparkle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Sparkle">
          <path
            d={svgPaths.pc8a300}
            fill="var(--fill-0, #F8F9FA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="bg-[#0062ff] content-stretch flex items-center justify-center relative rounded-[1.25829e+07px] shrink-0 size-[48px]"
      data-name="Container"
    >
      <Sparkle />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="bg-[#ff5757] relative rounded-[1.67772e+07px] shrink-0 size-[32px]"
      data-name="Container"
    >
      <p
        className="absolute font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[20px] left-[calc(50%+9px)] text-[14px] text-nowrap text-right text-white top-[calc(50%-10px)] translate-x-[-100%] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        02
      </p>
    </div>
  );
}

function Heading4() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <p
        className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#0a1128] text-[16px] text-nowrap whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >{`Audit & Detection`}</p>
      <p
        className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-slate-600 w-[min-content]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Our AI finds inefficiencies across sales, support, and finance.
      </p>
    </div>
  );
}

function Frame2147227192() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Container4 />
      <Heading4 />
    </div>
  );
}

function Frame2147227107() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-[14px] relative w-full">
          <Frame2147227192 />
        </div>
      </div>
    </div>
  );
}

function Frame2147227190() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Container3 />
      <Frame2147227107 />
    </div>
  );
}

function MapTrifold() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="MapTrifold">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="MapTrifold">
          <path
            d={svgPaths.p37d63d00}
            fill="var(--fill-0, #F8F9FA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="bg-[#0062ff] content-stretch flex items-center justify-center relative rounded-[1.25829e+07px] shrink-0 size-[48px]"
      data-name="Container"
    >
      <MapTrifold />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="bg-[#ff5757] relative rounded-[1.67772e+07px] shrink-0 size-[32px]"
      data-name="Container"
    >
      <p
        className="absolute font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[20px] left-[calc(50%+9px)] text-[14px] text-nowrap text-right text-white top-[calc(50%-10px)] translate-x-[-100%] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        03
      </p>
    </div>
  );
}

function Heading5() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <p
        className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#0a1128] text-[16px] text-nowrap whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        AI Process Mapping
      </p>
      <p
        className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-slate-600 w-[181px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Visual map showing where time and money leak.
      </p>
    </div>
  );
}

function Frame2147227193() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Container6 />
      <Heading5 />
    </div>
  );
}

function Frame2147227110() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-[14px] relative w-full">
          <Frame2147227193 />
        </div>
      </div>
    </div>
  );
}

function Frame2147227191() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Container5 />
      <Frame2147227110 />
    </div>
  );
}

function Target() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Target">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Target">
          <path
            d={svgPaths.p1358ff00}
            fill="var(--fill-0, #F8F9FA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="bg-[#0062ff] content-stretch flex items-center justify-center relative rounded-[1.67772e+07px] shrink-0 size-[48px]"
      data-name="Container"
    >
      <Target />
    </div>
  );
}

function Container8() {
  return (
    <div
      className="bg-[#ff5757] relative rounded-[1.67772e+07px] shrink-0 size-[32px]"
      data-name="Container"
    >
      <p
        className="absolute font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[20px] left-[calc(50%+9px)] text-[14px] text-nowrap text-right text-white top-[calc(50%-10px)] translate-x-[-100%] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        04
      </p>
    </div>
  );
}

function Heading6() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <p
        className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#0a1128] text-[16px] w-[177px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Proof of Concept (Coming Soon)
      </p>
      <p
        className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-slate-600 w-[198px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >{`A working demo that shows what "fixed" looks like.`}</p>
    </div>
  );
}

function Frame2147227194() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Container8 />
      <Heading6 />
    </div>
  );
}

function Frame2147227111() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-[14px] relative w-full">
          <Frame2147227194 />
        </div>
      </div>
    </div>
  );
}

function Frame2147227188() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Container7 />
      <Frame2147227111 />
    </div>
  );
}

function Frame2147227132() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-1/2 top-[2743px] translate-x-[-50%] w-[327px]">
      <Container />
      <Frame2147227189 />
      <Frame2147227190 />
      <Frame2147227191 />
      <Frame2147227188 />
    </div>
  );
}

function Frame2147227054() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal gap-[24px] items-center leading-[0] relative shrink-0 text-center w-full">
      <div
        className="css-4muush flex flex-col justify-center relative shrink-0 text-[#e53935] text-[14px] tracking-[0.56px] uppercase w-[269px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">Ready to find your leaks?</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#0a1128] text-[24px] tracking-[-0.48px] w-[327px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">{`Don't guess where your business is leaking, know it. `}</p>
      </div>
    </div>
  );
}

function SolidCta() {
  return (
    <div
      className="bg-[#0062ff] box-border content-stretch flex gap-[6px] items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0"
      data-name="Solid_CTA"
    >
      <div
        className="flex flex-col font-['SF_Pro:Medium',_sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[#f8f9fa] text-[14px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[20px] whitespace-pre">Get Your AI Audit</p>
      </div>
    </div>
  );
}

function Frame2147227125() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <SolidCta />
      <p className="font-['Kalam:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[12px] text-center text-nowrap whitespace-pre">
        Just takes 60 seconds to book.
      </p>
    </div>
  );
}

function OutlineCta() {
  return (
    <div
      className="box-border content-stretch flex gap-[8px] items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0"
      data-name="Outline_CTA"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#0062ff] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <div
        className="flex flex-col font-['SF_Pro:Medium',_sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[#0062ff] text-[14px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[20px] whitespace-pre">See Sample Audit</p>
      </div>
    </div>
  );
}

function Frame2147227124() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0">
      <Frame2147227125 />
      <OutlineCta />
    </div>
  );
}

function Frame427321513() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Frame2147227054 />
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-center text-slate-600 w-[min-content]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">
          Join 50+ SaaS teams who found hidden $$ inside their workflows. Book
          your Free Clarity Call today - and see your ops differently in 20
          minutes.
        </p>
      </div>
      <Frame2147227124 />
    </div>
  );
}

function Frame427320835() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip p-[24px] relative shrink-0 w-[375px]">
      <div className="absolute bottom-[-145px] h-[438px] left-[calc(50%+0.5px)] translate-x-[-50%] w-[728px]">
        <div className="absolute inset-[-36.53%_-21.98%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1048 758"
          >
            <g filter="url(#filter0_f_100_3665)" id="Ellipse 990" opacity="0.2">
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
      <Frame427321513 />
    </div>
  );
}

function IPhone13Mini19() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[24px] items-center justify-center left-1/2 overflow-clip px-[24px] py-[48px] top-[7349px] translate-x-[-50%] w-[375px]"
      data-name="iPhone 13 mini - 19"
    >
      <Frame427320835 />
    </div>
  );
}

function Container9() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-slate-600 w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">The home of the AI Workforce</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[300px]"
      data-name="Margin"
    >
      <div className="flex flex-col font-['PP_Mondwest:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0062ff] text-[24px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Agentic AI Labs</p>
      </div>
      <Container9 />
    </div>
  );
}

function GithubLogo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="GithubLogo">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="GithubLogo">
          <path
            d={svgPaths.p18e38380}
            fill="var(--fill-0, #475569)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function LinkMargin() {
  return (
    <div
      className="content-stretch flex flex-col items-start max-w-[308px] relative shrink-0"
      data-name="Link:margin"
    >
      <GithubLogo />
    </div>
  );
}

function XLogo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="XLogo">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="XLogo">
          <path
            d={svgPaths.p3e4f0c80}
            fill="var(--fill-0, #475569)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function LinkMargin1() {
  return (
    <div
      className="content-stretch flex flex-col items-start max-w-[308px] relative shrink-0"
      data-name="Link:margin"
    >
      <XLogo />
    </div>
  );
}

function YoutubeLogo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="YoutubeLogo">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="YoutubeLogo">
          <path
            d={svgPaths.p3ac34e72}
            fill="var(--fill-0, #475569)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function LinkMargin2() {
  return (
    <div
      className="content-stretch flex flex-col items-start max-w-[308px] relative shrink-0"
      data-name="Link:margin"
    >
      <YoutubeLogo />
    </div>
  );
}

function LinkedinLogo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="LinkedinLogo">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="LinkedinLogo">
          <path
            d={svgPaths.p2779d500}
            fill="var(--fill-0, #475569)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function LinkMargin3() {
  return (
    <div
      className="content-stretch flex flex-col items-start max-w-[308px] relative shrink-0"
      data-name="Link:margin"
    >
      <LinkedinLogo />
    </div>
  );
}

function Frame2147227070() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <LinkMargin />
      <LinkMargin1 />
      <LinkMargin2 />
      <LinkMargin3 />
    </div>
  );
}

function Container10() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0 w-[300px]"
      data-name="Container"
    >
      <Frame2147227070 />
    </div>
  );
}

function Link() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0062ff] text-[14px] text-nowrap">
        <p className="[text-underline-position:from-font] decoration-solid leading-[24px] underline whitespace-pre">
          creativescript.org
        </p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#868a97] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">{`Crafted by `}</p>
      </div>
      <Link />
    </div>
  );
}

function Frame2147227069() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Margin />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Footer() {
  return (
    <div
      className="absolute bottom-[50px] box-border content-stretch flex flex-col items-start left-1/2 overflow-clip px-0 py-[48px] translate-x-[-50%] w-[327px]"
      data-name="Footer"
    >
      <Frame2147227069 />
    </div>
  );
}

function Frame2147224585() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <div className="absolute bg-[#3dffc9] h-[30px] left-1/2 top-[32.5px] translate-x-[-50%] w-[175px]" />
      <div
        className="flex flex-col font-['SF_Pro:Semibold',_sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[#0a1128] text-[0px] text-center w-[277px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal] text-[24px]">
          <span>{`You're probably bleeding `}</span>
          <span className="font-['EB_Garamond:SemiBold_Italic',_sans-serif] font-semibold italic text-[#e53935]">
            $$$
          </span>
          <span className="font-['EB_Garamond:SemiBold_Italic',_sans-serif] font-semibold italic text-[#ff5757]">
            {" "}
          </span>
          in your ops.
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[47.9px] left-0 rounded-[3.193px] to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,98,255,0.05)] w-[275.267px]"
      data-name="Container"
    />
  );
}

function Container13() {
  return (
    <div
      className="bg-gradient-to-b from-[rgba(0,0,0,0)] h-[0.639px] opacity-[0.392] shrink-0 to-[rgba(0,0,0,0)] via-50% via-[#0062ff] w-full"
      data-name="Container"
    />
  );
}

function Container14() {
  return (
    <div
      className="absolute bg-gradient-to-r box-border content-stretch flex flex-col from-[rgba(0,0,0,0)] h-[0.639px] items-start left-[66.1px] pl-[7.504px] pr-[125.34px] py-0 to-[rgba(0,0,0,0)] top-[23.63px] via-50% via-[rgba(0,98,255,0.2)] w-[143.062px]"
      data-name="Container"
    >
      <Container13 />
    </div>
  );
}

function Text() {
  return (
    <div
      className="absolute content-stretch flex h-[4.471px] items-start left-[6.47px] top-[2.23px] w-[7.497px]"
      data-name="Text"
    >
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[5.109px] not-italic relative shrink-0 text-[#00a63e] text-[3.832px] text-center text-nowrap tracking-[0.1916px] whitespace-pre">
        MAP
      </p>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="bg-gradient-to-r from-[#10b981] h-[0.639px] rounded-[5.35756e+06px] shrink-0 to-[#34d399] w-full"
      data-name="Container"
    />
  );
}

function Container16() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[0.639px] items-start left-0 overflow-clip rounded-[5.35756e+06px] top-[8.94px] w-[20.438px]"
      data-name="Container"
    >
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div
      className="absolute h-[9.58px] left-0 top-[19.16px] w-[20.438px]"
      data-name="Container"
    >
      <Text />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="absolute left-[-1.28px] rounded-[5.35756e+06px] shadow-[0px_0px_4.79px_0px_rgba(0,98,255,0.19)] size-[15.328px] top-[-1.28px]"
      data-name="Container"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 15.328 15.328\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -1.0839 -1.0839 0 7.6641 7.6641)\\'><stop stop-color=\\'rgba(0,98,255,0.082)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')",
      }}
    />
  );
}

function Container19() {
  return (
    <div
      className="absolute left-[0.7px] opacity-0 rounded-[5.35756e+06px] size-[15.456px] top-[0.7px]"
      data-name="Container"
    />
  );
}

function Text1() {
  return (
    <div
      className="absolute h-[8.43px] left-[5.62px] opacity-90 top-[4.21px] w-[5.62px]"
      data-name="Text"
    >
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[7.664px] left-[3.32px] not-italic text-[#0a1128] text-[5.109px] text-center text-nowrap top-[-0.08px] tracking-[-0.0998px] translate-x-[-50%] whitespace-pre">
        ⚡
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="absolute left-[-0.77px] rounded-[5.35756e+06px] size-[16.861px] top-[-0.77px]"
      data-name="Container"
    >
      <div className="overflow-clip relative rounded-[inherit] size-[16.861px]">
        <Container19 />
        <Text1 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0.639px] border-[rgba(255,255,255,0.7)] border-solid inset-0 pointer-events-none rounded-[5.35756e+06px]"
      />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[5.109px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[5.109px] left-[2px] not-italic text-[3.832px] text-center text-nowrap text-white top-[0.32px] translate-x-[-50%] whitespace-pre">
        ✓
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="absolute bg-[#05df72] box-border content-stretch flex flex-col items-start left-[11.5px] pb-[0.639px] pl-[0.893px] pr-[0.896px] pt-0 rounded-[5.35756e+06px] size-[5.109px] top-[-1.28px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0.639px] border-solid border-white inset-0 pointer-events-none rounded-[5.35756e+06px] shadow-[0px_1.277px_1.916px_-0.319px_rgba(0,0,0,0.1),0px_0.639px_1.277px_-0.639px_rgba(0,0,0,0.1)]"
      />
      <Text2 />
    </div>
  );
}

function Container22() {
  return (
    <div
      className="absolute left-[2.56px] size-[15.328px] top-0"
      data-name="Container"
    >
      <Container18 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div
      className="absolute bg-gradient-to-r from-[rgba(255,255,255,0.3)] h-[0.319px] left-0 to-[rgba(0,0,0,0)] top-[0.16px] w-[20.438px]"
      data-name="Container"
    />
  );
}

function Container24() {
  return (
    <div
      className="absolute bg-[#0062ff] h-[0.319px] left-[6.72px] opacity-[0.926] top-0 w-[4.476px]"
      data-name="Container"
    />
  );
}

function Container25() {
  return (
    <div
      className="absolute h-[0.639px] left-[20.44px] top-[7.66px] w-[20.438px]"
      data-name="Container"
    >
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div
      className="absolute h-[32.572px] left-[86.54px] top-[7.66px] w-[20.438px]"
      data-name="Container"
    >
      <Container17 />
      <Container22 />
      <Container25 />
    </div>
  );
}

function Text3() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex h-[5.269px] items-start left-[1.47px] shadow-[0px_1.277px_1.916px_-0.319px_rgba(0,0,0,0.1),0px_0.639px_1.277px_-0.639px_rgba(0,0,0,0.1)] top-[1.6px] w-[17.491px]"
      data-name="Text"
    >
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[6.387px] not-italic relative shrink-0 text-[#0062ff] text-[4.471px] text-center text-nowrap tracking-[0.2235px] whitespace-pre">
        DETECT
      </p>
    </div>
  );
}

function Container27() {
  return (
    <div
      className="bg-gradient-to-r from-[#ff6b35] h-[0.639px] opacity-[0.993] rounded-[5.35756e+06px] shrink-0 to-[rgba(255,107,53,0.5)] w-full"
      data-name="Container"
    />
  );
}

function Container28() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.2)] box-border content-stretch flex flex-col h-[0.639px] items-start left-0 overflow-clip pl-0 pr-[5.109px] py-0 rounded-[5.35756e+06px] top-[8.94px] w-[20.438px]"
      data-name="Container"
    >
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div
      className="absolute h-[9.58px] left-0 top-[19.16px] w-[20.438px]"
      data-name="Container"
    >
      <Text3 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div
      className="absolute left-[-2.56px] opacity-[0.993] rounded-[5.35756e+06px] shadow-[0px_0px_9.58px_0px_rgba(255,107,53,0.25)] size-[20.438px] top-[-2.56px]"
      data-name="Container"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 20.437 20.437\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -1.4451 -1.4451 0 10.219 10.219)\\'><stop stop-color=\\'rgba(255,107,53,0.125)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,107,53,0.063)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
      }}
    >
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_6.387px_0px_inset_rgba(255,107,53,0.13)]" />
    </div>
  );
}

function Container31() {
  return (
    <div
      className="absolute left-[-1.16px] rounded-[5.35756e+06px] size-[21.475px] top-[-1.16px]"
      data-name="Container"
    />
  );
}

function Container32() {
  return (
    <div
      className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] left-[-11.11px] opacity-60 rounded-[5.35756e+06px] size-[17.564px] to-[rgba(0,0,0,0)] top-[0.8px] via-50% via-[rgba(255,107,53,0.25)]"
      data-name="Container"
    />
  );
}

function Text4() {
  return (
    <div
      className="absolute h-[11.177px] left-[5.99px] shadow-[0px_1.277px_2.555px_0px_rgba(0,0,0,0.15)] top-[3.99px] w-[7.185px]"
      data-name="Text"
    >
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[8.941px] left-[3.64px] not-italic text-[#0a1128] text-[5.748px] text-center text-nowrap top-[0.24px] tracking-[-0.1403px] translate-x-[-50%] whitespace-pre">
        🔍
      </p>
    </div>
  );
}

function Container33() {
  return (
    <div
      className="absolute left-[-1.92px] rounded-[5.35756e+06px] size-[19.16px] top-[-1.92px]"
      data-name="Container"
    >
      <div className="overflow-clip relative rounded-[inherit] size-[19.16px]">
        <Container31 />
        <Container32 />
        <Text4 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0.639px] border-solid border-white inset-0 pointer-events-none rounded-[5.35756e+06px] shadow-[0px_6.387px_7.983px_-1.597px_rgba(0,0,0,0.1),0px_2.555px_3.193px_-1.916px_rgba(0,0,0,0.1)]"
      />
    </div>
  );
}

function Container34() {
  return (
    <div
      className="absolute bg-[#fdc700] left-[11.5px] opacity-[0.993] rounded-[5.35756e+06px] size-[5.109px] top-[-1.28px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0.639px] border-solid border-white inset-0 pointer-events-none rounded-[5.35756e+06px] shadow-[0px_3.193px_4.79px_-0.958px_rgba(0,0,0,0.1),0px_1.277px_1.916px_-1.277px_rgba(0,0,0,0.1)]"
      />
    </div>
  );
}

function Container35() {
  return (
    <div
      className="absolute left-[2.56px] size-[15.328px] top-0"
      data-name="Container"
    >
      <Container30 />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div
      className="absolute bg-gradient-to-r from-[rgba(255,255,255,0.3)] h-[0.319px] left-[20.44px] to-[rgba(0,0,0,0)] top-[7.82px] w-[20.438px]"
      data-name="Container"
    />
  );
}

function Container37() {
  return (
    <div
      className="absolute h-[32.572px] left-[127.41px] top-[7.66px] w-[20.438px]"
      data-name="Container"
    >
      <Container29 />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Text5() {
  return (
    <div
      className="content-stretch flex h-[4.471px] items-start relative shrink-0 w-full"
      data-name="Text"
    >
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[5.109px] not-italic relative shrink-0 text-[3.832px] text-[rgba(113,113,130,0.6)] text-center text-nowrap tracking-[0.1916px] whitespace-pre">
        QUANTIFY
      </p>
    </div>
  );
}

function Container38() {
  return (
    <div
      className="h-[0.639px] rounded-[5.35756e+06px] shrink-0 w-full"
      data-name="Container"
    />
  );
}

function Container39() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.2)] h-[0.639px] relative rounded-[5.35756e+06px] shrink-0 w-full"
      data-name="Container"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[0.639px] items-start pl-0 pr-[20.438px] py-0 relative w-full">
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[2.235px] h-[9.58px] items-start left-0 pb-0 pl-[0.222px] pr-[0.225px] pt-[2.235px] top-[19.16px] w-[20.438px]"
      data-name="Container"
    >
      <Text5 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div
      className="absolute left-0 rounded-[5.35756e+06px] size-[12.773px] top-0"
      data-name="Container"
    />
  );
}

function Container42() {
  return (
    <div
      className="absolute left-[0.64px] opacity-0 rounded-[5.35756e+06px] size-[14.051px] top-[0.64px]"
      data-name="Container"
    />
  );
}

function Text6() {
  return (
    <div
      className="absolute h-[6.387px] left-[5.43px] opacity-60 top-[4.47px] w-[4.471px]"
      data-name="Text"
    >
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[6.387px] left-[2.5px] not-italic text-[#0a1128] text-[4.471px] text-center text-nowrap top-[0.16px] tracking-[-0.048px] translate-x-[-50%] whitespace-pre">
        💎
      </p>
    </div>
  );
}

function Container43() {
  return (
    <div
      className="absolute left-0 rounded-[5.35756e+06px] size-[15.328px] top-0"
      data-name="Container"
    >
      <div className="overflow-clip relative rounded-[inherit] size-[15.328px]">
        <Container42 />
        <Text6 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0.639px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[5.35756e+06px]"
      />
    </div>
  );
}

function Container44() {
  return (
    <div
      className="absolute bg-[#d1d5dc] left-[11.5px] rounded-[5.35756e+06px] size-[5.109px] top-[-1.28px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0.639px] border-solid border-white inset-0 pointer-events-none rounded-[5.35756e+06px]"
      />
    </div>
  );
}

function Container45() {
  return (
    <div
      className="absolute left-[2.56px] size-[15.328px] top-0"
      data-name="Container"
    >
      <Container41 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div
      className="absolute h-[28.74px] left-[168.29px] top-[9.58px] w-[20.438px]"
      data-name="Container"
    >
      <Container40 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[47.9px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container14 />
      <Container26 />
      <Container37 />
      <Container46 />
    </div>
  );
}

function Group() {
  return (
    <div
      className="absolute contents inset-[22.86%_64.5%_48.57%_12%]"
      data-name="Group"
    >
      <div
        className="absolute inset-[22.86%_70%_48.57%_12%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-1%_-0.56%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 51 29"
          >
            <path
              d={svgPaths.p4a7d680}
              fill="var(--fill-0, white)"
              id="Vector"
              stroke="var(--stroke-0, #E5E7EB)"
              strokeWidth="0.550526"
            />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[29.71%_71.85%_65.1%_13.58%] leading-[normal] not-italic text-[#0a1128] text-[4.404px] text-center">
        Customer Support
      </p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[37.71%_72.82%_58.13%_14.85%] leading-[normal] not-italic text-[#717182] text-[3.578px] text-center">{`Tickets & Escalation`}</p>
      <div
        className="absolute inset-[37.14%_64.5%_62.86%_32.5%]"
        data-name="Vector"
      >
        <div className="absolute bottom-[-0.21px] left-0 right-0 top-[-0.21px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 9 2"
          >
            <g id="Vector">
              <path d="M0 1H8.25556Z" fill="var(--fill-0, black)" />
              <path
                d="M0 1H8.25556"
                stroke="var(--stroke-0, #6B7280)"
                strokeWidth="0.412895"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div
      className="absolute contents inset-[22.86%_38.5%_48.57%_38%]"
      data-name="Group"
    >
      <div
        className="absolute inset-[22.86%_44%_48.57%_38%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-1%_-0.56%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 51 29"
          >
            <path
              d={svgPaths.p4a7d680}
              fill="var(--fill-0, white)"
              id="Vector"
              stroke="var(--stroke-0, #E5E7EB)"
              strokeWidth="0.550526"
            />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[29.71%_47.45%_65.1%_41.5%] leading-[normal] not-italic text-[#0a1128] text-[4.404px] text-center">
        Sales Process
      </p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[37.71%_48.77%_58.13%_42.75%] leading-[normal] not-italic text-[#717182] text-[3.578px] text-center">
        Lead to Close
      </p>
      <div
        className="absolute inset-[37.14%_38.5%_62.86%_58.5%]"
        data-name="Vector"
      >
        <div className="absolute bottom-[-0.21px] left-0 right-0 top-[-0.21px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 9 2"
          >
            <g id="Vector">
              <path d="M0 1H8.25556Z" fill="var(--fill-0, black)" />
              <path
                d="M0 1H8.25556"
                stroke="var(--stroke-0, #6B7280)"
                strokeWidth="0.412895"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div
      className="absolute contents inset-[22.86%_18%_48.57%_64%]"
      data-name="Group"
    >
      <div
        className="absolute inset-[22.86%_18%_48.57%_64%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-1%_-0.56%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 51 29"
          >
            <path
              d={svgPaths.p4a7d680}
              fill="var(--fill-0, white)"
              id="Vector"
              stroke="var(--stroke-0, #E5E7EB)"
              strokeWidth="0.550526"
            />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[29.71%_22.14%_65.1%_68.1%] leading-[normal] not-italic text-[#0a1128] text-[4.404px] text-center">
        Finance Ops
      </p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[37.71%_20.7%_58.13%_66.65%] leading-[normal] not-italic text-[#717182] text-[3.578px] text-center">{`Reporting & Analysis`}</p>
    </div>
  );
}

function Group3() {
  return (
    <div
      className="absolute bottom-0 contents left-0 right-[97%] top-0"
      data-name="Group"
    >
      <div
        className="absolute bottom-0 left-0 right-[97%] top-0"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 9 97"
        >
          <path
            d={svgPaths.p26d45300}
            fill="url(#paint0_linear_100_3609)"
            id="Vector"
            opacity="0.3"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_100_3609"
              x1="0"
              x2="0"
              y1="0"
              y2="9634.2"
            >
              <stop stopColor="#2563EB" stopOpacity="0.9" />
              <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div
      className="absolute contents inset-[56.57%_50%_20%_18.61%]"
      data-name="Group"
    >
      <div
        className="absolute inset-[56.57%_73.8%_36.57%_23.8%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 7 7"
        >
          <path
            d={svgPaths.pef45080}
            fill="url(#paint0_linear_100_3651)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_100_3651"
              x1="0"
              x2="0"
              y1="0"
              y2="660.631"
            >
              <stop stopColor="#F87171" stopOpacity="0.9" />
              <stop offset="1" stopColor="#DC2626" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[71.6%_71.78%_24.25%_18.61%] leading-[normal] not-italic text-[#e7000b] text-[3.028px] text-center">
        Manual Reporting
      </p>
      <div
        className="absolute inset-[63.43%_74.8%_31.43%_24.8%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 2 5"
        >
          <path
            d={svgPaths.p1d0c780}
            fill="var(--fill-0, #F87171)"
            id="Vector"
            opacity="0.9"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[20%] left-1/4 right-[50%] top-[68.57%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-2.47%_-0.06%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 70 13"
          >
            <path
              d={svgPaths.p49c0980}
              id="Vector"
              opacity="0.795667"
              stroke="var(--stroke-0, #2563EB)"
              strokeDasharray="1.65 1.65"
              strokeWidth="0.550526"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div
      className="absolute contents inset-[56.57%_47.8%_20%_41.03%]"
      data-name="Group"
    >
      <div
        className="absolute inset-[56.57%_47.8%_36.57%_49.8%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 7 7"
        >
          <path
            d={svgPaths.pef45080}
            fill="url(#paint0_linear_100_3651)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_100_3651"
              x1="0"
              x2="0"
              y1="0"
              y2="660.631"
            >
              <stop stopColor="#F87171" stopOpacity="0.9" />
              <stop offset="1" stopColor="#DC2626" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[67.48%_50%_28.36%_41.03%] leading-[normal] not-italic text-[#e7000b] text-[3.028px] text-center">
        Repetitive Tasks
      </p>
      <div
        className="absolute inset-[63.43%_48.8%_31.43%_50.8%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 2 5"
        >
          <path
            d={svgPaths.p1d0c780}
            fill="var(--fill-0, #F87171)"
            id="Vector"
            opacity="0.9"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[20%] left-1/2 right-[49%] top-[68.57%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-0.61%_-9.7%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 5 13"
          >
            <path
              d={svgPaths.p263c1600}
              id="Vector"
              opacity="0.795667"
              stroke="var(--stroke-0, #2563EB)"
              strokeDasharray="1.65 1.65"
              strokeWidth="0.550526"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div
      className="absolute bottom-[20%] contents left-1/2 right-[17.81%] top-[56.57%]"
      data-name="Group"
    >
      <div
        className="absolute inset-[56.57%_23.8%_36.57%_73.8%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 7 7"
        >
          <path
            d={svgPaths.pef45080}
            fill="url(#paint0_linear_100_3651)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_100_3651"
              x1="0"
              x2="0"
              y1="0"
              y2="660.631"
            >
              <stop stopColor="#F87171" stopOpacity="0.9" />
              <stop offset="1" stopColor="#DC2626" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[70.23%_17.81%_25.62%_73.86%] leading-[normal] not-italic text-[#e7000b] text-[3.028px] text-center">
        Handoff Delays
      </p>
      <div
        className="absolute inset-[63.43%_24.8%_31.43%_74.8%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 2 5"
        >
          <path
            d={svgPaths.p1d0c780}
            fill="var(--fill-0, #F87171)"
            id="Vector"
            opacity="0.9"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[20%] left-1/2 right-[25%] top-[68.57%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-2.47%_-0.06%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 70 13"
          >
            <path
              d={svgPaths.p10d86e00}
              id="Vector"
              opacity="0.795667"
              stroke="var(--stroke-0, #2563EB)"
              strokeDasharray="1.65 1.65"
              strokeWidth="0.550526"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div
      className="absolute contents inset-[80%_43%_-2.25%_43%]"
      data-name="Group"
    >
      <div className="absolute inset-[80%_43%_-2.25%_43%]" data-name="Vector">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 39 22"
        >
          <path
            d={svgPaths.p2b38dfc0}
            fill="url(#paint0_linear_100_3603)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_100_3603"
              x1="0"
              x2="0"
              y1="0"
              y2="2143.5"
            >
              <stop stopColor="#2563EB" stopOpacity="0.9" />
              <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[84.17%_47.03%_10.93%_47.05%] leading-[normal] not-italic text-[4.129px] text-center text-white">
        AI Audit
      </p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[90.57%_45.43%_5.42%_45.28%] leading-[normal] not-italic text-[3.303px] text-center text-white">
        Detecting Leaks
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div
      className="h-[96.342px] overflow-clip relative shrink-0 w-full"
      data-name="Icon"
    >
      <div className="absolute inset-0" data-name="Vector">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 276 97"
        >
          <path
            d={svgPaths.p3e8f2540}
            fill="url(#paint0_linear_100_3684)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_100_3684"
              x1="0"
              x2="6009.29"
              y1="0"
              y2="17164.6"
            >
              <stop stopColor="#F8F9FA" />
              <stop offset="0.5" stopColor="#E9EBEF" stopOpacity="0.6" />
              <stop offset="1" stopColor="#F1F3F7" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group />
      <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
    </div>
  );
}

function Image() {
  return (
    <div
      className="content-stretch flex flex-col h-[96.342px] items-start relative shrink-0 w-full"
      data-name="Image"
    >
      <Icon />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[7.664px] relative shrink-0 w-full" data-name="Paragraph">
      <p
        className="absolute font-['SF_Pro:Regular',_sans-serif] font-normal leading-[7.664px] left-[137.61px] text-[5.288px] text-center text-nowrap text-slate-600 top-[-0.16px] translate-x-[-50%] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <span>{`We map your workflows, spot the leaks, and show how much `}</span>
        <span
          className="font-['SF_Pro:Semibold',_sans-serif] font-[590]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          time and money
        </span>
        <span>{` you can recover... instantly!`}</span>
      </p>
    </div>
  );
}

function WorkflowInfographic() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.9)] box-border content-stretch flex flex-col gap-[10.577px] items-start left-[15.33px] pb-[10.577px] pt-0 px-[10.577px] rounded-[3.526px] top-[15.33px] w-[296.344px]"
      data-name="WorkflowInfographic"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0.441px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[3.526px] shadow-[0px_6.387px_7.983px_-1.597px_rgba(0,0,0,0.1),0px_2.555px_3.193px_-1.916px_rgba(0,0,0,0.1)]"
      />
      <Container47 />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image />
      <Paragraph />
    </div>
  );
}

function Container48() {
  return (
    <div
      className="h-[206.194px] relative shrink-0 w-[327px]"
      data-name="Container"
    >
      <WorkflowInfographic />
    </div>
  );
}

function SolidCta1() {
  return (
    <div
      className="bg-[#0062ff] box-border content-stretch flex gap-[6px] items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0"
      data-name="Solid_CTA"
    >
      <div
        className="flex flex-col font-['SF_Pro:Medium',_sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[#f8f9fa] text-[14px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[20px] whitespace-pre">Get Your AI Audit</p>
      </div>
    </div>
  );
}

function Frame2147227137() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <SolidCta1 />
      <p className="font-['Kalam:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[12px] text-center text-nowrap whitespace-pre">
        Just takes 60 seconds to book.
      </p>
    </div>
  );
}

function OutlineCta1() {
  return (
    <div
      className="box-border content-stretch flex gap-[8px] items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0"
      data-name="Outline_CTA"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#0062ff] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <div
        className="flex flex-col font-['SF_Pro:Medium',_sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[#0062ff] text-[14px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[20px] whitespace-pre">See Sample Audit</p>
      </div>
    </div>
  );
}

function Frame2147227139() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <Frame2147227137 />
      <OutlineCta1 />
    </div>
  );
}

function Frame2147227068() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-1/2 top-[calc(50%-3679.4px)] translate-x-[-50%] translate-y-[-50%]">
      <Frame2147224585 />
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#717182] text-[0px] text-center w-[232px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="font-['Kalam:Regular',_sans-serif] leading-[28px] not-italic text-[16px]">
          <span>{`not because of AI, but because of `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">
            how you’re using it
          </span>
        </p>
      </div>
      <Container48 />
      <Frame2147227139 />
    </div>
  );
}

function Frame2147227126() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[0] relative shrink-0 text-center w-full">
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#0062ff] text-[0px] w-[327px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal] mb-0 text-[20px]">
          <span>{`Our AI Audit finds `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid text-[#0062ff] underline">
            leaks
          </span>{" "}
        </p>
        <p className="leading-[normal] text-[20px]">
          <span>{`+ `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid text-[#0062ff] underline">
            shows the $$$ saved
          </span>
        </p>
      </div>
      <div className="flex flex-col font-['Kalam:Regular',_sans-serif] justify-center not-italic relative shrink-0 text-[16px] text-nowrap text-slate-400">
        <p className="leading-[normal] whitespace-pre">{`...and then we fix 'em!`}</p>
      </div>
    </div>
  );
}

function Frame2147227133() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-1/2 top-[746px] translate-x-[-50%] w-[327px]">
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-center text-slate-800 w-[311px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">
          <span>{`Most teams either underuse or misuse AI wasting thousands `}</span>
          <span className="text-slate-400">(tickets, reports, handoffs)</span>
          <span>{` of hours on boring stuff...`}</span>
        </p>
      </div>
      <Frame2147227126 />
    </div>
  );
}

function SolidCta2() {
  return (
    <div
      className="bg-[#0062ff] box-border content-stretch flex gap-[6px] items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0"
      data-name="Solid_CTA"
    >
      <div
        className="flex flex-col font-['SF_Pro:Medium',_sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[#f8f9fa] text-[14px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[20px] whitespace-pre">Start Your $99 Audit →</p>
      </div>
    </div>
  );
}

function Frame2147227140() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <SolidCta2 />
      <p className="font-['Kalam:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[12px] text-center text-nowrap whitespace-pre">
        no upsells, no pitch, just clarity.
      </p>
    </div>
  );
}

function Frame2147227187() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal h-[49px] justify-center leading-[normal] relative shrink-0 text-[0px] text-[20px] text-center text-slate-800 w-[291px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="mb-0">{`Get measurable clarity in `}</p>
        <p
          className="font-['SF_Pro:Semibold',_sans-serif] font-[590] text-[#0062ff]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          1 week for just $99
        </p>
      </div>
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-slate-600 w-[311px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">
          In 7 days, we’ll show you exactly where your business is bleeding
          money, what’s causing it, and how AI can fix it fast.
        </p>
      </div>
      <Frame2147227140 />
    </div>
  );
}

function FileText() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="FileText">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="FileText">
          <path
            d={svgPaths.p189ec180}
            fill="var(--fill-0, #0062FF)"
            id="Vector"
          />
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
      <p
        className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[20px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Data Insights Report
      </p>
      <p
        className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] opacity-60 relative shrink-0 text-[14px] tracking-[-0.28px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        See where the money’s leaking.
      </p>
    </div>
  );
}

function Frame2147227134() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal gap-[16px] items-start relative shrink-0 w-full">
      <p
        className="leading-[20px] min-w-full relative shrink-0 text-[14px] text-slate-600 tracking-[-0.28px] w-[min-content]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        A simple report showing hours lost, recurring inefficiencies, and the
        hidden cost of manual workflows.
      </p>
      <p
        className="leading-[normal] relative shrink-0 text-[#0062ff] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
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

function Frame14() {
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
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[327px]">
      <p className="font-['Kalam:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e53935] text-[14px] text-center w-full">
        See the leaks!
      </p>
      <Frame14 />
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="FlowArrow">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="FlowArrow">
          <path
            d={svgPaths.p1373c380}
            fill="var(--fill-0, #0062FF)"
            id="Vector"
          />
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

function Frame2147227108() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0 text-[#0062ff] text-nowrap w-full whitespace-pre">
      <p
        className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[20px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Workflow Map
      </p>
      <p
        className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] opacity-60 relative shrink-0 text-[14px] tracking-[-0.28px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        See the full picture, visually
      </p>
    </div>
  );
}

function Frame2147227135() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal gap-[16px] items-start relative shrink-0 w-full">
      <p
        className="leading-[20px] min-w-full relative shrink-0 text-[14px] text-slate-600 tracking-[-0.28px] w-[min-content] whitespace-pre-wrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >{`We turn your business process into a  visual map that shows what’s working, what’s broken, and what’s just busywork.`}</p>
      <p
        className="leading-[normal] relative shrink-0 text-[#0062ff] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        (Delivered as Notion or Figma map.)
      </p>
    </div>
  );
}

function Frame2147227109() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame2147227108 />
      <Frame2147227135 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[14px] relative w-full">
          <Frame2147227028 />
          <Frame2147227109 />
        </div>
      </div>
    </div>
  );
}

function Frame2147227131() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[327px]">
      <p className="font-['Kalam:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e53935] text-[14px] text-center w-full">
        Bottlenecks marked!
      </p>
      <Frame15 />
    </div>
  );
}

function ChartLineUp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ChartLineUp">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ChartLineUp">
          <path
            d={svgPaths.p377b3380}
            fill="var(--fill-0, #0062FF)"
            id="Vector"
          />
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

function Frame2147227112() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0 text-[#0062ff] text-nowrap w-full whitespace-pre">
      <p
        className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[20px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        ROI Projection Plan
      </p>
      <p
        className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] opacity-60 relative shrink-0 text-[14px] tracking-[-0.28px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        See what you could save.
      </p>
    </div>
  );
}

function Frame2147227136() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal gap-[16px] items-start relative shrink-0">
      <p
        className="leading-[20px] relative shrink-0 text-[14px] text-slate-600 tracking-[-0.28px] w-[279px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        We translate your leaks into numbers how much time and cost can be saved
        by fixing 1–3 key problems using AI.
      </p>
      <p
        className="leading-[normal] relative shrink-0 text-[#ff5757] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        (Delivered as ROI summary dashboard.)
      </p>
    </div>
  );
}

function Frame2147227113() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame2147227112 />
      <Frame2147227136 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame2147227029 />
          <Frame2147227113 />
        </div>
      </div>
    </div>
  );
}

function Frame2147227141() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[327px]">
      <p className="font-['Kalam:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e53935] text-[14px] text-center w-full">
        Your next 10x move!
      </p>
      <Frame16 />
    </div>
  );
}

function Frame2147227142() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame2147227130 />
      <Frame2147227131 />
      <Frame2147227141 />
    </div>
  );
}

function Frame2147227138() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-slate-800"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal] whitespace-pre">
          Here’s what you’ll walk away with:
        </p>
      </div>
      <Frame2147227142 />
    </div>
  );
}

function Frame2147227147() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-1/2 top-[1450px] translate-x-[-50%] w-[327px]">
      <Frame2147227187 />
      <Frame2147227138 />
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Star">
          <path
            d={svgPaths.p3b20f080}
            fill="var(--fill-0, #FFD60A)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2147227127() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      {[...Array(5).keys()].map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  );
}

function Frame2147227128() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0 text-nowrap whitespace-pre">
      <p
        className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#0062ff] text-[16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        4.9/5
      </p>
      <p
        className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[12px] text-slate-600 tracking-[-0.24px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        127 reviews
      </p>
    </div>
  );
}

function Frame2147227114() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame2147227127 />
      <Frame2147227128 />
    </div>
  );
}

function Frame2147227115() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame2147227114 />
    </div>
  );
}

function Frame2147227143() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-start p-[12px] relative rounded-[8px] shadow-[0px_6px_25px_0px_rgba(0,0,0,0.08),0px_2px_8px_0px_rgba(0,0,0,0.1)] shrink-0">
      <Frame2147227115 />
    </div>
  );
}

function Group8() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 14 13"
    >
      <g id="Group">
        <path
          d={svgPaths.p3d905e00}
          fill="var(--fill-0, #828282)"
          id="Vector"
        />
        <path
          d={svgPaths.p298d0f00}
          fill="var(--fill-0, #828282)"
          id="Vector_2"
        />
      </g>
    </svg>
  );
}

function Calque1() {
  return (
    <div className="absolute contents inset-0" data-name="Calque 1">
      <Group8 />
    </div>
  );
}

function Asset61Svg() {
  return (
    <div
      className="absolute h-[12.636px] left-[calc(50%-0.002px)] overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[13.987px]"
      data-name="Asset_6_1.svg"
    >
      <Calque1 />
    </div>
  );
}

function Asset61SvgFill() {
  return (
    <div
      className="absolute h-[12.636px] left-0 overflow-clip top-0 w-[13.991px]"
      data-name="Asset_6_1.svg fill"
    >
      <Asset61Svg />
    </div>
  );
}

function Asset61Svg1() {
  return (
    <div
      className="absolute h-[12.636px] left-0 overflow-clip top-1/2 translate-y-[-50%] w-[13.991px]"
      data-name="Asset_6_1.svg"
    >
      <Asset61SvgFill />
    </div>
  );
}

function Frame() {
  return (
    <div
      className="h-[12.636px] relative shrink-0 w-[13.991px]"
      data-name="frame"
    >
      <Asset61Svg1 />
    </div>
  );
}

function Group9() {
  return (
    <div
      className="absolute inset-[-0.11%_77.45%_26.56%_-0.05%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 9"
      >
        <g id="Group">
          <path
            clipRule="evenodd"
            d={svgPaths.p1f6fe700}
            fill="var(--fill-0, #828282)"
            fillRule="evenodd"
            id="Vector"
            opacity="0.992"
          />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div
      className="absolute inset-[-0.11%_23.37%_26.55%_71.93%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 2 9"
      >
        <g id="Group">
          <path
            clipRule="evenodd"
            d={svgPaths.p372f6080}
            fill="var(--fill-0, #828282)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div
      className="absolute inset-[18.8%_55.45%_0.11%_24.18%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 7 10"
      >
        <g id="Group">
          <path
            clipRule="evenodd"
            d={svgPaths.p75f4300}
            fill="var(--fill-0, #828282)"
            fillRule="evenodd"
            id="Vector"
            opacity="0.985"
          />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div
      className="absolute inset-[18.88%_31.44%_0.11%_48.24%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 7 10"
      >
        <g id="Group">
          <path
            clipRule="evenodd"
            d={svgPaths.p9976bc0}
            fill="var(--fill-0, #828282)"
            fillRule="evenodd"
            id="Vector"
            opacity="0.985"
          />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div
      className="absolute inset-[19.86%_0.04%_0.9%_80.01%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 7 10"
      >
        <g id="Group">
          <path
            clipRule="evenodd"
            d={svgPaths.p2f7e1f80}
            fill="var(--fill-0, #828282)"
            fillRule="evenodd"
            id="Vector"
            opacity="0.986"
          />
        </g>
      </svg>
    </div>
  );
}

function White1Ad5D3986314C4747A9B40C88F95Ef676Svg() {
  return (
    <div
      className="absolute h-[12.05px] left-[calc(50%+0.001px)] overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[32.481px]"
      data-name="white_1_ad5d3986-314c-4747-a9b4-0c88f95ef676.svg"
    >
      <Group9 />
      <Group10 />
      <Group11 />
      <Group12 />
      <Group13 />
    </div>
  );
}

function White1Ad5D3986314C4747A9B40C88F95Ef676SvgFill() {
  return (
    <div
      className="absolute h-[12.05px] left-0 overflow-clip top-0 w-[32.494px]"
      data-name="white_1_ad5d3986-314c-4747-a9b4-0c88f95ef676.svg fill"
    >
      <White1Ad5D3986314C4747A9B40C88F95Ef676Svg />
    </div>
  );
}

function White1Ad5D3986314C4747A9B40C88F95Ef676Svg1() {
  return (
    <div
      className="absolute h-[12.05px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[32.494px]"
      data-name="white_1_ad5d3986-314c-4747-a9b4-0c88f95ef676.svg"
    >
      <White1Ad5D3986314C4747A9B40C88F95Ef676SvgFill />
    </div>
  );
}

function Frame1() {
  return (
    <div
      className="h-[12.05px] relative shrink-0 w-[32.494px]"
      data-name="frame"
    >
      <White1Ad5D3986314C4747A9B40C88F95Ef676Svg1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[6.318px] items-center left-[calc(50%-0.266px)] top-[calc(50%-0.032px)] translate-x-[-50%] translate-y-[-50%]">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame2147223514() {
  return (
    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[76.195px]">
      <Frame3 />
    </div>
  );
}

function Group15() {
  return (
    <div
      className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_luminance] [mask-repeat:no-repeat,_no-repeat] absolute bottom-[5.48%] left-[-0.01%] mask-position-[0.003px,_0.003px_0px,_0px] mask-size-[62.753px_14.916px,_62.753px_14.916px] right-[-0.04%] top-0"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 63 15"
      >
        <g id="Group">
          <path
            d={svgPaths.p1e54d100}
            fill="var(--fill-0, #828282)"
            id="Vector"
          />
          <path
            d={svgPaths.p31ca3b00}
            fill="var(--fill-0, #828282)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p199c7f00}
            fill="var(--fill-0, #828282)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p2736c300}
            fill="var(--fill-0, #828282)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p19b4c700}
            fill="var(--fill-0, #828282)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p127980}
            fill="var(--fill-0, #828282)"
            id="Vector_6"
          />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div
      className="absolute bottom-[2.12%] contents left-0 right-0 top-0"
      data-name="Mask group"
    >
      <Group15 />
    </div>
  );
}

function Group16() {
  return (
    <div
      className="absolute bottom-[2.12%] contents left-0 right-0 top-0"
      data-name="Group"
    >
      <MaskGroup />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div
      className="absolute bottom-[2.12%] contents left-0 right-0 top-0"
      data-name="Clip path group"
    >
      <Group16 />
    </div>
  );
}

function DoladoLogoWhite() {
  return (
    <div
      className="absolute h-[15.239px] left-[calc(50%+0.263px)] overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[62.752px]"
      data-name="Dolado logo white"
    >
      <ClipPathGroup />
    </div>
  );
}

function Frame2147223515() {
  return (
    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[76.195px]">
      <DoladoLogoWhite />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[2.852px] items-center justify-center left-[8.25px] top-[21.15px] w-[59.686px]">
      <div
        className="h-[33.896px] relative shrink-0 w-[76.633px]"
        data-name="TAIE logo 2"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <NextImage
            alt=""
            className="absolute h-[104.88%] left-[-0.04%] max-w-none top-0 w-[100.08%]"
            src="/images/audit/8115f9c5d1016179d25f00778b1c4ca8056b6fe2.png"
            fill
          />
        </div>
      </div>
    </div>
  );
}

function Frame2147223516() {
  return (
    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[76.195px]">
      <Frame4 />
    </div>
  );
}

function Frame2147223517() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[76.195px] overflow-clip relative shrink-0 w-[65.4px]">
      <div
        className="absolute h-[20.319px] left-[calc(50%+0.318px)] rounded-[2.54px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[54.606px]"
        data-name="SBF+Logo-01-cropped 1"
      >
        <NextImage
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2.54px] size-full"
          src="/images/audit/4408337cc76f8e1a1b1f058c25a74d3778ce2556.png"
          fill
        />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div
      className="[grid-area:1_/_1] h-[19.684px] ml-[3.125%] mt-[1.562%] relative w-[19.049px]"
      data-name="Mask group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Mask group">
          <mask
            height="20"
            id="mask0_100_3739"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <path
              d={svgPaths.pe488d00}
              fill="var(--fill-0, #D9D9D9)"
              id="Ellipse 112"
              stroke="var(--stroke-0, black)"
              strokeWidth="0.634954"
            />
          </mask>
          <g mask="url(#mask0_100_3739)">
            <g id="Group 77">
              <g id="Polygon 1"></g>
              <g id="Polygon 2"></g>
              <g id="Polygon 3"></g>
              <g id="Polygon 5"></g>
              <g id="Polygon 6"></g>
              <g id="Polygon 4"></g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group88() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[20.319px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 21 21"
        >
          <circle
            cx="10.1593"
            cy="10.1593"
            fill="var(--fill-0, black)"
            id="Ellipse 121"
            r="10.1593"
          />
        </svg>
      </div>
      <MaskGroup1 />
      <div className="[grid-area:1_/_1] ml-[2.285px] mt-[2.286px] relative size-[15.747px]">
        <NextImage
          alt=""
          className="block max-w-none size-full"
          height={16}
          src="/images/audit/245a7d0f66b2a4c07c6f65541bd8759f79b07f71.png"
          width={16}
        />
      </div>
      <div className="[grid-area:1_/_1] h-[13.334px] ml-[3.81px] mt-[3.492px] relative w-[12.699px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g id="Ellipse 122"></g>
        </svg>
      </div>
    </div>
  );
}

function Group90() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group88 />
      <p className="[grid-area:1_/_1] font-['New_York_Small:Bold',_sans-serif] leading-[normal] ml-[6.855px] mt-[4.063px] not-italic relative text-[#b51010] text-[10.159px] text-nowrap whitespace-pre">
        Z
      </p>
    </div>
  );
}

function Frame1171276985() {
  return (
    <div className="content-stretch flex gap-[5.08px] items-center relative shrink-0">
      <Group90 />
    </div>
  );
}

function Frame2147223518() {
  return (
    <div className="absolute content-stretch flex gap-[5.715px] items-center left-[7.62px] top-[27.94px]">
      <Frame1171276985 />
      <div className="flex flex-col font-['Raleway:Bold',_sans-serif] font-bold justify-center leading-[normal] relative shrink-0 text-[8.889px] text-black text-nowrap uppercase whitespace-pre">
        <p className="mb-0">{`Poker `}</p>
        <p>Zombie</p>
      </div>
    </div>
  );
}

function Frame2147223519() {
  return (
    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[76.195px]">
      <Frame2147223518 />
    </div>
  );
}

function LogoLightNewBlue() {
  return (
    <div
      className="absolute h-[24.128px] left-[7.37px] top-[26.03px] w-[60.823px]"
      data-name="Logo light new blue"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 61 25"
      >
        <g id="Logo light new blue">
          <g id="Group 18289">
            <path
              d={svgPaths.p2a957c0}
              id="Vector"
              stroke="var(--stroke-0, #DBA726)"
              strokeMiterlimit="10"
              strokeWidth="0.754008"
            />
            <path
              d={svgPaths.p2cc18780}
              id="Vector_2"
              stroke="var(--stroke-0, #DBA726)"
              strokeMiterlimit="10"
              strokeWidth="0.754008"
            />
            <g id="Group">
              <path
                d={svgPaths.p3899c400}
                fill="url(#paint0_linear_100_3640)"
                id="Vector_3"
              />
              <path
                d={svgPaths.p13db0b80}
                fill="var(--fill-0, #DBA726)"
                id="Vector_4"
              />
              <path
                d={svgPaths.p3a1b880}
                fill="var(--fill-0, #DBA726)"
                id="Vector_5"
              />
              <path
                d={svgPaths.p38d49b00}
                fill="var(--fill-0, #DBA726)"
                id="Vector_6"
              />
            </g>
          </g>
          <g id="S LARHUB">
            <path d={svgPaths.paa990c0} fill="var(--fill-0, #2D4764)" />
            <path d={svgPaths.p2e870900} fill="var(--fill-0, #2D4764)" />
            <path d={svgPaths.p1597ef00} fill="var(--fill-0, #2D4764)" />
            <path d={svgPaths.p12ded880} fill="var(--fill-0, #2D4764)" />
            <path d={svgPaths.p8c2ab80} fill="var(--fill-0, #2D4764)" />
            <path d={svgPaths.p2e3ca500} fill="var(--fill-0, #2D4764)" />
            <path d={svgPaths.p3ba25200} fill="var(--fill-0, #2D4764)" />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_100_3640"
            x1="12.2013"
            x2="8.14938"
            y1="13.3383"
            y2="9.39877"
          >
            <stop stopColor="#FBB03B" />
            <stop offset="0.75" stopColor="#F7931E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame2147223520() {
  return (
    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[76.195px]">
      <LogoLightNewBlue />
    </div>
  );
}

function G204() {
  return (
    <div
      className="absolute contents inset-[35.76%_75.34%_54.49%_7.5%]"
      data-name="g204"
    >
      <p className="absolute font-['Century_Gothic:Bold',_sans-serif] inset-[35.76%_75.34%_54.49%_7.5%] leading-[normal] not-italic text-[#3b3b3b] text-[6.024px]">
        How
      </p>
    </div>
  );
}

function G216() {
  return (
    <div
      className="absolute inset-[43.38%_27.24%_40.24%_56.45%]"
      data-name="g216"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 13 13"
      >
        <g id="g216">
          <path
            d={svgPaths.p20983800}
            fill="var(--fill-0, #11405F)"
            id="path206"
          />
          <g id="g212">
            <path
              clipRule="evenodd"
              d={svgPaths.p118fc00}
              fill="var(--fill-0, #5CD3F5)"
              fillRule="evenodd"
              id="path208"
            />
            <path
              d={svgPaths.pacd000}
              fill="var(--fill-0, #5CD3F5)"
              id="path210"
              opacity="0.1"
            />
          </g>
          <path
            d={svgPaths.p33b862b0}
            fill="var(--fill-0, #11405F)"
            id="path214"
            opacity="0.1"
          />
        </g>
      </svg>
    </div>
  );
}

function Layer2() {
  return (
    <div
      className="absolute contents inset-[35.76%_6.67%_35.76%_7.5%]"
      data-name="Layer_2"
    >
      <div
        className="absolute inset-[44.53%_84.75%_44.3%_8.11%]"
        data-name="path184"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6 9"
        >
          <path
            d={svgPaths.p33f29b00}
            fill="var(--fill-0, #3B3B3B)"
            id="path184"
          />
        </svg>
      </div>
      <div
        className="absolute inset-[47.26%_74.15%_44.07%_17.23%]"
        data-name="path186"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 7 7"
        >
          <path
            d={svgPaths.p32581000}
            fill="var(--fill-0, #3B3B3B)"
            id="path186"
          />
        </svg>
      </div>
      <div
        className="absolute inset-[44.26%_63.21%_44.07%_28.18%]"
        data-name="path188"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 7 9"
        >
          <path
            d={svgPaths.p3e84a400}
            fill="var(--fill-0, #3B3B3B)"
            id="path188"
          />
        </svg>
      </div>
      <div
        className="absolute inset-[44.04%_59.25%_44.31%_39.01%]"
        data-name="path190"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 2 9"
        >
          <path
            d={svgPaths.p3dd7ff00}
            fill="var(--fill-0, #3B3B3B)"
            id="path190"
          />
        </svg>
      </div>
      <div
        className="absolute inset-[47.24%_48.84%_44.05%_42.52%]"
        data-name="path192"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 7 7"
        >
          <path
            d={svgPaths.p2e636a0}
            fill="var(--fill-0, #3B3B3B)"
            id="path192"
          />
        </svg>
      </div>
      <div
        className="absolute inset-[44.26%_45.66%_44.29%_53.27%]"
        data-name="path194"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1 9"
        >
          <path
            d="M0 0H0.812062V8.7262H0V0Z"
            fill="var(--fill-0, #3B3B3B)"
            id="path194"
          />
        </svg>
      </div>
      <div
        className="absolute inset-[47.22%_16.22%_41.07%_75.18%]"
        data-name="path196"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 7 9"
        >
          <path
            d={svgPaths.p15717180}
            fill="var(--fill-0, #3B3B3B)"
            id="path196"
          />
        </svg>
      </div>
      <div
        className="absolute inset-[47.44%_6.67%_41.27%_85.48%]"
        data-name="path198"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6 9"
        >
          <path
            d={svgPaths.p30cc8300}
            fill="var(--fill-0, #3B3B3B)"
            id="path198"
          />
        </svg>
      </div>
      <p className="absolute font-['Century_Gothic:Bold',_sans-serif] inset-[54.5%_67.76%_35.76%_7.88%] leading-[normal] not-italic text-[#3b3b3b] text-[6.024px]">
        Works
      </p>
      <G204 />
      <G216 />
      <div
        className="absolute inset-[43%_26.81%_39.81%_55.99%]"
        data-name="circle218"
      >
        <div className="absolute inset-[-1.05%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15 15"
          >
            <path
              d={svgPaths.p30ec7000}
              id="circle218"
              stroke="var(--stroke-0, #3B3B3B)"
              strokeMiterlimit="10"
              strokeWidth="0.275274"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2147223536() {
  return (
    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[76.195px]">
      <Layer2 />
    </div>
  );
}

function LogoHorizontal() {
  return (
    <div
      className="absolute h-[19.049px] left-[9.6px] top-[28.57px] w-[57.622px]"
      data-name="logo-horizontal"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 58 20"
      >
        <g clipPath="url(#clip0_100_3548)" id="logo-horizontal">
          <path
            d={svgPaths.p15e97400}
            fill="var(--fill-0, #1ECAD3)"
            id="Vector"
          />
          <path
            d={svgPaths.p1893a600}
            fill="var(--fill-0, #1ECAD3)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p22c3d900}
            fill="var(--fill-0, #1ECAD3)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p13658f00}
            fill="var(--fill-0, #1ECAD3)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p3d45a300}
            fill="var(--fill-0, #1ECAD3)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p29a2db80}
            fill="var(--fill-0, #1ECAD3)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p32e17f80}
            fill="var(--fill-0, black)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p334cf300}
            fill="var(--fill-0, black)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p39f75200}
            fill="var(--fill-0, black)"
            id="Vector_9"
          />
          <path
            d={svgPaths.p2ad53980}
            fill="var(--fill-0, black)"
            id="Vector_10"
          />
        </g>
        <defs>
          <clipPath id="clip0_100_3548">
            <rect fill="white" height="19.0486" width="57.6221" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2147223537() {
  return (
    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[76.195px]">
      <LogoHorizontal />
    </div>
  );
}

function Frame2147223538() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[76.195px] overflow-clip relative shrink-0 w-[111.117px]">
      <p className="absolute font-['Baskervville:Regular',_sans-serif] leading-[normal] left-[calc(50%+0.195px)] not-italic text-[15.874px] text-black text-center text-nowrap top-[calc(50%-10.16px)] translate-x-[-50%] whitespace-pre">
        Season of Ink
      </p>
    </div>
  );
}

function Logo() {
  return (
    <div
      className="absolute h-[31.042px] left-[calc(50%-0.003px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[50.796px]"
      data-name="Logo"
    >
      <p className="absolute font-['Urbanist:Bold',_sans-serif] font-bold leading-[0.9] left-0 text-[#3c3c3c] text-[19.419px] text-nowrap top-[6.72px] tracking-[-0.1214px] whitespace-pre">
        Haavi
      </p>
    </div>
  );
}

function Frame2147223539() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[76.195px] overflow-clip relative shrink-0 w-[68.575px]">
      <Logo />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div
      className="absolute contents left-[12.07px] top-[21.59px]"
      data-name="Mask group"
    >
      <div
        className="absolute bg-[#4f4f4f] h-[33.018px] left-[12.07px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[39.68px_33.018px] top-[21.59px] w-[39.679px]"
        data-name="Bitmap"
        style={{
          maskImage: `url('/images/audit/7eac89db0fdcdaba69b04806d610e361aa87f51f.png')`,
        }}
      />
    </div>
  );
}

function Frame2147223540() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[76.195px] overflow-clip relative shrink-0 w-[63.495px]">
      <MaskGroup2 />
    </div>
  );
}

function Group18() {
  return (
    <div
      className="absolute inset-[-3.33%_29.25%_26.67%_27.36%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.797px] mask-size-[12.939px_12.939px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup2}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 17"
      >
        <g id="Group">
          <path
            clipRule="evenodd"
            d="M0 0H16.5328V16.5328H0V0Z"
            fill="var(--fill-0, #F20050)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div
      className="absolute contents inset-[5%_33.97%_35%_32.07%]"
      data-name="Clip path group"
    >
      <Group18 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[6.59%_2.44%_6.43%_2.83%]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 37 19"
      >
        <g id="Group">
          <g id="Group_2">
            <path
              d={svgPaths.p3f25d2c0}
              fill="var(--fill-0, #F20050)"
              id="Vector"
            />
            <path
              d={svgPaths.p3ac035c0}
              fill="var(--fill-0, #F20050)"
              id="Vector_2"
            />
            <path
              d={svgPaths.p2edea200}
              fill="var(--fill-0, #F20050)"
              id="Vector_3"
            />
            <path
              d={svgPaths.p5f84900}
              fill="var(--fill-0, #F20050)"
              id="Vector_4"
            />
            <path
              d={svgPaths.p1759d100}
              fill="var(--fill-0, #F20050)"
              id="Vector_5"
            />
            <path
              d={svgPaths.p3aabcb00}
              fill="var(--fill-0, #F20050)"
              id="Vector_6"
            />
            <path
              d={svgPaths.pbf8c680}
              fill="var(--fill-0, #F20050)"
              id="Vector_7"
            />
            <path
              d={svgPaths.p7cc5e80}
              fill="var(--fill-0, #F20050)"
              id="Vector_8"
            />
            <path
              d={svgPaths.p3ca4ea80}
              fill="var(--fill-0, #F20050)"
              id="Vector_9"
            />
            <path
              d={svgPaths.p1ad4ec80}
              fill="var(--fill-0, #F20050)"
              id="Vector_10"
            />
            <path
              d={svgPaths.p9707380}
              fill="var(--fill-0, #F20050)"
              id="Vector_11"
            />
            <path
              d={svgPaths.p3903b600}
              fill="var(--fill-0, #F20050)"
              id="Vector_12"
            />
          </g>
          <path
            d={svgPaths.p19d8280}
            fill="var(--fill-0, #1A3380)"
            id="Vector_13"
          />
          <g id="Vector_14"></g>
          <path
            d={svgPaths.p2064a700}
            fill="var(--fill-0, #1A3380)"
            id="Vector_15"
          />
        </g>
      </svg>
    </div>
  );
}

function LogoSvg() {
  return (
    <div
      className="absolute h-[21.564px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[38.097px]"
      data-name="logo.svg"
    >
      <ClipPathGroup1 />
      <Group20 />
    </div>
  );
}

function LogoSvgFill() {
  return (
    <div
      className="absolute h-[21.564px] left-0 overflow-clip top-0 w-[38.097px]"
      data-name="logo.svg fill"
    >
      <LogoSvg />
    </div>
  );
}

function LinkLogoSvg() {
  return (
    <div
      className="absolute h-[21.564px] left-[calc(50%-0.001px)] overflow-clip top-[27.31px] translate-x-[-50%] w-[38.097px]"
      data-name="Link → logo.svg"
    >
      <LogoSvgFill />
    </div>
  );
}

function Frame2147223541() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[76.195px] overflow-clip relative shrink-0 w-[68.575px]">
      <LinkLogoSvg />
    </div>
  );
}

function Group74() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 69 22"
    >
      <g id="Group 74">
        <path d={svgPaths.pf5a8b00} fill="var(--fill-0, #212121)" id="Vector" />
        <path
          d={svgPaths.p11d30b00}
          fill="var(--fill-0, #212121)"
          id="Vector_2"
        />
        <path
          d={svgPaths.p13f80be0}
          fill="var(--fill-0, #212121)"
          id="Vector_3"
        />
        <path
          d={svgPaths.p18e86700}
          fill="var(--fill-0, #212121)"
          id="Vector_4"
        />
        <path
          d={svgPaths.p90b800}
          fill="var(--fill-0, #212121)"
          id="Vector_5"
        />
        <path
          d={svgPaths.p2ea50c00}
          fill="var(--fill-0, #212121)"
          id="Vector_6"
        />
        <path
          d={svgPaths.p34f84380}
          fill="var(--fill-0, #212121)"
          id="Vector_7"
        />
        <path
          d={svgPaths.pf2f0980}
          fill="var(--fill-0, #212121)"
          id="Vector_8"
        />
        <path
          d={svgPaths.p32574e70}
          fill="var(--fill-0, #212121)"
          id="Vector_9"
        />
        <path
          d={svgPaths.pe4b7480}
          fill="var(--fill-0, #3968EB)"
          id="Vector_10"
        />
      </g>
    </svg>
  );
}

function Frame181() {
  return (
    <div className="absolute h-[21.136px] left-[3.81px] top-[27.85px] w-[68.575px]">
      <Group74 />
    </div>
  );
}

function Frame2147223542() {
  return (
    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[76.195px]">
      <Frame181 />
    </div>
  );
}

function Group21() {
  return (
    <div
      className="absolute bottom-0 left-0 right-[81.36%] top-0"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 13 13"
      >
        <g id="Group">
          <path
            d={svgPaths.p99ba500}
            fill="var(--fill-0, #0077B1)"
            id="Vector"
          />
          <path
            d={svgPaths.p33b47300}
            fill="var(--fill-0, #4395C5)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p16c4000}
            fill="var(--fill-0, #0085BB)"
            id="Vector_3"
          />
          <path
            d={svgPaths.pcbbc300}
            fill="var(--fill-0, #6EA7D0)"
            id="Vector_4"
          />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div
      className="absolute inset-[23.37%_50.84%_25.82%_24.01%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 7"
      >
        <g id="Group">
          <path
            d={svgPaths.p223be100}
            fill="var(--fill-0, #DBDCE9)"
            id="Vector"
          />
          <path
            d={svgPaths.p14c10980}
            fill="var(--fill-0, #DBDCE9)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p3f00e00}
            fill="var(--fill-0, #DBDCE9)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p36717000}
            fill="var(--fill-0, #DBDCE9)"
            id="Vector_4"
          />
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div
      className="absolute bottom-[25.82%] left-[50.08%] right-0 top-[23.05%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 34 7"
      >
        <g id="Group">
          <path
            d={svgPaths.p1cad0680}
            fill="var(--fill-0, #0073AE)"
            id="Vector"
          />
          <path
            d={svgPaths.p39299600}
            fill="var(--fill-0, #0073AE)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p7dab200}
            fill="var(--fill-0, #0073AE)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p11432c00}
            fill="var(--fill-0, #0073AE)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p38479980}
            fill="var(--fill-0, #0073AE)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p392be500}
            fill="var(--fill-0, #0073AE)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p13c9e00}
            fill="var(--fill-0, #0073AE)"
            id="Vector_7"
          />
          <g id="Group_2">
            <path
              d={svgPaths.p176eec00}
              fill="var(--fill-0, #0073AE)"
              id="Vector_8"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group21 />
      <Group22 />
      <Group24 />
    </div>
  );
}

function BdLogoDarkBackgroundSvg() {
  return (
    <div
      className="h-[12.565px] overflow-clip relative shrink-0 w-[67.426px]"
      data-name="BD_Logo_-_Dark_Background.svg"
    >
      <Group25 />
    </div>
  );
}

function BdLogoDarkBackgroundSvg1() {
  return (
    <div
      className="content-stretch flex items-center justify-center max-w-[67.442px] relative shrink-0"
      data-name="BD_Logo_-_Dark_Background.svg"
    >
      <BdLogoDarkBackgroundSvg />
    </div>
  );
}

function Heading1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start pb-[1.942px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Heading 1"
    >
      <BdLogoDarkBackgroundSvg1 />
    </div>
  );
}

function DivTmLogoContainer() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start left-[3.13px] pl-0 pr-[2.461px] py-0 top-[31.14px]"
      data-name="div.tm-logo-container"
    >
      <Heading1 />
    </div>
  );
}

function Frame2147223543() {
  return (
    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[76.195px]">
      <DivTmLogoContainer />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute bottom-0 left-0 right-[75.58%] top-0">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 13 13"
      >
        <g id="Group 40">
          <rect
            fill="var(--fill-0, #222222)"
            height="10.8832"
            id="Rectangle 22"
            rx="2.61058"
            width="10.8832"
            x="1.08808"
            y="1.08834"
          />
          <path
            d={svgPaths.p133e6700}
            fill="var(--fill-0, #DAFF00)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute bottom-[21.3%] left-[28.8%] right-0 top-[25.4%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 38 7"
      >
        <g id="Group 39">
          <path
            d={svgPaths.p2595a600}
            fill="var(--fill-0, #4F4F4F)"
            id="Vector"
          />
          <path
            d={svgPaths.p3997b900}
            fill="var(--fill-0, #4F4F4F)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p1b056ef0}
            fill="var(--fill-0, #4F4F4F)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p2ea0fb00}
            fill="var(--fill-0, #4F4F4F)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p129fdc00}
            fill="var(--fill-0, #4F4F4F)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p380ce000}
            fill="var(--fill-0, #4F4F4F)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p3af8e980}
            fill="var(--fill-0, #4F4F4F)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p2331f200}
            fill="var(--fill-0, #4F4F4F)"
            id="Vector_8"
          />
        </g>
      </svg>
    </div>
  );
}

function OneClikLogo() {
  return (
    <div
      className="absolute h-[12.852px] left-[11.86px] top-[31.67px] w-[52.91px]"
      data-name="one clik logo"
    >
      <Group40 />
      <Group39 />
    </div>
  );
}

function Frame2147223544() {
  return (
    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[76.195px]">
      <OneClikLogo />
    </div>
  );
}

function Frame2147223545() {
  return (
    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[76.195px]">
      <p className="absolute font-['Space_Grotesk:Bold',_sans-serif] leading-[0.8] left-[14.02px] not-italic text-[#4f4f4f] text-[14.067px] text-justify text-nowrap top-[32.38px] tracking-[-0.422px] whitespace-pre">
        Biscuit.
      </p>
    </div>
  );
}

function Group6745() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 25 25"
    >
      <g id="Group 6745">
        <path
          d={svgPaths.p3b4a2f00}
          fill="url(#paint0_linear_100_3494)"
          id="Vector"
        />
        <g id="_xAE__2_">
          <g id="Vector_2"></g>
        </g>
        <g id="Group">
          <g id="Vector_3"></g>
          <g id="Vector_4"></g>
          <g id="Vector_5"></g>
        </g>
        <g id="Group_2">
          <g id="Vector_6"></g>
          <g id="Vector_7"></g>
          <g id="Vector_8"></g>
        </g>
        <g id="Group_3">
          <g id="Vector_9"></g>
          <g id="Vector_10"></g>
          <g id="Vector_11"></g>
          <g id="Vector_12"></g>
          <g id="Vector_13"></g>
        </g>
        <g id="Group_4">
          <g id="Vector_14"></g>
          <g id="Vector_15"></g>
          <g id="Vector_16"></g>
          <g id="Vector_17"></g>
          <g id="Vector_18"></g>
          <g id="Vector_19"></g>
          <g id="Vector_20"></g>
          <g id="Vector_21"></g>
        </g>
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_100_3494"
          x1="1.33572"
          x2="21.9423"
          y1="1.33572"
          y2="21.9423"
        >
          <stop offset="0.1198" stopColor="#00FFDD" />
          <stop offset="0.2525" stopColor="#1CBED7" />
          <stop offset="0.4417" stopColor="#4266CF" />
          <stop offset="0.5276" stopColor="#5143CC" />
          <stop offset="0.6556" stopColor="#8229E0" />
          <stop offset="0.7788" stopColor="#AA13F1" />
          <stop offset="0.8762" stopColor="#C306FB" />
          <stop offset="0.9355" stopColor="#CC01FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Frame2() {
  return (
    <div
      className="absolute left-[26.04px] overflow-clip size-[24.128px] top-[26.03px]"
      data-name="Frame"
    >
      <Group6745 />
    </div>
  );
}

function Group6746() {
  return (
    <div className="absolute contents left-[26.04px] top-[26.03px]">
      <div
        className="absolute inset-[34.17%_34.16%_34.17%_34.17%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-30%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 40 40"
          >
            <g filter="url(#filter0_f_100_3522)" id="Vector">
              <path
                d={svgPaths.p28a0b100}
                fill="url(#paint0_linear_100_3522)"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="38.6052"
                id="filter0_f_100_3522"
                width="38.6052"
                x="0.761523"
                y="0.761523"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_100_3522"
                  stdDeviation="3.61924"
                />
              </filter>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_100_3522"
                x1="9.33572"
                x2="29.9423"
                y1="9.33572"
                y2="29.9423"
              >
                <stop offset="0.1198" stopColor="#00FFDD" />
                <stop offset="0.2525" stopColor="#1CBED7" />
                <stop offset="0.4417" stopColor="#4266CF" />
                <stop offset="0.5276" stopColor="#5143CC" />
                <stop offset="0.6556" stopColor="#8229E0" />
                <stop offset="0.7788" stopColor="#AA13F1" />
                <stop offset="0.8762" stopColor="#C306FB" />
                <stop offset="0.9355" stopColor="#CC01FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function Group6748() {
  return (
    <div className="absolute contents left-[26.04px] top-[26.03px]">
      <Group6746 />
    </div>
  );
}

function Frame2147223546() {
  return (
    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[76.195px]">
      <Group6748 />
    </div>
  );
}

function Frame2147223549() {
  return (
    <div className="content-stretch flex gap-[24px] h-[76px] items-center justify-center relative shrink-0 w-full">
      <Frame2147223514 />
      <Frame2147223515 />
      <Frame2147223516 />
      <Frame2147223517 />
      <Frame2147223519 />
      <Frame2147223520 />
      <Frame2147223536 />
      <Frame2147223537 />
      <Frame2147223538 />
      <Frame2147223539 />
      <Frame2147223540 />
      <Frame2147223541 />
      <Frame2147223542 />
      <Frame2147223543 />
      <Frame2147223544 />
      <Frame2147223545 />
      <Frame2147223546 />
      <div className="absolute bg-gradient-to-l from-[#f9f6f4] h-[77px] left-[234px] to-[rgba(249,246,244,0)] top-0 w-[141px]" />
      <div className="absolute flex h-[77px] items-center justify-center left-0 top-[-0.17px] w-[141px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-gradient-to-l from-[#f9f6f4] h-[77px] to-[rgba(249,246,244,0)] w-[141px]" />
        </div>
      </div>
    </div>
  );
}

function Frame2147227186() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Kalam:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e53935] text-[14px] text-center uppercase w-full">
        <p className="leading-[normal]">Trusted by founders, FROM:</p>
      </div>
      <Frame2147223549 />
    </div>
  );
}

function Frame2147227116() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p
        className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#0062ff] text-[20px] text-nowrap whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        $100K+
      </p>
    </div>
  );
}

function Frame2147227117() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame2147227116 />
      <p
        className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-slate-600 tracking-[-0.28px] w-[160px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Avg Savings
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#0062ff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_25px_0px_rgba(0,0,0,0.08),0px_2px_8px_0px_rgba(0,0,0,0.1)]"
      />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[14px] relative w-full">
          <Frame2147227117 />
        </div>
      </div>
    </div>
  );
}

function Frame2147227118() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p
        className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#0062ff] text-[20px] text-nowrap whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        1 week
      </p>
    </div>
  );
}

function Frame2147227119() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame2147227118 />
      <p
        className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-slate-600 tracking-[-0.28px] w-[160px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Timeline
      </p>
    </div>
  );
}

function Frame2147227144() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#0062ff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_25px_0px_rgba(0,0,0,0.08),0px_2px_8px_0px_rgba(0,0,0,0.1)]"
      />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[14px] relative w-full">
          <Frame2147227119 />
        </div>
      </div>
    </div>
  );
}

function Frame2147227185() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Frame2147227144 />
    </div>
  );
}

function Frame2147227120() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p
        className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#0062ff] text-[20px] text-nowrap whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        50+
      </p>
    </div>
  );
}

function Frame2147227121() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame2147227120 />
      <p
        className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap text-slate-600 tracking-[-0.28px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Audits Done
      </p>
    </div>
  );
}

function Frame2147227149() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border border-[#0062ff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_25px_0px_rgba(0,0,0,0.08),0px_2px_8px_0px_rgba(0,0,0,0.1)]"
      />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[14px] relative w-full">
          <Frame2147227121 />
        </div>
      </div>
    </div>
  );
}

function Frame2147227129() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[327px]">
      <Frame2147227185 />
      <Frame2147227149 />
    </div>
  );
}

function Frame2147227146() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-1/2 top-[996px] translate-x-[-50%] w-[375px]">
      <Frame2147227143 />
      <Frame2147227186 />
      <Frame2147227129 />
    </div>
  );
}

function Frame2147227171() {
  return (
    <div className="bg-[#ffd60a] box-border content-stretch flex gap-[6.166px] items-center justify-center px-[4.624px] py-[3.083px] relative">
      <div
        aria-hidden="true"
        className="absolute border-[#f8f9fa] border-[0.771px] border-solid inset-0 pointer-events-none shadow-[-0.771px_0.771px_0px_0px_rgba(0,0,0,0.25)]"
      />
      <div className="flex flex-col font-['PP_Mondwest:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0a1128] text-[10.79px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">AI For Lyf</p>
      </div>
    </div>
  );
}

function Group1000010970() {
  return (
    <div className="absolute contents left-0 top-0">
      <div
        className="absolute h-[295.226px] left-1/2 top-0 translate-x-[-50%] w-[279px]"
        data-name="image 677"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <NextImage
            alt=""
            className="absolute h-full left-0 max-w-none top-0 w-[105.82%]"
            src="/images/audit/2a9b413bd28e4738a1ff1198e9fe4fe7f64d1fbe.png"
            fill
          />
        </div>
      </div>
      <div className="absolute bg-[#0952ff] h-[38.239px] left-[102.7px] top-[155.43px] w-[87.992px]" />
      <div
        className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.1892606019973755)+(var(--transform-inner-height)*0.9819269180297852)))] items-center justify-center left-[99.42px] top-[155.69px] w-[calc(1px*((var(--transform-inner-height)*0.1892606019973755)+(var(--transform-inner-width)*0.9819269180297852)))]"
        style={
          {
            "--transform-inner-width": "55.59375",
            "--transform-inner-height": "18.8125",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[349.09deg]">
          <Frame2147227171 />
        </div>
      </div>
    </div>
  );
}

function AiForLyfImage() {
  return (
    <div
      className="h-[295.226px] overflow-clip relative shrink-0 w-[279px]"
      data-name="AI For LYF Image"
    >
      <Group1000010970 />
    </div>
  );
}

function Frame2147227176() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal gap-[16px] items-start leading-[0] relative shrink-0 text-slate-600 w-full">
      <div
        className="flex flex-col justify-center relative shrink-0 text-[0px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal] text-[14px]">
          <span>{`Your audit isn’t done by some random chatbot - it’s led by the same team that has shipped `}</span>
          <span
            className="font-['SF_Pro:Medium',_sans-serif] font-[510] text-slate-800"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            10+ production-level AI agents
          </span>
          <span>{` for real businesses.`}</span>
        </p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">
          Our expert AI engineers and 10+ member core team have built and
          deployed agentic AI systems that automate workflows, surface insights,
          and deliver measurable ROI across industries.
        </p>
      </div>
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ArrowUpRight">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="ArrowUpRight">
          <path
            d={svgPaths.p12e71f00}
            fill="var(--fill-0, #0062FF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function OutlineCta2() {
  return (
    <div
      className="box-border content-stretch flex gap-[8px] items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0"
      data-name="Outline_CTA"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#0062ff] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <div
        className="flex flex-col font-['SF_Pro:Semibold',_sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[#0062ff] text-[14px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[20px] whitespace-pre">
          See all AI Agents we’ve built
        </p>
      </div>
      <ArrowUpRight />
    </div>
  );
}

function Frame2147227175() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-nowrap text-slate-600"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal] whitespace-pre">
          Explore some of the live agents we’ve shipped
        </p>
      </div>
      <OutlineCta2 />
    </div>
  );
}

function Frame2147227174() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-full">
      <Frame2147227176 />
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[0px] text-slate-600 w-[min-content]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal] mb-0 text-[14px]">{`We know what works in the real world, `}</p>
        <p className="leading-[normal] text-[14px]">
          <span>{`because `}</span>
          <span className="text-[#0062ff]">
            we’ve built it, tested it, and scaled it.
          </span>
        </p>
      </div>
      <Frame2147227175 />
    </div>
  );
}

function Frame2147227172() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[24px] top-[3531px] w-[327px]">
      <AiForLyfImage />
      <Frame2147227174 />
    </div>
  );
}

function Frame2147227023() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[4px] relative shrink-0">
      <div className="bg-[#0062ff] shrink-0 size-[20px]" />
    </div>
  );
}

function Frame2147224643() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame2147227023 />
      <p
        className="basis-0 font-['SF_Pro:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[14px] text-slate-600"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Founders, business owners, and teams who want to use AI to cut
        operational costs and boost efficiency.
      </p>
    </div>
  );
}

function Frame2147227024() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[4px] relative shrink-0">
      <div className="bg-[#0062ff] shrink-0 size-[20px]" />
    </div>
  );
}

function Frame2147224647() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame2147227024 />
      <p
        className="basis-0 font-['SF_Pro:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[14px] text-slate-600"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Companies already using AI but not sure if it’s working or wasting
        money.
      </p>
    </div>
  );
}

function Frame2147227025() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start px-0 py-[4px] relative shrink-0">
      <div className="bg-[#0062ff] shrink-0 size-[20px]" />
    </div>
  );
}

function Frame2147224648() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame2147227025 />
      <p
        className="basis-0 font-['SF_Pro:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[14px] text-slate-600"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Businesses ready to implement AI the right way - practical, measurable,
        and fast.
      </p>
    </div>
  );
}

function Frame2147224652() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame2147224643 />
      <Frame2147224647 />
      <Frame2147224648 />
    </div>
  );
}

function Frame2147227177() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <div
            className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-slate-900 w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[normal]">Who it’s for:</p>
          </div>
          <Frame2147224652 />
        </div>
      </div>
    </div>
  );
}

function Frame2147227026() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[4px] relative shrink-0">
      <div className="bg-[#0062ff] shrink-0 size-[20px]" />
    </div>
  );
}

function Frame2147224644() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[280px]">
      <Frame2147227026 />
      <p
        className="basis-0 font-['SF_Pro:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[14px] text-slate-600"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        People chasing hype without clear goals.
      </p>
    </div>
  );
}

function Frame2147227030() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[4px] relative shrink-0">
      <div className="bg-[#0062ff] shrink-0 size-[20px]" />
    </div>
  );
}

function Frame2147224649() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame2147227030 />
      <p
        className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-slate-600 w-[233px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Teams who’d rather discuss AI than deploy it.
      </p>
    </div>
  );
}

function Frame2147227031() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start px-0 py-[4px] relative shrink-0">
      <div className="bg-[#0062ff] shrink-0 size-[20px]" />
    </div>
  );
}

function Frame2147224650() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame2147227031 />
      <p
        className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-slate-600 w-[231px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Anyone comfortable falling behind competitors.
      </p>
    </div>
  );
}

function Frame2147224653() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame2147224644 />
      <Frame2147224649 />
      <Frame2147224650 />
    </div>
  );
}

function Frame2147227178() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <div
            className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-slate-900 w-[433px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[normal]">Who it’s not for:</p>
          </div>
          <Frame2147224653 />
        </div>
      </div>
    </div>
  );
}

function Frame2147227179() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame2147227177 />
      <Frame2147227178 />
    </div>
  );
}

function SolidCta3() {
  return (
    <div
      className="bg-[#0062ff] box-border content-stretch flex gap-[6px] items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0"
      data-name="Solid_CTA"
    >
      <div
        className="flex flex-col font-['SF_Pro:Medium',_sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[#f8f9fa] text-[14px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[20px] whitespace-pre">Get Your AI Audit</p>
      </div>
    </div>
  );
}

function Frame2147227180() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[0px] text-center text-slate-600 w-[min-content]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal] text-[14px]">
          <span>{`If you’re serious about finding where your business is leaking money, and how AI can fix it. `}</span>
          <span className="text-[#0062ff]">This audit is built for you.</span>
        </p>
      </div>
      <SolidCta3 />
    </div>
  );
}

function Frame2147227181() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center justify-center left-[24px] top-[4334px] w-[327px]">
      <Frame2147227179 />
      <Frame2147227180 />
    </div>
  );
}

function Container49() {
  return (
    <div
      className="absolute h-[691px] left-0 opacity-10 top-px w-[327px]"
      data-name="Container"
    />
  );
}

function PiggyBank() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="PiggyBank">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 48"
      >
        <g id="PiggyBank">
          <path
            d={svgPaths.p263dc780}
            fill="var(--fill-0, #0062FF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div
      className="absolute bg-[rgba(0,98,255,0.2)] content-stretch flex items-center justify-center left-[calc(50%+0.5px)] rounded-[1.67772e+07px] size-[96px] top-[25px] translate-x-[-50%]"
      data-name="Container"
    >
      <PiggyBank />
    </div>
  );
}

function CalendarCheck() {
  return (
    <div
      className="absolute left-[calc(50%+0.334px)] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="CalendarCheck"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="CalendarCheck">
          <path
            d={svgPaths.p1073600}
            fill="var(--fill-0, #0062FF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2147227032() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <CalendarCheck />
    </div>
  );
}

function Frame2147227183() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Medium',_sans-serif] font-[510] gap-[8px] items-center relative shrink-0 text-center w-[91px]">
      <p
        className="leading-[normal] relative shrink-0 text-[#0a1128] text-[16px] text-nowrap whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        1 Week
      </p>
      <p
        className="leading-[16px] min-w-full relative shrink-0 text-[12px] text-slate-600 w-[min-content]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Implementation
      </p>
    </div>
  );
}

function Container51() {
  return (
    <div
      className="bg-[#ffd60a] relative rounded-[8px] shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-center px-[16px] py-[12px] relative w-full">
          <Frame2147227032 />
          <Frame2147227183 />
        </div>
      </div>
    </div>
  );
}

function CoinVertical() {
  return (
    <div
      className="absolute left-[calc(50%-0.334px)] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="CoinVertical"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="CoinVertical">
          <path
            d={svgPaths.p28588cf0}
            fill="var(--fill-0, #0062FF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2147227033() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <CoinVertical />
    </div>
  );
}

function Frame2147227195() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Medium',_sans-serif] font-[510] gap-[8px] items-center relative shrink-0 text-center text-nowrap whitespace-pre">
      <p
        className="leading-[normal] relative shrink-0 text-[#0a1128] text-[16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        ROI Proven
      </p>
      <p
        className="leading-[16px] relative shrink-0 text-[12px] text-slate-600"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Measurable Results
      </p>
    </div>
  );
}

function Container52() {
  return (
    <div
      className="bg-[#ffd60a] relative rounded-[8px] shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-center px-[16px] py-[12px] relative w-full">
          <Frame2147227033 />
          <Frame2147227195 />
        </div>
      </div>
    </div>
  );
}

function Robot() {
  return (
    <div
      className="absolute left-[calc(50%-0.334px)] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Robot"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Robot">
          <path
            d={svgPaths.p32e17a80}
            fill="var(--fill-0, #0062FF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2147227034() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <Robot />
    </div>
  );
}

function Frame2147227196() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Medium',_sans-serif] font-[510] gap-[8px] items-center relative shrink-0 text-center text-nowrap w-[91px] whitespace-pre">
      <p
        className="leading-[normal] relative shrink-0 text-[#0a1128] text-[16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Automated
      </p>
      <p
        className="leading-[16px] relative shrink-0 text-[12px] text-slate-600"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Self-Managing
      </p>
    </div>
  );
}

function Container53() {
  return (
    <div
      className="bg-[#ffd60a] relative rounded-[8px] shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-center px-[16px] py-[12px] relative w-full">
          <Frame2147227034 />
          <Frame2147227196 />
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[8px] items-start justify-center left-[calc(50%+0.5px)] top-[257px] translate-x-[-50%] w-[294px]"
      data-name="Container"
    >
      <Container51 />
      <Container52 />
      <Container53 />
    </div>
  );
}

function Text7() {
  return (
    <div
      className="bg-[#0062ff] box-border content-stretch flex h-[31.5px] items-center justify-center px-[8px] py-[4px] relative shrink-0"
      data-name="Text"
    >
      <p
        className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#f8f9fa] text-[14px] text-center text-nowrap whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        AI Audit Analysis
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="Paragraph"
    >
      <p
        className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-center text-nowrap text-slate-800 whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Through comprehensive
      </p>
      <Text7 />
    </div>
  );
}

function Container55() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[12px] items-center left-1/2 top-[600px] translate-x-[-50%]"
      data-name="Container"
    >
      <Paragraph1 />
      <p className="font-['Kalam:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-slate-600 whitespace-pre">
        Boring problems = biggest profit opportunities
      </p>
    </div>
  );
}

function Text8() {
  return (
    <div
      className="absolute h-[60px] left-[-5.56px] top-[10px] w-[173.125px]"
      data-name="Text"
    >
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[60px] left-[87px] not-italic text-[#00a63e] text-[60px] text-center top-px tracking-[-1.5px] translate-x-[-50%] w-[174px]">
        $50K+
      </p>
    </div>
  );
}

function Text9() {
  return (
    <div
      className="absolute h-[60px] left-[-5.56px] top-[90px] w-[173.125px]"
      data-name="Text"
    >
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[60px] left-[87px] not-italic text-[#00a63e] text-[60px] text-center top-px tracking-[-1.5px] translate-x-[-50%] w-[174px]">
        $75K+
      </p>
    </div>
  );
}

function Text10() {
  return (
    <div
      className="absolute h-[60px] left-[-22.88px] top-[170px] w-[207.75px]"
      data-name="Text"
    >
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[60px] left-[104px] not-italic text-[#00a63e] text-[60px] text-center text-nowrap top-px tracking-[-1.5px] translate-x-[-50%] whitespace-pre">
        $100K+
      </p>
    </div>
  );
}

function Text11() {
  return (
    <div
      className="absolute h-[60px] left-[-22.88px] top-[calc(50%-0.222px)] translate-y-[-50%] w-[207.75px]"
      data-name="Text"
    >
      <p
        className="absolute font-['SF_Pro:Bold',_sans-serif] font-bold leading-[normal] left-[calc(50%+0.5px)] text-[#0062ff] text-[40px] text-center text-nowrap top-px tracking-[-1.6px] translate-x-[-50%] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        $125K+
      </p>
    </div>
  );
}

function Text12() {
  return (
    <div
      className="absolute h-[60px] left-[-22.88px] top-[330px] w-[207.75px]"
      data-name="Text"
    >
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[60px] left-[104px] not-italic text-[#00a63e] text-[60px] text-center top-px tracking-[-1.5px] translate-x-[-50%] w-[208px]">
        $150K+
      </p>
    </div>
  );
}

function Text13() {
  return (
    <div
      className="absolute h-[60px] left-[-22.88px] top-[410px] w-[207.75px]"
      data-name="Text"
    >
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[60px] left-[104px] not-italic text-[#00a63e] text-[60px] text-center top-px tracking-[-1.5px] translate-x-[-50%] w-[208px]">
        $200K+
      </p>
    </div>
  );
}

function Text14() {
  return (
    <div
      className="absolute h-[60px] left-[-22.88px] top-[490px] w-[207.75px]"
      data-name="Text"
    >
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[60px] left-[104px] not-italic text-[#00a63e] text-[60px] text-center top-px tracking-[-1.5px] translate-x-[-50%] w-[208px]">
        $250K+
      </p>
    </div>
  );
}

function Container56() {
  return (
    <div
      className="h-[560px] relative shrink-0 w-[448px]"
      data-name="Container"
    >
      <Text8 />
      <Text9 />
      <Text10 />
      <Text11 />
      <Text12 />
      <Text13 />
      <Text14 />
    </div>
  );
}

function Container57() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[80px] items-start left-[calc(50%-0.5px)] overflow-clip top-[129px] translate-x-[-50%] w-[160px]"
      data-name="Container"
    >
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div
      className="absolute bg-white h-[707px] left-0 overflow-clip rounded-[12px] top-[-16px] w-[327px]"
      data-name="Container"
    >
      <Container49 />
      <Container50 />
      <Container54 />
      <Container55 />
      <Container57 />
      <p
        className="absolute font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] left-[164.5px] text-[20px] text-center text-nowrap text-slate-600 top-[209px] translate-x-[-50%] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Potential Savings
      </p>
    </div>
  );
}

function Container59() {
  return (
    <div
      className="absolute h-[691px] left-0 top-[73px] w-[327px]"
      data-name="Container"
    >
      <div
        className="absolute flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%+1px)] text-[#e53935] text-[14px] text-center text-nowrap top-[-48.5px] tracking-[0.56px] translate-x-[-50%] translate-y-[-50%] uppercase"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal] whitespace-pre">ROI ACHIEVEMENT</p>
      </div>
      <Container58 />
    </div>
  );
}

function Target1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Target">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Target">
          <path
            d={svgPaths.p630be00}
            fill="var(--fill-0, #F8F9FA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2147227184() {
  return (
    <div className="absolute bg-[#0062ff] box-border content-stretch flex gap-[8px] items-center left-[calc(50%+0.5px)] p-[16px] rounded-[8px] top-[738px] translate-x-[-50%]">
      <Target1 />
      <p
        className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[20px] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Optimization Complete
      </p>
    </div>
  );
}

function Container60() {
  return (
    <div
      className="absolute h-[764px] left-1/2 top-[calc(50%+1283px)] translate-x-[-50%] translate-y-[-50%] w-[327px]"
      data-name="Container"
    >
      <Container59 />
      <Frame2147227184 />
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Clock">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Clock">
          <path
            d={svgPaths.p232dff00}
            fill="var(--fill-0, #0062FF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-[211.328px]"
      data-name="Container"
    >
      <p
        className="basis-0 font-['SF_Pro:Semibold',_sans-serif] font-[590] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[20px] text-center text-slate-800"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        40hrs
      </p>
    </div>
  );
}

function Container62() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[211.328px]"
      data-name="Container"
    >
      <p
        className="absolute font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[20px] left-[106.46px] text-[14px] text-center text-nowrap text-slate-600 top-[0.5px] translate-x-[-50%] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Weekly Time Savings
      </p>
    </div>
  );
}

function Container63() {
  return (
    <div
      className="bg-white relative rounded-[8px] shrink-0 w-full"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center px-[24px] py-[16px] relative w-full">
          <Clock />
          <Container61 />
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function PiggyBank1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="PiggyBank">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="PiggyBank">
          <path
            d={svgPaths.pcb1d80}
            fill="var(--fill-0, #0062FF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 w-[211.336px]"
      data-name="Container"
    >
      <p
        className="basis-0 font-['SF_Pro:Semibold',_sans-serif] font-[590] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[20px] text-center text-slate-800"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        85%
      </p>
    </div>
  );
}

function Container65() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[211.336px]"
      data-name="Container"
    >
      <p
        className="absolute font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[20px] left-[105.42px] text-[14px] text-center text-nowrap text-slate-600 top-[0.5px] translate-x-[-50%] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Process Automation
      </p>
    </div>
  );
}

function Container66() {
  return (
    <div
      className="bg-white relative rounded-[8px] shrink-0 w-full"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center px-[24px] py-[16px] relative w-full">
          <PiggyBank1 />
          <Container64 />
          <Container65 />
        </div>
      </div>
    </div>
  );
}

function RocketLaunch() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="RocketLaunch">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="RocketLaunch">
          <path
            d={svgPaths.p8fcaa00}
            fill="var(--fill-0, #0062FF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container67() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-[211.336px]"
      data-name="Container"
    >
      <p
        className="basis-0 font-['SF_Pro:Semibold',_sans-serif] font-[590] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[20px] text-center text-slate-800"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        $250K
      </p>
    </div>
  );
}

function Container68() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[211.336px]"
      data-name="Container"
    >
      <p
        className="absolute font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[20px] left-[105.69px] text-[14px] text-center text-nowrap text-slate-600 top-[0.5px] translate-x-[-50%] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Annual ROI Potential
      </p>
    </div>
  );
}

function Container69() {
  return (
    <div
      className="bg-white relative rounded-[8px] shrink-0 w-full"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center px-[24px] py-[16px] relative w-full">
          <RocketLaunch />
          <Container67 />
          <Container68 />
        </div>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[8px] items-start justify-center left-1/2 top-[5809px] translate-x-[-50%] w-[327px]"
      data-name="Container"
    >
      <Container63 />
      <Container66 />
      <Container69 />
    </div>
  );
}

function Frame2147227150() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e53935] text-[14px] text-center tracking-[0.56px] uppercase w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">Frequently Asked Questions</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-slate-900 w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">{`What's an AI Audit?`}</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-slate-600 w-[234px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[20px]">{`A business-focused internal audit powered by AI that identifies where you're losing time and money in daily operations.`}</p>
      </div>
    </div>
  );
}

function Frame2147227036() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <Container71 />
      <Container72 />
    </div>
  );
}

function CaretUp() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretUp">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="CaretUp">
          <path
            d={svgPaths.p773fd80}
            fill="var(--fill-0, #0062FF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none"
      />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[24px] items-start p-[16px] relative w-full">
          <Frame2147227036 />
          <CaretUp />
        </div>
      </div>
    </div>
  );
}

function Listitem() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start overflow-clip pb-[16px] pt-0 px-0 relative rounded-[6px] shrink-0 w-full"
      data-name="Listitem"
    >
      <Button1 />
    </div>
  );
}

function Container73() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-slate-900 w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">
          What do I get from the free clarity call?
        </p>
      </div>
    </div>
  );
}

function CaretDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretDown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="CaretDown">
          <path
            d={svgPaths.p1500e200}
            fill="var(--fill-0, #475569)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none"
      />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[24px] items-start p-[16px] relative w-full">
          <Container73 />
          <CaretDown />
        </div>
      </div>
    </div>
  );
}

function Listitem1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start overflow-clip pb-[16px] pt-0 px-0 relative rounded-[6px] shrink-0 w-full"
      data-name="Listitem"
    >
      <Button2 />
    </div>
  );
}

function Container74() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-slate-900 w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">Do you need my data or system access?</p>
      </div>
    </div>
  );
}

function CaretDown1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretDown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="CaretDown">
          <path
            d={svgPaths.p1500e200}
            fill="var(--fill-0, #475569)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none"
      />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[24px] items-start p-[16px] relative w-full">
          <Container74 />
          <CaretDown1 />
        </div>
      </div>
    </div>
  );
}

function Listitem2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start overflow-clip pb-[16px] pt-0 px-0 relative rounded-[6px] shrink-0 w-full"
      data-name="Listitem"
    >
      <Button3 />
    </div>
  );
}

function Container75() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-slate-900 w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">How long does it take?</p>
      </div>
    </div>
  );
}

function CaretDown2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretDown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="CaretDown">
          <path
            d={svgPaths.p1500e200}
            fill="var(--fill-0, #475569)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none"
      />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[24px] items-start p-[16px] relative w-full">
          <Container75 />
          <CaretDown2 />
        </div>
      </div>
    </div>
  );
}

function Listitem3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start overflow-clip pb-[16px] pt-0 px-0 relative rounded-[6px] shrink-0 w-full"
      data-name="Listitem"
    >
      <Button4 />
    </div>
  );
}

function Container76() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-slate-900 w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">Is this for early-stage startups?</p>
      </div>
    </div>
  );
}

function CaretDown3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretDown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="CaretDown">
          <path
            d={svgPaths.p1500e200}
            fill="var(--fill-0, #475569)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none"
      />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[24px] items-start p-[16px] relative w-full">
          <Container76 />
          <CaretDown3 />
        </div>
      </div>
    </div>
  );
}

function Listitem4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start overflow-clip pb-[16px] pt-0 px-0 relative rounded-[6px] shrink-0 w-full"
      data-name="Listitem"
    >
      <Button5 />
    </div>
  );
}

function List1() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full"
      data-name="List"
    >
      <Listitem />
      <Listitem1 />
      <Listitem2 />
      <Listitem3 />
      <Listitem4 />
    </div>
  );
}

function Frame2147227145() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-1/2 top-[6245px] translate-x-[-50%] w-[327px]">
      <Frame2147227150 />
      <List1 />
    </div>
  );
}

function Frame2147227197() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal gap-[16px] items-center leading-[0] relative shrink-0 text-center w-[295px]">
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#e53935] text-[12px] tracking-[0.48px] uppercase w-[266px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">Testimonials</p>
      </div>
      <div
        className="flex flex-col h-[47px] justify-center relative shrink-0 text-[20px] text-slate-800 w-[240px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">
          <span>{`What founders say after seeing the `}</span>
          <span className="text-[#e53935]">leaks.</span>
        </p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-slate-800 w-[281px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">{`"We saved roughly $110K a year after the audit. The clarity alone was worth it."`}</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Container77 />
    </div>
  );
}

function Margin1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Margin"
    >
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#868a97] text-[12px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[16px] whitespace-pre">CRM Platform</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['SF_Pro:Semibold',_sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[#0d162f] text-[14px] w-[86px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[20px]">CEO</p>
      </div>
      <Margin1 />
    </div>
  );
}

function Container80() {
  return (
    <div
      className="content-stretch flex gap-[42.91px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Container79 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div
      className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start justify-end overflow-clip p-[16px] relative rounded-[8px] shrink-0 w-[327px]"
      data-name="Background+Border"
    >
      <Container78 />
      <div className="h-0 relative shrink-0 w-full">
        <div
          className="absolute bottom-0 left-0 right-0 top-[-1px]"
          style={
            { "--stroke-0": "rgba(226, 232, 240, 1)" } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 295 1"
          >
            <line
              id="Line 6"
              stroke="var(--stroke-0, #E2E8F0)"
              x2="295"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Container80 />
    </div>
  );
}

function Container81() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-slate-800 w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px]">{`"The proof-of-concept agent showed immediate value. We automated what used to take 3 people."`}</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Container81 />
    </div>
  );
}

function Margin2() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Margin"
    >
      <div
        className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#868a97] text-[12px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[16px] whitespace-pre">Fintech Company</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['SF_Pro:Semibold',_sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[#0d162f] text-[14px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[20px] whitespace-pre">Head of Ops</p>
      </div>
      <Margin2 />
    </div>
  );
}

function Container84() {
  return (
    <div
      className="content-stretch flex gap-[42.91px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Container83 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div
      className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[8px] shrink-0 w-[327px]"
      data-name="Background+Border"
    >
      <Container82 />
      <div className="h-0 relative shrink-0 w-full">
        <div
          className="absolute bottom-0 left-0 right-0 top-[-1px]"
          style={
            { "--stroke-0": "rgba(226, 232, 240, 1)" } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 295 1"
          >
            <line
              id="Line 6"
              stroke="var(--stroke-0, #E2E8F0)"
              x2="295"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Container84 />
    </div>
  );
}

function Container85() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <BackgroundBorder />
      <BackgroundBorder1 />
    </div>
  );
}

function Frame2147227066() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-1/2 top-[calc(50%+2980.5px)] translate-x-[-50%] translate-y-[-50%] w-[327px]">
      <Frame2147227197 />
      <Container85 />
    </div>
  );
}

export default function IPhone13Mini9() {
  return (
    <div
      className="bg-[#f9f6f4] relative size-full"
      data-name="iPhone 13 mini - 9"
    >
      <div
        className="absolute h-[812px] left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-[1142px]"
        data-name="Agentic noise BG 1"
      >
        <NextImage
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src="/images/audit/e1131b07acb22ab80ef4829617d544fdc77009da.png"
          fill
        />
      </div>
      <div className="absolute bottom-[7965px] flex h-[400px] items-center justify-center left-[calc(50%-0.5px)] translate-x-[-50%] w-[662px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[400px] relative w-[662px]">
            <div className="absolute inset-[-40%_-24.17%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 982 720"
              >
                <g
                  filter="url(#filter0_f_100_3731)"
                  id="Ellipse 989"
                  opacity="0.2"
                >
                  <path
                    d={svgPaths.p362ee700}
                    fill="url(#paint0_linear_100_3731)"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="720"
                    id="filter0_f_100_3731"
                    width="982"
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
                      result="effect1_foregroundBlur_100_3731"
                      stdDeviation="80"
                    />
                  </filter>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_100_3731"
                    x1="478.922"
                    x2="478.922"
                    y1="124.951"
                    y2="666.774"
                  >
                    <stop stopColor="#0062FF" />
                    <stop offset="1" stopColor="#0062FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <NavList />
      <StatusBarIPhone />
      <Frame2147227123 />
      <Frame2147227148 />
      <Frame2147227173 />
      <Frame2147227132 />
      <IPhone13Mini19 />
      <Footer />
      <Frame2147227068 />
      <Frame2147227133 />
      <Frame2147227147 />
      <Frame2147227146 />
      <Frame2147227172 />
      <Frame2147227181 />
      <Container60 />
      <Container70 />
      <Frame2147227145 />
      <Frame2147227066 />
    </div>
  );
}
