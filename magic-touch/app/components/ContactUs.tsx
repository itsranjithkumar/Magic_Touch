'use client';

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { 
  FaEnvelope, 
  FaPhone, 
  FaPaperPlane 
} from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const iconAnimations: Variants = {
    phone: {
      rotate: [0, 10, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "loop"
      }
    },
    email: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  } as const;

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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extralight tracking-tight text-neutral-900 mb-6"
          >
            Get in <span className="font-semibold text-blue-600">Touch</span>
          </motion.h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-light">
          <p>We&apos;re here to help you create your perfect look. Reach out and let&apos;s start your beauty journey.</p>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <motion.div 
                  animate="email"
                  variants={iconAnimations}
                  className="bg-blue-50 p-4 rounded-full shadow-sm"
                >
                  <FaEnvelope className="text-blue-600 text-2xl" />
                </motion.div>
                <div>
                  <p className="text-neutral-500 text-xs uppercase tracking-widest">Email</p>
                  <a 
                    href="mailto:hello@magictouch.com" 
                    className="text-2xl text-neutral-900 font-light hover:text-blue-600 transition-colors duration-300"
                  >
                    hello@magictouch.com
                  </a>
                  <p className="text-blue-600 text-xs mt-1 font-medium">
                    Instant Reply
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <motion.div 
                  animate="phone"
                  variants={iconAnimations}
                  className="bg-blue-50 p-4 rounded-full shadow-sm"
                >
                  <FaPhone className="text-blue-600 text-2xl" />
                </motion.div>
                <div>
                  <p className="text-neutral-500 text-xs uppercase tracking-widest">Phone</p>
                  <a 
                    href="tel:+918123456789" 
                    className="text-2xl text-neutral-900 font-light hover:text-blue-600 transition-colors duration-300"
                  >
                +91 95005 59877
                </a>
                  <p className="text-green-600 text-xs mt-1 font-medium">
                    Available Now
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-neutral-200 w-full" />

            <p className="text-neutral-600 font-light leading-relaxed">
              Our team is available Monday to Saturday, 10 AM to 7 PM. We look forward to hearing from you and bringing your beauty vision to life.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-neutral-50 rounded-2xl p-12 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block mb-3 text-sm transition-colors duration-300 ${
                      focusedField === 'name' ? 'text-blue-600' : 'text-neutral-600'
                    }`}
                  >
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-0 py-3 border-b-2 border-neutral-300 focus:border-blue-600 text-neutral-900 font-light text-lg bg-transparent transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="phone" 
                    className={`block mb-3 text-sm transition-colors duration-300 ${
                      focusedField === 'phone' ? 'text-blue-600' : 'text-neutral-600'
                    }`}
                  >
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-0 py-3 border-b-2 border-neutral-300 focus:border-blue-600 text-neutral-900 font-light text-lg bg-transparent transition-colors duration-300"
                    placeholder="+91"
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className={`block mb-3 text-sm transition-colors duration-300 ${
                    focusedField === 'email' ? 'text-blue-600' : 'text-neutral-600'
                  }`}
                >
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-0 py-3 border-b-2 border-neutral-300 focus:border-blue-600 text-neutral-900 font-light text-lg bg-transparent transition-colors duration-300"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className={`block mb-3 text-sm transition-colors duration-300 ${
                    focusedField === 'message' ? 'text-blue-600' : 'text-neutral-600'
                  }`}
                >
                  Your Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={4}
                  className="w-full px-0 py-3 border-b-2 border-neutral-300 focus:border-blue-600 text-neutral-900 font-light text-lg bg-transparent transition-colors duration-300 resize-none"
                  placeholder="Tell us about your dream look..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white py-4 rounded-full font-medium uppercase tracking-wider hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl"
              >
                <FaPaperPlane />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}