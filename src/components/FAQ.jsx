import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How often should I service my bike?',
    answer: 'Every 2-3 months or 2000-3000 km. Regular service keeps your bike running smooth and saves money on big repairs.',
  },
  {
    question: 'Do you provide pickup and drop?',
    answer: 'Yes! Free pickup and drop within 10 km. Just call or WhatsApp us to arrange.',
  },
  {
    question: 'Which bike brands do you service?',
    answer: 'All brands! Honda, Hero, TVS, Bajaj, Royal Enfield, Yamaha, Suzuki, KTM, and more.',
  },
  {
    question: 'How long does service take?',
    answer: 'General service takes 2-3 hours. Major repairs may take 1-2 days. We always tell you the time before starting.',
  },
  {
    question: 'Do you use genuine parts?',
    answer: 'Yes, always. We use genuine OEM parts and show you the old parts before replacing them.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'Cash, UPI (GPay, PhonePe, Paytm), and cards. Pay however you are comfortable.',
  },
  {
    question: 'Is there any warranty?',
    answer: 'Yes! 30-day warranty on all services. If the same problem comes back, we fix it free.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-light" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-3 sm:mb-4">
            <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </div>
          <h2 className="section-title">Common Questions</h2>
          <p className="section-subtitle">
            Quick answers to questions our customers ask.
          </p>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-50 active:bg-gray-100 transition-colors min-h-[56px]"
              >
                <span className="font-semibold text-dark pr-4 text-sm sm:text-base">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-3 sm:pt-4 text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
