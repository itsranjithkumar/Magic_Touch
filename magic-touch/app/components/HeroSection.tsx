import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGem,
  FaPalette,
  FaHeart,
  FaPlay,
  FaQuoteRight
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const testimonials = [
    {
      quote: "Magic Touch transformed me into the most beautiful version of myself on my wedding day.",
      author: "Sophia Rodriguez",
      role: "Bride 2023"
    },
    {
      quote: "Every detail was perfect. The makeup artists are true artists of beauty.",
      author: "Emily Chen",
      role: "Bride 2022"
    },
    {
      quote: "I felt like a princess, all thanks to the incredible team at Magic Touch.",
      author: "Olivia Thompson",
      role: "Bride 2024"
    }
  ];

  const servicesHighlights = [
    {
      icon: FaGem,
      title: "Luxury Bridal Makeup",
      description: "Exquisite artistry that captures your unique radiance"
    },
    {
      icon: FaPalette,
      title: "Personalized Styling",
      description: "Tailored looks that reflect your individual beauty"
    },
    {
      icon: FaGem,
      title: "Premium Experience",
      description: "Elegant service from consultation to final touch"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-rose-100 overflow-hidden">
      {/* Elegant Background Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/elegant-pattern.svg')] pointer-events-none"></div>

      {/* Luxurious Geometric Shapes */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [0.5, 0.7, 0.5],
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content - Elegant Typography */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl font-serif font-bold text-gray-900 leading-tight"
              >
                Unveil Your
                <span className="block text-rose-600 font-script">
                  Bridal Elegance
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 font-light"
              >
                Elevate your wedding day with bespoke makeup artistry that captures your inner and outer beauty.
              </motion.p>
            </div>

            {/* Service Highlights */}
            <div className="space-y-4">
              {servicesHighlights.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-md"
                >
                  <service.icon className="text-rose-500 text-3xl" />
                  <div>
                    <h3 className="font-semibold text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex space-x-4"
            >
              <Link 
                href="#consultation"
                className="px-8 py-4 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors flex items-center space-x-2"
              >
                Book Consultation
                <FaHeart className="ml-2" />
              </Link>
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="px-8 py-4 border-2 border-rose-600 text-rose-600 rounded-full hover:bg-rose-50 transition-colors flex items-center space-x-2"
              >
                <FaPlay />
                Watch Showcase
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Elegant Bride Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-[700px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image 
                  src="/bride.jpg"
                  alt="Elegant Bridal Makeup"
                  fill
                  priority
                  className="object-cover object-top transform hover:scale-110 transition-transform duration-500"
                />
              </motion.div>

              {/* Testimonial Overlay */}
              <AnimatePresence mode="wait">
                {testimonials.map((testimonial, index) => (
                  activeTestimonial === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5 }}
                      className="absolute -bottom-10 -right-10 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 max-w-xs"
                    >
                      <FaQuoteRight className="text-rose-500 mb-4" />
                      <p className="text-gray-800 italic mb-4">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-4xl w-full"
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.youtube.com/embed/BRIDAL_SHOWCASE" 
                  title="Magic Touch Bridal Showcase"
                  allowFullScreen
                  className="w-full h-full rounded-2xl"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;