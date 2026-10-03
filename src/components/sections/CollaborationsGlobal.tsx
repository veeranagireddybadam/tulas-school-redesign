import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ExternalLink, ShieldCheck, Award } from 'lucide-react';
import { COLLABORATIONS } from '../../data/tisData';

export const CollaborationsGlobal: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-teal/10 text-brand-teal dark:text-brand-teal-light text-xs font-bold uppercase tracking-widest">
          <Globe className="w-3.5 h-3.5" />
          Global Exposure
        </div>
        <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-neutral-900 dark:text-white">
          12+ International <span className="crimson-text-gradient">Collaborations</span>
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans">
          Facilitating international student exchange, Trinity London music & speech certifications, and university pathway credits.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {COLLABORATIONS.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-4 rounded-2xl glass-panel border border-neutral-200 dark:border-neutral-800 text-center flex flex-col justify-between items-center group shadow-sm hover:shadow-md"
            data-cursor-text={item.country}
          >
            <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-brand-teal dark:text-brand-gold mb-3 group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-neutral-800 dark:text-neutral-200 line-clamp-2">
              {item.name}
            </h4>
            <p className="text-[10px] text-brand-crimson dark:text-brand-gold mt-1">
              {item.type}
            </p>
            <span className="text-[9px] uppercase tracking-wider text-neutral-400 mt-2 bg-neutral-100 dark:bg-neutral-800/60 px-2 py-0.5 rounded-full">
              {item.badge}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
