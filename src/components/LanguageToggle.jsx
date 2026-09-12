import React from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1">
      <motion.button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
          language === 'en' ? 'bg-white text-primary' : 'text-white/70 hover:text-white'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Switch to English"
      >
        EN
      </motion.button>
      <motion.button
        onClick={() => changeLanguage('ta')}
        className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
          language === 'ta' ? 'bg-white text-primary' : 'text-white/70 hover:text-white'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Switch to Tamil"
      >
        தமிழ்
      </motion.button>
    </div>
  );
};

export default LanguageToggle;
