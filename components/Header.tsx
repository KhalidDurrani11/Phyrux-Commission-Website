import React, { useState } from 'react';
import Logo from './Logo';

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

  const linkClasses = "relative font-mono uppercase tracking-widest text-sm text-gray-300 hover:text-brand-blue transition-colors duration-300";
  const activeLinkClasses = "text-brand-blue";

  return (
    <header className="sticky top-0 z-50 py-4 px-4 sm:px-8 bg-brand-dark/80 backdrop-blur-lg border-b border-brand-gray/50">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
            <Logo />
        </NavLink>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-blue"
                      layoutId="underline"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-brand-blue transition-colors">
                {isMenuOpen ? <X size={32} /> : <List size={32} />}
            </button>
        </div>
      </div>
       {/* Mobile Menu */}
       {isMenuOpen && (
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:hidden mt-4 bg-brand-gray/80 backdrop-blur-lg rounded-lg p-4"
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
                </nav>
            </motion.div>
        )}
    </header>
  );
};

export default Header;