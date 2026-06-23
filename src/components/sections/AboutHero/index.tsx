import React from "react";
import EllipseBackground from "src/assets/images/EllipseBackground";

const AboutHero: React.FC = () => {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
        paddingTop: "192px",
      }}
    >
      {/* Ellipse backdrop */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1600px] max-w-none pointer-events-none select-none opacity-70">
        <EllipseBackground />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center py-16 sm:py-20">
            <h1 className="text-center font-alte font-normal text-3xl sm:text-5xl lg:text-6xl text-[#0A1128] leading-[1.2] tracking-[-0.04em] mb-6">
              About Agentic AI Labs
            </h1>
            <p className="text-center font-alte font-normal text-[#0A1128]/70 text-base sm:text-lg lg:text-xl leading-[1.5] tracking-[-0.04em] max-w-3xl px-2">
              We&apos;re the{" "}
              <span className="text-blue-600">
                lab that turns AI into outcomes
              </span>
              . You shouldn&apos;t have to become an AI expert to get ahead with
              it, so we build the systems that do the work, run them on your real
              traffic, and keep them working.{" "}
              <span className="text-blue-600">
                Make AI work. So you don&apos;t have to.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
