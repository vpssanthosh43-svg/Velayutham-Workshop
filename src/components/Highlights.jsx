import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Truck, Wrench, HeartHandshake } from 'lucide-react';

const highlights = [
  {
    icon: Shield,
    title: 'Genuine Parts',
    description: 'Only original spare parts',
  },
  {
    icon: Clock,
    title: 'Quick Service',
    description: 'Ready in 2-3 hours',
  },
  {
    icon: Award,
    title: 'Expert Mechanics',
    description: '15+ years experience',
  },
  {
    icon: Truck,
    title: 'Free Pickup',
    description: 'Within 10km radius',
  },
  {
    icon: Wrench,
    title: 'All Brands',
    description: 'Every bike brand',
  },
  {
    icon: HeartHandshake,
    title: '30-Day Warranty',
    description: 'On all services',
  },
];

const Highlights = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">What Makes Us Different</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            We give you the best service experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-white/10 rounded-full mb-2 sm:mb-3 group-hover:bg-orange-500/20 transition-colors">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
              </div>
              <h3 className="font-semibold text-xs sm:text-sm mb-1">{item.title}</h3>
              <p className="text-gray-500 text-[10px] sm:text-xs">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
