import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Settings, Droplet, Shield, Circle, Zap, Hammer } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  Wrench,
  Settings,
  Droplet,
  Shield,
  Circle,
  Zap,
  Hammer,
};

const colorMap = {
  Wrench: 'from-orange-500 to-yellow-400',
  Settings: 'from-blue-500 to-cyan-400',
  Droplet: 'from-cyan-500 to-blue-400',
  Shield: 'from-green-500 to-emerald-400',
  Circle: 'from-purple-500 to-pink-400',
  Zap: 'from-yellow-500 to-orange-400',
  Hammer: 'from-red-500 to-pink-400',
};

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { t } = useLanguage();
  const translatedServices = t('services.items');

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden" id="services">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">{t('services.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {translatedServices.map((service, index) => {
            const iconKey = ['Wrench', 'Settings', 'Droplet', 'Shield', 'Circle', 'Zap', 'Hammer'][index];
            const IconComponent = iconMap[iconKey] || Wrench;
            const gradient = colorMap[iconKey] || 'from-gray-500 to-gray-400';
            
            return (
              <motion.div
                key={`${iconKey}-${service.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div 
                  className={`bg-gradient-to-br ${gradient} w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg relative z-10`}
                  animate={hoveredIndex === index ? { rotate: [0, -10, 10, 0], scale: 1.1 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                
                <h3 className="text-sm sm:text-lg font-bold text-dark mb-1 sm:mb-2 group-hover:text-primary transition-colors relative z-10">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-base line-clamp-3 relative z-10">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
