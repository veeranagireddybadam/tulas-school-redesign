import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';
import { SCHOOL_INFO } from '../../data/tisData';

interface FooterProps {
  onOpenInquiry: () => void;
  onOpenCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry, onOpenCalculator }) => {
  const currentYear = 2026;

  const quickLinks = [
    { name: "About Tula's", href: "#about" },
    { name: "The Modern Gurukul", href: "#philosophy" },
    { name: "16+ Olympic Sports", href: "#sports" },
    { name: "Boarding Life 24/7", href: "#boarding" },
    { name: "Virtual Tour 360°", href: "#virtual-tour" },
    { name: "Awards & Rankings", href: "#rankings" },
    { name: "Parent Testimonials", href: "#reviews" },
    { name: "Admissions Criteria", href: "#admissions" },
  ];

  const policyLinks = [
    { name: "Mandatory Public Disclosure", href: "https://tis.edu.in/mandatory-disclosure/" },
    { name: "Child Welfare & Safety Policy", href: "https://tis.edu.in/MandatoryPDF/childWelfarePolicy.pdf" },
    { name: "Anti-Bullying & Disciplinary Code", href: "https://tis.edu.in/MandatoryPDF/DisciplinaryPolicy.pdf" },
    { name: "Digital & Mobile Phone Policy", href: "https://tis.edu.in/MandatoryPDF/MobilePhonePolicy.pdf" },
    { name: "Academic Calendar 2025-26", href: "https://tis.edu.in/MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf" },
    { name: "School Prospectus Brochure", href: "https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf" },
    { name: "Privacy Policy", href: "https://tis.edu.in/privacy-policy/" },
    { name: "Terms & Conditions", href: "https://tis.edu.in/terms-conditions/" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/tulasinternationalschool/", icon: "FB" },
    { name: "Instagram", href: "https://www.instagram.com/tulasinternationalschool/", icon: "IG" },
    { name: "YouTube", href: "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw", icon: "YT" },
    { name: "LinkedIn", href: "https://www.linkedin.com/school/tulas-international-school/", icon: "IN" },
    { name: "Twitter/X", href: "https://twitter.com/tulas_intschool", icon: "X" },
  ];

  return (
    <footer id="contact" className="relative bg-[#0B0C10] text-neutral-300 pt-16 pb-12 border-t border-brand-gold/20 overflow-hidden font-sans">
      {/* Decorative Golden Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-brand-crimson/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Highlight Banner */}
        <div className="bg-gradient-to-r from-brand-crimson/20 via-brand-dark-card to-brand-gold/10 p-6 md:p-10 rounded-3xl border border-brand-gold/30 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-brand-gold-light font-bold">
              Admissions Open for Session {SCHOOL_INFO.admissionsSession}
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              Shape Your Child's Future in the Himalayan Foothills
            </h3>
            <p className="text-sm text-neutral-400 max-w-xl">
              Connect with our Admissions Counsellors today or schedule an in-person guided campus walk of our 22-acre campus.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenCalculator}
              data-cursor-text="Fee"
              className="px-5 py-3 rounded-full border border-brand-teal/50 hover:border-brand-teal text-brand-teal-light text-xs font-bold uppercase tracking-wider hover:bg-brand-teal/15 transition-all"
            >
              Fee Calculator
            </button>
            <button
              onClick={onOpenInquiry}
              data-cursor-text="Apply"
              className="px-6 py-3 rounded-full bg-brand-crimson hover:bg-brand-crimson-light text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-brand-crimson/40 transition-all hover:scale-105"
            >
              Start Online Application
            </button>
            <a
              href="https://tis.fedena.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold hover:text-white transition-all flex items-center gap-1.5"
            >
              <span>Fedena ERP Login</span>
              <ExternalLink className="w-3 h-3 text-neutral-400" />
            </a>
          </div>
        </div>

        {/* 4-Column Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand Info & Address (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-crest.svg"
                alt="Tula's International School"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h4 className="font-display font-extrabold text-white text-lg tracking-wider">
                  TULA'S INTERNATIONAL SCHOOL
                </h4>
                <p className="text-xs text-brand-gold font-medium tracking-wide">
                  The Modern Gurukul • Dehradun, India
                </p>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Established in 2012 under the aegis of Rishabh Educational Trust. A CBSE-affiliated co-educational residential sanctuary empowering leaders of tomorrow across Mind, Body, and Soul.
            </p>

            <div className="space-y-2 text-xs text-neutral-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-brand-gold-light transition-colors">
                  Helpline: {SCHOOL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Landline: {SCHOOL_INFO.landline}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-brand-gold-light transition-colors">
                  {SCHOOL_INFO.email}
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow TIS on ${s.name}`}
                  className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-brand-crimson border border-neutral-800 hover:border-brand-gold/50 flex items-center justify-center text-xs font-bold text-neutral-300 hover:text-white transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Exploration Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-bold tracking-widest uppercase text-white font-display border-b border-brand-gold/30 pb-2">
              Explore TIS
            </h5>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-brand-gold-light transition-colors flex items-center gap-1 group"
                  >
                    <span className="text-brand-crimson transition-transform group-hover:translate-x-0.5">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mandatory & Governance Policies (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold tracking-widest uppercase text-white font-display border-b border-brand-gold/30 pb-2">
              Governance & Policies
            </h5>
            <ul className="space-y-2 text-xs">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-brand-gold-light transition-colors flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:text-brand-gold transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Real Campus Map Embed (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold tracking-widest uppercase text-white font-display border-b border-brand-gold/30 pb-2">
              Visit Campus in Person
            </h5>
            <div className="w-full h-44 rounded-xl overflow-hidden border border-neutral-800 shadow-md relative group">
              <iframe
                title="Tula's International School Campus Map"
                src="https://maps.google.com/maps?q=Dhoolkot%2C%20P.O%20-%20Selaqui%2C%20Chakrata%20Road%20Dehradun%2C%20Uttarakhand%20India&t=m&z=12&output=embed&iwloc=near"
                className="w-full h-full border-0 filter contrast-125 opacity-80 group-hover:opacity-100 transition-opacity"
                loading="lazy"
                aria-label="Map location of Tula's International School, Dehradun"
              />
              <a
                href="https://maps.app.goo.gl/maBF8syXueQkw31E6"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-black/80 hover:bg-black text-[10px] text-brand-gold font-semibold flex items-center gap-1 backdrop-blur-sm"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
            <p className="text-[11px] text-neutral-400">
              Campus visiting hours: Monday – Saturday, 9:00 AM to 5:00 PM. Prior appointment recommended.
            </p>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>
            Copyright © {currentYear} Tula's International School, Dehradun. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-neutral-400">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              CBSE Affiliated Residential Institution
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
