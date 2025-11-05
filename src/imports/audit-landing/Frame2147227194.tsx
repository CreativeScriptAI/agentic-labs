import svgPaths from "./svg-tk0zski4ej";
import Image from "next/image";
import { imgGroup, imgGroup1, imgGroup2 } from "./svg-ahmmv";

function Frame2147227126() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[0] relative shrink-0 text-[24px] text-center">
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#0062ff] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">
          <span>{`Our AI Audit finds `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">leaks</span>
          <span>{` + `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">shows the $$$ saved</span>
        </p>
      </div>
      <div className="flex flex-col font-['Kalam:Regular',_sans-serif] justify-center not-italic relative shrink-0 text-slate-400 w-[356px]">
        <p className="leading-[normal]">{`...and then we fix 'em!`}</p>
      </div>
    </div>
  );
}

function Frame2147227060() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-center left-[calc(25%+84px)] top-[64px] w-[552px]">
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[24px] text-center text-slate-800 w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">
          <span>{`Most teams either underuse or misuse AI wasting thousands `}</span>
          <span className="text-slate-500">(tickets, reports, handoffs)</span>
          <span>{` of hours on boring stuff...`}</span>
        </p>
      </div>
      <Frame2147227126 />
    </div>
  );
}

function Desktop17() {
  return (
    <div className="bg-[#f9f6f4] h-[338px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 17">
      <div className="absolute bg-[#f9f6f4] h-[1199px] left-1/2 top-[calc(50%+304.5px)] translate-x-[-50%] translate-y-[-50%] w-[1440px]" />
      <Frame2147227060 />
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Star">
          <path d={svgPaths.p1bf29d00} fill="var(--fill-0, #FFD60A)" id="Vector" />
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
      <p className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#0062ff] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.9/5
      </p>
      <p className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[12px] text-slate-600 tracking-[-0.24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        127 reviews
      </p>
    </div>
  );
}

function Frame2147227105() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame2147227127 />
      <Frame2147227128 />
    </div>
  );
}

function Frame2147227106() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame2147227105 />
    </div>
  );
}

function Frame2147227130() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-start px-[16px] py-[14px] relative rounded-[8px] shadow-[0px_6px_25px_0px_rgba(0,0,0,0.08),0px_2px_8px_0px_rgba(0,0,0,0.1)] shrink-0">
      <Frame2147227106 />
    </div>
  );
}

function Group() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 19">
      <g id="Group">
        <path d={svgPaths.pb16780} fill="var(--fill-0, #828282)" id="Vector" />
        <path d={svgPaths.p2d497700} fill="var(--fill-0, #828282)" id="Vector_2" />
      </g>
    </svg>
  );
}

function Calque1() {
  return (
    <div className="absolute contents inset-0" data-name="Calque 1">
      <Group />
    </div>
  );
}

function Asset61Svg() {
  return (
    <div className="absolute h-[18.391px] left-[calc(50%-0.003px)] overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[20.356px]" data-name="Asset_6_1.svg">
      <Calque1 />
    </div>
  );
}

function Asset61SvgFill() {
  return (
    <div className="absolute h-[18.391px] left-0 overflow-clip top-0 w-[20.361px]" data-name="Asset_6_1.svg fill">
      <Asset61Svg />
    </div>
  );
}

