import { FileText, GitBranch, TrendingUp, BarChart3 } from "lucide-react";
import OptimizedImage from "src/components/OptimizedImage";

const ValueSection = () => {
  const values = [{
    icon: <FileText className="text-primary-foreground" size={32} />,
    label: "See the leaks!",
    title: "Workflow Audit",
    description: "Quick X-ray of how your team spends time across operations, sales, and support."
  }, {
    icon: <GitBranch className="text-primary-foreground" size={32} />,
    label: "Bottlenecks marked!",
    title: "AI Fit Check",
    description: "Identify what to automate now, later, or never based on your real workflow."
  }, {
    icon: <TrendingUp className="text-primary-foreground" size={32} />,
    label: "Your next 10x move!",
    title: "ROI Projection",
    description: "See potential time and money savings before touching a single tool."
  }];
  const beforeItems = ["MANUAL CHAOS", "UNCLEAR PRIORITIES", "NO IDEA WHERE TO START"];
  const afterItems = ["CLEAR AUTOMATION ROADMAP", "PRIORITIZED ACTION ITEMS", "CONFIDENCE IN NEXT STEPS"];
  return <section id="value" className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Top Label */}
        <div className="mb-6">
          <p className="text-foreground/60 tracking-wide text-lg">
            In just 30 minutes
          </p>
        </div>

        {/* Main Headline */}
        <div className="mb-6">
          <h2 className="font-sf-pro font-semibold text-foreground text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] max-w-4xl" style={{
          lineHeight: '1.1',
          fontVariationSettings: "'wdth' 100"
        }}>You&apos;ll get clarity that saves 
weeks of confusion.</h2>
        </div>

        {/* Subtext */}
        <div className="mb-12 md:mb-16">
          <p className="text-foreground text-[16px] sm:text-[18px] md:text-[20px] max-w-3xl" style={{
          lineHeight: '1.5'
        }}>In one focused call, we&apos;ll map out how AI fits into your workflow, 
what&apos;s worth automating, and where you&apos;ll see real ROI.</p>
        </div>

        {/* Before/After Visual with Central Image */}
        <div className="relative mb-16">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12">
            {/* Before Section */}
            <div className="flex-1 flex flex-col items-end">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-alert-red text-[24px] font-bold">✗</span>
                <span className="text-foreground/80 text-[18px] font-medium">Before</span>
              </div>
              <div className="space-y-3 text-right">
                {beforeItems.map((item, index) => <p key={index} className="text-foreground/60 text-[14px] uppercase tracking-wide">
                    {item}
                  </p>)}
              </div>
            </div>

            {/* Central Image */}
            <div className="flex-shrink-0 w-[400px] lg:w-[500px]">
              <OptimizedImage 
                src="/images/confusion-clarity-visual.png" 
                alt="Confusion to clarity transformation" 
                width={600} 
                height={600} 
                className="w-full h-auto object-contain" 
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                quality={85}
              />
            </div>

            {/* After Section */}
            <div className="flex-1 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-primary text-[24px] font-bold">✓</span>
                <span className="text-foreground/80 text-[18px] font-medium">After</span>
              </div>
              <div className="space-y-3 text-left">
                {afterItems.map((item, index) => <p key={index} className="text-primary text-[14px] uppercase tracking-wide font-medium">
                    {item}
                  </p>)}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="mb-8">
              <OptimizedImage 
                src="/images/confusion-clarity-visual.png" 
                alt="Confusion to clarity transformation" 
                width={600} 
                height={600} 
                className="w-full h-auto max-w-sm mx-auto object-contain" 
                priority={true}
                sizes="(max-width: 768px) 100vw, 400px"
                quality={85}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {/* Before */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-alert-red text-[20px] font-bold">✗</span>
                  <span className="text-foreground/80 text-[16px] font-medium">Before</span>
                </div>
                <div className="space-y-2">
                  {beforeItems.map((item, index) => <p key={index} className="text-foreground/60 text-[12px] uppercase tracking-wide">
                      {item}
                    </p>)}
                </div>
              </div>

              {/* After */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary text-[20px] font-bold">✓</span>
                  <span className="text-foreground/80 text-[16px] font-medium">After</span>
                </div>
                <div className="space-y-2">
                  {afterItems.map((item, index) => <p key={index} className="text-primary text-[12px] uppercase tracking-wide font-medium">
                      {item}
                    </p>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Cards Grid */}
        <div className="mb-8">
          <p className="text-foreground/70 text-[16px] md:text-[18px] text-center font-normal">
            Here&apos;s what you can expect in the workshop
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {values.map((item, index) => <div key={index} className="rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300" style={{ backgroundColor: '#FFFFFF' }}>
              {/* Red italic label */}
              <p className="text-alert-red italic font-kalam mb-4 text-[14px]">
                {item.label}
              </p>
              
              {/* Blue icon */}
              <div className="bg-primary rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              
              {/* Title */}
              <h3 className="font-semibold text-primary mb-3 text-[18px] md:text-[20px]" style={{
            fontVariationSettings: "'wdth' 100"
          }}>
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground text-[14px] md:text-[15px]" style={{
            lineHeight: '1.5'
          }}>
                {item.description}
              </p>
            </div>)}
        </div>

        {/* Why This Call Matters Box */}
        <div className="rounded-lg p-6 md:p-8 shadow-lg" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <BarChart3 className="text-primary" size={28} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3 text-[18px] md:text-[20px]" style={{
              fontVariationSettings: "'wdth' 100"
            }}>
                Why This Call Matters
              </h3>
              <p className="text-foreground/80 text-[15px] md:text-[16px]" style={{
              lineHeight: '1.6'
            }}>
                Most teams don&apos;t need another AI tool they need a clear roadmap showing where AI fits and what&apos;s worth automating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ValueSection;