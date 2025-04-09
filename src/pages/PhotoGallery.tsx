import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Search, Filter, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
  {
    id: 1,
    src: '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png',
    alt: 'Dr. P.T. Abdul Rahman portrait',
    caption: 'Official portrait of Dr. P.T. Abdul Rahman, Islamic Scholar UAE',
    category: 'portrait',
    year: '2023'
  },
  {
    id: 2,
    src: '/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png',
    alt: 'Dr. P.T. Abdul Rahman receiving award',
    caption: 'Dr. P.T. Abdul Rahman receiving recognition from UAE leadership',
    category: 'awards',
    year: '2022'
  },
  {
    id: 3,
    src: '/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png',
    alt: 'Darul Quran Abdulla Academy campus',
    caption: 'Aerial view of the Darul Quran Abdulla Academy campus in Kerala',
    category: 'dqaa',
    year: '2023'
  },
  {
    id: 4,
    src: '/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png',
    alt: 'Dr. P.T. Abdul Rahman logo',
    caption: 'Official logo of Dr. P.T. Abdul Rahman - Founder of DQAA',
    category: 'branding',
    year: '2021'
  },
  {
    id: 5,
    src: '/lovable-uploads/37251c4b-0591-433c-bbce-ac4291fc7ddb.png',
    alt: 'Dr. P.T. Abdul Rahman at a conference',
    caption: 'Dr. P.T. Abdul Rahman speaking at International Islamic Conference in Dubai',
    category: 'events',
    year: '2022'
  },
  {
    id: 6,
    src: '/lovable-uploads/5d0ee704-bb81-4964-888b-60af01b062bb.png',
    alt: 'Dr. P.T. Abdul Rahman with community leaders',
    caption: 'Dr. P.T. Abdul Rahman meeting with Indian community leaders in UAE',
    category: 'community',
    year: '2021'
  },
  {
    id: 7,
    src: '/lovable-uploads/6856dd37-63cb-4029-b897-0b2143071d2f.png',
    alt: 'Dr. P.T. Abdul Rahman book signing',
    caption: 'Book signing event for "Is the Creation Meaningless?" in Dubai',
    category: 'books',
    year: '2020'
  },
  {
    id: 8,
    src: '/lovable-uploads/76eef9a7-0487-4c6f-b458-32397f9edbd6.png',
    alt: 'Dr. P.T. Abdul Rahman humanitarian work',
    caption: 'Dr. P.T. Abdul Rahman during humanitarian mission with UAE Red Crescent',
    category: 'humanitarian',
    year: '2019'
  },
  {
    id: 9,
    src: '/lovable-uploads/bdaaf13f-2912-4e1d-b6d7-eb5852916364.png',
    alt: 'Darul Quran Abdulla Academy students',
    caption: 'Students of Darul Quran Abdulla Academy during graduation ceremony',
    category: 'dqaa',
    year: '2023'
  },
  {
    id: 10,
    src: '/lovable-uploads/ff033cfa-8c52-470c-af76-d48b0136aabc.png',
    alt: 'Dr. P.T. Abdul Rahman giving speech',
    caption: 'Dr. P.T. Abdul Rahman delivering keynote address at UAE National Day celebration',
    category: 'events',
    year: '2022'
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
  { id: 'branding', name: 'Branding' },
  { id: 'speeches', name: 'Speeches' },
  { id: 'conferences', name: 'Conferences' }
];

