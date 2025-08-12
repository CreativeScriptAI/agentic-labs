"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectTestimonialProps {
  data: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    reviews: Array<{
      logo: string;
      name: string;
      designation: string;
      review: string;
    }>;
  };
}

const ProjectTestimonial = ({ data }: ProjectTestimonialProps) => {
  return (
    <section className="section">
      <span className="section_label">{data.subtitle}</span>
      <hr className="bg-[#E2E8F0] max-w-[540px] mx-auto w-full" />
      <h2 className="section_title">
        {data.title}
        <br />
        <span className="italic">{data.titleHighlight}</span>
      </h2>
      <div className="w-full relative">
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          autoHeight={false}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
          navigation={{
            nextEl: ".testimonial-swiper-next",
            prevEl: ".testimonial-swiper-prev",
          }}
          className="!p-4 !-mx-4 [&_.swiper-wrapper]:!items-stretch"
        >
          {data.reviews.map((item, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 h-full flex flex-col w-full min-h-full">
                <div className="flex-grow">
                  <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                    {item.review}
                  </p>
                </div>
                <hr className="border-t border-gray-200 mb-4 sm:mb-6" />
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex-grow">
                    <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {item.designation}
                    </p>
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden ml-3 sm:ml-4 flex-shrink-0">
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt={`${item.name} logo`}
                        width={56}
                        height={56}
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain rounded-full"
                      />
                    ) : (
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gray-400 rounded-full" />
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center sm:justify-end gap-2 mt-3 md:mt-6">
          <button
            className="testimonial-swiper-prev w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors duration-200"
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
            className="testimonial-swiper-next w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors duration-200"
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
    </section>
  );
};

export default ProjectTestimonial;
