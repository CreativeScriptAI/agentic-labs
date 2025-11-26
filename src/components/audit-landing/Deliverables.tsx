import React from "react";
import svgPaths from "src/imports/audit-landing/svg-dcr4r2p1rg";

// Icon Components
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
          <path d={svgPaths.p189ec180} fill="#0062FF" id="Vector" />
        </g>
      </svg>
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
          <path d={svgPaths.p1373c380} fill="#0062FF" id="Vector" />
        </g>
      </svg>
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
          <path d={svgPaths.p377b3380} fill="#0062FF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export function Deliverables() {
  return (
    <div className="bg-[#f9f6f4] relative w-full pt-8 pb-20 overflow-clip">
      <div className="absolute bg-[#f9f6f4] h-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1440px]" />

      <div className="relative content-stretch flex flex-col gap-[64px] h-[529px] items-center justify-center w-full max-w-[1120px] mx-auto px-4">
        {/* Top Header Section */}
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
          <div
            className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[24px] text-center text-[#1e293b] w-[min-content]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[normal]">
              <span>{`Get measurable clarity in `}</span>
              <span
                className="font-['SF_Pro',_sans-serif] font-[590] text-[#0062ff]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                1 week for just $99
              </span>
            </p>
          </div>
          <div
            className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-center text-[#475569] w-[min-content]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[normal]">
              In 7 days, we&apos;ll show you exactly where your business is
              bleeding money, what&apos;s causing it, and how AI can fix it
              fast.
            </p>
          </div>
          <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0">
            <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
              <button
                className="bg-[#0062ff] hover:bg-[#0052d9] box-border content-stretch flex gap-[6px] items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 transition-colors duration-300"
                onClick={() =>
                  window.open(
                    "https://calendly.com/creative-script/get-free-ai-clarity?month=2025-11",
                    "_blank"
                  )
                }
              >
                <div
                  className="flex flex-col font-['SF_Pro',_sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[14px] text-[#f8f9fa] text-nowrap"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <p className="leading-[20px] whitespace-pre">
                    Start Your $99 Audit →
                  </p>
                </div>
              </button>
              <p className="font-['Kalam',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[#94a3b8] text-center text-nowrap whitespace-pre">
                no upsells, no pitch, just clarity.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
          <div
            className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-center text-[#1e293b] w-[min-content]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[normal]">
              Here&apos;s what you&apos;ll walk away with:
            </p>
          </div>
          <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0">
            {/* Card 1: Data Insights Report */}
            <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[362px]">
              <p className="font-['Kalam',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[#e53935] text-center w-full">
                See the leaks!
              </p>
              <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full">
                {/* Icon */}
                <div className="bg-[#3dffc9] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[16px] rounded-[8px] animate-document-pulse">
                  <FileText />
                </div>

                {/* Content */}
                <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
                  <div className="content-stretch flex flex-col gap-[2px] items-start justify-center text-[#0062ff] text-nowrap w-full whitespace-pre">
                    <p
                      className="font-['SF_Pro',_sans-serif] font-[510] leading-[normal] text-[20px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Data Insights Report
                    </p>
                    <p
                      className="font-['SF_Pro',_sans-serif] font-normal leading-[20px] opacity-60 text-[14px] tracking-[-0.28px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      See where the money&apos;s leaking.
                    </p>
                  </div>

                  <div className="content-stretch flex flex-col font-['SF_Pro',_sans-serif] font-normal gap-[16px] items-start w-full">
                    <p
                      className="leading-[20px] min-w-full text-[14px] text-slate-600 tracking-[-0.28px] w-[min-content]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      A simple report showing hours lost, recurring
                      inefficiencies, and the hidden cost of manual workflows.
                    </p>
                    <p
                      className="leading-[normal] text-[#ff5757] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      (Delivered as PDF or Google Sheet.)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Workflow Map */}
            <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[363px]">
              <p className="font-['Kalam',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[#e53935] text-center w-full">
                Bottlenecks marked!
              </p>
              <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[14px] relative rounded-[8px] shrink-0 w-full">
                {/* Icon */}
                <div className="bg-[#3dffc9] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[16px] rounded-[8px] animate-flow-progress">
                  <FlowArrow />
                </div>

                {/* Content */}
                <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
                  <div className="content-stretch flex flex-col gap-[2px] items-start justify-center text-[#0062ff] text-nowrap w-full whitespace-pre">
                    <p
                      className="font-['SF_Pro',_sans-serif] font-[510] leading-[normal] text-[20px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Workflow Map
                    </p>
                    <p
                      className="font-['SF_Pro',_sans-serif] font-normal leading-[20px] opacity-60 text-[14px] tracking-[-0.28px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      See the full picture, visually
                    </p>
                  </div>

                  <div className="content-stretch flex flex-col font-['SF_Pro',_sans-serif] font-normal gap-[16px] items-start w-full">
                    <p
                      className="leading-[20px] min-w-full text-[14px] text-slate-600 tracking-[-0.28px] w-[min-content] whitespace-pre-wrap"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >{`We turn your business process into a  visual map that shows what's working, what's broken, and what's just busywork.`}</p>
                    <p
                      className="leading-[normal] text-[#ff5757] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      (Delivered as Notion or Figma map.)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: ROI Projection Plan */}
            <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[363px]">
              <p className="font-['Kalam',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[#e53935] text-center w-full">
                Your next 10x move!
              </p>
              <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full">
                {/* Icon */}
                <div className="bg-[#3dffc9] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[16px] rounded-[8px] animate-chart-growth">
                  <ChartLineUp />
                </div>

                {/* Content */}
                <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
                  <div className="content-stretch flex flex-col gap-[2px] items-start justify-center text-[#0062ff] text-nowrap w-full whitespace-pre">
                    <p
                      className="font-['SF_Pro',_sans-serif] font-[510] leading-[normal] text-[20px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      ROI Projection Plan
                    </p>
                    <p
                      className="font-['SF_Pro',_sans-serif] font-normal leading-[20px] opacity-60 text-[14px] tracking-[-0.28px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      See what you could save.
                    </p>
                  </div>

                  <div className="content-stretch flex flex-col font-['SF_Pro',_sans-serif] font-normal gap-[16px] items-start relative shrink-0">
                    <p
                      className="leading-[20px] relative shrink-0 text-[14px] text-[#475569] tracking-[-0.28px] w-[279px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      We translate your leaks into numbers how much time and
                      cost can be saved by fixing 1–3 key problems using AI.
                    </p>
                    <p
                      className="leading-[normal] text-[#ff5757] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      (Delivered as ROI summary dashboard.)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes documentPulse {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(61, 255, 201, 0);
          }
          50% { 
            transform: scale(1.05);
            box-shadow: 0 0 8px 2px rgba(61, 255, 201, 0.3);
          }
        }
        .animate-document-pulse {
          animation: documentPulse 2s ease-in-out infinite;
        }
        
        @keyframes flowProgress {
          0% { 
            transform: translateX(0) translateY(0) scale(1);
          }
          25% {
            transform: translateX(2px) translateY(-1px) scale(1.02);
          }
          50% {
            transform: translateX(4px) translateY(-2px) scale(1.03);
          }
          75% {
            transform: translateX(2px) translateY(-1px) scale(1.02);
          }
          100% { 
            transform: translateX(0) translateY(0) scale(1);
          }
        }
        .animate-flow-progress {
          animation: flowProgress 3s ease-in-out infinite;
        }
        
        @keyframes chartGrowth {
          0% {
            transform: scaleY(0.8) translateY(4px);
            opacity: 0.8;
          }
          50% {
            transform: scaleY(1.1) translateY(-2px);
            opacity: 1;
          }
          100% {
            transform: scaleY(1) translateY(0);
            opacity: 1;
          }
        }
        .animate-chart-growth {
          animation: chartGrowth 2.5s ease-in-out infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-document-pulse,
          .animate-flow-progress,
          .animate-chart-growth {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
