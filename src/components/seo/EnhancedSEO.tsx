
import { Helmet } from 'react-helmet-async';

const EnhancedSEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. P.T. Abdul Rahman",
    "alternateName": ["PT Abdul Rahman", "P.T. Abdul Rahman", "Dr. PT Abdul Rahman"],
    "description": "Visionary educator, humanitarian leader, and founder of Darul Quran Abdulla Academy. M.A. in Sociology from University of Mysore, multilingual author of 15+ books, with over 30 years of transformative service across UAE and India.",
    "url": "https://ptabdulrahman.com",
    "image": "https://ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png",
    "sameAs": [
      "https://www.facebook.com/ptabdulrahman.official",
      "https://www.instagram.com/ptabdulrahman",
      "https://www.youtube.com/@ptabdulrahman",
      "https://linkedin.com/in/dr-pt-abdul-rahman-mohd-52538a68"
    ],
    "jobTitle": "Visionary Educator & Humanitarian Leader",
    "birthPlace": {
      "@type": "Place",
      "name": "Kerala, India"
    },
    "nationality": "Indian",
    "worksFor": [
      {
        "@type": "EducationalOrganization", 
        "name": "Darul Quran Abdulla Educational Academy",
        "alternateName": "DQAA",
        "foundingDate": "2013",
        "founder": {
          "@type": "Person",
          "name": "Dr. P.T. Abdul Rahman"
        },
        "location": {
          "@type": "Place",
          "name": "Kerala, India"
        },
        "description": "Revolutionary educational institution bridging traditional values with modern pedagogical excellence"
      },
      {
        "@type": "EducationalOrganization", 
        "name": "ABR Academy for Education and Islamic Culture",
        "foundingDate": "2017",
        "founder": {
          "@type": "Person",
          "name": "Dr. P.T. Abdul Rahman"
        }
      },
      {
        "@type": "Organization", 
        "name": "Indian Islamic Center Dubai",
        "foundingDate": "1992",
        "founder": {
          "@type": "Person",
          "name": "Dr. P.T. Abdul Rahman"
        },
        "location": {
          "@type": "Place",
          "name": "Dubai, United Arab Emirates"
        }
      }
    ],
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "Arabic"
      },
      {
        "@type": "Language", 
        "name": "English"
      },
      {
        "@type": "Language",
        "name": "Hindi"
      },
      {
        "@type": "Language",
        "name": "Urdu"
      },
      {
        "@type": "Language",
        "name": "Malayalam"
      },
      {
        "@type": "Language",
        "name": "Tamil"
      }
    ],
    "educationalCredentials": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "educationalLevel": "Master's Degree",
      "about": "M.A. in Sociology",
      "recognizedBy": {
        "@type": "EducationalOrganization",
        "name": "University of Mysore",
        "location": {
          "@type": "Place",
          "name": "Mysore, Karnataka, India"
        }
      }
    },
    "knowsAbout": [
      "Educational Innovation",
      "Humanitarian Leadership", 
      "Community Development",
      "Institutional Building",
      "Arabic-English Translation",
      "Multilingual Education",
      "Social Work",
      "Author and Publishing",
      "Interfaith Dialogue",
      "Islamic Studies",
      "Sociology",
      "Administrative Leadership"
    ],
    "award": [
      {
        "@type": "Award",
        "name": "Dubai Government Golden Visa",
        "description": "Awarded for significant social contributions to UAE community development",
        "awarder": {
          "@type": "GovernmentOrganization",
          "name": "Government of Dubai"
        }
      },
      {
        "@type": "Award",
        "name": "Recognition from Islamic Affairs Department",
        "awarder": {
          "@type": "GovernmentOrganization",
          "name": "Department of Islamic Affairs, UAE"
        }
      }
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Mysore",
      "location": {
        "@type": "Place",
        "name": "Mysore, Karnataka, India"
      }
    },
    "hasOccupation": [
      {
        "@type": "Occupation",
        "name": "Administrator",
        "description": "Central Military Command, U.A.E",
        "occupationLocation": {
          "@type": "Place",
          "name": "United Arab Emirates"
        },
        "startDate": "1992",
        "endDate": "1996"
      },
      {
        "@type": "Occupation", 
        "name": "Researcher",
        "description": "Department of Islamic Affairs",
        "occupationLocation": {
          "@type": "Place",
          "name": "United Arab Emirates"
        },
        "startDate": "1996",
        "endDate": "2005"
      },
      {
        "@type": "Occupation",
        "name": "Educational Leader & Founder",
        "description": "Founder and President of multiple educational institutions",
        "startDate": "2013"
      },
      {
        "@type": "Occupation",
        "name": "Author & Publisher",
        "description": "Multilingual author of 15+ books across philosophy, education, and Islamic studies"
      },
      {
        "@type": "Occupation",
        "name": "Visiting Lecturer",
        "description": "Universities and educational institutions across India and UAE"
      }
    ],
    "founder": [
      {
        "@type": "EducationalOrganization",
        "name": "Darul Quran Abdulla Educational Academy",
        "foundingDate": "2013",
        "location": {
          "@type": "Place",
          "name": "Kerala, India"
        }
      },
      {
        "@type": "Organization",
        "name": "Indian Islamic Center Dubai",
        "foundingDate": "1992",
        "location": {
          "@type": "Place",
          "name": "Dubai, United Arab Emirates"
        }
      },
      {
        "@type": "EducationalOrganization",
        "name": "ABR Academy for Education and Islamic Culture",
        "foundingDate": "2017"
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags - Optimized for Google Knowledge Panel */}
      <title>Dr. P.T. Abdul Rahman – Visionary Educator, Humanitarian Leader & Founder of DQAA Academy</title>
      <meta name="title" content="Dr. P.T. Abdul Rahman – Visionary Educator, Humanitarian Leader & Founder of DQAA Academy" />
      <meta 
        name="description" 
        content="Dr. P.T. Abdul Rahman: Visionary educator, humanitarian leader, and founder of DQAA Academy. M.A. Sociology from University of Mysore, multilingual author of 15+ books, 30+ years transformative service across UAE and India. Educational innovator bridging traditional values with modern excellence." 
      />
      <meta 
        name="keywords" 
        content="Dr PT Abdul Rahman, DQAA Academy founder, visionary educator Kerala, humanitarian leader UAE, M.A. Sociology University of Mysore, multilingual author, educational innovator, Indian Islamic Center Dubai, ABR Academy, Central Military Command UAE, Arabic English translator, interfaith dialogue, community development specialist" 
      />
      
      {/* Enhanced Professional Meta Tags */}
      <meta name="author" content="Dr. P.T. Abdul Rahman" />
      <meta name="publisher" content="AI8TY Creative Agency" />
      <meta name="category" content="Education, Humanitarian Leadership, Community Development" />
      <meta name="coverage" content="UAE, India, International" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="subject" content="Educational Innovation, Humanitarian Leadership, Institutional Building" />
      
      {/* Open Graph / Facebook - Enhanced for Professional Recognition */}
      <meta property="og:type" content="profile" />
      <meta property="og:url" content="https://ptabdulrahman.com/" />
      <meta property="og:title" content="Dr. P.T. Abdul Rahman – Visionary Educator & Humanitarian Leader" />
      <meta 
        property="og:description" 
        content="Founder of DQAA Academy, humanitarian leader with 30+ years of service. M.A. in Sociology, multilingual author of 15+ books, transformative educational innovator across UAE and India." 
      />
      <meta property="og:image" content="https://ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Dr. P.T. Abdul Rahman - Visionary Educator and Humanitarian Leader" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Dr. P.T. Abdul Rahman - Official Website" />
      <meta property="profile:first_name" content="P.T. Abdul" />
      <meta property="profile:last_name" content="Rahman" />

      {/* Twitter Card - Professional Optimization */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ptabdulrahman.com/" />
      <meta property="twitter:title" content="Dr. P.T. Abdul Rahman – Visionary Educator & Humanitarian Leader" />
      <meta 
        property="twitter:description" 
        content="Founder of DQAA Academy • M.A. Sociology • 15+ Published Books • 30+ Years Global Impact • Educational Innovator • Humanitarian Leader" 
      />
      <meta property="twitter:image" content="https://ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
      <meta property="twitter:creator" content="@ptabdulrahman" />

      {/* Enhanced Search Engine Optimization */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="3 days" />
      <meta name="classification" content="Biography, Education, Humanitarian Work, Institutional Leadership" />

      {/* Geographic and Professional Location Tags */}
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai, United Arab Emirates" />
      <meta name="geo.position" content="25.2048;55.2708" />
      <meta name="ICBM" content="25.2048, 55.2708" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://ptabdulrahman.com/" />

      {/* Structured Data - Main Person Schema */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Educational Organization Schema - DQAA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Darul Quran Abdulla Educational Academy",
          "alternateName": ["DQAA", "Darul Quran Academy"],
          "founder": {
            "@type": "Person",
            "name": "Dr. P.T. Abdul Rahman"
          },
          "foundingDate": "2013",
          "location": {
            "@type": "Place",
            "name": "Kerala, India"
          },
          "description": "Revolutionary educational institution bridging traditional Quranic studies with modern pedagogical excellence. Students represent India at international competitions including Dubai International Holy Quran Award.",
          "educationalCredentialAwarded": "Islamic Studies, Academic Excellence",
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certificate",
            "about": "Quranic Studies and Academic Excellence"
          }
        })}
      </script>

      {/* Website Schema with Professional Attribution */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Dr. P.T. Abdul Rahman - Official Website",
          "alternateName": "PT Abdul Rahman Official Site",
          "url": "https://ptabdulrahman.com",
          "description": "Official website of Dr. P.T. Abdul Rahman - Visionary Educator, Humanitarian Leader & Founder of DQAA Academy. Professional biography, publications, and institutional achievements.",
          "publisher": {
            "@type": "Organization",
            "name": "AI8TY Creative Agency",
            "url": "https://ai8ty.com"
          },
          "about": {
            "@type": "Person",
            "name": "Dr. P.T. Abdul Rahman"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ptabdulrahman.com/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>

      {/* Professional Publications Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Published Works by Dr. P.T. Abdul Rahman",
          "description": "Comprehensive collection of books and articles by Dr. P.T. Abdul Rahman spanning philosophy, education, and Islamic studies",
          "itemListElement": [
            {
              "@type": "Book",
              "position": 1,
              "name": "Is the Creation Meaningless?",
              "author": {
                "@type": "Person",
                "name": "Dr. P.T. Abdul Rahman"
              },
              "inLanguage": ["English", "Malayalam", "Arabic"],
              "datePublished": "1995",
              "publisher": {
                "@type": "Organization",
                "name": "Department of Islamic Affairs"
              },
              "genre": "Philosophy, Islamic Studies",
              "description": "Philosophical masterpiece exploring existential questions through Islamic perspective"
            },
            {
              "@type": "Book",
              "position": 2,
              "name": "The Sun of Scholars",
              "author": {
                "@type": "Person",
                "name": "Dr. P.T. Abdul Rahman"
              },
              "inLanguage": "Arabic",
              "datePublished": "2015",
              "numberOfPages": "404",
              "genre": "Biography, Islamic Studies",
              "description": "Comprehensive biographical work in Arabic literature"
            },
            {
              "@type": "Book",
              "position": 3,
              "name": "Towards the Creator",
              "author": {
                "@type": "Person",
                "name": "Dr. P.T. Abdul Rahman"
              },
              "inLanguage": ["English", "Malayalam"],
              "genre": "Spiritual Guidance, Philosophy",
              "description": "Spiritual guidance and philosophical insights for modern readers"
            }
          ]
        })}
      </script>

      {/* Professional Achievement Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Professional Achievements of Dr. P.T. Abdul Rahman",
          "itemListElement": [
            {
              "@type": "Achievement",
              "position": 1,
              "name": "Dubai Government Golden Visa",
              "description": "Recognition for significant social contributions to UAE community development",
              "achiever": {
                "@type": "Person",
                "name": "Dr. P.T. Abdul Rahman"
              },
              "dateAwarded": "2023"
            },
            {
              "@type": "Achievement",
              "position": 2,
              "name": "Founder of Multiple Educational Institutions",
              "description": "Established DQAA Academy, ABR Academy, and Indian Islamic Center Dubai",
              "achiever": {
                "@type": "Person",
                "name": "Dr. P.T. Abdul Rahman"
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;
