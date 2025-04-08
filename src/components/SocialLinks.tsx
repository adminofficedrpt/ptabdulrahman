
import { Linkedin, Youtube, Facebook, Instagram, MessageSquare, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: <Linkedin size={20} />, 
      url: "https://linkedin.com/in/dr-pt-abdul-rahman-mohd-52538a68", 
      ariaLabel: "Visit Dr. PT Abdul Rahman's LinkedIn profile"
    },
    { 
      name: "YouTube", 
      icon: <Youtube size={20} />, 
      url: "https://youtube.com/@dharmarekha?si=GkXfmYn3h71k0aSB", 
      ariaLabel: "Visit Dr. PT Abdul Rahman's YouTube channel"
    },
    { 
      name: "Facebook", 
      icon: <Facebook size={20} />, 
      url: "https://www.facebook.com/abdulrahman.peetee?mibextid=2JQ9oc", 
      ariaLabel: "Visit Dr. PT Abdul Rahman's Facebook profile" 
    },
    { 
      name: "Instagram", 
      icon: <Instagram size={20} />, 
      url: "https://instagram.com/drpt7", 
      ariaLabel: "Visit Dr. PT Abdul Rahman's Instagram profile"
    },
    { 
      name: "WhatsApp", 
      icon: <MessageSquare size={20} />, 
      url: "https://wa.me/message/XXXXXXXX", 
      ariaLabel: "Contact Dr. PT Abdul Rahman on WhatsApp"
    },
    { 
      name: "Darul Quran", 
      icon: <ArrowUpRight size={20} />, 
      url: "https://www.darul-quran.com", 
      ariaLabel: "Visit Darul Quran Abdulla Academy official website"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-5"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {socialLinks.map((link) => (
        <motion.a 
          key={link.name}
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={link.ariaLabel}
          className="w-14 h-14 flex items-center justify-center rounded-full 
                    border border-golden-400 
                    bg-gradient-to-br from-royal-800/50 to-royal-900/80 
                    text-golden-300
                    shadow-lg hover:shadow-xl
                    transition-all duration-300 hover:-translate-y-1 group"
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative group-hover:text-golden-200 transition-colors duration-300">
            {link.icon}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
