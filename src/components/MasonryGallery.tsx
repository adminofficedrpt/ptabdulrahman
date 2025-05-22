
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  category: string;
  width: number;
  height: number;
}

// Sample gallery data - this would ideally come from a CMS or API
const galleryImages: GalleryImage[] = [
  {
    src: "/lovable-uploads/66572de8-7486-4f48-ac7f-1219779e9bd6.jpg",
    alt: "Dr. Rahman speaking at conference",
    caption: "Dr. Rahman delivering a keynote address at the International Islamic Conference, 2019",
    category: "events",
    width: 1200,
    height: 800
  },
  {
    src: "/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg",
    alt: "Dr. Rahman with students",
    caption: "With students at the annual DQAA graduation ceremony",
    category: "education",
    width: 1200,
    height: 900
  },
  {
    src: "/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png",
    alt: "Dr. Rahman official logo",
    caption: "Official logo representing Dr. Rahman's mission and vision",
    category: "brand",
    width: 800,
    height: 800
  },
  {
    src: "/lovable-uploads/5d0ee704-bb81-4964-888b-60af01b062bb.png",
    alt: "Dr. Rahman receiving award",
    caption: "Receiving the prestigious Community Leadership Award, 2020",
    category: "awards",
    width: 1200,
    height: 800
  },
  {
    src: "/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png",
    alt: "DQAA campus",
    caption: "The main campus of Darul Quran Abdulla Academy",
    category: "education",
    width: 1600,
    height: 1000
  },
  {
    src: "/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png",
    alt: "Dr. Rahman at humanitarian event",
    caption: "Leading a humanitarian initiative for underprivileged communities",
    category: "humanitarian",
    width: 1200,
    height: 800
  },
  {
    src: "/lovable-uploads/45713be7-cf84-488a-bddd-5efbe361b577.png",
    alt: "Dr. Rahman's published book",
    caption: "One of Dr. Rahman's influential publications on Islamic jurisprudence",
    category: "publications",
    width: 800,
    height: 1200
  },
  {
    src: "/lovable-uploads/37251c4b-0591-433c-bbce-ac4291fc7ddb.png",
    alt: "Meeting with dignitaries",
    caption: "Dr. Rahman meeting with governmental representatives to discuss educational reforms",
    category: "events",
    width: 1200,
    height: 800
  },
];

// Define filter categories
const categories = [
  { id: "all", label: "All" },
  { id: "events", label: "Events" },
  { id: "education", label: "Education" },
  { id: "humanitarian", label: "Humanitarian" },
  { id: "awards", label: "Awards" },
  { id: "publications", label: "Publications" },
  { id: "brand", label: "Brand" }
];

const MasonryGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleImages, setVisibleImages] = useState<GalleryImage[]>([]);
  
  // Filter images based on category
  useEffect(() => {
    const filteredImages = activeCategory === "all"
      ? galleryImages
      : galleryImages.filter(img => img.category === activeCategory);
    
    setVisibleImages(filteredImages);
  }, [activeCategory]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-royal-800 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
        
        {/* Masonry Gallery */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {visibleImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden" style={{ paddingBottom: `${(image.height / image.width) * 100}%` }}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {visibleImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500">No images found in this category.</p>
          </motion.div>
        )}
        
        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-none shadow-none">
            <div className="relative bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 z-10 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3 bg-gray-900">
                  <img
                    src={selectedImage?.src}
                    alt={selectedImage?.alt}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </div>
                
                <div className="lg:w-1/3 p-6 flex flex-col">
                  <h3 className="text-xl font-playfair font-semibold text-royal-900 mb-2">
                    {selectedImage?.alt}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {selectedImage?.caption}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-block px-3 py-1 bg-royal-100 text-royal-800 rounded-full text-xs font-medium capitalize">
                      {selectedImage?.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default MasonryGallery;
