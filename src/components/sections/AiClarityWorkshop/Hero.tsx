import { Button } from "src/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen h-full overflow-hidden pt-36 sm:pt-20 pb-6 sm:pb-2 px-0 sm:px-6 md:px-8 flex items-start justify-center">
      <style>{`
        @keyframes drawPath {
          from {
            stroke-dashoffset: 1200;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .animated-path {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: drawPath 2.5s ease-out forwards;
          animation-delay: 0.3s;
        }
        @media (prefers-reduced-motion: reduce) {
          .animated-path {
            animation: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-highlight/10 rounded-full blur-3xl animate-float"
          style={{
            animationDelay: "2s",
          }}
        ></div>
      </div>

      <div className="mx-auto w-full px-0 sm:px-6 md:px-8 h-full">
        {/* Horizontal Layout: Text Left, Image Right on Desktop */}
        <div className="relative max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-12 h-full">
          {/* Left Content: Headline, Subtext, and CTA */}
          <div className="flex-1 lg:max-w-[580px] h-full">
            <div className="flex flex-col justify-between h-full gap-12 lg:gap-20">
              <div className="flex flex-col gap-2">
                {/* Tagline */}
                <p className="text-foreground/70 mb-0  text-[13px] sm:text-[14px] md:text-[16px] font-normal px-4 sm:px-0">
                  Get AI Clarity in 30 Minutes
                </p>

                {/* Headline and Subtext */}
                <div className="mb-3 sm:mb-4 px-4 sm:px-0">
                  <h1
                    className="font-semibold text-foreground text-[30px] sm:text-[38px] md:text-[48px] lg:text-[56px] mb-3 sm:mb-4"
                    style={{
                      lineHeight: "1.1",
                      letterSpacing: "-0.025em",
                    }}
                    aria-label="You're losing time and money on the same repetitive work"
                  >
                    You&apos;re losing time &amp; money on the same repetitive
                    work.
                  </h1>

                  <p
                    className="text-foreground/75 text-[15px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-6 max-w-[520px]"
                    style={{
                      lineHeight: "1.5",
                    }}
                  >
                    In this free 30-minute AI Clarity Workshop, we&apos;ll show
                    exactly where AI can save you hours and how to make it work.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="w-full max-w-[520px] px-4 sm:px-0">
                {/* Small note above CTA */}
                <div className="mb-3 sm:mb-2 text-left sm:text-right">
                  <p className="text-[#717182] kalam-regular text-sm sm:text-base md:text-xl">
                    Takes 60 seconds to book.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="w-full mx-auto flex">
                  <Button
                    className="flex-1 min-w-0 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 !rounded-2xl font-semibold text-lg sm:text-xl lg:text-2xl py-4 sm:py-5 px-6 sm:px-10"
                    aria-label="Book your free 30-minute AI Clarity Workshop"
                  >
                    Book Free AI Clarity Workshop
                  </Button>
                </div>

                {/* Trust Line */}
                <div className="text-left max-w-sm mt-3">
                  <p className="kalam-regular text-[#717182] text-sm sm:text-base md:text-xl">
                    Trusted by 50+ founders | Built 10+ production-grade AI
                    systems
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content: Hero Image */}
          <div className="relative w-full lg:flex-1 mt-10 lg:mt-0 flex justify-center lg:justify-end h-full">
            <div className="relative w-full flex justify-center lg:block">
              <Image
                src="/AiClarity/vector-group.svg"
                alt="AI workflow diagram showing repetitive reports, manual data entry, and missed follow-ups"
                width={600}
                height={600}
                className="w-[88%] max-w-[360px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[600px] h-auto object-contain mb-12 lg:mb-24 lg:absolute lg:inset-0 lg:-translate-x-[35%] lg:top-1/2 lg:-translate-y-2/3"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
