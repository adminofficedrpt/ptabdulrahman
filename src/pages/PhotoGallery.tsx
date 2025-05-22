
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import GalleryHero from '@/components/GalleryHero';
import MasonryGallery from '@/components/MasonryGallery';
import FooterModern from '@/components/FooterModern';

const PhotoGallery = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Photo Gallery | Dr. P.T. Abdul Rahman</title>
        <meta 
          name="description" 
          content="A visual journey showcasing moments from Dr. P.T. Abdul Rahman's life, educational initiatives, humanitarian work, and key achievements."
        />
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Visual Journey | Dr. P.T. Abdul Rahman" />
        <meta property="og:description" content="Explore a curated collection of images documenting Dr. Rahman's impact and journey." />
        <meta property="og:image" content="/lovable-uploads/66572de8-7486-4f48-ac7f-1219779e9bd6.jpg" />
        <meta property="og:type" content="website" />
        {/* Structured Data / Schema.org */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ImageGallery",
              "name": "Dr. P.T. Abdul Rahman - Visual Journey",
              "description": "A curated collection of images showcasing Dr. Rahman's professional journey, humanitarian work, and educational initiatives.",
              "creator": {
                "@type": "Person",
                "name": "Dr. P.T. Abdul Rahman",
                "jobTitle": "Educator, Humanitarian, Legal Expert",
                "url": "https://ptabdulrahman.com"
              }
            }
          `}
        </script>
      </Helmet>

      <GalleryHero />
      <MasonryGallery />
      <FooterModern />
    </>
  );
};

export default PhotoGallery;
