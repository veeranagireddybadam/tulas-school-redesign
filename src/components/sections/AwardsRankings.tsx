import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { AWARDS_LIST } from '../../data/tisData';

export const AwardsRankings: React.FC = () => {
  return (
    <section id="rankings" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-crimson/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/15 text-brand-gold dark:text-brand-gold-light text-xs font-bold uppercase tracking-widest border border-brand-gold/30">
          <Trophy className="w-3.5 h-3.5 text-brand-gold" />
          Honours & Accolades
        </div>

        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 dark:text-white">
          Celebrating Excellence &{' '}
          <span className="gold-text-gradient">Perseverance</span>
        </h2>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans">
          “We believe in celebrating the hard work and perseverance of the best!” Repeatedly recognized by India's apex educational ranking agencies.
        </p>
      </div>

      {/* Awards Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AWARDS_LIST.map((award, idx) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="p-6 rounded-3xl glass-panel border border-brand-gold/30 hover:border-brand-gold shadow-md hover:shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden"
            data-cursor-text="Award"
          >
            {/* Top Rank Badge */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-crimson to-brand-crimson-dark flex items-center justify-center text-white shadow-md border border-brand-gold/40 group-hover:scale-105 transition-transform">
                <span className="font-display font-black text-2xl text-brand-gold-light">
                  {award.rank}
                </span>
              </div>

              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold dark:text-brand-gold-light text-[11px] font-bold border border-brand-gold/20">
                <Star className="w-3 h-3 fill-current" />
                <span>{award.year}</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-display font-bold text-neutral-900 dark:text-white group-hover:text-brand-crimson dark:group-hover:text-brand-gold-light transition-colors">
                {award.title}
              </h3>
              <p className="text-xs font-semibold text-brand-teal dark:text-brand-teal-light">
                {award.authority}
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed pt-1">
                {award.description}
              </p>
            </div>

            {/* Bottom Certification Badge */}
            <div className="mt-5 pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500">
              <span className="flex items-center gap-1 text-brand-crimson dark:text-brand-gold font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Ranking
              </span>
              <span className="font-medium text-neutral-400">{award.badge}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
