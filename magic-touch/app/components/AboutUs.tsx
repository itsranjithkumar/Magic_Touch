"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FaHeart, 
  FaStar, 
  FaPalette, 
  FaGem, 
  FaBrush, 
  FaRibbon 
} from 'react-icons/fa';
import Image from "next/image";

const AboutUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundTransform = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    ["scale(1)", "scale(1.1)", "scale(1.2)"]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 1, 0.5]
  );

  const services = [
    {
      icon: FaHeart,
      title: "Personalized Artistry",
      description: "Crafting unique beauty narratives that reflect your inner radiance",
      color: "text-rose-500"
    },
    {
      icon: FaStar,
      title: "Professional Expertise",
      description: "Years of refined techniques and industry-leading skills",
      color: "text-amber-500"
    },
    {
      icon: FaPalette,
      title: "Creative Expression",
      description: "Transforming makeup into a form of personal art",
      color: "text-purple-500"
    },
    {
      icon: FaGem,
      title: "Premium Experience",
      description: "Luxury services that elevate your most special moments",
      color: "text-teal-500"
    },
    {
      icon: FaBrush,
      title: "Innovative Techniques",
      description: "Cutting-edge styles that blend tradition with modern trends",
      color: "text-indigo-500"
    },
    {
      icon: FaRibbon,
      title: "Memorable Moments",
      description: "Creating timeless memories through transformative beauty",
      color: "text-pink-600"
    }
  ];

  return (
    <motion.section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Layer */}
      <motion.div 
        style={{ 
          scale: backgroundTransform,
          opacity: textOpacity
        }}
        className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-pink-50 z-0"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut" 
            }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-300 to-purple-300 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <Image
              src="/makeup2.jpg"
              alt="Magic Touch Team"
              width={600}
              height={600}
              className="relative z-10 rounded-3xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          {/* Right: Services Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut" 
            }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Crafting <span className="text-pink-600">Beauty</span>, 
              <br />Celebrating <span className="text-purple-600">Individuality</span>
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At <span className="font-bold text-pink-600">Magic Touch</span>, we believe 
              in transforming moments into extraordinary memories. Our passionate artists 
              create personalized beauty experiences that go beyond makeup – we celebrate 
              your unique essence.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.5 
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 2
                  }}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
                >
                  <service.icon className={`${service.color} text-3xl mx-auto mb-2`} />
                  <h3 className="font-semibold text-gray-800 mb-1">{service.title}</h3>
                  <p className="text-xs text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;