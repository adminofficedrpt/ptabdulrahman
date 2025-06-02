
import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { GraduationCap, BookOpen, Users, Heart } from 'lucide-react';

const ChapterThree: React.FC = () => {
  const educationPillars = [
    {
      icon: GraduationCap,
      title: "DQAA Academy Foundation",
      description: "In 2013, I founded Darul Quran Abdulla Educational Academy in Kerala - a revolutionary initiative that promoted the Quran as a survival necessity across India. Alhamdulillah, one of our students even represented India at the Dubai International Holy Quran Award.",
      impact: "Educational excellence with Islamic values"
    },
    {
      icon: BookOpen,
      title: "ABR Academy Leadership",
      description: "As Founder President of ABR Academy for Education and Islamic Culture since 2017, I continue working to bridge traditional Islamic education with modern pedagogical approaches. Every student is a trust (amanah) we must nurture carefully.",
      impact: "Cultural preservation through education"
    },
    {
      icon: Users,
      title: "Academic Contributions",
      description: "I've had the privilege to serve as visiting lecturer at prestigious institutions including Moulana Azad Foundation University, Darul Huda Islamic University, and Wafi College of Islamic Studies. Each lecture is an opportunity to plant seeds of knowledge.",
      impact: "University-level Islamic scholarship"
    },
    {
      icon: Heart,
      title: "Multilingual Teaching",
      description: "By Allah's blessing, I speak Arabic, English, Hindi, Urdu, Malayalam, and Tamil. This allows me to conduct Arabic classes for Indian diplomats and reach students across linguistic barriers. Language is the bridge to hearts and minds.",
      impact: "Cross-cultural educational access"
    }
  ];

  return (
    <ChapterContainer
      id="educator"
      chapterNumber={3}
      title="Educational Innovation & Legacy"
      subtitle="Building institutions that nurture both academic excellence and spiritual growth, Alhamdulillah"
      variant="gradient"
    >
      {/* Personal Opening */}
      <motion.div 
        className="max-w-4xl mx-auto text-center mb-20"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-xl md:text-2xl text-royal-700 leading-relaxed">
          After completing my M.A. in Sociology from University of Mysore and serving in various professional roles, 
          I realized that true change begins with education. Through DQAA Academy and other initiatives, 
          I've tried to create learning environments where young minds can excel academically while staying 
          rooted in their Islamic identity and values.
        </p>
      </motion.div>

      {/* Education Philosophy Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {educationPillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            className="bg-white rounded-xl p-8 shadow-lg border border-royal-100 hover:shadow-xl transition-all duration-300 group"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-6 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-royal-500 to-golden-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <pillar.icon size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-playfair font-semibold text-royal-900 mb-2">
                  {pillar.title}
                </h3>
                <div className="inline-block bg-golden-100 text-golden-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {pillar.impact}
                </div>
                <p className="text-royal-700 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* DQAA & Academic Credentials Highlight */}
      <motion.div 
        className="bg-gradient-to-r from-royal-900 to-royal-800 rounded-2xl p-8 md:p-12 text-white mb-16"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-playfair font-bold text-center mb-8">
          Academic Credentials & Institutions
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">M.A.</div>
            <div className="text-lg font-medium mb-2">Sociology</div>
            <div className="text-white/80 text-sm">University of Mysore</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">6</div>
            <div className="text-lg font-medium mb-2">Languages</div>
            <div className="text-white/80 text-sm">Arabic, English, Hindi, Urdu, Malayalam, Tamil</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">Multiple</div>
            <div className="text-lg font-medium mb-2">Universities</div>
            <div className="text-white/80 text-sm">Visiting lecturer positions</div>
          </div>
        </div>
        
        <blockquote className="text-xl md:text-2xl font-light italic text-center text-white/90 mb-4">
          "Education is not just about acquiring knowledge - it's about nurturing character, 
          building bridges between cultures, and preparing young people to serve humanity with wisdom and compassion."
        </blockquote>
        <cite className="block text-center text-golden-300 font-medium">Dr. P.T. Abdul Rahman</cite>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center bg-gradient-to-br from-golden-50 to-royal-50 rounded-xl p-8"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h4 className="text-2xl font-playfair font-semibold text-royal-900 mb-4">
          Continue the Educational Mission
        </h4>
        <p className="text-royal-700 mb-6 max-w-2xl mx-auto">
          If you're interested in supporting our educational initiatives at DQAA Academy or ABR Academy, 
          or would like to learn more about our programs that blend Islamic values with academic excellence, 
          we welcome you to be part of this blessed work.
        </p>
        <motion.button
          className="bg-gradient-to-r from-royal-600 to-golden-600 text-white px-8 py-3 rounded-lg font-medium hover:from-royal-700 hover:to-golden-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn About Our Academies
        </motion.button>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterThree;
