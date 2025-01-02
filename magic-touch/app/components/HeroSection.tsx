import React, { useState, useEffect } from 'react';
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
                  <FaHeart className="ml-2" />
                </motion.span>
              </Link>
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="px-6 py-3 border-2 border-rose-600 text-rose-600 rounded-full 
                  transition-all duration-300 
                  hover:bg-rose-50 
                  hover:shadow-md 
                  hover:scale-105 
                  active:scale-95 
                  flex items-center justify-center space-x-2"
              >
                <motion.span
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity, 
                    repeatType: "loop" 
                  }}
                >
                  <FaPlay className="mr-2" />
                </motion.span>
                <span>Watch Showcase</span>
              </button>
            </motion.div>

            {/* Mobile Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:hidden mt-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 text-center"
            >
              <FaQuoteRight className="text-rose-500 mb-4 mx-auto" />
              <p className="text-gray-800 italic mb-4 text-sm">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <div>
                <p className="font-semibold text-gray-900 text-base">
                  {testimonials[activeTestimonial].author}
                </p>
                <p className="text-xs text-gray-600">
                  {testimonials[activeTestimonial].role}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Desktop Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block order-last"
          >
            <div className="relative w-full aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl group">
              <Image 
                src="/bride.jpg"
                alt="Elegant Bridal Makeup"
                fill
                priority
                sizes="(max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top 
                  transition-all duration-700 
                  group-hover:scale-110 
                  group-hover:brightness-90 
                  group-hover:contrast-125"
              />
              <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/10 transition-all duration-500 z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;