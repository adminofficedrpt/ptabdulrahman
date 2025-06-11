
import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, GraduationCap, Heart, Globe } from 'lucide-react';

const QuickStatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "10K+",
      label: "Lives Transformed"
    },
    {
      icon: BookOpen,
      number: "15+",
      label: "Published Works"
    },
    {
      icon: GraduationCap,
      number: "2K+",
      label: "DQAA Graduates"
    },
    {
      icon: Award,
      number: "25+",
      label: "Awards"
    },
    {
      icon: Heart,
      number: "₹5Cr+",
      label: "Charity"
    },
    {
      icon: Globe,
      number: "15+",
      label: "Countries"
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-gradient-to-br from-royal-50 to-golden-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-royal-900 mb-2">
            Impact in Numbers
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
            Three decades of dedicated service creating lasting global impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 md:p-6 shadow-lg text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-golden-100 to-royal-100 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-royal-700" />
              </div>
              
              <div className="text-xl md:text-2xl font-bold text-royal-900 mb-1">
                {stat.number}
              </div>
              
              <h3 className="text-xs md:text-sm font-semibold text-royal-800">
                {stat.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStatsSection;
