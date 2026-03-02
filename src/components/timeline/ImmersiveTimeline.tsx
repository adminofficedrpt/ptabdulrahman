
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, BookOpen, Users, MapPin } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: 'education' | 'humanitarian' | 'recognition' | 'milestone';
  location?: string;
}

const timelineEvents: TimelineEvent[] = [
  { year: "1970s", title: "Early Education", description: "Completed formative education in Palakkod, Kothakurushi, and Ananganadi", category: "education", location: "Kerala, India" },
  { year: "1980s", title: "Advanced Studies", description: "Pursued theological studies (Dars) at Palakkod East Masjid and Edakazhiyoor Juma Masjid under eminent scholars", category: "education", location: "Kerala, India" },
  { year: "1990s", title: "DQAA Academy Founded", description: "Established Darul Quran Abdulla Academy in Dubai", category: "milestone", location: "Dubai, UAE" },
  { year: "2002", title: "Community Website Launch", description: "Inaugurated Samavayam.com, a community website for Keralites", category: "milestone", location: "Dubai, UAE" },
  { year: "2009", title: "Welfare Initiatives", description: "As DIIC President, launched welfare schemes and medical camps for the Indian expatriate community", category: "humanitarian", location: "Dubai, UAE" },
  { year: "2010", title: "Recognition from Ajman", description: "Received Appreciation Award from H.E. Sheikh Dr. Majid Bin Saeed Al Nuaimi, Chairman of the Ruler's Court of Ajman", category: "recognition", location: "Ajman, UAE" },
  { year: "2014", title: "Educational Programs", description: "DIIC hosted 8th annual Inter-School Quran and Educational Competition", category: "education", location: "Dubai, UAE" },
  { year: "2022", title: "Loka Kerala Sabha", description: "Appointed as member of Loka Kerala Sabha, connecting the Keralite diaspora", category: "recognition", location: "Kerala, India" },
  { year: "Present", title: "Continued Service", description: "Ongoing work in education, community welfare, and interfaith dialogue", category: "milestone", location: "Dubai, UAE" },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'education': return 'bg-royal-500';
    case 'humanitarian': return 'bg-emerald-500';
    case 'recognition': return 'bg-golden-500';
    case 'milestone': return 'bg-royal-700';
    default: return 'bg-royal-400';
  }
};

const ImmersiveTimeline: React.FC = () => {
  return (
    <section id="milestones" className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-700 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
            Milestones
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-golden-300 to-transparent mx-auto mb-6" />
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Key moments in a life dedicated to education, community service, and cultural engagement.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/20 md:-translate-x-px" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`relative flex items-start mb-10 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="text-xl font-bold text-golden-300 font-playfair">{event.year}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-2">{event.description}</p>
                  {event.location && (
                    <div className={`flex items-center gap-1 text-white/50 text-xs ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <MapPin size={12} />
                      <span>{event.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white/30 mt-7" >
                <div className={`w-full h-full rounded-full ${getCategoryColor(event.category)}`} />
              </div>

              {/* Spacer for opposite side on desktop */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImmersiveTimeline;
