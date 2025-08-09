"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
		<section className='section'>
			<span className='section_label'>{data.subtitle}</span>
			<hr className='bg-[#E2E8F0] max-w-[540px] mx-auto w-full' />
			<h2 className='section_title'>
				{data.title} <span className='italic'>{data.titleHighlight}</span>
			</h2>
			<div className='w-full relative'>
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
					className='!p-4 !-mx-4'
				>
					{data.releases.map((item, index) => (
						<SwiperSlide key={index}>
							<div className='release_card h-full flex flex-col justify-between'>
								<div className='p-3 rounded-lg border border-[#E2E8F0] bg-[#F1F5F9]'>
									{item.image && (
										<Image
											src={item.image}
											alt={item.alt}
											width={540}
											height={300}
											className='w-full h-auto rounded-lg'
										/>
									)}
									<div className='flex items-end justify-between gap-2 mt-4'>
										<Image
											src={"/cslogo_dark.svg"}
											alt={`${item.companyName} logo`}
											width={120}
											height={36}
											className='max-w-[120px] -ms-2'
										/>
										<span className='text-xs text-[#6B7280]'>{item.date}</span>
									</div>
									<p className='text-sm text-[#374151] mt-2'>{item.excerpt}</p>
								</div>
								<a
									href={item.link}
									target='_blank'
									rel='noopener noreferrer'
									className='button_blue_border w-fit !py-2'
								>
									Read More
									<ArrowRight size={16} className='ms-1' />
								</a>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className='swiper-nav-group'>
					<button
						className='swiper-nav-btn releases-swiper-prev'
						aria-label='Previous release'
					>
						<ArrowLeft size={24} color='#0062FF' />
					</button>
					<button
						className='swiper-nav-btn releases-swiper-next'
						aria-label='Next release'
					>
						<ArrowRight size={24} color='#0062FF' />
					</button>
				</div>
			</div>
		</section>
	);
};

export default ProjectReleases;
