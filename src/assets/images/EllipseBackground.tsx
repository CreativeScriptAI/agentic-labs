import React from "react";

const EllipseBackground: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="434"
      viewBox="0 0 1440 434"
      fill="none"
    >
      <g opacity="0.2" filter="url(#filter0_f_655_1576)">
        <path
          d="M160 -185.166C160 -304.92 410.721 -402 720 -402C1029.28 -402 1280 -304.92 1280 -185.166C1280 -65.4113 1029.28 274 720 274C410.721 274 160 -65.4114 160 -185.166Z"
          fill="url(#paint0_linear_655_1576)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_655_1576"
          x="0"
          y="-562"
          width="1440"
          height="996"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="80"
            result="effect1_foregroundBlur_655_1576"
          />
        </filter>
        <linearGradient
          id="paint0_linear_655_1576"
          x1="740.434"
          y1="333.234"
          x2="740.434"
          y2="-582.448"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0062FF" />
          <stop offset="1" stopColor="#0062FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default EllipseBackground;
