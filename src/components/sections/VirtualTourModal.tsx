import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Compass, ExternalLink, Maximize2, Layers, CheckCircle } from 'lucide-react';
import { CAMPUS_ZONES } from '../../data/tisData';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  isOpen,
  onClose,
  onOpenInquiry
}) => {
  const [selectedZoneIndex, setSelectedZoneIndex] = useState(0);
  const zone = CAMPUS_ZONES[selectedZoneIndex];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* Dark backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-xl"
      />

      {/* Main Tour Viewer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="relative w-full max-w-6xl h-[88vh] bg-neutral-950 rounded-3xl overflow-hidden border border-brand-gold/40 shadow-2xl flex flex-col z-10"
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:px-6 bg-neutral-900/90 border-b border-neutral-800 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-crimson flex items-center justify-center text-white">
              <Compass className="w-5 h-5 text-brand-gold-light animate-spin-slow" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-display font-bold text-white leading-none">
                TIS 360° Virtual Campus Experience
              </h3>
              <p className="text-[11px] text-brand-gold font-medium mt-1">
                22-Acre Pollution-Free Campus • Dehradun
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://tis.edu.in/virtual-tour/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-300 font-semibold"
            >
              <span>Open Full Web Tour</span>
              <ExternalLink className="w-3 h-3 text-neutral-400" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close virtual tour"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center 360 Simulation Viewport */}
        <div className="relative flex-1 bg-black overflow-hidden group">
          <img
            src={zone.image}
            alt={zone.name}
            onError={(e) => {
              e.currentTarget.src = '/images/sports-arena.jpg';
            }}
            className="w-full h-full object-cover transition-all duration-700 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

          {/* Interactive Floating Hotspots */}
          <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 group/hotspot">
            <div className="relative flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-brand-gold opacity-75"></span>
              <div className="relative w-5 h-5 rounded-full bg-brand-crimson border-2 border-white flex items-center justify-center text-[10px] text-white font-bold cursor-pointer">
                +
              </div>
            </div>
            <div className="hidden group-hover/hotspot:block absolute top-6 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-lg text-[11px] text-white whitespace-nowrap shadow-xl border border-brand-gold/40">
              Interactive Hotspot: {zone.highlights[0]}
            </div>
          </div>

          <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 group/hotspot2">
            <div className="relative flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-brand-teal opacity-75"></span>
              <div className="relative w-5 h-5 rounded-full bg-brand-teal border-2 border-white flex items-center justify-center text-[10px] text-white font-bold cursor-pointer">
                +
              </div>
            </div>
            <div className="hidden group-hover/hotspot2:block absolute top-6 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-lg text-[11px] text-white whitespace-nowrap shadow-xl border border-brand-gold/40">
              Facility: {zone.highlights[1]}
            </div>
          </div>

          {/* Overlay Details */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="space-y-1 max-w-lg">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold-light bg-black/60 px-2.5 py-0.5 rounded-full border border-brand-gold/30">
                Current Zone: {zone.tag}
              </span>
              <h4 className="text-xl sm:text-2xl font-display font-bold">
                {zone.name}
              </h4>
              <p className="text-xs text-neutral-300">
                {zone.subtitle}
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="px-6 py-2.5 rounded-full bg-brand-crimson hover:bg-brand-crimson-light text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-105 shrink-0"
            >
              Schedule In-Person Campus Walk
            </button>
          </div>
        </div>

        {/* Bottom Zone Switcher Bar */}
        <div className="p-3 sm:p-4 bg-neutral-900 border-t border-neutral-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {CAMPUS_ZONES.map((z, idx) => (
            <button
              key={z.id}
              onClick={() => setSelectedZoneIndex(idx)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                selectedZoneIndex === idx
                  ? 'bg-brand-crimson text-white border-brand-crimson'
                  : 'bg-neutral-800 text-neutral-400 border-neutral-700 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{z.name.split('&')[0]}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
