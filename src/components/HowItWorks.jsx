import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Wrench, CheckCircle, Bike } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const steps = [
  { icon: PhoneCall, title: 'howItWorks.steps.0.title', description: 'howItWorks.steps.0.description' },
  { icon: Wrench, title: 'howItWorks.steps.1.title', description: 'howItWorks.steps.1.description' },
  { icon: CheckCircle, title: 'howItWorks.steps.2.title', description: 'howItWorks.steps.2.description' },
  { icon: Bike, title: 'howItWorks.steps.3.title', description: 'howItWorks.steps.3.description' },
];

const HowItWorks = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="section-title">{t('howItWorks.title')}</h2>
          <p className="section-subtitle">{t('howItWorks.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto w-14 h-14 sm:w-20 sm:h-20 bg-white border-4 border-primary rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2 sm:px-3 py-1 rounded-full mb-2 sm:mb-3">
                {t('common.step')} {index + 1}
              </span>
              <h3 className="text-sm sm:text-lg font-bold text-dark mb-1 sm:mb-2">{t(step.title)}</h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-base">{t(step.description)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
