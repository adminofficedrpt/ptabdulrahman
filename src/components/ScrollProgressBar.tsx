
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollProgressBarProps {
  color?: string;
  height?: number;
}

const ScrollProgressBar = ({ 
  color = "#D2A114",
  height = 4
}: ScrollProgressBarProps) => {
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Use spring animation for smoother progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isScrolled) return null;
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] origin-left"
      style={{
        height,
        backgroundColor: color,
        scaleX,
        transformOrigin: "left",
      }}
    />
  );
};

export default ScrollProgressBar;
