
import React, { useRef } from 'react';
import type { Service } from '../types';

// Fix: Replaced global motion with import
import { motion } from 'framer-motion';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        
        ref.current.style.transform = `perspective(1000px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
        if (!ref.current) return;
        ref.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative p-8 h-full bg-brand-gray border border-gray-800 rounded-lg shadow-lg overflow-hidden group"
            style={{ transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)' }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-1/2 h-1 bg-gradient-to-r from-brand-blue to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            
            <div className="relative z-10">
                <div className="mb-4">
                    <service.icon size={48} className="text-brand-blue drop-shadow-[0_0_8px_var(--tw-shadow-color)] shadow-brand-blue" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wide text-white">{service.title}</h3>
                <p className="mt-2 text-gray-400">{service.description}</p>
            </div>
        </motion.div>
    );
};

export default ServiceCard;