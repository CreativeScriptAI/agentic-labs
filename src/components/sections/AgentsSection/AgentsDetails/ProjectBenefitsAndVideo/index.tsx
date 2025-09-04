"use client"
import React, { useState } from 'react'
import SkeletonLoader from 'src/components/SkeletonLoader';

interface ProjectBenefitsAndVideoProps {
  data: {
    benefits: Array<{
      text: string;
      icon: string;
    }>;
    heroImage: string;
  };

}

function ProjectBenefitsAndVideo({ data }: ProjectBenefitsAndVideoProps) {

      const isVideo = data.heroImage.endsWith(".mp4");
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
     <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        <ul className="flex flex-col items-start md:items-start gap-2 md:gap-4 font-sfpro text-xs md:text-sm text-slate-800 font-medium lg:w-1/2">
          {data.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-1 text-slate-600">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                >
                  <path
                    d="M9.03409 19.0342C14.0235 19.0342 18.0682 14.9895 18.0682 10.0001C18.0682 5.0107 14.0235 0.966003 9.03409 0.966003C4.0447 0.966003 0 5.0107 0 10.0001C0 14.9895 4.0447 19.0342 9.03409 19.0342Z"
                    fill="#0062FF"
                  />
                  <path
                    d="M13.0994 7.2901L7.50733 12.4666L4.96875 10.1178"
                    stroke="white"
                    strokeWidth="1.80682"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-left">
                <span className="text-slate-600">{benefit.text}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center gap-5 md:gap-6 lg:w-1/2">
          <div className="relative">
            {isLoading && <SkeletonLoader />}
            {isVideo ? (
              <video
                className={`w-full max-w-[440px] rounded-lg transition-opacity duration-300 ${
                  isLoading ? "opacity-0 absolute inset-0" : "opacity-100"
                }`}
                autoPlay
                controlsList="nodownload noplaybackrate"
                controls
                disablePictureInPicture
                loop
                playsInline
                onLoadedData={(e) => {
                  (e.target as HTMLVideoElement).volume = 0;
                  handleLoad();
                }}
              >
                <source src={data.heroImage} type="video/mp4" />
              </video>
            ) : null}
          </div>
        </div>
      </div>
  )
}

export default ProjectBenefitsAndVideo