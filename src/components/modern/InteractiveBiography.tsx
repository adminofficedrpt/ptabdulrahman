
import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface BiographyMilestone {
  id: string;
  year: string;
  title: string;
  location: string;
  description: string;
  image: string;
  achievements: string[];
  category: 'education' | 'career' | 'founding' | 'recognition';
}

const milestones: BiographyMilestone[] = [
  {
    id: '1',
    year: 'Early Life',
    title: 'Foundation in Kerala',
    location: 'Kerala, India',
    description: 'Born into a lineage of Islamic scholarship in Kerala, Dr. Rahman\'s early life was shaped by profound loss and remarkable resilience.',
    image: '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg',
    achievements: ['Overcame early challenges', 'Strong family foundation', 'Early religious education'],
    category: 'education'
  },
  {
    id: '2',
    year: '1970s-1980s',
    title: 'Academic Excellence',
    location: 'Palakkod & Mysore',
    description: 'Advanced theological studies at prestigious institutions, culminating in a Master of Arts in Sociology from University of Mysore.',
    image: '/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png',
    achievements: ['Dars completion', 'MA in Sociology', 'Multilingual mastery'],
    category: 'education'
  },
  {
    id: '3',
    year: '1992',
    title: 'Dubai Arrival',
    location: 'Dubai, UAE',
    description: 'Established the Dubai Indian Islamic Centre, beginning a transformative journey in the UAE.',
    image: '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png',
    achievements: ['Founded DIIC', 'Community leadership', 'Cultural bridge-building'],
    category: 'founding'
  },
  {
    id: '4',
    year: '1995',
    title: 'Literary Breakthrough',
    location: 'Dubai, UAE',
    description: 'Published "Is the Creation Meaningless?" - a philosophical masterpiece that would influence readers across continents.',
    image: '/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png',
    achievements: ['First major publication', 'Multi-language release', 'International recognition'],
    category: 'recognition'
  },
  {
    id: '5',
    year: '2013',
    title: 'Educational Legacy',
    location: 'Kerala, India',
    description: 'Founded Darul Quran Abdulla Academy (DQAA), revolutionizing Islamic education with modern pedagogy.',
    image: '/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png',
    achievements: ['Established DQAA', 'Educational innovation', 'Modern Islamic curriculum'],
    category: 'founding'
  }
];

const InteractiveBiography = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % milestones.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + milestones.length) % milestones.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % milestones.length);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'education': return 'from-blue-500 to-blue-600';
      case 'career': return 'from-green-500 to-green-600';
      case 'founding': return 'from-royal-500 to-royal-600';
      case 'recognition': return 'from-golden-500 to-golden-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity, scale }}
      className="py-32 relative overflow-hidden bg-gradient-to-br from-royal-50 via-white to-golden-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#4a5568_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-royal-800 mb-6 font-playfair">
            A Life's Journey
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-royal-500 to-golden-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From the scholarly traditions of Kerala to the cosmopolitan landscape of Dubai, 
            discover the milestones that shaped a visionary leader.
          </p>
        </motion.div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Timeline Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${
                  index === activeIndex 
                    ? 'border-royal-300 bg-royal-50 shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-royal-200 hover:shadow-md'
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getCategoryColor(milestone.category)}`}></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-royal-800">{milestone.year}</h3>
                    <p className="text-sm text-gray-600">{milestone.title}</p>
                  </div>
                  {index === activeIndex && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-royal-500 rounded-full"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Display */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={milestones[activeIndex].image}
                    alt={milestones[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(milestones[activeIndex].category)}`}>
                      {milestones[activeIndex].category.charAt(0).toUpperCase() + milestones[activeIndex].category.slice(1)}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{milestones[activeIndex].year}</span>
                    <MapPin className="w-4 h-4 ml-2" />
                    <span>{milestones[activeIndex].location}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-royal-800 mb-4 font-playfair">
                    {milestones[activeIndex].title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {milestones[activeIndex].description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-royal-700 text-sm uppercase tracking-wide">Key Achievements</h4>
                    {milestones[activeIndex].achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Star className="w-3 h-3 text-golden-500" />
                        <span className="text-sm text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevious}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              <div className="flex gap-2">
                {milestones.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'bg-royal-500 w-8' : 'bg-gray-300'
                    }`}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsAutoPlaying(false);
                    }}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={handleNext}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default InteractiveBiography;
