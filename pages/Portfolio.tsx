
import React, { useState, useMemo } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { PORTFOLIO_ITEMS } from '../constants';
import PortfolioItem from '../components/PortfolioItem';

// Fix: Replaced global motion with import
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
    const categories = ['All', ...new Set(PORTFOLIO_ITEMS.map(item => item.category))];
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredItems = useMemo(() => {
        if (activeFilter === 'All') return PORTFOLIO_ITEMS;
        return PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);
    }, [activeFilter]);
    
    return (
        <AnimatedPage>
            <div className="container mx-auto py-16 px-4 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Mission Archive</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-400">A showcase of successfully executed operations and creative conquests.</p>
                </motion.div>

                <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 py-2 text-sm md:text-base font-mono uppercase tracking-widest border-2 rounded-sm transition-all duration-300
                                ${activeFilter === category ? 'bg-brand-blue text-brand-dark border-brand-blue' : 'border-gray-600 text-gray-400 hover:border-brand-blue hover:text-brand-blue'}
                            `}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {filteredItems.map(item => (
                        <PortfolioItem key={item.id} item={item} />
                    ))}
                </motion.div>
            </div>
        </AnimatedPage>
    );
};

export default Portfolio;