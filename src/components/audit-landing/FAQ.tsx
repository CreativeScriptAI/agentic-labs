import { useState } from "react";
import svgPaths from "src/imports/audit-landing/svg-106z9v1fri";

function CaretUp() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="CaretUp">
          <path d={svgPaths.p773fd80} fill="#FF5757" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CaretDown() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="CaretDown">
          <path d={svgPaths.p1500e200} fill="#475569" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "What's an AI Audit?",
      answer:
        "A business-focused internal audit powered by AI that identifies where you're losing time and money in daily operations.",
    },
    {
      question: "What do I get from the free clarity call?",
      answer:
        "A 20-minute diagnostic — we pinpoint potential leaks and estimate their cost. No pitch, just clarity.",
    },
    {
      question: "Do you need my data or system access?",
      answer:
        "Only minimal access — most of the analysis happens using your workflow overview and process documentation.",
    },
    {
      question: "How long does it take?",
      answer: "Around 2 weeks from kickoff to results.",
    },
    {
      question: "Is this for early-stage startups?",
      answer:
        "Usually not. It's designed for SaaS teams with established workflows (200–1,000 employees).",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#f9f6f4] relative py-20 overflow-clip">
      <div className="absolute bg-[#f9f6f4] h-[1024px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1440px]" />

      <div className="relative content-stretch flex flex-col gap-[32px] items-center w-full max-w-[742px] mx-auto px-4">
        {/* Header */}
        <div className="content-stretch flex flex-col gap-[16px] items-center w-full max-w-[475px]">
          <div
            className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center text-[#e53935] text-[14px] text-center tracking-[0.56px] uppercase w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[normal]">Frequently Asked Questions</p>
          </div>
        </div>

        {/* FAQ List */}
        <div className="relative rounded-[16px] w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex flex-col items-start p-[29px] relative w-full">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="box-border content-stretch flex flex-col items-start overflow-clip pb-[16px] pt-0 px-0 rounded-[6px] w-full"
                >
                  <div className="relative w-full">
                    <div
                      aria-hidden="true"
                      className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none"
                    />
                    <div className="size-full">
                      <button
                        className="box-border content-stretch flex gap-[24px] items-start px-[24px] py-[16px] relative w-full text-left"
                        onClick={() => toggleFAQ(index)}
                      >
                        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px">
                          <div className="content-stretch flex flex-col items-start w-full">
                            <div
                              className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center text-[16px] text-slate-900 w-full"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            >
                              <p className="leading-[24px]">{faq.question}</p>
                            </div>
                          </div>
                          {openIndex === index && (
                            <div className="content-stretch flex flex-col items-start w-full">
                              <div
                                className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center text-[14px] text-slate-600 w-full"
                                style={{ fontVariationSettings: "'wdth' 100" }}
                              >
                                <p className="leading-[20px]">{faq.answer}</p>
                              </div>
                            </div>
                          )}
                        </div>
                        {openIndex === index ? <CaretUp /> : <CaretDown />}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
