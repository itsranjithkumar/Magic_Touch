'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaPaperPlane,
  FaInstagram,
  FaFacebook,
  FaWhatsapp
} from "react-icons/fa";

const socialLinks = [
  { 
    icon: FaInstagram, 
    href: "https://www.instagram.com/magictouch_beauty", 
    color: "text-pink-500 hover:text-pink-600" 
  },
  { 
    icon: FaFacebook, 
    href: "https://www.facebook.com/magictouch_beauty", 
    color: "text-blue-600 hover:text-blue-700" 
  },
  { 
    icon: FaWhatsapp, 
    href: "https://wa.me/+918123456789", 
    color: "text-green-500 hover:text-green-600" 
  }
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [activeSection, setActiveSection] = useState<'form' | 'info'>('form');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-50">
      {/* Background Artistic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gold-500/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Artistic Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative"
          >
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-gold-500/20 rounded-full blur-2xl" />
            
            <h2 className="text-6xl font-serif font-bold text-neutral-900 mb-6 relative z-10">
              Let's <span className="text-gold-600">Create</span> Magic
            </h2>
            
            <p className="text-xl text-neutral-700 mb-10 leading-relaxed">
              Your beauty journey begins with a conversation. Whether it's a bridal transformation or a special occasion look, we're here to bring your vision to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-6 group">
                <div className="bg-gold-500/20 group-hover:bg-gold-500/40 p-4 rounded-full transition-all duration-300">
                  <FaEnvelope className="text-gold-600 text-3xl" />
                </div>
                <div>
                  <p className="text-neutral-600 font-medium">Email Us</p>
                  <a 
                    href="mailto:hello@magictouch.com" 
                    className="text-2xl text-neutral-900 hover:text-gold-600 transition-colors"
                  >
                    hello@magictouch.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="bg-primary-500/20 group-hover:bg-primary-500/40 p-4 rounded-full transition-all duration-300">
                  <FaPhone className="text-primary-600 text-3xl" />
                </div>
                <div>
                  <p className="text-neutral-600 font-medium">Call Us</p>
                  <a 
                    href="tel:+918123456789" 
                    className="text-2xl text-neutral-900 hover:text-primary-600 transition-colors"
                  >
                    +91 81234 56789
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-4xl ${social.color} transition-transform hover:scale-110`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Elegant Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden"
          >
            {/* Decorative Overlay */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-500 to-primary-500" />
            
            <h3 className="text-4xl font-serif font-bold text-neutral-900 mb-8 text-center">
              Book Your <span className="text-gold-600">Consultation</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-neutral-600 mb-2"
                  >
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-neutral-600 mb-2"
                  >
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                    placeholder="+91 "
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-neutral-600 mb-2"
                >
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-neutral-600 mb-2"
                >
                  Your Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all resize-none"
                  placeholder="Tell us about your dream look..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-500 to-primary-500 text-white py-4 rounded-xl font-semibold text-lg uppercase tracking-wider hover:from-gold-600 hover:to-primary-600 transition-all duration-300 flex items-center justify-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane />
                <span>Send Consultation Request</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}