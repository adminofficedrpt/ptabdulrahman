
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-royal-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6">Dr. P.T. Abdul Rahman</h3>
            <p className="mb-6">
              A lifelong dedication to elevating education, humanitarian service, and spiritual guidance.
            </p>
            <Button variant="outline" className="text-white border-white hover:bg-royal-800" onClick={scrollToTop}>
              Back to top
              <ArrowUp className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#biography" className="hover:text-royal-300 transition-colors">About</a></li>
              <li><a href="#timeline" className="hover:text-royal-300 transition-colors">Timeline</a></li>
              <li><a href="#books" className="hover:text-royal-300 transition-colors">Books</a></li>
              <li><a href="#humanitarian" className="hover:text-royal-300 transition-colors">Humanitarian Work</a></li>
              <li><a href="#awards" className="hover:text-royal-300 transition-colors">Awards</a></li>
              <li><a href="#media" className="hover:text-royal-300 transition-colors">Media Features</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Connect</h3>
            <SocialLinks />
            
            <p className="mt-8 text-sm text-royal-200">
              For speaking engagements, interviews, or other inquiries, please reach out through the social media channels above.
            </p>
          </div>
        </div>
        
        <div className="border-t border-royal-800 mt-12 pt-8 text-center">
          <p className="text-royal-300">&copy; {new Date().getFullYear()} All Rights Reserved | Dr. P.T. Abdul Rahman</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
