import React from "react";
import ContactSectionBackground from "../../../assets/images/ContactSectionBackground";

const ContactCTASection = () => {
  const handleBookCall = () => {
    // Scroll to the top where the Calendly widget is located
    // window.scrollTo({ top: 0, behavior: "smooth" });
    window.open(
      "https://calendly.com/creative-script/30min?month=2024-01",
      "_blank"
    );
  };

  return (
    <div
      className="relative py-12 sm:py-16 lg:py-20"
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-center text-[20px] font-normal text-[#1E293B] tracking-[-0.8px] font-sfpro px-4 mb-2">
            Look, you&apos;ve scrolled this far,
          </h2>
          <div className="text-center text-xl sm:text-2xl lg:text-[32px] font-mondwest leading-tight text-[#0A1128] tracking-[-0.32px] lg:tracking-[-0.64px] font-sfpro px-4 mb-6">
            Clearly you&apos;re curious
          </div>

          <div className="text-center text-lg sm:text-xl lg:text-[24px] font-normal text-slate-800 font-sfpro px-4 mb-2">
            Stop guessing about feasibility, cost, or time.
          </div>
          <div className="text-center text-lg sm:text-xl lg:text-[24px] font-normal text-slate-800 font-sfpro px-4 mb-2">
            Book the call worst case, you lose 25 minutes.
          </div>
          <div className="text-center text-lg sm:text-xl lg:text-[24px] font-normal font-[500] text-slate-800 font-sfpro px-4 mb-8">
            Best case, you save months.
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex w-full justify-center">
          <button
            onClick={handleBookCall}
            className="bg-blue-600 text-white font-medium py-4 px-8 text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
          >
            Book My Free Roadmap Call
          </button>
        </div>
      </div>

      {/* Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
        <ContactSectionBackground />
      </div>
    </div>
  );
};

export default ContactCTASection;
