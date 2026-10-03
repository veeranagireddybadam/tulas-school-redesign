import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Utensils, BookOpen, Trophy, Sparkles, HeartHandshake, Moon, Clock, ShieldCheck } from 'lucide-react';
import { BOARDING_SCHEDULE } from '../../data/tisData';

const iconComponents: Record<string, React.ElementType> = {
  Sun,
  Utensils,
  BookOpen,
  Trophy,
  Sparkles,
  HeartHandshake,
  Moon
};

export const BoardingLifeTimeline: React.FC<{ onOpenInquiry: () => void }> = ({ onOpenInquiry }) => {
  const [activeStep, setActiveStep] = useState(0);
  const currentItem = BOARDING_SCHEDULE[activeStep];
  const CurrentIcon = iconComponents[currentItem.icon] || Clock;

  return (
    <section id="boarding" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-crimson/10 text-brand-crimson dark:text-brand-crimson-light text-xs font-bold uppercase tracking-widest">
          <Clock className="w-3.5 h-3.5" />
          Holistic Routine
        </div>

        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 dark:text-white">
          A Day in the Life of a{' '}
          <span className="crimson-text-gradient">TIS Boarder</span>
        </h2>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans">
          A meticulously balanced diurnal rhythm designed to cultivate self-reliance, academic excellence, physical prowess, and joyful communal bonding.
        </p>
      </div>

      {/* Interactive Time Horizon Bar */}
      <div className="flex items-center justify-between gap-2 overflow-x-auto pb-6 no-scrollbar mb-10 border-b border-neutral-200 dark:border-neutral-800">
        {BOARDING_SCHEDULE.map((item, idx) => {
          const Icon = iconComponents[item.icon] || Clock;
          const isSelected = activeStep === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              data-cursor-text={item.time}
              className={`flex-1 min-w-[120px] p-3 rounded-2xl flex flex-col items-center gap-1.5 transition-all text-center relative ${
                isSelected
                  ? 'bg-brand-crimson text-white shadow-lg scale-105'
                  : 'glass-panel text-neutral-700 dark:text-neutral-300 hover:border-brand-gold/60'
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? 'text-brand-gold-light' : 'text-brand-crimson dark:text-brand-gold'}`} />
              <span className="text-xs font-bold tracking-tight">{item.time}</span>
              <span className="text-[10px] opacity-80 line-clamp-1">{item.title.split(' ')[0]}</span>
              {isSelected && (
                <div className="absolute -bottom-2 w-2 h-2 bg-brand-crimson rotate-45" />
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Schedule Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="glass-panel p-6 sm:p-10 rounded-3xl border border-brand-gold/30 shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
        >
          {/* Left Visual Icon Block */}
          <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-brand-crimson to-brand-crimson-dark flex items-center justify-center text-white shrink-0 shadow-lg border border-brand-gold/40">
            <CurrentIcon className="w-12 h-12 text-brand-gold-light" />
          </div>

          {/* Right Information */}
          <div className="space-y-4 flex-1 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <span className="text-sm font-extrabold uppercase px-3 py-1 rounded-full bg-brand-crimson/15 text-brand-crimson dark:text-brand-gold-light border border-brand-crimson/20">
                {currentItem.time}
              </span>
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                Category: {currentItem.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white">
              {currentItem.title}
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
              {currentItem.description}
            </p>

            {/* Highlights Tags */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-2">
              {currentItem.highlights.map((h, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3 h-3 text-brand-teal" />
                  {h}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pastoral Care & Boarding Philosophy Quote */}
      <div className="mt-14 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#90CCD0]/20 dark:bg-brand-dark-card border border-brand-teal/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <p className="font-serif italic text-base sm:text-lg text-neutral-800 dark:text-neutral-200">
            “When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine.”
          </p>
          <p className="text-xs font-bold uppercase tracking-wider text-brand-teal dark:text-brand-teal-light">
            — TIS Pastoral & House Parent System • 24/7 Security & Medical Care
          </p>
        </div>

        <button
          onClick={onOpenInquiry}
          data-cursor-text="Boarding"
          className="px-6 py-2.5 rounded-full bg-brand-teal hover:bg-[#00656d] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all hover:scale-105 shrink-0"
        >
          Book Boarding Tour
        </button>
      </div>
    </section>
  );
};
