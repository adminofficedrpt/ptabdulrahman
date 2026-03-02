
import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { GraduationCap, BookOpen, Users, Globe } from 'lucide-react';

const milestones = [
  { year: "1990s", title: "DQAA Founded", description: "Established Darul Quran Abdulla Academy in Dubai for Quranic education" },
  { year: "2002", title: "Community Website", description: "Launched Samavayam.com for the Keralite community" },
  { year: "2009", title: "Medical Camps", description: "Organized free medical check-ups for low-income workers through DIIC" },
  { year: "2014", title: "Educational Competition", description: "Hosted 8th Inter-School Quran and Educational Competition" },
];

const ChapterThree: React.FC = () => {
  return (
    <ChapterContainer
      id="education"
      title="Education"
      subtitle="Founding educational institutions and organizing community learning programs"
      variant="light"
    >
      {/* DQAA Overview */}
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
              Founded in Dubai, DQAA provides Islamic education with a focus on Quranic memorization 
              and Arabic language instruction, serving students from the expatriate community.
            </p>
            <p className="text-royal-600 leading-relaxed mb-8">
              The institution combines traditional Islamic teaching methods with structured curriculum, 
              preparing students in both religious and academic subjects.
            </p>
            
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="text-xl font-bold text-royal-900">1990s</div>
                <div className="text-sm text-royal-500">Established</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-royal-900">Dubai</div>
                <div className="text-sm text-royal-500">Location</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: GraduationCap, label: "Academic Excellence" },
              { icon: BookOpen, label: "Quranic Studies" },
              { icon: Users, label: "Community Service" },
              { icon: Globe, label: "Multilingual" },
            ].map((item, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-royal-100/50 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-royal-100 to-golden-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <item.icon size={22} className="text-royal-700" />
                </div>
                <p className="text-sm font-medium text-royal-800">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div 
        className="mb-16"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-playfair font-bold text-royal-900 text-center mb-10">
          Key Milestones
        </h3>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {milestones.map((item, index) => (
            <motion.div
              key={item.year}
              className="flex items-start gap-6"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-16 text-right">
                <span className="text-lg font-bold text-golden-600">{item.year}</span>
              </div>
              <div className="flex-shrink-0 w-3 h-3 bg-royal-400 rounded-full mt-2 relative">
                {index < milestones.length - 1 && (
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-12 bg-royal-200" />
                )}
              </div>
              <div className="flex-1 pb-6">
                <h4 className="text-lg font-semibold text-royal-900 mb-1">{item.title}</h4>
                <p className="text-royal-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterThree;
