import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Award, Briefcase, Building2, BookOpen, Handshake, Gavel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { designTokens } from '@/lib/design-tokens';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  location: string;
  category: 'government' | 'legal' | 'education' | 'media' | 'humanitarian' | 'recognition';
  description: string;
  achievements: string[];
  image?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: '1992-foundation',
    year: '1992',
    title: 'Founding the Dubai Indian Islamic Centre',
    location: 'Dubai, UAE',
    category: 'humanitarian',
    description: 'Established a pivotal institution for expatriate welfare, initiating decades of community service and support.',
    achievements: ['Founded Dubai Indian Islamic Centre', 'Pioneered free repatriation services'],
    image: '/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png'
  },
  {
    id: '1995-publication',
    year: '1995',
    title: 'Literary Landmark: "Is the Creation Meaningless?"',
    location: 'UAE',
    category: 'media',
    description: 'Published a seminal philosophical work, establishing his intellectual authority and influencing global theological discourse.',
    achievements: ['Authored flagship philosophical work', 'Translated into multiple languages'],
    image: '/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png'
  },
  {
    id: '2001-tv-program',
    year: '2001-2003',
    title: 'Pioneering Islamic Television Programming',
    location: 'UAE & India',
    category: 'media',
    description: 'Hosted "The Guidance – Dharma Reka" on Asianet, a groundbreaking series that brought Islamic teachings to a wide audience.',
    achievements: ['Creator and presenter of "The Guidance" TV series', 'Expanded reach of Islamic education through media'],
    image: '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg'
  },
  {
    id: '2013-dqaa',
    year: '2013',
    title: 'Founding Darul Quran Abdulla Academy (DQAA)',
    location: 'Kerala, India',
    category: 'education',
    description: 'Established an innovative educational institution integrating traditional Quranic studies with modern academic excellence.',
    achievements: ['Founded DQAA', 'Developed unique integrated curriculum', 'Fostered Hafiz + Academic excellence model'],
    image: '/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png'
  },
  {
    id: '2017-golden-visa',
    year: '2017-Present',
    title: 'UAE Golden Visa & Global Recognition',
    location: 'International',
    category: 'recognition',
    description: 'Awarded the prestigious UAE Golden Visa for social contributions, cementing his legacy as a globally recognized leader.',
    achievements: ['Received UAE Golden Visa', 'Multiple international awards and honors', 'Continued global speaking engagements'],
    image: '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png'
  },
  {
    id: 'legal-consultancy',
    year: 'Ongoing',
    title: 'Distinguished Legal Consultancy',
    location: 'UAE',
    category: 'legal',
    description: 'Serving as Managing Partner and Senior Legal Consultant, providing expert legal advisory services in the UAE.',
    achievements: ['Managing Partner, Precedential Legal Consultancy', 'Senior Legal Consultant, Tasheel Legal Consultancy'],
  },
  {
    id: 'military-command',
    year: 'Ongoing',
    title: 'Administrator, Central Military Command',
    location: 'UAE',
    category: 'government',
    description: 'Contributing to national service as an Administrator within the Central Military Command of the United Arab Emirates.',
    achievements: ['Administrator, Central Military Command, UAE'],
  },
];

const categoryColors = {
  education: 'bg-blue-100 text-blue-800',
  media: 'bg-purple-100 text-purple-800',
  humanitarian: 'bg-red-100 text-red-800',
  recognition: 'bg-yellow-100 text-yellow-800',
  government: 'bg-gray-100 text-gray-800',
  legal: 'bg-indigo-100 text-indigo-800',
};

const categoryIcons = {
  education: BookOpen,
  media: BookOpen,
  humanitarian: Handshake,
  recognition: Award,
  government: Briefcase,
  legal: Gavel,
};

const HorizontalTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const scrollToEvent = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const eventWidth = 320 + 32; // Card width + gap
      const scrollPosition = index * eventWidth;
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handlePrevious = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToEvent(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(timelineEvents.length - 1, currentIndex + 1);
    scrollToEvent(newIndex);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const eventWidth = 320 + 32;
        const newIndex = Math.round(container.scrollLeft / eventWidth);
        setCurrentIndex(newIndex);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <motion.section 
      id="career"
      className={`py-${designTokens.spacing.section.md} bg-gradient-to-br from-primary-50 to-neutral-50 overflow-hidden`}
      style={{ opacity, scale }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`text-fluid-4xl md:text-fluid-5xl font-heading font-bold text-primary-900 mb-4`}>
            A Legacy Unfolding: Career & Leadership Timeline
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto mb-6`}></div>
          <p className={`text-fluid-lg ${designTokens.typography.fontFamily.body.join(",")} text-primary-700 max-w-3xl mx-auto`}>
            Explore the pivotal moments and significant contributions that define Dr. P.T. Abdul Rahman's distinguished career and leadership journey.
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`rounded-full border-primary-200 text-primary-700 hover:bg-primary-100 hover:text-primary-900`}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex gap-2">
            {timelineEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToEvent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-accent-500' : 'bg-primary-300'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleNext}
            disabled={currentIndex === timelineEvents.length - 1}
            className={`rounded-full border-primary-200 text-primary-700 hover:bg-primary-100 hover:text-primary-900`}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Horizontal Scrolling Timeline */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {timelineEvents.map((event, index) => {
              const IconComponent = categoryIcons[event.category];
              return (
                <motion.div
                  key={event.id}
                  className="flex-shrink-0 w-80 snap-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`h-full bg-white border border-primary-100 shadow-lg hover:shadow-xl transition-all duration-300 group`}>
                    <CardContent className="p-0">
                      {/* Image */}
                      {event.image && (
                        <div className="relative h-48 overflow-hidden rounded-t-lg">
                          <motion.img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            whileHover={{ scale: 1.05 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
                          <div className="absolute top-4 left-4">
                            <Badge className={`${categoryColors[event.category]} text-xs font-semibold px-2 py-1 rounded-full`}>
                              <IconComponent className="w-3 h-3 mr-1" />
                              {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                            </Badge>
                          </div>
                          <div className="absolute bottom-4 left-4">
                            <div className={`text-neutral-50 font-bold text-fluid-xl ${designTokens.typography.fontFamily.heading.join(",")}`}>{event.year}</div>
                          </div>
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6">
                        <div className={`flex items-center gap-2 mb-3 text-sm ${designTokens.typography.fontFamily.body.join(",")} text-primary-600`}>
                          <MapPin className="w-4 h-4 text-accent-500" />
                          {event.location}
                        </div>

                        <h3 className={`text-fluid-xl font-bold ${designTokens.typography.fontFamily.heading.join(",")} text-primary-900 mb-3`}>
                          {event.title}
                        </h3>

                        <p className={`text-primary-700 mb-4 line-clamp-3 ${designTokens.typography.fontFamily.body.join(",")}`}>
                          {event.description}
                        </p>

                        <div className="space-y-2 mb-4">
                          {event.achievements.slice(0, 2).map((achievement, idx) => (
                            <div key={idx} className={`flex items-start gap-2 text-sm ${designTokens.typography.fontFamily.body.join(",")} text-primary-600`}>
                              <div className={`w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0`}></div>
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                          className={`w-full text-accent-600 hover:text-accent-800 hover:bg-accent-50/10 ${designTokens.typography.fontFamily.body.join(",")}`}
                        >
                          {selectedEvent === event.id ? 'Show Less' : 'Learn More'}
                        </Button>

                        {/* Expanded Details */}
                        {selectedEvent === event.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-primary-100"
                          >
                            <p className={`text-primary-700 text-sm ${designTokens.typography.fontFamily.body.join(",")} leading-relaxed`}>
                              {event.description}
                            </p>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-primary-600 text-sm">
                              {event.achievements.map((achievement, idx) => (
                                <li key={idx}>{achievement}</li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HorizontalTimeline;
