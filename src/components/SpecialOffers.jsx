import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Gift, Percent, Clock } from 'lucide-react';
import { shopInfo } from '../data/shopInfo';

const offers = [
  {
    icon: Tag,
    title: 'First Service 20% Off',
    description: 'New customer? Get 20% off on your first service.',
    code: 'FIRST20',
    color: 'bg-green-500',
  },
  {
    icon: Gift,
    title: 'Free Pickup & Drop',
    description: 'We pick up and drop your bike for free within 10km.',
    code: 'FREEPD',
    color: 'bg-blue-500',
  },
  {
    icon: Percent,
    title: 'Refer & Get ₹100 Off',
    description: 'Refer a friend and both get ₹100 off.',
    code: 'REFER100',
    color: 'bg-purple-500',
  },
  {
    icon: Clock,
    title: 'Same Day Service',
    description: 'Book before 10 AM and get your bike same day.',
    code: 'QUICK',
    color: 'bg-orange-500',
  },
];

const SpecialOffers = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-orange-50 to-yellow-50" id="offers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-full mb-4">
            <Gift className="w-7 h-7 sm:w-8 sm:h-8 text-orange-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark mb-3">Special Offers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Save money with these exclusive deals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-20 h-20 ${offer.color} opacity-10 rounded-bl-full`} />
              
              <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 ${offer.color} rounded-lg mb-4`}>
                <offer.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              
              <h3 className="text-base sm:text-lg font-bold text-dark mb-2">{offer.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-4">{offer.description}</p>
              
              <div className="bg-gray-100 text-gray-700 text-xs font-mono font-bold px-2 py-1 rounded inline-block">
                Code: {offer.code}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href={`https://wa.me/${shopInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hello! I want to know about special offers.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 min-h-[44px]"
          >
            <Gift className="w-5 h-5" />
            Get Offers on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffers;
