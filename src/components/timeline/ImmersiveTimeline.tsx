
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Award, Users, Globe, BookOpen, Heart, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  location: string;
  category: 'foundation' | 'education' | 'humanitarian' | 'recognition' | 'innovation';
  description: string;
  impact: string;
  image: string;
  achievements: string[];
  globalReach?: string;
}

const milestones: TimelineMilestone[] = [
  {
    id: '1970s',
    year: '1970s',
    title: 'Foundation in Kerala',
    location: 'Kerala, India',
    category: 'foundation',
    description: 'Early life shaped by profound Islamic scholarship traditions and family values, laying the groundwork for a lifetime of service.',
    impact: 'Established foundational principles that would guide decades of humanitarian work',
    image: '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg',
    achievements: ['Traditional Islamic education', 'Family scholarly lineage', 'Early community involvement']
  },
  {
    id: '1992',
    year: '1992',
    title: 'Dubai Arrival & DIIC Foundation',
    location: 'Dubai, UAE',
    category: 'foundation',
    description: 'Established Dubai Indian Islamic Centre, marking the beginning of transformative community service in the UAE.',
    impact: 'Created the foundation for serving 50,000+ expatriate families',
    image: '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png',
    achievements: ['Founded Dubai Indian Islamic Centre', 'Started repatriation services', 'Initiated Arabic-English language programs'],
    globalReach: 'UAE expatriate community'
  },
  {
    id: '1995',
    year: '1995',
    title: 'Literary Breakthrough',
    location: 'Dubai, UAE',
    category: 'recognition',
    description: 'Published "Is the Creation Meaningless?" - a philosophical masterpiece that would influence readers across continents.',
    impact: 'Translated into multiple languages, reaching global Islamic scholarly discourse',
    image: '/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png',
    achievements: ['Published first major work', 'Multi-language translation', 'International philosophical recognition'],
    globalReach: 'Global Islamic scholarship'
  },
  {
    id: '2013',
    year: '2013',
    title: 'Educational Revolution - DQAA',
    location: 'Kerala, India',
    category: 'education',
    description: 'Founded Darul Quran Abdulla Academy, revolutionizing Islamic education with modern pedagogy and academic excellence.',
    impact: '1,000+ students graduated, 95% academic success rate, global recognition',
    image: '/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png',
    achievements: ['Established DQAA campus', 'Integrated modern curriculum', 'Achieved 95% success rate'],
    globalReach: 'International Islamic education'
  },
  {
    id: '2020s',
    year: '2020s',
    title: 'Global Legacy & Future Vision',
    location: 'Global',
    category: 'innovation',
    description: 'Continuing to influence Islamic education, interfaith dialogue, and humanitarian initiatives across continents.',
    impact: 'Active in 25+ countries, mentoring next generation of leaders',
    image: '/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png',
    achievements: ['Global educational influence', 'Interfaith dialogue leadership', 'Next-generation mentorship'],
    globalReach: 'Worldwide impact'
  }
];

const ImmersiveTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const timelineProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 100]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'foundation': return Heart;
      case 'education': return BookOpen;
      case 'humanitarian': return Users;
      case 'recognition': return Award;
      case 'innovation': return Star;
      default: return Calendar;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'foundation': return 'from-red-500 to-red-600';
      case 'education': return 'from-blue-500 to-blue-600';
      case 'humanitarian': return 'from-green-500 to-green-600';
      case 'recognition': return 'from-golden-500 to-golden-600';
      case 'innovation': return 'from-purple-500 to-purple-600';
      default: return 'from-royal-500 to-royal-600';
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-br from-royal-900 via-royal-800 to-golden-900">
      {/* Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-golden-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-royal-400/20 to-transparent rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-playfair">
            The Journey of Impact
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-golden-400 to-golden-600 mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            From the scholarly traditions of Kerala to global educational innovation, 
            discover the pivotal moments that shaped Dr. P.T. Abdul Rahman's extraordinary legacy.
          </p>
        </motion.div>

        {/* Timeline Progress Bar */}
        <div className="relative mb-16">
          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-golden-400 to-golden-600"
              style={{ width: isInView ? timelineProgress : '0%' }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Timeline Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {milestones.map((milestone, index) => {
            const IconComponent = getCategoryIcon(milestone.category);
            return (
              <motion.button
                key={milestone.id}
                onClick={() => setActiveIndex(index)}
                className={`p-4 rounded-xl transition-all duration-300 text-center ${
                  activeIndex === index 
                    ? 'bg-white text-royal-900 shadow-2xl scale-105' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-r ${getCategoryColor(milestone.category)} flex items-center justify-center`}>
                  <IconComponent size={24} className="text-white" />
                </div>
                <div className="text-sm font-bold">{milestone.year}</div>
                <div className="text-xs opacity-75">{milestone.title}</div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Milestone Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${getCategoryColor(milestones[activeIndex].category)} flex items-center justify-center`}>
                    {React.createElement(getCategoryIcon(milestones[activeIndex].category), { size: 32, className: 'text-white' })}
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold font-playfair">{milestones[activeIndex].title}</h3>
                    <div className="flex items-center gap-2 text-golden-300 mt-2">
                      <Calendar size={16} />
                      <span>{milestones[activeIndex].year}</span>
                      <MapPin size={16} className="ml-2" />
                      <span>{milestones[activeIndex].location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xl text-white/90 leading-relaxed mb-6">
                  {milestones[activeIndex].description}
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-golden-300 mb-4 flex items-center gap-2">
                    <Globe size={20} />
                    Global Impact
                  </h4>
                  <p className="text-white/80">{milestones[activeIndex].impact}</p>
                  {milestones[activeIndex].globalReach && (
                    <p className="text-golden-300 mt-2 text-sm">
                      Reach: {milestones[activeIndex].globalReach}
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-golden-300">Key Achievements</h4>
                  {milestones[activeIndex].achievements.map((achievement, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-golden-400 rounded-full" />
                      <span className="text-white/90">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={milestones[activeIndex].image}
                    alt={milestones[activeIndex].title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white">
                      <div className="text-3xl font-bold mb-2">{milestones[activeIndex].year}</div>
                      <div className="text-golden-300">{milestones[activeIndex].category.toUpperCase()}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <motion.div 
          className="flex justify-center gap-4 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            variant="outline"
            onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="border-white/30 text-white hover:bg-white/10"
          >
            Previous Chapter
          </Button>
          <Button
            variant="outline"
            onClick={() => setActiveIndex(Math.min(milestones.length - 1, activeIndex + 1))}
            disabled={activeIndex === milestones.length - 1}
            className="border-white/30 text-white hover:bg-white/10"
          >
            Next Chapter
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ImmersiveTimeline;