function Asset61Svg1() {
  return (
    <div className="absolute h-[18.391px] left-0 overflow-clip top-1/2 translate-y-[-50%] w-[20.361px]" data-name="Asset_6_1.svg">
      <Asset61SvgFill />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[18.391px] relative shrink-0 w-[20.361px]" data-name="frame">
      <Asset61Svg1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[-0.11%_77.45%_26.56%_-0.05%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.pde65b00} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector" opacity="0.992" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[-0.11%_23.38%_26.55%_71.92%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 13">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p1e60c100} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[18.8%_55.45%_0.11%_24.18%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 15">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p24691800} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector" opacity="0.985" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[18.87%_31.45%_0.11%_48.23%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 15">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3a51e900} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector" opacity="0.985" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[19.86%_0.04%_0.9%_80.01%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 14">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3ec7f240} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector" opacity="0.986" />
        </g>
      </svg>
    </div>
  );
}

function White1Ad5D3986314C4747A9B40C88F95Ef676Svg() {
  return (
    <div className="absolute h-[17.537px] left-[calc(50%+0.002px)] overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[47.272px]" data-name="white_1_ad5d3986-314c-4747-a9b4-0c88f95ef676.svg">
      <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
      <Group5 />
    </div>
  );
}

function White1Ad5D3986314C4747A9B40C88F95Ef676SvgFill() {
  return (
    <div className="absolute h-[17.537px] left-0 overflow-clip top-0 w-[47.29px]" data-name="white_1_ad5d3986-314c-4747-a9b4-0c88f95ef676.svg fill">
      <White1Ad5D3986314C4747A9B40C88F95Ef676Svg />
    </div>
  );
}

function White1Ad5D3986314C4747A9B40C88F95Ef676Svg1() {
  return (
    <div className="absolute h-[17.537px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[47.29px]" data-name="white_1_ad5d3986-314c-4747-a9b4-0c88f95ef676.svg">
      <White1Ad5D3986314C4747A9B40C88F95Ef676SvgFill />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[17.537px] relative shrink-0 w-[47.29px]" data-name="frame">
      <White1Ad5D3986314C4747A9B40C88F95Ef676Svg1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[9.195px] items-center left-[calc(50%-0.387px)] top-[calc(50%+0.189px)] translate-x-[-50%] translate-y-[-50%]">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame2147223514() {
  return (
    <div className="bg-[rgba(249,246,244,0)] overflow-clip relative shrink-0 size-[110.89px]">
      <Frame3 />
    </div>
  );
}

function Group7() {
  return (
    <div className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_luminance] [mask-repeat:no-repeat,_no-repeat] absolute bottom-[5.48%] left-[-0.01%] mask-position-[0.006px,_0.006px_0px,_0px] mask-size-[91.328px_21.708px,_91.328px_21.708px] right-[-0.04%] top-0" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 21">
        <g id="Group">
          <path d={svgPaths.p14a54e00} fill="var(--fill-0, #828282)" id="Vector" />
          <path d={svgPaths.p39611040} fill="var(--fill-0, #828282)" id="Vector_2" />
          <path d={svgPaths.p1518dc00} fill="var(--fill-0, #828282)" id="Vector_3" />
          <path d={svgPaths.p20d86d00} fill="var(--fill-0, #828282)" id="Vector_4" />
          <path d={svgPaths.pd0ce470} fill="var(--fill-0, #828282)" id="Vector_5" />
          <path d={svgPaths.p27868b00} fill="var(--fill-0, #828282)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-[2.12%] contents left-0 right-0 top-0" data-name="Mask group">
      <Group7 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute bottom-[2.12%] contents left-0 right-0 top-0" data-name="Group">
      <MaskGroup />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute bottom-[2.12%] contents left-0 right-0 top-0" data-name="Clip path group">
      <Group8 />
    </div>
  );
}

function DoladoLogoWhite() {
  return (
    <div className="absolute h-[22.178px] left-[calc(50%+0.383px)] overflow-clip top-[calc(50%+0.235px)] translate-x-[-50%] translate-y-[-50%] w-[91.327px]" data-name="Dolado logo white">
      <ClipPathGroup />
    </div>
  );
}

function Frame2147223515() {
  return (
    <div className="bg-[rgba(249,246,244,0)] overflow-clip relative shrink-0 size-[110.89px]">
      <DoladoLogoWhite />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[4.151px] items-center justify-center left-[12.01px] top-[31.01px] w-[86.864px]">
      <div className="h-[49.33px] relative shrink-0 w-[111.529px]" data-name="TAIE logo 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image alt="" className="absolute h-[104.88%] left-[-0.04%] max-w-none top-0 w-[100.08%]" src="/images/audit/8115f9c5d1016179d25f00778b1c4ca8056b6fe2.png" fill />
        </div>
      </div>
    </div>
  );
}

function Frame2147223516() {
  return (
    <div className="bg-[rgba(249,246,244,0)] overflow-clip relative shrink-0 size-[110.89px]">
      <Frame4 />
    </div>
  );
}

function Frame2147223517() {
  return (
    <div className="bg-[rgba(249,246,244,0)] h-[110.89px] overflow-clip relative shrink-0 w-[95.181px]">
      <div className="absolute h-[29.571px] left-[calc(50%+0.463px)] rounded-[3.696px] top-[calc(50%+0.235px)] translate-x-[-50%] translate-y-[-50%] w-[79.471px]" data-name="SBF+Logo-01-cropped 1">
        <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[3.696px] size-full" src="/images/audit/4408337cc76f8e1a1b1f058c25a74d3778ce2556.png" fill />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="[grid-area:1_/_1] h-[28.647px] ml-[3.124%] mt-[1.562%] relative w-[27.723px]" data-name="Mask group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 29">
        <g id="Mask group">
          <mask height="29" id="mask0_100_765" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
            <path d={svgPaths.p33d98980} fill="var(--fill-0, #D9D9D9)" id="Ellipse 112" stroke="var(--stroke-0, black)" strokeWidth="0.924085" />
          </mask>
          <g mask="url(#mask0_100_765)">
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
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[29.571px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <circle cx="14.7854" cy="14.7854" fill="var(--fill-0, black)" id="Ellipse 121" r="14.7854" />
        </svg>
      </div>
      <MaskGroup1 />
      <div className="[grid-area:1_/_1] ml-[3.326px] mt-[3.327px] relative size-[22.917px]">
        <Image alt="" className="block max-w-none size-full" height={23} src="/images/audit/245a7d0f66b2a4c07c6f65541bd8759f79b07f71.png" width={23} />
      </div>
      <div className="[grid-area:1_/_1] h-[19.406px] ml-[5.544px] mt-[5.082px] relative w-[18.482px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
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
      <p className="[grid-area:1_/_1] font-['New_York_Small:Bold',_sans-serif] leading-[normal] ml-[9.977px] mt-[5.912px] not-italic relative text-[#b51010] text-[14.785px] text-nowrap whitespace-pre">Z</p>
    </div>
  );
}

function Frame1171276985() {
  return (
    <div className="content-stretch flex gap-[7.393px] items-center relative shrink-0">
      <Group90 />
    </div>
  );
}

function Frame2147223518() {
  return (
    <div className="absolute content-stretch flex gap-[8.317px] items-center left-[11.09px] top-[40.89px]">
      <Frame1171276985 />
      <div className="flex flex-col font-['Raleway:Bold',_sans-serif] font-bold justify-center leading-[normal] relative shrink-0 text-[12.937px] text-black text-nowrap uppercase whitespace-pre">
        <p className="mb-0">{`Poker `}</p>
        <p>Zombie</p>
      </div>
    </div>
  );
}

function Frame2147223519() {
  return (
    <div className="bg-[rgba(249,246,244,0)] overflow-clip relative shrink-0 size-[110.89px]">
      <Frame2147223518 />
    </div>
  );
}

function LogoLightNewBlue() {
  return (
    <div className="absolute h-[35.115px] left-[10.72px] top-[38.12px] w-[88.52px]" data-name="Logo light new blue">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89 36">
        <g id="Logo light new blue">
          <g id="Group 18289">
            <path d={svgPaths.p1115ff00} id="Vector" stroke="var(--stroke-0, #DBA726)" strokeMiterlimit="10" strokeWidth="1.09735" />
            <path d={svgPaths.p2a5f1d00} id="Vector_2" stroke="var(--stroke-0, #DBA726)" strokeMiterlimit="10" strokeWidth="1.09735" />
            <g id="Group">
              <path d={svgPaths.p114bd80} fill="url(#paint0_linear_100_746)" id="Vector_3" />
              <path d={svgPaths.p6de6700} fill="var(--fill-0, #DBA726)" id="Vector_4" />
              <path d={svgPaths.p23a62780} fill="var(--fill-0, #DBA726)" id="Vector_5" />
              <path d={svgPaths.p19a2680} fill="var(--fill-0, #DBA726)" id="Vector_6" />
            </g>
          </g>
          <g id="S LARHUB">
            <path d={svgPaths.pc16c580} fill="var(--fill-0, #2D4764)" />
            <path d={svgPaths.p19a87680} fill="var(--fill-0, #2D4764)" />
            <path d={svgPaths.p36b7b800} fill="var(--fill-0, #2D4764)" />
            <path d={svgPaths.p36ff0700} fill="var(--fill-0, #2D4764)" />
            <path d={svgPaths.p20c621b0} fill="var(--fill-0, #2D4764)" />
            <path d={svgPaths.p28b1a700} fill="var(--fill-0, #2D4764)" />
            <path d={svgPaths.p344cef00} fill="var(--fill-0, #2D4764)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_100_746" x1="17.7562" x2="11.8592" y1="19.412" y2="13.6786">
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
    <div className="bg-[rgba(249,246,244,0)] overflow-clip relative shrink-0 size-[110.89px]">
      <LogoLightNewBlue />
    </div>
  );
}

function G204() {
  return (
    <div className="absolute contents inset-[35.97%_75.34%_54.28%_7.5%]" data-name="g204">
      <p className="absolute font-['Century_Gothic:Bold',_sans-serif] inset-[35.97%_75.34%_54.28%_7.5%] leading-[normal] not-italic text-[#3b3b3b] text-[8.766px]">How</p>
    </div>
  );
}

function G216() {
  return (
    <div className="absolute inset-[43.59%_27.24%_40.03%_56.45%]" data-name="g216">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="g216">
          <path d={svgPaths.p19900b00} fill="var(--fill-0, #11405F)" id="path206" />
          <g id="g212">
            <path clipRule="evenodd" d={svgPaths.p3cf4a5f0} fill="var(--fill-0, #5CD3F5)" fillRule="evenodd" id="path208" />
            <path d={svgPaths.p39ae2880} fill="var(--fill-0, #5CD3F5)" id="path210" opacity="0.1" />
          </g>
          <path d={svgPaths.p6b4d770} fill="var(--fill-0, #11405F)" id="path214" opacity="0.1" />
        </g>
      </svg>
    </div>
  );
}

function Layer2() {
  return (
    <div className="absolute contents inset-[35.97%_6.67%_35.55%_7.5%]" data-name="Layer_2">
      <div className="absolute inset-[44.74%_84.76%_44.09%_8.11%]" data-name="path184">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 13">
          <path d={svgPaths.p12f16f00} fill="var(--fill-0, #3B3B3B)" id="path184" />
        </svg>
      </div>
      <div className="absolute inset-[47.47%_74.15%_43.86%_17.23%]" data-name="path186">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.pd64b2a8} fill="var(--fill-0, #3B3B3B)" id="path186" />
        </svg>
      </div>
      <div className="absolute inset-[44.47%_63.2%_43.86%_28.18%]" data-name="path188">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 13">
          <path d={svgPaths.p8c57080} fill="var(--fill-0, #3B3B3B)" id="path188" />
        </svg>
      </div>
      <div className="absolute inset-[44.26%_59.25%_44.09%_39.02%]" data-name="path190">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 13">
          <path d={svgPaths.p3dc3fc80} fill="var(--fill-0, #3B3B3B)" id="path190" />
        </svg>
      </div>
      <div className="absolute inset-[47.45%_48.84%_43.84%_42.52%]" data-name="path192">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p226761f0} fill="var(--fill-0, #3B3B3B)" id="path192" />
        </svg>
      </div>
      <div className="absolute inset-[44.47%_45.66%_44.08%_53.27%]" data-name="path194">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 13">
          <path d="M0 0H1.18184V12.6997H0V0Z" fill="var(--fill-0, #3B3B3B)" id="path194" />
        </svg>
      </div>
      <div className="absolute inset-[47.44%_16.22%_40.86%_75.18%]" data-name="path196">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 13">
          <path d={svgPaths.p159d9800} fill="var(--fill-0, #3B3B3B)" id="path196" />
        </svg>
      </div>
      <div className="absolute inset-[47.65%_6.67%_41.06%_85.48%]" data-name="path198">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 13">
          <path d={svgPaths.pe983880} fill="var(--fill-0, #3B3B3B)" id="path198" />
        </svg>
      </div>
      <p className="absolute font-['Century_Gothic:Bold',_sans-serif] inset-[54.71%_67.76%_35.55%_7.88%] leading-[normal] not-italic text-[#3b3b3b] text-[8.766px]">Works</p>
      <G204 />
      <G216 />
      <div className="absolute inset-[43.21%_26.81%_39.6%_56%]" data-name="circle218">
        <div className="absolute inset-[-1.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
            <path d={svgPaths.p2543a600} id="circle218" stroke="var(--stroke-0, #3B3B3B)" strokeMiterlimit="10" strokeWidth="0.400622" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2147223536() {
  return (
    <div className="bg-[rgba(249,246,244,0)] overflow-clip relative shrink-0 size-[110.89px]">
      <Layer2 />
    </div>
  );
}

function LogoHorizontal() {
  return (
    <div className="absolute h-[27.723px] left-[13.98px] top-[41.82px] w-[83.861px]" data-name="logo-horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 28">
        <g clipPath="url(#clip0_100_660)" id="logo-horizontal">
          <path d={svgPaths.p2a96fa00} fill="var(--fill-0, #1ECAD3)" id="Vector" />
          <path d={svgPaths.p1e4f9200} fill="var(--fill-0, #1ECAD3)" id="Vector_2" />
          <path d={svgPaths.p33a86900} fill="var(--fill-0, #1ECAD3)" id="Vector_3" />
          <path d={svgPaths.pd89e700} fill="var(--fill-0, #1ECAD3)" id="Vector_4" />
          <path d={svgPaths.pd6f0700} fill="var(--fill-0, #1ECAD3)" id="Vector_5" />
          <path d={svgPaths.pf48cf00} fill="var(--fill-0, #1ECAD3)" id="Vector_6" />
          <path d={svgPaths.p1cfee700} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p279b0b40} fill="var(--fill-0, black)" id="Vector_8" />
          <path d={svgPaths.p1e8e6200} fill="var(--fill-0, black)" id="Vector_9" />
          <path d={svgPaths.p76ad200} fill="var(--fill-0, black)" id="Vector_10" />
        </g>
        <defs>
          <clipPath id="clip0_100_660">
            <rect fill="white" height="27.7226" width="83.8607" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2147223537() {
  return (
    <div className="bg-[rgba(249,246,244,0)] overflow-clip relative shrink-0 size-[110.89px]">
      <LogoHorizontal />
    </div>
  );
}

function Frame2147223538() {
  return (
    <div className="bg-[rgba(249,246,244,0)] h-[110.89px] overflow-clip relative shrink-0 w-[161.715px]">
      <p className="absolute font-['Baskervville:Regular',_sans-serif] leading-[normal] left-[calc(50%+0.655px)] not-italic text-[23.102px] text-black text-center text-nowrap top-[calc(50%-14.551px)] translate-x-[-50%] whitespace-pre">Season of Ink</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute h-[45.178px] left-[calc(50%-0.001px)] top-[calc(50%+0.234px)] translate-x-[-50%] translate-y-[-50%] w-[73.927px]" data-name="Logo">
      <p className="absolute font-['Urbanist:Bold',_sans-serif] font-bold leading-[0.9] left-0 text-[#3c3c3c] text-[28.261px] text-nowrap top-[9.79px] tracking-[-0.1766px] whitespace-pre">Haavi</p>
    </div>
  );
}

function Frame2147223539() {
  return (
    <div className="bg-[rgba(249,246,244,0)] h-[110.89px] overflow-clip relative shrink-0 w-[99.801px]">
      <Logo />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents left-[17.56px] top-[31.65px]" data-name="Mask group">
      <div className="absolute bg-[#4f4f4f] h-[48.052px] left-[17.56px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[57.748px_48.052px] top-[31.65px] w-[57.747px]" data-name="Bitmap" style={{ maskImage: `url('/images/audit/18ac75473bc1218356382662c5aafb980318bee3.png')` }} />
    </div>
  );
}

function Frame2147223540() {
  return (
    <div className="bg-[rgba(249,246,244,0)] h-[110.89px] overflow-clip relative shrink-0 w-[92.409px]">
      <MaskGroup2 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[-3.33%_29.24%_26.67%_27.36%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.615px] mask-size-[18.83px_18.83px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Group">
          <path clipRule="evenodd" d="M0 0H24.0611V24.0611H0V0Z" fill="var(--fill-0, #F20050)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[5%_33.96%_35%_32.08%]" data-name="Clip path group">
      <Group10 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[6.59%_2.44%_6.43%_2.83%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 28">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p2c8e9400} fill="var(--fill-0, #F20050)" id="Vector" />
            <path d={svgPaths.p1f802a00} fill="var(--fill-0, #F20050)" id="Vector_2" />
            <path d={svgPaths.p3612500} fill="var(--fill-0, #F20050)" id="Vector_3" />
            <path d={svgPaths.p39ab6d00} fill="var(--fill-0, #F20050)" id="Vector_4" />
            <path d={svgPaths.p343ee700} fill="var(--fill-0, #F20050)" id="Vector_5" />
            <path d={svgPaths.p2a2fb370} fill="var(--fill-0, #F20050)" id="Vector_6" />
            <path d={svgPaths.p35754780} fill="var(--fill-0, #F20050)" id="Vector_7" />
            <path d={svgPaths.pfadbb00} fill="var(--fill-0, #F20050)" id="Vector_8" />
            <path d={svgPaths.p44e2500} fill="var(--fill-0, #F20050)" id="Vector_9" />
            <path d={svgPaths.p316e9000} fill="var(--fill-0, #F20050)" id="Vector_10" />
            <path d={svgPaths.p3ced4680} fill="var(--fill-0, #F20050)" id="Vector_11" />
            <path d={svgPaths.p3e40b80} fill="var(--fill-0, #F20050)" id="Vector_12" />
          </g>
          <path d={svgPaths.p502c700} fill="var(--fill-0, #1A3380)" id="Vector_13" />
          <g id="Vector_14"></g>
          <path d={svgPaths.p1c9d6800} fill="var(--fill-0, #1A3380)" id="Vector_15" />
        </g>
      </svg>
    </div>
  );
}

function LogoSvg() {
  return (
    <div className="absolute h-[31.384px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[55.445px]" data-name="logo.svg">
      <ClipPathGroup1 />
      <Group12 />
    </div>
  );
}

function LogoSvgFill() {
  return (
    <div className="absolute h-[31.384px] left-0 overflow-clip top-0 w-[55.445px]" data-name="logo.svg fill">
      <LogoSvg />
    </div>
  );
}

function LinkLogoSvg() {
  return (
    <div className="absolute h-[31.384px] left-1/2 overflow-clip top-[39.99px] translate-x-[-50%] w-[55.445px]" data-name="Link → logo.svg">
      <LogoSvgFill />
    </div>
  );
}

function Frame2147223541() {
  return (
    <div className="bg-[rgba(249,246,244,0)] h-[110.89px] overflow-clip relative shrink-0 w-[99.801px]">
      <LinkLogoSvg />
    </div>
  );
}

function Group74() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 31">
      <g id="Group 74">
        <path d={svgPaths.p2e439600} fill="var(--fill-0, #212121)" id="Vector" />
        <path d={svgPaths.p3f16ef00} fill="var(--fill-0, #212121)" id="Vector_2" />
        <path d={svgPaths.p27d3df40} fill="var(--fill-0, #212121)" id="Vector_3" />
        <path d={svgPaths.pb6cf800} fill="var(--fill-0, #212121)" id="Vector_4" />
        <path d={svgPaths.p3d456880} fill="var(--fill-0, #212121)" id="Vector_5" />
        <path d={svgPaths.p20884a00} fill="var(--fill-0, #212121)" id="Vector_6" />
        <path d={svgPaths.p24a34c80} fill="var(--fill-0, #212121)" id="Vector_7" />
        <path d={svgPaths.p25881bf0} fill="var(--fill-0, #212121)" id="Vector_8" />
        <path d={svgPaths.p2f49f00} fill="var(--fill-0, #212121)" id="Vector_9" />
        <path d={svgPaths.p2a1d4d80} fill="var(--fill-0, #3968EB)" id="Vector_10" />
      </g>
    </svg>
  );
}

function Frame181() {
  return (
    <div className="absolute h-[30.761px] left-[5.55px] top-[40.76px] w-[99.801px]">
      <Group74 />
    </div>
  );
}

function Frame2147223542() {
  return (
    <div className="bg-[rgba(249,246,244,0)] overflow-clip relative shrink-0 size-[110.89px]">
      <Frame181 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute bottom-0 left-0 right-[81.36%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Group">
          <path d={svgPaths.p2de55e00} fill="var(--fill-0, #0077B1)" id="Vector" />
          <path d={svgPaths.p20b21980} fill="var(--fill-0, #4395C5)" id="Vector_2" />
          <path d={svgPaths.p1993c00} fill="var(--fill-0, #0085BB)" id="Vector_3" />
          <path d={svgPaths.p20c54080} fill="var(--fill-0, #6EA7D0)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[23.37%_50.83%_25.82%_24.01%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 10">
        <g id="Group">
          <path d={svgPaths.p67aa500} fill="var(--fill-0, #DBDCE9)" id="Vector" />
          <path d={svgPaths.p442ef00} fill="var(--fill-0, #DBDCE9)" id="Vector_2" />
          <path d={svgPaths.p29b78f0} fill="var(--fill-0, #DBDCE9)" id="Vector_3" />
          <path d={svgPaths.p355c3140} fill="var(--fill-0, #DBDCE9)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute bottom-[25.82%] left-[50.09%] right-0 top-[23.05%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 10">
        <g id="Group">
          <path d={svgPaths.p35687100} fill="var(--fill-0, #0073AE)" id="Vector" />
          <path d={svgPaths.p1575e332} fill="var(--fill-0, #0073AE)" id="Vector_2" />
          <path d={svgPaths.p347e43b0} fill="var(--fill-0, #0073AE)" id="Vector_3" />
          <path d={svgPaths.p62aee70} fill="var(--fill-0, #0073AE)" id="Vector_4" />
          <path d={svgPaths.p631e400} fill="var(--fill-0, #0073AE)" id="Vector_5" />
          <path d={svgPaths.p38b81700} fill="var(--fill-0, #0073AE)" id="Vector_6" />
          <path d={svgPaths.p3495a380} fill="var(--fill-0, #0073AE)" id="Vector_7" />
          <g id="Group_2">
            <path d={svgPaths.p26988380} fill="var(--fill-0, #0073AE)" id="Vector_8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group13 />
      <Group14 />
      <Group16 />
    </div>
  );
}

function BdLogoDarkBackgroundSvg() {
  return (
    <div className="h-[18.287px] overflow-clip relative shrink-0 w-[98.128px]" data-name="BD_Logo_-_Dark_Background.svg">
      <Group17 />
    </div>
  );
}

function BdLogoDarkBackgroundSvg1() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[98.152px] relative shrink-0" data-name="BD_Logo_-_Dark_Background.svg">
      <BdLogoDarkBackgroundSvg />
    </div>
  );
}

function Heading1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[2.826px] pt-0 px-0 relative shrink-0 w-full" data-name="Heading 1">
      <BdLogoDarkBackgroundSvg1 />
    </div>
  );
}

function DivTmLogoContainer() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[4.56px] pl-0 pr-[3.582px] py-0 top-[45.56px]" data-name="div.tm-logo-container">
      <Heading1 />
    </div>
  );
}

