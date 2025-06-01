
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FooterModern = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "My Journey",
      links: [
        { name: "About My Story", path: "/#biography" },
        { name: "Timeline", path: "/#timeline" },
        { name: "My Legacy", path: "/#legacy" },
      ]
    },
    {
      title: "My Work",
      links: [
        { name: "DQAA Academy", path: "/#dqaa" },
        { name: "Community Service", path: "/#humanitarian" },
        { name: "Academy Admission", path: "/#admission" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "My Books", path: "/#books" },
        { name: "Recognition", path: "/#awards" },
        { name: "Photo Gallery", path: "/gallery" },
      ]
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', href);
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <footer className="bg-royal-900 text-white pt-16 pb-10">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" aria-label="Homepage">
              <img 
                src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" 
                alt="Dr. P.T. Abdul Rahman Logo" 
                className="h-16 filter brightness-0 invert mb-4"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              This is my personal website where I share my journey as an author, social activist, 
              and educator. Alhamdulillah for the opportunity to serve and connect with people 
              from around the world.
            </p>
            
            {/* AI8TY Credit */}
            <div className="mt-8 p-4 bg-black/30 rounded-lg border border-white/10">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-gradient-to-r from-golden-400 to-royal-400 rounded-full animate-pulse" />
                <span className="text-xs text-white/80">Website Built & Managed by</span>
              </div>
              <a 
                href="https://ai8ty.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-bold bg-gradient-to-r from-golden-400 to-royal-400 bg-clip-text text-transparent hover:from-golden-300 hover:to-royal-300 transition-all duration-300"
              >
                AI8TY Creative Agency
              </a>
              <p className="text-xs text-white/60 mt-1">Premium Digital Experience</p>
            </div>
          </motion.div>

          {/* Navigation Columns */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-golden-300 font-medium mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.path.startsWith('/#') ? (
                      <a 
                        href={link.path}
                        onClick={(e) => handleNavClick(e, link.path)}
                        className="text-white/70 hover:text-golden-300 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.path}
                        className="text-white/70 hover:text-golden-300 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar with Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Dr. P.T. Abdul Rahman. All rights reserved. | Barakallahu feekum
          </p>
          <div className="flex space-x-6">
            <a href="#contact" className="text-white/70 hover:text-white text-sm transition-colors">Contact</a>
            <a href="https://ai8ty.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white text-sm transition-colors">Website by AI8TY</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterModern;
