
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const photos = [
  {
    id: 1,
    src: '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png',
    alt: 'Dr. P.T. Abdul Rahman portrait',
    category: 'portrait'
  },
  {
    id: 2,
    src: '/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png',
    alt: 'Dr. P.T. Abdul Rahman receiving award',
    category: 'awards'
  },
  {
    id: 3,
    src: '/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png',
    alt: 'Darul Quran Abdulla Academy campus',
    category: 'dqaa'
  },
  {
    id: 4,
    src: '/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png',
    alt: 'Dr. P.T. Abdul Rahman logo',
    category: 'branding'
  },
  {
    id: 5,
    src: '/lovable-uploads/37251c4b-0591-433c-bbce-ac4291fc7ddb.png',
    alt: 'Dr. P.T. Abdul Rahman at a conference',
    category: 'events'
  },
  {
    id: 6,
    src: '/lovable-uploads/5d0ee704-bb81-4964-888b-60af01b062bb.png',
    alt: 'Dr. P.T. Abdul Rahman with community leaders',
    category: 'community'
  },
  {
    id: 7,
    src: '/lovable-uploads/6856dd37-63cb-4029-b897-0b2143071d2f.png',
    alt: 'Dr. P.T. Abdul Rahman book signing',
    category: 'books'
  },
  {
    id: 8,
    src: '/lovable-uploads/76eef9a7-0487-4c6f-b458-32397f9edbd6.png',
    alt: 'Dr. P.T. Abdul Rahman humanitarian work',
    category: 'humanitarian'
  },
  {
    id: 9,
    src: '/lovable-uploads/bdaaf13f-2912-4e1d-b6d7-eb5852916364.png',
    alt: 'Darul Quran Abdulla Academy students',
    category: 'dqaa'
  },
  {
    id: 10,
    src: '/lovable-uploads/ff033cfa-8c52-470c-af76-d48b0136aabc.png',
    alt: 'Dr. P.T. Abdul Rahman giving speech',
    category: 'events'
  }
];

const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'portrait', name: 'Portraits' },
  { id: 'awards', name: 'Awards & Recognition' },
  { id: 'dqaa', name: 'DQAA' },
  { id: 'events', name: 'Events' },
  { id: 'books', name: 'Books' },
  { id: 'humanitarian', name: 'Humanitarian' },
  { id: 'community', name: 'Community' },
  { id: 'branding', name: 'Branding' }
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();
  
  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);
  
  const openLightbox = (photoId: number) => {
    setSelectedPhoto(photoId);
    document.body.classList.add('overflow-hidden');
  };
  
  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.classList.remove('overflow-hidden');
  };
  
  const navigatePhoto = (direction: 'next' | 'prev') => {
    if (selectedPhoto === null) return;
    
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedPhoto);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredPhotos.length;
    } else {
      newIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    }
    
    setSelectedPhoto(filteredPhotos[newIndex].id);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navigatePhoto('next');
    if (e.key === 'ArrowLeft') navigatePhoto('prev');
  };
  
  const currentPhoto = selectedPhoto !== null ? photos.find(photo => photo.id === selectedPhoto) : null;

  return (
    <div className="min-h-screen" onKeyDown={handleKeyDown} tabIndex={0}>
      <Navbar />
      
      <section className="py-24 bg-gradient-to-b from-royal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold islamic-border mb-12 text-royal-800">
              Photo Gallery
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A visual journey through the life and work of Dr. P.T. Abdul Rahman: scholar, humanitarian, author, and 
              Founder Chairman of Darul Quran Abdulla Academy.
            </p>
          </div>
          
          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                    selectedCategory === category.id 
                      ? 'bg-golden-600 text-white' 
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-golden-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, index) => (
              <div 
                key={photo.id}
                className="photo-card overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-64"
                onClick={() => openLightbox(photo.id)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          {filteredPhotos.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Lightbox */}
      {selectedPhoto !== null && currentPhoto && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <div 
            className="max-w-7xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={currentPhoto.src} 
              alt={currentPhoto.alt}
              className="max-h-[85vh] max-w-full object-contain"
            />
            
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-golden-300 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            
            <button 
              onClick={() => navigatePhoto('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-golden-700 transition-all"
              aria-label="Previous photo"
            >
              <ChevronLeft size={32} />
            </button>
            
            <button 
              onClick={() => navigatePhoto('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-golden-700 transition-all"
              aria-label="Next photo"
            >
              <ChevronRight size={32} />
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
              <p>{currentPhoto.alt}</p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default PhotoGallery;
