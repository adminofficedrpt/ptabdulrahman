
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Prof. Ahmed Al-Rashid",
      title: "Islamic Education Institute",
      content: "Dr. Rahman's educational approach is revolutionary. DQAA stands as a beacon of excellence.",
      rating: 5
    },
    {
      name: "Fatima Al-Zahra", 
      title: "DQAA Graduate, 2020",
      content: "DQAA transformed my understanding and worldview. Dr. Rahman creates lifelong learners.",
      rating: 5
    },
    {
      name: "Dr. Michael Thompson",
      title: "UNESCO Education Specialist", 
      content: "Dr. Rahman's humanitarian work has profound global impact. Truly inspiring dedication.",
      rating: 5
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-royal-900 mb-2">
            What Leaders Say
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
            Testimonials from educators, graduates, and global leaders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-3 right-3 w-6 h-6 md:w-7 md:h-7 text-golden-200" />
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-golden-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed italic mb-4">
                "{testimonial.content}"
              </p>

              <div>
                <h4 className="font-semibold text-royal-800 text-sm md:text-base">
                  {testimonial.name}
                </h4>
                <p className="text-xs md:text-sm text-gray-600">
                  {testimonial.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
