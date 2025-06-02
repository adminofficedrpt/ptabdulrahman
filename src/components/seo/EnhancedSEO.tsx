
import { Helmet } from 'react-helmet-async';

const EnhancedSEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. P.T. Abdul Rahman",
    "alternateName": ["PT Abdul Rahman", "P.T. Abdul Rahman"],
    "description": "Visionary educator and humanitarian leader from India. Founder of Darul Quran Abdulla Academy, multilingual author of 15+ books, and transformative community leader with over 30 years of service across UAE and India.",
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
        "@type": "Organization", 
        "name": "Darul Quran Abdulla Educational Academy",
        "foundingDate": "2013",
        "founder": {
          "@type": "Person",
          "name": "Dr. P.T. Abdul Rahman"
        }
      },
      {
        "@type": "Organization", 
        "name": "ABR Academy for Education and Islamic Culture",
        "foundingDate": "2017"
      },
      {
        "@type": "Organization", 
        "name": "Indian Islamic Center Dubai",
        "foundingDate": "1992"
      }
    ],
    "knowsLanguage": [
      "Arabic", "English", "Hindi", "Urdu", "Malayalam", "Tamil"
    ],
    "educationalCredentials": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "educationalLevel": "Master's Degree",
      "about": "M.A. in Sociology",
      "recognizedBy": {
        "@type": "EducationalOrganization",
        "name": "University of Mysore, India"
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
      "Interfaith Dialogue"
    ],
    "award": [
      "Dubai Government Golden Visa for Social Contributions",
      "Recognition from Islamic Affairs Department",
      "Appreciation from Dubai Shopping Festival",
      "Certificate from Dubai International Holy Quran Award",
      "Recognition from Dubai Police General Command",
      "Appreciation letter from Mrs. Sonia Gandhi"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Mysore",
      "location": "Mysore, India"
    },
    "hasOccupation": [
      {
        "@type": "Occupation",
        "name": "Administrator",
        "description": "Central Military Command, U.A.E (1992–1996)"
      },
      {
        "@type": "Occupation", 
        "name": "Researcher",
        "description": "Department of Islamic Affairs (1996–2005)"
      },
      {
        "@type": "Occupation",
        "name": "Educational Leader & Founder",
        "description": "Founder of DQAA Academy (2013), ABR Academy (2017), and Indian Islamic Center (1992)"
      },
      {
        "@type": "Occupation",
        "name": "Author & Publisher",
        "description": "Multilingual author of 15+ books including 'Is the Creation Meaningless?' and 'The Sun of Scholars'"
      }
    ],
    "founder": [
      {
        "@type": "Organization",
        "name": "Darul Quran Abdulla Educational Academy",
        "foundingDate": "2013"
      },
      {
        "@type": "Organization",
        "name": "Indian Islamic Center Dubai",
        "foundingDate": "1992"
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags - Optimized for Google Knowledge Panel */}
      <title>Dr. P.T. Abdul Rahman – Visionary Educator, Humanitarian Leader & Founder of DQAA</title>
      <meta name="title" content="Dr. P.T. Abdul Rahman – Visionary Educator, Humanitarian Leader & Founder of DQAA" />
      <meta 
        name="description" 
        content="Official site of Dr. P.T. Abdul Rahman, visionary educator, humanitarian leader, and founder of Darul Quran Abdulla Academy. M.A. in Sociology from University of Mysore, multilingual author of 15+ books, with 30+ years of transformative service across UAE and India." 
      />
      <meta 
        name="keywords" 
        content="Dr PT Abdul Rahman, visionary educator, humanitarian leader, DQAA Academy founder, M.A. Sociology University of Mysore, multilingual author UAE, educational innovator Kerala, Indian Islamic Center Dubai founder, Arabic English translator, interfaith dialogue pioneer, Central Military Command UAE, ABR Academy founder" 
      />
      
      {/* Author and Publisher */}
      <meta name="author" content="Dr. P.T. Abdul Rahman" />
      <meta name="publisher" content="AI8TY Creative Agency" />
      
      {/* Open Graph / Facebook - Wikidata Compatible */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ptabdulrahman.com/" />
      <meta property="og:title" content="Dr. P.T. Abdul Rahman – Visionary Educator & Humanitarian Leader" />
      <meta 
        property="og:description" 
        content="Visionary educator and humanitarian from India. Founder of Darul Quran Abdulla Academy, multilingual author, and transformative leader with 30+ years of global impact." 
      />
      <meta property="og:image" content="https://ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Dr. P.T. Abdul Rahman - Visionary Educator and Humanitarian Leader" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Dr. P.T. Abdul Rahman" />

      {/* Twitter Card - Professional Focus */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ptabdulrahman.com/" />
      <meta property="twitter:title" content="Dr. P.T. Abdul Rahman – Visionary Educator & Humanitarian Leader" />
      <meta 
        property="twitter:description" 
        content="Founder of DQAA Academy, multilingual author of 15+ books, M.A. in Sociology. Visionary educator and humanitarian with 30+ years of transformative global impact." 
      />
      <meta property="twitter:image" content="https://ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />

      {/* Enhanced Meta Tags for Knowledge Panel */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="classification" content="Biography, Education, Humanitarian Work, Institutional Leadership, Multilingual Author" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />

      {/* Geo Tags - Professional Presence */}
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai, United Arab Emirates" />
      <meta name="geo.position" content="25.2048;55.2708" />
      <meta name="ICBM" content="25.2048, 55.2708" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://ptabdulrahman.com/" />

      {/* Structured Data - Optimized for Google Knowledge Panel */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Educational Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Darul Quran Abdulla Educational Academy",
          "alternateName": "DQAA",
          "founder": {
            "@type": "Person",
            "name": "Dr. P.T. Abdul Rahman"
          },
          "foundingDate": "2013",
          "location": {
            "@type": "Place",
            "name": "Kerala, India"
          },
          "description": "Revolutionary educational institution that bridges traditional values with modern pedagogical excellence, founded by visionary educator Dr. P.T. Abdul Rahman"
        })}
      </script>

      {/* Website Structured Data with AI8TY Attribution */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Dr. P.T. Abdul Rahman - Official Website",
          "url": "https://ptabdulrahman.com",
          "description": "Official website of Dr. P.T. Abdul Rahman - Visionary Educator, Humanitarian Leader & Founder of DQAA. Crafted & Managed by AI8TY Creative Agency.",
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

      {/* Book Series Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
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
                "name": "Dr. P.T. Abdul Rahman"
              },
              "inLanguage": ["English", "Malayalam", "Arabic"],
              "datePublished": "1995",
              "publisher": "Department of Islamic Affairs"
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
              "numberOfPages": "404"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;
