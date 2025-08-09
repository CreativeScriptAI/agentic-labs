import Image from "next/image";

interface ProjectSetupProps {
	data: {
		title: string;
		titleHighlight: string;
		subtitle: string;
		image: string;
		features: string[];
	};
}

const ProjectSetup = ({ data }: ProjectSetupProps) => {
	return (
		<section className='section'>
			<div className='flex flex-col items-center justify-center text-center mb-8 gap-3'>
				<h2 className='section_title !mb-0'>
					{data.title} <span className='italic'>{data.titleHighlight}</span>
				</h2>
				<span>{data.subtitle}</span>
			</div>

			<div className='w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
				<div className='flex flex-col w-full relative gap-4 md:gap-10 max-md:order-2'>
					{data.features.slice(0, 3).map((item, idx) => (
						<div
							key={idx}
							className='setup_card'
							style={{
								marginLeft: `${idx * 40}px`,
								transition: "all 0.3s",
							}}
						>
							{item}
						</div>
					))}
				</div>

				{data.image && (
					<Image
						src={data.image}
						alt='Setup Image'
						className='w-full max-w-[320px] h-auto max-md:order-1'
						width={320}
						height={320}
					/>
				)}

				<div className='flex flex-col w-full relative gap-4 md:gap-10 max-md:order-3'>
					{data.features.slice(3).map((item, idx) => (
						<div
							key={idx}
							className='setup_card'
							style={{
								alignSelf: "flex-end",
								marginRight: `${idx * 40}px`,
								transition: "all 0.3s",
							}}
						>
							{item}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectSetup;
