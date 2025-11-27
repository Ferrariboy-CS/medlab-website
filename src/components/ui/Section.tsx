import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'blue' | 'gradient' | 'dark';
  padding?: 'sm' | 'md' | 'lg';
  pattern?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'white',
  padding = 'lg',
  pattern = false,
}) => {
  const backgrounds = {
    white: 'bg-white dark:bg-slate-900',
    gray: 'bg-gray-50 dark:bg-slate-800/50',
    blue: 'bg-sky-50 dark:bg-sky-950/30',
    gradient: 'bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800 dark:from-sky-900 dark:via-blue-950 dark:to-indigo-950',
    dark: 'bg-slate-900 dark:bg-slate-950',
  };

  const paddings = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-20',
    lg: 'py-20 md:py-28',
  };

  return (
    <section
      id={id}
      className={`
        relative overflow-hidden
        ${backgrounds[background]}
        ${paddings[padding]}
        ${className}
      `}
    >
      {/* Pattern overlay */}
      {pattern && (
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pattern-dots" />
      )}
      
      {/* Gradient decorations for colored sections */}
      {background === 'gradient' && (
        <>
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
        </>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
};

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  center?: boolean;
  className?: string;
  light?: boolean;
  animate?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  subtitle,
  center = false,
  className = '',
  light = false,
  animate = true,
}) => {
  const content = (
    <div className={`mb-12 ${center ? 'text-center mx-auto max-w-3xl' : ''} ${className}`}>
      <h2 className={`
        text-3xl md:text-4xl lg:text-5xl font-bold leading-tight
        ${light ? 'text-white' : 'text-gray-900 dark:text-white'}
      `}>
        {children}
      </h2>
      {subtitle && (
        <p className={`
          mt-4 text-lg md:text-xl
          ${light ? 'text-sky-100' : 'text-gray-600 dark:text-slate-300'}
        `}>
          {subtitle}
        </p>
      )}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedItem: React.FC<AnimatedItemProps> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StatItemProps {
  value: string;
  label: string;
  description?: string;
  light?: boolean;
}

export const StatItem: React.FC<StatItemProps> = ({
  value,
  label,
  description,
  light = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className={`
        text-4xl md:text-5xl lg:text-6xl font-bold mb-2
        ${light 
          ? 'text-white' 
          : 'bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent'
        }
      `}>
        {value}
      </div>
      <div className={`
        text-lg font-semibold
        ${light ? 'text-sky-200' : 'text-gray-900 dark:text-white'}
      `}>
        {label}
      </div>
      {description && (
        <div className={`
          text-sm mt-1
          ${light ? 'text-sky-300' : 'text-gray-500 dark:text-slate-400'}
        `}>
          {description}
        </div>
      )}
    </motion.div>
  );
};
