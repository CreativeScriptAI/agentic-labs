import React from "react";

interface OptimizedSVGProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  style?: React.CSSProperties;
}

const OptimizedSVG: React.FC<OptimizedSVGProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
  fill,
  stroke,
  style,
}) => {
  // For external SVG files, use img tag with optimization
  if (src.startsWith("http") || src.startsWith("/")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt || ""}
        className={className}
        width={width}
        height={height}
        style={style}
        loading="lazy"
      />
    );
  }

  // For inline SVGs, render directly
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      style={style}
      aria-label={alt}
      role="img"
      dangerouslySetInnerHTML={{ __html: src }}
    />
  );
};

export default OptimizedSVG;
