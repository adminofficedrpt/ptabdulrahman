
import { Linkedin, Youtube, MessageSquare, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialLinks = () => {
  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: <Linkedin className="mr-2" />, 
      url: "#", 
      color: "bg-[#0077B5] hover:bg-[#0077B5]/90" 
    },
    { 
      name: "YouTube", 
      icon: <Youtube className="mr-2" />, 
      url: "#", 
      color: "bg-[#FF0000] hover:bg-[#FF0000]/90" 
    },
    { 
      name: "WhatsApp", 
      icon: <MessageSquare className="mr-2" />, 
      url: "#", 
      color: "bg-[#25D366] hover:bg-[#25D366]/90" 
    },
    { 
      name: "Facebook", 
      icon: <Facebook className="mr-2" />, 
      url: "#", 
      color: "bg-[#1877F2] hover:bg-[#1877F2]/90" 
    },
    { 
      name: "Instagram", 
      icon: <Instagram className="mr-2" />, 
      url: "#", 
      color: "bg-[#E4405F] hover:bg-[#E4405F]/90" 
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
