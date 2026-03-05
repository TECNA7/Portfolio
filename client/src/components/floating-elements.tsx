import { useEffect, useState } from "react";

const FloatingElements = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shapes = [
    { size: "w-8 h-8", color: "bg-accent", shape: "coffee-bean", top: "10%", left: "5%", delay: "0s" },
    { size: "w-6 h-6", color: "bg-primary", shape: "coffee-bean-small", top: "20%", right: "10%", delay: "-2s" },
    { size: "w-10 h-10", color: "bg-secondary", shape: "coffee-bean-large", top: "60%", left: "8%", delay: "-4s" },
    { size: "w-4 h-4", color: "bg-accent", shape: "coffee-bean", top: "80%", right: "15%", delay: "-1s" },
    { size: "w-8 h-8", color: "bg-primary", shape: "coffee-bean-rotated", top: "40%", right: "5%", delay: "-5s" },
    { size: "w-5 h-5", color: "bg-muted-foreground", shape: "coffee-bean-oval", top: "30%", left: "15%", delay: "-3s" },
    { size: "w-7 h-7", color: "bg-accent", shape: "coffee-bean-small", top: "70%", right: "25%", delay: "-6s" },
    { size: "", color: "bg-primary", shape: "coffee-steam", top: "15%", left: "85%", delay: "-1.5s" },
    { size: "", color: "bg-accent", shape: "coffee-steam", top: "45%", left: "90%", delay: "-4.5s" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted" />
      
      {/* Floating Shapes */}
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`floating-shape ${shape.size} ${shape.color} ${shape.shape}`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            animationDelay: shape.delay,
            transform: `translateY(${scrollY * (0.02 + index * 0.01)}px) rotate(${scrollY * (0.02 + index * 0.01)}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
