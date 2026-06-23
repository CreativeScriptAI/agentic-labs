"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BracketButton from "src/components/BracketButton";

interface ProjectReleasesProps {
  data: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    releases: Array<{
      image: string;
      logo: string;
      alt: string;
      companyName: string;
      date: string;
      excerpt: string;
      link: string;
    }>;
  };
}

const ProjectReleases = ({ data }: ProjectReleasesProps) => {
  return (
    <section className="section">
      <span className="section_label">{data.subtitle}</span>
      <hr className="bg-[#E2E8F0] max-w-[540px] mx-auto w-full" />
      <h2 className="section_title">
        {data.title} <span className="font-alte">{data.titleHighlight}</span>
      </h2>
      <div className="w-full relative">
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
          navigation={{
            nextEl: ".releases-swiper-next",
            prevEl: ".releases-swiper-prev",
          }}
          className="releases-swiper !p-4 !-mx-4"
        >
          {data.releases.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="release_card h-full flex flex-col justify-between">
                <div className="p-3 rounded-none border border-[#e7e6e4] bg-white flex-1">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={340}
                      height={200}
                      className="w-full h-auto rounded-none"
                    />
                  )}
                  <div className="flex items-end justify-between gap-2 mt-4 mx-2">
                    <div className="flex items-center gap-1">
                      <Image
                        src={"/images/cs_logo.jpeg"}
                        alt={`${item.companyName} logo`}
                        width={20}
                        height={20}
                        className="max-w-[120px] -ms-2 rounded-full"
                      />
                      <span className="font-alte font-normal text-[15px] tracking-[-0.04em]">
                        {item.companyName}
                      </span>
                    </div>

                    <span className="font-geist uppercase tracking-[0.02em] text-[12px] font-normal text-[#6B7280]">
                      {new Date(item.date)
                        .toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                        .replace(/(\d+)/, "$1th")}
                    </span>
                  </div>
                  <p className="font-alte text-[15px] leading-[1.5] tracking-[-0.04em] font-normal text-slate-800 mt-2">
                    {item.excerpt}
                  </p>
                </div>
                <div className="w-fit mt-2">
                  <BracketButton
                    label="Read More"
                    href={item.link}
                    variant="secondary"
                    external
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-nav-group">
          <button
            className="swiper-nav-btn releases-swiper-prev"
            aria-label="Previous release"
          >
            <ArrowLeft size={24} color="#0062FF" />
          </button>
          <button
            className="swiper-nav-btn releases-swiper-next"
            aria-label="Next release"
          >
            <ArrowRight size={24} color="#0062FF" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectReleases;
