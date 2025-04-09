
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 errors for monitoring
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // This could be connected to an analytics service in production
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Dr. P.T. Abdul Rahman</title>
        <meta name="description" content="The page you requested could not be found. Please navigate to our homepage to explore content about Dr. P.T. Abdul Rahman - Islamic scholar, humanitarian, and founder of DQAA." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
    
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-royal-50 to-white">
        <motion.div 
          className="text-center max-w-xl px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" 
            alt="Dr. P.T. Abdul Rahman Logo" 
            className="h-20 mx-auto mb-8" 
          />
          
          <h1 className="text-4xl font-bold mb-4 text-royal-800">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            We apologize, but the page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="space-y-4">
            <Button asChild className="bg-royal-700 hover:bg-royal-800">
              <Link to="/" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Homepage
              </Link>
            </Button>
            
            <div className="pt-8 border-t border-gray-200 mt-8">
              <p className="text-gray-500 text-sm">
                Looking for something specific? Here are some helpful links:
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-left">
                <Link to="/#biography" className="text-royal-600 hover:text-royal-800 transition-colors">About</Link>
                <Link to="/#dqaa" className="text-royal-600 hover:text-royal-800 transition-colors">DQAA Academy</Link>
                <Link to="/#books" className="text-royal-600 hover:text-royal-800 transition-colors">Published Books</Link>
                <Link to="/gallery" className="text-royal-600 hover:text-royal-800 transition-colors">Photo Gallery</Link>
                <Link to="/#timeline" className="text-royal-600 hover:text-royal-800 transition-colors">Timeline</Link>
                <Link to="/#donate" className="text-royal-600 hover:text-royal-800 transition-colors">Support DQAA</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
