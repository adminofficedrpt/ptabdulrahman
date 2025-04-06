
import { Linkedin, Youtube, Facebook, Instagram } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: <Linkedin />, 
      url: "https://linkedin.com/in/dr-pt-abdul-rahman-mohd-52538a68", 
      ariaLabel: "Visit LinkedIn profile"
    },
    { 
      name: "YouTube", 
      icon: <Youtube />, 
      url: "https://youtube.com/@dharmarekha?si=GkXfmYn3h71k0aSB", 
      ariaLabel: "Visit YouTube channel"
    },
    { 
      name: "Facebook", 
      icon: <Facebook />, 
      url: "https://www.facebook.com/abdulrahman.peetee?mibextid=2JQ9oc", 
      ariaLabel: "Visit Facebook profile" 
    },
    { 
      name: "Instagram", 
      icon: <Instagram />, 
      url: "https://instagram.com/drpt7", 
      ariaLabel: "Visit Instagram profile"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {socialLinks.map((link) => (
        <a 
          key={link.name}
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={link.ariaLabel}
          className="w-12 h-12 flex items-center justify-center rounded-full 
                    border border-golden-400 
                    bg-gradient-to-br from-royal-800 to-royal-900 
                    text-golden-300 hover:text-golden-200
                    shadow-md hover:shadow-lg
                    transition-all duration-300 hover:-translate-y-1"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
