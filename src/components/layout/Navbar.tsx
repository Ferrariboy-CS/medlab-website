import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useQuote } from '../../contexts';
import { 
  Bars3Icon,
  XMarkIcon,
  ClipboardDocumentListIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { 
    name: 'Products', 
    to: '/products',
    children: [
      { name: 'Medical Equipment', to: '/products?category=medical' },
      { name: 'Laboratory Equipment', to: '/products?category=laboratory' },
      { name: 'Educational Equipment', to: '/products?category=educational' },
      { name: 'First Aid & Safety', to: '/products?category=first-aid' },
    ],
  },
  { name: 'Contact', to: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { itemCount, setIsOpen: setQuoteOpen } = useQuote();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          isScrolled
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-slate-700/50'
          : 'bg-transparent'
        }
      `}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.img
              src="/assets/medlab-logo.svg"
              alt="MedLab Services logo"
              width={140}
              height={48}
              className="h-10 w-auto md:h-12 drop-shadow-md"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-1
                    px-4 py-2 rounded-xl text-sm font-medium 
                    transition-all duration-200
                    ${
                      isActive
                      ? isScrolled
                        ? 'text-red-600 dark:text-red-300 bg-red-50 dark:bg-red-900/40'
                        : 'text-white bg-white/20'
                      : isScrolled
                        ? 'text-gray-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-300 hover:bg-gray-50 dark:hover:bg-slate-800'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }
                  `
                  }
                >
                  {item.name}
                  {item.children && (
                    <ChevronDownIcon
                      className={`
                      w-4 h-4 transition-transform duration-200
                      ${openDropdown === item.name ? 'rotate-180' : ''}
                    `}
                    />
                  )}
                </NavLink>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="
                        absolute top-full left-0 mt-2
                        w-56 py-2
                        bg-white dark:bg-slate-900
                        rounded-xl shadow-xl shadow-black/10 dark:shadow-black/30
                        border border-gray-100 dark:border-slate-800
                      "
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.to}
                          className="
                            block px-4 py-2.5
                            text-sm text-gray-700 dark:text-slate-300
                            hover:text-red-600 dark:hover:text-red-300
                            hover:bg-gray-50 dark:hover:bg-slate-800/60
                            transition-colors
                          "
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Search Button - Desktop */}
            <button
              className={`hidden md:flex p-2 rounded-xl transition-colors ${
                isScrolled
                  ? 'text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Search"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Quote Badge - Desktop */}
            <button
              onClick={() => setQuoteOpen(true)}
              className={`
                hidden md:flex items-center gap-2
                px-3 py-2 rounded-xl
                transition-all duration-200
                ${
                  isScrolled
                  ? 'text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800' 
                  : 'text-white hover:bg-white/10'
                }
              `}
            >
              <div className="relative">
                <ClipboardDocumentListIcon className="w-5 h-5" />
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="
                      absolute -top-2 -right-2
                      w-5 h-5
                      bg-red-600 text-white
                      text-xs font-bold
                      rounded-full
                      flex items-center justify-center
                    "
                  >
                    {itemCount > 9 ? '9+' : itemCount}
                  </motion.span>
                )}
              </div>
            </button>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button as="link" to="/contact" size="sm">
                Request a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                lg:hidden p-2 rounded-xl transition-colors
                ${
                  isScrolled
                  ? 'text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800' 
                  : 'text-white hover:bg-white/10'
                }
              `}
              aria-label="Toggle menu"
            >
              {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div
                className="
                py-4 border-t 
                border-gray-200/50 dark:border-slate-800/60
                bg-white/95 dark:bg-slate-950/95
                backdrop-blur-xl
                -mx-4 px-4
              "
              >
                <div className="flex flex-col space-y-1">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <NavLink
                        to={item.to}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `
                          block px-4 py-3 rounded-xl text-base font-medium
                          transition-colors
                          ${
                            isActive
                            ? 'text-red-600 dark:text-red-300 bg-red-50 dark:bg-red-900/40'
                            : 'text-gray-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-300 hover:bg-gray-50 dark:hover:bg-slate-800'
                          }
                        `
                        }
                      >
                        {item.name}
                      </NavLink>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navigation.length * 0.05 }}
                    className="pt-4"
                  >
                    <Button 
                      as="link" 
                      to="/contact" 
                      className="w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Request a Quote
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};
