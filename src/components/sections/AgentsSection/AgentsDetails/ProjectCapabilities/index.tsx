"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface ProjectCapabilitiesProps {
  data: {
    title: string;
    titleHighlight: string;
    cards: Array<{
      label: string;
      title: string;
      description: string;
      image: string;
    }>;
    ctaButton: {
      text: string;
      link: string;
    };
  };
}

const Card = ({ card, index }: any) => {
  return (
    <div
      className="capabilities_card"
      style={{
        zIndex: index + 1,
      }}
    >
      <div className="flex flex-col items-start gap-4 max-md:border-t max-md:pt-4 max-md:border-t-[#E2E8F0] max-md:p-6">
        <span className="text-sm font-medium text-[#0062FF]">{card.label}</span>
        <span className="text-xl font-medium text-[#0F172A]">{card.title}</span>
        <p className="text-base font-normal text-[#475569]">
          {card.description}
        </p>
      </div>
      {card.image && (
        <Image
          src={card.image}
          alt={card.title}
          width={360}
          height={292}
          className="w-full h-auto max-w-96"
        />
      )}
    </div>
  );
};

const AnimatedCard = ({ card, index }: any) => {
  const cardRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [index * 50, -index * 50]);

  return (
    <motion.div
      ref={cardRef}
      className={"cardWrapper"}
      style={{
        y: isMobile ? undefined : y,
      }}
    >
      <Card card={card} index={index} />
    </motion.div>
  );
};

const ProjectCapabilities = ({ data }: ProjectCapabilitiesProps) => {
  return (
    <section className="section !max-w-3xl">
      <h2 className="section_title">
        {data.title} <span className="italic">{data.titleHighlight}</span>
      </h2>
      <div className="w-full cardContainer hidden md:block">
        {data.cards.map((card, index) => (
          <AnimatedCard key={index} card={card} index={index} />
        ))}
      </div>

      <div className="w-full cardContainer block md:hidden">
        {data.cards.map((card, index) => (
          <Card key={index} card={card} index={index} />
        ))}
      </div>

      <Link href={data.ctaButton.link} className="button_blue_border mt-4">
        {data.ctaButton.text}
        <ArrowUpRight size={20} />
      </Link>
    </section>
  );
};

export default ProjectCapabilities;
