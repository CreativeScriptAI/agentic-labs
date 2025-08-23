import React, { useState, useEffect, useCallback, useRef } from "react";

interface TypewriterEffectProps {
  words: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  className = "",
  speed = 100,
  deleteSpeed = 50,
  delay = 2000,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile for performance optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const typeNextChar = useCallback(() => {
    const currentWord = words[currentWordIndex];

    if (!isDeleting) {
      if (currentText.length < currentWord.length) {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      } else {
        // Finished typing, start deleting after delay
        setTimeout(() => setIsDeleting(true), delay);
        return;
      }
    } else {
      if (currentText.length > 0) {
        setCurrentText(currentText.slice(0, -1));
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }
  }, [currentText, currentWordIndex, isDeleting, words, delay]);

  useEffect(() => {
    // Use requestAnimationFrame for better performance on mobile
    const animate = () => {
      typeNextChar();
      animationRef.current = requestAnimationFrame(() => {
        setTimeout(animate, isDeleting ? deleteSpeed : speed);
      });
    };

    animationRef.current = requestAnimationFrame(() => {
      setTimeout(animate, isDeleting ? deleteSpeed : speed);
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [typeNextChar, isDeleting, deleteSpeed, speed]);

  // Optimize cursor animation for mobile
  const cursorStyle = isMobile ? { animationDuration: "1s" } : {};

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse" style={cursorStyle}>
        |
      </span>
    </span>
  );
};

export default TypewriterEffect;
