import React from "react";
import EllipseBackground from "src/assets/images/EllipseBackground";

const ServicesHeroSection: React.FC = () => {
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
      {/* <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1600px] max-w-none pointer-events-none select-none opacity-70">
        <EllipseBackground />
      </div> */}

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center py-16 sm:py-20">
            <h1 className="text-center font-alte font-normal text-4xl sm:text-5xl lg:text-6xl text-[#0A1128] leading-[1.2] tracking-[-0.04em] mb-8">
              Outcomes, ready or built for you.
            </h1>
            <p className="text-center font-alte font-normal text-slate-600 text-lg sm:text-xl lg:text-2xl leading-[1.5] tracking-[-0.04em] max-w-4xl px-2">
              Tell us the outcome you want. We&apos;ve either{" "}
              <span className="text-blue-600">already built it</span>,
              or we{" "}
              <span className="text-blue-600">
                build it around your business
              </span>
              . Either way you get AI that works on real customers, not a demo
              that breaks the moment one shows up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHeroSection;
