
/**
 * Advanced image preloading utility
 */

// Standard image preloader that returns a promise
export const preloadImages = (imagePaths: string[]): Promise<void[]> => {
  const promises = imagePaths.map(src => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      img.src = src;
    });
  });
  
  return Promise.all(promises);
};

// Critical images for hero and main content
export const heroImages = [
  '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png',
  '/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png',
  '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg',
  '/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png'
];

// Preload critical images with high priority (uses link preload)
export const preloadCriticalImages = (imagePaths: string[]): void => {
  if (typeof document === 'undefined') return;
  
  imagePaths.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Check if an image is cached
export const isImageCached = (src: string): boolean => {
  if (typeof document === 'undefined') return false;
  
  const img = new Image();
  img.src = src;
  return img.complete;
};

// Progressively load image (blur-up technique)
export const loadProgressiveImage = (
  lowResSrc: string, 
  highResSrc: string, 
  onLoad: (src: string) => void
): void => {
  // First load low-res version
  const lowResImg = new Image();
  lowResImg.onload = () => {
    onLoad(lowResSrc);
    
    // Then load high-res version
    const highResImg = new Image();
    highResImg.onload = () => onLoad(highResSrc);
    highResImg.src = highResSrc;
  };
  lowResImg.src = lowResSrc;
};

// Create base64 placeholder for images
export const createImagePlaceholder = (
  width: number, 
  height: number, 
  color: string = '#f4f4f4'
): string => {
  if (typeof document === 'undefined') return '';
  
  try {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, width, height);
      return canvas.toDataURL('image/jpeg', 0.1);
    }
    
    return '';
  } catch (e) {
    console.error('Error creating image placeholder:', e);
    return '';
  }
};

// Generate adaptive sizes attribute
export const generateSizeAttribute = (
  mobile: string = '100vw',
  tablet: string = '75vw',
  desktop: string = '50vw'
): string => {
  return `(max-width: 640px) ${mobile}, (max-width: 1024px) ${tablet}, ${desktop}`;
};
