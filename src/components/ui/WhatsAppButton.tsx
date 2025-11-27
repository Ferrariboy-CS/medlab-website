import React from 'react';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '264611234567'; // Replace with actual number
  const message = encodeURIComponent('Hello, I would like to request a quote or get more information.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 whatsapp-pulse group"
      aria-label="Contact us on WhatsApp"
    >
      <ChatBubbleLeftRightIcon className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};

