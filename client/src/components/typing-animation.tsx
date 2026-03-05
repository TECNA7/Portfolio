import { useState, useEffect } from "react";

interface TypingAnimationProps {
  words: string[];
  className?: string;
}

const TypingAnimation = ({ words, className = "" }: TypingAnimationProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words]);

  return (
    <span className={`typing-animation font-medium ${className}`}>
      {currentText}
    </span>
  );
};

export default TypingAnimation;
