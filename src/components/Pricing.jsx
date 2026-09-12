import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, Check, Phone, Sparkles, Crown } from 'lucide-react';
import { shopInfo } from '../data/shopInfo';

const Pricing = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-orange-50 relative overflow-hidden" id="pricing">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="section-title">Simple & Transparent Pricing</h2>
          <p className="section-subtitle">
            No surprises. Know the cost before we start any work.
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
            style={{
              boxShadow: isHovered ? '0 25px 50px -12px rgba(249, 115, 22, 0.25)' : '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
            }}
          >
            <motion.div 
              className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary via-orange-500 to-primary text-white text-sm font-bold px-6 py-2 rounded-full flex items-center gap-2 shadow-lg"
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            >
              <Crown className="w-4 h-4" />
              Best Value
              <Sparkles className="w-4 h-4" />
            </motion.div>

            <div className="text-center mb-8 pt-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-2">General Service</h3>
              <p className="text-gray-500 mb-6">Complete check-up and maintenance for your bike</p>
              <motion.div 
                className="flex items-center justify-center gap-1"
                animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
              >
                <IndianRupee className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                <span className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">350</span>
                <span className="text-gray-400 text-lg">onwards</span>
              </motion.div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />

            <ul className="space-y-4 mb-8">
              {[
                'Full bike inspection',
                'Engine oil change',
                'Chain cleaning & lubrication',
                'Brake adjustment',
                'Tyre pressure check',
                'Lights & electrical check',
              ].map((feature, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href={`https://wa.me/${shopInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hello! I want to book General Service.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold transition-all duration-300 min-h-[52px] bg-gradient-to-r from-primary to-orange-500 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Phone className="w-5 h-5" />
              Book Service Now
            </a>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-8 text-sm"
        >
          * Final price depends on bike model and condition. We will confirm before starting work.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
