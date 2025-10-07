
import React from 'react';
import type { TimelineEvent } from '../types';

// Fix: Replaced global motion with import
import { motion, useInView } from 'framer-motion';

interface TimelineItemProps {
    event: TimelineEvent;
    index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, index }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const isEven = index % 2 === 0;

    return (
        <div ref={ref} className="relative mb-12">
            <motion.div 
                className={`absolute left-1/2 top-4 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-brand-red bg-brand-dark transition-colors duration-500 ${isInView ? 'bg-brand-red' : ''}`}
            />
            <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`w-[calc(50%-2rem)] p-6 bg-brand-gray rounded-lg shadow-lg ${isEven ? 'mr-auto' : 'ml-auto'}`}
            >
                <div className="absolute top-3 w-4 h-4 bg-brand-gray transform rotate-45" style={isEven ? { right: '-8px' } : { left: '-8px' }}></div>
                <time className="text-brand-red font-mono text-lg font-bold">{event.year}</time>
                <h3 className="text-xl font-bold mt-2">{event.title}</h3>
                <p className="text-gray-400 mt-2 text-sm">{event.description}</p>
            </motion.div>
        </div>
    );
};

export default React.memo(TimelineItem);