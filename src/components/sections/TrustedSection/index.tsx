import React from "react";
import Image from "next/image";

const TrustedSection = () => {
  const companies = [
    { name: "How Radio Works", logo: "/images/trusted/howradio.png" },
    { name: "Estu", logo: "/images/trusted/estu.png" },
    { name: "Season of Ink", logo: "/images/trusted/seasonofink.png" },
    { name: "Haavi", logo: "/images/trusted/haavi.png" },
    { name: "Sand Fun", logo: "/images/trusted/sandfun.png" },
  ];

  // Duplicate the companies array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div
      className="py-12 sm:py-16 lg:py-20 overflow-hidden"
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6">
            TRUSTED BY +50 BUSINESSES
          </p>
          <h2 className="text-lg sm:text-xl lg:text-[24px] font-normal text-[#1E293B] max-w-4xl mx-auto text-center font-sfpro px-4">
            Trusted by founders, agencies, and teams in the US, UK, UAE, and
            Brazil.
          </h2>
          <p className="text-lg sm:text-xl lg:text-[24px] font-normal text-[#1E293B] max-w-4xl mx-auto text-center font-sfpro px-4">
            Used across healthcare, real estate, and B2B SaaS.
          </p>
        </div>

        {/* Infinite Scrolling Company Logos */}
        <div className="relative">
          <div
            className="flex items-center gap-4 sm:gap-8 md:gap-12 xl:gap-16 animate-scroll"
            style={{
              width: "calc(200px * 10)", // 5 companies * 2 (duplicated) * approximate width
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-24 flex items-center justify-center"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={180}
                  height={90}
                  className="w-full h-full object-contain transition-all duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              calc(-200px * 5)
            ); /* Move by the width of original 5 companies */
          }
        }

        .animate-scroll {
          animation: scroll 15s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default TrustedSection;
