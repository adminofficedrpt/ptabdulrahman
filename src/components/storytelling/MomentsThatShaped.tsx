
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronLeft, ChevronRight, Heart, BookOpen, Users, Award } from 'lucide-react';

const MomentsThatShaped = () => {
  const [currentMoment, setCurrentMoment] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const moments = [
    {
      id: 1,
      title: "The Decision to Serve",
      year: "1992",
      location: "Dubai, UAE",
      icon: Heart,
      story: "Standing in the corridors of the Central Military Command, I witnessed firsthand the challenges faced by expatriate families. That moment sparked a lifelong commitment to community service.",
      quote: "I realized that true leadership means lifting others up, not just achieving personal success.",
      image: "/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg",
      audioNarration: "/audio/moment-1.mp3",
      impact: "Founded Indian Islamic Center Dubai"
    },
    {
      id: 2,
      title: "The Vision of DQAA",
      year: "2013",
      location: "Kerala, India",
      icon: BookOpen,
      story: "Watching young minds struggle to balance traditional values with modern education, I envisioned an academy that would honor our heritage while preparing students for global success.",
      quote: "Education should not force students to choose between their roots and their wings.",
      image: "/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png",
      audioNarration: "/audio/moment-2.mp3",
      impact: "DQAA Academy transforming 1000+ lives"
    },
    {
      id: 3,
      title: "Breaking Media Barriers",
      year: "2001",
      location: "Kerala, India",
      icon: Users,
      story: "Creating 'The Guidance - Dharma Reka' on Asianet was about more than television. It was about building bridges between communities that had lived in parallel worlds for too long.",
      quote: "When we truly listen to each other, we discover we share the same hopes and dreams.",
      image: "/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png",
      audioNarration: "/audio/moment-3.mp3",
      impact: "First interfaith dialogue program"
    },
    {
      id: 4,
      title: "International Recognition",
      year: "2024",
      location: "Dubai, UAE",
      icon: Award,
      story: "Receiving the Dubai Golden Visa wasn't just personal recognition—it validated decades of work building bridges between cultures and creating lasting positive change.",
      quote: "Recognition is not the goal; it's a responsibility to do even more for those who need it most.",
      image: "/lovable-uploads/66572de8-7486-4f48-ac7f-1219779e9bd6.jpg",
      audioNarration: "/audio/moment-4.mp3",
      impact: "30+ years of humanitarian service"
    }
  ];

  const handlePrevious = () => {
    setCurrentMoment((prev) => (prev === 0 ? moments.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentMoment((prev) => (prev === moments.length - 1 ? 0 : prev + 1));
  };

  const currentStory = moments[currentMoment];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-royal-50 to-golden-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-royal-900 mb-4">
            Moments That Shaped Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The defining moments that transformed a young idealist into a global humanitarian leader
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <motion.div
              key={currentMoment}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-royal-500 to-golden-500 rounded-full flex items-center justify-center">
                  <currentStory.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-royal-900">
                    {currentStory.title}
                  </h3>
                  <p className="text-golden-600 font-medium">{currentStory.year} • {currentStory.location}</p>
                </div>
              </div>

              <p className="text-lg text-royal-700 leading-relaxed">
                {currentStory.story}
              </p>

              <blockquote className="border-l-4 border-golden-500 pl-6 py-4 bg-white/60 rounded-r-lg">
                <p className="text-xl italic text-royal-800 mb-2">"{currentStory.quote}"</p>
                <cite className="text-golden-600 font-medium">Dr. P.T. Abdul Rahman</cite>
              </blockquote>

              <div className="bg-gradient-to-r from-royal-600 to-golden-600 text-white px-6 py-4 rounded-lg">
                <p className="font-semibold mb-1">Impact:</p>
                <p>{currentStory.impact}</p>
              </div>

              {/* Audio Player */}
              <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-royal-600 text-white rounded-full flex items-center justify-center hover:bg-royal-700 transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
                </button>
                <div className="flex-1">
                  <p className="text-sm font-medium text-royal-800">Listen to Dr. Rahman's personal reflection</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-golden-500 h-2 rounded-full w-1/3"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visual Content */}
            <motion.div
              key={`image-${currentMoment}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={currentStory.image}
                  alt={currentStory.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold">{currentStory.year}</p>
                  <p className="text-sm opacity-90">{currentStory.location}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-12 space-x-6">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-royal-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-royal-600" />
            </button>

            <div className="flex space-x-2">
              {moments.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMoment(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentMoment ? 'bg-royal-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-royal-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-royal-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentsThatShaped;