function Frame2147223543() {
  return (
    <div className="bg-[rgba(249,246,244,0)] overflow-clip relative shrink-0 size-[110.89px]">
      <DivTmLogoContainer />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute bottom-0 left-0 right-[75.58%] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Group 40">
          <rect fill="var(--fill-0, #222222)" height="15.839" id="Rectangle 22" rx="3.79933" width="15.839" x="1.58355" y="1.58392" />
          <path d={svgPaths.p3e0f1700} fill="var(--fill-0, #DAFF00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute bottom-[21.3%] left-[28.8%] right-0 top-[25.4%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 10">
        <g id="Group 39">
          <path d={svgPaths.p332d0c00} fill="var(--fill-0, #4F4F4F)" id="Vector" />
          <path d={svgPaths.p317a5e00} fill="var(--fill-0, #4F4F4F)" id="Vector_2" />
          <path d={svgPaths.p2d28b380} fill="var(--fill-0, #4F4F4F)" id="Vector_3" />
          <path d={svgPaths.p2ff9a000} fill="var(--fill-0, #4F4F4F)" id="Vector_4" />
          <path d={svgPaths.p28de980} fill="var(--fill-0, #4F4F4F)" id="Vector_5" />
          <path d={svgPaths.p31974c00} fill="var(--fill-0, #4F4F4F)" id="Vector_6" />
          <path d={svgPaths.p5893d80} fill="var(--fill-0, #4F4F4F)" id="Vector_7" />
          <path d={svgPaths.peebe600} fill="var(--fill-0, #4F4F4F)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function OneClikLogo() {
  return (
    <div className="absolute h-[18.705px] left-[17.25px] top-[46.33px] w-[77.003px]" data-name="one clik logo">
      <Group40 />
      <Group39 />
    </div>
  );
}

function Frame2147223544() {
  return (
    <div className="bg-[rgba(249,246,244,0)] overflow-clip relative shrink-0 size-[110.89px]">
      <OneClikLogo />
    </div>
  );
}

function Frame2147223545() {
  return (
    <div className="bg-[rgba(249,246,244,0)] overflow-clip relative shrink-0 size-[110.89px]">
      <p className="absolute font-['Space_Grotesk:Bold',_sans-serif] leading-[0.8] left-[20.4px] not-italic text-[#4f4f4f] text-[20.472px] text-justify text-nowrap top-[47.36px] tracking-[-0.6142px] whitespace-pre">Biscuit.</p>
    </div>
  );
}

function Group6745() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
      <g id="Group 6745">
        <path d={svgPaths.p3581e900} fill="url(#paint0_linear_100_796)" id="Vector" />
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
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_100_796" x1="1.94394" x2="31.9339" y1="1.94394" y2="31.9339">
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
    <div className="absolute left-[37.89px] overflow-clip size-[35.115px] top-[38.12px]" data-name="Frame">
      <Group6745 />
    </div>
  );
}

