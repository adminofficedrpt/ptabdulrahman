
import React from 'react';
import SectionContainer from '@/components/design-system/SectionContainer';
import Timeline from '@/components/Timeline';
import Books from '@/components/Books';
import Humanitarian from '@/components/Humanitarian';
import Awards from '@/components/Awards';
import Legacy from '@/components/Legacy';
import DQAA from '@/components/DQAA';
import DQAAAdmission from '@/components/DQAAAdmission';
import DQAADonate from '@/components/DQAADonate';
import InteractiveBiography from '@/components/modern/InteractiveBiography';
import ImmersiveBookGallery from '@/components/modern/ImmersiveBookGallery';
import AwardsRecognitionWall from '@/components/modern/AwardsRecognitionWall';

interface ConditionalSectionsProps {
  activeSection: string | null;
}

const ConditionalSections: React.FC<ConditionalSectionsProps> = ({ activeSection }) => {
  switch(activeSection) {
    case 'timeline':
      return (
        <SectionContainer variant="accent" pattern>
          <Timeline />
        </SectionContainer>
      );
    case 'biography':
      return <InteractiveBiography />;
    case 'books':
      return <ImmersiveBookGallery />;
    case 'awards':
      return <AwardsRecognitionWall />;
    case 'humanitarian':
      return (
        <SectionContainer variant="accent">
          <Humanitarian />
        </SectionContainer>
      );
    case 'legacy':
      return (
        <SectionContainer variant="dark" pattern>
          <Legacy />
        </SectionContainer>
      );
    case 'dqaa':
      return (
        <SectionContainer variant="accent" pattern>
          <DQAA />
        </SectionContainer>
      );
    case 'admission':
      return (
        <SectionContainer variant="default">
          <DQAAAdmission />
        </SectionContainer>
      );
    case 'donate':
      return (
        <SectionContainer variant="accent">
          <DQAADonate />
        </SectionContainer>
      );
    default:
      return null;
  }
};

export default ConditionalSections;
