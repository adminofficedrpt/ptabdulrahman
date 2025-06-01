
import { Helmet } from 'react-helmet-async';

const EnhancedSEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. P.T. Abdul Rahman",
    "alternateName": "PT Abdul Rahman",
    "description": "Accomplished author, social activist, and educational leader with 30+ years of community service. Founder of Darul Quran Abdulla Academy and author of 15+ influential books.",
    "url": "https://ptabdulrahman.com",
    "sameAs": [
      "https://www.facebook.com/ptabdulrahman.official",
      "https://www.instagram.com/ptabdulrahman",
      "https://www.youtube.com/@ptabdulrahman"
    ],
    "jobTitle": "Author, Social Activist, Educational Leader",
    "worksFor": {
      "@type": "Organization", 
      "name": "Darul Quran Abdulla Academy"
    },
    "knowsAbout": [
      "Community Development",
      "Educational Leadership", 
      "Social Activism",
      "Author and Writing",
      "Humanitarian Work"
    ],
    "award": [
      "Community Leadership Recognition",
      "Educational Excellence Award",
      "Humanitarian Service Recognition"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Kerala, India"
    },
    "birthPlace": {
      "@type": "Place",
      "name": "Kerala, India"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Dr. P.T. Abdul Rahman - Author, Social Activist & Educational Leader</title>
      <meta name="title" content="Dr. P.T. Abdul Rahman - Author, Social Activist & Educational Leader" />
      <meta 
        name="description" 
        content="Join Dr. P.T. Abdul Rahman's journey of service through writing and community work. Author of 15+ books, founder of DQAA Academy, and dedicated social activist with 30+ years of humanitarian service. Discover a life committed to education, social change, and community empowerment." 
      />
      <meta 
        name="keywords" 
        content="Dr PT Abdul Rahman, author UAE, social activist, educational leader, DQAA Academy, community service, humanitarian work, books author, social change, education UAE, Kerala author, community development, Islamic education, social activist UAE" 
      />
      
      {/* Author and Publisher */}
      <meta name="author" content="Dr. P.T. Abdul Rahman" />
      <meta name="publisher" content="AI8TY Creative Agency" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ptabdulrahman.com/" />
      <meta property="og:title" content="Dr. P.T. Abdul Rahman - Author, Social Activist & Educational Leader" />
      <meta 
        property="og:description" 
        content="Discover the inspiring journey of Dr. P.T. Abdul Rahman - accomplished author, dedicated social activist, and visionary educational leader. Explore 30+ years of community service, 15+ published books, and the founding of DQAA Academy." 
      />
      <meta property="og:image" content="https://ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Dr. P.T. Abdul Rahman - Author and Social Activist" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Dr. P.T. Abdul Rahman" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ptabdulrahman.com/" />
      <meta property="twitter:title" content="Dr. P.T. Abdul Rahman - Author, Social Activist & Educational Leader" />
      <meta 
        property="twitter:description" 
        content="Explore the remarkable journey of Dr. P.T. Abdul Rahman - author of 15+ books, social activist, and founder of DQAA Academy. 30+ years dedicated to community service and educational excellence." 
      />
      <meta property="twitter:image" content="https://ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="classification" content="Biography, Education, Social Activism, Literature" />
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

      {/* Additional Structured Data for Professional Profile */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "mainEntity": {
            "@type": "Person",
            "name": "Dr. P.T. Abdul Rahman",
            "description": "Accomplished author, social activist, and educational leader",
            "image": "https://ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png",
            "sameAs": [
              "https://www.facebook.com/ptabdulrahman.official",
              "https://www.instagram.com/ptabdulrahman"
            ]
          }
        })}
      </script>

      {/* Website Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Dr. P.T. Abdul Rahman",
          "url": "https://ptabdulrahman.com",
          "description": "Official website of Dr. P.T. Abdul Rahman - Author, Social Activist & Educational Leader",
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
