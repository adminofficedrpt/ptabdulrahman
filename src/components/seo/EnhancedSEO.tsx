
import { Helmet } from 'react-helmet-async';

const EnhancedSEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. P.T. Abdul Rahman",
    "alternateName": "PT Abdul Rahman",
    "description": "M.A. in Sociology from University of Mysore, author of 15+ books, founder of DQAA Academy and Indian Islamic Center Dubai. Multilingual scholar, humanitarian, and educational innovator with 30+ years of service.",
    "url": "https://ptabdulrahman.com",
    "sameAs": [
      "https://www.facebook.com/ptabdulrahman.official",
      "https://www.instagram.com/ptabdulrahman",
      "https://www.youtube.com/@ptabdulrahman"
    ],
    "jobTitle": "Author, Educational Leader, Social Activist, Former Military Administrator",
    "worksFor": [
      {
        "@type": "Organization", 
        "name": "Darul Quran Abdulla Educational Academy"
      },
      {
        "@type": "Organization", 
        "name": "ABR Academy for Education and Islamic Culture"
      },
      {
        "@type": "Organization", 
        "name": "Indian Islamic Center Dubai"
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
      "Islamic Education",
      "Interfaith Dialogue", 
      "Community Development",
      "Humanitarian Services",
      "Arabic-English Translation",
      "Educational Administration",
      "Social Work",
      "Television Broadcasting"
    ],
    "award": [
      "Dubai Government Golden Visa for Social Contributions",
      "Recognition from Islamic Affairs Department",
      "Appreciation from Dubai Shopping Festival",
      "Certificate from Dubai International Holy Quran Award",
      "Recognition from Dubai Police General Command"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Mysore"
    },
    "birthPlace": {
      "@type": "Place",
      "name": "Kerala, India"
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
        "name": "Educational Leader",
        "description": "Founder of DQAA Academy (2013) and ABR Academy (2017)"
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Dr. P.T. Abdul Rahman - M.A. Sociology, Author, Educational Pioneer & Humanitarian</title>
      <meta name="title" content="Dr. P.T. Abdul Rahman - M.A. Sociology, Author, Educational Pioneer & Humanitarian" />
      <meta 
        name="description" 
        content="Meet Dr. P.T. Abdul Rahman, M.A. in Sociology from University of Mysore, founder of DQAA Academy and Indian Islamic Center Dubai. Multilingual author of 15+ books, former military administrator, and dedicated humanitarian with 30+ years of service across UAE and India. Expert in Arabic-English translation and interfaith dialogue." 
      />
      <meta 
        name="keywords" 
        content="Dr PT Abdul Rahman, M.A. Sociology University of Mysore, DQAA Academy founder, Indian Islamic Center Dubai, multilingual author UAE, Arabic English translator, Islamic education pioneer, humanitarian Dubai, interfaith dialogue, Central Military Command UAE, Department of Islamic Affairs researcher, Kerala author UAE" 
      />
      
      {/* Author and Publisher */}
      <meta name="author" content="Dr. P.T. Abdul Rahman" />
      <meta name="publisher" content="AI8TY Creative Agency" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ptabdulrahman.com/" />
      <meta property="og:title" content="Dr. P.T. Abdul Rahman - M.A. Sociology, Author, Educational Pioneer & Humanitarian" />
      <meta 
        property="og:description" 
        content="Discover the inspiring journey of Dr. P.T. Abdul Rahman - M.A. in Sociology from University of Mysore, founder of DQAA Academy and Indian Islamic Center Dubai. Multilingual scholar, author of 15+ books, and humanitarian with 30+ years of dedicated service across UAE and India." 
      />
      <meta property="og:image" content="https://ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Dr. P.T. Abdul Rahman - Educational Leader and Humanitarian" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Dr. P.T. Abdul Rahman" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ptabdulrahman.com/" />
      <meta property="twitter:title" content="Dr. P.T. Abdul Rahman - M.A. Sociology, Author, Educational Pioneer" />
      <meta 
        property="twitter:description" 
        content="M.A. in Sociology from University of Mysore, founder of DQAA Academy, author of 15+ books, and humanitarian with 30+ years of service. Multilingual scholar bridging cultures through education and compassion." 
      />
      <meta property="twitter:image" content="https://ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="classification" content="Biography, Education, Humanitarian Work, Islamic Studies, Interfaith Dialogue" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />

      {/* Geo Tags */}
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai, United Arab Emirates" />
      <meta name="geo.position" content="25.2048;55.2708" />
      <meta name="ICBM" content="25.2048, 55.2708" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://ptabdulrahman.com/" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Educational Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Darul Quran Abdulla Educational Academy",
          "founder": {
            "@type": "Person",
            "name": "Dr. P.T. Abdul Rahman"
          },
          "foundingDate": "2013",
          "location": {
            "@type": "Place",
            "name": "Kerala, India"
          },
          "description": "Revolutionary educational institution promoting Quran as survival necessity with modern pedagogical approaches"
        })}
      </script>

      {/* Website Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Dr. P.T. Abdul Rahman",
          "url": "https://ptabdulrahman.com",
          "description": "Official website of Dr. P.T. Abdul Rahman - M.A. Sociology, Educational Pioneer, Author & Humanitarian. Built & Managed by AI8TY Creative Agency.",
          "publisher": {
            "@type": "Organization",
            "name": "AI8TY Creative Agency",
            "url": "https://ai8ty.com"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ptabdulrahman.com/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;
