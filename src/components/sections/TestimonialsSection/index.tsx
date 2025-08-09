import React, { useState } from "react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - visibleCount ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - visibleCount : prevIndex - 1
    );
  };

  // Responsive testimonials display
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1; // Mobile: 1 testimonial
      if (window.innerWidth < 1024) return 2; // Tablet: 2 testimonials
    }
    return 3; // Desktop: 3 testimonials
  };

  const [visibleCount, setVisibleCount] = React.useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleCount
  );

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

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentIndex}`}
                className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 h-full flex flex-col"
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

          {/* Navigation Arrows */}
          <div className="flex justify-center sm:justify-end gap-2">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
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
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === testimonials.length - visibleCount}
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
