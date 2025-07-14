
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star } from 'lucide-react';

const TestimonialsWall = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const testimonials = [
    {
      id: 1,
      name: "Dr. Ahmed Al-Mansouri",
      title: "Director of Islamic Studies",
      institution: "American University of Sharjah",
      image: "/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg",
      quote: "Dr. Abdul Rahman's approach to Islamic education represents a paradigm shift. His ability to bridge traditional scholarship with contemporary needs is truly remarkable.",
      rating: 5,
      category: "Academic"
    },
    {
      id: 2,
      name: "Fatima Al-Zahra",
      title: "Former Student, DQAA",
      institution: "Now studying at Harvard University",
      image: "/lovable-uploads/66572de8-7486-4f48-ac7f-1219779e9bd6.jpg",
      quote: "The education I received at DQAA under Dr. Rahman's guidance shaped not just my academic pursuits but my entire worldview. His emphasis on character alongside knowledge is transformative.",
      rating: 5,
      category: "Student"
    },
    {
      id: 3,
      name: "Sheikh Mohammad bin Rashid",
      title: "Religious Affairs Director",
      institution: "UAE Ministry of Education",
      image: "/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png",
      quote: "Dr. Rahman's contributions to interfaith dialogue and community building in the UAE have been instrumental in fostering social cohesion and mutual understanding.",
      rating: 5,
      category: "Government"
    },
    {
      id: 4,
      name: "Prof. Sarah Mitchell",
      title: "Comparative Religion Scholar",
      institution: "Oxford University",
      image: "/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png",
      quote: "His scholarly works demonstrate a profound understanding of both classical Islamic thought and contemporary challenges. A true intellectual bridge-builder.",
      rating: 5,
      category: "International"
    },
    {
      id: 5,
      name: "Abdullah Hassan",
      title: "Community Leader",
      institution: "Dubai Indian Islamic Centre",
      image: "/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg",
      quote: "For over two decades, I've witnessed Dr. Rahman's unwavering commitment to our community. His leadership has transformed countless lives and strengthened our social fabric.",
      rating: 5,
      category: "Community"
    },
    {
      id: 6,
      name: "Dr. Amina Khoury",
      title: "Education Policy Researcher",
      institution: "American University of Beirut",
      image: "/lovable-uploads/66572de8-7486-4f48-ac7f-1219779e9bd6.jpg",
      quote: "The DQAA model pioneered by Dr. Rahman represents best practices in Islamic education that should be studied and replicated across the Muslim world.",
      rating: 5,
      category: "Academic"
    }
  ];

  const categories = ["All", "Academic", "Student", "Government", "International", "Community"];

  return (
    <section className="py-24 bg-white">
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
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-royal-100 rounded-full mb-6">
            <Quote className="w-8 h-8 text-royal-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-light text-royal-900 mb-6">
            Voices of Impact
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-golden-500 to-transparent mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Testimonials from scholars, students, and community leaders whose lives have been 
            touched by Dr. Abdul Rahman's vision and dedication
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto"
        >
          {[
            { number: "10,000+", label: "Lives Impacted" },
            { number: "25", label: "Countries Reached" },
            { number: "15+", label: "Published Works" },
            { number: "30", label: "Years of Service" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-royal-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-royal-300" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-golden-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 italic leading-relaxed mb-6 text-sm md:text-base line-clamp-4">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-royal-800 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-xs leading-tight">
                    {testimonial.title}
                  </p>
                  <p className="text-royal-600 text-xs font-medium">
                    {testimonial.institution}
                  </p>
                </div>
                <div className="ml-2">
                  <span className="bg-royal-100 text-royal-700 text-xs px-2 py-1 rounded-full">
                    {testimonial.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-royal-50 to-golden-50 p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-royal-800 mb-4">
              Share Your Experience
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Have you been impacted by Dr. Abdul Rahman's work? We'd love to hear your story 
              and add your voice to our growing community of testimonials.
            </p>
            <button className="bg-royal-600 hover:bg-royal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Submit Your Testimonial
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsWall;
