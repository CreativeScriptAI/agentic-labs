import Image from "next/image";

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
  const isVideo = data.heroImage.endsWith(".mp4");
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
      <div className="flex flex-col items-center gap-5 md:gap-6">
        {isVideo ? (
          <video
            className="w-full max-w-[440px] rounded-lg"
            autoPlay
            loop
            muted
          >
            <source src={data.heroImage} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={data.heroImage}
            alt="Hero Image"
            width={440}
            height={440}
          />
        )}
        <ul className="flex flex-col items-center md:flex-row md:items-start gap-2 md:gap-4 text-xs md:text-sm text-slate-800 font-medium">
          {data.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
              >
                <path
                  d="M9.03409 19.0342C14.0235 19.0342 18.0682 14.9895 18.0682 10.0001C18.0682 5.0107 14.0235 0.966003 9.03409 0.966003C4.0447 0.966003 0 5.0107 0 10.0001C0 14.9895 4.0447 19.0342 9.03409 19.0342Z"
                  fill="#0062FF"
                />
                <path
                  d="M13.0994 7.2901L7.50733 12.4666L4.96875 10.1178"
                  stroke="white"
                  strokeWidth="1.80682"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{benefit.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectHero;
