
import { Button } from '@/components/ui/button';

const Biography = () => {
  return (
    <section id="biography" className="py-24 islamic-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold islamic-border mb-12">About Dr. P.T. Abdul Rahman</h2>
            <p className="text-lg text-gray-700">A distinguished scholar, visionary leader, and humanitarian whose influence spans continents.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-64 h-64 bg-earth-100 rounded-lg"></div>
              <img 
                src="/lovable-uploads/76eef9a7-0487-4c6f-b458-32397f9edbd6.png" 
                alt="Dr. P.T. Abdul Rahman" 
                className="relative z-10 w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-royal-800">Early Life & Education</h3>
                <p className="text-gray-700 mt-2">
                  Born in Kerala, Dr. Rahman was raised by his grandmother after the early loss of his father. His academic journey began under the tutelage of renowned scholars like T.P. Muhammad Musliar, setting the foundation for his intellectual pursuits. He later attained his M.A. in Sociology from the University of Mysore.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-royal-800">Linguistic Mastery</h3>
                <p className="text-gray-700 mt-2">
                  Dr. Rahman is fluent in multiple languages including Arabic, English, Hindi, Urdu, Malayalam, and Tamil, enabling him to connect with diverse communities and bridge cultural divides through his work.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-royal-800">Professional Journey</h3>
                <p className="text-gray-700 mt-2">
                  His career has spanned prestigious positions, from the Dubai Government Awqaf & Islamic Affairs Department to founding the Insight Group, where he continues to foster educational and humanitarian initiatives that transcend national boundaries.
                </p>
              </div>

              <Button asChild className="bg-royal-700 hover:bg-royal-800 mt-4">
                <a href="#timeline">Explore His Journey</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
