import { MapPin, Lightbulb, Puzzle } from "lucide-react";
import BracketButton from "src/components/BracketButton";
import ctaLinks from "src/constants/cta-links";

const WorkshopSection = () => {
  return (
    <section className="w-full bg-[#F9F6F4] py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Block */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-alte font-normal text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] text-[#0A1128] mb-6 leading-[1.2] tracking-[-0.04em]">
            From confusion to{" "}
            <span className="relative inline-block">
              clarity
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 200 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 7C50 3 150 3 198 7"
                  stroke="#0062FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {" "}in one session.
          </h2>
          <p className="font-alte font-normal text-[#0A1128]/60 text-[16px] sm:text-[17px] md:text-[18px] max-w-[750px] mx-auto leading-[1.5] tracking-[-0.04em]">
            Each workshop uncovers hidden inefficiencies, defines what to automate, and gives founders a working game plan not another &quot;AI brainstorm.&quot;
          </p>
        </div>

        {/* Video Block */}
        <div className="relative w-full max-w-[1000px] mx-auto mb-16 md:mb-20">
          <div
            className="relative w-full rounded-none overflow-hidden border border-[#e7e6e4]"
            style={{ paddingBottom: '56.25%' }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/jFnRKUxFBHI"
              title="Founder Workshop"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Text Block - Two Columns */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-16 md:items-center">
          {/* Left Column */}
          <div className="space-y-4">
            <h3 className="font-alte font-normal text-[24px] sm:text-[26px] md:text-[28px] text-[#0A1128] leading-[1.2] tracking-[-0.04em]">
              Every great product starts with a whiteboard moment.
            </h3>
            <p className="font-alte font-normal text-[#0A1128]/60 text-[16px] sm:text-[17px] leading-[1.5] tracking-[-0.04em]">
              These workshops help founders uncover hidden inefficiencies and identify what&apos;s
              worth automating first before a single line of code.
            </p>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-5">
            <div className="flex items-center gap-4 md:justify-end group">
              <div className="w-12 h-12 rounded-none border border-[#e7e6e4] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <span className="font-alte font-normal text-[#0A1128] text-[16px] sm:text-[17px] tracking-[-0.04em]">
                50+ Founder Workshops
              </span>
            </div>
            <div className="flex items-center gap-4 md:justify-end group">
              <div className="w-12 h-12 rounded-none border border-[#e7e6e4] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <span className="font-alte font-normal text-[#0A1128] text-[16px] sm:text-[17px] tracking-[-0.04em]">
                $100K+ Savings Identified
              </span>
            </div>
            <div className="flex items-center gap-4 md:justify-end group">
              <div className="w-12 h-12 rounded-none border border-[#e7e6e4] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <Puzzle className="w-6 h-6 text-blue-600" />
              </div>
              <span className="font-alte font-normal text-[#0A1128] text-[16px] sm:text-[17px] tracking-[-0.04em]">
                10+ AI Systems Built
              </span>
            </div>
          </div>
        </div>

        {/* CTA Block */}
        <div className="text-center pt-4 flex flex-col items-center gap-4">
          <p className="font-alte font-normal text-[#0A1128] text-[17px] sm:text-[18px] md:text-[19px] tracking-[-0.04em]">
            Want your own clarity workshop?
          </p>
          <BracketButton
            label="Book Free Call"
            href={ctaLinks.aiClarityWorkshop}
            variant="primary"
            external
          />
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
