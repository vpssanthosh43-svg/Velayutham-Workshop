import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Zap, Clock } from 'lucide-react';
import { shopInfo } from '../data/shopInfo';

const EmergencyBanner = () => {
  return (
    <section className="py-8 sm:py-12 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="bg-white/20 p-3 sm:p-4 rounded-full">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1">Bike Broke Down?</h3>
              <p className="text-white/90 text-sm sm:text-base flex items-center gap-2 justify-center sm:justify-start">
                <Clock className="w-4 h-4" />
                Call us for immediate help
              </p>
            </div>
          </div>
          
          <a
            href={`tel:${shopInfo.phone}`}
            className="flex items-center gap-2 bg-white text-red-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 transform hover:scale-105 min-h-[48px]"
          >
            <Phone className="w-5 h-5" />
            Call Now: {shopInfo.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
