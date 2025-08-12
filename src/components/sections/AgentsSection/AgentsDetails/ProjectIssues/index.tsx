import Image from "next/image";

interface ProjectIssuesProps {
  data: {
    title: string;
    titleHighlight: string;
    image: string;
    issues: string[];
  };
}

const ProjectIssues = ({ data }: ProjectIssuesProps) => {
  return (
    <section className="section">
      <h2 className="section_title">
        {data.title}{" "}
        <span className="font-mondwest text-slate-600">
          {data.titleHighlight}
        </span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 w-full">
        {data.image && (
          <Image
            src={data.image}
            alt="Issues Image"
            width={360}
            height={292}
            className="w-full h-auto max-w-96"
          />
        )}
        <ul className="flex flex-col items-start gap-3 md:gap-4">
          {data.issues.map((issue, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="block w-5 h-5 bg-[#0062FF] shrink-0 mt-1 "></div>
              <div className="font-sfpro text-[14px] font-normal text-slate-800">
                {issue}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectIssues;
