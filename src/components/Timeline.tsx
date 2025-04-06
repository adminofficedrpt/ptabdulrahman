
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import MilestoneDetails from './MilestoneDetails';
import { Button } from '@/components/ui/button';

// We'll restructure the data to have each achievement as a separate entry
const timelineData = [
  {
    id: "1992-1",
    year: "1992",
    title: "Foundation Year",
    achievements: ["Founded Dubai Indian Islamic Centre"],
    details: "A pivotal year marking the beginning of Dr. Rahman's institutional contributions to the expatriate community in Dubai."
  },
  {
    id: "1992-2",
    year: "1992",
    title: "Community Services",
    achievements: ["Started free repatriation services"],
    details: "Initiated services to help expatriates in need."
  },
  {
    id: "1993-1",
    year: "1993",
    title: "Language Education Initiative",
    achievements: ["Launched Arabic-English language studies for the expatriate community in Dubai"],
    details: "Empowering the expatriate community through language education."
  },
  {
    id: "1994-1",
    year: "1994",
    title: "Hajj Services",
    achievements: ["Pioneered Haj services directly through the Saudi Consulate"],
    details: "Facilitating pilgrimage experiences for the community."
  },
  {
    id: "1994-2",
    year: "1994",
    title: "Educational Programs",
    achievements: ["Introduced computer and documentation training for the expatriate community"],
    details: "Enhancing technical skills among expatriates."
  },
  {
    id: "1994-3",
    year: "1994",
    title: "Media Coordinator",
    achievements: ["Appointed foreign media coordinator for the Dubai International Holy Quran Award"],
    details: "Bridging international media with Islamic events."
  },
  {
    id: "1994-4",
    year: "1994",
    title: "Healthcare Initiative",
    achievements: ["Initiated the first free medical camps in the UAE"],
    details: "Providing essential healthcare services to those in need."
  },
  {
    id: "1995-1",
    year: "1995",
    title: "Community Support",
    achievements: ["Established a specialized team for managing death cases"],
    details: "Supporting families during difficult times with compassion and care."
  },
  {
    id: "1995-2",
    year: "1995",
    title: "Leadership Role",
    achievements: ["Assumed presidency of the Islamic Development Centre at Ottapalam Kothakurssi"],
    details: "Expanding his influence in Islamic education and development."
  },
  {
    id: "1995-3",
    year: "1995",
    title: "First Publication",
    achievements: ["Published 'Is the Creation Meaningless?' in Malayalam, English, and Arabic"],
    details: "His first major literary contribution to philosophical discourse."
  },
  {
    id: "1995-4",
    year: "1995",
    title: "Quran Competitions",
    achievements: ["Coordinated Holy Quran recitation contests"],
    details: "Promoting Quranic education and excellence."
  },
  {
    id: "1996-1",
    year: "1996",
    title: "Career Transition",
    achievements: ["Resigned from the Central Military Command"],
    details: "Moving towards more community-focused roles."
  },
  {
    id: "1996-2",
    year: "1996",
    title: "Government Role",
    achievements: ["Joined Dubai Government Awqaf & Islamic Affairs Department as a Researcher Assistant"],
    details: "Beginning his contributions to governmental religious affairs."
  },
  {
    id: "1996-3",
    year: "1996",
    title: "Youth Education",
    achievements: ["Introduced educational, cultural, and sports competitions for school students in Dubai"],
    details: "Fostering holistic development among youth."
  },
  {
    id: "1996-4",
    year: "1996",
    title: "Repatriation Assistance",
    achievements: ["Participated in the repatriation of mortal remains of Indian nationals in the UAE"],
    details: "Providing essential support during difficult times."
  },
  {
    id: "1996-5",
    year: "1996",
    title: "Community Education",
    achievements: ["Educated the community through published articles"],
    details: "Sharing knowledge and insights through written media."
  },
  {
    id: "1998-1",
    year: "1998",
    title: "Media Committee",
    achievements: ["Appointed as a member of the Media Committee & Strategy Committee at Islamic Affairs"],
    details: "Shaping media strategies for Islamic affairs."
  },
  {
    id: "1998-2",
    year: "1998",
    title: "Religious Education",
    achievements: ["Joined the panel for the requalification of imams and Mudhins"],
    details: "Ensuring quality religious leadership."
  },
  {
    id: "1998-3",
    year: "1998",
    title: "Quran Competition",
    achievements: ["Organized the inaugural inter-Madrasa Quran competition in the UAE"],
    details: "Promoting Quranic education across educational institutions."
  },
  {
    id: "1999-1",
    year: "1999",
    title: "Inter-School Initiatives",
    achievements: ["Initiated the first inter-school Quran recitation and cultural contest between UAE schools"],
    details: "Bridging different educational institutions through Islamic competitions."
  },
  {
    id: "2000-1",
    year: "2000",
    title: "Diplomatic Education",
    achievements: ["Commenced Arabic language classes for Indian diplomats at the Consulate General of India, Dubai"],
    details: "Supporting diplomatic relations through language education."
  },
  {
    id: "2001-1",
    year: "2001-2003",
    title: "Media Breakthrough",
    achievements: ["Pioneered the first televised Islamic program on Asianet, promoting unity among diverse religious communities"],
    details: "Breaking new ground in religious media programming."
  },
  {
    id: "2004-1",
    year: "2004",
    title: "Humanitarian Recognition",
    achievements: ["Organized the largest humanitarian event under the Islamic Affairs DSF Pavilion, receiving special honours"],
    details: "Creating impactful humanitarian initiatives."
  },
  {
    id: "2005-1",
    year: "2005",
    title: "Career Change",
    achievements: ["Resigned from the Islamic Affairs Department"],
    details: "Transitioning to new professional endeavors."
  },
  {
    id: "2005-2",
    year: "2005",
    title: "Entrepreneurial Venture",
    achievements: ["Founded the Insight Group and assumed the role of Managing Director"],
    details: "Establishing his own organizational platform."
  },
  {
    id: "2006-1",
    year: "2006",
    title: "Media Influence",
    achievements: ["Became a recognized columnist, addressing significant global issues"],
    details: "Expanding his influence through thought leadership."
  },
  {
    id: "2013-1",
    year: "2013",
    title: "Educational Foundation",
    achievements: ["Founded Abdulla Educational Academy, Darul Quran"],
    details: "Creating new educational opportunities."
  },
  {
    id: "2017-1",
    year: "2017",
    title: "Cultural Academy",
    achievements: ["Established the ABR Academy for Education and Culture in Kerala"],
    details: "Broadening educational and cultural impact in his homeland."
  },
  {
    id: "2022-1",
    year: "2022",
    title: "Women's Education",
    achievements: ["Founded Shamsa Academy for Girls"],
    details: "Expanding educational opportunities for women."
  }
];

