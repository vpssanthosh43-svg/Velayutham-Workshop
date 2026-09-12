import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Rahul S.',
    rating: 5,
    text: 'Excellent service! They fixed my bike\'s engine issue quickly and at a fair price. Highly recommended.',
    date: '2 weeks ago',
    avatar: 'R',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    name: 'Priya K.',
    rating: 5,
    text: 'Very honest and professional team. They explained everything clearly before doing the work.',
    date: '1 month ago',
    avatar: 'P',
    color: 'from-pink-500 to-rose-400',
  },
  {
    name: 'Arun M.',
    rating: 5,
    text: 'Best bike service center in the area. My bike always feels new after visiting them.',
    date: '1 month ago',
    avatar: 'A',
    color: 'from-green-500 to-emerald-400',
  },
  {
    name: 'Sneha R.',
    rating: 5,
    text: 'Great experience! They picked up my bike from home and delivered it after service. Very convenient.',
    date: '2 months ago',
    avatar: 'S',
    color: 'from-purple-500 to-violet-400',
  },
  {
    name: 'Karthik V.',
    rating: 5,
    text: 'Transparent pricing and quality work. I have been going here for 3 years now.',
    date: '3 months ago',
    avatar: 'K',
    color: 'from-orange-500 to-yellow-400',
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-orange-50 relative overflow-hidden" id="reviews">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Real reviews from real customers who trust us with their bikes.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl p-8 sm:p-12 min-h-[320px] flex items-center border border-gray-100">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-center"
              >
                <Quote className="w-14 h-14 text-primary/20 mb-4" />
                <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6 italic">
                  "{reviews[currentIndex].text}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <motion.div 
                    className={`w-14 h-14 bg-gradient-to-br ${reviews[currentIndex].color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                  >
                    {reviews[currentIndex].avatar}
                  </motion.div>
                  <div>
                    <p className="font-semibold text-dark text-lg">{reviews[currentIndex].name}</p>
                    <p className="text-sm text-gray-500">{reviews[currentIndex].date}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary hover:scale-110 transition-all border border-gray-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary hover:scale-110 transition-all border border-gray-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-gradient-to-r from-primary to-orange-500' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
