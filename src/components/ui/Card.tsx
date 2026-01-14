import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  id?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  animate?: boolean;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  onClick,
  id,
  variant = 'default',
  animate = false,
  delay = 0,
}) => {
  const variants = {
    default: `
      bg-white dark:bg-slate-800 
      border border-gray-100 dark:border-slate-700 
      shadow-sm dark:shadow-slate-900/20
    `,
    elevated: `
      bg-white dark:bg-slate-800 
      shadow-lg dark:shadow-slate-900/30
      border border-gray-50 dark:border-slate-700
    `,
    outlined: `
      bg-transparent 
      border-2 border-gray-200 dark:border-slate-600
    `,
    glass: `
      bg-white/70 dark:bg-slate-800/70 
      backdrop-blur-xl 
      border border-white/20 dark:border-slate-700/50
      shadow-lg
    `,
  };

  const hoverStyles = hover
    ? `
      cursor-pointer
      hover:shadow-xl dark:hover:shadow-slate-900/40
      hover:border-red-200 dark:hover:border-red-900/60
      hover:-translate-y-1
      transition-all dur-300 ease-smooth
    `
    : '';

  const cardContent = (
    <div
      id={id}
      className={`
        rounded-2xl overflow-hidden
        ${variants[variant]}
        ${hoverStyles}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
};

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'wide';
}

export const CardImage: React.FC<CardImageProps> = ({ 
  src, 
  alt, 
  className = '',
  aspectRatio = 'video'
}) => {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    wide: 'aspect-[2/1]',
  };

  return (
    <div className={`relative overflow-hidden bg-gray-100 dark:bg-slate-700 ${aspectClasses[aspectRatio]} ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Image';
        }}
      />
    </div>
  );
};

interface CardPlaceholderProps {
  icon?: React.ReactNode;
  label?: string;
  className?: string;
}

export const CardPlaceholder: React.FC<CardPlaceholderProps> = ({
  icon,
  label,
  className = 'h-44',
}) => (
  <div className={`
    bg-gradient-to-br from-rose-50 to-red-100 
    dark:from-slate-800 dark:to-slate-700
    flex flex-col items-center justify-center gap-2
    ${className}
  `}>
    {icon && (
      <div className="text-red-400 dark:text-red-300">
        {icon}
      </div>
    )}
    {label && (
      <span className="text-xs text-red-600 dark:text-red-300 font-medium">
        {label}
      </span>
    )}
  </div>
);

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-5 ${className}`}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h2' | 'h3' | 'h4';
}

export const CardTitle: React.FC<CardTitleProps> = ({ 
  children, 
  className = '',
  as: Component = 'h3'
}) => {
  return (
    <Component className={`
      text-lg font-semibold 
      text-gray-900 dark:text-white 
      ${className}
    `}>
      {children}
    </Component>
  );
};

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = '' }) => {
  return (
    <p className={`
      text-gray-600 dark:text-slate-300 
      mt-1.5 leading-relaxed
      ${className}
    `}>
      {children}
    </p>
  );
};

interface CardBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  className?: string;
}

export const CardBadge: React.FC<CardBadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const variants = {
    primary: 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-rose-200',
    secondary: 'bg-gray-100 text-gray-700 dark:bg-slate-700 dark:text-slate-300',
    success: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300',
    warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300',
  };

  return (
    <span className={`
      inline-block px-2.5 py-1 
      text-xs font-semibold uppercase tracking-wide
      rounded-full
      ${variants[variant]}
      ${className}
    `}>
      {children}
    </span>
  );
};
