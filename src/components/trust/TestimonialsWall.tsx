
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, Users, GraduationCap } from 'lucide-react';
import FluidTypography from '@/components/typography/FluidTypography';
import ResponsiveContainer from '@/components/layout/ResponsiveContainer';
import IslamicPattern from '@/components/design-system/IslamicPattern';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  rating: number;
  image?: string;
  location: string;
  category: 'student' | 'colleague' | 'leader' | 'community';
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mohammed Al-Rashid',
    role: 'DQAA Graduate, Hafiz',
    organization: 'Currently pursuing Masters in Islamic Studies',
    content: 'Under Dr. P.T.\'s guidance, I not only memorized the Quran but developed a deep understanding of its teachings. His innovative approach to Islamic education changed my life forever.',
    rating: 5,
    location: 'UAE',
    category: 'student'
  },
  {
    id: '2',
    name: 'Dr. Sarah Hassan',
    role: 'Professor of Islamic Studies',
    organization: 'Al-Azhar University',
    content: 'Dr. Abdul Rahman\'s scholarly contributions to Islamic philosophy are profound. His book "Is the Creation Meaningless?" is required reading in our graduate program.',
    rating: 5,
    location: 'Egypt',
    category: 'colleague'
  },
  {
    id: '3',
    name: 'Amina Abdullah',
    role: 'Parent',
    organization: 'DQAA Parent Council',
    content: 'When my son joined DQAA, I witnessed a transformation. Dr. P.T.\'s holistic approach to education nurtures both academic excellence and spiritual growth.',
    rating: 5,
    location: 'India',
    category: 'community'
  },
  {
    id: '4',
    name: 'Sheikh Omar Al-Khouri',
    role: 'Islamic Scholar',
    organization: 'Dubai Islamic Centre',
    content: 'Dr. Abdul Rahman bridges traditional Islamic scholarship with contemporary educational methods. His work in interfaith dialogue is exemplary.',
    rating: 5,
    location: 'UAE',
    category: 'leader'
  }
];

const TestimonialsWall: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All', icon: Users },
    { id: 'student', label: 'Students', icon: GraduationCap },
    { id: 'colleague', label: 'Scholars', icon: Quote },
    { id: 'leader', label: 'Leaders', icon: Star },
    { id: 'community', label: 'Community', icon: Users }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [filteredTestimonials.length]);

  return (
    <section className="py-fluid-2xl bg-gradient-to-br from-royal-50 via-white to-golden-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-6 gap-8 h-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <IslamicPattern key={i} variant="geometric" size="lg" animate />
          ))}
        </div>
      </div>

      <ResponsiveContainer size="xl" padding="lg">
        <div className="text-center mb-fluid-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-xs sm:text-sm font-light tracking-[0.2em] uppercase text-golden-600">
              Global Impact
            </span>
          </motion.div>
          <FluidTypography variant="h2" color="royal" className="mb-6">
            Voices of Transformation
          </FluidTypography>
          <FluidTypography variant="body" color="muted" className="max-w-3xl mx-auto">
            Hear from students, scholars, and community leaders whose lives have been 
            touched by Dr. P.T. Abdul Rahman's dedication to education and service.
          </FluidTypography>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-fluid-lg">
          <div className="flex flex-wrap gap-2 p-2 bg-white rounded-2xl shadow-lg border border-gray-100">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 min-h-[44px] ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-royal-600 to-royal-700 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <category.icon size={16} />
                <span className="text-sm font-medium">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${activeTestimonial}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-golden-500 to-golden-600 p-4 rounded-full shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-8 text-center">
                <FluidTypography variant="body" className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8 italic">
                  "{filteredTestimonials[activeTestimonial]?.content}"
                </FluidTypography>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-golden-500 fill-current"
                    />
                  ))}
                </div>

                {/* Author Info */}
                <div>
                  <FluidTypography variant="h6" color="royal" className="mb-1">
                    {filteredTestimonials[activeTestimonial]?.name}
                  </FluidTypography>
                  <FluidTypography variant="body" color="muted" className="text-sm mb-1">
                    {filteredTestimonials[activeTestimonial]?.role}
                  </FluidTypography>
                  <FluidTypography variant="body" color="muted" className="text-sm">
                    {filteredTestimonials[activeTestimonial]?.organization} • {filteredTestimonials[activeTestimonial]?.location}
                  </FluidTypography>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {filteredTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center ${
                index === activeTestimonial
                  ? 'bg-gradient-to-r from-royal-600 to-royal-700 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            >
              <span className="sr-only">Testimonial {index + 1}</span>
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-fluid-xl pt-fluid-lg border-t border-gray-200">
          {[
            { number: '500+', label: 'DQAA Graduates' },
            { number: '15+', label: 'Countries Reached' },
            { number: '30+', label: 'Years of Service' },
            { number: '1000+', label: 'Lives Transformed' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <FluidTypography variant="h4" color="royal" className="font-bold mb-2">
                {stat.number}
              </FluidTypography>
              <FluidTypography variant="caption" color="muted">
                {stat.label}
              </FluidTypography>
            </motion.div>
          ))}
        </div>
      </ResponsiveContainer>
    </section>
  );
};

export default TestimonialsWall;
