
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollProgressBarProps {
  color?: string;
  height?: number;
  showAfter?: number;
  className?: string;
}

const ScrollProgressBar = ({ 
  color = "#D2A114",
  height = 4,
  showAfter = 50,
  className
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
      setIsScrolled(window.scrollY > showAfter);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  if (!isScrolled) return null;
  
  return (
    <motion.div
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] origin-left", 
        className
      )}
      style={{
        height,
        backgroundColor: color,
        scaleX,
        transformOrigin: "left",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
      }}
    />
  );
};

export default ScrollProgressBar;
