import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'Honda', logo: '🏍️' },
  { name: 'Hero', logo: '🚲' },
  { name: 'TVS', logo: '🔧' },
  { name: 'Bajaj', logo: '⚡' },
  { name: 'Royal Enfield', logo: '👑' },
  { name: 'Yamaha', logo: '🎵' },
  { name: 'Suzuki', logo: '🔴' },
  { name: 'KTM', logo: '🟠' },
  { name: 'Honda Activa', logo: '🛵' },
  { name: 'Mahindra', logo: '🟥' },
  { name: 'Jawa', logo: '⚫' },
  { name: 'Ola Electric', logo: '🔋' },
];

const BrandsSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark mb-3">All Brands Serviced</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            No matter what bike you ride, we can fix it.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-light rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 group cursor-pointer"
            >
              <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform">
                {brand.logo}
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-700">{brand.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
