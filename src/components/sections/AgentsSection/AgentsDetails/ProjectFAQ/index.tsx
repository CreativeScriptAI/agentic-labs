"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ProjectFAQProps {
  data: {
    title: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
}

const ProjectFAQ = ({ data }: ProjectFAQProps) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="section">
      <h2 className="section_title">FAQ</h2>
      <div className="flex flex-col w-full gap-4 max-w-[684px]">
        {data.questions.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={item.question}
              onClick={() => handleToggle(idx)}
              className="border-b border-b-[#e7e6e4] rounded-none transition-all cursor-pointer"
            >
              <div className="w-full flex items-center justify-between px-6 py-4 text-left">
                <span className="font-alte text-lg font-normal tracking-[-0.04em] text-[#0A1128]">{item.question}</span>
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 px-6 ${
                  isOpen
                    ? "max-h-40 py-2 opacity-100 pb-4"
                    : "max-h-0 py-0 opacity-0"
                }`}
                style={{ transitionProperty: "max-height, opacity, padding" }}
              >
                {isOpen && (
                  <p className="font-alte text-[#475569] text-[15px] leading-[1.5] tracking-[-0.04em] font-normal">{item.answer}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectFAQ;
