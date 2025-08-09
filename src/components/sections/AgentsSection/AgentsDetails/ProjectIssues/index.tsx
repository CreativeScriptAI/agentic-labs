import Image from "next/image";

interface ProjectIssuesProps {
	data: {
		title: string;
		titleHighlight: string;
		image: string;
		issues: string[];
	};
}

const ProjectIssues = ({ data }: ProjectIssuesProps) => {
	return (
		<section className='section'>
			<h2 className='section_title'>
				{data.title}{" "}
				<span className='underline_custom'>{data.titleHighlight}</span>
			</h2>
			<div className='flex flex-col md:flex-row items-center justify-between gap-8 w-full'>
				{data.image && (
					<Image
						src={data.image}
						alt='Issues Image'
						width={360}
						height={292}
						className='w-full h-auto max-w-96'
					/>
				)}
				<ul className='flex flex-col items-start gap-4'>
					{data.issues.map((issue, index) => (
						<li key={index} className='flex items-start gap-2'>
							<span className='block w-5 h-5 bg-[#0062FF] shrink-0 mt-1'></span>
							<span className='text-base font-normal text-[#1E293B]'>
								{issue}
							</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default ProjectIssues;
