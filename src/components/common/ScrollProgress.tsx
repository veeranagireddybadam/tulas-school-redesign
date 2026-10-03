import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3.5px] z-[1000] bg-black/10 dark:bg-white/5 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-brand-crimson via-brand-gold to-brand-crimson-light origin-left shadow-[0_0_12px_rgba(185,1,36,0.6)]"
        style={{ scaleX }}
      />
    </div>
  );
};
