
import { BookOpen, Star, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const DQAAAdmission = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="admission" className="py-24 bg-white">
      <Helmet>
        {/* Add structured data for the educational organization */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Darul Quran Abdulla Academy",
              "description": "An educational institution founded by Dr. P.T. Abdul Rahman that integrates Quranic memorization with modern academic excellence",
              "url": "https://www.ptabdulrahman.com/#admission",
              "sameAs": ["https://www.darul-quran.com"],
              "founder": {
                "@type": "Person",
                "name": "Dr. P.T. Abdul Rahman"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India",
                "addressRegion": "Kerala"
              },
              "member": {
                "@type": "OrganizationRole",
                "roleName": "Chairman",
                "member": {
                  "@type": "Person",
                  "name": "Dr. P.T. Abdul Rahman"
                }
              },
              "alumni": {
                "@type": "Person",
                "name": "Hafiz Students"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold islamic-border mb-12 text-royal-800">
            Entrust Your Child's Future to Darul Quran Abdulla Academy: The Path of the Hafiz
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-royal-50 to-white rounded-lg shadow-lg p-8 md:p-12 border border-golden-100">
          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-zinc-950 font-bold text-center text-xl">السلام عليكم ورحمة الله وبركاته</p>
            
            <p className="text-gray-700 mb-6">It is with immense hope and a profound sense of responsibility that I invite you to consider Darul Quran Abdulla Academy (DQAA) for your beloved son's sacred journey towards becoming a Hafiz of the Holy Quran.</p>

            <p className="text-gray-700 mb-6">
              At DQAA, we understand that entrusting your child's education to an institution is a decision 
              of tremendous significance. We honor this trust by providing an environment where students don't 
              merely memorize the Quran but develop a deep connection with Allah's words while receiving a 
              well-rounded education that prepares them for both spiritual and worldly success.
            </p>

            {isExpanded && (
              <>
                <p className="text-gray-700 mb-6">
                  Our unique approach integrates:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <BookOpen className="h-5 w-5 text-golden-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-royal-800 mb-2">Sacred Memorization</h4>
                      <p className="text-gray-700">Expert guidance in Hifz with proper tajweed and understanding, a cornerstone of education at Darul Quran Abdulla Academy</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Award className="h-5 w-5 text-golden-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-royal-800 mb-2">Academic Excellence</h4>
                      <p className="text-gray-700">Comprehensive schooling that meets or exceeds educational standards, reflecting Dr. PT Abdul Rahman's vision as an educator</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Star className="h-5 w-5 text-golden-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-royal-800 mb-2">Character Formation</h4>
                      <p className="text-gray-700">Ethical development grounded in Islamic values and principles, guided by the teachings of Malayali scholar in UAE</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Users className="h-5 w-5 text-golden-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-royal-800 mb-2">Supportive Community</h4>
                      <p className="text-gray-700">A nurturing environment where students foster lifelong brotherhoods, inspired by the community building of Indian humanitarian in Dubai</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  The journey of becoming a Hafiz is a path of honor described by our beloved Prophet Muhammad ﷺ. It is a 
                  distinction that brings blessings in this world and the hereafter—not only for the Hafiz but for their parents 
                  as well, who will be honored with a crown of light on the Day of Judgment.
                </p>

                <p className="text-gray-700 mb-6">
                  At DQAA, founded by author of "Is the Creation Meaningless?" Dr. PT Abdul Rahman, we've witnessed remarkable transformations as students embrace 
                  this sacred knowledge, developing enhanced concentration, discipline, and spiritual awareness that serves them throughout their lives.
                </p>

                <p className="text-gray-700 mb-6">
                  We invite you to consider Darul Quran Abdulla Academy as the institution that will guide your son on this blessed journey. Our experienced 
                  faculty, comprehensive facilities, and balanced approach ensure that students graduate not only as memorizers of the 
                  Quran but as confident young men prepared to face the modern world while remaining firmly rooted in their faith.
                </p>
              </>
            )}

            <div className="flex justify-center mt-8">
              <Button 
                onClick={() => setIsExpanded(!isExpanded)} 
                className="bg-golden-600 hover:bg-golden-700 text-white"
                aria-expanded={isExpanded}
                aria-controls="expanded-content"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DQAAAdmission;
