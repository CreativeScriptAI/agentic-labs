import AICaller from "src/components/sections/AICaller";
import { useState } from "react";

interface ProjectHeroProps {
  data: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    description: string;
    heroImage: string;
    benefits: Array<{
      text: string;
      icon: string;
    }>;
  };
}

const ProjectHero = ({ data }: ProjectHeroProps) => {



  return (
    <section className="section text-center mt-[132px]">
      <span className="section_label">{data.subtitle}</span>
      <h1 className="section_title">
        {data.title}{" "}
        <span className="font-mondwest text-slate-600">
          {data.titleHighlight}
        </span>
      </h1>
      <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-[680px] mx-auto mb-6 md:mb-8">
        {data.description}
      </p>
      <AICaller />
    </section>
  );
};

export default ProjectHero;
