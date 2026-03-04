import { motion } from "framer-motion";
import ProgressiveImage from '@/components/ui/progressive-image';

const FooterModern = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const footerLinks = [
    { name: "About", id: "about" },
    { name: "Career", id: "career" },
    { name: "Publications", id: "publications" },
    { name: "Gallery", id: "gallery" },
    { name: "Milestones", id: "milestones" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-foreground text-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Logo + Name */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-start gap-6 mb-8"
        >
          <ProgressiveImage
            src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png"
            alt="Logo"
            className="h-14 w-auto brightness-0 invert opacity-50"
          />
          <div>
            <h2 className="font-playfair text-fluid-4xl md:text-fluid-5xl font-bold uppercase">
              P.T. Abdul Rahman
            </h2>
            <p className="text-background/50 text-sm max-w-lg leading-relaxed mt-2">
              Islamic scholar and educator based in the UAE, dedicated to community service, interfaith understanding, and educational development.
            </p>
          </div>
        </motion.div>

        {/* Nav + Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 mt-12">
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-background/40 mb-6">Navigation</h3>
            <div className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-background/40 mb-6">Contact</h3>
            <p className="text-sm text-background/60">mail@ptabdulrahman.com</p>
            <p className="text-sm text-background/60 mt-1">office@darul-quran.com</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8">
          <p className="text-xs text-background/30">
            © {currentYear} P.T. Abdul Rahman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterModern;
