
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-gray/50 py-8 px-4 sm:px-8">
      <div className="container mx-auto text-center text-brand-light/60">
        <div className="flex justify-center space-x-6 mb-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-brand-light/80 hover:text-brand-purple transition-all duration-300 hover:scale-110 transform hover:drop-shadow-[0_0_8px_var(--tw-shadow-color)] shadow-brand-purple"
            >
              <link.icon size={28} weight="light" />
            </a>
          ))}
        </div>
        <p className="font-mono text-sm">
          &copy; {new Date().getFullYear()} Phyrux Commissions. All Rights Reserved.
        </p>
        <p className="font-mono text-xs mt-2">
          Forging the Future of Digital Creativity.
        </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);