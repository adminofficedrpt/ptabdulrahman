import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { designTokens } from "@/lib/design-tokens";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";

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
      title: "Work & Legacy",
      links: [
        { name: "Publications", path: "/#publications" },
        { name: "Milestones", path: "/#milestones" },
        { name: "Gallery", path: "/gallery" },
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "Contact", path: "/#contact" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Use", path: "/terms" },
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
    } else {
      // For external links or full page navigations
      window.location.href = href;
    }
  };

  return (
    <footer className={`bg-primary-900 text-neutral-50 pt-${designTokens.spacing.section.md} pb-${designTokens.spacing.section.sm}`}>
      <ResponsiveContainer size="lg" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/" aria-label="Homepage">
              <img 
                src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" 
                alt="P.T. Abdul Rahman Logo" 
                className="h-14 filter brightness-0 invert mb-4"
              />
            </Link>
            <p className={`text-neutral-300 text-fluid-sm ${designTokens.typography.fontFamily.body.join(",")} leading-relaxed`}>
              Dedicated to fostering intellectual growth, community welfare, and interfaith understanding. Dr. P.T. Abdul Rahman's work spans decades, leaving an indelible mark on society.
            </p>
          </motion.div>

          {/* Navigation Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-accent-300 font-semibold mb-4 text-fluid-base tracking-wider uppercase ${designTokens.typography.fontFamily.heading.join(",")}`}>{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.path.startsWith('/#') ? (
                      <a 
                        href={link.path}
                        onClick={(e) => handleNavClick(e, link.path)}
                        className={`text-neutral-400 hover:text-accent-300 transition-colors text-fluid-sm ${designTokens.typography.fontFamily.body.join(",")}`}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.path}
                        className={`text-neutral-400 hover:text-accent-300 transition-colors text-fluid-sm ${designTokens.typography.fontFamily.body.join(",")}`}
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

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className={`mt-${designTokens.spacing.section.sm} pt-6 border-t border-primary-700 flex flex-col md:flex-row justify-between items-center`}
        >
          <p className={`text-neutral-500 text-fluid-xs ${designTokens.typography.fontFamily.body.join(",")} mb-4 md:mb-0`}>
            &copy; {currentYear} P.T. Abdul Rahman. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {/* Social Links can go here if needed */}
          </div>
        </motion.div>
      </ResponsiveContainer>
    </footer>
  );
};

export default FooterModern;
