import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { Map, Mail, Phone, Calendar, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import FluidTypography from '@/components/typography/FluidTypography';
import ResponsiveContainer from '@/components/layout/ResponsiveContainer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you soon."
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <section className="py-fluid-2xl relative overflow-hidden">
      <div className="text-center mb-fluid-xl">
        <FluidTypography variant="h2" color="text-primary-900" className="mb-6">
          Get in Touch
        </FluidTypography>
        <FluidTypography variant="body" color="text-primary-700" className="max-w-3xl mx-auto">
          For inquiries about educational programs, speaking engagements, or collaboration opportunities
        </FluidTypography>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-fluid-lg">
        <motion.div 
          className="lg:col-span-5" 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white p-fluid-lg rounded-2xl shadow-lg h-full">
            <FluidTypography variant="h3" color="text-primary-900" className="mb-fluid-md">
              Contact Information
            </FluidTypography>
            
            <div className="space-y-fluid-md">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4 shrink-0">
                  <Mail className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <FluidTypography variant="h6" color="text-primary-800" className="mb-1">
                    Email
                  </FluidTypography>
                  <FluidTypography variant="body" color="text-primary-600">
                    mail@ptabdulrahman.com
                  </FluidTypography>
                  <FluidTypography variant="body" color="text-primary-600">
                    office@darul-quran.com
                  </FluidTypography>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4 shrink-0">
                  <Calendar className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <FluidTypography variant="h6" color="text-primary-800" className="mb-1">
                    Office Hours
                  </FluidTypography>
                  <FluidTypography variant="body" color="text-primary-600">
                    Sunday - Thursday: 9:00 AM - 5:00 PM
                  </FluidTypography>
                  <FluidTypography variant="body" color="text-primary-600">
                    Friday - Saturday: Closed
                  </FluidTypography>
                </div>
              </div>
            </div>
            
            <div className="mt-fluid-lg">
              <FluidTypography variant="h6" color="text-primary-800" className="mb-4">
                Connect With Us
              </FluidTypography>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-100 hover:bg-primary-200 transition-colors duration-300 p-3 rounded-full"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5 text-primary-700" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-7" 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white p-fluid-lg rounded-2xl shadow-lg">
            <FluidTypography variant="h3" color="text-primary-900" className="mb-fluid-md">
              Send a Message
            </FluidTypography>
            
            <form onSubmit={handleSubmit} className="space-y-fluid-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-fluid-sm">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-800 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full h-12"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-800 mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full h-12"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary-800 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full h-12"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-800 mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide details about your inquiry..."
                  required
                  className="w-full min-h-[120px] resize-y"
                />
              </div>
              
              <div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-primary-700 to-primary-800 hover:from-primary-800 hover:to-primary-900 text-white px-8 py-3 h-12 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
      <Toaster />
    </section>
  );
};

// Social media links (keeping existing data)
const socialLinks = [
  {
    icon: Facebook,
    href: "#",
    label: "Facebook"
  },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram"
  },
  {
    icon: Twitter,
    href: "#",
    label: "Twitter"
  },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn"
  }
];

export default Contact;
