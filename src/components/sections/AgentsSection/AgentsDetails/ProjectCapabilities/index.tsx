"use client";
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

const ProjectCapabilities = ({ data }: ProjectCapabilitiesProps) => {
  return (
    <section className="section !max-w-3xl">
      <h2 className="section_title">
        {data.title} <span className="italic">{data.titleHighlight}</span>
      </h2>
      <div className="w-full cardContainer">
        {data.cards.map((card, index) => (
          <Card key={index} card={card} index={index} />
        ))}
      </div>

      <button
        // href="https://tryagentikai.com/contact"
        className="button_blue_border mt-4"
        onClick={() => {
          if (
            typeof window !== "undefined" &&
            (window as any).gtag_report_conversion
          ) {
            return (window as any).gtag_report_conversion(
              "https://tryagentikai.com/contact"
            );
          }
          return true;
        }}
      >
        {data.ctaButton.text}
        <ArrowUpRight size={20} />
      </button>
    </section>
  );
};

export default ProjectCapabilities;
