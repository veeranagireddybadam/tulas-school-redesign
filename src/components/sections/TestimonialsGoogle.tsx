import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck, MapPin } from 'lucide-react';
import { TESTIMONIALS_LIST, SCHOOL_INFO } from '../../data/tisData';

export const TestimonialsGoogle: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_LIST.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_LIST.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = TESTIMONIALS_LIST[currentIndex];

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        {/* Google Reviews Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-neutral-800 shadow-md border border-neutral-200 dark:border-neutral-700">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
            {SCHOOL_INFO.googleRating} / 5.0 Rating on Google Reviews
          </span>
          <span className="text-[11px] text-neutral-400 font-medium">
            ({SCHOOL_INFO.googleReviewCount}+ Reviews)
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 dark:text-white">
          Voices of Our <span className="crimson-text-gradient">Parent Family</span>
        </h2>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans">
          Hear firsthand stories of personal growth, academic breakthroughs, and lifelong bonds nurtured at Tula's.
        </p>
      </div>

      {/* Featured Testimonial Card */}
      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="p-8 sm:p-12 rounded-3xl glass-panel border border-brand-gold/40 shadow-2xl relative overflow-hidden"
          >
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-brand-gold/20 absolute top-6 right-8" />

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Parent Photo */}
              <div className="relative">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.parentName}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-brand-gold/60 shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 p-1 bg-brand-crimson text-white rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Text & Attribution */}
              <div className="space-y-4 flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 font-serif italic leading-relaxed">
                  “{currentTestimonial.quote}”
                </p>

                <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base font-display font-bold text-neutral-900 dark:text-white">
                      {currentTestimonial.parentName}
                    </h4>
                    <p className="text-xs text-brand-crimson dark:text-brand-gold font-semibold">
                      {currentTestimonial.relation} ({currentTestimonial.grade})
                    </p>
                  </div>

                  <div className="flex items-center justify-center sm:justify-end gap-1 text-xs text-neutral-500">
                    <MapPin className="w-3.5 h-3.5 text-brand-teal" />
                    <span>{currentTestimonial.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Control Buttons */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            data-cursor-text="Prev"
            className="p-3 rounded-full glass-panel hover:border-brand-gold text-neutral-700 dark:text-neutral-300 hover:text-brand-crimson shadow-md transition-transform hover:scale-110"
            aria-label="Previous parent review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS_LIST.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'w-6 bg-brand-crimson' : 'w-2 bg-neutral-300 dark:bg-neutral-700'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            data-cursor-text="Next"
            className="p-3 rounded-full glass-panel hover:border-brand-gold text-neutral-700 dark:text-neutral-300 hover:text-brand-crimson shadow-md transition-transform hover:scale-110"
            aria-label="Next parent review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
