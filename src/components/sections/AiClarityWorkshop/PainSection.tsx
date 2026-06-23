import OptimizedImage from "src/components/OptimizedImage";
const PainSection = () => {
  return <section className="pt-6 md:pt-10 pb-10 md:pb-16 px-4 sm:px-6 lg:px-8 bg-[#F9F6F4]">
      <div className="max-w-6xl mx-auto">
        {/* Core Problem Label */}
        <div className="mb-8">
          <p className="font-geist text-red-500 text-[12px] tracking-[0.02em] uppercase font-normal">
            Core Problem
          </p>
        </div>

        {/* Main Headline */}
        <h2 className="font-alte font-normal text-[#0A1128] mb-12 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] max-w-4xl tracking-[-0.04em]" style={{
        lineHeight: '1.2'
      }}>
          Most teams are <span className="italic font-alte font-normal">wasting time</span> on random AI tools that don&apos;t move the needle
        </h2>

        {/* Visual Container with Stopwatch and Pain Points */}
        <div className="relative w-full max-w-5xl mx-auto my-16">
          {/* Central Stopwatch Image */}
          <div className="relative w-full max-w-3xl mx-auto">
            <OptimizedImage 
              src="/images/stopwatch-visual.png" 
              alt="Team members around a stopwatch representing wasted time" 
              width={600} 
              height={600} 
              className="w-full h-auto object-contain" 
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 600px"
              quality={85}
            />
          </div>

          {/* Pain Point Callouts */}
          {/* Money Burned - Left */}
          <div className="absolute left-0 top-1/3 -translate-y-1/2 rounded-none p-4 border border-[#e7e6e4] max-w-[200px] hidden md:block" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="text-2xl mb-2">💸</div>
            <h3 className="font-alte font-normal text-[#0A1128] mb-1 text-[14px]">
              Money Burned
            </h3>
            <p className="font-alte font-normal text-[#0A1128]/60 text-[12px] leading-tight tracking-[-0.04em]">
              Subscriptions to tools you barely use
            </p>
          </div>

          {/* Tool Overload - Top Right */}
          <div className="absolute right-0 top-[15%] rounded-none p-4 border border-[#e7e6e4] max-w-[200px] hidden md:block" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="text-2xl mb-2">⚠️</div>
            <h3 className="font-alte font-normal text-[#0A1128] mb-1 text-[14px]">
              Tool Overload
            </h3>
            <p className="font-alte font-normal text-[#0A1128]/60 text-[12px] leading-tight tracking-[-0.04em]">
              Too many options, no clear direction
            </p>
          </div>

          {/* Time Wasted - Bottom Right */}
          <div className="absolute right-0 bottom-[15%] rounded-none p-4 border border-[#e7e6e4] max-w-[200px] hidden md:block" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="text-2xl mb-2">⏰</div>
            <h3 className="font-alte font-normal text-[#0A1128] mb-1 text-[14px]">
              Time Wasted
            </h3>
            <p className="font-alte font-normal text-[#0A1128]/60 text-[12px] leading-tight tracking-[-0.04em]">
              Testing solutions that don&apos;t fit your workflow
            </p>
          </div>
        </div>

        {/* Mobile Pain Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 md:hidden">
          <div className="rounded-none p-4 border border-[#e7e6e4]" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="text-2xl mb-2">💸</div>
            <h3 className="font-alte font-normal text-[#0A1128] mb-1 text-[14px]">
              Money Burned
            </h3>
            <p className="font-alte font-normal text-[#0A1128]/60 text-[12px] tracking-[-0.04em]">
              Subscriptions to tools you barely use
            </p>
          </div>

          <div className="rounded-none p-4 border border-[#e7e6e4]" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="text-2xl mb-2">⚠️</div>
            <h3 className="font-alte font-normal text-[#0A1128] mb-1 text-[14px]">
              Tool Overload
            </h3>
            <p className="font-alte font-normal text-[#0A1128]/60 text-[12px] tracking-[-0.04em]">
              Too many options, no clear direction
            </p>
          </div>

          <div className="rounded-none p-4 border border-[#e7e6e4]" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="text-2xl mb-2">⏰</div>
            <h3 className="font-alte font-normal text-[#0A1128] mb-1 text-[14px]">
              Time Wasted
            </h3>
            <p className="font-alte font-normal text-[#0A1128]/60 text-[12px] tracking-[-0.04em]">
              Testing solutions that don&apos;t fit your workflow
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="max-w-3xl mx-auto">
          <p style={{
          lineHeight: '1.5'
        }} className="font-alte font-normal text-[#0A1128] text-[18px] sm:text-[20px] leading-relaxed text-center md:text-xl tracking-[-0.04em]">
            You don&apos;t need more tools. You need <span className="font-alte font-normal text-blue-600">clarity roadmap</span> that shows where AI fits and what&apos;s worth automating.
          </p>
        </div>
      </div>
    </section>;
};
export default PainSection;