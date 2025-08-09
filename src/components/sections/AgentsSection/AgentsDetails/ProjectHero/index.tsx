import Image from "next/image";

interface ProjectHeroProps {
	data: {
		subtitle: string;
		title: string;
		titleHighlight: string;
		description: string;
		heroImage: string;
		benefits: Array<{
			text: string;
			icon: string;
		}>;
	};
}

const ProjectHero = ({ data }: ProjectHeroProps) => {
	const isVideo = data.heroImage.endsWith(".mp4");
	return (
		<section className='section text-center !mt-10'>
			<span className='font-medium text-sm md:text-xl text-[#94A3B8]'>
				{data.subtitle}
			</span>
			<h1 className='font-semibold text-4xl md:text-6xl text-[#0F172A]'>
				{data.title}{" "}
				<span className='font-eb-garamond'>{data.titleHighlight}</span>
			</h1>
			<p className='text-sm md:text-xl max-w-[680px] mx-auto'>
				{data.description}
			</p>
			<div className='flex flex-col items-center gap-4'>
				{isVideo ? (
					<video
						className='w-full max-w-[440px] rounded-lg'
						autoPlay
						loop
						muted
					>
						<source src={data.heroImage} type='video/mp4' />
					</video>
				) : (
					<Image
						src={data.heroImage}
						alt='Hero Image'
						width={440}
						height={440}
					/>
				)}
				<ul className='flex flex-col items-center md:flex-row md:items-start gap-2 md:gap-4 text-xs md:text-sm text-[#1E293B] font-medium'>
					{data.benefits.map((benefit, index) => (
						<li key={index} className='flex items-center gap-1'>
							<Image src='/icons/check.svg' alt='' width={18} height={18} />
							<span>{benefit.text}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default ProjectHero;
