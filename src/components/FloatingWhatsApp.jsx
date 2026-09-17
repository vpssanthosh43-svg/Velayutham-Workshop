import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { createTamilServiceInquiryMessage, createWhatsAppUrl } from '../whatsapp';

const FloatingWhatsApp = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);
  const { t } = useLanguage();
  const whatsappUrl = createWhatsAppUrl(createTamilServiceInquiryMessage({}));

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isTooltipOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-white rounded-lg shadow-xl p-3 sm:p-4 max-w-[200px] sm:max-w-[220px] relative border border-gray-100"
          >
            <button
              onClick={() => setIsTooltipOpen(false)}
              className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
              aria-label={t('common.close')}
            >
              <X className="w-3 h-3 text-gray-600" />
            </button>
            <p className="text-xs sm:text-sm text-gray-700 font-medium">{t('floatingWhatsapp.tooltip')}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors"
        aria-label={t('floatingWhatsapp.ariaLabel')}
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white" />
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;
