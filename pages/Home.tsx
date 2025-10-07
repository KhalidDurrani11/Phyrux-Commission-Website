
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

// Fix: Replaced global ReactRouterDOM and motion with imports
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center text-center overflow-hidden p-4">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]"
          ></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,10,10,0.1),rgba(10,10,10,1))]"></div>
        </div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 leading-tight">
            Creative Solutions
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-gray-100 mt-2 animate-glow">
            That Speak for Themselves
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-gray-400 md:text-lg">
            We are Phyrux Commissions—a collective of digital artisans forging unforgettable brand experiences.
            From pixel-perfect designs to cinematic video, we craft the future of creative engagement.
          </p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link
              to="/portfolio"
              className="relative inline-block px-8 py-3 font-bold text-white uppercase tracking-widest text-lg group"
            >
              <span className="absolute inset-0 w-full h-full bg-brand-red transition-all duration-300 ease-out transform -skew-x-12 group-hover:bg-brand-blue group-hover:skew-x-0"></span>
              <span className="absolute inset-0 w-full h-full border-2 border-brand-red transition-all duration-300 ease-out transform skew-x-12 group-hover:border-brand-blue group-hover:skew-x-0"></span>
              <span className="relative">View Our Work</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Home;