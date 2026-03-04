import React from 'react';
import { motion } from 'framer-motion';
import ProgressiveImage from '@/components/ui/progressive-image';
import ChapterContainer from './ChapterContainer';

const publications = [
  {
    title: "Is the Creation Meaningless?",
    year: "1995",
    description: "A philosophical work exploring the purpose of existence from an Islamic perspective.",
    image: "/lovable-uploads/6856dd37-63cb-4029-b897-0b2143071d2f.png",
  },
  {
    title: "Towards the Creator",
    year: "2000",
    description: "A guide on spiritual journey and understanding the divine, with reflections for contemporary readers.",
    image: "/lovable-uploads/99d889c1-4614-4a21-bde6-ee64dfb60eac.png",
  },
  {
    title: "The Address to Know How to Address",
    year: "2005",
    description: "A treatise on effective communication and discourse, drawing from Islamic wisdom.",
    image: "/lovable-uploads/7df32583-084c-40cc-86e3-dd30973c5f3d.png",
  },
  {
    title: "Khaleej Times Columnist",
    year: "Ongoing",
    description: "Regular contributions offering perspectives on current affairs, Islamic thought, and community issues.",
    image: "/lovable-uploads/17b9319a-ac20-4df2-b3d8-1b600b003036.png",
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
      {/* Publications with book cover images */}
      <div className="mb-24">
        <h3 className="font-playfair text-fluid-2xl font-bold text-foreground mb-12">
          Authored Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {publications.map((item, index) => (
            <motion.div
              key={item.title}
              className="group"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="aspect-[16/10] overflow-hidden mb-5 bg-muted">
                <ProgressiveImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
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
      <div className="border-t border-border pt-16">
        <h3 className="font-playfair text-fluid-2xl font-bold text-foreground mb-10">
          Media & Recognition
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {mediaAndRecognition.map((item, index) => (
            <motion.div
              key={item.title}
              className="border-l-2 border-golden-500 pl-6"
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
