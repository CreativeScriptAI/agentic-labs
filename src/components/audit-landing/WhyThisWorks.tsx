import React, { useState, useEffect } from "react";
import svgPaths from "src/imports/audit-landing/svg-fjncqy7ost";

// Icon Components
function Clock() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="Clock">
          <path d={svgPaths.p20c27980} fill="#0062FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PiggyBank() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="PiggyBank">
          <path d={svgPaths.p8670540} fill="#0062FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RocketLaunch() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="RocketLaunch">
          <path d={svgPaths.p2f6c3900} fill="#0062FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PiggyBankLarge() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 48"
      >
        <g id="PiggyBank">
          <path d={svgPaths.p263dc780} fill="#0062FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CalendarCheck() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="CalendarCheck">
          <path d={svgPaths.p1073600} fill="#0062FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CoinVertical() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="CoinVertical">
          <path d={svgPaths.p28588cf0} fill="#0062FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Robot() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Robot">
          <path d={svgPaths.p32e17a80} fill="#0062FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Target() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Target">
          <path d={svgPaths.pad00100} fill="#16a34a" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export function WhyThisWorks() {
  const [currentAmount, setCurrentAmount] = useState(3); // Start at $125K
  const amounts = [
    { value: 50, color: "#00a63e" },
    { value: 75, color: "#00a63e" },
    { value: 100, color: "#00a63e" },
    { value: 125, color: "#0062ff" }, // Highlight this one
    { value: 150, color: "#00a63e" },
    { value: 200, color: "#00a63e" },
    { value: 250, color: "#00a63e" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAmount((prev) => (prev + 1) % amounts.length);
    }, 800);

    return () => clearInterval(interval);
  }, [amounts.length]);

  return (
    <section className="bg-[#f9f6f4] relative py-20 overflow-clip">
      {/* Background gradient */}
      <div
        className="absolute h-[1083px] left-0 opacity-5 top-0 w-[1440px]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1083\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -212.86 -116.84 0 360 270.75)\\'><stop stop-color=\\'rgba(0,98,255,1)\\' offset=\\'0.0003811\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.0003811\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1083\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -212.86 -116.84 0 1080 812.25)\\'><stop stop-color=\\'rgba(0,98,255,1)\\' offset=\\'0.00019055\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.00019055\\'/></radialGradient></defs></svg>')",
        }}
      />

      <div className="relative content-stretch flex flex-col gap-[64px] items-center justify-center w-full max-w-[1120px] mx-auto px-4">
        {/* Title */}
        <div className="flex flex-col gap-[8px] items-center">
          <div
            className="flex flex-col font-['Kalam',_sans-serif] font-normal justify-center leading-[0] not-italic text-slate-600 text-[16px] text-center"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[normal]">Outcome</p>
          </div>
          <div
            className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center leading-[0] text-[#e53935] text-[14px] text-center tracking-[0.56px] uppercase"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[normal]">ROI ACHIEVEMENT</p>
          </div>
        </div>

        {/* Main White Card */}
        <div className="bg-white relative overflow-clip rounded-[12px] w-full max-w-[1120px]">
          <div className="relative p-8 md:p-12">
            {/* Large Piggy Bank Icon */}
            <div className="bg-[rgba(0,98,255,0.2)] content-stretch flex items-center justify-center mx-auto rounded-full size-[96px] mb-8">
              <PiggyBankLarge />
            </div>

            {/* Animated Amount - Slot Machine Effect */}
            <div className="relative mb-4">
              <div className="overflow-hidden h-[80px] mx-auto flex justify-center">
                <div
                  className="transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateY(-${currentAmount * 80}px)`,
                  }}
                >
                  {amounts.map((amount, index) => (
                    <div
                      key={index}
                      className="h-[80px] flex items-center justify-center"
                    >
                      <span
                        className="font-['SF_Pro',_sans-serif] font-bold leading-[normal] text-[60px] text-center tracking-[-2.4px]"
                        style={{
                          color: amount.color,
                          fontVariationSettings: "'wdth' 100",
                        }}
                      >
                        ${amount.value}K+
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Potential Savings via AI Audit Analysis */}
            <p
              className="font-['SF_Pro',_sans-serif] font-[590] leading-[normal] text-[24px] text-center text-slate-600 mb-8"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Potential Savings via AI Audit
            </p>

            {/* Three Yellow Cards */}
            <div className="content-stretch flex flex-col md:flex-row gap-[16px] items-center justify-center mb-8 max-w-[672px] mx-auto">
              {/* 1 Week */}
              <div className="bg-[#ffd60a] h-[110px] relative rounded-[8px] w-full md:w-[213.328px]">
                <div className="absolute left-1/2 -translate-x-1/2 overflow-clip size-[32px] top-[16px]">
                  <div className="absolute left-1/2 -translate-x-1/2 size-[24px] top-1/2 -translate-y-1/2">
                    <CalendarCheck />
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col font-['SF_Pro',_sans-serif] font-[510] gap-[8px] items-center left-1/2 -translate-x-1/2 text-center top-[51px]">
                  <p
                    className="leading-[normal] text-[#0a1128] text-[16px] text-nowrap whitespace-pre"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    1 Week
                  </p>
                  <p
                    className="leading-[16px] text-[12px] text-slate-600"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Implementation
                  </p>
                </div>
              </div>

              {/* ROI Proven */}
              <div className="bg-[#ffd60a] h-[110px] relative rounded-[8px] w-full md:w-[213.336px]">
                <div className="absolute left-1/2 -translate-x-1/2 overflow-clip size-[32px] top-[16px]">
                  <div className="absolute left-1/2 -translate-x-1/2 size-[24px] top-1/2 -translate-y-1/2">
                    <CoinVertical />
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col font-['SF_Pro',_sans-serif] font-[510] gap-[8px] items-center left-1/2 -translate-x-1/2 text-center text-nowrap top-[calc(50%+17.5px)] -translate-y-1/2 whitespace-pre">
                  <p
                    className="leading-[normal] text-[#0a1128] text-[16px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    ROI Proven
                  </p>
                  <p
                    className="leading-[16px] text-[12px] text-slate-600"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Measurable Results
                  </p>
                </div>
              </div>

              {/* Automated */}
              <div className="bg-[#ffd60a] h-[110px] relative rounded-[8px] w-full md:w-[213.328px]">
                <div className="absolute left-1/2 -translate-x-1/2 overflow-clip size-[32px] top-[16px]">
                  <div className="absolute left-1/2 -translate-x-1/2 size-[24px] top-1/2 -translate-y-1/2">
                    <Robot />
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col font-['SF_Pro',_sans-serif] font-[510] gap-[8px] items-center left-1/2 -translate-x-1/2 text-center text-nowrap top-[calc(50%+17.5px)] -translate-y-1/2 whitespace-pre">
                  <p
                    className="leading-[normal] text-[#0a1128] text-[16px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Automated
                  </p>
                  <p
                    className="leading-[16px] text-[12px] text-slate-600"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Self-Managing
                  </p>
                </div>
              </div>
            </div>

            {/* Text Section and Optimization Complete */}
            <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <p
                    className="font-['SF_Pro',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[#1e293b] text-center text-nowrap whitespace-pre"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Through comprehensive
                  </p>
                  <div className="bg-[#0062ff] box-border content-stretch flex h-[31.5px] items-center justify-center px-[8px] py-[4px] relative shrink-0">
                    <p
                      className="font-['SF_Pro',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[16px] text-[#f8f9fa] text-center text-nowrap whitespace-pre"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      AI Audit Analysis
                    </p>
                  </div>
                </div>
                <p className="font-['Kalam',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[#475569] text-center text-nowrap whitespace-pre">
                  Boring problems = biggest profit opportunities
                </p>
              </div>

              {/* Optimization Complete */}
              <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[6px] relative">
                <Target />
                <p
                  className="font-['SF_Pro',_sans-serif] font-[590] leading-[20px] not-italic relative shrink-0 text-[14px] text-green-600 text-center text-nowrap whitespace-pre"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <span
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >{`Optimization `}</span>
                  <span style={{ fontVariationSettings: "'wdth' 100" }}>
                    Complete
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Three Metric Cards */}
        <div className="content-stretch flex flex-col md:flex-row gap-[16px] items-stretch justify-center w-full max-w-[896px] mt-8">
          {/* 40hrs Card */}
          <div className="bg-white min-h-[240px] rounded-[8px] w-full md:w-[277.328px] relative flex flex-col items-center px-4 pt-10 pb-10">
            <div className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="relative mb-5">
              <Clock />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center mb-4 w-full">
              <p
                className="font-['SF_Pro',_sans-serif] font-[590] leading-[28px] text-[24px] text-center text-slate-800"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                40 hrs saved / week
              </p>
            </div>
            <div className="min-h-[44px] flex items-center justify-center w-full px-2 pb-2">
              <p
                className="font-['SF_Pro',_sans-serif] font-[510] leading-[20px] text-[14px] text-center text-slate-600"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Team time freed from manual work
              </p>
            </div>
          </div>

          {/* 85% Card */}
          <div className="bg-white min-h-[240px] rounded-[8px] w-full md:w-[277.336px] relative flex flex-col items-center px-4 pt-10 pb-10">
            <div className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="relative mb-5">
              <PiggyBank />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center mb-4 w-full">
              <p
                className="font-['SF_Pro',_sans-serif] font-[590] leading-[28px] text-[24px] text-center text-slate-800"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                85% tasks automated
              </p>
            </div>
            <div className="min-h-[44px] flex items-center justify-center w-full px-2 pb-2">
              <p
                className="font-['SF_Pro',_sans-serif] font-[510] leading-[20px] text-[14px] text-center text-slate-600"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Repetitive ops handled by AI
              </p>
            </div>
          </div>

          {/* $250K Card */}
          <div className="bg-white min-h-[240px] rounded-[8px] w-full md:w-[277.336px] relative flex flex-col items-center px-4 pt-10 pb-10">
            <div className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="relative mb-5">
              <RocketLaunch />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center mb-4 w-full">
              <p
                className="font-['SF_Pro',_sans-serif] font-[590] leading-[28px] text-[24px] text-center text-slate-800"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                $250K unlocked ROI
              </p>
            </div>
            <div className="min-h-[44px] flex items-center justify-center w-full px-2 pb-2">
              <p
                className="font-['SF_Pro',_sans-serif] font-[510] leading-[20px] text-[14px] text-center text-slate-600"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                From wasted time → measurable profit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
