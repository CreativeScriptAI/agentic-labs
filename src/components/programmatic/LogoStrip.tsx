"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type LogoKey = "gohighlevel" | "vapi" | "retell" | "bland" | "n8n" | "make" | "zapier";

const LOGO_MAP: Record<LogoKey, { src: string; alt: string; w: number; h: number }> = {
  gohighlevel: { src: "/logos/gohighlevel.svg", alt: "GoHighLevel", w: 108, h: 24 },
  vapi: { src: "/logos/vapi.svg", alt: "Vapi", w: 68, h: 22 },
  retell: { src: "/logos/retell.svg", alt: "Retell AI", w: 84, h: 22 },
  bland: { src: "/logos/bland.svg", alt: "Bland AI", w: 92, h: 23 },
  n8n: { src: "/logos/n8n.svg", alt: "n8n", w: 76, h: 21 },
  make: { src: "/logos/make.svg", alt: "Make", w: 26, h: 26 },
  zapier: { src: "/logos/zapier.svg", alt: "Zapier", w: 92, h: 25 },
};

const LogoStrip: React.FC<{ logos?: string[] }> = ({ logos }) => {
  const items = (logos || [])
    .map((key) => LOGO_MAP[key as LogoKey])
    .filter(Boolean);

  if (!items.length) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 mt-2 border-t border-[#e7e6e4]">
      <span className="font-geist text-[11px] font-normal tracking-[0.02em] uppercase text-slate-400 flex-shrink-0">
        Works with
      </span>
      {items.map((logo, i) => (
        <motion.div
          key={logo.src}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
        >
          <Image src={logo.src} alt={`${logo.alt} logo`} width={logo.w} height={logo.h} />
        </motion.div>
      ))}
    </div>
  );
};

export default LogoStrip;
