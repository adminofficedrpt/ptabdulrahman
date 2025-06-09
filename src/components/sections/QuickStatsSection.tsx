
import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, GraduationCap, Heart, Globe } from 'lucide-react';

const QuickStatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Lives Transformed",
      description: "Students and families impacted globally"
    },
    {
      icon: BookOpen,
      number: "15+",
      label: "Published Works",
      description: "Books in multiple languages"
    },
    {
      icon: GraduationCap,
      number: "2,000+",
      label: "DQAA Graduates",
      description: "Academy alumni worldwide"
    },
    {
      icon: Award,
      number: "25+",
      label: "International Awards",
      description: "Recognition for excellence"
    },
    {
      icon: Heart,
      number: "₹5 Crores+",
      label: "Charity Distributed",
      description: "Humanitarian aid provided"
    },
    {
      icon: Globe,
      number: "15+",
      label: "Countries Reached",
      description: "Global educational impact"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-royal-50 to-golden-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-royal-900 mb-4">
            Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three decades of dedicated service, education, and humanitarian work 
            have created a lasting global impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-golden-100 to-golden-200 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-golden-600" />
              </div>
              
              <div className="text-3xl md:text-4xl font-bold text-royal-900 mb-2">
                {stat.number}
              </div>
              
              <h3 className="text-xl font-semibold text-royal-800 mb-2">
                {stat.label}
              </h3>
              
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStatsSection;
