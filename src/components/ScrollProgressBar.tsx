
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

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
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isScrolled) return null;
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] origin-left"
      style={{
        height,
        backgroundColor: color,
        scaleX: scrollYProgress,
        transformOrigin: "left",
      }}
    />
  );
};

export default ScrollProgressBar;
