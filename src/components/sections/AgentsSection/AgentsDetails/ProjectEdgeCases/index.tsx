import Link from "next/link";
import BracketButton from "src/components/BracketButton";

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
        {data.title} <span className="font-alte">{data.titleHighlight}</span>
      </h2>
      <div className="flex flex-col items-center justify-between gap-8 w-full">
        <table className="w-full border border-[#e7e6e4]">
          <thead>
            <tr>
              <th className="text-left px-8 py-6 bg-[#F9F6F4] border-b border-[#e7e6e4] font-geist uppercase tracking-[0.02em] text-[12px] font-normal text-[#0A1128]">
                Situation
              </th>
              <th className="text-left px-8 py-6 bg-[#0062FF] text-white font-geist uppercase tracking-[0.02em] text-[12px] font-normal border-b border-[#e7e6e4]">
                Solution
              </th>
            </tr>
          </thead>
          <tbody>
            {data.cases.map((item, idx) => (
              <tr key={idx} className="border-b border-[#e7e6e4]">
                <td className="px-8 py-6 bg-white font-alte text-[15px] leading-[1.5] tracking-[-0.04em] font-normal text-[#475569] w-1/2">
                  {item.situation}
                </td>
                <td className="px-8 py-6 text-blue-600 bg-white font-alte text-[15px] leading-[1.5] tracking-[-0.04em] font-normal w-1/2">
                  {item.solution}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4">
          <BracketButton
            label={data.ctaButton.text}
            variant="secondary"
            onClick={() => {
              if (
                typeof window !== "undefined" &&
                (window as any).gtag_report_conversion
              ) {
                (window as any).gtag_report_conversion(
                  "https://tryagentikai.com/contact"
                );
              }
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectEdgeCases;
