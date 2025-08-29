import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import ContactSectionBackground from "src/assets/images/ContactSectionBackground";
import AICaller from "./AICaller";

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
      {/* {noPadding && (
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <ContactSectionBackground />
        </div>
      )} */}
      <AICaller contactRoute={true} />
    </section>
  );
};

export default ContactHeroSection;
