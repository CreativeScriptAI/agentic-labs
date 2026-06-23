import Image from "next/image";
import BracketButton from "src/components/BracketButton";
import ctaLinks from "src/constants/cta-links";

const Hero = () => {

  return (
    <section className="relative  h-full overflow-hidden pt-32 sm:pt-20 pb-6 sm:pb-2 px-0 sm:px-6 md:px-8 flex items-start justify-center">
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
      <div className="mx-auto w-full px-0 sm:px-6 md:px-8 h-full">
        {/* Horizontal Layout: Text Left, Image Right on Desktop */}
        <div className="relative max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-12 h-full">
          {/* Left Content: Headline, Subtext, Image (mobile), and CTA */}
          <div className="flex-1 lg:max-w-[580px] h-full">
            <div className="flex flex-col justify-between h-full gap-0 md:gap-8">
              {/* Heading and Main Text Section */}
              <div className="flex flex-col gap-2">
                {/* Tagline */}
                <p className="font-geist uppercase tracking-[0.02em] text-[#040f20b3] mb-0 text-[12px] font-normal px-4 sm:px-0">
                  Get AI Clarity in 30 Minutes
                </p>

                {/* Headline and Subtext */}
                <div className=" sm:mb-4 px-4 sm:px-0">
                  <h1
                    className="font-alte font-normal text-[#0A1128] text-[30px] sm:text-[38px] md:text-[48px] lg:text-[56px] mb-3 sm:mb-4"
                    style={{
                      lineHeight: "1.2",
                      letterSpacing: "-0.04em",
                    }}
                    aria-label="You're losing time and money on the same repetitive work"
                  >
                    You&apos;re losing time &amp; money on the same repetitive
                    work.
                  </h1>

                  <p
                    className="font-alte font-normal text-[#0A1128]/75 text-[15px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-6 max-w-[520px] tracking-[-0.04em]"
                    style={{
                      lineHeight: "1.5",
                    }}
                  >
                    In this free 30-minute AI Clarity Workshop, we&apos;ll show
                    exactly where AI can save you hours and how to make it work.
                  </p>
                </div>
              </div>

              {/* Image - Mobile Only (between heading and CTA) */}
              <div className="relative w-full lg:hidden flex justify-center px-4 sm:px-0">
                <div className="relative w-full" style={{ aspectRatio: '1 / 1', maxWidth: '600px' }}>
                  <Image
                    src="/AiClarity/vector-group.svg"
                    alt="AI workflow diagram showing repetitive reports, manual data entry, and missed follow-ups"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, 600px"
                    quality={90}
                  />
                </div>
              </div>

              {/* CTA Section */}
              <div className="w-full max-w-[520px] px-4 sm:px-0">
                {/* Small note above CTA */}
                <div className="text-left mb-2">
                  <p className="font-alte font-normal text-[#0A1128]/60 italic text-[12px] tracking-[-0.04em]">
                    Takes 60 seconds to book.
                  </p>
                </div>

                {/* CTA Button */}
                <BracketButton
                  label="Book Your Free AI Clarity Workshop"
                  href={ctaLinks.aiClarityWorkshop}
                  variant="primary"
                  external
                  className="w-full"
                />

                {/* Trust Line */}
                <div className="mt-2 sm:mt-3 text-left">
                  <p className="font-alte font-normal text-[#0A1128]/65 italic text-[11px] sm:text-[12px] md:text-[13px] leading-relaxed tracking-[-0.04em]">
                    Trusted by 50+ founders | Built 10+ production-grade AI systems
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content: Hero Image - Desktop Only */}
          <div className="hidden lg:block relative lg:flex-1 h-full">
            <div className="relative w-full h-full" style={{ aspectRatio: '1 / 1', minHeight: '500px' }}>
              <Image
                src="/AiClarity/vector-group.svg"
                alt="AI workflow diagram showing repetitive reports, manual data entry, and missed follow-ups"
                width={1300}
                height={1300}
                className="w-full h-full object-contain lg:absolute lg:inset-0 lg:-translate-x-[20%] lg:top-1/2 lg:-translate-y-2/4 lg:scale-110"
                priority
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 80vw, 1300px"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
