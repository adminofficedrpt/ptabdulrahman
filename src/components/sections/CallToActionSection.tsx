
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Heart } from 'lucide-react';

const CallToActionSection = () => {
  const actions = [
    {
      icon: Users,
      title: "Join DQAA",
      description: "World-class Quranic education",
      buttonText: "Apply",
      href: "/#academy",
      color: "from-royal-500 to-royal-600"
    },
    {
      icon: BookOpen,
      title: "Read Books",
      description: "Explore published works",
      buttonText: "Browse",
      href: "/#books", 
      color: "from-golden-500 to-golden-600"
    },
    {
      icon: Heart,
      title: "Support Mission",
      description: "Help transform lives",
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
    <section className="py-8 md:py-16 bg-gradient-to-br from-royal-900 to-royal-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-2">
            Be Part of the Journey
          </h2>
          <p className="text-sm md:text-base text-royal-200 max-w-xl mx-auto">
            Join thousands making a difference through education and service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {actions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-full mb-4">
                <action.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                {action.title}
              </h3>
              
              <p className="text-royal-200 text-sm md:text-base mb-4 md:mb-6">
                {action.description}
              </p>
              
              <button
                onClick={() => handleClick(action.href)}
                className={`group bg-gradient-to-r ${action.color} text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center mx-auto text-sm md:text-base`}
              >
                {action.buttonText}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
