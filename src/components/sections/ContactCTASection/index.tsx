import React from "react";
import BracketButton from "src/components/BracketButton";
import ContactSectionBackground from "../../../assets/images/ContactSectionBackground";

const ContactCTASection = () => {
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
          <h2 className="text-center text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#0A1128] leading-[1.2] tracking-[-0.04em] font-alte px-4 mb-2">
            Look, you&apos;ve scrolled this far,
          </h2>
          <div className="text-center text-[28px] sm:text-[34px] lg:text-[40px] font-normal leading-[1.2] text-[#0A1128] tracking-[-0.04em] font-alte px-4 mb-6">
            Clearly you&apos;re curious
          </div>

          <div className="text-center text-[15px] font-normal text-[#0A1128] leading-[1.5] tracking-[-0.04em] font-alte px-4 mb-2">
            Stop guessing about feasibility, cost, or time.
          </div>
          <div className="text-center text-[15px] font-normal text-[#0A1128] leading-[1.5] tracking-[-0.04em] font-alte px-4 mb-2">
            Book the call worst case, you lose 25 minutes.
          </div>
          <div className="text-center text-[15px] font-normal text-[#0A1128] leading-[1.5] tracking-[-0.04em] font-alte px-4 mb-8">
            Best case, you save months.
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex w-full justify-center">
          <BracketButton
            label="Book My Free Roadmap Call"
            href="https://cal.com/ai-aditya/30min"
            variant="primary"
            external
          />
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
