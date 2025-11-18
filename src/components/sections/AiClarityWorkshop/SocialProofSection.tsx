"use client";

import { Quote, Play, Maximize2, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Testimonial {
  type: "text" | "video";
  quote: string;
  industry: string;
  videoUrl?: string;
  thumbnail?: string;
  name?: string;
  title?: string;
  orientation?: "portrait" | "landscape";
}

const SocialProofSection = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null);
  const [columns, setColumns] = useState(3);
  const gridRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const testimonials: Testimonial[] = [
    {
      type: "video",
      videoUrl: "https://d34gt69eepjr0b.cloudfront.net/aiden_testimonial.mp4",
      thumbnail: "https://d34gt69eepjr0b.cloudfront.net/aiden_testimonial.mp4#t=0.1",
      name: "Aiden, Founder",
      title: "Founder, SaaS",
      quote: "Clear, actionable insights in under 30 minutes",
      industry: "Healthcare Tech Founder",
      orientation: "portrait",
    },
    {
      type: "video",
      videoUrl: "https://d34gt69eepjr0b.cloudfront.net/team.mp4",
      thumbnail: "https://d34gt69eepjr0b.cloudfront.net/team.mp4#t=0.1",
      name: "Team, Creative Script",
      title: "Founder, Creative Script",
      quote: "This workshop changed how we think about AI",
      industry: "Creative Script Founder",
      orientation: "landscape",
    },
    {
      type: "text",
      quote: "Found our biggest bottleneck in 20 minutes.",
      industry: "SaaS Founder",
    },
    {
      type: "text",
      quote: "Finally understood where AI could actually help.",
      industry: "Operations Director",
    },
    {
      type: "text",
      quote: "Practical insights, zero fluff.",
      industry: "Enterprise Leader",
    },
    {
      type: "text",
      quote: "The ROI was immediate and measurable",
      industry: "E-commerce Director",
    },
  ];

  const industries = [
    "SaaS",
    "Fintech",
    "Healthcare",
    "Web3",
    "E-commerce",
    "Real Estate",
  ];

  // Responsive column count
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setColumns(1);
      } else if (width < 1024) {
        setColumns(4);
      } else {
        setColumns(8); // Increased to 8 for better spacing
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ESC key to close fullscreen
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && fullscreenVideo) {
        // Pause all videos when closing with ESC
        Object.values(videoRefs.current).forEach(vid => {
          if (vid) vid.pause();
        });
        setFullscreenVideo(null);
        setPlayingVideo(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [fullscreenVideo]);

  // Distribute testimonials with both column and row spanning
  interface PlacedTestimonial extends Testimonial {
    colspan: number;
    rowspan: number;
    startCol: number;
    key: string;
  }

  const distributeToColumnsGrid = () => {
    // Map testimonials with their grid properties
    const items = testimonials.map((item, i) => {
      let colspan: number;
      let rowspan: number;
      
      if (item.type === "video" && item.orientation === "portrait") {
        // Portrait: takes 2-3 columns, spans 2 rows (tall)
        colspan = columns >= 8 ? 3 : columns >= 4 ? 2 : 1;
        rowspan = columns >= 4 ? 2 : 1;
      } else if (item.type === "video" && item.orientation === "landscape") {
        // Landscape: takes 3 columns, spans 1 row (wide)
        colspan = columns >= 8 ? 3 : columns >= 4 ? 2 : 1;
        rowspan = 1;
      } else {
        // Text: takes 2 columns, spans 1 row (compact)
        colspan = columns >= 8 ? 2 : columns >= 4 ? 2 : 1;
        rowspan = 1;
      }
      
      // Ensure colspan doesn't exceed total columns (mobile-safe)
      colspan = Math.min(colspan, columns);
      
      return {
        ...item,
        colspan,
        rowspan,
        key: `pt-${i}`,
      };
    });

    // Simple sequential placement - items flow in order
    return items.map((item, index) => ({
      ...item,
      row: 0, // Let CSS Grid auto-place
      startCol: 0,
    }));
  };

  const gridTestimonials = distributeToColumnsGrid();

  return (
    <section id="proof" className="py-10 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="font-semibold text-foreground mb-4 text-[28px] sm:text-[36px] md:text-[44px]"
            style={{ lineHeight: "1.1" }}
          >
            We&apos;ve helped teams find clarity across{" "}
            <span className="relative inline-block">
              <span className="absolute bg-yellow-200 h-full left-[-4px] top-0 right-[-4px] z-0 rounded"></span>
              <span className="relative z-10">industries</span>
            </span>
            .
          </h2>
          <p className="text-gray-600 mt-4 text-[16px] sm:text-[17px] md:text-[18px]">
            From SaaS and fintech to healthcare and Web3 our audits have
            uncovered{" "}
            <span className="font-semibold text-black">
              $100K+ in hidden ROI
            </span>
            .
          </p>
        </div>

        {/* MASONRY GRID - Portrait spans rows, Landscape spans columns */}
        <div
          ref={gridRef}
          className="mb-12"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            gridAutoRows: "minmax(200px, auto)", // Each row unit
            gap: "1.5rem",
            gridAutoFlow: "row dense", // Row-wise, fill gaps
          }}
        >
          {gridTestimonials.map((item, idx) => {
            const uniqueKey = item.key ?? idx;
            return (
              <div
                key={uniqueKey}
                className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                style={{
                  backgroundColor:
                    item.type === "video" ? "#000" : "#FFFFFF",
                  gridColumn: `span ${item.colspan}`,
                  gridRow: `span ${item.rowspan}`,
                }}
              >
                {item.type === "video" && item.videoUrl ? (
                  <>
                    {/* Video Container - Dynamic Orientation */}
                    <div
                      className={`relative group h-full ${
                        item.orientation === "portrait"
                          ? "aspect-[9/16]"
                          : "aspect-video"
                      }`}
                    >
                      <video
                        ref={(el) => { videoRefs.current[uniqueKey] = el; }}
                        src={item.videoUrl}
                        className="w-full h-full object-cover rounded-lg"
                        playsInline
                        preload="metadata"
                        loop
                        onClick={(e) => {
                          const video = e.currentTarget;
                          if (video.paused) {
                            // Pause all other videos
                            Object.entries(videoRefs.current).forEach(([key, vid]) => {
                              if (key !== uniqueKey && vid) {
                                vid.pause();
                              }
                            });
                            video.play();
                            setPlayingVideo(uniqueKey);
                          } else {
                            video.pause();
                            setPlayingVideo(null);
                          }
                        }}
                      />

                      {/* Overlay - Hidden when playing */}
                      {playingVideo !== uniqueKey && (
                        <>
                          {/* Dark Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none rounded-lg" />

                          {/* Play Button - Center */}
                          <div 
                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            style={{ zIndex: 10 }}
                          >
                            <div className="w-20 h-20 rounded-full bg-blue-600 group-hover:bg-blue-700 flex items-center justify-center group-hover:scale-110 transition-all shadow-2xl pointer-events-auto cursor-pointer"
                              onClick={() => {
                                // Pause all other videos
                                Object.entries(videoRefs.current).forEach(([key, vid]) => {
                                  if (key !== uniqueKey && vid) {
                                    vid.pause();
                                  }
                                });
                                const video = videoRefs.current[uniqueKey];
                                if (video) {
                                  video.play();
                                  setPlayingVideo(uniqueKey);
                                }
                              }}
                            >
                              <Play
                                className="text-white ml-1"
                                size={32}
                                fill="currentColor"
                              />
                            </div>
                      </div>

                          {/* Name and Title Overlay - Bottom */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10 pointer-events-none">
                            {item.name && (
                              <h3
                                className="font-bold text-[22px] mb-1"
                                style={{ lineHeight: "1.2" }}
                              >
                                {item.name}
                              </h3>
                            )}
                            {item.title && (
                              <p className="text-white/90 text-[14px] leading-tight">
                                {item.title}
                              </p>
                            )}
                      </div>
                        </>
                      )}

                      {/* Fullscreen Button - Top Right (shown when playing) */}
                      {playingVideo === uniqueKey && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            // Pause the original video before opening fullscreen
                            const video = videoRefs.current[uniqueKey];
                            if (video) {
                              video.pause();
                            }
                            setFullscreenVideo(uniqueKey);
                          }}
                          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all"
                        >
                          <Maximize2 size={20} />
                        </button>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="p-6">
                    <Quote className="text-blue-600 mb-3" size={24} />
                    <p
                      className="text-black italic mb-4 text-[15px]"
                      style={{ lineHeight: "1.6" }}
                    >
                      &quot;{item.quote}&quot;
                    </p>
                    <p
                      className="text-gray-600"
                      style={{ fontSize: "13px" }}
                    >
                    — {item.industry}
                  </p>
                </div>
              )}
            </div>
            );
          })}
        </div>

        {/* Industries Badge */}
        <div className="text-center">
          <p className="text-gray-600 mb-4" style={{ fontSize: "14px" }}>
            Trusted across industries:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="rounded-full px-4 py-2 text-black shadow-sm bg-white"
                style={{ fontSize: "14px" }}
              >
                {industry}
              </span>
            ))}
          </div>
          </div>
        </div>

      {/* Cinematic Fullscreen Video Modal */}
      {fullscreenVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          style={{ 
            animation: 'fadeIn 0.3s ease-in-out',
            backdropFilter: 'blur(10px)'
          }}
        >
          <style jsx>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { 
                opacity: 0;
                transform: translateY(30px);
              }
              to { 
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
          
          {/* Close Button - Top Right */}
          <button
            onClick={() => {
              // Close fullscreen and ensure all videos are paused
              Object.values(videoRefs.current).forEach(vid => {
                if (vid) vid.pause();
              });
              setFullscreenVideo(null);
              setPlayingVideo(null);
            }}
            className="fixed top-6 right-6 z-[60] p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white shadow-2xl transition-all hover:scale-110 group"
            aria-label="Close fullscreen"
          >
            <X size={28} strokeWidth={2.5} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Video Container with Theater Effect */}
          <div 
            className="relative w-full h-full flex items-center justify-center px-4 md:px-8 lg:px-16"
            onClick={(e) => {
              // Close when clicking outside the video
              if (e.target === e.currentTarget) {
                // Pause all videos when closing
                Object.values(videoRefs.current).forEach(vid => {
                  if (vid) vid.pause();
                });
                setFullscreenVideo(null);
                setPlayingVideo(null);
              }
            }}
          >
            <div 
              className="relative w-full max-w-7xl"
              style={{ 
                animation: 'slideUp 0.4s ease-out',
                maxHeight: '90vh'
              }}
            >
              {(() => {
                const item = testimonials.find((t, i) => `pt-${i}` === fullscreenVideo);
                return item && item.videoUrl ? (
                  <div className="relative group">
                    {/* Video with cinematic styling */}
                    <video
                      src={item.videoUrl}
                      className="w-full h-full object-contain rounded-xl shadow-2xl"
                      style={{
                        maxHeight: '90vh',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 100px rgba(59, 130, 246, 0.3)'
                      }}
                      controls
                      autoPlay
                      playsInline
                      loop
                      controlsList="nodownload"
                    />
                    
                    {/* Video Info Overlay - Bottom */}
                    {item.name && (
                      <div 
                        className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-b-xl"
                        style={{ animation: 'slideUp 0.6s ease-out 0.2s backwards' }}
                      >
                        <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                          {item.name}
                        </h3>
                        {item.title && (
                          <p className="text-white/80 text-base md:text-lg">
                            {item.title}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Subtle Vignette Effect */}
                    <div className="absolute inset-0 pointer-events-none rounded-xl" style={{
                      background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.3) 100%)'
                    }} />
                  </div>
                ) : null;
              })()}
            </div>
          </div>

          {/* Instructions - Bottom Center */}
          <div 
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm z-[60]"
            style={{ animation: 'fadeIn 0.6s ease-out 0.4s backwards' }}
          >
            Press <kbd className="px-2 py-1 bg-white/10 rounded text-white/80 font-mono text-xs">ESC</kbd> or click outside to close
          </div>
      </div>
      )}
    </section>
  );
};

export default SocialProofSection;