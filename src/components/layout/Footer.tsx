import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const footerLinks = {
  products: [
    { name: 'Medical Equipment', to: '/products?category=medical' },
    { name: 'Laboratory Equipment', to: '/products?category=laboratory' },
    { name: 'Educational Equipment', to: '/products?category=educational' },
    { name: 'First Aid & Safety', to: '/products?category=first-aid' },
  ],
  company: [
    { name: 'About Us', to: '/about' },
    { name: 'Solutions', to: '/solutions' },
    { name: 'Service & Support', to: '/service-support' },
    { name: 'Contact', to: '/contact' },
  ],
  support: [
    { name: 'Technical Support', to: '/service-support#technical' },
    { name: 'Request a Quote', to: '/contact#quote' },
    { name: 'Downloads', to: '/#resources' },
    { name: 'FAQs', to: '/service-support#faqs' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: 'F' },
  { name: 'LinkedIn', href: '#', icon: 'in' },
  { name: 'Twitter', href: '#', icon: 'X' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-900 dark:bg-slate-950 text-gray-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 pattern-medical" />
      </div>
      
      {/* Gradient Orb */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center space-x-3 mb-6 group">
              <motion.div 
                className="
                  w-12 h-12 
                  bg-gradient-to-br from-sky-500 to-blue-600 
                  rounded-xl flex items-center justify-center
                  shadow-lg shadow-sky-500/20
                  group-hover:shadow-xl group-hover:shadow-sky-500/30
                  transition-shadow
                "
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-white font-bold text-2xl">M</span>
              </motion.div>
              <span className="text-2xl font-bold text-white">Medlab Services</span>
            </Link>
            
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Trusted medical and laboratory solutions for Namibia since 1986. 
              Supplying hospitals, laboratories, educational institutions, and industry nationwide.
            </p>
            
            <div className="space-y-4">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-sky-950 transition-colors">
                  <MapPinIcon className="w-5 h-5 text-sky-500" />
                </div>
                <span>Windhoek, Namibia</span>
              </a>
              <a 
                href="tel:+264611234567"
                className="flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-sky-950 transition-colors">
                  <PhoneIcon className="w-5 h-5 text-sky-500" />
                </div>
                <span>+264 61 123 4567</span>
              </a>
              <a 
                href="mailto:info@medlabservices.com.na"
                className="flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-sky-950 transition-colors">
                  <EnvelopeIcon className="w-5 h-5 text-sky-500" />
                </div>
                <span>info@medlabservices.com.na</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500/50 group-hover:bg-sky-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500/50 group-hover:bg-sky-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500/50 group-hover:bg-sky-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4 text-sm">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-10 h-10 rounded-xl
                      bg-slate-800 hover:bg-sky-600
                      flex items-center justify-center
                      text-slate-400 hover:text-white
                      transition-all duration-200
                    "
                    aria-label={social.name}
                  >
                    <span className="font-bold text-sm">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 flex items-center gap-2">
            © {new Date().getFullYear()} Medlab Services Namibia. Made with 
            <HeartIcon className="w-4 h-4 text-red-500" /> 
            in Namibia
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
