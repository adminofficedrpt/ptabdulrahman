
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Globe, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Educational Pioneer",
      description: "Founder of DQAA, transforming Islamic education"
    },
    {
      icon: Heart,
      title: "Humanitarian", 
      description: "Champion of community welfare and social justice"
    },
    {
      icon: Globe,
      title: "Global Scholar",
      description: "Author reaching audiences worldwide"
    },
    {
      icon: Users,
      title: "Community Builder",
      description: "Bridging Kerala and UAE cultures"
    }
  ];

  return (
    <section id="biography" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-royal-800 mb-4 font-playfair">
              About Dr. P.T. Abdul Rahman
            </h2>
            <div className="w-16 h-1 bg-golden-500 mb-6"></div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg md:text-xl font-medium">
                Distinguished Islamic scholar connecting Kerala's heritage with modern UAE.
              </p>
              
              <p className="text-sm md:text-base">
                Over three decades of service in education, humanitarian work, and cultural bridge-building 
                between communities.
              </p>
              
              <p className="text-sm md:text-base">
                Founder of <strong>Darul Quran Abdulla Academy</strong> and author of influential works 
                on Islamic philosophy translated globally.
              </p>
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-first lg:order-last"
          >
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <img 
                src="/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png"
                alt="Dr. P.T. Abdul Rahman"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div 
          className="mt-12 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-royal-800 text-center mb-8 font-playfair">
            Impact & Legacy
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {highlights.map((highlight, index) => (
              <motion.div 
                key={highlight.title}
                className="text-center p-4 bg-gray-50 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-golden-100 to-royal-100 rounded-full mb-3">
                  <highlight.icon className="h-6 w-6 text-royal-700" />
                </div>
                
                <h4 className="text-sm md:text-base font-semibold text-royal-800 mb-2">
                  {highlight.title}
                </h4>
                
                <p className="text-xs md:text-sm text-gray-600">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
