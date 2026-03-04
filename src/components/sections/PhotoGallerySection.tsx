import React from 'react';
import { motion } from 'framer-motion';
import ProgressiveImage from '@/components/ui/progressive-image';

const galleryImages = [
  {
    src: "/lovable-uploads/a1f6c6c2-af1d-4406-94f9-3153d678f134.png",
    alt: "DQAA graduation ceremony",
    caption: "Annual graduation ceremony at Darul Quran Abdulla Academy",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/lovable-uploads/2269bab3-844d-41fa-9000-79b037d06949.png",
    alt: "Foundation stone laying ceremony",
    caption: "Foundation stone laying ceremony for new educational facility",
    span: "",
  },
  {
    src: "/lovable-uploads/249ad82a-9bb5-4f8e-93f9-8f0b2dd4cad1.png",
    alt: "Aviation industry partnership",
    caption: "Strategic partnership discussion",
    span: "",
  },
  {
    src: "/lovable-uploads/e2460197-399d-4ba9-9693-5dba0cb597b8.png",
    alt: "Community outreach program",
    caption: "Community outreach and welfare program",
    span: "",
  },
  {
    src: "/lovable-uploads/93c8159c-c44d-482c-aa53-955410e6b4e0.png",
    alt: "Community meeting",
    caption: "Community discussions and planning sessions",
    span: "md:col-span-2",
  },
  {
    src: "/lovable-uploads/845d900d-7a9e-457e-89f0-7aa4aaf395a7.png",
    alt: "Industry collaboration",
    caption: "Collaboration with industry leaders",
    span: "",
  },
  {
    src: "/lovable-uploads/5d0ee704-bb81-4964-888b-60af01b062bb.png",
    alt: "Public address",
    caption: "Addressing the community",
    span: "",
  },
  {
    src: "/lovable-uploads/37251c4b-0591-433c-bbce-ac4291fc7ddb.png",
    alt: "Cultural event",
    caption: "Cultural engagement and interfaith dialogue",
    span: "md:col-span-2",
  },
];

const PhotoGallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-20 md:py-28 lg:py-32 bg-[#EDE8E3] relative overflow-hidden">
      {/* Floating keyword */}
      <div className="absolute top-12 right-8 md:right-16 pointer-events-none select-none">
        <span className="font-playfair text-[6rem] md:text-[10rem] font-bold text-foreground/[0.04] leading-none">
          gallery
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-fluid-4xl md:text-fluid-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-muted-foreground text-fluid-base max-w-2xl">
            Moments captured across decades of community service, education, and cultural engagement.
          </p>
          <div className="mt-6 w-16 h-px bg-golden-500" />
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden ${image.span} ${
                image.span.includes('row-span-2') ? 'aspect-square' : 'aspect-[4/3]'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 * index }}
              viewport={{ once: true }}
            >
              <ProgressiveImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Hover caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <p className="text-white text-sm font-light">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallerySection;
