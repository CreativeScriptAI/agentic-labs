import { CheckCircle2, X } from "lucide-react";
const WhoItsForSection = () => {
  const forList = ["Founders scaling without clarity", "Operators stuck in repetitive workflows", "Enterprise leaders exploring AI but unsure where to start", "Anyone serious about using AI practically, not theoretically"];
  const notForList = ["People chasing shiny tools or hype"];
  return <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-sf-pro font-semibold text-foreground mb-4 text-[28px] sm:text-[36px] md:text-[44px]" style={{
          lineHeight: '1.1',
          fontVariationSettings: "'wdth' 100"
        }}>
            For people who don&apos;t have time — but want{" "}
            <span className="relative inline-block">
              <span className="absolute bg-accent-highlight h-[26px] sm:h-[34px] md:h-[40px] left-[-4px] sm:left-[-5px] md:left-[-6px] top-[2px] sm:top-[3px] md:top-[4px] right-[-4px] sm:right-[-5px] md:right-[-6px] z-0"></span>
              <span className="relative z-10">results</span>
            </span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Who It's For */}
          <div className="rounded-lg p-4 sm:p-6 md:p-8 shadow-sm" style={{
          backgroundColor: '#FFFFFF'
        }}>
            <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2 text-[20px] sm:text-[22px] md:text-[24px]" style={{
            fontVariationSettings: "'wdth' 100"
          }}>
              <CheckCircle2 className="text-primary" size={28} />
              Perfect for:
            </h3>
            <ul className="space-y-4">
              {forList.map((item, index) => <li key={index} className="flex items-start gap-3 text-foreground/80" style={{
              fontSize: '16px',
              lineHeight: '1.5'
            }}>
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>)}
            </ul>
          </div>

          {/* Who It's Not For */}
          <div className="rounded-lg p-4 sm:p-6 md:p-8 shadow-sm" style={{
          backgroundColor: '#FFFFFF'
        }}>
            <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2 text-[20px] sm:text-[22px] md:text-[24px]" style={{
            fontVariationSettings: "'wdth' 100"
          }}>
              <X className="text-alert-red" size={28} />
              Not for:
            </h3>
            <ul className="space-y-4">
              {notForList.map((item, index) => <li key={index} className="flex items-start gap-3 text-muted-foreground" style={{
              fontSize: '16px',
              lineHeight: '1.5'
            }}>
                  <X className="text-alert-red flex-shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Emphasis Box */}
        <div className="mt-8 rounded-lg p-6 text-center shadow-sm" style={{
        backgroundColor: '#FFFFFF'
      }}>
          <p className="text-foreground font-medium" style={{
          fontSize: '18px',
          lineHeight: '1.6'
        }}>
            If you&apos;re ready to stop guessing and start{" "}
            <span className="font-semibold text-primary">building with purpose</span>, this workshop is for you.
          </p>
        </div>
      </div>
    </section>;
};
export default WhoItsForSection;