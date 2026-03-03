import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';

const publications = [
  {
    title: "Is the Creation Meaningless?",
    year: "1995",
    description: "A philosophical work exploring the purpose of existence from an Islamic perspective.",
  },
  {
    title: "Towards the Creator",
    year: "2000",
    description: "A guide on spiritual journey and understanding the divine, with reflections for contemporary readers.",
  },
  {
    title: "The Address to Know How to Address",
    year: "2005",
    description: "A treatise on effective communication and discourse, drawing from Islamic wisdom.",
  },
  {
    title: "Khaleej Times Columnist",
    year: "Ongoing",
    description: "Regular contributions offering perspectives on current affairs, Islamic thought, and community issues.",
  },
];

const mediaAndRecognition = [
  {
    title: "The Guidance – Dharma Reka",
    year: "2001–2003",
    description: "Creator and presenter of a groundbreaking Islamic television series on Asianet."
  },
  {
    title: "Foreign Media Coordinator, DIHQA",
    year: "2000s",
    description: "Managed international media relations for the Dubai International Holy Quran Award."
  },
  {
    title: "UAE Golden Visa",
    year: "2020",
    description: "Awarded for significant contributions to the social and cultural fabric of the UAE."
  },
  {
    title: "International Speaker",
    year: "Ongoing",
    description: "Keynote speaker at conferences on Islamic affairs, education, and humanitarian efforts."
  },
];

const ChapterThree: React.FC = () => {
  return (
    <ChapterContainer
      id="publications"
      title="Publications & Recognition"
      subtitle="Scholarly works, media presence, and accolades."
      sectionKeyword="works"
    >
      {/* Publications */}
      <div className="mb-20">
        <h3 className="font-playfair text-fluid-2xl font-bold text-foreground mb-10">
          Authored Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {publications.map((item, index) => (
            <motion.div
              key={item.title}
              className="border-t border-border pt-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.08 * index }}
              viewport={{ once: true }}
            >
              <div className="flex items-baseline justify-between mb-2">
                <h4 className="font-playfair text-fluid-lg font-semibold text-foreground">
                  {item.title}
                </h4>
                <span className="text-xs text-golden-600 tracking-wider ml-4 shrink-0">{item.year}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Media & Recognition */}
      <div>
        <h3 className="font-playfair text-fluid-2xl font-bold text-foreground mb-10">
          Media & Recognition
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {mediaAndRecognition.map((item, index) => (
            <motion.div
              key={item.title}
              className="border-t border-border pt-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.08 * index }}
              viewport={{ once: true }}
            >
              <div className="flex items-baseline justify-between mb-2">
                <h4 className="font-playfair text-fluid-lg font-semibold text-foreground">
                  {item.title}
                </h4>
                <span className="text-xs text-golden-600 tracking-wider ml-4 shrink-0">{item.year}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </ChapterContainer>
  );
};

export default ChapterThree;
