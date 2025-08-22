"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";

interface ProjectSaveProps {
  data: {
    title: string;
    titleHighlight: string;
    image: string;
    accordion: Array<{
      title: string;
      icon: string;
      description: string;
    }>;
    ctaButton: {
      text: string;
      link: string;
    };
  };
}

const ProjectSave = ({ data }: ProjectSaveProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section">
      <h2 className="section_title">
        {data.title} <span className="italic">{data.titleHighlight}</span>
      </h2>
      <div className="w-full mx-auto flex flex-col-reverse md:flex-row justify-between gap-6 md:gap-8 max-md:items-center">
        <div className="flex flex-col gap-4 w-full max-w-[480px]">
          {/* Accordion menu */}
          <div className="bg-white accordion_container">
            {data.accordion.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.title}
                  onClick={() => handleToggle(idx)}
                  className="border-b rounded-lg bg-white w-full cursor-pointer py-6"
                >
                  <div
                    className={`flex items-center items-start gap-2 flex justify-between px-5 md:px-6 transition-all duration-200`}
                  >
                    <div
                      className={`flex items-center gap-3 transition-all w-full items-center`}
                    >
                      <div className="flex items-center">
                        {item.icon && (
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={28}
                            height={28}
                            className={`h-6 w-6 shrink-0 object-contain ${
                              isOpen ? "mb-1" : ""
                            }`}
                          />
                        )}
                      </div>

                      <div
                        className={`text-base md:text-lg font-medium text-left transition-all duration-200 ${
                          isOpen ? "" : ""
                        }`}
                      >
                        {item.title}
                      </div>
                    </div>
                    <div>
                      <ChevronDown
                        className={`ml-auto transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        size={24}
                      />
                    </div>
                  </div>
                  {isOpen && (
                    <div className="px-5 mx-[36px] md:px-6 pt-2 text-[#475569] text-sm md:text-base">
                      {item.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {data.image && (
          <Image
            src={data.image}
            alt="Save Image"
            className="w-full max-w-[540px]"
            width={540}
            height={380}
          />
        )}
      </div>
      <div className="w-full sm:justify-start flex justify-center">
        <button
          // href="https://tryagentikai.com/contact"
          className="button_blue_border mt-4"
          onClick={() => {
            if (
              typeof window !== "undefined" &&
              (window as any).gtag_report_conversion
            ) {
              return (window as any).gtag_report_conversion(
                "https://tryagentikai.com/contact"
              );
            }
            return true;
          }}
        >
          {data.ctaButton.text}
          <ArrowUpRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default ProjectSave;
