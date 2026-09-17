import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Clock, Send } from 'lucide-react';
import { shopInfo } from '../data/shopInfo';
import { useLanguage } from '../context/LanguageContext';
import { createTamilServiceInquiryMessage, createWhatsAppUrl } from '../whatsapp';

const serviceOptions = [
  'services.general',
  'services.engineRepair',
  'services.oilChange',
  'services.brakeService',
  'services.tyreService',
  'services.electricalWork',
  'services.other',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const { t } = useLanguage();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = createTamilServiceInquiryMessage(formData);
    window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden" id="contact">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">{t('contact.title')}</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">{t('contact.contactInformation')}</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">{t('contact.description')}</p>

            <div className="space-y-6">
              <a href={`tel:${shopInfo.phone}`} className="flex items-center gap-4 group">
                <motion.div 
                  className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Phone className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h4 className="font-semibold mb-1">{t('contact.callUs')}</h4>
                  <p className="text-gray-400">{shopInfo.phone}</p>
                </div>
              </a>

              <a
                href={createWhatsAppUrl(createTamilServiceInquiryMessage({}))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <motion.div 
                  className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h4 className="font-semibold mb-1">{t('contact.whatsapp')}</h4>
                  <p className="text-gray-400">{shopInfo.whatsapp}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <motion.div 
                  className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h4 className="font-semibold mb-1">{t('contact.visitUs')}</h4>
                  <p className="text-gray-400">{shopInfo.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <motion.div 
                  className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-xl shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Clock className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h4 className="font-semibold mb-1">{t('contact.workingHours')}</h4>
                  <p className="text-gray-400">{t('contact.open7Days')}: {shopInfo.openingHours.weekdays}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">{t('contact.sendUsMessage')}</h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">{t('contact.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">{t('contact.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder={t('contact.phonePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">{t('contact.service')}</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  >
                    <option value="" className="bg-gray-900">{t('common.selectService')}</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service} className="bg-gray-900">{t(service)}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">{t('contact.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 min-h-[52px] shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <Send className="w-5 h-5" />
                  {t('contact.send')}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
