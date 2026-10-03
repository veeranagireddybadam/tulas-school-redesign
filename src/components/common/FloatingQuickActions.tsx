import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Calculator, ChevronUp, FileText } from 'lucide-react';
import { SCHOOL_INFO } from '../../data/tisData';

interface FloatingQuickActionsProps {
  onOpenInquiry: () => void;
  onOpenCalculator: () => void;
}

export const FloatingQuickActions: React.FC<FloatingQuickActionsProps> = ({
  onOpenInquiry,
  onOpenCalculator,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop / Tablet Floating Side Dock */}
      <div className="fixed right-6 bottom-8 z-40 hidden md:flex flex-col gap-3 items-end">
        {/* Scroll To Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              onClick={scrollToTop}
              data-cursor-text="Top"
              className="p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-950 text-white shadow-lg backdrop-blur-md border border-neutral-700 transition-transform hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-5 h-5 text-brand-gold" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Direct Line */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/919837983791?text=Hello%20Tula's%20International%20School,%20I%20would%20like%20to%20inquire%20about%20admissions."
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-text="WhatsApp"
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl transition-all font-sans text-xs font-semibold tracking-wide"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-out">
            Chat on WhatsApp
          </span>
        </motion.a>

        {/* Admission Fee & Eligibility Calculator */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenCalculator}
          data-cursor-text="Calculate"
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-brand-teal hover:bg-[#00656d] text-white shadow-xl transition-all font-sans text-xs font-semibold tracking-wide border border-teal-400/30"
        >
          <Calculator className="w-4 h-4" />
          <span>Fee & Grade Estimator</span>
        </motion.button>

        {/* Primary Enquire / Apply Now Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenInquiry}
          data-cursor-text="Apply"
          className="flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-brand-crimson to-brand-crimson-dark text-white shadow-[0_4px_20px_rgba(185,1,36,0.4)] border border-brand-gold/40 transition-all font-sans text-xs uppercase font-bold tracking-wider hover:brightness-110"
        >
          <FileText className="w-4 h-4 text-brand-gold-light" />
          <span>Admissions 2025-26</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
          </span>
        </motion.button>
      </div>

      {/* Mobile Sticky Bottom Floating Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 dark:bg-brand-dark-card/95 backdrop-blur-lg border-t border-neutral-200 dark:border-neutral-800 px-3 py-2.5 shadow-2xl flex items-center justify-between gap-2">
        <a
          href={`tel:${SCHOOL_INFO.phone}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] font-semibold"
        >
          <Phone className="w-3.5 h-3.5 text-brand-crimson mb-0.5" />
          <span>Call Helpline</span>
        </a>

        <a
          href="https://wa.me/919837983791?text=Hello%20Tula's%20International%20School,%20I%20would%20like%20to%20inquire%20about%20admissions."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold border border-emerald-200/50 dark:border-emerald-800/40"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenCalculator}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-brand-teal dark:text-brand-teal-light text-[11px] font-semibold border border-teal-200/50 dark:border-teal-800/40"
        >
          <Calculator className="w-3.5 h-3.5 mb-0.5" />
          <span>Fee Check</span>
        </button>

        <button
          onClick={onOpenInquiry}
          className="flex-[1.2] flex items-center justify-center py-2.5 px-3 rounded-lg bg-brand-crimson text-white text-[11px] font-bold uppercase tracking-wider shadow-md"
        >
          <span>Enquire</span>
        </button>
      </div>
    </>
  );
};
