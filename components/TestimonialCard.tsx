import React from 'react';
import type { Testimonial } from '../types';
import { motion } from 'framer-motion';
import { Quotes } from '@phosphor-icons/react';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative p-8 h-full bg-brand-gray border border-brand-gray/60 rounded-lg shadow-lg flex flex-col"
    >
        <Quotes size={40} className="text-brand-purple/50 absolute top-4 right-4" weight="fill" />
        <div className="flex-grow">
            <p className="text-brand-light/90 italic">"{testimonial.quote}"</p>
        </div>
        <div className="mt-6 border-t border-brand-gray/50 pt-4">
            <p className="font-bold text-brand-light uppercase tracking-wider">{testimonial.author}</p>
            <p className="text-sm text-brand-purple font-mono">{testimonial.company}</p>
        </div>
    </motion.div>
  );
};

export default React.memo(TestimonialCard);