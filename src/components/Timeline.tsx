import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, FastForward } from 'lucide-react';
import MilestoneDetails from './MilestoneDetails';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

// We'll restructure the data to have each achievement as a separate entry
const timelineData = [{
  id: "1992-1",
  year: "1992",
  title: "Foundation Year",
  achievements: ["Founded Dubai Indian Islamic Centre"],
  details: "A pivotal year marking the beginning of Dr. Rahman's institutional contributions to the expatriate community in Dubai."
}, {
  id: "1992-2",
  year: "1992",
  title: "Community Services",
  achievements: ["Started free repatriation services"],
  details: "Initiated services to help expatriates in need."
}, {
  id: "1993-1",
  year: "1993",
  title: "Language Education Initiative",
  achievements: ["Launched Arabic-English language studies for the expatriate community in Dubai"],
  details: "Empowering the expatriate community through language education."
}, {
  id: "1994-1",
  year: "1994",
  title: "Hajj Services",
  achievements: ["Pioneered Haj services directly through the Saudi Consulate"],
  details: "Facilitating pilgrimage experiences for the community."
}, {
  id: "1994-2",
  year: "1994",
  title: "Educational Programs",
  achievements: ["Introduced computer and documentation training for the expatriate community"],
  details: "Enhancing technical skills among expatriates."
}, {
  id: "1994-3",
  year: "1994",
  title: "Media Coordinator",
  achievements: ["Appointed foreign media coordinator for the Dubai International Holy Quran Award"],
  details: "Bridging international media with Islamic events."
}, {
  id: "1994-4",
  year: "1994",
  title: "Healthcare Initiative",
  achievements: ["Initiated the first free medical camps in the UAE"],
  details: "Providing essential healthcare services to those in need."
}, {
  id: "1995-1",
  year: "1995",
  title: "Community Support",
  achievements: ["Established a specialized team for managing death cases"],
  details: "Supporting families during difficult times with compassion and care."
}, {
  id: "1995-2",
  year: "1995",
  title: "Leadership Role",
  achievements: ["Assumed presidency of the Islamic Development Centre at Ottapalam Kothakurssi"],
  details: "Expanding his influence in Islamic education and development."
}, {
  id: "1995-3",
  year: "1995",
  title: "First Publication",
  achievements: ["Published 'Is the Creation Meaningless?' in Malayalam, English, and Arabic"],
  details: "His first major literary contribution to philosophical discourse."
}, {
  id: "1995-4",
  year: "1995",
  title: "Quran Competitions",
  achievements: ["Coordinated Holy Quran recitation contests"],
  details: "Promoting Quranic education and excellence."
}, {
  id: "1996-1",
  year: "1996",
  title: "Career Transition",
  achievements: ["Resigned from the Central Military Command"],
  details: "Moving towards more community-focused roles."
}, {
  id: "1996-2",
  year: "1996",
  title: "Government Role",
  achievements: ["Joined Dubai Government Awqaf & Islamic Affairs Department as a Researcher Assistant"],
  details: "Beginning his contributions to governmental religious affairs."
}, {
  id: "1996-3",
  year: "1996",
  title: "Youth Education",
  achievements: ["Introduced educational, cultural, and sports competitions for school students in Dubai"],
  details: "Fostering holistic development among youth."
}, {
  id: "1996-4",
  year: "1996",
  title: "Repatriation Assistance",
  achievements: ["Participated in the repatriation of mortal remains of Indian nationals in the UAE"],
  details: "Providing essential support during difficult times."
}, {
  id: "1996-5",
  year: "1996",
  title: "Community Education",
  achievements: ["Educated the community through published articles"],
  details: "Sharing knowledge and insights through written media."
}, {
  id: "1998-1",
  year: "1998",
  title: "Media Committee",
  achievements: ["Appointed as a member of the Media Committee & Strategy Committee at Islamic Affairs"],
  details: "Shaping media strategies for Islamic affairs."
}, {
  id: "1998-2",
  year: "1998",
  title: "Religious Education",
  achievements: ["Joined the panel for the requalification of imams and Mudhins"],
  details: "Ensuring quality religious leadership."
}, {
  id: "1998-3",
  year: "1998",
  title: "Quran Competition",
  achievements: ["Organized the inaugural inter-Madrasa Quran competition in the UAE"],
  details: "Promoting Quranic education across educational institutions."
}, {
  id: "1999-1",
  year: "1999",
  title: "Inter-School Initiatives",
  achievements: ["Initiated the first inter-school Quran recitation and cultural contest between UAE schools"],
  details: "Bridging different educational institutions through Islamic competitions."
}, {
  id: "2000-1",
  year: "2000",
  title: "Diplomatic Education",
  achievements: ["Commenced Arabic language classes for Indian diplomats at the Consulate General of India, Dubai"],
  details: "Supporting diplomatic relations through language education."
}, {
  id: "2001-1",
  year: "2001-2003",
  title: "Media Breakthrough",
  achievements: ["Pioneered the first televised Islamic program on Asianet, promoting unity among diverse religious communities"],
  details: "Breaking new ground in religious media programming."
}, {
  id: "2004-1",
  year: "2004",
  title: "Humanitarian Recognition",
  achievements: ["Organized the largest humanitarian event under the Islamic Affairs DSF Pavilion, receiving special honours"],
  details: "Creating impactful humanitarian initiatives."
}, {
  id: "2005-1",
  year: "2005",
  title: "Career Change",
  achievements: ["Resigned from the Islamic Affairs Department"],
  details: "Transitioning to new professional endeavors."
}, {
  id: "2005-2",
  year: "2005",
  title: "Entrepreneurial Venture",
  achievements: ["Founded the Insight Group and assumed the role of Managing Director"],
  details: "Establishing his own organizational platform."
}, {
  id: "2006-1",
  year: "2006",
  title: "Media Influence",
  achievements: ["Became a recognized columnist, addressing significant global issues"],
  details: "Expanding his influence through thought leadership."
}, {
  id: "2013-1",
  year: "2013",
  title: "Educational Foundation",
  achievements: ["Founded Abdulla Educational Academy, Darul Quran"],
  details: "Creating new educational opportunities."
}, {
  id: "2017-1",
  year: "2017",
  title: "Cultural Academy",
  achievements: ["Established the ABR Academy for Education and Culture in Kerala"],
  details: "Broadening educational and cultural impact in his homeland."
}, {
  id: "2022-1",
  year: "2022",
  title: "Women's Education",
  achievements: ["Founded Shamsa Academy for Girls"],
  details: "Expanding educational opportunities for women."
}];
const Timeline = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fastScroll, setFastScroll] = useState(false);
  const timelineRef = useRef(null);
  const observerRef = useRef(null);
  const handleOpenMilestone = milestone => {
    setSelectedMilestone(milestone);
    setIsDialogOpen(true);
  };

  // Memoize the intersection observer callback
  const observerCallback = useCallback(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setVisibleItems(prev => {
          if (!prev.includes(entry.target.id)) {
            return [...prev, entry.target.id];
          }
          return prev;
        });
      }
    });
  }, []);

  // Initialize and cleanup intersection observer
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    // Create observer
    observerRef.current = new IntersectionObserver(observerCallback, options);

    // Observe all timeline items after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const timelineItems = document.querySelectorAll('.timeline-item');
      timelineItems.forEach(item => {
        observerRef.current.observe(item);
      });
      setIsLoaded(true);
    }, 100);
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearTimeout(timer);
    };
  }, [observerCallback]);

  // Handle fast scroll effect
  useEffect(() => {
    if (!timelineRef.current) return;
    const handleScroll = e => {
      if (fastScroll) {
        // Apply 2x scroll speed when fast scroll is enabled
        e.preventDefault();
        const scrollAmount = e.deltaY * 2;
        timelineRef.current.scrollTop += scrollAmount;
      }
    };
    const timelineElement = timelineRef.current;
    if (timelineElement) {
      timelineElement.addEventListener('wheel', handleScroll, {
        passive: false
      });
    }
    return () => {
      if (timelineElement) {
        timelineElement.removeEventListener('wheel', handleScroll);
      }
    };
  }, [fastScroll]);
  return <section id="timeline" className="bg-slate-100 mx-[2px] my-0 py-[8px] px-[13px]">
      <div className="container mx-auto px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold islamic-border mb-12 text-royal-800">Timeline of Impact</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Spanning three decades, Dr. Rahman's journey has been marked by significant milestones in education, 
            interfaith unity, humanitarian service, and community development.
          </p>
          
          
        </div>

        <ScrollArea className="relative h-[600px] max-w-5xl mx-auto pr-4" ref={timelineRef}>
          {!isLoaded ? <div className="space-y-10">
              {[1, 2, 3, 4].map(i => <div key={i} className="flex items-center gap-4">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <div className="space-y-2 w-full">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-12 w-full" />
                  </div>
                </div>)}
            </div> : <div className="relative">
              {timelineData.map((milestone, index) => <div key={milestone.id} id={milestone.id} style={{
            animationDelay: `${0.1 * Math.min(index, 3)}s`,
            transitionDuration: fastScroll ? '0.2s' : '0.5s'
          }} className="py-0 px-0 mx-0 my-0">
                  <div className="timeline-dot"></div>
                  <div className={`timeline-content ${index % 2 === 0 ? 'left text-md-right' : 'right'}`}>
                    <div className="shadow-lg p-6 border border-gray-100 hover:border-golden-300 transition-all duration-300 px-[20px] py-[5px] mx-0 bg-royal-900 rounded-3xl">
                      <h3 className="text-xl font-bold text-golden-50">{milestone.year}</h3>
                      <h4 className="text-lg font-semibold mb-3 text-golden-300">{milestone.title}</h4>
                      
                      {/* Show the achievement */}
                      <p className="mb-4 text-gray-50">{milestone.achievements[0]}</p>
                      
                      <Button variant="outline" size="sm" onClick={() => handleOpenMilestone(milestone)} className="border-golden-300 bg-royal-900 hover:bg-royal-800 rounded-full text-base font-light text-slate-50">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>)}
            </div>}
        </ScrollArea>
      </div>

      <MilestoneDetails milestone={selectedMilestone} isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </section>;
};
export default Timeline;