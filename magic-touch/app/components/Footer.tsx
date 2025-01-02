'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialLinks = [
    { 
      icon: FaInstagram, 
      href: "https://instagram.com/magictouch", 
      color: "text-pink-500 hover:text-pink-600" 
    },
    { 
      icon: FaFacebook, 
      href: "https://facebook.com/magictouch", 
      color: "text-blue-600 hover:text-blue-700" 
    },
    { 
      icon: FaLinkedin, 
      href: "https://linkedin.com/company/magictouch", 
      color: "text-blue-700 hover:text-blue-800" 
    },
    { 
      icon: FaTwitter, 
      href: "https://twitter.com/magictouch", 
      color: "text-sky-500 hover:text-sky-600" 
    }
  ];

  const phoneRingVariants: Variants = {
    ring: {
      rotate: [0, 10, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  return (
    <footer className="bg-white border-t border-neutral-200 py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Company Overview */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-4xl font-extralight tracking-tight text-neutral-900">
              Magic <span className="font-semibold text-blue-600">Touch</span>
            </h3>
            <p className="text-neutral-600 font-light leading-relaxed">
              Transforming beauty experiences through personalized, innovative styling solutions. We blend artistry with individual expression.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-5 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl ${social.color} transition-all duration-300 hover:scale-110`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-semibold text-neutral-900 mb-6 border-b pb-4 border-neutral-200">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-neutral-600 hover:text-blue-600 transition-colors font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-semibold text-neutral-900 mb-6 border-b pb-4 border-neutral-200">
              Contact Information
            </h4>
            <div className="space-y-5">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>
                <div>
                  <p className="text-neutral-500 text-sm uppercase tracking-wider">Email</p>
                  <a 
                    href="mailto:hello@magictouch.com" 
                    className="text-neutral-900 hover:text-blue-600 transition-colors"
                  >
                    hello@magictouch.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <motion.div 
                  animate="ring"
                  variants={phoneRingVariants}
                  className="bg-blue-50 p-3 rounded-full"
                >
                  <FaPhone className="text-blue-600 text-xl" />
                </motion.div>
                <div>
                  <p className="text-neutral-500 text-sm uppercase tracking-wider">Phone</p>
                  <a 
                    href="tel:+918123456789" 
                    className="text-neutral-900 hover:text-blue-600 transition-colors"
                  >
                    +91 81234 56789
                  </a>
                  <p className="text-green-600 text-xs mt-1 font-medium">
                    Available Now
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                </div>
                <div>
                  <p className="text-neutral-500 text-sm uppercase tracking-wider">Location</p>
                  <span className="text-neutral-900">
                    Silicon Valley, California
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-neutral-200 text-center"
        >
          <p className="text-neutral-500 font-light">
            {new Date().getFullYear()} Magic Touch. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;