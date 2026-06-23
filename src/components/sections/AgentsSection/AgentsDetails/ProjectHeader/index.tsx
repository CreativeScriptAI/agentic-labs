import Image from "next/image";
import Link from "next/link";

interface ProjectHeaderProps {
  data: {
    brandName: string;
    tryButtonText: string;
    tryButtonIcon: string;
  };
}

const ProjectHeader = ({ data }: ProjectHeaderProps) => {
  return (
    <header className="flex items-center justify-between bg-white border border-[#e7e6e4] rounded-none p-2 pl-8 max-w-[742px] mx-auto mt-24 ">
      <div className="flex text-blue-600 font-alte items-center gap-2">
        <Link href="/">{data.brandName}</Link>
      </div>
      {/* <div className="hidden md:block text-sm font-normal font-alte text-slate-800">
        Get In Touch
      </div> */}
      <div className="flex items-center justify-center gap-2 bg-[#0062FF] p-3 rounded-none">
        {data.tryButtonIcon && (
          <Image
            src="/images/notebot_emoji.png"
            alt=""
            width={16}
            height={16}
          />
        )}
        <div className="font-geist uppercase tracking-[0.02em] text-[12px] font-normal text-white">
          {data.tryButtonText}
        </div>
      </div>
    </header>
  );
};

export default ProjectHeader;
