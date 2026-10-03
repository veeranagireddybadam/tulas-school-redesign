import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Sparkles, Star } from 'lucide-react';
import { DIGNITARIES_LIST } from '../../data/tisData';

export const DignitariesHall: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-crimson/10 text-brand-crimson dark:text-brand-crimson-light text-xs font-bold uppercase tracking-widest">
          <Users className="w-3.5 h-3.5" />
          Hall of Luminaries
        </div>

        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 dark:text-white">
          Influential Personalities <span className="crimson-text-gradient">On Campus</span>
        </h2>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans">
          From Olympic medalists and national sports captains to union cabinet ministers, luminaries frequently visit TIS to inspire and mentor our students.
        </p>
      </div>

      {/* Grid of Dignitaries */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DIGNITARIES_LIST.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="rounded-3xl overflow-hidden glass-panel border border-brand-gold/30 shadow-md hover:shadow-xl group flex flex-col justify-between"
            data-cursor-text="Dignitary"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-brand-gold-light text-[10px] font-bold uppercase tracking-wider border border-brand-gold/30">
                {item.tag === 'sports' ? 'Olympic / Sports' : 'National Leader'}
              </div>
            </div>

            <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-display font-bold text-neutral-900 dark:text-white group-hover:text-brand-crimson dark:group-hover:text-brand-gold-light transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs font-semibold text-brand-crimson dark:text-brand-crimson-light">
                  {item.role}
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed pt-2">
                  {item.accolade}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-1.5 text-[11px] text-brand-gold font-semibold">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>Guest Mentor at TIS Dehradun</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
