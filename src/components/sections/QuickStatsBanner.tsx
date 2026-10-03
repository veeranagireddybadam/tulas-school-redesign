import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Trees, Medal, Users, GraduationCap } from 'lucide-react';
import { CORE_STATS } from '../../data/tisData';

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-6 h-6 text-brand-gold" />,
  Award: <Award className="w-6 h-6 text-brand-crimson" />,
  Trees: <Trees className="w-6 h-6 text-brand-teal" />,
  Medal: <Medal className="w-6 h-6 text-brand-gold" />,
  Users: <Users className="w-6 h-6 text-brand-crimson" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-brand-teal" />
};

export const QuickStatsBanner: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 z-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
      >
        {CORE_STATS.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="p-5 rounded-2xl glass-panel hover:border-brand-gold/60 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
            data-cursor-text={stat.value}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 group-hover:scale-110 transition-transform">
                {iconMap[stat.icon]}
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-gold">
                Certified
              </span>
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 dark:text-white">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-sm font-semibold text-brand-crimson dark:text-brand-gold">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-1 line-clamp-1">
                {stat.label}
              </p>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 line-clamp-2 leading-tight">
                {stat.subtext}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
