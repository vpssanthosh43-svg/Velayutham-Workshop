import React from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = ({ variant = 'dark' }) => {
  const { language, changeLanguage, t } = useLanguage();
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-1 rounded-lg p-1 ${isLight ? 'bg-gray-100' : 'bg-white/10'}`}>
      <Globe className={`w-3.5 h-3.5 mx-1 ${isLight ? 'text-gray-500' : 'text-white/70'}`} />
      <motion.button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
          language === 'en'
            ? isLight ? 'bg-primary text-white' : 'bg-white text-primary'
            : isLight ? 'text-gray-600 hover:text-dark' : 'text-white/70 hover:text-white'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t('language.switchToEnglish')}
      >
        EN
      </motion.button>
      <motion.button
        onClick={() => changeLanguage('ta')}
        className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
          language === 'ta'
            ? isLight ? 'bg-primary text-white' : 'bg-white text-primary'
            : isLight ? 'text-gray-600 hover:text-dark' : 'text-white/70 hover:text-white'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t('language.switchToTamil')}
      >
        தமிழ்
      </motion.button>
    </div>
  );
};

export default LanguageToggle;