function Group6746() {
  return (
    <div className="absolute contents left-[37.89px] top-[38.12px]">
      <div className="absolute inset-[34.38%_34.17%_33.95%_34.17%]" data-name="Vector">
        <div className="absolute inset-[-30%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 57">
            <g filter="url(#filter0_f_100_637)" id="Vector">
              <path d={svgPaths.p18cf1300} fill="url(#paint0_linear_100_637)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="56.1844" id="filter0_f_100_637" width="56.1844" x="0.46543" y="0.46543">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_100_637" stdDeviation="5.26728" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_100_637" x1="12.9439" x2="42.9339" y1="12.9439" y2="42.9339">
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
    <div className="absolute contents left-[37.89px] top-[38.12px]">
      <Group6746 />
    </div>
  );
}

function Frame2147223546() {
  return (
    <div className="bg-[rgba(249,246,244,0)] overflow-clip relative shrink-0 size-[110.89px]">
      <Group6748 />
    </div>
  );
}

function Frame2147223549() {
  return (
    <div className="content-stretch flex gap-[37.888px] items-center justify-center relative shrink-0 w-[1630px]">
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
      <div className="absolute bg-gradient-to-l from-[#f9f6f4] h-[112.062px] left-[1169.8px] to-[rgba(249,246,244,0)] top-[-0.77px] w-[205.205px]" />
      <div className="absolute flex h-[111px] items-center justify-center left-[255px] top-0 w-[205px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-gradient-to-l from-[#f9f6f4] h-[111px] to-[rgba(249,246,244,0)] w-[205px]" />
        </div>
      </div>
    </div>
  );
}

