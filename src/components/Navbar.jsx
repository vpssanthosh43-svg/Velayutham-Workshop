import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { shopInfo } from '../data/shopInfo';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

const navLinks = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'pricing', href: '#pricing' },
  { key: 'reviews', href: '#reviews' },
  { key: 'contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <span
              className={`text-lg sm:text-xl font-bold ${scrolled ? 'text-primary' : 'text-white'}`}
            >
              {shopInfo.name}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-orange-400 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
            <LanguageToggle variant={scrolled ? 'light' : 'dark'} />
            <a
              href={`tel:${shopInfo.phone}`}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              {t('common.callNow')}
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
            aria-label={isOpen ? t('common.closeMenu') : t('common.openMenu')}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-1">
              <LanguageToggle variant="light" />
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 active:bg-gray-100 transition-colors min-h-[44px] flex items-center"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-100 mt-3">
                <a
                  href={`tel:${shopInfo.phone}`}
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors min-h-[44px]"
                >
                  <Phone className="w-5 h-5" />
                  {t('common.callUs')}: {shopInfo.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
