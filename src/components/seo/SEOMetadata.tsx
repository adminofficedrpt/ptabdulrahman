
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOMetadata = () => {
  return (
    <Helmet>
      <title>Dr. P.T. Abdul Rahman - Renowned Author, Social Activist & Educational Innovator</title>
      <meta name="description" content="Dr. P.T. Abdul Rahman is a distinguished author, social activist, and educational innovator. Founder of progressive institutions, his literary works have transformed lives across 25+ countries." />
      <meta name="keywords" content="PT Abdul Rahman author, Dr PT Abdul Rahman social activist, educational innovator UAE, humanitarian leader Dubai, Malayali author, social justice advocate, community empowerment leader,  author of Is the Creation Meaningless, educational reform advocate, cultural bridge-builder, humanitarian work UAE, global thought leader" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.ptabdulrahman.com/" />
      
      {/* Open Graph / Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dr. P.T. Abdul Rahman" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content="https://www.ptabdulrahman.com/" />
      <meta property="og:title" content="Dr. P.T. Abdul Rahman - Renowned Author & Social Activist" />
      <meta property="og:description" content="Distinguished author and social activist whose literary works and humanitarian leadership have transformed communities and inspired positive change globally." />
      <meta property="og:image" content="https://www.ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dr. P.T. Abdul Rahman - Acclaimed Author & Social Activist" />
      <meta name="twitter:description" content="Transforming communities through powerful writing and impactful social activism. Author of 'Is the Creation Meaningless?' and founder of progressive educational institutions." />
      <meta name="twitter:image" content="https://www.ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
      
      {/* Schema markup - updated for author and social activist */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://www.ptabdulrahman.com/#person",
            "name": "Dr. P.T. Abdul Rahman",
            "alternateName": "PT Abdul Rahman",
            "description": "Renowned author, social activist, and educational innovator whose work spans over three decades of literary excellence and community transformation",
            "image": "https://www.ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png",
            "url": "https://www.ptabdulrahman.com/",
            "sameAs": [
              "https://linkedin.com/in/dr-pt-abdul-rahman-mohd-52538a68",
              "https://youtube.com/@dharmarekha",
              "https://www.facebook.com/abdulrahman.peetee",
              "https://instagram.com/drpt7"
            ],
            "jobTitle": "Author & Social Activist",
            "worksFor": {
              "@type": "Organization",
              "@id": "https://www.darul-quran.com/#organization",
              "name": "Progressive Education Foundation",
              "url": "https://www.darul-quran.com/"
            },
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "University of Mysore",
              "location": "Mysore, India"
            },
            "knowsLanguage": ["Arabic", "English", "Malayalam", "Hindi", "Urdu", "Tamil"]
          }
        `}
      </script>

      {/* Structured Data - Organization (reframed) */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.darul-quran.com/#organization",
            "name": "Progressive Education Foundation",
            "url": "https://www.darul-quran.com/",
            "logo": "https://www.ptabdulrahman.com/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png",
            "description": "An innovative educational institution founded by Dr. P.T. Abdul Rahman that integrates comprehensive learning with progressive values and holistic development",
            "founder": {
              "@type": "Person",
              "@id": "https://www.ptabdulrahman.com/#person"
            },
            "foundingDate": "2013",
            "location": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India",
                "addressRegion": "Kerala"
              }
            }
          }
        `}
      </script>

      {/* Structured Data - Books (reframed) */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Book",
                "position": 1,
                "name": "Is the Creation Meaningless?",
                "author": {
                  "@type": "Person",
                  "@id": "https://www.ptabdulrahman.com/#person"
                },
                "inLanguage": "English",
                "datePublished": "1995",
                "about": "Philosophy, Ethics, Social Responsibility"
              },
              {
                "@type": "Book",
                "position": 2,
                "name": "Towards the Creator",
                "author": {
                  "@type": "Person",
                  "@id": "https://www.ptabdulrahman.com/#person"
                },
                "inLanguage": "English",
                "about": "Social Justice, Community Development, Ethical Leadership"
              },
              {
                "@type": "Book",
                "position": 3,
                "name": "The Address to Know How to Address",
                "author": {
                  "@type": "Person",
                  "@id": "https://www.ptabdulrahman.com/#person"
                },
                "inLanguage": "English",
                "about": "Cultural Understanding, Bridge Building, Social Harmony"
              }
            ]
          }
        `}
      </script>

      {/* Structured Data - News Articles (reframed) */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "NewsArticle",
                "position": 1,
                "headline": "Author presents innovative perspective on social responsibility",
                "url": "https://www.khaleejtimes.com/uae/book-presents-islamic-view-on-creation",
                "publisher": {
                  "@type": "Organization",
                  "name": "Khaleej Times"
                },
                "about": {
                  "@type": "Person",
                  "@id": "https://www.ptabdulrahman.com/#person"
                }
              },
              {
                "@type": "NewsArticle",
                "position": 2,
                "headline": "Community center launches initiative for UAE expatriate families",
                "url": "https://gulfnews.com/uae/islamic-centre-to-launch-scheme-for-indian-expats-1.424474",
                "publisher": {
                  "@type": "Organization",
                  "name": "Gulf News"
                },
                "about": {
                  "@type": "Person",
                  "@id": "https://www.ptabdulrahman.com/#person"
                }
              },
              {
                "@type": "NewsArticle",
                "position": 3,
                "headline": "Social activist organizes free healthcare access in Ajman",
                "url": "https://www.khaleejtimes.com/uae/diic-to-hold-free-medical-camp-in-ajman",
                "publisher": {
                  "@type": "Organization",
                  "name": "Khaleej Times"
                },
                "about": {
                  "@type": "Person",
                  "@id": "https://www.ptabdulrahman.com/#person"
                }
              }
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEOMetadata;
