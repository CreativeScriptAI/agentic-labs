import Image from "next/image";
import Marquee from "react-fast-marquee";

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
    <section className="section text-center">
      <span className="section_label text-slate-600 text-center font-sfpro text-xs font-medium leading-3 tracking-[2px] uppercase">{data.title}</span>
      <Marquee
        gradient={false}
        speed={60}
        style={{ whiteSpace: "nowrap" }}
        loop={0}
      >
        {data.logos.map((item: any) => {
          return (
            item.src && (
              <Image
                src={item.src}
                alt={item.alt}
                width={120}
                height={48}
                className="mx-6 md:mx-12"
                key={item.alt}
              />
            )
          );
        })}
      </Marquee>
    </section>
  );
};

export default ProjectTrustedBy;
