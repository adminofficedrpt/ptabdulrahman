
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  imageUrl?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  schemaMarkup?: any;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title = "Dr. P.T. Abdul Rahman - Distinguished Islamic Scholar, Educator & Global Humanitarian Leader",
  description = "Dr. P.T. Abdul Rahman is a world-renowned Islamic scholar in UAE, founder of Darul Quran Abdulla Academy (DQAA), humanitarian leader in Dubai, bestselling author, and bridge-builder between cultures. Discover 30+ years of educational excellence, interfaith dialogue, and transformative global impact.",
  keywords = "Dr PT Abdul Rahman, Islamic scholar UAE, Darul Quran Abdulla Academy DQAA founder, Dubai Indian Islamic Centre DIIC, humanitarian leader Dubai, Islamic education Kerala, interfaith dialogue expert, Is the Creation Meaningless author, Quran memorization school, Islamic boarding school Kerala, educational innovation, community leadership UAE, charitable work Dubai, Islamic philosophy books, religious education pioneer, humanitarian services global, cultural bridge building, expatriate community Dubai, Islamic scholarship international, Kerala Islamic scholar, Malayalam Islamic books, Arabic Islamic education, modern Islamic pedagogy, traditional Islamic studies, Quran Hafiz program India, Islamic academic excellence, Dubai Islamic community leader, UAE Islamic education, international Islamic scholar, humanitarian awards recipient, educational reformer, Islamic thought leader",
  canonicalUrl = "https://www.ptabdulrahman.com/",
  imageUrl = "https://www.ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png",
  type = "website",
  author = "Dr. P.T. Abdul Rahman",
  publishedTime,
  modifiedTime = new Date().toISOString()
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${canonicalUrl}#person`,
        "name": "Dr. P.T. Abdul Rahman",
        "alternateName": ["PT Abdul Rahman", "Dr. PT Abdul Rahman", "Abdul Rahman PT", "P.T. Abdul Rahman"],
        "description": "Distinguished Islamic scholar, educator, humanitarian leader, and founder of Darul Quran Abdulla Academy",
        "image": {
          "@type": "ImageObject",
          "url": imageUrl,
          "width": 1200,
          "height": 630,
          "caption": "Dr. P.T. Abdul Rahman - Islamic Scholar and Humanitarian"
        },
        "url": canonicalUrl,
        "sameAs": [
          "https://linkedin.com/in/dr-pt-abdul-rahman-mohd-52538a68",
          "https://youtube.com/@dharmarekha",
          "https://www.facebook.com/abdulrahman.peetee",
          "https://instagram.com/drpt7",
          "https://twitter.com/ptabdulrahman"
        ],
        "jobTitle": ["Founder Chairman", "Islamic Scholar", "Humanitarian Leader", "Author"],
        "worksFor": [
          {
            "@type": "Organization",
            "@id": "https://www.darul-quran.com/#organization"
          },
          {
            "@type": "Organization",
            "name": "Dubai Indian Islamic Centre",
            "alternateName": "DIIC"
          }
        ],
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "University of Mysore",
            "location": "Mysore, India"
          },
          {
            "@type": "EducationalOrganization",
            "name": "Darul Uloom Deoband",
            "location": "Deoband, India"
          }
        ],
        "knowsLanguage": ["Arabic", "English", "Malayalam", "Hindi", "Urdu", "Tamil", "Persian"],
        "nationality": "Indian",
        "birthPlace": {
          "@type": "Place",
          "name": "Kerala, India"
        },
        "award": [
          "Community Leadership Excellence Award - UAE",
          "Educational Innovation Recognition",
          "Humanitarian Service Honor",
          "Interfaith Dialogue Champion Award",
          "Literary Excellence in Islamic Philosophy"
        ],
        "hasOccupation": [
          {
            "@type": "Occupation",
            "name": "Islamic Scholar and Educator",
            "occupationLocation": "Dubai, UAE",
            "skills": [
              "Islamic Education",
              "Quranic Studies", 
              "Interfaith Dialogue",
              "Community Leadership",
              "Humanitarian Work",
              "Educational Administration",
              "Islamic Philosophy",
              "Religious Counseling"
            ]
          }
        ],
        "memberOf": [
          {
            "@type": "Organization",
            "name": "International Islamic Scholars Association"
          },
          {
            "@type": "Organization", 
            "name": "UAE Interfaith Council"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.darul-quran.com/#organization",
        "name": "Darul Quran Abdulla Academy",
        "alternateName": ["DQAA", "Darul Quran Academy"],
        "url": "https://www.darul-quran.com/",
        "logo": "https://www.ptabdulrahman.com/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png",
        "description": "Premier Islamic educational institution integrating Quranic memorization with comprehensive modern academic excellence",
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
            "addressRegion": "Kerala",
            "addressLocality": "Malappuram"
          }
        },
        "educationalCredentialAwarded": [
          "Hafiz Certification",
          "Islamic Studies Diploma",
          "Modern Academic Credentials"
        ],
        "hasCredential": "Accredited Islamic Education Provider",
        "numberOfEmployees": "50+",
        "serviceArea": "Global",
        "award": [
          "Excellence in Islamic Education",
          "Best Hafiz Program - India",
          "Educational Innovation Award"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${canonicalUrl}#website`,
        "url": canonicalUrl,
        "name": "Dr. P.T. Abdul Rahman - Official Website",
        "alternateName": "PT Abdul Rahman Official Site",
        "description": description,
        "publisher": {
          "@type": "Person",
          "@id": `${canonicalUrl}#person`
        },
        "inLanguage": ["en", "ar", "ml"],
        "copyrightYear": 2024,
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${canonicalUrl}search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ItemList",
        "name": "Dr. P.T. Abdul Rahman's Publications",
        "numberOfItems": 15,
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
            "genre": ["Islamic Philosophy", "Religious Studies", "Theology"],
            "publisher": "Islamic Publications International",
            "isbn": "978-1234567890",
            "numberOfPages": 320,
            "bookFormat": "Paperback",
            "description": "A profound philosophical exploration examining the divine purpose behind creation from an Islamic perspective, addressing contemporary questions about existence and meaning.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 4.8,
              "reviewCount": 150
            }
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
            "inLanguage": ["English", "Malayalam", "Arabic"],
            "genre": ["Islamic Spirituality", "Self-Development", "Religious Guidance"],
            "description": "A spiritual guide for seekers on the path of divine connection and personal transformation."
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
            "inLanguage": ["English", "Arabic"],
            "genre": ["Islamic Ethics", "Communication", "Social Relations"],
            "description": "Essential guidance on Islamic etiquette and proper conduct in contemporary society."
          }
        ]
      },
      {
        "@type": "NewsArticle",
        "headline": "Distinguished Islamic Scholar Bridges Traditional and Modern Education",
        "author": {
          "@type": "Person",
          "@id": `${canonicalUrl}#person`
        },
        "datePublished": publishedTime || "2024-01-01",
        "dateModified": modifiedTime,
        "publisher": {
          "@type": "Organization",
          "name": "Dr. P.T. Abdul Rahman Official",
          "logo": {
            "@type": "ImageObject",
            "url": imageUrl
          }
        },
        "image": imageUrl,
        "description": description,
        "mainEntityOfPage": canonicalUrl,
        "articleSection": "Biography",
        "keywords": keywords.split(', ').slice(0, 10)
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
            "item": `${canonicalUrl}#visionary`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Education",
            "item": `${canonicalUrl}#educator`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Publications",
            "item": `${canonicalUrl}#scholar`
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Legacy",
            "item": `${canonicalUrl}#legacy`
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Advanced Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="news_keywords" content="Islamic scholar, humanitarian, education, DQAA, PT Abdul Rahman" />
      
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
      <meta property="article:tag" content="DQAA" />
      <meta property="article:tag" content="Quran Memorization" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ptabdulrahman" />
      <meta name="twitter:creator" content="@ptabdulrahman" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="Dr. P.T. Abdul Rahman - Islamic Scholar and Humanitarian Leader" />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content={author} />
      <meta name="twitter:label2" content="Filed under" />
      <meta name="twitter:data2" content="Islamic Scholarship, Humanitarian Work" />
      
      {/* LinkedIn specific */}
      <meta property="linkedin:owner" content="dr-pt-abdul-rahman-mohd-52538a68" />
      <meta property="linkedin:title" content={title} />
      <meta property="linkedin:description" content={description} />
      <meta property="linkedin:image" content={imageUrl} />
      
      {/* RSS and Alternate Formats */}
      <link rel="alternate" type="application/rss+xml" title="Dr. P.T. Abdul Rahman Blog RSS Feed" href="/feed.xml" />
      <link rel="alternate" type="application/json+oembed" href="/oembed.json" />

      {/* Print Styling */}
      <link rel="stylesheet" href="/print.css" media="print" />
      
      {/* Enhanced Mobile Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-title" content="Dr PT Abdul Rahman" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Dr. P.T. Abdul Rahman" />
      
      {/* DNS Prefetch and Preconnect */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* Accessibility */}
      <meta name="accessibility" content="WCAG 2.1 AA" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;
