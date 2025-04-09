
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Helmet } from "react-helmet-async";

export interface Milestone {
  id: string;
  year: string;
  title: string;
  achievements: string[];
  details?: string;
}

interface MilestoneDetailsProps {
  milestone: Milestone | null;
  isOpen: boolean;
  onClose: () => void;
}

const MilestoneDetails = ({ milestone, isOpen, onClose }: MilestoneDetailsProps) => {
  if (!milestone) return null;
  
  // Create an SEO-friendly URL slug
  const createSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
  };
  
  // Generate the milestone URL for structured data
  const milestoneUrl = `https://www.ptabdulrahman.com/timeline/${milestone.year}-${createSlug(milestone.title)}`;

  return (
    <>
      {milestone && (
        <Helmet>
          {/* Add structured data for the Event/milestone */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Event",
                "name": "${milestone.year}: ${milestone.title}",
                "description": "${milestone.details || milestone.achievements[0]}",
                "startDate": "${milestone.year}",
                "organizer": {
                  "@type": "Person",
                  "@id": "https://www.ptabdulrahman.com/#person"
                },
                "location": {
                  "@type": "Place",
                  "name": "UAE/Kerala"
                },
                "performer": {
                  "@type": "Person",
                  "@id": "https://www.ptabdulrahman.com/#person"
                },
                "about": {
                  "@type": "Thing",
                  "name": "${milestone.title}"
                },
                "url": "${milestoneUrl}"
              }
            `}
          </script>
        </Helmet>
      )}
      
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-royal-800" id={`milestone-${milestone.id}-title`}>
              {milestone.year}: {milestone.title}
            </DialogTitle>
            <DialogDescription className="text-gray-500">
              A significant milestone in Dr. P.T. Abdul Rahman's journey
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4">
            <div className="space-y-4">
              {milestone.details && (
                <p className="text-gray-700">{milestone.details}</p>
              )}
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {milestone.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <Button 
                variant="outline" 
                onClick={onClose}
                aria-label="Close milestone details"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MilestoneDetails;
