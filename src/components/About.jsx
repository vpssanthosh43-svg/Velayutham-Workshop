import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, BadgeCheck, HeartHandshake } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Honest Service',
      description: 'No hidden charges. We explain the problem and cost before starting work.',
      color: 'from-blue-500 to-cyan-400',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Clock,
      title: '15+ Years Experience',
      description: 'Our mechanics have years of experience fixing all types of bikes.',
      color: 'from-orange-500 to-yellow-400',
      bgColor: 'bg-orange-50',
    },
    {
      icon: BadgeCheck,
      title: 'Quality Parts',
      description: 'We use only genuine spare parts that last longer.',
      color: 'from-green-500 to-emerald-400',
      bgColor: 'bg-green-50',
    },
    {
      icon: HeartHandshake,
      title: 'Customer First',
      description: 'Your happiness is our goal. We work until you are satisfied.',
      color: 'from-purple-500 to-pink-400',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden" id="about">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="section-title">Why Customers Trust Us</h2>
          <p className="section-subtitle">
            We are your neighborhood bike mechanics. Simple, honest, and reliable service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card p-6 sm:p-8 group cursor-pointer"
            >
              <motion.div 
                className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
