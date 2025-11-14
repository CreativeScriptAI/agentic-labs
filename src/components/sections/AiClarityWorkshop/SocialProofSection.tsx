import { Quote, Play } from "lucide-react";
import Image from "next/image";

const SocialProofSection = () => {
  const testimonials = [
    {
      type: "text",
      quote: "Found our biggest bottleneck in 20 minutes.",
      industry: "SaaS Founder"
    },
    {
      type: "video",
      videoUrl: "", // Placeholder for video URL
      thumbnail: "", // Placeholder for video thumbnail
      quote: "This workshop changed how we think about AI",
      industry: "Fintech Founder"
    },
    {
      type: "text",
      quote: "Finally understood where AI could actually help.",
      industry: "Operations Director"
    },
    {
      type: "video",
      videoUrl: "", // Placeholder for video URL
      thumbnail: "", // Placeholder for video thumbnail
      quote: "Clear, actionable insights in under 30 minutes",
      industry: "Healthcare CEO"
    },
    {
      type: "text",
      quote: "Practical insights, zero fluff.",
      industry: "Enterprise Leader"
    },
    {
      type: "video",
      videoUrl: "", // Placeholder for video URL
      thumbnail: "", // Placeholder for video thumbnail
      quote: "The ROI was immediate and measurable",
      industry: "E-commerce Director"
    }
  ];
  const industries = ["SaaS", "Fintech", "Healthcare", "Web3", "E-commerce", "Real Estate"];
  return <section id="proof" className="py-10 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-sf-pro font-semibold text-foreground mb-4 text-[28px] sm:text-[36px] md:text-[44px]" style={{
          lineHeight: '1.1',
          fontVariationSettings: "'wdth' 100"
        }}>
            We&apos;ve helped teams find clarity across{" "}
            <span className="relative inline-block">
              <span className="absolute bg-accent-highlight/30 h-full left-[-4px] top-0 right-[-4px] z-0 rounded"></span>
              <span className="relative z-10">industries</span>
            </span>.
          </h2>
          <p className="text-muted-foreground mt-4 text-[16px] sm:text-[17px] md:text-[18px]" style={{
          fontVariationSettings: "'wdth' 100"
        }}>
            From SaaS and fintech to healthcare and Web3 our audits have uncovered{" "}
            <span className="font-semibold text-foreground">$100K+ in hidden ROI</span>.
          </p>
        </div>

        {/* Testimonials Wall - Mixed Text & Video */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              {item.type === "video" ? (
                <div className="relative">
                  {/* Video Thumbnail Container */}
                  <div className="relative aspect-video bg-muted flex items-center justify-center group cursor-pointer">
                    {item.thumbnail ? (
                      <Image
                        width={600}
                        height={600}
                        src={item.thumbnail}
                        alt={`${item.industry} testimonial`}
                        className="w-full h-full object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={85}
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-muted to-muted/50">
                        <span className="text-muted-foreground text-sm">Video Placeholder</span>
                      </div>
                    )}
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="text-primary-foreground ml-1" size={28} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  {/* Video Testimonial Text */}
                  <div className="p-4 sm:p-6">
                    <Quote className="text-primary mb-3" size={24} />
                    <p className="text-foreground italic font-garamond mb-3 text-[15px] sm:text-[16px]" style={{ lineHeight: '1.5' }}>
                      &quot;{item.quote}&quot;
                    </p>
                    <p className="text-muted-foreground font-mondwest" style={{ fontSize: '14px' }}>
                      — {item.industry}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-4 sm:p-6">
                  <Quote className="text-primary mb-4" size={32} />
                  <p className="text-foreground italic font-garamond mb-4 text-[16px] sm:text-[17px] md:text-[18px]" style={{ lineHeight: '1.5' }}>
                    &quot;{item.quote}&quot;
                  </p>
                  <p className="text-muted-foreground font-mondwest" style={{ fontSize: '14px' }}>
                    — {item.industry}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Industries Badge */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4" style={{
          fontSize: '14px',
          fontVariationSettings: "'wdth' 100"
        }}>
            Trusted across industries:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => <span key={index} className="rounded-full px-4 py-2 text-foreground shadow-sm" style={{ 
            backgroundColor: '#FFFFFF',
            fontSize: '14px',
            fontVariationSettings: "'wdth' 100"
          }}>
                {industry}
              </span>)}
          </div>
        </div>

        {/* ROI Callout */}
        
      </div>
    </section>;
};
export default SocialProofSection;