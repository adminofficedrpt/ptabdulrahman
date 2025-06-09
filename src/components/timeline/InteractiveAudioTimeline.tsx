
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Calendar, MapPin, Users, BookOpen, Award, Building } from 'lucide-react';

const InteractiveAudioTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const audioRef = useRef(null);

  const timelineEvents = [
    {
      id: 1,
      year: '1992',
      title: 'Journey to Dubai Begins',
      location: 'Dubai, UAE',
      icon: MapPin,
      category: 'Career',
      shortDesc: 'Joined Central Military Command UAE',
      fullStory: 'My journey in Dubai began when I joined the Central Military Command UAE. This experience opened my eyes to the diverse challenges faced by expatriate communities and sparked my lifelong commitment to humanitarian service.',
      audioNarration: '/audio/timeline-1992.mp3',
      image: '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg',
      impact: 'Foundation of international service career',
      keyAchievements: ['Established first community connections', 'Identified community needs', 'Developed leadership skills']
    },
    {
      id: 2,
      year: '1995',
      title: 'First Published Work',
      location: 'Dubai, UAE',
      icon: BookOpen,
      category: 'Literature',
      shortDesc: '"Is the Creation Meaningless?" published',
      fullStory: 'Publishing my first book "Is the Creation Meaningless?" in Malayalam, Arabic, and English marked the beginning of my literary journey. This philosophical work explored fundamental questions about existence and purpose from an Islamic perspective.',
      audioNarration: '/audio/timeline-1995.mp3',
      image: '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png',
      impact: 'Established voice in Islamic philosophy',
      keyAchievements: ['Multi-language publication', 'International recognition', 'Scholarly acclaim']
    },
    {
      id: 3,
      year: '2001',
      title: 'Television Pioneer',
      location: 'Kerala, India',
      icon: Users,
      category: 'Media',
      shortDesc: 'Created "The Guidance - Dharma Reka"',
      fullStory: 'Creating "The Guidance - Dharma Reka" on Asianet was revolutionary. This was the first program of its kind promoting interfaith dialogue between Islam, Christianity, and Hinduism, inspiring other channels to adopt similar formats.',
      audioNarration: '/audio/timeline-2001.mp3',
      image: '/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png',
      impact: 'Pioneered interfaith media dialogue',
      keyAchievements: ['First interfaith TV program', 'Cultural bridge-building', 'Media innovation']
    },
    {
      id: 4,
      year: '2013',
      title: 'DQAA Academy Founded',
      location: 'Kerala, India',
      icon: Building,
      category: 'Education',
      shortDesc: 'Established Darul Quran Abdulla Academy',
      fullStory: 'Founding DQAA was the culmination of decades of educational vision. This academy bridges traditional Quranic education with modern pedagogical excellence, creating graduates who excel academically while maintaining strong spiritual foundations.',
      audioNarration: '/audio/timeline-2013.mp3',
      image: '/lovable-uploads/66572de8-7486-4f48-ac7f-1219779e9bd6.jpg',
      impact: 'Transformed Islamic education paradigm',
      keyAchievements: ['1000+ students impacted', 'International recognition', 'Educational innovation']
    },
    {
      id: 5,
      year: '2024',
      title: 'Golden Visa Recognition',
      location: 'Dubai, UAE',
      icon: Award,
      category: 'Recognition',
      shortDesc: 'Received Dubai Golden Visa',
      fullStory: 'Receiving the Dubai Golden Visa represented official recognition of three decades of humanitarian service and community building. This honor acknowledges contributions to UAE\'s multicultural society and educational landscape.',
      audioNarration: '/audio/timeline-2024.mp3',
      image: '/lovable-uploads/45713be7-cf84-488a-bddd-5efbe361b577.png',
      impact: 'Official recognition of lifetime service',
      keyAchievements: ['Government recognition', 'Community impact validation', 'Continuing legacy']
    }
  ];

  const currentEvent = timelineEvents[selectedEvent];

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateProgress = () => {
        if (audio.duration) {
          setAudioProgress((audio.currentTime / audio.duration) * 100);
        }
      };
      audio.addEventListener('timeupdate', updateProgress);
      return () => audio.removeEventListener('timeupdate', updateProgress);
    }
  }, [selectedEvent]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const categoryColors = {
    Career: 'from-blue-500 to-blue-600',
    Literature: 'from-purple-500 to-purple-600',
    Media: 'from-green-500 to-green-600',
    Education: 'from-royal-500 to-royal-600',
    Recognition: 'from-golden-500 to-golden-600'
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-royal-900 to-royal-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            A Life in Service: Interactive Timeline
          </h2>
          <p className="text-xl text-royal-200 max-w-3xl mx-auto">
            Journey through the pivotal moments that shaped a lifetime of dedication to education, 
            community service, and interfaith harmony. Listen to personal reflections on each milestone.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline Navigation */}
          <div className="relative mb-16">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-white/20 transform -translate-y-1/2"></div>
            <div className="flex justify-between items-center relative">
              {timelineEvents.map((event, index) => (
                <button
                  key={event.id}
                  onClick={() => setSelectedEvent(index)}
                  className={`group relative flex flex-col items-center ${
                    selectedEvent === index ? 'z-10' : 'z-0'
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      selectedEvent === index
                        ? `bg-gradient-to-br ${categoryColors[event.category]} shadow-lg scale-110`
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                  >
                    <event.icon className="w-8 h-8" />
                  </div>
                  <div className="mt-4 text-center">
                    <p className={`font-bold ${selectedEvent === index ? 'text-golden-300' : 'text-white/70'}`}>
                      {event.year}
                    </p>
                    <p className={`text-sm ${selectedEvent === index ? 'text-white' : 'text-white/50'}`}>
                      {event.shortDesc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Event Details */}
          <motion.div
            key={selectedEvent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <div className="space-y-6">
              <div>
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${categoryColors[currentEvent.category]} text-white mb-4`}>
                  {currentEvent.category}
                </span>
                <h3 className="text-3xl font-playfair font-bold mb-2">{currentEvent.title}</h3>
                <div className="flex items-center text-golden-300 mb-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="mr-4">{currentEvent.year}</span>
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{currentEvent.location}</span>
                </div>
              </div>

              <p className="text-lg text-royal-100 leading-relaxed">
                {currentEvent.fullStory}
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-semibold text-golden-300 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {currentEvent.keyAchievements.map((achievement, index) => (
                    <li key={index} className="flex items-center text-white/90">
                      <span className="w-2 h-2 bg-golden-400 rounded-full mr-3"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-golden-600 to-golden-700 rounded-lg p-4">
                <p className="font-semibold mb-1">Impact:</p>
                <p className="text-golden-100">{currentEvent.impact}</p>
              </div>

              {/* Audio Player */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Volume2 className="w-5 h-5 text-golden-300" />
                    <span className="font-medium">Personal Reflection</span>
                  </div>
                  <span className="text-sm text-white/70">Dr. P.T. Abdul Rahman</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handlePlayPause}
                    className="w-12 h-12 bg-gradient-to-r from-golden-500 to-golden-600 rounded-full flex items-center justify-center hover:from-golden-600 hover:to-golden-700 transition-all duration-300"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
                  </button>
                  <div className="flex-1">
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-golden-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${audioProgress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <audio
                  ref={audioRef}
                  src={currentEvent.audioNarration}
                  onEnded={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-2xl font-bold">{currentEvent.year}</p>
                  <p className="text-golden-300">{currentEvent.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAudioTimeline;