const years = ['All Years', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const photosPerPage = 12;
  const navigate = useNavigate();
  const galleryRef = useRef<HTMLDivElement>(null);
  
  const filteredPhotos = photos.filter(photo => {
    const matchesCategory = selectedCategory === 'all' || photo.category === selectedCategory;
    const matchesYear = selectedYear === 'All Years' || photo.year === selectedYear;
    const matchesSearch = searchQuery === '' || 
                         photo.caption.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         photo.alt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         photo.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesYear && matchesSearch;
  });
  
  const totalPages = Math.ceil(filteredPhotos.length / photosPerPage);
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = filteredPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);
  
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedYear('All Years');
    setSearchQuery('');
    setCurrentPage(1);
  };
  
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

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedYear, searchQuery]);
  
  const currentPhoto = selectedPhoto !== null ? photos.find(photo => photo.id === selectedPhoto) : null;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const photoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" onKeyDown={handleKeyDown} tabIndex={0}>
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-royal-800 font-playfair">
              Photo Gallery
              <span className="block w-40 h-1 bg-gradient-to-r from-golden-300 via-golden-500 to-golden-300 mx-auto mt-6"></span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A visual journey through the life and work of Dr. P.T. Abdul Rahman: scholar, humanitarian, author, and 
              Founder Chairman of Darul Quran Abdulla Academy.
            </p>
          </motion.div>
          
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <Input 
                    type="text"
                    placeholder="Search gallery..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-3 border-gray-200 focus:border-golden-500 focus:ring focus:ring-golden-200 focus:ring-opacity-50 rounded-full"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                </div>
              </div>
              
              <div className="flex items-center gap-2 w-full md:w-auto">
                <Button
                  onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                  variant="outline"
                  className="flex items-center text-royal-700 border-royal-200 hover:bg-royal-50"
                >
                  <Filter size={16} className="mr-2" />
                  Filters
                  {(selectedCategory !== 'all' || selectedYear !== 'All Years') && (
                    <span className="ml-2 w-2 h-2 rounded-full bg-golden-500"></span>
                  )}
                </Button>
                
                {(selectedCategory !== 'all' || selectedYear !== 'All Years' || searchQuery !== '') && (
                  <Button
                    onClick={resetFilters}
                    variant="ghost"
                    className="text-royal-600 hover:text-royal-800"
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>
            
            <AnimatePresence>
              {isFiltersOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mb-6"
                >
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="mb-4">
                      <h3 className="font-medium text-royal-800 mb-2">Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-3 py-1.5 rounded-full text-sm transition-all duration-300 ${
                              selectedCategory === category.id 
                                ? 'bg-royal-700 text-white' 
                                : 'bg-white border border-gray-200 text-gray-700 hover:bg-royal-50'
                            }`}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-royal-800 mb-2">Years</h3>
                      <div className="flex flex-wrap gap-2">
                        {years.map((year) => (
                          <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-3 py-1.5 rounded-full text-sm transition-all duration-300 ${
                              selectedYear === year 
                                ? 'bg-golden-600 text-white' 
                                : 'bg-white border border-gray-200 text-gray-700 hover:bg-golden-50'
                            }`}
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="mb-8 flex justify-between items-center">
            <p className="text-gray-600">
              Showing {filteredPhotos.length} {filteredPhotos.length === 1 ? 'photo' : 'photos'}
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
              {selectedYear !== 'All Years' && ` from ${selectedYear}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
            
            <div className="text-gray-600 text-sm">
              Page {currentPage} of {totalPages || 1}
            </div>
          </div>
          
          <motion.div 
            ref={galleryRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {currentPhotos.map((photo) => (
              <motion.div 
                key={photo.id}
                variants={photoVariants}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-80 flex flex-col"
                onClick={() => openLightbox(photo.id)}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-xs text-golden-600 font-medium">{photo.year} · {photo.category}</p>
                  <p className="text-sm text-gray-800 line-clamp-2 mt-1">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {filteredPhotos.length === 0 && (
            <div className="text-center py-20">
              <div className="mb-4 text-gray-400">
                <Filter size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">No photos found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
              <Button onClick={resetFilters} variant="outline">
                Clear all filters
              </Button>
            </div>
          )}
          
          {totalPages > 1 && (
            <div className="flex justify-center mt-10">
              <div className="flex items-center space-x-1">
                <Button
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  variant="outline"
                  size="icon"
                  className="w-9 h-9"
                >
                  <ChevronLeft size={16} />
                </Button>
                
                <div className="flex items-center space-x-1">
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <Button
                        key={pageNum}
                        onClick={() => paginate(pageNum)}
                        variant={currentPage === pageNum ? "default" : "outline"}
                        className={`w-9 h-9 ${currentPage === pageNum ? 'bg-royal-700 hover:bg-royal-800' : ''}`}
                      >
                        {pageNum}
                      </Button>
                    );
                  })}
                  
                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <>
                      <span className="mx-1">...</span>
                      <Button
                        onClick={() => paginate(totalPages)}
                        variant="outline"
                        className="w-9 h-9"
                      >
                        {totalPages}
                      </Button>
                    </>
                  )}
                </div>
                
                <Button
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  variant="outline"
                  size="icon"
                  className="w-9 h-9"
                >
                  <ChevronRight size={16} />
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <AnimatePresence>
        {selectedPhoto !== null && currentPhoto && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={closeLightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="max-w-7xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img 
                src={currentPhoto.src} 
                alt={currentPhoto.alt}
                className="max-h-[80vh] max-w-full object-contain"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="max-w-3xl mx-auto">
                  <p className="text-xs text-golden-300 font-medium mb-1">{currentPhoto.year} · {currentPhoto.category}</p>
                  <p className="text-white text-lg">{currentPhoto.caption}</p>
                </div>
              </motion.div>
              
              <button 
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-golden-300 transition-colors bg-black/20 rounded-full p-2"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>
              
              <button 
                onClick={() => navigatePhoto('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-3 text-white hover:text-golden-300 transition-all"
                aria-label="Previous photo"
              >
                <ChevronLeft size={30} />
              </button>
              
              <button 
                onClick={() => navigatePhoto('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-3 text-white hover:text-golden-300 transition-all"
                aria-label="Next photo"
              >
                <ChevronRight size={30} />
              </button>
              
              <button 
                className="absolute top-4 left-4 text-white hover:text-golden-300 transition-colors bg-black/20 hover:bg-black/40 rounded-full p-2"
                aria-label="Download photo"
              >
                <Download size={20} />
              </button>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/50 text-sm">
                {filteredPhotos.findIndex(photo => photo.id === selectedPhoto) + 1} / {filteredPhotos.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default PhotoGallery;
