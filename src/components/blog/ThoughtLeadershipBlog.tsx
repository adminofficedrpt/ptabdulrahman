
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, BookOpen, Users, Globe, Heart, Filter } from 'lucide-react';

const ThoughtLeadershipBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', icon: BookOpen },
    { id: 'education', name: 'Education', icon: Users },
    { id: 'faith', name: 'Faith & Society', icon: Heart },
    { id: 'global', name: 'Global Issues', icon: Globe }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Islamic Education: Bridging Tradition and Innovation',
      excerpt: 'As we navigate the 21st century, Islamic educational institutions must evolve while preserving their core values. This article explores how DQAA Academy serves as a model for this delicate balance.',
      category: 'education',
      author: 'Dr. P.T. Abdul Rahman',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      image: '/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png',
      featured: true,
      tags: ['Education', 'Innovation', 'Islamic Studies', 'DQAA']
    },
    {
      id: 2,
      title: 'Building Interfaith Harmony in Diverse Communities',
      excerpt: 'Drawing from decades of experience in Dubai\'s multicultural environment, this piece examines practical strategies for fostering understanding between different faith communities.',
      category: 'faith',
      author: 'Dr. P.T. Abdul Rahman',
      publishDate: '2024-01-08',
      readTime: '6 min read',
      image: '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png',
      featured: false,
      tags: ['Interfaith', 'Community', 'Dubai', 'Harmony']
    },
    {
      id: 3,
      title: 'The Power of Multilingual Education in Global Citizenship',
      excerpt: 'Fluency in multiple languages opens doors to understanding diverse cultures. This article discusses how linguistic diversity enhances educational outcomes and global awareness.',
      category: 'education',
      author: 'Dr. P.T. Abdul Rahman',
      publishDate: '2024-01-01',
      readTime: '7 min read',
      image: '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg',
      featured: false,
      tags: ['Languages', 'Global Education', 'Cultural Understanding']
    },
    {
      id: 4,
      title: 'Humanitarian Service: A Personal and Social Obligation',
      excerpt: 'Reflecting on three decades of community service, this article explores the transformative power of humanitarian work both for those who serve and those who are served.',
      category: 'global',
      author: 'Dr. P.T. Abdul Rahman',
      publishDate: '2023-12-25',
      readTime: '9 min read',
      image: '/lovable-uploads/66572de8-7486-4f48-ac7f-1219779e9bd6.jpg',
      featured: false,
      tags: ['Humanitarian', 'Service', 'Community Impact', 'Social Responsibility']
    },
    {
      id: 5,
      title: 'Media as a Bridge: Lessons from \'The Guidance - Dharma Reka\'',
      excerpt: 'The pioneering television program that brought together Islam, Christianity, and Hinduism offers valuable insights into the role of media in promoting social harmony.',
      category: 'faith',
      author: 'Dr. P.T. Abdul Rahman',
      publishDate: '2023-12-18',
      readTime: '5 min read',
      image: '/lovable-uploads/45713be7-cf84-488a-bddd-5efbe361b577.png',
      featured: true,
      tags: ['Media', 'Television', 'Interfaith Dialogue', 'Innovation']
    },
    {
      id: 6,
      title: 'Creating Meaning in the Modern World: A Philosophical Perspective',
      excerpt: 'Building on the themes of "Is the Creation Meaningless?", this contemporary reflection examines how individuals can find purpose and meaning in today\'s complex world.',
      category: 'faith',
      author: 'Dr. P.T. Abdul Rahman',
      publishDate: '2023-12-11',
      readTime: '10 min read',
      image: '/lovable-uploads/17b9319a-ac20-4df2-b3d8-1b600b003036.png',
      featured: false,
      tags: ['Philosophy', 'Meaning', 'Purpose', 'Modern Life']
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
            Thoughts & Reflections
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Insights on education, faith, community, and global citizenship from three decades 
            of service, teaching, and humanitarian work across cultures and continents.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-royal-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-royal-50 shadow-md'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {selectedCategory === 'all' && featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-royal-600 to-golden-600 rounded-3xl p-8 md:p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
                    Featured Article
                  </span>
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm opacity-80 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <button className="bg-white text-royal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center">
                    Read Article
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-royal-600 text-white text-sm font-medium rounded-full capitalize">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-royal-900 mb-3 group-hover:text-golden-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="text-royal-600 hover:text-golden-600 font-medium flex items-center transition-colors">
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-royal-50 to-golden-50 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-royal-900 mb-4">
              Stay Connected
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to receive new articles, insights, and updates on Dr. Rahman's ongoing work 
              in education, humanitarian service, and community building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-royal-500"
              />
              <button className="bg-gradient-to-r from-royal-600 to-golden-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThoughtLeadershipBlog;
