import Image from "next/image";
import Link from "next/link";

interface ProjectHeaderProps {
	data: {
		brandName: string;
		tryButtonText: string;
		tryButtonIcon: string;
	};
}

const ProjectHeader = ({ data }: ProjectHeaderProps) => {
	return (
		<header className='flex items-center justify-between bg-white rounded-xl shadow-[0px_2px_8px_0px_#0000001A,0px_6px_25px_0px_#00000014,0px_0px_0px_1px_#0000000F] p-2 pl-8 max-w-[742px] mx-auto mt-4 max-md:mx-4'>
			<Link href='/'>{data.brandName}</Link>
			<a href='' className='button_blue'>
				{data.tryButtonIcon && (
					<Image src={data.tryButtonIcon} alt='' width={16} height={16} />
				)}

				{data.tryButtonText}
			</a>
		</header>
	);
};

export default ProjectHeader;
