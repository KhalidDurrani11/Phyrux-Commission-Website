
import React from 'react';
import type { PortfolioItem as PortfolioItemType } from '../types';

// Fix: Replaced global motion with import
import { motion } from 'framer-motion';

const PortfolioItem: React.FC<{ item: PortfolioItemType }> = ({ item }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="group relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg cursor-pointer"
        >
            <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                loading="lazy"
                decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 w-full">
                <motion.div 
                    className="absolute inset-0 bg-brand-red opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ clipPath: 'polygon(0 0, 0% 100%, 0 100%)' }}
                    whileHover={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                 />
                <p className="text-xs font-mono uppercase tracking-widest text-brand-red">{item.category}</p>
                <h3 className="text-lg font-bold text-white truncate">{item.title}</h3>
            </div>
        </motion.div>
    );
};

export default React.memo(PortfolioItem);