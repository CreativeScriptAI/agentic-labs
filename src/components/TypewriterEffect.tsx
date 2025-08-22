import React, { useState, useEffect, useCallback } from "react";

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
    const interval = setInterval(
      typeNextChar,
      isDeleting ? deleteSpeed : speed
    );
    return () => clearInterval(interval);
  }, [typeNextChar, isDeleting, deleteSpeed, speed]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterEffect;
