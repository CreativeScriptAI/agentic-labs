import Image from "next/image";

interface ProjectTrustedByProps {
  data: {
    title: string;
    logos: Array<{
      src: string;
      alt: string;
    }>;
  };
}

const ProjectTrustedBy = ({ data }: ProjectTrustedByProps) => {
  return (
    <section className="w-full overflow-hidden ">
      <div className="text-center py-8">
        <span className="section_label text-slate-600 text-center font-sfpro text-xs font-medium leading-3 tracking-[2px] uppercase">
          {data.title}
        </span>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-4 md:gap-8">
          {/* First set of logos */}
          {data.logos.map((item: any, index: number) => {
            return (
              item.src && (
                <div
                  key={`first-${item.alt || index}`}
                  className="flex-shrink-0 flex align-center"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={120}
                    height={48}
                    className="object-contain"
                  />
                </div>
              )
            );
          })}
          {/* Duplicate set for seamless loop */}
          {data.logos.map((item: any, index: number) => {
            return (
              item.src && (
                <div
                  key={`second-${item.alt || index}`}
                  className="flex-shrink-0"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={120}
                    height={48}
                    className="object-contain"
                  />
                </div>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectTrustedBy;
