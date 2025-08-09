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
		<section className='section'>
			<span className='section_label'>{data.subtitle}</span>
			<hr className='bg-[#E2E8F0] max-w-[540px] mx-auto w-full' />
			<h2 className='section_title'>
				{data.title}
				<br />
				<span className='italic'>{data.titleHighlight}</span>
			</h2>
			<div className='w-full relative'>
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
					className='!p-4 !-mx-4 [&_.swiper-wrapper]:!items-stretch'
				>
					{data.reviews.map((item, index) => (
						<SwiperSlide key={index} className='!h-auto'>
							<div className='review_card h-full flex flex-col justify-between w-full min-h-full'>
								<p className='text-base text-[#1E293B] font-normal flex-grow'>
									{item.review}
								</p>
								<div className='flex items-center justify-between gap-4 pt-4 border-t border-t-[#E2E8F0]'>
									<div className='flex flex-col items-start gap-2'>
										<span className='text-sm font-semibold text-[#0D162F]'>
											{item.name}
										</span>
										<span className='text-xs text-[#868A97]'>
											{item.designation}
										</span>
									</div>
									{item.logo && (
										<Image
											src={item.logo}
											alt={`${item.name} logo`}
											width={40}
											height={40}
										/>
									)}
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className='swiper-nav-group'>
					<button
						className='swiper-nav-btn testimonial-swiper-prev'
						aria-label='Previous testimonial'
					>
						<ArrowLeft size={24} color='#0062FF' />
					</button>
					<button
						className='swiper-nav-btn testimonial-swiper-next'
						aria-label='Next testimonial'
					>
						<ArrowRight size={24} color='#0062FF' />
					</button>
				</div>
			</div>
		</section>
	);
};

export default ProjectTestimonial;
