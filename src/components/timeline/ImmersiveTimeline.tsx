import React from 'react';
import { motion } from 'framer-motion';
import ProgressiveImage from '@/components/ui/progressive-image';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  location?: string;
  image?: string;
}

const timelineEvents: TimelineEvent[] = [
  { year: "1970s", title: "Early Education", description: "Completed formative education in Palakkod, Kothakurushi, and Ananganadi.", location: "Kerala, India" },
  { year: "1980s", title: "Advanced Studies", description: "Pursued theological studies at Palakkod East Masjid and Edakazhiyoor Juma Masjid under eminent scholars.", location: "Kerala, India" },
  { year: "1990s", title: "DQAA Academy Founded", description: "Established Darul Quran Abdulla Academy in Dubai.", location: "Dubai, UAE", image: "/lovable-uploads/a1f6c6c2-af1d-4406-94f9-3153d678f134.png" },
  { year: "2002", title: "Community Website Launch", description: "Inaugurated Samavayam.com, a community website for Keralites.", location: "Dubai, UAE" },
  { year: "2009", title: "Welfare Initiatives", description: "As DIIC President, launched welfare schemes and medical camps for the Indian expatriate community.", location: "Dubai, UAE", image: "/lovable-uploads/bdaaf13f-2912-4e1d-b6d7-eb5852916364.png" },
  { year: "2010", title: "Recognition from Ajman", description: "Received Appreciation Award from H.E. Sheikh Dr. Majid Bin Saeed Al Nuaimi.", location: "Ajman, UAE" },
  { year: "2014", title: "Educational Programs", description: "DIIC hosted 8th annual Inter-School Quran and Educational Competition.", location: "Dubai, UAE", image: "/lovable-uploads/76eef9a7-0487-4c6f-b458-32397f9edbd6.png" },
  { year: "2022", title: "Loka Kerala Sabha", description: "Appointed as member of Loka Kerala Sabha, connecting the Keralite diaspora.", location: "Kerala, India" },
  { year: "Present", title: "Continued Service", description: "Ongoing work in education, community welfare, and interfaith dialogue.", location: "Dubai, UAE" },
];

const ImmersiveTimeline: React.FC = () => {
  return (
    <section id="milestones" className="py-20 md:py-28 lg:py-32 bg-background relative overflow-hidden">
      {/* Floating keyword */}
      <div className="absolute top-12 right-8 md:right-16 pointer-events-none select-none">
        <span className="font-playfair text-[6rem] md:text-[10rem] font-bold text-foreground/[0.04] leading-none">
          journey
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-fluid-4xl md:text-fluid-5xl font-bold text-foreground mb-4">
            Milestones
          </h2>
          <p className="text-muted-foreground text-fluid-base max-w-2xl">
            Key moments in a life dedicated to education, community service, and cultural engagement.
          </p>
          <div className="mt-6 w-16 h-px bg-golden-500" />
        </motion.div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className="relative flex items-start mb-16 last:mb-0 pl-12 md:pl-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.06 * index }}
              viewport={{ once: true }}
            >
              {/* Year dot */}
              <div className="absolute left-4 md:left-8 -translate-x-1/2 top-1">
                <div className="w-3 h-3 rounded-full bg-golden-500 ring-4 ring-background" />
              </div>

              <div className="flex-1">
                <span className="text-xs tracking-[0.2em] uppercase text-golden-600 font-medium">
                  {event.year}
                </span>
                <h3 className="font-playfair text-fluid-xl font-semibold text-foreground mt-1 mb-2">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-1">
                  {event.description}
                </p>
                {event.location && (
                  <span className="text-xs text-muted-foreground/60">
                    {event.location}
                  </span>
                )}
                {/* Inline image for select events */}
                {event.image && (
                  <div className="mt-4 aspect-[16/9] max-w-md overflow-hidden">
                    <ProgressiveImage
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImmersiveTimeline;
