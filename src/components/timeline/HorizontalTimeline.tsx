
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollNavigation } from '@/hooks/useScrollNavigation';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  location: string;
  category: 'education' | 'publication' | 'foundation' | 'recognition' | 'humanitarian';
  description: string;
  details: string;
  image?: string;
  achievements: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    id: '1992',
    year: '1992',
    title: 'Foundation & Migration',
    location: 'Dubai, UAE',
    category: 'foundation',
    description: 'Founded Dubai Indian Islamic Centre and began serving the expatriate community',
    details: 'A pivotal year marking the beginning of Dr. Rahman\'s institutional contributions to the expatriate community in Dubai, establishing the foundation for decades of community service.',
    achievements: ['Founded Dubai Indian Islamic Centre', 'Started free repatriation services'],
    image: '/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png'
  },
  {
    id: '1995',
    year: '1995',
    title: 'Literary Breakthrough',
    location: 'UAE',
    category: 'publication',
    description: 'Published flagship work "Is the Creation Meaningless?" in multiple languages',
    details: 'This groundbreaking philosophical work established Dr. Rahman as a serious Islamic thinker and was later translated into multiple languages, influencing theological discourse globally.',
    achievements: ['Published first major work', 'Established presidency of Islamic Development Centre', 'Coordinated Quran competitions'],
    image: '/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png'
  },
  {
    id: '2000',
    year: '2000-2005',
    title: 'Media & Education Pioneer',
    location: 'UAE & India',
    category: 'education',
    description: 'Pioneered Islamic programming on television and expanded educational initiatives',
    details: 'Revolutionary period where Dr. Rahman broke new ground in religious media programming while simultaneously expanding educational opportunities for diplomats and students.',
    achievements: ['First televised Islamic program on Asianet', 'Arabic classes for Indian diplomats', 'Largest humanitarian DSF event'],
    image: '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg'
  },
  {
    id: '2013',
    year: '2013',
    title: 'Educational Innovation',
    location: 'Kerala, India',
    category: 'education',
    description: 'Founded Darul Quran Abdulla Academy with revolutionary education model',
    details: 'Established a unique educational institution that successfully integrates traditional Islamic education with modern academics, producing students who excel in both domains.',
    achievements: ['Founded DQAA', 'Innovative curriculum development', 'Hafiz + Academic excellence model'],
    image: '/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png'
  },
  {
    id: '2017',
    year: '2017-Present',
    title: 'Global Recognition',
    location: 'International',
    category: 'recognition',
    description: 'Received numerous international awards and expanded global influence',
    details: 'Period of international recognition for contributions to education, interfaith dialogue, and humanitarian work, cementing Dr. Rahman\'s legacy as a global Islamic thought leader.',
    achievements: ['Multiple international awards', 'Global speaking engagements', 'Continued literary contributions'],
    image: '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png'
  }
];

const categoryColors = {
  education: 'bg-blue-100 text-blue-800',
  publication: 'bg-purple-100 text-purple-800',
  foundation: 'bg-green-100 text-green-800',
  recognition: 'bg-golden-100 text-golden-800',
  humanitarian: 'bg-red-100 text-red-800'
};

const categoryIcons = {
  education: Award,
  publication: Calendar,
  foundation: MapPin,
  recognition: Award,
  humanitarian: Award
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
      const eventWidth = 400; // Card width + gap
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
        const eventWidth = 400;
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
      className="py-20 bg-gradient-to-br from-slate-50 to-royal-50 overflow-hidden"
      style={{ opacity, scale }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-royal-800 mb-6 font-playfair">
            Journey Through Time
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-golden-400 to-royal-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore the milestone moments that shaped Dr. Rahman's transformative journey
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="rounded-full"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex gap-2">
            {timelineEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToEvent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-royal-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleNext}
            disabled={currentIndex === timelineEvents.length - 1}
            className="rounded-full"
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
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-2xl group cursor-pointer border-0 shadow-lg">
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
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute top-4 left-4">
                            <Badge className={categoryColors[event.category]}>
                              <IconComponent className="w-3 h-3 mr-1" />
                              {event.category}
                            </Badge>
                          </div>
                          <div className="absolute bottom-4 left-4">
                            <div className="text-white font-bold text-2xl">{event.year}</div>
                          </div>
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>

                        <h3 className="text-xl font-bold text-royal-800 mb-3 font-playfair">
                          {event.title}
                        </h3>

                        <p className="text-gray-700 mb-4 line-clamp-3">
                          {event.description}
                        </p>

                        <div className="space-y-2 mb-4">
                          {event.achievements.slice(0, 2).map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-golden-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                          className="w-full text-royal-600 hover:text-royal-800 hover:bg-royal-50"
                        >
                          {selectedEvent === event.id ? 'Show Less' : 'Learn More'}
                        </Button>

                        {/* Expanded Details */}
                        {selectedEvent === event.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 pt-4 border-t border-gray-200"
                          >
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                              {event.details}
                            </p>
                            <div className="space-y-2">
                              {event.achievements.slice(2).map((achievement, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                  <div className="w-1.5 h-1.5 bg-golden-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{achievement}</span>
                                </div>
                              ))}
                            </div>
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

        {/* Progress Indicator */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-golden-500 to-royal-500"
              style={{
                width: `${((currentIndex + 1) / timelineEvents.length) * 100}%`
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>1992</span>
            <span>Present</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HorizontalTimeline;
