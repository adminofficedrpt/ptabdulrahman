import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Building, Users, BookOpen } from 'lucide-react';
interface TimelineEvent {
  year: string;
  period?: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  achievements: string[];
  type: 'education' | 'career' | 'founding' | 'recognition' | 'publication';
}
const timelineEvents: TimelineEvent[] = [{
  year: "1970s-1980s",
  title: "Early Education & Islamic Studies",
  organization: "Various Institutions",
  location: "Kerala, India",
  description: "Foundational education in Palakkod, Kothakurushi, and Ananganadi, followed by advanced Islamic studies (Dars) at prestigious institutions.",
  achievements: ["Studies at Palakkod East Masjid under T.P. Muhammad Musliar", "Advanced Islamic jurisprudence at Edakazhiyoor Juma Masjid", "Mentorship under Kallur Abdullah Musliar"],
  type: "education"
}, {
  year: "1990",
  title: "M.A. in Sociology",
  organization: "University of Mysore",
  location: "Mysore, Karnataka, India",
  description: "Completed Master of Arts in Sociology, providing academic foundation for future educational and social work.",
  achievements: ["Graduate degree from prestigious Indian university", "Specialized in social dynamics and community development", "Academic preparation for institutional leadership"],
  type: "education"
}, {
  year: "1992",
  title: "Founder & President",
  organization: "Indian Islamic Center Dubai",
  location: "Dubai, UAE",
  description: "Established comprehensive community center providing cultural, educational, and welfare services to Indian expatriate community.",
  achievements: ["Founded first major Indian Islamic institution in Dubai", "Established sustainable community welfare programs", "Created model for expatriate community organization"],
  type: "founding"
}, {
  year: "1992-1996",
  title: "Administrator",
  organization: "Central Military Command",
  location: "United Arab Emirates",
  description: "Strategic administrative role in military command structure, developing organizational and leadership capabilities.",
  achievements: ["High-level administrative responsibility", "Cross-cultural military administration experience", "Leadership development in structured environment"],
  type: "career"
}, {
  year: "1995",
  title: "First Major Publication",
  organization: "Department of Islamic Affairs",
  location: "UAE",
  description: "Published 'Is the Creation Meaningless?' - a philosophical masterpiece in Malayalam, Arabic, and English.",
  achievements: ["Multi-language philosophical work", "Government department publication", "Foundation of literary career"],
  type: "publication"
}, {
  year: "1996-2005",
  title: "Researcher",
  organization: "Department of Islamic Affairs",
  location: "UAE",
  description: "Extensive research work in Islamic studies, cultural preservation, and community development methodologies.",
  achievements: ["Nine years of specialized research", "Government-level policy contribution", "Academic research in applied Islamic studies"],
  type: "career"
}, {
  year: "2001",
  title: "Television Innovation",
  organization: "Asianet",
  location: "India",
  description: "Created 'The Guidance - Dharma Reka,' first interfaith harmony program promoting understanding between Islam, Christianity, and Hinduism.",
  achievements: ["Pioneering interfaith television programming", "Model adopted by other Malayalam channels", "Media innovation in religious dialogue"],
  type: "recognition"
}, {
  year: "2013",
  title: "Founder & Director",
  organization: "Darul Quran Abdulla Educational Academy (DQAA)",
  location: "Kerala, India",
  description: "Revolutionary educational institution bridging traditional Quranic studies with modern academic excellence.",
  achievements: ["Students represent India at international competitions", "Dubai International Holy Quran Award participants", "Model educational institution inspiring nationwide adoption"],
  type: "founding"
}, {
  year: "2015",
  title: "Major Arabic Publication",
  organization: "Independent Publication",
  location: "UAE/India",
  description: "Published 'The Sun of Scholars' - comprehensive 404-page biographical work in Arabic.",
  achievements: ["Extensive Arabic literary contribution", "Scholarly recognition in Arabic-speaking world", "Major biographical and historical work"],
  type: "publication"
}, {
  year: "2017",
  title: "Founder President",
  organization: "ABR Academy for Education and Islamic Culture",
  location: "India",
  description: "Advanced educational institution focusing on values-based modern education and cultural preservation.",
  achievements: ["Expansion of educational innovation model", "Integration of cultural preservation with modern pedagogy", "Leadership in educational institutional development"],
  type: "founding"
}, {
  year: "2020s",
  title: "Golden Visa Recognition",
  organization: "Government of Dubai",
  location: "Dubai, UAE",
  description: "Awarded prestigious Golden Visa for significant social contributions to UAE community development.",
  achievements: ["Government recognition for social impact", "Formal acknowledgment of humanitarian contributions", "Distinguished status for community service"],
  type: "recognition"
}, {
  year: "Present",
  title: "Continuing Leadership",
  organization: "Multiple Institutions",
  location: "UAE & India",
  description: "Ongoing leadership in education, humanitarian work, and community development across international locations.",
  achievements: ["Active institutional leadership", "Continued educational innovation", "Ongoing humanitarian initiatives"],
  type: "career"
}];
const ProfessionalTimeline: React.FC = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'education':
        return BookOpen;
      case 'founding':
        return Building;
      case 'recognition':
        return Award;
      case 'publication':
        return BookOpen;
      default:
        return Users;
    }
  };
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'from-blue-500 to-blue-600';
      case 'founding':
        return 'from-royal-500 to-royal-600';
      case 'recognition':
        return 'from-golden-500 to-golden-600';
      case 'publication':
        return 'from-green-500 to-green-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };
  return <section className="py-16 bg-gradient-to-br from-royal-50 to-golden-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div className="text-center mb-16" initial={{
        y: 40,
        opacity: 0
      }} whileInView={{
        y: 0,
        opacity: 1
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }}>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-royal-900 mb-6">
            Professional Timeline
          </h2>
          <p className="text-xl text-royal-700 max-w-3xl mx-auto">
            Five decades of dedicated service, educational innovation, and humanitarian leadership 
            across UAE and India
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-royal-300 to-golden-300 h-full"></div>

          {/* Timeline Events */}
          {timelineEvents.map((event, index) => {
          const Icon = getTypeIcon(event.type);
          const isEven = index % 2 === 0;
          return <motion.div key={index} className={`relative flex items-center mb-16 ${isEven ? 'justify-start' : 'justify-end'}`} initial={{
            opacity: 0,
            x: isEven ? -50 : 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                {/* Timeline Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${getTypeColor(event.type)} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}>
                    <Icon size={24} className="text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${isEven ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-white shadow-lg border border-royal-100 hover:shadow-xl transition-all duration-300 mx-0 my-0 px-[26px] py-[24px] rounded-lg w-[160px] break-words">
                    {/* Year Badge */}
                    <div className="flex items-center mb-4">
                      <Calendar size={16} className="text-golden-600 mr-2" />
                      <span className="text-golden-600 font-semibold text-sm">{event.year}</span>
                    </div>

                    {/* Title and Organization */}
                    <h3 className="text-xl font-playfair font-semibold text-royal-900 mb-2">
                      {event.title}
                    </h3>
                    <h4 className="text-lg font-medium text-royal-700 mb-2">
                      {event.organization}
                    </h4>

                    {/* Location */}
                    <div className="flex items-center mb-4">
                      <MapPin size={14} className="text-royal-500 mr-2" />
                      <span className="text-royal-600 text-sm">{event.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-royal-700 mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h5 className="font-semibold text-royal-800 mb-2 text-sm">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {event.achievements.map((achievement, achievementIndex) => <li key={achievementIndex} className="text-royal-600 text-sm flex items-start">
                            <span className="text-golden-500 mr-2 mt-1">•</span>
                            {achievement}
                          </li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>;
        })}
        </div>

        {/* Summary Statistics */}
        <motion.div className="mt-20 text-center" initial={{
        y: 40,
        opacity: 0
      }} whileInView={{
        y: 0,
        opacity: 1
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }}>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-royal-600 mb-2">50+</div>
              <div className="text-royal-700 font-medium">Years of Experience</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-golden-600 mb-2">5</div>
              <div className="text-royal-700 font-medium">Major Institutions Founded</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-royal-700 font-medium">Books Published</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-royal-700 font-medium">Countries Served</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default ProfessionalTimeline;