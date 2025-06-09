
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Prof. Ahmed Al-Rashid",
      title: "Director, Islamic Education Institute",
      content: "Dr. Rahman's approach to integrating traditional Islamic education with modern pedagogy is revolutionary. DQAA stands as a beacon of educational excellence.",
      rating: 5,
      image: "/lovable-uploads/17b9319a-ac20-4df2-b3d8-1b600b003036.png"
    },
    {
      name: "Fatima Al-Zahra",
      title: "DQAA Graduate, Class of 2020",
      content: "My time at DQAA transformed not just my understanding of the Quran, but my entire worldview. Dr. Rahman's vision creates lifelong learners and leaders.",
      rating: 5,
      image: "/lovable-uploads/37251c4b-0591-433c-bbce-ac4291fc7ddb.png"
    },
    {
      name: "Dr. Michael Thompson",
      title: "UNESCO Education Specialist",
      content: "Dr. Rahman's humanitarian work and educational innovations have had a profound impact on communities across the globe. His dedication is truly inspiring.",
      rating: 5,
      image: "/lovable-uploads/249ad82a-9bb5-4f8e-93f9-8f0b2dd4cad1.png"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-royal-900 mb-4">
            What Leaders Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from educators, graduates, and global leaders about Dr. Rahman's 
            transformative impact on education and humanitarian service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-golden-200" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-royal-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-golden-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
