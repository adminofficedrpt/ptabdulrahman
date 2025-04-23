
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true,
  className = ''
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-royal-800 font-playfair mb-4">{title}</h2>
        
        {subtitle && (
          <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        )}
        
        <div className="w-24 h-1 bg-gradient-to-r from-golden-400 to-golden-600 mt-6 mb-2 
          rounded-full mx-auto transition-all duration-300 hover:w-32"></div>
      </motion.div>
    </div>
  );
};

export default SectionHeading;
