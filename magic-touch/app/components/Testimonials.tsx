import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Luxury Bridal Elegance",
      quote: "Magic Touch transformed my wedding day into a canvas of pure artistry, where every detail whispered sophistication and grace.",
      rating: 5,
    },
    {
      name: "Aisha Khan",
      role: "Wedding Couture Maestro",
      quote: "Beyond mere styling, Magic Touch crafts an experience of sublime beauty that transcends traditional boundaries of makeup and design.",
      rating: 4.5,
    },
    {
      name: "Emily Rodriguez",
      role: "Bridal Fashion Innovator",
      quote: "Magic Touch doesn't just do makeup, they create a transformative experience that elevates your inner confidence.",
      rating: 5,
    }
  ];

  const navigateTestimonial = useCallback((direction: 'next' | 'prev') => {
    setActiveTestimonial((prev) => {
      if (direction === 'next') {
        return (prev + 1) % testimonials.length;
      } else {
        return (prev - 1 + testimonials.length) % testimonials.length;
      }
    });
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      navigateTestimonial('next');
    }, 7000);

    return () => clearInterval(interval);
  }, [navigateTestimonial]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const testimonialVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: {
        duration: 0.3 
      }
    }
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex justify-center space-x-1">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-500 text-xl" />
        ))}
        {hasHalfStar && (
          <FaStar key="half-star" className="text-yellow-500 text-xl" style={{ opacity: 0.5 }} />
        )}
      </div>
    );
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      className="py-24 px-4 md:px-8 bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative">
        <motion.h2
          variants={testimonialVariants}
          className="text-5xl md:text-6xl font-serif font-bold text-neutral-900 mb-16 text-center tracking-tight"
        >
          Whispers of <span className="text-primary-600">Elegance</span>
        </motion.h2>

        <div className="relative flex items-center justify-center">
          <motion.button 
            onClick={() => navigateTestimonial('prev')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 z-10 bg-primary-500/20 hover:bg-primary-500/40 rounded-full p-2 transition-all duration-300"
          >
            <IoIosArrowBack className="text-primary-600 text-3xl" />
          </motion.button>

          <motion.button 
            onClick={() => navigateTestimonial('next')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 z-10 bg-primary-500/20 hover:bg-primary-500/40 rounded-full p-2 transition-all duration-300"
          >
            <IoIosArrowForward className="text-primary-600 text-3xl" />
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              variants={testimonialVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-12 md:p-16 border-2 border-neutral-100 relative overflow-hidden flex flex-col items-center justify-center"
            >
              {/* Testimonial Content */}
              <div className="w-full max-w-2xl space-y-6 text-center">
                <FaQuoteLeft className="text-primary-600 text-5xl mb-6 opacity-20 mx-auto" />
                
                <blockquote className="text-2xl md:text-3xl font-light text-neutral-800 mb-8 italic leading-relaxed">
                  &quot;{testimonials[activeTestimonial].quote}&quot;
                </blockquote>
                
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-3 tracking-wide">
                    {testimonials[activeTestimonial].name}
                  </h3>
                  <div className="text-primary-600 text-xl font-medium mb-4">
                    {testimonials[activeTestimonial].role}
                  </div>

                  {/* Rating Stars */}
                  {renderStars(testimonials[activeTestimonial].rating)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;