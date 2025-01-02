import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Luxury Bridal Elegance",
      quote: "Magic Touch transformed my wedding day into a canvas of pure artistry, where every detail whispered sophistication and grace.",
      rating: 5,
    },
    {
      name: "Anjali Reddy",
      role: "Wedding Couture Maestro",
      quote: "Beyond mere styling, Magic Touch crafts an experience of sublime beauty that transcends traditional boundaries of makeup and design.",
      rating: 5,
    },
    {
      name: "Deepa Kumar",
      role: "Connoisseur of Elegance",
      quote: "Witnessing Magic Touch's artistry is like watching poetry come to life - delicate, powerful, and breathtakingly beautiful.",
      rating: 5,
    }
  ];

  const navigateTestimonial = (direction: 'next' | 'prev') => {
    const totalTestimonials = testimonials.length;
    setActiveTestimonial((prev) => 
      direction === 'next' 
        ? (prev + 1) % totalTestimonials 
        : (prev - 1 + totalTestimonials) % totalTestimonials
    );
  };

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

  const testimonialVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    exit: {
      opacity: 0,
      x: 50,
      scale: 0.9,
      transition: { 
        duration: 0.3 
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      navigateTestimonial('next');
    }, 7000);

    return () => clearInterval(interval);
  }, []);

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
                
                <p className="text-2xl md:text-3xl font-light text-neutral-800 mb-8 italic leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-3 tracking-wide">
                    {testimonials[activeTestimonial].name}
                  </h3>
                  <p className="text-primary-600 text-xl font-medium mb-4">
                    {testimonials[activeTestimonial].role}
                  </p>
                  
                  <div className="flex justify-center space-x-2">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className="text-yellow-500 text-3xl" 
                        style={{ 
                          animation: `pulse 1.5s infinite`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-4">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeTestimonial === index
                  ? 'bg-primary-600 scale-125 w-6'
                  : 'bg-primary-200 hover:bg-primary-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Optional: Background Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
      }} />
    </motion.section>
  );
}