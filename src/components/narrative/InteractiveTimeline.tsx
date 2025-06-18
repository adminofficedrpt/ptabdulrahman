
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Calendar, Award, Users, BookOpen } from 'lucide-react';

const InteractiveTimeline = () => {
  const [selectedEra, setSelectedEra] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineEras = [
    {
      period: "1992-1995",
      title: "Foundation Years",
      subtitle: "Building the Cornerstone",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      achievements: [
        {
          year: "1992",
          milestone: "Founded Dubai Indian Islamic Centre",
          impact: "Created the first comprehensive support system for Indian expatriates in Dubai",
          details: "Establishing institutional foundation for community service"
        },
        {
          year: "1994",
          milestone: "Pioneered UAE's First Free Medical Camps",
          impact: "Provided healthcare access to thousands of underserved expatriates",
          details: "Revolutionary approach to community healthcare in the UAE"
        },
        {
          year: "1995",
          milestone: "Published 'Is the Creation Meaningless?'",
          impact: "First philosophical work reaching global Islamic scholarship",
          details: "Multilingual publication establishing his scholarly voice"
        }
      ]
    },
    {
      period: "1996-2005",
      title: "Government Service",
      subtitle: "Institutional Impact",
      icon: Award,
      color: "from-emerald-500 to-emerald-600",
      achievements: [
        {
          year: "1996",
          milestone: "Joined Dubai Islamic Affairs Department",
          impact: "Shaped governmental approach to Islamic education and media",
          details: "Bridging community needs with official policy"
        },
        {
          year: "1998",
          milestone: "First Inter-Madrasa Quran Competition",
          impact: "Elevated standards of Quranic education across UAE",
          details: "Creating excellence benchmarks in Islamic education"
        },
        {
          year: "2001",
          milestone: "Pioneered Televised Islamic Programming",
          impact: "First Islamic TV program promoting interfaith unity on Asianet",
          details: "Breaking new ground in religious media representation"
        }
      ]
    },
    {
      period: "2005-2013",
      title: "Entrepreneurial Vision",
      subtitle: "Independent Innovation",
      icon: BookOpen,
      color: "from-purple-500 to-purple-600",
      achievements: [
        {
          year: "2005",
          milestone: "Founded Insight Group",
          impact: "Created platform for thought leadership and social innovation",
          details: "Transitioning from institutional to entrepreneurial impact"
        },
        {
          year: "2006",
          milestone: "Became Recognized Columnist",
          impact: "Influenced global discourse on Islamic affairs and social issues",
          details: "Establishing voice in international intellectual circles"
        }
      ]
    },
    {
      period: "2013-Present",
      title: "Educational Legacy",
      subtitle: "Institutional Renaissance",
      icon: Calendar,
      color: "from-golden-500 to-golden-600",
      achievements: [
        {
          year: "2013",
          milestone: "Founded Darul Quran Abdulla Academy",
          impact: "Revolutionary Islamic education model combining tradition with innovation",
          details: "Creating the cornerstone of his educational legacy"
        },
        {
          year: "2017",
          milestone: "Established ABR Academy in Kerala",
          impact: "Extended educational impact to his homeland",
          details: "Bridging UAE innovations with Kerala's educational landscape"
        },
        {
          year: "2022",
          milestone: "Founded Shamsa Academy for Girls",
          impact: "Pioneered women's Islamic education excellence",
          details: "Advancing gender-inclusive Islamic scholarship"
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-royal-50 to-gray-50">
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
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-light text-royal-900 mb-6">
            Moments That Shaped History
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-golden-500 to-transparent mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Three decades of purposeful action, each moment building toward a legacy that continues to transform lives.
          </p>
        </motion.div>

        {/* Era Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {timelineEras.map((era, index) => {
            const IconComponent = era.icon;
            return (
              <motion.button
                key={index}
                onClick={() => setSelectedEra(index)}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-300 flex items-center space-x-2 ${
                  selectedEra === index
                    ? 'bg-royal-900 text-white border-royal-900'
                    : 'bg-white text-royal-800 border-gray-200 hover:border-royal-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent size={16} />
                <span className="font-medium text-sm">{era.period}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Timeline Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedEra}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            {/* Era Header */}
            <div className="text-center mb-12">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${timelineEras[selectedEra].color} text-white mb-4`}>
                {React.createElement(timelineEras[selectedEra].icon, { size: 24 })}
              </div>
              <h3 className="text-3xl font-playfair font-medium text-royal-900 mb-2">
                {timelineEras[selectedEra].title}
              </h3>
              <p className="text-xl text-golden-600 font-light">
                {timelineEras[selectedEra].subtitle}
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {timelineEras[selectedEra].achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${timelineEras[selectedEra].color}`}>
                      {achievement.year}
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-royal-600 transition-colors" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-royal-800 mb-3 leading-tight">
                    {achievement.milestone}
                  </h4>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    {achievement.impact}
                  </p>
                  
                  <p className="text-xs text-gray-500 italic">
                    {achievement.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default InteractiveTimeline;
