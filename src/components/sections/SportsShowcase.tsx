import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Medal, Sparkles, Trophy, ShieldCheck, ArrowRight } from 'lucide-react';
import { SPORTS_LIST } from '../../data/tisData';

const categories = [
  { id: 'all', label: 'All 16+ Sports' },
  { id: 'olympic', label: 'Olympic & Equestrian' },
  { id: 'precision', label: 'Precision (Archery & Shooting)' },
  { id: 'racket', label: 'Racket Sports' },
  { id: 'combat-field', label: 'Combat & Turf' }
];

export const SportsShowcase: React.FC<{ onOpenInquiry: () => void }> = ({ onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSports = selectedCategory === 'all'
    ? SPORTS_LIST
    : SPORTS_LIST.filter(sport => {
        if (selectedCategory === 'olympic') return sport.category === 'olympic';
        if (selectedCategory === 'precision') return sport.category === 'precision';
        if (selectedCategory === 'racket') return sport.category === 'racket';
        if (selectedCategory === 'combat-field') return sport.category === 'combat-field';
        return true;
      });

  return (
    <section id="sports" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-crimson/10 text-brand-crimson dark:text-brand-crimson-light text-xs font-bold uppercase tracking-widest"
        >
          <Medal className="w-3.5 h-3.5" />
          Athletic Excellence
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 dark:text-white leading-tight"
        >
          Sports? It's not just a facility.{' '}
          <br className="hidden sm:inline" />
          At Tula's, it’s the <span className="text-brand-teal dark:text-brand-teal-light italic font-serif">foundation!</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-sans"
        >
          <span className="relative inline-block font-extrabold text-brand-crimson dark:text-brand-gold text-lg px-2">
            16+
            {/* Circular Ring SVG */}
            <svg
              className="absolute -inset-1.5 w-[calc(100%+12px)] h-[calc(100%+12px)] text-brand-gold pointer-events-none"
              viewBox="0 0 60 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="30"
                cy="20"
                rx="26"
                ry="16"
                stroke="#C09D59"
                strokeWidth="2.5"
                strokeDasharray="180"
                strokeDashoffset="0"
              />
            </svg>
          </span>
          <span>Olympic disciplines curated to bring discipline, resilience, and unbridled joy.</span>
        </motion.div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            data-cursor-text={cat.id}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border ${
              selectedCategory === cat.id
                ? 'bg-brand-crimson text-white border-brand-crimson shadow-md scale-105'
                : 'glass-panel text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700 hover:border-brand-gold'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Sports Grid with Interactive Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredSports.map((sport) => (
            <motion.div
              layout
              key={sport.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="rounded-2xl overflow-hidden glass-panel border border-neutral-200/80 dark:border-neutral-800 shadow-md hover:shadow-xl group flex flex-col justify-between"
              data-cursor-text="Sport"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={sport.image}
                  alt={sport.name}
                  onError={(e) => {
                    e.currentTarget.src = '/images/sports-arena.jpg';
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-brand-gold-light text-[10px] font-bold uppercase tracking-wider border border-brand-gold/30">
                  {sport.category}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-xl font-display font-bold leading-tight drop-shadow-sm">
                    {sport.name}
                  </h3>
                  <p className="text-[11px] text-brand-gold-light font-medium line-clamp-1">
                    {sport.facility}
                  </p>
                </div>
              </div>

              {/* Description & Coach Specs */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                  {sport.description}
                </p>

                <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 space-y-1 text-[11px]">
                  <div className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 font-semibold">
                    <Trophy className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                    <span className="line-clamp-1">{sport.coach}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                    <span className="line-clamp-1">{sport.stats}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bottom CTA for Sports Academies */}
      <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-crimson to-brand-crimson-dark text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-brand-gold/40">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-xl sm:text-2xl font-display font-bold">
            Aspiring for National & Olympic Medals?
          </h4>
          <p className="text-xs sm:text-sm text-white/80 max-w-xl">
            Tula's offers specialized sports scholarship assessments and dedicated training camps under Dronacharya & Arjuna Awardee mentors.
          </p>
        </div>

        <button
          onClick={onOpenInquiry}
          data-cursor-text="Trials"
          className="px-6 py-3 rounded-full bg-white text-brand-crimson hover:bg-neutral-100 font-bold text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-105 shrink-0 flex items-center gap-2"
        >
          <span>Inquire for Sports Trials</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
