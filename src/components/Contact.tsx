import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { Map, Mail, Phone, Calendar } from 'lucide-react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
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
  return <section id="contact" className="py-24 bg-royal-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="Get in Touch" subtitle="For inquiries about Dr. Rahman's work, speaking engagements, or collaboration opportunities" className="mb-16" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div className="lg:col-span-5" initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
              <h3 className="text-2xl font-playfair text-royal-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  
                  <div>
                    
                    
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-royal-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-royal-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-royal-800 mb-1">Email</h4>
                    <p className="text-gray-600">mail@ptabdulrahman.com</p>
                    <p className="text-gray-600">office@darul-quran.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  
                  <div>
                    
                    
                    
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-royal-100 p-3 rounded-lg mr-4">
                    <Calendar className="h-6 w-6 text-royal-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-royal-800 mb-1">Office Hours</h4>
                    <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Friday - Saturday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium text-royal-800 mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="bg-royal-50 hover:bg-royal-100 transition-colors duration-300 p-3 rounded-full" aria-label={link.label}>
                      <link.icon className="h-5 w-5 text-royal-700" />
                    </a>)}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div className="lg:col-span-7" initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-playfair text-royal-800 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="w-full" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required className="w-full" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help you?" required className="w-full" />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Please provide details about your inquiry..." required className="w-full h-32" />
                </div>
                
                <div>
                  <Button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-royal-700 to-royal-800 hover:from-royal-800 hover:to-royal-900 text-white px-8 py-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <Toaster />
    </section>;
};

// Example social media links
const socialLinks = [{
  icon: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>,
  href: "#",
  label: "Facebook"
}, {
  icon: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>,
  href: "#",
  label: "Instagram"
}, {
  icon: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>,
  href: "#",
  label: "Twitter"
}, {
  icon: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>,
  href: "#",
  label: "LinkedIn"
}];
export default Contact;