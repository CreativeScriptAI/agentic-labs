import Image from "next/image";
import Marquee from "react-fast-marquee";

interface ProjectTrustedByProps {
	data: {
		title: string;
		logos: Array<{
			src: string;
			alt: string;
		}>;
	};
}

const ProjectTrustedBy = ({ data }: ProjectTrustedByProps) => {
	return (
		<section className='section text-center'>
			<h2 className='font-semibold text-xs text-[#475569] mb-6'>
				{data.title}
			</h2>
			<Marquee
				gradient={false}
				speed={60}
				style={{ whiteSpace: "nowrap" }}
				loop={0}
			>
				{data.logos.map((item: any) => {
					return (
						item.src && (
							<Image
								src={item.src}
								alt={item.alt}
								width={120}
								height={48}
								style={{ marginLeft: "48px" }}
								key={item.alt}
							/>
						)
					);
				})}
			</Marquee>
		</section>
	);
};

export default ProjectTrustedBy;
