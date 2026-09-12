import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, RefreshCcw, Award, ThumbsUp } from 'lucide-react';

const guarantees = [
  {
    icon: ShieldCheck,
    title: '30-Day Warranty',
    description: 'If the same problem comes back within 30 days, we fix it free.',
  },
  {
    icon: RefreshCcw,
    title: 'Free Re-Service',
    description: 'Not happy with our work? We will do it again at no cost.',
  },
  {
    icon: Award,
    title: 'Genuine Parts',
    description: 'We use only original parts and show you the old ones.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    description: 'We work until you are completely satisfied.',
  },
];

const ServiceGuarantee = () => {
  return (
    <section className="py-12 sm:py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark mb-3">Our Promise to You</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            We stand behind our work. Here is what you can expect.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {guarantees.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-5 sm:p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-full mb-4">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-dark mb-2">{item.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGuarantee;
