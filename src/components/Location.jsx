import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock } from 'lucide-react';
import { shopInfo } from '../data/shopInfo';
import { useLanguage } from '../context/LanguageContext';

const Location = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-light" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="section-title">{t('location.title')}</h2>
          <p className="section-subtitle">{t('location.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 lg:p-8 border border-gray-100"
          >
            <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="bg-primary/10 p-2 sm:p-3 rounded-lg">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-dark mb-1">{t('location.address')}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{shopInfo.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="bg-primary/10 p-2 sm:p-3 rounded-lg">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-dark mb-1">{t('location.openingHours')}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{t('location.weekdays')}: {shopInfo.openingHours.weekdays}</p>
                <p className="text-gray-600 text-sm sm:text-base">{t('location.saturday')}: {shopInfo.openingHours.saturday}</p>
                <p className="text-gray-600 text-sm sm:text-base">{t('location.sunday')}: {shopInfo.openingHours.sunday}</p>
              </div>
            </div>

            <a
              href={shopInfo.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto min-h-[44px]"
            >
              <Navigation className="w-5 h-5" />
              {t('location.getDirections')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-100"
          >
            <iframe
              title={shopInfo.name}
              src={shopInfo.googleMapsEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[250px] sm:h-[350px] lg:h-[400px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
