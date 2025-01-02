"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const HeroSection = dynamic(() => import("./components/HeroSection"));
const AboutUs = dynamic(() => import("./components/AboutUs"));
const Services = dynamic(() => import("./components/Services"));
const Testimonials = dynamic(() => import("./components/Testimonials"));
const ContactUs = dynamic(() => import("./components/ContactUs"));
const Footer = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutUs />
        <Services />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </main>
  );
}