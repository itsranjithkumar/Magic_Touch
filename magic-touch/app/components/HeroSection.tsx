import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGem,
  FaPalette,
  FaHeart,
  FaPlay,
  FaQuoteRight,
  FaWhatsapp
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
      icon: FaHeart,
      title: "Premium Experience",
      description: "Elegant service from consultation to final touch"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const openWhatsAppChat = () => {
    const whatsappNumber = '950055987'; // Your WhatsApp number
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-rose-50 via-white to-rose-100 overflow-hidden">
      {/* Enhanced Background Overlay with Animated Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-[url('/elegant-pattern.svg')] pointer-events-none"
      />
      
      {/* Floating Decorative Elements */}
      <motion.div
        initial={{ x: -100, y: -100, rotate: 0 }}
        animate={{ 
          x: ['-100px', '100px', '-100px'],
          y: ['-100px', '100px', '-100px'],
          rotate: [0, 360, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-0 left-0 w-32 h-32 bg-rose-200/30 rounded-full blur-2xl opacity-50 z-0"
      />
      <motion.div
        initial={{ x: 100, y: 100, rotate: 0 }}
        animate={{ 
          x: ['100px', '-100px', '100px'],
          y: ['100px', '-100px', '100px'],
          rotate: [0, -360, 0]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute bottom-0 right-0 w-48 h-48 bg-rose-100/30 rounded-full blur-3xl opacity-40 z-0"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-grow flex flex-col">
        {/* Image Section - Prominent on Mobile */}
        <div className="w-full mb-6 md:hidden">
          <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl group">
            <Image 
              src="/bride.jpg"
              alt="Elegant Bridal Makeup"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top 
                transition-all duration-700 
                group-hover:scale-110 
                group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/10 transition-all duration-500 z-10"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center flex-grow">
          {/* Left Content - Mobile-First Typography */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left order-2 md:order-1"
          >
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-tight"
              >
                Unveil Your
                <span className="block text-rose-600 font-script text-3xl sm:text-4xl md:text-5xl mt-2">
                  Bridal Elegance
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-gray-600 font-light"
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
                  className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <service.icon className="text-rose-500 text-3xl flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
            >
              <Link 
                href="#consultation"
                className="px-6 py-3 bg-rose-600 text-white rounded-full 
                  transition-all duration-300 
                  hover:bg-rose-700 
                  hover:shadow-xl 
                  hover:scale-105 
                  active:scale-95 
                  flex items-center justify-center space-x-2"
              >
                <span>Book Consultation</span>
                <motion.span
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 20, -20, 0]
                  }}
                  transition={{ 
                    duration: 0.5, 
                    repeat: Infinity, 
                    repeatType: "loop" 
                  }}
                >
                  ✨
                </motion.span>
              </Link>
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="px-6 py-3 border-2 border-rose-600 text-rose-600 rounded-full 
                  transition-all duration-300 
                  hover:bg-rose-600 
                  hover:text-white 
                  hover:shadow-xl 
                  hover:scale-105 
                  active:scale-95 
                  flex items-center justify-center space-x-2"
              >
                <FaPlay className="mr-2" />
                <span>Watch Reel</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image Section - Hidden on Mobile */}
          <div className="hidden md:block relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl group">
            <Image 
              src="/bride.jpg"
              alt="Elegant Bridal Makeup"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top 
                transition-all duration-700 
                group-hover:scale-110 
                group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/10 transition-all duration-500 z-10"></div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 text-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <FaQuoteRight className="text-4xl text-rose-300 mx-auto mb-4" />
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 italic mb-4">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <p className="text-rose-600 font-semibold">
                {testimonials[activeTestimonial].author}
              </p>
              <p className="text-gray-500 text-sm">
                {testimonials[activeTestimonial].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* WhatsApp Chat Button - Fixed Position */}
      <motion.div 
        onClick={openWhatsAppChat}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 cursor-pointer 
          bg-green-500 text-white rounded-full p-3 
          shadow-2xl hover:shadow-lg 
          transition-all duration-300 
          flex items-center justify-center"
      >
        <FaWhatsapp className="text-4xl" />
      </motion.div>
    </div>
  );
};

export default HeroSection;