import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  fill?: boolean;
  style?: React.CSSProperties;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 75,
  placeholder = "empty",
  blurDataURL,
  fill = false,
  style,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px 0px",
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  // Generate optimized image props
  const imageProps = {
    src,
    alt,
    className: `transition-opacity duration-300 ${
      isLoaded ? "opacity-100" : "opacity-0"
    } ${className}`,
    onLoad: handleLoad,
    onError: handleError,
    sizes,
    quality,
    placeholder,
    blurDataURL,
    style,
    ...(fill ? { fill } : { width, height }),
  };

  // Show placeholder while loading
  if (!isInView) {
    return (
      <div
        ref={imgRef}
        className={`bg-gray-200 animate-pulse rounded ${className}`}
        style={fill ? { width: "100%", height: "100%" } : { width, height }}
      />
    );
  }

  // Show error state
  if (error) {
    return (
      <div
        className={`bg-gray-100 flex items-center justify-center text-gray-500 text-sm ${className}`}
        style={fill ? { width: "100%", height: "100%" } : { width, height }}
      >
        <span>Image failed to load</span>
      </div>
    );
  }

  return (
    <div ref={imgRef} className="relative">
      <Image {...imageProps} />
    </div>
  );
};

export default OptimizedImage;
