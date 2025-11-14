import OptimizedImage from "src/components/OptimizedImage";
const PainSection = () => {
  return <section className="pt-6 md:pt-10 pb-10 md:pb-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Core Problem Label */}
        <div className="mb-8">
          <p className="text-foreground/60 text-[14px] tracking-wide uppercase">
            Core Problem
          </p>
        </div>

        {/* Main Headline */}
        <h2 className="font-semibold text-foreground mb-12 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] max-w-4xl" style={{
        lineHeight: '1.1',
        fontVariationSettings: "'wdth' 100"
      }}>
          Most teams are <span className="italic font-garamond font-semibold">wasting time</span> on random AI tools that don&apos;t move the needle
        </h2>

        {/* Visual Container with Stopwatch and Pain Points */}
        <div className="relative w-full max-w-5xl mx-auto my-16">
          {/* Central Stopwatch Image */}
          <div className="relative w-full max-w-3xl mx-auto">
            <OptimizedImage src="/images/stopwatch-visual.png" alt="Team members around a stopwatch representing wasted time" width={600} height={600} className="w-full h-auto object-contain" />
          </div>

          {/* Pain Point Callouts */}
          {/* Money Burned - Left */}
          <div className="absolute left-0 top-1/3 -translate-y-1/2 rounded-lg p-4 shadow-lg max-w-[200px] hidden md:block" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="text-2xl mb-2">💸</div>
            <h3 className="font-semibold text-foreground mb-1 text-[14px]">
              Money Burned
            </h3>
            <p className="text-muted-foreground text-[12px] leading-tight">
              Subscriptions to tools you barely use
            </p>
          </div>

          {/* Tool Overload - Top Right */}
          <div className="absolute right-0 top-[15%] rounded-lg p-4 shadow-lg max-w-[200px] hidden md:block" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="text-2xl mb-2">⚠️</div>
            <h3 className="font-semibold text-foreground mb-1 text-[14px]">
              Tool Overload
            </h3>
            <p className="text-muted-foreground text-[12px] leading-tight">
              Too many options, no clear direction
            </p>
          </div>

          {/* Time Wasted - Bottom Right */}
          <div className="absolute right-0 bottom-[15%] rounded-lg p-4 shadow-lg max-w-[200px] hidden md:block" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="text-2xl mb-2">⏰</div>
            <h3 className="font-semibold text-foreground mb-1 text-[14px]">
              Time Wasted
            </h3>
            <p className="text-muted-foreground text-[12px] leading-tight">
              Testing solutions that don&apos;t fit your workflow
            </p>
          </div>
        </div>

        {/* Mobile Pain Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 md:hidden">
          <div className="rounded-lg p-4 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="text-2xl mb-2">💸</div>
            <h3 className="font-semibold text-foreground mb-1 text-[14px]">
              Money Burned
            </h3>
            <p className="text-muted-foreground text-[12px]">
              Subscriptions to tools you barely use
            </p>
          </div>

          <div className="rounded-lg p-4 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="text-2xl mb-2">⚠️</div>
            <h3 className="font-semibold text-foreground mb-1 text-[14px]">
              Tool Overload
            </h3>
            <p className="text-muted-foreground text-[12px]">
              Too many options, no clear direction
            </p>
          </div>

          <div className="rounded-lg p-4 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="text-2xl mb-2">⏰</div>
            <h3 className="font-semibold text-foreground mb-1 text-[14px]">
              Time Wasted
            </h3>
            <p className="text-muted-foreground text-[12px]">
              Testing solutions that don&apos;t fit your workflow
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="max-w-3xl mx-auto">
          <p style={{
          lineHeight: '1.5',
          fontVariationSettings: "'wdth' 100"
        }} className="text-foreground text-[18px] sm:text-[20px] leading-relaxed text-center md:text-xl">
            You don&apos;t need more tools. You need <span className="font-semibold">clarity roadmap</span> that shows where AI fits and what&apos;s worth automating.
          </p>
        </div>
      </div>
    </section>;
};
export default PainSection;