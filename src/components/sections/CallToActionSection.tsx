
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Heart } from 'lucide-react';

const CallToActionSection = () => {
  const actions = [
    {
      icon: Users,
      title: "Join DQAA Academy",
      description: "Enroll in our world-class Quranic education program",
      buttonText: "Apply Now",
      href: "/#academy",
      color: "from-royal-500 to-royal-600"
    },
    {
      icon: BookOpen,
      title: "Read His Books",
      description: "Explore Dr. Rahman's published works and insights",
      buttonText: "Browse Books",
      href: "/#books",
      color: "from-golden-500 to-golden-600"
    },
    {
      icon: Heart,
      title: "Support Our Mission",
      description: "Help us continue transforming lives through education",
      buttonText: "Donate",
      href: "/#contact",
      color: "from-green-500 to-green-600"
    }
  ];

  const handleClick = (href: string) => {
    const id = href.replace('/#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-royal-900 to-royal-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
            Be Part of the Journey
          </h2>
          <p className="text-lg text-royal-200 max-w-2xl mx-auto">
            Join thousands of students, readers, and supporters who are making a difference 
            through education and humanitarian service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <action.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {action.title}
              </h3>
              
              <p className="text-royal-200 mb-8">
                {action.description}
              </p>
              
              <button
                onClick={() => handleClick(action.href)}
                className={`group/btn bg-gradient-to-r ${action.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center mx-auto`}
              >
                {action.buttonText}
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