function DivJsx3454978023() {
  return (
    <div className="content-stretch flex flex-col h-[111px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="div.jsx-3454978023">
      <Frame2147223549 />
    </div>
  );
}

function TrustedSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Trusted Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[160px] py-0 relative w-full">
          <div className="flex flex-col font-['Kalam:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e53935] text-[14px] text-center uppercase w-full">
            <p className="leading-[normal]">Trusted by founders, FROM:</p>
          </div>
          <DivJsx3454978023 />
        </div>
      </div>
    </div>
  );
}

function Frame2147227107() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#0062ff] text-[24px] w-[163px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        $100K+
      </p>
    </div>
  );
}

function Frame2147227108() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame2147227107 />
      <p className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-slate-600 tracking-[-0.28px] w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Avg Savings
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[16px] py-[14px] relative rounded-[8px] shrink-0 w-[172px]">
      <div aria-hidden="true" className="absolute border border-[#0062ff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_25px_0px_rgba(0,0,0,0.08),0px_2px_8px_0px_rgba(0,0,0,0.1)]" />
      <Frame2147227108 />
    </div>
  );
}

function Frame2147227109() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#0062ff] text-[24px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1 week
      </p>
    </div>
  );
}

function Frame2147227110() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame2147227109 />
      <p className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-slate-600 tracking-[-0.28px] w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Timeline
      </p>
    </div>
  );
}

