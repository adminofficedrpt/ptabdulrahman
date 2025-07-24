
import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { GraduationCap, Star, Award, BookOpen } from 'lucide-react';

const ChapterThree: React.FC = () => {
  const achievements = [
    {
      year: "1995",
      title: "DQAA Foundation",
      description: "Established Darul Quran Abdulla Academy with a vision for holistic Islamic education"
    },
    {
      year: "2005",
      title: "International Recognition",
      description: "Received UAE Ministry of Education accreditation for innovative curriculum"
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "Launched international programs reaching students across 15 countries"
    },
    {
      year: "2023",
      title: "Digital Innovation",
      description: "Pioneered online Islamic education platforms for global accessibility"
    }
  ];

  return (
    <ChapterContainer
      id="educator"
      chapterNumber={3}
      title="The Educator"
      subtitle="Revolutionizing Islamic education through DQAA Academy and innovative pedagogical approaches"
      variant="gradient"
    >
      {/* DQAA Introduction */}
      <motion.div 
        className="max-w-5xl mx-auto mb-20"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-playfair font-bold text-royal-900 mb-6">
              Darul Quran Abdulla Academy
            </h3>
            <p className="text-lg text-royal-700 leading-relaxed mb-6">
              Founded with the vision of creating a new paradigm in Islamic education, DQAA represents 
              Dr. P.T. Abdul Rahman's commitment to nurturing both the spiritual and intellectual 
              development of students.
            </p>
            <p className="text-royal-700 leading-relaxed mb-8">
              The academy seamlessly integrates traditional Islamic scholarship with modern educational 
              methodologies, preparing students to become thoughtful, engaged citizens of the world 
              while remaining firmly rooted in their faith.
            </p>
            
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-royal-900">2,500+</div>
                <div className="text-sm text-royal-600">Graduates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-royal-900">95%</div>
                <div className="text-sm text-royal-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-royal-900">15</div>
                <div className="text-sm text-royal-600">Countries</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-golden-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-royal-500 to-golden-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap size={28} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-royal-900 mb-2">Excellence</h4>
                  <p className="text-sm text-royal-600">Academic & Spiritual</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-royal-500 to-golden-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star size={28} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-royal-900 mb-2">Innovation</h4>
                  <p className="text-sm text-royal-600">Modern Methods</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-royal-500 to-golden-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award size={28} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-royal-900 mb-2">Recognition</h4>
                  <p className="text-sm text-royal-600">Global Awards</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-royal-500 to-golden-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen size={28} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-royal-900 mb-2">Curriculum</h4>
                  <p className="text-sm text-royal-600">Comprehensive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Timeline of Achievements */}
      <motion.div 
        className="mb-20"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-playfair font-bold text-royal-900 text-center mb-12">
          Educational Milestones
        </h3>
        
        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.year}
              className="flex items-center mb-8 last:mb-0"
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-20 text-right mr-8">
                <div className="text-2xl font-bold text-golden-600">{achievement.year}</div>
              </div>
              
              <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-br from-royal-500 to-golden-500 rounded-full mr-8 relative">
                {index < achievements.length - 1 && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[2px] h-16 bg-gradient-to-b from-royal-300 to-golden-300" />
                )}
              </div>
              
              <div className="flex-1 bg-white rounded-lg p-6 shadow-lg border border-royal-100">
                <h4 className="text-xl font-playfair font-semibold text-royal-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-royal-700 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Educational Philosophy */}
      <motion.div 
        className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-golden-200/50"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-playfair font-bold text-royal-900 mb-8 text-center">
          Educational Philosophy
        </h3>
        
        <blockquote className="text-xl md:text-2xl font-light italic text-royal-800 leading-relaxed text-center mb-8">
          "Education is not preparation for life; education is life itself. Through DQAA, we don't just teach about Islam—we live it, breathe it, and inspire others to find their own authentic connection with their faith."
        </blockquote>
        <cite className="block text-center text-golden-600 font-medium">Dr. P.T. Abdul Rahman</cite>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterThree;
