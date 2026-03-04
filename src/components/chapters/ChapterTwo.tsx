import React from 'react';
import { motion } from 'framer-motion';
import ProgressiveImage from '@/components/ui/progressive-image';
import ChapterContainer from './ChapterContainer';

const careerMilestones = [
  {
    title: "Legal & Professional Leadership",
    description: "Managing Partner at Precedential Legal Consultancy and Senior Legal Consultant at Tasheel Legal Consultancy, overseeing strategic legal advisory and business development."
  },
  {
    title: "Government Service & Administration",
    description: "Administrator at the Central Military Command, UAE, and Researcher at the Department of Islamic Affairs, Government of Dubai."
  },
  {
    title: "Institutional Founding & Development",
    description: "Founder of Abdulla Educational Academy (India) and President of the Indian Islamic Center (Dubai), establishing key platforms for education and community welfare."
  },
  {
    title: "Humanitarian & Community Impact",
    description: "Leading initiatives for prisoner family assistance, repatriation coordination, women's shelter support, and organizing free medical camps."
  },
  {
    title: "Media & Intellectual Contributions",
    description: "Host of the Ramadan Television Program on Asianet (2001–2003) and Foreign Media Coordinator for the Dubai International Holy Quran Award."
  },
  {
    title: "Authorship & Scholarship",
    description: "Author of multiple influential Islamic and educational works, and a columnist for Khaleej Times."
  }
];

const ChapterTwo: React.FC = () => {
  return (
    <ChapterContainer
      id="career"
      title="Career & Service"
      subtitle="A distinguished career across legal, governmental, educational, and humanitarian sectors."
      sectionKeyword="career"
    >
      {/* Full-width feature image */}
      <motion.div
        className="mb-20 relative overflow-hidden aspect-[21/9]"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <ProgressiveImage
          src="/lovable-uploads/66572de8-7486-4f48-ac7f-1219779e9bd6.jpg"
          alt="Dr. Rahman at a conference"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Opening paragraph with drop cap */}
      <motion.div
        className="max-w-3xl mb-16"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="drop-cap text-foreground/80 text-fluid-lg leading-[1.8]">
          P.T. Abdul Rahman's career is a testament to his multifaceted expertise and unwavering dedication. His professional journey is marked by significant leadership roles and impactful contributions that have shaped institutions and uplifted communities across the UAE and India.
        </p>
      </motion.div>

      {/* Career entries as clean text blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-20">
        {careerMilestones.map((item, index) => (
          <motion.div
            key={item.title}
            className="border-t border-border pt-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.08 * index }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-fluid-xl font-semibold text-foreground mb-3">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Two images at bottom of section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <ProgressiveImage
            src="/lovable-uploads/bdaaf13f-2912-4e1d-b6d7-eb5852916364.png"
            alt="Community welfare initiative"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <ProgressiveImage
            src="/lovable-uploads/76eef9a7-0487-4c6f-b458-32397f9edbd6.png"
            alt="Inter-School Quran Competition"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <ProgressiveImage
            src="/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png"
            alt="DQAA educational programs"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterTwo;
