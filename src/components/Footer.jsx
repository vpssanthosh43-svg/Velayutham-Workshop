import React from 'react';
import { motion } from 'framer-motion';
import { Bike, Phone, MessageCircle, MapPin, Clock, Navigation } from 'lucide-react';
import { shopInfo } from '../data/shopInfo';
import { useLanguage } from '../context/LanguageContext';
import { createTamilServiceInquiryMessage, createWhatsAppUrl } from '../whatsapp';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const navLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'pricing', href: '#pricing' },
    { key: 'reviews', href: '#reviews' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-xl">
                <Bike className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">{shopInfo.name}</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">{t('footer.description')}</p>
            <a
              href={shopInfo.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors text-sm group"
            >
              <Navigation className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              {t('footer.getDirections')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a href={link.href} className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {t('footer.serviceList').map((service) => (
                <li key={service} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('footer.contactUs')}</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${shopInfo.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors group">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm">{shopInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={createWhatsAppUrl(createTamilServiceInquiryMessage({}))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
                >
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm">{shopInfo.whatsapp}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-400 text-sm">{shopInfo.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-2 rounded-lg">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-400 text-sm">{t('contact.open7Days')}: {shopInfo.openingHours.weekdays}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 safe-bottom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              &copy; {currentYear} {shopInfo.name}. {t('footer.rights')}
            </p>
            <p className="text-gray-500 text-sm">{t('footer.partner')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
