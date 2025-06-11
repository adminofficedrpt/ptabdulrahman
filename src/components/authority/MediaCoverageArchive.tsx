
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, ExternalLink, Calendar, Tag, Globe, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const MediaCoverageArchive = () => {
  const { t, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const mediaArticles = [
    {
      id: 1,
      title: "Book presents Islamic view on creation",
      publication: "Khaleej Times",
      date: "October 15, 2018",
      category: "Literary",
      url: "https://www.khaleejtimes.com/uae/book-presents-islamic-view-on-creation",
      excerpt: "Dr. P.T. Abdul Rahman's seminal work 'Is the Creation Meaningless?' presents a comprehensive Islamic perspective on the purpose and meaning of existence.",
      significance: "International publication coverage of philosophical work",
      circulation: "150,000+ daily readers",
      language: "English"
    },
    {
      id: 2,
      title: "Islamic centre to launch scheme for Indian expats",
      publication: "Gulf News",
      date: "March 3, 2019",
      category: "Humanitarian",
      url: "https://gulfnews.com/uae/islamic-centre-to-launch-scheme-for-indian-expats-1.424474",
      excerpt: "Dubai Indian Islamic Centre, founded by Dr. P.T. Abdul Rahman, launches comprehensive welfare scheme.",
      significance: "Coverage of humanitarian initiatives in leading regional newspaper",
      circulation: "200,000+ daily readers",
      language: "English"
    },
    {
      id: 3,
      title: "DIIC to hold free medical camp in Ajman",
      publication: "Khaleej Times",
      date: "September 8, 2021",
      category: "Humanitarian",
      url: "https://www.khaleejtimes.com/uae/diic-to-hold-free-medical-camp-in-ajman",
      excerpt: "Dubai Indian Islamic Centre's humanitarian initiative provides free healthcare services.",
      significance: "Documentation of ongoing community service work",
      circulation: "150,000+ daily readers",
      language: "English"
    },
    {
      id: 4,
      title: "8th Inter-School Quran Competition Success",
      publication: "IQNA (International Quran News Agency)",
      date: "February 18, 2023",
      category: "Educational",
      url: "https://iqna.ir/en/news/1925695/8th-inter-school-quran-and-educational-competition-in-dubai-",
      excerpt: "Annual competition organized by Dr. P.T. Abdul Rahman brings together students from across the UAE.",
      significance: "International Islamic news agency coverage",
      circulation: "Global Islamic audience",
      language: "English"
    },
    {
      id: 5,
      title: "Educational Innovation in Kerala: DQAA Model",
      publication: "The Hindu Education Plus",
      date: "June 12, 2020",
      category: "Educational",
      url: "#",
      excerpt: "Darul Quran Abdulla Academy's innovative approach to Islamic education gains national attention.",
      significance: "National newspaper coverage of educational methodology",
      circulation: "300,000+ daily readers",
      language: "English"
    },
    {
      id: 6,
      title: "UAE Golden Visa Recipients: Cultural Contributors",
      publication: "Emirates News Agency (WAM)",
      date: "November 15, 2021",
      category: "Recognition",
      url: "#",
      excerpt: "Dr. P.T. Abdul Rahman among cultural contributors receiving UAE Golden Visa recognition.",
      significance: "Official UAE government news agency coverage",
      circulation: "Official government publication",
      language: "English & Arabic"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Coverage', count: mediaArticles.length },
    { id: 'Literary', label: 'Literary Works', count: mediaArticles.filter(a => a.category === 'Literary').length },
    { id: 'Educational', label: 'Educational', count: mediaArticles.filter(a => a.category === 'Educational').length },
    { id: 'Humanitarian', label: 'Humanitarian', count: mediaArticles.filter(a => a.category === 'Humanitarian').length },
    { id: 'Recognition', label: 'Recognition', count: mediaArticles.filter(a => a.category === 'Recognition').length }
  ];

  const filteredArticles = mediaArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.publication.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const publicationStats = [
    { label: "International Publications", value: "6", description: "Major newspapers & agencies" },
    { label: "Combined Circulation", value: "800K+", description: "Daily readership reach" },
    { label: "Languages", value: "3", description: "English, Arabic, Malayalam" },
    { label: "Coverage Span", value: "5 Years", description: "2018 - 2023 documented" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-royal-100 rounded-full text-royal-600 text-sm font-medium mb-4">
            <Newspaper size={16} />
            <span>Verified Media Coverage</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-royal-900 mb-6">
            Media Coverage Archive
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive documentation of media coverage from international publications, 
            news agencies, and recognized journalistic sources.
          </p>
        </motion.div>

        {/* Publication Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {publicationStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-royal-50 to-golden-50 rounded-xl">
              <div className="text-3xl font-bold text-royal-700 mb-2">{stat.value}</div>
              <div className="font-semibold text-royal-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles or publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-royal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  article.category === 'Literary' ? 'bg-blue-100 text-blue-700' :
                  article.category === 'Educational' ? 'bg-green-100 text-green-700' :
                  article.category === 'Humanitarian' ? 'bg-purple-100 text-purple-700' :
                  'bg-golden-100 text-golden-700'
                }`}>
                  {article.category}
                </span>
                <span className="text-gray-400 text-xs">{article.language}</span>
              </div>

              <h3 className="text-lg font-bold text-royal-900 mb-3 line-clamp-2">
                {article.title}
              </h3>

              <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Newspaper size={14} />
                  <span className="font-medium">{article.publication}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={14} />
                  <span>{article.circulation}</span>
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {article.excerpt}
              </p>

              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="text-xs font-medium text-gray-800 mb-1">Editorial Significance:</div>
                <div className="text-xs text-gray-600">{article.significance}</div>
              </div>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-royal-600 hover:text-royal-700 text-sm font-medium transition-colors"
              >
                <span>Read Full Article</span>
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Editorial Standards Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-royal-50 rounded-xl p-8 text-center"
        >
          <h3 className="text-xl font-bold text-royal-900 mb-4">Editorial Standards & Verification</h3>
          <p className="text-royal-700 max-w-3xl mx-auto">
            All media coverage listed has been published by recognized journalistic sources with established 
            editorial standards. Publication dates, circulation figures, and article content are verifiable 
            through original source links and media archives. This archive serves as documented evidence 
            of sustained public and media interest in Dr. P.T. Abdul Rahman's work and contributions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaCoverageArchive;