const Timeline = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRef = useRef(null);

  const handleOpenMilestone = (milestone) => {
    setSelectedMilestone(milestone);
    setIsDialogOpen(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, entry.target.id]);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="timeline" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold islamic-border mb-12 text-royal-800">Timeline of Impact</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Spanning three decades, Dr. Rahman's journey has been marked by significant milestones in education, 
            interfaith unity, humanitarian service, and community development.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto" ref={timelineRef}>
          {timelineData.map((milestone, index) => (
            <div 
              key={milestone.id}
              id={milestone.id}
              className={`timeline-item relative mb-12 md:mb-20 ${visibleItems.includes(milestone.id) ? 'animate-fade-in opacity-0' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="timeline-dot"></div>
              <div className={`timeline-content ${index % 2 === 0 ? 'left text-md-right' : 'right'}`}>
                <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:border-golden-300 transition-all duration-300">
                  <h3 className="text-xl font-bold text-golden-800">{milestone.year}</h3>
                  <h4 className="text-lg font-semibold mb-3 text-royal-700">{milestone.title}</h4>
                  
                  {/* Show the achievement */}
                  <p className="text-gray-700 mb-4">{milestone.achievements[0]}</p>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-golden-700 border-golden-300 hover:bg-golden-50"
                    onClick={() => handleOpenMilestone(milestone)}
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MilestoneDetails 
        milestone={selectedMilestone}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </section>
  );
};

export default Timeline;
