
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Globe } from 'lucide-react';
import FluidTypography from '@/components/typography/FluidTypography';
import ResponsiveContainer from '@/components/layout/ResponsiveContainer';
import ProgressiveImage from '@/components/ui/progressive-image';

interface PressItem {
  id: string;
  publication: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  logo?: string;
  category: 'featured' | 'interview' | 'mention' | 'review';
}

const pressItems: PressItem[] = [
  {
    id: '1',
    publication: 'Khaleej Times',
    title: 'Book presents Islamic view on creation',
    excerpt: 'Dr. P.T. Abdul Rahman\'s philosophical work examines the divine purpose behind creation from an Islamic perspective.',
    date: '2023',
    url: 'https://www.khaleejtimes.com/uae/book-presents-islamic-view-on-creation',
    category: 'featured'
  },
  {
    id: '2',
    publication: 'Gulf News',
    title: 'Islamic centre to launch scheme for Indian expats',
    excerpt: 'Dr. Abdul Rahman announces new initiatives to support the Indian expatriate community in the UAE.',
    date: '2023',
    url: 'https://gulfnews.com/uae/islamic-centre-to-launch-scheme-for-indian-expats-1.424474',
    category: 'interview'
  },
  {
    id: '3',
    publication: 'IQNA',
    title: '8th Inter-School Quran and Educational Competition in Dubai',
    excerpt: 'Annual competition organized by DQAA showcases excellence in Quranic education and academic achievement.',
    date: '2024',
    url: 'https://iqna.ir/en/news/1925695/8th-inter-school-quran-and-educational-competition-in-dubai-',
    category: 'mention'
  },
  {
    id: '4',
    publication: 'Emirates 24/7',
    title: 'Educational Pioneer Bridges Traditional and Modern Learning',
    excerpt: 'Profile of Dr. P.T. Abdul Rahman\'s innovative approach to Islamic education in the UAE.',
    date: '2024',
    url: '#',
    category: 'featured'
  }
];

const mediaLogos = [
  { name: 'Khaleej Times', width: 120 },
  { name: 'Gulf News', width: 100 },
  { name: 'Emirates 24/7', width: 110 },
  { name: 'IQNA', width: 80 },
  { name: 'Al Arabiya', width: 100 },
  { name: 'Zawya', width: 90 }
];

const PressWall: React.FC = () => {
  const categoryColors = {
    featured: 'from-royal-500 to-royal-600',
    interview: 'from-golden-500 to-golden-600',
    mention: 'from-emerald-500 to-emerald-600',
    review: 'from-purple-500 to-purple-600'
  };

  return (
    <section className="py-fluid-2xl bg-gradient-to-br from-gray-50 to-white relative">
      <ResponsiveContainer size="xl" padding="lg">
        <div className="text-center mb-fluid-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-xs sm:text-sm font-light tracking-[0.2em] uppercase text-golden-600">
              Media Recognition
            </span>
          </motion.div>
          <FluidTypography variant="h2" color="royal" className="mb-6">
            Global Media Coverage
          </FluidTypography>
          <FluidTypography variant="body" color="muted" className="max-w-3xl mx-auto">
            Dr. P.T. Abdul Rahman's work and achievements have been recognized 
            by leading publications across the Middle East and beyond.
          </FluidTypography>
        </div>

        {/* Featured Press Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-fluid-xl">
          {pressItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryColors[item.category]}`}>
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {item.date}
                </div>
              </div>

              <FluidTypography variant="h6" color="royal" className="mb-2 group-hover:text-golden-600 transition-colors">
                {item.title}
              </FluidTypography>

              <FluidTypography variant="caption" color="muted" className="mb-3 text-sm font-medium">
                {item.publication}
              </FluidTypography>

              <FluidTypography variant="body" color="muted" className="mb-4 text-sm leading-relaxed">
                {item.excerpt}
              </FluidTypography>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-royal-600 hover:text-golden-600 transition-colors text-sm font-medium min-h-[44px] py-2"
              >
                Read Article
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </motion.article>
          ))}
        </div>

        {/* Media Logos Showcase */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <FluidTypography variant="h5" color="royal" className="mb-2">
              Featured In
            </FluidTypography>
            <FluidTypography variant="body" color="muted" className="text-sm">
              Trusted by leading media organizations
            </FluidTypography>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {mediaLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <div 
                  className="h-12 flex items-center justify-center text-gray-600 font-semibold text-sm"
                  style={{ width: logo.width }}
                >
                  {logo.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-fluid-lg"
        >
          <div className="bg-gradient-to-r from-royal-50 to-golden-50 rounded-2xl p-8">
            <Globe className="h-12 w-12 text-royal-600 mx-auto mb-4" />
            <FluidTypography variant="h5" color="royal" className="mb-4">
              Media Inquiries Welcome
            </FluidTypography>
            <FluidTypography variant="body" color="muted" className="mb-6 max-w-2xl mx-auto">
              For interviews, speaking engagements, or expert commentary on Islamic education 
              and humanitarian affairs, please contact our media relations team.
            </FluidTypography>
            <a
              href="#connect"
              className="inline-flex items-center bg-gradient-to-r from-royal-600 to-royal-700 text-white px-6 py-3 rounded-lg hover:from-royal-700 hover:to-royal-800 transition-all duration-300 font-medium min-h-[44px]"
            >
              Contact Media Team
            </a>
          </div>
        </motion.div>
      </ResponsiveContainer>
    </section>
  );
};

export default PressWall;
