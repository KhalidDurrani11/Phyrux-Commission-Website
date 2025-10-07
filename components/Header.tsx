import React, { useState } from 'react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

// Fix: Replaced global ReactRouterDOM and motion with imports
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = "relative font-mono uppercase tracking-widest text-sm text-brand-dark/80 dark:text-brand-light/90 hover:text-brand-blue transition-colors duration-300 px-2 py-1";
  const activeLinkClasses = "text-brand-blue";

  return (
    <header className="sticky top-0 z-50 py-4 px-4 sm:px-8 bg-white/80 dark:bg-brand-dark/80 backdrop-blur-lg border-b border-gray-200 dark:border-brand-gray/50">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
            <Logo />
        </NavLink>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
            >
              {({ isActive }) => (
                <span className="relative">
                  {isActive && (
                    <motion.span
                      layoutId="nav-bracket-left"
                      className="absolute -left-2 top-0 bottom-0 text-brand-blue"
                      initial={{ opacity: 0, x: 5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 5 }}
                    >
                      [
                    </motion.span>
                  )}
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-bracket-right"
                      className="absolute -right-2 top-0 bottom-0 text-brand-blue"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                    >
                      ]
                    </motion.span>
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
            <div className="hidden md:block">
                <ThemeToggle />
            </div>
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark dark:text-brand-light hover:text-brand-blue transition-colors">
                    {isMenuOpen ? <X size={32} /> : <List size={32} />}
                </button>
            </div>
        </div>
      </div>
       {/* Mobile Menu */}
       {isMenuOpen && (
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:hidden mt-4 bg-gray-100/90 dark:bg-brand-gray/80 backdrop-blur-lg rounded-lg p-4"
            >
                <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <NavLink
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) => `text-center py-2 rounded-md ${linkClasses} ${isActive ? 'bg-brand-blue/10 text-brand-blue' : ''}`}
                        >
                        {link.name}
                        </NavLink>
                    ))}
                     <div className="pt-4 border-t border-gray-200 dark:border-brand-gray/50 flex justify-center">
                        <ThemeToggle />
                    </div>
                </nav>
            </motion.div>
        )}
    </header>
  );
};

export default Header;