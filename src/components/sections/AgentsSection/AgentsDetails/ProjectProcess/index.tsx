import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectProcessProps {
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

const ProjectProcess = ({ data }: ProjectProcessProps) => {
  return (
    <section className="section">
      <h2 className="section_title">
        {data.title} <span className="italic">{data.titleHighlight}</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
        <ul className="space-y-4 mb-8">
          {data.steps.map((step, index) => (
            <li
              key={index}
              className="text-base text-[#1E293B] flex gap-4 items-center"
            >
              <Image src={`/icons/flash.svg`} alt="" width={32} height={32} />
              <span>{step}</span>
            </li>
          ))}
        </ul>

        {data.image && (
          <Image
            src={data.image}
            alt="Process Image"
            className="w-full h-auto max-w-[540px]"
            width={540}
            height={360}
          />
        )}
      </div>
      <Link
        href={data.ctaButton.link}
        className="button_blue_border w-fit me-auto"
      >
        {data.ctaButton.text}
        <ArrowUpRight size={20} />
      </Link>
    </section>
  );
};

export default ProjectProcess;
