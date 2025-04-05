
import { Linkedin, Youtube, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialLinks = () => {
  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: <Linkedin className="mr-2" />, 
      url: "#", 
      color: "bg-[#0077B5] hover:bg-[#0077B5]/80" 
    },
    { 
      name: "YouTube", 
      icon: <Youtube className="mr-2" />, 
      url: "#", 
      color: "bg-[#FF0000] hover:bg-[#FF0000]/80" 
    },
    { 
      name: "Facebook", 
      icon: <Facebook className="mr-2" />, 
      url: "#", 
      color: "bg-[#1877F2] hover:bg-[#1877F2]/80" 
    },
    { 
      name: "Instagram", 
      icon: <Instagram className="mr-2" />, 
      url: "#", 
      color: "bg-[#E4405F] hover:bg-[#E4405F]/80" 
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {socialLinks.map((link) => (
        <Button 
          key={link.name}
          className={`${link.color} text-white`}
          asChild
        >
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.icon}
            {link.name}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;
