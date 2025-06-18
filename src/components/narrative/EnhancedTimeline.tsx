
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, BookOpen, Award, Users, MapPin, Calendar } from 'lucide-react';

const EnhancedTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const milestones = [
    {
      year: "1970s",
      title: "Roots in Kerala",
      subtitle: "Foundation of Purpose",
      description: "Born into a scholarly family in Kerala, early loss of father shapes character under grandmother's guidance. Traditional madrasa education forms the bedrock of future vision.",
      icon: MapPin,
      image: "/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg",
      details: "The formative years in Kerala's rich educational landscape, where traditional Islamic scholarship meets modern aspirations.",
      impact: "Character formation and educational philosophy rooted in compassion and service."
    },
    {
      year: "1990s",
      title: "Dubai Journey Begins",
      subtitle: "Building Bridges",
      description: "Migration to UAE, establishing Dubai Indian Islamic Centre. The beginning of a transformative educational mission that would span continents.",
      icon: Users,
      image: "/lovable-uploads/66572de8-7486-4f48-ac7f-1219779e9bd6.jpg",
      details: "Founding the Dubai Indian Islamic Centre marked the beginning of community-centered educational initiatives.",
      impact: "10,000+ community members served through various programs and initiatives."
    },
    {
      year: "2000s",
      title: "Educational Innovation",
      subtitle: "Darul Quran Foundation",
      description: "Establishment of Darul Quran Abdulla Academy, pioneering modern Islamic education with traditional values. A model for 21st-century Islamic learning.",
      icon: BookOpen,
      image: "/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png",
      details: "Revolutionary approach combining classical Islamic scholarship with contemporary pedagogical methods.",
      impact: "5,000+ students educated with holistic approach to Islamic learning."
    },
    {
      year: "2010s",
      title: "Literary Contributions",
      subtitle: "Scholarly Legacy",
      description: "Prolific author of 15+ influential works spanning Islamic jurisprudence, ethics, and contemporary issues. Academic recognition across multiple languages.",
      icon: Award,
      image: "/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png",
      details: "Published works in Arabic, English, Malayalam, Hindi, Urdu, and Tamil reaching global audiences.",
      impact: "100,000+ readers across 25 countries influenced by scholarly contributions."
    },
    {
      year: "2020s",
      title: "UAE Golden Visa",
      subtitle: "Distinguished Recognition",
      description: "UAE Golden Visa recipient recognizing exceptional contributions to education and community development. A testament to decades of dedicated service.",
      icon: Award,
      image: "/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png",
      details: "Official recognition by UAE government for outstanding contributions to educational and social development.",
      impact: "Continuing legacy of innovation in Islamic education and community leadership."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="container mx-auto px-6"
      >
        {/* Section Header */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-light text-royal-900 mb-6">
            A Journey of Transformation
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-golden-500 to-transparent mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Five decades of purposeful dedication to education, scholarship, and community building
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="max-w-7xl mx-auto">
          
          {/* Timeline Navigation */}
          <div className="flex justify-center mb-16 overflow-x-auto pb-4">
            <div className="flex space-x-4 min-w-max px-4">
              {milestones.map((milestone, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 min-w-[120px] ${
                    activeIndex === index 
                      ? 'bg-royal-100 border-2 border-royal-300' 
                      : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    activeIndex === index ? 'bg-royal-600' : 'bg-gray-300'
                  }`}>
                    <milestone.icon className={`w-6 h-6 ${
                      activeIndex === index ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  <span className={`text-sm font-medium ${
                    activeIndex === index ? 'text-royal-800' : 'text-gray-600'
                  }`}>
                    {milestone.year}
                  </span>
                  <span className={`text-xs text-center ${
                    activeIndex === index ? 'text-royal-600' : 'text-gray-500'
                  }`}>
                    {milestone.subtitle}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Milestone Content */}
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 text-golden-600 mr-2" />
                <span className="text-golden-600 font-medium">{milestones[activeIndex].year}</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-royal-800 mb-4">
                {milestones[activeIndex].title}
              </h3>
              
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                {milestones[activeIndex].description}
              </p>
              
              <div className="bg-royal-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-royal-800 mb-2">Key Details</h4>
                <p className="text-royal-700 leading-relaxed">{milestones[activeIndex].details}</p>
              </div>
              
              <div className="bg-golden-50 p-6 rounded-xl">
                <h4 className="font-semibold text-golden-800 mb-2">Impact</h4>
                <p className="text-golden-700 leading-relaxed">{milestones[activeIndex].impact}</p>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={milestones[activeIndex].image}
                  alt={milestones[activeIndex].title}
                  className="w-full h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Video Play Button (placeholder) */}
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 text-royal-800 ml-1" />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-16">
            <div className="flex space-x-2">
              {milestones.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-royal-600' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedTimeline;
