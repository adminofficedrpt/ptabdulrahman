import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { GraduationCap, BookOpen, Users, Globe, Building2, CalendarCheck } from 'lucide-react';
import { designTokens } from '@/lib/design-tokens';

const educationalHighlights = [
  {
    icon: GraduationCap,
    label: "Academic Excellence",
    description: "Fostering intellectual growth through rigorous Islamic and contemporary education."
  },
  {
    icon: BookOpen,
    label: "Quranic Mastery",
    description: "Dedicated to the memorization and profound understanding of the Holy Quran."
  },
  {
    icon: Users,
    label: "Community Empowerment",
    description: "Empowering expatriate communities through accessible and high-quality learning opportunities."
  },
  {
    icon: Globe,
    label: "Global Outreach",
    description: "Extending educational initiatives to a diverse, multilingual student body worldwide."
  },
];

const keyMilestones = [
  { year: "1990s", title: "Founding of DQAA", description: "Established Darul Quran Abdulla Academy in Dubai, a beacon for Quranic education and Arabic language instruction." },
  { year: "2002", title: "Digital Community Platform", description: "Launched Samavayam.com, a pioneering online platform connecting the global Keralite community." },
  { year: "2009", title: "Humanitarian Health Camps", description: "Organized extensive free medical check-ups for low-income workers through DIIC, demonstrating profound social responsibility." },
  { year: "2014", title: "Inter-School Quran Competition", description: "Successfully hosted the 8th Inter-School Quran and Educational Competition, promoting Islamic values and academic excellence." },
  { year: "2017", title: "ABR Academy Inauguration", description: "Founded the ABR Academy for Education and Culture in Kerala, further expanding his educational footprint." },
  { year: "2022", title: "Loka Kerala Sabha Appointment", description: "Appointed as a distinguished member of the Loka Kerala Sabha, strengthening ties with the global Keralite diaspora." },
];

const ChapterThree: React.FC = () => {
  return (
    <ChapterContainer
      id="education"
      title="The Educator & Visionary"
      subtitle="Pioneering institutions and fostering intellectual growth through innovative educational programs."
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
            <h3 className={`text-fluid-3xl font-heading font-bold text-primary-900 mb-6`}>
              Darul Quran Abdulla Academy (DQAA)
            </h3>
            <p className={`text-fluid-lg ${designTokens.typography.fontFamily.body.join(',')} text-primary-700 leading-relaxed mb-6`}>
              DQAA stands as a testament to Dr. PT Abdul Rahman's commitment to holistic Islamic education. It provides a robust curriculum focused on Quranic memorization, Arabic language proficiency, and contemporary academic subjects, catering primarily to the expatriate community.
            </p>
            <p className={`text-fluid-base ${designTokens.typography.fontFamily.body.join(',')} text-primary-600 leading-relaxed mb-8`}>
              DQAA seamlessly integrates traditional Islamic teaching methodologies with modern pedagogical approaches, ensuring students receive a well-rounded education that prepares them for both spiritual and worldly success.
            </p>
            
            <div className="flex space-x-6">
              <div className="text-center">
                <div className={`text-fluid-xl font-bold ${designTokens.typography.fontFamily.heading.join(',')} text-primary-900`}>1990s</div>
                <div className={`text-fluid-sm ${designTokens.typography.fontFamily.body.join(',')} text-primary-500`}>Established</div>
              </div>
              <div className="text-center">
                <div className={`text-fluid-xl font-bold ${designTokens.typography.fontFamily.heading.join(',')} text-primary-900`}>Kerala, India</div>
                <div className={`text-fluid-sm ${designTokens.typography.fontFamily.body.join(',')} text-primary-500`}>Location</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {educationalHighlights.map((item, i) => (
              <div key={i} className={`bg-neutral-50/70 backdrop-blur-sm rounded-xl p-5 border border-primary-100/50 text-center shadow-glass-sm`}>
                <div className={`w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <item.icon size={22} className={`text-primary-700`} />
                </div>
                <p className={`text-fluid-sm font-medium ${designTokens.typography.fontFamily.body.join(',')} text-primary-800`}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Key Milestones Timeline */}
      <motion.div 
        className="mb-16"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className={`text-fluid-2xl font-heading font-bold text-primary-900 text-center mb-10`}>
          Key Milestones in Education & Community
        </h3>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {keyMilestones.map((item, index) => (
            <motion.div
              key={item.year}
              className="flex items-start gap-6"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-20 text-right">
                <span className={`text-fluid-lg font-bold ${designTokens.typography.fontFamily.heading.join(',')} text-accent-600`}>{item.year}</span>
              </div>
              <div className="flex-shrink-0 w-3 h-3 bg-primary-400 rounded-full mt-2 relative">
                {index < keyMilestones.length - 1 && (
                  <div className={`absolute top-3 left-1/2 -translate-x-1/2 w-px h-full bg-primary-200`} />
                )}
              </div>
              <div className="flex-1 pb-6">
                <h4 className={`text-fluid-lg font-semibold ${designTokens.typography.fontFamily.heading.join(',')} text-primary-900 mb-1`}>{item.title}</h4>
                <p className={`text-fluid-sm ${designTokens.typography.fontFamily.body.join(',')} text-primary-600`}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterThree;
