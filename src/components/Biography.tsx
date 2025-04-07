import { Button } from '@/components/ui/button';
const Biography = () => {
  return <section id="biography" className="py-24 islamic-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold islamic-border mb-12 text-royal-800">About Dr. P.T. Abdul Rahman</h2>
            <p className="text-lg text-gray-700">A distinguished scholar, visionary leader, and humanitarian whose influence spans continents.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-64 h-64 bg-golden-100 rounded-lg"></div>
              <img alt="Dr. P.T. Abdul Rahman" className="relative z-10 w-full h-auto rounded-lg shadow-lg" src="/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg" />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-royal-800">Early Life & Education</h3>
                <p className="text-gray-700 mt-2">
                  P.T. Abdul Rahman, native to Kerala, India, emerged from a lineage characterized by profound Islamic erudition and cultural tradition. The premature demise of his father notwithstanding, he exhibited extraordinary fortitude and an unyielding dedication to intellectual pursuits. Under the aegis of his grandmother, he confronted challenges with remarkable tenacity.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-royal-800">Academic Pursuits</h3>
                <p className="text-gray-700 mt-2">
                  His formative education was conducted in Palakkod, Kothakurushi, and Ananganadi, subsequent to which he undertook advanced theological studies (Dars) at venerable institutions such as Palakkod East Masjid and Edakazhiyoor Juma Masjid. Under the instruction of eminent scholars, notably T.P. Muhammad Musliar and Kallur Abdullah Musliar, he cultivated a comprehensive comprehension of Islamic jurisprudence and philosophy.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-royal-800">Linguistic Mastery</h3>
                <p className="text-gray-700 mt-2">
                  P.T. Abdul Rahman possesses a Master of Arts in Sociology from the University of Mysore, India. His multilingual proficiency, encompassing Arabic, English, Hindi, Urdu, Malayalam, and Tamil, facilitates engagement with disparate communities and intellectual fora globally.
                </p>
              </div>

              <Button asChild className="bg-golden-600 hover:bg-golden-700 text-white mt-4">
                <a href="#timeline">Explore His Journey</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Biography;