
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Heart } from 'lucide-react';

const PersonalLetter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-24 bg-gradient-to-br from-royal-900 to-royal-800 text-white">
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
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-golden-500/20 rounded-full mb-6">
            <Heart className="w-8 h-8 text-golden-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-light mb-6">
            A Letter from Dr. Abdul Rahman
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-golden-500 to-transparent mx-auto" />
        </motion.div>

        {/* Letter Content */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-golden-400/30" />
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-white/90">
                <span className="text-golden-300 font-medium">My Dear Friends,</span>
              </p>
              
              <p className="text-white/90">
                When I reflect on the journey that has brought me from the quiet villages of Kerala to the 
                bustling corridors of educational innovation in the UAE, I am humbled by the divine grace 
                that has guided each step.
              </p>
              
              <p className="text-white/90">
                My grandmother used to tell me that the greatest education is not what fills the mind, but 
                what awakens the soul. This wisdom has been the cornerstone of everything I have endeavored 
                to build—from the Dubai Indian Islamic Centre to Darul Quran Abdulla Academy.
              </p>
              
              <p className="text-white/90">
                Today, as I witness thousands of young minds discovering their potential through our 
                educational programs, I see not just students, but future leaders who will carry forward 
                the torch of knowledge, compassion, and service to humanity.
              </p>
              
              <p className="text-white/90">
                The work continues, and the vision expands. For in education, we do not merely transfer 
                information—we transform lives, communities, and ultimately, the world.
              </p>
              
              <p className="text-golden-300 font-medium mt-8">
                With prayers and gratitude,<br />
                Dr. P.T. Abdul Rahman
              </p>
            </div>
            
            <Quote className="absolute bottom-6 right-6 w-8 h-8 text-golden-400/30 rotate-180" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PersonalLetter;
