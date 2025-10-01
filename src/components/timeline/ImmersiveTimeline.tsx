
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Award, BookOpen, Users, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: 'education' | 'humanitarian' | 'recognition' | 'milestone';
  location?: string;
  impact?: string;
  image?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1970s",
    title: "Early Education",
    description: "Completed formative education in Palakkod, Kothakurushi, and Ananganadi",
    category: "education",
    location: "Kerala, India"
  },
  {
    year: "1980s",
    title: "Advanced Studies",
    description: "Pursued theological studies (Dars) at Palakkod East Masjid and Edakazhiyoor Juma Masjid under eminent scholars",
    category: "education",
    location: "Kerala, India"
  },
  {
    year: "1990s",
    title: "DQAA Academy Founded",
    description: "Established Darul Quran Abdulla Academy in Dubai",
    category: "milestone",
    location: "Dubai, UAE"
  },
  {
    year: "2002",
    title: "Community Website Launch",
    description: "Inaugurated Samavayam.com, a community website for Keralites",
    category: "milestone",
    location: "Dubai, UAE"
  },
  {
    year: "2009",
    title: "Welfare Initiatives",
    description: "As DIIC President, launched welfare schemes and medical camps for the Indian expatriate community",
    category: "humanitarian",
    location: "Dubai, UAE"
  },
  {
    year: "2010",
    title: "Recognition from Ajman",
    description: "Received Appreciation Award from H.E. Sheikh Dr. Majid Bin Saeed Al Nuaimi, Chairman of the Ruler's Court of Ajman",
    category: "recognition",
    location: "Ajman, UAE"
  },
  {
    year: "2014",
    title: "Educational Programs",
    description: "DIIC hosted 8th annual Inter-School Quran and Educational Competition",
    category: "education",
    location: "Dubai, UAE"
  },
  {
    year: "2022",
    title: "Loka Kerala Sabha",
    description: "Appointed as member of Loka Kerala Sabha, connecting the Keralite diaspora",
    category: "recognition",
    location: "Kerala, India"
  },
  {
    year: "Present",
    title: "Continued Service",
    description: "Ongoing work in education, community welfare, and interfaith dialogue",
    category: "milestone",
    location: "Dubai, UAE"
  }
];

const ImmersiveTimeline: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'education': return BookOpen;
      case 'humanitarian': return Users;
      case 'recognition': return Award;
      case 'milestone': return Calendar;
      default: return Calendar;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'education': return 'from-blue-500 to-blue-600';
      case 'humanitarian': return 'from-green-500 to-green-600';
      case 'recognition': return 'from-golden-500 to-golden-600';
      case 'milestone': return 'from-royal-500 to-royal-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const nextEvent = () => {
    setCurrentIndex((prev) => (prev + 1) % timelineEvents.length);
  };

  const prevEvent = () => {
    setCurrentIndex((prev) => (prev - 1 + timelineEvents.length) % timelineEvents.length);
  };

  return (
    <section className="py-32 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-golden-300 to-royal-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-royal-300 to-golden-300 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-playfair">
            Life & Service
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-golden-400 to-royal-400 mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Key milestones in a life dedicated to education, community service, and cultural engagement.
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Featured Event */}
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 mb-12 border border-white/20"
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(timelineEvents[currentIndex].category)} rounded-full flex items-center justify-center mr-4`}>
                    {React.createElement(getCategoryIcon(timelineEvents[currentIndex].category), {
                      size: 28,
                      className: "text-white"
                    })}
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-golden-300 font-playfair">
                      {timelineEvents[currentIndex].year}
                    </div>
                    {timelineEvents[currentIndex].location && (
                      <div className="flex items-center text-white/60 text-sm">
                        <MapPin size={14} className="mr-1" />
                        {timelineEvents[currentIndex].location}
                      </div>
                    )}
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4 font-playfair">
                  {timelineEvents[currentIndex].title}
                </h3>
                
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  {timelineEvents[currentIndex].description}
                </p>
                
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center border border-white/20">
                  <div className="text-6xl text-white/30">
                    {React.createElement(getCategoryIcon(timelineEvents[currentIndex].category), {
                      size: 120
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-12">
            <button
              onClick={prevEvent}
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white transition-all duration-300 border border-white/20"
            >
              <ChevronLeft size={20} />
              <span>Previous</span>
            </button>
            
            <div className="text-white/60 text-sm">
              {currentIndex + 1} of {timelineEvents.length}
            </div>
            
            <button
              onClick={nextEvent}
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white transition-all duration-300 border border-white/20"
            >
              <span>Next</span>
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Timeline Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {timelineEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-golden-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Mini Timeline */}
          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <div className="flex justify-between items-center overflow-x-auto space-x-4">
              {timelineEvents.map((event, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 text-center p-3 rounded-lg transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-golden-500/20 border border-golden-400/30'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <div className={`text-sm font-bold ${
                    index === currentIndex ? 'text-golden-300' : 'text-white/60'
                  }`}>
                    {event.year}
                  </div>
                  <div className={`text-xs ${
                    index === currentIndex ? 'text-white' : 'text-white/40'
                  }`}>
                    {event.title.split(' ').slice(0, 2).join(' ')}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveTimeline;
