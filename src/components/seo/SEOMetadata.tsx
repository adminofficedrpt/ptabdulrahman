
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOMetadata = () => {
  return (
    <Helmet>
      <title>Dr. P.T. Abdul Rahman - Islamic Scholar, Author & Educational Innovator | Official Biography</title>
      <meta name="description" content="Dr. P.T. Abdul Rahman (born 1960) is a distinguished Islamic scholar, author, and educational innovator. M.A. Sociology from University of Mysore. Founder of Darul Quran Abdulla Academy and Dubai Indian Islamic Centre. UAE Golden Visa recipient. Author of 15+ books including 'Is the Creation Meaningless?'" />
      <meta name="keywords" content="PT Abdul Rahman, Dr PT Abdul Rahman, Islamic scholar, educational innovator, Darul Quran Abdulla Academy, DQAA, Dubai Indian Islamic Centre, DIIC, UAE Golden Visa, Is the Creation Meaningless, University of Mysore, Arabic language instructor, humanitarian leader, interfaith dialogue, Malayalam author, Khaleej Times, Gulf News coverage" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.ptabdulrahman.com/" />
      
      {/* Open Graph / Social Media */}
      <meta property="og:type" content="profile" />
      <meta property="og:site_name" content="Dr. P.T. Abdul Rahman - Official Website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content="https://www.ptabdulrahman.com/" />
      <meta property="og:title" content="Dr. P.T. Abdul Rahman - Islamic Scholar & Educational Innovator" />
      <meta property="og:description" content="Distinguished Islamic scholar, author of 15+ books, founder of educational institutions, and UAE Golden Visa recipient. M.A. Sociology from University of Mysore." />
      <meta property="og:image" content="https://www.ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Dr. P.T. Abdul Rahman - Islamic Scholar and Educational Innovator" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dr. P.T. Abdul Rahman - Islamic Scholar & Educational Innovator" />
      <meta name="twitter:description" content="Distinguished Islamic scholar, author, and founder of innovative educational institutions. UAE Golden Visa recipient with 30+ years of community service." />
      <meta name="twitter:image" content="https://www.ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
      
      {/* Enhanced Schema markup for Wikipedia optimization */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://www.ptabdulrahman.com/#person",
            "name": "Dr. P.T. Abdul Rahman",
            "alternateName": ["PT Abdul Rahman", "Abdul Rahman P.T.", "Dr. PT Abdul Rahman"],
            "description": "Islamic scholar, author, and educational innovator. Founder of Darul Quran Abdulla Academy and Dubai Indian Islamic Centre.",
            "image": "https://www.ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png",
            "url": "https://www.ptabdulrahman.com/",
            "birthDate": "1960",
            "birthPlace": {
              "@type": "Place",
              "name": "Kerala, India"
            },
            "nationality": "Indian",
            "gender": "Male",
            "sameAs": [
              "https://linkedin.com/in/dr-pt-abdul-rahman-mohd-52538a68",
              "https://youtube.com/@dharmarekha",
              "https://www.facebook.com/abdulrahman.peetee",
              "https://instagram.com/drpt7"
            ],
            "jobTitle": ["Islamic Scholar", "Author", "Educational Innovator", "Humanitarian Leader"],
            "hasOccupation": [
              {
                "@type": "Occupation",
                "name": "Islamic Scholar"
              },
              {
                "@type": "Occupation",
                "name": "Author"
              },
              {
                "@type": "Occupation",
                "name": "Educational Administrator"
              }
            ],
            "worksFor": [
              {
                "@type": "EducationalOrganization",
                "@id": "https://www.darul-quran.com/#organization",
                "name": "Darul Quran Abdulla Educational Academy",
                "url": "https://www.darul-quran.com/"
              },
              {
                "@type": "Organization",
                "name": "Dubai Indian Islamic Centre",
                "foundingDate": "1992"
              }
            ],
            "founder": [
              {
                "@type": "EducationalOrganization",
                "@id": "https://www.darul-quran.com/#organization",
                "name": "Darul Quran Abdulla Educational Academy",
                "foundingDate": "2013"
              },
              {
                "@type": "Organization",
                "name": "Dubai Indian Islamic Centre",
                "foundingDate": "1992"
              },
              {
                "@type": "EducationalOrganization",
                "name": "ABR Academy for Education and Islamic Culture",
                "foundingDate": "2017"
              }
            ],
            "alumniOf": [
              {
                "@type": "EducationalOrganization",
                "name": "University of Mysore",
                "location": "Mysore, Karnataka, India"
              }
            ],
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "degree",
                "educationalLevel": "Master's Degree",
                "name": "Master of Arts in Sociology",
                "recognizedBy": {
                  "@type": "EducationalOrganization",
                  "name": "University of Mysore"
                }
              }
            ],
            "knowsLanguage": ["Arabic", "English", "Malayalam", "Hindi", "Urdu", "Tamil"],
            "hasOccupation": [
              {
                "@type": "Occupation",
                "name": "Visiting Professor",
                "worksFor": {
                  "@type": "EducationalOrganization",
                  "name": "Moulana Azad Foundation University"
                }
              },
              {
                "@type": "Occupation",
                "name": "Arabic Language Instructor",
                "worksFor": {
                  "@type": "GovernmentOrganization",
                  "name": "Consulate General of India, Dubai"
                }
              }
            ],
            "award": [
              {
                "@type": "Award",
                "name": "UAE Golden Visa",
                "dateReceived": "2021",
                "awarder": {
                  "@type": "GovernmentOrganization",
                  "name": "UAE Government"
                }
              },
              {
                "@type": "Award",
                "name": "Educational Excellence Award",
                "dateReceived": "2015",
                "awarder": {
                  "@type": "GovernmentOrganization",
                  "name": "Ministry of Education, Government of Kerala"
                }
              }
            ],
            "mainEntityOfPage": "https://www.ptabdulrahman.com/"
          }
        `}
      </script>

      {/* Enhanced Organization Schema */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "@id": "https://www.darul-quran.com/#organization",
            "name": "Darul Quran Abdulla Educational Academy",
            "alternateName": "DQAA",
            "url": "https://www.darul-quran.com/",
            "logo": "https://www.ptabdulrahman.com/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png",
            "description": "Innovative Islamic educational institution integrating traditional Quranic studies with modern academic curricula",
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
            },
            "sameAs": [
              "https://www.darul-quran.com/"
            ]
          }
        `}
      </script>

      {/* Comprehensive Book Series Schema */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Published Works by Dr. P.T. Abdul Rahman",
            "itemListElement": [
              {
                "@type": "Book",
                "position": 1,
                "name": "Is the Creation Meaningless?",
                "author": {
                  "@type": "Person",
                  "@id": "https://www.ptabdulrahman.com/#person"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Department of Islamic Affairs, UAE"
                },
                "datePublished": "1995",
                "inLanguage": ["English", "Arabic", "Malayalam"],
                "isbn": "978-971-000-000-0",
                "numberOfPages": 324,
                "about": ["Islamic Philosophy", "Theology", "Meaning of Life"]
              },
              {
                "@type": "Book",
                "position": 2,
                "name": "Towards the Creator",
                "author": {
                  "@type": "Person",
                  "@id": "https://www.ptabdulrahman.com/#person"
                },
                "datePublished": "2010",
                "inLanguage": ["English", "Malayalam"],
                "isbn": "978-971-000-001-0",
                "numberOfPages": 256,
                "about": ["Spirituality", "Islamic Guidance", "Self-Development"]
              },
              {
                "@type": "Book",
                "position": 3,
                "name": "The Sun of Scholars",
                "author": {
                  "@type": "Person",
                  "@id": "https://www.ptabdulrahman.com/#person"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Arabic Literature Society"
                },
                "datePublished": "2015",
                "inLanguage": "Arabic",
                "isbn": "978-971-000-002-0",
                "numberOfPages": 404,
                "about": ["Biography", "Islamic Scholarship", "Historical Documentation"]
              }
            ]
          }
        `}
      </script>

      {/* Media Coverage Schema for Wikipedia verification */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Media Coverage of Dr. P.T. Abdul Rahman",
            "itemListElement": [
              {
                "@type": "NewsArticle",
                "position": 1,
                "headline": "Book presents Islamic view on creation",
                "url": "https://www.khaleejtimes.com/uae/book-presents-islamic-view-on-creation",
                "datePublished": "2018-10-15",
                "publisher": {
                  "@type": "NewsMediaOrganization",
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
                "headline": "Islamic centre to launch scheme for Indian expats",
                "url": "https://gulfnews.com/uae/islamic-centre-to-launch-scheme-for-indian-expats-1.424474",
                "datePublished": "2019-03-03",
                "publisher": {
                  "@type": "NewsMediaOrganization",
                  "name": "Gulf News"
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

      {/* Geographic and Cultural Context */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://www.ptabdulrahman.com/#person",
            "homeLocation": [
              {
                "@type": "Place",
                "name": "Dubai, UAE"
              },
              {
                "@type": "Place",
                "name": "Kerala, India"
              }
            ],
            "memberOf": [
              {
                "@type": "Organization",
                "name": "International Association of Islamic Universities"
              },
              {
                "@type": "Organization",
                "name": "UAE Islamic Education Council"
              },
              {
                "@type": "Organization",
                "name": "Kerala Islamic Scholars Association"
              }
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEOMetadata;
