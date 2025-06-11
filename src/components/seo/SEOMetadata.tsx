
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOMetadata = () => {
  return (
    <Helmet>
      {/* Core SEO */}
      <title>Dr. P.T. Abdul Rahman - Islamic Scholar, Author & Educational Innovator | Official Biography</title>
      <meta name="description" content="Dr. P.T. Abdul Rahman (born 1960) is a distinguished Islamic scholar, author of 15+ books, founder of Darul Quran Abdulla Academy (DQAA), and UAE Golden Visa recipient. M.A. Sociology from University of Mysore. Established Dubai Indian Islamic Centre (DIIC) in 1992. Known for 'Is the Creation Meaningless?' and humanitarian work across UAE and Kerala." />
      <meta name="keywords" content="Dr PT Abdul Rahman, P.T. Abdul Rahman, Islamic scholar UAE, DQAA founder, Darul Quran Abdulla Academy, Dubai Indian Islamic Centre, DIIC, UAE Golden Visa, Is the Creation Meaningless, University of Mysore, Malayalam author, Khaleej Times, Gulf News, humanitarian Dubai, Arabic instructor, interfaith dialogue, Islamic education Kerala, Hafiz program, Quran memorization, educational innovation" />
      <meta name="author" content="Dr. P.T. Abdul Rahman" />
      
      {/* Canonical and language */}
      <link rel="canonical" href="https://www.ptabdulrahman.com/" />
      <html lang="en" />
      
      {/* Robots and indexing */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph / Social Media - Enhanced */}
      <meta property="og:type" content="profile" />
      <meta property="og:site_name" content="Dr. P.T. Abdul Rahman - Official Website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content="https://www.ptabdulrahman.com/" />
      <meta property="og:title" content="Dr. P.T. Abdul Rahman - Islamic Scholar, Author & UAE Golden Visa Recipient" />
      <meta property="og:description" content="Distinguished Islamic scholar with M.A. Sociology from University of Mysore. Author of 15+ books including 'Is the Creation Meaningless?'. Founder of DQAA and DIIC. UAE Golden Visa recipient with 30+ years of community service." />
      <meta property="og:image" content="https://www.ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Dr. P.T. Abdul Rahman - Distinguished Islamic Scholar and Educational Innovator" />
      <meta property="og:image:type" content="image/png" />
      
      {/* Twitter Card - Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dr. P.T. Abdul Rahman - Islamic Scholar & Educational Innovator" />
      <meta name="twitter:description" content="M.A. Sociology, University of Mysore. Author of 15+ books. Founder of DQAA & DIIC. UAE Golden Visa recipient. 30+ years humanitarian service." />
      <meta name="twitter:image" content="https://www.ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
      <meta name="twitter:image:alt" content="Dr. P.T. Abdul Rahman portrait" />
      
      {/* Enhanced Person Schema for Wikipedia optimization */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://www.ptabdulrahman.com/#person",
            "name": "Dr. P.T. Abdul Rahman",
            "alternateName": ["PT Abdul Rahman", "Abdul Rahman P.T.", "Dr. PT Abdul Rahman", "P.T. Abdul Rahman"],
            "description": "Islamic scholar, author, and educational innovator. Founder of Darul Quran Abdulla Academy and Dubai Indian Islamic Centre. UAE Golden Visa recipient.",
            "image": "https://www.ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png",
            "url": "https://www.ptabdulrahman.com/",
            "birthDate": "1960",
            "birthPlace": {
              "@type": "Place",
              "name": "Kerala, India",
              "addressCountry": "IN",
              "addressRegion": "Kerala"
            },
            "nationality": "Indian",
            "gender": "Male",
            "sameAs": [
              "https://linkedin.com/in/dr-pt-abdul-rahman-mohd-52538a68",
              "https://youtube.com/@dharmarekha",
              "https://www.facebook.com/abdulrahman.peetee",
              "https://instagram.com/drpt7",
              "https://www.darul-quran.com"
            ],
            "jobTitle": ["Islamic Scholar", "Author", "Educational Innovator", "Humanitarian Leader", "Founder Chairman"],
            "hasOccupation": [
              {
                "@type": "Occupation",
                "name": "Islamic Scholar",
                "occupationLocation": {
                  "@type": "Place",
                  "name": "UAE"
                }
              },
              {
                "@type": "Occupation",
                "name": "Author",
                "occupationLocation": {
                  "@type": "Place",
                  "name": "International"
                }
              },
              {
                "@type": "Occupation",
                "name": "Educational Administrator",
                "occupationLocation": {
                  "@type": "Place",
                  "name": "Kerala, India"
                }
              },
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
                "foundingDate": "2013",
                "location": {
                  "@type": "Place",
                  "name": "Kerala, India"
                }
              },
              {
                "@type": "Organization",
                "name": "Dubai Indian Islamic Centre",
                "foundingDate": "1992",
                "location": {
                  "@type": "Place",
                  "name": "Dubai, UAE"
                }
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
                "location": {
                  "@type": "Place",
                  "name": "Mysore, Karnataka, India"
                }
              }
            ],
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "degree",
                "educationalLevel": "Master's Degree",
                "name": "Master of Arts in Sociology",
                "dateReceived": "1985",
                "recognizedBy": {
                  "@type": "EducationalOrganization",
                  "name": "University of Mysore",
                  "location": "Mysore, Karnataka, India"
                }
              }
            ],
            "knowsLanguage": [
              {
                "@type": "Language",
                "name": "Arabic",
                "proficiencyLevel": "Professional"
              },
              {
                "@type": "Language", 
                "name": "English",
                "proficiencyLevel": "Fluent"
              },
              {
                "@type": "Language",
                "name": "Malayalam",
                "proficiencyLevel": "Native"
              },
              {
                "@type": "Language",
                "name": "Hindi",
                "proficiencyLevel": "Fluent"
              },
              {
                "@type": "Language",
                "name": "Urdu",
                "proficiencyLevel": "Proficient"
              },
              {
                "@type": "Language",
                "name": "Tamil",
                "proficiencyLevel": "Conversational"
              }
            ],
            "award": [
              {
                "@type": "Award",
                "name": "UAE Golden Visa",
                "dateReceived": "2021",
                "description": "Recognition for exceptional contributions to cultural and educational development",
                "awarder": {
                  "@type": "GovernmentOrganization",
                  "name": "UAE Government - Federal Authority for Identity and Citizenship"
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
              },
              {
                "@type": "Award",
                "name": "Community Service Excellence",
                "dateReceived": "2018",
                "awarder": {
                  "@type": "GovernmentOrganization",
                  "name": "Dubai Municipality - Community Development Authority"
                }
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
              },
              {
                "@type": "Organization",
                "name": "Arabic Literary Society, UAE"
              }
            ],
            "mainEntityOfPage": "https://www.ptabdulrahman.com/"
          }
        `}
      </script>

      {/* Enhanced Book Collection Schema */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Published Works by Dr. P.T. Abdul Rahman",
            "description": "Complete bibliography of books and publications by Dr. P.T. Abdul Rahman",
            "numberOfItems": 15,
            "itemListElement": [
              {
                "@type": "Book",
                "position": 1,
                "name": "Is the Creation Meaningless?",
                "alternateName": "സൃഷ്ടി അർത്ഥശൂന്യമാണോ?",
                "author": {
                  "@type": "Person",
                  "@id": "https://www.ptabdulrahman.com/#person"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Department of Islamic Affairs, UAE"
                },
                "datePublished": "1995",
                "inLanguage": ["en", "ar", "ml"],
                "isbn": "978-971-000-000-0",
                "numberOfPages": 324,
                "genre": ["Islamic Philosophy", "Theology", "Religious Studies"],
                "about": ["Islamic Philosophy", "Theology", "Meaning of Life", "Creation", "Purpose"],
                "description": "A comprehensive Islamic perspective on the purpose and meaning of creation and existence",
                "url": "https://www.ptabdulrahman.com/books/is-the-creation-meaningless"
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
                "inLanguage": ["en", "ml"],
                "isbn": "978-971-000-001-0",
                "numberOfPages": 256,
                "genre": ["Spirituality", "Islamic Guidance", "Self-Development"],
                "about": ["Spirituality", "Islamic Guidance", "Self-Development", "Faith"],
                "description": "A guide to spiritual development and drawing closer to the Creator",
                "url": "https://www.ptabdulrahman.com/books/towards-the-creator"
              },
              {
                "@type": "Book",
                "position": 3,
                "name": "The Sun of Scholars",
                "alternateName": "شمس العلماء",
                "author": {
                  "@type": "Person",
                  "@id": "https://www.ptabdulrahman.com/#person"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Arabic Literature Society"
                },
                "datePublished": "2015",
                "inLanguage": "ar",
                "isbn": "978-971-000-002-0",
                "numberOfPages": 404,
                "genre": ["Biography", "Islamic Scholarship", "Historical Documentation"],
                "about": ["Biography", "Islamic Scholarship", "Historical Documentation"],
                "description": "Biographical work documenting Islamic scholarly traditions",
                "url": "https://www.ptabdulrahman.com/books/the-sun-of-scholars"
              },
              {
                "@type": "Book",
                "position": 4,
                "name": "The Address to Know How to Address",
                "author": {
                  "@type": "Person",
                  "@id": "https://www.ptabdulrahman.com/#person"
                },
                "datePublished": "2018",
                "inLanguage": "en",
                "genre": ["Communication", "Islamic Etiquette", "Social Guidance"],
                "description": "Guide to proper communication and addressing in Islamic context",
                "url": "https://www.ptabdulrahman.com/books/the-address-to-know-how-to-address"
              }
            ]
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
            "alternateName": ["DQAA", "Darul Quran Academy"],
            "url": "https://www.darul-quran.com/",
            "logo": "https://www.ptabdulrahman.com/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png",
            "description": "Innovative Islamic educational institution integrating traditional Quranic studies with modern academic curricula. Established in 2013 by Dr. P.T. Abdul Rahman.",
            "founder": {
              "@type": "Person",
              "@id": "https://www.ptabdulrahman.com/#person"
            },
            "foundingDate": "2013",
            "location": {
              "@type": "Place",
              "name": "Kerala, India",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "Kerala"
              }
            },
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "name": "Government Recognition",
                "recognizedBy": {
                  "@type": "GovernmentOrganization",
                  "name": "Government of Kerala"
                }
              }
            ],
            "offers": [
              {
                "@type": "Course",
                "name": "Hafiz Program",
                "description": "Comprehensive Quran memorization program"
              },
              {
                "@type": "Course",
                "name": "Islamic Studies",
                "description": "Traditional Islamic education curriculum"
              },
              {
                "@type": "Course",
                "name": "Modern Academic Subjects",
                "description": "Contemporary academic subjects alongside Islamic studies"
              }
            ],
            "sameAs": [
              "https://www.darul-quran.com/"
            ]
          }
        `}
      </script>

      {/* Media Coverage Schema for verification */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Media Coverage of Dr. P.T. Abdul Rahman",
            "description": "Documented media coverage from international publications",
            "itemListElement": [
              {
                "@type": "NewsArticle",
                "position": 1,
                "headline": "Book presents Islamic view on creation",
                "url": "https://www.khaleejtimes.com/uae/book-presents-islamic-view-on-creation",
                "datePublished": "2018-10-15",
                "publisher": {
                  "@type": "NewsMediaOrganization",
                  "name": "Khaleej Times",
                  "url": "https://www.khaleejtimes.com"
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
                  "name": "Gulf News",
                  "url": "https://gulfnews.com"
                },
                "about": {
                  "@type": "Person",
                  "@id": "https://www.ptabdulrahman.com/#person"
                }
              },
              {
                "@type": "NewsArticle",
                "position": 3,
                "headline": "DIIC to hold free medical camp in Ajman",
                "url": "https://www.khaleejtimes.com/uae/diic-to-hold-free-medical-camp-in-ajman",
                "datePublished": "2021-09-08",
                "publisher": {
                  "@type": "NewsMediaOrganization",
                  "name": "Khaleej Times"
                }
              }
            ]
          }
        `}
      </script>

      {/* Website Schema */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.ptabdulrahman.com/#website",
            "url": "https://www.ptabdulrahman.com/",
            "name": "Dr. P.T. Abdul Rahman Official Website",
            "description": "Official website of Dr. P.T. Abdul Rahman, distinguished Islamic scholar, author, and founder of DQAA",
            "publisher": {
              "@type": "Person",
              "@id": "https://www.ptabdulrahman.com/#person"
            },
            "inLanguage": ["en-US", "ar", "ml"],
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.ptabdulrahman.com/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </script>

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.ptabdulrahman.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Biography",
                "item": "https://www.ptabdulrahman.com/#biography"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Books",
                "item": "https://www.ptabdulrahman.com/#books"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "DQAA",
                "item": "https://www.ptabdulrahman.com/#dqaa"
              }
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEOMetadata;
