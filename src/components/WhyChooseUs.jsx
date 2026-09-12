import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, IndianRupee, Clock } from 'lucide-react';
import { whyChooseUs } from '../data/shopInfo';

const iconMap = {
  Users,
  CheckCircle,
  IndianRupee,
  Clock,
};

const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Here is why thousands of customers trust us with their bikes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon] || CheckCircle;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-light to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="bg-secondary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-dark mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-base">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
