import React from "react";
import { motion } from "framer-motion";
import { isYouTubeURL, getYouTubeEmbedURL } from "src/libs/utils/youtube";
import useTestimonialsQuery from "../../../hooks/useTestimonialsQuery";
import { TTestimonial } from "src/types";
import RevealText from "src/components/RevealText";

// Hook to check if component is mounted (client-side)
const useIsClient = () => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

// Skeleton loader component for testimonials
const TestimonialCardSkeleton = () => (
  <div
    className="bg-white rounded-none border border-[#e7e6e4] p-4 sm:p-6 lg:p-8 flex flex-col flex-shrink-0 w-full animate-pulse"
    style={{ height: "400px" }}
  >
    {/* Video/Content skeleton */}
    <div className="flex-grow mb-4 sm:mb-6">
      <div className="w-full h-48 sm:h-56 lg:h-64 bg-gray-200 rounded-none mb-4"></div>
    </div>

    {/* Divider skeleton */}
    <div className="h-px bg-[#e7e6e4] mb-4 sm:mb-6"></div>

    {/* Author info skeleton */}
    <div className="mt-auto flex items-center justify-between">
      <div className="flex-grow">
        <div className="h-4 bg-gray-200 rounded-none w-32 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded-none w-24"></div>
      </div>
    </div>
  </div>
);

// Skeleton loader for the entire testimonials section
const TestimonialsSkeleton = ({ visibleCount }: { visibleCount: number }) => (
  <div className="relative">
    <div className="mb-6 sm:mb-8 overflow-hidden p-4">
      <div className="flex gap-6">
        {Array.from({ length: visibleCount }).map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: `calc((100% - ${24}px * (${visibleCount} - 1)) / ${visibleCount})`,
            }}
          >
            <TestimonialCardSkeleton />
          </div>
        ))}
      </div>
    </div>

    {/* Navigation skeleton */}
    <div className="flex justify-center sm:justify-end gap-2 mt-3 md:mt-6">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-none animate-pulse"></div>
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-none animate-pulse"></div>
    </div>
  </div>
);

