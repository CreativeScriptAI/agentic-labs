import { useEffect, useRef } from 'react';
// @ts-expect-error - GSAP types may not be available
import gsap from "gsap";
// @ts-expect-error - GSAP types may not be available
import ScrollTrigger from 'gsap/ScrollTrigger';
import svgPaths from "src/imports/audit-landing/svg-vr2ocvys0c";

gsap.registerPlugin(ScrollTrigger);

// Mobile Icon Components (24px from Figma)
function PhoneCall() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="PhoneCall">
          <path d={svgPaths.p1f6f0500} fill="#F8F9FA" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Sparkle() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Sparkle">
          <path d={svgPaths.pc8a300} fill="#F8F9FA" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MapTrifold() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="MapTrifold">
          <path d={svgPaths.p37d63d00} fill="#F8F9FA" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Target() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Target">
          <path d={svgPaths.p1358ff00} fill="#F8F9FA" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const progressLineRef = useRef<HTMLDivElement | null>(null);
  const trackLineRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "To understand your workflow and your current process.",
      icon: PhoneCall,
      position: "right" as const,
    },
    {
      number: "02",
      title: "Audit & Detection",
      description: "Our AI finds inefficiencies across sales, support, and finance.",
      icon: Sparkle,
      position: "left" as const,
    },
    {
      number: "03",
      title: "AI Process Mapping",
      description: "Visual map showing where time and money leak.",
      icon: MapTrifold,
      position: "right" as const,
    },
    {
      number: "04",
      title: "Proof of Concept (Coming Soon)",
      description: 'A working demo that shows what "fixed" looks like.',
      icon: Target,
      position: "left" as const,
    },
  ];

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current || !progressLineRef.current || !trackLineRef.current) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // If reduced motion, show everything and skip animations
    if (prefersReducedMotion) {
      stepRefs.current.forEach((step) => {
        if (step) {
          const card = step.querySelector('.timeline-card') as HTMLElement;
          const badge = step.querySelector('.timeline-badge') as HTMLElement;
          const numberChip = step.querySelector('.timeline-number') as HTMLElement;
          const title = step.querySelector('.timeline-title') as HTMLElement;
          const description = step.querySelector('.timeline-description') as HTMLElement;
          
          if (card) gsap.set(card, { opacity: 1, x: 0, y: 0 });
          if (badge) gsap.set(badge, { opacity: 1, scale: 1 });
          if (numberChip) gsap.set(numberChip, { opacity: 1, scale: 1 });
          if (title) gsap.set(title, { opacity: 1, y: 0 });
          if (description) gsap.set(description, { opacity: 1, y: 0 });
        }
      });
      gsap.set(progressLineRef.current, { height: '100%' });
      return;
    }

    const ctx = gsap.context(() => {
      // Set initial states for all elements
      stepRefs.current.forEach((step, index) => {
        if (!step) return;
        
        const card = step.querySelector('.timeline-card') as HTMLElement;
        const badge = step.querySelector('.timeline-badge') as HTMLElement;
        const numberChip = step.querySelector('.timeline-number') as HTMLElement;
        const title = step.querySelector('.timeline-title') as HTMLElement;
        const description = step.querySelector('.timeline-description') as HTMLElement;
        
        const isRight = steps[index].position === 'right';
        const translateDistance = window.innerWidth >= 768 ? 20 : 12;

        // Initial hidden state
        if (card) {
          gsap.set(card, {
            opacity: 0,
            x: isRight ? translateDistance : -translateDistance,
            y: 0,
          });
        }
        
        if (badge) {
          gsap.set(badge, {
            opacity: 0,
            scale: 0.9,
          });
        }
        
        if (numberChip) {
          gsap.set(numberChip, {
            opacity: 0,
            scale: 0.9,
          });
        }
        
        if (title) {
          gsap.set(title, {
            opacity: 0,
            y: 8,
          });
        }
        
        if (description) {
          gsap.set(description, {
            opacity: 0,
            y: 8,
          });
        }
      });

      // Set progress line initial state
      gsap.set(progressLineRef.current, {
        height: '0%',
        transformOrigin: 'top center',
      });

      // Calculate step positions for progress line growth
      const stepPositions: number[] = [];
      stepRefs.current.forEach((step) => {
        if (step && timelineRef.current) {
          const stepRect = step.getBoundingClientRect();
          const timelineRect = timelineRef.current.getBoundingClientRect();
          const relativeTop = stepRect.top - timelineRect.top + stepRect.height / 2;
          const timelineHeight = timelineRect.height;
          stepPositions.push((relativeTop / timelineHeight) * 100);
        }
      });

      // Main scroll-triggered animation for progress line
      const isDesktop = window.innerWidth >= 768;
      
      ScrollTrigger.create({
        trigger: timelineRef.current,
        start: isDesktop ? 'top 80%' : 'top 80%',
        end: 'bottom center',
        scrub: true,
        onUpdate: (self: any) => {
          const progress = self.progress;
          const progressHeight = progress * 100;
          
          if (progressLineRef.current) {
            gsap.to(progressLineRef.current, {
              height: `${progressHeight}%`,
              duration: 0.1,
              ease: 'none',
            });
          }

          // Check if progress has reached each step and trigger badge ping
          stepPositions.forEach((stepPosition, index) => {
            if (progressHeight >= stepPosition && !badgeRefs.current[index]?.classList.contains('pinged')) {
              const badge = badgeRefs.current[index];
              if (badge) {
                badge.classList.add('pinged');
                // One-time ping animation
                gsap.to(badge, {
                  scale: 1.15,
                  duration: 0.2,
                  ease: 'power2.out',
                  yoyo: true,
                  repeat: 1,
                });
              }
            }
          });
        },
      });

      // Function to show first two cards
      const showFirstCards = () => {
        [0, 1].forEach((index) => {
          const step = stepRefs.current[index];
          if (!step || step.classList.contains('active')) return; // Skip if already shown
          
          const card = step.querySelector('.timeline-card') as HTMLElement;
          const badge = step.querySelector('.timeline-badge') as HTMLElement;
          const numberChip = step.querySelector('.timeline-number') as HTMLElement;
          const title = step.querySelector('.timeline-title') as HTMLElement;
          const description = step.querySelector('.timeline-description') as HTMLElement;
          
          const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
          
          if (badge) tl.to(badge, { opacity: 1, scale: 1, duration: 0.4 }, index * 0.1);
          if (card) tl.to(card, { opacity: 1, x: 0, duration: 0.5 }, index * 0.1 + 0.1);
          if (numberChip) tl.to(numberChip, { opacity: 1, scale: 1, duration: 0.4 }, index * 0.1 + 0.15);
          if (title) tl.to(title, { opacity: 1, y: 0, duration: 0.5 }, index * 0.1 + 0.2);
          if (description) tl.to(description, { opacity: 1, y: 0, duration: 0.5 }, index * 0.1 + 0.25);
          
          step.classList.add('active');
        });
      };

      // Check if section is already visible on mount
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
        if (isVisible) {
          // Small delay to ensure DOM is ready, then show cards
          setTimeout(showFirstCards, 200);
        }
      }

      // Trigger first cards when section enters viewport (more aggressive trigger)
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 90%',
        once: true,
        onEnter: showFirstCards,
      });

      // Individual step reveal animations
      stepRefs.current.forEach((step, index) => {
        if (!step) return;
        
        const card = step.querySelector('.timeline-card') as HTMLElement;
        const badge = step.querySelector('.timeline-badge') as HTMLElement;
        const numberChip = step.querySelector('.timeline-number') as HTMLElement;
        const title = step.querySelector('.timeline-title') as HTMLElement;
        const description = step.querySelector('.timeline-description') as HTMLElement;
        
        const isRight = steps[index].position === 'right';
        const translateDistance = window.innerWidth >= 768 ? 20 : 12;
        // More lenient trigger - show cards earlier as section enters viewport
        // First two cards are handled by section trigger, so skip them
        const triggerOffset = isDesktop ? 'top 85%' : 'top 85%';

        // Skip ScrollTrigger for first two steps as they're handled by section trigger
        if (index < 2) return;

        // Create ScrollTrigger for each step (starting from step 3)
        ScrollTrigger.create({
          trigger: step,
          start: triggerOffset,
          once: true,
          onEnter: () => {
            const tl = gsap.timeline({ defaults: { ease: 'power1.out', duration: 0.6 } });

            // Animate badge first
            if (badge) {
              tl.to(badge, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
              }, 0);
            }

            // Then card slides in
            if (card) {
              tl.to(card, {
                opacity: 1,
                x: 0,
                duration: 0.6,
              }, 0.1);
            }

            // Stagger number chip, title, and description
            if (numberChip) {
              tl.to(numberChip, {
                opacity: 1,
                scale: 1,
                duration: 0.4,
              }, 0.15);
            }

            if (title) {
              tl.to(title, {
                opacity: 1,
                y: 0,
                duration: 0.5,
              }, 0.2);
            }

            if (description) {
              tl.to(description, {
                opacity: 1,
                y: 0,
                duration: 0.5,
              }, 0.25);
            }

            // Add active state
            step.classList.add('active');
            
            // Add shadow after animation
            if (card) {
              gsap.to(card, {
                boxShadow: '0px 6px 25px 0px rgba(0,0,0,0.08), 0px 2px 8px 0px rgba(0,0,0,0.1)',
                duration: 0.3,
                delay: 0.6,
              });
            }
          },
        });
      });

      // Handle resize - kill and rebuild ScrollTriggers
      let resizeTimeout: NodeJS.Timeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          ScrollTrigger.refresh();
        }, 250);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeout);
      };
    }, sectionRef);

    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f9f6f4] relative py-10 md:py-20 overflow-clip">
      <div className="absolute bg-[#f9f6f4] h-full md:h-[1326px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[1440px]" />
      
      {/* Mobile Layout */}
      <div className="md:hidden relative w-full px-4">
        <div className="max-w-[327px] mx-auto">
          {/* Header Section - Mobile */}
          <div className="content-stretch flex flex-col gap-[16px] items-center leading-[0] text-center mb-[60px]">
            <div className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center text-[#e53935] text-[12px] tracking-[0.48px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[normal]">No buzzwords...Just practical insight </p>
            </div>
            <div className="flex flex-col font-['SF_Pro',_sans-serif] font-[510] justify-center leading-[normal] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="font-['SF_Pro',_sans-serif] font-normal mb-0">
                <span className="text-slate-800" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Simple, fast, and built for
                </span>
                <span style={{ fontVariationSettings: "'wdth' 100" }}> </span>
              </p>
              <p className="text-[#0062ff]">busy founders.</p>
            </div>
          </div>

          {/* Timeline Container - Mobile */}
          <div ref={timelineRef} className="relative">
            {/* Track Line (faint background) */}
            <div ref={trackLineRef} className="absolute bg-[rgba(0,98,255,0.2)] h-full left-[calc(50%-139.5px)] top-0 translate-x-[-50%] w-[4px]" />
            
            {/* Progress Line (grows with scroll) */}
            <div ref={progressLineRef} className="absolute bg-[#0062ff] h-0 left-[calc(50%-139.5px)] top-0 translate-x-[-50%] w-[4px] z-10" />
            
            {/* Steps */}
            <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} ref={(el) => { stepRefs.current[index] = el; }} className="step-mobile step-mobile-${index + 1} content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                    {/* Icon Circle Badge */}
                    <div ref={(el) => { badgeRefs.current[index] = el; }} className="timeline-badge bg-[#0062ff] content-stretch flex items-center justify-center relative rounded-full shrink-0 size-[48px] z-20">
                      <IconComponent />
                    </div>
                    
                    {/* Card */}
                    <div ref={(el) => { cardRefs.current[index] = el; }} className="timeline-card basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0">
                      <div className="size-full">
                        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-[14px] relative w-full">
                          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                            {/* Number Badge */}
                            <div className="timeline-number bg-[#ff5757] relative rounded-[99px] shrink-0 size-[32px]">
                              <p className="absolute font-['SF_Pro',_sans-serif] font-[510] leading-[20px] left-[calc(50%+8px)] text-[14px] text-nowrap text-right text-white top-[calc(50%-10px)] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                                {step.number}
                              </p>
                            </div>
                            
                            {/* Content */}
                            <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
                              <p className="timeline-title font-['SF_Pro',_sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#0a1128] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                {step.title}
                              </p>
                              <p className="timeline-description font-['SF_Pro',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-slate-600" style={{ fontVariationSettings: "'wdth' 100" }}>
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative content-stretch w-full max-w-[896px] mx-auto px-4">
        {/* Header Section - Desktop */}
        <div className="content-stretch flex flex-col gap-[16px] items-center leading-[0] text-center w-full max-w-[552px] mx-auto mb-[64px]">
          <div className="flex flex-col font-['SF_Pro',_sans-serif] font-normal justify-center text-[#e53935] text-[14px] tracking-[0.56px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">
              No buzzwords...
              <span className="font-['SF_Pro',_sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
                Just practical insight
              </span>
            </p>
          </div>
          <div className="flex flex-col font-['SF_Pro',_sans-serif] font-[510] justify-center text-[#0062ff] text-[24px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">
              <span className="font-['SF_Pro',_sans-serif] font-normal text-slate-800" style={{ fontVariationSettings: "'wdth' 100" }}>
                Simple, fast, and built for
              </span>
              <span className="font-['SF_Pro',_sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
                {" "}
              </span>
              busy founders.
            </p>
          </div>
        </div>

        {/* Timeline Container - Desktop */}
        <div ref={timelineRef} className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full max-w-[896px] mx-auto">
          {/* Track Line (faint background) */}
          <div ref={trackLineRef} className="absolute bg-[rgba(0,98,255,0.2)] h-[976px] left-1/2 top-0 translate-x-[-50%] w-[4px]" />
          
          {/* Progress Line (grows with scroll) */}
          <div ref={progressLineRef} className="absolute bg-[#0062ff] h-0 left-1/2 top-0 translate-x-[-50%] w-[4px] z-10" />
          
          {/* Step 1: Discovery Call */}
          <div ref={(el) => { stepRefs.current[0] = el; }} className="step-1 h-[226px] relative shrink-0 w-full">
            {/* Card - Right Side */}
            <div ref={(el) => { cardRefs.current[0] = el; }} className="timeline-card absolute bg-white box-border content-stretch flex flex-col gap-[8px] items-end justify-center left-[472px] p-[32px] rounded-[12px] top-[20px] w-[363px] transition-all duration-300 hover:scale-105">
              <div className="content-stretch flex flex-col gap-[13px] items-end">
                <div className="timeline-number bg-[#ff5757] rounded-[99px] shrink-0 size-[32px] relative">
                  <p className="absolute font-['SF_Pro',_sans-serif] font-[510] leading-[20px] left-[calc(50%+8px)] text-[14px] text-nowrap text-right text-white top-[calc(50%-10px)] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                    01
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-end justify-center">
                  <p className="timeline-title font-['SF_Pro',_sans-serif] font-[510] leading-[normal] text-[#0a1128] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Discovery Call
                  </p>
                  <p className="timeline-description font-['SF_Pro',_sans-serif] font-normal leading-[20px] text-[16px] text-right text-slate-600 w-[220px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    To understand your workflow and your current process.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Icon Badge - Center */}
            <div ref={(el) => { badgeRefs.current[0] = el; }} className="timeline-badge absolute bg-[#0062ff] content-stretch flex items-center justify-center left-[416px] rounded-full size-[64px] top-[81px] z-20 transition-all duration-300 hover:scale-110">
              <div className="relative shrink-0 size-[32px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="PhoneCall">
                    <path d={svgPaths.p1f6f0500} fill="#F8F9FA" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Step 2: Audit & Detection */}
          <div ref={(el) => { stepRefs.current[1] = el; }} className="step-2 h-[226px] relative shrink-0 w-full">
            {/* Card - Left Side */}
            <div ref={(el) => { cardRefs.current[1] = el; }} className="timeline-card absolute bg-white box-border content-stretch flex flex-col gap-[8px] items-start justify-center left-[63px] p-[32px] rounded-[12px] top-[20px] w-[363px] transition-all duration-300 hover:scale-105">
              <div className="content-stretch flex flex-col gap-[13px] items-start">
                <div className="timeline-number bg-[#ff5757] rounded-[99px] shrink-0 size-[32px] relative">
                  <p className="absolute font-['SF_Pro',_sans-serif] font-[510] leading-[20px] left-[calc(50%+9px)] text-[14px] text-nowrap text-right text-white top-[calc(50%-10px)] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                    02
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start justify-center">
                  <p className="timeline-title font-['SF_Pro',_sans-serif] font-[510] leading-[normal] text-[#0a1128] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Audit & Detection
                  </p>
                  <p className="timeline-description font-['SF_Pro',_sans-serif] font-normal leading-[20px] text-[16px] text-slate-600 w-[253px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Our AI finds inefficiencies across sales, support, and finance.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Icon Badge - Center */}
            <div ref={(el) => { badgeRefs.current[1] = el; }} className="timeline-badge absolute bg-[#0062ff] content-stretch flex items-center justify-center left-[416px] rounded-full size-[64px] top-[81px] z-20 transition-all duration-300 hover:scale-110">
              <div className="relative shrink-0 size-[32px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="Sparkle">
                    <path d={svgPaths.pc8a300} fill="#F8F9FA" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Step 3: AI Process Mapping */}
          <div ref={(el) => { stepRefs.current[2] = el; }} className="step-3 h-[226px] relative shrink-0 w-full">
            {/* Card - Right Side */}
            <div ref={(el) => { cardRefs.current[2] = el; }} className="timeline-card absolute bg-white box-border content-stretch flex flex-col gap-[8px] items-end justify-center left-[470px] p-[32px] rounded-[12px] top-[20px] w-[363px] transition-all duration-300 hover:scale-105">
              <div className="content-stretch flex flex-col gap-[13px] items-end">
                <div className="timeline-number bg-[#ff5757] rounded-[99px] shrink-0 size-[32px] relative">
                  <p className="absolute font-['SF_Pro',_sans-serif] font-[510] leading-[20px] left-[calc(50%+9.865px)] text-[14px] text-nowrap text-right text-white top-[calc(50%-10px)] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                    03
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-end justify-center">
                  <p className="timeline-title font-['SF_Pro',_sans-serif] font-[510] leading-[normal] text-[#0a1128] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                    AI Process Mapping
                  </p>
                  <p className="timeline-description font-['SF_Pro',_sans-serif] font-normal leading-[20px] text-[16px] text-right text-slate-600 w-[220px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Visual map showing where time and money leak.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Icon Badge - Center */}
            <div ref={(el) => { badgeRefs.current[2] = el; }} className="timeline-badge absolute bg-[#0062ff] content-stretch flex items-center justify-center left-[416px] rounded-full size-[64px] top-[81px] z-20 transition-all duration-300 hover:scale-110">
              <div className="relative shrink-0 size-[32px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="MapTrifold">
                    <path d={svgPaths.p37d63d00} fill="#F8F9FA" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Step 4: Proof of Concept */}
          <div ref={(el) => { stepRefs.current[3] = el; }} className="step-4 h-[226px] relative shrink-0 w-full">
            {/* Card - Left Side */}
            <div ref={(el) => { cardRefs.current[3] = el; }} className="timeline-card absolute bg-white box-border content-stretch flex flex-col gap-[8px] items-start justify-center left-[63px] p-[32px] rounded-[12px] top-[8px] w-[363px] transition-all duration-300 hover:scale-105">
              <div className="content-stretch flex flex-col gap-[13px] items-start">
                <div className="timeline-number bg-[#ff5757] rounded-[99px] shrink-0 size-[32px] relative">
                  <p className="absolute font-['SF_Pro',_sans-serif] font-[510] leading-[20px] left-[calc(50%+10px)] text-[14px] text-nowrap text-right text-white top-[calc(50%-10px)] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                    04
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[13px] items-start justify-center">
                  <p className="timeline-title font-['SF_Pro',_sans-serif] font-[510] leading-[normal] text-[#0a1128] text-[20px] w-[226px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Proof of Concept (Coming Soon)
                  </p>
                  <p className="timeline-description font-['SF_Pro',_sans-serif] font-normal leading-[20px] text-[16px] text-slate-600 w-[235px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    A working demo that shows what &quot;fixed&quot; looks like.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Icon Badge - Center */}
            <div ref={(el) => { badgeRefs.current[3] = el; }} className="timeline-badge absolute bg-[#0062ff] content-stretch flex items-center justify-center left-[416px] rounded-full size-[64px] top-[81px] z-20 transition-all duration-300 hover:scale-110">
              <div className="relative shrink-0 size-[32px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="Target">
                    <path d={svgPaths.p1358ff00} fill="#F8F9FA" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        /* Active state styling */
        .step-1.active .timeline-card,
        .step-2.active .timeline-card,
        .step-3.active .timeline-card,
        .step-4.active .timeline-card {
          box-shadow: 0px 6px 25px 0px rgba(0,0,0,0.08), 0px 2px 8px 0px rgba(0,0,0,0.1);
        }
        
        .step-1.active .timeline-badge,
        .step-2.active .timeline-badge,
        .step-3.active .timeline-badge,
        .step-4.active .timeline-badge {
          filter: drop-shadow(0 0 8px rgba(0, 98, 255, 0.4));
        }
        
        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .timeline-card,
          .timeline-badge,
          .timeline-number,
          .timeline-title,
          .timeline-description {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
