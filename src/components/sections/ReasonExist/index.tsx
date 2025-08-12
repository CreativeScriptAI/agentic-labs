import React from "react";

const ReasonExist: React.FC = () => {
  return (
    <section
      className="py-20 sm:py-24"
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
        backgroundImage: "url(/images/bg.svg)",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[11px] sm:text-xs tracking-widest text-red-500 uppercase mb-4">
          Reason Why We Exist
        </p>
        <p className="text-xl sm:text-2xl font-sfpro text-slate-400 font-light leading-tight mb-6">
          <span className="text-slate-900 text-xl sm:text-2xl leading-9 sm:leading-10">
            Founders already know what to build.
          </span>{" "}
          <span>
            The gap is shipping fast and making it work in the real world.
            Tutorials are easy. Production is hard. Most AI tools promise magic.
            They get you a demo, not a dependable system. Production needs human
            judgment, real integrations, edge-case handling, and thoughtful UX.
          </span>
        </p>
      </div>
    </section>
  );
};

export default ReasonExist;
