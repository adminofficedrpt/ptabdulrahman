
import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { GraduationCap, BookOpen, Users, Building, Award, Globe } from 'lucide-react';

const ChapterThree: React.FC = () => {
  const educationPillars = [
    {
      icon: Building,
      title: "DQAA Academy - Revolutionary Vision",
      description: "In 2013, Dr. Rahman founded Darul Quran Abdulla Educational Academy, revolutionizing Islamic education in Kerala. This institution bridges traditional Quranic studies with modern pedagogical excellence, mentoring students who represent India at international competitions including the Dubai International Holy Quran Award.",
      impact: "Educational model that inspires nationwide"
    },
    {
      icon: Award,
      title: "ABR Academy Leadership",
      description: "As Founder President of ABR Academy for Education and Islamic Culture since 2017, Dr. Rahman continues advancing educational innovation. His leadership demonstrates how traditional values can enhance modern learning, creating graduates who excel academically while maintaining strong ethical foundations.",
      impact: "Values-based educational excellence"
    },
    {
      icon: Users,
      title: "Academic Leadership",
      description: "Dr. Rahman serves as visiting lecturer at prestigious institutions including Moulana Azad Foundation University, Darul Huda Islamic University, and Wafi College of Islamic Studies. His expertise in sociology and multilingual capabilities make him a sought-after educator and thought leader.",
      impact: "University-level influence and mentorship"
    },
    {
      icon: Globe,
      title: "Diplomatic Education",
      description: "His expertise extends to conducting Arabic language classes for Indian diplomats at the Consulate General of India, Dubai. This unique role demonstrates his ability to bridge cultures and facilitate international understanding through education and linguistic excellence.",
      impact: "International diplomatic education"
    }
  ];

  const institutions = [
    { name: "Darul Quran Abdulla Educational Academy", year: "2013", role: "Founder", impact: "Revolutionary Islamic education model" },
    { name: "ABR Academy for Education and Islamic Culture", year: "2017", role: "Founder President", impact: "Values-based modern education" },
    { name: "Indian Islamic Center Dubai", year: "1992", role: "Founder & President", impact: "Community education and welfare" },
    { name: "Multiple Universities", year: "Ongoing", role: "Visiting Lecturer", impact: "Academic thought leadership" }
  ];

  return (
    <ChapterContainer
      id="educator"
      chapterNumber={3}
      title="Educational Innovation & Institutional Building"
      subtitle="Creating tomorrow's leaders through visionary educational excellence"
      variant="gradient"
    >
      {/* Enhanced Opening */}
      <motion.div 
        className="max-w-4xl mx-auto text-center mb-20"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-xl md:text-2xl text-royal-700 leading-relaxed">
          Dr. Rahman's educational philosophy transcends traditional boundaries, creating institutions that prepare 
          students for global success while preserving cultural identity. His M.A. in Sociology from University of Mysore 
          provided the academic foundation for educational innovations that now serve as models across India and beyond.
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

      {/* Institutional Legacy */}
      <motion.div 
        className="bg-gradient-to-r from-royal-900 to-royal-800 rounded-2xl p-8 md:p-12 text-white mb-16"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-playfair font-bold text-center mb-8">
          Institutional Legacy & Academic Credentials
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {institutions.map((institution, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-semibold text-golden-300 mb-2">{institution.name}</h4>
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/80 text-sm">{institution.role}</span>
                <span className="text-white/60 text-xs">{institution.year}</span>
              </div>
              <p className="text-golden-200 text-sm font-medium">{institution.impact}</p>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">M.A.</div>
            <div className="text-lg font-medium mb-2">Sociology</div>
            <div className="text-white/80 text-sm">University of Mysore</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">Multiple</div>
            <div className="text-lg font-medium mb-2">Institutions</div>
            <div className="text-white/80 text-sm">Founded & led to success</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">Global</div>
            <div className="text-lg font-medium mb-2">Recognition</div>
            <div className="text-white/80 text-sm">International impact</div>
          </div>
        </div>
        
        <blockquote className="text-xl md:text-2xl font-light italic text-center text-white/90 mb-4">
          "True education doesn't just fill minds with knowledge—it shapes character, builds bridges between 
          cultures, and prepares young people to lead with wisdom, compassion, and excellence."
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
          See His Vision in Action
        </h4>
        <p className="text-royal-700 mb-6 max-w-2xl mx-auto">
          Experience the transformative power of visionary education at DQAA Academy and ABR Academy. 
          Join thousands of students who have benefited from Dr. Rahman's innovative approach to learning that 
          combines academic excellence with character development.
        </p>
        <motion.button
          className="bg-gradient-to-r from-royal-600 to-golden-600 text-white px-8 py-3 rounded-lg font-medium hover:from-royal-700 hover:to-golden-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore His Educational Legacy
        </motion.button>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterThree;
