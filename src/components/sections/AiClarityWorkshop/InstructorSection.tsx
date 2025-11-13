import { Code2, TrendingUp, Globe } from "lucide-react";
import OptimizedImage from "src/components/OptimizedImage";

const InstructorSection = () => {
  const proofTags = [
    { icon: <Code2 size={20} />, text: "10+ AI agents shipped" },
    { icon: <TrendingUp size={20} />, text: "$250K+ ROI unlocked for clients" },
    { icon: <Globe size={20} />, text: "Worked with 50+ founders across the globe" },
  ];

  return (
    <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="font-sf-pro font-semibold text-foreground mb-4 text-[28px] sm:text-[36px] md:text-[44px]"
            style={{ 
              lineHeight: '1.1',
              fontVariationSettings: "'wdth' 100"
            }}
          >
            Who&apos;s behind this workshop?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Avatar/Image Placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full p-1 shadow-2xl" style={{ backgroundColor: '#FFFFFF' }}>
                <OptimizedImage 
                  src="/AiClarity/aditya-photo.png" 
                  alt="Aditya - Founder of CreativeScript" 
                  width={600}
                  height={600}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 sm:px-4 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
                Designer. Builder. Founder.
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <p 
                className="text-foreground/80 mb-4"
                style={{ 
                  fontSize: '18px',
                  lineHeight: '1.6',
                  fontVariationSettings: "'wdth' 100"
                }}
              >
                Hi, I&apos;m{" "}
                <span className="font-semibold text-foreground">Aditya</span> — founder of{" "}
                <a 
                  href="https://tryagentikai.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  Agentic AI Labs
                </a>.
              </p>
              <p 
                className="text-foreground/70"
                style={{ 
                  fontSize: '16px',
                  lineHeight: '1.6',
                  fontVariationSettings: "'wdth' 100"
                }}
              >
                My team and I have shipped 10+ agentic AI systems for real businesses — automating workflows, surfacing insights, and saving hundreds of hours every month.
              </p>
            </div>

            {/* Proof Tags */}
            <div className="space-y-3">
              {proofTags.map((tag, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 rounded-lg p-3"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <div className="text-primary flex-shrink-0">
                    {tag.icon}
                  </div>
                  <span 
                    className="text-foreground font-medium"
                    style={{ fontSize: '14px' }}
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
