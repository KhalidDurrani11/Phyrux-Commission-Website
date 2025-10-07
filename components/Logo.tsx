
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3 group cursor-pointer">
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-500 group-hover:drop-shadow-[0_0_5px_#ff003c] group-hover:scale-110"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#444" />
            <stop offset="50%" stopColor="#999" />
            <stop offset="100%" stopColor="#444" />
          </linearGradient>
          <linearGradient id="logoAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff003c" />
            <stop offset="100%" stopColor="#a00020" />
          </linearGradient>
        </defs>
        <path
          d="M12 2L3 8V16L12 22L21 16V8L12 2Z"
          stroke="url(#logoGradient)"
          strokeWidth="1.5"
        />
        <path
          d="M12 2V12L21 8"
          stroke="url(#logoAccent)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 12L3 8"
          stroke="url(#logoGradient)"
          strokeWidth="1.5"
        />
        <path
          d="M12 12V22"
          stroke="url(#logoGradient)"
          strokeWidth="1.5"
        />
      </svg>
      <span className="font-black text-xl tracking-wider uppercase text-gray-300 group-hover:text-white transition-colors duration-300">
        Phyrux
      </span>
    </div>
  );
};

export default Logo;
