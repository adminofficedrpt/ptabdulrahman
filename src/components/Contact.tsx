
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "info@ptabdulrahman.com",
      href: "mailto:info@ptabdulrahman.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+971 50 123 4567",
      href: "tel:+971501234567"
    },
    {
      icon: MapPin,
      title: "Location", 
      value: "Dubai, UAE",
      href: "#"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Message Us",
      href: "https://wa.me/971501234567"
    }
  ];

  return (
    <section id="contact" className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-royal-900 mb-2">
            Get in Touch
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
            Reach out for collaborations, speaking engagements, or inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-4 md:p-6 text-center hover:bg-gray-100 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-royal-100 rounded-full mb-3 group-hover:bg-royal-200 transition-colors">
                <method.icon className="w-5 h-5 md:w-6 md:h-6 text-royal-700" />
              </div>
              
              <h3 className="text-sm md:text-base font-semibold text-royal-800 mb-1">
                {method.title}
              </h3>
              
              <p className="text-xs md:text-sm text-gray-600">
                {method.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Simple Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto mt-8 md:mt-12"
        >
          <form className="bg-gray-50 rounded-xl p-4 md:p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-royal-500 text-sm md:text-base"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-royal-500 text-sm md:text-base"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-royal-500 text-sm md:text-base"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-royal-500 resize-none text-sm md:text-base"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-royal-600 to-royal-700 text-white py-3 rounded-lg font-semibold hover:from-royal-700 hover:to-royal-800 transition-all duration-300 text-sm md:text-base"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
