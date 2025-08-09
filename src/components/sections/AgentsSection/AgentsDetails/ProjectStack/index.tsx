"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface ProjectStackProps {
	data: {
		subtitle: string;
		title: string;
		titleHighlight: string;
		items: Array<{
			src: string;
			alt: string;
		}>;
	};
}

const ProjectStack = ({ data }: ProjectStackProps) => {
	return (
		<section className='section'>
			<span className='section_label'>{data.subtitle}</span>
			<hr className='bg-[#E2E8F0] max-w-[540px] mx-auto w-full' />
			<h2 className='section_title'>
				{data.title} <span className='italic'>{data.titleHighlight}</span>
			</h2>
			<div className='w-full'>
				<Swiper
					spaceBetween={24}
					slidesPerView={2}
					grabCursor={true}
					breakpoints={{
						640: { slidesPerView: 3 },
						1024: { slidesPerView: 4 },
						1280: { slidesPerView: 5 },
					}}
					className='cursor-grab !p-4 !-mx-4'
				>
					{data.items.map((item, index) => (
						<SwiperSlide key={index}>
							<div className='stack_card'>
								{item.src && (
									<Image src={item.src} alt={item.alt} width={60} height={48} />
								)}
								<span className='text-sm md:text-base text-[#0F172A] font-medium'>
									{item.alt}
								</span>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default ProjectStack;
