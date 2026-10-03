import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Flame, Heart, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { PHILOSOPHY_PILLARS } from '../../data/tisData';

const iconTabs = [
  { id: 'mind', label: 'Mind (Academics)', icon: Brain },
  { id: 'body', label: 'Body (16+ Sports)', icon: Flame },
  { id: 'soul', label: 'Soul (Gurukul Values)', icon: Heart }
];

export const PhilosophyGurukul: React.FC<{ onOpenInquiry: () => void }> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<'mind' | 'body' | 'soul'>('mind');
  const activePillar = PHILOSOPHY_PILLARS.find(p => p.id === activeTab) || PHILOSOPHY_PILLARS[0];

  return (
    <section id="philosophy" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-crimson/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-crimson/10 text-brand-crimson dark:text-brand-crimson-light text-xs font-bold uppercase tracking-widest"
        >
          <Sparkles className="w-3.5 h-3.5" />
          The Modern Gurukul Concept
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-neutral-900 dark:text-white"
        >
          Balancing Ancient Wisdom with{' '}
          <span className="crimson-text-gradient">Modern Innovation</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans"
        >
          Established in 2012 under the aegis of <span className="font-semibold text-neutral-900 dark:text-white">Rishabh Educational Trust</span>, TIS redefines residential schooling through seamless opportunities tailored to each student’s inherent calling.
        </motion.p>
      </div>

      {/* Interactive Triad Navigation Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1.5 rounded-full bg-neutral-200/70 dark:bg-neutral-800/80 backdrop-blur-md border border-neutral-300 dark:border-neutral-700">
          {iconTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                data-cursor-text={tab.id}
                className={`relative px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'text-white shadow-md'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePillarTab"
                    className="absolute inset-0 bg-brand-crimson rounded-full"
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Pillar Content Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePillar.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel rounded-3xl p-6 sm:p-10 border border-brand-gold/30 shadow-xl overflow-hidden relative"
        >
          {/* Subtle Ambient Radial Highlight */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
            style={{ backgroundColor: activePillar.glow }}
          />

          {/* Left Textual Detail (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold font-sans">
                {activePillar.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white">
                {activePillar.title}
              </h3>
              <p className="text-sm font-semibold text-brand-crimson dark:text-brand-crimson-light font-serif italic">
                {activePillar.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
              {activePillar.description}
            </p>

            {/* Feature Bullets */}
            <div className="space-y-3 pt-2">
              {activePillar.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal dark:text-brand-teal-light shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenInquiry}
                data-cursor-text="Explore"
                className="px-6 py-2.5 rounded-full bg-brand-crimson hover:bg-brand-crimson-light text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all hover:scale-105 flex items-center gap-2"
              >
                <span>Curriculum Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs text-neutral-500">
                Classes IV to XII • CBSE Affiliated
              </span>
            </div>
          </div>

          {/* Right High-Impact Visual Image (Col 8-12) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/40 group">
              <img
                src={activePillar.image}
                alt={activePillar.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-semibold tracking-wide text-brand-gold-light uppercase">
                  Dehradun Campus Life
                </p>
                <p className="text-sm font-bold">
                  {activePillar.subtitle}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
