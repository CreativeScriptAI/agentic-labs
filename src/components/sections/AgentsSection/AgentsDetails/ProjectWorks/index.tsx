import { ArrowUpRight, MoveDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectWorksProps {
  data: {
    title: string;
    titleHighlight: string;
    image: string;
    steps: string[];
    ctaButton: {
      text: string;
      link: string;
    };
  };
}

const ProjectWorks = ({ data }: ProjectWorksProps) => {
  return (
    <section className="section">
      <h2 className="section_title">
        {data.title} <span className="italic">{data.titleHighlight}</span>
      </h2>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8">
        <div>
          <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 mt-2">
            {data.steps.map((step, index) => {
              return (
                <React.Fragment key={index}>
                  <li className="text-base md:text-lg text-[#1E293B] flex gap-4 items-start">
                    <div className="shrink-0 flex flex-col items-center gap-2 -mt-1">
                      <Image
                        src={
                          index + 1 > 5
                            ? `/icons/works_5.png`
                            : `/icons/works_${index + 1}.png`
                        }
                        alt="Check Icon"
                        className="mt-1"
                        width={32}
                        height={32}
                      />

                      {index < data.steps.length - 1 && (
                        <MoveDown color="#0062FF" />
                      )}
                    </div>
                    <span>{step}</span>
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
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
        {data.image && (
          <Image
            src={data.image}
            alt="Works Image"
            className=""
            width={500}
            height={360}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectWorks;
