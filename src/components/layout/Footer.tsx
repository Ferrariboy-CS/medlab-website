import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/logo/medlab-logo.svg';

const footerLinks = {
  products: [
    { name: 'Medical Equipment', to: '/products?category=medical' },
    { name: 'Laboratory Equipment', to: '/products?category=laboratory' },
    { name: 'Educational Equipment', to: '/products?category=educational' },
    { name: 'First Aid & Safety', to: '/products?category=first-aid' },
  ],
  company: [
    { name: 'About Us', to: '/about' },
    { name: 'Vacancies', to: '/vacancies' },
    { name: 'Contact', to: '/contact' },
  ],
  support: [
    { name: 'Request a Quote', to: '/contact' },
    { name: 'Downloads', to: '/#resources' },
    { name: 'FAQs', to: '/contact' },
  ],
};

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/festushelao.shatipamba/',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="w-4 h-4"
        fill="currentColor"
      >
        <path d="M13.5 9H15V6h-1.5C11.57 6 10 7.57 10 9.5V11H8v3h2v5h3v-5h2.07L16 11h-3v-1.5c0-.55.45-1 1-1Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/helao_nafimane?igsh=MWJpZmY1anl4ZW56bA==',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="w-4 h-4"
        fill="currentColor"
      >
        <path d="M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm0 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm5 2.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm0 2a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 12 10.5Zm4.25-3.25a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75Z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/festus-helao-shatipamba',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="w-4 h-4"
        fill="currentColor"
      >
        <path d="M6.94 9.5V18H4V9.5h2.94ZM5.5 6A1.5 1.5 0 1 1 4 7.5 1.5 1.5 0 0 1 5.5 6ZM20 18h-3v-4.25c0-1.2-.45-1.9-1.39-1.9-.93 0-1.61.63-1.61 1.9V18h-3V9.5h2.86v1.13a3.3 3.3 0 0 1 2.94-1.26C18.63 9.37 20 10.6 20 13.1Z" />
      </svg>
    ),
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-200 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          {/* Logo */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="inline-flex items-center" aria-label="Medlab Home">
              <motion.img
                src={logo}
                alt="Medlab Services logo"
                className="h-12 w-auto"
                whileHover={{ scale: 1.02 }}
              />
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
              Trusted medical and laboratory solutions for Namibia since 1986.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full">
            <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-3">Stay informed</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
              Get stock availability, lead times, and sourcing updates from Medlab.
            </p>
            <form className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-slate-300 bg-white text-slate-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
            © {new Date().getFullYear()} Medlab Services cc. Crafted by ShatiScripts.
          </p>
          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700
                  flex items-center justify-center
                  bg-white dark:bg-slate-800
                  hover:border-red-500 hover:text-red-600 dark:hover:border-red-400 dark:hover:text-red-300
                  shadow-sm hover:shadow
                  transition-all duration-200 text-sm font-semibold
                "
                aria-label={social.name}
              >
                {React.cloneElement(social.icon, { className: 'w-5 h-5' })}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
