import { Code2, TrendingUp, Globe } from "lucide-react";
import Link from "next/link";
import OptimizedImage from "src/components/OptimizedImage";

const InstructorSection = () => {
  const proofTags = [
    { icon: <Code2 size={20} />, text: "10+ AI agents shipped" },
    { icon: <TrendingUp size={20} />, text: "$250K+ ROI unlocked for clients" },
    {
      icon: <Globe size={20} />,
      text: "Worked with 50+ founders across the globe",
    },
  ];

  return (
    <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="font-sf-pro font-semibold text-foreground mb-4 text-[28px] sm:text-[36px] md:text-[44px]"
            style={{
              lineHeight: "1.1",
              fontVariationSettings: "'wdth' 100",
            }}
          >
            Who&apos;s behind this workshop?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Avatar/Image Placeholder */}
          <div className="flex justify-center">
            <Link
              href="https://www.linkedin.com/in/aditya-pandey-7588021b1"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative flex flex-col items-center cursor-pointer">
                <div
                  className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full p-1 shadow-2xl transition-transform group-hover:scale-105"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <OptimizedImage
                    src="/AiClarity/aditya-photo.png"
                    alt="Aditya - Founder of CreativeScript"
                    width={600}
                    height={600}
                    className="w-full h-full rounded-full object-cover"
                    priority={true}
                    sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 192px"
                    quality={90}
                  />
                </div>
                <div
                  className={`
                    mt-3
                    absolute md:static 
                    left-1/2 md:left-auto 
                    -translate-x-1/2 md:translate-x-0 
                    bottom-0 md:bottom-auto 
                    bg-primary text-primary-foreground 
                    rounded-full font-medium 
                    px-2.5 py-1
                    text-xs sm:text-sm md:text-base 
                    whitespace-nowrap
                    shadow
                    transition-all
                    group-hover:shadow-lg
                  `}
                  style={{
                    minWidth: "max-content",
                    boxSizing: "border-box",
                  }}
                >
                  Designer. Builder. Founder.
                </div>
              </div>
            </Link>
          </div>

          {/* Bio Content */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <p
                className="text-foreground/80 mb-4"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  fontVariationSettings: "'wdth' 100",
                }}
              >
                Hi, I&apos;m{" "}
                <span className="font-semibold text-foreground">Aditya</span> —
                founder of{" "}
                <a
                  href="https://tryagentikai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  Agentic AI Labs
                </a>
                .
              </p>
              <p
                className="text-foreground/70"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  fontVariationSettings: "'wdth' 100",
                }}
              >
                My team and I have shipped 10+ agentic AI systems for real
                businesses automating workflows, surfacing insights, and saving
                hundreds of hours every month.
              </p>
            </div>

            {/* Proof Tags */}
            <div className="space-y-3">
              {proofTags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg p-3"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <div className="text-primary flex-shrink-0">{tag.icon}</div>
                  <span
                    className="text-foreground font-medium"
                    style={{ fontSize: "14px" }}
                  >
                    {tag.text}
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

export default InstructorSection;
