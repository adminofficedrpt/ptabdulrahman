import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { Briefcase, Building2, Users, Handshake, BookOpen, Tv } from 'lucide-react'; // Updated icons for relevance
import { designTokens } from '@/lib/design-tokens';

const careerMilestones = [
  {
    icon: Briefcase,
    title: "Legal & Professional Leadership",
    description: "Managing Partner at Precedential Legal Consultancy and Senior Legal Consultant at Tasheel Legal Consultancy, overseeing strategic legal advisory and business development."
  },
  {
    icon: Building2,
    title: "Government Service & Administration",
    description: "Administrator at the Central Military Command, UAE, and Researcher at the Department of Islamic Affairs, Government of Dubai, contributing to public service and policy."
  },
  {
    icon: Users,
    title: "Institutional Founding & Development",
    description: "Founder of Abdulla Educational Academy (India) and President of the Indian Islamic Center (Dubai), establishing key platforms for education and community welfare."
  },
  {
    icon: Handshake,
    title: "Humanitarian & Community Impact",
    description: "Leading initiatives for prisoner family assistance, repatriation coordination, women's shelter support, and organizing free medical camps, demonstrating profound social responsibility."
  },
  {
    icon: Tv,
    title: "Media & Intellectual Contributions",
    description: "Host of the Ramadan Television Program on Asianet (2001–2003) and Foreign Media Coordinator for the Dubai International Holy Quran Award, shaping public discourse."
  },
  {
    icon: BookOpen,
    title: "Prolific Authorship & Scholarship",
    description: "Author of multiple influential Islamic and educational works, and a columnist for Khaleej Times, contributing significantly to intellectual thought."
  }
];

const ChapterTwo: React.FC = () => {
  return (
    <ChapterContainer
      id="career"
      title="A Journey of Leadership & Service"
      subtitle="Charting a distinguished career across legal, governmental, educational, and humanitarian sectors."
      variant="gradient"
    >
      {/* Opening Statement */}
      <motion.div 
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className={`text-fluid-lg md:text-fluid-xl ${designTokens.typography.fontFamily.body.join(',')} text-neutral-200 leading-relaxed`}>
          Dr. P.T. Abdul Rahman's career is a testament to his multifaceted expertise and unwavering dedication. His professional journey is marked by significant leadership roles and impactful contributions that have shaped institutions and uplifted communities.
        </p>
      </motion.div>

      {/* Career Milestones Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {careerMilestones.map((item, index) => (
          <motion.div
            key={item.title}
            className={`bg-neutral-50/10 backdrop-blur-sm rounded-xl p-8 border border-neutral-50/20 shadow-lg hover:shadow-xl transition-all duration-300 group`}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 * index }}
            viewport={{ once: true }}
          >
            <div className={`w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-400 rounded-xl flex items-center justify-center mb-5 group-hover:from-accent-600 group-hover:to-accent-500 transition-all duration-300`}>
              <item.icon size={26} className={`text-primary-900`} />
            </div>
            <h3 className={`text-fluid-xl font-heading font-semibold text-neutral-50 mb-3`}>
              {item.title}
            </h3>
            <p className={`text-fluid-base ${designTokens.typography.fontFamily.body.join(',')} text-neutral-300 leading-relaxed`}>{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action or Summary of Impact */}
      <motion.div 
        className={`bg-primary-800 rounded-2xl p-8 md:p-12 text-center shadow-xl`}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className={`text-fluid-2xl font-heading font-bold text-accent-300 mb-4`}>
          Decades of Dedicated Service
        </h3>
        <p className={`text-fluid-lg ${designTokens.typography.fontFamily.body.join(',')} text-neutral-200 leading-relaxed max-w-3xl mx-auto`}>
          From legal counsel to community development, Dr. Rahman's influence is deeply woven into the fabric of society, reflecting a profound commitment to justice, education, and human dignity.
        </p>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterTwo;
