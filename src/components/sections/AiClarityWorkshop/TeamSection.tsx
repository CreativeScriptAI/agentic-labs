import { Check, ArrowRight } from "lucide-react";
import BracketButton from "src/components/BracketButton";
import OptimizedImage from "src/components/OptimizedImage";

const TeamSection = () => {
  const capabilities = [
    "Built and deployed agentic AI systems",
    "Automate workflows & surface insights",
    "Deliver measurable ROI across industries",
  ];
  return (
    <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#F9F6F4]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="font-geist uppercase font-normal mb-4 sm:mb-6 text-[12px] sm:text-[15px] text-red-500"
            style={{
              letterSpacing: "0.02em",
            }}
          >
            OUR AGENTIC AI LABS TEAM
          </h2>

          <h3
            className="font-alte font-normal text-[#0A1128] text-[26px] sm:text-[32px] md:text-[38px] tracking-[-0.04em]"
            style={{
              lineHeight: "1.2",
            }}
          >
            Real engineers. Real experience. Real results.
          </h3>
        </div>

        {/* Main Content Grid */}
        <div
          className="grid md:grid-cols-2 gap-12 items-center rounded-none p-8 md:p-12 border border-[#e7e6e4]"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-none border border-[#e7e6e4] text-[#0A1128] font-alte font-normal text-xs sm:text-sm tracking-[-0.04em]"
              >
                10+ production AI agents
              </span>
              <span
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-none border border-[#e7e6e4] text-[#0A1128] font-alte font-normal text-xs sm:text-sm tracking-[-0.04em]"
              >
                Core team: 10+ experts
              </span>
            </div>

            {/* Description */}
            <p
              className="font-alte font-normal text-[#0A1128]/80 text-sm sm:text-base tracking-[-0.04em]"
              style={{
                lineHeight: "1.6",
              }}
            >
              Expert team led by the same team that has shipped 10+
              production-level AI agents for real businesses.{" "}
              <strong className="font-alte font-normal text-[#0A1128]">
                10+ production-level AI agents
              </strong>{" "}
              for real businesses.
            </p>

            {/* Capabilities List */}
            <div className="space-y-2 sm:space-y-3 py-3 sm:py-4">
              {capabilities.map((item, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-none bg-emerald-600 flex items-center justify-center">
                    <Check
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white"
                      strokeWidth={3}
                    />
                  </div>
                  <p
                    className="font-alte font-normal text-[#0A1128]/80 text-sm sm:text-base tracking-[-0.04em]"
                    style={{
                      lineHeight: "1.5",
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Statement */}

            {/* Link */}
            <a
              href="#"
              className="inline-flex items-center gap-1.5 sm:gap-2 font-alte font-normal text-blue-600 transition-colors duration-300 py-2 text-sm sm:text-base tracking-[-0.04em]"
            >
              We&apos;ve built it, tested it, and scaled it{" "}
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* CTA Button */}
            <div className="pt-3 sm:pt-4">
              <BracketButton
                label="See all AI Agents we've built"
                href="/"
                variant="primary"
                className="w-full md:w-auto"
              />
              <p
                className="font-alte font-normal text-[#0A1128]/60 mt-2 sm:mt-3 text-center md:text-left text-xs sm:text-sm tracking-[-0.04em]"
              >
                Opens live examples we&apos;ve shipped.
              </p>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden md:flex justify-center items-center">
            <OptimizedImage
              src="/AiClarity/team-illustration.png"
              alt="AI team illustration"
              width={600}
              height={600}
              className="w-full max-w-md h-auto object-contain"
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeamSection;
