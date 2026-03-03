import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';

const credentials = [
  {
    title: "Distinguished Legal Consultant",
    description: "Managing Partner at Precedential Legal Consultancy and Senior Legal Consultant at Tasheel Legal Consultancy."
  },
  {
    title: "Government Service",
    description: "Administrator at the Central Military Command, UAE, and Researcher at the Department of Islamic Affairs, Government of Dubai."
  },
  {
    title: "Pioneering Media",
    description: "Creator and presenter of 'The Guidance – Dharma Reka', an Islamic television series on Asianet (2001–2003)."
  },
  {
    title: "Author & Scholar",
    description: "Authored influential books on Islamic philosophy, education, and contemporary social issues."
  },
  {
    title: "Institutional Founder",
    description: "Founder of Abdulla Educational Academy (India) and President of the Indian Islamic Center (Dubai)."
  },
  {
    title: "UAE Golden Visa",
    description: "Awarded for significant and sustained contributions to the social and cultural fabric of the UAE."
  }
];

const languages = [
  { name: "Arabic", native: "العربية" },
  { name: "English", native: "English" },
  { name: "Hindi", native: "हिन्दी" },
  { name: "Urdu", native: "اردو" },
  { name: "Malayalam", native: "മലയാളം" },
  { name: "Tamil", native: "தமிழ்" },
];

const ChapterOne: React.FC = () => {
  return (
    <ChapterContainer
      id="about"
      title="About"
      subtitle="A life defined by intellectual rigor, principled leadership, and humanitarian service."
      sectionKeyword="about"
    >
      {/* Biography with drop cap */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="drop-cap text-foreground/80 text-fluid-base leading-[1.8] mb-6">
            P.T. Abdul Rahman stands as a distinguished figure with over three decades of impactful contributions across diverse fields. Based in the UAE, his expertise spans legal consultancy, Islamic scholarship, humanitarian leadership, institutional founding, and influential media contributions.
          </p>
          <p className="text-muted-foreground text-fluid-base leading-[1.8]">
            His journey reflects a steadfast commitment to intellectual growth and community empowerment. From government service and legal advisory to pioneering educational initiatives and fostering interfaith dialogue, his work has left an indelible mark on society in both the UAE and India.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-fluid-base leading-[1.8] mb-6">
            Born in Kerala, India, he pursued theological studies under eminent scholars before relocating to the UAE. His deep understanding of multiple languages and cultures has enabled him to serve as a bridge between communities, fostering mutual respect and cooperation.
          </p>
          <p className="text-muted-foreground text-fluid-base leading-[1.8]">
            Today, he continues his lifelong mission of education and humanitarian service, guiding institutions and individuals alike with wisdom drawn from decades of experience and an unwavering dedication to the common good.
          </p>
        </motion.div>
      </div>

      {/* Credentials - clean text blocks */}
      <motion.div
        className="border-t border-border pt-16 mb-16"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="font-playfair text-fluid-2xl font-bold text-foreground mb-10">
          Key Credentials
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {credentials.map((item, index) => (
            <motion.div
              key={item.title}
              className="border-l-2 border-golden-500 pl-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <h4 className="font-playfair text-fluid-lg font-semibold text-foreground mb-2">
                {item.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Language Proficiency - horizontal list */}
      <motion.div
        className="border-t border-border pt-12"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="font-playfair text-fluid-2xl font-bold text-foreground mb-8">
          Linguistic Proficiency
        </h3>
        <div className="flex flex-wrap gap-6">
          {languages.map((lang) => (
            <div key={lang.name} className="text-center">
              <span className="block text-lg font-playfair text-foreground">{lang.native}</span>
              <span className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">{lang.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterOne;
