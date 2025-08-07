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
      className="py-16 -mx-4 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden"
      style={{ backgroundColor: "#F9F6F4" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-red-500 font-medium text-sm tracking-wider uppercase mb-6">
            TRUSTED BY +50 BUSINESSES
          </p>
          <h2 className="text-[24px] font-normal text-[#1E293B] max-w-4xl mx-auto text-center font-sfpro">
            Trusted by founders, agencies, and teams in the US, UK, UAE, and
            Brazil.
          </h2>
          <p className="text-[24px] font-normal text-[#1E293B] max-w-4xl mx-auto text-center font-sfpro">
            Used across healthcare, real estate, and B2B SaaS.
          </p>
        </div>

        {/* Infinite Scrolling Company Logos */}
        <div className="relative">
          <div
            className="flex items-center gap-16 animate-scroll"
            style={{
              width: "calc(250px * 10)", // 5 companies * 2 (duplicated) * approximate width
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={180}
                  height={90}
                  className="w-full h-full object-contain transition-all duration-300"
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
              calc(-250px * 5)
            ); /* Move by the width of original 5 companies */
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TrustedSection;
