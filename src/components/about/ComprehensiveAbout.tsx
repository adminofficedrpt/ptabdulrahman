
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Globe, Users, Award, BookOpen, Building, HandHeart } from 'lucide-react';

const ComprehensiveAbout = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Educational Pioneer",
      description: "Founder of Darul Quran Abdulla Academy, revolutionizing Islamic education by integrating Quranic memorization with academic excellence",
      stats: "1000+ students graduated"
    },
    {
      icon: Heart,
      title: "Humanitarian Leader", 
      description: "Three decades of community service, healthcare initiatives, and social welfare programs across UAE and India",
      stats: "50+ community programs"
    },
    {
      icon: Globe,
      title: "Global Scholar",
      description: "Author of influential works translated into multiple languages, reaching audiences across continents",
      stats: "5+ languages translated"
    },
    {
      icon: Users,
      title: "Community Builder",
      description: "Founded Dubai Indian Islamic Centre, bridging cultures and fostering interfaith dialogue and understanding",
      stats: "15+ organizations founded"
    },
    {
      icon: Award,
      title: "Recognized Excellence",
      description: "Recipient of numerous national and international awards for contributions to education and humanitarian work",
      stats: "20+ prestigious awards"
    },
    {
      icon: BookOpen,
      title: "Prolific Author",
      description: "Published comprehensive works on Islamic philosophy, education, and contemporary social issues",
      stats: "4+ published books"
    }
  ];

  const impactStats = [
    { value: "30+", label: "Years of Service", description: "Dedicated to education and community development" },
    { value: "5000+", label: "Lives Touched", description: "Through education, healthcare, and social programs" },
    { value: "25+", label: "Countries Reached", description: "Through publications and speaking engagements" },
    { value: "100+", label: "Lectures Delivered", description: "International conferences and educational seminars" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-royal-800 mb-6 font-playfair">
            About Dr. P.T. Abdul Rahman
          </h2>
          <div className="w-24 h-1 bg-golden-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            A distinguished Islamic scholar, educator, and humanitarian whose vision has transformed 
            lives across continents through innovative education, community service, and scholarly contributions.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
          {/* Portrait */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-golden-200/30 to-royal-200/30 blur-2xl"></div>
              <img 
                src="/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png"
                alt="Dr. P.T. Abdul Rahman - Distinguished Islamic Scholar and Humanitarian"
                className="relative w-full rounded-3xl shadow-2xl"
              />
              
              {/* Quote Overlay */}
              <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-sm border border-golden-200">
                <blockquote className="text-royal-800 italic mb-3 text-lg leading-relaxed">
                  "Education is not just about acquiring knowledge, but about nurturing wisdom that transforms both the individual and society."
                </blockquote>
                <cite className="text-golden-600 font-medium">— Dr. P.T. Abdul Rahman</cite>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-royal-800 mb-4 font-playfair">
                  A Visionary Leader Bridging Worlds
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Dr. P.T. Abdul Rahman stands as one of the most influential Islamic scholars 
                  and educators connecting Kerala's rich Islamic heritage with the modern UAE landscape. 
                  His journey represents a unique blend of traditional scholarship and contemporary innovation.
                </p>
              </div>

              <div className="bg-gradient-to-r from-royal-50 to-golden-50 rounded-2xl p-8">
                <h4 className="text-2xl font-semibold text-royal-800 mb-4 font-playfair">
                  Core Mission & Vision
                </h4>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    <strong className="text-royal-700">Educational Excellence:</strong> Pioneering 
                    an educational model that seamlessly integrates Quranic memorization with modern 
                    academic rigor, producing well-rounded global citizens.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-royal-700">Cultural Bridge:</strong> Serving as a 
                    vital connection between Indian expatriate communities and UAE society, 
                    fostering understanding and cooperation.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-royal-700">Humanitarian Impact:</strong> Leading 
                    countless initiatives that provide healthcare, education, and social support 
                    to underserved communities across two nations.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-royal-800 mb-4 font-playfair">
                  Distinguished Career Highlights
                </h4>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Born and raised in Kerala, India, Dr. Rahman moved to the UAE in 1992, 
                    where he quickly established himself as a bridge between cultures. His 
                    founding of the <strong>Dubai Indian Islamic Centre</strong> marked the 
                    beginning of his transformative community work in the region.
                  </p>
                  <p className="leading-relaxed">
                    In 2013, he founded the <strong>Darul Quran Abdulla Academy (DQAA)</strong> 
                    in Kerala, revolutionizing Islamic education by creating an institution 
                    where students can achieve Hafiz status while excelling in conventional 
                    academic subjects. This innovative approach has gained international recognition.
                  </p>
                  <p className="leading-relaxed">
                    His literary contributions, particularly <strong>"Is the Creation Meaningless?"</strong>, 
                    have been translated into multiple languages and continue to influence 
                    Islamic philosophical discourse globally.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievement Highlights */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-royal-800 text-center mb-12 font-playfair">
            Pillars of Excellence
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={achievement.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-golden-100 to-royal-100 rounded-2xl mb-6 group-hover:from-golden-200 group-hover:to-royal-200 transition-colors">
                  <achievement.icon className="h-8 w-8 text-royal-700" />
                </div>
                <h4 className="text-xl font-semibold text-royal-800 mb-4 font-playfair">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {achievement.description}
                </p>
                <div className="text-golden-600 font-semibold text-sm">
                  {achievement.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div 
          className="bg-gradient-to-r from-royal-900 to-royal-800 rounded-3xl p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 font-playfair text-golden-300">
            Global Impact & Reach
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-golden-400 mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-golden-300">
                  {stat.label}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComprehensiveAbout;
