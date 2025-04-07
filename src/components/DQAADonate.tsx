
import { Coins, School, GraduationCap, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';

const DQAADonate = () => {
  const razorpayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the Razorpay script and button
    if (razorpayRef.current) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.async = true;
      script.dataset.payment_button_id = 'pl_QG1ppUVBOKO1fP';
      
      // Clear any existing content before appending
      while (razorpayRef.current.firstChild) {
        razorpayRef.current.removeChild(razorpayRef.current.firstChild);
      }
      
      razorpayRef.current.appendChild(script);
    }
    
    return () => {
      // Cleanup if needed
      if (razorpayRef.current) {
        const script = razorpayRef.current.querySelector('script');
        if (script) {
          script.remove();
        }
      }
    };
  }, []);

  return (
    <section id="donate" className="py-24 bg-gradient-to-b from-royal-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold islamic-border mb-12 text-royal-800">
            Partner in Nurturing Quranic Excellence: Support DQAA
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 border border-golden-100">
            <p className="text-center text-gray-700 italic mb-8">
              Bismillah hir-Rahman nir-Rahim
            </p>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                The journey of nurturing a Hafiz – a guardian of the Holy Quran – is a profound responsibility 
                and a source of immense blessing for the entire community. At Darul Quran Abdulla Academy (DQAA), 
                established through Allah's grace and our humble efforts, we are dedicated to providing an exceptional 
                environment where young men not only memorize the Divine Word but also flourish intellectually and 
                morally through integrated modern education.
              </p>

              <p>
                This vital work relies on the partnership and generosity of visionary individuals like you. 
                Your support empowers us to:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <School className="h-6 w-6 text-golden-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-royal-800 text-lg">Ensure Continuity</h4>
                    <p>Maintain the high standards of our unique educational model, blending authentic Hifz training with robust academic schooling.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <GraduationCap className="h-6 w-6 text-golden-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-royal-800 text-lg">Uplift Deserving Students</h4>
                    <p>Provide scholarships and financial assistance, ensuring that talent and dedication are never hindered by circumstance.</p>
                  </div>
                </div>

                <div className="flex items-start md:col-span-2">
                  <div className="mr-4 mt-1">
                    <Award className="h-6 w-6 text-golden-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-royal-800 text-lg">Enhance Facilities</h4>
                    <p>Sustain and improve the learning environment necessary for focused study and spiritual growth.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-royal-800 mb-4">An Opportunity for Ongoing Reward (Sadaqah Jariyah)</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-golden-50 p-6 rounded-lg">
                  <h4 className="font-bold text-royal-800 text-lg mb-2">Sponsor a Hafiz</h4>
                  <p>Consider the unique blessing of sponsoring a student's journey. Share in the reward for every verse they memorize, recite, and live by throughout their lives.</p>
                </div>

                <div className="bg-golden-50 p-6 rounded-lg">
                  <h4 className="font-bold text-royal-800 text-lg mb-2">General Contributions</h4>
                  <p>Your support in any amount significantly impacts our ability to fulfill our mission and maintain the academy's excellence.</p>
                </div>
              </div>

              <p>
                As a registered institution, contributions to Darul Quran Abdulla Academy may qualify for tax deductions 
                under Section 80-G of the Income Tax Act in India, allowing for a practical benefit alongside the spiritual reward.
              </p>

              <p>
                We invite you to join us as partners in this noble endeavor – an investment in knowledge, faith, and the future 
                leaders of our Ummah. Your contribution, offered for the sake of Allah, helps illuminate the path for these dedicated students.
              </p>

              <div className="text-center my-8">
                <h3 className="text-2xl font-bold text-royal-800 mb-6">Support DQAA Today</h3>
                <div className="max-w-md mx-auto">
                  <div ref={razorpayRef} className="razorpay-embed-btn">
                    {/* The Razorpay button will be injected here via the script */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DQAADonate;
