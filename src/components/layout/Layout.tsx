import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { QuoteDrawer } from '../ui/QuoteDrawer';

export const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col theme-bg transition-colors duration-300">
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="
          sr-only focus:not-sr-only
          focus:absolute focus:top-4 focus:left-4 focus:z-[100]
          focus:px-4 focus:py-2
          focus:bg-red-600 focus:text-white
          focus:rounded-lg focus:outline-none
        "
      >
        Skip to main content
      </a>

      {/* Navbar */}
      <Navbar />

      {/* Main Content with Page Transitions */}
      <main id="main-content" className="flex-1 pt-16 md:pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Quote Drawer */}
      <QuoteDrawer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};
