import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Navigation, Star, Shield, Award, Sparkles } from 'lucide-react';
import { shopInfo } from '../data/shopInfo';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden pt-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border border-white/20">
            <Award className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium">Trusted by 5000+ Customers</span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 text-balance leading-tight">
            {shopInfo.name}
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-orange-400 mb-4 sm:mb-6">
            {shopInfo.tagline}
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            Expert bike service at honest prices. We fix your bike right the first time, every time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-2"
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">4.9 Star Rating</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium">30-Day Warranty</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <span className="text-sm font-medium">Free Pickup & Drop</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
          <a
            href={`tel:${shopInfo.phone}`}
            className="btn-primary text-base sm:text-lg px-8 py-4 w-full sm:w-auto min-h-[52px]"
          >
            <Phone className="w-5 h-5" />
            Call Us Now
          </a>
          <a
            href={`https://wa.me/${shopInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hello! I need bike service.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-gradient-to-r from-green-600 to-green-700 text-base sm:text-lg px-8 py-4 w-full sm:w-auto min-h-[52px]"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
          <a
            href={shopInfo.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-base sm:text-lg px-8 py-4 w-full sm:w-auto min-h-[52px]"
          >
            <Navigation className="w-5 h-5" />
            Find Us on Map
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 sm:mt-16 animate-bounce"
        >
          <svg
            className="w-6 h-6 mx-auto text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
