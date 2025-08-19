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
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1600px] max-w-none pointer-events-none select-none opacity-70">
        <EllipseBackground />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center py-16 sm:py-20">
            <h1 className="text-center font-mondwest text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight mb-8">
              Our Services
            </h1>
            <p className="text-center font-sfpro text-slate-600 font-light text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl px-2">
              We combine{" "}
              <span className="text-blue-600 font-medium">AI tech</span> with{" "}
              <span className="text-blue-600 font-medium">
                human intelligence and empathy
              </span>{" "}
              to ship agents people actually trust and teams rely on. We wire it
              to your stack, test on real traffic, watch the KPI, and keep it
              improving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHeroSection;