function Frame2147227124() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[16px] py-[14px] relative rounded-[8px] shrink-0 w-[174px]">
      <div aria-hidden="true" className="absolute border border-[#0062ff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_25px_0px_rgba(0,0,0,0.08),0px_2px_8px_0px_rgba(0,0,0,0.1)]" />
      <Frame2147227110 />
    </div>
  );
}

function Frame2147227111() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#0062ff] text-[24px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        50+
      </p>
    </div>
  );
}

function Frame2147227112() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame2147227111 />
      <p className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap text-slate-600 tracking-[-0.28px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Audits Done
      </p>
    </div>
  );
}

function Frame2147227125() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[16px] py-[14px] relative rounded-[8px] shrink-0 w-[174px]">
      <div aria-hidden="true" className="absolute border border-[#0062ff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_25px_0px_rgba(0,0,0,0.08),0px_2px_8px_0px_rgba(0,0,0,0.1)]" />
      <Frame2147227112 />
    </div>
  );
}

function Frame2147227129() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame13 />
      <Frame2147227124 />
      <Frame2147227125 />
    </div>
  );
}

function Frame2147227059() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame2147227130 />
      <TrustedSection />
      <Frame2147227129 />
    </div>
  );
}

function Frame2147227064() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-1/2 top-[40px] translate-x-[-50%] w-[1440px]">
      <Frame2147227059 />
    </div>
  );
}

function Desktop16() {
  return (
    <div className="bg-[#f9f6f4] h-[438px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 16">
      <div className="absolute bg-[#f9f6f4] h-[1199px] left-1/2 top-[calc(50%+219.5px)] translate-x-[-50%] translate-y-[-50%] w-[1440px]" />
      <Frame2147227064 />
    </div>
  );
}

export default function Frame2147227194() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Desktop17 />
      <Desktop16 />
    </div>
  );
}