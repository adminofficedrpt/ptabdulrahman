
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  imageUrl?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const AggressiveSEO: React.FC<SEOProps> = ({
  title = "Dr. P.T. Abdul Rahman - Distinguished Islamic Scholar, Educator & Humanitarian Leader",
  description = "Dr. P.T. Abdul Rahman is a world-renowned Islamic scholar in UAE, founder of Darul Quran Abdulla Academy (DQAA), humanitarian leader in Dubai, and author of groundbreaking Islamic philosophical works. Discover his 30+ years of educational excellence, interfaith dialogue, and global humanitarian impact.",
  keywords = "Dr PT Abdul Rahman, Islamic scholar UAE, Darul Quran Abdulla Academy DQAA, Islamic education Kerala, Dubai Indian Islamic Centre DIIC, humanitarian Dubai, Islamic philosophy, interfaith dialogue, Quran memorization school, Islamic boarding school Kerala, Is the Creation Meaningless book, educational innovation Islamic, community leadership UAE, charitable work Dubai, Islamic thought leader, religious education, humanitarian services, cultural bridge building, expatriate community Dubai, Islamic scholarship global",
  canonicalUrl = "https://www.ptabdulrahman.com/",
  imageUrl = "https://www.ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png",
  type = "website",
  author = "Dr. P.T. Abdul Rahman",
  publishedTime,
  modifiedTime = new Date().toISOString()
}) => {
  return (
    <Helmet>
      {/* Enhanced Title and Meta Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Advanced Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Geo-targeting */}
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai, United Arab Emirates" />
      <meta name="geo.position" content="25.2048;55.2708" />
      <meta name="ICBM" content="25.2048, 55.2708" />
      
      {/* Language and Location */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="language" content="English" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternative Language Versions */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="ar" href={canonicalUrl + "ar/"} />
      <link rel="alternate" hrefLang="ml" href={canonicalUrl + "ml/"} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      
      {/* Enhanced Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Dr. P.T. Abdul Rahman - Official Website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ar_AE" />
      <meta property="og:locale:alternate" content="ml_IN" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Dr. P.T. Abdul Rahman - Distinguished Islamic Scholar and Humanitarian" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      <meta property="article:modified_time" content={modifiedTime} />
      <meta property="article:author" content={author} />
      <meta property="article:section" content="Biography" />
      <meta property="article:tag" content="Islamic Education" />
      <meta property="article:tag" content="Humanitarian Work" />
      <meta property="article:tag" content="Interfaith Dialogue" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ptabdulrahman" />
      <meta name="twitter:creator" content="@ptabdulrahman" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="Dr. P.T. Abdul Rahman - Islamic Scholar and Educator" />
      
      {/* LinkedIn specific */}
      <meta property="linkedin:owner" content="dr-pt-abdul-rahman-mohd-52538a68" />
      
      {/* Additional Social Media */}
      <meta property="fb:app_id" content="your-facebook-app-id" />
      <meta property="fb:pages" content="your-facebook-page-id" />
      
      {/* Enhanced Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": `${canonicalUrl}#person`,
              "name": "Dr. P.T. Abdul Rahman",
              "alternateName": ["PT Abdul Rahman", "Dr. PT Abdul Rahman", "Abdul Rahman PT"],
              "description": "Distinguished Islamic scholar, educator, humanitarian, and founder of Darul Quran Abdulla Academy",
              "image": {
                "@type": "ImageObject",
                "url": imageUrl,
                "width": 1200,
                "height": 630
              },
              "url": canonicalUrl,
              "sameAs": [
                "https://linkedin.com/in/dr-pt-abdul-rahman-mohd-52538a68",
                "https://youtube.com/@dharmarekha",
                "https://www.facebook.com/abdulrahman.peetee",
                "https://instagram.com/drpt7"
              ],
              "jobTitle": "Founder Chairman",
              "worksFor": {
                "@type": "Organization",
                "@id": "https://www.darul-quran.com/#organization"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "University of Mysore",
                "location": "Mysore, India"
              },
              "knowsLanguage": ["Arabic", "English", "Malayalam", "Hindi", "Urdu", "Tamil"],
              "nationality": "Indian",
              "birthPlace": "Kerala, India",
              "award": [
                "Community Leadership Award UAE",
                "Educational Excellence Recognition",
                "Humanitarian Service Honor"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Islamic Scholar and Educator",
                "occupationLocation": "Dubai, UAE",
                "skills": ["Islamic Education", "Interfaith Dialogue", "Community Leadership", "Humanitarian Work"]
              }
            },
            {
              "@type": "Organization",
              "@id": "https://www.darul-quran.com/#organization",
              "name": "Darul Quran Abdulla Academy",
              "alternateName": "DQAA",
              "url": "https://www.darul-quran.com/",
              "logo": "https://www.ptabdulrahman.com/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png",
              "description": "Premier Islamic educational institution integrating Quranic memorization with modern academic excellence",
              "founder": {
                "@type": "Person",
                "@id": `${canonicalUrl}#person`
              },
              "foundingDate": "2013",
              "location": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "India",
                  "addressRegion": "Kerala"
                }
              },
              "educationalCredentialAwarded": "Hafiz Certification",
              "hasCredential": "Accredited Islamic Education Provider"
            },
            {
              "@type": "WebSite",
              "@id": `${canonicalUrl}#website`,
              "url": canonicalUrl,
              "name": "Dr. P.T. Abdul Rahman - Official Website",
              "description": description,
              "publisher": {
                "@type": "Person",
                "@id": `${canonicalUrl}#person`
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${canonicalUrl}search?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              },
              "inLanguage": ["en", "ar", "ml"]
            },
            {
              "@type": "ItemList",
              "name": "Dr. P.T. Abdul Rahman's Publications",
              "itemListElement": [
                {
                  "@type": "Book",
                  "position": 1,
                  "name": "Is the Creation Meaningless?",
                  "author": {
                    "@type": "Person",
                    "@id": `${canonicalUrl}#person`
                  },
                  "datePublished": "1995",
                  "inLanguage": ["English", "Arabic", "Malayalam"],
                  "genre": "Islamic Philosophy",
                  "publisher": "Islamic Publications",
                  "isbn": "978-XXXXXXXXX",
                  "numberOfPages": "250",
                  "bookFormat": "Paperback",
                  "description": "A profound philosophical exploration examining the divine purpose behind creation from an Islamic perspective"
                },
                {
                  "@type": "Book",
                  "position": 2,
                  "name": "Towards the Creator",
                  "author": {
                    "@type": "Person",
                    "@id": `${canonicalUrl}#person`
                  },
                  "datePublished": "2008",
                  "inLanguage": ["English", "Malayalam"],
                  "genre": "Islamic Spirituality"
                },
                {
                  "@type": "Book",
                  "position": 3,
                  "name": "The Address to Know How to Address",
                  "author": {
                    "@type": "Person",
                    "@id": `${canonicalUrl}#person`
                  },
                  "datePublished": "2015",
                  "inLanguage": ["English"],
                  "genre": "Islamic Ethics"
                }
              ]
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": canonicalUrl
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Biography",
                  "item": `${canonicalUrl}#biography`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Publications",
                  "item": `${canonicalUrl}#books`
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Timeline",
                  "item": `${canonicalUrl}#timeline`
                }
              ]
            }
          ]
        })}
      </script>
      
      {/* Performance and Technical SEO */}
      <meta name="theme-color" content="#1e3a8a" />
      <meta name="msapplication-TileColor" content="#1e3a8a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* DNS Prefetch and Preconnect */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Additional Technical Meta */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Dr. P.T. Abdul Rahman" />
      
      {/* Copyright and Legal */}
      <meta name="copyright" content="© 2024 Dr. P.T. Abdul Rahman. All rights reserved." />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
};

export default AggressiveSEO;
