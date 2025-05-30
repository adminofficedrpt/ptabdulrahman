
/**
 * Utility functions for image optimization and processing
 */

/**
 * Detect browser WebP support
 * @returns Promise that resolves to boolean indicating WebP support
 */
export const checkWebpSupport = async (): Promise<boolean> => {
  if (typeof window === 'undefined') return false;
  
  // Check for WebP support
  try {
    const webpData = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAgA0JaQAA3AA/vv9UAA=';
    const blob = await fetch(webpData).then(r => r.blob());
    return blob.size > 0;
  } catch (e) {
    return false;
  }
};

/**
 * Get appropriate image format based on browser support
 * @param src Original image source
 * @param formats Available formats ordered by preference
 * @returns The most appropriate image source
 */
export const getOptimalImageFormat = (
  src: string, 
  formats: Array<{format: string, url: string}>,
  defaultFormat: string = 'jpg'
): string => {
  if (!formats || formats.length === 0) return src;
  
  const hasSupport = (format: string): boolean => {
    switch (format) {
      case 'webp':
        return 'imageWebp' in document.createElement('canvas');
      case 'avif':
        const img = new Image();
        return 'decode' in img && img.decoding === 'async';
      default:
        return true;
    }
  };
  
  const supportedFormat = formats.find(f => hasSupport(f.format));
  return supportedFormat ? supportedFormat.url : src;
};

/**
 * Generate responsive image srcset
 * @param baseUrl Base URL of the image
 * @param widths Array of widths to include in srcset
 * @param format Optional image format
 * @returns Formatted srcset string
 */
export const generateSrcSet = (
  baseUrl: string,
  widths: number[] = [640, 750, 828, 1080, 1200, 1920],
  format?: string
): string => {
  // Handle various URL formats
  const urlWithoutExtension = baseUrl.replace(/\.[^/.]+$/, '');
  const extension = format || baseUrl.split('.').pop() || 'jpg';
  
  return widths
    .map(width => `${urlWithoutExtension}-${width}.${extension} ${width}w`)
    .join(', ');
};

/**
 * Generate sizes attribute based on viewport breakpoints
 * @param breakpoints Object mapping breakpoints to image sizes
 * @returns Formatted sizes string
 */
export const generateSizes = (
  breakpoints: Record<string, string> = {
    '(max-width: 640px)': '100vw',
    '(max-width: 1024px)': '75vw',
    'default': '50vw'
  }
): string => {
  return Object.entries(breakpoints)
    .map(([breakpoint, size]) => {
      if (breakpoint === 'default') return size;
      return `${breakpoint} ${size}`;
    })
    .join(', ');
};

/**
 * Lazy load images above the fold when they enter viewport
 * @param image HTMLImageElement to lazy load
 * @param src Image source URL
 * @param threshold Intersection threshold
 */
export const setupLazyLoading = (
  image: HTMLImageElement,
  src: string,
  threshold: number = 0.1
): void => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (image instanceof HTMLImageElement) {
              image.src = src;
              if (image.dataset.srcset) {
                image.srcset = image.dataset.srcset;
              }
            }
            observer.disconnect();
          }
        });
      },
      { threshold }
    );
    observer.observe(image);
  } else {
    // Fallback for browsers without IntersectionObserver
    if (image instanceof HTMLImageElement) {
      image.src = src;
      if (image.dataset.srcset) {
        image.srcset = image.dataset.srcset;
      }
    }
  }
};

/**
 * Calculate appropriate image dimensions based on container
 * @param containerWidth Width of the container in pixels
 * @param containerHeight Height of the container in pixels
 * @param aspectRatio Desired aspect ratio (width/height)
 * @returns Object with calculated width and height
 */
export const calculateImageDimensions = (
  containerWidth: number,
  containerHeight: number,
  aspectRatio: number = 16/9
): { width: number, height: number } => {
  const containerRatio = containerWidth / containerHeight;
  
  if (containerRatio > aspectRatio) {
    // Container is wider than image
    const width = containerHeight * aspectRatio;
    return { width, height: containerHeight };
  } else {
    // Container is taller than image
    const height = containerWidth / aspectRatio;
    return { width: containerWidth, height };
  }
};

/**
 * Calculate LQIP (Low Quality Image Placeholder) dimensions
 * @param originalWidth Original image width
 * @param originalHeight Original image height
 * @param targetWidth Target width for placeholder (default: 20px)
 * @returns Object with calculated width and height
 */
export const getLqipDimensions = (
  originalWidth: number,
  originalHeight: number,
  targetWidth: number = 20
): { width: number, height: number } => {
  const aspectRatio = originalWidth / originalHeight;
  const lqipHeight = Math.round(targetWidth / aspectRatio);
  
  return {
    width: targetWidth,
    height: lqipHeight
  };
};

/**
 * Preload critical images for faster rendering
 * @param imagePaths Array of image paths to preload
 */
export const preloadCriticalImages = (imagePaths: string[]): void => {
  if (typeof window === 'undefined') return;
  
  imagePaths.forEach(path => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = path;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

/**
 * Dynamically update image quality based on network conditions
 * @param defaultQuality Default quality level (0-100)
 * @returns Promise resolving to appropriate quality level
 */
export const getAdaptiveQuality = async (defaultQuality: number = 80): Promise<number> => {
  if (typeof window === 'undefined' || !('connection' in navigator)) {
    return defaultQuality;
  }
  
  const connection = (navigator as any).connection;
  
  // Adjust quality based on connection type
  if (connection) {
    if (connection.saveData) {
      return 60; // Low quality for data-saving mode
    }
    
    switch (connection.effectiveType) {
      case 'slow-2g':
      case '2g':
        return 40; // Very low quality
      case '3g':
        return 65; // Medium quality
      case '4g':
        return 85; // High quality
      default:
        return defaultQuality;
    }
  }
  
  return defaultQuality;
};
