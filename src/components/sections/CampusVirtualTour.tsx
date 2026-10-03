import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Eye, CheckCircle, ExternalLink, Play, Layers } from 'lucide-react';
import { CAMPUS_ZONES } from '../../data/tisData';

interface CampusVirtualTourProps {
  onOpenVirtualTour: () => void;
}

export const CampusVirtualTour: React.FC<CampusVirtualTourProps> = ({ onOpenVirtualTour }) => {
  const [activeZoneId, setActiveZoneId] = useState(CAMPUS_ZONES[0].id);
  const activeZone = CAMPUS_ZONES.find(z => z.id === activeZoneId) || CAMPUS_ZONES[0];

  return (
    <section id="virtual-tour" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-gold/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-crimson/10 text-brand-crimson dark:text-brand-crimson-light text-xs font-bold uppercase tracking-widest">
          <Compass className="w-3.5 h-3.5" />
          Interactive 360° Experience
        </div>

        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 dark:text-white leading-tight">
          Explore Our <span className="crimson-text-gradient">22-Acre</span> Sanctuary
        </h2>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans">
          Take a photorealistic virtual walk through world-class laboratories, pristine Olympic playing fields, and serene residential quarters in the scenic foothills of Dehradun.
        </p>
      </div>

      {/* Zone Switcher Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
        {CAMPUS_ZONES.map((zone) => {
          const isSelected = activeZoneId === zone.id;
          return (
            <button
              key={zone.id}
              onClick={() => setActiveZoneId(zone.id)}
              data-cursor-text={zone.tag}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 border ${
                isSelected
                  ? 'bg-brand-crimson text-white border-brand-crimson shadow-md scale-105'
                  : 'glass-panel text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700 hover:border-brand-gold'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{zone.name.split('&')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Active Zone Interactive Showcase Canvas */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeZone.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4 }}
          className="relative rounded-3xl overflow-hidden glass-panel border border-brand-gold/40 shadow-2xl"
        >
          {/* Main Visual Image */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden group">
            <img
              src={activeZone.image}
              alt={activeZone.name}
              onError={(e) => {
                e.currentTarget.src = '/images/sports-arena.jpg';
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            {/* Center Interactive 360 Action Trigger */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={onOpenVirtualTour}
                data-cursor-text="Tour 360°"
                className="group/btn flex items-center gap-3 px-6 py-3.5 rounded-full bg-black/75 hover:bg-brand-crimson text-white backdrop-blur-md border border-brand-gold/50 shadow-2xl transition-all duration-300 hover:scale-110"
              >
                <div className="w-8 h-8 rounded-full bg-brand-gold/30 flex items-center justify-center group-hover/btn:bg-white text-brand-gold group-hover/btn:text-brand-crimson transition-colors">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-gold-light group-hover/btn:text-white">
                    Click to Launch
                  </p>
                  <p className="text-xs sm:text-sm font-bold">
                    360° Interactive View
                  </p>
                </div>
              </button>
            </div>

            {/* Bottom Content Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
              <div className="space-y-1 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-light bg-black/50 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                  {activeZone.tag} Zone
                </span>
                <h3 className="text-xl sm:text-3xl font-display font-bold">
                  {activeZone.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans">
                  {activeZone.subtitle}
                </p>
              </div>

              {/* Highlights Pill Badges */}
              <div className="flex flex-wrap items-center gap-2">
                {activeZone.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white/90 border border-white/10 flex items-center gap-1.5"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-brand-gold-light" />
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
