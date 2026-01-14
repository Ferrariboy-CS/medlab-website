import type { Variants } from 'framer-motion';

const baseTransition = {
  duration: 0.5,
  ease: [0.25, 0.8, 0.4, 1] as const,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...baseTransition, duration: 0.6 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...baseTransition, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] },
  },
};

export const staggerContainer = (stagger = 0.12, delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});
