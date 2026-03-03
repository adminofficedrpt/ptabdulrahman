import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface PressItem {
  publication: string;
  title: string;
  date: string;
  url: string;
}

const pressItems: PressItem[] = [
  {
    publication: 'Gulf News',
    title: 'Islamic centre to launch scheme for Indian expats',
    date: '2009',
    url: 'https://gulfnews.com/uae/islamic-centre-to-launch-scheme-for-indian-expats-1.424474',
  },
  {
    publication: 'Khaleej Times',
    title: 'Book presents Islamic view on creation',
    date: '2010',
    url: 'https://www.khaleejtimes.com/uae/book-presents-islamic-view-on-creation',
  },
  {
    publication: 'Gulf News',
    title: 'Islamic centre provides free medical check-up for 800',
    date: '2009',
    url: 'https://gulfnews.com/uae/islamic-centre-provides-free-medical-check-up-for-800-1.421491',
  },
  {
    publication: 'Gulf News',
    title: 'Indian expats urge Delhi to take initiative',
    date: '2009',
    url: 'https://gulfnews.com/uae/indian-expats-urge-delhi-to-take-initiative-1.438168',
  },
  {
    publication: 'IQNA',
    title: '8th Inter-School Quran and Educational Competition in Dubai',
    date: '2014',
    url: 'https://iqna.ir/en/news/1925695/8th-inter-school-quran-and-educational-competition-in-dubai',
  },
  {
    publication: 'Khaleej Times',
    title: 'Holy Quran teaches religious tolerance',
    date: '2011',
    url: 'https://www.khaleejtimes.com/uae/holy-quran-teaches-religious-tolerance',
  },
  {
    publication: 'Khaleej Times',
    title: 'Kerala Muslim art forms get a big boost in Dubai',
    date: '2010',
    url: 'https://www.khaleejtimes.com/uae/kerala-muslim-art-forms-get-a-big-boost-in-dubai',
  },
  {
    publication: 'Gulf News',
    title: 'Community site for Keralites',
    date: '2002',
    url: 'https://gulfnews.com/uae/community-site-for-keralites-1.425842',
  }
];

const mediaOutlets = ['Gulf News', 'Khaleej Times', 'IQNA', 'Asianet'];

const PressWall: React.FC = () => {
  return (
    <section id="press" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-fluid-4xl md:text-fluid-5xl font-bold text-foreground mb-4">
            Press Coverage
          </h2>
          <p className="text-muted-foreground text-fluid-base max-w-2xl">
            Media coverage of community initiatives, educational programs, and humanitarian work.
          </p>
          <div className="mt-6 w-16 h-px bg-golden-500" />
        </motion.div>

        {/* Media Outlet Names - text logo grid */}
        <motion.div
          className="flex flex-wrap gap-8 md:gap-16 items-center mb-16 pb-16 border-b border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {mediaOutlets.map((name) => (
            <span
              key={name}
              className="font-playfair text-2xl md:text-3xl font-bold text-foreground/20 hover:text-foreground/60 transition-colors duration-300"
            >
              {name}
            </span>
          ))}
        </motion.div>

        {/* Press articles as simple text list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {pressItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-t border-border pt-6 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.06 * index }}
              viewport={{ once: true }}
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                  {item.publication}
                </span>
                <span className="text-xs text-muted-foreground/60">{item.date}</span>
              </div>
              <h3 className="font-playfair text-fluid-lg font-semibold text-foreground group-hover:text-golden-600 transition-colors leading-snug flex items-start gap-2">
                {item.title}
                <ExternalLink className="h-3.5 w-3.5 mt-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressWall;
