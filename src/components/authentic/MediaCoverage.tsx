
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Newspaper, Calendar } from 'lucide-react';

const MediaCoverage = () => {
  const mediaItems = [
    {
      publication: 'Gulf News',
      title: 'Islamic centre to launch scheme for Indian expats',
      date: '2023',
      url: 'https://gulfnews.com/uae/islamic-centre-to-launch-scheme-for-indian-expats-1.424474',
      description: 'DIIC launches comprehensive welfare scheme for Indian expatriate community.'
    },
    {
      publication: 'Khaleej Times',
      title: 'Book presents Islamic view on creation',
      date: '2023',
      url: 'https://www.khaleejtimes.com/uae/book-presents-islamic-view-on-creation',
      description: 'Coverage of Dr. Rahman\'s philosophical work examining creation from Islamic perspective.'
    },
    {
      publication: 'IQNA',
      title: '8th Inter-School Quran and Educational Competition in Dubai',
      date: '2024',
      url: 'https://iqna.ir/en/news/1925695/8th-inter-school-quran-and-educational-competition-in-dubai-',
      description: 'Annual Quranic competition organized by DQAA showcasing educational excellence.'
    },
    {
      publication: 'Gulf News',
      title: 'Free Medical Check-up for 800 Workers',
      date: '2021',
      url: 'https://gulfnews.com/uae/islamic-centre-provides-free-medical-check-up-for-800-1.421491',
      description: 'DIIC\'s humanitarian initiative providing healthcare services to expatriate workers.'
    },
    {
      publication: 'Thumbay',
      title: 'Award by Ajman Ruler to GMU Graduates',
      date: '2010',
      url: 'https://www.thumbay.com/news/ruler-of-ajman-awarded-degree-certificates-to-the-graduates-of-gulf-medical-university-on-19th-april-2010/',
      description: 'Recognition ceremony where Dr. Rahman received appreciation from Ajman leadership.'
    },
    {
      publication: 'Khaleej Times',
      title: 'Kerala Muslim Art Forms Get Big Boost in Dubai',
      date: '2022',
      url: 'https://www.khaleejtimes.com/uae/kerala-muslim-art-forms-get-a-big-boost-in-dubai',
      description: 'Cultural initiatives promoting Kerala\'s rich artistic heritage in UAE.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Media Coverage</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Recognition and coverage across leading regional and international publications, 
              highlighting his contributions to education, community welfare, and cultural development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {mediaItems.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Newspaper className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-blue-600">{item.publication}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.date}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Read Article
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
