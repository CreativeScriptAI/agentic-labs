import { Check, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "src/components/ui/button";
import OptimizedImage from "src/components/OptimizedImage";
    const TeamSection = () => {
  const capabilities = ["Built and deployed agentic AI systems", "Automate workflows & surface insights", "Deliver measurable ROI across industries"];
  return <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-sf-pro font-semibold mb-4 sm:mb-6 text-sm sm:text-base" style={{
          letterSpacing: '0.5px',
          color: '#EF4444',
          fontVariationSettings: "'wdth' 100"
        }}>OUR AGENTIC AI LABS TEAM</h2>
          
          <h3 className="font-sf-pro font-semibold text-foreground text-[26px] sm:text-[32px] md:text-[38px]" style={{
          lineHeight: '1.2',
          fontVariationSettings: "'wdth' 100"
        }}>
            Real engineers. Real experience. Real results.
          </h3>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center rounded-lg p-8 md:p-12 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-muted rounded-full text-foreground font-medium text-xs sm:text-sm" style={{
              fontVariationSettings: "'wdth' 100"
            }}>
                10+ production AI agents
              </span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-muted rounded-full text-foreground font-medium text-xs sm:text-sm" style={{
              fontVariationSettings: "'wdth' 100"
            }}>
                Core team: 10+ experts
              </span>
            </div>

            {/* Description */}
            <p className="text-foreground/80 text-sm sm:text-base" style={{
            lineHeight: '1.6',
            fontVariationSettings: "'wdth' 100"
          }}>Expert team led by the same team that has shipped 10+ production-level AI agents for real businesses.{" "}
              <strong className="font-semibold text-foreground">10+ production-level AI agents</strong>{" "}
              for real businesses.
            </p>

            {/* Capabilities List */}
            <div className="space-y-2 sm:space-y-3 py-3 sm:py-4">
              {capabilities.map((item, index) => <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded bg-green-500 flex items-center justify-center">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-foreground/80 text-sm sm:text-base" style={{
                lineHeight: '1.5',
                fontVariationSettings: "'wdth' 100"
              }}>
                    {item}
                  </p>
                </div>)}
            </div>

            {/* Statement */}
            

            {/* Link */}
            <a href="#" className="inline-flex items-center gap-1.5 sm:gap-2 font-semibold transition-colors duration-300 py-2 text-sm sm:text-base" style={{
            color: '#3B82F6',
            fontVariationSettings: "'wdth' 100"
          }}>
              We&apos;ve built it, tested it, and scaled it <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* CTA Button */}
            <div className="pt-3 sm:pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full md:w-auto px-6 py-5 sm:px-8 sm:py-6 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base" style={{
              fontVariationSettings: "'wdth' 100"
            }}>
              
                See all AI Agents we&apos;ve built <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2" />
              </Button>
              <p className="text-muted-foreground mt-2 sm:mt-3 text-center md:text-left text-xs sm:text-sm" style={{
              fontVariationSettings: "'wdth' 100"
            }}>
                Opens live examples we&apos;ve shipped.
              </p>
            </div>
            
          </div>

          {/* Right Illustration */}
          <div className="hidden md:flex justify-center items-center">
            <OptimizedImage src="/AiClarity/team-illustration.png" alt="AI team illustration" width={600} height={600} className="w-full max-w-md h-auto object-contain" />
          </div>
        </div>
      </div>
    </section>;
};  
export default TeamSection; 