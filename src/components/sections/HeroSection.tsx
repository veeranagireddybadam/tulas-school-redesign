import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Award, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../../data/tisData';

interface HeroSectionProps {
  onOpenInquiry: () => void;
  onOpenVirtualTour: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry, onOpenVirtualTour }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-noise">
      {/* Background Ambient Glows & Mountain Silhouette */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep Crimson Radial Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-crimson/10 dark:bg-brand-crimson/15 blur-[140px] rounded-full" />
        {/* Subtle Gold Accent Glow */}
        <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-brand-gold/10 dark:bg-brand-gold/15 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        {/* Live Admissions Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border-brand-gold/40 shadow-sm mb-6 group cursor-pointer"
          onClick={onOpenInquiry}
          data-cursor-text="Admissions"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-crimson opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-crimson"></span>
          </span>
          <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
            Admissions Open 2025–26 & 2026–27
          </span>
          <span className="text-[11px] text-brand-crimson dark:text-brand-gold-light font-bold flex items-center group-hover:translate-x-0.5 transition-transform">
            Class IV – XII ›
          </span>
        </motion.div>

        {/* Main Catchphrase with Signature TIS Scribble */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="space-y-4 max-w-4xl"
        >
          <p className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-brand-gold dark:text-brand-gold-light font-sans">
            A Legacy of Excellence in Dehradun • Estd. 2012
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-neutral-900 dark:text-white tracking-tight leading-[1.08]">
            LET’S DO <span className="italic font-serif font-light text-brand-crimson dark:text-brand-crimson-light">IT</span> WITH{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="crimson-text-gradient">TULA’S</span>
              {/* Hand-drawn Golden Scribble Loop */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-4 text-brand-gold overflow-visible pointer-events-none"
                viewBox="0 0 268 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11C49.8 7.5 112.6 10.9 154.2 7.8C195.8 4.7 266 7.5 266 7.5C197.3 9.8 124 12.8 80.6 12.8"
                  stroke="#C09D59"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  className="animate-draw"
                />
              </svg>
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-neutral-700 dark:text-neutral-300 font-normal pt-2">
            The Modern Gurukul • Mind, Body & Soul
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto font-sans leading-relaxed pt-2">
            Nestled across a <span className="font-semibold text-neutral-900 dark:text-white">22-acre pollution-free sanctuary</span> in the Shivalik foothills of Dehradun. Blending traditional Indian values with world-class CBSE academics and <span className="font-semibold text-brand-crimson dark:text-brand-gold">16+ Olympic sports</span>.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 pt-8"
        >
          <button
            onClick={onOpenInquiry}
            data-cursor-text="Apply"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-crimson to-brand-crimson-dark text-white font-bold text-sm uppercase tracking-wider shadow-[0_4px_25px_rgba(185,1,36,0.35)] hover:shadow-[0_8px_30px_rgba(185,1,36,0.5)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group border border-brand-gold/30"
          >
            <span>Apply For Admission</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onOpenVirtualTour}
            data-cursor-text="360°"
            className="px-7 py-3.5 rounded-full glass-card hover:border-brand-gold text-neutral-900 dark:text-white font-semibold text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2.5 shadow-sm group"
          >
            <div className="w-7 h-7 rounded-full bg-brand-gold/20 flex items-center justify-center group-hover:bg-brand-crimson group-hover:text-white transition-colors">
              <Compass className="w-4 h-4 text-brand-gold group-hover:text-white transition-colors" />
            </div>
            <span>Explore 22-Acre Campus 360°</span>
          </button>
        </motion.div>

        {/* Hero Interactive Media Visual Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="w-full max-w-5xl mt-12 relative rounded-3xl overflow-hidden shadow-2xl border border-brand-gold/30 group"
        >
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            {/* Visual background image representing TIS modern residential campus */}
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop"
              alt="Tula's International School Campus in Dehradun"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

            {/* Overlaid Floating Badges */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div className="text-left space-y-1 max-w-md">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-brand-gold-light text-xs font-semibold border border-brand-gold/30">
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                  Modern Gurukul Pedagogy
                </span>
                <h3 className="text-lg sm:text-2xl font-display font-bold text-white leading-tight drop-shadow-md">
                  Empowering Global Scholars & Olympic Champions
                </h3>
              </div>

              {/* Floating Pill Highlights */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 dark:bg-black/80 backdrop-blur-md border border-brand-gold/40 text-xs font-bold text-neutral-800 dark:text-neutral-200 shadow-lg">
                  <Award className="w-4 h-4 text-brand-crimson" />
                  <span>#1 Co-Ed Boarding School</span>
                </div>

                <button
                  onClick={onOpenVirtualTour}
                  data-cursor-text="Play"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-crimson hover:bg-brand-crimson-light text-white text-xs font-bold tracking-wide shadow-lg transition-transform hover:scale-105"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Campus Film</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
