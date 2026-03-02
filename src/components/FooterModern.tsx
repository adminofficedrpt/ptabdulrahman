
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FooterModern = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Journey",
      links: [
        { name: "About", path: "/#about" },
        { name: "Community", path: "/#community" },
        { name: "Education", path: "/#education" },
      ]
    },
    {
      title: "Work",
      links: [
        { name: "Publications", path: "/#publications" },
        { name: "Milestones", path: "/#milestones" },
        { name: "Gallery", path: "/gallery" },
      ]
    },
    {
      title: "Professional",
      links: [
        { name: "Group 2 Securities", path: "/#about" },
        { name: "Contact", path: "/#contact" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/" aria-label="Homepage">
              <img 
                src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" 
                alt="P.T. Abdul Rahman" 
                className="h-14 filter brightness-0 invert mb-4"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Islamic scholar, educator, and community leader based in the UAE. 
              Managing Director — Group 2 Securities.
            </p>
          </motion.div>

          {/* Navigation */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-golden-300 font-medium mb-4 text-sm tracking-wider uppercase">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.path.startsWith('/#') ? (
                      <a 
                        href={link.path}
                        onClick={(e) => handleNavClick(e, link.path)}
                        className="text-white/60 hover:text-golden-300 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.path}
                        className="text-white/60 hover:text-golden-300 transition-colors text-sm"
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

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {currentYear} P.T. Abdul Rahman. All rights reserved.
          </p>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '/#contact')}
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterModern;
