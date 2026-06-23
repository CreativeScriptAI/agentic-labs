"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import BracketButton from "src/components/BracketButton";

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
      <div className="flex flex-col items-start gap-4 max-md:border-t max-md:pt-4 max-md:border-t-[#e7e6e4] max-md:p-6">
        <span className="font-geist uppercase tracking-[0.02em] text-[12px] font-normal text-[#0062FF]">{card.label}</span>
        <span className="font-alte text-xl font-normal tracking-[-0.04em] text-[#0A1128]">{card.title}</span>
        <p className="font-alte text-[15px] leading-[1.5] tracking-[-0.04em] font-normal text-[#475569]">
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
        {data.title} <span className="font-alte">{data.titleHighlight}</span>
      </h2>
      <div className="w-full cardContainer">
        {data.cards.map((card, index) => (
          <Card key={index} card={card} index={index} />
        ))}
      </div>

      <div className="mt-4">
        <BracketButton
          label={data.ctaButton.text}
          variant="secondary"
          onClick={() => {
            if (
              typeof window !== "undefined" &&
              (window as any).gtag_report_conversion
            ) {
              (window as any).gtag_report_conversion(
                "https://tryagentikai.com/contact"
              );
            }
          }}
        />
      </div>
    </section>
  );
};

export default ProjectCapabilities;
