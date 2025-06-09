
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Calendar, Globe, Star, Quote, Award, Tv } from 'lucide-react';

const ComprehensiveMediaWall = () => {
  const [activeTab, setActiveTab] = useState('press');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const pressItems = [
    {
      id: 1,
      publication: 'Khaleej Times',
      title: 'Book presents Islamic view on creation',
      excerpt: 'Dr. P.T. Abdul Rahman\'s philosophical work examines the divine purpose behind creation from an Islamic perspective, bridging traditional theology with contemporary thought.',
      date: '2023',
      url: 'https://www.khaleejtimes.com/uae/book-presents-islamic-view-on-creation',
      logo: '/logos/khaleej-times.png',
      category: 'Philosophy & Religion'
    },
    {
      id: 2,
      publication: 'Gulf News',
      title: 'Islamic centre to launch scheme for Indian expats',
      excerpt: 'Dr. Abdul Rahman announces comprehensive new initiatives to support the Indian expatriate community in the UAE through education and welfare programs.',
      date: '2023',
      url: 'https://gulfnews.com/uae/islamic-centre-to-launch-scheme-for-indian-expats-1.424474',
      logo: '/logos/gulf-news.png',
      category: 'Community Service'
    },
    {
      id: 3,
      publication: 'IQNA',
      title: '8th Inter-School Quran Competition in Dubai',
      excerpt: 'Annual international competition organized by DQAA showcases excellence in Quranic education and academic achievement among students from 15 countries.',
      date: '2024',
      url: 'https://iqna.ir/en/news/1925695/8th-inter-school-quran-and-educational-competition-in-dubai-',
      logo: '/logos/iqna.png',
      category: 'Education'
    },
    {
      id: 4,
      publication: 'Emirates 24/7',
      title: 'Educational Pioneer Bridges Traditional and Modern Learning',
      excerpt: 'Comprehensive profile of Dr. P.T. Abdul Rahman\'s innovative approach to Islamic education in the UAE and his global humanitarian initiatives.',
      date: '2024',
      url: '#',
      logo: '/logos/emirates247.png',
      category: 'Education Leadership'
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: 'Prof. Ahmed Al-Rashid',
      title: 'Director, Islamic Education Institute',
      content: 'Dr. Rahman\'s approach to integrating traditional Islamic education with modern pedagogy is revolutionary. DQAA stands as a beacon of educational excellence.',
      rating: 5,
      thumbnail: '/lovable-uploads/17b9319a-ac20-4df2-b3d8-1b600b003036.png',
      videoUrl: '/videos/testimonial-1.mp4',
      location: 'Dubai, UAE'
    },
    {
      id: 2,
      name: 'Fatima Al-Zahra',
      title: 'DQAA Graduate, Class of 2020',
      content: 'My time at DQAA transformed not just my understanding of the Quran, but my entire worldview. Dr. Rahman\'s vision creates lifelong learners and leaders.',
      rating: 5,
      thumbnail: '/lovable-uploads/37251c4b-0591-433c-bbce-ac4291fc7ddb.png',
      videoUrl: '/videos/testimonial-2.mp4',
      location: 'Kerala, India'
    },
    {
      id: 3,
      name: 'Dr. Michael Thompson',
      title: 'UNESCO Education Specialist',
      content: 'Dr. Rahman\'s humanitarian work and educational innovations have had a profound impact on communities across the globe. His dedication is truly inspiring.',
      rating: 5,
      thumbnail: '/lovable-uploads/249ad82a-9bb5-4f8e-93f9-8f0b2dd4cad1.png',
      videoUrl: '/videos/testimonial-3.mp4',
      location: 'Paris, France'
    }
  ];

  const tvAppearances = [
    {
      id: 1,
      channel: 'Asianet',
      program: 'The Guidance - Dharma Reka',
      role: 'Creator & Host',
      year: '2001-2005',
      description: 'Groundbreaking interfaith dialogue program promoting harmony between Islam, Christianity, and Hinduism',
      viewers: '2M+ weekly viewers',
      achievement: 'First program of its kind in Malayalam television'
    },
    {
      id: 2,
      channel: 'Dubai TV',
      program: 'Educational Leaders Forum',
      role: 'Guest Expert',
      year: '2023',
      description: 'Panel discussion on modern Islamic education and cultural preservation',
      viewers: 'Regional broadcast',
      achievement: 'Keynote on educational innovation'
    }
  ];

  const awards = [
    {
      title: 'Dubai Golden Visa',
      organization: 'UAE Government',
      year: '2024',
      category: 'Community Service Excellence',
      description: 'Recognition for significant contributions to UAE\'s multicultural society'
    },
    {
      title: 'Educational Excellence Award',
      organization: 'Kerala State Government',
      year: '2023',
      category: 'Innovation in Islamic Education',
      description: 'Pioneering work in modern Islamic educational methodology'
    },
    {
      title: 'Humanitarian Service Recognition',
      organization: 'Indian Consulate Dubai',
      year: '2022',
      category: 'Community Leadership',
      description: 'Three decades of service to expatriate Indian community'
    }
  ];

  const tabs = [
    { id: 'press', label: 'Press Coverage', icon: Globe },
    { id: 'testimonials', label: 'Video Testimonials', icon: Play },
    { id: 'tv', label: 'TV Appearances', icon: Tv },
    { id: 'awards', label: 'Awards & Recognition', icon: Award }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-royal-900 mb-4">
            Global Recognition & Media Coverage
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Three decades of leadership, innovation, and humanitarian service recognized 
            by international media, educational institutions, and government organizations worldwide.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-royal-600 border-b-2 border-royal-600'
                  : 'text-gray-600 hover:text-royal-600'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Press Coverage */}
        {activeTab === 'press' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {pressItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-royal-100 text-royal-700 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>

                <h3 className="text-xl font-playfair font-bold text-royal-900 mb-2 group-hover:text-golden-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-medium text-golden-600 mb-3">{item.publication}</p>

                <p className="text-gray-700 mb-4 leading-relaxed">{item.excerpt}</p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-royal-600 hover:text-golden-600 transition-colors font-medium"
                >
                  Read Full Article
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* Video Testimonials */}
        {activeTab === 'testimonials' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {videoTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative mb-6 group cursor-pointer" onClick={() => setSelectedVideo(testimonial)}>
                  <img
                    src={testimonial.thumbnail}
                    alt={testimonial.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.thumbnail}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-royal-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <p className="text-xs text-golden-600">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-golden-500 fill-current" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-golden-200 mb-2" />
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* TV Appearances */}
        {activeTab === 'tv' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {tvAppearances.map((appearance, index) => (
              <motion.div
                key={appearance.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-playfair font-bold text-royal-900 mb-2">
                      {appearance.program}
                    </h3>
                    <p className="text-golden-600 font-medium">{appearance.channel}</p>
                    <p className="text-gray-600">{appearance.year}</p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2">{appearance.description}</p>
                    <p className="text-sm text-royal-600 font-medium">Role: {appearance.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-royal-900">{appearance.viewers}</p>
                    <p className="text-sm text-golden-600">{appearance.achievement}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Awards & Recognition */}
        {activeTab === 'awards' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-royal-50 to-golden-50 rounded-2xl p-6 border border-royal-100"
              >
                <Award className="w-12 h-12 text-golden-600 mb-4" />
                <h3 className="text-xl font-playfair font-bold text-royal-900 mb-2">
                  {award.title}
                </h3>
                <p className="text-golden-600 font-medium mb-1">{award.organization}</p>
                <p className="text-sm text-gray-600 mb-3">{award.year} • {award.category}</p>
                <p className="text-gray-700">{award.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ComprehensiveMediaWall;
