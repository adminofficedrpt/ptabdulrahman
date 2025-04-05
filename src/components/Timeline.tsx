
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import MilestoneDetails, { Milestone } from './MilestoneDetails';
import { Button } from '@/components/ui/button';

const timelineData: Milestone[] = [
  {
    id: "1992",
    year: "1992",
    title: "Foundation Year",
    achievements: [
      "Founded Dubai Indian Islamic Centre",
      "Started free repatriation services"
    ],
    details: "A pivotal year marking the beginning of Dr. Rahman's institutional contributions to the expatriate community in Dubai."
  },
  {
    id: "1993",
    year: "1993",
    title: "Language Education Initiative",
    achievements: [
      "Launched Arabic-English language studies for the expatriate community in Dubai"
    ]
  },
  {
    id: "1994",
    year: "1994",
    title: "Expanded Community Services",
    achievements: [
      "Pioneered Haj services directly through the Saudi Consulate",
      "Introduced computer and documentation training for the expatriate community",
      "Appointed foreign media coordinator for the Dubai International Holy Quran Award",
      "Initiated the first free medical camps in the UAE"
    ]
  },
  {
    id: "1995",
    year: "1995",
    title: "New Leadership Roles",
    achievements: [
      "Established a specialized team for managing death cases",
      "Assumed presidency of the Islamic Development Centre at Ottapalam Kothakurssi",
      "Published 'Is the Creation Meaningless?' in Malayalam, English, and Arabic",
      "Coordinated Holy Quran recitation contests"
    ]
  },
  {
    id: "1996",
    year: "1996",
    title: "Career Transition",
    achievements: [
      "Resigned from the Central Military Command",
      "Joined Dubai Government Awqaf & Islamic Affairs Department as a Researcher Assistant",
      "Introduced educational, cultural, and sports competitions for school students in Dubai",
      "Participated in the repatriation of mortal remains of Indian nationals in the UAE",
      "Educated the community through published articles"
    ]
  },
  {
    id: "1998",
    year: "1998",
    title: "Media and Educational Contributions",
    achievements: [
      "Appointed as a member of the Media Committee & Strategy Committee at Islamic Affairs",
      "Joined the panel for the requalification of imams and Mudhins",
      "Organized the inaugural inter-Madrasa Quran competition in the UAE"
    ]
  },
  {
    id: "1999",
    year: "1999",
    title: "Inter-School Initiatives",
    achievements: [
      "Initiated the first inter-school Quran recitation and cultural contest between UAE schools"
    ]
  },
  {
    id: "2000",
    year: "2000",
    title: "Diplomatic Education",
    achievements: [
      "Commenced Arabic language classes for Indian diplomats at the Consulate General of India, Dubai"
    ]
  },
  {
    id: "2001",
    year: "2001-2003",
    title: "Media Breakthrough",
    achievements: [
      "Pioneered the first televised Islamic program on Asianet, promoting unity among diverse religious communities"
    ]
  },
  {
    id: "2004",
    year: "2004",
    title: "Humanitarian Recognition",
    achievements: [
      "Organized the largest humanitarian event under the Islamic Affairs DSF Pavilion, receiving special honours"
    ]
  },
  {
    id: "2005",
    year: "2005",
    title: "Entrepreneurial Venture",
    achievements: [
      "Resigned from the Islamic Affairs Department",
      "Founded the Insight Group and assumed the role of Managing Director"
    ]
  },
  {
    id: "2006",
    year: "2006",
    title: "Media Influence",
    achievements: [
      "Became a recognized columnist, addressing significant global issues"
    ]
  },
  {
    id: "2013",
    year: "2013",
    title: "Educational Foundation",
    achievements: [
      "Founded Abdulla Educational Academy, Darul Quran"
    ]
  },
  {
    id: "2017",
    year: "2017",
    title: "Cultural Academy",
    achievements: [
      "Established the ABR Academy for Education and Culture in Kerala"
    ]
  },
  {
    id: "2022",
    year: "2022",
    title: "Women's Education",
    achievements: [
      "Founded Shamsa Academy for Girls"
    ]
  }
];

const Timeline = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const handleOpenMilestone = (milestone: Milestone) => {
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
                  
                  {/* Show only the first achievement in the preview */}
                  <p className="text-gray-700 mb-4">{milestone.achievements[0]}</p>
                  
                  {milestone.achievements.length > 1 && (
                    <p className="text-gray-500 text-sm mb-4">+ {milestone.achievements.length - 1} more accomplishments</p>
                  )}
                  
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
