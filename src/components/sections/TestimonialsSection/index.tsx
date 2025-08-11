import React from "react";

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
  const [maxCardHeight, setMaxCardHeight] = React.useState<number | null>(null);
  const [cardGapPx, setCardGapPx] = React.useState(16);

  const testimonials = [
    {
      id: 1,
      text: "Relevance AI is my number 1 favorite automation tool out of all of them. it's super underrated!!!",
      author: "Jake George",
      title: "Founder, Synthoria Labs",
      avatar: "/images/avatar1.jpg",
    },
    {
      id: 2,
      text: "I'm looking at almost every single thing our business does and creating an AI tool or Agents to either improve the process, speed it up or add value in a different way using Relevance.",
      author: "Ben Van Sprundel",
      title: "Founder, Synthoria Labs",
      avatar: "/images/avatar2.jpg",
    },
    {
      id: 3,
      text: "Started working with Relevance AI for marketing agents to automate workflows. Pretty rad",
      author: "Avi Hacker",
      title: "Founder, Synthoria Labs",
      avatar: "/images/avatar3.jpg",
    },
    {
      id: 4,
      text: "Relevance AI is my number 1 favorite automation tool out of all of them. it's super underrated!!!",
      author: "Jake George",
      title: "Founder, Synthoria Labs",
      avatar: "/images/avatar4.jpg",
    },
  ];

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
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 3;
  }, []);

  const getGapPx = React.useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 12; // xs
      if (window.innerWidth < 1024) return 16; // sm/md
    }
    return 24; // lg+
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
  }, [
    currentIndex,
    getVisibleCount,
    getGapPx,
    testimonials.length,
    updateEdgeStates,
  ]);

  // Measure tallest card and apply as min-height
  const measureCardHeights = React.useCallback(() => {
    const trackEl = trackRef.current;
    if (!trackEl) return;
    const cardNodes = Array.from(
      trackEl.querySelectorAll('[data-testimonial-card="true"]')
    ) as HTMLElement[];
    if (cardNodes.length === 0) return;
    let max = 0;
    for (const node of cardNodes) {
      const prevMin = node.style.minHeight;
      node.style.minHeight = "";
      const h = node.offsetHeight;
      node.style.minHeight = prevMin;
      if (h > max) max = h;
    }
    setMaxCardHeight(max || null);
  }, []);

  React.useEffect(() => {
    // Measure initially and whenever layout could change
    measureCardHeights();
    const onResize = () => measureCardHeights();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measureCardHeights, visibleCount]);

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
    const viewportWidth = viewportRef.current?.clientWidth ?? 1;
    const gapPercent = (cardGapPx / viewportWidth) * 100;
    const stepPercent = 100 / visibleCount + gapPercent / visibleCount;
    const percentDelta = (dragDeltaXRef.current / viewportWidth) * stepPercent;
    const basePercent = currentIndex * stepPercent;
    if (trackRef.current) {
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(-${
        basePercent - percentDelta
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
        const viewportWidth = viewportRef.current?.clientWidth ?? 1;
        const gapPercent = (cardGapPx / viewportWidth) * 100;
        const stepPercent = 100 / visibleCount + gapPercent / visibleCount;
        const basePercent = currentIndex * stepPercent;
        trackRef.current.style.transform = `translateX(-${basePercent}%)`;
      }
    }
  };

  // Derived layout values for transform and spacing
  const viewportWidth = viewportRef.current?.clientWidth ?? 1;
  const gapPercent = (cardGapPx / viewportWidth) * 100;
  const stepPercent = 100 / visibleCount + gapPercent / visibleCount;
  const basePercent = currentIndex * stepPercent;

  return (
    <div
      className="py-12 sm:py-16 lg:py-20"
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-lg sm:text-xl lg:text-[24px] font-normal text-[#1E293B] max-w-4xl mx-auto text-center font-sfpro px-4">
            Founders have already seen
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-[24px] font-normal text-[#1E293B] max-w-4xl mx-auto text-center font-sfpro px-4">
            transformational results
          </h3>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div
            ref={viewportRef}
            tabIndex={0}
            onKeyDown={onKeyDown}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUpOrCancel}
            onPointerCancel={onPointerUpOrCancel}
            className="mb-6 sm:mb-8 overflow-hidden outline-none"
            style={{ touchAction: "pan-y" }}
          >
            <div
              ref={trackRef}
              className="flex will-change-transform"
              style={{
                transform: `translateX(-${basePercent}%)`,
                transition: isDragging ? "none" : "transform 300ms ease-in-out",
                width: "100%",
                gap: `${cardGapPx}px`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  data-testimonial-card="true"
                  className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 h-full flex flex-col flex-shrink-0"
                  style={{
                    width: `calc((100% - ${cardGapPx}px * (${visibleCount} - 1)) / ${visibleCount})`,
                    minHeight: maxCardHeight ? `${maxCardHeight}px` : undefined,
                  }}
                >
                  {/* Testimonial Text */}
                  <div className="flex-grow">
                    <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Divider Line */}
                  <hr className="border-t border-gray-200 mb-4 sm:mb-6" />

                  {/* Author Info with Avatar */}
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex-grow">
                      <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        {testimonial.title}
                      </p>
                    </div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden ml-3 sm:ml-4 flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center sm:justify-end gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isAtStart}
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
              className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isAtEnd}
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
      </div>
    </div>
  );
};

export default TestimonialsSection;
