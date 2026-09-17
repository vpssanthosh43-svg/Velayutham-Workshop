import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Wrench, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const stats = [
  { icon: Users, value: 5000, suffix: '+', label: 'stats.customers', color: 'from-blue-500 to-cyan-400' },
  { icon: Wrench, value: 12000, suffix: '+', label: 'stats.bikes', color: 'from-orange-500 to-yellow-400' },
  { icon: Award, value: 15, suffix: '+', label: 'stats.years', color: 'from-purple-500 to-pink-400' },
  { icon: ThumbsUp, value: 4.9, suffix: '/5', label: 'stats.rating', color: 'from-green-500 to-emerald-400', isDecimal: true },
];

const Counter = ({ value, suffix, isDecimal }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value, isDecimal]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : count.toLocaleString()}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-primary via-blue-700 to-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 shadow-lg`}>
                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1">
                <Counter value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
              </div>
              <p className="text-white/80 text-sm sm:text-base">{t(stat.label)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
