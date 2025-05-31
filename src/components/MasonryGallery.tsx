import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import LoadingState from "@/components/ui/loading-state";
import ErrorBoundary from "@/components/error/ErrorBoundary";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

// Enhanced gallery data with new images
const galleryImages: GalleryImage[] = [
  {
    src: "/lovable-uploads/99d889c1-4614-4a21-bde6-ee64dfb60eac.png",
    alt: "Malayalam Puraskaaram 1196 - Official Publication",
    caption: "Official publication cover featuring Dr. P.T. Abdul Rahman",
    width: 800,
    height: 1200
  },
  {
    src: "/lovable-uploads/17b9319a-ac20-4df2-b3d8-1b600b003036.png",
    alt: "Dr. Rahman presenting publication in Dubai",
    caption: "Dr. Rahman presenting his latest publication to distinguished guests in Dubai",
    width: 1200,
    height: 1200
  },
  {
    src: "/lovable-uploads/845d900d-7a9e-457e-89f0-7aa4aaf395a7.png",
    alt: "Automotive industry collaboration",
    caption: "Dr. Rahman's collaboration with automotive industry leaders",
    width: 1200,
    height: 1200
  },
  {
    src: "/lovable-uploads/93c8159c-c44d-482c-aa53-955410e6b4e0.png",
    alt: "Community meeting and discussion",
    caption: "Dr. Rahman engaging in community discussions and planning sessions",
    width: 1200,
    height: 900
  },
  {
    src: "/lovable-uploads/c970d98e-2e87-4135-815f-de35b2d7eeac.png",
    alt: "Meeting with senior community leaders",
    caption: "Important meeting with respected community elders and leaders",
    width: 1200,
    height: 900
  },
  {
    src: "/lovable-uploads/2269bab3-844d-41fa-9000-79b037d06949.png",
    alt: "Foundation stone laying ceremony",
    caption: "Foundation stone laying ceremony for new educational facility",
    width: 1200,
    height: 800
  },
  {
    src: "/lovable-uploads/249ad82a-9bb5-4f8e-93f9-8f0b2dd4cad1.png",
    alt: "Aviation industry partnership",
    caption: "Strategic partnership discussion in the aviation sector",
    width: 1200,
    height: 900
  },
  {
    src: "/lovable-uploads/a1f6c6c2-af1d-4406-94f9-3153d678f134.png",
    alt: "DQAA graduation ceremony",
    caption: "Annual graduation ceremony at Darul Quran Abdulla Academy",
    width: 1600,
    height: 900
  },
  {
    src: "/lovable-uploads/4fc15481-16de-4566-94d6-b3f7bc6521cb.png",
    alt: "Official state meeting",
    caption: "High-level meeting with government officials and dignitaries",
    width: 1400,
    height: 900
  },
  {
    src: "/lovable-uploads/e2460197-399d-4ba9-9693-5dba0cb597b8.png",
    alt: "Community outreach program",
    caption: "Community outreach and social welfare program implementation",
    width: 1200,
    height: 900
  },
  {
    src: "/lovable-uploads/66572de8-7486-4f48-ac7f-1219779e9bd6.jpg",
    alt: "Dr. Rahman speaking at conference",
    caption: "Dr. Rahman delivering a keynote address at the International Islamic Conference, 2019",
    width: 1200,
    height: 800
  },
  {
    src: "/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg",
    alt: "Dr. Rahman with students",
    caption: "With students at the annual DQAA graduation ceremony",
    width: 1200,
    height: 900
  },
  {
    src: "/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png",
    alt: "Dr. Rahman official logo",
    caption: "Official logo representing Dr. Rahman's mission and vision",
    width: 800,
    height: 800
  },
  {
    src: "/lovable-uploads/5d0ee704-bb81-4964-888b-60af01b062bb.png",
    alt: "Dr. Rahman receiving award",
    caption: "Receiving the prestigious Community Leadership Award, 2020",
    width: 1200,
    height: 800
  },
  {
    src: "/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png",
    alt: "DQAA campus",
    caption: "The main campus of Darul Quran Abdulla Academy",
    width: 1600,
    height: 1000
  },
  {
    src: "/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png",
    alt: "Dr. Rahman at humanitarian event",
    caption: "Leading a humanitarian initiative for underprivileged communities",
    width: 1200,
    height: 800
  },
  {
    src: "/lovable-uploads/45713be7-cf84-488a-bddd-5efbe361b577.png",
    alt: "Dr. Rahman's published book",
    caption: "One of Dr. Rahman's influential publications on Islamic jurisprudence",
    width: 800,
    height: 1200
  },
  {
    src: "/lovable-uploads/37251c4b-0591-433c-bbce-ac4291fc7ddb.png",
    alt: "Meeting with dignitaries",
    caption: "Dr. Rahman meeting with governmental representatives to discuss educational reforms",
    width: 1200,
    height: 800
  },
];

const MasonryGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-royal-900 mb-4">
              Visual Journey
            </h2>
            <LoadingState text="Loading gallery..." className="mt-8" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <ErrorBoundary>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-royal-900 mb-4">
              Visual Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A curated collection of moments from Dr. Rahman's remarkable journey in education, community service, and humanitarian work.
            </p>
          </div>
          
          {/* Responsive Masonry Grid */}
          <motion.div 
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="break-inside-avoid relative overflow-hidden rounded-lg shadow-md cursor-pointer bg-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative">
                  {!loadedImages.has(index) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <LoadingState size="sm" />
                    </div>
                  )}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    onLoad={() => handleImageLoad(index)}
                    onError={(e) => {
                      console.error('Failed to load image:', image.src);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium line-clamp-2">{image.caption}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Lightbox Dialog */}
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-6xl p-0 bg-transparent border-none shadow-none">
              <div className="relative bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10 transition-colors"
                  aria-label="Close image"
                >
                  <X size={20} />
                </button>
                
                <div className="flex flex-col lg:flex-row max-h-[90vh]">
                  <div className="lg:w-2/3 bg-gray-900 flex items-center justify-center">
                    <img
                      src={selectedImage?.src}
                      alt={selectedImage?.alt}
                      className="w-full h-auto max-h-[70vh] lg:max-h-[80vh] object-contain"
                    />
                  </div>
                  
                  <div className="lg:w-1/3 p-6 flex flex-col">
                    <h3 className="text-xl font-playfair font-semibold text-royal-900 mb-3">
                      {selectedImage?.alt}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {selectedImage?.caption}
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default MasonryGallery;
