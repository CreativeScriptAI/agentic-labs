import React, { useEffect, useState } from "react";

const ContactHeroSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

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
  }, []);

  const expectations = [
    {
      icon: "🗺️",
      text: "A clear roadmap, tailored to your business needs.",
    },
    {
      icon: "💰",
      text: "Time & cost estimate, no hidden surprises, you'll know upfront.",
    },
    {
      icon: "🔧",
      text: "Technical feasibility check, find out if your idea can actually work.",
    },
    {
      icon: "🔗",
      text: "Integration plan — how your AI agent fits into your current tools (CRM, WhatsApp, Twilio, GHL, Slack, website, etc.).",
    },
    {
      icon: "📋",
      text: "Next steps — you can either build it yourself with our guide, or have us ship it for you.",
    },
  ];

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-start">
          {/* Left Side - Text Content */}
          <div className="pt-8">
            <p className="text-violet-500 text-lg font-medium mb-6 md:text-xl">
              Get Clarity in 30 Minutes
            </p>

            <h1 className="text-4xl md:text-6xl font-normal font-mondwest leading-tight text-gray-900 mb-6 font-['SF_Pro_Display']">
              Got an idea for a<br />
              custom AI agent?
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10">
              Schedule a quick,{" "}
              <strong className="text-gray-900 font-semibold">
                FREE 30 min
              </strong>{" "}
              guided
              <br />
              session by Agentic AI Labs team.
            </p>

            <div className="mt-8">
              <h3 className="text-[#8A2BE2] font-sfpro text-base font-normal leading-6 mb-6">
                WHAT TO EXPECT (in a 25 min session)
              </h3>

              {expectations.map((expectation, index) => (
                <div key={index} className="flex items-center mb-6 gap-4">
                  <div className="bg-blue-500 rounded-lg p-2 flex items-center justify-center min-w-[2.5rem] h-10 mt-0.5">
                    <span className="text-lg">{expectation.icon}</span>
                  </div>
                  <p className="text-slate-800 font-sfpro text-[14px] font-medium leading-normal m-0 flex-1">
                    {expectation.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Calendly Widget */}
          <div className="sticky top-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden lg:mt-0 mt-8">
              {isClient ? (
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/creative-script/30min"
                  style={{ minWidth: "320px", height: "700px" }}
                />
              ) : (
                <div
                  className="flex items-center justify-center"
                  style={{ minWidth: "320px", height: "700px" }}
                >
                  <div className="text-gray-500">Loading calendar...</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
