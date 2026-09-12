import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Wrench, CheckCircle, Bike } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Call or WhatsApp',
    description: 'Contact us to book your service',
    step: '1',
  },
  {
    icon: Wrench,
    title: 'We Check Your Bike',
    description: 'Our mechanic inspects and tells you the cost',
    step: '2',
  },
  {
    icon: CheckCircle,
    title: 'We Fix It',
    description: 'Expert service with genuine parts',
    step: '3',
  },
  {
    icon: Bike,
    title: 'Take Your Bike Home',
    description: 'Ride safe with our quality guarantee',
    step: '4',
  },
];

const HowItWorks = () => {
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
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Getting your bike serviced is easy. Just 4 simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
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
                Step {step.step}
              </span>
              <h3 className="text-sm sm:text-lg font-bold text-dark mb-1 sm:mb-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
