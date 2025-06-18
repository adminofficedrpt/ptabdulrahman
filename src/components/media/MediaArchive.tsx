
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, ExternalLink, Calendar, MapPin, Filter } from 'lucide-react';

const MediaArchive = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const filters = ['all', 'interviews', 'lectures', 'awards', 'conferences'];

  const mediaItems = [
    {
      id: 1,
      type: 'interviews',
      title: 'Vision for Islamic Education in the 21st Century',
      description: 'Comprehensive discussion on modernizing Islamic education while preserving traditional values.',
      thumbnail: '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg',
      date: '2023-03-15',
      venue: 'UAE National TV',
      duration: '45 min',
      category: 'Television Interview'
    },
    {
      id: 2,
      type: 'lectures',
      title: 'Ethics in Modern Society: An Islamic Perspective',
      description: 'Keynote address on integrating Islamic ethical principles in contemporary governance and education.',
      thumbnail: '/lovable-uploads/66572de8-7486-4f48-ac7f-1219779e9bd6.jpg',
      date: '2023-01-20',
      venue: 'Dubai International Conference Center',
      duration: '60 min',
      category: 'Academic Lecture'
    },
    {
      id: 3,
      type: 'awards',
      title: 'UAE Golden Visa Recognition Ceremony',
      description: 'Official ceremony recognizing exceptional contributions to education and community development.',
      thumbnail: '/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png',
      date: '2022-11-10',
      venue: 'Emirates Palace, Abu Dhabi',
      duration: '30 min',
      category: 'Award Ceremony'
    },
    {
      id: 4,
      type: 'conferences',
      title: 'International Islamic Education Summit',
      description: 'Panel discussion on the future of Islamic education with global education leaders.',
      thumbnail: '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png',
      date: '2023-05-08',
      venue: 'Sharjah Islamic Cultural Center',
      duration: '90 min',
      category: 'Conference Panel'
    },
    {
      id: 5,
      type: 'interviews',
      title: 'Journey from Kerala to UAE: A Scholar\'s Path',
      description: 'Personal reflection on the journey from traditional madrasa education to modern Islamic scholarship.',
      thumbnail: '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg',
      date: '2022-08-22',
      venue: 'Al Arabiya News',
      duration: '35 min',
      category: 'Documentary Interview'
    },
    {
      id: 6,
      type: 'lectures',
      title: 'Community Leadership in Islamic Context',
      description: 'Address on the role of Islamic scholars in building cohesive, forward-thinking communities.',
      thumbnail: '/lovable-uploads/66572de8-7486-4f48-ac7f-1219779e9bd6.jpg',
      date: '2023-02-14',
      venue: 'American University of Sharjah',
      duration: '50 min',
      category: 'University Lecture'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.type === activeFilter);

  return (
    <section className="py-24 bg-gray-50">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="container mx-auto px-6"
      >
        {/* Section Header */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-light text-royal-900 mb-6">
            Media Archive
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-golden-500 to-transparent mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive collection of interviews, lectures, and public appearances 
            documenting decades of scholarly discourse and community leadership
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center space-x-1 bg-white rounded-xl p-2 shadow-lg border border-gray-100">
            <Filter className="w-5 h-5 text-gray-400 ml-2" />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg capitalize transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-royal-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter === 'all' ? 'All Media' : filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Media Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Play Button */}
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 text-royal-800 ml-1" />
                  </div>
                </button>
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
                  {item.duration}
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-royal-600 text-white text-xs px-2 py-1 rounded">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-royal-800 mb-2 line-clamp-2 group-hover:text-royal-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {item.venue}
                  </div>
                </div>
                
                <button className="w-full bg-royal-50 hover:bg-royal-100 text-royal-800 py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Watch Full Interview
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="bg-royal-600 hover:bg-royal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
            Load More Media
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MediaArchive;
