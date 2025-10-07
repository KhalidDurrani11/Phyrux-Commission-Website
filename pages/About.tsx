
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { TIMELINE_EVENTS } from '../constants';
import TimelineItem from '../components/TimelineItem';

// Fix: Replaced global motion with import
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto py-16 px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Our Story</h1>
          <p className="mt-4 max-w-3xl mx-auto text-brand-light/70">
            Born from a shared passion for gaming culture and cutting-edge design, Phyrux Commissions is more than a studio—it's an arsenal of creativity. We arm brands with the visual power to dominate their digital landscapes.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-brand-gray/50 transform -translate-x-1/2"></div>
            {TIMELINE_EVENTS.map((event, index) => (
                <TimelineItem key={index} event={event} index={index} />
            ))}
        </div>

      </div>
    </AnimatedPage>
  );
};

export default About;