import { Button } from "src/components/ui/button";
import { Calendar, Users } from "lucide-react";
import Link from "next/link";
import ctaLinks from "src/constants/cta-links";

const FinalCTA = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 
          className="font-sf-pro font-semibold text-foreground mb-6 text-[32px] sm:text-[40px] md:text-[48px]"
          style={{ 
            lineHeight: '1.1',
            fontVariationSettings: "'wdth' 100"
          }}
        >
          You&apos;re one call away from{" "}
          <span className="relative inline-block">
            <span className="absolute bg-accent-highlight h-[30px] sm:h-[38px] md:h-[48px] left-[-4px] sm:left-[-6px] md:left-[-8px] top-[3px] sm:top-[5px] md:top-[6px] right-[-4px] sm:right-[-6px] md:right-[-8px] z-0"></span>
            <span className="relative z-10">clarity</span>
          </span>.
        </h2>

        <p 
          className="text-muted-foreground mb-8 text-[17px] sm:text-[19px] md:text-[20px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          No buzzwords. No upsells. Just 30 minutes of practical insight.
        </p>

        {/* CTA Button */}
        <Button 
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 w-full sm:w-auto text-[16px] sm:text-[17px] md:text-[18px]"
          size="lg"
          style={{ 
            padding: '16px 32px',
            fontVariationSettings: "'wdth' 100" 
          }}
        >
          <Link href={ctaLinks.aiClarityWorkshop} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <Calendar className="mr-2" size={22} />
            Book Your Free AI Clarity Workshop
          </Link>
        </Button>

        <p 
          className="mt-4 text-muted-foreground flex items-center justify-center gap-2"
          style={{ fontSize: '14px' }}
        >
          <Users size={18} className="text-muted-foreground shrink-0" />
          Join 50+ founders who found where their business leaks time and money.
        </p>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-muted-foreground" style={{ fontSize: '14px' }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>60 seconds to book</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Zero pressure</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
