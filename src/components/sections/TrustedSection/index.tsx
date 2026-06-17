import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import RevealText from "src/components/RevealText";

const TrustedSection = () => {
  const companies = [
    { name: "How Radio Works", logo: "/images/trusted/howradio.png" },
    { name: "Estu", logo: "/images/trusted/estu.png" },
    { name: "Season of Ink", logo: "/images/trusted/seasonofink.png" },
    { name: "Haavi", logo: "/images/trusted/haavi.png" },
    { name: "Sand Fun", logo: "/images/trusted/sandfun.png" },
  ];

  // Duplicate the companies array for a seamless infinite loop
  const loop = [...companies, ...companies];

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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <p className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-4 font-sfpro">
            Trusted by +50 businesses
          </p>
          <RevealText
            text="Trusted by founders, agencies, and teams worldwide"
            as="h2"
            className="font-mondwest text-3xl sm:text-4xl lg:text-5xl text-[#0A1128] max-w-4xl mx-auto leading-tight"
            stagger={0.05}
            inView
          />
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto mt-4 font-sfpro">
            Across the US, UK, UAE, and Brazil, used in healthcare, real estate,
            and B2B SaaS.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative group"
      >
        {/* Edge fades for a premium, contained feel */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28"
          style={{
            background:
              "linear-gradient(to right, #F9F6F4 0%, rgba(249,246,244,0) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28"
          style={{
            background:
              "linear-gradient(to left, #F9F6F4 0%, rgba(249,246,244,0) 100%)",
          }}
        />

        <div className="marquee-track flex w-max items-center gap-6 sm:gap-12 lg:gap-20 px-6">
          {loop.map((company, index) => (
            <div
              key={index}
              className="group/logo relative flex-shrink-0 flex items-center justify-center w-32 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-24"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={180}
                height={90}
                className="w-full h-full object-contain grayscale opacity-50 transition-all duration-500 ease-out group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:scale-105"
              />
            </div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          animation: marquee 28s linear infinite;
          will-change: transform;
        }

        .group:hover .marquee-track {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .marquee-track {
            animation-duration: 20s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default TrustedSection;
