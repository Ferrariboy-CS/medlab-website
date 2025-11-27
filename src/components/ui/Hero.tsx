import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from './Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  backgroundImage?: string;
  overlay?: boolean;
  size?: 'sm' | 'md' | 'lg';
  breadcrumbs?: { label: string; to?: string }[];
  pattern?: boolean;
  centered?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  overlay = true,
  size = 'lg',
  breadcrumbs,
  pattern = true,
  centered = false,
}) => {
  const heights = {
    sm: 'py-16 md:py-20',
    md: 'py-20 md:py-28',
    lg: 'py-28 md:py-40',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div
      className={`
        relative ${heights[size]} overflow-hidden
        bg-gradient-to-br from-slate-900 via-sky-900 to-blue-900
        dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
      `}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        {pattern && (
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        )}
        
        {/* Medical Cross Pattern */}
        <div className="absolute inset-0 pattern-medical opacity-30" />
      </div>

      {/* Overlay */}
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />
      )}

      <div className={`
        container mx-auto px-4 sm:px-6 lg:px-8 relative z-10
        ${centered ? 'text-center' : ''}
      `}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={centered ? 'max-w-3xl mx-auto' : 'max-w-4xl'}
        >
          {/* Breadcrumbs */}
          {breadcrumbs && (
            <motion.nav variants={itemVariants} className="mb-6">
              <ol className={`flex items-center space-x-2 text-sm text-sky-200/80 ${centered ? 'justify-center' : ''}`}>
                {breadcrumbs.map((crumb, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <svg className="w-4 h-4 mx-2 text-sky-300/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                    {crumb.to ? (
                      <Link 
                        to={crumb.to} 
                        className="hover:text-white transition-colors duration-200 hover:underline"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white font-medium">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </motion.nav>
          )}

          {/* Subtitle */}
          {subtitle && (
            <motion.p 
              variants={itemVariants}
              className="text-sky-300 font-semibold mb-4 text-lg tracking-wide uppercase"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-100 to-sky-200">
              {title}
            </span>
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl text-sky-100/90 leading-relaxed max-w-2xl"
              style={centered ? { margin: '1.5rem auto' } : undefined}
            >
              {description}
            </motion.p>
          )}

          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <motion.div 
              variants={itemVariants}
              className={`
                mt-10 flex flex-col sm:flex-row gap-4
                ${centered ? 'justify-center' : ''}
              `}
            >
              {primaryCta && (
                <Button 
                  as="link" 
                  to={primaryCta.to} 
                  size="lg"
                  className="shadow-2xl shadow-sky-500/20"
                >
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button 
                  as="link" 
                  to={secondaryCta.to} 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-900 to-transparent" />
    </div>
  );
};
