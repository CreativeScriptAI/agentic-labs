import { Users } from "lucide-react";
import BracketButton from "src/components/BracketButton";
import ctaLinks from "src/constants/cta-links";

const FinalCTA = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2
          className="font-alte font-normal text-[#0A1128] mb-6 text-[32px] sm:text-[40px] md:text-[48px] tracking-[-0.04em]"
          style={{
            lineHeight: '1.2'
          }}
        >
          You&apos;re one call away from{" "}
          <span className="relative inline-block">
            <span className="absolute bg-[#FCCA07] h-[30px] sm:h-[38px] md:h-[48px] left-[-4px] sm:left-[-6px] md:left-[-8px] top-[3px] sm:top-[5px] md:top-[6px] right-[-4px] sm:right-[-6px] md:right-[-8px] z-0"></span>
            <span className="relative z-10">clarity</span>
          </span>.
        </h2>

        <p
          className="font-alte font-normal text-[#0A1128]/60 mb-8 text-[17px] sm:text-[19px] md:text-[20px] tracking-[-0.04em]"
        >
          No buzzwords. No upsells. Just 30 minutes of practical insight.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <BracketButton
            label="Book Your Free AI Clarity Workshop"
            href={ctaLinks.aiClarityWorkshop}
            variant="primary"
            external
            className="w-full sm:w-auto"
          />
        </div>

        <p
          className="mt-4 font-alte font-normal text-[#0A1128]/60 flex items-center justify-center gap-2 tracking-[-0.04em]"
          style={{ fontSize: '14px' }}
        >
          <Users size={18} className="text-[#0A1128]/60 shrink-0" />
          Join 50+ founders who found where their business leaks time and money.
        </p>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 font-alte font-normal text-[#0A1128]/60 tracking-[-0.04em]" style={{ fontSize: '14px' }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>60 seconds to book</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>Zero pressure</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
