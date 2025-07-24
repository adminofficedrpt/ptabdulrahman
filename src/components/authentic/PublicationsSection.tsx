
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Globe, Download } from 'lucide-react';

const PublicationsSection = () => {
  const publications = [
    {
      title: 'Is the Creation Meaningless?',
      language: 'English',
      year: '2020',
      description: 'A philosophical examination of the divine purpose behind creation from an Islamic perspective.',
      type: 'Philosophy',
      available: true
    },
    {
      title: 'Towards the Creator',
      language: 'English',
      year: '2019',
      description: 'Spiritual guidance for seeking divine connection and understanding Islamic principles.',
      type: 'Spirituality',
      available: true
    },
    {
      title: 'Hal Al-Khalq Bila Ma\'na?',
      language: 'Arabic',
      year: '2021',
      description: 'Arabic translation of the philosophical work on creation\'s meaning and purpose.',
      type: 'Philosophy',
      available: true
    },
    {
      title: 'Srishtavilekku',
      language: 'Malayalam',
      year: '2020',
      description: 'Malayalam edition exploring creation\'s purpose for local community readers.',
      type: 'Philosophy',
      available: true
    },
    {
      title: 'The Address to Know How to Address',
      language: 'English',
      year: '2018',
      description: 'Guidance on proper communication and etiquette in Islamic context.',
      type: 'Ethics',
      available: true
    },
    {
      title: 'Innahu Shamsul Ulama',
      language: 'Arabic',
      year: '2017',
      description: 'Biography of Sheikh E.K. Abu Bakr Musliar, celebrating scholarly contributions.',
      type: 'Biography',
      available: true
    }
  ];

  const languages = ['English', 'Arabic', 'Malayalam', 'Hindi', 'Urdu', 'Tamil'];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Published Works</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A diverse collection of scholarly works spanning philosophy, spirituality, ethics, and biography, 
              published in multiple languages to reach global audiences.
            </p>
          </motion.div>

          {/* Language Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold text-slate-900 text-center mb-8">Multilingual Expertise</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {languages.map((language, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-100 px-4 py-2 rounded-full"
                >
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-slate-700 font-medium">{language}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Publications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-blue-600">{book.type}</span>
                  </div>
                  <span className="text-sm text-slate-500">{book.year}</span>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-2">{book.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{book.language}</p>
                <p className="text-slate-600 mb-4 leading-relaxed">{book.description}</p>

                {book.available && (
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm">
                    <Download className="w-4 h-4 mr-1" />
                    Request Copy
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
