import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import ContactSectionBackground from "src/assets/images/ContactSectionBackground";

interface ContactHeroSectionProps {
  noPadding?: boolean;
}

const ContactHeroSection = ({ noPadding = false }: ContactHeroSectionProps) => {
  const [isClient, setIsClient] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<{
    [key: number]: boolean;
  }>({ 0: true, 1: true, 2: true, 3: true });

  const expectations = [
    {
      icon: "/images/contactus/hero/image1.png",
      title: "A clear roadmap",
      description: "Tailored to your business needs.",
    },
    {
      icon: "/images/contactus/hero/image2.png",
      title: "Technical feasibility check",
      description: "Find out if your idea can actually work.",
    },
    {
      icon: "/images/contactus/hero/image3.png",
      title: "Time & cost estimate",
      description: "No hidden surprises, you'll know upfront.",
    },
    {
      icon: "/images/contactus/hero/image4.png",
      title: "Integration plan",
      description:
        "How your AI agent fits into your current tools (CRM, WhatsApp, Twilio, GHL, Slack, website, etc.).",
    },
  ];

  useEffect(() => {
    setIsClient(true);

    // Initialize all accordions as open
    const initialOpenState: { [key: number]: boolean } = {};
    expectations.forEach((_, index) => {
      initialOpenState[index] = true;
    });
    setOpenAccordions(initialOpenState);

    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.type = "text/javascript";
    document.head.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className={`section ${noPadding ? "relative" : ""}`}>
      {noPadding && (
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <ContactSectionBackground />
        </div>
      )}
      <div
        className={`max-w-7xl ${
          noPadding ? "" : "py-20 sm:py-12 md:py-16 lg:py-32"
        }`}
      >
        <div className="flex flex-col items-center lg:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 pt-4 lg:pt-8">
            <p className="text-[#E53935] text-sm font-normal mb-4 sm:mb-6 font-sfpro leading-6">
              Get Clarity in 30 Minutes
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal font-mondwest leading-tight text-gray-900 mb-4 sm:mb-6">
              Got an idea for a<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>custom AI agent?
            </h1>

            <p className="text-base sm:text-lg md:text-[18px] text-[#334155] font-sfpro font-normal leading-normal tracking-[-0.36px] mb-8 sm:mb-10">
              Schedule a quick,{" "}
              <strong className="text-blue-600 font-semibold">
                FREE 30 min
              </strong>{" "}
              guided
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>session by Agentic AI Labs
              team.
            </p>

            <div className="mt-6 sm:mt-8">
              <h3 className="text-[#1E293B] font-sfpro text-lg sm:text-xl font-[600] leading-6 mb-4 sm:mb-6">
                WHAT TO EXPECT IN THE SESSION?
              </h3>

              {expectations.map((expectation, index) => (
                <div
                  key={index}
                  className="mb-3 sm:mb-4 border-b border-gray-200 last:border-b-0"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left focus:outline-none rounded-lg py-2"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-1 sm:p-2 flex items-center justify-center min-w-[2rem] sm:min-w-[2.5rem] h-8 sm:h-10">
                        <Image
                          src={expectation.icon}
                          alt={expectation.title}
                          width={20}
                          height={20}
                          className="object-contain sm:w-6 sm:h-6"
                        />
                      </div>
                      <h4 className="text-slate-900 font-sfpro text-base sm:text-lg font-medium">
                        {expectation.title}
                      </h4>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transform transition-transform duration-200 flex-shrink-0 ${
                        openAccordions[index] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openAccordions[index] && (
                    <div className="pb-3 sm:pb-4 pl-10 sm:pl-[56px]">
                      <p className="text-slate-600 font-sfpro text-sm sm:text-base leading-normal">
                        {expectation.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Calendly Widget */}
          <div className="w-full lg:w-1/2 bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden mt-8 lg:mt-0">
            {isClient ? (
              <div
                className="calendly-inline-widget w-full h-[500px] sm:h-[600px] lg:h-[700px]"
                data-url="https://calendly.com/creative-script/30min"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-[500px] sm:h-[600px] lg:h-[700px]">
                <div className="text-gray-500">Loading calendar...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