// Optimized YouTube iframe component
const LazyYouTubeIframe = ({ url, title }: { url: string; title: string }) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const iframeRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const embedUrl = getYouTubeEmbedURL(url);

  return (
    <div
      ref={iframeRef}
      className="w-full h-full rounded-none overflow-hidden relative"
    >
      {!isIntersecting ? (
        <div className="w-full h-full bg-gray-200 rounded-none flex items-center justify-center">
          <div className="font-geist uppercase text-[12px] tracking-[0.02em] text-gray-500">Loading video...</div>
        </div>
      ) : (
        <iframe
          src={embedUrl || ""}
          title={title}
          className="w-full h-full rounded-none"
          frameBorder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

const TestimonialsSection = () => {
  const viewportRef = React.useRef<HTMLDivElement | null>(null);
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [visibleCount, setVisibleCount] = React.useState(3);
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const dragStartXRef = React.useRef<number | null>(null);
  const dragDeltaXRef = React.useRef(0);
  const [cardGapPx, setCardGapPx] = React.useState(24);
  const [viewportWidth, setViewportWidth] = React.useState(1);

  // Ensure client-side only rendering
  const isClient = useIsClient();

  // Fetch testimonials from API (always on client-side)
  const { testimonials: fetchedTestimonials, isLoading, error, refetch } = useTestimonialsQuery();

  const workshopTestimonials = React.useMemo(
    () => [
      {
        _id: "workshop-aiden",
        name: "Aiden, Founder",
        designation: "Founder, SaaS",
        review: "Clear, actionable insights in under 30 minutes",
        videoURL: "https://d34gt69eepjr0b.cloudfront.net/aiden_testimonial.mp4",
      },
      {
        _id: "workshop-olumide",
        name: "Olumide Gbenro",
        designation: "Founder, Creatoor AI",
        review: "This workshop changed how we think about AI",
        videoURL: "https://d34gt69eepjr0b.cloudfront.net/olu_2f.mp4",
      },
    ],
    []
  );

  const testimonials = React.useMemo(() => {
    return [...workshopTestimonials, ...(fetchedTestimonials || [])];
  }, [fetchedTestimonials, workshopTestimonials]);

  // Show skeleton during loading only
  const shouldShowSkeleton = isLoading;

  // Log for debugging - only on mount
  React.useEffect(() => {
    if (isClient) {
      console.log("TestimonialsSection: Component mounted");
    }
  }, [isClient]);

  // Set initial viewport width
  React.useEffect(() => {
    if (viewportRef.current) {
      setViewportWidth(viewportRef.current.clientWidth);
    }
  }, []);

  // Manual refetch function for testing
  const handleManualRefetch = React.useCallback(() => {
    if (isClient) {
      refetch();
    }
  }, [isClient, refetch]);

  const maxIndex = React.useMemo(
    () => Math.max(0, testimonials.length - visibleCount),
    [testimonials.length, visibleCount]
  );

  const updateEdgeStates = React.useCallback(
    (index: number) => {
      setIsAtStart(index <= 0);
      setIsAtEnd(index >= maxIndex);
    },
    [maxIndex]
  );

  const getVisibleCount = React.useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      if (window.innerWidth < 1280) return 2;
    }
    return 3;
  }, []);

  const getGapPx = React.useCallback(() => {
    return 24; // consistent gap like ProjectTestimonial
  }, []);

  const goToIndex = React.useCallback(
    (nextIndex: number) => {
      const clamped = Math.max(0, Math.min(maxIndex, nextIndex));
      setCurrentIndex(clamped);
      updateEdgeStates(clamped);
    },
    [maxIndex, updateEdgeStates]
  );

  const handleNext = React.useCallback(() => {
    goToIndex(currentIndex + 1);
  }, [currentIndex, goToIndex]);

  const handlePrev = React.useCallback(() => {
    goToIndex(currentIndex - 1);
  }, [currentIndex, goToIndex]);

  React.useEffect(() => {
    const applyResponsive = () => {
      const count = getVisibleCount();
      const gap = getGapPx();
      setCardGapPx(gap);

      // Update viewport width
      if (viewportRef.current) {
        setViewportWidth(viewportRef.current.clientWidth);
      }

      setVisibleCount((prev) => {
        if (prev === count) return prev;
        // adjust index so the first visible item remains in view
        const adjustedIndex = Math.min(
          currentIndex,
          Math.max(0, testimonials.length - count)
        );
        setCurrentIndex(adjustedIndex);
        updateEdgeStates(adjustedIndex);
        return count;
      });
    };
    applyResponsive();
    window.addEventListener("resize", applyResponsive);
    return () => window.removeEventListener("resize", applyResponsive);
  }, [currentIndex, testimonials.length, updateEdgeStates, getVisibleCount, getGapPx]);

  // Keyboard navigation
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    }
  };

  // Touch swipe for small screens
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "touch") return;
    if (typeof window !== "undefined" && window.innerWidth >= 768) return;
    viewportRef.current?.setPointerCapture(e.pointerId);
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    dragDeltaXRef.current = 0;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || dragStartXRef.current === null) return;
    dragDeltaXRef.current = e.clientX - dragStartXRef.current;
    const gapPercent = (cardGapPx / viewportWidth) * 100;
    const stepPercent = 100 / visibleCount + gapPercent / visibleCount;
    const percentDelta = (dragDeltaXRef.current / viewportWidth) * stepPercent;
    const basePercent = currentIndex * stepPercent;
    if (trackRef.current) {
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(-${basePercent - percentDelta
        }%)`;
    }
  };

  const onPointerUpOrCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    viewportRef.current?.releasePointerCapture(e.pointerId);
    setIsDragging(false);
    const deltaX = dragDeltaXRef.current;
    dragStartXRef.current = null;
    dragDeltaXRef.current = 0;
    const thresholdPx = 50;
    if (Math.abs(deltaX) > thresholdPx) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    } else {
      // snap back
      if (trackRef.current) {
        trackRef.current.style.transition = "transform 300ms ease-in-out";
        const gapPercent = (cardGapPx / viewportWidth) * 100;
        const stepPercent = 100 / visibleCount + gapPercent / visibleCount;
        const basePercent = currentIndex * stepPercent;
        trackRef.current.style.transform = `translateX(-${basePercent}%)`;
      }
    }
  };

  // Derived layout values for transform and spacing
  const gapPercent = React.useMemo(
    () => (cardGapPx / viewportWidth) * 100,
    [cardGapPx, viewportWidth]
  );
  const stepPercent = React.useMemo(
    () => 100 / visibleCount + gapPercent / visibleCount,
    [visibleCount, gapPercent]
  );
  const basePercent = React.useMemo(
    () => currentIndex * stepPercent,
    [currentIndex, stepPercent]
  );

  return (
    <div
      className="py-12 sm:py-16 lg:py-20"
      style={{
        backgroundColor: "#F9F6F4",
        // width: "calc(100% + 2rem)",
        // marginLeft: "-1rem",
        // marginRight: "-1rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="text-red-500 font-normal text-[12px] tracking-[0.02em] uppercase mb-4 font-geist px-4"
          >
            Testimonials
          </motion.p>
          <RevealText
            text="Founders have already seen transformational results"
            as="h2"
            className="text-[28px] sm:text-[34px] lg:text-[40px] text-[#0A1128] font-alte font-normal leading-[1.2] tracking-[-0.04em] max-w-3xl px-4"
            delay={0.05}
            stagger={0.04}
            inView
          />
        </div>

        {/* Content based on state */}
        {shouldShowSkeleton && (
          <TestimonialsSkeleton visibleCount={visibleCount} />
        )}

        {!isLoading && testimonials.length === 0 && (
          <div className="flex flex-col justify-center items-center py-12 space-y-4">
            <p className="font-alte font-normal text-gray-600 text-[18px] tracking-[-0.04em]">
              No testimonials available at the moment.
            </p>
            {error && (
              <div className="font-geist uppercase text-red-500 text-[12px] tracking-[0.02em] max-w-md text-center">
                Error: {error.message}
              </div>
            )}
            <button
              onClick={handleManualRefetch}
              className="font-geist uppercase text-[12px] tracking-[0.02em] px-4 py-2 bg-blue-500 text-white rounded-none border border-[#e7e6e4] hover:bg-blue-600 transition-colors"
            >
              Retry Fetch
            </button>
          </div>
        )}

        {!isLoading && testimonials.length > 0 && (
          <div className="relative">
            <div
              ref={viewportRef}
              tabIndex={0}
              onKeyDown={onKeyDown}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUpOrCancel}
              onPointerCancel={onPointerUpOrCancel}
              className="mb-6 sm:mb-8 overflow-hidden outline-none p-4 -mx-4"
              style={{ touchAction: "pan-y" }}
            >
              <div
                ref={trackRef}
                className="flex will-change-transform items-stretch"
                style={{
                  transform: `translateX(-${basePercent}%)`,
                  transition: isDragging
                    ? "none"
                    : "transform 300ms ease-in-out",
                  width: "100%",
                  gap: `${cardGapPx}px`,
                }}
              >
                {testimonials.map((testimonial, cardIndex) => (
                  <motion.div
                    key={testimonial._id}
                    data-testimonial-card="true"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 30,
                      delay: Math.min(cardIndex, visibleCount) * 0.08,
                    }}
                    className="bg-white rounded-none border border-[#e7e6e4] p-4 sm:p-6 lg:p-8 flex flex-col flex-shrink-0 w-full transition-colors duration-300 hover:border-[#0A1128]"
                    style={{
                      width: `calc((100% - ${cardGapPx}px * (${visibleCount} - 1)) / ${visibleCount})`,
                      height: "400px", // Fixed height for all cards
                    }}
                  >
                    {/* Testimonial Content */}
                    <div className="flex-grow flex flex-col overflow-hidden">
                      {testimonial.videoURL &&
                        testimonial.videoURL.trim() !== "" ? (
                        <div
                          className="mb-4 sm:mb-6 flex flex-col rounded-none overflow-hidden border border-[#e7e6e4]"
                          style={{ height: "240px" }}
                        >
                          {isYouTubeURL(testimonial.videoURL) ? (
                            <iframe
                              width="560"
                              height="315"
                              src={`https://www.youtube.com/embed/${testimonial.videoURL.split("/")[3]
                                }`}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            ></iframe>
                          ) : (
                            <video
                              controls
                              preload="metadata"
                              className="w-full h-full rounded-none object-contain bg-black"
                              poster=""
                            >
                              <source
                                src={testimonial.videoURL}
                                type="video/mp4"
                              />
                              Your browser does not support the video tag.
                            </video>
                          )}
                        </div>
                      ) : (
                        <div
                          className="mb-4 sm:mb-6 overflow-hidden"
                          style={{ height: "240px" }}
                        >
                          <p className="font-alte font-normal text-gray-800 text-[15px] sm:text-[18px] lg:text-[24px] leading-relaxed tracking-[-0.04em] overflow-y-auto h-full pr-2">
                            {(testimonial.review || "").replace(/\s*—\s*/g, ", ")}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Divider Line */}
                    <hr className="border-t border-[#e7e6e4] mb-4 sm:mb-6" />

                    {/* Author Info */}
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex-grow">
                        <h4 className="font-alte font-normal text-gray-900 mb-1 text-[15px] sm:text-[16px] tracking-[-0.04em]">
                          {testimonial.name}
                        </h4>
                        <p className="font-geist uppercase text-gray-500 text-[12px] tracking-[0.02em]">
                          {(testimonial.designation || "").replace(/\s*—\s*/g, ", ")}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center sm:justify-end gap-2 mt-3 md:mt-6">
              <button
                onClick={handlePrev}
                className="w-10 h-10 sm:w-12 sm:h-12 border border-[#e7e6e4] rounded-none flex items-center justify-center hover:border-[#0A1128] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isAtStart}
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 sm:w-12 sm:h-12 border border-[#e7e6e4] rounded-none flex items-center justify-center hover:border-[#0A1128] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isAtEnd}
                aria-label="Next testimonial"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialsSection;
