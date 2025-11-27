import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon } from '../ui/Icons';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '+264611234567',
  message = 'Hello! I would like to enquire about your products and services.',
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="
          fixed bottom-24 md:bottom-8 right-6 z-40
          w-14 h-14 md:w-16 md:h-16
          bg-[#25D366] hover:bg-[#20BD5A]
          rounded-full
          flex items-center justify-center
          shadow-lg shadow-emerald-500/30
          whatsapp-pulse
          transition-colors duration-200
        "
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
        
        {/* Tooltip */}
        <span className="
          absolute right-full mr-3
          bg-slate-800 dark:bg-slate-700 text-white 
          px-3 py-1.5 rounded-lg text-sm font-medium
          whitespace-nowrap
          opacity-0 group-hover:opacity-100
          pointer-events-none
          transition-opacity duration-200
          hidden md:block
        ">
          Chat with us
        </span>
      </motion.a>
    </AnimatePresence>
  );
};
