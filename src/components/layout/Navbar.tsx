import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Menu, X, ArrowUpRight, ShieldCheck, Download } from 'lucide-react';
import { SCHOOL_INFO } from '../../data/tisData';
import { ThemeToggle } from '../common/ThemeToggle';

interface NavbarProps {
  onOpenInquiry: () => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, onOpenCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About TIS", href: "#about" },
    { name: "Modern Gurukul", href: "#philosophy" },
    { name: "16+ Sports", href: "#sports" },
    { name: "Boarding Life", href: "#boarding" },
    { name: "Virtual Tour", href: "#virtual-tour" },
    { name: "Rankings", href: "#rankings" },
    { name: "Parent Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Admissions & Helpline Utility Bar */}
      <div className={`bg-brand-crimson text-white text-[11px] md:text-xs font-sans tracking-wide transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'py-1.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-brand-gold-light transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold-light" />
              <span className="font-semibold">Helpline: {SCHOOL_INFO.phone}</span>
            </a>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-white/90">
              <MapPin className="w-3.5 h-3.5 text-brand-gold-light" />
              <span>Dehradun, Uttarakhand</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-brand-gold-light font-medium bg-black/20 px-2 py-0.5 rounded-full border border-brand-gold/30">
              <ShieldCheck className="w-3 h-3" />
              CBSE Affiliation No: 3530463
            </span>
            <button
              onClick={onOpenInquiry}
              className="hidden sm:flex items-center gap-1 hover:underline text-white font-semibold"
            >
              <Download className="w-3 h-3 text-brand-gold-light" />
              Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-lg py-2.5 dark:shadow-black/50'
            : 'bg-white/80 dark:bg-brand-dark/80 backdrop-blur-md py-4 border-b border-black/5 dark:border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & School Branding */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Tula's International School Homepage"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo-crest.svg"
                alt="Tula's International School Crest"
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-extrabold text-lg sm:text-xl text-brand-crimson dark:text-brand-crimson-light tracking-wider leading-none">
                  TULA'S
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">
                  INTERNATIONAL SCHOOL
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-wider text-brand-gold dark:text-brand-gold-light font-medium uppercase mt-0.5">
                The Modern Gurukul • Dehradun
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                data-cursor-text="Explore"
                className="relative px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:text-brand-crimson dark:text-neutral-300 dark:hover:text-brand-gold-light transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-crimson dark:bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
              </a>
            ))}
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Fee Calculator Button (Hidden on smallest mobile) */}
            <button
              onClick={onOpenCalculator}
              data-cursor-text="Calculate"
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-brand-teal/40 hover:border-brand-teal text-brand-teal dark:text-brand-teal-light text-xs font-semibold hover:bg-brand-teal/10 transition-all"
            >
              <span>Fee Estimator</span>
            </button>

            {/* Enquire Now CTA */}
            <button
              onClick={onOpenInquiry}
              data-cursor-text="Apply"
              className="relative group overflow-hidden px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-brand-crimson text-white text-xs sm:text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-brand-crimson/30 transition-all hover:scale-[1.02] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Enquire Now</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-crimson-dark to-brand-crimson opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay & Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white/95 dark:bg-brand-dark/95 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="p-2.5 rounded-lg text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-brand-crimson/10 hover:text-brand-crimson transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCalculator();
                  }}
                  className="w-full py-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-brand-teal dark:text-brand-teal-light font-semibold text-sm border border-teal-200 dark:border-teal-800 text-center"
                >
                  Admission Fee & Grade Estimator
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full py-3 rounded-lg bg-brand-crimson text-white font-bold uppercase tracking-wider text-sm shadow-md"
                >
                  Apply For Session 2025-26
                </button>
              </div>

              <div className="pt-2 text-center text-xs text-neutral-500">
                <p>Admission Helpline: <a href={`tel:${SCHOOL_INFO.phone}`} className="text-brand-crimson font-bold">{SCHOOL_INFO.phone}</a></p>
                <p className="mt-1">Email: <a href={`mailto:${SCHOOL_INFO.email}`} className="underline">{SCHOOL_INFO.email}</a></p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
