import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Truck, Wrench, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const highlights = [
  { icon: Shield, key: 'highlights.items.0' },
  { icon: Clock, key: 'highlights.items.1' },
  { icon: Award, key: 'highlights.items.2' },
  { icon: Truck, key: 'highlights.items.3' },
  { icon: Wrench, key: 'highlights.items.4' },
  { icon: HeartHandshake, key: 'highlights.items.5' },
];

const Highlights = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">{t('highlights.title')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">{t('highlights.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {highlights.map((item, index) => {
            const translation = t(item.key);
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-white/10 rounded-full mb-2 sm:mb-3 group-hover:bg-orange-500/20 transition-colors">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                </div>
                <h3 className="font-semibold text-xs sm:text-sm mb-1">{translation.title}</h3>
                <p className="text-gray-500 text-[10px] sm:text-xs">{translation.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
