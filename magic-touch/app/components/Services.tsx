'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCrown, FaFan, FaPalette } from 'react-icons/fa';

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
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  },
  hover: {
    scale: 1.03,
    transition: { duration: 0.3 }
  }
};

const services = [
  {
    icon: FaCrown,
    title: "Exquisite Bridal Makeup",
    description: "Transform into a radiant bride with our bespoke makeup artistry, tailored to enhance your natural beauty.",
    image: "/makeup1.jpg",
  },
  {
    icon: FaFan,
    title: "Elegant Saree Draping",
    description: "Experience the art of perfect saree draping, showcasing grace and tradition with a modern twist.",
    image: "/saree.jpg",
  },
  {
    icon: FaPalette,
    title: "Intricate Bridal Mehndi",
    description: "Adorn your hands with exquisite mehndi designs, blending tradition with contemporary artistry.",
    image: "/mehndi.jpg",
  }
];

export default function Services() {
  return (
    <motion.section 
      id="services"
      className="py-24 bg-gradient-to-b from-neutral-50 to-neutral-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-extrabold text-center mb-16 text-neutral-800 relative"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative z-10">Our Signature Services</span>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl text-neutral-200 -z-10">Luxury</span>
        </motion.h2>
        
        <motion.div 
          className="grid lg:grid-cols-3 gap-12"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-2xl group"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
              <Image 
                src={service.image} 
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                <motion.div 
                  className="text-gold-500 mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <service.icon className="text-5xl" />
                </motion.div>
                
                <h3 className="text-3xl font-bold mb-4 text-white tracking-wide">
                  {service.title}
                </h3>
                
                <p className="text-neutral-200 mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>
                
                <motion.button
                  className="self-start px-6 py-2 bg-gold-500 text-neutral-900 rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-gold-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

