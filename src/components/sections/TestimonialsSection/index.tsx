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
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );

  return (
    <div
      className="py-16 -mx-4 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
      style={{ backgroundColor: "#F9F6F4" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-red-500 font-medium text-sm tracking-wider uppercase mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-[24px] font-normal text-[#1E293B] max-w-4xl mx-auto text-center font-sfpro">
            Founders have already seen
          </h2>
          <h3 className="text-[24px] font-normal text-[#1E293B] max-w-4xl mx-auto text-center font-sfpro">
            transformational results
          </h3>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentIndex}`}
                className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col"
              >
                {/* Testimonial Text */}
                <div className="flex-grow">
                  <p className="text-gray-800 text-lg leading-relaxed mb-6">
                    {testimonial.text}
                  </p>
                </div>

                {/* Divider Line */}
                <hr className="border-t border-gray-200 mb-6" />

                {/* Author Info with Avatar */}
                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden ml-4">
                    <div className="w-14 h-14 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-end gap-2">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors duration-200"
              disabled={currentIndex === 0}
            >
              <svg
                className="w-5 h-5 text-gray-600"
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
              className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors duration-200"
              disabled={currentIndex === testimonials.length - 3}
            >
              <svg
                className="w-5 h-5 text-gray-600"
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
