import { MapPin, Lightbulb, Puzzle } from "lucide-react";
import { Button } from "src/components/ui/button";

const WorkshopSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-background to-gray-50/50 py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Block */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-bold text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] text-foreground mb-6 leading-tight">
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
                  stroke="hsl(var(--primary))"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {" "}in one session.
          </h2>
          <p className="text-muted-foreground text-[16px] sm:text-[17px] md:text-[18px] max-w-[750px] mx-auto leading-relaxed">
            Each workshop uncovers hidden inefficiencies, defines what to automate, and gives founders a working game plan — not another &quot;AI brainstorm.&quot;
          </p>
        </div>

        {/* Video Block */}
        <div className="relative w-full max-w-[1000px] mx-auto mb-16 md:mb-20">
          <div 
            className="relative w-full rounded-3xl overflow-hidden shadow-2xl"
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
            <h3 className="font-bold text-[24px] sm:text-[26px] md:text-[28px] text-foreground leading-tight">
              Every great product starts with a whiteboard moment.
            </h3>
            <p className="text-muted-foreground text-[16px] sm:text-[17px] leading-relaxed">
              These workshops help founders uncover hidden inefficiencies and identify what&apos;s 
              worth automating first — before a single line of code.
            </p>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-5">
            <div className="flex items-center gap-4 md:justify-end group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <span className="text-foreground text-[16px] sm:text-[17px] font-semibold">
                50+ Founder Workshops
              </span>
            </div>
            <div className="flex items-center gap-4 md:justify-end group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <span className="text-foreground text-[16px] sm:text-[17px] font-semibold">
                $100K+ Savings Identified
              </span>
            </div>
            <div className="flex items-center gap-4 md:justify-end group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <Puzzle className="w-6 h-6 text-primary" />
              </div>
              <span className="text-foreground text-[16px] sm:text-[17px] font-semibold">
                10+ AI Systems Built
              </span>
            </div>
          </div>
        </div>

        {/* CTA Block */}
        <div className="text-center pt-4">
          <p className="text-foreground text-[17px] sm:text-[18px] md:text-[19px] font-medium">
            Want your own clarity workshop?{" "}
            <Button 
              variant="link" 
              className="text-primary font-bold p-0 h-auto hover:underline underline-offset-4 text-[17px] sm:text-[18px] md:text-[19px] inline-flex items-center gap-1 transition-gap duration-300 hover:gap-2"
            >
              Book Free Call 
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
