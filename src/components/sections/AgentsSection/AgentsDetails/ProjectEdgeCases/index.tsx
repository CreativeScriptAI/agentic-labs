import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectEdgeCasesProps {
  data: {
    title: string;
    titleHighlight: string;
    cases: Array<{
      situation: string;
      solution: string;
    }>;
    ctaButton: {
      text: string;
      link: string;
    };
  };
}

const ProjectEdgeCases = ({ data }: ProjectEdgeCasesProps) => {
  return (
    <section className="section">
      <h2 className="section_title">
        {data.title} <span className="italic">{data.titleHighlight}</span>
      </h2>
      <div className="flex flex-col items-center justify-between gap-8 w-full">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left px-8 py-6 bg-[#E2E8F0] text-sm font-semibold text-[#111827]">
                Situation
              </th>
              <th className="text-left px-8 py-6 bg-[#0062FF] text-white text-sm font-semibold">
                Solution
              </th>
            </tr>
          </thead>
          <tbody>
            {data.cases.map((item, idx) => (
              <tr key={idx} className="border-b">
                <td className="px-8 py-6 bg-white text-base font-normal text-[#475569] w-1/2">
                  {item.situation}
                </td>
                <td className="px-8 py-6 text-blue-600 bg-white text-base font-medium w-1/2">
                  {item.solution}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link href={data.ctaButton.link} className="button_blue_border w-fit">
          {data.ctaButton.text}
          <ArrowUpRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default ProjectEdgeCases;
