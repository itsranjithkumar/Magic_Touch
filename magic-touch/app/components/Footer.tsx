import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCode,
  FaLaptopCode,
  FaMobileAlt
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const socialLinks = [
    { icon: FaFacebook, href: '#', color: 'text-blue-600' },
    { icon: FaTwitter, href: '#', color: 'text-sky-500' },
    { icon: FaInstagram, href: '#', color: 'text-pink-600' },
    { icon: FaLinkedin, href: '#', color: 'text-blue-700' }
  ];

  const services = [
    { icon: FaCode, title: 'Web Development' },
    { icon: FaLaptopCode, title: 'UI/UX Design' },
    { icon: FaMobileAlt, title: 'Mobile Apps' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 relative z-10">
        {/* Company Info */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-gray-800 flex items-center space-x-2"
          >
            <span>Magic Touch</span>
            <motion.span 
              animate={{ 
                rotate: [0, 10, -10, 0],
                transition: { 
                  repeat: Infinity, 
                  duration: 2 
                } 
              }}
              className="text-blue-500"
            >
              ✨
            </motion.span>
          </motion.h3>
          <motion.p 
            variants={itemVariants}
            className="text-gray-600"
          >
            Innovative digital solutions that transform your business vision into reality.
          </motion.p>
        </motion.div>

        {/* Quick Services */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h4 
            variants={itemVariants}
            className="text-xl font-semibold text-gray-700"
          >
            Our Services
          </motion.h4>
          <motion.ul 
            variants={containerVariants}
            className="space-y-4"
          >
            {services.map((service, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-3 group"
              >
                <service.icon className="text-blue-500 group-hover:text-blue-600 transition-colors" />
                <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h4 
            variants={itemVariants}
            className="text-xl font-semibold text-gray-700"
          >
            Contact Us
          </motion.h4>
          <motion.div 
            variants={itemVariants}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3 text-gray-600">
              <FaEnvelope className="text-blue-500" />
              <span>info@magictouch.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <FaPhone className="text-blue-500" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>Silicon Valley, CA</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h4 
            variants={itemVariants}
            className="text-xl font-semibold text-gray-700"
          >
            Stay Updated
          </motion.h4>
          <motion.form 
            variants={itemVariants}
            onSubmit={handleSubscribe}
            className="space-y-4"
          >
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
            >
              <FaPaperPlane />
              <span>Subscribe</span>
            </motion.button>
            <AnimatePresence>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="text-green-600 text-sm text-center"
                >
                  Thanks for subscribing!
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </div>

      {/* Social Links & Copyright */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
      >
        <div className="flex space-x-6">
          {socialLinks.map(({ icon: Icon, href, color }, index) => (
            <motion.a
              key={index}
              href={href}
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className={`${color} transition-all duration-300`}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </div>
        <p className="text-gray-500">
          © {new Date().getFullYear()} Magic Touch. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;