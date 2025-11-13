import { Button } from "./ui/button";
import { WorkflowInfographic } from "./WorkflowInfographic";
import svgPaths from "src/imports/audit-landing/svg-0nz4hwa6tp";
import { useEffect, useRef } from "react";
// @ts-expect-error - GSAP types may not be available
import gsap from "gsap";

export function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.set(
        [".hero-title", ".hero-subtitle", ".hero-scribble", ".hero-card"],
        { opacity: 0, y: 16 }
      );
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(".hero-title", { opacity: 1, y: 0, duration: 0.7 })
        .to(".hero-subtitle", { opacity: 1, y: 0, duration: 0.6 }, "-=0.25")
        .to(".hero-scribble", { opacity: 1, y: 0, duration: 0.6 }, "-=0.2")
        .to(".hero-card", { opacity: 1, y: 0, duration: 0.7 }, "-=0.2");

      // Ambient orbs gentle float
      gsap.to(".hero-orb", {
        y: 12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-[#f9f6f4] pt-12 md:pt-24 lg:pt-32 pb-6 md:pb-8 lg:pb-10"
    >
      {/* Background Gradient - Preserved Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex-none rotate-180">
          <div className="h-[400px] md:h-[676px] relative w-[375px] md:w-[1120px]">
            <div className="absolute inset-[-23.67%_-14.29%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 1440 996"
              >
                <g filter="url(#filter0_f_4_56)" id="Ellipse 989" opacity="0.2">
                  <path
                    d={svgPaths.p18951780}
                    fill="url(#paint0_linear_4_56)"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="996"
                    id="filter0_f_4_56"
                    width="1440"
                    x="0"
                    y="0"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_4_56"
                      stdDeviation="80"
                    />
                  </filter>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_4_56"
                    x1="699.566"
                    x2="699.566"
                    y1="100.766"
                    y2="1016.45"
                  >
                    <stop stopColor="#0062FF" />
                    <stop offset="1" stopColor="#0062FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] relative z-10">
        {/* Floating orbs for ambience - Preserved Animation */}
        <div className="hidden md:block absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-xl hero-orb"></div>
        <div className="hidden md:block absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-purple-400/8 to-blue-400/8 rounded-full blur-2xl hero-orb"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Main Headline - Responsive */}
          <div className="mt-8 md:mt-12 lg:mt-16 mb-6 md:mb-8 flex justify-center px-4 hero-title">
            <div className="relative inline-block">
              <h1
                className="text-[24px] md:text-[44px] lg:text-[60px] leading-[1.2] md:leading-[1] tracking-[-0.025em] text-[#0a1128] relative"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <span className="font-['SF_Pro'] font-semibold">
                  You&apos;re bleeding <span className="text-[#e53935]">$$$</span> +
                  <span className="text-[#e53935]">time</span> doing
                  <br />
                  the same work manually.
                </span>
              </h1>
            </div>
          </div>

          {/* Subtitle - Responsive */}
          <p className="font-['Kalam',_sans-serif] text-[16px] md:text-[20px] lg:text-[24px] leading-[1.4] not-italic text-[#717182] mb-4 md:mb-6 max-w-[600px] md:max-w-[800px] mx-auto px-4 hero-subtitle">
            Our AI Audit spots repetitive workflows, shows exactly what they&apos;re
            costing you, and how to automate them in under a week
          </p>

          {/* Scribble Text with Arrow */}
          <div className="relative mb-4 md:mb-6 flex flex-col items-center hero-scribble">
            <p className="font-['Kalam',_sans-serif] text-[18px] md:text-[22px] lg:text-[26px] text-[#e53935] not-italic relative z-10 mb-1">
              Peek inside how our AI Audit actually works
            </p>
            {/* Hand-drawn style arrow pointing down and to the left */}
            <svg
              className="w-14 h-16 md:w-18 md:h-20 lg:w-20 lg:h-24 -mt-1"
              viewBox="0 0 100 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: "rotate(-15deg)" }}
            >
              <path
                d="M20 10 Q30 40, 45 50 Q60 60, 70 70 Q80 80, 85 95 Q88 105, 75 110"
                stroke="#e53935"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                style={{ filter: "url(#scribble)" }}
              />
              {/* Arrowhead */}
              <path
                d="M70 108 L75 110 L72 115"
                stroke="#e53935"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <defs>
                <filter
                  id="scribble"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feTurbulence
                    baseFrequency="0.04"
                    numOctaves="3"
                    result="noise"
                  />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                </filter>
              </defs>
            </svg>
          </div>

          {/* Workflow Infographic - Responsive */}
          <div className="hero-card">
            <div className="max-w-[327px] md:max-w-[742px] mx-auto relative">
              <div className="bg-[rgba(255,255,255,0.9)] backdrop-blur-lg rounded-lg border border-[rgba(255,255,255,0.5)] shadow-[0px_14.492px_18.115px_-3.623px_rgba(0,0,0,0.1),0px_5.797px_7.246px_-4.348px_rgba(0,0,0,0.1)] p-4 md:p-6 lg:p-8">
                <WorkflowInfographic />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
