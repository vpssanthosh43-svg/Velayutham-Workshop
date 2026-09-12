import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, X } from 'lucide-react';
import { shopInfo } from '../data/shopInfo';

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      const isOpenNow = hour >= 7 && hour < 19.5;
      setIsOpen(isOpenNow);
    };
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
          <span>{isOpen ? 'Open Now' : 'Closed'}</span>
        </div>
        <span className="hidden sm:inline text-white/60">|</span>
        <div className="hidden sm:flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Mon-Sun: 7AM - 7:30PM</span>
        </div>
        <span className="hidden sm:inline text-white/60">|</span>
        <a href={`tel:${shopInfo.phone}`} className="flex items-center gap-2 hover:text-orange-300 transition-colors">
          <Phone className="w-4 h-4" />
          <span>{shopInfo.phone}</span>
        </a>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default TopBar;
