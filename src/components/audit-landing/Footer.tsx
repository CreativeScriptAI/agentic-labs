import React from "react";
import svgPaths from "src/imports/audit-landing/svg-qb86qx90z2";

function GithubLogo() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="GithubLogo">
          <path d={svgPaths.p18e38380} fill="#475569" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function XLogo() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="XLogo">
          <path d={svgPaths.p3e4f0c80} fill="#475569" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function YoutubeLogo() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="YoutubeLogo">
          <path d={svgPaths.p3ac34e72} fill="#475569" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkedinLogo() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="LinkedinLogo">
          <path d={svgPaths.p2779d500} fill="#475569" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#f9f6f4] relative pt-[48px] md:pt-[60px] pb-[40px] md:pb-[190px] overflow-clip">
      {/* Mobile Layout */}
      <div className="md:hidden w-full px-4">
        <div className="max-w-[327px] mx-auto">
          <div className="box-border content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
              {/* Brand Section - Mobile */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[300px]">
                <div className="flex flex-col font-['PP_Mondwest',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0062ff] text-[24px] text-center text-nowrap">
                  <p className="leading-[normal] whitespace-pre">
                    Agentic AI Labs
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div
                    className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-slate-600 w-full"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="leading-[normal]">
                      The home of the AI Workforce
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Icons - Mobile */}
              <div className="content-stretch flex items-center relative shrink-0 w-[300px]">
                <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="content-stretch flex flex-col items-start max-w-[308px] relative shrink-0 hover:opacity-70 transition-opacity"
                  >
                    <GithubLogo />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="content-stretch flex flex-col items-start max-w-[308px] relative shrink-0 hover:opacity-70 transition-opacity"
                  >
                    <XLogo />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="content-stretch flex flex-col items-start max-w-[308px] relative shrink-0 hover:opacity-70 transition-opacity"
                  >
                    <YoutubeLogo />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="content-stretch flex flex-col items-start max-w-[308px] relative shrink-0 hover:opacity-70 transition-opacity"
                  >
                    <LinkedinLogo />
                  </a>
                </div>
              </div>

              {/* Credits - Mobile */}
              <div className="content-stretch flex items-start relative shrink-0">
                <div className="flex flex-col font-['Inter',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#868a97] text-[14px] text-nowrap">
                  <p className="leading-[24px] whitespace-pre">{`Crafted by `}</p>
                </div>
                <div className="content-stretch flex items-start relative shrink-0">
                  <a
                    href="https://creativescript.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col font-['Inter',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0062ff] text-[14px] text-nowrap hover:underline"
                  >
                    <p className="[text-underline-position:from-font] decoration-solid leading-[24px] underline whitespace-pre">
                      creativescript.org
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block max-w-[1440px] mx-auto px-[160px]">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          {/* Brand Section */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[300px]">
            <div className="flex flex-col font-['PP_Mondwest',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0062ff] text-[24px] text-center text-nowrap">
              <p className="leading-[normal] whitespace-pre">Agentic AI Labs</p>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div
                className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-slate-600 w-full"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="leading-[normal]">The home of the AI Workforce</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="content-stretch flex items-center relative shrink-0 w-[300px]">
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="content-stretch flex flex-col items-start max-w-[308px] relative shrink-0 hover:opacity-70 transition-opacity"
              >
                <GithubLogo />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="content-stretch flex flex-col items-start max-w-[308px] relative shrink-0 hover:opacity-70 transition-opacity"
              >
                <XLogo />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="content-stretch flex flex-col items-start max-w-[308px] relative shrink-0 hover:opacity-70 transition-opacity"
              >
                <YoutubeLogo />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="content-stretch flex flex-col items-start max-w-[308px] relative shrink-0 hover:opacity-70 transition-opacity"
              >
                <LinkedinLogo />
              </a>
            </div>
          </div>

          {/* Credits */}
          <div className="content-stretch flex items-start relative shrink-0">
            <div className="flex flex-col font-['Inter',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#868a97] text-[14px] text-nowrap">
              <p className="leading-[24px] whitespace-pre">{`Crafted by `}</p>
            </div>
            <div className="content-stretch flex items-start relative shrink-0">
              <a
                href="https://creativescript.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col font-['Inter',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0062ff] text-[14px] text-nowrap hover:underline"
              >
                <p className="[text-underline-position:from-font] decoration-solid leading-[24px] underline whitespace-pre">
                  creativescript.org
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
