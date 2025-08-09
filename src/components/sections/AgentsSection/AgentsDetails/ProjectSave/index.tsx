"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";

interface ProjectSaveProps {
	data: {
		title: string;
		titleHighlight: string;
		image: string;
		accordion: Array<{
			title: string;
			icon: string;
			description: string;
		}>;
		ctaButton: {
			text: string;
			link: string;
		};
	};
}

const ProjectSave = ({ data }: ProjectSaveProps) => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const handleToggle = (idx: number) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

	return (
		<section className='section'>
			<h2 className='section_title'>
				{data.title} <span className='italic'>{data.titleHighlight}</span>
			</h2>
			<div className='w-full mx-auto flex flex-col-reverse md:flex-row justify-between gap-8 max-md:items-center'>
				<div className='flex flex-col gap-4 w-full max-w-[480px]'>
					{/* Accordion menu */}
					<div className='bg-white accordion_container'>
						{data.accordion.map((item, idx) => {
							const isOpen = openIndex === idx;
							return (
								<div
									key={item.title}
									className='border-b rounded-lg bg-white w-full'
								>
									<button
										type='button'
										onClick={() => handleToggle(idx)}
										className={`w-full items-start gap-2 flex justify-between p-6 transition-all duration-200 ${
											isOpen && "pb-3"
										}`}
									>
										<span
											className={`flex gap-3 transition-all w-full ${
												isOpen ? "flex-col" : ""
											}`}
										>
											{item.icon && (
												<Image
													src={item.icon}
													alt={item.title}
													width={isOpen ? 48 : 24}
													height={isOpen ? 48 : 24}
													className={`transition-all shrink-0 ${
														isOpen ? "mb-1" : ""
													}`}
													style={{
														width: isOpen ? 48 : 24,
														height: isOpen ? 48 : 24,
													}}
												/>
											)}

											<span
												className={`text-lg font-medium text-left ${
													isOpen ? "text-xl mt-1" : ""
												}`}
											>
												{item.title}
											</span>
										</span>
										<ChevronDown
											className={`ml-auto transition-transform ${
												isOpen ? "rotate-180" : ""
											}`}
											size={24}
										/>
									</button>
									{isOpen && (
										<div className='p-6 pt-0 text-[#475569] text-sm md:text-base'>
											{item.description}
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
				{data.image && (
					<Image
						src={data.image}
						alt='Save Image'
						className='w-full max-w-[540px]'
						width={540}
						height={380}
					/>
				)}
			</div>
			<Link
				href={data.ctaButton.link}
				className='button_blue_border w-fit max-md:mx-auto md:me-auto mt-2'
			>
				{data.ctaButton.text}
				<ArrowUpRight size={20} />
			</Link>
		</section>
	);
};

export default ProjectSave;
