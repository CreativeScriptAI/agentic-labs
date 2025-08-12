"use client";
import Image from "next/image";

interface ProjectStackProps {
  data: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    items: Array<{
      src: string;
      alt: string;
    }>;
  };
}

const ProjectStack = ({ data }: ProjectStackProps) => {
  return (
    <section className="section">
      <span className="section_label">{data.subtitle}</span>
      <hr className="bg-[#E2E8F0] max-w-[540px] mx-auto w-full" />
      <h2 className="section_title">
        {data.title} <span className="italic">{data.titleHighlight}</span>
      </h2>
      <div className="w-full">
        {/* Full-bleed horizontal scroller with 20px right margin */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
          <div className="overflow-x-auto overflow-y-hidden px-4 py-4 pr-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex gap-6 w-max md:mx-auto">
              {data.items.map((item, index) => (
                <div key={index} className="stack_card shrink-0 w-[160px]">
                  {item.src && (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={60}
                      height={48}
                    />
                  )}
                  <span className="text-sm md:text-base text-[#0F172A] font-medium">
                    {item.alt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectStack;
