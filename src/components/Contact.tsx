import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { Mail, Calendar } from 'lucide-react';

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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you soon."
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-fluid-4xl md:text-fluid-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-fluid-base max-w-2xl">
            For inquiries about educational programs, speaking engagements, or collaboration opportunities.
          </p>
          <div className="mt-6 w-16 h-px bg-golden-500" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="h-4 w-4 text-golden-600" />
                  <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Email</h3>
                </div>
                <p className="text-muted-foreground text-sm">mail@ptabdulrahman.com</p>
                <p className="text-muted-foreground text-sm">office@darul-quran.com</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-4 w-4 text-golden-600" />
                  <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Office Hours</h3>
                </div>
                <p className="text-muted-foreground text-sm">Sunday – Thursday: 9:00 AM – 5:00 PM</p>
                <p className="text-muted-foreground text-sm">Friday – Saturday: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-foreground tracking-wider uppercase mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name" name="name" value={formData.name} onChange={handleChange}
                    placeholder="John Doe" required
                    className="w-full h-12 bg-transparent border-border rounded-none focus:border-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-foreground tracking-wider uppercase mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                    placeholder="john@example.com" required
                    className="w-full h-12 bg-transparent border-border rounded-none focus:border-foreground"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-foreground tracking-wider uppercase mb-2">
                  Subject
                </label>
                <Input
                  id="subject" name="subject" value={formData.subject} onChange={handleChange}
                  placeholder="How can we help you?" required
                  className="w-full h-12 bg-transparent border-border rounded-none focus:border-foreground"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-foreground tracking-wider uppercase mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message" name="message" value={formData.message} onChange={handleChange}
                  placeholder="Please provide details about your inquiry..." required
                  className="w-full min-h-[120px] bg-transparent border-border rounded-none resize-y focus:border-foreground"
                />
              </div>
              <Button
                type="submit" disabled={isSubmitting}
                className="bg-foreground text-background hover:bg-foreground/90 px-10 py-3 h-12 rounded-none text-xs tracking-[0.2em] uppercase font-medium"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
