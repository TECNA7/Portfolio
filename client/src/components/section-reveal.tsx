import { useEffect, useRef, ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
}

const SectionReveal = ({ children, className = "" }: SectionRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`section-reveal ${className}`}>
      {children}
    </div>
  );
};

export default SectionReveal;
